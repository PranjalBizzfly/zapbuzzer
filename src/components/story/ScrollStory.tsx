"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Pinned, scroll-linked section. While you scroll through `length` viewport
 * heights, the stage stays pinned under the header and its --p goes 0 → 1.
 * Children use `.st` elements (see globals.css) to animate from --p.
 *
 * Phones (<1024px) and reduced-motion users get a normal, unpinned layout with
 * every element settled (`.story-static`), so nothing is hidden or stuck.
 */
export function ScrollStory({
  length = 2.2,
  settleAt = 1,
  className = "",
  stageClassName = "",
  children,
  label,
}: {
  /** Pinned scroll distance, in viewport heights (including the stage itself). */
  length?: number;
  /**
   * The --p value at which the last animation inside has finished (plus a short
   * read-hold). The pinned distance is trimmed so the story releases right there
   * instead of holding a finished, frozen screen; animation speed is unchanged.
   */
  settleAt?: number;
  className?: string;
  stageClassName?: string;
  children: React.ReactNode;
  label?: string;
}) {
  const outer = useRef<HTMLDivElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const [pinned, setPinned] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const rm = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setPinned(mq.matches && !rm.matches);
    sync();
    mq.addEventListener("change", sync);
    rm.addEventListener("change", sync);
    return () => {
      mq.removeEventListener("change", sync);
      rm.removeEventListener("change", sync);
    };
  }, []);

  useEffect(() => {
    if (!pinned) return;
    let raf = 0;
    let current = -1;
    let target = 0;
    // Light smoothing so wheel steps glide instead of jumping.
    const tick = () => {
      raf = 0;
      if (current < 0) current = target;
      current += (target - current) * 0.18;
      if (Math.abs(target - current) < 0.0005) current = target;
      stage.current?.style.setProperty("--p", current.toFixed(4));
      if (current !== target) raf = requestAnimationFrame(tick);
    };
    const measure = () => {
      const el = outer.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const span = r.height - window.innerHeight;
      target = Math.min(1, Math.max(0, -r.top / Math.max(1, span))) * settleAt;
      if (!raf) raf = requestAnimationFrame(tick);
    };
    measure();
    window.addEventListener("scroll", measure, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", measure);
      window.removeEventListener("resize", measure);
    };
  }, [pinned, settleAt]);

  return (
    <div ref={outer} className={`relative overflow-x-clip ${pinned ? "" : "story-static"} ${className}`} style={pinned ? { height: `${(1 + (length - 1) * settleAt) * 100}vh` } : undefined} aria-label={label}>
      <div
        ref={stage}
        className={`${pinned ? "sticky top-16 h-[calc(100vh-4rem)] overflow-hidden" : ""} ${stageClassName}`}
        style={pinned ? ({ ["--p" as string]: 0 } as React.CSSProperties) : undefined}
      >
        {children}
      </div>
    </div>
  );
}
