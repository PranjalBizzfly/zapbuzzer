"use client";

import { useEffect, useState } from "react";
import { Avatar, StatusPill, type Status } from "@/components/ui/primitives";

const steps: { status: Status; label: string; note: string }[] = [
  { status: "new", label: "Buzzed", note: "Aarav · Boss Cabin" },
  { status: "pinging", label: "Pinging pantry", note: "App · Telegram · WhatsApp · Email" },
  { status: "accepted", label: "Raj accepted", note: "First to tap · 12s" },
  { status: "started", label: "On the way", note: "ETA 3 min" },
  { status: "delivered", label: "Delivered", note: "Rated ★★★★★" },
];

/** Hero card that walks one request through its lifecycle. */
export function LiveRequest() {
  const [i, setI] = useState(0);
  useEffect(() => {
    // Reduced motion: stay on the first state instead of cycling.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setI((n) => (n + 1) % steps.length), 1900);
    return () => clearInterval(t);
  }, []);
  const s = steps[i];

  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-accent/25 via-violet/20 to-fuchsia/20 blur-2xl" aria-hidden />
      <div className="relative rounded-3xl border border-line bg-surface p-5 shadow-lift">
        <div className="flex items-center justify-between">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted">Request #4821</p>
          <StatusPill status={s.status}>{s.label}</StatusPill>
        </div>
        <div className="mt-4 flex items-center gap-3">
          <span className="grid h-12 w-12 place-items-center rounded-2xl bg-accent-soft text-2xl" aria-hidden>☕</span>
          <div>
            <p className="font-semibold">2× Black coffee</p>
            <p className="text-sm text-muted">Boss Cabin · “Board call, quick please”</p>
          </div>
        </div>
        <ol className="mt-5 grid grid-cols-5 gap-1.5" aria-label="Request progress">
          {steps.map((st, k) => (
            <li key={st.label} className={`h-1.5 rounded-full transition-colors duration-500 ${k <= i ? "bg-gradient-to-r from-accent to-violet" : "bg-surface-2"}`}>
              <span className="sr-only">{st.label}{k <= i ? " (done)" : ""}</span>
            </li>
          ))}
        </ol>
        <div className="mt-4 flex items-center justify-between rounded-2xl bg-surface-2 px-3.5 py-3" aria-live="polite">
          <div className="flex items-center gap-2.5">
            {i >= 2 ? <Avatar name="Raj" /> : <span className="grid h-8 w-8 place-items-center rounded-full bg-surface text-sm" aria-hidden>🔔</span>}
            <div>
              <p className="text-sm font-semibold">{s.label}</p>
              <p className="text-xs text-muted">{s.note}</p>
            </div>
          </div>
          <span className="font-mono text-xs tabular-nums text-muted">{["2:00:00", "2:00:01", "2:00:12", "2:01:00", "2:04:00"][i]}</span>
        </div>
      </div>
      <div className="relative mt-3 grid grid-cols-4 gap-2 text-center">
        {[
          ["📄", "Print 24 pgs"],
          ["💻", "Projector"],
          ["❄️", "AC too cold"],
          ["📦", "Courier"],
        ].map(([e, l]) => (
          <div key={l} className="rounded-2xl border border-line bg-surface/90 px-1 py-2.5 shadow-card">
            <span aria-hidden>{e}</span>
            <p className="text-[10px] font-medium text-muted">{l}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
