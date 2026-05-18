#!/usr/bin/env python3
"""
CCEP FullStory Usage Analysis Script

Queries FullStory API for CCEP-specific session data, extracts pages visited,
events fired, session durations, and user activity patterns.

Usage:
    # Set your FullStory API key
    export FS_API_KEY="your-fullstory-api-key"

    # Run with defaults (last 30 days)
    python3 query_fullstory_ccep.py

    # Run with date range
    python3 query_fullstory_ccep.py --start 2026-02-01 --end 2026-04-30

    # Run with verbose output
    python3 query_fullstory_ccep.py --verbose

Output:
    ccep_usage_analysis/data/fullstory_ccep_sessions.json

This script is READ-ONLY: it only performs search and export operations
against the FullStory API. No data is modified or deleted.

API patterns are based on the session-explorer project at:
    /Users/ivokalaizicwp/Documents/waterplan/Q2-2026/session-explorer/
"""

import argparse
import gzip
import json
import os
import sys
import time
import urllib.parse
from collections import Counter, defaultdict
from datetime import datetime, timezone, date, timedelta
from pathlib import Path

try:
    import requests
except ImportError:
    print("ERROR: 'requests' package required. Install with: pip install requests")
    sys.exit(1)

# ---------------------------------------------------------------------------
# Configuration
# ---------------------------------------------------------------------------

BASE_URL = "https://api.fullstory.com"
CCEP_SEGMENT_NAME = "CCEP"
CCEP_COMPANY_NAME = "Coca-Cola | Europacific Partners (CCEP)"

# Output path (relative to this script's location)
SCRIPT_DIR = Path(__file__).resolve().parent
DATA_DIR = SCRIPT_DIR.parent / "data"
OUTPUT_FILE = DATA_DIR / "fullstory_ccep_sessions.json"

# Rate limiting (seconds between API calls)
RATE_LIMIT_SESSIONS = 0.2
RATE_LIMIT_SUMMARIES = 0.2
RATE_LIMIT_SEGMENT_POLL = 2.0
SEGMENT_POLL_MAX_ATTEMPTS = 30


def get_api_key() -> str:
    """Get FullStory API key from environment variable."""
    key = os.getenv("FS_API_KEY", "")
    if not key:
        print("ERROR: FS_API_KEY environment variable is not set.")
        print("Set it with: export FS_API_KEY='your-key-here'")
        sys.exit(1)
    return key


def make_headers(api_key: str) -> dict:
    """Build HTTP headers for FullStory API requests."""
    return {
        "Authorization": f"Basic {api_key}",
        "Content-Type": "application/json",
    }


# ---------------------------------------------------------------------------
# FullStory API Functions (read-only)
# ---------------------------------------------------------------------------

def list_segments(headers: dict) -> list[dict]:
    """
    List all FullStory segments (paginated).
    GET /segments/v1?limit=100
    """
    all_segments = []
    params = {"limit": 100}

    while True:
        resp = requests.get(f"{BASE_URL}/segments/v1", headers=headers, params=params)
        resp.raise_for_status()
        data = resp.json()
        all_segments.extend(data.get("segments", []))
        token = data.get("nextPaginationToken")
        if not token:
            break
        params["paginationToken"] = token

    return all_segments


def find_ccep_segment(headers: dict) -> dict | None:
    """Find the CCEP segment by name."""
    segments = list_segments(headers)
    for seg in segments:
        if seg.get("name") == CCEP_SEGMENT_NAME:
            return seg
    # Fallback: partial match
    for seg in segments:
        if "CCEP" in seg.get("name", "").upper():
            return seg
    return None


def export_segment_emails(segment_id: str, headers: dict, verbose: bool = False) -> list[str]:
    """
    Export segment users to get email addresses.
    POST /segments/v1/exports -> poll /operations/v1/{id} -> GET /search/v1/exports/{id}/results

    This is a read-only export operation.
    """
    if verbose:
        print(f"  Exporting segment {segment_id}...")

    # Start export
    resp = requests.post(
        f"{BASE_URL}/segments/v1/exports",
        headers=headers,
        json={
            "type": "TYPE_INDIVIDUAL",
            "segment_id": segment_id,
            "format": "FORMAT_JSON",
        },
    )
    resp.raise_for_status()
    operation_id = resp.json()["operationId"]

    if verbose:
        print(f"  Export operation started: {operation_id}")

    # Poll for completion
    for attempt in range(SEGMENT_POLL_MAX_ATTEMPTS):
        time.sleep(RATE_LIMIT_SEGMENT_POLL)
        op_resp = requests.get(
            f"{BASE_URL}/operations/v1/{operation_id}", headers=headers
        )
        op_resp.raise_for_status()
        op_data = op_resp.json()

        state = op_data.get("state", "")
        if state == "COMPLETED":
            export_id = op_data["results"]["searchExportId"]
            if verbose:
                print(f"  Export completed: {export_id}")
            break
        elif state == "FAILED":
            raise RuntimeError(
                f"Segment export failed: {op_data.get('error', 'unknown')}"
            )
        elif verbose and attempt % 5 == 0:
            print(f"  Waiting for export... (attempt {attempt + 1})")
    else:
        raise TimeoutError(
            f"Segment export timed out after {SEGMENT_POLL_MAX_ATTEMPTS} attempts"
        )

    # Download results
    results_resp = requests.get(
        f"{BASE_URL}/search/v1/exports/{export_id}/results", headers=headers
    )
    results_resp.raise_for_status()
    location = results_resp.json()["location"]

    raw = requests.get(location).content
    text = gzip.decompress(raw).decode("utf-8")

    emails = set()
    for line in text.strip().split("\n"):
        if not line.strip():
            continue
        for row in json.loads(line):
            email = row.get("Email", "")
            if email:
                emails.add(email)

    return sorted(emails)


