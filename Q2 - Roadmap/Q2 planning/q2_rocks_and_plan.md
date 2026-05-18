# Q2 2026 — Ivo's Rocks & Quarter Plan

## Rocks

### ROCK 1: ABI — Smart Scenario Prioritization

**Objective:** Complete discovery, design, and deliver an MVP that helps ABI prioritize projects based on budget constraints and impact criteria.

**Done =** ABI can use the tool to prioritize projects with real constraints and get actionable recommendations.

| Month | Milestone | Done = |
|---|---|---|
| May | Complete discovery: map ABI's prioritization criteria, constraints, and decision process | Document with prioritization criteria validated by ABI |
| June | Design + architecture: define AI agent approach, UX for constraint input and recommendations | Design approved by ABI + engineering ready to build |
| July | Engineering builds MVP + ABI tests it | ABI runs a real prioritization through the tool |

**Key risks:**
- Discovery doesn't converge — time-box to 3-4 weeks max
- AI agent architecture is undefined — involve engineering early in design
- ABI stakeholder availability — lock recurring meetings now

**Weekly actions:**
- Lead discovery sessions with ABI
- Synthesize findings into prioritization criteria document
- Align with engineering on feasibility of AI approach

---

### ROCK 2: Scope 3 Logistics Discovery

**Objective:** Lead the full discovery: understand how clients currently calculate Scope 3 emissions, map the methodology, improve it, and define with design how it should work in the platform.

**Done =** Methodology mapped + validated design. Engineering can plan implementation for Q3+.

| Month | Milestone | Done = |
|---|---|---|
| May | Understand current methodology: how do they calculate Scope 3 logistics today? What data do they use? | Methodology document with current-state mapping |
| June | Identify gaps and improvements: what can Waterplan do better? Define data requirements | Gap analysis + data requirements document |
| July | Design validated: how this looks in the platform, what the UX is, what engineering needs to build | Design spec that engineering can estimate and plan for Q3 |

**Key risks:**
- Client methodology is complex or non-standard — document as you go, don't wait for perfection
- Design dependency — involve design early, share inputs continuously
- Scope creep into implementation — stay disciplined: Q2 = discovery + design ONLY

**Weekly actions:**
- Attend all client meetings, take structured notes
- Build methodology map incrementally
- Share design inputs with design team weekly

---

### ROCK 3: Sites Use Target Tracking

**Objective:** The platform is ready for ANY client to roll out Target Tracking to site users. Deliver permissions, homepage, and side nav mobile so companies can onboard site users with confidence.

**Done =** The permission system is configurable enough that both open visibility (Coca-Cola model) and restricted visibility (Colgate model) can be set up. Homepage is live for all customers. Side nav works on mobile.

| Month | Milestone | Done = |
|---|---|---|
| May | Permission system designed (covers both Coca-Cola and Colgate models). Homepage rolled out to all customers. Scenario limit expanded (day 1). | Permission design doc covers actions + visibility + editing dimensions. Homepage live. MAX_SCENARIOS updated. |
| June | Permissions MVP implemented: role-based actions + configurable cross-site visibility. Side nav mobile delivered. | Company Owner can configure who can create/edit/lock + who sees what sites. Side nav responsive on mobile. |
| July | Permissions extended: granular data visibility (hide financials), breakdown respecting permissions, lock by role. At least 2 clients configured and validated. | Both Coca-Cola and Colgate have permissions configured. Breakdown by site respects scope. |

**Key risks:**
- Permission system is complex — design the full model upfront but implement incrementally (actions first, then visibility, then granular data)
- Side nav mobile is new work — needs design input, don't underestimate
- Client readiness — start alignment with client success early to prepare clients for rollout

**Weekly actions:**
- Drive permission system design with design + engineering
- Track homepage rollout (mostly config — should be fast)
- Coordinate with client success on client readiness for site rollout

**Sub-initiatives in this rock:**

| Initiative | Complexity | Month |
|---|---|---|
| Expand scenario limit (MAX_SCENARIOS constant) | Very Low | May (day 1) |
| Homepage rollout for all customers | Low-Medium | May |
| Permission system design (full model) | High | May |
| Role-based action permissions (create, edit, lock) | High | June |
| Configurable cross-site visibility | High | June |
| Side nav mobile + flag cleanup | Medium-High | June |
| Configurable lock permissions by role | Low | July (falls out of permission system) |
| Granular data visibility (hide financial metrics) | Medium | July |
| Breakdown by site respecting permissions | Low | July (validation point) |
| Bulk role creation | Medium | July (if capacity) |

---

## Quarter Work (not a rock, but gets executed)

These initiatives run in parallel with the rocks. They are important for the business but don't define the quarter's success.

### Water/Carbon Separation in Target Tracking

| Initiative | Complexity | Why |
|---|---|---|
| Separate Water and Carbon as independent entities | High | Only affects Colgate today (only client with both modules). Needed for long-term platform integrity. |
| Independent key metrics and table column config per domain | Medium | Consequence of separation. Eliminates "no data" problem. |
| Independent scenario management per domain | Medium | Consequence of separation. Stops carbon scenarios from polluting water view. |

**Note:** This is the largest engineering effort in the quarter after the permission system. Important for the business but not blocking site rollout for most clients.

### Year-Aware Emission Factors (Colgate 2025)

| Initiative | Complexity | Why |
|---|---|---|
| Year-aware emission factors | Medium | Colgate will request 2025 data loading. Platform can't handle it today. Time-sensitive. |
| Year-aware energy cost factors | Medium | Same pattern. Bundle with emission factors. |
| Self-service emission factor management | Medium | Bundle with above. Reduce engineering dependency. |

