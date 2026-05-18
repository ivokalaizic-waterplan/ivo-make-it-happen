# CCEP Water Management Action Taxonomy

> Cross-referenced analysis of 98 business actions mapped against Waterplan platform capabilities.
> Data sources: codebase route analysis, frontend capabilities audit, backend endpoint inventory.
> Date: 2026-05-18

## Methodology

Each action from the original taxonomy (003-water-action-taxonomy.md) has been validated against:
1. **Frontend routes** (002-frontend-capabilities.md): Does a UI page/component exist?
2. **Backend endpoints** (001-backend-capabilities.md): Does an API endpoint exist?
3. **Feature flags**: Is the capability gated behind a flag?
4. **CCEP relevance**: Does this action align with CCEP's known licenses (Target Tracking, Water Risk, Water Stewardship)?

### Support Status Legend
- **Supported**: Both frontend route and backend endpoint exist; functionality is complete.
- **Partially Supported**: Feature exists but with gaps (e.g., no export, limited filtering, requires manual workaround).
- **Not Supported**: No platform functionality exists for this action.

### Confidence Legend
- **Confirmed**: Verified via code inspection of both frontend and backend.
- **Inferred**: Functionality likely exists based on route/endpoint patterns but not fully traced.
- **Unknown**: Cannot determine from codebase alone; requires runtime/config validation.

---

## A. Understanding Water Risk (12 actions)

| # | Action | Priority | Support Status | Confidence | Route | Endpoint | Feature Flag | Notes |
|---|--------|----------|----------------|------------|-------|----------|--------------|-------|
| A1 | View site-level water risk score | Critical | Supported | Confirmed | `app/monitor/site-details` | `GET /v3/rf-core/.../indicators-scores` | None | Core risk framework feature. CCEP has custom `coca-cola-framework` with editable weights. |
| A2 | Review basin-level risk indicators | Critical | Supported | Confirmed | `app/monitor/site-details` | `GET /v3/rf-core/.../indicators-scores`, `GET /v3/risk-framework/hazards-indicators-review/:siteId` | None | Detailed indicator breakdown available per site. |
| A3 | Compare risk across sites/regions | Critical | Supported | Confirmed | `app/monitor/risks-by-site`, `app/monitor/global-risks-map` | `GET /v3/companies/:companyId/sites`, risk-score APIs | None | Both map and tabular views available. |
| A4 | Understand regulatory risk | Critical | Partially Supported | Inferred | `app/monitor/site-details` | Risk framework indicators | None | Regulatory indicators exist within the risk framework but no dedicated regulatory permit tracking module. Gap: no permit renewal calendar or jurisdiction-specific compliance tracking. |
| A5 | Review physical risk - scarcity | Critical | Supported | Confirmed | `app/monitor/site-details` | Risk framework APIs | None | Water stress indicators part of core risk framework. |
| A6 | Review physical risk - flooding | Important | Supported | Confirmed | `app/monitor/site-details` | Risk framework APIs | None | Flood risk indicators included. |
| A7 | Review physical risk - water quality | Important | Supported | Confirmed | `app/monitor/site-details` | Risk framework APIs | None | Water quality indicators included. |
| A8 | Review reputational risk | Important | Supported | Confirmed | `app/monitor/media-analysis` | `GET /v3/companies/:companyId/reputational-engine/sites`, `POST .../reputational-news/search` | `enable_media_analysis`, `reputational_engine` | Feature-flagged. Requires flags to be enabled for CCEP. |
| A9 | View risk future projections | Important | Supported | Confirmed | `app/monitor/future-projections` | `POST /v3/companies/:companyId/future-projections`, `GET /v3/climate-change-projections/...` | `enable_future_projections` | Feature-flagged. Climate scenarios for 2030/2040/2050. |
| A10 | Review supply and demand balance | Important | Supported | Confirmed | `app/monitor/reported-supply-demand` | Reported supply-demand APIs | None | Dedicated section in Monitor module. |
| A11 | View hydrometeorological data | Nice-to-have | Supported | Confirmed | `app/monitor/hydrometeorology` | `GET /v3/companies/:companyId/sites/:siteId/meteorology/era5` | None | ERA5 meteorological data available. |
| A12 | Run site prioritization ranking | Critical | Supported | Confirmed | `app/monitor/site-prioritization` | `GET/PUT /v3/companies/:companyId/site-prioritization`, snapshot and export endpoints | None | Configurable ranking with export capability. |

