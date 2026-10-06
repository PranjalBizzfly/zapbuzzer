// Text sharpness / readability audit across every page.
// Usage (dev server running): PLAYWRIGHT_BROWSERS_PATH=.ref/browsers node scripts/text-audit.mjs [baseUrl] [maxPages]
import { chromium } from "playwright";
import { readFileSync, writeFileSync } from "node:fs";

const base = process.argv[2] ?? "http://localhost:3000";
const max = Number(process.argv[3] ?? 9999);

const manifest = readFileSync("src/content/manifest.ts", "utf8");
const paths = [...manifest.matchAll(/\["([^"]*)", "[^"]+"\]/g)].map((m) => "/" + m[1]);
paths.push("/blog", "/careers", "/media", "/press-kit", "/vendors-and-partners", "/explore-all-pages");
const post = readFileSync("src/lib/blog-posts.ts", "utf8").match(/slug:\s*"([^"]+)"/);
if (post) paths.push("/blog/" + post[1]);
const pages = [...new Set(paths)].slice(0, max);

const configs = [
  { name: "desktop-light", width: 1440, height: 900, theme: "light" },
  { name: "desktop-dark", width: 1440, height: 900, theme: "dark" },
  { name: "mobile-light", width: 390, height: 844, theme: "light", mobile: true },
  { name: "mobile-dark", width: 390, height: 844, theme: "dark", mobile: true },
];

// Runs in the page: inspects every element that directly holds visible text.
function inspect() {
  // Any CSS colour (rgb, oklch, color-mix…) → rgba, by letting the browser paint one pixel.
  const cv = document.createElement("canvas");
  cv.width = cv.height = 1;
  const cx = cv.getContext("2d", { willReadFrequently: true });
  const parse = (c) => {
    if (!c || c === "transparent") return { r: 0, g: 0, b: 0, a: 0 };
    cx.clearRect(0, 0, 1, 1);
    cx.fillStyle = "#000";
    cx.fillStyle = c;
    cx.fillRect(0, 0, 1, 1);
    const [r, g, b, a] = cx.getImageData(0, 0, 1, 1).data;
    return { r, g, b, a: a / 255 };
  };
  const lum = ({ r, g, b }) => {
    const f = (v) => ((v /= 255) <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4);
    return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
  };
  const blend = (fg, bg) => ({ r: fg.r * fg.a + bg.r * (1 - fg.a), g: fg.g * fg.a + bg.g * (1 - fg.a), b: fg.b * fg.a + bg.b * (1 - fg.a), a: 1 });
  const ratio = (a, b) => { const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p); return (x + 0.05) / (y + 0.05); };

  const out = [];
  const seen = new Set();
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (!node.textContent.trim()) continue;
    const el = node.parentElement;
    if (!el || seen.has(el)) continue;
    seen.add(el);
    if (el.closest("script,style,noscript,svg,canvas,[aria-hidden='true'],.sr-only,[hidden]")) continue;
    const cs = getComputedStyle(el);
    const rect = el.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0 || cs.visibility === "hidden" || cs.display === "none") continue;
    if (rect.bottom < 0 || rect.top > document.documentElement.scrollHeight) continue;

    const issues = [];
    let opacity = 1, bg = null, unknownBg = false;
    for (let a = el; a && a !== document.documentElement; a = a.parentElement) {
      const s = getComputedStyle(a);
      opacity *= Number(s.opacity);
      if (s.filter && s.filter !== "none" && /blur/.test(s.filter)) issues.push(`blur filter on ${a === el ? "itself" : a.tagName.toLowerCase() + "." + (a.className?.toString?.().split(" ").slice(0, 3).join(".") ?? "")}`);
      const t = s.transform;
      // Only transforms that put text on a GPU layer blur it: a real 3D transform, or 2D on a will-change layer.
      if (t && t.startsWith("matrix3d")) {
        const v = t.slice(9, -1).split(",").map(Number);
        const pureTranslate = [0, 5, 10, 15].every((k) => Math.abs(v[k] - 1) < 1e-6) && [1, 2, 3, 4, 6, 7, 8, 9, 11].every((k) => Math.abs(v[k]) < 1e-6) && Math.abs(v[14]) < 1e-6;
        if (!pureTranslate) issues.push("3D transform (rotated or depth)");
      }
      if (/transform|translate|scale/.test(s.willChange) && t && t !== "none" && !t.startsWith("matrix3d")) {
        const v = t.slice(7, -1).split(",").map(Number);
        if (Math.abs(Math.hypot(v[0], v[1]) - 1) > 0.001 || Math.abs(v[4] % 1) > 0.01 || Math.abs(v[5] % 1) > 0.01) issues.push("GPU layer (will-change) scaled or at half-pixel");
      }
      if (!bg && !unknownBg) {
        if (s.backgroundImage && s.backgroundImage !== "none") unknownBg = true;
        else {
          const c = parse(s.backgroundColor);
          if (c && c.a >= 0.95) bg = c;
          else if (c && c.a > 0.05) unknownBg = true; // translucent surface: depends on what's behind
        }
      }
    }
    if (!bg && !unknownBg) bg = parse(getComputedStyle(document.body).backgroundColor);
    if (opacity < 0.05) continue; // intentionally hidden (story step not reached yet)
    if (el.closest("[title=RuPay],[title=UPI],[title=Visa],[title=Mastercard]")) continue; // brand marks

    const fg = parse(cs.color);
    if (fg && bg) {
      const size = parseFloat(cs.fontSize), bold = Number(cs.fontWeight) >= 700;
      const large = size >= 24 || (bold && size >= 18.66);
      const c = ratio(blend({ ...fg, a: fg.a * Math.min(1, opacity) }, bg), bg);
      if (c < (large ? 3 : 4.5)) issues.push(`low contrast ${c.toFixed(2)}:1`);
    }
    if (issues.length) {
      out.push({
        text: node.textContent.trim().replace(/\s+/g, " ").slice(0, 50),
        tag: el.tagName.toLowerCase(),
        cls: (el.className?.toString?.() ?? "").slice(0, 120),
        issues: [...new Set(issues)],
      });
    }
  }
  return out;
}

