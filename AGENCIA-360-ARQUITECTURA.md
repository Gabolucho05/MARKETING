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
| `paid-media` | Skill | Media buyer senior — Meta Ads Venezuela (Departamento 3, primera pieza operativa construida) |

Todo esto cubre **análisis, copywriting y planificación**. No cubre ejecución operativa de pauta, gestión diaria de RRSS, automatizaciones de CRM, ni un dashboard de analítica consolidado. Ahí están los huecos reales.

## 3. Los 4 departamentos

### Departamento 1 — Planificación y Estrategia ✅ (ya existe)

Motor: `estrategia-planificacion`. No requiere trabajo adicional de construcción, solo **integrarlo como puerta de entrada** del orquestador: casi todo trabajo de agencia debería empezar aquí (brief → insight → objetivo SMART → invalidadores) antes de pasar a Diseño o Digital.

**Acción sugerida:** ninguna nueva skill; sí actualizar su sección "Lo que esta skill NO hace" para que apunte por nombre a los skills reales una vez existan (`diseño-creativo`, `paid-media`, etc.) en vez de la referencia genérica actual.

### Departamento 2 — Creativo y Diseño 🔧 (a construir por ti, con Claude Design)

Cuando crees la skill, para que encaje como departamento y no como isla, debería:

- **Recibir** el brief creativo en el formato que ya produce `references/briefings.md` de `estrategia-planificacion` (para no reinventar el formulario de entrada).
- **Consultar siempre** `market-brand` (voz de marca) y cualquier `BRAND-VOICE.md` guardado del cliente antes de producir piezas — así Diseño nunca contradice la identidad ya definida.
- **Producir** dos tipos de salida distintos:
  - Especificaciones de diseño (moodboard, paleta, tipografía, dirección de arte) como documento — puede apoyarse en `docx`/`pptx` para presentarlo a cliente.
  - Piezas ejecutables (posts, banners, guiones de video, mockups) en el formato que el canal destino necesite (specs de Meta/Google Ads, dimensiones de RRSS por plataforma).
- **Entregar** un handoff claro hacia Digital: qué pieza va en qué plataforma, con qué copy y qué CTA (Diseño no debería inventar copy final, solo proponerlo — el copy fino es de `market-copy`/Digital).

**Falta que definas tú:** si "Claude Design" es una skill que envuelve generación de imágenes (vía algún modelo/API de imágenes) o si es solo dirección de arte + specs para que un diseñador humano ejecute. Eso cambia si el output final es un archivo de imagen o un documento de especificaciones.

### Departamento 3 — Digital y RRSS 🔧 (parcialmente cubierto, necesita 3 skills nuevas)

Lo que **ya cubres** con la suite `market-*`:
- Copy de ads (`market-ads`), calendario de contenido social (`market-social`), SEO (`market-seo`), emails (`market-emails`), funnel (`market-funnel`).

Lo que **falta** porque son disciplinas operativas distintas del copy/planificación, y merecen skill propia:

| Skill | Cubre | Estado |
|---|---|---|
| `paid-media` | Meta Ads (Venezuela): investigación de competencia, ángulos/creativos, estructura y montaje de campaña, optimización y escalado, disciplina de invalidadores | ✅ Construida — vive en `.claude/skills/paid-media/SKILL.md` |
| `community-manager` | Rutina diaria: respuesta a comentarios/DMs, tono en tiempo real, gestión de crisis/reputación, moderación, engagement proactivo | 🔧 Pendiente — `market-social` genera el **calendario de contenido**, no la operación diaria de comunidad ni protocolos de crisis |
| `marketing-automation` | Flujos de CRM/WhatsApp/email marketing (triggers, lead scoring, segmentación dinámica, chatbots, integraciones entre plataformas) | 🔧 Pendiente — `market-emails` genera **secuencias de copy**, no la lógica de automatización/triggers ni la integración entre herramientas |

**Nota sobre `paid-media`:** hoy cubre Meta Ads; le falta un módulo equivalente para Google Ads (Search/Performance Max) si quieres que el departamento cubra "paid media" completo y no solo Meta. Además, su SKILL.md referencia 4 archivos en `references/` (`investigacion-competencia.md`, `creativos-angulos.md`, `estructura-y-montaje.md`, `optimizacion-escalado.md`) que todavía no existen — los pasos 2 a 5 de su flujo no tienen contenido que consultar hasta que se creen.

**Sobre tu pregunta de "uso las skills que hay o falta algo":** usa `market-ads`, `market-social`, `market-seo`, `market-emails`, `market-funnel` como la capa de **contenido y estrategia de canal**, y construye las 3 de la tabla como la capa de **operación**. Son complementarias, no redundantes.

