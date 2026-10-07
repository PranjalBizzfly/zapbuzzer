"use client";

import Link from "next/link";
import { useState } from "react";
import { Spotlight } from "@/components/motion/Spotlight";
import { Icon, type IconName } from "@/components/ui/Icon";

export interface ExplorerItem {
  title: string;
  body: string;
  href: string;
  icon: IconName;
  tab: string;
  meta: string;
}

/** Filter pills + card grid (Sky9 "courses" section pattern). */
export function FeatureExplorer({ tabs, items }: { tabs: string[]; items: ExplorerItem[] }) {
  const [tab, setTab] = useState(tabs[0]);
  const shown = tab === tabs[0] ? items : items.filter((i) => i.tab === tab);

  return (
    <>
      <div className="no-scrollbar -mx-4 mb-8 flex max-w-full flex-nowrap items-center justify-start gap-2 overflow-x-auto px-4 py-2 sm:mx-0 sm:mb-12 sm:flex-wrap sm:justify-center sm:gap-2.5 sm:px-0">
        {tabs.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setTab(t)}
            aria-pressed={tab === t}
            className={`shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-xs font-bold backdrop-blur-xl transition duration-300 sm:px-5 sm:py-2.5 ${
              tab === t
                ? "scale-105 border border-accent/50 bg-accent text-white shadow-[0_10px_24px_-10px_oklch(56%_0.2_277/0.7)]"
                : "border border-line bg-glass text-fg/75 shadow-sm hover:border-accent/50 hover:bg-accent-soft hover:text-accent-text"
            }`}
          >
            {t}
          </button>
        ))}
      </div>
      <div className="eq-titles flex flex-wrap justify-center gap-5">
        {shown.map((f) => (
          <div key={f.title} className="w-full sm:w-[calc(50%-0.625rem)] lg:w-[calc(25%-0.94rem)]">
            <Spotlight className="glass-panel card-fx group flex h-full flex-col justify-between rounded-2xl p-6 transition duration-300 hover:-translate-y-2">
              <div className="relative z-[2]">
                <div className="mb-5 flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent-soft text-accent transition duration-300 group-hover:scale-110 group-hover:bg-accent group-hover:text-white">
                    <Icon name={f.icon} className="h-6 w-6 transition-transform duration-300 group-hover:rotate-6" />
                  </span>
                  <span className="rounded-full border border-accent/30 bg-accent-soft px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-accent-text">{f.meta}</span>
                </div>
                <h3 className="mb-2 font-heading text-lg font-bold transition-colors group-hover:text-accent-text">{f.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{f.body}</p>
              </div>
              <Link href={f.href} className="relative z-[2] mt-6 inline-flex items-center justify-center gap-2 rounded-xl border border-line bg-surface-2 px-4 py-2.5 text-sm font-semibold transition duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-white">
                Learn more
                <Icon name="arrowRight" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Spotlight>
          </div>
        ))}
      </div>
    </>
  );
}
