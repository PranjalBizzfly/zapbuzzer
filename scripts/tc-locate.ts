/** Finds where leftover short strings live in React/TS source (JSX text or string literals). */
import fs from "node:fs";
import path from "node:path";
const walk = (d: string): string[] =>
  fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? walk(path.join(d, e.name)) : /\.(tsx?|ts)$/.test(e.name) ? [path.join(d, e.name)] : []));
const files = [...walk("src/app"), ...walk("src/components"), ...walk("src/lib")];
const needles = process.argv.slice(2);
for (const n of needles) {
  const hits: string[] = [];
  for (const f of files) {
    fs.readFileSync(f, "utf8").split(/\r?\n/).forEach((l, i) => {
      if (l.includes(n)) hits.push(`${f}:${i + 1}: ${l.trim().slice(0, 150)}`);
    });
  }
  console.log(`## ${n}\n${hits.join("\n") || "  (not found as one string)"}`);
}
