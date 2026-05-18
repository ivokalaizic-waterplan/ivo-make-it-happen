# Q2 2026 — Worksheet de Priorización de Iniciativas

## Instrucciones
Para cada iniciativa, completar la columna "Tu input" con:
- **Prioridad**: P1 (mayo), P2 (junio), P3 (julio), P4 (condicional/diferido)
- **Urgencia**: Por qué ahora y no después
- **Asignación sugerida**: Maria (Design), Ema (Backend), Micaela (Frontend), Ivo (PM), SS (Solution Specialist)

---

## THEME 1: Water/Carbon Separation in Target Tracking

**Problema que resuelve:** La separación hoy es solo un toggle de frontend. Scenarios, configs y métricas se mezclan entre dominios. Los usuarios ven data irrelevante y se confunden.

| # | Iniciativa | Complejidad | Dependencias | Trabajo | Tu input |
|---|---|---|---|---|---|
| 1.1 | Separate Water and Carbon as independent domains | High | Ninguna — ES la dependencia | Backend + Frontend | |
| 1.2 | Independent key metrics and column config per domain | Medium | Depende de 1.1 | Backend + Frontend | |
| 1.3 | Independent scenario management per domain | Medium | Depende de 1.1 | Backend + Frontend | |
| 1.4 | Expand scenario limit (MAX_SCENARIOS) | Very Low | Ninguna | Frontend (1 constante) | |

---

## THEME 2: Permissions & Role-Based Access in Target Tracking

**Problema que resuelve:** Las empresas no pueden hacer rollout seguro de TT a más usuarios. Coca-Cola y Colgate tienen modelos opuestos de visibilidad. No hay restricción de acciones por rol.

| # | Iniciativa | Complejidad | Dependencias | Trabajo | Tu input |
|---|---|---|---|---|---|
| 2.1 | Role-based action permissions (create, edit, lock) | High | Ninguna | Design + Backend + Frontend | |
| 2.2 | Configurable cross-site visibility | High | Diseñar junto con 2.1 | Design + Backend + Frontend | |
| 2.3 | Granular data visibility (hide financial metrics) | Medium | Depende de 2.1/2.2 | Backend + Frontend | |
| 2.4 | Configurable lock permissions by role | Low | Depende de 2.1 | Backend + Frontend | |
| 2.5 | Breakdown by site respecting permissions | Low | Depende de 2.1/2.2 | Frontend (validación) | |
| 2.6 | Bulk role creation | Medium | Depende del modelo de permisos | Backend + Frontend | |

---

## THEME 3: AB InBev — Smart Scenario Prioritization

**Problema que resuelve:** AB InBev necesita priorizar proyectos de agua considerando restricciones de presupuesto e impacto. Hoy lo hacen manualmente con Excel. Committed sale — deadline 24 agosto (live con grupo LATAM de Gustavo).

| # | Iniciativa | Complejidad | Dependencias | Trabajo | Tu input |
|---|---|---|---|---|---|
| 3.1 | Complete discovery: map prioritization criteria | High | Ninguna | PM (Ivo) + Gustavo | |
| 3.2 | Design + architecture: AI agent approach, UX | High | Depende de 3.1 | Design (Maria) + Backend (Ema) | |
| 3.3 | Engineering builds MVP | High | Depende de 3.2 | Backend + Frontend | |

---

## THEME 4: Target Progress & Scenario Experience

**Problema que resuelve:** La landing page siempre muestra base case. Los usuarios no ven el escenario que representa su realidad. Gap-to-target solo en ratios, no en términos que leadership entienda.

| # | Iniciativa | Complejidad | Dependencias | Trabajo | Tu input |
|---|---|---|---|---|---|
| 4.1 | Scenario-aware landing page | Medium | Mejor después de 1.1 (separación) | Poco Design + Backend + Frontend | |
| 4.2 | Gap-to-target in absolute and financial terms | Medium | Puede necesitar cost factors | Backend + Frontend | |

---

## THEME 5: Platform Navigation & Entry Experience

**Problema que resuelve:** Homepage — users llegan a Overview genérico. Side Nav — migración incompleta, dual layout, cero mobile, bloquea AI Water Meters.

| # | Iniciativa | Complejidad | Dependencias | Trabajo | Tu input |
|---|---|---|---|---|---|
| 5.1 | Homepage rollout for all customers | Low-Medium | Ninguna (diseño listo) | Frontend (config) | |
| 5.2 | Side nav: complete mobile UX design | Medium | Ninguna | Design (Maria) | |
| 5.3 | Side nav: flag cleanup + eng implementation | Medium-High | Depende de 5.2 | Frontend + Backend | |

---

## THEME 6: Conversion Factors & Historical Data Accuracy

**Problema que resuelve:** Colgate va a mandar data 2025 y la plataforma no soporta factores por año. Un solo valor por variable/sitio. Bloquea auditabilidad y cálculo correcto histórico. También fortalece plataforma de carbono para escalar.

| # | Iniciativa | Complejidad | Dependencias | Trabajo | Tu input |
|---|---|---|---|---|---|
| 6.1 | Year-aware emission factors | Medium | Ninguna | Backend | |
| 6.2 | Year-aware energy cost factors | Medium | Bundle con 6.1 | Backend | |
| 6.3 | Self-service emission factor management | Medium | Bundle con 6.1 | Backend + Frontend | |

---

## THEME 7: Unit Conversion in Target Tracking

