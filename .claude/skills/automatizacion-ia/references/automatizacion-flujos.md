# Automatización de Flujos entre Herramientas

Además del agente conversacional de WhatsApp, esta skill cubre la automatización de procesos entre herramientas (CRM, hojas de cálculo, calendario, email) y, cuando aplica, acciones automatizadas en la computadora. No todo proceso repetitivo necesita un agente de IA — muchos se resuelven con un flujo de automatización simple, más barato y más fácil de mantener.

## 1. Cuándo un flujo simple basta (y no hace falta IA)

Si la lógica es "cuando pasa X, hacer Y" sin necesidad de interpretar lenguaje natural o tomar una decisión con criterio, es un flujo de automatización clásico, no un agente de IA:

- Nuevo lead en un formulario → crear registro en CRM/hoja de cálculo → notificar al equipo de ventas.
- Carrito abandonado → recordatorio automático por WhatsApp/email a las N horas.
- Cierre registrado → actualizar hoja de métricas que consume `analitica-metricas`.
- Cumpleaños de cliente en base de datos → disparar mensaje de felicitación con oferta.

## 2. Elegir herramienta de orquestación

| Herramienta | Cuándo conviene |
|---|---|
| **n8n** (self-hosted o cloud) | Mayor control, sin costo por operación si es self-hosted, curva de aprendizaje algo mayor. Preferido si ya se monta infraestructura propia para el agente de WhatsApp — se reutiliza el mismo servidor |
| **Make** | Interfaz visual más amigable, buena para equipos sin experiencia técnica, costo por operación mensual | 
| **Zapier** | El más simple de configurar, el más caro por operación a volumen alto — bueno para validar un flujo rápido antes de migrarlo a n8n si el volumen crece |

Regla de decisión: empezar con la herramienta que el equipo ya sepa usar o que permita validar el flujo más rápido; migrar a n8n self-hosted solo cuando el volumen/costo de la alternativa SaaS lo justifique.

## 3. Anatomía de un flujo de automatización

```
Disparador (trigger) → Condición/filtro (si aplica) → Acción(es) → Registro/notificación
```

Ejemplo — recordatorio de carrito abandonado:
```
Trigger: nuevo registro "carrito_abandonado" en la hoja/CRM
Condición: han pasado 2 horas sin que el estado cambie a "comprado"
Acción: enviar plantilla de WhatsApp de recordatorio (vía la misma API oficial
        que usa el agente conversacional — ver arquitectura-whatsapp.md)
Registro: marcar "recordatorio_enviado" para no duplicar el envío
```

## 4. Integración con el agente conversacional

El flujo de automatización y el agente de IA no son sistemas separados en la práctica — el flujo de n8n/Make suele ser el orquestador que recibe el webhook de WhatsApp, arma el contexto, llama a la API del modelo, y ejecuta las acciones resultantes (actualizar CRM, notificar humano). Diseñarlos como un solo sistema coherente, no como dos proyectos independientes que después hay que conectar.

## 5. Acciones automatizadas en la computadora (uso acotado)

Cuando el pedido es que un agente navegue una web o ejecute acciones directamente en una computadora (más allá de llamadas a APIs), esto usa capacidades de "computer use" del modelo de IA. Tratarlo como capacidad experimental y de mayor riesgo que un flujo de API:

- Requiere sandboxing/entorno controlado — nunca ejecutar acciones de navegación autónoma directo sobre una máquina de producción sin aislamiento.
- Advertir que es más lento y menos predecible que una integración por API directa cuando esta última existe — preferir API sobre automatización de UI siempre que la herramienta la ofrezca.
- Requiere supervisión humana en la primera etapa de cualquier flujo nuevo de este tipo, con confirmación antes de acciones irreversibles (enviar, pagar, publicar, eliminar).

## 6. Checklist antes de dar por lista una automatización de flujo

- [ ] ¿Es de verdad un flujo "si pasa X, hacer Y" (no requiere criterio/lenguaje natural), o en realidad necesita el agente conversacional?
- [ ] ¿Hay manejo de duplicados (no reenviar el mismo recordatorio dos veces)?
- [ ] ¿La herramienta elegida es la más simple que resuelve el volumen actual, no la más compleja disponible?
- [ ] Si involucra acciones en la computadora/navegación: ¿hay sandboxing y confirmación humana para acciones irreversibles?
