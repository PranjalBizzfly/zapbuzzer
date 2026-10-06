/**
 * FAQ audit: every page must have exactly 8 FAQs, with no duplicate questions
 * within a page and no question reused across pages.
 *   npx tsx scripts/faq-audit.ts
 */
import { allPages } from "@/content/pages/index";
import { standaloneFaqs } from "@/content/standaloneFaqs";

const REQUIRED = 8;
const all: { path: string; faqs: { q: string; a: string }[] }[] = [
  ...allPages.map((p) => ({ path: p.path, faqs: p.faqs ?? [] })),
  ...Object.entries(standaloneFaqs).map(([path, faqs]) => ({ path, faqs })),
];

const problems: string[] = [];
const seen = new Map<string, string>();
const norm = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
for (const p of all) {
  if (p.faqs.length !== REQUIRED) problems.push(`${p.path}: ${p.faqs.length} FAQs`);
  const local = new Set<string>();
  for (const f of p.faqs) {
    const k = norm(f.q);
    if (!f.q.trim() || !f.a.trim()) problems.push(`${p.path}: empty question or answer`);
    if (local.has(k)) problems.push(`${p.path}: duplicate question "${f.q}"`);
    local.add(k);
    const other = seen.get(k);
    if (other && other !== p.path) problems.push(`${p.path}: question also on ${other} — "${f.q}"`);
    seen.set(k, p.path);
  }
}
console.log(`${all.length} pages checked`);
if (problems.length) {
  console.log(problems.join("\n"));
  process.exit(1);
}
console.log(`All pages have exactly ${REQUIRED} unique FAQs.`);
