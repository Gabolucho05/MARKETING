# Reporte de Métricas — De Datos a Decisión

Referencia del Paso 6 de la skill `analitica-metricas`. Traduce los números de una campaña de Meta Ads en las decisiones concretas que motivaron medir en primer lugar.

**Cuándo se usa:** cuando hay una campaña de Meta ya corriendo y el usuario necesita saber qué hacer con ella (pausar, escalar, testear). No es para montar tracking (eso es `utm-y-whatsapp.md` o `ga4-gtm-implementacion.md`); es para leer resultados y decidir.

**Flujo de datos:** exportar CSV del Ads Manager, o capturas del panel de resultados. Nunca estimar datos que no estén en la fuente.

---

## Métricas que se leen siempre (glosario de decisión)

| Métrica | Qué es | Qué decisión dispara |
|---|---|---|
| **CPM** | Costo por mil impresiones | Sube → audiencia saturada o creativo con problema/rechazo. |
| **CTR** | % de clics sobre impresiones | Bajo → el hook/creativo no engancha. |
| **CPC** | Costo por clic | Eficiencia de generar interés. |
| **CPA / CPL** | Costo por adquisición / lead | Para ManoTv: costo por conversación de WhatsApp iniciada. El número que manda. |
| **ROAS** | Retorno por $ invertido | Solo con ventas reales confirmadas. Sin píxel de compra NO se usa el estimado de Meta. |
| **Frecuencia** | Veces que cada persona vio el anuncio | > 3 → fatiga de creativo, rotar. |

---

## Dos versiones de reporte

Siempre se produce en el formato pedido. Por defecto, versión interna. Versión cliente solo si es para agencia.

- **INTERNA** — directa, con jerga y decisiones sin adornos. Para el dueño del negocio.
- **CLIENTE** — misma data, lenguaje de valor, sin exponer márgenes, costos internos, nombres de ángulos ni decisiones sensibles.

---

## VERSIÓN INTERNA

```
REPORTE DE CAMPAÑA — [nombre] — [fecha corte]
Días corriendo: [X] | Gastado: [$X de $Y] | KPI maestro (de paid-media): [ej. CPA ≤ 3.50 USD]

1. SEMÁFORO GENERAL
Estado: 🟢 / 🟡 / 🔴
Lectura en una línea: [va bien/regular/mal y por qué]

2. MÉTRICAS CLAVE (vs objetivo)
| Métrica | Actual | Objetivo | Estado |
| CPM | | | 🟢🟡🔴 |
| CTR | | ≥1.5% | 🟢🟡🔴 |
| CPA | | ≤3.50 | 🟢🟡🔴 |
| Frecuencia | | <3 | 🟢🟡🔴 |
| Resultados (conversaciones WA) | | | |

3. ANÁLISIS POR CREATIVO
- [AD_1]: CTR __ | CPA __ | veredicto: [escalar/mantener/matar]
- [AD_2]: CTR __ | CPA __ | veredicto: [escalar/mantener/matar]
- [AD_3]: CTR __ | CPA __ | veredicto: [escalar/mantener/matar]
Ganador claro: [cuál y por qué]

4. LAS 3 DECISIONES
🔴 PAUSAR:  [qué apagar ya]
🟢 ESCALAR: [qué subir, máx +20% por movimiento]
🧪 TESTEAR: [qué nuevo creativo/ángulo/audiencia probar]

5. CHEQUEO DE INVALIDADORES (de paid-media)
[ ] CPA > 5 USD por 5 días → PARAR
[ ] CTR < 1% tras 3 días → rotar creativos
[ ] Frecuencia > 3 → inyectar variantes
[ ] Costo x conversación WA > 1.20 USD sostenido → revisar oferta

6. PROYECCIÓN
Al ritmo actual: [X resultados / clientes proyectados al cierre]
¿Alcanza el objetivo? [sí/no] | Si no: [qué cambiar]
```

---

## VERSIÓN CLIENTE

```
REPORTE DE RENDIMIENTO PUBLICITARIO
Campaña: [nombre] | Período: [fechas] | Preparado por: [agencia/ManoTv]

RESUMEN EJECUTIVO
[2-3 líneas en lenguaje claro, enfoque en resultados no en métricas técnicas]

RESULTADOS DEL PERÍODO
- Personas alcanzadas: [X]
- Interacciones / clics: [X]
- Conversaciones / leads: [X]
- Costo por resultado: [X] [+ comparación favorable si aplica]

QUÉ ESTÁ FUNCIONANDO
[Los mensajes/creativos de mejor desempeño, en positivo]

OPTIMIZACIONES / PRÓXIMOS PASOS
["concentrando presupuesto en los mensajes de mayor rendimiento", etc.]

PROYECCIÓN
[Qué se espera al cierre, en términos que le importan al cliente]
```

---

## Reglas del reporte (no negociables)

1. **Se mide para decidir.** Todo reporte termina en 3 decisiones concretas o no sirvió.
2. **No inventar números.** Dato que no está en la fuente → "falta este dato", nunca estimado al ojo.
3. **El KPI maestro lo define `paid-media`**, no analítica. Se mide contra ese KPI.
4. **Versión cliente nunca expone:** márgenes, costos internos, nombres de ángulos, ni decisiones de pausar creativos con crudeza.
5. **Comparar siempre contra el corte anterior** cuando exista — tendencia, no foto suelta.
6. **Sin ROAS inventado:** en operación por WhatsApp sin píxel, solo con ventas reales confirmadas por el usuario.
