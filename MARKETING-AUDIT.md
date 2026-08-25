# Marketing Audit: D'Scobar Soluciones
**URL:** https://dscobarsoluciones.com/
**Fecha:** 25 de agosto de 2026
**Tipo de negocio:** Agencia de servicios B2B — trade marketing, capacitación, análisis de datos, gestión P.O.P., marketing digital y captación de talentos (Los Ruices, Caracas, Venezuela)
**Marketing Score General: 23/100 (Grade: F — Crítico, el más bajo de todo el conjunto de auditorías de este mercado)**

---

## Resumen Ejecutivo

Esta auditoría cierra el círculo de una investigación que comenzó con sitios independientes en apariencia y que, acumulada a lo largo de varias auditorías en esta sesión, ha destapado una red no declarada de empresas venezolanas de servicios B2B (trade marketing, marketing digital, RRHH) que comparten infraestructura, plantillas y, en el caso de D'Scobar Soluciones, **datos de contacto literales de otras marcas expuestos directamente al público**.

El hallazgo central, confirmado por fetch directo y reverificado de forma independiente por dos subagentes distintos: el **footer del sitio dice literalmente "Copyright 2025 D'MarketingConsultores"** —el nombre de otra agencia de marketing digital auditada por separado en esta sesión— y la página de contacto expone hasta **cuatro direcciones de correo de tres dominios distintos**, incluyendo dos correos de una tercera empresa (**info@epran.com** e **info2@epran.com**) y un dominio con un error tipográfico (**info@descobarsoluciones.com**, con una "e" de más). A esto se suma que el teléfono de contacto (0212-2327576) es idéntico, dígito por dígito, al de 2CREA2 (otra agencia de mercaderismo auditada en esta sesión), y que la investigación identificó al **CEO real detrás de esta red: Daniel Escobar Jara**, confirmado en LinkedIn y RocketReach como director de "Corporación EPRAN" — lo que explica el origen del nombre "D'Scobar" ("de Escobar").

A diferencia de los otros sitios de esta red (que corren sobre la misma instancia Odoo), D'Scobar Soluciones está construido sobre WordPress, en un servidor distinto, gestionado aparentemente por un proveedor de desarrollo llamado "vecurosoft". Esto descarta que el problema sea una base de datos compartida por accidente técnico: **el contenido cruzado tuvo que ser copiado y pegado manualmente** por quien construyó el sitio, sin ningún control de calidad antes de publicarlo. Además, la página "Sobre Nosotros" contiene dos variables de plantilla sin renderizar visibles en producción ("más de **[X]** años de experiencia" y "la agencia de referencia en **[Ciudad]** y toda la región"), el blog está completamente vacío, no hay ningún tracking instalado (ni GA4, ni Meta Pixel, ni GTM), y el sitemap declarado en robots.txt devuelve error 404.

En conjunto, esto no es un problema de copywriting o de optimización de conversión —aunque el sitio también tiene esas debilidades—: es un **problema de integridad básica**. Un sitio web comercial que afirma en su propio pie de página ser otra empresa, y que mezcla canales de contacto de al menos tres identidades distintas, no puede generar confianza suficiente para que una empresa le confíe su fuerza de ventas o su reclutamiento, sin importar cuán bien redactado esté el resto del copy.

**Las 3 acciones que más moverían la aguja:**
1. **Corrección de emergencia, hoy mismo**: cambiar el copyright del footer, eliminar los correos "@epran.com" y el dominio typo, y dejar un único correo de contacto correcto.
2. **Decidir la arquitectura de marca del grupo**: dado el patrón acumulado en esta sesión (mismo teléfono que 2CREA2, misma dirección que EPRAN, misma infraestructura que DMarketing/OneTalentPro, y ahora un CEO identificado en común), la opción de seguir operando como "empresas independientes" ya no es sostenible ante cualquier comprador que investigue mínimamente.
3. **Rellenar los placeholders de plantilla, instalar tracking básico y poblar el blog** — el sitio hoy no tiene forma de medir su propio desempeño ni contenido que lo sostenga.

**Impacto estimado:** en este caso, el mayor "impacto en ingresos" no es de optimización incremental, sino de **prevención de pérdida de contratos** por descalificación en procesos de compra B2B donde la verificación de identidad del proveedor es estándar.

---

## Desglose de Puntuación

