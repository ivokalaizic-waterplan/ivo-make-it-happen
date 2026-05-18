# Inventario de Targets - Company demo-sales

> Datos extraidos de la API de produccion el 2026-05-18.
> Objetivo: documentar todos los targets para que Ivo los elimine desde la UI y Jero/Juli los recreen como ejercicio de training.

## Asignacion de sitios

| Persona | Sitio | Site ID |
|---------|-------|---------|
| Jero | Goodyear | `019dcf62-6e7d-711b-a458-3e860d718e3d` |
| Juli | Queretaro | `019dcf64-153b-711b-a458-5bae30460865` |

---

## Resumen de targets existentes

| Scope | Metric | Tipo | Cantidad |
|-------|--------|------|----------|
| Company | Scope 1 & 2 (tCO2) - Manufacturing | Carbono | 1 |
| Company | Energy Intensity | Carbono | 1 (LOCKED) |
| Company | Water Intensity | Agua | 1 |
| Site (x5) | Scope 1 & 2 (tCO2) - Manufacturing | Carbono | 5 |
| Site (x5) | Energy Intensity | Carbono | 5 |
| Site (x5) | Water Intensity | Agua | 5 |
| **TOTAL** | | | **18** |

**Nota:** El target de Scope 1 & 2 de Goodyear tambien esta **LOCKED**.

---

## 1. TARGETS DE COMPANY (3 targets)

### 1.1 Scope 1 & 2 (tCO2) - Manufacturing (CARBONO)

| Campo | Valor |
|-------|-------|
| Metric | Scope 1 & 2 (tCO2) - Manufacturing |
| Tipo | Carbono (energy) |
| Ano base | 2021 |
| Valor base | 75,205.75 tCO2 |
| Ano target | 2030 |
| Valor target | 52,644.03 tCO2 |
| Reduccion | -30% aprox |
| Operador | lte (menor o igual) |
| Locked | No |
| Tiene checkpoints | Si (2022-2029) |

**Yearly checkpoints:**

| Ano | Valor (tCO2) |
|-----|-------------|
| 2022 | 74,528.90 |
| 2023 | 73,400.81 |
| 2024 | 71,821.49 |
| 2025 | 69,565.32 |
| 2026 | 66,181.06 |
| 2027 | 62,796.80 |
| 2028 | 58,961.31 |
| 2029 | 58,331.43 |

---

### 1.2 Energy Intensity (CARBONO)

| Campo | Valor |
|-------|-------|
| Metric | Energy Intensity |
| Tipo | Carbono (energy) |
| Ano base | 2021 |
| Valor base | 0.3245 |
| Ano target | 2030 |
| Valor target | 0.2596 |
| Reduccion | -20% aprox |
| Operador | lte (menor o igual) |
| Locked | **SI** (por Ivo Kalaizic) |
| Tiene checkpoints | Si (2024-2029, NO tiene 2022-2023) |

**Yearly checkpoints:**

| Ano | Valor |
|-----|-------|
| 2024 | 0.3100 |
| 2025 | 0.3050 |
| 2026 | 0.2950 |
| 2027 | 0.2800 |
| 2028 | 0.2720 |
| 2029 | 0.2670 |

> NOTA: Este target esta LOCKED. Hay que desbloquearlo antes de poder eliminarlo.
> NOTA: Los checkpoints fueron editados manualmente (no empiezan en 2022 como los demas).

---

### 1.3 Water Intensity (AGUA)

| Campo | Valor |
|-------|-------|
| Metric | Water Intensity |
| Tipo | Agua (water) |
| Ano base | 2021 |
| Valor base | 3.8653 |
| Ano target | 2030 |
| Valor target | 3.0922 |
| Reduccion | -20% aprox |
| Operador | lte (menor o igual) |
| Locked | No |
| Tiene checkpoints | Si (2022-2029) |

**Yearly checkpoints:**

| Ano | Valor |
|-----|-------|
| 2022 | 3.8500 |
| 2023 | 3.7700 |
| 2024 | 3.6200 |
| 2025 | 3.5200 |
| 2026 | 3.4900 |
| 2027 | 3.3800 |
| 2028 | 3.2200 |
| 2029 | 3.1200 |

> NOTA: Los checkpoints fueron editados manualmente (valores redondeados).

---

## 2. TARGETS DE SITIO - GOODYEAR (Jero)

### 2.1 Scope 1 & 2 (tCO2) - Manufacturing (CARBONO)

