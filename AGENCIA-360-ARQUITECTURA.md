# Agencia de Marketing 360° — Arquitectura y Plan

> Diseño de la interfaz (orquestador de skills de Claude Code) que organiza el sistema como una agencia de marketing 360° con 4 departamentos. Documento vivo: se actualiza a medida que se construye cada departamento.

## 1. Concepto

La "interfaz" no es una app web: es un **skill orquestador maestro** (`agencia-360`), igual en espíritu a `market/SKILL.md` pero un nivel por encima, que:

1. Recibe la solicitud del cliente/usuario en lenguaje natural.
2. Detecta a qué **departamento** pertenece (o si involucra a varios).
3. Enruta al skill/subagente correspondiente.
4. Mantiene un **expediente de cliente** (carpeta con brief, assets, calendario, reportes) para que los departamentos no trabajen a ciegas unos de otros.
5. Encadena departamentos cuando el trabajo lo requiere (ver §6, flujo entre departamentos).

Ya existe el patrón: `estrategia-planificacion` menciona explícitamente "eso es de la skill/MCP de Paid Media" y "eso es de la skill de Diseño" — el diseño de 4 departamentos ya estaba implícito en el repo.

## 2. Estado actual (lo que ya existe)

| Pieza | Tipo | Rol |
|---|---|---|
| `estrategia-planificacion` | Skill | Director de Estrategia — briefings, planes, FODA, buyer personas, calendarios, presupuestos |
| `market` | Skill router | Orquestador de la suite de análisis/contenido (`/market <comando>`) |
| `market-audit` + 5 subagentes (`market-content`, `market-conversion`, `market-competitive`, `market-technical`, `market-strategy`) | Skill + Agents | Auditoría 360 de un sitio web |
| `market-copy`, `market-emails`, `market-social`, `market-ads`, `market-seo`, `market-funnel`, `market-landing`, `market-competitors`, `market-brand`, `market-launch`, `market-proposal`, `market-report`, `market-report-pdf` | Skills | Generación de contenido y análisis puntual |
| `dataviz`, `xlsx`, `pptx`, `docx`, `pdf` | Skills de soporte | Visualización de datos y generación de documentos/entregables |
| `paid-media` | Skill | Media buyer senior — Meta Ads Venezuela (Departamento 3) |
| `community-manager` | Skill | Community Manager senior — copy, calendario, gestión de comunidad, crisis, métricas orgánicas (Departamento 3) |
| `automatizacion-ia` | Skill | Ingeniero de automatización — agente de IA conversacional en WhatsApp, flujos n8n/Make/Zapier (Departamento 3) |
| `diseno-creativo` | Skill | Director de Arte — Claude Design vs. generador de imágenes, sistema de marca, auditoría de piezas (Departamento 2, completo) |
| `analitica-metricas` | Skill | Instrumentación (con/sin sitio web) + reporting de ROI/ROAS/CAC/LTV y dashboards (Departamento 4, completo) |
| `agencia-360` | Skill router maestro | Director General — enruta a los 4 departamentos, mantiene el expediente de cliente, orquesta con checkpoints entre departamentos |

Con esto, los 4 departamentos quedan completos: cada uno tiene al menos una skill terminada, Digital/RRSS tiene sus 3 piezas operativas (`paid-media`, `community-manager`, `automatizacion-ia`), y el router maestro `agencia-360` los enlaza a todos. Lo que queda son los gaps transversales restantes (§4): conectores de datos en vivo, empaquetado comercial, y la decisión sobre una interfaz web si se quiere ir más allá de la orquestación de skills.

## 3. Los 4 departamentos

### Departamento 1 — Planificación y Estrategia ✅ (ya existe)

Motor: `estrategia-planificacion`. No requiere trabajo adicional de construcción, solo **integrarlo como puerta de entrada** del orquestador: casi todo trabajo de agencia debería empezar aquí (brief → insight → objetivo SMART → invalidadores) antes de pasar a Diseño o Digital.

**Acción sugerida:** ninguna nueva skill; sí actualizar su sección "Lo que esta skill NO hace" para que apunte por nombre a los skills reales una vez existan (`diseño-creativo`, `paid-media`, etc.) en vez de la referencia genérica actual.