### Departamento 4 — Analítica 🔧 (no existe, hay que construirlo desde cero)

Skill nueva propuesta: `analitica-rendimiento`. Debe cubrir:

- **Consolidación de métricas** por canal (paid, orgánico, email, web) en un formato único de reporte.
- **Cálculo de ROI/ROAS/CAC/LTV** con fórmulas explícitas y supuestos declarados (igual disciplina que `estrategia-planificacion` con sus "invalidadores").
- **Dashboards** — apoyarse en la skill `dataviz` para gráficos consistentes, y en `market-report-pdf` para el formato de entrega a cliente.
- **Atribución**: al menos un modelo simple declarado (last-click, o ponderado) — declarar limitaciones si no hay tracking completo.
- **Cadencia de reporte**: semanal (operativo, para ajustar pauta) vs. mensual (estratégico, para retroalimentar al Departamento 1).
- **Alertas/invalidadores de rendimiento**: umbrales que dispararían una alerta a Estrategia o Paid Media (ej. "CPA > X por 5 días" — mismo lenguaje que ya usa `estrategia-planificacion`, para que los 4 departamentos hablen el mismo idioma de gestión de riesgo).

**Limitación real a anunciar:** Claude Code no tiene por defecto conexión en vivo a Meta Ads/Google Ads/GA4/Search Console. Sin un MCP conector a esas APIs, esta skill funcionará **importando datos** (CSV/Excel vía la skill `xlsx`, o pegados en el chat), no leyéndolos en tiempo real. Si el plan es venderlo como "monitoreo en vivo" a empresas, ese conector es un prerrequisito técnico, no un detalle menor.

## 4. Lo que falta a nivel transversal (no es de un departamento, es de la agencia completa)

1. **Skill orquestadora `agencia-360`** — el router maestro que hoy no existe. Sin él, cada departamento es una skill suelta y no hay "interfaz" que el cliente perciba como agencia unificada.
2. **Expediente de cliente persistente** — carpeta `clientes/<nombre>/` con brief, brand voice, calendario, reportes y assets, para que Diseño no repita preguntas que Estrategia ya respondió, y Analítica sepa qué campaña de Paid Media está midiendo.
3. **Conectores de datos en vivo** (Meta Ads API, Google Ads API, GA4, Search Console) — sin esto, Analítica y Paid Media Ops dependen de importación manual.
4. **Gobernanza de marca cruzada** — que Diseño y Digital consulten automáticamente `market-brand` antes de producir, no solo cuando se les pida.
5. **Capa de aprobación/QA entre departamentos** — un paso de "handoff" explícito (ej. Estrategia aprueba brief → Diseño entrega piezas → Digital aprueba antes de publicar) para que el sistema simule el flujo real de una agencia, no un batch de skills independientes.
6. **Empaquetado comercial** — `market-proposal` ya genera propuestas puntuales; falta un catálogo de "paquetes de agencia" (ej. Starter/Growth/Enterprise, qué incluye cada uno de los 4 departamentos) para vender esto como servicio recurrente.
7. **Aclarar el significado de "interfaz"**: si además de esta orquestación de skills quieres una **interfaz web** (dashboard con login para que el cliente final vea sus reportes sin usar Claude Code), eso es un producto SaaS aparte — frontend, backend, autenticación, facturación — y es una fase 2 completamente distinta a construir skills. Vale la pena decidir esto explícitamente antes de "perfeccionar" el sistema, porque cambia el stack.

## 5. Roadmap propuesto

| Fase | Entregable |
|---|---|
| 1 | Construir `agencia-360` (router maestro) enlazando los 3 departamentos existentes/anunciados + expediente de cliente básico |
| 2 | Tú construyes el skill de Diseño (Claude Design) — se integra al router |
| 3 | Construir `paid-media-ops`, `community-manager`, `marketing-automation` (Departamento 3) |
| 4 | Construir `analitica-rendimiento` (Departamento 4), inicialmente con importación manual de datos |
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
[3. Digital/RRSS]→ paid-media-ops monta campaña · community-manager gestiona
        │           publicación y respuesta · market-automation dispara emails/WhatsApp
        ▼
[4. Analítica]   → mide ROI/ROAS semanal, dispara alerta si se cruza invalidador
        │
        └──► retroalimenta a [1. Estrategia] para pivotar o escalar
```

## 7. Próximo paso concreto

Si quieres, el siguiente paso ejecutable es construir el skill `agencia-360` (el router) ahora mismo, dejando "placeholders" claros para Diseño (departamento 2, que tú vas a construir) y armando la primera versión de `analitica-rendimiento` y las 3 skills de Digital. Dime con cuál departamento quieres que empiece.
