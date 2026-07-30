import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));

// app/ lives one level inside the MARKETING repo (app/lib/paths.js -> app/ -> repo root)
export const REPO_ROOT = path.resolve(here, "..", "..");
export const SKILLS_DIR = path.join(REPO_ROOT, ".claude", "skills");
export const CLIENTES_DIR = path.join(REPO_ROOT, "clientes");

const SAFE_SEGMENT = /^[a-zA-Z0-9._-]+$/;

/**
 * Resolves `segments` under `root`, rejecting anything that would escape it
 * (path traversal, absolute paths, symlink tricks). Every model-supplied path
 * component must pass through this before touching the filesystem.
 */
export function safeJoin(root, ...segments) {
  for (const segment of segments) {
    if (typeof segment !== "string" || segment.length === 0) {
      throw new Error("Ruta inválida: segmento vacío.");
    }
    for (const part of segment.split(/[/\\]/)) {
      if (part === "" || part === "." || part === "..") {
        throw new Error(`Ruta inválida: "${segment}" contiene un segmento no permitido.`);
      }
    }
  }
  const resolvedRoot = path.resolve(root);
  const resolvedTarget = path.resolve(resolvedRoot, ...segments);
  if (resolvedTarget !== resolvedRoot && !resolvedTarget.startsWith(resolvedRoot + path.sep)) {
    throw new Error("Ruta inválida: intenta salir del directorio permitido.");
  }
  return resolvedTarget;
}

export function assertSafeName(name, label = "nombre") {
  if (typeof name !== "string" || !SAFE_SEGMENT.test(name)) {
    throw new Error(`${label} inválido: solo letras, números, punto, guion y guion bajo.`);
  }
  return name;
}
