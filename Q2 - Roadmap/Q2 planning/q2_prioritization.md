# Q2 2026 — Prioritization Proposal

## Guiding Principle

**Objective #1 del quarter: que los sitios usen la plataforma.**

Every prioritization decision is filtered through: does this help site users adopt and trust the platform?

---

## Priority Tiers

### Tier 1 — Must Do (Core Q2 Deliverables)

These are non-negotiable for Q2. Either they directly serve the #1 objective or they are committed deliverables.

| # | Initiative | Why Tier 1 | Complexity | Dependencies |
|---|---|---|---|---|
| 1 | **Separate Water and Carbon as independent entities** | Foundational. Without this, site users see broken/irrelevant data. Everything else in TT depends on this. | High | None — this IS the dependency |
| 2 | **Independent configs per domain** (key metrics, columns, charts) | Direct consequence of #1. Without it, payback period shows "no data" in water. | Medium | Depends on #1 |
| 3 | **Independent scenarios per domain** | Direct consequence of #1. Carbon scenarios polluting water view. | Medium | Depends on #1 |
| 4 | **Role-based action permissions** | Companies can't safely roll out TT to more users without this. Coca-Cola and Colgate both need it. | High | None |
| 5 | **Configurable cross-site visibility** | Coca-Cola and Colgate have opposite requirements. Can't onboard either properly without this. | High | Designed together with #4 |
| 6 | **AB InBev — Smart Scenario Prioritization** | Committed sale. Biggest Q2 objective alongside adoption. | High | None (independent workstream) |
| 7 | **Year-aware emission factors** | Colgate will request 2025 data loading soon. Platform can't handle it today. Time-sensitive. | Medium | None |
| 8 | **Close side navigation + mobile support** | AI Water Meters requires mobile. Can't block a key feature. Flag cleanup enables all future design work. | Medium-High | None |

**Recommended execution order:**

```
Wave 1 (start immediately, parallel tracks):
├── Track A: Water/Carbon Separation (#1 → #2 → #3)
├── Track B: Permissions (#4 + #5, designed together)
├── Track C: AB InBev Discovery → Design → Engineering (#6)
├── Track D: Year-aware emission factors (#7)
└── Track E: Side nav mobile + flag cleanup (#8)
```

#1 should start first because #2 and #3 depend on it. #4 and #5 should be designed together as one permission model even if implemented incrementally. #6 is an independent workstream. #7 and #8 have no dependencies and can run in parallel.

---

### Tier 2 — Should Do (High Impact, Moderate Effort)

These significantly improve the user experience and should be delivered in Q2 if capacity allows.

| # | Initiative | Why Tier 2 | Complexity | Dependencies |
|---|---|---|---|---|
| 9 | **Homepage rollout** | Design ready. Mostly config + making categories configurable per company. High impact on first impression. | Low-Medium | None |
| 10 | **Scenario-aware landing page** | Users need to see their real scenario, not just base case. Critical for trust. | Medium | Better after #1 (domain separation) but could be done independently |
| 11 | **Unit conversion for water** | Direct customer request (Tobias, Coca-Cola). Daily friction for active users. | Medium | None |
| 12 | **Expand scenario limit** | Change one constant (MAX_SCENARIOS in guards/scenarios.ts). Trivial. | Very Low | None — do immediately |
| 13 | **Gap-to-target in absolute and financial terms** | High value for water users communicating with leadership. | Medium | May need cost factors from data gathering |
| 14 | **Breakdown by site respecting permissions** | Enforcement point for permission system. Falls out of #4/#5. | Low | Depends on #4/#5 |
| 15 | **Configurable lock permissions** | Small addition to permission system. | Low | Depends on #4 |
| 16 | **Granular data visibility** (hide financial metrics) | Colgate requirement. Adds on top of permission system. | Medium | Depends on #4/#5 |

**Recommended approach:**
- #12 (scenario limit) should be done immediately — it's a one-line change.
- #9 (homepage) can be done early in Q2 as a quick win while bigger initiatives are being designed.
- #10, #11, #13 should be prioritized based on which customers are most active/vocal.
- #14, #15, #16 fall out naturally from the permission work (#4/#5).

---

### Tier 3 — Nice to Have / Conditional

These are valuable but either depend on external triggers (pipeline) or can wait.

