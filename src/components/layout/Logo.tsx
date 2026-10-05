import Link from "next/link";

export function LogoMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <span
      className={`${className} inline-grid place-items-center rounded-xl bg-gradient-to-br from-accent via-violet to-fuchsia text-white shadow-card`}
      aria-hidden
    >
      <svg viewBox="0 0 24 24" className="h-[60%] w-[60%]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
      </svg>
    </span>
  );
}

export function Logo({ invert = false }: { invert?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2.5 font-bold tracking-tight" aria-label="ZapBuzzer home">
      <LogoMark />
      <span className={`text-lg ${invert ? "text-white" : "text-fg"}`}>ZapBuzzer</span>
    </Link>
  );
}
