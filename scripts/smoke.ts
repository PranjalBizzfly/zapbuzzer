// Run against a running server: npx tsx scripts/smoke.ts [baseUrl]
// Fetches every manifest URL, company page and blog article and checks for HTTP 200 and
// exactly one <h1>, then checks that every press-kit download exists.
import { allPaths as manifestPaths } from "@/content/manifest";
import { companyPageList } from "@/lib/companyPages";
import { allPosts } from "@/lib/blog";

const base = process.argv[2] ?? "http://localhost:3000";

const allPaths = [
  ...manifestPaths,
  ...companyPageList.map((c) => c.href.slice(1)),
  ...allPosts.map((p) => `blog/${p.slug}`),
];
const assets = ["press-kit/zapbuzzer-app-icon-1024.png", "press-kit/zapbuzzer-descriptions.txt", "press-kit/zapbuzzer-brand-colours.txt"];

(async () => {
  const bad: string[] = [];
  for (const p of allPaths) {
    const r = await fetch(`${base}/${p}`);
    const html = await r.text();
    const h1 = (html.match(/<h1[\s>]/g) || []).length;
    if (r.status !== 200 || h1 !== 1) bad.push(`${p || "/"} ${r.status} h1=${h1}`);
  }
  for (const a of assets) {
    const r = await fetch(`${base}/${a}`);
    if (r.status !== 200) bad.push(`asset ${a} ${r.status}`);
  }
  console.log(`checked ${allPaths.length} URLs and ${assets.length} assets, ${bad.length} problems`);
  for (const b of bad) console.log("  " + b);
  const sitemap = await (await fetch(`${base}/sitemap.xml`)).text();
  console.log(`sitemap.xml: ${(sitemap.match(/<loc>/g) || []).length} URLs`);
  if (bad.length) process.exitCode = 1;
})();
