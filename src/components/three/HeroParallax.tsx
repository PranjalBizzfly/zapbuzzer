"use client";

import { useEffect, useRef } from "react";

/**
 * Wraps the hero copy in a 3D space. Children sit on depth layers (via the
 * independent CSS `translate` property, so their entrance animations still
 * work), and the block tilts gently toward the cursor so the layers shift
 * against each other. Pointer devices only; off for reduced motion.
 *
 * The tilt only follows the pointer while it is over the hero and moving. When it
 * leaves or rests, the copy eases back to perfectly flat and the transform is
 * removed, so the headline is never left sitting at an angle (which softens text).
 */
export function HeroParallax({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let tx = 0, ty = 0, x = 0, y = 0, raf = 0, idle = 0;
    const zone = el.closest("section") ?? el;
    const settle = () => {
      tx = 0;
      ty = 0;
      if (!raf) raf = requestAnimationFrame(tick);
    };
    const onMove = (e: PointerEvent) => {
      const r = zone.getBoundingClientRect();
      const inside = e.clientX >= r.left && e.clientX <= r.right && e.clientY >= r.top && e.clientY <= r.bottom;
      tx = inside ? (e.clientX / window.innerWidth - 0.5) * 2 : 0;
      ty = inside ? (e.clientY / window.innerHeight - 0.5) * 2 : 0;
      clearTimeout(idle);
      idle = window.setTimeout(settle, 1400);
      if (!raf) raf = requestAnimationFrame(tick);
    };
    const tick = () => {
      const settling = tx === 0 && ty === 0;
      const k = settling ? 0.16 : 0.06; // follow gently; return to flat briskly
      x += (tx - x) * k;
      y += (ty - y) * k;
      const done = Math.abs(tx - x) + Math.abs(ty - y) <= (settling ? 0.01 : 0.001);
      if (done && tx === 0 && ty === 0) {
        x = y = 0;
        el.style.removeProperty("--hx");
        el.style.removeProperty("--hy");
        el.classList.remove("is-tilting");
        raf = 0;
        return;
      }
      el.classList.add("is-tilting");
      // 2D drift toward the pointer; depth layers scale it (see .z-depth-* in globals.css)
      el.style.setProperty("--hx", `${(x * 12).toFixed(1)}px`);
      el.style.setProperty("--hy", `${(y * 8).toFixed(1)}px`);
      raf = done ? 0 : requestAnimationFrame(tick);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(idle);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <div ref={ref} className={`hero-3d-text ${className}`}>
      {children}
    </div>
  );
}
