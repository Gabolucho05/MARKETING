# Reporte de Métricas: ROI, ROAS y Dashboards

Esta es la capa de reporting que se construye sobre datos ya validados (Paso 5). Instrumentación responde "¿está bien medido?"; este archivo responde "dado ese dato limpio, ¿cuánto retorno hay y qué se hace al respecto?".

## 1. Fórmulas — usar siempre estas definiciones, mostrando el cálculo

| Métrica | Fórmula | Notas |
|---|---|---|
| **ROAS** (plataforma) | ingreso atribuido por la plataforma / gasto en pauta | El número que muestra Meta/Google Ads en su panel — usa su propio modelo de atribución, casi siempre más alto que la realidad del negocio |
| **ROAS ciego (blended)** | ingreso total real del negocio / gasto total en pauta | El número que cuadra con la cuenta bancaria. Siempre menor al ROAS de plataforma porque no le da crédito a la pauta por ventas orgánicas/directas |
| **MER** (Marketing Efficiency Ratio) | ingreso total / inversión total en marketing (todos los canales) | Mejor número único para "¿está funcionando el marketing?" a nivel de negocio completo |
| **ROI** | (ingreso − costo total) / costo total | A diferencia del ROAS, resta el costo completo (producción de creativos, herramientas, comisión de agencia), no solo el gasto en pauta |
| **CAC** (Costo de Adquisición de Cliente) | costo total de adquisición / clientes nuevos | "Costo total" incluye producción de creativos y herramientas, no solo el gasto en anuncios, salvo que se reporte intencionalmente un "CAC de pauta" más angosto |
| **LTV** (Valor de Vida del Cliente) | ticket promedio × frecuencia de compra × vida útil promedio (o por cohorte: ingreso real acumulado por cohorte en N meses) | El cálculo por cohorte es más honesto para un negocio joven sin suficiente histórico |
| **Ratio LTV:CAC** | LTV / CAC | Menor a 1: pierde plata. 1-3: marginal, vigilar. 3+: saludable. Más de ~5 suele señalar que se está sub-invirtiendo en crecimiento |
| **Periodo de recuperación (payback)** | CAC / margen bruto mensual por cliente | Cuántos meses tarda un cliente en pagar su propia adquisición — más relevante que LTV:CAC para negocios con restricción de caja (muy relevante en Venezuela, mismo principio de `paid-media` de escalar por caja neta) |

## 2. Consolidación multi-canal

Armar esta tabla antes de escribir cualquier narrativa. No dejar que cada canal reporte su propia métrica preferida por separado — así es como un cliente termina creyendo que tres campañas "van ganando" mientras el negocio pierde plata.

```
| Canal | Gasto | Ingreso atribuido | Cierres/Órdenes | ROAS (plataforma) | ROAS ciego (contribución est.)* | CAC |
|---|---|---|---|---|---|---|
| Meta Ads | | | | | | |
| Google Ads | | | | | | |
| WhatsApp/Orgánico | $0 | | | — | | — |
| Email/Automatización | | | | | | |
| TOTAL / Ciego | | | | — | (esta fila = ROAS ciego/MER) | |
```

\* La "contribución ciega" por canal es, por naturaleza, aproximada sin un modelo de atribución real (ver §3). Se etiqueta siempre como estimación.

Si el negocio opera sin sitio web (ver `utm-y-whatsapp.md`), el "Ingreso atribuido" y "Cierres" de esta tabla salen de la planilla de conversación → cierre, no de una plataforma de analítica — sigue siendo el mismo ejercicio de consolidación, solo con otra fuente de datos.

## 3. Construcción del dashboard

- Usar la skill `dataviz` para cualquier gráfico o stat tile — define el lenguaje visual compartido para que este dashboard y un entregable de `market-report-pdf` se lean como un mismo sistema, no como dos herramientas distintas.
- Usar `market-report` / `market-report-pdf` para el export final pulido al cliente.

**Dashboard semanal/operativo** (para quien corre la pauta día a día):
- Gasto, ROAS, CPA/CPL por campaña — tendencia, no solo el número del momento.
- Qué campañas cruzaron un invalidador esta semana (ver §5).
- Señal de fatiga de creativo (CTR/frecuencia) — retroalimenta a `paid-media`.

**Dashboard mensual/estratégico** (para el cliente, retroalimenta al Departamento de Estrategia):
- Tendencia de ROAS ciego/MER de los últimos 3-6 meses.
- Tendencia de CAC y LTV:CAC — ¿la eficiencia mejora o empeora a medida que se escala el gasto?
- Mezcla de canales — ¿de dónde viene realmente el ingreso vs. dónde se está poniendo el presupuesto?
- Un párrafo de recomendación (escalar/mantener/cortar/pivotar) — nunca entregar un dashboard sin una recomendación escrita adjunta.

