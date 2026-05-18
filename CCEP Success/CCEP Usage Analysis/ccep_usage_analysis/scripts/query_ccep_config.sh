#!/usr/bin/env bash
# query_ccep_config.sh
#
# Shell wrapper to run the CCEP config query script and save results.
#
# Usage:
#   export WATERPLAN_BACKOFFICE_TOKEN="your-token-here"
#   ./ccep_usage_analysis/scripts/query_ccep_config.sh
#
# Optional:
#   export WATERPLAN_API_BASE_URL="https://api.waterplan.com"

set -euo pipefail

# ---------------------------------------------------------------------------
# Resolve paths
# ---------------------------------------------------------------------------
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "${SCRIPT_DIR}/../.." && pwd)"
DATA_DIR="${PROJECT_ROOT}/ccep_usage_analysis/data"
TS_SCRIPT="${SCRIPT_DIR}/query_ccep_config.ts"
OUTPUT_FILE="${DATA_DIR}/ccep_config_raw.json"

# ---------------------------------------------------------------------------
# Pre-flight checks
# ---------------------------------------------------------------------------
echo "=== CCEP Config Query ==="
echo ""

# Check required env vars
if [[ -z "${WATERPLAN_BACKOFFICE_TOKEN:-}" ]]; then
  echo "ERROR: WATERPLAN_BACKOFFICE_TOKEN is not set."
  echo ""
  echo "  export WATERPLAN_BACKOFFICE_TOKEN='your-admin-jwt-token'"
  echo ""
  exit 1
fi

echo "API Base URL: ${WATERPLAN_API_BASE_URL:-https://api.waterplan.com (default)}"
echo "Token present: yes (${#WATERPLAN_BACKOFFICE_TOKEN} chars)"
echo ""

# Check TypeScript runner availability
TS_RUNNER=""
if command -v tsx &>/dev/null; then
  TS_RUNNER="tsx"
elif command -v ts-node &>/dev/null; then
  TS_RUNNER="ts-node"
elif command -v npx &>/dev/null; then
  # Fall back to npx tsx
  TS_RUNNER="npx tsx"
else
  echo "ERROR: No TypeScript runner found."
  echo "  Install one of: tsx, ts-node, or ensure npx is available."
  exit 1
fi

echo "TypeScript runner: ${TS_RUNNER}"
echo "Script: ${TS_SCRIPT}"
echo "Output: ${OUTPUT_FILE}"
echo ""

# Verify script exists
if [[ ! -f "${TS_SCRIPT}" ]]; then
  echo "ERROR: TypeScript script not found at: ${TS_SCRIPT}"
  exit 1
fi

# Ensure output directory exists
mkdir -p "${DATA_DIR}"

# ---------------------------------------------------------------------------
# Execute
# ---------------------------------------------------------------------------
echo "Running CCEP config query..."
echo ""

# Run the TS script; stdout goes to file, stderr to terminal
${TS_RUNNER} "${TS_SCRIPT}" > "${OUTPUT_FILE}" 2>&1 || {
  EXIT_CODE=$?
  echo ""
  echo "ERROR: Script exited with code ${EXIT_CODE}"
  # If partial output was written, show it
  if [[ -s "${OUTPUT_FILE}" ]]; then
    echo "Partial output saved to: ${OUTPUT_FILE}"
  fi
  exit ${EXIT_CODE}
}

# ---------------------------------------------------------------------------
# Summary
# ---------------------------------------------------------------------------
echo ""
echo "=== Results ==="

if [[ ! -s "${OUTPUT_FILE}" ]]; then
  echo "WARNING: Output file is empty."
  exit 1
fi

FILE_SIZE=$(wc -c < "${OUTPUT_FILE}" | tr -d ' ')
echo "Output saved to: ${OUTPUT_FILE} (${FILE_SIZE} bytes)"
echo ""

# Print a quick summary from the JSON metadata
if command -v jq &>/dev/null; then
  echo "--- Metadata ---"
  jq '._metadata' "${OUTPUT_FILE}" 2>/dev/null || true
  echo ""

  ERRORS=$(jq '.errors | length' "${OUTPUT_FILE}" 2>/dev/null || echo "?")
  echo "Errors: ${ERRORS}"

  if [[ "${ERRORS}" != "0" && "${ERRORS}" != "?" ]]; then
    echo ""
    echo "--- Failed Endpoints ---"
    jq -r '.errors[] | "  \(.endpoint): \(.error)"' "${OUTPUT_FILE}" 2>/dev/null || true
  fi

  echo ""
  echo "--- Data Keys Present ---"
  echo "  Backoffice:"
  jq -r '.backoffice | to_entries[] | "    \(.key): \(if .value == null then "null" elif (.value | type) == "array" then "\(.value | length) items" elif (.value | type) == "object" then "object" else .value end)"' "${OUTPUT_FILE}" 2>/dev/null || true
  echo "  V3 API:"
  jq -r '.v3Api | to_entries[] | "    \(.key): \(if .value == null then "null" elif (.value | type) == "array" then "\(.value | length) items" elif (.value | type) == "object" then "object" else .value end)"' "${OUTPUT_FILE}" 2>/dev/null || true
else
  echo "(Install jq for a prettier summary)"
  echo ""
  # Fallback: show first/last lines
  head -20 "${OUTPUT_FILE}"
  echo "..."
fi

echo ""
echo "Done. Full results at: ${OUTPUT_FILE}"
