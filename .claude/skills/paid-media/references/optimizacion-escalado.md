# Medición, Optimización y Escalado (Paso 5)

Con la campaña montada y corriendo (Paso 4), esta fase define cómo se lee el rendimiento y qué decisión numérica corresponde a cada resultado. Igual que en trading: cada campaña es una posición con tesis, entrada, invalidadores y reglas de salida — no discreción del día a día.

## 1. KPI maestro por objetivo

No todos los objetivos se miden con el mismo número. Definir el KPI maestro ANTES de lanzar, no después de ver los resultados:

| Objetivo de campaña | KPI maestro | KPI secundario a vigilar |
|---|---|---|
| Generación de leads/chats | CPL (costo por lead/chat iniciado) | Tasa de calificación del lead (¿cuántos cierran?) |
| Ventas directas (checkout) | CPA / ROAS | Ticket promedio |
| Catálogo/Shop | ROAS | Frecuencia de recompra |
| Awareness/tráfico a WhatsApp | CPM + tasa de inicio de conversación | Tiempo de respuesta del negocio |

El ROAS que reporta la plataforma no es el número final — para el reporte de negocio completo (ROI, ROAS ciego, CAC, LTV), usar la skill `analytics` (sección "ROI, ROAS & Performance Dashboards"), que consolida esto con el resto de canales.

## 2. Reglas de matar / mantener / escalar

Definir umbrales numéricos explícitos junto con el cliente ANTES de lanzar — no decidir "a ojo" cuando ya hay plata gastada.

**Matar (apagar el anuncio/conjunto):**
- CPL/CPA supera el techo acordado por 3 días consecutivos con gasto significativo (mínimo ~2-3x el CPA objetivo acumulado, para no matar por varianza normal de pocos datos).
- CTR de un anuncio específico cae marcadamente por debajo del resto del conjunto tras haber corrido lo suficiente para salir de aprendizaje — señal de fatiga de ese creativo puntual (no necesariamente de todo el conjunto).

**Mantener (dejar correr, sin tocar):**
- Rendimiento dentro del rango esperado, sin señales de fatiga (frecuencia controlada, CTR estable).
- Conjunto todavía en fase de aprendizaje (menos de ~50 conversiones acumuladas) — resistir la tentación de optimizar antes de tener data suficiente.

**Escalar (ver §3):**
- CPA/CPL consistentemente por debajo del objetivo con volumen suficiente para confiar en el número (no un solo día bueno).

## 3. Escalado por caja neta, no por ROAS bonito

Principio no negociable #5 de `SKILL.md`: un ROAS de 10 gastando $300 rinde menos plata total que un ROAS de 5 gastando $3.000. La meta es acercarse al CPA de equilibrio del negocio, no perseguir el ROAS más alto posible.

**Reglas de escalado:**
- Subir presupuesto en incrementos de **máximo 20% por movimiento**, nunca duplicar de un día para otro — un salto brusco reinicia la fase de aprendizaje y puede degradar el rendimiento que se buscaba escalar.
- Espaciar los incrementos (dar 2-3 días entre subidas para que el conjunto vuelva a estabilizar antes de la siguiente).
- Escalar horizontalmente (nuevos conjuntos con el mismo ángulo ganador en audiencias/geografías adicionales) como alternativa a escalar solo verticalmente (subir presupuesto al mismo conjunto) cuando el conjunto empieza a mostrar señales de fatiga por escala.
- Detener el escalado cuando el CPA se acerca al punto de equilibrio del negocio (cubre costo + margen mínimo aceptable) — escalar más allá de ese punto sin mejorar eficiencia destruye margen, no lo construye.

## 4. Retargeting — los 4 componentes de la ventana

Toda campaña de retargeting define explícitamente:

1. **Audiencia**: quién entra (visitantes de landing, agregaron al carrito, iniciaron chat sin cerrar, compradores para upsell).
2. **Ventana temporal**: hace cuánto ocurrió la acción (ej. últimos 7 días para intención alta, últimos 30-90 días para nutrición más fría).
3. **Exclusión**: quién sale de la audiencia (compradores ya convertidos deben excluirse de campañas de conversión, salvo que sea explícitamente una campaña de recompra/upsell).
4. **Mensaje**: el retargeting NO reutiliza el mismo creativo de prospección fría — el ángulo cambia porque la persona ya conoce el producto (objeción específica, urgencia real de cierre, prueba social adicional).

El retargeting suele tener el CPA más bajo del embudo — protegerlo con presupuesto dedicado, no dejar que compita por presupuesto contra la prospección fría dentro del mismo CBO sin monitoreo.

## 5. Invalidadores medibles (obligatorio en todo reporte)

Mismo lenguaje que `estrategia-planificacion` y `analytics`: cada campaña activa debe tener condiciones numéricas explícitas que disparan pausa o pivote, declaradas antes de que ocurran, no decididas en caliente:

- "Si el CPL supera $X por 3 días seguidos con gasto acumulado significativo → pausar y revisar ángulo/segmentación."
- "Si la frecuencia supera Y en el conjunto sin conversión creciente → señal de fatiga, refrescar creativos antes de seguir gastando."
- "Si el CPA se acerca al punto de equilibrio sin margen → detener escalado, no seguir subiendo presupuesto."

## 6. Checklist de autocrítica antes de reportar

- [ ] ¿Hay tracking confiable detrás de cada número reportado?
- [ ] ¿El presupuesto real del cliente aguanta la estructura actual?
- [ ] ¿Se está optimizando por ROAS de plataforma o por caja neta del negocio?
- [ ] ¿Los invalidadores tienen número, no solo "monitorear de cerca"?
- [ ] ¿El guion de cierre por WhatsApp está funcionando, o el problema está después del clic (no en la pauta)?
