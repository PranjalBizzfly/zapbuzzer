/**
 * Checks that every page's 8 FAQs actually render in the served HTML.
 *   npx tsx scripts/faq-render-check.ts http://localhost:3000
 */
import { allPages } from "@/content/pages/index";
import { standaloneFaqs } from "@/content/standaloneFaqs";

const base = process.argv[2] ?? "http://localhost:3000";
const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
const pages = [
  ...allPages.map((p) => ({ url: `/${p.path}`, faqs: p.faqs ?? [] })),
  ...Object.entries(standaloneFaqs).map(([k, faqs]) => ({ url: k === "/" ? "/" : `/${k}`, faqs })),
];

const fails: string[] = [];
let i = 0;
async function worker() {
  while (i < pages.length) {
    const p = pages[i++];
    const res = await fetch(base + p.url);
    const html = await res.text();
    const missing = p.faqs.filter((f) => !html.includes(esc(f.q)) && !html.includes(f.q));
    if (res.status !== 200 || missing.length) fails.push(`${p.url} [${res.status}] missing ${missing.length}: ${missing.map((m) => m.q).join(" | ")}`);
  }
}
Promise.all(Array.from({ length: 4 }, worker)).then(() => {
  console.log(`${pages.length} pages fetched`);
  console.log(fails.length ? fails.join("\n") : "All FAQs render on every page.");
});
