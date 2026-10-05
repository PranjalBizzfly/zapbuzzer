import { allPages } from "./pages";
import { groups, groupOf, labelFor, allPaths } from "./manifest";
import type { PageContent } from "./types";
import type { Crumb } from "@/components/sections/PageParts";

const byPath = new Map<string, PageContent>(allPages.map((p) => [p.path, p]));

export const getPage = (path: string) => byPath.get(path);

/** Paths rendered by the catch-all route (everything except the homepage). */
export const contentPaths = allPaths.filter((p) => p !== "" && byPath.has(p));

export const href = (path: string) => `/${path}`;

export function crumbsFor(path: string): Crumb[] {
  const crumbs: Crumb[] = [{ href: "/", label: "Home" }];
  const g = groupOf(path);
  // Use the group's hub as parent, or the first existing ancestor path.
  const parents: string[] = [];
  if (g && g.hub && g.hub !== path && allPaths.includes(g.hub)) parents.push(g.hub);
  else {
    const segs = path.split("/");
    for (let i = 1; i < segs.length; i++) {
      const anc = segs.slice(0, i).join("/");
      if (allPaths.includes(anc)) parents.push(anc);
    }
  }
  for (const p of parents) crumbs.push({ href: href(p), label: labelFor(p) });
  crumbs.push({ href: href(path), label: labelFor(path) });
  return crumbs;
}

export function relatedFor(page: PageContent) {
  const seen = new Set<string>();
  return page.related
    .filter((p) => p !== page.path && allPaths.includes(p) && !seen.has(p) && seen.add(p))
    .map((p) => ({
      href: href(p),
      label: labelFor(p) || "Home",
      group: groupOf(p)?.name ?? "ZapBuzzer",
      description: byPath.get(p)?.description,
    }));
}

/** Sibling pages in the same group, for in-cluster navigation. */
export function siblingsFor(path: string) {
  const g = groupOf(path);
  if (!g || g.id === "core") return null;
  return {
    name: g.name,
    hub: g.hub && g.hub !== path && allPaths.includes(g.hub) ? { href: href(g.hub), label: labelFor(g.hub) } : null,
    links: g.pages.filter(([p]) => p !== path).map(([p, l]) => ({ href: href(p), label: l, description: byPath.get(p)?.description })),
  };
}

export { groups };
