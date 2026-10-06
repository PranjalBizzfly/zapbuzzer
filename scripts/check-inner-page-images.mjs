import { allPaths as manifestPaths } from "../src/content/manifest.ts";
import { companyPageList } from "../src/lib/companyPages.ts";
import { posts as blogPosts } from "../src/lib/blog-posts.ts";

const BASE_URL = process.argv[2] ?? "http://localhost:3001";

async function check() {
  const allUrls = [
    ...manifestPaths,
    ...companyPageList.map(c => c.href.replace(/^\//, "")),
    ...blogPosts.map(b => `blog/${b.slug}`),
  ];
  const uniquePaths = Array.from(new Set(allUrls.filter(Boolean)));

  console.log(`Checking ${uniquePaths.length} inner pages on ${BASE_URL} for page-related images...\n`);

  const pagesWithImages = [];
  const pagesWithoutImages = [];

  for (const path of uniquePaths) {
    const url = `${BASE_URL}/${path}`;
    try {
      const res = await fetch(url);
      if (!res.ok) continue;
      const html = await res.text();

      // Extract h1
      const h1Match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
      const h1 = h1Match ? h1Match[1].replace(/<[^>]+>/g, "").trim() : "No H1";

      // Extract title
      const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
      const title = titleMatch ? titleMatch[1].replace(/<[^>]+>/g, "").trim() : "No Title";

      // Extract images (excluding logo and SVGs)
      const imgTagRegex = /<img\s+([^>]+)>/g;
      let match;
      const imgs = [];
      while ((match = imgTagRegex.exec(html)) !== null) {
        const attrs = match[1];
        const srcMatch = attrs.match(/src="([^">]+)"/i);
        if (!srcMatch) continue;
        let src = srcMatch[1];
        if (src.includes("/_next/image?url=")) {
          const params = new URL(src, BASE_URL).searchParams;
          src = params.get("url") || src;
        }
        if (src.endsWith(".svg") || src.includes("logo.png") || src.includes("/press-kit/")) continue;

        const altMatch = attrs.match(/alt="([^"]*)"/i);
        const alt = altMatch ? altMatch[1] : "";
        imgs.push({ src, alt });
      }

      if (imgs.length > 0) {
        pagesWithImages.push({ path, title, h1, imgs });
      } else {
        pagesWithoutImages.push({ path, title, h1 });
      }
    } catch (err) {
      console.error(`Error fetching ${url}:`, err.message);
    }
  }

  console.log(`=== INNER PAGES WITH CONTENT IMAGES (${pagesWithImages.length}) ===\n`);
  for (const p of pagesWithImages) {
    console.log(`PAGE: /${p.path}`);
    console.log(`  Title: ${p.title}`);
    console.log(`  H1:    ${p.h1}`);
    for (const img of p.imgs) {
      console.log(`  IMAGE: ${img.src}`);
      console.log(`  ALT:   ${img.alt}`);
    }
    console.log();
  }

  console.log(`========================================`);
  console.log(`Total inner pages audited: ${uniquePaths.length}`);
  console.log(`Inner pages with content photography: ${pagesWithImages.length}`);
  console.log(`Inner pages using product UI/code mockups: ${pagesWithoutImages.length}`);
  console.log(`========================================\n`);
}

check().catch(console.error);