def get_sessions_for_email(
    email: str, headers: dict, verbose: bool = False
) -> list[dict]:
    """
    Get all sessions for an email address.
    GET /sessions/v2?email={email}&limit=1000

    Read-only operation.
    """
    resp = requests.get(
        f"{BASE_URL}/sessions/v2",
        headers=headers,
        params={"email": email, "limit": 1000},
    )
    if resp.status_code != 200:
        if verbose:
            print(f"  WARNING: Failed to get sessions for {email}: HTTP {resp.status_code}")
        return []
    return resp.json().get("sessions", [])


def get_session_summary(
    user_id: str, session_id: str, headers: dict
) -> str:
    """
    Get AI-generated summary for a session.
    GET /v2/sessions/{userId:sessionId}/summary

    Read-only operation.
    """
    encoded = urllib.parse.quote(f"{user_id}:{session_id}", safe="")
    resp = requests.get(
        f"{BASE_URL}/v2/sessions/{encoded}/summary", headers=headers
    )
    if resp.status_code == 200:
        return resp.json().get("summary", "No summary available.")
    return f"Error {resp.status_code}"


def filter_sessions_by_date(
    sessions: list[dict], start: date, end: date
) -> list[dict]:
    """Filter sessions to a date range based on createdTime (unix timestamp)."""
    start_ts = int(
        datetime(start.year, start.month, start.day, tzinfo=timezone.utc).timestamp()
    )
    end_ts = int(
        datetime(
            end.year, end.month, end.day, 23, 59, 59, tzinfo=timezone.utc
        ).timestamp()
    )
    return [
        s
        for s in sessions
        if start_ts <= int(s.get("createdTime", 0)) <= end_ts
    ]


def compute_session_metadata(session: dict) -> dict:
    """Extract useful metadata from a raw FullStory session object."""
    created_ts = int(session.get("createdTime", 0))
    created_dt = (
        datetime.fromtimestamp(created_ts, tz=timezone.utc)
        if created_ts
        else None
    )

    # FullStory session objects may include these fields
    return {
        "session_id": session.get("sessionId", session.get("id", "")),
        "user_id": session.get("userId", ""),
        "created_time": created_dt.isoformat() if created_dt else None,
        "created_date": created_dt.strftime("%Y-%m-%d") if created_dt else None,
        "month": created_dt.strftime("%Y-%m") if created_dt else None,
        "fs_url": session.get("fsUrl", ""),
        "raw_created_time": created_ts,
    }


# ---------------------------------------------------------------------------
# Analysis Functions
# ---------------------------------------------------------------------------

def analyze_sessions(sessions_by_email: dict) -> dict:
    """Compute aggregate statistics from collected session data."""
    total_sessions = 0
    total_users = len(sessions_by_email)
    monthly_users = defaultdict(set)
    monthly_sessions = defaultdict(int)
    user_session_counts = {}

    for email, data in sessions_by_email.items():
        session_list = data.get("sessions", [])
        user_session_counts[email] = len(session_list)
        total_sessions += len(session_list)

        for sess in session_list:
            month = sess.get("month")
            if month:
                monthly_users[month].add(email)
                monthly_sessions[month] += 1

    # Build monthly MAU table
    monthly_mau = {}
    for month in sorted(monthly_users.keys()):
        monthly_mau[month] = {
            "mau": len(monthly_users[month]),
            "sessions": monthly_sessions[month],
            "avg_sessions_per_user": (
                round(monthly_sessions[month] / len(monthly_users[month]), 1)
                if monthly_users[month]
                else 0
            ),
        }

    # Top users by session count
    top_users = sorted(
        user_session_counts.items(), key=lambda x: -x[1]
    )[:20]

    return {
        "total_users": total_users,
        "total_sessions": total_sessions,
        "monthly_mau": monthly_mau,
        "top_users": [{"email": e, "sessions": c} for e, c in top_users],
    }


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

