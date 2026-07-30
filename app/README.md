# Agencia 360 — Chat independiente

Una interfaz de chat real, independiente de Claude Code, que corre por su cuenta contra la API de Claude. No es un mockup: escribe aquí y la agencia ejecuta trabajo de verdad — lee las skills de `.claude/skills/` de este repo como su propia base de conocimiento, y lee/escribe expedientes de cliente reales en `clientes/`.

## Qué es y qué no es

- **Es**: una app Node/Express que arma el prompt del sistema con los 4 departamentos + el router (`agencia-360`), le da al modelo herramientas para leer cada `SKILL.md`/`references/*.md` bajo demanda (igual que hace Claude Code) y para leer/escribir archivos dentro del expediente de un cliente en `clientes/<cliente>/`.
- **No es**: un conector en vivo a Meta Ads, Google Ads, GA4 o WhatsApp Business API. Todo lo que necesite datos de esas plataformas se lo pegas o importas tú — ver `AGENCIA-360-ARQUITECTURA.md` en la raíz del repo para el mapa completo de qué conectores harían falta por departamento.

## Requisitos

- Node.js 20+ (probado con Node 22).
- Tu propia clave de la API de Claude (**no** la credencial de Claude Code — esta app corre fuera de Claude Code y necesita su propia clave). Consíguela en <https://console.anthropic.com>.

## Setup

```bash
cd app
npm install
cp .env.example .env
# Edita .env y pon tu ANTHROPIC_API_KEY real
npm run start:env
```

Sin `.env`, exporta la variable manualmente y usa `npm start`:

```bash
export ANTHROPIC_API_KEY=sk-ant-...
npm start
```

Abre `http://localhost:3000`.

## Cómo funciona por dentro

- `server.js` — arma el system prompt (identidad de Director General + índice de skills), expone `POST /api/chat`, y corre el **Tool Runner** de la SDK de Anthropic (`client.beta.messages.toolRunner`) con el modelo `claude-opus-5` por defecto.
- `lib/skills.js` — lee `.claude/skills/*/SKILL.md` y sus `references/*.md`, con las mismas herramientas (`list_skills`, `read_skill`, `read_skill_reference`) que el modelo usa para "activar" la skill correcta antes de responder — el mismo patrón que usa Claude Code, reimplementado aquí sin depender de él.
- `lib/clientes.js` — lee/escribe el expediente de cliente (`clientes/<cliente>/EXPEDIENTE.md` y el resto de su carpeta), con las mismas rutas y estructura que describe `agencia-360/references/expediente-cliente.md`. Toda ruta que llega del modelo se valida contra path traversal antes de tocar el disco (`lib/paths.js`).
- El frontend (`public/`) es un chat simple: guarda el historial completo de la conversación en `localStorage` y se lo reenvía al servidor en cada turno (la API es sin estado — el servidor no guarda nada entre requests).

## Modelo y costo

Por defecto usa `claude-opus-5` con `thinking: adaptive` y `effort: medium`. Cambia el modelo con la variable `AGENCIA_MODEL` (ej. `AGENCIA_MODEL=claude-sonnet-5` para reducir costo). Cada mensaje que escribes consume tokens de tu propia cuenta de la API — no hay límite gratuito más allá del de tu cuenta.

## Desplegarla (opcional)

Es una app Node/Express estándar — corre en cualquier host que soporte Node (Render, Railway, Fly.io, un VPS propio, etc.). Pasos generales:

1. Sube esta carpeta (`app/`) junto con `.claude/skills/` y `clientes/` del repo — los necesita en disco para leer las skills y los expedientes.
2. Define `ANTHROPIC_API_KEY` como variable de entorno en el host.
3. `npm install && npm start`.

Si el host es efímero (contenedores que se reinician sin disco persistente), `clientes/` no sobrevivirá reinicios — para producción real, considera mover `lib/clientes.js` a una base de datos o a un volumen persistente en vez de archivos planos.

## Próximos pasos razonables

- **Conectores en vivo**: agregar tools reales para Meta Ads/Google Ads/GA4/WhatsApp Business API cuando tengas las credenciales de desarrollador de cada plataforma (ver la sección de conectores MCP en `AGENCIA-360-ARQUITECTURA.md`).
- **Streaming**: hoy la respuesta llega completa al final; para respuestas largas, cambiar a `client.beta.messages.toolRunner({..., stream: true})` y transmitir texto incremental al frontend.
- **Autenticación**: esta app no tiene login — si la vas a exponer más allá de tu propia máquina, agrega autenticación antes de desplegarla públicamente.
