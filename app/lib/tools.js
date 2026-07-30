import { betaTool } from "@anthropic-ai/sdk/helpers/beta/json-schema";
import * as skills from "./skills.js";
import * as clientes from "./clientes.js";

function ok(text) {
  return typeof text === "string" ? text : JSON.stringify(text, null, 2);
}

function fail(err) {
  return { isError: true, text: err instanceof Error ? err.message : String(err) };
}

// The tool runner's `run` may return a plain string, or (per BetaRunnableTool)
// a string/error pair we encode as JSON so the model can see is_error-style failures
// without us needing the lower-level content-block shape.
function wrap(fn) {
  return async (args) => {
    try {
      return ok(await fn(args));
    } catch (err) {
      const { text } = fail(err);
      return `ERROR: ${text}`;
    }
  };
}

export const tools = [
  betaTool({
    name: "list_skills",
    description:
      "Lista las skills de la agencia disponibles en .claude/skills (departamento al que pertenece cada una, vía su nombre y descripción). Úsala para decidir qué skill(s) aplican al pedido del usuario antes de responder con criterio experto.",
    inputSchema: { type: "object", properties: {}, additionalProperties: false },
    run: wrap(() => skills.listSkills()),
  }),

  betaTool({
    name: "read_skill",
    description:
      "Lee el SKILL.md completo de una skill (su identidad, principios, flujo de trabajo y reglas). Actívala mentalmente y sigue su flujo antes de responder sobre ese tema.",
    inputSchema: {
      type: "object",
      properties: {
        skill_id: { type: "string", description: "Id de la skill, ej. 'paid-media', 'diseno-creativo'." },
      },
      required: ["skill_id"],
      additionalProperties: false,
    },
    run: wrap(({ skill_id }) => skills.readSkill(skill_id)),
  }),

  betaTool({
    name: "list_skill_references",
    description: "Lista los archivos references/*.md de una skill (guías profundas que el SKILL.md referencia paso a paso).",
    inputSchema: {
      type: "object",
      properties: { skill_id: { type: "string" } },
      required: ["skill_id"],
      additionalProperties: false,
    },
    run: wrap(({ skill_id }) => skills.listReferences(skill_id)),
  }),

  betaTool({
    name: "read_skill_reference",
    description:
      "Lee un archivo references/<archivo>.md de una skill para el detalle profundo que el SKILL.md indica consultar en cierto paso de su flujo.",
    inputSchema: {
      type: "object",
      properties: {
        skill_id: { type: "string" },
        file_name: { type: "string", description: "Nombre exacto del archivo, ej. 'investigacion-competencia.md'." },
      },
      required: ["skill_id", "file_name"],
      additionalProperties: false,
    },
    run: wrap(({ skill_id, file_name }) => skills.readReference(skill_id, file_name)),
  }),

  betaTool({
    name: "list_clientes",
    description: "Lista los clientes que ya tienen expediente (carpeta) en clientes/.",
    inputSchema: { type: "object", properties: {}, additionalProperties: false },
    run: wrap(() => clientes.listClientes()),
  }),

  betaTool({
    name: "list_cliente_files",
    description: "Lista todos los archivos dentro del expediente de un cliente (clientes/<cliente>/), para saber qué ya existe antes de preguntar o de escribir algo nuevo.",
    inputSchema: {
      type: "object",
      properties: { cliente: { type: "string", description: "Slug del cliente, ej. 'manotv'." } },
      required: ["cliente"],
      additionalProperties: false,
    },
    run: wrap(({ cliente }) => clientes.listClienteFiles(cliente)),
  }),

  betaTool({
    name: "read_expediente",
    description: "Lee clientes/<cliente>/EXPEDIENTE.md (el resumen ejecutivo del cliente: estado por departamento, invalidadores, historial, próximos pasos). Devuelve null si el cliente no tiene expediente todavía.",
    inputSchema: {
      type: "object",
      properties: { cliente: { type: "string" } },
      required: ["cliente"],
      additionalProperties: false,
    },
    run: wrap(({ cliente }) => clientes.readExpediente(cliente) ?? "(sin expediente todavía)"),
  }),

  betaTool({
    name: "read_cliente_file",
    description: "Lee un archivo específico dentro del expediente de un cliente (ej. '01-estrategia/brief.md').",
    inputSchema: {
      type: "object",
      properties: {
        cliente: { type: "string" },
        ruta: { type: "string", description: "Ruta relativa dentro de la carpeta del cliente." },
      },
      required: ["cliente", "ruta"],
      additionalProperties: false,
    },
    run: wrap(({ cliente, ruta }) => clientes.readClienteFile(cliente, ruta)),
  }),

  betaTool({
    name: "write_cliente_file",
    description:
      "Crea o actualiza un archivo dentro del expediente de un cliente (clientes/<cliente>/<ruta>) — ej. el brief de estrategia, el sistema de marca, un reporte de analítica, o el propio EXPEDIENTE.md. Crea las carpetas necesarias. Úsalo para dejar constancia real de cualquier entregable en vez de solo mostrarlo en el chat.",
    inputSchema: {
      type: "object",
      properties: {
        cliente: { type: "string" },
        ruta: { type: "string", description: "Ruta relativa, ej. '01-estrategia/brief.md'." },
        contenido: { type: "string", description: "Contenido completo del archivo en Markdown." },
      },
      required: ["cliente", "ruta", "contenido"],
      additionalProperties: false,
    },
    run: wrap(({ cliente, ruta, contenido }) => clientes.writeClienteFile(cliente, ruta, contenido)),
  }),
];
