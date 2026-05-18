#!/bin/bash
# Fix energy targets: delete and recreate with types: ["energy"]
set -euo pipefail

API_BASE="https://api.waterplan.com/v3/target-tracking/v2"
TOKEN="$1"
COMPANY="demo-sales"

SCOPE1_METRIC="019e03a0-b29b-7001-8655-d5fe0ec2b24a"
ENERGY_METRIC="019e03a7-dfdb-7992-a752-2a668af57616"

SITES=(
  "019dcf64-153b-711b-a458-5bae30460865"
  "019dcf62-6e7d-711b-a458-3e860d718e3d"
  "019dcf60-fd86-711b-a458-01fc75ee6f76"
  "019dcf63-7b52-7009-b6d1-cb8b07e1d69f"
  "019dcf61-a402-7222-9712-11e47a1571d0"
)

INPUT_FILE="$(dirname "$0")/targets_bulk_upload.json"

echo "=== Step 1: Deleting incorrect targets ==="

# Delete Scope 1&2 company target
echo -n "DELETE Scope 1&2 (company) ... "
curl -s -o /dev/null -w "%{http_code}" -X DELETE \
  "$API_BASE/$COMPANY/targets/$SCOPE1_METRIC" \
  -H "Authorization: Bearer $TOKEN"
echo ""

# Delete Scope 1&2 site targets
for SITE in "${SITES[@]}"; do
  echo -n "DELETE Scope 1&2 (site=$SITE) ... "
  curl -s -o /dev/null -w "%{http_code}" -X DELETE \
    "$API_BASE/$COMPANY/sites/$SITE/targets/$SCOPE1_METRIC" \
    -H "Authorization: Bearer $TOKEN"
  echo ""
  sleep 0.3
done

# Delete Energy Intensity site targets (company one was NOT created by us - it already existed)
for SITE in "${SITES[@]}"; do
  echo -n "DELETE Energy Intensity (site=$SITE) ... "
  curl -s -o /dev/null -w "%{http_code}" -X DELETE \
    "$API_BASE/$COMPANY/sites/$SITE/targets/$ENERGY_METRIC" \
    -H "Authorization: Bearer $TOKEN"
  echo ""
  sleep 0.3
done

echo ""
echo "=== Step 2: Recreating with types: [\"energy\"] ==="

# Read targets from JSON and recreate only Scope 1&2 and Energy Intensity
SUCCESS=0
FAILED=0

for i in $(seq 0 $(( $(jq length "$INPUT_FILE") - 1 ))); do
  TARGET=$(jq ".[$i]" "$INPUT_FILE")
  METRIC_ID=$(echo "$TARGET" | jq -r '.metricId')

  # Only process Scope 1&2 and Energy Intensity metrics
  if [ "$METRIC_ID" != "$SCOPE1_METRIC" ] && [ "$METRIC_ID" != "$ENERGY_METRIC" ]; then
    continue
  fi

  SCOPE=$(echo "$TARGET" | jq -r '.scope')
  NAME=$(echo "$TARGET" | jq -r '.name')
  SITE_ID=$(echo "$TARGET" | jq -r '.siteId // empty')

  # Skip company Energy Intensity (already existed before our script)
  if [ "$SCOPE" = "company" ] && [ "$METRIC_ID" = "$ENERGY_METRIC" ]; then
    echo "SKIP: Energy Intensity (company) - already existed"
    continue
  fi

  # Build payload with types: ["energy"]
  PAYLOAD=$(echo "$TARGET" | jq '{
    metricId: .metricId,
    name: .name,
    comparisonOperator: .comparisonOperator,
    baseline: { value: .baselineValue, date: { year: .baselineYear } },
    target: { value: .targetValue, date: { year: .targetYear } },
    checkpoints: (.checkpoints // []),
    types: ["energy"]
  }')

  # Determine endpoint
  case "$SCOPE" in
    company)
      URL="$API_BASE/$COMPANY/targets"
      LABEL="company"
      ;;
    site)
      URL="$API_BASE/$COMPANY/sites/$SITE_ID/targets"
      LABEL="site=$SITE_ID"
      ;;
  esac

  echo -n "CREATE $NAME ($LABEL) ... "

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
    ERROR_MSG=$(echo "$HTTP_BODY" | jq -r '.errors[0].message // .message // .' 2>/dev/null || echo "$HTTP_BODY")
    echo "FAILED ($HTTP_CODE) - $ERROR_MSG"
    FAILED=$((FAILED + 1))
  fi

  sleep 0.3
done

echo ""
echo "=== Results ==="
echo "Recreated: $SUCCESS"
echo "Failed:    $FAILED"
