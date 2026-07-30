import fs from "node:fs";
import path from "node:path";
import { SKILLS_DIR, safeJoin, assertSafeName } from "./paths.js";

function parseFrontmatter(content) {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return { name: null, description: null };
  const fm = match[1];
  const nameMatch = fm.match(/^name:\s*(.+)\s*$/m);
  const descMatch =
    fm.match(/^description:\s*"([\s\S]*?)"\s*$/m) || fm.match(/^description:\s*(.+)\s*$/m);
  return {
    name: nameMatch ? nameMatch[1].trim() : null,
    description: descMatch ? descMatch[1].trim() : null,
  };
}

/** Lists every skill under .claude/skills with its name + description. */
export function listSkills() {
  if (!fs.existsSync(SKILLS_DIR)) return [];
  return fs
    .readdirSync(SKILLS_DIR, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => {
      const skillMdPath = path.join(SKILLS_DIR, entry.name, "SKILL.md");
      if (!fs.existsSync(skillMdPath)) return null;
      const content = fs.readFileSync(skillMdPath, "utf8");
      const { name, description } = parseFrontmatter(content);
      return { id: entry.name, name: name || entry.name, description: description || "" };
    })
    .filter(Boolean)
    .sort((a, b) => a.id.localeCompare(b.id));
}

/** Full SKILL.md content for one skill. */
export function readSkill(skillId) {
  assertSafeName(skillId, "skill");
  const skillMdPath = safeJoin(SKILLS_DIR, skillId, "SKILL.md");
  if (!fs.existsSync(skillMdPath)) {
    throw new Error(`No existe la skill "${skillId}".`);
  }
  return fs.readFileSync(skillMdPath, "utf8");
}

/** Names of the reference files a skill has under references/, if any. */
export function listReferences(skillId) {
  assertSafeName(skillId, "skill");
  const refDir = safeJoin(SKILLS_DIR, skillId, "references");
  if (!fs.existsSync(refDir)) return [];
  return fs.readdirSync(refDir).filter((f) => f.endsWith(".md"));
}

/** Content of one references/<file>.md for a given skill. */
export function readReference(skillId, fileName) {
  assertSafeName(skillId, "skill");
  assertSafeName(fileName, "archivo de referencia");
  const refPath = safeJoin(SKILLS_DIR, skillId, "references", fileName);
  if (!fs.existsSync(refPath)) {
    throw new Error(`La skill "${skillId}" no tiene la referencia "${fileName}".`);
  }
  return fs.readFileSync(refPath, "utf8");
}
