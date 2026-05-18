# Technical Notes: CCEP Usage Analysis

**Date**: 2026-05-18
**Analyst**: Automated analysis via Claude Code

---

## Data Sources

### 1. Waterplan Frontend Repository (waterplan-frontend)

- **Location**: Local clone (Q1 2026 snapshot)
- **Framework**: React 18 SPA, Vite, React Router v6, TypeScript
- **What was analyzed**:
  - Route definitions in `src/router/index.tsx` (1251 lines, 80+ routes)
  - Feature flag definitions in `src/constants/FeatureFlags.ts` (22 flags)
  - Role definitions in `src/constants/Roles.ts` (7 roles)
  - Event tracking in `src/hooks/useEventTracker.ts` and `src/types/Events.ts` (100+ event actions)
  - Mitigation actions events in `src/features/MitigationActions/events/events.ts` (50+ events)
  - Access control logic in `src/services/access-control/index.ts`
  - FullStory initialization in `src/loaders/fullstory/index.tsx`
  - CCEP-specific references in WUR calculator hooks and risk framework config
- **Output**: `002-frontend-capabilities.md` (audit report)

### 2. Waterplan Backend Repository (waterplan-api)

- **Location**: Local clone (Q1 2026 snapshot)
- **Framework**: Express.js, TypeScript, tsyringe DI, DynamoDB + PostgreSQL (Knex)
- **What was analyzed**:
  - Route registration in `server/src/routes.ts` and `server/src/v3/routes.ts` (60+ domain modules)
  - Backoffice routes in `server/src/backoffice/routes.ts`
  - Access control in `server/src/v3/access-manager/` (feature flags, roles, policy groups)
  - Authentication/authorization middlewares
  - Data model entities (Company, User, Role, AccessControlGroup, ActivityLog)
  - Event types in `server/src/v3/shared/event.types.ts`
  - CCEP references in scripts (6+ scripts reference coca-cola-euro-pacific)
  - Module definitions in `server/src/constants/modules.ts`
- **Output**: `001-backend-capabilities.md` (audit report)

### 3. Session Explorer (FullStory Analysis Tool)

- **Location**: `/Users/ivokalaizicwp/Documents/waterplan/Q2-2026/session-explorer/`
- **Framework**: Python 3.11, Streamlit
- **What was analyzed**:
  - `analysis_output/license_usage_analysis.csv` -- CCEP MAU data for Feb-Apr 2026
  - `customers.json` -- Known CCEP user emails (tramberg@ccep.com, elena.fernandez@ccep.com)
  - `slack_channels.json` -- CCEP segment mapping (channel: 09-coca-cola-euro-pacific)
  - `license_data.csv` -- CCEP license structure ($232k ARR across 3 packages)
  - `analysis_cache/all_summaries.json` -- 4,502 sessions across 62 companies (CCEP sessions filterable)
  - `analysis_cache/classifications.json` -- JTBD classifications for 4,427 sessions
- **Output**: `002-session-explorer.md` (research report)

### 4. CCEP Water Action Taxonomy

- **Source**: Industry knowledge + Waterplan codebase analysis
- **Methodology**: 98 business actions identified across 12 categories based on what a water-intensive beverage company would need
- **Validation**: Each action cross-referenced against frontend routes and backend endpoints
- **Output**: `003-water-action-taxonomy.md` (research report)

### 5. Repo Structure Discovery

- **Source**: Directory analysis of both repositories
- **What was analyzed**: Build tools, routing, API patterns, database architecture, analytics instrumentation, CCEP code references
- **Output**: `001-repo-discovery.md` (research report)

---

## Methodology

### Platform Capability Mapping

1. **Route inventory**: All 80+ frontend routes were cataloged from `router/index.tsx`.
2. **Endpoint inventory**: All 200+ backend endpoints were cataloged from v3 and backoffice route files.
3. **Feature flag mapping**: Each of the 22 frontend flags was traced to the components/features it gates.
4. **Analytics event catalog**: All EventActions and MitigationActionsEvent enum values were extracted.
5. **Cross-reference**: Frontend routes were matched to backend endpoints to confirm full-stack support for each capability.

### Business Action Taxonomy

1. **Industry research**: 12 categories of water management activities identified for a beverage bottling company.
2. **Action enumeration**: 98 specific actions defined with user type, priority, and description.
3. **Support validation**: Each action matched against the platform capability map.
4. **Gap classification**: Actions classified as supported, partially supported, or not supported.

### Usage Analysis

1. **MAU extraction**: Monthly active user counts pulled from license_usage_analysis.csv for CCEP.
2. **JTBD classification**: Session summaries classified using regex patterns into 12 job categories.
3. **License alignment**: Relevant MAU calculated as percentage of users engaging with licensed features.
4. **User identification**: Known users cross-referenced from customers.json.

### Gap Analysis

1. **Cross-reference**: All 98 taxonomy actions mapped against platform support status, CCEP enablement, and observed usage.
2. **Gap classification**: Each action assigned a gap type (none, enabled_unused, not_enabled, not_supported, unknown).
3. **Recommendation**: Specific actions recommended per gap type.

---

## Key Queries and API Calls

### Queries That Were Executed

| Query | Source | Result |
|-------|--------|--------|
| CCEP company name lookup | customers.json | "Coca-Cola \| Europacific Partners (CCEP)" |
| CCEP company ID | Frontend codebase (useEnableLearnWurVideos.ts) | `coca-cola-euro-pacific` |
| CCEP Slack channel | slack_channels.json | `09-coca-cola-euro-pacific` |
| CCEP license packages | license_data.csv | Target Tracking ($70k), Water Risk ($12k), Water Stewardship ($150k) |
| CCEP MAU Feb-Apr 2026 | license_usage_analysis.csv | 14, 23, 37 |
| CCEP known users | customers.json | tramberg@ccep.com, elena.fernandez@ccep.com |
| Frontend routes | waterplan-frontend/src/router/index.tsx | 80+ routes |
| Backend endpoints | waterplan-api/server/src/v3/routes.ts | 200+ endpoints |
| Feature flags | waterplan-frontend/src/constants/FeatureFlags.ts | 22 flags defined |
| CCEP code references | Full codebase grep | 5 locations in frontend, 6+ scripts in backend |

