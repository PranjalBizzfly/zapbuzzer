"use client";

import { useEffect, useMemo, useState } from "react";
import type { BlogPost } from "@/lib/blog";
import { BlogCard } from "./BlogCard";
import { Icon } from "@/components/ui/Icon";

const PER_PAGE = 6;

/** Search, category filter and pagination. State is mirrored to the URL so filtered views can be shared. */
export function BlogExplorer({ posts, categories }: { posts: BlogPost[]; categories: { id: string; name: string }[] }) {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("all");
  const [page, setPage] = useState(1);

  useEffect(() => {
    const sp = new URLSearchParams(window.location.search);
    /* eslint-disable react-hooks/set-state-in-effect -- one-time sync from the URL after hydration */
    setQ(sp.get("q") ?? "");
    const c = sp.get("category");
    if (c && categories.some((x) => x.id === c)) setCat(c);
    setPage(Math.max(1, Number(sp.get("page")) || 1));
    /* eslint-enable react-hooks/set-state-in-effect */
  }, [categories]);

  useEffect(() => {
    const sp = new URLSearchParams();
    if (q) sp.set("q", q);
    if (cat !== "all") sp.set("category", cat);
    if (page > 1) sp.set("page", String(page));
    const qs = sp.toString();
    window.history.replaceState(null, "", `${window.location.pathname}${qs ? `?${qs}` : ""}${window.location.hash}`);
  }, [q, cat, page]);

  const filtered = useMemo(() => {
    const terms = q.toLowerCase().split(/\s+/).filter(Boolean);
    return posts.filter((p) => {
      if (cat !== "all" && p.category !== cat) return false;
      if (!terms.length) return true;
      const hay = [p.title, p.description, ...p.tags, ...p.body.flatMap((b) => ("text" in b ? [b.text] : "items" in b ? b.items : []))].join(" ").toLowerCase();
      return terms.every((t) => hay.includes(t));
    });
  }, [posts, q, cat]);

  const pages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const current = Math.min(page, pages);
  const shown = filtered.slice((current - 1) * PER_PAGE, current * PER_PAGE);
  const count = (id: string) => (id === "all" ? posts.length : posts.filter((p) => p.category === id).length);

  return (
    <div>
      <div className="glass-panel flex flex-col gap-4 rounded-2xl p-4 sm:p-5 lg:flex-row lg:items-center">
        <label className="relative flex-1">
          <span className="sr-only">Search Articles</span>
          <Icon name="search" className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
          <input
            type="search"
            value={q}
            onChange={(e) => { setQ(e.target.value); setPage(1); }}
            placeholder="Search articles, e.g. escalation, pantry, print"
            className="w-full rounded-xl border border-line bg-bg/70 py-3 pl-10 pr-3.5 text-[15px] outline-none transition focus:border-accent focus:ring-4 focus:ring-accent/15"
          />
        </label>
        <div role="group" aria-label="Filter by category" className="flex flex-wrap gap-2">
          {[{ id: "all", name: "All" }, ...categories].map((c) => (
            <button
              key={c.id}
              type="button"
              aria-pressed={cat === c.id}
              onClick={() => { setCat(c.id); setPage(1); }}
              className={`rounded-full border px-3.5 py-2 text-sm font-medium transition ${cat === c.id ? "border-accent bg-accent text-white" : "border-line bg-surface hover:border-accent/50"}`}
            >
              {c.name} <span className="font-normal">({count(c.id)})</span>
            </button>
          ))}
        </div>
      </div>

      <p className="mt-5 text-sm text-muted" aria-live="polite">
        {filtered.length === posts.length ? `${posts.length} articles` : `${filtered.length} of ${posts.length} articles match`}
      </p>

      {shown.length ? (
        <div className="eq-titles [--eq-lines:3] mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((p) => <BlogCard key={p.slug} post={p} />)}
        </div>
      ) : (
        <div className="mt-4 rounded-2xl border border-dashed border-line p-10 text-center">
          <p className="font-semibold">No articles match your search.</p>
          <button type="button" onClick={() => { setQ(""); setCat("all"); setPage(1); }} className="mt-3 text-sm font-semibold text-accent-text hover:underline">
            Clear search and filters
          </button>
        </div>
      )}

      {pages > 1 && (
        <nav aria-label="Article pages" className="mt-10 flex items-center justify-center gap-2">
          <button type="button" disabled={current === 1} onClick={() => setPage(current - 1)} className="rounded-lg border border-line px-3 py-2 text-sm font-medium disabled:opacity-40">
            Previous
          </button>
          {Array.from({ length: pages }, (_, i) => i + 1).map((n) => (
            <button
              key={n}
              type="button"
              aria-current={n === current ? "page" : undefined}
              onClick={() => setPage(n)}
              className={`h-10 w-10 rounded-lg border text-sm font-semibold ${n === current ? "border-accent bg-accent text-white" : "border-line"}`}
            >
              {n}
            </button>
          ))}
          <button type="button" disabled={current === pages} onClick={() => setPage(current + 1)} className="rounded-lg border border-line px-3 py-2 text-sm font-medium disabled:opacity-40">
            Next
          </button>
        </nav>
      )}
    </div>
  );
}
