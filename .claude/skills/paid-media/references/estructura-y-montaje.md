# Estructura y Montaje de Campaña (Paso 4)

Con ángulos y creativos listos (Paso 3), esta fase arma la campaña en el Administrador de Anuncios (o vía el MCP de Meta, si está conectado) siguiendo la disciplina de segmentación amplia de la era Andromeda.

## 1. Jerarquía de campaña

```
Campaña (objetivo + presupuesto si es CBO)
  └── Conjunto de anuncios (segmentación, destino, presupuesto si es ABO)
        └── Anuncios (creativos individuales — cada ángulo/variante del Paso 3)
```

**CBO (Campaign Budget Optimization) vs. ABO (Ad Set Budget Optimization):**
- CBO: Meta distribuye el presupuesto entre conjuntos automáticamente. Preferido cuando hay 2-3 conjuntos comparables y se confía en que el algoritmo optimice bien (presupuestos ya no tan chicos, con algo de historial).
- ABO: control manual por conjunto. Preferido en cuentas nuevas o presupuestos muy ajustados ($3-15/día) donde no se quiere que el algoritmo concentre todo el gasto en un solo conjunto antes de darle tiempo a los demás de aprender.

## 2. Nomenclatura

Sin una convención clara, es imposible auditar la cuenta después. Formato recomendado:

```
Campaña:    [Objetivo]_[Producto/Oferta]_[Fecha lanzamiento]
Conjunto:   [Audiencia amplia]_[Destino tráfico]_[Presupuesto]
Anuncio:    [Ángulo]_[Formato]_[Variante#]
```

Ejemplo:
```
Campaña: Conversiones_ComboVerano_2026-07
Conjunto: VE-18-45-Amplio_WhatsApp_5USDdia
Anuncio: Dolor_VideoUGC_V1
```

## 3. Segmentación (amplia, por diseño)

Consistente con el principio #1 de `SKILL.md`: en Andromeda, apilar 10-12 intereses es contraproducente.

- **Segmentación base**: país + rango de edad amplio + ubicación relevante (si aplica delivery/local). Nada más, salvo que el negocio tenga una restricción real (ej. producto solo para mayores de 18, o solo disponible en una ciudad).
- **El conocimiento de audiencia va al creativo (80%)**, no al segmentador (20%) — si se sabe que el target es "mamás de 30-45 preocupadas por el presupuesto del hogar", eso se refleja en el ángulo y el copy, no en filtros de intereses adicionales.
- **Excepción**: audiencias de retargeting (ver `optimizacion-escalado.md`) sí son intencionalmente estrechas — ahí la lógica es distinta (personas que ya interactuaron, no frío).

## 4. Presupuesto y distribución

- Presupuesto diario mínimo realista en el mercado venezolano: $3-15/día por conjunto — con menos, el algoritmo no acumula suficiente data para salir de fase de aprendizaje.
- No dividir un presupuesto ya ajustado entre demasiados conjuntos/anuncios en paralelo — mejor 2-3 conjuntos bien alimentados que 6 famélicos que nunca salen de aprendizaje.
- Reservar explícitamente un % (si el presupuesto lo permite) para retargeting — suele tener el CPA más bajo del embudo y no debería competir por presupuesto con la prospección fría bajo el mismo conjunto.

## 5. Destino del tráfico

Definir por producto/oferta, no por default:

| Destino | Cuándo usarlo |
|---|---|
| WhatsApp (click-to-chat) | Cierre consultivo, tickets medios/altos, negociación de condición de pago — dominante en Venezuela |
| Landing page | Cuando hay checkout propio o se necesita calificar/educar antes del contacto humano |
| Catálogo/Shop | Productos de catálogo amplio, e-commerce con checkout in-platform |
| Formulario nativo (Lead Ads) | Captación de leads de bajo compromiso (webinar, lista de espera) — advertir que suele traer leads más fríos que WhatsApp directo |

Si el destino es WhatsApp, confirmar que existe un guion de cierre definido (ver `estrategia-planificacion`) antes de encender — un anuncio que genera chats sin un flujo de cierre desperdicia el gasto.

## 6. Montaje vía MCP de Meta (si está conectado)

- Las campañas se crean **en pausa** por defecto — esto es diseño de seguridad de la plataforma, no una limitación a saltar. Entregar la campaña armada y lista; el usuario le da play.
- **Nunca subir presupuesto más de 20% por movimiento** — rompe la fase de aprendizaje y puede disparar revisión de la cuenta.
- **Operar una cuenta a la vez**, no en paralelo — cambios simultáneos en múltiples cuentas es un patrón de comportamiento que Meta asocia a abuso.
- **Espaciar los cambios** (no ráfagas de ediciones en minutos) — mismo motivo.
- Sin tracking (píxel/eventos) probado con una conversión real, **no se monta ni se enciende nada** — principio no negociable #3 de `SKILL.md`.

## 7. Montaje manual (sin MCP conectado)

Entregar la campaña completamente documentada y lista para copiar-pegar en el Administrador de Anuncios: cada campo especificado (objetivo, presupuesto, segmentación, destino, texto de cada anuncio, creativos o sus prompts) — el usuario no debería tener que tomar ninguna decisión de diseño al montarla, solo ejecutar.

## 8. Checklist antes de encender

- [ ] ¿Píxel/eventos configurados y verificados con al menos una conversión de prueba?
- [ ] ¿Nomenclatura consistente en campaña/conjunto/anuncio?
- [ ] ¿Segmentación amplia (no interest-stacking)?
- [ ] ¿Presupuesto realista para el número de conjuntos activos?
- [ ] ¿Destino de tráfico con flujo de cierre definido (guion de WhatsApp, landing funcional)?
- [ ] Si se monta vía MCP: ¿queda en pausa para aprobación humana explícita?
