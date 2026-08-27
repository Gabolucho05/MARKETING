# Marketing Audit: D'Scobar Soluciones (España)
**URL:** https://dscobarsoluciones.es/
**Fecha:** 25 de agosto de 2026
**Tipo de negocio:** Consultoría B2B — diagnóstico empresarial, marketing B2B, headhunting España/LatAm e implementación de ERP Odoo (Málaga, España)
**Marketing Score General: 40/100 (Grade: D — Por debajo del promedio, pero la ejecución más sólida de todo el grupo auditado)**

---

## Resumen Ejecutivo

Dentro de la serie de auditorías realizadas en esta sesión sobre una red de empresas venezolanas de servicios B2B (EPRAN, 2CREA2, DMarketing Consultores, OneTalentPro, y dscobarsoluciones.com), **dscobarsoluciones.es es, con diferencia, la ejecución más profesional**: un headline con voz propia ("El aliado integral para crecer. Sin humo, sin atajos."), una metodología de servicio articulada en tres fases con métricas de resultado concretas, y una oferta de entrada bien diseñada (diagnóstico gratuito de 45 minutos con compromiso de respuesta en 24 horas laborables). Es un sitio construido con más cuidado que el resto del grupo, no un sitio improvisado.

Pero comparte los mismos vicios estructurales que el resto de la red, ahora con evidencia legal que cierra definitivamente la incógnita sobre quién está detrás: la investigación de esta auditoría verificó en el **Registro Mercantil de Málaga (BORME)** que "DScobar Soluciones S.L." fue constituida el 15 de noviembre de 2023, con capital social mínimo (3.000€), y que su administrador único y socio único es **"Jara Daniel-David Escobar"** — el mismo nombre, en distinto orden, que **Daniel Escobar Jara**, identificado en LinkedIn como CEO de "Corporación EPRAN". Esto confirma, con evidencia de registro público (no inferencia), que D'Scobar Soluciones España es una extensión legal de la misma persona y red investigada a lo largo de esta sesión. La empresa española tiene menos de dos años de existencia legal, mientras el sitio afirma "más de 19 años de experiencia" — una cifra heredada de la operación venezolana del grupo sin distinguir qué parte de esa trayectoria corresponde realmente a España.

A nivel técnico, el hallazgo más grave: el `<title>` **"My Website"** —el nombre por defecto que Odoo asigna al sitio y que nunca se personalizó— aparece en las **18 URLs del sitemap sin excepción**, incluida la homepage. Es una sola casilla sin marcar en la configuración de Odoo, pero con el peor alcance posible: cada resultado de búsqueda de Google para este sitio, y cada pestaña del navegador de cualquier visitante, muestra el nombre de una plantilla, no el de la marca. A esto se suma un error de contenido serio: la página del servicio de Marketing B2B —la de mayor intención comercial del sitio— tiene una tabla de precios de un módulo genérico de CRM de Odoo (planes de €35/€65/€125 "por usuarios") pegada sin adaptar, contradiciendo directamente el posicionamiento de consultoría a medida que el resto de la página construye cuidadosamente. La certificación de "partner oficial de Odoo" que el sitio reclama tampoco aparece en el directorio oficial de partners de Odoo para España, y la afirmación "la impulsadora de negocios nº1 en toda España" no tiene ninguna evidencia que la sostenga.

**Las 3 acciones que más moverían la aguja:**
1. **Corregir el nombre del sitio en Odoo** (Ajustes → Sitio Web → Nombre) para eliminar "My Website" de las 18 páginas de una sola vez — el fix de mayor alcance por menor esfuerzo de todo este conjunto de auditorías.
2. **Eliminar la tabla de precios de CRM** en /marketing-b2b y sustituirla por una estructura de precios de consultoría real, o por "precio a medida tras diagnóstico".
3. **Verificar y mostrar (o retirar) la certificación de partner Odoo**, y aclarar de forma explícita en /sobre-nosotros la relación con las otras marcas del grupo mencionadas (D'Marketing Consultores, One Talent ESPRO, D'Scobar Academy) y con la trayectoria venezolana declarada.

**Impacto estimado:** dado que este sitio ya tiene la base de copy y oferta más sólida del grupo, es también el que tiene el retorno más rápido y de menor esfuerzo por corrección — ver detalle en Impacto en Ingresos.

---

## Desglose de Puntuación