### Departamento 2 — Creativo y Diseño ✅ (completo)

| Skill | Cubre | Estado |
|---|---|---|
| `diseno-creativo` | Director de Arte senior: decide y prepara el trabajo para Claude Design (piezas de código/interactivas) o generador de imágenes (piezas rasterizadas), sistema de marca, auditoría de piezas existentes, formatos por plataforma | ✅ Construida — vive en `.claude/skills/diseno-creativo/SKILL.md`, con sus 6 `references/` completas |

Resuelve la ambigüedad que este documento señalaba antes ("¿Claude Design genera la imagen final o solo la especificación?"): la skill nunca genera la imagen/código final ella misma — decide el motor correcto (Claude Design para código vivo/interactivo, generador de imágenes para arte final rasterizado) y entrega la especificación exacta (`DESIGN.md` o prompt completo) para que el usuario la ejecute en la herramienta correspondiente. Consulta siempre `market-brand`/`BRAND-VOICE.md` antes de producir, y recibe los ángulos de venta de `paid-media` para traducirlos a visual. También cubre auditoría: si se pega una imagen de una pieza ya hecha, el modo por defecto es revisarla con una rúbrica concreta, no regenerarla.

### Departamento 3 — Digital y RRSS ✅ (completo, 3 skills operativas)

Lo que **ya cubres** con la suite `market-*`:
- Copy de ads (`market-ads`), calendario de contenido social (`market-social`), SEO (`market-seo`), emails (`market-emails`), funnel (`market-funnel`).

Lo que **falta** porque son disciplinas operativas distintas del copy/planificación, y merecen skill propia:

| Skill | Cubre | Estado |
|---|---|---|
| `paid-media` | Meta Ads (Venezuela): investigación de competencia, ángulos/creativos, estructura y montaje de campaña, optimización y escalado, disciplina de invalidadores | ✅ Construida — vive en `.claude/skills/paid-media/SKILL.md` |
| `community-manager` | Rutina diaria: copy/captions con framework de persuasión (AIDA/PAS/etc.), calendario y horarios de publicación, gestión de comentarios/DMs, protocolo de crisis, formatos/hashtags/tendencias, métricas orgánicas | ✅ Construida — vive en `.claude/skills/community-manager/SKILL.md`, con sus 5 `references/` completas |
| `automatizacion-ia` | Agente de IA conversacional para WhatsApp (no bot de menús), arquitectura de conexión (API oficial vs. no oficial), flujo de ventas conversacional con objeciones, base de conocimiento sin alucinación, automatización de flujos entre herramientas (n8n/Make/Zapier), ciclo de mejora continua | ✅ Construida — vive en `.claude/skills/automatizacion-ia/SKILL.md`, con sus 5 `references/` completas |

**Nota sobre `paid-media`:** ✅ ya tiene sus 4 archivos de `references/` (`investigacion-competencia.md`, `creativos-angulos.md`, `estructura-y-montaje.md`, `optimizacion-escalado.md`), así que los 6 pasos del flujo ya tienen contenido real que consultar. Sigue pendiente un módulo equivalente para Google Ads (Search/Performance Max) si quieres que el departamento cubra "paid media" completo y no solo Meta.

**Nota sobre `community-manager`:** cubre exactamente lo que `market-social` no cubre — la operación diaria (copy con objetivo de comportamiento declarado, ventanas de respuesta a comunidad, protocolo de crisis) en vez del calendario estratégico de contenido. Entrega los datos orgánicos crudos (alcance, guardados, clics) a `analitica-metricas`, que es quien calcula ROI/ROAS/CAC consolidado — esta skill no calcula esas métricas, solo mide y ajusta el contenido día a día.

**Nota sobre `automatizacion-ia`:** es la pieza que faltaba de "marketing-automation" — pero es más ingeniería de sistemas que marketing (arquitectura, código, infraestructura), a diferencia del resto de skills de este departamento que son más de contenido/estrategia. Es explícita sobre sus límites: no automatiza verificación de pagos sin humano, no promete que la IA "aprenda sola" sin el ciclo de revisión semanal, y advierte con fuerza contra conectarse a WhatsApp por métodos no oficiales cuando el negocio depende de ese número.

