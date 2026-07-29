# Implementación GA4 + GTM + Píxel de Meta

Ruta para negocios que sí tienen sitio web o landing. Si el negocio opera 100% por redes/WhatsApp, esto no aplica — usa `utm-y-whatsapp.md`.

## 1. GA4 — configuración base

1. Crear la propiedad GA4 y su data stream web; anotar el **Measurement ID** (`G-XXXXXXX`).
2. Instalar vía **GTM** (recomendado por defecto) en vez de gtag.js directo — casi todo cliente que hace pauta termina necesitando el píxel de Meta además de GA4, y meter ambos por GTM evita un segundo despliegue de código después.
3. Activar **Enhanced Measurement** (scroll, clics salientes, búsqueda en sitio, engagement de video) y desactivar lo que no aporte — cada evento de más ensucia reportes.
4. Marcar como **conversión** solo los eventos que representan un resultado de negocio real (Admin → Events → Mark as conversion). No marcar todo — si luego se importan conversiones a Google Ads, marcar de más rompe la optimización de puja.

### Evento personalizado

```javascript
gtag('event', 'signup_completado', {
  'metodo': 'email',
  'plan': 'gratis'
});
```

Usar los eventos reservados de e-commerce de GA4 (`purchase`, `add_to_cart`, `begin_checkout`) tal cual los define Google, no renombrarlos con la convención `objeto_acción` — solo esa convención es para eventos personalizados.

### Validación — DebugView

Admin → DebugView muestra eventos en tiempo real mientras se navega el sitio con `debug_mode: true` o la extensión "Google Analytics Debugger". Confirmar: el evento dispara una sola vez, las propiedades traen el valor correcto (no vacío/undefined).

## 2. Google Tag Manager

| Componente | Qué es |
|---|---|
| Tags | El código que se ejecuta (GA4, píxel de Meta) |
| Triggers | Cuándo dispara el tag (vista de página, clic, evento personalizado) |
| Variables | Valores dinámicos que lee un tag/trigger (texto del clic, variable del data layer) |

### Data layer — el contrato entre el sitio y GTM

```javascript
window.dataLayer = window.dataLayer || [];
dataLayer.push({
  'event': 'cotizacion_solicitada',
  'producto_interes': 'plan_premium'
});
```

Crear un **Custom Event trigger** en GTM que escuche ese `event`, y **Data Layer Variables** para leer `producto_interes` — nunca extraer valores raspando el DOM si el sitio puede empujarlos al data layer; raspar el DOM se rompe silenciosamente con cualquier rediseño.

### Preview antes de publicar

Siempre correr **Preview** y recorrer el sitio como lo haría un usuario real, en ventana de incógnito (para descartar bloqueadores de anuncios/cookies viejas). Confirmar trigger correcto, tag correcto, variables con valor real — recién ahí Publish.

### Ojo con Single-Page Apps

Si el sitio es una SPA (React/Next con navegación sin recarga), el trigger de Page View por defecto de GTM **no vuelve a disparar** en cambios de ruta. Solución: que la app empuje un evento `virtual_page_view` en cada cambio de ruta, y armar el tag equivalente sobre ese evento personalizado — si no, GA4 subcuenta vistas y cualquier embudo basado en pageviews sale mal.

## 3. Píxel de Meta + Conversions API (CAPI)

El píxel de Meta es lo que le da a `paid-media` la señal de optimización — sin esto bien configurado, las campañas de pauta optimizan a ciegas.

### Eventos estándar mínimos

| Evento estándar | Cuándo dispara |
|---|---|
| `PageView` | Automático al cargar cualquier página |
| `Lead` | Envío de formulario/captación de contacto |
| `Contact` | Clic en WhatsApp/teléfono/email |
| `InitiateCheckout` | Inicio de proceso de compra |
| `Purchase` | Compra completada — incluir `value` y `currency` siempre |

### Por qué añadir CAPI (API de Conversiones)

El píxel del lado del navegador pierde eventos por bloqueadores de anuncios, Safari/iOS y cookies de terceros restringidas. CAPI envía el mismo evento desde el servidor, como respaldo — mejora la calidad de la señal que llega a Meta para optimizar pauta. Se implementa vía GTM Server-Side o directamente desde el backend del sitio (checkout, CRM). Proponerlo cuando haya evidencia real de pérdida de datos (discrepancia entre eventos del píxel y conversiones reales conocidas), no como default para cualquier cliente — es infraestructura adicional que debe justificarse.

### Validación del píxel

Extensión "Meta Pixel Helper" en el navegador — confirma qué eventos disparan, con qué parámetros, y si hay duplicados entre píxel y CAPI (deduplicar con el mismo `event_id` en ambos si se implementan los dos).

## 4. Checklist antes de dar por lista la implementación

- [ ] GA4 recibe eventos en DebugView con valores correctos
- [ ] GTM Preview confirma cada trigger/tag antes de publicar
- [ ] Píxel de Meta dispara los eventos estándar mínimos (verificado con Pixel Helper)
- [ ] Conversiones marcadas en GA4 son solo las que representan resultado de negocio real
- [ ] Si es SPA: hay evento de `virtual_page_view` en cada cambio de ruta
