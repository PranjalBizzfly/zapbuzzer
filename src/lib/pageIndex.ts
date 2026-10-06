import { groups } from "@/content/manifest";
import { getPage } from "@/content/registry";
import { companyPageList } from "@/lib/companyPages";
import { allPosts } from "@/lib/blog";

export interface IndexedPage {
  href: string;
  label: string;
  title: string;
  description: string;
  group: string;
  groupId: string;
}

/** Every page on the site, grouped as in the manifest. Server-only (pulls in page content). */
export function buildPageIndex(): IndexedPage[] {
  return groups.flatMap((g) =>
    g.pages.map(([path, label]) => {
      const page = getPage(path);
      return {
        href: `/${path}`,
        label: path === "" ? "Home" : label,
        title: page?.h1 ?? "ZapBuzzer | internal request CRM for offices",
        description: page?.description ?? "One tap for coffee, prints, IT help, facilities and courier pickups.",
        group: g.name,
        groupId: g.id,
      };
    }),
  ).concat(
    companyPageList.map((c) => ({ href: c.href, label: c.label, title: c.label, description: c.description, group: "Company", groupId: "company" })),
    allPosts.map((b) => ({ href: `/blog/${b.slug}`, label: b.title, title: b.title, description: b.description, group: "Blog", groupId: "blog" })),
  );
}
