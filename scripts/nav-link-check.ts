/** Checks every href in the nav file resolves (HTTP 200) on a running server. */
import fs from "node:fs";
const base = process.argv[2] ?? "http://localhost:3000";
const hrefs = [...new Set([...fs.readFileSync("src/lib/nav.ts", "utf8").matchAll(/href: "([^"]*)"/g)].map((m) => m[1]))];
Promise.all(hrefs.map(async (h) => [h, (await fetch(base + h.split("#")[0])).status] as const)).then((r) => {
  const bad = r.filter(([, s]) => s !== 200);
  console.log(`${r.length} nav links;`, bad.length ? `broken: ${bad.map(([h, s]) => `${h} ${s}`).join(", ")}` : "all return 200");
});
