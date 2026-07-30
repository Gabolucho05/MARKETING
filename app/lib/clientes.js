import fs from "node:fs";
import path from "node:path";
import { CLIENTES_DIR, safeJoin, assertSafeName } from "./paths.js";

/** Lists client folders under clientes/. */
export function listClientes() {
  if (!fs.existsSync(CLIENTES_DIR)) return [];
  return fs
    .readdirSync(CLIENTES_DIR, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();
}

function walk(dir, base) {
  const out = [];
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const rel = base ? `${base}/${entry.name}` : entry.name;
    if (entry.isDirectory()) {
      out.push(...walk(path.join(dir, entry.name), rel));
    } else {
      out.push(rel);
    }
  }
  return out;
}

/** All files (relative paths) inside a client's folder. */
export function listClienteFiles(cliente) {
  assertSafeName(cliente, "cliente");
  const dir = safeJoin(CLIENTES_DIR, cliente);
  return walk(dir, "");
}

/** Content of clientes/<cliente>/EXPEDIENTE.md, or null if it doesn't exist yet. */
export function readExpediente(cliente) {
  assertSafeName(cliente, "cliente");
  const expedientePath = safeJoin(CLIENTES_DIR, cliente, "EXPEDIENTE.md");
  if (!fs.existsSync(expedientePath)) return null;
  return fs.readFileSync(expedientePath, "utf8");
}

/** Content of an arbitrary file inside a client's folder. */
export function readClienteFile(cliente, relPath) {
  assertSafeName(cliente, "cliente");
  const segments = relPath.split("/").filter(Boolean);
  const filePath = safeJoin(CLIENTES_DIR, cliente, ...segments);
  if (!fs.existsSync(filePath)) {
    throw new Error(`No existe "${relPath}" en el expediente de "${cliente}".`);
  }
  return fs.readFileSync(filePath, "utf8");
}

/** Writes (creating parent folders as needed) a file inside a client's folder. */
export function writeClienteFile(cliente, relPath, content) {
  assertSafeName(cliente, "cliente");
  const segments = relPath.split("/").filter(Boolean);
  if (segments.length === 0) {
    throw new Error("Ruta de archivo vacía.");
  }
  const filePath = safeJoin(CLIENTES_DIR, cliente, ...segments);
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, content, "utf8");
  return `Escrito clientes/${cliente}/${relPath} (${Buffer.byteLength(content, "utf8")} bytes).`;
}
