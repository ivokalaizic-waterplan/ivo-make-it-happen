# CCEP Usage Analysis: Executive Summary

**Prepared for**: COO / Customer Success Leadership
**Date**: 2026-05-18
**Account**: Coca-Cola Europacific Partners (CCEP)
**ARR**: $232,000 (Target Tracking $70k + Water Risk $12k + Water Stewardship $150k)
**Company ID**: coca-cola-euro-pacific

---

## 1. Executive Summary

CCEP is a high-value, rapidly growing account ($232k ARR) that has tripled its active user base from 14 to 37 monthly active users between February and April 2026. They are actively using all three licensed modules (Water Risk, Target Tracking, Water Stewardship) and have unique platform advantages including a custom Coca-Cola risk framework and the WUR (Water Use Ratio) calculator built specifically for them. However, our analysis identifies 15 feature-flagged capabilities whose activation status is unknown, 8 business-critical actions the platform does not support at all, and significant gaps in our ability to measure exactly what CCEP users are doing at the feature level. The single most important gap is the absence of supply chain water risk assessment -- critical for a global bottling company. The single most important CS action is to query the Back Office API to determine which of the 15 feature flags are actually enabled, then activate high-value ones that are currently off.

---

## 2. What CCEP Users Could Do (Business Action Taxonomy)

We identified **98 distinct business actions** across 12 categories that a water-intensive corporation like CCEP would reasonably want to perform:

| Category | Actions | Critical | Important | Nice-to-have |
|----------|---------|----------|-----------|-------------|
| A. Understanding Water Risk | 12 | 5 | 5 | 2 |
| B. Site Information Management | 8 | 2 | 4 | 2 |
| C. Water Data & Accounting | 14 | 7 | 6 | 1 |
| D. Targets & Performance | 10 | 4 | 4 | 2 |
| E. Action Plans & Mitigation | 11 | 4 | 5 | 2 |
| F. Compliance & Reporting | 10 | 2 | 5 | 3 |
| G. Diagnostics & Assessment | 8 | 1 | 3 | 4 |
| H. Collaboration & Workflows | 7 | 1 | 4 | 2 |
| I. Administration | 7 | 2 | 2 | 3 |
| J. Water Stewardship Projects | 6 | 2 | 3 | 1 |
| K. Financial & Cost Management | 3 | 0 | 2 | 1 |
| L. External Engagement & Supply Chain | 2 | 1 | 1 | 0 |
| **TOTAL** | **98** | **28** | **42** | **28** |

Priority breakdown: 28 Critical (must-have for a bottling company), 42 Important, 28 Nice-to-have.

---

## 3. What Waterplan Allows Them to Do Today (Platform Capabilities)

After cross-referencing the taxonomy against both frontend routes and backend endpoints:

| Support Status | Count | % of 98 |
|---------------|-------|---------|
| Fully Supported | 62 | 63% |
| Partially Supported | 18 | 18% |
| Not Supported | 8 | 8% |
| Internal-Only (not customer-facing) | 10 | 10% |

