import Link from "next/link";
import Image from "next/image";
import { Typewriter } from "@/components/motion/Typewriter";
import { titleCase, titleCaseNode } from "@/lib/titleCase";

export type Status = "new" | "pinging" | "accepted" | "started" | "delivered" | "overdue" | "escalated";

const statusStyle: Record<Status, string> = {
  new: "bg-surface-2 text-fg/70",
  pinging: "bg-accent-soft text-accent-text",
  accepted: "bg-[oklch(62%_0.16_155/0.12)] text-[oklch(45%_0.13_155)]",
  started: "bg-[oklch(70%_0.15_230/0.14)] text-[oklch(45%_0.14_240)]",
  delivered: "bg-[oklch(62%_0.16_155/0.12)] text-[oklch(42%_0.13_155)]",
  overdue: "bg-[oklch(76.9%_0.188_70/0.16)] text-[oklch(50%_0.14_60)]",
  escalated: "bg-[oklch(60%_0.2_20/0.12)] text-[oklch(50%_0.19_20)]",
};

export function StatusPill({ status, children }: { status: Status; children?: React.ReactNode }) {
  return (
    <span className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-2 py-0.5 text-[11px] font-semibold ${statusStyle[status]}`}>
      <span className={`h-1.5 w-1.5 rounded-full bg-current ${status === "pinging" ? "anim-ping" : ""}`} />
      {children ?? status[0].toUpperCase() + status.slice(1)}
    </span>
  );
}

const avatarTones = [
  "from-violet-500 to-indigo-600 text-white",
  "from-amber-500 to-orange-600 text-white",
  "from-emerald-500 to-teal-600 text-white",
  "from-rose-500 to-pink-600 text-white",
  "from-blue-500 to-cyan-600 text-white",
  "from-fuchsia-500 to-purple-600 text-white",
];

export function Avatar({
  name,
  size = "h-8 w-8 text-xs",
  alt,
  src,
}: {
  name: string;
  size?: string;
  alt?: string;
  src?: string;
}) {
  if (src) {
    return (
      <span className={`${size} relative inline-block shrink-0 overflow-hidden rounded-full ring-2 ring-accent/30 shadow-sm`} title={alt ?? name}>
        <Image
          src={src}
          alt={alt ?? name}
          fill
          sizes="96px"
          className="object-cover"
        />
      </span>
    );
  }

  const initials = name
    .split(/\s+/)
    .map((w) => w[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase() || name[0]?.toUpperCase() || "U";

  const charCode = name.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0);
  const tone = avatarTones[charCode % avatarTones.length];

  return (
    <span
      className={`${size} relative inline-flex shrink-0 items-center justify-center rounded-full bg-gradient-to-br font-heading font-bold shadow-sm ring-2 ring-white/10 ${tone}`}
      title={alt ?? name}
      aria-label={alt ?? name}
    >
      <span>{initials}</span>
    </span>
  );
}

const badgeTones = {
  light: "border-accent/30 bg-accent-soft text-accent-text",
  onDark: "border-accent/40 bg-black/40 text-accent-2",
  onBrand: "border-white/25 bg-white/15 text-white",
};

/** Uppercase pill badge with a spark icon (Sky9-style). */
export function Eyebrow({
  children,
  invert = false,
  tone,
  className = "",
}: {
  children: React.ReactNode;
  invert?: boolean;
  tone?: keyof typeof badgeTones;
  className?: string;
}) {
  const t = tone ?? (invert ? "onDark" : "light");
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider backdrop-blur-md transition-colors duration-200 ${badgeTones[t]} ${className}`}
    >
      <svg className="h-3.5 w-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M12 3l1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8L12 3Z" />
      </svg>
      <span>{titleCaseNode(children)}</span>
    </span>
  );
}

/** Section header: badge, typewriter H2, subtitle. Centered by default. */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  center = true,
  invert = false,
  typewriter = true,
  as: H = "h2",
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  center?: boolean;
  invert?: boolean;
  typewriter?: boolean;
  as?: "h1" | "h2";
}) {
  return (
    <div data-reveal className={`mb-6 sm:mb-10 md:mb-12 ${center ? "text-center" : "text-left"}`}>
      {eyebrow && (
        <div className="mb-3 sm:mb-4">
          <Eyebrow invert={invert}>{titleCase(eyebrow)}</Eyebrow>
        </div>
      )}
      <H className={`mb-3 font-heading text-[1.6rem] font-extrabold leading-tight tracking-tight sm:mb-4 sm:text-4xl md:text-5xl ${invert ? "text-white" : "text-fg"}`}>
        {typewriter ? <Typewriter text={titleCase(title)} /> : titleCase(title)}
      </H>
      {intro && (
        <p className={`max-w-3xl text-base leading-relaxed sm:text-lg md:text-xl ${center ? "mx-auto" : ""} ${invert ? "text-white/75" : "text-muted"}`}>{intro}</p>
      )}
    </div>
  );
}

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "light" | "ghost-dark" | "dark";
  className?: string;
}) {
  const styles = {
    primary:
      "btn-shimmer bg-accent text-white shadow-[0_12px_28px_-12px_oklch(56%_0.2_277/0.6)] hover:bg-accent-hover hover:shadow-[0_16px_34px_-12px_oklch(56%_0.2_277/0.75)]",
    secondary: "btn-shimmer border-2 border-accent/40 bg-surface text-accent-text shadow-card backdrop-blur-sm hover:border-accent hover:bg-accent-soft",
    light: "btn-shimmer bg-white text-[#2e2f8f] shadow-[0_14px_30px_-12px_#0007] hover:bg-[#eef0ff]",
    "ghost-dark": "btn-shimmer border-2 border-white/70 text-white backdrop-blur-sm hover:bg-white/10",
    dark: "btn-shimmer bg-ink text-white hover:bg-ink-2 dark:bg-white dark:text-ink dark:hover:bg-white/90",
  }[variant];
  const cls = `group inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 text-sm font-semibold transition duration-300 hover:-translate-y-0.5 active:translate-y-0 sm:px-8 sm:py-4 sm:text-base ${styles} ${className}`;
  const inner = (
    <>
      <span className="relative z-[2]">{titleCaseNode(children)}</span>
      {(variant === "primary" || variant === "light" || variant === "dark") && (
        <svg className="relative z-[2] h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M5 12h14m-6-6 6 6-6 6" />
        </svg>
      )}
    </>
  );
  return href.startsWith("http") ? (
    <a href={href} className={cls}>
      {inner}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}

/** Browser/app chrome frame for product mockups. */
export function Frame({ title, children, className = "" }: { title: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={`halo ${className}`}>
    <div className="overflow-hidden rounded-2xl border border-line/90 bg-surface/95 text-fg shadow-lift backdrop-blur-xl">
      <div className="flex items-center gap-2 border-b border-line bg-surface-2/70 px-4 py-2.5">
        <span className="flex gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </span>
        <span className="truncate text-xs font-medium text-muted">{title}</span>
      </div>
      <div className="p-4 sm:p-5">{children}</div>
    </div>
    </div>
  );
}

export function Phone({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <div className="mx-auto w-[260px] max-w-full rounded-[2.2rem] border-[7px] border-ink bg-ink p-0.5 shadow-lift" role="img" aria-label={label}>
      <div className="overflow-hidden rounded-[1.7rem] bg-bg text-fg">
        <div className="flex justify-center py-1.5">
          <span className="h-1.5 w-16 rounded-full bg-ink/80" />
        </div>
        <div className="px-3.5 pb-4">{children}</div>
      </div>
    </div>
  );
}