| Categoría | Score | Peso | Score Ponderado | Hallazgo Clave |
|-----------|-------|------|------------------|----------------|
| Content & Messaging | 18/100 | 25% | 4.5 | Footer con el nombre de otra empresa; dos placeholders de plantilla ([X], [Ciudad]) sin renderizar en producción |
| Conversion Optimization | 33/100 | 20% | 6.6 | Cuatro correos de tres dominios distintos en la página de contacto generan duda en el momento crítico |
| SEO & Discoverability | 35/100 | 20% | 7.0 | Sitemap declarado en robots.txt devuelve 404; cero tracking instalado; blog completamente vacío |
| Competitive Positioning | 15/100 | 15% | 2.25 | Mismo teléfono exacto que 2CREA2; CEO identificado como director de "Corporación EPRAN" |
| Brand & Trust | 8/100 | 10% | 0.8 | El sitio afirma activamente, en su pie de página legal, ser otra compañía |
| Growth & Strategy | 20/100 | 10% | 2.0 | Duplica literalmente las 4 líneas de negocio de otras "marcas" de la misma red sin diferenciación |
| **TOTAL** | | **100%** | **23.15/100** | |

---

## Quick Wins (Esta Semana)

1. **Corregir el footer**: cambiar "Copyright 2025 D'MarketingConsultores" por "Copyright 2026 D'Scobar Soluciones. Todos los Derechos Reservados." — la corrección de mayor impacto por segundo de todo este conjunto de auditorías.
2. **Eliminar los correos "info@epran.com" e "info2@epran.com"** del footer y del formulario de contacto.
3. **Eliminar el dominio con error tipográfico "info@descobarsoluciones.com"** y dejar un único correo canónico ("info@dscobarsoluciones.com") en header, cuerpo de contacto y footer.
4. **Rellenar los dos placeholders de plantilla** en /nosotros/: "más de **[X]** años de experiencia" y "la agencia de referencia en **[Ciudad]** y toda la región".
5. **Unificar la cifra de años de experiencia** (19 años en home vs. "17+" en otra sección) en todo el sitio.
6. **Corregir el sitemap roto**: la URL declarada en robots.txt (`/wp-sitemap.xml`) devuelve 404 — regenerarlo o instalar un plugin SEO que lo genere correctamente.
7. **Instalar Google Analytics 4 y Google Tag Manager** — hoy no hay ningún tracking instalado, por lo que cualquier inversión en marketing hacia este sitio es imposible de medir.
8. **Escribir meta descriptions** para las 6 páginas principales (hoy ausentes en todas).
9. **Etiquetar los dos teléfonos de contacto** ("Ventas" / "Oficina") y agregar un botón de WhatsApp Business.

## Recomendaciones Estratégicas (Este Mes)

