"use client";

import { useId, useState } from "react";

/** Single-open FAQ accordion (numbered, Sky9 style). Answers stay in the DOM for SEO. */
export function Accordion({ items, numbered = false, defaultOpen = 0 }: { items: { q: string; a: string }[]; numbered?: boolean; defaultOpen?: number | null }) {
  const [open, setOpen] = useState<number | null>(defaultOpen);
  const uid = useId();
  return (
    <div className="mx-auto max-w-3xl space-y-3 sm:space-y-4">
      {items.map((f, i) => {
        const isOpen = open === i;
        return (
          <div
            key={i}
            data-reveal
            style={{ ["--reveal-delay" as string]: `${Math.min(i, 8) * 0.05}s` } as React.CSSProperties}
            className={`overflow-hidden rounded-2xl border backdrop-blur-md transition duration-300 ${
              isOpen ? "border-accent/70 bg-glass-strong shadow-[0_12px_30px_-14px_oklch(56%_0.2_277/0.45)]" : "border-line bg-glass hover:border-accent/40 hover:shadow-card"
            }`}
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              aria-controls={`${uid}-a${i}`}
              id={`${uid}-q${i}`}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
            >
              <span className="flex items-start gap-3">
                {numbered && <span className="mt-0.5 w-7 shrink-0 font-mono text-xs font-bold text-accent-text">{String(i + 1).padStart(2, "0")}.</span>}
                <span className={`font-heading text-[15px] font-semibold transition-colors sm:text-lg ${isOpen ? "text-accent-text" : "text-fg"}`}>{f.q}</span>
              </span>
              <span
                className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition duration-300 ${
                  isOpen ? "rotate-180 bg-accent text-white shadow-[0_6px_14px_-6px_oklch(56%_0.2_277/0.8)]" : "bg-surface-2 text-muted"
                }`}
                aria-hidden
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </span>
            </button>
            <div id={`${uid}-a${i}`} role="region" aria-labelledby={`${uid}-q${i}`} hidden={!isOpen} className={isOpen ? "anim-open" : ""}>
              <p className={`mt-1 border-t border-line px-5 pb-6 pt-4 text-sm leading-relaxed text-muted sm:px-6 sm:text-base ${numbered ? "sm:pl-16" : ""}`}>{f.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