**Note:** Has a soft deadline — whenever Colgate sends 2025 data. Start early in Q2.

### Unit Conversion

| Initiative | Complexity | Why |
|---|---|---|
| Unit conversion for water variables | Medium | Direct request from Tobias and Coca-Cola. Daily friction. Start with water only. |

### Scenario Experience

| Initiative | Complexity | Why |
|---|---|---|
| Scenario-aware landing page | Medium | Users need to see their real scenario, not just base case. High trust impact. |
| Gap-to-target in absolute and financial terms | Medium | Helps water users communicate with leadership. Budget justification enabler. |

### Projects Module

| Initiative | Complexity | Why |
|---|---|---|
| Multi-metric bulk upload | Low-Medium | Individual creation already supports multi-metric. Gap is bulk upload only. |
| Multi-unit bulk upload | Low-Medium | Shares conversion table with unit conversion initiative. |
| Continue Simplify initiative | TBD | Design-led. Scope depends on design decisions. |

### Data Access

| Initiative | Complexity | Why |
|---|---|---|
| Data download from UI for customers | Medium | Needs scoping first. Good value but undefined. |

### Scaling Carbon Features (conditional on pipeline)

| Initiative | Complexity | Trigger |
|---|---|---|
| Configurable NPV calculation | Medium | Second carbon customer requesting it |
| Environmental impact from activity variables | Medium | Second carbon customer requesting it |
| MAC Curve for all carbon customers | Low | Follows from NPV + environmental impact if done |

**Note:** Do NOT invest engineering time unless there is an active deal or customer request.

---

## Already Done

| Initiative | Status |
|---|---|
| Side navigation favorites | Fully implemented (useSidebarFavorites hook with API-backed storage) |

---

## Explicitly Not Q2

| Initiative | When |
|---|---|
| Multi-level scenario aggregation (site → site group → company) | Q3 — design ready |
| Project phase taxonomy customization | Future — keep in mind |
| Cross-site project duplication with recalculation | Not prioritized |
| Data gathering snapshots | Q3 candidate |
| Data extraction APIs | Nice to have |
| Unit conversion for carbon | When needed |
| Unified water + carbon view | Future — after separation is solid |

---

## Consolidated Q2 Timeline

### May — Foundations

**Rock 1 (ABI):**
- Discovery sessions with ABI
- Map prioritization criteria and constraints

**Rock 2 (Logistics):**
- First discovery meetings (starting this week)
- Begin methodology mapping

**Rock 3 (Sites):**
- Day 1: expand scenario limit (one-line change)
- Week 1-2: homepage rollout (config + make categories configurable per company)
- Full month: design permission system (actions, visibility, editing — full model)

**Quarter work:**
- Start water/carbon separation (backend architecture)
- Start year-aware emission factors

### June — Build

**Rock 1 (ABI):**
- Design + architecture finalized
- Engineering starts building MVP
- ABI approves design

**Rock 2 (Logistics):**
- Gap analysis complete
- Data requirements defined
- Design inputs shared

**Rock 3 (Sites):**
- Permissions MVP: role-based actions + cross-site visibility implemented
- Side nav mobile delivered
- Side nav feature flag removed, legacy nav cleaned up

**Quarter work:**
- Water/carbon separation delivered (entities, configs, scenarios)
- Year-aware emission factors delivered
- Start unit conversion for water

### July — Deliver & Validate

**Rock 1 (ABI):**
- MVP delivered
- ABI tests with real data
- Iterate based on feedback

**Rock 2 (Logistics):**
- Design spec validated
- Engineering can estimate Q3 implementation

**Rock 3 (Sites):**
- Permissions extended: granular data visibility, breakdown respecting permissions, lock by role
- At least 2 clients (Coca-Cola + Colgate) configured and validated
- Clients can start rolling out TT to site users

**Quarter work:**
- Unit conversion for water delivered
- Scenario-aware landing page delivered
- Evaluate tier 3 items based on remaining capacity

---

## Risk Summary

| Risk | Impact | Mitigation |
|---|---|---|
| Water/carbon separation touches ~145+ files | Delays if not scoped well | Start with backend model, migrate data early, frontend follows |
| Permission system designed too narrow | Rework when second client model doesn't fit | Design full model upfront (Coca-Cola + Colgate + generic), implement incrementally |
| ABI discovery doesn't converge | Engineering can't start on time | Time-box discovery to 3-4 weeks. Define "good enough" criteria early |
| Colgate requests 2025 data before emission factors are ready | Manual workaround or delay | Start emission factor work in May, don't wait for Colgate to ask |
| Side nav mobile underestimated | AI Water Meters blocked | Involve design early. Prototype on real devices. Don't treat it as "just CSS" |
| Too many parallel initiatives | Team spread thin, nothing ships | Rocks come first. Quarter work gets remaining capacity. If something has to slip, it's quarter work — never a rock. |

---

## Decision Log

| Decision | Rationale |
|---|---|
| Scope 3 Logistics is a rock (not parked) | Ivo leads discovery personally — attends all meetings, maps methodology, defines design inputs |
| Water/carbon separation is NOT a rock | Only affects Colgate today. Important for the business long-term but doesn't block site rollout for other clients |
| Scaling carbon features is conditional | No active demand from other clients. Only invest if pipeline justifies it |
| Side nav favorites is done | Already implemented with API-backed storage. No work needed |
| Permission system designed as full model, implemented incrementally | Avoids rework. Coca-Cola and Colgate have opposite requirements — model must support both from day 1 |
| Homepage rollout is config + implementation, no new design | Design already validated with Colgate. Make categories configurable per company |
