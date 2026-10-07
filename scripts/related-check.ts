/** Every page's `related` entries must be real page paths (not old, redirected ones). */
import { allPages } from "@/content/pages/index";
const paths = new Set(allPages.map((p) => p.path));
const bad = allPages.flatMap((p) => (p.related ?? []).filter((r) => !paths.has(r) && r !== "").map((r) => `${p.path} → ${r}`));
console.log(bad.length ? `${bad.length} related links to non-existent paths:\n` + bad.slice(0, 30).join("\n") : "All related links point to real pages.");
