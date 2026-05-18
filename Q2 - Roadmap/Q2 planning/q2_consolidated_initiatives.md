# Q2 2026 — Iniciativas Consolidadas
> Versión consolidada post-review con Ema + correcciones de Ivo (2026-05-04).
> Incluye verificación técnica contra código en producción.

---

## Cómo leer este documento

Cada iniciativa tiene:
- **Pain / Por qué**: qué problema atacamos y por qué ahora
- **Tipo**: ENG (requiere desarrollo), DESIGN (diseño/UX), DISCOVERY (investigación/producto)
- **Complejidad estimada**
- **Recursos**: quién trabaja en qué
- **Sub-tareas**: para llevar a refinamientos y descomponer en tickets
- **Feedback de Ema**: qué dijo, qué es válido, qué necesita revisión
- **Puntos para discutir**: preguntas abiertas para la reunión de refinamiento

---

## INICIATIVA 1: AB InBev — Smart Scenario Prioritization
**Tipo:** DISCOVERY → DESIGN → ENG | **Complejidad:** High | **Deadline:** 24 agosto (live con grupo LATAM)

**Pain / Por qué:** AB InBev necesita priorizar proyectos de agua considerando restricciones de presupuesto, impacto y operación. Hoy lo hacen en Excel con decisiones manuales. Es un deliverable vendido — el mayor objetivo del Q2. Si no se entrega, hay riesgo comercial directo.

**Feedback de Ema:** Pidió más contexto — "I've been hearing about it a lot but I don't know anything about it yet and I am a little worried we already sold it". Reunión agendada para compartir info.

**Sub-tareas:**
1. Completar discovery: mapear criterios de priorización con Gustavo (PM: Ivo)
2. Compartir contexto técnico completo con Ema (BLOCKER — Ema no tiene info suficiente aún)
3. Design + architecture: approach de AI agent, UX (Design: Maria + Backend: Ema)
4. Engineering builds MVP (Backend + Frontend)

**Puntos para refinamiento:**
- [ ] Ema necesita entender qué se vendió exactamente y qué libertad hay en la solución
- [ ] Definir qué info del discovery se comparte con eng antes de empezar architecture
- [ ] Evaluar si el approach de AI agent es viable o si hay una solución más simple

**Recursos:** Ivo (discovery) → Maria + Ema (design+arch) → Ema + Mica (build)

---

## INICIATIVA 2: Water/Carbon Separation in Target Tracking
**Tipo:** ENG | **Complejidad:** High (se mantiene — verificación de código contradice a Ema)

**Pain / Por qué:** La separación hoy es solo un toggle de frontend. Un usuario de agua ve scenarios de carbono llamados "Energy approved projects" con cero proyectos relevantes. Key metrics como payback period configuradas para carbono muestran "no data" en agua. La experiencia se siente rota y confusa. Es foundational para que los sites adopten la plataforma — si no separamos bien, cada feature nueva que hagamos en TT va a arrastrar este problema.

**Feedback de Ema vs. verificación en código:**
- Ema dijo: "the only meaningful impact is on scenarios" y "table and key metrics options are defined by variable"
- **Verificación en código (producción):** Ema está **parcialmente equivocado**. Los charts SÍ tienen config jerárquica por metric type (`byMetricType`, `byMetric` en `ChartsSettings`). Pero **KPI cards** (`enabledMetrics`) y **table columns** (`hiddenColumns` en `ProjectsTableSettings` y `ScenariosTableSettings`) son **globales por company** — un solo array que aplica igual a water y carbon. No hay distinción por dominio ni por variable. Ver `TargetTrackingSettings/types.ts`.
- **Conclusión:** La sub-iniciativa de independent key metrics y table config per domain **SÍ es trabajo real**.

**Sub-tareas:**
1. Agregar campo `domain` al modelo de scenario (Backend: Ema)
2. Migrar scenarios existentes asignando dominio correcto (Backend: Ema)
3. Filtrar queries y UI de scenarios por dominio (Backend + Frontend)
4. Hacer KPI cards settings (`enabledMetrics`) per-domain — agregar `byDomain` o `byTargetType` al modelo, similar al pattern que ya existe en charts (Backend + Frontend)
5. Hacer table column settings (`hiddenColumns`) per-domain — mismo pattern (Backend + Frontend)
6. Training videos: evaluar si se separan por dominio (diseño + config)
7. Scenario limit: con la separación, cada dominio queda con 4 slots + base case (5 total). Suficiente por ahora — si un cliente necesita más, se incrementa.

