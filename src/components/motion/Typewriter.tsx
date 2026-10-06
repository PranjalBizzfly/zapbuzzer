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
}: {
  text: string;
  speed?: number;
  delay?: number;
  cursor?: boolean;
  className?: string;
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

  if (shown === null) return <span ref={ref} className={className}>{text}</span>;

  return (
    <span ref={ref} className={`relative inline-block ${className}`}>
      <span className="invisible">{text}</span>
      <span className="absolute inset-0" aria-hidden>
        {text.slice(0, shown)}
        {(cursor || !done) && (
          <span className="tw-caret -mr-[7px] ml-1 inline-block h-[0.85em] w-[3px] rounded-sm bg-accent align-middle shadow-[0_0_8px_oklch(56%_0.2_277/0.6)]" />
        )}
      </span>
    </span>
  );
}
