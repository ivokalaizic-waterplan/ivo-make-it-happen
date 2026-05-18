# Análisis de Factores de Emisión para Waterplan

## Tabla de Contenidos

1. [Fundamentos metodológicos](#1-fundamentos-metodológicos)
2. [Scope 1 y Scope 2 (prioridad inmediata)](#2-scope-1-y-scope-2-prioridad-inmediata)
3. [Scope 3 (future-proofing)](#3-scope-3-future-proofing)
4. [Construcción de una librería global de factores](#4-construcción-de-una-librería-global-de-factores)
5. [Riesgos si Waterplan provee factores](#5-riesgos-si-waterplan-provee-factores)
6. [Requerimientos para hacerlo bien](#6-requerimientos-para-hacerlo-bien)
7. [Opciones estratégicas para Waterplan](#7-opciones-estratégicas-para-waterplan)
8. [Alternativa intermedia recomendada](#8-alternativa-intermedia-recomendada)
9. [Implicancias en producto](#9-implicancias-en-producto)
10. [Recomendación final](#10-recomendación-final)

---

## 1. Fundamentos metodológicos

### Qué es un factor de emisión

Un factor de emisión (EF) es un coeficiente que cuantifica las emisiones de gases de efecto invernadero (GEI) producidas por unidad de actividad. La ecuación fundamental es:

```
Emisiones GEI = Dato de Actividad x Factor de Emisión
```

Ejemplos concretos:
- 1,000 kWh de electricidad (promedio EEUU) x 0.417 kg CO2e/kWh = 417 kg CO2e
- 100 litros de diésel x 2.68 kg CO2e/litro = 268 kg CO2e

La conversión involucra múltiples pasos: (1) recolección del dato de actividad (litros, kWh, km, USD), (2) aplicación del factor de emisión, (3) aplicación del GWP para convertir gases individuales a CO2 equivalente, y (4) agregación.

### Rol del GWP (Potencial de Calentamiento Global)

El GWP expresa la fuerza radiativa de un GEI relativa al CO2 sobre un horizonte de 100 años. Es lo que permite sumar distintos gases en una sola unidad (CO2e).

| Gas | AR4 (2007) | AR5 (2014) | AR6 (2021) |
|-----|-----------|-----------|-----------|
| CO2 | 1 | 1 | 1 |
| CH4 (fósil) | 25 | 30 | 29.8 |
| N2O | 298 | 265 | 273 |
| HFC-134a | 1,430 | 1,300 | 1,526 |
| SF6 | 22,800 | 23,500 | 25,200 |

**Punto critico para producto**: La generación de GWP usada importa significativamente. La mayoría del reporte actual usa AR5; algunos marcos regulatorios migran a AR6. Colgate transicionó de AR5 a AR6 entre 2022 y 2023. Cualquier plataforma debe manejar esta coexistencia.

### Diferencias entre Scope 1, 2 y 3

| Alcance | Fuente | Ejemplo | Complejidad de EF |
|---------|--------|---------|-------------------|
| **Scope 1** | Emisiones directas: combustión en fuentes fijas/móviles, fugitivas | Quema de gas natural en caldera | Baja: factores globales, estables |
| **Scope 2** | Emisiones indirectas por energía comprada (electricidad, vapor) | Consumo eléctrico de planta | Media: varía por país/año, requiere doble método |
| **Scope 3** | Cadena de valor (15 categorías upstream + downstream) | Compra de materiales, transporte, viajes | Alta: múltiples bases de datos, alta incertidumbre |

### Estándares y marcos normativos

| Estándar | Editor | Año | Rol |
|----------|--------|-----|-----|
| **GHG Protocol Corporate Standard** | WRI/WBCSD | 2004 (rev. 2015) | Estándar de facto global; define límites organizacionales, mandatos Scope 1+2 |
| **GHG Protocol Scope 2 Guidance** | WRI/WBCSD | 2015 | Obliga reporte dual (location + market-based) |
| **GHG Protocol Scope 3 Standard** | WRI/WBCSD | 2011 | 15 categorías, screening de materialidad |
| **IPCC Guidelines** | IPCC | 2006 (refinados 2019) | Factores Tier 1 por defecto para todos los sectores |
| **ISO 14064-1:2018** | ISO | 2018 | Más prescriptivo que GHG Protocol, usado en verificación |

El GHG Protocol no manda bases de datos específicas pero exige transparencia sobre las fuentes utilizadas. ISO 14064 requiere además evaluación de incertidumbre.

---

## 2. Scope 1 y Scope 2 (prioridad inmediata)

### Scope 1: Variables de actividad y factores

Basado en el análisis de datos reales de Colgate (2019-2024), los factores de Scope 1 cubren **7 tipos de combustible**:

| Combustible | Valor EF (2024) | Unidad | Fuente |
|---|---|---|---|
| Gas natural (TTW) | 1.886879 | kgCO2e/m3 | IPCC Stationary Combustion Tool v4.1 |
| Diésel (TTW) | 2.685638 | kgCO2e/litro | IPCC Stationary Combustion Tool v4.1 |
| Aceite residual (TTW) | 2.948958 | kgCO2e/litro | IPCC Stationary Combustion Tool v4.1 |
| GLP (TTW) | 2.987343 | kgCO2e/kg | IPCC Stationary Combustion Tool v4.1 |
| Carbón bituminoso (TTW) | 2.458934 | kgCO2e/kg | IPCC Stationary Combustion Tool v4.1 |
| Vapor comprado (TTW) | 0.18985 | kgCO2e/kg | Derivado del factor de gas natural |
| Carbón antracita | 2.643 | kgCO2e/kg | IPCC Stationary Combustion Tool v4.1 |

**Hallazgo clave**: Los factores de Scope 1 son esencialmente constantes en el tiempo. El gas natural pasó de 1.887 (2019) a 1.886879 (2024) -- variación <0.01%. Solo el cambio de AR5 a AR6 genera diferencias mínimas en el total CO2e. Esto significa que se pueden actualizar anualmente con esfuerzo mínimo.

**Descomposición por gas** (ejemplo gas natural por m3): CO2 = 1.88496 kg, CH4 = 0.0000336 kg, N2O = 0.00000336 kg. El CO2 domina >99.5% del total.

**Scope 1 es global**: Los mismos factores aplican independientemente del país. No requiere diferenciación geográfica.

### Scope 2: Location-based vs Market-based

El GHG Protocol obliga a reportar Scope 2 con **ambos métodos simultáneamente**. Colgate implementa los dos:

**Location-based** (promedio de red):
- No-US: factores IEA por país (96 países en 2024)
- US: factores EPA eGRID por subregión (RFCW, SPNO, SRVC, NEWE, NYCW, etc.)

**Market-based** (instrumentos contractuales):
- UE: factores de mezcla residual AIB (ej: "IT- residual mix", "PL- residual mix")
- US: Green-e Residual Mix por subregión eGRID
- Países sin mezcla residual: fallback a factor location-based
- Site-specific: factores de utility que overridean todo (ej: planta Baddi en India = 0.03167 kgCO2e/MJ vs IEA India = 0.19247 kgCO2e/MJ)

### Valores reales de Scope 2 (de datos Colgate 2024, location-based)

| País | kgCO2e/MJ | Equivalente kgCO2e/MWh |
|---|---|---|
| Argentina | ~0.098 | ~353 |
| Brasil | ~0.032 | ~115 |
| China | 0.170 | 613 |
| Francia | ~0.015 | ~55 |
| India | ~0.192 | ~693 |
| Polonia | 0.042 | 151 |
| Sudáfrica | ~0.251 | ~904 |
| EEUU (RFCW - Indiana/Ohio) | 0.133 | 478 |

### Granularidad sub-nacional en EEUU

Las instalaciones de Colgate en EEUU no usan un factor nacional único. Cada planta se mapea a su subregión eGRID:

| Subregión eGRID | Factor (kgCO2e/MWh) | Estados |
|---|---|---|
| RFCW (RFC West) | 532.5 | Indiana, Ohio |
| SPNO (SPP North) | 531.4 | Kansas |
| NEWE (NPCC New England) | 239.3 | Maine |
| SRVC (SERC Virginia/Carolina) | 339.1 | South Carolina |

### Conversiones de unidades necesarias

Colgate cambió unidades entre 2019 y 2020:
- **2019**: kgCO2e/MWh para electricidad
- **2020-2024**: kgCO2e/MJ (conversión: 1 MWh = 3,600 MJ)

Conversiones energéticas por combustible (del workbook Colgate):

| Combustible | Contenido energético |
|---|---|
| Gas natural | 34.358 MJ/m3 |
| Diésel | 35.772 MJ/litro |
| Aceite residual | 39.087 MJ/litro |
| GLP (masa) | 46.573 MJ/kg |
| Carbón antracita | 28.589 MJ/kg |
| Carbón bituminoso | 26.102 MJ/kg |

### Fuentes principales para Scope 1 y 2

| Fuente | Alcance | Costo | Actualización | Redistribución |
|--------|---------|-------|---------------|----------------|
| **DEFRA/DESNZ** | UK + internacional, ~3,000 factores/año | Gratis | Anual (junio) | Libre (Open Government Licence) |
| **EPA GHG Hub** | EEUU, ~200 factores | Gratis | Anual (marzo) | Libre (dominio público) |
| **EPA eGRID** | EEUU, 26 subregiones | Gratis | Anual (2 años lag) | Libre |
| **IEA** | 190+ países (electricidad) | EUR 5K-50K/año | Anual (sept) | **Restringido** - requiere licencia |
| **IPCC EFDB** | Global, Tier 1 defaults | Gratis | Continuo | Libre |
| **Ember** | 200+ países (electricidad) | Gratis (CC-BY-SA) | Mensual/Anual | **Libre con atribución** |

---

## 3. Scope 3 (future-proofing)

### Las 15 categorías

| # | Categoría | Enfoque típico de EF |
|---|----------|---------------------|
| 1 | Bienes y servicios comprados | Spend-based (EEIO) o activity-based (LCA) |
| 2 | Bienes de capital | Spend-based (EEIO) o activity-based (LCA) |
| 3 | Actividades de combustible/energía (WTT, T&D) | EFs específicos |
| 4 | Transporte upstream | tonne-km o spend-based |
| 5 | Residuos generados | Tipo de residuo x método de disposición |
| 6 | Viajes de negocio | Distancia x modo o spend-based |
| 7 | Commuting de empleados | Distancia x modo |
| 8-15 | Leased assets, transporte downstream, uso de productos, inversiones, etc. | Variado |

### Activity-based vs Spend-based

**Activity-based** (mayor precisión):
- Usa cantidades físicas (kg material, kWh, tonne-km)
- Fuentes: ecoinvent (~20,000 datasets), DEFRA, EPA Supply Chain
- Ejemplo: acero primario ~1.8 kg CO2e/kg, vuelo largo (economía) ~0.102 kg CO2e/pasajero-km

**Spend-based** (mayor cobertura, menor precisión):
- Usa gasto monetario (kg CO2e por USD)
- Fuentes: USEEIO (~400 sectores, gratis), EXIOBASE (49 países, 200 productos)
- Incertidumbre de +/-50% o más
- Ejemplo: servicios profesionales ~0.1-0.3 kg CO2e/USD, manufactura electrónica ~0.3-0.8 kg CO2e/USD

### Bases de datos clave para Scope 3

| Fuente | Costo | Cobertura | Mejor para |
|--------|-------|-----------|------------|
| ecoinvent | CHF 3K-25K/año | 20K+ datasets LCA | Cat 1, 2 (materiales) |
| DEFRA | Gratis | Viajes, flete, residuos, materiales | Cat 3-7, 12 |
| EPA Supply Chain (USEEIO) | Gratis | ~400 sectores EEUU | Cat 1, 2 (spend-based) |
| EXIOBASE | Gratis (académico) | 49 países, 200 productos | Multi-región spend-based |
| GaBi/Sphera | Licenciado (caro) | LCA global | Cat 1, 2 (alternativa ecoinvent) |

### Por qué Scope 3 es mucho más difícil

1. **Volumen de factores**: Scope 1+2 requiere ~1,500-3,000 factores; Scope 3 requiere 10,000+
2. **Heterogeneidad**: Cada categoría usa metodología distinta
3. **Datos de proveedor**: Los mejores factores vienen del proveedor, no de bases de datos
4. **Incertidumbre**: Spend-based tiene +/-50% de error; activity-based requiere LCA
5. **Licenciamiento**: ecoinvent cuesta $30K-100K/año para redistribución comercial
6. **Competidores tienen 3-8 personas** dedicadas solo a mantener factores Scope 3

### Recomendación: diferir pero arquitectar para Scope 3

- Construir el data model con campos que soporten Scope 3 (category, spend_based vs activity_based)
- No invertir en licencias ecoinvent hasta validar demanda de clientes
- Incluir factores DEFRA para categorías 3-7 y 12 (gratis)
- Plantear Scope 3 como fase 3 del roadmap (meses 9-18)

---

## 4. Construcción de una librería global de factores

### Veredicto de factibilidad

**FACTIBLE** mediante enfoque híbrido: fuentes gratuitas para 70-80% de cobertura + licencia IEA (o Ember como alternativa gratuita) para factores de electricidad. El enfoque puramente gratuito deja gaps críticos en electricidad para países no-OECD.

### Qué se logra con datos gratuitos vs qué necesita licencia

| Categoría | Fuentes gratuitas | Calidad | Gap |
|-----------|------------------|---------|-----|
| Combustión estacionaria (Scope 1) | IPCC + DEFRA + EPA | Alta | Ninguno significativo |
| Combustión móvil | DEFRA + IPCC | Alta | Ninguno |
| Refrigerantes | IPCC AR6 GWP | Alta | Ninguno |
| Electricidad - EEUU | eGRID (sub-regional) | Muy alta | Ninguno |
| Electricidad - UE | EEA + DEFRA | Alta | Ninguno |
| Electricidad - Global (200+ países) | **Ember** (CC-BY-SA) | Media-Alta | Menor reconocimiento que IEA |
| Electricidad - Autoritativo global | **IEA** ($5K-30K/año) | Muy alta | Requiere licencia |
| Scope 3 materiales | ecoinvent ($30K-100K/año) | Muy alta | Fuera de alcance MVP |

### Granularidad necesaria

- **Geográfica**: País como mínimo; sub-nacional para EEUU (eGRID), India, Australia
- **Temporal**: Vintage anual como mínimo (las grillas cambian 2-5% por año)
- **Por combustible**: ~40-60 factores distintos (con variantes de unidad: ~100-150)
- **Scope 2 electricidad**: 1 factor por país = ~150-200 factores location-based + residual mix para market-based

### Estimación de factores totales necesarios

| Componente | Factores |
|-----------|---------|
| Scope 1 combustibles (con variantes de unidad) | 150-200 |
| Scope 1 refrigerantes | 20-30 |
| Scope 2 electricidad (country-level) | 150-200 |
| Scope 2 sub-nacional (EEUU, select countries) | 50-100 |
| Scope 2 calor/vapor | 50-100 |
| **Total MVP** | **450-700** |
| **Total comprehensivo Scope 1+2** | **1,500-3,000** |

### Benchmark competitivo

| Plataforma | Factores en librería | Fuentes | Equipo dedicado |
|-----------|---------------------|---------|-----------------|
| **Watershed** | 10,000+ | IEA, EPA, DEFRA, ecoinvent | 5-8 personas |
| **Persefoni** | ~8,000 | ecoinvent, IEA, EPA, DEFRA | 4-6 especialistas |
| **Sweep** | ~5,000 | ADEME, ecoinvent, IEA | 2-4 personas |
| **Normative** | No publicado | EXIOBASE, EEA, DEFRA, IEA | 3-5 personas |
| **Plan A** | ~6,000 | ecoinvent, IEA | No publicado |
| **Waterplan (propuesta)** | 500-700 (MVP) → 2,000-3,000 | DEFRA, EPA, IPCC, Ember/IEA | 0.25-0.5 FTE |

**Nota**: Los competidores tienen equipos grandes porque cubren Scope 3 completo. El foco de Waterplan en Scope 1+2 es significativamente más simple.

### Mantenimiento: ~0.25-0.5 FTE, ciclo de actualización anual

| Actividad | Horas/año |
|-----------|-----------|
| Monitorear actualizaciones de fuentes | 40-60 |
| Ingestar updates de 5-7 fuentes | 60-100 |
| QA/validación | 40-80 |
| Edge cases, consultas de clientes | 40-60 |
| Agregar nuevos países/factores | 40-80 |
| Documentación/changelog | 20-40 |
| **Total** | **240-420 horas/año (~0.15-0.25 FTE)** |

Calendario de updates:
- DEFRA: junio/julio
- EPA Hub: marzo/abril
- IEA/Ember: septiembre/octubre
- eGRID: cuando se publica (1-2 años lag)

### Ember como alternativa potencial a IEA para electricidad

Ember publica datos de generación eléctrica y factores de emisión para 200+ países bajo licencia Creative Commons (CC-BY-SA 4.0):
- Cobertura global con updates mensuales para economías principales
- Gratuito, redistribuible con atribución
- Menos "marca autoritativa" que IEA pero crecientemente citado en literatura académica
- **Potencialmente elimina la necesidad de licencia IEA** para Scope 2
- Verificar términos comerciales específicos para embedding en producto SaaS

---

## 5. Riesgos si Waterplan provee factores

### Matriz de riesgos

| Categoría de Riesgo | Probabilidad | Impacto | Riesgo Global | Mitigación |
|---|---|---|---|---|
| **Cuestionamiento auditor sobre fuente de EF** | ALTA | MEDIO | **ALTO** | Citación de fuente, workflow de aprobación del cliente |
| **Conflicto metodológico con auditor del cliente** | MEDIA | ALTO | **ALTO** | Capacidad de override, múltiples fuentes disponibles |
| **Responsabilidad legal por reporte incorrecto** | BAJA | MUY ALTO | **MEDIO-ALTO** | Disclaimers, aprobación del cliente como escudo legal |
| **Incumplimiento regulatorio (factor de jurisdicción incorrecta)** | MEDIA | ALTO | **ALTO** | Mapeo país/región, actualizaciones anuales |
| **Alegaciones de greenwashing** | BAJA | MUY ALTO | **MEDIO** | Defaults conservadores, metodología transparente |
| **Violación de licencia de datos (IEA, ecoinvent)** | MEDIA | MEDIO | **MEDIO** | Acuerdos de licencia, usar solo fuentes libres para MVP |
| **Factor desactualizado (año viejo)** | ALTA | MEDIO | **ALTO** | Proceso de update anual, flagging de versión |
| **Confusión del cliente (demasiadas opciones)** | MEDIA | BAJO | **BAJO** | Jerarquía UX clara, smart defaults |

### Cómo ven los auditores (Big 4) los factores provistos por plataformas

Bajo ISAE 3410 e ISAE 3000, los auditores deben verificar:
1. La fuente original del factor (debe trazarse a IPCC, IEA, EPA, DEFRA, etc.)
2. Si el factor es apropiado para la actividad, geografía y período
3. Si era el más actual disponible al momento del reporte
4. Si la entidad reportante revisó y aprobó el factor

**Insight crítico**: Los auditores NO rechazan factores provistos por plataformas per se. Rechazan factores sin trazabilidad. La plataforma es un mecanismo de entrega, no una fuente. Mientras Waterplan cite la fuente autoritativa subyacente, los auditores lo tratan equivalentemente a que el cliente busque el factor por sí mismo.

Los auditores distinguen tres modelos:
1. **"Black box"** (inaceptable): La plataforma aplica un factor sin revelar su fuente
2. **"Librería transparente"** (aceptable): La plataforma muestra factores de fuentes autoritativas, los cita, el cliente aprueba
3. **"Factor del cliente"** (gold standard): El cliente provee su propio factor con documentación

**Pasar del modelo 1 al modelo 2 es lo que hace audit-safe los factores de plataforma.**

### Requisitos regulatorios por jurisdicción

| Jurisdicción | Regulación | Fuente mandatoria | Flexibilidad |
|---|---|---|---|
| UE | CSRD/ESRS E1 | Ninguna mandada; prefiere IPCC-consistente | ALTA |
| EEUU (reporteros obligatorios) | EPA 40 CFR 98 | Factores EPA | NINGUNA |
| EEUU (voluntario/SEC) | SEC Climate Rules | Revelar fuente; sin mandato | ALTA |
| UK | SECR | DEFRA/BEIS Conversion Factors | BAJA |
| Australia | NGER | Factores Clean Energy Regulator | NINGUNA |
| Japón | Act on Promotion of GWC | Factores del Min. de Ambiente | BAJA |

**Implicancia para Waterplan**: Debe soportar selección de factores consciente de jurisdicción. Para jurisdicciones con fuentes mandatorias, SOLO mostrar el factor mandado.

### Estrategias de mitigación

1. **Lenguaje**: Nunca usar "recomendar" -- usar "sugerir", "proveer", "mostrar"
2. **Aprobación explícita**: El cliente debe aprobar cada factor antes de usarse en cálculos
3. **Citación completa**: Cada factor con publicación, publisher, año, tabla/página, URL, geografía, GWP basis
4. **Override siempre disponible**: El cliente siempre puede reemplazar con su propio factor
5. **Disclaimers contractuales**: Actualizar ToS antes del lanzamiento
6. **Versionamiento inmutable**: Nunca cambiar retroactivamente un factor usado en período cerrado

---

## 6. Requerimientos para hacerlo bien

### Checklist de requerimientos de producto

#### Data Model

| Entidad | Campos clave |
|---|---|
| **EmissionFactor** | id, source_id, value, unit, scope, category, fuel_type, country_code, region, year_published, year_applicable, gwp_basis, is_active, version |
| **EmissionFactorSource** | id, name, publisher, url, publication_year, license_type, is_regulatory_mandated, jurisdiction |
| **FactorApproval** | id, factor_id, org_id, facility_id, approved_by, approved_at, reporting_period, status, override_value, override_justification |
| **FactorApplication** | id, factor_id, approval_id, activity_data_id, calculated_emissions, calculation_date |
| **FactorVersion** | id, factor_id, version_number, effective_date, superseded_date, change_reason |

#### Workflow de aprobación del cliente

1. Waterplan sugiere factor basado en actividad + localización
2. Se muestra fuente, año, alcance geográfico, notas de aplicabilidad
3. Cliente aprueba explícitamente ("Aprobar" / "Aceptar este factor")
4. Se registra quién aprobó, cuándo, su rol
5. Opción de override con justificación obligatoria
6. Re-aprobación anual cuando los factores se actualizan

#### Control de versiones

- Versiones de factores inmutables (nunca sobreescribir; crear nueva versión)
- Cálculos históricos siempre usan la versión del factor activa al momento del cálculo
- Changelog completo: cuándo se agregó, actualizó, quién aprobó
- "Lock" de período: una vez cerrado un período, los factores se congelan
- Capacidad de recalculación: "what if" con factores nuevos (modo draft)
- Recalculación de año base: cuando cambia la metodología, soportar restated histórico

#### Audit trail

Para limited assurance (más común):
- Valor y unidad del factor
- Nombre y año de publicación de la fuente
- Aplicabilidad geográfica
- Tipo de combustible/actividad
- Base GWP (AR4, AR5, AR6)
- Fecha de aplicación del factor
- Quién aprobó (persona/rol)

Para reasonable assurance (requerimiento emergente):
- Todo lo anterior, más:
- Evidencia del proceso de revisión
- Comparación con fuentes alternativas
- Justificación si no usa factor mandatorio de la jurisdicción

#### Disclaimers necesarios

```
"Los factores de emisión provistos en esta plataforma provienen de [NOMBRE FUENTE, AÑO] 
y se proveen únicamente como datos de referencia. [NOMBRE EMPRESA] es responsable de 
revisar, aprobar y determinar la idoneidad de todos los factores de emisión utilizados 
en su inventario GEI. [WATERPLAN] no garantiza la exactitud, completitud o adecuación 
de ningún factor de emisión para ningún propósito de reporte específico. El uso de 
factores sugeridos por la plataforma no constituye asesoría profesional ni aseguramiento."
```

#### Soporte multi-sitio / multi-país

- Factores diferentes por país/región (electricidad varía por país)
- Override a nivel de instalación (ej: factor de proveedor específico)
- Modelo de herencia: default org → country-level → facility-level override
- Market-based Scope 2: soportar residual mix y factores utility-specific

#### Capacidades de exportación

- Registro de factores exportable (todos los factores usados, por período)
- Documento de metodología de cálculo (auto-generado)
- Log de cambios de factores (year-over-year)
- Reporte assurance-ready: dato de actividad + factor + fuente + aprobación + resultado por línea
- Statement de conformidad GHG Protocol (auto-generado según opciones metodológicas)

---

## 7. Opciones estratégicas para Waterplan

### Comparación de 4 opciones

| Dimensión | A: Solo factores del cliente (status quo) | B: Librería default (sugerida, cliente aprueba) | C: Recomendación oficial de Waterplan | D: Integración con proveedores licenciados |
|---|---|---|---|---|
| **Descripción** | Cliente sube todos sus EFs | Waterplan muestra EFs de fuentes autoritativas; cliente aprueba | Waterplan recomienda EFs específicos oficialmente | Integrar IEA, ecoinvent, DEFRA via API/licencia |
| **Responsabilidad legal** | Ninguna | Baja (citar fuente, cliente aprueba) | **ALTA** (responsabilidad de asesoría) | Baja (pass-through de fuente licenciada) |
| **Riesgo de auditoría** | Ninguno para Waterplan | Bajo (sourcing transparente) | Medio (auditor puede cuestionar) | Muy bajo (fuente autoritativa) |
| **Valor para el cliente** | Bajo (carga en el cliente) | **ALTO** (ahorro de tiempo + guía) | Alto (servicio completo) | **ALTO** (calidad premium) |
| **Posición competitiva** | Débil (table stakes faltante) | **Fuerte** (estándar de mercado) | Diferenciadora pero riesgosa | Premium |
| **Esfuerzo de implementación** | Mínimo | Medio (3-4 meses) | Medio + complejidad legal | Alto (licencias + integración) |
| **Impacto en revenue** | Negativo (riesgo de churn) | Positivo (stickiness) | Positivo (tier premium) | Positivo (upsell) |
| **Escalabilidad** | Pobre (trabajo per-client) | Buena (una librería, muchos clientes) | Buena | Excelente (API-driven) |
| **Compliance regulatorio** | Problema del cliente | Parcialmente resuelto | Resuelto pero riesgoso | Bien resuelto |
| **Recomendada?** | **NO** | **SI (MVP)** | **NO** | **SI (Fase 2)** |

### Pros y contras detallados

**Opción A (Status quo)**:
- Pro: Cero riesgo legal, cero costo de datos
- Contra: Desventaja competitiva severa; cada competidor provee factores; onboarding lento (2-4 semanas extra por cliente); no escalable

**Opción B (Librería sugerida)**:
- Pro: Estándar de la industria; reduce onboarding; audit-safe con approval workflow; escalable
- Contra: Requiere inversión en data (0.25 FTE + posible licencia); riesgo mínimo de liability
- **Recomendada como MVP**

**Opción C (Recomendación oficial)**:
- Pro: Máximo valor percibido; diferenciación
- Contra: Crea deber de asesoría; auditors cuestionan "recomendaciones" de plataformas; riesgo legal significativo
- **No recomendada** (la diferencia entre "sugerir" y "recomendar" es legal, no semántica)

**Opción D (Proveedores licenciados)**:
- Pro: Máxima calidad; brand recognition de IEA/ecoinvent; defensibilidad regulatoria
- Contra: $50K-150K/año en licencias; negociaciones toman 2-6 meses; complejidad operativa
- **Recomendada como Fase 2** (una vez validada la demanda)

---

## 8. Alternativa intermedia recomendada

### Opción B: Default Library con Client Approval

Esta es la opción recomendada. Representa el estándar de la industria con riesgo manejable.

### Principios clave

1. **Waterplan cura, el cliente es dueño**: Waterplan ensambla una librería de fuentes públicas autoritativas. El cliente ve factores sugeridos y debe aprobarlos.
2. **Transparencia de fuente**: Cada factor traza a su fuente autoritativa. Waterplan es un conducto, no un autor.
3. **Sin lenguaje de "recomendación"**: Usar "sugerido basado en tu ubicación y tipo de actividad", nunca "Waterplan recomienda".
4. **Override siempre disponible**: El cliente puede reemplazar cualquier factor con el suyo.
5. **Aprobación = transferencia de responsabilidad**: El momento en que el cliente aprueba, la responsabilidad por su uso se traslada a ellos.

### Workflow detallado

```
┌─────────────────────────────────────────────────────────────────┐
│ 1. CONFIGURACIÓN                                                 │
│    - Cliente registra instalación (país, tipo de actividad)      │
│    - Waterplan identifica factores aplicables automáticamente    │
│                                                                   │
│ 2. SUGERENCIA                                                    │
│    - UI muestra factor sugerido con:                             │
│      • Valor y unidad                                            │
│      • Fuente (ej: "IEA 2024, Table 2.3")                      │
│      • Alcance geográfico                                        │
│      • Año de vigencia                                           │
│      • Base GWP (AR5/AR6)                                        │
│      • Alternativas disponibles (si las hay)                     │
│                                                                   │
│ 3. APROBACIÓN                                                    │
│    - Cliente revisa y clickea "Aprobar"                          │
│    - Se registra: quién, cuándo, rol, período de reporte        │
│    - O bien: clickea "Usar mi propio factor" → ingresa valor    │
│      con campo obligatorio de justificación/fuente               │
│                                                                   │
│ 4. CÁLCULO                                                       │
│    - Solo factores aprobados entran al motor de cálculo          │
│    - Emisiones = Dato de Actividad × Factor Aprobado            │
│    - Resultado vinculado a factor_id + approval_id               │
│                                                                   │
│ 5. EXPORTACIÓN / AUDITORÍA                                       │
│    - Reporte muestra: actividad + factor + fuente + aprobador   │
│    - Exportable a Excel/PDF para auditor                         │
│    - Disclaimer incluido en pie de reporte                       │
└─────────────────────────────────────────────────────────────────┘
```

### Citación de fuente por factor

Cada registro de factor debe incluir obligatoriamente:

| Campo | Ejemplo |
|-------|---------|
| source_publication | "UK Government GHG Conversion Factors 2025" |
| publisher | "DESNZ (Department for Energy Security and Net Zero)" |
| publication_year | 2025 |
| table_reference | "Fuels - Gaseous fuels - Natural gas" |
| url | "https://www.gov.uk/government/publications/..." |
| geographic_scope | "Global" o "United Kingdom" |
| gwp_basis | "AR6" |
| date_imported | "2025-07-15" |

### Capacidad de override

El override del cliente debe:
- Requerir valor numérico + unidad
- Requerir campo de justificación/fuente (texto libre, mín 20 caracteres)
- Opcionalmente adjuntar documento de respaldo
- Quedar loggeado con timestamp y usuario
- Ser reversible (el cliente puede volver al default en cualquier momento)
- Marcarse visualmente como "factor personalizado" vs "factor de referencia"

### Transparencia total

Lo que el cliente y su auditor deben poder ver en todo momento:
- Qué factor se usó para cada cálculo
- De dónde viene (fuente original, no "Waterplan")
- Cuándo fue importado a la plataforma
- Quién lo aprobó para su uso
- Si hay una versión más nueva disponible
- Cómo se compara con alternativas (ej: DEFRA vs IEA para el mismo país)

---

## 9. Implicancias en producto

### Esquema del data model

Basado en los patrones observados en Colgate y las mejores prácticas de la industria:

```
EmissionFactor:
  - id: UUID
  - source: enum (DEFRA, EPA, IEA, IPCC, EMBER, CUSTOM)
  - category: enum (stationary_combustion, mobile_combustion, electricity, 
                    refrigerant, heat_steam, process)
  - scope: enum (1, 2, 3)
  - fuel_type: string (e.g., "natural_gas", "diesel", "electricity")
  - geographic_scope: enum (global, country, subregion, site)
  - country_code: ISO-3166 (nullable)
  - subregion_code: string (nullable, e.g., "RFCW" for eGRID)
  - method: enum (location_based, market_based, null)
  - value: decimal
  - unit: string (e.g., "kgCO2e/m3", "kgCO2e/MJ")
  - gwp_basis: enum (AR4, AR5, AR6)
  - vintage_year: integer (año al que aplica el factor)
  - publication_year: integer (año en que la fuente lo publicó)
  - source_citation: JSON {publication, publisher, url, table_ref}
  - uncertainty_pct: decimal (nullable)
  - data_quality_score: integer 1-5 (per PACT DQI)
  - is_active: boolean
  - is_regulatory_mandated: boolean
  - jurisdiction: string (nullable)
  - ttw_only: boolean (true = combustión directa, excluye upstream)
  - created_at, updated_at: timestamps
  - metadata: JSON (notas adicionales)
```

### Requerimientos de UI

1. **Factor browser**: Buscable/filtrable por país, scope, tipo de combustible, fuente
2. **Smart suggestion**: Auto-sugerir factor basado en tipo de actividad + ubicación de instalación
3. **Comparación lado a lado**: Mostrar múltiples factores disponibles para la misma actividad
4. **Workflow de aprobación**: Aprobar/rechazar explícito con comentarios
5. **Interface de override**: Permitir factor custom con justificación obligatoria
6. **Vista de audit trail**: Historial completo de selecciones por instalación
7. **Indicador regulatorio**: Flag cuando un factor es mandatorio por jurisdicción
8. **Warning de obsolescencia**: Alerta cuando hay versión más nueva disponible
9. **Aprobación bulk**: Aprobar factores para múltiples instalaciones a la vez
10. **Export**: Reporte completo de provenance (PDF/Excel) para auditores

### Lógica de selección de factores (jerarquía)

```
1. Factor custom del cliente (si existe y está aprobado)
   ↓ (si no existe)
2. Factor mandatorio por jurisdicción (ej: DEFRA para UK SECR)
   ↓ (si jurisdicción es flexible)
3. Factor country-specific, latest vintage, highest-quality source
   ↓ (si no hay factor country-specific)
4. Factor de proxy regional (mismo continente/región económica)
   ↓ (si no hay proxy regional)
5. Default global IPCC (Tier 1)
   → Flag para revisión del usuario
```

Para Scope 2 electricidad, jerarquía adicional:
```
Location-based:
  1. Factor sub-nacional (eGRID para EEUU, estado para India/Australia)
  2. Factor país (IEA/Ember)
  3. Proxy regional

Market-based:
  1. Factor utility-specific (del cliente)
  2. Residual mix (AIB para UE, Green-e para EEUU)
  3. Fallback a location-based (donde no hay residual mix)
```

### Motor de conversiones

Conversiones que debe manejar el sistema:
- kWh ↔ MJ ↔ MWh (1 MWh = 3,600 MJ = 1,000 kWh)
- HHV ↔ LHV (diferencia ~5-10% para gas natural)
- kg ↔ litros para GLP (requiere densidad)
- Unidades volumétricas ↔ energéticas para combustibles (usando energy content factors)
- GWP cross-version (AR5 → AR6 para cada gas individual)

### Preservación histórica

- Mantener 3-5 años de factores históricos
- Soportar "as-reported" (factor usado al momento de submission) vs "latest available"
- Cuando se actualiza un factor, no sobreescribir: crear nueva versión
- Período cerrado = factores congelados (no recalcular sin acción explícita del cliente)
- Recalculación de año base: modo "draft" para ver impacto de nuevos factores

### API / Export

- API REST para lookup de factores (GET /factors?country=AR&scope=2&year=2024)
- Export bulk de todos los factores usados por reporting period
- Formato compatible con CDP, GRI, CSRD
- Webhook para notificar actualización de factores disponibles

### Camino a Scope 3

El data model debe desde el MVP incluir:
- Campo `scope` que acepte 3
- Campo `category` extensible a las 15 categorías
- Campo `method_type: enum(activity_based, spend_based, supplier_specific, hybrid)`
- Tabla de conversión USD → kg CO2e por sector (preparada para USEEIO/EXIOBASE)

Esto permite agregar Scope 3 en Fase 3 sin migración de schema.

---

## 10. Recomendación final

### Análisis de trade-offs

| Trade-off | Decisión | Justificación |
|---|---|---|
| Liability vs Valor | Aceptar liability mínima por valor significativo | Práctica estándar de la industria; protecciones contractuales suficientes |
| Fuentes gratuitas vs licenciadas | Empezar con gratuitas, agregar licenciadas luego | Valida demanda antes de comprometer costos de licencia |
| Recomendar vs Sugerir | SUGERIR solamente | "Sugerir" = información; "Recomendar" = deber de asesoría |
| Default vs Requerir aprobación | Requerir aprobación | El workflow de aprobación es el escudo legal clave |
| Comprehensivo vs Enfocado | Empezar enfocado (Scope 1+2, top fuels) | Validar con clientes existentes antes de expandir |

### Corto plazo (0-3 meses): qué construir primero

**Meta**: MVP de librería de factores con workflow de aprobación

| Componente | Detalle | Esfuerzo |
|---|---|---|
| Data model | EmissionFactor + Source + Approval + Version | 2 semanas |
| Scope 1 combustión | 7 tipos de combustible (gas, diésel, GLP, carbón, etc.) desde IPCC | 1 semana |
| Scope 2 electricidad | Top 20-50 países (location-based) desde Ember/DEFRA | 2 semanas |
| eGRID EEUU | 26 subregiones | 0.5 semanas |
| Refrigerantes | 15-20 tipos con GWP AR6 | 0.5 semanas |
| Workflow aprobación | UI de suggest → approve → calculate | 2 semanas |
| Override | Input de factor custom con justificación | 1 semana |
| Export básico | CSV/Excel de factores usados | 1 semana |
| Disclaimer + ToS | Actualización legal | 1 semana (paralelo con legal) |
| QA/testing | Validación vs datos Colgate como benchmark | 1.5 semanas |
| **Total** | **~12 semanas (1 ingeniero)** | **~500-700 factores** |

### Mediano plazo (4-8 meses): expansión

| Componente | Detalle |
|---|---|
| Cobertura completa Scope 2 | 96+ países (como Colgate), desde Ember/IEA |
| Market-based Scope 2 | Residual mix (AIB para UE, Green-e para EEUU) |
| Jurisdicción-aware | Auto-detectar fuente mandatoria por país/regulación |
| Múltiples fuentes | Mostrar 2-3 opciones por actividad |
| Históricos | 3-5 años de vintages |
| API | Factor lookup programático |
| Aprobación bulk | Múltiples instalaciones a la vez |
| Reporte assurance-ready | PDF exportable para auditor |

### Largo plazo (9-18 meses): Scope 3

| Componente | Detalle |
|---|---|
| Categorías 3-7, 12 | Factores DEFRA (viajes, flete, residuos) |
| Spend-based | USEEIO/EXIOBASE para Cat 1, 2 |
| Supplier-specific | Ingestar factores de proveedores |
| AI matching | Auto-sugerir factor por descripción de actividad (NLP) |
| Incertidumbre | Mostrar rangos de incertidumbre por factor |
| ecoinvent | Licenciar para LCA-grade (si demanda lo justifica) |

### Qué evitar

1. **NO posicionar a Waterplan como "proveedor de factores de emisión"** -- posicionar como "plataforma con datos de referencia integrados"
2. **NO crear factores propietarios/calculados** (genera ownership y liability)
3. **NO auto-aplicar factores sin aprobación del cliente** (rompe el escudo legal)
4. **NO prometer "exactitud"** -- prometer "trazabilidad a fuentes autoritativas"
5. **NO ignorar requerimientos jurisdiccionales** (UK DEFRA mandatorio, EEUU EPA mandatorio para ciertos reporteros)
6. **NO invertir en ecoinvent/Scope 3** antes de validar que los clientes lo necesitan

### Estimación de costos

| Componente | Año 1 | Ongoing/año |
|-----------|--------|-------------|
| Ingeniería (build, 1 engineer 3 meses) | $40,000-60,000 | - |
| Ingeniería (mantenimiento) | - | $15,000-30,000 |
| Licencia IEA (si se necesita; Ember puede eliminar esta necesidad) | $10,000-30,000 | $10,000-30,000 |
| Consultor LCA/sustainability (validación) | $5,000-10,000 | $3,000-5,000 |
| **Total Año 1** | **$55,000-100,000** | - |
| **Total ongoing/año** | - | **$28,000-65,000** |

Si se usa Ember en lugar de IEA para electricidad global, el costo ongoing baja a **$18,000-35,000/año**.

### Timeline a MVP: 8-12 semanas

Con 1 data engineer dedicado, se puede tener operacional:
- Semanas 1-2: Data model y schema
- Semanas 3-4: Ingesta DEFRA + IPCC (Scope 1 completo)
- Semanas 5-6: Ingesta Ember/eGRID (Scope 2 top countries)
- Semanas 7-8: Factor selection logic + approval workflow
- Semanas 9-10: UI de sugerencia, override, export
- Semanas 11-12: QA, validación contra datos Colgate, disclaimers, deploy

### Veredicto GO / NO-GO

**GO.**

Las razones:
1. Todos los competidores principales (Watershed, Persefoni, Normative, Plan A, Sweep) ya proveen factores. No hacerlo es una desventaja competitiva concreta para ventas enterprise.
2. El riesgo legal es manejable con el modelo "sugerir + citar + aprobar" (vs "recomendar + ser dueño").
3. El costo es modesto ($55K-100K Year 1, $28K-65K ongoing) comparado con el valor de reducir onboarding en 2-4 semanas por cliente.
4. 70-80% de la cobertura se logra con datos completamente gratuitos (DEFRA, EPA, IPCC, Ember).
5. El caso de Colgate demuestra que los patrones son predecibles: 7 combustibles + 96 países + subregiones EEUU cubren las necesidades de un multinacional Fortune 500.
6. La arquitectura propuesta (Opción B) es escalable a Scope 3 sin breaking changes.

**Próximo paso inmediato**: Validar con 2-3 clientes existentes que el workflow "sugerir → aprobar" es aceptable para ellos, y verificar los términos de uso comercial de Ember para embedding en producto SaaS.
