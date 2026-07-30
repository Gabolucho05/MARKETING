# Métricas Orgánicas

Todo dato de interacción de esta semana determina qué se prueba la próxima — nunca se publica "porque toca" sin mirar atrás. Esta fase no reemplaza a `analitica-metricas` (que hace el reporte de negocio completo, ROI/ROAS/CAC/LTV); aquí se trackea el rendimiento orgánico específico para decidir qué contenido repetir, ajustar o descartar.

## 1. Métricas nativas por plataforma (qué mirar, y por qué)

| Métrica | Qué indica | Qué decisión habilita |
|---|---|---|
| Alcance / impresiones | Cuánta gente vio el contenido, más allá de seguidores | Si el alcance cae de forma sostenida, revisar frecuencia/formato, no solo el copy de un post puntual |
| Guardados (saves) | Contenido percibido como útil/de valor | Señal fuerte de qué tipo de contenido merece repetirse en otras variantes |
| Compartidos | Contenido identificable/viral | Indica qué ángulos generan identificación — insumo directo para `paid-media` si se quiere amplificar |
| Comentarios | Nivel de conversación generada | Cruzar con el objetivo de comportamiento declarado en el copy (ver `copywriting-persuasion.md`) — si el objetivo era "que comente" y no comentó, el hook falló |
| Clics al link/WhatsApp | Intención real de acción | El número que más se acerca a "esto generó negocio", conecta directo con `analitica-metricas` (ver `utm-y-whatsapp.md` de esa skill) |
| Tasa de seguimiento (follows por alcance) | Si el contenido convierte espectadores en audiencia propia | Relevante para contenido de descubrimiento (reels a no-seguidores) |

## 2. Cadencia de revisión

- **Semanal**: revisar qué formato/horario/ángulo tuvo mejor alcance y guardados esta semana — ajustar el calendario de la próxima semana en consecuencia (ver `calendario-y-horarios.md`).
- **Mensual**: consolidar qué contenido generó más clics reales a WhatsApp/link, y entregar ese hallazgo a `analitica-metricas` para que se refleje en el reporte de negocio del cliente, no solo en un reporte de vanidad de "likes".

## 3. Evitar métricas de vanidad como única medida de éxito

Un post con muchos likes pero cero clics al link no es necesariamente un post exitoso si el objetivo declarado era generar contacto de venta — siempre volver al objetivo de comportamiento definido antes de publicar (`copywriting-persuasion.md` §1) para juzgar si el contenido funcionó, no solo mirar el número más grande del reporte nativo de la plataforma.

## 4. Plantilla de reporte semanal (interno, para ajustar el calendario)

```markdown
# Reporte Orgánico Semanal — [Cliente] — Semana del [fecha]

## Top 3 contenidos de la semana
| Contenido | Formato | Objetivo | Alcance | Guardados | Clics a WhatsApp |
|---|---|---|---|---|---|

## Qué se prueba la próxima semana (basado en lo anterior)
- [Ajuste concreto: más de X formato, menos de Y, nuevo horario a probar]
```

## 5. Handoff a analitica-metricas

Cuando el cliente pida un reporte formal de rendimiento (no solo el ajuste táctico semanal interno), esta skill entrega los datos orgánicos crudos (alcance, guardados, clics) y es `analitica-metricas` quien los consolida junto con pauta/email en el reporte de ROI/ROAS/CAC completo — esta skill no calcula ROI ni ROAS, solo mide y ajusta el rendimiento del contenido orgánico día a día.