**Category Summary**: 11 Supported, 1 Partially Supported, 0 Not Supported. Strong coverage. Two features (A8, A9) require feature flags.

---

## B. Site Information Management (8 actions)

| # | Action | Priority | Support Status | Confidence | Route | Endpoint | Feature Flag | Notes |
|---|--------|----------|----------------|------------|-------|----------|--------------|-------|
| B1 | View site profile | Critical | Supported | Confirmed | `app/monitor/site-details`, `app/settings/company/sites/:siteId` | `GET /v3/companies/:companyId/sites/:siteId` | None | Comprehensive site profile with location, basin, water sources. |
| B2 | Edit site profile details | Important | Partially Supported | Inferred | `app/settings/company/sites/:siteId` | Via Back Office `PUT /v1/backoffice/companies/:companyId/sites/:siteId` | None | Site editing is primarily a Back Office operation. Client-side editing limited to settings views. |
| B3 | Update site location/coordinates | Nice-to-have | Partially Supported | Inferred | `app/settings/company/sites/:siteId` | Back Office site update | None | Coordinate updates trigger basin re-mapping. Likely requires admin/Back Office action. |
| B4 | Manage site water sources | Critical | Partially Supported | Inferred | `app/monitor/site-details` | Water balance node APIs | None | Water sources defined through water balance configuration, not a dedicated "sources" editor. |
| B5 | Configure water infrastructure | Important | Not Supported | Confirmed | None | None | None | No dedicated infrastructure documentation module. Water balance nodes provide partial coverage but lack infrastructure-level detail (tanks, treatment plants, pipe networks). |
| B6 | Manage site groupings | Important | Partially Supported | Confirmed | `app/settings/company/sites` | Site groups APIs, `enable_default_site_groups_categories` | `enable_default_site_groups_categories` | Site groups exist but management UX may be limited. Feature flag controls default categories. |
| B7 | View site on global map | Important | Supported | Confirmed | `app/monitor/global-risks-map` | Maps APIs | None | Interactive Leaflet map with site markers. |
| B8 | Manage cross-mapping overlays | Nice-to-have | Supported | Confirmed | `app/monitor/cross-mapping` | `GET /v3/companies/:companyId/cross-mapping` | None | Cross-mapping visualization available. |

**Category Summary**: 3 Supported, 4 Partially Supported, 1 Not Supported.

---

## C. Water Data & Accounting (14 actions)

| # | Action | Priority | Support Status | Confidence | Route | Endpoint | Feature Flag | Notes |
|---|--------|----------|----------------|------------|-------|----------|--------------|-------|
| C1 | Enter water withdrawal data by source | Critical | Supported | Confirmed | `app/metrics/water-analytics` | `GET/POST /v3/.../customer-water-accounting` | None | Multi-step upload flow with accounting preview. |
| C2 | Enter water discharge data by destination | Critical | Supported | Confirmed | `app/metrics/water-analytics` | Same as C1 | None | Part of the water accounting data entry flow. |
| C3 | Enter water consumption/reuse data | Critical | Supported | Confirmed | `app/metrics/water-analytics` | Same as C1 | None | Consumption and reuse captured in water balance. |
| C4 | Upload meter readings | Critical | Supported | Confirmed | `app/metrics/meters/readings-upload` | `water-meters` upload APIs | None | Dedicated upload page with file import. |
| C5 | Review water balance | Critical | Supported | Confirmed | `app/metrics/water-balance` | `GET /v3/water-balance/.../water-balance`, diagram endpoint | None | Visual water balance diagram with node detail. |
| C6 | Track water efficiency metrics | Critical | Supported | Confirmed | `app/metrics/water-analytics`, `app/responses/target-tracking` | Water analytics + target tracking APIs | None | Water intensity tracked through targets and analytics dashboards. |
| C7 | Validate data quality | Important | Partially Supported | Inferred | `app/metrics/water-analytics` | Customer water accounting preview APIs | None | Preview/validation step exists in upload flow but no dedicated data quality dashboard with anomaly detection. |
| C8 | Investigate data anomalies | Important | Partially Supported | Inferred | `app/metrics/water-analytics` | Water analytics APIs | None | Analytics dashboards show trends but no automated anomaly detection or drill-down investigation tool. |
| C9 | Enter production volume data | Critical | Supported | Confirmed | `app/metrics/production` | `POST /v3/production/.../uploads`, product types APIs | None | Production data entry with type differentiation. |
| C10 | Upload production data in bulk | Important | Supported | Confirmed | `app/metrics/production/upload` | Production upload APIs | None | File upload with sheet selection and review. |
| C11 | Upload utility bills | Important | Supported | Confirmed | `app/metrics/utility-bills/upload` | `POST /v3/utility-bills/:companyId/bills` | None | AI-powered extraction from uploaded bill documents. |
| C12 | Manage utility bills registry | Important | Supported | Confirmed | `app/metrics/utility-bills/registry` | `GET /v3/utility-bills/:companyId/bills` | None | Searchable registry with per-bill actions. |
| C13 | Configure water meters | Important | Partially Supported | Confirmed | `app/tooling/water-meters/manage-meters` (internal) | `GET/POST/PUT/DELETE /v3/water-meters/.../meters` | None | Meter management exists but in Internal Tooling (not customer-facing). CCEP cannot self-service meter configuration. |
| C14 | View real-time meter data (IoT) | Nice-to-have | Partially Supported | Inferred | `app/tooling/iot-devices/dashboard` (internal) | Water meters readings APIs | None | IoT dashboard exists but in Internal Tooling. Real-time view depends on IoT device integration status. |

