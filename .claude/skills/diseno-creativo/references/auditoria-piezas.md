# Auditoría de Piezas

Cuando el usuario pega/adjunta una imagen de una pieza gráfica (propia, de un cliente o de un competidor) pidiendo revisión, feedback o auditoría, este es el flujo — no se rediseña la pieza salvo pedido explícito, se audita tal como está.

## 1. Rúbrica de auditoría

Evaluar la pieza en este orden, con hallazgos concretos y accionables — nunca vaguedades tipo "se ve bien" o "me gusta más el otro".

### a) Anclaje visual (¿hay UNO?)

- ¿Existe un solo elemento que atrae el ojo primero, o compiten varios (logo grande + texto grande + producto grande + sello de descuento, todos peleando)?
- Si hay más de un candidato a anclaje: nombrar cuáles son y cuál debería ganar según el objetivo de la pieza.

### b) Jerarquía de mensaje

- ¿El orden de peso visual sigue título → apoyo → CTA → legal, o el legal/letra pequeña compite visualmente con el título?
- ¿El CTA es identificable en menos de 1 segundo de mirada?

### c) Consistencia de marca

- ¿La paleta de color coincide con el sistema de marca conocido (si existe `sistema-de-marca.md` o `market-brand`/`BRAND-VOICE.md` del cliente)? Si no hay sistema conocido, evaluar consistencia interna (¿la pieza es coherente consigo misma al menos?).
- ¿La tipografía es consistente (no 3-4 familias distintas conviviendo sin razón)?
- ¿El uso del logo respeta área de resguardo y no está deformado/estirado?

### d) Clichés genéricos de IA (si la pieza fue generada por IA o lo parece)

- Tipografías trilladas por defecto sin razón de marca.
- Composición de "grid de cards genérico de SaaS".
- Manos/objetos con anatomía incorrecta, texto con errores tipográficos ilegibles.
- Look general de "hecho apurado con IA sin dirección de arte" — nombrar la señal específica, no solo decir "se ve a IA".

### e) Formato y plataforma

- ¿La dimensión/ratio es correcta para dónde se va a publicar? (ver `formatos-plataformas.md`)
- Si es para Stories/Reels: ¿respeta la zona segura de UI (texto no tapado por controles de la app)?
- ¿Sobrevive el recorte si corre en múltiples placements?

### f) Legibilidad y contraste

- ¿El texto tiene suficiente contraste contra el fondo, incluso a tamaño de miniatura de feed/chat?
- ¿La jerarquía tipográfica (tamaños relativos) es clara a simple vista?

## 2. Formato del hallazgo (siempre estructurado, nunca vago)

Cada hallazgo sigue este patrón: **qué está mal → por qué importa → qué cambiar específicamente**.

Ejemplo:
> **Anclaje visual duplicado.** El producto y el sello de "50% OFF" tienen el mismo tamaño y contraste, así que el ojo no sabe a cuál mirar primero. Si el objetivo es vender el descuento, reducir el producto a un tercio del frame y que el sello sea el elemento dominante; si el objetivo es mostrar el producto, mover el sello a una esquina con menor peso visual.

Evitar hallazgos tipo "el contraste no funciona" sin especificar cuál elemento, contra cuál fondo, y qué cambiar.

## 3. Estructura de la auditoría completa

```markdown
# Auditoría de pieza — [nombre/descripción breve]

## Resumen
[1-2 líneas: qué tan bien cumple su objetivo esta pieza, sin rodeos]

## Hallazgos (ordenados por impacto)
1. [Hallazgo: qué está mal → por qué importa → qué cambiar]
2. ...

## Lo que sí funciona
[No omitir esto — reconocer lo que está bien hecho es parte de una auditoría honesta, no solo lista de errores]

## Prioridad de corrección
[Si hay que arreglar solo 1-2 cosas antes de publicar, cuáles son]
```

## 4. Cuándo pasar de auditoría a producción

Solo si el usuario pide explícitamente una versión nueva o corregida después de ver la auditoría — no asumir que toda auditoría termina en un rediseño. Si pide la corrección, ahí sí se sigue el flujo de producción (Pasos 1-5 de `SKILL.md`), usando los hallazgos de esta auditoría como input del sistema de marca/restricciones.