**Sobre tu pregunta original de "uso las skills que hay o falta algo":** usa `market-ads`, `market-social`, `market-seo`, `market-emails`, `market-funnel` como la capa de **contenido y estrategia de canal**, y `paid-media`/`community-manager`/`automatizacion-ia` como la capa de **operación**. Son complementarias, no redundantes. Con esto, el Departamento 3 queda completo.

### Departamento 4 — Analítica ✅ (completo, una sola skill cubre las dos mitades)

| Skill | Cubre | Estado |
|---|---|---|
| `analitica-metricas` | **Instrumentación** (con sitio web vía GA4/GTM/píxel de Meta+CAPI, o sin sitio web vía UTMs de WhatsApp/Instagram y registro manual conversación→cierre) + **Reporting** (ROI/ROAS/MER/CAC/LTV, consolidación multi-canal, dashboards semanales/mensuales, modelo de atribución declarado, invalidadores de rendimiento) | ✅ Construida — vive en `.claude/skills/analitica-metricas/SKILL.md` (v2.0.0), con sus 5 `references/` completas |

Esta skill reemplazó a una versión anterior (`analytics`, genérica y en inglés, importada de una plantilla) que llegó a existir brevemente en este repo: se fusionó su contenido útil (fórmulas ROI/ROAS/CAC/LTV, guía de atribución, invalidadores) dentro de `analitica-metricas`, que además cubre algo que la versión genérica no cubría — el caso de negocio sin sitio web que opera 100% por WhatsApp/Instagram (el caso de ManoTv y la mayoría de clientes de agencia en Venezuela). El dashboard se apoya en `dataviz` para gráficos y en `market-report`/`market-report-pdf` para el export final a cliente, y la cadencia mensual retroalimenta a Estrategia (Departamento 1).

**Limitación real a anunciar:** Claude Code no tiene por defecto conexión en vivo a Meta Ads/Google Ads/GA4/Search Console. Sin un MCP conector a esas APIs, esta skill funcionará **importando datos** (CSV/Excel vía la skill `xlsx`, planilla manual, o pegados en el chat), no leyéndolos en tiempo real. Si el plan es venderlo como "monitoreo en vivo" a empresas, ese conector es un prerrequisito técnico, no un detalle menor.

## 3.5 El router maestro — `agencia-360` ✅ (construido)

| Skill | Cubre | Estado |
|---|---|---|
| `agencia-360` | Director General/orquestador: tabla de departamentos y cuándo activarse vs. ir directo a un departamento, expediente de cliente persistente (carpeta `clientes/<nombre>/`), flujo multidepartamento con checkpoints (Estrategia→Diseño→Digital→Analítica→retroalimentación) | ✅ Construida — vive en `.claude/skills/agencia-360/SKILL.md`, con sus 2 `references/` (`expediente-cliente.md`, `flujo-multidepartamento.md`) |

Esto resuelve, dentro de lo que un sistema de skills puede resolver, dos de los gaps transversales que este documento señalaba: el **expediente de cliente persistente** (ahora es una carpeta real en disco, con plantilla de `EXPEDIENTE.md` y una subcarpeta por departamento) y la **capa de aprobación/QA entre departamentos** (los 4 checkpoints explícitos en `flujo-multidepartamento.md`, que impiden que Diseño produzca sobre un brief a medio hacer o que Digital paute sobre piezas sin aprobar). El router es explícito en que no reemplaza el criterio especializado de cada departamento, no publica/pautea nada de forma autónoma, y no tiene conectores en vivo — solo coordina.

## 4. Lo que falta a nivel transversal (no es de un departamento, es de la agencia completa)

