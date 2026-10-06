"use client";

import { useEffect } from "react";

/**
 * One document-level listener that gives cards a subtle 3D tilt toward the
 * cursor. Applies to `.card-fx` and anything marked `data-tilt`.
 * Pointer devices only; disabled for reduced motion.
 *
 * The tilt follows the pointer while it moves; when the pointer rests on a card,
 * the card eases back to flat (still lifted), so its text is never left at a 3D
 * angle, which renders soft.
 */
const SELECTOR = ".card-fx, [data-tilt]";
const MAX = 3; // max drift is MAX * 2 px either way, kept small so it reads as depth, not motion

export function TiltManager() {
  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let current: HTMLElement | null = null;
    let raf = 0;
    let idle = 0;
    const flatten = () => {
      if (!current) return;
      const lift = current.dataset.tilt === "flat" ? 0 : -4;
      current.style.transition = "transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)";
      current.style.transform = lift ? `translateY(${lift}px)` : "";
    };

    const reset = (el: HTMLElement) => {
      el.style.transition = "";
      el.style.transform = "";
      el.style.removeProperty("--glare-x");
      el.style.removeProperty("--glare-y");
    };

    const onMove = (e: PointerEvent) => {
      const el = (e.target as Element | null)?.closest<HTMLElement>(SELECTOR) ?? null;
      if (current && current !== el) reset(current);
      current = el;
      clearTimeout(idle);
      if (!el) return;
      el.style.transition = "";
      idle = window.setTimeout(flatten, 500);
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        const lift = el.dataset.tilt === "flat" ? 0 : -4;
        // Whole-pixel 2D shift: text stays sharp while the card follows the pointer.
        el.style.transform = `translate(${Math.round(x * MAX * 2)}px, ${Math.round(lift + y * MAX * 2)}px)`;
        el.style.setProperty("--glare-x", `${((x + 0.5) * 100).toFixed(1)}%`);
        el.style.setProperty("--glare-y", `${((y + 0.5) * 100).toFixed(1)}%`);
      });
    };
    const onLeave = () => {
      if (current) reset(current);
      current = null;
    };

    document.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);
    window.addEventListener("blur", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(idle);
      document.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("blur", onLeave);
    };
  }, []);

  return null;
}