### Queries That Need to Be Executed (Not Yet Run)

| Query | API/Source | Expected Result | Purpose |
|-------|-----------|-----------------|---------|
| CCEP access control config | `GET /v1/backoffice/companies/coca-cola-euro-pacific/accessControl` | AccessControlGroup with modules and featureFlags | Determine which flags are enabled |
| CCEP sites | `GET /v3/companies/coca-cola-euro-pacific/sites` | List of all CCEP sites | Count active vs. disabled sites |
| CCEP users | `GET /v3/companies/coca-cola-euro-pacific/users` | List of all provisioned users | Compare total vs. MAU |
| CCEP roles | `GET /v3/companies/coca-cola-euro-pacific/roles` | Custom role definitions | Understand permission structure |
| CCEP activity logs | `GET /v3/target-tracking/v2/coca-cola-euro-pacific/activity-log` | Target change history | Confirm target tracking usage |
| CCEP FullStory sessions | FullStory segment export for "CCEP" | All sessions with user emails | Complete user inventory and session analysis |
| CCEP EventBridge events | AWS EventBridge / CloudWatch query | Event counts by type | Definitive feature usage metrics |
| CCEP audit-db entries | SQL query on audit-db (requires VPN/Basti) | Activity log entries for coca-cola-euro-pacific | Comprehensive action history |

---

## Limitations

### Static Analysis Only

All platform capability assessments are based on static code analysis of the Q1 2026 snapshot repositories. We did not:
- Execute any API calls against the live Waterplan platform
- Run any database queries against DynamoDB or PostgreSQL
- Access the Waterplan Back Office UI
- Verify feature flags at runtime
- Test any features for correctness

### FullStory Data Constraints

- Session data covers Feb-Apr 2026 only (3 months)
- May 2026 data not included (would require running session-explorer pipeline)
- JTBD classification uses regex pattern matching (not exact feature tracking)
- Only 2 of 37 CCEP users are named in customers.json
- Per-user session counts not extracted for this analysis
- Session summaries are FullStory's AI-generated text (not raw event data)

### Feature Flag Uncertainty

15 of 22 feature flags have unknown status for CCEP. This is the single largest data gap. Resolving it requires one API call: `GET /v1/backoffice/companies/coca-cola-euro-pacific/accessControl`.

### Usage Granularity

We know JTBD-level usage (which broad categories are active) but not feature-level usage (which specific pages/actions are performed and how often). Feature-level data exists in:
1. FullStory session recordings and events
2. Backend EventBridge events
3. Audit-db activity logs

None of these were queried for this analysis.

### Taxonomy Scope

The 98-action taxonomy was designed for a generic water-intensive corporation and validated against the Waterplan codebase. It may not capture CCEP-specific workflows (e.g., Coca-Cola system shared services, CCEP-specific reporting requirements, internal ERP integration needs).

---

## File Inventory

### Research Reports (Input)

| File | Content |
|------|---------|
| `tmp/mux/20260518-1638-ccep-usage-analysis/research/001-repo-discovery.md` | Waterplan monorepo structure, frameworks, routing, analytics |
| `tmp/mux/20260518-1638-ccep-usage-analysis/research/002-session-explorer.md` | FullStory session-explorer tool analysis, CCEP data |
| `tmp/mux/20260518-1638-ccep-usage-analysis/research/003-water-action-taxonomy.md` | 98 business actions across 12 categories |
| `tmp/mux/20260518-1638-ccep-usage-analysis/audit/001-backend-capabilities.md` | 200+ backend endpoints, feature flags, permissions |
| `tmp/mux/20260518-1638-ccep-usage-analysis/audit/002-frontend-capabilities.md` | 80+ routes, user actions, analytics events |

### Deliverable Files (Output)

| File | Content |
|------|---------|
| `ccep_usage_analysis/action_taxonomy.md` | Validated taxonomy with route/endpoint cross-references |
| `ccep_usage_analysis/platform_capability_map.csv` | Per-action platform capability map |
| `ccep_usage_analysis/ccep_enabled_capabilities.csv` | Per-capability CCEP enablement status |
| `ccep_usage_analysis/ccep_observed_usage.csv` | Observed usage data from FullStory |
| `ccep_usage_analysis/ccep_action_gap_analysis.csv` | Gap analysis per business action |
| `ccep_usage_analysis/executive_summary.md` | COO-ready executive summary |
| `ccep_usage_analysis/technical_notes.md` | This file |
| `ccep_usage_analysis/README.md` | Methodology and rerun instructions |
| `ccep_usage_analysis/scripts/.env.example` | Environment variable template |
| `ccep_usage_analysis/.gitignore` | Git ignore rules |

---

## Reproducibility

To reproduce or extend this analysis:

1. **Update FullStory data**: Run the session-explorer pipeline with updated date ranges (see README.md).
2. **Query Back Office**: Execute the API calls listed above to fill in feature flag and site/user data gaps.
3. **Query audit-db**: Connect via Basti tunnel and query `activity_logs` table for `company_id = 'coca-cola-euro-pacific'`.
4. **Update codebase**: Pull latest waterplan-frontend and waterplan-api repos and re-run the route/endpoint/flag analysis.
5. **Re-run gap analysis**: Update the CSVs with new data and regenerate the executive summary.