**Puntos para refinamiento:**
- [ ] Mostrar a Ema la evidencia del código: KPI cards y tables son globales, no por variable. Charts sí tienen el pattern correcto — replicar ese pattern.
- [ ] Definir cómo migrar scenarios existentes (¿inferir dominio por tipo de proyectos asociados?)
- [ ] ¿Hay otros entities además de scenarios que necesiten el campo domain?
- [ ] Scenario limit: confirmar que 5 por dominio alcanza. Dejar pendiente incrementar si un cliente lo pide.

**Recursos:** Ema (backend) + Mica (frontend)

---

## INICIATIVA 3: Permissions & Role-Based Access in Target Tracking
**Tipo:** ENG | **Complejidad:** High (se mantiene — el scope real es más amplio que lo que Ema sugiere)

**Pain / Por qué:** Las empresas no pueden hacer rollout seguro de Target Tracking a más usuarios. Hoy cualquier usuario con acceso puede hacer cualquier acción. El problema no es solo quién puede lockear — es que cada empresa tiene un modelo diferente de gobernanza:
- **Coca-Cola** quiere que todos los usuarios vean todos los sites (read-only para los que no son suyos), para tener contexto de empresa completo.
- **Colgate** quiere visibilidad estricta: solo ves tu site, nada más.
- Ambos modelos son válidos. La plataforma no soporta ninguno de forma configurable.

Sin esto, los clientes enterprise no pueden expandir el uso de TT dentro de sus organizaciones — que es el objetivo principal del Q2.

**Feedback de Ema (parcialmente fuera de scope):**
- Ema sugirió solo extender lock a canManage/canEdit. Eso es una sub-tarea simple, pero **no es el problema que estamos resolviendo**. El lock extension ya estaba en el worksheet original como una línea menor.
- Ema dijo "I wouldn't do [cross-site visibility]" y que granular data visibility "ya funciona". **Esto necesita discusión** — el pain de Coca-Cola (ver todos los sites read-only) es real y validado. El approach puede no ser dar acceso raw a todo, pero el problema existe.

**Sub-tareas:**
1. Definir modelo de permisos configurable: qué acciones y qué visibilidad puede configurar cada empresa para sus roles (Product: Ivo + Design: Maria)
2. Diseñar los dos modelos validados: Coca-Cola (open read-only) vs. Colgate (restricted) — y cómo la config soporta ambos
3. Extender lock permissions a canManage/canEdit (Backend: Ema — simple, puede ir primero como quick win)
4. Implementar configurable cross-site visibility (Backend + Frontend — requiere diseño previo)
5. Evaluar granular data visibility: ¿realmente ya funciona como dice Ema? Verificar en producción.
6. Bulk role creation: diferido a cuando el modelo esté estable

**Puntos para refinamiento:**
- [ ] Discutir con Ema: el pain no es lock, es governance configurable. ¿Cómo lo abordamos sin sobrecomplicar?
- [ ] ¿Qué approach para cross-site visibility satisface a Coca-Cola sin dar acceso raw? ¿Dashboards? ¿Vista read-only de datos agregados?
- [ ] Verificar claim de Ema sobre granular data visibility — ¿realmente se redacta financial data para sites sin acceso?
- [ ] ¿Se puede hacer incremental? Quick win (lock extension) → configurable visibility → granular data

**Recursos:** Ivo + Maria (diseño modelo) → Ema (backend) + Mica (frontend)

---

## INICIATIVA 4: Target Progress & Scenario Experience
**Tipo:** ENG | **Complejidad:** Medium

**Pain / Por qué:** La landing page siempre muestra base case, que incluye todos los proyectos no cancelados — incluso los poco realistas. Los usuarios ven un "on track" que no representa su plan real. Además, el gap-to-target solo se muestra en ratios de intensidad, no en términos que leadership entienda (litros, metros cúbicos, dólares). Esto hace que TT sea difícil de usar para advocacy interno.

**Feedback de Ema:** Preguntó si gap-to-target no está ya en el waterfall going in/going out. Ivo aclaró: es una extensión del waterfall existente, agregando el gap restante al target. No es algo nuevo from scratch.