| Campo | Valor |
|-------|-------|
| Metric | Scope 1 & 2 (tCO2) - Manufacturing |
| Tipo | Carbono (energy) |
| Ano base | 2021 |
| Valor base | 8,267.45 tCO2 |
| Ano target | 2030 |
| Valor target | 5,787.21 tCO2 |
| Reduccion | -30% aprox |
| Operador | lte (menor o igual) |
| Locked | **SI** (por Ivo Kalaizic) |
| Tiene checkpoints | Si (2022-2029) |

**Yearly checkpoints:**

| Ano | Valor (tCO2) |
|-----|-------------|
| 2022 | 8,193.04 |
| 2023 | 8,069.03 |
| 2024 | 7,895.41 |
| 2025 | 7,647.39 |
| 2026 | 7,275.35 |
| 2027 | 6,903.32 |
| 2028 | 6,481.68 |
| 2029 | 6,084.84 |

> NOTA: Este target esta LOCKED. Hay que desbloquearlo antes de poder eliminarlo.

---

### 2.2 Energy Intensity (CARBONO)

| Campo | Valor |
|-------|-------|
| Metric | Energy Intensity |
| Tipo | Carbono (energy) |
| Ano base | 2021 |
| Valor base | 0.5288 |
| Ano target | 2030 |
| Valor target | 0.4230 |
| Reduccion | -20% aprox |
| Operador | lte (menor o igual) |
| Locked | No |
| Tiene checkpoints | Si (2022-2029) |

**Yearly checkpoints:**

| Ano | Valor |
|-----|-------|
| 2022 | 0.5256 |
| 2023 | 0.5203 |
| 2024 | 0.5129 |
| 2025 | 0.5023 |
| 2026 | 0.4865 |
| 2027 | 0.4706 |
| 2028 | 0.4526 |
| 2029 | 0.4357 |

---

### 2.3 Water Intensity (AGUA)

| Campo | Valor |
|-------|-------|
| Metric | Water Intensity |
| Tipo | Agua (water) |
| Ano base | 2021 |
| Valor base | 2.3278 |
| Ano target | 2030 |
| Valor target | 1.8622 |
| Reduccion | -20% aprox |
| Operador | lte (menor o igual) |
| Locked | No |
| Tiene checkpoints | Si (2022-2029) |

**Yearly checkpoints:**

| Ano | Valor |
|-----|-------|
| 2022 | 2.3138 |
| 2023 | 2.2905 |
| 2024 | 2.2579 |
| 2025 | 2.2114 |
| 2026 | 2.1416 |
| 2027 | 2.0717 |
| 2028 | 1.9926 |
| 2029 | 1.9181 |

---

## 3. TARGETS DE SITIO - QUERETARO (Juli)

### 3.1 Scope 1 & 2 (tCO2) - Manufacturing (CARBONO)

| Campo | Valor |
|-------|-------|
| Metric | Scope 1 & 2 (tCO2) - Manufacturing |
| Tipo | Carbono (energy) |
| Ano base | 2021 |
| Valor base | 32,141.11 tCO2 |
| Ano target | 2030 |
| Valor target | 22,498.78 tCO2 |
| Reduccion | -30% aprox |
| Operador | lte (menor o igual) |
| Locked | No |
| Tiene checkpoints | Si (2022-2029) |

**Yearly checkpoints:**

| Ano | Valor (tCO2) |
|-----|-------------|
| 2022 | 31,851.84 |
| 2023 | 31,369.73 |
| 2024 | 30,694.76 |
| 2025 | 29,730.53 |
| 2026 | 28,284.18 |
| 2027 | 26,837.83 |
| 2028 | 25,198.63 |
| 2029 | 23,655.86 |

---

### 3.2 Energy Intensity (CARBONO)

| Campo | Valor |
|-------|-------|
| Metric | Energy Intensity |
| Tipo | Carbono (energy) |
| Ano base | 2021 |
| Valor base | 0.4526 |
| Ano target | 2030 |
| Valor target | 0.3621 |
| Reduccion | -20% aprox |
| Operador | lte (menor o igual) |
| Locked | No |
| Tiene checkpoints | Si (2022-2029) |

**Yearly checkpoints:**

| Ano | Valor |
|-----|-------|
| 2022 | 0.4499 |
| 2023 | 0.4454 |
| 2024 | 0.4390 |
| 2025 | 0.4300 |
| 2026 | 0.4164 |
| 2027 | 0.4028 |
| 2028 | 0.3874 |
| 2029 | 0.3730 |