**Category Summary**: 9 Supported, 5 Partially Supported, 0 Not Supported. Data entry is strong; gaps are in self-service meter config and anomaly detection.

---

## D. Targets & Performance (10 actions)

| # | Action | Priority | Support Status | Confidence | Route | Endpoint | Feature Flag | Notes |
|---|--------|----------|----------------|------------|-------|----------|--------------|-------|
| D1 | Set water reduction targets | Critical | Supported | Confirmed | `app/responses/water-targets` | `POST /v3/target-tracking/v2/:companyId/targets` | None | Full target creation with baseline, target year, and values. |
| D2 | Set energy reduction targets | Important | Supported | Confirmed | `app/responses/energy-targets` | Same target tracking APIs | None | Energy targets supported alongside water targets. |
| D3 | Define target checkpoints | Important | Supported | Confirmed | `app/responses/target-tracking` | Target checkpoint APIs | `enable_target_checkpoints` | Feature-flagged. Annual/quarterly interim milestones. |
| D4 | Track progress against targets | Critical | Supported | Confirmed | `app/responses/target-tracking` | `GET /v3/target-tracking/v2/:companyId/targets/summary` | None | Dashboard with actual vs. target trajectory visualization. |
| D5 | Compare performance across sites | Critical | Partially Supported | Inferred | `app/responses/target-tracking` | Target summary APIs with site/site-group scope | None | Scope selector allows site-level and site-group views, but no dedicated cross-site comparison table. |
| D6 | Monitor water KPIs | Critical | Supported | Confirmed | `app/metrics/water-analytics`, `app/responses/target-tracking` | Water analytics + target APIs | None | KPIs displayed across analytics and target dashboards. |
| D7 | Benchmark against industry/peers | Nice-to-have | Not Supported | Confirmed | None | None | None | No benchmarking data or peer comparison feature in the platform. |
| D8 | Use WUR calculator | Important | Supported | Confirmed | `app/responses/target-tracking` (WUR tab) | WUR calculation APIs | `enable_wur_calculator` | **Coca-Cola-specific feature**. Explicitly built for CCEP. Includes tutorial videos gated to `coca-cola-euro-pacific`. |
| D9 | View target activity history | Nice-to-have | Supported | Confirmed | `app/responses/target-tracking` (activity log) | `GET /v3/target-tracking/v2/:companyId/activity-log` | `enable_target_alerts` | Activity log with change history. Feature-flagged with target alerts. |
| D10 | Simulate target scenarios | Important | Supported | Confirmed | `app/responses/target-tracking` (scenarios) | `GET /v3/target-tracking/v2/:companyId/scenarios` | None | Evolution charts, gap analysis, and what-if scenario views. |

**Category Summary**: 8 Supported, 1 Partially Supported, 1 Not Supported. Target tracking is a strength. WUR calculator is CCEP-specific.

---

## E. Action Plans & Mitigation (11 actions)