def main():
    parser = argparse.ArgumentParser(
        description="Query FullStory for CCEP usage data (read-only)"
    )
    parser.add_argument(
        "--start",
        type=str,
        default=None,
        help="Start date (YYYY-MM-DD). Default: 30 days ago.",
    )
    parser.add_argument(
        "--end",
        type=str,
        default=None,
        help="End date (YYYY-MM-DD). Default: today.",
    )
    parser.add_argument(
        "--verbose", "-v",
        action="store_true",
        help="Print detailed progress.",
    )
    parser.add_argument(
        "--skip-summaries",
        action="store_true",
        help="Skip fetching AI session summaries (faster, less data).",
    )
    parser.add_argument(
        "--output",
        type=str,
        default=None,
        help=f"Output file path. Default: {OUTPUT_FILE}",
    )
    args = parser.parse_args()

    # Parse dates
    today = date.today()
    start_date = (
        date.fromisoformat(args.start) if args.start else today - timedelta(days=30)
    )
    end_date = date.fromisoformat(args.end) if args.end else today

    output_path = Path(args.output) if args.output else OUTPUT_FILE

    print(f"CCEP FullStory Usage Analysis")
    print(f"Date range: {start_date} to {end_date}")
    print(f"Output: {output_path}")
    print()

    # Setup
    api_key = get_api_key()
    headers = make_headers(api_key)

    # Step 1: Find CCEP segment
    print("[1/4] Finding CCEP segment...")
    segment = find_ccep_segment(headers)
    if not segment:
        print("ERROR: CCEP segment not found in FullStory.")
        print("Available segments will be listed for debugging.")
        all_segs = list_segments(headers)
        for s in sorted(all_segs, key=lambda x: x.get("name", "")):
            print(f"  - {s.get('name', 'unnamed')} (id: {s.get('id', '?')})")
        sys.exit(1)

    segment_id = segment["id"]
    segment_name = segment.get("name", CCEP_SEGMENT_NAME)
    print(f"  Found: {segment_name} (id: {segment_id})")

    # Step 2: Export segment to get user emails
    print("[2/4] Exporting segment users...")
    emails = export_segment_emails(segment_id, headers, verbose=args.verbose)
    print(f"  Found {len(emails)} CCEP users")
    if args.verbose:
        for e in emails:
            print(f"    - {e}")

    # Step 3: Fetch sessions for each user
    print(f"[3/4] Fetching sessions for {len(emails)} users...")
    sessions_by_email = {}
    total_sessions_found = 0
    total_in_range = 0

    for i, email in enumerate(emails, 1):
        if args.verbose or i % 10 == 0:
            print(f"  [{i}/{len(emails)}] {email}...")

        raw_sessions = get_sessions_for_email(email, headers, verbose=args.verbose)
        time.sleep(RATE_LIMIT_SESSIONS)

        # Filter by date range
        filtered = filter_sessions_by_date(raw_sessions, start_date, end_date)
        total_sessions_found += len(raw_sessions)
        total_in_range += len(filtered)

        if not filtered:
            continue

        # Extract metadata for each session
        session_entries = []
        for sess in filtered:
            meta = compute_session_metadata(sess)

            # Optionally fetch summary
            summary = None
            if not args.skip_summaries and meta["user_id"] and meta["session_id"]:
                summary = get_session_summary(
                    meta["user_id"], meta["session_id"], headers
                )
                time.sleep(RATE_LIMIT_SUMMARIES)

            session_entries.append(
                {
                    **meta,
                    "email": email,
                    "company": CCEP_COMPANY_NAME,
                    "segment": CCEP_SEGMENT_NAME,
                    "summary": summary,
                }
            )

        sessions_by_email[email] = {
            "email": email,
            "total_sessions_all_time": len(raw_sessions),
            "sessions_in_range": len(filtered),
            "sessions": session_entries,
        }

    print(f"  Total sessions found (all time): {total_sessions_found}")
    print(f"  Sessions in date range: {total_in_range}")
    print(f"  Users with sessions in range: {len(sessions_by_email)}")

    # Step 4: Compute analytics and save
    print("[4/4] Computing analytics and saving...")
    analytics = analyze_sessions(sessions_by_email)

    output_data = {
        "metadata": {
            "query_date": datetime.now(timezone.utc).isoformat(),
            "date_range_start": str(start_date),
            "date_range_end": str(end_date),
            "segment_name": segment_name,
            "segment_id": segment_id,
            "total_emails_in_segment": len(emails),
            "summaries_included": not args.skip_summaries,
        },
        "analytics": analytics,
        "users": sessions_by_email,
    }

    # Ensure output directory exists
    output_path.parent.mkdir(parents=True, exist_ok=True)

    with open(output_path, "w") as f:
        json.dump(output_data, f, indent=2, default=str)

    print()
    print(f"Results saved to: {output_path}")
    print()
    print("=== Summary ===")
    print(f"Total CCEP users in segment: {len(emails)}")
    print(f"Users active in range: {len(sessions_by_email)}")
    print(f"Sessions in range: {total_in_range}")
    print()
    print("Monthly MAU:")
    for month, stats in sorted(analytics["monthly_mau"].items()):
        print(
            f"  {month}: {stats['mau']} users, "
            f"{stats['sessions']} sessions, "
            f"{stats['avg_sessions_per_user']} avg/user"
        )
    print()
    print("Top users:")
    for u in analytics["top_users"][:10]:
        print(f"  {u['email']}: {u['sessions']} sessions")


if __name__ == "__main__":
    main()
