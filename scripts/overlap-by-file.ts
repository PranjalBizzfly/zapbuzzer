// Groups overlap phrases (from scripts/overlap.ts output) by content file,
// skipping allowed items: real attributed quotes, client names, version facts.
// Usage: npx tsx scripts/overlap-by-file.ts .ref/overlap.txt
import { readFileSync, readdirSync } from "node:fs";

const allowed = [
  "office runs quieter", "aarav sharma", "coffee arrives before anyone asks twice", "print jobs land at my desk",
  "facilities tickets auto escalate", "acme hq northwind", "v1 15 2", "61 mb",
];
const report = readFileSync(process.argv[2], "utf8").split("\n");
const fileOf = new Map<string, string>();
const dir = "src/content/pages/";
for (const f of readdirSync(dir)) {
  if (f === "index.ts") continue;
  for (const m of readFileSync(dir + f, "utf8").matchAll(/path: "([^"]*)"/g)) fileOf.set(m[1], f);
}
const byFile = new Map<string, Map<string, string[]>>();
let page = "";
for (const line of report) {
  const pm = line.match(/^\/(\S*) —/);
  if (pm) page = pm[1];
  const hm = line.match(/^ {3}· (.*)$/);
  if (!hm || page === "") continue;
  if (allowed.some((a) => hm[1].includes(a))) continue;
  const f = fileOf.get(page) ?? "(component)";
  if (!byFile.has(f)) byFile.set(f, new Map());
  const m = byFile.get(f)!;
  m.set(page, [...(m.get(page) ?? []), hm[1]]);
}
let n = 0;
for (const [f, pages] of [...byFile].sort()) {
  console.log(`\n## ${f}`);
  for (const [p, hs] of pages) {
    console.log(`${p}:`);
    for (const h of hs) {
      n++;
      console.log(`  - ${h}`);
    }
  }
}
console.log(`\n${n} phrases to reword`);
