"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Types `text` out once it scrolls into view. The full text is always in the
 * DOM (an invisible copy reserves the space and stays readable to crawlers and
 * screen readers), so layout never jumps and SEO is unaffected.
 */
export function Typewriter({
  text,
  speed = 38,
  delay = 150,
  cursor = false,
  className = "",
  highlight,
}: {
  text: string;
  speed?: number;
  delay?: number;
  cursor?: boolean;
  className?: string;
  /** A phrase inside `text` to render with the brand gradient (e.g. "One Coffee."). */
  highlight?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [shown, setShown] = useState<number | null>(null); // null = not started (render full text)
  const [done, setDone] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let timer: ReturnType<typeof setTimeout> | undefined;
    let interval: ReturnType<typeof setInterval> | undefined;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        setShown(0);
        let i = 0;
        // Long headings type faster so they never take more than ~1.6s.
        const step = Math.max(1, Math.ceil(text.length / (1600 / speed)));
        timer = setTimeout(() => {
          interval = setInterval(() => {
            i = Math.min(text.length, i + step);
            setShown(i);
            if (i >= text.length) {
              clearInterval(interval);
              setDone(true);
            }
          }, speed);
        }, delay);
      },
      { rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      if (timer) clearTimeout(timer);
      if (interval) clearInterval(interval);
    };
  }, [text, speed, delay]);

  // Renders the first `n` characters, with the highlighted phrase in the gradient style.
  const hs = highlight ? text.indexOf(highlight) : -1;
  const render = (n: number) => {
    const part = text.slice(0, n);
    if (hs < 0 || n <= hs) return part;
    return (
      <>
        {part.slice(0, hs)}
        <span className="text-gradient-brand">{part.slice(hs, hs + highlight!.length)}</span>
        {part.slice(hs + highlight!.length)}
      </>
    );
  };

  if (shown === null) return <span ref={ref} className={className}>{render(text.length)}</span>;

  return (
    <span ref={ref} className={`relative inline-block ${className}`}>
      <span className="invisible">{render(text.length)}</span>
      <span className="absolute inset-0" aria-hidden>
        {render(shown)}
        {(cursor || !done) && (
          <span className="tw-caret inline-block h-[0.85em] w-0 align-middle shadow-[5.5px_0_0_1.5px_var(--color-accent),5.5px_0_8px_1.5px_oklch(56%_0.2_277/0.6)]" />
        )}
      </span>
    </span>
  );
}
