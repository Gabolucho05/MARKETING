# UTMs y Medición sin Sitio Web (Instagram/WhatsApp)

Ruta para negocios que operan 100% por redes y WhatsApp, sin sitio web tradicional — el caso de ManoTv y la mayoría de clientes venezolanos de agencia. Esto no es "tracking incompleto" o una versión pobre de GA4: es el sistema correcto para este modelo de negocio, y se diseña con el mismo rigor que una implementación de GA4/GTM.

## 1. UTMs en links de WhatsApp y bio

Todo link "click to WhatsApp" (`wa.me/...` o `api.whatsapp.com/send?...`) y todo link de bio (Linktree, bio de Instagram) lleva parámetros UTM, igual que un link a un sitio web, aunque el destino final sea una conversación y no una página:

```
https://wa.me/584121234567?text=Hola%2C%20vengo%20del%20anuncio
```

Para saber de dónde viene cada clic, envolver el link con un acortador que preserve o registre parámetros (o usar un link intermedio a una página mínima de redirección con GA4 instalado solo para capturar el clic antes de saltar a WhatsApp — útil cuando el volumen justifica la infraestructura extra).

### Convención de parámetros

| Parámetro | Uso | Ejemplo |
|---|---|---|
| `utm_source` | Dónde vive el link | instagram, tiktok, meta_ads |
| `utm_medium` | Tipo de tráfico | bio, story, reel, cpc |
| `utm_campaign` | Campaña específica | lanzamiento_julio |
| `utm_content` | Qué pieza/anuncio específico | angulo_dolor_v2 |

Regla: todo link publicado (bio, story, anuncio) se documenta en una planilla antes de publicarse — no se improvisa un UTM distinto cada vez. Usar la skill `xlsx` para mantener esa planilla de UTMs como fuente de verdad, con una fila por link y su UTM completo.

## 2. El embudo real: conversación → cierre

Sin sitio web, el "evento de conversión" no lo dispara una página, lo dispara una persona en WhatsApp. El sistema de medición tiene que capturar ese embudo humano con la misma disciplina que un evento técnico:

```
Clic en link (con UTM) → Conversación iniciada → Cotización enviada → Cierre (venta)
```

### Registro (manual o semi-automatizado)

Planilla mínima (una fila por conversación), con columnas:

| Fecha | Fuente (UTM) | Producto de interés | Cotización enviada (Sí/No, valor) | Resultado (cerrado/perdido) | Valor cerrado | Motivo si se perdió |
|---|---|---|---|---|---|---|

- Quien atiende WhatsApp registra cada conversación entrante en esta planilla, idealmente el mismo día — la memoria de "de dónde vino este cliente" se pierde rápido si no se anota al momento.
- Si el volumen de conversaciones lo justifica, un CRM ligero (o incluso un Google Sheet con validación de datos) reemplaza el registro manual puro, pero la disciplina de captura no cambia.
- Este registro es lo que alimenta `reporte-de-metricas.md` para calcular CAC/ROAS reales — sin él, no hay forma de saber si el gasto en pauta está generando cierres, solo conversaciones.

## 3. Métricas nativas de Meta/Instagram (complemento, no reemplazo)

Usar las métricas nativas de la plataforma para la parte de arriba del embudo (alcance, impresiones, clics, costo por clic/mensaje) — pero no confundir "costo por conversación iniciada" (que reporta la plataforma) con "costo por cliente real" (que solo sale de la planilla de cierre). El primero es un proxy útil para optimizar pauta con `paid-media`; el segundo es el número que le importa al negocio.

## 4. Cuándo sí conviene añadir un sitio/landing mínimo

Si el volumen de conversaciones crece lo suficiente como para que el registro manual se vuelva un cuello de botella, o si el negocio quiere calificar leads antes de que lleguen a WhatsApp, considerar una landing mínima con GA4/píxel de Meta instalado como paso intermedio (ver `ga4-gtm-implementacion.md`) — no como upgrade obligatorio, sino como respuesta a una necesidad real de escala, señalada por el propio volumen de datos que este sistema manual ya está capturando.

## 5. Checklist antes de dar por bueno el sistema

- [ ] ¿Todo link publicado tiene su UTM documentado en la planilla, antes de publicarse?
- [ ] ¿Existe un registro (manual o semi-automatizado) del embudo conversación → cierre?
- [ ] ¿Quien atiende WhatsApp sabe que debe registrar cada conversación y de dónde vino?
- [ ] ¿Se distingue entre "costo por conversación" (proxy de plataforma) y "costo por cliente real" (dato de cierre)?
