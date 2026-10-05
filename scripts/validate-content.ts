// Run: npx tsx scripts/validate-content.ts
// Checks every manifest path has content, related links resolve,
// titles/H1s/descriptions are unique, and reports word counts.
import { allPages } from "../src/content/pages";
import { allPaths } from "../src/content/manifest";
import type { PageContent, Section } from "../src/content/types";

const words = (s: string) => s.split(/\s+/).filter(Boolean).length;
function sectionText(s: Section): string {
  return JSON.stringify(s).replace(/"(type|visual|tone)":"[^"]*"/g, "").replace(/"[a-zA-Z]+":/g, " ").replace(/[{}\[\]",]/g, " ");
}
export const pageWords = (p: PageContent) =>
  words([p.lead, ...p.sections.map(sectionText), ...(p.faqs ?? []).flatMap((f) => [f.q, f.a])].join(" "));

const errors: string[] = [];
const byPath = new Map<string, PageContent>();
for (const p of allPages) {
  if (byPath.has(p.path)) errors.push(`duplicate path: ${p.path}`);
  byPath.set(p.path, p);
  if (!allPaths.includes(p.path)) errors.push(`not in manifest: ${p.path}`);
  for (const r of p.related) if (!allPaths.includes(r)) errors.push(`${p.path}: bad related ${r}`);
}
for (const path of allPaths) if (path !== "" && !byPath.has(path)) errors.push(`missing content: ${path}`);
for (const key of ["title", "h1", "description"] as const) {
  const seen = new Map<string, string>();
  for (const p of allPages) {
    const v = p[key].toLowerCase();
    if (seen.has(v)) errors.push(`duplicate ${key}: ${p.path} & ${seen.get(v)}`);
    seen.set(v, p.path);
  }
}
const counts = allPages.map((p) => [p.path, pageWords(p)] as const).sort((a, b) => a[1] - b[1]);
console.log(`manifest paths: ${allPaths.length}, content pages: ${allPages.length} (+ homepage)`);
console.log(`total words: ${counts.reduce((a, [, n]) => a + n, 0)}`);
const minFor = (p: string) => p === "sitemap" ? 0 : (/^(workflows\/|sign-|contact|sitemap)/.test(p) ? 550 : p.startsWith("resources/") && p.endsWith("guide") ? 1200 : 700);
const short = counts.filter(([p, n]) => n < minFor(p));
console.log(`under target (${short.length}):`);
for (const [p, n] of short) console.log(`  ${n}\t${p} (min ${minFor(p)})`);
if (errors.length) {
  console.log(`\nERRORS (${errors.length}):\n  ` + errors.join("\n  "));
  process.exitCode = 1;
}
