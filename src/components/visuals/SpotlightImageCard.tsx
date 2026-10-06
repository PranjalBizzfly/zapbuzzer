import Image from "next/image";
import { Icon, type IconName } from "@/components/ui/Icon";

export interface SpotlightStat {
  label: string;
  value: string;
  sub?: string;
  icon?: IconName;
  highlight?: boolean;
}

export interface SpotlightImageCardProps {
  imageSrc: string;
  imageAlt: string;
  imageBadge: string;
  hubTag?: string;
  category: string;
  categoryIcon: IconName;
  statusText?: string;
  stats: SpotlightStat[];
  activeRequest?: {
    icon: string;
    title: string;
    destination: string;
    owner: string;
    timing: string;
    status: "live" | "delivered" | "in-progress";
  };
}

export function SpotlightImageCard({
  imageSrc,
  imageAlt,
  imageBadge,
  hubTag,
  category,
  categoryIcon,
  statusText = "Live",
  stats,
  activeRequest,
}: SpotlightImageCardProps) {
  return (
    <div className="glass-panel group relative overflow-hidden rounded-3xl border border-line bg-surface/80 p-4 sm:p-5 shadow-2xl backdrop-blur-xl transition duration-500 hover:border-accent/40">
      {/* ── Image Container (Sky9 Composition & Badge) ── */}
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10 bg-surface-2 shadow-inner">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
        {/* Soft bottom vignette for text contrast */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

        {/* Live operational badge on bottom-left */}
        <div className="absolute bottom-3 left-3 z-10 flex items-center gap-2 rounded-full border border-emerald-500/30 bg-black/75 px-3 py-1.5 text-xs font-semibold text-emerald-400 backdrop-blur-md shadow-lg sm:text-[13px]">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>{imageBadge}</span>
        </div>

        {/* Optional top-right tag */}
        {hubTag && (
          <div className="absolute top-3 right-3 z-10 rounded-full border border-white/15 bg-black/60 px-3 py-1 text-[11px] font-mono font-medium text-white/90 backdrop-blur-md">
            {hubTag}
          </div>
        )}
      </div>

      {/* ── Sub-dashboard & Live Telemetry (Sky9 Balance) ── */}
      <div className="mt-4 space-y-3">
        {/* Hub Header */}
        <div className="flex items-center justify-between border-b border-line/60 pb-3">
          <span className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-accent-text">
            <Icon name={categoryIcon} className="h-4 w-4 text-accent" />
            {category}
          </span>
          <span className="flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent-soft px-2.5 py-0.5 font-mono text-[11px] font-bold text-accent-text">
            <span className="h-1.5 w-1.5 rounded-full bg-success animate-ping" />
            {statusText}
          </span>
        </div>

        {/* Key Metrics Strip */}
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {stats.map((s, idx) => (
            <div
              key={idx}
              className={`flex flex-col justify-between rounded-xl border border-line p-2.5 transition duration-300 ${
                s.highlight ? "bg-accent-soft/50 border-accent/30" : "bg-surface-2/60"
              }`}
            >
              <div className="flex items-center justify-between text-[11px] text-muted">
                <span>{s.label}</span>
                {s.icon && <Icon name={s.icon} className="h-3 w-3 text-accent" />}
              </div>
              <p className="mt-1 font-heading text-base font-extrabold tracking-tight sm:text-lg">
                {s.value}
              </p>
              {s.sub && <p className="text-[11px] text-accent-text font-medium">{s.sub}</p>}
            </div>
          ))}
        </div>

        {/* Live Active Request Preview */}
        {activeRequest && (
          <div className="flex items-center justify-between rounded-xl border border-line bg-surface-2/40 px-3 py-2 text-xs">
            <div className="flex items-center gap-2.5 min-w-0">
              <span className="text-base" aria-hidden>{activeRequest.icon}</span>
              <div className="min-w-0">
                <p className="truncate font-semibold text-fg/90">{activeRequest.title}</p>
                <p className="truncate text-[11px] text-muted">
                  {activeRequest.destination} · {activeRequest.owner}
                </p>
              </div>
            </div>
            <span className="shrink-0 rounded-md border border-line bg-surface px-2 py-0.5 font-mono text-[11px] font-bold text-accent-text">
              {activeRequest.timing}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
