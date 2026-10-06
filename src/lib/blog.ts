import { posts } from "./blog-posts";

export const blogCategories = [
  { id: "office-operations", name: "Office Operations", blurb: "Running pantry, print, IT, facilities and front desk without chase calls." },
  { id: "playbooks", name: "Playbooks", blurb: "Step-by-step setups you can copy into your own office." },
  { id: "product", name: "Product Explainers", blurb: "How a specific part of ZapBuzzer works, and why it works that way." },
  { id: "people", name: "People & Culture", blurb: "Fair attribution, scorecards and the staff who keep offices running." },
] as const;

export type BlogCategoryId = (typeof blogCategories)[number]["id"];

/** Body blocks. Plain text only — no markdown or HTML inside strings. */
export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "callout"; title: string; text: string }
  | { type: "quote"; text: string; cite: string };

export interface BlogPost {
  slug: string;
  title: string;
  /** 140–160 chars, used for meta description and cards. */
  description: string;
  category: BlogCategoryId;
  /** ISO date (YYYY-MM-DD). */
  date: string;
  readingMinutes: number;
  /** Path under /public, e.g. "/images/pantry-operations.webp". */
  image: string;
  imageAlt: string;
  tags: string[];
  /** Existing site paths (with leading slash) worth linking from the article. */
  links: { href: string; label: string }[];
  body: BlogBlock[];
}

export const allPosts: BlogPost[] = [...posts].sort((a, b) => b.date.localeCompare(a.date) || a.title.localeCompare(b.title));

export const getPost = (slug: string) => allPosts.find((p) => p.slug === slug);

export const categoryName = (id: string) => blogCategories.find((c) => c.id === id)?.name ?? id;

export function relatedPosts(post: BlogPost, n = 3) {
  const score = (p: BlogPost) => (p.category === post.category ? 2 : 0) + p.tags.filter((t) => post.tags.includes(t)).length;
  return allPosts
    .filter((p) => p.slug !== post.slug)
    .map((p) => ({ p, s: score(p) }))
    .sort((a, b) => b.s - a.s)
    .slice(0, n)
    .map((x) => x.p);
}

export const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
