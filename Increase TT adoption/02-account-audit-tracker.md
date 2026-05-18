# Account Audit Tracker — Target Tracking Readiness

**Purpose:** Before demoing TT to any client, verify that their platform setup is actually correct and demo-ready. This checklist covers what to audit per account.

---

## Audit Checklist (per account)

For each account, verify these 6 areas:

### 1. Raw Metrics (Data Gathering)
- [ ] Variables loaded and data present for expected range of years
- [ ] Data looks reasonable (no obvious errors, gaps, or duplicates)
- [ ] Source verified (manual upload vs integration vs Integrum)
- [ ] Monthly vs annual granularity confirmed

### 2. Computed Metrics (Formulas)
- [ ] Computed metrics exist for the targets the client cares about (e.g., WUR, Water Intensity, Scope 1+2)
- [ ] Formulas are correct (numerator/denominator, units)
- [ ] Cross-site aggregation works if needed (site group / company level)

### 3. Targets
- [ ] Targets created with correct baseline year and value
- [ ] Target end year and value match public commitment
- [ ] Checkpoints/annual milestones set if needed
- [ ] Target linked to the correct computed metric

### 4. Projects
- [ ] Projects exist and are in correct phases (draft/proposed/inProgress/completed)
- [ ] Projects have impact values (savings in m3, tCO2, etc.)
- [ ] Projects have CAPEX/cost data where available
- [ ] Projects linked to correct site
- [ ] Implementation dates set

### 5. Scenarios
- [ ] At least one scenario exists connecting projects to targets
- [ ] Scenario shows meaningful projection (line goes toward target)
- [ ] Base case makes sense (projection without projects)

### 6. Dictionaries / Config
- [ ] Unit conversions configured correctly
- [ ] Site groups set up if client uses regional views
- [ ] Permissions appropriate (who can edit what)

---

## Audit Status per Account

### Priority 1 — Demo-ready candidates (audit first)

| Account | SSP | Audit status | Raw Metrics | Computed | Targets | Projects | Scenarios | Config | Blocker / Notes |
|---------|-----|-------------|-------------|----------|---------|----------|-----------|--------|-----------------|
| Colgate-Palmolive | Felipe | NOT STARTED | 84 vars, 2010-2026 | ? | 3 targets exist | 496 (!) | ? | ? | Felipe didn't complete SSP task. Need his input first. |
| Alcoa | Agustin/Ramiro | NOT STARTED | 56 vars, 2019-2025 | ? | 6 targets exist | 129 | ? | ? | Most targets already set. High maturity. |
| Coca-Cola CCEP | Camila Behar | NOT STARTED | 7 vars, 2019-2025 | ? | WUR target exists | 148 | ? | ? | Strategy session done. Elena meeting end May. |
| Coca-Cola Andina | Camila Perez | NOT STARTED | 19 vars, 2022-2025 | ? | WUR + WUR2 testing | 114 | ? | ? | |
| Coca-Cola Eurasia/ME | Agustin/Nico | NOT STARTED | 9 vars, 2015-2025 | ? | None listed | 75 | ? | ? | Need to check if targets should exist |
| Coca-Cola ECCBC | Camila Bengolea | NOT STARTED | 14 vars, 2022-2025 | ? | TW + WUR targets | 69 | ? | ? | ONLY WATER |
| Brown-Forman | Camila Perez | NOT STARTED | 24 vars, 2016-2024 | ? | 4 carbon targets | 11 | ? | ? | Net positive water target not in platform yet? |
| Bocar | Paz | NOT STARTED | 7 vars, 2020-2025 | ? | TW + WI targets | 36 | ? | ? | |
| Constellation Brands | Paz | NOT STARTED | 8 vars, 2024-2024 | ? | WUR target | 13 | ? | ? | Short horizon (2028) |
| Coca-Cola Arca Continental | Agostina | NOT STARTED | 11 vars, 2025-2025 | ? | Demo target listed | 5 | ? | ? | Only 1 year of data |

### Priority 2 — Need work before audit

| Account | SSP | Blocker |
|---------|-----|---------|
| Coca-Cola Femsa | Agostina/Camila Perez | Data loaded, zero projects. Need project creation. |
| PepsiCo | Matias/Santos | Ambitious targets, 2 vars only, 0 projects. Major data gap. |
| AB InBev | Consuelo/Ramiro | TT in scope, no data. Waiting on ABI discovery. |
| Remy Cointreau | Camila Perez | Data loaded, 0 projects, no targets in platform. |
| Sigma | Paz | SSP says no utility — setting new 2030 target. Revisit June. |

---

## How to run an audit

1. Open the account in the Waterplan platform
2. Go to Data Gathering — verify raw metrics match expected vars/years from the Excel
3. Go to Computed Metrics — check formulas exist and are correct
4. Go to Target Tracking — verify targets, baselines, checkpoints
5. Go to Projects — check count, phases, impact values
6. Try creating/viewing a scenario — does the projection make sense?
7. Note any gaps or issues in the tracker above
8. If clean: mark READY and schedule demo with SSP
9. If gaps: create tickets or coordinate with SSP/data team to fix
