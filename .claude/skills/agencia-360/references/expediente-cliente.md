# Expediente de Cliente

Claude Code no tiene memoria persistente entre sesiones más allá de lo que queda escrito en archivos — el expediente de cliente ES el mecanismo de memoria de esta agencia, no una metáfora. Si no se guarda en disco, la próxima conversación empieza de cero y cada departamento vuelve a preguntar lo mismo. Por eso esta fase no es opcional ni burocrática: es lo que hace que Diseño no repita las preguntas que Estrategia ya respondió, y que Analítica sepa qué campaña de Paid Media está midiendo.

## 1. Estructura de carpeta

```
clientes/<nombre-cliente>/
├── EXPEDIENTE.md                 ← resumen ejecutivo, fuente de verdad rápida
├── 01-estrategia/
│   ├── brief.md                  (de estrategia-planificacion)
│   └── calendario.md
├── 02-diseno/
│   ├── sistema-de-marca.md       (de diseno-creativo)
│   └── piezas/                   (specs/DESIGN.md o prompts entregados)
├── 03-digital/
│   ├── paid-media/               (campañas, ángulos, estructura)
│   ├── community-manager/        (calendario de contenido, registro de comunidad)
│   └── automatizacion-ia/        (diseño del agente, base de conocimiento)
└── 04-analitica/
    ├── plan-de-medicion.md       (de analitica-metricas)
    └── reportes/                 (un archivo por periodo: 2026-07-reporte.md, etc.)
```

Usar nombres de cliente consistentes (slug en minúsculas, sin espacios) para que la ruta sea predecible entre sesiones: `clientes/manotv/`, `clientes/cliente-x/`.

## 2. Plantilla de EXPEDIENTE.md

```markdown
# Expediente — [Nombre del cliente]

## Datos generales
- Rubro/categoría: [...]
- Fecha de inicio de la relación: [...]
- Contacto principal: [...]

## Resumen de negocio (una vez definido por Estrategia)
[2-3 líneas: qué vende, a quién, qué lo diferencia — extraído del brief en 01-estrategia/]

## Estado por departamento

| Departamento | Estado | Última actualización | Notas |
|---|---|---|---|
| 1. Estrategia | [Sin iniciar / En curso / Al día] | [fecha] | [ej. brief de lanzamiento Q3 aprobado] |
| 2. Diseño | [...] | [...] | [ej. sistema de marca definido, paleta X] |
| 3. Digital/RRSS | [...] | [...] | [ej. campaña Meta Ads activa desde el 12/07] |
| 4. Analítica | [...] | [...] | [ej. tracking GA4 validado, reporte mensual pendiente] |

## Invalidadores activos (cruzados entre departamentos)
[Lista de invalidadores acordados que, de cumplirse, disparan una decisión —
ej. "si el ROAS ciego cae bajo 3x por 2 semanas → escalar a Estrategia"]

## Historial de decisiones relevantes
- [fecha] — [decisión tomada y por qué, en una línea]

## Próximos pasos
- [ ] [tarea concreta, con departamento responsable]
```

## 3. Cuándo crear vs. actualizar

- **Crear**: primera vez que se trabaja con este cliente en `agencia-360`, o si el usuario confirma que no existe expediente previo.
- **Actualizar** (no reemplazar desde cero): cada vez que un departamento entrega un resultado — el router anota en `EXPEDIENTE.md` el estado nuevo y guarda el entregable completo en la subcarpeta correspondiente.
- **Nunca** dejar que un departamento produzca algo sin que quede copia en el expediente — un brief que solo existió en el chat se pierde en la próxima sesión.

## 4. Cómo lo usan los departamentos al ser invocados

- `estrategia-planificacion` lee/escribe en `01-estrategia/`.
- `diseno-creativo` lee `01-estrategia/brief.md` (mensaje/posicionamiento) y `02-diseno/sistema-de-marca.md` (si ya existe) antes de producir piezas nuevas.
- `paid-media`/`community-manager`/`automatizacion-ia` leen `01-estrategia/` (objetivo, presupuesto, invalidadores) y `02-diseno/` (piezas y sistema de marca disponibles) antes de ejecutar.
- `analitica-metricas` lee qué campañas/piezas están activas en `03-digital/` para saber qué está midiendo, y escribe sus reportes en `04-analitica/reportes/`.

## 5. Checklist antes de enrutar cualquier trabajo

- [ ] ¿Existe el expediente del cliente? Si no, crearlo primero (§2).
- [ ] ¿Se leyó el `EXPEDIENTE.md` y la carpeta del/los departamento(s) relevante(s) antes de preguntarle algo al usuario que ya podría estar documentado?
- [ ] Al cerrar la tarea, ¿se actualizó el expediente con el entregable y el estado nuevo?
