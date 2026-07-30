# Base de Conocimiento del Agente

Un agente conversacional es tan bueno como la información que tiene disponible. Esta fase define qué sabe el agente, cómo se estructura esa información, y — lo más importante — qué hace cuando algo no está ahí.

## 1. Qué incluir

| Categoría | Contenido |
|---|---|
| Catálogo/oferta | Productos/servicios, precios (con fecha de vigencia — relevante en contexto de inflación/tasa cambiante), variantes, disponibilidad |
| Políticas | Métodos de pago aceptados (Pago Móvil, Zelle, Binance, Cashea, efectivo), tiempos de entrega, garantías, política de devolución |
| Preguntas frecuentes reales | Extraídas de conversaciones históricas reales, no inventadas — si no hay historial, partir de lo que el dueño del negocio identifique como las dudas más comunes |
| Diferenciales de marca | Qué hace distinto al negocio (viene de `estrategia-planificacion`) — para que el agente pueda defender el valor, no solo listar características |
| Casos que NO debe responder | Temas médicos/legales/financieros delicados fuera del alcance del negocio, o cualquier tema que la marca decida que siempre pasa a humano |

## 2. Estructura según el volumen/complejidad

- **Negocio con catálogo pequeño/mediano (hasta ~50-100 ítems, FAQs acotadas):** todo el conocimiento cabe directo en el prompt del sistema o en un documento que se inyecta completo en cada conversación — más simple de mantener, no requiere infraestructura adicional.
- **Negocio con catálogo grande o base de conocimiento extensa:** considerar una arquitectura de recuperación (RAG — el sistema busca los fragmentos relevantes según la pregunta del cliente y solo esos se pasan al modelo) en vez de meter todo el catálogo en cada llamada — más eficiente en costo y más preciso, pero es infraestructura adicional que se justifica por el volumen, no por defecto.

**Regla de simplicidad (igual que en `SKILL.md`):** no montar RAG para un catálogo de 20 productos — ahí el prompt completo alcanza y sale más rápido a producción.

## 3. Regla contra la alucinación (la más importante de este archivo)

El agente **nunca inventa** información que no está en la base de conocimiento. Cuando no sabe algo:

> "Buena pregunta, déjame confirmar ese dato con el equipo y te aviso en un momento" → escalar a humano o marcar la conversación para seguimiento.

Esto es preferible, siempre, a una respuesta inventada que suene segura pero sea falsa — una promesa de precio o plazo incorrecta inventada por el agente genera un problema real de negocio (y de confianza) mucho peor que admitir que no sabe.

## 4. Mantenimiento y versionado

- La base de conocimiento tiene una fecha de última actualización visible — precios y disponibilidad cambian, y un agente respondiendo con datos de hace 2 meses genera reclamos.
- Definir quién es responsable de actualizarla (típicamente el dueño del negocio o quien gestiona el catálogo) y con qué frecuencia mínima se revisa.
- Cuando se actualiza un precio/política, el cambio debe reflejarse en la base de conocimiento ANTES de que se anuncie en cualquier campaña de `paid-media`/`community-manager` — si el agente sigue citando el precio viejo después de una campaña con precio nuevo, se rompe la confianza del cliente que llega desde el anuncio.

## 5. Checklist antes de dar por lista la base de conocimiento

- [ ] ¿Cubre precios, políticas de pago, tiempos de entrega y FAQs reales (no inventadas)?
- [ ] ¿Tiene fecha de última actualización?
- [ ] ¿El prompt del agente incluye la instrucción explícita de no inventar y escalar cuando no sabe?
- [ ] ¿Hay un responsable claro de mantenerla actualizada?
