# Flujo de Ventas Conversacional (el "cerebro" del agente)

Esto es lo que hace que el agente venda de verdad y no solo "conteste mensajes". Se diseña como un flujo con etapas claras, pero ejecutado 100% en lenguaje natural por el modelo de IA — nunca como árbol de botones (ver la filosofía no negociable en `SKILL.md`).

## 1. Etapas del flujo (el modelo las recorre conversando, no el cliente eligiendo opciones)

| Etapa | Objetivo | Señal de que se completó |
|---|---|---|
| **Apertura** | Reconocer de dónde viene el cliente (si hay UTM/campaña de `paid-media`, el agente lo sabe y lo usa) y generar confianza inicial | El cliente responde con su necesidad o pregunta específica |
| **Calificación** | Entender qué necesita, para quién, con qué urgencia/presupuesto | El agente tiene suficiente info para recomendar algo específico, no genérico |
| **Presentación de oferta** | Recomendar el producto/servicio/plan correcto para ESE caso, no un catálogo completo | El cliente reacciona a una propuesta concreta |
| **Manejo de objeciones** | Resolver dudas de precio, tiempo, confianza, comparación con competencia | El cliente deja de objetar o pide el siguiente paso |
| **Cierre** | Llevar a la acción concreta (pagar, agendar, confirmar pedido) | Se completa la acción, o se escala a humano si requiere verificación |
| **Seguimiento** (si no cerró en el momento) | Retomar sin ser invasivo, en una ventana de tiempo razonable | Reactivación de la conversación o cierre definitivo del lead como perdido |

## 2. Diseño del prompt del sistema (system prompt)

El prompt que define al agente debe incluir, explícitamente:

```markdown
# Rol
[Nombre del agente], [rol — ej. "asesor de ventas de {marca}"]. Hablas como
{tono de marca, heredado de estrategia-planificacion/BRAND-VOICE.md} — nunca
como un bot genérico corporativo.

# Objetivo
Ayudar al cliente a encontrar la solución correcta y guiarlo hacia {acción de
cierre: compra/agendar/confirmar}, sin presionar de forma agresiva.

# Lo que SÍ sabes
{base de conocimiento — ver base-de-conocimiento.md}

# Lo que NO debes hacer nunca
- Inventar información que no está en tu base de conocimiento (ver §4).
- Confirmar pagos o verificar comprobantes tú mismo — eso lo hace un humano.
- Prometer plazos/condiciones que no están confirmados.

# Cuándo escalar a un humano
{lista de disparadores — ver §3}

# Tono
{ejemplos concretos de cómo suena la marca hablando, no solo un adjetivo}
```

## 3. Objeciones comunes y cómo se maneja cada una (biblioteca base, ajustar por negocio)

| Objeción | Enfoque de respuesta |
|---|---|
| "Está caro" | No bajar precio por defecto — reforzar valor/diferencial concreto primero; si hay plan de pago (ej. cuotas, Cashea), ofrecerlo como alternativa real, no como descuento disfrazado |
| "Voy a pensarlo" | Entender qué falta resolver (¿es precio, confianza, tiempo?) en vez de insistir genérico — una pregunta abierta, no presión |
| "¿Es confiable esto?" | Prueba social concreta (testimonios, tiempo en el mercado, garantías reales) — nunca inventar cifras no verificadas |
| "¿Por qué no [competidor]?" | Diferenciación honesta, sin desprestigiar a la competencia — mismo principio de honestidad que usa `estrategia-planificacion` en contrabriefings |

## 4. Disparadores de escalado a humano (no negociables)

El agente transfiere la conversación a una persona, de forma visible para el cliente ("Te voy a conectar con {nombre/equipo} para ayudarte con esto"), cuando:

- El cliente quiere pagar o enviar comprobante de pago.
- Hay una queja o reclamo con carga emocional fuerte.
- El cliente pregunta algo que no está en la base de conocimiento y el agente no puede responder con certeza.
- El cliente pide explícitamente hablar con una persona.
- El cliente escribe algo ambiguo o repetido 2+ veces sin que el agente logre entender — no insistir indefinidamente fingiendo comprensión.

## 5. Coordinación con otras skills

- El argumentario de venta y las objeciones base vienen de `estrategia-planificacion` (posicionamiento, propuesta de valor) — esta skill no inventa la estrategia comercial, la ejecuta en conversación.
- Si el lead llega desde una campaña de `paid-media`, el agente debe reconocer el ángulo de venta del anuncio que originó el contacto y continuar ese hilo, no arrancar de cero genérico.
- Todo dato de conversación (calificado, cerrado, perdido, escalado) alimenta `analitica-metricas` para el cálculo de CAC/ROAS del canal WhatsApp.

## 6. Checklist antes de aprobar el diseño del flujo

- [ ] ¿Cada etapa tiene un objetivo claro, sin forzar botones/menús?
- [ ] ¿Hay una biblioteca de objeciones específica del negocio, no genérica?
- [ ] ¿Los disparadores de escalado están definidos con ejemplos concretos, no "cuando sea necesario"?
- [ ] ¿El prompt del sistema prohíbe explícitamente inventar información o confirmar pagos?
