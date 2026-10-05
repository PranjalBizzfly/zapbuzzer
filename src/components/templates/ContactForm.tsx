"use client";

import { useState } from "react";
import { site } from "@/lib/site";

/**
 * There is no form backend yet, so submitting opens the visitor's email client
 * with the message pre-filled. Swap `onSubmit` for an API call when one exists.
 */
export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const subject = `ZapBuzzer enquiry — ${f.get("company") || f.get("name")}`;
    const body = `Name: ${f.get("name")}\nWork email: ${f.get("email")}\nCompany: ${f.get("company")}\nTeam size: ${f.get("size")}\n\n${f.get("message")}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  const input =
    "mt-1.5 w-full rounded-xl border border-line bg-bg/70 px-3.5 py-3 text-[15px] outline-none transition duration-200 hover:border-accent/30 focus:border-accent focus:bg-surface focus:ring-4 focus:ring-accent/15";

  return (
    <form onSubmit={onSubmit} className="glass-panel relative overflow-hidden rounded-3xl p-6 shadow-lift sm:p-8">
      <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent via-violet to-fuchsia" aria-hidden />
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-medium">
          Name *
          <input name="name" required autoComplete="name" className={input} />
        </label>
        <label className="text-sm font-medium">
          Work email *
          <input name="email" type="email" required autoComplete="email" className={input} />
        </label>
        <label className="text-sm font-medium">
          Company
          <input name="company" autoComplete="organization" className={input} />
        </label>
        <label className="text-sm font-medium">
          Team size
          <select name="size" className={input} defaultValue="">
            <option value="" disabled>Select…</option>
            <option>1–10</option>
            <option>11–50</option>
            <option>51–200</option>
            <option>200+ / multi-location</option>
          </select>
        </label>
      </div>
      <label className="mt-4 block text-sm font-medium">
        Message
        <textarea name="message" rows={5} className={input} placeholder="A demo for our office, enterprise rollout, a question…" />
      </label>
      <button type="submit" className="btn-shimmer mt-6 w-full rounded-xl bg-gradient-to-r from-accent to-violet px-7 py-3.5 font-semibold text-white shadow-[0_12px_28px_-12px_oklch(56%_0.2_277/0.75)] transition duration-300 hover:scale-[1.02] active:scale-[0.98] sm:w-auto">
        Send message
      </button>
      {sent && <p className="mt-3 text-sm text-muted" role="status">Your email app should open with the message ready to send.</p>}
    </form>
  );
}