**Problema que resuelve:** Coca-Cola usa metros cúbicos, plataforma muestra litros. Números 1000x diferentes. Pedido directo de Tobias. Fricción diaria para usuarios activos.

| # | Iniciativa | Complejidad | Dependencias | Trabajo | Tu input |
|---|---|---|---|---|---|
| 7.1 | Unit conversion for water variables | Medium | Ninguna | Backend + Frontend | |
| 7.2 | Multi-unit bulk upload | Low-Medium | Comparte tabla de conversión con 7.1 | Backend | |

---

## THEME 8: Scaling Carbon Financial Features

**Problema que resuelve:** NPV, Environmental Impact y MAC Curve solo funcionan para Colgate (hardcodeado). Para escalar carbon a otro cliente, necesitamos generalizar. Hay pipeline pero necesita deal cerrado.

| # | Iniciativa | Complejidad | Dependencias | Trabajo | Tu input |
|---|---|---|---|---|---|
| 8.1 | Configurable NPV calculation | Medium | Ninguna (o design para UX tasas) | Design (ideal) + Backend | |
| 8.2 | Environmental impact generalization | Medium | Depende de 6.1 (year-aware factors) | Backend | |
| 8.3 | MAC Curve for all carbon customers | Low (si deps met) | Depende de 8.1 + 8.2 | Frontend (config flag) | |

---

## THEME 9: Scope 3 Logistics — Discovery

**Problema que resuelve:** Clientes quieren medir Scope 3 logistics. La plataforma solo maneja Scope 1 y 2. Complementa la oferta de carbono.

| # | Iniciativa | Complejidad | Dependencias | Trabajo | Tu input |
|---|---|---|---|---|---|
| 9.1 | Understand current methodology | Low (design only) | Ninguna | PM (Ivo) + SS (Pipe) | |
| 9.2 | Gap analysis + data requirements | Low | Depende de 9.1 | PM + Design | |
| 9.3 | Design spec for Q3 implementation | Low-Medium | Depende de 9.2 | Design (Maria) | |

---

## THEME 10: Projects Module Improvements

**Problema que resuelve:** Bulk upload no soporta multi-metric ni multi-unit. Navegación confusa entre Projects module y Project Database en TT.

| # | Iniciativa | Complejidad | Dependencias | Trabajo | Tu input |
|---|---|---|---|---|---|
| 10.1 | Multi-metric bulk upload | Low-Medium | Ninguna | Backend (bajo) | |
| 10.2 | Multi-unit bulk upload | Low-Medium | Comparte con 7.1 | Backend | |
| 10.3 | Simplify TT + Projects navigation | TBD (design-dependent) | Ninguna | Design (Maria) — scope TBD | |

---

## THEME 11: Data Gathering Improvements

**Problema que resuelve:** Independizar del equipo de ingeniería para cargar/editar factores. Clientes no pueden exportar data para sus reportes propios.

| # | Iniciativa | Complejidad | Dependencias | Trabajo | Tu input |
|---|---|---|---|---|---|
| 11.1 | Self-service factor management | Medium | Bundle con 6.1 | Backend + Frontend | |
| 11.2 | Data download from UI | Medium (needs scoping) | Ninguna | Backend + Frontend | |

---

## THEME 12: Yearly Targets Calculator (CCEP)

**Problema que resuelve:** Coca-Cola tiene 90+ Excel files para setear targets anuales por sitio. Proceso de semanas, errores manuales, desconexión con target 2030 en Waterplan. Oportunidad de absorber un proceso offline en la plataforma para aumentar frecuencia de uso (de esporádico a mensual).

| # | Iniciativa | Complejidad | Dependencias | Trabajo | Tu input |
|---|---|---|---|---|---|
| 12.1 | Discovery: mapear metodología con Tobias + E-leads | Low | Esperar output reunión Barcelona (1/5) | PM (Ivo) + SS (Cami) | |
| 12.2 | Validar si hay oportunidad de producto | Low | Depende de 12.1 + workshops | PM (Ivo) | |

---

## THEME 13: True Cost of Water Calculator

**Problema que resuelve:** Coca-Cola calcula el costo real del agua en un Excel separado. El valor ya se puede ver en TT pero se ingresa manualmente. Oportunidad de que al hacer clic se vea de dónde sale el número. Mismos problemas que tuvo la WUR Calculator (local, sin visibilidad cross-empresa).

| # | Iniciativa | Complejidad | Dependencias | Trabajo | Tu input |
|---|---|---|---|---|---|
| 13.1 | Discovery: entender el Excel y el proceso actual | Low | Ninguna | PM (Ivo) + SS (Cami) | |
| 13.2 | Validar pain y scope | Low | Depende de 13.1 | PM (Ivo) | |

---

## Resumen de recursos

| Persona | Rol | Disponibilidad Q2 |
|---|---|---|
| **Maria** | Design | |
| **Ema** | Engineering (Backend focus) | |
| **Micaela** | Engineering (Frontend focus) | |
| **Ivo** | PM — Discovery + gestión | |
| **Pipe** | Solution Specialist (Scope 3, AB InBev) | |
| **Cami Behar** | Solution Specialist (Coca-Cola — Yearly Targets, True Cost of Water) | |

---

## Notas para completar

- Marcar prioridad de cada iniciativa (P1/P2/P3/P4)
- Indicar mes esperado de inicio y cierre
- Señalar si hay bloqueos conocidos
- Indicar qué necesitás que esté resuelto antes de la sesión con eng
