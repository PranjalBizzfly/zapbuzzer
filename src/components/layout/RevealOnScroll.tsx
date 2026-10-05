"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Fades [data-reveal] elements in as they enter the viewport. Content is only
 * hidden after this runs (html.reveal-ready), so nothing disappears without JS.
 */
export function RevealOnScroll() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const root = document.documentElement;
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-visible)"));
    // Anything already on screen shows immediately, so there is no flash on load.
    const vh = window.innerHeight;
    for (const el of els) if (el.getBoundingClientRect().top < vh * 0.92) el.classList.add("is-visible");
    root.classList.add("reveal-ready");

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    els.forEach((el) => el.classList.contains("is-visible") || io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
