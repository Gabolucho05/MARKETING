import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";
import Anthropic from "@anthropic-ai/sdk";

import { listSkills } from "./lib/skills.js";
import { tools } from "./lib/tools.js";

const here = path.dirname(fileURLToPath(import.meta.url));
const MODEL = process.env.AGENCIA_MODEL || "claude-opus-5";
const PORT = process.env.PORT || 3000;

const client = new Anthropic(); // resolves ANTHROPIC_API_KEY (or another SDK-supported credential) from the environment

function buildSystemPrompt() {
  const skillList = listSkills()
    .map((s) => `- \`${s.id}\`: ${s.description}`)
    .join("\n");

  return `Eres el Director General de "Agencia 360", una agencia de marketing venezolana que opera a través de 6 skills especializadas (una por departamento, más este router). Estás corriendo como una aplicación independiente fuera de Claude Code — nadie más te da instrucciones; el usuario que te escribe es tu única fuente de trabajo.

## Skills disponibles (departamentos)
${skillList}

## Cómo trabajas
1. Antes de responder algo que caiga dentro del dominio de una skill, usa \`read_skill\` para cargar su SKILL.md completo y sigue su flujo de trabajo, principios y reglas al pie de la letra — no improvises un sustituto genérico de su criterio experto.
2. Si el SKILL.md de esa skill indica consultar un archivo de \`references/\` en cierto paso, usa \`list_skill_references\` / \`read_skill_reference\` para leerlo antes de continuar ese paso.
3. Si el pedido involucra a un cliente específico, usa \`list_clientes\`, \`read_expediente\` y \`list_cliente_files\` para cargar su contexto antes de preguntar algo que el expediente ya podría tener documentado.
4. Cuando produzcas un entregable real (brief, sistema de marca, estructura de campaña, reporte, plan de medición, etc.), déjalo por escrito con \`write_cliente_file\` dentro del expediente del cliente correspondiente (crea el cliente si no existe, empezando por \`EXPEDIENTE.md\`) — no lo dejes solo en el chat, que se pierde entre sesiones.
5. Si el pedido abarca más de un departamento (un lanzamiento, una campaña integral), sigue el flujo Estrategia → Diseño → Digital/RRSS → Analítica con un checkpoint de confirmación del usuario entre cada uno, tal como describe la skill \`agencia-360\`.
6. Nunca publiques, pautees, ni envíes nada de forma autónoma — esta app no tiene conectores en vivo a plataformas externas; tu trabajo es producir el plan/pieza/reporte y dejarlo documentado, no ejecutarlo en una plataforma real.
7. Sé honesto sobre lo que esta app no hace todavía: no tiene conectores en vivo a Meta Ads/Google Ads/GA4/WhatsApp Business API — cualquier dato de esas plataformas lo importa o pega el propio usuario.

Español venezolano de agencia: directo, sin corporativismo hueco.`;
}

const SYSTEM_PROMPT = buildSystemPrompt();

const app = express();
app.use(express.json({ limit: "5mb" }));
app.use(express.static(path.join(here, "public")));

app.post("/api/chat", async (req, res) => {
  const { messages } = req.body || {};
  if (!Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: "Falta 'messages' (array no vacío)." });
  }

  try {
    const runner = client.beta.messages.toolRunner({
      model: MODEL,
      max_tokens: 8000,
      system: SYSTEM_PROMPT,
      thinking: { type: "adaptive" },
      output_config: { effort: "medium" },
      tools,
      messages,
      max_iterations: 12,
    });

    const finalMessage = await runner.runUntilDone();

    if (finalMessage.stop_reason === "refusal") {
      return res.json({
        messages: runner.params.messages,
        reply: "(La solicitud fue declinada por los filtros de seguridad del modelo — reformúlala o pide otra cosa.)",
        refused: true,
      });
    }

    const replyText = finalMessage.content
      .filter((block) => block.type === "text")
      .map((block) => block.text)
      .join("\n\n");

    res.json({
      messages: runner.params.messages,
      reply: replyText || "(Sin texto en la respuesta final — revisa la consola del servidor.)",
    });
  } catch (err) {
    console.error(err);
    const isAuth = /api[_-]?key|authentication/i.test(String(err?.message || ""));
    res.status(500).json({
      error: isAuth
        ? "No se pudo autenticar con la API de Claude. Define ANTHROPIC_API_KEY (ver .env.example) y reinicia el servidor."
        : `Error del servidor: ${err?.message || err}`,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Agencia 360 — chat independiente corriendo en http://localhost:${PORT}`);
  console.log(`Modelo: ${MODEL}`);
});