| Categoría | Score | Peso | Score Ponderado | Hallazgo Clave |
|-----------|-------|------|------------------|----------------|
| Content & Messaging | 52/100 | 25% | 13.0 | El mejor headline y metodología de servicio del grupo, dañado por el title "My Website" y precios de CRM genérico |
| Conversion Optimization | 52/100 | 20% | 10.4 | La mejor oferta de entrada del grupo (diagnóstico + SLA 24h), pero la confusión de precios rompe la conversión en el momento clave |
| SEO & Discoverability | 24/100 | 20% | 4.8 | "My Website" en las 18 páginas del sitemap; cero datos estructurados; sitemap expone módulos Odoo sin usar |
| Competitive Positioning | 27/100 | 15% | 4.05 | Registro Mercantil confirma administrador "Jara Daniel-David Escobar" = Daniel Escobar Jara, CEO de Corporación EPRAN |
| Brand & Trust | 42/100 | 10% | 4.2 | Empresa registrada hace menos de 2 años reclamando "19 años de experiencia"; certificación Odoo no verificable |
| Growth & Strategy | 31/100 | 10% | 3.1 | El cross-sell entre los 4 servicios (diagnóstico → marketing → headhunting → ERP) es una idea sólida, pero no se comunica como journey |
| **TOTAL** | | **100%** | **39.55/100 (redondeado a 40)** | |

---

## Quick Wins (Esta Semana)

1. **Corregir el nombre del sitio en Odoo** (Ajustes → Sitio Web → Nombre del sitio) — elimina el sufijo "| My Website" de las 18 URLs del sitemap en un solo cambio.
2. **Eliminar la tabla de precios de CRM genérico** en /marketing-b2b y sustituirla por precios de consultoría reales o "precio a medida tras diagnóstico".
3. **Escribir meta descriptions reales** para las 6 páginas principales (hoy solo 2 tienen, y son el placeholder de Odoo sin editar, uno incluso en inglés en un sitio en español).
4. **Verificar el estatus real de partner Odoo**: si es cierto, publicar el badge oficial con enlace al directorio odoo.com/partners; si no es verificable, retirar la afirmación.
5. **Añadir email, dirección y horario visibles en /contactus** (hoy solo hay teléfono y formulario, pese a que el email sí aparece en el home).
6. **Agregar un botón de WhatsApp Business** — ausente pese al perfil B2B España/LatAm del negocio.
7. **Quitar del sitemap y robots.txt las 7 URLs de módulos Odoo sin usar** (`/jobs`, `/slides`, `/slides/all`, `/profile/users`, `/profile/ranks_badges`, `/website/info`) o desactivar esas apps si no se usan.
8. **Reducir cada página de servicio a un solo H1** — hoy tienen entre 8 y 9 etiquetas H1 por página (bloques de plantilla de Odoo apilados sin reclasificar a H2/H3).
9. **Instalar Google Analytics 4 / Google Tag Manager** — hoy solo hay Meta Pixel instalado, sin visibilidad de tráfico orgánico ni de búsqueda.
10. **Unificar la cifra de años de experiencia** (17 en home vs. 19 en /sobre-nosotros) y aclarar cuánto corresponde a la operación española real (menos de 2 años según registro mercantil) frente a la trayectoria del grupo en Venezuela.

## Recomendaciones Estratégicas (Este Mes)

1. **Declarar explícitamente la estructura de grupo** en /sobre-nosotros: qué relación tienen D'Marketing Consultores, One Talent ESPRO y D'Scobar Academy con D'Scobar Soluciones (¿divisiones? ¿marcas hermanas?), en vez de mencionarlas sueltas sin contexto.
2. **Retirar o sustanciar "la impulsadora de negocios nº1 en toda España"** — afirmación de liderazgo sin ningún cliente, caso o cifra española que la respalde.
3. **Construir prueba social real**: 3-5 testimonios o casos de cliente (aunque sean de la operación LatAm mientras crece la cartera española), y nombres/fotos de al menos los responsables de la operación en Málaga.
4. **Convertir el catálogo de 4 servicios en un "journey" de crecimiento explícito** (diagnóstico → marketing → headhunting → implementación ERP) en vez de presentarlos como una lista plana — es el mecanismo de cross-sell más lógico de todo el grupo auditado y hoy no se comunica como tal.
5. **Formalizar el posicionamiento puente LatAm-España** en el servicio de Headhunting como diferenciador explícito ("el único partner que opera en ambos ecosistemas"), en vez de dejarlo insinuado solo en el nombre del servicio.
6. **Implementar datos estructurados (JSON-LD)**: Organization + LocalBusiness (con el NAP de Málaga) + Service en cada página, y FAQPage en la sección de preguntas frecuentes de /implementacion-erp.
7. **Forzar el redirect 301 entre `dscobarsoluciones.es` y `www.dscobarsoluciones.es`** a nivel de servidor — hoy ambas versiones responden 200 OK sin redirección, mitigado solo parcialmente por el canonical tag.

## Iniciativas de Largo Plazo (Este Trimestre)