**Fully supported highlights for CCEP**:
- Complete water risk monitoring suite (risk scores, basin indicators, maps, prioritization)
- Custom `coca-cola-framework` with editable risk weights (first-class treatment alongside Waterplan's own framework)
- WUR Calculator -- built specifically for Coca-Cola, including 3 tutorial videos gated to CCEP's company ID
- Full target tracking lifecycle (set targets, checkpoints, scenarios, evolution charts, gap analysis)
- Complete mitigation action management (create, assign, track, subtask, evidence) with 50+ analytics events
- Water stewardship project lifecycle (create, track, review/approve, snapshot, portfolio, simulations)
- Inside-the-fence projects with bulk upload
- Production data management (CCEP has had active data fixes confirming usage)
- Utility bill AI extraction
- Executive summaries (AI-generated)
- Platform insights (Luzmo dashboards with PPT export)

**Feature-flagged capabilities with unknown CCEP status** (15 flags):

| Flag | Capability | Business Value for CCEP |
|------|------------|------------------------|
| `enable_future_projections` | Climate projections 2030-2050 | High -- long-term risk planning |
| `enable_media_analysis` | Media/reputational analysis | Medium -- brand risk monitoring |
| `reputational_engine` | Reputational engine settings | Medium -- brand risk config |
| `enable_target_alerts` | Target alerts + activity log | High -- change tracking, audit |
| `enable_target_checkpoints` | Interim target milestones | High -- quarterly progress tracking |
| `enable_target_locking` | Lock targets from edits | Medium -- governance |
| `enable_target_simulator` | Portfolio simulations | Medium -- scenario planning |
| `enable_surveys_v3` | Surveys v3 engine | Medium -- improved assessments |
| `enable_permissions` | Policy group permissions | Medium -- granular access control |
| `enable_export_risk_ppt` | Risk data PPT export | High -- stakeholder presentations |
| `enable_project_submissions` | WS v3 submissions workflow | Medium -- structured workflow |
| `enable_shared_projects` | Cross-company linked projects | Low -- depends on use case |
| `enable_user_access_reviews` | Periodic access reviews | Medium -- security compliance |
| `enable_energy_cost_waterfall` | Energy cost visualization | Medium -- cost analysis |
| `enable_true_cost_of_water` | True cost of water metric | High -- total cost visibility |

---

## 4. What They Have Actually Done (Observed Usage)

**Data source**: FullStory session data via session-explorer tool (Feb-Apr 2026).

### Monthly Active Users (MAU)

| Month | MAU | Growth | Relevant MAU % | Alignment |
|-------|-----|--------|----------------|-----------|
| Feb 2026 | 14 | Baseline | 100% | Correct |
| Mar 2026 | 23 | +64% | 73.9% | Underutilized |
| Apr 2026 | 37 | +164% | 91.9% | Correct |

**Key insight**: CCEP's user base has tripled in 3 months. The March dip to 73.9% relevant MAU suggests new users were onboarding and exploring before settling into licensed feature usage. April's recovery to 91.9% indicates successful adoption.

### Jobs-to-be-Done (JTBD) Detection

| JTBD | Feb | Mar | Apr | License Match |
|------|-----|-----|-----|---------------|
| WATER_RISK_ASSESSMENT | Detected | Detected | Detected | Yes (Water Risk) |
| TARGET_TRACKING | Detected | Detected | Detected | Yes (Target Tracking) |
| WATER_STEWARDSHIP | Detected | Detected | Detected | Yes (Water Stewardship) |
| MEASURE | Detected | Detected | Detected | Cross-cutting |
| REPORTING_EXPORT | Detected | Detected | Detected | Cross-cutting |
| SITE_SELECTION | Detected | Detected | Detected | Cross-cutting |
| ONBOARDING_ADMIN | Detected | Detected | Detected | Cross-cutting |
| COMPLIANCE | Detected | -- | Detected | Cross-cutting |
| AI_METERS | Detected | -- | Detected | Not licensed |
| SUPPLY_CHAIN | -- | -- | Detected | Not licensed |

All three licensed JTBDs are consistently active across all months.

---

## 5. Who Has Done What (Known Users)

**Identified CCEP users**: 2 named users in our tracking system.

| User | Role (Inferred) | Activity |
|------|-----------------|----------|
| tramberg@ccep.com | Unknown | Listed in customers.json. Session-level detail requires FullStory export. |
| elena.fernandez@ccep.com | Unknown | Listed in customers.json. Session-level detail requires FullStory export. |

**Limitation**: We only have 2 named users but 37 MAU. The remaining 35 users are tracked in FullStory by email but not pre-identified in our customers.json. A FullStory segment export for "CCEP" would reveal all active user emails.

---

## 6. Active vs. Inactive Sites/Users

| Dimension | Known | Unknown |
|-----------|-------|---------|
| Total CCEP users (MAU Apr 2026) | 37 | Exact count requires Back Office query |
| Total CCEP sites | Unknown | Requires `GET /v3/companies/coca-cola-euro-pacific/sites` |
| Named/tracked users | 2 | Need FullStory segment export for complete list |
| Active sites | Unknown | Requires activity log query by site_id |
| Disabled sites | At least some | Script `audit_company_sites_disabled_flags.ts` audited CCEP disabled sites |

**Action needed**: Query the Back Office API for CCEP's total user count, site count, and disabled site list.

---

## 7. Enabled but Unused Capabilities

Based on available data, the following capabilities are enabled (or likely enabled) but their usage level is uncertain:

| Capability | Confidence Enabled | Usage Signal | Recommended Action |
|------------|-------------------|--------------|-------------------|
| WUR Calculator | Confirmed | Unknown session count | Query FullStory for TARGETS_WUR_CALCULATOR events. If low, run targeted enablement session. |
| Production data entry | Confirmed (data fixes exist) | Medium (MEASURE JTBD) | Production is being used. Data quality fix history suggests active engagement. |
| Executive summaries | Likely yes | Unknown | Check if CCEP has generated any executive summaries. High-value feature for stakeholder reporting. |
| Site prioritization | Likely yes | Unknown | Verify if CCEP has configured prioritization criteria. Very relevant for 37+ site portfolio. |
| Scenario analyses | Likely yes | Unknown | Feature exists. Verify adoption with FullStory session data. |
| Mitigation actions (WMP) | Likely yes | Unknown | 50+ tracked events exist. Query wmp-* events for CCEP in EventBridge/FullStory. |
| Feature name personalization | Yes | Unknown | CS could proactively offer to customize labels for CCEP's internal terminology. |

---

## 8. Potentially Valuable Capabilities Not Enabled

| Capability | Flag | Business Value | Effort to Enable |
|------------|------|----------------|-----------------|
| Future Projections | `enable_future_projections` | High -- CCEP needs 2030+ climate risk visibility for long-term planning | Toggle flag in Back Office |
| Target Alerts & Activity Log | `enable_target_alerts` | High -- provides audit trail and change notifications critical for governance | Toggle flag in Back Office |
| Target Checkpoints | `enable_target_checkpoints` | High -- quarterly milestones for tracking interim progress toward targets | Toggle flag in Back Office |
| Risk PPT Export | `enable_export_risk_ppt` | High -- CCEP likely needs to present risk data to internal stakeholders | Toggle flag in Back Office |
| True Cost of Water | `enable_true_cost_of_water` | High -- total cost visibility supports business case for water investments | Toggle flag in Back Office |
| Media Analysis | `enable_media_analysis` | Medium -- reputational risk monitoring for brand-sensitive company | Toggle flag + configure |
| Policy Permissions | `enable_permissions` | Medium -- fine-grained access control important for 37+ user base | Toggle flag in Back Office |

**Recommendation**: Query `GET /v1/backoffice/companies/coca-cola-euro-pacific/accessControl` to get current flag state, then enable high-value flags that are currently off.

---

## 9. Important Workflows Not Supported Today

| Gap | Priority | Impact on CCEP | Product Opportunity |
|-----|----------|----------------|---------------------|
| **Supply chain water risk** (L1) | Critical | CCEP cannot assess water risk across ingredient/packaging suppliers. For a global bottling company, supply chain water visibility is essential. | Build supply chain risk assessment module. Map supplier locations to basins, compute risk scores. High strategic value. |
| **SBTN/SBTi reporting export** (F6) | Important | CCEP likely has or will set Science Based Targets for freshwater. No automated export format. | Build SBTN freshwater target alignment report generator. |
| **AWS certification support** (F7) | Important | Alliance for Water Stewardship certification is a standard for beverage industry sites. No workflow support. | Build AWS Standard alignment tracker. |
| **In-app data sharing** (H3) | Important | Users cannot share views or data within the platform. Must export and email. | Add shareable links/views for collaborative analysis. |
| **User-to-user task assignment** (H4) | Important | No ability to delegate specific tasks within the platform. Mitigation actions have assignees but are not general-purpose tasks. | Extend tasking system from internal to customer-facing. |
| **Community engagement tracking** (L2) | Important | Water stewardship projects partially cover this, but no dedicated community engagement workflow. | Add community engagement module. |
| **Industry benchmarking** (D7) | Nice-to-have | No peer comparison. CCEP cannot contextualize their performance relative to other beverage companies. | Add anonymized benchmarking data. |
| **Water infrastructure documentation** (B5) | Important | No way to document treatment plants, storage, distribution at bottling sites. | Add infrastructure mapping feature. |

---

## 10. Friction and Adoption Blockers

Based on platform architecture analysis:

1. **Meter configuration is internal-only**: CCEP cannot self-service add or configure water meters. Requires Waterplan team involvement for every meter change.

2. **Survey templates are internal-only**: CCEP cannot create or modify assessment templates. Depends on Waterplan for any survey customization.

3. **AI assistant is internal-only**: The LangChain-based assistant exists but appears restricted to internal tooling routes. CCEP cannot use natural language queries.

4. **March alignment dip (73.9%)**: New users onboarding in March were not immediately engaging with licensed features, suggesting either unclear onboarding paths or exploratory behavior before settling into workflows.

5. **No unified notification center**: Alerts are fragmented across target alerts (feature-flagged), risk alerts, and various module-specific signals. Users may miss important updates.

6. **Feature flag complexity**: 15 capabilities are gated behind flags with unknown status. CCEP may be missing features they would value simply because flags were never toggled.

7. **Data quality validation gap**: No automated anomaly detection. Data quality issues (like the m3-to-liters fix) required manual script intervention.

8. **Export format gaps**: PPT export available for insights but no PDF/Excel for all modules. Compliance-specific exports (CDP, GRI, SBTN) require manual data assembly.

---

## 11. CS Opportunities

### Immediate (This Week)

1. **Query Back Office API** for CCEP's feature flag state: `GET /v1/backoffice/companies/coca-cola-euro-pacific/accessControl`. Determine which of the 15 flags are on/off.

2. **Enable high-value flags** that are off: `enable_future_projections`, `enable_target_alerts`, `enable_target_checkpoints`, `enable_export_risk_ppt`, `enable_true_cost_of_water`.

3. **Run FullStory segment export** for "CCEP" segment to get complete user list (we only have 2 of 37 users identified).

### Short-term (Next 2 Weeks)

4. **WUR Calculator adoption check**: Query TARGETS_WUR_CALCULATOR events. If low, schedule a 30-minute WUR enablement session with CCEP's target tracking owners. CCEP has 3 tutorial videos available.

5. **Executive summary generation**: Check if CCEP has generated any executive summaries. If not, offer to generate the first batch and demonstrate the presentation mode.

6. **Site prioritization setup**: Verify if CCEP has configured prioritization criteria. With 37+ sites, this feature is highly valuable for focus and resource allocation.

7. **Feature name personalization**: Offer to customize platform labels to match CCEP's internal water management terminology.

### Medium-term (Next Month)

8. **Mitigation actions adoption**: Analyze wmp-* event data. If low, run a Water Management Plan workshop demonstrating action creation, subtask management, and evidence tracking.

9. **Data quality process setup**: Help CCEP establish data validation workflows using the existing preview/validation features.

10. **Reporting alignment**: Guide CCEP through CDP/GRI reporting using platform data. Create a reporting playbook.

11. **New user onboarding optimization**: With 37 MAU and growing, ensure onboarding tasking system journeys are configured for CCEP-specific workflows.

---

## 12. Product Opportunities

### High Priority

| Opportunity | Business Case | CCEP Impact |
|-------------|---------------|-------------|
| Supply chain water risk module | Essential for F&B industry. CCEP has complex global supply chain. | Direct license expansion opportunity ($$$). |
| SBTN/SBTi reporting export | Regulatory pressure increasing. Most large corporates will need this. | Reduces manual reporting effort for CCEP sustainability team. |
| Customer-facing AI assistant | LangChain assistant already built (internal). Exposing it adds massive value. | 37 users could self-serve answers instead of contacting CS. |
| Unified notification center | Fragmented alerts reduce engagement. Unified inbox increases return visits. | Better engagement for growing user base. |

### Medium Priority

| Opportunity | Business Case | CCEP Impact |
|-------------|---------------|-------------|
| Self-service meter configuration | Removes Waterplan bottleneck. Scales better. | CCEP can onboard meters independently. |
| Data anomaly detection | Proactive data quality prevents downstream errors. | Catches issues like m3-to-liters before they compound. |
| In-app data sharing | Collaboration driver. Increases user engagement. | 37 users can collaborate without exporting. |
| Industry benchmarking | Differentiator for platform positioning. | CCEP sees their performance in context. |

### Lower Priority

| Opportunity | Business Case | CCEP Impact |
|-------------|---------------|-------------|
| AWS certification workflow | Niche but valuable for water stewardship leaders. | Supports CCEP's stewardship commitments. |
| Infrastructure documentation | Useful for operational sites. | Bottling plant infrastructure mapping. |
| User-to-user task assignment | General collaboration feature. | Workflow management within teams. |

---

## 13. Recommended Next Actions

### For CS Team

| # | Action | Owner | Timeline | Impact |
|---|--------|-------|----------|--------|
| 1 | Query Back Office API for CCEP feature flags and site/user counts | CS Engineer | This week | Unlocks all downstream actions |
| 2 | Enable high-value feature flags (future projections, target alerts, checkpoints, PPT export, true cost of water) | CS Engineer | This week | Immediate value unlock |
| 3 | Export CCEP FullStory segment for complete user inventory | CS Analyst | This week | Enables user-level analysis |
| 4 | Schedule WUR Calculator enablement session | CSM | Next 2 weeks | Drive adoption of CCEP-specific feature |
| 5 | Generate first executive summaries and demo to CCEP | CSM | Next 2 weeks | Showcase reporting value |
| 6 | Configure site prioritization for CCEP | CSM + CS Engineer | Next 2 weeks | Help CCEP focus attention on highest-risk sites |
| 7 | Build CCEP reporting playbook for CDP/GRI | CS Analyst | Next month | Proactive compliance support |

### For Product Team

| # | Action | Owner | Timeline | Impact |
|---|--------|-------|----------|--------|
| 1 | Evaluate supply chain risk module feasibility | PM | This quarter | Addresses #1 critical gap for F&B customers |
| 2 | Plan customer-facing AI assistant rollout | PM + Engineering | This quarter | Leverages existing LangChain investment |
| 3 | Design unified notification center | PM | Next quarter | Cross-customer engagement improvement |
| 4 | Add SBTN reporting export | PM | Next quarter | Regulatory alignment |

---

## 14. Data Quality Limitations

### What We Know (Confirmed)
- MAU counts for Feb-Apr 2026 (from FullStory via session-explorer)
- JTBD categories detected per month (from regex classification)
- 2 named CCEP users (from customers.json)
- License structure and ARR ($232k)
- Platform capabilities (from codebase analysis of waterplan-frontend and waterplan-api)
- CCEP company ID: `coca-cola-euro-pacific`
- CCEP has custom coca-cola-framework and WUR calculator enabled

### What We Inferred (Medium Confidence)
- Feature support status (mapped from route/endpoint existence, not runtime testing)
- CCEP likely uses production data (based on data fix scripts targeting CCEP sites)
- CCEP likely uses water stewardship projects (based on project impact validation scripts)
- March alignment dip caused by new user onboarding (based on MAU growth pattern)

### What We Do Not Know (Requires Investigation)
- **Which feature flags are enabled** for CCEP (requires Back Office API query)
- **Feature-level usage** (which specific pages/actions CCEP users perform; requires FullStory event filtering or backend event analysis)
- **Total site count** and which sites are active vs. disabled
- **Total user count** vs. MAU (how many provisioned users exist)
- **User roles** distribution (how many admins, managers, regular users)
- **Session-level detail** for specific users beyond the 2 named users
- **EventBridge event data** for CCEP (would provide definitive feature usage counts)
- **Activity log data** from audit-db for CCEP (would show exact actions taken)

### Methodological Notes
- All platform capability assessments are based on static code analysis of the waterplan-frontend and waterplan-api repositories (Q1 2026 snapshot), not runtime testing.
- JTBD classifications are based on regex pattern matching of FullStory session summaries, not exact feature tracking.
- "Supported" status means code exists for both frontend and backend; it does not guarantee the feature works correctly or is enabled for CCEP.
- The 98-action taxonomy was designed from a CCEP perspective but validated against the actual codebase. Some actions may not be relevant to CCEP's specific use case.
