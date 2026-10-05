import type { MetadataRoute } from "next";
import { allPaths } from "@/content/manifest";
import { absUrl, site } from "@/lib/site";

const noindex = new Set(["sign-in", "sign-up"]);

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = allPaths
    .filter((p) => !noindex.has(p))
    .map((p) => ({
      url: p === "" ? site.url : absUrl(p),
      changeFrequency: "monthly",
      priority: p === "" ? 1 : p.split("/").length === 1 ? 0.8 : 0.6,
    }));
  return [...pages, { url: absUrl("explore"), changeFrequency: "monthly", priority: 0.5 }];
}