**Sub-tareas:**
1. Scenario-aware landing page: campo para "representative scenario" por target/site (Backend + Frontend)
2. Gap-to-target: extender waterfall chart con gap restante en términos absolutos y financieros (Backend + Frontend)

**Puntos para refinamiento:**
- [ ] Gap-to-target: confirmar que Ema entiende que es una extensión del waterfall existente, no algo nuevo
- [ ] ¿Se necesitan cost factors para la traducción financiera? ¿De dónde salen?
- [ ] Prioridad relativa entre scenario-aware landing page vs. gap-to-target

**Recursos:** Ema (backend) + Mica (frontend), poco Design

---

## INICIATIVA 5: Platform Navigation & Entry Experience
**Tipo:** ENG + DESIGN | **Complejidad:** Medium

**Pain / Por qué:** Los usuarios llegan a un Overview genérico que no los guía. El side nav tiene una migración incompleta con dual layout activo y cero soporte mobile — esto bloquea AI Water Meters que necesita mobile. Homepage ya existe con diseño listo pero solo para Colgate.

**Sub-tareas:**
1. Homepage rollout: hacer HOME_CATEGORIES configurable por company, habilitar módulo `home` para todos (Frontend: Mica — diseño listo)
2. Side nav — mobile UX design (Design: Maria)
3. Side nav — flag cleanup + eng implementation (Frontend: Mica + Backend: Ema — depende de 5.2)

**Puntos para refinamiento:**
- [ ] ¿Homepage rollout puede ir independiente del side nav?
- [ ] Mobile es hard requirement para AI Water Meters — ¿cuál es el timeline de AI Water Meters?
- [ ] Flag cleanup: ~149 referencias — ¿es mecánico o hay decisiones de diseño?

**Recursos:** Maria (design mobile) + Mica (frontend) + Ema (backend flag cleanup)

---

## INICIATIVA 6: Conversion Factors & Historical Data Accuracy
**Tipo:** ENG | **Complejidad:** Medium

**Pain / Por qué:** La plataforma solo soporta un valor de emission factor por variable por site — sin dimensión de año. Cuando Colgate mande data 2025, no se puede calcular correctamente sin sobreescribir los factores 2024. Esto rompe auditabilidad e historicidad. También bloquea escalar carbono a otros clientes. Además, cada cambio de factor requiere intervención de engineering — no hay self-service.

**Sub-tareas (bundle):**
1. Year-aware emission factors: agregar dimensión year al modelo (Backend: Ema)
2. Year-aware energy cost factors: mismo pattern (Backend: Ema — bundle con 6.1)
3. Self-service factor management: UI para que equipo interno cargue/edite factores por año (Backend + Frontend)

**Puntos para refinamiento:**
- [ ] ¿Cuándo se espera que Colgate mande data 2025? ¿Hay deadline?
- [ ] ¿El self-service es para equipo interno (Waterplan) o también para clientes?
- [ ] Migración de factores existentes: ¿se asignan todos al year 2024?

**Recursos:** Ema (backend) + Mica (frontend para UI de management)

---

## INICIATIVA 7: Unit Conversion in Target Tracking
**Tipo:** ENG | **Complejidad:** Medium

**Pain / Por qué:** Coca-Cola trabaja en metros cúbicos, la plataforma muestra litros. Los números son 1000x diferentes de lo que esperan. Pedido directo de Tobias. Genera fricción diaria y erosiona confianza en la plataforma.

**Sub-tareas:**
1. Tabla de factores de conversión (Backend)
2. UI de selección de unidad en TT config (Frontend)
3. Capa de transformación display-only en todos los puntos (landing, charts, tables, exports)
4. Multi-unit bulk upload: acepta unidad por métrica en bulk upload, convierte automáticamente (comparte tabla con 7.1)

**Puntos para refinamiento:**
- [ ] ¿Empezar solo con water (request activo) y carbon después?
- [ ] ¿La tabla de conversión es compartida con Projects bulk upload?
- [ ] ¿Exports también deben respetar la unidad configurada?

**Recursos:** Ema (backend) + Mica (frontend)

---

## INICIATIVA 8: Scaling Carbon Financial Features (CONDICIONAL)
**Tipo:** ENG | **Complejidad:** Medium | **Condición:** Solo si hay deal en pipeline

**Pain / Por qué:** NPV, Environmental Impact y MAC Curve solo funcionan para Colgate (hardcodeado). Para escalar carbono a otro cliente, hay que generalizar. Pero no tiene sentido invertir sin pipeline concreto — solo se activa si hay deal.