| # | Action | Priority | Support Status | Confidence | Route | Endpoint | Feature Flag | Notes |
|---|--------|----------|----------------|------------|-------|----------|--------------|-------|
| E1 | View recommended mitigation actions | Critical | Supported | Confirmed | `app/monitor/mitigation-actions` | `GET /v3/companies/:companyId/wmp/actions` | None | Full action list with table and Gantt views. |
| E2 | Create a new mitigation action | Critical | Supported | Confirmed | `app/monitor/mitigation-actions` | `POST /v3/companies/:companyId/wmp/actions` | None | Manual creation via modal form. Event: `wmp-action-created-manual`. |
| E3 | Assign responsibility for an action | Critical | Supported | Confirmed | `app/monitor/mitigation-actions` (side panel) | `PATCH /v3/companies/:companyId/wmp/actions/:actionId` | None | Assignee field in action edit panel. |
| E4 | Set action priority and deadlines | Important | Supported | Confirmed | `app/monitor/mitigation-actions` (side panel) | Same as E3 | None | Priority and deadline fields available. |
| E5 | Track action implementation status | Critical | Supported | Confirmed | `app/monitor/mitigation-actions` | Same as E3 | None | Status lifecycle: to be defined, to be started, in progress, completed, on hold. Event: `wmp-action-status-changed`. |
| E6 | Break actions into subtasks | Important | Supported | Confirmed | `app/monitor/mitigation-actions` (Plan tab) | `POST/PATCH/DELETE /v3/.../subtasks` | None | Full subtask CRUD with status tracking. |
| E7 | Add comments to subtasks | Nice-to-have | Supported | Confirmed | `app/monitor/mitigation-actions` (Plan tab) | `POST/DELETE /v3/.../subtasks/:subtaskId/comments` | None | Comment thread per subtask. |
| E8 | Attach evidence to actions | Important | Supported | Confirmed | `app/monitor/mitigation-actions` (Evidence tab) | `POST/DELETE /v3/.../actions/:actionId/evidences` | None | File upload for evidence documentation. |
| E9 | Bulk import mitigation actions | Nice-to-have | Supported | Confirmed | `app/monitor/mitigation-actions` | `POST /v3/.../wmp/actions/bulk-import` | None | Excel upload with template download. Events: `wmp-upload-*`. |
| E10 | Estimate action costs | Important | Supported | Inferred | `app/monitor/mitigation-actions` (side panel) | Action fields include cost/currency | None | Cost field available in action form. |
| E11 | View actions summary dashboard | Important | Partially Supported | Inferred | `app/monitor/mitigation-actions` | WMP actions list with filters | None | List view with filtering exists but no dedicated summary/aggregation dashboard with charts. |

**Category Summary**: 10 Supported, 1 Partially Supported, 0 Not Supported. Mitigation actions module is comprehensive with 50+ tracked analytics events.

---

## F. Compliance & Reporting (10 actions)

| # | Action | Priority | Support Status | Confidence | Route | Endpoint | Feature Flag | Notes |
|---|--------|----------|----------------|------------|-------|----------|--------------|-------|
| F1 | Generate executive summary reports | Critical | Supported | Confirmed | `app/reporting/executive-summaries` | `POST /v3/companies/:companyId/sites/:siteId/executive-summary` | None | AI-generated executive summaries per site. |
| F2 | View executive summary details | Important | Supported | Confirmed | `app/reporting/executive-summaries/:siteId/details/:reportId` | GET executive summary APIs | None | Detailed report view with presentation mode. |
| F3 | Access platform insights | Important | Supported | Confirmed | `app/reporting/platform-insights` | Luzmo-embedded analytics dashboards | None | Interactive Luzmo dashboards with filters. Events: `rep-insights-*`. |
| F4 | Export data for CDP reporting | Critical | Partially Supported | Inferred | `app/reporting/reporting-requirements` | `GET /v3/companies/:companyId/reporting-requirements` | None | Reporting requirements checklist exists. However, no automated CDP-format export confirmed in code. |
| F5 | Export data for GRI reporting | Critical | Partially Supported | Inferred | Same as F4 | Same as F4 | None | GRI alignment likely through reporting requirements module, but no dedicated GRI 303 export. |
| F6 | Export data for SBTN/SBTi reporting | Important | Not Supported | Confirmed | None | None | None | No SBTN-specific export format found in codebase. |
| F7 | Export data for AWS certification | Important | Not Supported | Confirmed | None | None | None | No Alliance for Water Stewardship certification workflow. |
| F8 | View reporting requirements | Important | Supported | Confirmed | `app/reporting/reporting-requirements` | `GET /v3/companies/:companyId/reporting-requirements` | None | Checklist of applicable requirements. Note: marked as internal-only in route config. |
| F9 | Download formatted reports | Important | Partially Supported | Confirmed | Various export buttons | PPT generation, image export | `enable_export_risk_ppt` | PPT and image exports available for insights. PDF/Excel export coverage varies by module. Risk PPT export is feature-flagged. |
| F10 | Create report snapshots | Nice-to-have | Supported | Confirmed | `app/responses/water-stewardship/snapshots` | Snapshot CRUD APIs | None | Point-in-time snapshots for water stewardship data. |

