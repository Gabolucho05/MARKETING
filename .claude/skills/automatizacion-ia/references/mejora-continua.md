# Mejora Continua del Agente

"La IA no aprende sola" (principio no negociable #2 de `SKILL.md`). Esta fase diseña el ciclo deliberado que reemplaza esa expectativa mágica: registrar, revisar, ajustar, medir.

## 1. Qué se registra de cada conversación (desde el día uno)

| Dato | Para qué sirve |
|---|---|
| Transcripción completa | Auditoría y revisión de fallos |
| Resultado (cerrado / perdido / escalado a humano / abandonado) | Medir tasa de resolución sin intervención humana |
| Motivo de escalado (si aplica) | Identificar patrones — ¿siempre escala por lo mismo? |
| Fuente (UTM/campaña si viene de `paid-media`) | Cruce con `analitica-metricas` para CAC/ROAS del canal |
| Tiempo de respuesta del agente | Detectar degradación de latencia (afecta experiencia) |

## 2. Ritual semanal de revisión

1. **Filtrar conversaciones fallidas**: el agente no entendió, el cliente se fue sin cerrar tras interactuar, o escaló a humano.
2. **Categorizar el fallo**: ¿faltaba información en la base de conocimiento? ¿el prompt del sistema no cubría esa objeción? ¿fue un caso legítimo de escalado (no es un fallo, es el diseño funcionando)?
3. **Priorizar por frecuencia**: un mismo hueco de conocimiento que aparece en el 30% de los fallos de la semana se corrige antes que un caso único.
4. **Actualizar**: sumar la respuesta correcta a `base-de-conocimiento.md`, o ajustar el prompt del sistema (`flujo-ventas-conversacional.md`) si el problema era de tono/enfoque, no de información faltante.
5. **Medir el efecto la semana siguiente**: ¿bajó la tasa de escalado por ese motivo específico?

## 3. Métricas a trackear (más allá de "funciona/no funciona")

| Métrica | Qué indica |
|---|---|
| % de conversaciones resueltas sin escalar a humano | Eficiencia real del agente — no forzar que suba a costa de mala experiencia (ver §4) |
| % de conversaciones que terminan en cierre/venta | La métrica de negocio real, se cruza con `analitica-metricas` |
| Tiempo promedio de respuesta | Experiencia del cliente — un agente "instantáneo" que responde mal no es mejor que uno con más cuidado |
| Motivo de escalado más frecuente | Guía qué actualizar primero en la base de conocimiento |
| Tasa de reactivación en seguimiento | Si el flujo de seguimiento (leads que no cerraron al momento) está funcionando |

## 4. Advertencia sobre optimizar la métrica equivocada

Bajar la tasa de escalado a humano a toda costa es un antipatrón: si el agente empieza a "arreglárselas" con casos que deberían escalar (pagos, quejas delicadas) solo para mejorar el número, se está optimizando la métrica en vez del resultado real de negocio. La tasa de escalado ideal no es cero — es la que corresponde a los disparadores no negociables definidos en `flujo-ventas-conversacional.md` §4, ni más ni menos.

## 5. Pruebas controladas de cambios (A/B ligero)

Antes de desplegar un cambio grande de prompt/flujo a toda la conversación en curso, probarlo en un subconjunto de conversaciones nuevas primero (o en horario/volumen bajo) y comparar contra el comportamiento anterior antes de reemplazarlo por completo — mismo principio de "construir por etapas" del Paso 4 de `SKILL.md`, aplicado también a las iteraciones posteriores al lanzamiento inicial, no solo a la primera construcción.

## 6. Checklist del ritual semanal

- [ ] ¿Se revisaron las conversaciones fallidas de la semana?
- [ ] ¿Se identificó al menos un patrón accionable (no solo casos aislados)?
- [ ] ¿Se actualizó la base de conocimiento o el prompt en consecuencia?
- [ ] ¿Se está midiendo el efecto de cambios anteriores, no solo aplicando cambios nuevos sin verificar los previos?
