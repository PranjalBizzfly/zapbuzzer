// Full-page screenshots for visual QA.
// Usage: PLAYWRIGHT_BROWSERS_PATH=.ref/browsers node scripts/shots.mjs <outPrefix> <theme:light|dark> <width> <url> [url...]
import { chromium } from "playwright";

const [prefix, theme, width, ...urls] = process.argv.slice(2);
const browser = await chromium.launch();
const ctx = await browser.newContext({
  viewport: { width: Number(width), height: 900 },
  colorScheme: theme === "dark" ? "dark" : "light",
  reducedMotion: "reduce", // render final states (typewriter/counters) for stable shots
});
for (const [i, url] of urls.entries()) {
  const page = await ctx.newPage();
  await page.goto(url, { waitUntil: "networkidle", timeout: 60000 });
  // Force our theme class too (localStorage may be empty).
  await page.evaluate((t) => document.documentElement.classList.toggle("dark", t === "dark"), theme);
  // Scroll through so lazy/reveal content renders.
  await page.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += 600) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 60));
    }
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(800);
  const h = await page.evaluate(() => document.documentElement.scrollHeight);
  const seg = 1400;
  for (let y = 0, s = 0; y < h; y += seg, s++) {
    const file = `${prefix}-${i}-${String(s).padStart(2, "0")}.png`;
    await page.screenshot({ path: file, fullPage: true, clip: { x: 0, y, width: Number(width), height: Math.min(seg, h - y) } });
  }
  console.log(`${prefix}-${i}-*  (${Math.ceil(h / seg)} segments)`, url);
  await page.close();
}
await browser.close();