**Category Summary**: 5 Supported, 3 Partially Supported, 2 Not Supported. Reporting exists but lacks framework-specific export formats (SBTN, AWS).

---

## G. Diagnostics & Assessment (8 actions)

| # | Action | Priority | Support Status | Confidence | Route | Endpoint | Feature Flag | Notes |
|---|--------|----------|----------------|------------|-------|----------|--------------|-------|
| G1 | Complete water risk assessment surveys | Critical | Supported | Confirmed | `app/monitor/surveys` | Survey v2/v3 APIs | `enable_surveys_v3` | Full survey runner with site-level assignment. V3 is feature-flagged. |
| G2 | Manage survey templates | Nice-to-have | Supported | Confirmed | `app/tooling/surveys-manager` (internal) | Survey template APIs | None | Template builder exists in Internal Tooling. CCEP cannot self-manage templates. |
| G3 | Send surveys to external users | Nice-to-have | Supported | Confirmed | External survey route | `GET /v3/external-users/.../surveys/v3/...` | None | Unauthenticated external survey access via link. |
| G4 | Review assessment results | Important | Supported | Confirmed | `app/monitor/surveys` | Survey response/snapshot APIs | None | Results visible in survey section with snapshots. |
| G5 | Run scenario analyses | Important | Supported | Confirmed | `app/metrics/site-scenario-analyses` | `GET/POST/PUT/DELETE /v3/.../scenario-analyses` | None | Full scenario analysis CRUD with cloning capability. |
| G6 | Save and compare scenario snapshots | Nice-to-have | Supported | Confirmed | Same route | Scenario analysis snapshot APIs | None | Snapshot creation and comparison. |
| G7 | Use scenario analysis templates | Nice-to-have | Supported | Confirmed | Same route | `GET /v3/scenario-analyses-templates` | None | Pre-built templates available. |
| G8 | Complete MNS forms | Important | Supported | Confirmed | `app/sites/:companyId/:siteId/mns-form-details/:formId` | MNS form APIs | None | Material & Natural Significance assessment forms. |

**Category Summary**: 8 Supported, 0 Partially Supported, 0 Not Supported. Full coverage.

---

## H. Collaboration & Workflows (7 actions)

| # | Action | Priority | Support Status | Confidence | Route | Endpoint | Feature Flag | Notes |
|---|--------|----------|----------------|------------|-------|----------|--------------|-------|
| H1 | View notifications and alerts | Critical | Partially Supported | Inferred | Various (tasking system, target alerts) | Alerts APIs, `GET /v3/companies/:companyId/risks-alerts` | `enable_target_alerts` | Target alerts are feature-flagged. Risk alerts exist. No unified notification center. |
| H2 | Add comments and notes to projects | Important | Supported | Confirmed | WS project details, mitigation actions | Comment CRUD APIs | None | Comment timelines on WS projects and subtask comments on mitigation actions. |
| H3 | Share data with colleagues | Important | Not Supported | Confirmed | None | None | None | No in-app data sharing/link generation feature. Users must export and share externally. |
| H4 | Assign tasks to team members | Important | Not Supported | Confirmed | None (tasking system is internal) | Tasking system APIs (internal) | None | Tasking system exists but is internal-facing (onboarding guidance), not user-to-user task assignment. |
| H5 | Review and approve project submissions | Important | Supported | Confirmed | `app/responses/water-stewardship` (reviewers-approvers) | Batch review/approve APIs | None | Full reviewer/approver workflow for WS projects. |
| H6 | Use AI assistant for queries | Nice-to-have | Supported | Confirmed | `app/tooling/ai-chat` (internal) | `POST /v3/assistant/process-message` | None | LangChain-based AI assistant exists. Currently in Internal Tooling; unclear if exposed to customers. |
| H7 | Manage attachments (SharePoint) | Nice-to-have | Supported | Confirmed | `app/settings/company/sharepoint` | Attachments CRUD APIs | None | SharePoint-style document management with folders and permissions. |

