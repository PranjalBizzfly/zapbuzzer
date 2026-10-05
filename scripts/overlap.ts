// Run against a running server: npx tsx scripts/overlap.ts [baseUrl]
// Compares the visible text of every page (hero excluded) with the original
// zapbuzzer.com homepage text in .ref/home.txt and lists shared 6-word runs.
import { readFileSync } from "node:fs";
import { allPaths } from "@/content/manifest";

const base = process.argv[2] ?? "http://localhost:3000";
const N = 6;

const norm = (s: string) =>
  s
    .toLowerCase()
    .replace(/&#x27;|&#39;|[’‘]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/&amp;/g, "&")
    .replace(/[^a-z0-9₹%★'& ]+/g, " ")
    .split(/\s+/)
    .filter(Boolean);

const original = norm(readFileSync(".ref/home.txt", "utf8"));
const shingles = new Set<string>();
for (let i = 0; i + N <= original.length; i++) shingles.add(original.slice(i, i + N).join(" "));

/** Visible text after the first </section> (the hero) and before the footer. */
function bodyText(html: string) {
  const main = html.slice(html.indexOf('id="main"'), html.indexOf("<footer"));
  const afterHero = main.slice(main.indexOf("</section>") + 10);
  return afterHero
    .replace(/<script[\s\S]*?<\/script>/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&quot;/g, '"');
}

(async () => {
  let total = 0;
  for (const p of allPaths) {
    const html = await (await fetch(`${base}/${p}`)).text();
    const words = norm(bodyText(html));
    const hits: string[] = [];
    let run: string[] = [];
    for (let i = 0; i + N <= words.length; i++) {
      const sh = words.slice(i, i + N).join(" ");
      if (shingles.has(sh)) run = run.length ? [...run, words[i + N - 1]] : words.slice(i, i + N);
      else if (run.length) {
        hits.push(run.join(" "));
        run = [];
      }
    }
    if (run.length) hits.push(run.join(" "));
    const uniq = [...new Set(hits)];
    if (uniq.length) {
      total += uniq.length;
      console.log(`\n/${p} — ${uniq.length}`);
      for (const h of uniq) console.log("   · " + h);
    }
  }
  console.log(`\nTotal shared runs: ${total}`);
})();
