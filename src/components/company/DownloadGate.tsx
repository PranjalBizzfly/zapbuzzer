"use client";

import { useRef, useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { PhoneField, phoneError, phoneValue } from "@/components/ui/PhoneField";

const KEY = "zb-press-details";
const PURPOSES = ["News article or feature", "Blog or newsletter", "Partner or reseller material", "Event or presentation", "Internal use", "Other"];

type Details = { name: string; email: string; phone: string; org: string; purpose: string };

const read = (): Details | null => {
  try {
    const v = localStorage.getItem(KEY);
    return v ? (JSON.parse(v) as Details) : null;
  } catch {
    return null;
  }
};

/**
 * Download button that asks for a few details before the file downloads.
 * There is no form backend yet: details are kept only in this browser so a visitor
 * fills the form once, and are not sent anywhere.
 */
export function DownloadGate({ file, title }: { file: string; title: string }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [saved, setSaved] = useState<Details | null>(null);
  const id = file.replace(/\W+/g, "-");

  const download = () => {
    const a = document.createElement("a");
    a.href = file;
    a.download = "";
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  const open = () => {
    setErrors({});
    setSaved(read());
    dialog.current?.showModal();
  };

  const onSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const f = new FormData(ev.currentTarget);
    const d: Details = {
      name: String(f.get("name") ?? "").trim(),
      email: String(f.get("email") ?? "").trim(),
      phone: phoneValue(f),
      org: String(f.get("org") ?? "").trim(),
      purpose: String(f.get("purpose") ?? ""),
    };
    const e: Record<string, string> = {};
    if (!d.name) e.name = "Full name is required.";
    if (!d.email) e.email = "Work email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email)) e.email = "Enter a valid email address, like name@company.com.";
    const pe = phoneError(f);
    if (pe) e.phone = pe;
    if (!d.org) e.org = "Organisation is required.";
    if (!d.purpose) e.purpose = "Choose how you’ll use it.";
    if (!f.get("terms")) e.terms = "Please agree to the brand guidelines.";
    setErrors(e);
    if (Object.keys(e).length) {
      ev.currentTarget.querySelector<HTMLElement>(`[name="${Object.keys(e)[0]}"]`)?.focus();
      return;
    }
    try {
      localStorage.setItem(KEY, JSON.stringify(d));
    } catch {}
    dialog.current?.close();
    download();
  };

  const input = (err?: string) =>
    `mt-1.5 w-full rounded-xl border bg-bg/70 px-3.5 py-3 text-[15px] outline-none transition focus:border-accent focus:bg-surface focus:ring-4 focus:ring-accent/15 ${err ? "border-danger" : "border-line"}`;
  const err = (k: string) => errors[k] && <p id={`${id}-${k}-err`} className="mt-1.5 text-xs font-medium text-danger">{errors[k]}</p>;
  const aria = (k: string) => ({ "aria-invalid": errors[k] ? true : undefined, "aria-describedby": errors[k] ? `${id}-${k}-err` : undefined });

  return (
    <>
      <button
        type="button"
        onClick={open}
        className="btn-shimmer mt-5 inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:bg-accent-hover"
      >
        Download <Icon name="arrowRight" className="h-4 w-4 rotate-90" />
      </button>

      <dialog
        ref={dialog}
        aria-labelledby={`${id}-title`}
        onClick={(e) => e.target === dialog.current && dialog.current?.close()}
        className="m-auto w-[min(92vw,520px)] rounded-3xl border border-line bg-surface p-0 text-fg shadow-lift backdrop:bg-black/50 backdrop:backdrop-blur-sm"
      >
        <form noValidate onSubmit={onSubmit} className="relative p-6 sm:p-8">
          <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent via-violet to-fuchsia" aria-hidden />
          <button type="button" onClick={() => dialog.current?.close()} aria-label="Close" className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full text-muted transition hover:bg-surface-2 hover:text-fg">
            <Icon name="plus" className="h-5 w-5 rotate-45" />
          </button>
          <p className="text-xs font-semibold uppercase tracking-wider text-accent-text">Download</p>
          <h2 id={`${id}-title`} className="mt-1 pr-8 font-heading text-xl font-bold">{title}</h2>
          <p className="mt-1.5 text-sm text-muted">Tell us who you are and how you’ll use it, and the download starts straight away.</p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor={`${id}-name`} className="text-sm font-medium">Full Name<span className="text-danger" aria-hidden> *</span></label>
              <input id={`${id}-name`} name="name" autoComplete="name" defaultValue={saved?.name} className={input(errors.name)} {...aria("name")} />
              {err("name")}
            </div>
            <div>
              <label htmlFor={`${id}-email`} className="text-sm font-medium">Work Email<span className="text-danger" aria-hidden> *</span></label>
              <input id={`${id}-email`} name="email" type="email" autoComplete="email" defaultValue={saved?.email} className={input(errors.email)} {...aria("email")} />
              {err("email")}
            </div>
            <div className="sm:col-span-2">
              <PhoneField id={`${id}-phone`} error={errors.phone} inputClass="mt-1.5 w-full rounded-xl border bg-bg/70 px-3.5 py-3 text-[15px] outline-none transition focus:border-accent focus:bg-surface focus:ring-4 focus:ring-accent/15" />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor={`${id}-org`} className="text-sm font-medium">Organisation or Publication<span className="text-danger" aria-hidden> *</span></label>
              <input id={`${id}-org`} name="org" autoComplete="organization" defaultValue={saved?.org} className={input(errors.org)} {...aria("org")} />
              {err("org")}
            </div>
            <div className="sm:col-span-2">
              <label htmlFor={`${id}-purpose`} className="text-sm font-medium">How Will You Use It?<span className="text-danger" aria-hidden> *</span></label>
              <select id={`${id}-purpose`} name="purpose" defaultValue={saved?.purpose ?? ""} key={saved?.purpose} className={input(errors.purpose)} {...aria("purpose")}>
                <option value="" disabled>Select…</option>
                {PURPOSES.map((p) => <option key={p}>{p}</option>)}
              </select>
              {err("purpose")}
            </div>
          </div>

          <label className="mt-5 flex items-start gap-3 text-sm">
            <input type="checkbox" name="terms" defaultChecked={!!saved} className="mt-0.5 h-4 w-4 accent-[var(--color-accent)]" {...aria("terms")} />
            <span>I’ll Follow the Brand Usage Guidelines on This Page.</span>
          </label>
          {err("terms")}

          <button type="submit" className="btn-shimmer mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent to-violet px-6 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 active:translate-y-0">
            Download File <Icon name="arrowRight" className="h-4 w-4 rotate-90" />
          </button>
        </form>
      </dialog>
    </>
  );
}
