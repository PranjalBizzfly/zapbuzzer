"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { mainNav, type NavMenu } from "@/lib/nav";
import { site } from "@/lib/site";
import { Icon, type IconName } from "@/components/ui/Icon";
import { ThemeToggle } from "@/components/motion/ThemeToggle";
import { Logo } from "./Logo";
import { SearchDialog } from "./SearchDialog";

const columnIcon: Record<string, IconName> = {
  Platform: "layers",
  "Core features": "bolt",
  "By team": "building",
  Workflows: "workflow",
  "By role": "users",
  "By problem": "target",
  Learn: "book",
  Evaluate: "compass",
  ZapBuzzer: "sparkles",
};
const companyIcons: IconName[] = ["sparkles", "users", "chart", "mail", "calendar"];

const menuIsActive = (menu: NavMenu, path: string) =>
  menu.columns.some((c) => c.links.some((l) => path === l.href || (l.href !== "/" && path.startsWith(l.href + "/"))));

export function Header() {
  const [open, setOpen] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(null);
    setMobile(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
      if (e.key === "Escape") {
        setSearchOpen(false);
        setOpen(null);
        setMobile(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobile ? "hidden" : "";
  }, [mobile]);

  const enter = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(label);
  };
  const leave = () => {
    closeTimer.current = setTimeout(() => setOpen(null), 140);
  };

  // Transparent only over the homepage hero; frosted everywhere else.
  const transparent = pathname === "/" && !scrolled && !open;

  return (
    <>
      <header
        className={`anim-drawer sticky top-0 z-50 border-b transition duration-300 ${
          transparent ? "border-transparent bg-transparent" : "border-line/80 bg-glass shadow-[0_6px_20px_-12px_#17192826] backdrop-blur-xl"
        }`}
      >
        <div className={`mx-auto flex w-full max-w-[1536px] items-center justify-between px-4 transition-[height] duration-300 sm:px-6 lg:px-8 ${scrolled ? "h-16" : "h-[72px]"}`}>
          <div className="shrink-0 pr-4 transition-transform duration-200 hover:scale-[1.02]">
            <Logo />
          </div>

          <nav aria-label="Main Navigation" className="hidden items-center gap-4 whitespace-nowrap lg:flex xl:gap-6">
            <Link
              href="/"
              className={`relative py-2 text-[13px] font-medium transition-colors xl:text-sm ${pathname === "/" ? "font-semibold text-accent-text" : "text-fg/80 hover:text-accent-text"}`}
            >
              Home
              {pathname === "/" && <span className="absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-accent" />}
            </Link>
            {mainNav.map((menu, mi) => {
              const isOpen = open === menu.label;
              const active = menuIsActive(menu, pathname);
              const isDropdown = menu.columns.length === 1;
              return (
                <div key={menu.label} className="relative" onMouseEnter={() => enter(menu.label)} onMouseLeave={leave}>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : menu.label)}
                    onFocus={() => enter(menu.label)}
                    aria-expanded={isOpen}
                    className={`relative flex items-center gap-1 py-2 text-[13px] font-medium transition-colors xl:text-sm ${
                      isOpen || active ? "font-semibold text-accent-text" : "text-fg/80 hover:text-accent-text"
                    }`}
                  >
                    <span>{menu.label}</span>
                    <Icon name="chevronDown" className={`h-3.5 w-3.5 transition-transform duration-200 ${isOpen ? "rotate-180 text-accent" : "text-muted"}`} />
                    {active && <span className="absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-accent" />}
                  </button>

                  {isOpen && !isDropdown && (
                    <div className="anim-menu absolute left-1/2 top-full z-50 mt-1 grid w-[860px] max-w-[95vw] -translate-x-1/2 grid-cols-3 gap-6 overflow-hidden rounded-2xl border border-line/90 bg-glass-strong p-6 text-fg shadow-2xl backdrop-blur-xl">
                      {menu.columns.map((col) => (
                        <div key={col.title} className="space-y-3">
                          <div className="flex items-center gap-2 border-b border-line pb-2">
                            <span className="grid h-8 w-8 place-items-center rounded-lg bg-accent-soft text-accent">
                              <Icon name={columnIcon[col.title] ?? "bolt"} className="h-4 w-4" />
                            </span>
                            <Link href={col.links[0].href} className="text-sm font-bold transition-colors hover:text-accent-text">
                              {col.title}
                            </Link>
                          </div>
                          <ul className="space-y-1.5">
                            {col.links.map((l, i) => (
                              <li key={l.href}>
                                <Link
                                  href={l.href}
                                  className={`block py-1 text-xs transition-colors ${
                                    i === 0 ? "font-bold text-accent-text hover:underline" : "text-muted hover:text-accent-text"
                                  } ${pathname === l.href ? "text-accent-text" : ""}`}
                                >
                                  {l.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                      {menu.feature ? (
                        <Link href={menu.feature.href} className="group relative flex flex-col justify-between overflow-hidden rounded-xl bg-ink p-5 text-white">
                          <span className="orb -right-10 -top-10 h-32 w-32 bg-accent/50" aria-hidden />
                          <span className="relative">
                            <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-[11px] font-medium">
                              <span className="h-1.5 w-1.5 animate-ping rounded-full bg-success" /> Live flow
                            </span>
                            <span className="block font-heading font-semibold">{menu.feature.title}</span>
                            <span className="mt-1 block text-sm text-white/70">{menu.feature.body}</span>
                          </span>
                          <span className="relative mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent-2">
                            {menu.feature.cta}
                            <Icon name="arrowRight" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </span>
                        </Link>
                      ) : (
                        <div className="relative flex flex-col justify-between overflow-hidden rounded-xl border border-accent/20 bg-accent-soft p-5">
                          <span className="font-heading text-sm font-bold">{site.strapline}</span>
                          <a href={site.app.signUp} className="btn-shimmer mt-4 inline-flex items-center justify-center gap-1.5 rounded-full bg-accent px-4 py-2 text-xs font-semibold text-white">
                            Start free
                            <Icon name="arrowRight" className="h-3.5 w-3.5" />
                          </a>
                        </div>
                      )}
                    </div>
                  )}

                  {isOpen && isDropdown && (
                    <div className={`anim-menu absolute top-full z-50 mt-1 w-[360px] max-w-[90vw] space-y-1 overflow-hidden rounded-2xl border border-line/90 bg-glass-strong p-3 shadow-2xl backdrop-blur-xl ${mi > 2 ? "right-0" : "left-0"}`}>
                      {menu.columns[0].links.map((l, i) => (
                        <Link key={l.href} href={l.href} className="group flex items-start gap-3 rounded-xl p-2.5 transition-colors hover:bg-surface-2">
                          <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-accent-soft text-accent transition-transform group-hover:scale-110">
                            <Icon name={companyIcons[i % companyIcons.length]} className="h-4 w-4" />
                          </span>
                          <span className="min-w-0 flex-1">
                            <span className="block text-sm font-semibold transition-colors group-hover:text-accent-text">{l.label}</span>
                            {l.desc && <span className="mt-0.5 line-clamp-1 block text-xs text-muted">{l.desc}</span>}
                          </span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
            <Link
              href="/pricing"
              className={`relative py-2 text-[13px] font-medium transition-colors xl:text-sm ${pathname.startsWith("/pricing") ? "font-semibold text-accent-text" : "text-fg/80 hover:text-accent-text"}`}
            >
              Pricing
              {pathname.startsWith("/pricing") && <span className="absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-accent" />}
            </Link>
          </nav>

          <div className="hidden shrink-0 items-center gap-2.5 pl-3 lg:flex xl:gap-3.5">
<button type="button" onClick={() => setSearchOpen(true)} aria-label="Search pages (Ctrl+K)" title="Search (Ctrl+K)" className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-accent/30 text-accent-text transition duration-200 hover:scale-[1.08] hover:bg-accent-soft active:scale-90">
              <Icon name="search" className="h-4 w-4" strokeWidth={2.4} />
            </button>
            <ThemeToggle />
            <Link href="/contact" className="whitespace-nowrap px-1.5 py-1 text-[13px] font-medium text-fg/80 transition-colors hover:text-accent-text xl:text-sm">
              Contact
            </Link>
            <Link
              href="/sign-in"
              className="whitespace-nowrap rounded-full border border-line px-4 py-2 text-[13px] font-medium transition hover:scale-[1.02] hover:border-accent hover:text-accent-text active:scale-[0.98] xl:px-5 xl:text-sm"
            >
              Sign in
            </Link>
            <a
              href={site.app.signUp}
              className="btn-shimmer group inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-accent px-4 py-2 text-[13px] font-medium text-white shadow-sm transition hover:scale-[1.02] hover:bg-accent-hover hover:shadow-md active:scale-[0.98] xl:px-5 xl:text-sm"
            >
              <span>Start free</span>
              <span className="grid h-5 w-5 place-items-center rounded-full bg-white/25 transition-transform duration-200 group-hover:translate-x-0.5">
                <Icon name="arrowUpRight" className="h-3.5 w-3.5" strokeWidth={2.5} />
              </span>
            </a>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
<button type="button" onClick={() => setSearchOpen(true)} aria-label="Search pages (Ctrl+K)" title="Search (Ctrl+K)" className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-accent/30 text-accent-text transition duration-200 hover:scale-[1.08] hover:bg-accent-soft active:scale-90">
              <Icon name="search" className="h-4 w-4" strokeWidth={2.4} />
            </button>
            <ThemeToggle />
            <button type="button" onClick={() => setMobile(true)} aria-label="Open Mobile Navigation" aria-expanded={mobile} className="p-2 text-fg/80">
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {mobile && (
        <div className="fixed inset-0 z-[999] lg:hidden" role="dialog" aria-modal="true" aria-label="Mobile navigation">
          <div onClick={() => setMobile(false)} className="anim-fade-in absolute inset-0 bg-black/70 backdrop-blur-md" />
          <div className="anim-slide-in absolute bottom-0 right-0 top-0 flex h-full w-[85%] max-w-sm flex-col overflow-hidden border-l border-line bg-surface shadow-2xl">
            <div className="flex shrink-0 items-center justify-between border-b border-line p-4">
              <Logo />
              <button type="button" onClick={() => setMobile(false)} aria-label="Close Mobile Navigation" className="rounded-lg p-2 text-muted transition-colors hover:bg-surface-2 hover:text-fg">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
                  <path d="M6 6l12 12M18 6 6 18" />
                </svg>
              </button>
            </div>
            <div className="flex-1 space-y-2 overflow-y-auto px-4 py-5">
              <Link href="/" className="block border-b border-line/60 px-3 py-2.5 font-bold transition-colors hover:text-accent-text">
                Home
              </Link>
              {mainNav.map((menu) => {
                const expanded = mobileSection === menu.label;
                return (
                  <div key={menu.label} className="border-b border-line/60 pb-2">
                    <button
                      type="button"
                      onClick={() => setMobileSection(expanded ? null : menu.label)}
                      aria-expanded={expanded}
                      className="flex w-full items-center justify-between px-3 py-2.5 text-left font-bold"
                    >
                      <span>{menu.label}</span>
                      <Icon name="chevronDown" className={`h-5 w-5 transition-transform duration-200 ${expanded ? "rotate-180 text-accent" : ""}`} />
                    </button>
                    {expanded && (
                      <div className="anim-open space-y-3 px-3 pb-2">
                        {menu.columns.map((col) => (
                          <div key={col.title}>
                            <p className="mb-1 flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-accent-text">
                              <Icon name={columnIcon[col.title] ?? "bolt"} className="h-3.5 w-3.5" />
                              {col.title}
                            </p>
                            <ul className="space-y-0.5 border-l border-line pl-3">
                              {col.links.map((l) => (
                                <li key={l.href}>
                                  <Link href={l.href} className={`block rounded-lg px-2 py-1.5 text-sm transition-colors hover:text-accent-text ${pathname === l.href ? "font-semibold text-accent-text" : "text-muted"}`}>
                                    {l.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
              <Link href="/explore" className="block border-b border-line/60 px-3 py-2.5 font-bold transition-colors hover:text-accent-text">
                Explore all pages
              </Link>
              <Link href="/pricing" className="block border-b border-line/60 px-3 py-2.5 font-bold transition-colors hover:text-accent-text">
                Pricing
              </Link>
              <Link href="/contact" className="block border-b border-line/60 px-3 py-2.5 font-bold transition-colors hover:text-accent-text">
                Contact
              </Link>
            </div>
            <div className="grid shrink-0 gap-2.5 border-t border-line p-4">
              <Link href="/sign-in" className="rounded-full border border-line px-4 py-3 text-center text-sm font-semibold">
                Sign in
              </Link>
              <a href={site.app.signUp} className="btn-shimmer rounded-full bg-accent px-4 py-3 text-center text-sm font-semibold text-white">
                Start free — 14-day trial
              </a>
            </div>
          </div>
        </div>
      )}
      <SearchDialog open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
