# Q2 2026 — Prioridades, Dependencias y Timeline
> Documento para alinear con el equipo. Complementa `q2_consolidated_initiatives.md` (detalle de cada iniciativa).
> Generado 2026-05-04. Pendiente: estimaciones de eng por iniciativa.

---

## Prioridades ordenadas

### TIER 1 — Comprometido / Urgente (mayo-junio)

| # | Iniciativa | Por qué ahora | Tipo |
|---|---|---|---|
| **P1** | AB InBev — Smart Scenario Prioritization | Vendido. Deadline 24 agosto. | DISC → DESIGN → ENG |
| **P2** | TT Settings Panel (config contextual de key metrics/cards) | Diseño listo. Desbloquea feature flag. Prerequisito para scenario selection en landing. | ENG |
| **P3** | Gap-to-target (extender waterfall) | Engagement con sites. Métrica de valor para que entiendan cuánto reducir. | ENG |
| **P4** | Homepage rollout | Diseño listo. Pedido por jefa de Tobías. Quick win cuando Mica tenga capacidad. | ENG (frontend) |

### TIER 2 — Importante (junio-julio, según capacidad)

| # | Iniciativa | Por qué ahora | Tipo |
|---|---|---|---|
| **P5** | Unit Conversion (water) | Tobías lo pidió muchas veces. Sites hablan en m³, plataforma muestra litros. | ENG |
| **P6** | Water/Carbon Separation | Evitar confusión en sites con scenarios cruzados. Timing depende de cuándo Colgate active sites (training líderes 11 mayo, pero sites probablemente después). | ENG |
| **P7** | Permissions (configurable visibility) | Coca-Cola quiere read-only cross-site. Colgate quiere restricción. Ivo valida con Tobías qué busca realmente. | DESIGN → ENG |
| **P8** | Conversion Factors (year-aware) | Colgate data 2025 viene. Ivo chequea timing con Marisa mañana. | ENG |
| **P9** | Side Nav (design mobile + flag cleanup) | Mobile necesario para AI Water Meters. Cerrar migración pendiente. | DESIGN → ENG |

### TIER 3 — Diferido / Condicional

| # | Iniciativa | Condición | Tipo |
|---|---|---|---|
| **P10** | Projects Simplify (TT + Projects nav) | Maria diseñando esta semana. Necesita entrevistas con clientes antes de eng. | DESIGN → ENG |
| **P11** | Data Download from UI | No crítico ahora. Evaluar más adelante. | ENG |
| **P12** | Scaling Carbon Financial | Solo si se vende carbono a otro cliente. | ENG |

### DISCOVERY en paralelo (no consume eng)

| # | Iniciativa | Quién | Estado |
|---|---|---|---|
| **D1** | Scope 3 Logistics | Ivo + Pipe | ~1 mes discovery → alineamiento equipo → design → eng (Q3?) |
| **D2** | CCEP Yearly Targets | Ivo + Cami | Esperando alineamiento metodología final de Coca-Cola |
| **D3** | True Cost of Water | Ivo + Cami | Validar si cálculo es estándar across sites |

---

## Mapa de dependencias

```
TT Settings Panel (P2)
  └──→ Scenario selection en landing page (parte de P2, fase 2)
  └──→ Water/Carbon Separation (P6) se beneficia — la config ya va a ser contextual

Gap-to-target waterfall (P3)
  └──→ Futuro: multiplicar gap × True Cost of Water = métrica financiera de gap

Unit Conversion (P5)
  └──→ Multi-unit bulk upload (comparte tabla de conversión)

Water/Carbon Separation (P6)
  └──→ Scenario limit se resuelve solo (5 por dominio)
  └──→ KPI cards y table columns per-domain (trabajo real, verificado en código)

Permissions (P7)
  └──→ Necesita definición de producto primero (Ivo valida con Tobías)
  └──→ Lock extension como quick win independiente

Conversion Factors (P8)
  └──→ Self-service factor management (bundle)
  └──→ Desbloquea Environmental Impact generalización (si Scaling Carbon se activa)

AB InBev (P1)
  └──→ Ivo discovery → compartir con Ema → Ema piensa arquitectura (~2 sem)
  └──→ Design UX (Maria) en paralelo con arquitectura
  └──→ Eng build (Ema + Mica)
```

---

## Timeline por persona (borrador — pendiente estimaciones)

### Ivo (PM + Discovery)
| Semana | Foco |
|---|---|
| 5-9 mayo | AB InBev: explicar proyecto a Ema. Validar con Marisa (Colgate): timing data 2025 + cuándo activan sites. Validar con Tobías: qué busca realmente con cross-site visibility. |
| 12-16 mayo | AB InBev: continuar discovery con Gustavo. Scope 3: iniciar discovery con Pipe. Refinar TT Settings Panel y Gap-to-target con equipo. |
| 19-30 mayo | AB InBev: cerrar discovery, alinear con Ema + Maria para architecture. Scope 3: discovery continúa. |
| Junio | AB InBev: seguimiento build. Permissions: definir modelo con hallazgos de Tobías. CCEP/TCW: discovery según avance Coca-Cola. |
| Julio | AB InBev: validación. Scope 3: alineamiento equipo → brief a design. |

