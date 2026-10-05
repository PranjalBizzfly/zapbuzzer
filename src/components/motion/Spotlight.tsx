"use client";

import { useRef } from "react";

/** Card with a soft radial highlight that follows the cursor. */
export function Spotlight({
  children,
  className = "",
  as: Tag = "div",
  ...rest
}: { children: React.ReactNode; className?: string; as?: "div" | "li" | "article" } & React.HTMLAttributes<HTMLElement>) {
  const ref = useRef<HTMLElement>(null);
  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  return (
    <Tag ref={ref as React.Ref<never>} onMouseMove={onMove} className={`spotlight relative overflow-hidden ${className}`} {...rest}>
      <span className="spotlight-layer" aria-hidden />
      {children}
    </Tag>
  );
}
