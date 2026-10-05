/** Minimal inline icon set (24px, stroke-based) used across the UI. */
const paths = {
  bolt: "M13 2 4 14h7l-1 8 9-12h-7l1-8Z",
  layers: "m12 2 10 5-10 5L2 7l10-5Z M2 12l10 5 10-5 M2 17l10 5 10-5",
  sparkles: "M12 3l1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8L12 3Z M19 15l.8 2.2 2.2.8-2.2.8L19 21l-.8-2.2-2.2-.8 2.2-.8L19 15Z",
  users: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2 M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z M22 21v-2a4 4 0 0 0-3-3.9 M16 3.1a4 4 0 0 1 0 7.8",
  target: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
  book: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5v14Z M4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5",
  compass: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z m4.2-14.2-2.1 6.3-6.3 2.1 2.1-6.3 6.3-2.1Z",
  building: "M3 21h18 M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16 M9 7h1 M14 7h1 M9 11h1 M14 11h1 M9 15h1 M14 15h1",
  workflow: "M3 3h6v6H3z M15 15h6v6h-6z M6 9v3a3 3 0 0 0 3 3h6",
  mail: "M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z m18 2-10 7L2 6",
  pin: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
  phone: "M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z M11 18h2",
  play: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z M10 8l6 4-6 4V8Z",
  calendar: "M8 2v4 M16 2v4 M3 10h18 M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z",
  arrowRight: "M5 12h14 m-6-6 6 6-6 6",
  arrowUpRight: "M7 17 17 7 M8 7h9v9",
  check: "M20 6 9 17l-5-5",
  home: "m3 10 9-7 9 7v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V10Z M9 22V12h6v10",
  chevronDown: "m6 9 6 6 6-6",
  plus: "M12 5v14 M5 12h14",
  clock: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z M12 6v6l4 2",
  shield: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z",
  chart: "M3 3v18h18 M7 16v-5 M12 16V8 M17 16v-9",
  search: "M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z m10 2-4.35-4.35",
  grid: "M3 3h7v7H3z M14 3h7v7h-7z M14 14h7v7h-7z M3 14h7v7H3z",
} as const;

export type IconName = keyof typeof paths;

export function Icon({ name, className = "h-4 w-4", strokeWidth = 2 }: { name: IconName; className?: string; strokeWidth?: number }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d={paths[name]} />
    </svg>
  );
}

/** Rounded accent tile holding an icon. */
export function IconChip({ name, className = "h-9 w-9", iconClass = "h-4 w-4" }: { name: IconName; className?: string; iconClass?: string }) {
  return (
    <span className={`${className} inline-grid shrink-0 place-items-center rounded-xl border border-accent/15 bg-accent-soft text-accent-text transition-transform duration-300 group-hover:scale-110`}>
      <Icon name={name} className={iconClass} />
    </span>
  );
}
