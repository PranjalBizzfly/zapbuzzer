/**
 * Rewrites `related: [...]` entries that still use pre-rename paths to the current
 * path, using the redirect list (follows chains). Only `related` arrays are touched.
 *   npx tsx scripts/fix-related-paths.ts [--write]
 */
import fs from "node:fs";
import path from "node:path";
import { legacyRedirects } from "@/content/redirects";
import { allPages } from "@/content/pages/index";

const write = process.argv.includes("--write");
const real = new Set(allPages.map((p) => p.path));
const next = new Map(legacyRedirects.map((r) => [r.source.slice(1), r.destination.slice(1)]));
const resolve = (p: string) => {
  let cur = p;
  for (let i = 0; i < 10 && !real.has(cur) && next.has(cur); i++) cur = next.get(cur)!;
  return cur;
};

let changed = 0;
const unresolved = new Set<string>();
const dir = "src/content/pages";
for (const f of fs.readdirSync(dir).filter((x) => x !== "index.ts")) {
  const file = path.join(dir, f);
  const src = fs.readFileSync(file, "utf8");
  const out = src.replace(/(["']?related["']?\s*:\s*\[)([^\]]*)(\])/g, (_m, a, inner: string, c) =>
    a +
    inner.replace(/"([^"]*)"/g, (_x, p: string) => {
      const r = resolve(p);
      if (r !== p) changed++;
      if (!real.has(r)) unresolved.add(`${p} (in ${f})`);
      return `"${r}"`;
    }) +
    c,
  );
  if (write && out !== src) fs.writeFileSync(file, out);
}
console.log(`${changed} related links ${write ? "rewritten" : "would be rewritten"}`);
if (unresolved.size) console.log(`Still not a real page:\n  ${[...unresolved].join("\n  ")}`);