1. **Auditar y limpiar de forma coordinada todos los sitios de esta posible red** (D'Scobar, EPRAN, 2CREA2, DMarketing Consultores, OneTalentPro) en busca de más residuos de contenido cruzado — el problema no se resuelve limpiando solo D'Scobar si el resto sigue filtrando datos entre sí.
2. **Decidir formalmente la arquitectura de marca del grupo**: dada la evidencia acumulada, hay tres caminos honestos —(a) transparentar el grupo con una página "Nuestras marcas" y entidades legales claras; (b) consolidar todo bajo una sola marca operativa, retirando los microsites redundantes; o (c) diferenciar de verdad, con separación técnica y de contenido real entre cada marca. El estado actual (aparentar ser competidores independientes mientras se comparten datos de contacto) no es sostenible.
3. **Poblar el blog con contenido propio y original** (hoy está completamente vacío, ni siquiera tiene el contenido reciclado que sí tienen otras marcas de esta posible red).
4. **Construir prueba social mínima viable**: 3-5 logos de cliente (aunque sea anonimizados por sector) y 2-3 casos con métricas de resultado.
5. **Agregar un nombre y foto real de al menos un líder/fundador** en /nosotros/ — hoy no hay ninguna cara humana detrás de la marca.
6. **Verificar en Google Search Console si Googlebot está exceptuado del sistema anti-bot del sitio** — se detectó una capa de verificación JavaScript que devuelve una interstitial incluso al solicitar robots.txt, lo cual podría estar afectando el rastreo del sitio.

## Iniciativas de Largo Plazo (Este Trimestre)

1. **Ejecutar la decisión de arquitectura de marca** tomada en el punto estratégico #2, con separación técnica real (hosting, contenido, voz de marca) y un checklist de QA obligatorio antes de publicar cualquier página nueva en cualquiera de los sitios del grupo.
2. **Construir autoridad de contenido genuina** con casos de éxito reales y un calendario editorial que evite canibalizar palabras clave entre las propias marcas del grupo (hoy compiten entre sí por los mismos términos de búsqueda).
3. **Implementar datos estructurados (JSON-LD)**: Organization + LocalBusiness + Service, dado que el sitio ya tiene NAP público.
4. **Programa de gobernanza de marca** para todo el grupo, con un responsable único de revisar consistencia de datos de contacto, copy y cifras entre los distintos sitios antes de cualquier publicación.

---

## Análisis Detallado por Categoría

### Content & Messaging (18/100)
Verificación independiente confirmó el footer con el nombre de otra empresa y reveló un segundo placeholder no detectado inicialmente: la Visión en /nosotros/ dice "la agencia de referencia en **[Ciudad]** y toda la región", con la variable sin rellenar, sumándose al ya confirmado "más de **[X]** años de experiencia". Son dos variables de plantilla distintas en la misma página, nunca completadas — evidencia de que el sitio nunca pasó por una revisión final antes de publicarse. El headline ("Estrategia, ventas y crecimiento en un solo lugar") es genérico y no comunica el negocio real (mercaderistas compartidos) hasta bajar en la página. Cero equipo, certificaciones, logos de clientes o casos de éxito. El formulario de contacto sí está bien segmentado por tipo de servicio, una buena práctica poco común en el resto de esta auditoría.

### Conversion Optimization (33/100)
El formulario de contacto permite seleccionar el servicio de interés (buena práctica de calificación de leads), pero la página de contacto en su conjunto expone hasta cuatro direcciones de correo de tres dominios distintos — el visitante no sabe a cuál escribir, y un comprador B2B evaluando confiarle su operación de mercaderismo a esta agencia interpreta el error como evidencia de la misma falta de rigor que está evaluando si delegarle. CTAs mayormente de navegación ("Nosotros", "Servicios", "Leer Más") sin orientación a conversión real. Sin WhatsApp pese a tener dos teléfonos. Sin mapa interactivo.

### SEO & Discoverability (35/100)
D'Scobar Soluciones corre sobre WordPress (confirmado: rutas `/wp-content/`, `/wp-json/`, tema "tb8"), en una IP (`74.50.69.18`) completamente distinta a la de la instancia Odoo compartida por epran.net/2crea2.net/dmarketingconsultores.com/1talentpro.com (`51.81.149.152`) — esto descarta infraestructura técnica compartida para este sitio específico, pero refuerza que los hallazgos de contenido cruzado (copyright, correos "@epran.com") fueron copiados manualmente, no heredados de una base de datos común. El sitemap declarado en robots.txt (`/wp-sitemap.xml`) devuelve 404. Cero datos estructurados y cero scripts de tracking (ni GA4, ni GTM, ni Meta Pixel) en todo el sitio — el negocio opera completamente a ciegas respecto a su propio tráfico. El sitio además sirve una interstitial anti-bot incluso al solicitar robots.txt, lo cual podría estar afectando el rastreo de buscadores sin que se haya podido confirmar si Googlebot está exceptuado.

### Competitive Positioning (15/100)
El catálogo de D'Scobar Soluciones (trade marketing, marketing digital, captación de talento, capacitación) es la unión literal de las líneas de negocio de EPRAN/2CREA2 (trade marketing), DMarketing Consultores (marketing digital) y OneTalentPro (talento) — sin ninguna segmentación de mercado que justifique operarlas como marcas separadas. La investigación de esta auditoría identificó, con evidencia de dos fuentes independientes (LinkedIn y RocketReach), a **Daniel Escobar Jara** como CEO de "Corporación EPRAN" — dato que explica de forma directa el origen del nombre "D'Scobar" y cierra buena parte de la incógnita sobre la relación entre estas marcas. El teléfono de contacto (0212-2327576) fue reverificado de forma independiente como idéntico al de 2crea2.net. El riesgo de que un cliente potencial descubra esta superposición es alto y de bajo esfuerzo: basta con hacer scroll hasta el footer o comparar dos cotizaciones de "competidores" para notar el mismo número de teléfono.

### Brand & Trust (8/100)
El score más bajo de toda esta serie de auditorías, y con razón: no se trata de "contenido placeholder incompleto" (como equipos ficticios o testimonios sin rellenar, vistos en otros sitios de este mercado), sino de un **problema de identidad rota**. El sitio afirma activamente, en su pie de página legal, ser otra compañía, y mezcla canales de contacto de al menos tres identidades distintas. Un comprador no puede saber con qué razón social está contratando — relevante no solo para la percepción de marca sino para facturación y responsabilidad contractual. El hallazgo es trivialmente descubrible, no requiere investigación técnica: basta con leer el footer o la página de contacto.

### Growth & Strategy (20/100)
Operar varias marcas especializadas por vertical bajo un mismo grupo es una estrategia legítima y común en la industria (así operan los grandes holdings publicitarios), pero requiere tres condiciones que aquí no se cumplen: diferenciación real de oferta, separación operativa limpia, y riesgo reputacional contenible por marca. D'Scobar no cumple ninguna: duplica por completo la oferta de sus "competidores", no hay separación de datos de contacto, y el riesgo de descubrimiento es de contagio hacia las cinco marcas simultáneamente, no aislado a una. El patrón sugiere no una decisión estratégica deliberada, sino una agencia de desarrollo web produciendo sitios en serie con plantillas mal higienizadas, sin proceso de control de calidad.

---

## Comparación Competitiva

*Nivel de confianza: alto — la mayoría de los datos de esta tabla provienen de fetch directo y verificación cruzada realizada en esta misma sesión de auditorías (EPRAN, 2CREA2, DMarketing Consultores, OneTalentPro).*

| Factor | D'Scobar Soluciones | EPRAN | 2CREA2 | DMarketing Consultores | OneTalentPro |
|--------|----------------------|-------|--------|--------------------------|---------------|
| Integridad de identidad de marca | 0/10 | 4/10 | 1/10 | 5/10 | 2/10 |
| Prueba social nombrada | 0/10 | 1/10 | 1/10 | 0/10 | 0/10 |
| Contenido de blog propio | 0/10 (vacío) | 3/10 (compartido) | 2/10 (compartido) | 0/10 (compartido) | 3/10 (compartido pero temáticamente alineado) |
| Tracking/analítica instalada | 0/10 | 7/10 | 6/10 | 5/10 | 6/10 |
| Claridad de posicionamiento | 4/10 | 5/10 | 5/10 | 5/10 | 5/10 |

---

## Impacto en Ingresos

*Metodología: dado que el hallazgo central es de integridad de identidad (no de volumen de tráfico), el "impacto en ingresos" aquí se mide principalmente en términos de contratos que se pierden o se descalifican por descubrimiento del problema, no en optimización incremental de conversión.*

| Recomendación | Impacto Estimado | Confianza | Timeline |
|---------------|---------------------|------------|----------|
| Corregir footer, correos cruzados y placeholders de plantilla | Alto (previene descalificación directa en procesos de compra B2B) | Alta | Horas |
| Decidir y ejecutar arquitectura de marca del grupo | Alto (elimina el riesgo de contagio reputacional entre las 5 marcas) | Media | 1-3 meses |
| Instalar tracking (GA4/GTM) | Medio (habilita cualquier optimización futura basada en datos) | Alta | Días |
| Corregir sitemap roto y agregar meta descriptions | Medio (mejora indexación y CTR orgánico) | Media | 1 semana |
| Poblar el blog con contenido propio | Medio-Alto en 3-6 meses (tráfico orgánico calificado) | Baja (requiere tiempo) | 1-3 meses |
| **Potencial de daño evitado (no cuantificable como "$X/mes" sino como riesgo de pérdida de contratos)** | **Alto — este es el caso de mayor riesgo reputacional de todo el conjunto auditado** | | |

---

## Próximos Pasos

1. **Corregir de inmediato el footer y la página de contacto** — es la corrección de mayor impacto por menor esfuerzo de todo este conjunto de auditorías.
2. **Decidir la arquitectura de marca del grupo** (transparentar, consolidar, o diferenciar de verdad) antes de seguir invirtiendo en cualquiera de los cinco sitios de esta posible red.
3. **Instalar tracking básico y corregir el sitemap** para que cualquier esfuerzo de marketing futuro pueda medirse.

*Generado por AI Marketing Suite — `/market audit`. Dado el patrón acumulado a lo largo de esta sesión (EPRAN, 2CREA2, DMarketing Consultores, OneTalentPro, D'Scobar Soluciones), se sugiere fuertemente un `/market competitors` consolidado que trate a las cinco marcas como un solo caso de estudio de arquitectura de marca, en vez de continuar auditándolas como negocios independientes.*