### Ema (Backend)
| Semana | Foco | Notas |
|---|---|---|
| 5-9 mayo | Reunión AB InBev con Ivo. Puede arrancar con TT Settings Panel o Gap-to-target si hay refinement listo. | Depende de qué se refine el martes 6. |
| 12-23 mayo | AB InBev: pensar arquitectura de agentes/orquestadores (~2 semanas). | En paralelo puede hacer tareas backend menores si hay. |
| 26 mayo - 6 junio | AB InBev: continúa architecture + inicio build. | ¿O puede intercalar con otra iniciativa? |
| Junio-Julio | AB InBev build + iniciativas P5-P8 según capacidad. | Timeline depende de cuánto lleve AB InBev. |

> **Pregunta clave para Ema:** ¿Las 2 semanas de pensar arquitectura AB InBev son full-time o puede intercalar con tareas de otras iniciativas (TT Settings, Gap-to-target, Unit Conversion)?

### Maria (Design)
| Semana | Foco | Notas |
|---|---|---|
| 5-9 mayo | Projects Simplify: tarea en curso. | Ya tiene diseño listo de TT Settings Panel y Homepage. |
| 12-23 mayo | AB InBev: diseño UX de smart scenario prioritization. | Puede arrancar en paralelo con Ema pensando architecture. |
| 26 mayo+ | AB InBev: iterar diseño. Side Nav: mobile UX design. | |
| Junio | Side Nav mobile. Permissions UX (si Ivo tiene definición). | |
| Julio | Scope 3: design spec (si discovery está listo). | |

### Mica (Frontend)
| Semana | Foco | Notas |
|---|---|---|
| 5-16 mayo | Water Stewardship (comprometida). | Capacidad limitada para TT. |
| 19 mayo+ | **Si tiene capacidad:** Homepage rollout (P4) — diseño listo, implementación directa. | Quick win. |
| Junio | TT Settings Panel frontend. Gap-to-target frontend. AB InBev frontend (cuando esté listo). | Priorizar según lo que Ema tenga listo en backend. |
| Julio | AB InBev frontend. Unit Conversion frontend. Water/Carbon separation frontend. | |

> **Pregunta clave para Mica:** ¿Después del 16 mayo tiene capacidad parcial o full para TT?

---

## Para estimar con el equipo

Cada iniciativa necesita una estimación de esfuerzo para poder armar el calendario definitivo. Propongo llevar este formato al refinamiento:

| Iniciativa | Design (días) | Backend (días) | Frontend (días) | Pregunta clave |
|---|---|---|---|---|
| **TT Settings Panel** (config contextual) | Listo ✓ | ¿? | ¿? | ¿Cuánto trabajo es hacer la config contextual por vista? |
| **Gap-to-target** (extender waterfall) | Poco | ¿? | ¿? | ¿El cálculo del gap absoluto es complejo? |
| **Homepage rollout** | Listo ✓ | Mínimo (config) | ¿? | ¿Es solo hacer HOME_CATEGORIES configurable? |
| **Unit Conversion** (water) | Poco | ¿? | ¿? | ¿Tabla de conversión + capa display en cuántos puntos? |
| **Water/Carbon Separation** | N/A | ¿? | ¿? | ¿Solo scenarios + KPI/table config, o hay más entities? |
| **Permissions** (cross-site visibility) | ¿? | ¿? | ¿? | Necesita definición producto primero |
| **Conversion Factors** (year-aware) | N/A | ¿? | ¿? (self-service UI) | ¿Migración de datos existentes es compleja? |
| **Side Nav** (mobile + cleanup) | ¿? (mobile) | Bajo | ¿? (cleanup ~149 refs) | ¿Flag cleanup es mecánico? |

---

## Cadencia de trabajo semanal

| Día | Ceremonia | Qué se decide |
|---|---|---|
| **Martes** | Refinement | Se toman 1-2 iniciativas, se descomponen en tareas, se estiman. Output: tareas listas para implementar. |
| **Viernes** | Planning | Se asignan tareas de la semana siguiente según prioridad de negocio y capacidad disponible. |

### Propuesta de orden de refinamiento (martes):

| Fecha | Refinar | Por qué primero |
|---|---|---|
| **6 mayo** | TT Settings Panel + Gap-to-target | Diseño listo. Pueden arrancar esta semana/próxima. Preparar agenda de AB InBev. |
| **13 mayo** | AB InBev (architecture) + Homepage rollout | Ema ya tuvo contexto 1 semana. Homepage para Mica cuando se libere. |
| **20 mayo** | Unit Conversion + Water/Carbon Separation | Con info de Marisa sobre timing de Colgate. |
| **27 mayo** | Permissions (si Ivo tiene definición de Tobías) o Conversion Factors | Según qué esté más definido. |
| **Junio+** | Side Nav, Projects Simplify, lo que siga | Según avance y capacidad. |

---

## Definiciones pendientes de Ivo (esta semana)

| Qué | Con quién | Para cuándo | Impacta |
|---|---|---|---|
| Timing data 2025 de Colgate | Marisa | Mañana 5 mayo | Prioridad de Conversion Factors (P8) |
| Cuándo Colgate activa sites en TT | Marisa | Mañana 5 mayo | Urgencia de Water/Carbon Separation (P6) |
| Qué busca realmente Tobías con cross-site | Tobías | Esta semana | Scope de Permissions (P7) |
| Contexto AB InBev para Ema | Ema | Mañana 5 mayo | Arranque de P1 |