**Sub-tareas (solo si se activan):**
1. NPV configurable: tasas de interés como configuración por company (Backend: Ema)
2. Environmental impact generalización: depende de Iniciativa 6 (year-aware factors)
3. MAC Curve para todos los clientes carbon (Frontend — config flag, si 8.1 y 8.2 están)

**Puntos para refinamiento:**
- [ ] ¿Hay pipeline concreto? ¿Quién valida?
- [ ] ¿Se puede hacer solo NPV configurable como quick win sin el resto?

**Recursos:** Ema (backend) + Mica (frontend)

---

## INICIATIVA 9: Projects — Simplify Navigation (TT + Projects)
**Tipo:** DESIGN → ENG | **Complejidad:** TBD (necesita refinamiento propio)

**Pain / Por qué:** Los usuarios ven información de proyectos en dos lugares distintos (Projects module y Project Database dentro de TT) con interfaces diferentes. No queda claro dónde buscar qué. El objetivo es simplificar para que la info no esté duplicada y la navegación sea intuitiva.

**Feedback de Ema:** Propuso directamente remover el tab de Project Inside Defense y mover todo a TT. Es una dirección posible pero **todavía no está definido qué queremos hacer exactamente**. Necesita un refinamiento propio breve antes de decidir approach.

**Sub-tareas:**
1. Refinamiento breve: definir qué se quiere lograr (Product: Ivo + Design: Maria + Eng: Ema)
2. Evaluar propuesta de Ema (remover tab, mover a TT) vs. otras opciones
3. Implementar approach elegido (Frontend + Backend según scope)
4. Multi-metric bulk upload: extender template CSV para múltiples impactos por proyecto (Backend — low-medium, puede ir independiente)

**Puntos para refinamiento:**
- [ ] ¿Qué info se pierde si removemos Project Inside Defense? ¿O es 100% redundante?
- [ ] ¿La solución es merge, diferenciación clara, o rediseño?
- [ ] Multi-metric bulk upload: ¿es prioridad o puede esperar?

**Recursos:** Ivo + Maria (definir approach) → Mica (frontend) + Ema (backend)

---

## INICIATIVA 10: Data Download from UI
**Tipo:** ENG | **Complejidad:** Medium (needs scoping)

**Pain / Por qué:** Los clientes no pueden exportar data de la plataforma para sus propios reportes. Cada pedido de export pasa por el equipo de Waterplan. Reduce stickiness y genera dependencia innecesaria.

**Sub-tareas:**
1. Definir qué datasets exponer (Product: Ivo)
2. Build download endpoints (Backend)
3. UI de download (Frontend)

**Puntos para refinamiento:**
- [ ] ¿Qué vistas necesitan download? ¿TT landing? ¿Scenarios? ¿Projects?
- [ ] ¿Formato CSV o Excel?
- [ ] ¿Es prioridad este Q o puede ir a Q3?

**Recursos:** Ivo (scoping) → Ema (backend) + Mica (frontend)

---

## INICIATIVA 11: Scope 3 Logistics — Discovery
**Tipo:** DISCOVERY | **Complejidad:** Low (solo design/research en Q2)

**Pain / Por qué:** Clientes quieren medir Scope 3 logistics. La plataforma solo maneja Scope 1 y 2. Es expansión estratégica de carbono. Solo discovery este Q — el cliente quiere medir el año que viene.

**Feedback de Ema:** Preguntó si es direct emissions (no electricity converted). Ivo confirmó: 99% transporte (fuel combustion), framework GLEC. Reunión agendada para dar más contexto.

**Sub-tareas:**
1. Entender metodología actual (PM: Ivo + SS: Pipe)
2. Gap analysis + data requirements
3. Design spec para implementación Q3 (Design: Maria)

**Puntos para refinamiento:**
- [ ] Ema necesita más info — reunión agendada
- [ ] ¿Output del Q2 es solo un spec o hay algo mínimo que se pueda prototipar?

**Recursos:** Ivo + Pipe (discovery) → Maria (design)

---

## INICIATIVA 12: Yearly Targets Calculator — CCEP Discovery
**Tipo:** DISCOVERY | **Complejidad:** Low

**Pain / Por qué:** Coca-Cola tiene ~90 Excel files para setear targets anuales por site. Proceso de semanas, errores manuales, sin conexión con target 2030 en Waterplan. Si logramos absorber ese proceso, los sites pasan de usar Waterplan esporádicamente a visitarlo mensualmente.

