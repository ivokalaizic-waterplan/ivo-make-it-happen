# CCEP Usage Analysis

Comprehensive analysis of Coca-Cola Europacific Partners (CCEP) usage of the Waterplan platform, mapping 98 business actions against platform capabilities, observed usage, and enablement status.

## Purpose

This analysis answers four questions for the COO and CS leadership:

1. **What could CCEP do?** (98-action taxonomy across 12 water management categories)
2. **What does Waterplan allow them to do?** (platform capability map from codebase analysis)
3. **What have they actually done?** (FullStory session data, Feb-Apr 2026)
4. **What are the gaps?** (gap analysis with prioritized recommendations)

## File Descriptions

| File | Description |
|------|-------------|
| `executive_summary.md` | COO-ready summary with findings, recommendations, and next actions |
| `action_taxonomy.md` | 98 business actions validated against frontend routes and backend endpoints |
| `platform_capability_map.csv` | Per-action map: route, component, endpoint, flag, role, analytics event |
| `ccep_enabled_capabilities.csv` | Per-capability CCEP enablement status (yes/unknown/likely_no) |
| `ccep_observed_usage.csv` | Observed usage data from FullStory (MAU, JTBD, alignment) |
| `ccep_action_gap_analysis.csv` | Gap analysis: per-action support, enablement, usage, gap type, recommendation |
| `technical_notes.md` | Data sources, methodology, queries, limitations |
| `scripts/.env.example` | Environment variables needed for data queries |
| `.gitignore` | Protects secrets and PII from version control |

## Key Findings

- **CCEP MAU tripled**: 14 (Feb) to 37 (Apr) monthly active users
- **All 3 licensed modules active**: Water Risk, Target Tracking, Water Stewardship
- **$232k ARR**: Target Tracking ($70k) + Water Risk ($12k) + Water Stewardship ($150k)
- **62 of 98 actions fully supported** by the platform
- **15 feature flags with unknown CCEP status** -- highest-priority data gap
- **8 business-critical actions not supported** -- supply chain risk is #1 gap
- **WUR Calculator confirmed enabled** -- Coca-Cola-specific feature with tutorial videos

## How to Extend This Analysis

### Step 1: Fill Feature Flag Gaps (Highest Priority)

Query CCEP's access control configuration:

```bash
# Requires WATERPLAN_BACKOFFICE_TOKEN
curl -H "Authorization: Bearer $WATERPLAN_BACKOFFICE_TOKEN" \
  "$WATERPLAN_API_BASE_URL/v1/backoffice/companies/coca-cola-euro-pacific/accessControl"
```

This returns the `AccessControlGroup` with `modules` (show/hide/lock per section) and `featureFlags` (boolean map). Update `ccep_enabled_capabilities.csv` with actual flag values.

### Step 2: Get Complete User and Site Inventory

```bash
# Sites
curl -H "Authorization: Bearer $WATERPLAN_API_TOKEN" \
  "$WATERPLAN_API_BASE_URL/v3/companies/coca-cola-euro-pacific/sites"

# Users
curl -H "Authorization: Bearer $WATERPLAN_API_TOKEN" \
  "$WATERPLAN_API_BASE_URL/v3/companies/coca-cola-euro-pacific/users"

# Roles
curl -H "Authorization: Bearer $WATERPLAN_API_TOKEN" \
  "$WATERPLAN_API_BASE_URL/v3/companies/coca-cola-euro-pacific/roles"
```

### Step 3: Update FullStory Usage Data

```bash
cd /Users/ivokalaizicwp/Documents/waterplan/Q2-2026/session-explorer

# Update date range in analyze_usage.py to include May 2026
# Then run:
python3 analyze_usage.py --fetch-only
python3 classify_sessions.py
python3 analyze_usage.py --analyze-only

# Filter results for CCEP
# In analysis_output/license_usage_analysis.csv, filter for company containing "CCEP"
```

### Step 4: Query Activity Logs (Requires VPN)

```sql
-- Connect to audit-db via Basti tunnel
SELECT domain, entity, event_type, COUNT(*) as event_count,
       COUNT(DISTINCT user_id) as unique_users
FROM activity_logs
WHERE company_id = 'coca-cola-euro-pacific'
  AND created_at >= '2026-02-01'
GROUP BY domain, entity, event_type
ORDER BY event_count DESC;
```

### Step 5: Regenerate Analysis

After collecting new data, update the CSV files and regenerate the executive summary using the methodology described in `technical_notes.md`.

## Data Sources

1. **Waterplan Frontend** (waterplan-frontend repo, Q1 2026 snapshot) -- route and component analysis
2. **Waterplan Backend** (waterplan-api repo, Q1 2026 snapshot) -- endpoint and data model analysis
3. **Session Explorer** (FullStory analysis tool) -- MAU, JTBD classification, known users
4. **Industry Knowledge** -- 98-action business taxonomy for water-intensive corporations

## Limitations

- Feature flag status for CCEP is unknown for 15 of 22 flags (requires Back Office API query)
- Usage data is JTBD-level, not feature-level (know which categories, not which specific actions)
- Only 2 of 37 MAU users are named (requires FullStory segment export)
- Analysis based on Q1 2026 code snapshot (may not reflect latest deployments)
- No live API calls or database queries were executed
- See `technical_notes.md` for complete limitations discussion
