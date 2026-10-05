"use client";

import { useEffect, useRef, useState } from "react";

/** Counts a value like "96%", "32s", "−87%", "4.8★" or "1.2M" up from zero when visible. */
export function CountUp({ value, duration = 1800, className = "" }: { value: string; duration?: number; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [out, setOut] = useState(value);

  useEffect(() => {
    const m = value.match(/^([^\d]*)([\d,]+(?:\.\d+)?)(.*)$/);
    const el = ref.current;
    if (!m || !el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const [, pre, num, post] = m;
    const target = parseFloat(num.replace(/,/g, ""));
    const decimals = num.includes(".") ? num.split(".")[1].length : 0;
    let raf = 0;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          const eased = p === 1 ? 1 : 1 - 2 ** (-10 * p);
          setOut(`${pre}${(target * eased).toFixed(decimals)}${post}`);
          if (p < 1) raf = requestAnimationFrame(tick);
          else setOut(value);
        };
        raf = requestAnimationFrame(tick);
      },
      { rootMargin: "0px 0px -50px 0px" },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value, duration]);

  return (
    <span ref={ref} className={className} aria-label={value}>
      <span aria-hidden>{out}</span>
    </span>
  );
}
