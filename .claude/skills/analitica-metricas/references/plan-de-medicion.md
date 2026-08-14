# Plan de Medición

Antes de tocar GA4, GTM, el píxel de Meta o un link de WhatsApp, se construye el plan de medición. Un plan de medición es la lista de eventos/hitos que importan, con su nombre fijo, sus propiedades, su disparador y — lo más importante — la decisión que cada uno habilita. Si una fila no puede responder "¿qué decisión distinta tomo según este dato?", se elimina de la lista.

## 1. Estructura del plan

```
Evento | Categoría | Propiedades | Disparador | Decisión que habilita
------ | --------- | ------------ | ---------- | ----------------------
```

## 2. Convención de nombres: objeto_acción

```
signup_completed
whatsapp_clicked
compra_completada
dm_iniciado
cotizacion_solicitada
```

- Minúsculas, con guion bajo.
- Específico: `cta_hero_clicked` en vez de `boton_clicked`.
- El contexto va en las propiedades, no en el nombre del evento (no crear `cta_hero_verano_clicked` y `cta_hero_diciembre_clicked` como eventos distintos — es el mismo evento con una propiedad `campaña` distinta).
- Documentar toda decisión de nomenclatura la primera vez, no reinventar por cliente.

## 3. Eventos por tipo de negocio

Usa la misma detección de tipo de negocio que `market/SKILL.md` ("Business Context Detection") para que toda la suite razone igual sobre un cliente. Elige la tabla que aplique y recórtala — un plan con 10 eventos bien elegidos vale más que uno con 40 que nadie revisa.

### SaaS / Software

| Evento | Propiedades |
|---|---|
| `signup_iniciado` | fuente |
| `signup_completado` | método, plan, fuente |
| `onboarding_paso_completado` | número_paso, nombre_paso |
| `trial_iniciado` | plan |
| `upgrade_completado` | plan_anterior, plan_nuevo, valor |
| `suscripcion_cancelada` | plan, motivo |

### E-commerce

| Evento | Propiedades |
|---|---|
| `producto_visto` | id_producto, categoría, precio |
| `agregado_al_carrito` | id_producto, cantidad |
| `checkout_iniciado` | valor_carrito |
| `compra_completada` | id_orden, valor, moneda, método_pago |
| `producto_devuelto` | id_producto, motivo |

### Negocio local / servicios / operación por WhatsApp (el caso más común en Venezuela)

| Evento | Propiedades | Cómo se captura |
|---|---|---|
| `whatsapp_clicked` | ubicación_link, campaña | UTM en el link "wa.me" (ver `utm-y-whatsapp.md`) |
| `conversacion_iniciada` | canal_origen | Registro manual/semi-manual — el negocio no tiene "evento" técnico, tiene una conversación real |
| `cotizacion_enviada` | producto_interés, valor_estimado | Registro manual en la misma planilla |
| `cierre_completado` | valor, método_pago, tiempo_hasta_cierre | El evento que de verdad importa — conecta con `reporte-de-metricas.md` |
| `dm_iniciado` | origen (post, reel, story) | Métrica nativa de Instagram/Meta o registro manual |

### Creador/Curso

| Evento | Propiedades |
|---|---|
| `lead_magnet_descargado` | nombre_magnet, fuente |
| `webinar_registrado` | nombre_webinar |
| `curso_comprado` | id_curso, valor, plan_pago |
| `leccion_completada` | id_curso, número_lección |

## 4. Propiedades estándar (no reinventar por evento)

| Categoría | Propiedades |
|---|---|
| Página | page_title, page_location, page_referrer |
| Usuario | user_id, tipo_usuario, id_cuenta |
| Campaña | source, medium, campaign, content, term (ver UTMs) |
| Producto | id_producto, nombre_producto, categoría, precio |

Nunca incluir cédula, dirección exacta u otro dato personal innecesario en propiedades de analítica.

## 5. Regla de priorización

Cuando la lista de candidatos crece, ordénala por: ¿este evento cambia una decisión este mes? Si la respuesta es no, se corta — es ruido que después ensucia el DebugView y los dashboards.

## 6. Salida de esta fase

Un documento corto con la tabla de eventos ya priorizada, la convención de nombres declarada, y qué ruta de implementación corresponde (`ga4-gtm-implementacion.md` si hay sitio web, `utm-y-whatsapp.md` si la operación es por redes/WhatsApp). No se avanza a implementación técnica sin este documento, aunque sea breve.
