# Estructura de campaña y montaje

## Jerarquía de cuenta

```
Cuenta
├── Campaña 1: [Objetivo] - [Producto/Oferta]
│   ├── Conjunto de anuncios 1: [Segmentación amplia]
│   │   ├── Anuncio 1: [Ángulo A - creativo]
│   │   ├── Anuncio 2: [Ángulo B - creativo]
│   │   └── Anuncio 3: [Ángulo C - creativo]
│   └── Conjunto 2: [Variación de destino o audiencia caliente]
└── Campaña 2 (retargeting)...
```

## Nomenclatura (obligatoria para no perderse)

```
[Plataforma]_[Objetivo]_[Audiencia]_[Oferta]_[Fecha]

Ejemplos:
META_Conv_Amplia-VE_CursoBarberia_2026Q3
META_Retarget_VisitantesWA_CursoBarberia_Jul26
```

## Estructura 80/20 con CBO (presupuesto a nivel de campaña)

Para presupuestos pequeños de Venezuela ($3–$15/día), no fragmentar:
- Una campaña CBO con un conjunto amplio y 3-5 anuncios (uno por ángulo).
- Dejar que Meta reparta el presupuesto entre los anuncios (Advantage+ / CBO).
- No crear 6 campañas con $2 cada una: eso fragmenta el aprendizaje y ninguna sale de fase de aprendizaje. Consolidar.

## Segmentación (era Andromeda)

- **Amplia por defecto:** país (Venezuela o las ciudades objetivo) + rango de edad + género si aplica. Nada más.
- No apilar intereses. Si el negocio es muy de nicho, usar UN interés amplio como máximo, o mejor, meter el nicho en el creativo (hack de palabra-identidad).
- Dejar que el creativo segmente.

## Presupuesto y fases

**Fase de testeo (primeras 2-4 semanas):**
- 70% a lo probado/seguro, 30% a probar ángulos/audiencias nuevas.
- Con presupuesto chico: arrancar con lo mínimo que permita salir de aprendizaje (Meta pide ~50 conversiones para optimizar; si el CPA es alto, optimizar por un evento más arriba del embudo, ej.: mensaje de WhatsApp iniciado en vez de compra).

**Fase de escalado:**
- Consolidar presupuesto en las combinaciones ganadoras.
- Subir presupuesto ~20% por movimiento, nunca 30%+ (resetea el aprendizaje).
- Esperar 3-5 días entre aumentos para que el algoritmo reaprenda.

## Destino del tráfico en Venezuela

El cierre casi siempre es por **WhatsApp**. Definir:
- Objetivo de campaña: mensajes (clic a WhatsApp) suele convertir mejor que enviar a landing fría.
- **Guion de respuesta de WhatsApp** listo antes de encender: saludo, calificación, oferta, métodos de pago (Pago Móvil, Binance, Zinli, Zelle), y CTA de cierre. La pauta trae el lead; el guion lo convierte.
- Tiempo de respuesta: responder en minutos. Un lead de pauta que espera horas se enfría.

Si el destino es landing/catálogo: aplicar el truco del espejo de titular (ver optimización) y verificar que cargue rápido y sea mobile-first.

## Checklist pre-lanzamiento (universal)

- [ ] Píxel/eventos configurados y PROBADOS con una conversión real
- [ ] Guion de WhatsApp listo (si el destino es WhatsApp)
- [ ] Landing carga <3 seg y es mobile-first (si aplica)
- [ ] Parámetros UTM funcionando (si hay landing)
- [ ] Presupuesto correcto y dentro de lo acordado
- [ ] Segmentación amplia verificada (no interest-stacking accidental)
- [ ] Mínimo 3 ángulos/creativos cargados por conjunto
- [ ] Invalidadores definidos con número (ver optimización)
- [ ] Fecha cruzada con calendario (quincena/efeméride) para el arranque

## Montaje vía MCP de Meta — reglas de seguridad

Si operas sobre el MCP oficial de Meta Ads:
- Las campañas se crean **en PAUSA** por defecto. Entregar la campaña armada y pedir confirmación explícita del usuario antes de encender. Nunca encender por iniciativa propia.
- **Riesgo de baneo (por comportamiento, no por herramienta):** escritura a escala, ráfagas de cambios y saltos bruscos de presupuesto disparan bloqueos. Reglas: una cuenta a la vez (no operar varias en paralelo), aumentos ≤20%, y espaciar cambios.
- Ante cualquier cambio importante (presupuesto, público, apagar/encender), confirmar con el usuario.

Si NO hay MCP conectado: entregar la campaña **documentada campo por campo** para copiar-pegar en el Administrador de Anuncios (objetivo, público, ubicaciones, presupuesto, cada anuncio con su copy/creativo/CTA).
