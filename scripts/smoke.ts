// Run against a running server: npx tsx scripts/smoke.ts [baseUrl]
// Fetches every manifest URL and checks for HTTP 200 and exactly one <h1>.
import { allPaths } from "@/content/manifest";

const base = process.argv[2] ?? "http://localhost:3000";

(async () => {
  const bad: string[] = [];
  for (const p of allPaths) {
    const r = await fetch(`${base}/${p}`);
    const html = await r.text();
    const h1 = (html.match(/<h1[\s>]/g) || []).length;
    if (r.status !== 200 || h1 !== 1) bad.push(`${p || "/"} ${r.status} h1=${h1}`);
  }
  console.log(`checked ${allPaths.length} URLs, ${bad.length} problems`);
  for (const b of bad) console.log("  " + b);
  const sitemap = await (await fetch(`${base}/sitemap.xml`)).text();
  console.log(`sitemap.xml: ${(sitemap.match(/<loc>/g) || []).length} URLs`);
  if (bad.length) process.exitCode = 1;
})();
