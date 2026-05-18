#!/bin/bash
# Bulk Target Creator for Waterplan API
# Usage: ./bulk_create_targets.sh <bearer_token>

set -euo pipefail

API_BASE="https://api.waterplan.com/v3/target-tracking/v2"
INPUT_FILE="$(dirname "$0")/targets_bulk_upload.json"
TOKEN="$1"

if [ -z "$TOKEN" ]; then
  echo "Usage: $0 <bearer_token>"
  echo "  Pass the token WITHOUT the 'Bearer ' prefix"
  exit 1
fi

TOTAL=$(jq length "$INPUT_FILE")
echo "=== Bulk Target Creator ==="
echo "Found $TOTAL targets to create"
echo ""

SUCCESS=0
FAILED=0
ERRORS=""

for i in $(seq 0 $((TOTAL - 1))); do
  TARGET=$(jq ".[$i]" "$INPUT_FILE")

  SCOPE=$(echo "$TARGET" | jq -r '.scope')
  COMPANY_ID=$(echo "$TARGET" | jq -r '.companyId')
  METRIC_ID=$(echo "$TARGET" | jq -r '.metricId')
  NAME=$(echo "$TARGET" | jq -r '.name')
  SITE_ID=$(echo "$TARGET" | jq -r '.siteId // empty')
  SITE_GROUP_ID=$(echo "$TARGET" | jq -r '.siteGroupId // empty')

  # Build the API payload: transform flat fields into nested structure the API expects
  PAYLOAD=$(echo "$TARGET" | jq '{
    metricId: .metricId,
    name: .name,
    comparisonOperator: .comparisonOperator,
    baseline: { value: .baselineValue, date: { year: .baselineYear } },
    target: { value: .targetValue, date: { year: .targetYear } },
    checkpoints: (.checkpoints // [])
  }')

  # Determine endpoint
  case "$SCOPE" in
    company)
      URL="$API_BASE/$COMPANY_ID/targets"
      LABEL="company"
      ;;
    site)
      URL="$API_BASE/$COMPANY_ID/sites/$SITE_ID/targets"
      LABEL="site=$SITE_ID"
      ;;
    site-group)
      URL="$API_BASE/$COMPANY_ID/site-groups/$SITE_GROUP_ID/targets"
      LABEL="site-group=$SITE_GROUP_ID"
      ;;
    *)
      echo "[$((i + 1))/$TOTAL] SKIP - Unknown scope: $SCOPE"
      FAILED=$((FAILED + 1))
      continue
      ;;
  esac

  echo -n "[$((i + 1))/$TOTAL] Creating: $NAME ($LABEL) ... "

  HTTP_RESPONSE=$(curl -s -w "\n%{http_code}" \
    -X POST "$URL" \
    -H "Authorization: Bearer $TOKEN" \
    -H "Content-Type: application/json" \
    -d "$PAYLOAD")

  HTTP_BODY=$(echo "$HTTP_RESPONSE" | sed '$d')
  HTTP_CODE=$(echo "$HTTP_RESPONSE" | tail -1)

  if [ "$HTTP_CODE" -ge 200 ] && [ "$HTTP_CODE" -lt 300 ]; then
    echo "OK ($HTTP_CODE)"
    SUCCESS=$((SUCCESS + 1))
  else
    echo "FAILED ($HTTP_CODE)"
    ERROR_MSG=$(echo "$HTTP_BODY" | jq -r '.message // .error // .' 2>/dev/null || echo "$HTTP_BODY")
    ERRORS="$ERRORS\n  [$((i + 1))] $NAME ($LABEL): $HTTP_CODE - $ERROR_MSG"
    FAILED=$((FAILED + 1))
  fi

  # Small delay to avoid rate limiting
  sleep 0.3
done

echo ""
echo "=== Results ==="
echo "Total:   $TOTAL"
echo "Success: $SUCCESS"
echo "Failed:  $FAILED"

if [ -n "$ERRORS" ]; then
  echo ""
  echo "Errors:"
  echo -e "$ERRORS"
fi
