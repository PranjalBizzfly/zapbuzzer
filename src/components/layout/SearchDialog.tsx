"use client";

import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import type { IndexedPage } from "@/lib/pageIndex";
import { Icon } from "@/components/ui/Icon";

const startHere = [
  { href: "/overview", label: "Overview" },
  { href: "/features", label: "Features" },
  { href: "/solutions/pantry", label: "Pantry" },
  { href: "/pricing", label: "Pricing" },
  { href: "/resource-hub", label: "Resource Hub" },
];

let cache: IndexedPage[] | null = null;

/** Score a page against the query words (all words must match somewhere). */
function score(p: IndexedPage, words: string[]) {
  const label = p.label.toLowerCase();
  const hay = `${label} ${p.title} ${p.group} ${p.description}`.toLowerCase();
  let s = 0;
  for (const word of words) {
    // Match the word, or its root, so "printer", "printing" and "prints" all find "print".
    const root = word.length > 4 ? word.replace(/(ers|er|ing|es|ed|s)$/, "") : word;
    const w = hay.includes(word) ? word : root.length >= 3 && hay.includes(root) ? root : "";
    if (!w) return 0;
    s += label.startsWith(w) ? 6 : label.includes(w) ? 4 : p.title.toLowerCase().includes(w) ? 2 : 1;
  }
  return s;
}

export function SearchDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  const router = useRouter();
  const [q, setQ] = useState("");
  const [index, setIndex] = useState<IndexedPage[] | null>(cache);
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (!open) return;
    setTimeout(() => inputRef.current?.focus(), 30);
    if (!cache)
      fetch("/search-index.json")
        .then((r) => r.json())
        .then((d: IndexedPage[]) => {
          cache = d;
          setIndex(d);
        })
        .catch(() => {});
  }, [open]);

  const results = useMemo(() => {
    const words = q.toLowerCase().trim().split(/\s+/).filter(Boolean);
    if (!words.length) return startHere.map((s) => ({ href: s.href, label: s.label, group: "" }));
    if (!index) return [];
    return index
      .map((p) => ({ p, s: score(p, words) }))
      .filter((x) => x.s > 0)
      .sort((a, b) => b.s - a.s)
      .slice(0, 8)
      .map(({ p }) => ({ href: p.href, label: p.label, group: p.group }));
  }, [q, index]);

  const go = (href: string) => {
    onClose();
    setQ("");
    router.push(href);
  };

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") onClose();
    else if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => Math.min(a + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => Math.max(a - 1, 0));
    } else if (e.key === "Enter" && results[active]) {
      e.preventDefault();
      go(results[active].href);
    }
  };

  useEffect(() => {
    listRef.current?.querySelector<HTMLElement>(`[data-i="${active}"]`)?.scrollIntoView({ block: "nearest" });
  }, [active]);

  if (!open) return null;
  const total = index?.length ?? 200;

  return (
    <div className="fixed inset-0 z-[1000] flex items-start justify-center px-4 pt-[12vh]" role="dialog" aria-modal="true" aria-label="Search the site">
      <div className="anim-fade-in absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="anim-menu relative w-full max-w-xl overflow-hidden rounded-3xl border border-line bg-surface shadow-2xl" onKeyDown={onKey}>
        <div className="flex items-center gap-3 border-b border-line px-5 py-4">
          <Icon name="search" className="h-5 w-5 shrink-0 text-muted" />
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => {
              setQ(e.target.value);
              setActive(0);
            }}
            placeholder="Search features, solutions, guides…"
            aria-label="Search Pages"
            className="min-w-0 flex-1 bg-transparent text-base text-fg outline-none placeholder:text-muted"
          />
          <button type="button" onClick={onClose} className="rounded-lg border border-line px-2 py-1 text-xs font-semibold text-muted hover:text-fg">
            Esc
          </button>
        </div>

        <div className="max-h-[50vh] overflow-y-auto p-3">
          <p className="px-3 pb-2 pt-1 text-xs font-bold uppercase tracking-wider text-accent-text">{q.trim() ? "Results" : "Start here"}</p>
          {results.length === 0 ? (
            <p className="px-3 py-6 text-center text-sm text-muted">{index ? `No pages match “${q}”.` : "Loading…"}</p>
          ) : (
            <ul ref={listRef} className="space-y-0.5">
              {results.map((r, i) => (
                <li key={r.href}>
                  <button
                    type="button"
                    data-i={i}
                    onMouseEnter={() => setActive(i)}
                    onClick={() => go(r.href)}
                    className={`flex w-full items-center justify-between gap-3 rounded-xl px-3 py-3 text-left transition-colors ${i === active ? "bg-accent-soft text-accent-text" : "text-fg hover:bg-surface-2"}`}
                  >
                    <span className="min-w-0">
                      <span className="block truncate text-[15px] font-medium">{r.label}</span>
                      {r.group && <span className="block truncate text-xs text-muted">{r.group}</span>}
                    </span>
                    <Icon name="arrowRight" className="h-4 w-4 shrink-0 text-accent" />
                  </button>
                </li>
              ))}
            </ul>
          )}
          <p className="px-3 pb-1 pt-3 text-xs text-muted">Type to search every page on the site. Use ↑ ↓ to move, Enter to open.</p>
        </div>

        <button type="button" onClick={() => go("/explore-all-pages")} className="flex w-full items-center justify-between border-t border-line bg-surface-2/70 px-5 py-4 text-left transition-colors hover:bg-accent-soft">
          <span className="flex items-center gap-3 font-semibold">
            <Icon name="grid" className="h-4 w-4 text-accent" />
            Explore All Pages
          </span>
          <span className="flex items-center gap-2 text-sm text-muted">
            {total} pages
            <Icon name="arrowRight" className="h-4 w-4 text-accent" />
          </span>
        </button>
      </div>
    </div>
  );
}