---

### 3.3 Water Intensity (AGUA)

| Campo | Valor |
|-------|-------|
| Metric | Water Intensity |
| Tipo | Agua (water) |
| Ano base | **2025** |
| Valor base | 5.3401 |
| Ano target | 2030 |
| Valor target | 4.5391 |
| Reduccion | -15% aprox |
| Operador | lte (menor o igual) |
| Locked | No |
| Tiene checkpoints | **NO (es lineal, sin checkpoints)** |

> ATENCION: Este target es DIFERENTE a los demas:
> - Ano base es 2025 (no 2021 como todos los otros)
> - NO tiene yearly checkpoints (es un target lineal)
> - Fue creado/editado independientemente del bulk upload

---

## 4. TARGETS DE SITIO - CAJAMAR

### 4.1 Scope 1 & 2 (tCO2) - Manufacturing (CARBONO)

| Campo | Valor |
|-------|-------|
| Ano base | 2021 |
| Valor base | 20,285.87 tCO2 |
| Ano target | 2030 |
| Valor target | 14,200.11 tCO2 |
| Operador | lte |
| Locked | No |
| Checkpoints | Si (2022-2029) |

| Ano | Valor (tCO2) |
|-----|-------------|
| 2022 | 20,103.30 |
| 2023 | 19,799.01 |
| 2024 | 19,373.00 |
| 2025 | 18,764.43 |
| 2026 | 17,851.56 |
| 2027 | 16,938.70 |
| 2028 | 15,904.12 |
| 2029 | 14,930.40 |

### 4.2 Energy Intensity (CARBONO)

| Campo | Valor |
|-------|-------|
| Ano base | 2021 |
| Valor base | 0.8039 |
| Ano target | 2030 |
| Valor target | 0.6431 |
| Operador | lte |
| Locked | No |
| Checkpoints | Si (2022-2029) |

| Ano | Valor |
|-----|-------|
| 2022 | 0.7990 |
| 2023 | 0.7910 |
| 2024 | 0.7798 |
| 2025 | 0.7637 |
| 2026 | 0.7396 |
| 2027 | 0.7154 |
| 2028 | 0.6881 |
| 2029 | 0.6624 |

### 4.3 Water Intensity (AGUA)

| Campo | Valor |
|-------|-------|
| Ano base | 2021 |
| Valor base | 6.8701 |
| Ano target | 2030 |
| Valor target | 5.4961 |
| Operador | lte |
| Locked | No |
| Checkpoints | Si (2022-2029) |

| Ano | Valor |
|-----|-------|
| 2022 | 6.8289 |
| 2023 | 6.7602 |
| 2024 | 6.6640 |
| 2025 | 6.5266 |
| 2026 | 6.3205 |
| 2027 | 6.1144 |
| 2028 | 5.8808 |
| 2029 | 5.6610 |

---

## 5. TARGETS DE SITIO - ALEXANDRIA

### 5.1 Scope 1 & 2 (tCO2) - Manufacturing (CARBONO)

| Campo | Valor |
|-------|-------|
| Ano base | 2021 |
| Valor base | 5,315.45 tCO2 |
| Ano target | 2030 |
| Valor target | 3,720.82 tCO2 |
| Operador | lte |
| Locked | No |
| Checkpoints | Si (2022-2029) |

| Ano | Valor (tCO2) |
|-----|-------------|
| 2022 | 5,267.61 |
| 2023 | 5,187.88 |
| 2024 | 5,076.26 |
| 2025 | 4,916.79 |
| 2026 | 4,677.60 |
| 2027 | 4,438.40 |
| 2028 | 4,167.31 |
| 2029 | 3,912.17 |

### 5.2 Energy Intensity (CARBONO)

| Campo | Valor |
|-------|-------|
| Ano base | 2021 |
| Valor base | 0.1756 |
| Ano target | 2030 |
| Valor target | 0.1405 |
| Operador | lte |
| Locked | No |
| Checkpoints | Si (2022-2029) |

| Ano | Valor |
|-----|-------|
| 2022 | 0.1745 |
| 2023 | 0.1728 |
| 2024 | 0.1703 |
| 2025 | 0.1668 |
| 2026 | 0.1615 |
| 2027 | 0.1563 |
| 2028 | 0.1503 |
| 2029 | 0.1447 |

