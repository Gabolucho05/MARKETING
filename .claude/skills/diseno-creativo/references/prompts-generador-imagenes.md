# Prompts para Generador de Imágenes

Cuando el motor elegido (`enrutador-herramientas.md`) es un generador de imágenes (ChatGPT/DALL-E u otro), el entregable es el **prompt completo**, construido por esta skill a partir de todo el contexto disponible — nunca se le pide al usuario que llene una plantilla campo por campo.

## 1. Estructura de un prompt completo

Un buen prompt de producción especifica, en este orden:

1. **Tipo de pieza y formato**: flyer 4:5, logo, arte de carrusel 1:1, ilustración, portada, etc. (ver `formatos-plataformas.md` para dimensiones exactas).
2. **Composición**: qué elemento es el anclaje visual principal, dónde va el texto (si lleva), balance de espacio.
3. **Estilo visual**: fotografía real vs. ilustración vs. producto en estudio — heredado del sistema de marca (`sistema-de-marca.md`).
4. **Paleta de color**: los hex/colores del sistema de marca, explícitos, no "colores vibrantes".
5. **Elemento humano** (si aplica): describir contexto real y específico (no "persona feliz genérica") — igual principio que usa `paid-media` para creativos de ads: lo específico rinde más que lo genérico.
6. **Texto en pantalla** (si lleva): el texto exacto, y una nota de que debe ser legible/tipografía limpia (los generadores de imagen todavía cometen errores tipográficos — advertir que puede requerir corrección manual del texto en post).
7. **Qué evitar**: clichés de IA (manos deformes, texto ilegible, composición genérica de stock, look "hecho por IA").

## 2. Ejemplo completo (flyer de oferta, ángulo dolor)

```
Flyer publicitario formato 4:5 (1080x1350px), para Instagram feed.
Composición: anclaje visual único es un producto [nombre] en primer plano,
fondo con leve desenfoque de un ambiente doméstico venezolano realista
(cocina/sala), luz natural cálida, sin elementos compitiendo por atención.
Paleta: primario #[hex del sistema de marca], acento #[hex], fondo neutro #[hex].
Estilo: fotografía realista, no ilustración, no render 3D genérico.
Texto en pantalla (tipografía limpia y legible, alto contraste): "[hook del ángulo]".
Logo de marca en esquina inferior, tamaño discreto (no protagonismo).
Evitar: aspecto de banner genérico de stock, texto con errores tipográficos,
manos u objetos deformados, composición simétrica aburrida tipo plantilla.
```

## 3. Ejemplo completo (logo)

```
Logo para [nombre de marca], categoría [rubro].
Estilo: [minimalista geométrico / lettering artesanal / emblema — según
lo que arrojó sistema-de-marca.md].
Paleta: [colores del sistema, o "a definir" si es marca nueva — proponer
2-3 alternativas de paleta en ese caso].
Debe funcionar en: versión a color, versión monocromática, tamaño reducido
(favicon/ícono de app) — verificar legibilidad a tamaño pequeño.
Evitar: clip art genérico, gradientes de moda sin razón de marca,
tipografías trilladas (Montserrat/Poppins genéricas) salvo pedido explícito.
```

**Advertencia obligatoria al entregar un prompt de logo**: un generador de imágenes entrega un archivo rasterizado (PNG/JPG), no un vector editable. Para producción real (impresión, escalado a gran tamaño, uso en múltiples aplicaciones) el logo necesita vectorizarse después (Illustrator/Figma u otra herramienta) — decirlo explícitamente, no dejar que el cliente asuma que el resultado del generador es el archivo final de producción.

## 4. El hack de contexto específico

Igual que en `paid-media`, lo específico rinde más que lo genérico: en vez de "una mujer feliz usando el producto", describir "una mujer de unos 35 años, en su cocina, con expresión de alivio genuino al ver que el producto resolvió [problema específico]". Los generadores de imagen producen resultados más naturales y menos genéricos cuando el prompt tiene detalle concreto, no adjetivos vacíos.

## 5. Checklist antes de entregar el prompt

- [ ] ¿Especifica formato/dimensión exacta (no solo "para redes")?
- [ ] ¿Hereda paleta y estilo del sistema de marca, con hex reales?
- [ ] ¿El elemento humano/contexto es específico, no genérico?
- [ ] ¿Incluye una sección explícita de "qué evitar" (clichés de IA)?
- [ ] Si es texto en pantalla: ¿advierte sobre posible necesidad de corrección tipográfica manual?
- [ ] Si es logo: ¿advierte sobre la necesidad de vectorizar para producción?