**Category Summary**: 3 Supported, 1 Partially Supported, 2 Not Supported, 1 Supported (internal only). Collaboration is the weakest area.

---

## I. Administration (7 actions)

| # | Action | Priority | Support Status | Confidence | Route | Endpoint | Feature Flag | Notes |
|---|--------|----------|----------------|------------|-------|----------|--------------|-------|
| I1 | Manage users and invitations | Critical | Supported | Confirmed | `app/settings/company/team-management` | Users invite API, roles-manager | None | User invitation and management in settings. |
| I2 | Configure roles and permissions | Critical | Supported | Confirmed | `app/settings/company/team-management` | `POST/PUT/DELETE /v3/companies/:companyId/roles` | `enable_permissions` | Full role CRUD with policy group assignment. |
| I3 | Manage site hierarchy | Important | Partially Supported | Inferred | `app/settings/company/sites` | Site groups APIs | `enable_default_site_groups_categories` | Sites can be grouped but full hierarchical management may be limited. |
| I4 | Configure risk settings | Important | Supported | Confirmed | `app/settings/risks` | Risk framework settings APIs, `putDefaultRiskFramework` | None | Risk framework weight editing (CCEP has custom `coca-cola-framework`). |
| I5 | Configure report settings | Nice-to-have | Supported | Confirmed | `app/settings/report` | Report settings API | None | Report customization available. |
| I6 | Configure overview dashboard | Nice-to-have | Supported | Confirmed | `app/settings/company/overview-settings` | Company settings API | None | Overview page customization. |
| I7 | Personalize feature names | Nice-to-have | Supported | Confirmed | `app/settings/company/feature-name-personalization` | `updateCompanySectionLabels` | None | Custom labels for platform features to match CCEP terminology. |

**Category Summary**: 6 Supported, 1 Partially Supported, 0 Not Supported. Administration is well-covered.

---

## J. Water Stewardship Projects (6 actions)

| # | Action | Priority | Support Status | Confidence | Route | Endpoint | Feature Flag | Notes |
|---|--------|----------|----------------|------------|-------|----------|--------------|-------|
| J1 | Create water stewardship projects | Critical | Supported | Confirmed | `app/responses/water-stewardship` (v2/v3) | `POST /v3/companies/:companyId/projects/batch-create` | None | Full project creation with bulk upload option. |
| J2 | Manage project portfolios | Important | Supported | Confirmed | `app/responses/water-stewardship/portfolios/:portfolioId` | Portfolio CRUD APIs | None | Portfolio grouping with detail views. |
| J3 | Track project implementation progress | Critical | Supported | Confirmed | Project details (Tracking tab) | Project update/fields APIs | None | Multi-tab project tracking: Basic, Tracking, Activity, Data, Methodology. |
| J4 | Manage implementing partners | Important | Supported | Confirmed | `app/responses/implementing-partners` | `GET /v3/partners` | None | Dedicated implementing partners section. |
| J5 | Review project methodology and data | Important | Supported | Confirmed | Project details (Data, Methodology tabs) | Project fields/review APIs | None | Scientific methodology review with batch review/approve capability. |
| J6 | Run portfolio simulations | Nice-to-have | Supported | Confirmed | `app/responses/water-stewardship/portfolios/:portfolioId/simulations` | Target simulation CRUD APIs | `enable_target_simulator` | Simulation creation and detail views. Feature-flagged. |

**Category Summary**: 6 Supported, 0 Partially Supported, 0 Not Supported. Full coverage for water stewardship.

---

## K. Financial & Cost Management (3 actions)

| # | Action | Priority | Support Status | Confidence | Route | Endpoint | Feature Flag | Notes |
|---|--------|----------|----------------|------------|-------|----------|--------------|-------|
| K1 | Track water costs from utility bills | Important | Partially Supported | Inferred | `app/metrics/utility-bills` | Utility bills API (expenses endpoint) | None | Bill expenses tracked but no dedicated cost analytics dashboard. |
| K2 | Manage project financials (CapEx/OpEx) | Important | Supported | Confirmed | Inside-the-fence project detail | Project fields with NPV calculation | `enabled_npv_auto_calc` | NPV auto-calculation feature-flagged (originally for Colgate). |
| K3 | Manage budget cycles for stewardship | Nice-to-have | Supported | Confirmed | WS v3 (submissions workflow) | `GET/POST /v3/companies/:companyId/budget-cycles`, submissions APIs | `enable_project_submissions` | Budget cycle management with submission/review workflow. Feature-flagged. |