1. **Decidir y ejecutar una postura única de transparencia de grupo para toda la red auditada** (EPRAN, 2CREA2, DMarketing Consultores, OneTalentPro, dscobarsoluciones.com y .es) — este sitio (.es) es el mejor candidato para pilotarlo, dado que ya mencionó las marcas del grupo de forma intencional, a diferencia del resto.
2. **Lanzar un blog/hub de contenido SEO** orientado a búsquedas transaccionales de PYME española ("implementación Odoo España", "consultoría marketing B2B Málaga") — hoy no existe ningún canal de adquisición orgánica.
3. **Conseguir y mostrar prueba social de terceros verificable**: listado real en el directorio oficial de partners de Odoo, membresía en cámara de comercio de Málaga, o cualquier reconocimiento externo auditable.
4. **Auditar coordinadamente toda la red de sitios del grupo** (ya iniciado en auditorías previas) para resolver de forma consistente los residuos de plantilla, inconsistencias de cifras y ambigüedad de identidad corporativa en todos los dominios simultáneamente.

---

## Análisis Detallado por Categoría

### Content & Messaging (52/100)
El headline "El aliado integral para crecer. Sin humo, sin atajos." y el subheadline "Si tu empresa ha tocado techo, no es casualidad" tienen personalidad y especificidad muy por encima del resto del grupo auditado. La página de Marketing B2B articula una metodología en 3 fases (Foco & setup → Activación & aprendizaje → Escala & optimización) con métricas de resultado prometidas ("CPL -25% y SQL +35% en 60-90 días") — el nivel de sofisticación de copy más alto visto en toda la red. Pero el `<title>` "My Website" sin personalizar en todas las páginas, la tabla de precios de CRM genérico pegada en Marketing B2B, la visión "nº1 en toda España" sin sustento, y la ausencia total de prueba social (pese a reclamar una certificación Odoo de alto valor nunca mostrada) diluyen severamente esa fortaleza inicial.

### Conversion Optimization (52/100)
La oferta de entrada —diagnóstico gratuito de 45 minutos con consultor sénior, plan accionable de 2-3 iniciativas, y compromiso de respuesta en 24 horas laborables— es el mecanismo de conversión mejor diseñado de todo el grupo: específico, de bajo riesgo, con SLA medible. El formulario de contacto es ligero (5 campos) y bien calificado. Pero la tabla de precios de CRM en /marketing-b2b genera confusión de oferta justo en la etapa de mayor intención de compra del funnel, y /contactus carece de email, dirección, mapa y horario visibles pese a que el email sí existe en otras páginas del sitio. Sin WhatsApp en ningún punto de contacto.

### SEO & Discoverability (24/100)
El hallazgo más grave de esta auditoría a nivel técnico: el `<title>` "My Website" (placeholder por defecto de Odoo, nunca personalizado en Ajustes → Sitio Web → Nombre) aparece en las 18 URLs del sitemap, sin una sola excepción, incluida la home. Meta descriptions ausentes en la mayoría de páginas, y donde existen son el placeholder literal de Odoo (una incluso en inglés: "This is the homepage of the website"). Cada página de servicio tiene entre 8 y 9 etiquetas H1 (bloques de plantilla apilados sin reclasificar). Cero datos estructurados en todo el sitio. El sitemap expone 7 URLs de módulos Odoo activados pero nunca desplegados/curados (reclutamiento, e-learning, perfiles de foro), diluyendo la relevancia temática del dominio. En positivo: no se detectó `noindex` en ninguna página, las URLs son limpias y descriptivas, y —dato técnico relevante para el contexto de toda la investigación— este sitio resuelve a una **IP distinta** (178.32.44.15) a la compartida por EPRAN/2CREA2/DMarketing/OneTalentPro (51.81.149.152), confirmando que corre en su propia instancia Odoo, coherente con operar como partner Odoo independiente.

### Competitive Positioning (27/100)
La verificación en el Registro Mercantil de Málaga confirma que "DScobar Soluciones S.L." fue constituida el 15 de noviembre de 2023 (capital social mínimo, 3.000€), con **"Jara Daniel-David Escobar"** como administrador único y socio único — el mismo nombre que "Daniel Escobar Jara", identificado en LinkedIn como CEO de "Corporación EPRAN". Esta es la pieza de evidencia más concluyente de toda la investigación de esta sesión: cierra, con registro público verificable, la conexión entre D'Scobar Soluciones y la red venezolana investigada. La afirmación de "partner oficial de Odoo" no aparece en el directorio oficial de partners de Odoo para España (a diferencia de un competidor real, Voodoo.es, que sí exhibe su certificación "Silver Partner" verificable). Frente a competidores españoles reales de consultoría B2B (Esconzeta, con logos de clientes reconocibles como EDP y Ferrovial) y de implementación Odoo (Voodoo.es), D'Scobar España no tiene ninguna prueba social nombrada ni certificación verificable que lo sostenga frente al mercado.