**Sub-tareas:**
1. Mapear metodología con Tobias + E-leads (post Barcelona meeting 1/5)
2. Validar si hay oportunidad de producto vs. custom per-site

**Recursos:** Ivo + Cami Behar

---

## INICIATIVA 13: True Cost of Water — Discovery
**Tipo:** DISCOVERY | **Complejidad:** Low | **No es engineering este Q**

**Pain / Por qué:** Coca-Cola calcula el costo real del agua en un Excel separado por site. El valor se puede ver en TT pero se ingresa manualmente. Fragmentación de herramientas que el auditor ISO 46001 ya flaggeó. Si el cálculo es estándar across sites, puede ser feature de plataforma.

**Feedback de Ema:** No tenía claro el scope ni si era desarrollo. Ivo confirmó: solo discovery, no es engineering este Q.

**Sub-tareas:**
1. Entender el Excel y proceso actual
2. Validar si el cálculo es estándar across sites/bottlers o demasiado custom

**Recursos:** Ivo + Cami Behar

---

## Resumen: Cambios vs. Worksheet Original

| Tema | Feedback de Ema | Resolución tras verificación |
|---|---|---|
| **Water/Carbon** | "Solo scenarios, key metrics ya están por variable" | **Ema equivocado en key metrics/tables** — verificado en código: KPI cards y table columns son globales por company. Charts sí tienen pattern per-domain. Sub-tareas de config per-domain se mantienen como trabajo real. |
| **Scenario limit** | "Con separación tenés 5 por dominio" | **Correcto** — 4 slots + base case por dominio es suficiente. Se elimina como iniciativa separada pero queda nota: incrementar si un cliente lo necesita. |
| **Permissions** | "Solo extender lock, no hacer cross-site visibility" | **Scope insuficiente** — el pain real es governance configurable (Coca-Cola open vs. Colgate restricted). Lock extension es quick win pero no resuelve el problema. Se mantiene scope amplio para discutir. |
| **Projects nav** | "Remover tab Project Inside Defense, mover a TT" | **Necesita más definición** — dirección interesante pero no está claro qué se pierde. Llevar a refinamiento propio. |
| **Scaling Carbon** | Sin comentarios | Marcado CONDICIONAL — solo si hay pipeline |
| **True Cost of Water** | "No me queda claro el scope" | Aclarado: solo discovery, no es eng este Q |

## Resumen de recursos

| Persona | Rol | Foco Q2 |
|---|---|---|
| **Ivo** | PM | AB InBev discovery, Scope 3, CCEP, TCW, scoping general |
| **Maria** | Design | AB InBev UX, Side nav mobile, Scope 3 design |
| **Ema** | Backend Eng | AB InBev build, Water/Carbon separation, Conversion factors, Unit conversion |
| **Mica** | Frontend Eng | AB InBev build, Homepage rollout, Side nav cleanup, UI changes |
| **Pipe** | Solution Specialist | Scope 3, AB InBev |
| **Cami Behar** | Solution Specialist | CCEP Yearly Targets, True Cost of Water |

---

## Para la reunión de refinamiento (2026-05-05)

### Temas prioritarios a discutir:
1. **AB InBev**: Ema necesita contexto completo. ¿Qué se vendió? ¿Qué libertad hay? Compartir discovery.
2. **Water/Carbon Separation**: Mostrar a Ema la evidencia del código — KPI cards y table columns son globales, no por variable. Los charts SÍ tienen el pattern per-domain (`byMetricType`). Hay que replicar ese pattern en KPI cards y tables. Esto no es solo scenarios.
3. **Permissions**: El pain real es governance configurable (Coca-Cola open vs. Colgate restricted), no solo lock. Discutir approach incremental: lock extension como quick win → configurable visibility después.
4. **Conversion Factors**: Timeline de Colgate data 2025 — ¿urgencia real?
5. **Projects nav**: La propuesta de Ema es una dirección posible pero necesita refinamiento propio. ¿Qué se pierde si removemos el tab?

### Temas informativos (no requieren decisión eng):
- Scope 3: solo discovery (reunión agendada con Ema para dar contexto)
- CCEP Yearly Targets: solo discovery
- True Cost of Water: solo discovery, no eng
- Scaling Carbon: condicional a pipeline