1. ~~**Skill orquestadora `agencia-360`**~~ ✅ Hecho — ver §3.5.
2. ~~**Expediente de cliente persistente**~~ ✅ Hecho — ver §3.5 y `references/expediente-cliente.md` de `agencia-360`.
3. **Conectores de datos en vivo** (Meta Ads API, Google Ads API, GA4, Search Console) — sin esto, Analítica y Paid Media dependen de importación manual. Sigue pendiente.
4. **Gobernanza de marca cruzada** — parcialmente cubierta: `agencia-360` hace que Diseño lea el sistema de marca del expediente antes de producir, pero todavía depende de que el expediente esté actualizado; no hay una verificación automática de que la pieza entregada respetó la marca más allá de lo que ya audita `diseno-creativo` (`references/auditoria-piezas.md`).
5. ~~**Capa de aprobación/QA entre departamentos**~~ ✅ Hecho — ver §3.5, checkpoints A-D en `flujo-multidepartamento.md`.
6. **Empaquetado comercial** — `market-proposal` ya genera propuestas puntuales; falta un catálogo de "paquetes de agencia" (ej. Starter/Growth/Enterprise, qué incluye cada uno de los 4 departamentos) para vender esto como servicio recurrente. Sigue pendiente.
7. **Aclarar el significado de "interfaz"**: todo lo construido hasta ahora es una orquestación de skills de Claude Code, no una **interfaz web** (dashboard con login para que el cliente final vea sus reportes sin usar Claude Code). Eso seguiría siendo un producto SaaS aparte — frontend, backend, autenticación, facturación — y una fase completamente distinta a construir skills, si se decide ir en esa dirección.

## 5. Roadmap propuesto

| Fase | Entregable |
|---|---|
| 1 | ~~Construir `agencia-360` (router maestro)~~ ✅ Hecho — enlaza los 4 departamentos + expediente de cliente + checkpoints |
| 2 | ~~Tú construyes el skill de Diseño~~ ✅ Hecho — `diseno-creativo` completo con sus 6 references |
| 3 | ~~Construir `community-manager`, `marketing-automation`~~ ✅ Hecho — `community-manager` y `automatizacion-ia` completos (Departamento 3) |
| 4 | ~~Construir la pieza de reporting de analítica~~ ✅ Hecho — `analitica-metricas` fusionada, cubre instrumentación + ROI/ROAS/CAC/LTV/dashboards |
| 5 | Evaluar conectores MCP a Meta Ads/Google Ads/GA4 para analítica en vivo |
| 6 | Empaquetado comercial (paquetes de servicio) + decisión sobre interfaz web/SaaS si aplica |

## 6. Flujo de trabajo entre departamentos (ejemplo)

```
Cliente pide campaña de lanzamiento
        │
        ▼
[1. Estrategia]  → brief, insight, objetivo SMART, invalidadores, presupuesto
        │
        ▼
[2. Diseño]      → dirección de arte + piezas ejecutables por canal
        │
        ▼
[3. Digital/RRSS]→ paid-media monta campaña · community-manager gestiona
        │           publicación y respuesta · automatizacion-ia atiende por
        │           WhatsApp y dispara flujos de seguimiento
        ▼
[4. Analítica]   → analitica-metricas mide ROI/ROAS semanal, dispara alerta si se cruza invalidador
        │
        └──► retroalimenta a [1. Estrategia] para pivotar o escalar
```

## 7. Estado del sistema y qué queda

Los 4 departamentos están completos y el router maestro `agencia-360` los enlaza — el sistema ya funciona de principio a fin como una agencia de skills coordinadas, con expediente de cliente persistente en disco y checkpoints de aprobación entre departamentos.

Lo que queda, en orden razonable de prioridad si el objetivo es venderlo a empresas:

1. **Probar el flujo completo con un cliente real** (ej. ManoTv) — crear su expediente con `agencia-360` y correr un caso real de principio a fin para encontrar fricciones que el diseño en papel no anticipa.
2. **Empaquetado comercial** (§4.6) — paquetes de servicio (Starter/Growth/Enterprise) que empaqueten qué incluye cada departamento, para tener algo que cotizar con `market-proposal`.
3. **Conectores de datos en vivo** (§4.3) — evaluar MCPs a Meta Ads/Google Ads/GA4 cuando el volumen de clientes justifique dejar de importar datos manualmente.
4. **Decisión sobre interfaz web** (§4.7) — si más allá de la orquestación de skills se quiere un producto con login para que el cliente final vea sus reportes sin pasar por Claude Code, eso es un proyecto de producto aparte.
