# Especificaciones para Claude Design

Cuando el motor elegido (`enrutador-herramientas.md`) es Claude Design, el entregable es un **DESIGN.md**: un brief estructurado, listo para pegar en claude.ai/design, que le da a Claude Design todo lo que necesita para producir la pieza correcta a la primera — sin que el usuario tenga que completar campos ni adivinar qué falta.

## 1. Estructura del DESIGN.md

```markdown
# [Nombre de la pieza] — DESIGN.md

## Tipo de pieza
[Landing page / Dashboard / Manual de marca / Carrusel-sistema / Pitch deck / Mockup]

## Sistema de marca
- Color primario: [hex]
- Colores secundarios: [hex, hex]
- Neutros: [hex, hex]
- Tipografía de título: [nombre]
- Tipografía de cuerpo: [nombre]
- Tono visual: [una frase, ej. "minimalista cálido, no corporativo frío"]

## Contenido y jerarquía
[Qué secciones lleva, en qué orden, y el peso de cada una — título > apoyo > CTA > legal]

## Mensaje/ángulo (si aplica)
[Ángulo de venta de `paid-media`, o mensaje central de `estrategia-planificacion`]

## Referencias de estilo
[Ejemplos o descripciones de otras piezas/marcas que capturan la dirección deseada — evitar referencias genéricas tipo "estilo SaaS moderno"]

## Restricciones
[Qué NO debe tener — clichés a evitar, elementos obligatorios del cliente, restricciones de marca]

## Formato de salida esperado
[Página única / múltiples secciones navegables / componente reutilizable]
```

## 2. Guía por tipo de pieza

### Landing page
- Definir la jerarquía completa: hero (título + apoyo + CTA), prueba social, beneficios/features, objeciones resueltas, CTA final.
- Especificar el CTA principal literal (texto exacto del botón) — no dejarlo como "botón de acción".
- Indicar si hay formulario, y qué campos lleva (mínimos, sin fricción innecesaria — esto conecta con lo que audita `market-landing`).

### Dashboard
- Listar qué métricas/KPIs se muestran y en qué agrupación (ver `analitica-metricas` para qué métricas suele necesitar un dashboard de rendimiento: ROAS, CAC, LTV, tendencia).
- Especificar si es para uso interno (operativo, denso en datos) o para cliente final (más limpio, con narrativa/recomendación visible).
- Usar el mismo lenguaje visual de gráficos que define la skill `dataviz` para que los charts dentro del dashboard sean consistentes.

### Manual de marca (documento navegable)
- Secciones mínimas: portada, paleta con hex, tipografía con ejemplos de uso, logo (versiones y área de resguardo), tono de voz (traer de `market-brand`/`BRAND-VOICE.md` si existe), ejemplos de aplicación (una pieza real mostrando el sistema en uso).
- Si el cliente necesita el archivo como documento descargable en vez de página web, evaluar si `docx` o `pptx` es más apropiado que Claude Design para la entrega final — Claude Design para explorar/aprobar el sistema, el otro para el entregable formal si así lo pide el cliente.

### Carrusel-sistema (cards reutilizables)
- Definir la estructura de card única (qué elementos lleva cada tarjeta: número, título corto, apoyo, ícono/imagen) para que se pueda generar la variante N sin rediseñar desde cero.
- Especificar cuántas tarjetas y el arco narrativo del carrusel (problema → agitación → solución → prueba → CTA, u otro).

### Pitch deck / presentación
- Confirmar si el entregable final debe ser un archivo `.pptx` editable — si sí, usar la skill `pptx` para la producción final; Claude Design sirve para explorar la dirección visual y estructura de slides primero.
- Estructura típica: portada, problema, solución, mercado, producto/servicio, prueba social, modelo de negocio (si aplica), pedido/CTA.

### Mockup de producto/app
- Especificar la plataforma simulada (web, iOS, Android) y el estado exacto de la pantalla (no "pantalla de login" genérica — qué campos, qué estado de error/éxito si aplica).

## 3. Reglas de calidad que todo DESIGN.md debe cumplir

Mismas reglas no negociables de `SKILL.md`:
- Prohibido el look genérico de IA (tipografías trilladas por defecto, grids de cards idénticos de "SaaS genérico") salvo que ya sean del sistema de marca del cliente.
- Un anclaje visual claro por pieza.
- Jerarquía de mensaje explícita: título → apoyo → CTA → legal.

## 4. Entrega

El DESIGN.md se entrega en un bloque de código aparte, listo para copiar y pegar en claude.ai/design, con una nota explícita de que es para ese motor (para no confundirlo con un prompt de generador de imágenes si la misma respuesta incluye ambos).