| # | Initiative | Why Tier 3 | Trigger |
|---|---|---|---|
| 17 | **Multi-metric bulk upload** | Individual creation already supports multi-metric. Gap is only in bulk upload (internal tool). | Customer volume requiring bulk upload |
| 18 | **Multi-unit bulk upload** | Needs conversion factor table (shared with unit conversion). | Can bundle with #11 |
| 19 | **Year-aware energy costs** | Same pattern as emission factors. Lower urgency. | Bundle with #7 for efficiency |
| 20 | **Self-service emission factor management** | Partially done (query works). Write operations need year-aware model first. | Bundle with #7 |
| 21 | **Scope 3 Logistics discovery** | Mostly design. Minimal engineering. Already starting. | Customer timeline (implementation next year) |
| 22 | **Simplify (TT + Projects navigation)** | Design-led. No predefined engineering scope. | Design decisions from Q1 continuation |
| 23 | **Data download from UI** | Needs scoping first. Good value but undefined. | Product definition needed |
| 24 | **Bulk role creation** | Can be done individually today. More valuable after permission model is built. | Scale of onboarding operations |

**Conditional (only if pipeline):**

| # | Initiative | Trigger |
|---|---|---|
| 25 | **Configurable NPV** | Second carbon customer requesting it |
| 26 | **Environmental impact generalization** | Second carbon customer requesting it |
| 27 | **MAC Curve for all** | Follows from #25 + #26 if done |

---

### Already Done

| # | Initiative | Status |
|---|---|---|
| — | **Side navigation favorites** | Fully implemented. useSidebarFavorites hook with API-backed storage. |

---

## Dependency Map

```
Water/Carbon Separation (#1)
├── Independent configs (#2)
├── Independent scenarios (#3)
└── (improves) Scenario-aware landing page (#10)

Permission System (#4 + #5)
├── Lock permissions (#15)
├── Granular data visibility (#16)
└── Breakdown respecting permissions (#14)

Year-aware emission factors (#7)
├── Year-aware energy costs (#19) — same pattern
├── Self-service factor management (#20) — needs year model
└── (enables) Environmental impact generalization (#26)

Unit conversion for water (#11)
├── Multi-unit bulk upload (#18) — shares conversion table
└── (future) Unit conversion for carbon

AB InBev (#6) — independent
Side nav + mobile (#8) — independent
Homepage (#9) — independent
Scope 3 (#21) — independent (design only)
```

---

## Suggested Q2 Timeline

### Month 1 (May)
- **Start:** Water/Carbon separation (design + backend architecture)
- **Start:** Permission system design (unified model for #4, #5, #15, #16)
- **Start:** AB InBev discovery → design
- **Deliver:** Expand scenario limit (#12) — day 1, one-line change
- **Deliver:** Homepage rollout (#9) — quick win, 1-2 weeks
- **Start:** Side nav mobile + flag cleanup (#8)
- **Start:** Year-aware emission factors (#7)

### Month 2 (June)
- **Deliver:** Water/Carbon separation (#1) + configs (#2) + scenarios (#3)
- **Deliver:** Side nav mobile (#8)
- **Deliver:** Year-aware emission factors (#7) + energy costs (#19)
- **Progress:** Permission system implementation (#4, #5)
- **Progress:** AB InBev design → engineering
- **Start:** Unit conversion for water (#11)
- **Start:** Scenario-aware landing page (#10)

### Month 3 (July)
- **Deliver:** Permission system (#4, #5) + downstream (#14, #15, #16)
- **Deliver:** Unit conversion for water (#11)
- **Deliver:** Scenario-aware landing page (#10)
- **Deliver:** AB InBev MVP
- **Progress:** Gap-to-target metric (#13)
- **Deliver:** Scope 3 discovery output (#21)
- **Evaluate:** Tier 3 items based on remaining capacity

---

## Risk Flags

1. **Water/Carbon separation is the biggest risk.** It touches ~145+ files (backend + frontend). If it slips, it blocks configs and scenarios. Recommend starting with backend model changes and migrating data early.

2. **Permission system is the second biggest risk.** It's a new model from scratch. Recommend designing the full model upfront (even if implementation is incremental) to avoid rework.

3. **AB InBev depends on discovery quality.** If discovery doesn't converge on clear prioritization criteria, engineering can't start. Keep discovery time-boxed.

4. **Year-aware emission factors have a hard deadline** (whenever Colgate sends 2025 data). Start early to avoid being blocked by a customer request.

5. **Side nav mobile is a hard requirement** for AI Water Meters. If this doesn't ship, a customer-facing feature is blocked.
