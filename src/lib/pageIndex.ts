import { groups } from "@/content/manifest";
import { getPage } from "@/content/registry";

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
        title: page?.h1 ?? "ZapBuzzer — internal request CRM for offices",
        description: page?.description ?? "One tap for coffee, prints, IT help, facilities and courier pickups.",
        group: g.name,
        groupId: g.id,
      };
    }),
  );
}