### Brand & Trust (42/100)
El puntaje más alto de Brand & Trust de todo el grupo auditado, reflejando una ejecución más cuidada, pero con la misma raíz de problema: una empresa registrada hace menos de dos años que reclama "19 años de experiencia" sin distinguir qué parte corresponde a la operación real en España. La mención de otras marcas del grupo (D'Marketing Consultores, One Talent ESPRO, D'Scobar Academy) en /sobre-nosotros es un paso parcial hacia la transparencia —más intencional que el residuo accidental visto en dscobarsoluciones.com— pero sigue sin explicar la relación societaria real, dejando al visitante sin poder verificar con quién está contratando. La certificación de partner Odoo, el único activo de credibilidad potencialmente verificable por un tercero independiente en todo el sitio, no se muestra con ningún badge, logo o enlace.

### Growth & Strategy (31/100)
El modelo de negocio de puente LatAm-España vía el servicio de "Headhunting España y LATAM" es una propuesta de valor coherente en teoría, pero no está siendo explotada como mensaje diferenciador explícito. El cross-sell entre los 4 servicios (diagnóstico → marketing → headhunting → implementación ERP) tiene lógica de negocio real —especialmente si el mismo grupo también opera agencias de marketing y RRHH bajo otras marcas— pero se presenta como una lista plana sin conectar los puntos. La tabla de precios de CRM genérico en Marketing B2B es, con alta probabilidad, un residuo de configuración de la propia plataforma Odoo sobre la que corre el sitio — una ironía relevante para una empresa que vende implementación de Odoo como servicio.

---

## Comparación Competitiva

*Nivel de confianza: alto — verificado por fetch directo, búsqueda web y consulta del Registro Mercantil de Málaga en esta misma sesión.*

| Factor | D'Scobar España | Voodoo.es (Odoo) | Esconzeta (marketing B2B) |
|--------|-------------------|-------------------|------------------------------|
| Certificación verificable | 2/10 (no aparece en directorio oficial) | 9/10 (Silver Partner verificado con insignias por versión) | N/A |
| Prueba social nombrada | 0/10 | 8/10 (logos reales: Zacatrus, ASNEF, Mobilize Power) | 8/10 (logos: EDP, Ferrovial, Fotocasa, Santillana) |
| Claridad de propuesta | 6/10 | 6/10 | 7/10 |
| Transparencia de identidad corporativa | 3/10 | 7/10 | 7/10 |
| Oferta de entrada (lead magnet) | 8/10 (diagnóstico + SLA 24h) | 5/10 (sin oferta gratuita) | 7/10 (diagnóstico 30 min) |

---

## Impacto en Ingresos

*Metodología: dado que este sitio tiene la base de oferta más sólida del grupo, el impacto de las correcciones es más directo y de menor esfuerzo que en el resto de la red auditada.*

| Recomendación | Impacto Estimado | Confianza | Timeline |
|---------------|---------------------|------------|----------|
| Corregir "My Website" en configuración de Odoo | Alto (mejora CTR orgánico y percepción de marca en las 18 páginas del sitio a la vez) | Alta | Minutos |
| Eliminar tabla de precios de CRM en /marketing-b2b | Alto (+15-30% en conversión de esa página específica, según patrón de fuga identificado) | Media | Horas |
| Verificar/mostrar certificación Odoo o retirarla | Medio (único activo de prueba verificable por terceros en todo el sitio) | Media | 1 semana |
| Añadir email/dirección/horario y WhatsApp en contacto | Medio (+10-20% en leads totales) | Media | Días |
| Publicar testimonios/casos de cliente | Alto (cierra la brecha más explotable frente a competidores con prueba social real) | Media | 2-4 semanas |
| Declarar estructura de grupo explícitamente | Medio (reduce riesgo de descalificación en due diligence B2B) | Media | 1-2 semanas |
| **Potencial total (rango conservador-moderado)** | **~$3,000-$8,000/mes equivalente en pipeline adicional (mercado España)** | | |

---

## Próximos Pasos

1. **Corregir el nombre del sitio en Odoo** para eliminar "My Website" de las 18 páginas — el fix de mayor alcance por menor esfuerzo de todo este conjunto de auditorías.
2. **Eliminar la tabla de precios de CRM genérico** en /marketing-b2b y sustituirla por una oferta de precios real.
3. **Verificar y mostrar la certificación de partner Odoo, o retirar la afirmación**, y declarar explícitamente la relación con las otras marcas del grupo mencionadas en /sobre-nosotros.

*Generado por AI Marketing Suite — `/market audit`. Con esta auditoría se completa la investigación de seis sitios interconectados en esta sesión (EPRAN, 2CREA2, DMarketing Consultores, OneTalentPro, dscobarsoluciones.com y dscobarsoluciones.es). Se sugiere fuertemente un `/market competitors` consolidado que trate a todo el grupo como un solo caso de estudio de arquitectura de marca, en vez de continuar auditando cada dominio como un negocio independiente.*
