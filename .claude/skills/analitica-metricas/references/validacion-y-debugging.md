# Validación y Debugging

Nada se declara "funcionando" sin probarlo con una conversión real de prueba. Esta fase aplica tanto a implementaciones técnicas (GA4/GTM/píxel) como al sistema manual de WhatsApp — ambos se pueden romper silenciosamente, y ambos se validan con la misma disciplina.

## 1. Validación técnica (GA4/GTM/píxel de Meta)

### Herramientas

| Herramienta | Para qué sirve |
|---|---|
| GA4 DebugView | Ver eventos en tiempo real mientras se navega |
| GTM Preview Mode | Probar triggers antes de publicar |
| Meta Pixel Helper (extensión) | Ver qué eventos del píxel disparan y con qué parámetros |
| dataLayer Inspector (extensión) | Ver qué está empujando el sitio al data layer, con o sin GTM |

### Checklist de validación

- [ ] Cada evento dispara en el trigger correcto (no antes, no después, no en la página equivocada)
- [ ] Los valores de las propiedades llegan poblados (no vacíos/undefined)
- [ ] No hay eventos duplicados (misma acción registrada 2-3 veces — común cuando hay dos contenedores GTM o un trigger que dispara dos veces)
- [ ] Funciona igual en desktop y mobile, y en las apps in-app de Instagram/Facebook (su navegador embebido a veces bloquea o retrasa scripts)
- [ ] Las conversiones marcadas en GA4/eventos estándar del píxel corresponden a resultados de negocio reales
- [ ] No hay datos personales (cédula, dirección exacta) filtrándose en propiedades

### Problemas comunes

| Problema | Dónde revisar |
|---|---|
| Evento no dispara | Configuración del trigger, si GTM cargó en la página |
| Valores incorrectos | Ruta de la variable, estructura del data layer |
| Evento duplicado | Contenedores GTM duplicados, trigger disparando dos veces, píxel + CAPI sin deduplicar por `event_id` |
| Píxel no ve el evento pero GA4 sí (o viceversa) | Confirmar que ambos tags están en el mismo trigger/data layer push, no en implementaciones separadas que puedan desincronizarse |

## 2. Validación del sistema manual (WhatsApp/redes)

Aquí "romperse silenciosamente" significa que alguien deja de registrar conversaciones en la planilla, no que un script falle — el riesgo es humano, no técnico, y se valida distinto:

- [ ] ¿La planilla de UTMs (`utm-y-whatsapp.md`) tiene una fila por cada link publicado esta semana, sin huecos?
- [ ] ¿El registro de conversación → cierre se está llenando el mismo día, o se acumula un backlog de "lo anoto después" que después nadie completa?
- [ ] Prueba de humo: enviar un mensaje de prueba a través de un link con UTM de prueba y confirmar que aparece registrado correctamente en la planilla, con la fuente correcta.
- [ ] Cruzar, al menos una vez al mes, el número de "cierres" registrados en la planilla contra los ingresos reales del negocio (banco, Pago Móvil, Zelle) — si no cuadra, el registro tiene fugas y el CAC/ROAS calculado en `reporte-de-metricas.md` no es confiable hasta corregirlo.

## 3. Regla general de validación

Un dato no verificado no se reporta como si estuviera verificado. Si algo no se pudo probar con una conversión real (por falta de tiempo, acceso o volumen), se marca explícitamente como estimación o `[POR VERIFICAR]` en cualquier entregable — mismo estándar que usan `estrategia-planificacion` y `paid-media` para no inventar datos de mercado.
