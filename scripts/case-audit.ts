/**
 * Capitalisation audit on the served HTML of every page.
 *  - Short text (h1–h6, buttons, form labels, table headers, header/footer nav links)
 *    must be in Title Case.
 *  - Paragraphs of 100+ words must be in sentence case (not Title Case).
 *   npx tsx scripts/case-audit.ts http://localhost:3000
 */
import { allPages } from "@/content/pages/index";
import { standaloneFaqs } from "@/content/standaloneFaqs";
import { allPosts } from "@/lib/blog";
import { titleCase } from "@/lib/titleCase";

const base = process.argv[2] ?? "http://localhost:3000";
const urls = [
  ...allPages.map((p) => `/${p.path}`),
  ...Object.keys(standaloneFaqs).map((k) => (k === "/" ? "/" : `/${k}`)),
  ...allPosts.map((p) => `/blog/${p.slug}`),
];

const decode = (s: string) =>
  s.replace(/<[^>]+>/g, " ").replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&nbsp;/g, " ").replace(/\s+/g, " ").trim();

const SHORT = [/<(h[1-6])\b[^>]*>([\s\S]*?)<\/\1>/g, /<(button)\b[^>]*>([\s\S]*?)<\/\1>/g, /<(label)\b[^>]*>([\s\S]*?)<\/\1>/g, /<(th)\b[^>]*>([\s\S]*?)<\/\1>/g, /<(summary)\b[^>]*>([\s\S]*?)<\/\1>/g];
const NAV = /<(nav|footer|header)\b[\s\S]*?<\/\1>/g;
const LINK = /<a\b[^>]*>([\s\S]*?)<\/a>/g;
const PARA = /<p\b[^>]*>([\s\S]*?)<\/p>/g;

const issues = new Map<string, Set<string>>();
const add = (text: string, url: string) => {
  if (!issues.has(text)) issues.set(text, new Set());
  issues.get(text)!.add(url);
};
const check = (raw: string, url: string) => {
  const t = decode(raw);
  if (!t || t.length > 140 || !/\p{Ll}/u.test(t)) return;
  if (titleCase(t) !== t) add(t, url);
};

let i = 0;
let longTitle = 0;
async function worker() {
  while (i < urls.length) {
    const url = urls[i++];
    const html = await (await fetch(base + url)).text();
    const body = html.replace(/<script[\s\S]*?<\/script>/g, "").replace(/<style[\s\S]*?<\/style>/g, "");
    for (const re of SHORT) for (const m of body.matchAll(re)) check(m[2], url);
    for (const n of body.matchAll(NAV)) for (const a of n[0].matchAll(LINK)) check(a[1], url);
    for (const p of body.matchAll(PARA)) {
      const t = decode(p[1]);
      const words = t.split(" ").filter((w) => /^\p{L}/u.test(w));
      if (words.length >= 100 && words.filter((w) => /^\p{Lu}/u.test(w)).length / words.length > 0.6) longTitle++, add(`[100+ word paragraph in Title Case] ${t.slice(0, 80)}…`, url);
    }
  }
}
Promise.all(Array.from({ length: 4 }, worker)).then(() => {
  console.log(`${urls.length} pages checked`);
  if (!issues.size) return console.log("All short text is in Title Case; long paragraphs are in sentence case.");
  const list = [...issues.entries()].sort((a, b) => b[1].size - a[1].size);
  console.log(`${list.length} distinct strings to fix${longTitle ? ` (${longTitle} long paragraphs)` : ""}:`);
  for (const [t, u] of list) console.log(`${String(u.size).padStart(4)}×  ${t}   [${[...u][0]}]`);
  process.exitCode = 1;
});