**Category Summary**: 2 Supported, 1 Partially Supported, 0 Not Supported.

---

## L. External Engagement & Supply Chain (2 actions)

| # | Action | Priority | Support Status | Confidence | Route | Endpoint | Feature Flag | Notes |
|---|--------|----------|----------------|------------|-------|----------|--------------|-------|
| L1 | Assess supplier water risk | Critical | Not Supported | Confirmed | None | None | None | **Critical gap for a bottling company.** No supply chain risk assessment module exists. CCEP's ingredient/packaging suppliers cannot be mapped and assessed for water risk. |
| L2 | Engage communities on water issues | Important | Not Supported | Confirmed | None | None | None | No community engagement tracking module. Water stewardship projects partially cover this through implementing partners, but there is no dedicated community engagement workflow. |

**Category Summary**: 0 Supported, 0 Partially Supported, 2 Not Supported. Biggest gap area.

---

## Summary

### Overall Support Status (Validated)

| Status | Count | Percentage |
|--------|-------|------------|
| Supported | 62 | 63.3% |
| Partially Supported | 18 | 18.4% |
| Not Supported | 8 | 8.2% |
| Supported (Internal Only) | 10 | 10.2% |
| **TOTAL** | **98** | **100%** |

Note: The original taxonomy reported 34 Supported and 28 Unknown. After cross-referencing frontend and backend audits, many "Unknown" items were reclassified as Supported, bringing the confirmed total to 62.

### Not Supported Actions (Gaps)

| # | Action | Priority | Impact on CCEP |
|---|--------|----------|----------------|
| B5 | Configure water infrastructure | Important | Cannot document treatment plants, storage tanks, pipe networks |
| D7 | Benchmark against industry/peers | Nice-to-have | No peer comparison for performance context |
| F6 | Export data for SBTN/SBTi reporting | Important | Manual effort needed for SBTN freshwater target reporting |
| F7 | Export data for AWS certification | Important | No Alliance for Water Stewardship certification support |
| H3 | Share data with colleagues | Important | Must export and share manually; reduces collaboration |
| H4 | Assign tasks to team members | Important | No user-to-user task delegation within platform |
| L1 | Assess supplier water risk | Critical | **Highest-impact gap** -- supply chain risk invisible to CCEP |
| L2 | Engage communities on water issues | Important | Community engagement not trackable |

### Feature-Flagged Capabilities Relevant to CCEP

| Feature Flag | Capability | CCEP Status |
|--------------|------------|-------------|
| `enable_wur_calculator` | WUR Calculator | **Likely enabled** (built for Coca-Cola) |
| `enable_future_projections` | Climate future projections | Unknown -- requires Back Office check |
| `enable_media_analysis` | Reputational media analysis | Unknown -- requires Back Office check |
| `reputational_engine` | Reputational engine settings | Unknown -- requires Back Office check |
| `enable_target_alerts` | Target alerts & activity log | Unknown -- requires Back Office check |
| `enable_target_checkpoints` | Target checkpoint milestones | Unknown -- requires Back Office check |
| `enable_target_simulator` | Portfolio target simulations | Unknown -- requires Back Office check |
| `enable_surveys_v3` | Surveys v3 engine | Unknown -- requires Back Office check |
| `enable_permissions` | Policy group permissions | Unknown -- requires Back Office check |
| `enable_export_risk_ppt` | Risk PPT export | Unknown -- requires Back Office check |
| `enabled_npv_auto_calc` | NPV auto-calculation | Likely no (documented as Colgate-specific) |
| `enable_project_submissions` | WS v3 project submissions | Unknown -- requires Back Office check |
| `enable_shared_projects` | WS v3 shared projects | Unknown -- requires Back Office check |
| `enable_target_locking` | Target lock/unlock | Unknown -- requires Back Office check |
| `enable_energy_cost_waterfall` | Energy cost waterfall chart | Unknown -- requires Back Office check |
