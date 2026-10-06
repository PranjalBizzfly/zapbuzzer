/**
 * Copy audit: flags AI-sounding, jargon-heavy or empty marketing phrases in site text.
 *   node scripts/copy-audit.mjs            → summary per file
 *   node scripts/copy-audit.mjs --list     → every hit with line numbers
 * A hit is a prompt to re-read the sentence, not an automatic error: some words are
 * fine in context (e.g. "audit log" is a real feature).
 */
import fs from "node:fs";
import path from "node:path";

const ROOTS = ["src/content", "src/app", "src/components", "src/lib"];
const EXT = /\.(ts|tsx|md)$/;
const SKIP = /FACTS\.md$|pages[\\/]index\.ts$|\.d\.ts$/;

const PHRASES = [
  "leverage", "leveraging", "seamless", "seamlessly", "robust", "empower", "empowers", "empowering", "streamline", "streamlines", "streamlined",
  "cutting-edge", "unlock", "unlocks", "elevate", "elevates", "delve", "utilise", "utilize", "utilisation", "utilization", "facilitate", "facilitates",
  "holistic", "synergy", "paradigm", "game-changer", "game changer", "revolutionise", "revolutionize", "effortless", "effortlessly",
  "in today's", "in today’s", "look no further", "at the end of the day", "it's worth noting", "it’s worth noting", "best-in-class", "world-class",
  "next-level", "harness", "supercharge", "frictionless", "ecosystem", "orchestrate", "orchestrates", "orchestration", "stakeholder", "stakeholders",
  "actionable insights", "mission-critical", "end-to-end", "bespoke", "transformative", "unparalleled", "unrivalled", "state-of-the-art",
  "plethora", "myriad", "navigate the", "landscape", "realm", "tapestry", "embark", "foster", "fosters", "furthermore", "moreover", "additionally",
  "in conclusion", "whether you're", "whether you’re", "not only", "pivotal", "paramount", "crucial", "vital", "optimise", "optimize", "optimal",
  "enhance", "enhances", "enhanced", "ensure", "ensures", "ensuring", "comprehensive", "dynamic", "innovative", "solution-oriented", "scalable",
  "operational excellence", "single source of truth", "visibility into", "proactively", "proactive", "granular", "friction", "workflows that",
  "out-of-the-box", "turnkey", "commence", "endeavour", "henceforth", "aforementioned", "thereby", "wherein", "therein", "in order to",
  "a wide range of", "a variety of", "it is important to", "plays a key role", "key role", "boost productivity", "drive efficiency", "take it to the next level",
];
const re = new RegExp(`\\b(${PHRASES.map((p) => p.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})\\b`, "gi");

const files = [];
const walk = (d) => {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p);
    else if (EXT.test(e.name) && !SKIP.test(p)) files.push(p);
  }
};
ROOTS.forEach((r) => fs.existsSync(r) && walk(r));

const list = process.argv.includes("--list");
let total = 0;
const byWord = {};
for (const f of files) {
  const lines = fs.readFileSync(f, "utf8").split(/\r?\n/);
  let n = 0;
  lines.forEach((line, i) => {
    // only look inside string literals / JSX text, skip imports and classNames
    if (/^\s*(import|export \{)|className=/.test(line) && !/["'`][^"'`]*\s[^"'`]*["'`]/.test(line.replace(/className="[^"]*"/g, ""))) return;
    const text = line.replace(/className="[^"]*"/g, "");
    for (const m of text.matchAll(re)) {
      n++;
      byWord[m[1].toLowerCase()] = (byWord[m[1].toLowerCase()] ?? 0) + 1;
      if (list) console.log(`${f}:${i + 1}  [${m[1]}]  ${line.trim().slice(0, 160)}`);
    }
  });
  if (n && !list) console.log(`${String(n).padStart(4)}  ${f}`);
  total += n;
}
console.log(`\n${total} flagged phrases in ${files.length} files`);
if (!list) console.log(Object.entries(byWord).sort((a, b) => b[1] - a[1]).slice(0, 40).map(([w, c]) => `${w}:${c}`).join("  "));
