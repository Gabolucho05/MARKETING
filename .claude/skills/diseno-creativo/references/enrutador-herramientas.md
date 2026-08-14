# Enrutador de Herramientas: Claude Design vs. Generador de Imágenes

La decisión más importante de esta skill no es qué se diseña, es **con qué motor se produce**. Un error aquí desperdicia el trabajo — pedirle a un generador de imágenes que arme un dashboard interactivo, o a Claude Design que produzca arte final rasterizado, no va a salir bien a la primera.

## 1. Regla de decisión

| ¿La pieza es...? | Motor | Por qué |
|---|---|---|
| Código vivo / interactiva / estructurada por secciones | **Claude Design** | Se beneficia de estructura semántica, componentes reutilizables, capacidad de editar por secciones |
| Arte final rasterizado / imagen única | **Generador de imágenes** (ChatGPT/DALL-E u otro) | Es una imagen, no una interfaz — no hay "componentes" que reutilizar, hay composición visual final |

## 2. Tabla de piezas por motor

| Tipo de pieza | Motor | Notas |
|---|---|---|
| Landing page | Claude Design | Estructura por secciones (hero, beneficios, prueba social, CTA) |
| Dashboard | Claude Design | Ver también la skill `dataviz` para el lenguaje visual de gráficos dentro del dashboard |
| Manual de marca (como documento navegable) | Claude Design | Se beneficia de navegación por secciones (paleta, tipografía, uso de logo, ejemplos) |
| Carrusel armado como sistema de cards | Claude Design | Si se necesita reutilizar la estructura para variantes rápidas |
| Presentación / pitch deck | Claude Design (o `pptx` si el cliente necesita el archivo .pptx editable) | Preguntar formato de entrega esperado antes de elegir |
| Mockup de producto/app | Claude Design | Interfaz simulada, no imagen fotográfica |
| Flyer | Generador de imágenes | Arte final, una sola composición |
| Logo | Generador de imágenes | Arte final; advertir que un generador de imágenes no entrega vectores editables — para producción real se necesita vectorizar después |
| Arte suelto de carrusel (imagen por imagen, no sistema de cards) | Generador de imágenes | Cuando cada tarjeta es una composición fotográfica/ilustrada distinta, no un template de texto reutilizable |
| Ilustración | Generador de imágenes | |
| Fotografía compuesta | Generador de imágenes | |
| Portada (de video, de post, de documento impreso) | Generador de imágenes | |

## 3. Piezas ambiguas o mixtas

Algunas campañas necesitan ambos motores para distintas piezas de la misma campaña (ej.: landing en Claude Design + flyer de imagen para promocionar esa landing en redes). En ese caso:

1. Identificar cada pieza por separado, no tratar la campaña como una sola solicitud.
2. Producir las especificaciones por separado, cada una claramente etiquetada con su motor.
3. Mantener el mismo sistema de marca (`sistema-de-marca.md`) en ambas, aunque el motor sea distinto — la consistencia de marca no depende de la herramienta.

## 4. Cuando el usuario no especifica el tipo de pieza

Preguntar en una sola tanda (máximo 3 preguntas):
1. ¿Qué pieza necesita exactamente? (si la respuesta es ambigua — "algo para redes" — pedir el formato específico: post, story, reel, carrusel)
2. ¿Para qué marca/cliente es?
3. ¿Ya existe un sistema de marca definido, o hay que crearlo?

No asumir el motor por el nombre coloquial que use el usuario ("hazme un diseño para Instagram" puede ser un flyer de imagen o un carrusel-sistema — preguntar el formato específico si no es obvio por el contexto).