## 4. Atribución — declarar el modelo, no esconderse detrás del número

Elegir y **declarar explícitamente** qué modelo produjo los números de un reporte — nunca mezclar modelos en un mismo reporte sin etiquetar cada uno:

- **Last-click**: el más simple y común por defecto, subestima sistemáticamente los canales de awareness/parte alta del embudo.
- **Reportado por la plataforma** (modelo propio de Meta/Google Ads): infla la contribución de esa plataforma — útil para optimizar dentro de la plataforma, no para el total ciego del negocio.
- **Data-driven de GA4**: mejor que last-click pero es una caja negra, y no coincide con el reporte propio de ninguna plataforma — anticipar la pregunta de "por qué no cuadran los números" en el reporte mismo.
- **Modelo ponderado simple** (ej. 40% primer contacto / 20% medio / 40% último contacto) cuando no hay una herramienta lo bastante sofisticada para atribución data-driven y el cliente necesita algo mejor que puro last-click sin nueva infraestructura.
- **Sin sitio web (WhatsApp)**: el "modelo de atribución" es, en la práctica, el UTM del link que originó la conversación — declarar esa limitación (no hay forma de saber si hubo contacto previo por otro canal antes del clic con UTM) en vez de presentar el número como si fuera perfecto.

## 5. Invalidadores — umbrales de alerta de rendimiento

Misma disciplina que `estrategia-planificacion` y `paid-media` ya usan: todo reporte recurrente lleva condiciones numéricas explícitas que disparan acción, acordadas de antemano, no decididas en caliente:

- "Si el ROAS ciego cae por debajo de `Xx` durante 2 semanas consecutivas → pausar el canal afectado y escalar a Estrategia para decisión de pivote."
- "Si el CAC supera `$X` por 5 días consecutivos → aplicar las reglas de matar/mantener/escalar de `paid-media` a la campaña afectada."
- "Si el LTV:CAC cae por debajo de `1.5` → advertir al cliente antes de comprometer el presupuesto del mes siguiente, no escalar gasto en automático."

Reportar qué invalidadores se cruzaron en el periodo, no solo los números crudos — eso es lo que convierte un reporte mensual en algo accionable en vez de una pared de números.

## 6. Errores comunes a evitar

- **Doble conteo de ingreso** entre canales cuando cada plataforma se atribuye la misma venta (solapamiento clásico entre Meta y Google reportando la misma conversión). El ROAS ciego/MER calculado sobre el ingreso real del negocio evita esto; sumar los números reportados por cada plataforma, no.
- **Reportar ingreso bruto como si fuera ganancia.** El ROAS/MER sobre ingreso bruto puede verse excelente mientras el negocio pierde plata si el margen es delgado — siempre conocer (o pedir) el % de margen bruto antes de declarar un canal "rentable".
- **Ignorar devoluciones/reembolsos** del lado del ingreso — especialmente relevante en e-commerce.
- **Comparar el CAC de este mes contra el del año pasado sin considerar estacionalidad** — revisar el calendario de `estrategia-planificacion` (quincenas, aguinaldos, efemérides) antes de llamar "tendencia real" a una subida o bajada de CAC.
- **Un dashboard sin recomendación adjunta.** Números sin un "y entonces qué hago" no son un entregable que una agencia deba cobrar.

## 7. Ejemplo resuelto

```
Meta Ads:  gasto $2.000 → ingreso reportado por plataforma $9.000 → ROAS plataforma 4.5x
Google Ads: gasto $1.000 → ingreso reportado por plataforma $3.500 → ROAS plataforma 3.5x
Gasto total en pauta: $3.000
Ingreso real total del negocio este periodo (banco/planilla de cierres): $9.800
→ ROAS ciego = $9.800 / $3.000 = 3.27x   (menor que cualquiera de los dos números de plataforma — esperado)
Clientes nuevos este periodo: 140
Costo total de adquisición (gasto + $400 de producción de creativos): $3.400
→ CAC = $3.400 / 140 = $24,29
Margen bruto promedio por cliente/mes: $18
→ Periodo de recuperación ≈ 1.35 meses
```

Reportar los cuatro números juntos (ROAS plataforma ×2, ROAS ciego, CAC, payback) — reportar solo el que se ve mejor es como una agencia pierde la confianza del cliente la primera vez que este cruza los números contra su propio estado de cuenta.
