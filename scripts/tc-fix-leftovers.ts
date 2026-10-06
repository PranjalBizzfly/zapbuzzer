/**
 * Title-cases leftover short strings reported by case-audit, but only where each one
 * appears in React/TS source as a COMPLETE string literal ("Label") or a COMPLETE JSX
 * text node (>Label<). Partial matches inside sentences are never touched.
 *   npx tsx scripts/case-audit.ts URL > audit.txt; npx tsx scripts/tc-fix-leftovers.ts audit.txt [--write]
 */
import fs from "node:fs";
import path from "node:path";
import { titleCase } from "@/lib/titleCase";

const write = process.argv.includes("--write");
const report = fs.readFileSync(process.argv[2], "utf8");
const strings = [...report.matchAll(/^\s*\d+×\s{2}(.+?)\s{3}\[/gm)].map((m) => m[1]).filter((s) => !s.startsWith("[100+"));

const walk = (d: string): string[] =>
  fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? walk(path.join(d, e.name)) : /\.tsx?$/.test(e.name) ? [path.join(d, e.name)] : []));
const files = [...walk("src/app"), ...walk("src/components"), ...walk("src/lib")].filter((f) => !f.endsWith("titleCase.ts"));
const esc = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const unresolved: string[] = [];
let changed = 0;
for (const s of strings) {
  const t = titleCase(s);
  if (t === s) continue;
  const lit = new RegExp(`(["'\`])${esc(s)}\\1`, "g"); // whole literal
  const jsx = new RegExp(`(>\\s*)${esc(s)}(\\s*<)`, "g"); // whole JSX text node
  let found = false;
  for (const f of files) {
    const src = fs.readFileSync(f, "utf8");
    const out = src.replace(lit, (_m, q) => `${q}${t}${q}`).replace(jsx, (_m, a, b) => `${a}${t}${b}`);
    if (out !== src) {
      found = true;
      changed++;
      console.log(`${f}: "${s}" → "${t}"`);
      if (write) fs.writeFileSync(f, out);
    }
  }
  if (!found) unresolved.push(s);
}
console.log(`\n${changed} file edits${write ? "" : " (dry run)"}`);
console.log(`Needs manual fix (built from pieces):\n${unresolved.map((u) => "  " + u).join("\n")}`);
