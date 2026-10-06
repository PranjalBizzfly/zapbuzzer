"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Scroll-linked entrance motion, driven by one rAF-throttled scroll listener.
 * Each element settles flat by ~55% of the viewport, so content is always
 * still and readable once it's in the reading zone.
 *
 *   data-scroll3d = one of the modes below
 *   data-scroll3d-i = stagger index (cards in a row arrive one after another)
 *
 *   enter-up     rises from below
 *   enter-left   slides in from the left
 *   enter-right  slides in from the right
 *   flip-x       rises further, pivoting up from its bottom edge
 *   flip-y       slides in from the left, pivoting on its left edge
 *   depth        rises and fades up
 *   swing        swings in like a hanging sign (pivots from the top)
 *   fan          fans out alternately left/right from a stack
 *   recede       drifts down and fades as it scrolls *out* (hero card)
 *
 * Every motion is 2D (translate + a small flat rotate) with whole-pixel offsets.
 * 3D rotations or translateZ render text as a soft bitmap while it moves, so
 * they are not used: text stays sharp during scrolling as well as at rest.
 *
 * Disabled for reduced motion and below 1024px (flat layout on phones).
 *
 * While you scroll, elements follow the scroll; as soon as scrolling stops,
 * anything on screen eases into place and stays settled (data-scroll3d-done).
 */
// Quintic ease-out: long, soft settle.
const ease = (t: number) => 1 - (1 - t) ** 5;
const clamp = (v: number) => Math.min(1, Math.max(0, v));
const f = (n: number, d = 2) => n.toFixed(d);
const px = (n: number) => `${Math.round(n)}px`; // whole pixels keep glyphs on the pixel grid

function transformFor(mode: string, k: number, i: number): { t: string; origin?: string } {
  switch (mode) {
    case "enter-left":
      return { t: `translate(${px(-k * 48)}, 0)` };
    case "enter-right":
      return { t: `translate(${px(k * 48)}, 0)` };
    case "flip-x":
      return { t: `translate(0, ${px(k * 44)}) rotate(${f(k * 1.5)}deg)`, origin: "50% 100%" };
    case "flip-y":
      return { t: `translate(${px(-k * 40)}, 0) rotate(${f(-k * 2)}deg)`, origin: "0% 50%" };
    case "depth":
      return { t: `translate(0, ${px(k * 40)})` };
    case "swing":
      return { t: `translate(0, ${px(k * 28)}) rotate(${f(-k * 3)}deg)`, origin: "50% 0%" };
    case "fan": {
      const dir = i % 2 ? 1 : -1;
      return { t: `translate(${px(dir * k * 32)}, ${px(k * 24)}) rotate(${f(dir * k * 2.5)}deg)` };
    }
    default: // enter-up
      return { t: `translate(0, ${px(k * 34)})` };
  }
}

export function ScrollFX() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const mq = window.matchMedia("(min-width: 1024px)");
    let els: HTMLElement[] = [];
    let raf = 0;
    let idle = 0;
    const SETTLE = "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1)";

    // Scrolling stopped: ease everything on screen to flat.
    const settle = () => {
      if (!mq.matches) return;
      const vh = window.innerHeight;
      for (const el of els) {
        if (!el.style.transform && !el.style.opacity) continue;
        const r = el.getBoundingClientRect();
        if (r.bottom < 0 || r.top > vh) continue;
        el.style.transition = SETTLE;
        el.style.transform = "";
        el.style.opacity = "";
        if (el.dataset.scroll3d !== "recede") el.dataset.scroll3dDone = "1";
      }
    };

    const update = () => {
      raf = 0;
      if (!mq.matches) return;
      const vh = window.innerHeight;
      for (const el of els) {
        if (el.dataset.scroll3dDone) continue;
        const r = el.getBoundingClientRect();
        if (r.bottom < -200 || r.top > vh + 200) continue;
        if (el.style.transition) el.style.transition = el.dataset.scroll3d === "recede" ? "transform 0.25s ease-out, opacity 0.25s ease-out" : "";
        const mode = el.dataset.scroll3d ?? "enter-up";
        if (mode === "recede") {
          const q = ease(clamp(-r.top / (r.height * 0.9)));
          // 2D only (no scale, no 3D): both soften text.
          el.style.transform = q < 0.001 ? "" : `translate(0, ${px(q * 40)})`;
          el.style.opacity = q < 0.001 ? "" : String(1 - q * 0.3);
          continue;
        }
        const i = Number(el.dataset.scroll3dI ?? 0);
        // Staggered items start a little later, so a row arrives in sequence.
        const t = ease(clamp((vh - r.top - i * vh * 0.05) / (vh * 0.6)));
        if (t >= 0.999) {
          // Settled: hand the element back (lets hover tilt work untouched).
          if (!el.matches(":hover")) el.style.transform = "";
          el.style.opacity = "";
          continue;
        }
        const { t: tf, origin } = transformFor(mode, 1 - t, i);
        if (origin) el.style.transformOrigin = origin;
        el.style.transform = tf;
        el.style.opacity = String(0.55 + t * 0.45);
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
      clearTimeout(idle);
      idle = window.setTimeout(settle, 180);
    };
    const collect = () => {
      els = Array.from(document.querySelectorAll<HTMLElement>("[data-scroll3d]"));
      for (const el of els) delete el.dataset.scroll3dDone;
      clearTimeout(idle);
      idle = window.setTimeout(settle, 700); // settle what is on screen after load too
      if (!mq.matches) {
        for (const el of els) {
          el.style.transform = "";
          el.style.opacity = "";
          el.style.transformOrigin = "";
        }
      }
      update();
    };

    collect();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", collect);
    mq.addEventListener("change", collect);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(idle);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", collect);
      mq.removeEventListener("change", collect);
    };
  }, [pathname]);

  return null;
}
