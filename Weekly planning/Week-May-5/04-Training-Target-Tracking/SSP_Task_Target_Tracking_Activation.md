# SSP Task: Target Tracking Activation

**Fecha:** 2026-05-08
**Owner:** Ivo Kalaizic
**Deadline propuesto:** 2026-05-23 (2 semanas)
**Contexto:** Post-Training Target Tracking del 8 de mayo

---

## Objetivo

Cada Solution Specialist debe mostrar la capability de Target Tracking en su proxima reunion con los clientes que estan en condiciones de usarla (tienen data cargada en Data Gathering). Ivo debe ser invitado a la reunion.

---

## Clientes Priorizados por SSP

### TIER 1 - Ya tienen targets creados (Prioridad maxima)

| Company | SSP Owner | Targets | Variables | Data Range |
|---------|-----------|---------|-----------|------------|
| Alcoa | (asignar) | 6 | 56 vars | 2019-2025 |
| Colgate-Palmolive | Cami Behar | 3 | 84 vars | 2010-2026 |
| Metalsa | (asignar) | 2 | 16 vars | 2020-2025 |
| Bocar | Paz Estevez | 2 | 7 vars | 2020-2025 |
| Sigma | (asignar) | 2 | 7 vars | 2018-2024 |
| CC Europacific Partners | (asignar) | 1 | 7 vars | 2019-2025 |
| CC Equatorial | (asignar) | 2 | 14 vars | 2022-2025 |
| CC Andina | (asignar) | 2 | 19 vars | 2022-2025 |
| Citrofrut | (asignar) | 1 | 14 vars | 2021-2024 |
| Pluspetrol | (asignar) | 1 | 6 vars | 2021-2025 |
| Conagra Brands | (asignar) | 1 | 16 vars | 2019-2025 |

### TIER 2 - Data lista, sin targets creados aun

| Company | SSP Owner | Variables | Data Range |
|---------|-----------|-----------|------------|
| Remy Cointreau | (asignar) | 12 vars | 2023-2025 |
| CC Femsa | (asignar) | 11 vars | 2021-2024 |
| CC Eurasia | (asignar) | 9 vars | 2015-2025 |
| Premier Foods | (asignar) | 13 vars | 2022-2024 |
| CC Africa OU | (asignar) | 11 vars | 2015-2025 |

### TIER 3 - Parcial, necesitan trabajo previo

| Company | SSP Owner | Variables | Blocker |
|---------|-----------|-----------|---------|
| AMBEV | Rami Haber | 16 vars (2021-2022) | Data desactualizada, sin proyectos |
| Estee Lauder | (asignar) | 10 vars (solo 2024) | Solo 1 anio de data |
| Constellation Brands | (asignar) | 8 vars (solo 2024) | Solo 1 anio de data |
| CC Company ASP | (asignar) | 2 vars (2023-2024) | Pocas variables |

---

## Pasos por Cliente (Checklist)

### Para Tier 1 (ya tienen targets):

- [ ] **Paso 1:** Revisar sustainability report del cliente e identificar environmental targets publicados
- [ ] **Paso 2:** Validar en plataforma que la data en Data Gathering este actualizada (ver variables y anios en el Excel adjunto)
- [ ] **Paso 3:** Cargar minimo 3-5 proyectos ITF reales del cliente (si los tienen) o crear proyectos ejemplo para la demo. Campos obligatorios: **site, start date, impact**
- [ ] **Paso 4:** Crear al menos 1 escenario con los proyectos cargados
- [ ] **Paso 5:** Agendar reunion con el cliente para mostrar Target Tracking. **Invitar a Ivo obligatoriamente**
- [ ] **Paso 6:** Completar el Form de feedback post-reunion (link abajo)

### Para Tier 2 (data lista, sin targets):

- [ ] **Paso 1:** Revisar sustainability report y identificar targets del cliente
- [ ] **Paso 2:** Crear targets en la plataforma (metricas + baseline + target year)
- [ ] **Paso 3-6:** Igual que Tier 1

### Para Tier 3 (parcial):

- [ ] **Paso 1:** Coordinar con Tommy Gomez para actualizar/completar data en Data Gathering
- [ ] **Paso 2-6:** Una vez data actualizada, seguir flujo de Tier 2

---

## Recordatorios del Training

### Tres campos obligatorios para que un proyecto funcione en Target Tracking:
1. **Site** - En que sitio se implementa
2. **Start Date** - Cuando arranca el proyecto (mes y anio)
3. **Impact** - Cual es el impacto en la variable (reduccion/aumento)

### Logica de proyectos en Target Tracking:
- El **caso base** agarra todos los proyectos que NO estan en estado draft o cancel
- Proyectos de anios anteriores ya estan reflejados en la data historica (no los duplica)
- La duracion del proyecto importa: si no tiene duracion, el impacto es permanente
- Para carbon: un proyecto puede impactar en 2 variables (ej: reduce gas natural pero aumenta electricidad)

### Para proponer escenarios al cliente:
1. Cargar la data con Tommy Gomez
2. Entender el target del sustainability report
3. Si hay proyectos reales -> mostrar con data real
4. Si no -> crear proyectos ejemplo para mostrar el flujo
5. Obtener sign-off del cliente de que le interesa
6. Siguiente paso: obtener proyectos reales y modelar escenarios

### Cosas a tener en cuenta:
- **Lock de targets:** Solo company owner y can manage pueden bloquear/desbloquear
- **Managed Tags:** Se pueden crear hasta 30 tags para categorizar proyectos
- **Bulk upload:** Solo permite 1 metrica de impacto por proyecto (limitacion conocida)
- **Settings:** El company owner puede personalizar que metricas y graficos se ven

---

## Form de Feedback Post-Reunion

### Preguntas sugeridas para Google Forms:

1. **Nombre del SSP**
2. **Company / Cliente**
3. **Fecha de la reunion**
4. **Asistieron stakeholders de sustainability del cliente?** (Si/No)
5. **El cliente ya tenia targets definidos en su sustainability report?** (Si/No, cuales)
6. **Que targets se mostraron en la plataforma?** (Texto libre)
7. **Reaccion del cliente al ver Target Tracking** (1-5 + comentario)
8. **El cliente quiere avanzar con proyectos reales?** (Si/No/Necesita mas info)
9. **Que graficos/features generaron mas interes?** (Evolution chart, Gap to target, MAC curve, Waterfall, Cost)
10. **Hubo pedidos de customizacion o features nuevas?** (Texto libre)
11. **Siguiente paso acordado con el cliente** (Texto libre)
12. **El cliente pidio ver Target Tracking para carbon/energia tambien?** (Si/No)
13. **Notas adicionales**

---

## Archivos de Soporte

- `outputs/TT_Readiness_Audit_20260508_1331.xlsx` - Excel completo con readiness por company, detalle de variables, y action plan
- `outputs/TT_Readiness_Raw_20260508_1331.json` - Data cruda para consultas programaticas
- `Target Tracking Training - May 2026.pptx` - Presentacion del training
- Script: `audit_tt_readiness.py` - Re-ejecutable con token actualizado

---

## Metricas de Exito

- **100% de clientes Tier 1** con reunion de TT agendada antes del 23 de mayo
- **>80% de clientes Tier 2** con targets creados en plataforma antes del 23 de mayo
- **Todos los Forms completados** dentro de 48hs de cada reunion
- **Ivo invitado** a todas las reuniones de demo
