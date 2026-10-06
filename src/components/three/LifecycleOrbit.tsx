"use client";

import { useEffect, useRef, useState } from "react";
import { Icon, type IconName } from "@/components/ui/Icon";

type Stage = [title: string, body: string, icon: IconName];

/**
 * Pinned, scroll-driven 3D ring: the section holds in place while the six
 * request stages rotate past on a cylinder, each coming to the front in turn.
 * Desktop only; phones and reduced-motion users get the regular grid (children).
 */
export function LifecycleOrbit({ stages, children }: { stages: Stage[]; children: React.ReactNode }) {
  const wrap = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const rm = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setEnabled(mq.matches && !rm.matches);
    sync();
    mq.addEventListener("change", sync);
    rm.addEventListener("change", sync);
    return () => {
      mq.removeEventListener("change", sync);
      rm.removeEventListener("change", sync);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;
    let raf = 0;
    const step = 360 / stages.length;
    const update = () => {
      raf = 0;
      const el = wrap.current;
      const r = ring.current;
      if (!el || !r) return;
      const rect = el.getBoundingClientRect();
      const span = rect.height - window.innerHeight;
      const p = Math.min(1, Math.max(0, -rect.top / Math.max(1, span)));
      const angle = p * step * (stages.length - 1);
      r.style.transform = `translateZ(-460px) rotateY(${(-angle).toFixed(2)}deg)`;
      setActive(Math.round(p * (stages.length - 1)));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [enabled, stages.length]);

  if (!enabled) return <>{children}</>;

  const step = 360 / stages.length;
  return (
    <div ref={wrap} className="relative" style={{ height: "230vh" }}>
      <div className="sticky top-[14vh] flex h-[72vh] flex-col items-center justify-center overflow-hidden">
        {/* Soft floor glow */}
        <div className="pointer-events-none absolute bottom-[8%] left-1/2 h-40 w-[60%] -translate-x-1/2 rounded-[50%] bg-accent/25 blur-3xl" aria-hidden />

        <div className="relative h-[300px] w-full" style={{ perspective: "1500px" }}>
          <div
            ref={ring}
            className="absolute left-1/2 top-1/2 h-0 w-0 transition-transform duration-700 ease-out"
            style={{ transformStyle: "preserve-3d", transform: "translateZ(-460px)" }}
          >
            {stages.map(([t, d, ic], i) => {
              const isActive = i === active;
              return (
                <div
                  key={t}
                  className={`absolute -left-[130px] -top-[130px] flex h-[260px] w-[260px] flex-col items-center justify-center rounded-3xl border p-6 text-center backdrop-blur-xl transition duration-500 [backface-visibility:hidden] ${
                    isActive
                      ? "border-accent/70 bg-glass-strong shadow-[0_30px_70px_-25px_oklch(56%_0.2_277/0.7)]"
                      : "border-line bg-glass opacity-60"
                  }`}
                  style={{ transform: `rotateY(${i * step}deg) translateZ(460px)` }}
                >
                  <span
                    className={`mb-4 grid h-16 w-16 place-items-center rounded-2xl text-white transition duration-500 ${
                      isActive ? "scale-110 bg-gradient-to-br from-accent to-fuchsia shadow-[0_14px_30px_-10px_oklch(56%_0.2_277/0.9)]" : "bg-gradient-to-br from-accent/70 to-violet/70"
                    }`}
                  >
                    <Icon name={ic} className="h-7 w-7" />
                  </span>
                  <h3 className="font-heading text-xl font-bold">{t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{d}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Progress rail */}
        <ol className="relative mt-10 flex items-center gap-2" aria-label="Request stages">
          {stages.map(([t], i) => (
            <li key={t} className="flex items-center gap-2">
              <span
                className={`flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-bold transition duration-300 ${
                  i === active ? "border-accent bg-accent text-white" : i < active ? "border-accent/40 bg-accent-soft text-accent-text" : "border-line text-muted"
                }`}
              >
                <span className="font-mono">0{i + 1}</span>
                {t}
              </span>
              {i < stages.length - 1 && <span className={`h-px w-6 ${i < active ? "bg-accent" : "bg-line"}`} />}
            </li>
          ))}
        </ol>
        <p className="mt-4 text-xs font-medium uppercase tracking-[0.2em] text-muted">Keep scrolling to follow the request</p>
      </div>
    </div>
  );
}
