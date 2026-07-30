# Arquitectura del Agente de WhatsApp

Un agente de IA en WhatsApp no es un solo componente — es una cadena de piezas que hay que diseñar explícitamente, con sus costos y riesgos declarados antes de construir nada.

## 1. Diagrama de arquitectura (referencia)

```
Cliente en WhatsApp
      │ mensaje (texto/audio/imagen)
      ▼
Conexión a WhatsApp (API oficial o librería no oficial — ver §2)
      │ webhook
      ▼
Orquestador (backend propio o n8n/Make)
      │ arma el prompt con: historial de la conversación +
      │ base de conocimiento + tono de marca
      ▼
API del modelo de IA (Claude/GPT)
      │ genera la respuesta
      ▼
Orquestador registra la conversación (ver mejora-continua.md)
      │
      ├──► Responde al cliente por WhatsApp
      │
      └──► Si dispara condición de escalado → notifica a humano
             (WhatsApp interno, Slack, o CRM) y marca la conversación
             como "en atención humana"
```

## 2. Cómo conectarse a WhatsApp — la decisión de mayor riesgo

| Método | Cómo funciona | Riesgo | Cuándo usar |
|---|---|---|---|
| **API oficial de WhatsApp Business (Cloud API de Meta, o vía un BSP como Twilio/360dialog)** | Integración autorizada por Meta, requiere número verificado y plantillas de mensaje aprobadas para iniciar conversación fuera de la ventana de 24h | Ninguno de baneo — es el canal soportado oficialmente | Por defecto para cualquier negocio que dependa de ese número para operar — es la única opción segura para volumen serio |
| **Librerías no oficiales (Baileys, whatsapp-web.js, etc.)** | Simulan un cliente de WhatsApp Web, sin autorización de Meta | Riesgo real y documentado de bloqueo del número, sin aviso previo ni apelación garantizada | Solo para pruebas de concepto de bajísimo riesgo, nunca para el número principal de ventas de un negocio — advertir esto explícitamente y por escrito antes de que el usuario decida usarlo |

**Regla no negociable:** si el negocio depende de ese número de WhatsApp para vender, se usa la API oficial, punto. El ahorro de costo de la vía no oficial no compensa el riesgo de perder el número (y con él, el historial de clientes y la reputación) de un día para otro.

## 3. Componentes de infraestructura

| Componente | Opciones típicas | Nota |
|---|---|---|
| Hosting del orquestador | VPS propio, servicio serverless, o n8n en la nube/self-hosted | La elección depende del volumen y de si ya existe experiencia técnica en el equipo — no default automático a lo más complejo |
| Conexión WhatsApp | Meta Cloud API directa, o un BSP (Twilio, 360dialog, etc.) que simplifica la integración a cambio de una tarifa | Un BSP suele ser más rápido de implementar para un equipo sin experiencia previa en la API cruda de Meta |
| API del modelo de IA | Claude (Anthropic) u otro — se paga por uso (tokens) | Estimar el costo con el volumen de mensajes/día proyectado antes de comprometerse |
| Registro/logging | Base de datos simple, hoja de cálculo (vía `xlsx`), o CRM ligero | Debe ser consultable para el ritual de `mejora-continua.md` |
| Transcripción de audio | Servicio de speech-to-text si se decide soportar notas de voz | Advertir que añade latencia y costo — evaluar si el volumen de audios lo justifica antes de sumarlo en la Etapa 1 |

## 4. Manejo de sesión y contexto

- Cada número de cliente mantiene su propio hilo de conversación — el agente no debe "olvidar" que ya habló con esa persona antes en la misma sesión de compra.
- Definir una ventana de expiración de contexto razonable (ej. si no hay mensajes en 24-48h, la siguiente interacción se trata como una conversación nueva que retoma el historial pero no asume que sigue "en medio" de la venta anterior).
- El estado de la conversación (nueva, en negociación, escalada a humano, cerrada) debe quedar explícito en el registro — no inferido cada vez desde el historial completo.

## 5. Costos — presentar SIEMPRE una estimación antes de construir

```
Costo mensual estimado = 
  (mensajes/día × 30 × costo promedio de tokens por intercambio)   [API del modelo]
  + tarifa del BSP/API oficial de WhatsApp (fija o por conversación)
  + hosting del orquestador
  + (si aplica) transcripción de audio
```

Nunca dar un número sin mostrar de dónde sale — el cliente debe poder verificar el cálculo con su propio volumen esperado.

## 6. Checklist antes de pasar a producción

- [ ] ¿Se usa la API oficial de WhatsApp (no una librería no oficial) para el número principal del negocio?
- [ ] ¿Hay un costo mensual estimado en USD, mostrado con su cálculo?
- [ ] ¿Cada conversación queda registrada con su estado?
- [ ] ¿Existe un mecanismo claro de escalado a humano, visible para el cliente (no un silencio repentino del bot)?
