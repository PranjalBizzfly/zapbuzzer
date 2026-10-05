"use client";

import { useSyncExternalStore } from "react";

const subscribe = (cb: () => void) => {
  const obs = new MutationObserver(cb);
  obs.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
  return () => obs.disconnect();
};
const isDark = () => document.documentElement.classList.contains("dark");

/** Light/dark switch. The initial theme is set before paint by the script in layout.tsx. */
export function ThemeToggle({ className = "" }: { className?: string }) {
  const dark = useSyncExternalStore(subscribe, isDark, () => false);
  const toggle = () => {
    const next = !isDark();
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("zb-theme", next ? "dark" : "light");
    } catch {}
  };
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle dark/light theme"
      className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border border-line text-fg/70 transition duration-200 hover:scale-[1.08] hover:bg-surface-2 hover:text-accent-text active:scale-90 ${className}`}
    >
      <svg key={dark ? "sun" : "moon"} className="anim-fade-in h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        {dark ? (
          <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.36 6.36-.7-.7M6.34 6.34l-.7-.7m12.72 0-.7.7M6.34 17.66l-.7.7M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
        ) : (
          <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
        )}
      </svg>
    </button>
  );
}