const browser = await chromium.launch();
const results = [];
for (const cfg of configs) {
  const ctx = await browser.newContext({ viewport: { width: cfg.width, height: cfg.height }, isMobile: !!cfg.mobile, hasTouch: !!cfg.mobile, colorScheme: cfg.theme });
  await ctx.addInitScript((t) => { try { localStorage.setItem("zb-theme", t); } catch {} }, cfg.theme);
  const page = await ctx.newPage();
  for (const p of pages) {
    try {
      await page.goto(base + p, { waitUntil: "domcontentloaded", timeout: 60000 });
      // Scroll through so reveal/scroll effects run, then stop and let everything settle.
      await page.evaluate(async () => {
        const h = document.documentElement.scrollHeight;
        for (let y = 0; y < h; y += 600) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 60)); }
        window.scrollTo(0, 0);
        await new Promise((r) => setTimeout(r, 300));
        document.querySelectorAll("[data-reveal]").forEach((e) => e.classList.add("is-visible"));
      });
      await page.waitForTimeout(1600);
      const found = await page.evaluate(inspect);
      for (const f of found) results.push({ config: cfg.name, page: p, ...f });
    } catch (e) {
      results.push({ config: cfg.name, page: p, text: "PAGE ERROR", issues: [String(e).slice(0, 120)] });
    }
  }
  await ctx.close();
  console.error(`${cfg.name}: done`);
}
await browser.close();
writeFileSync(".ref/text-audit.json", JSON.stringify(results, null, 2));

// Summary grouped by issue type + element class, so one fix covers every page it appears on
const groups = new Map();
for (const r of results) for (const i of r.issues) {
  const kind = i.replace(/[\d.]+/g, "#");
  const key = `${kind} | ${r.tag}.${r.cls.split(" ").slice(0, 6).join(".")}`;
  const g = groups.get(key) ?? { n: 0, pages: new Set(), configs: new Set(), sample: r.text, detail: i };
  g.n++; g.pages.add(r.page); g.configs.add(r.config); groups.set(key, g);
}
const rows = [...groups].sort((a, b) => b[1].n - a[1].n);
console.log(`pages: ${pages.length} x ${configs.length} configs; text elements flagged: ${results.length}; distinct patterns: ${rows.length}\n`);
for (const [k, g] of rows) console.log(`${String(g.n).padStart(5)}  ${k}\n       e.g. "${g.sample}" (${g.detail}) on ${g.pages.size} page(s), ${[...g.configs].join(",")}`);