### 5.3 Water Intensity (AGUA)

| Campo | Valor |
|-------|-------|
| Ano base | 2021 |
| Valor base | 4.3329 |
| Ano target | 2030 |
| Valor target | 3.4663 |
| Operador | lte |
| Locked | No |
| Checkpoints | Si (2022-2029) |

| Ano | Valor |
|-----|-------|
| 2022 | 4.3069 |
| 2023 | 4.2636 |
| 2024 | 4.2029 |
| 2025 | 4.1163 |
| 2026 | 3.9863 |
| 2027 | 3.8563 |
| 2028 | 3.7090 |
| 2029 | 3.5703 |

---

## 6. TARGETS DE SITIO - MADRID

### 6.1 Scope 1 & 2 (tCO2) - Manufacturing (CARBONO)

| Campo | Valor |
|-------|-------|
| Ano base | 2021 |
| Valor base | 9,195.87 tCO2 |
| Ano target | 2030 |
| Valor target | 6,437.11 tCO2 |
| Operador | lte |
| Locked | No |
| Checkpoints | Si (2022-2029) |

| Ano | Valor (tCO2) |
|-----|-------------|
| 2022 | 9,113.11 |
| 2023 | 8,975.17 |
| 2024 | 8,782.06 |
| 2025 | 8,506.18 |
| 2026 | 8,092.37 |
| 2027 | 7,678.55 |
| 2028 | 7,209.56 |
| 2029 | 6,768.16 |

### 6.2 Energy Intensity (CARBONO)

| Campo | Valor |
|-------|-------|
| Ano base | 2021 |
| Valor base | 0.1732 |
| Ano target | 2030 |
| Valor target | 0.1385 |
| Operador | lte |
| Locked | No |
| Checkpoints | Si (2022-2029) |

| Ano | Valor |
|-----|-------|
| 2022 | 0.1721 |
| 2023 | 0.1704 |
| 2024 | 0.1680 |
| 2025 | 0.1645 |
| 2026 | 0.1593 |
| 2027 | 0.1541 |
| 2028 | 0.1482 |
| 2029 | 0.1427 |

### 6.3 Water Intensity (AGUA)

| Campo | Valor |
|-------|-------|
| Ano base | 2021 |
| Valor base | 2.5377 |
| Ano target | 2030 |
| Valor target | 2.0302 |
| Operador | lte |
| Locked | No |
| Checkpoints | Si (2022-2029) |

| Ano | Valor |
|-----|-------|
| 2022 | 2.5225 |
| 2023 | 2.4971 |
| 2024 | 2.4616 |
| 2025 | 2.4108 |
| 2026 | 2.3347 |
| 2027 | 2.2585 |
| 2028 | 2.1723 |
| 2029 | 2.0911 |

---

## Alertas para Ivo antes de eliminar

1. **2 targets estan LOCKED** y hay que desbloquearlos primero:
   - Company > Energy Intensity (locked por Ivo)
   - Goodyear > Scope 1 & 2 (locked por Ivo)

2. **El Water Intensity de Queretaro es diferente**: tiene baseline year 2025 (no 2021) y NO tiene checkpoints (es lineal). Juli tiene que saber esto para recrearlo igual o se puede decidir si se quiere con baseline 2021.

3. **Los checkpoints del Company Energy Intensity fueron editados manualmente**: empiezan en 2024 (no 2022) y tienen valores redondeados. Esto difiere del bulk upload original.

4. **Los checkpoints del Company Water Intensity tambien fueron editados**: tienen valores redondeados vs. los del bulk upload original.

5. **El checkpoint 2029 del Company Scope 1 & 2 fue editado**: el valor actual es 58,331.43 vs. el original 55,351.43 del bulk upload.

---

## Instrucciones para los chicos al recrear

Cuando creen un target desde la UI, los campos que necesitan completar son:

1. **Metric**: seleccionar de la lista (Scope 1 & 2, Energy Intensity, o Water Intensity)
2. **Baseline Year**: el ano de referencia
3. **Baseline Value**: el valor de partida
4. **Target Year**: el ano objetivo
5. **Target Value**: el valor que se quiere alcanzar
6. **Comparison Operator**: siempre "lte" (menor o igual) para todos estos targets
7. **Checkpoints** (opcional): valores intermedios ano por ano. Si no se agregan, el target es lineal (interpolacion directa entre baseline y target)
