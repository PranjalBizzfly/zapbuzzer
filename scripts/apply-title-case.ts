/**
 * Applies Title Case to short-text fields in the content data (headings, titles,
 * eyebrows, labels, card titles, table headers, FAQ questions, nav labels).
 * Paragraph fields (paragraphs, body, bullets, points, answers…) are never touched.
 *   npx tsx scripts/apply-title-case.ts          → dry run (counts + samples)
 *   npx tsx scripts/apply-title-case.ts --write  → apply
 */
import fs from "node:fs";
import path from "node:path";
import { titleCase } from "@/lib/titleCase";

const write = process.argv.includes("--write");
const SHORT_KEYS = "heading|eyebrow|title|h1|persona|label|role|metric|term|q|name|cta";
const STR = `"((?:[^"\\\\]|\\\\.)*)"`;
// Keys may be bare (heading:) or JSON-quoted ("heading":).
const keyRe = new RegExp(`("?)\\b(${SHORT_KEYS})\\1:(\\s*)${STR}`, "g");
// Table headers / comparison columns: arrays of plain strings only, page content only
// (never nav.ts, whose `columns` hold link objects with hrefs).
const arrRe = /("?)\b(headers|columns)\1:(\s*)\[(\s*"[^\]{]*)\]/g;
const blogHeadRe = new RegExp(`(\\{\\s*"?type"?:\\s*"h[2-4]",\\s*"?text"?:\\s*)${STR}`, "g");
const tupleRe = new RegExp(`\\[(\\s*)"([^"]*)",(\\s*)${STR}(\\s*)\\]`, "g");
const strRe = new RegExp(STR, "g");

const files = [
  ...fs.readdirSync("src/content/pages").filter((f) => f !== "index.ts").map((f) => path.join("src/content/pages", f)),
  "src/content/standaloneFaqs.ts",
  "src/content/manifest.ts",
  "src/lib/blog-posts.ts",
  "src/lib/nav.ts",
  "src/lib/companyPages.ts",
];

// React files: only keys/props that are always visible short text. Never `name` (form
// field names), `role` (ARIA) or `aria-label` (not visible).
const TSX_KEYS = "heading|eyebrow|title|label|q|subtitle|cta";
const tsxKeyRe = new RegExp(`(?<![-\\w])(${TSX_KEYS})(:\\s*|=\\{?\\s*)${STR}`, "g");
const walk = (d: string): string[] =>
  fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? walk(path.join(d, e.name)) : e.name.endsWith(".tsx") ? [path.join(d, e.name)] : []));
const tsxFiles = [...walk("src/app"), ...walk("src/components")];

let total = 0;
const samples: string[] = [];
const tc = (s: string) => {
  const out = titleCase(s);
  if (out !== s) {
    total++;
    if (samples.length < 40) samples.push(`  ${s}\n→ ${out}`);
  }
  return out;
};

for (const f of files) {
  let src = fs.readFileSync(f, "utf8");
  const before = total;
  src = src.replace(keyRe, (_m, qt, k, ws, s) => `${qt}${k}${qt}:${ws}"${tc(s)}"`);
  if (f.startsWith(path.join("src", "content")))
    src = src.replace(arrRe, (_m, qt, k, ws, inner: string) => `${qt}${k}${qt}:${ws}[${inner.replace(strRe, (_x, s) => `"${tc(s)}"`)}]`);
  src = src.replace(blogHeadRe, (_m, pre, s) => `${pre}"${tc(s)}"`);
  if (f.endsWith("manifest.ts")) src = src.replace(tupleRe, (_m, a, p, b, s, c) => `[${a}"${p}",${b}"${tc(s)}"${c}]`);
  if (total > before) {
    console.log(`${String(total - before).padStart(4)}  ${f}`);
    if (write) fs.writeFileSync(f, src);
  }
}
for (const f of tsxFiles) {
  let src = fs.readFileSync(f, "utf8");
  const before = total;
  src = src.replace(tsxKeyRe, (_m, k, sep, s) => `${k}${sep}"${tc(s)}"`);
  if (total > before) {
    console.log(`${String(total - before).padStart(4)}  ${f}`);
    if (write) fs.writeFileSync(f, src);
  }
}
console.log(`\n${total} strings ${write ? "updated" : "would change"}`);
if (!write) console.log(samples.join("\n"));
