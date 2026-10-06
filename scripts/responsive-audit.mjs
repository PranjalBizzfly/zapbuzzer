// Responsive audit. Usage (server running):
//   PLAYWRIGHT_BROWSERS_PATH=.ref/browsers node scripts/responsive-audit.mjs http://localhost:3000
import { chromium } from "playwright";
import { mkdirSync } from "node:fs";

const base = process.argv[2] ?? "http://localhost:3000";
const widths = [320, 360, 375, 390, 414, 768, 820, 1024, 1280, 1440, 1920];
const pages = [
  "",
  "features/first-accept-wins",
  "solutions/pantry",
  "pricing",
  "contact-us",
  "explore-all-pages",
  "sitemap",
  "resource-hub/glossary",
  "feature-comparison/vs-whatsapp",
  "workflows/coffee-request",
  "sign-in",
  "this-page-does-not-exist",
];
mkdirSync(".ref/shots/resp", { recursive: true });

const b = await chromium.launch();
const issues = [];
let checks = 0;

for (const w of widths) {
  const touch = w < 1024;
  const ctx = await b.newContext({ viewport: { width: w, height: touch ? 800 : 900 }, hasTouch: touch, isMobile: w < 768, reducedMotion: "reduce" });
  const p = await ctx.newPage();
  for (const path of pages) {
    checks++;
    await p.goto(`${base}/${path}`, { waitUntil: "networkidle" });
    await p.waitForTimeout(300);
    const r = await p.evaluate(({ w, touch }) => {
      const out = { overflow: 0, poking: [], header: {}, smallTaps: [], tinyText: 0 };
      out.overflow = document.documentElement.scrollWidth - w;
      const clipped = (e) => {
        for (let a = e.parentElement; a; a = a.parentElement) {
          const o = getComputedStyle(a).overflowX;
          if (o === "hidden" || o === "clip" || o === "auto" || o === "scroll") return true;
        }
        return false;
      };
      for (const e of document.querySelectorAll("body *")) {
        const rc = e.getBoundingClientRect();
        if (rc.width === 0 || rc.height === 0) continue;
        if ((rc.right > w + 1 || rc.left < -1) && !clipped(e) && getComputedStyle(e).position !== "fixed") {
          out.poking.push(`${e.tagName}.${String(e.className).slice(0, 50)} [${Math.round(rc.left)}→${Math.round(rc.right)}]`);
          if (out.poking.length > 3) break;
        }
      }
      const hdr = document.querySelector("header");
      const hb = hdr?.getBoundingClientRect();
      const burger = document.querySelector('button[aria-label="Open Mobile Navigation"]');
      const nav = document.querySelector('nav[aria-label="Main Navigation"]');
      out.header = {
        height: Math.round(hb?.height ?? 0),
        burger: !!burger && getComputedStyle(burger.parentElement).display !== "none",
        nav: !!nav && getComputedStyle(nav).display !== "none",
      };
      if (touch) {
        for (const e of document.querySelectorAll("main a, main button, header a, header button, footer a")) {
          const rc = e.getBoundingClientRect();
          if (rc.width === 0 || rc.height === 0) continue;
          if (getComputedStyle(e).visibility === "hidden") continue;
          // Inline links inside running text are exempt (they sit in a line of copy).
          if (e.closest("p") && getComputedStyle(e).display === "inline") continue;
          if (rc.height < 24 || rc.width < 24) out.smallTaps.push(`${(e.textContent || e.getAttribute("aria-label") || "").trim().slice(0, 30)} ${Math.round(rc.width)}×${Math.round(rc.height)}`);
        }
        out.smallTaps = out.smallTaps.slice(0, 5);
        for (const e of document.querySelectorAll("main p, main li, main span, main a")) {
          if (!e.childNodes.length || ![...e.childNodes].some((n) => n.nodeType === 3 && n.textContent.trim())) continue;
          const fs = parseFloat(getComputedStyle(e).fontSize);
          const rc = e.getBoundingClientRect();
          if (rc.width && fs < 10) out.tinyText++;
        }
      }
      return out;
    }, { w, touch });
    const tag = `${w}px /${path}`;
    if (r.overflow > 0) issues.push(`${tag}: horizontal scroll +${r.overflow}px`);
    if (r.poking.length) issues.push(`${tag}: element past edge → ${r.poking.join(" | ")}`);
    if (w < 1024 && (!r.header.burger || r.header.nav)) issues.push(`${tag}: header should show menu button only (burger=${r.header.burger}, nav=${r.header.nav})`);
    if (w >= 1024 && (!r.header.nav || r.header.burger)) issues.push(`${tag}: header should show full nav (burger=${r.header.burger}, nav=${r.header.nav})`);
    if (r.header.height > 82) issues.push(`${tag}: header too tall (${r.header.height}px — nav wrapping?)`);
    if (r.smallTaps.length) issues.push(`${tag}: small tap targets → ${r.smallTaps.join(" | ")}`);
    if (r.tinyText > 0) issues.push(`${tag}: ${r.tinyText} text elements under 10px`);
    if ([375, 768, 1024].includes(w) && ["", "solutions/pantry", "pricing", "explore-all-pages", "contact-us"].includes(path)) {
      await p.screenshot({ path: `.ref/shots/resp/${w}-${path.replace(/\//g, "_") || "home"}.png` });
    }
  }
  await ctx.close();
}
await b.close();
console.log(`${checks} page × width checks`);
console.log(issues.length ? `${issues.length} issues:\n- ` + issues.join("\n- ") : "No issues found");
