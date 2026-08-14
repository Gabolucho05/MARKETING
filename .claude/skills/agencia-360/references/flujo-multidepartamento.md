# Flujo Multidepartamento y Checkpoints

Cuando un pedido abarca varios departamentos (un lanzamiento, una campaña completa, un proyecto integral), este es el orden por defecto y los checkpoints entre cada etapa. No es una secuencia rígida obligatoria para todo — es el orden que evita los errores más comunes de coordinación (diseñar sobre un brief a medio hacer, pautear piezas sin aprobar, medir una campaña que nadie documentó).

## 1. El flujo por defecto

```
[1. Estrategia]  → brief, insight, objetivo SMART, invalidadores, presupuesto
        │
        ▼  CHECKPOINT A
[2. Diseño]      → sistema de marca (si no existe) + piezas ejecutables por canal
        │
        ▼  CHECKPOINT B
[3. Digital/RRSS]→ paid-media monta campaña · community-manager gestiona
        │           publicación y respuesta · automatizacion-ia atiende por
        │           WhatsApp y dispara flujos de seguimiento
        ▼  CHECKPOINT C
[4. Analítica]   → analitica-metricas mide ROI/ROAS, dispara alerta si se
        │           cruza un invalidador
        │
        └──► retroalimenta a [1. Estrategia] para pivotar o escalar (CHECKPOINT D)
```

## 2. Checkpoints — qué se verifica antes de avanzar

### Checkpoint A — de Estrategia a Diseño
- ¿El brief tiene objetivo, insight, presupuesto e invalidadores definidos (no solo "haz algo bonito")?
- ¿El usuario confirmó el brief, o sigue en borrador?
- Si el brief está incompleto, no pasar a Diseño con supuestos no declarados — completar o marcar explícitamente qué queda pendiente de confirmar con el cliente.

### Checkpoint B — de Diseño a Digital/RRSS
- ¿Las piezas están especificadas (DESIGN.md o prompts) y, si se generaron, aprobadas por el usuario?
- ¿El sistema de marca quedó guardado en el expediente (`02-diseno/sistema-de-marca.md`) para que Digital no tenga que re-preguntar paleta/tono?
- ¿Se identificó qué pieza va a cada canal (Meta Ads, contenido orgánico, WhatsApp)?

### Checkpoint C — dentro de Digital/RRSS, antes de Analítica
- ¿Las campañas de `paid-media` están montadas (en pausa, pendientes de aprobación del usuario — nunca encendidas automáticamente)?
- ¿El calendario de `community-manager` está definido y las piezas asignadas a fecha/hora?
- Si hay `automatizacion-ia` involucrado: ¿el diseño del agente fue aprobado antes de construir, y el tracking (UTMs, píxel) está listo para que Analítica pueda medir desde el día uno?

### Checkpoint D — de Analítica de vuelta a Estrategia
- ¿Se cruzó algún invalidador definido en el brief original? Si sí, esto no es un reporte más — es una señal que requiere reabrir la conversación con Estrategia para decidir pivote/escalado, no seguir ejecutando en automático.
- ¿El reporte quedó guardado en el expediente (`04-analitica/reportes/`) con fecha?

## 3. Cuándo el flujo NO es lineal

- Un cliente existente que solo necesita una pieza puntual (ej. "otro flyer para la misma campaña") no recorre los 4 checkpoints — se enruta directo a `diseno-creativo` con el expediente ya cargado como contexto.
- Un ajuste de campaña activa (ej. "sube el presupuesto de la campaña X") va directo a `paid-media`, no reinicia desde Estrategia.
- Un reporte de rendimiento pedido de forma aislada va directo a `analitica-metricas`.

El flujo completo con los 4 checkpoints aplica quintaesencialmente a: lanzamientos de producto/servicio, campañas nuevas de cero, o cuando el cliente pide explícitamente "que la agencia maneje todo el proyecto".

## 4. Ejemplo end-to-end (resumido)

**Pedido**: "Necesito lanzar mi nueva línea de productos en agosto, campaña completa."

1. **Router**: detecta que es un lanzamiento completo → crea/carga expediente del cliente → enruta a Estrategia.
2. **Estrategia** (`estrategia-planificacion`): produce brief de lanzamiento con objetivo, presupuesto, calendario cruzado con efemérides de agosto, invalidadores. Se guarda en `01-estrategia/brief.md`. — **Checkpoint A**: usuario confirma el brief.
3. **Diseño** (`diseno-creativo`): con el brief como insumo, construye/actualiza el sistema de marca y produce las especificaciones de piezas (landing en Claude Design, flyers y carrusel para redes, creativos para Meta Ads). Se guarda en `02-diseno/`. — **Checkpoint B**: usuario aprueba piezas/specs.
4. **Digital/RRSS**: `paid-media` monta la estructura de campaña con los ángulos y creativos (queda en pausa); `community-manager` arma el calendario orgánico de agosto; si aplica, `automatizacion-ia` diseña el agente de WhatsApp para atender el aumento de mensajes del lanzamiento. Todo queda en `03-digital/`. — **Checkpoint C**: usuario aprueba encender campañas y publicar calendario.
5. **Analítica** (`analitica-metricas`): valida que el tracking esté listo ANTES del lanzamiento (no después), y arma el plan de reporte semanal/mensual con los invalidadores del brief original.
6. Una semana después del lanzamiento: Analítica reporta — si se cruzó un invalidador (ej. CPA muy por encima del objetivo), el router reabre el ciclo con Estrategia (**Checkpoint D**) en vez de dejar que Digital siga escalando gasto sin revisión.

## 5. Registro de qué se pasó a cada departamento

En cada handoff, el router deja una línea corta en `EXPEDIENTE.md` (sección "Historial de decisiones relevantes") indicando qué se pasó, cuándo, y qué checkpoint se cruzó — esto es lo que permite retomar un proyecto multidepartamento en una sesión futura sin perder el hilo de en qué etapa iba.
