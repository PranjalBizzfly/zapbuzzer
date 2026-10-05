"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { IndexedPage } from "@/lib/pageIndex";
import { Icon } from "@/components/ui/Icon";

/** "Explore all pages": search box, section chips with counts, collapsible groups. */
export function PageExplorer({ pages, groups }: { pages: IndexedPage[]; groups: { id: string; name: string }[] }) {
  const [q, setQ] = useState("");
  const [filter, setFilter] = useState("all");
  const [collapsed, setCollapsed] = useState<Set<string>>(new Set());

  const words = q.toLowerCase().trim().split(/\s+/).filter(Boolean);
  const visible = useMemo(
    () =>
      pages.filter(
        (p) =>
          (filter === "all" || p.groupId === filter) &&
          words.every((w) => `${p.label} ${p.title} ${p.description} ${p.group}`.toLowerCase().includes(w)),
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [pages, filter, q],
  );
  const counts = useMemo(() => Object.fromEntries(groups.map((g) => [g.id, pages.filter((p) => p.groupId === g.id).length])), [groups, pages]);
  const shownGroups = groups.filter((g) => visible.some((p) => p.groupId === g.id));
  const allCollapsed = shownGroups.length > 0 && shownGroups.every((g) => collapsed.has(g.id));

  const toggle = (id: string) =>
    setCollapsed((s) => {
      const n = new Set(s);
      if (n.has(id)) n.delete(id);
      else n.add(id);
      return n;
    });

  const chip = (id: string, label: string, count: number) => (
    <button
      key={id}
      type="button"
      onClick={() => setFilter(id)}
      aria-pressed={filter === id}
      className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-2 text-sm font-medium transition ${
        filter === id ? "border-accent bg-accent-soft text-accent-text ring-2 ring-accent/20" : "border-line bg-surface text-fg/80 hover:border-accent/40 hover:text-accent-text"
      }`}
    >
      {label}
      <span className="text-xs text-muted">{count}</span>
    </button>
  );

  return (
    <>
      {/* Controls panel */}
      <div className="rounded-3xl border border-line bg-surface-2/60 p-5 sm:p-7">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <label className="relative block w-full sm:max-w-md">
            <span className="sr-only">Search pages</span>
            <Icon name="search" className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search pages…"
              className="w-full rounded-full border border-line bg-surface py-3 pl-11 pr-4 text-[15px] text-fg outline-none transition focus:border-accent focus:ring-4 focus:ring-accent/15"
            />
          </label>
          <div className="flex items-center gap-6">
            <span className="text-xs font-bold uppercase tracking-[0.15em]">{visible.length} pages</span>
            <button
              type="button"
              onClick={() => setCollapsed(allCollapsed ? new Set() : new Set(shownGroups.map((g) => g.id)))}
              className="border-b-2 border-accent pb-0.5 text-xs font-bold tracking-wider text-fg transition-colors hover:text-accent-text"
            >
              {allCollapsed ? "Expand all" : "Collapse all"}
            </button>
          </div>
        </div>
        <div className="mt-5 flex flex-wrap gap-2.5">
          {chip("all", "All", pages.length)}
          {groups.map((g) => chip(g.id, g.name, counts[g.id]))}
        </div>
      </div>

      {/* Groups */}
      {shownGroups.length === 0 && <p className="py-16 text-center text-muted">No pages match “{q}”. Try a different word.</p>}
      <div className="mt-10 space-y-12">
        {shownGroups.map((g) => {
          const items = visible.filter((p) => p.groupId === g.id);
          const isCollapsed = collapsed.has(g.id);
          return (
            <section key={g.id} aria-labelledby={`grp-${g.id}`}>
              <div className="flex items-end justify-between gap-4 border-b border-line pb-4">
                <h2 id={`grp-${g.id}`} className="font-heading text-3xl font-extrabold uppercase tracking-tight sm:text-4xl">
                  {g.name}
                </h2>
                <button
                  type="button"
                  onClick={() => toggle(g.id)}
                  aria-expanded={!isCollapsed}
                  aria-controls={`list-${g.id}`}
                  className="flex shrink-0 items-center gap-1.5 text-xs font-bold uppercase tracking-[0.15em] text-muted transition-colors hover:text-accent-text"
                >
                  {items.length} pages
                  <Icon name="chevronDown" className={`h-4 w-4 transition-transform ${isCollapsed ? "-rotate-90" : ""}`} />
                </button>
              </div>
              {!isCollapsed && (
                <ul id={`list-${g.id}`} className="anim-open mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((p) => (
                    <li key={p.href} className="min-w-0">
                      <Link href={p.href} title={p.label} className="block truncate text-[15px] text-fg/85 transition-colors hover:text-accent-text hover:underline hover:underline-offset-4">
                        {p.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          );
        })}
      </div>
    </>
  );
}
