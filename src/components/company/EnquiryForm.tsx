"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import { PhoneField, phoneError, phoneValue } from "@/components/ui/PhoneField";

export type Field = {
  name: string;
  label: string;
  type?: "text" | "email" | "url" | "tel" | "textarea" | "select" | "phone";
  required?: boolean;
  options?: string[];
  placeholder?: string;
  autoComplete?: string;
  /** Minimum length for textareas. */
  minLength?: number;
  full?: boolean;
};

/**
 * Validated enquiry form. The site has no form backend yet, so a valid submission opens the
 * visitor's email client with the message addressed and pre-filled. We never claim the message
 * was sent: the visitor still presses Send in their own email app.
 */
export function EnquiryForm({ subject, fields, submitLabel, to = site.email }: { subject: string; fields: Field[]; submitLabel: string; to?: string }) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [state, setState] = useState<"idle" | "handoff" | "error">("idle");
  const [draft, setDraft] = useState("");

  function validate(f: FormData) {
    const e: Record<string, string> = {};
    for (const fl of fields) {
      const v = String(f.get(fl.name) ?? "").trim();
      if (fl.type === "phone") {
        const pe = phoneError(f, fl.name, fl.required);
        if (pe) e[fl.name] = pe;
      } else if (fl.required && !v) e[fl.name] = `${fl.label} is required.`;
      else if (v && fl.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) e[fl.name] = "Enter a valid email address, like name@company.com.";
      else if (v && fl.type === "url" && !/^https?:\/\/\S+\.\S+/.test(v)) e[fl.name] = "Enter a full link starting with https://";
      else if (v && fl.minLength && v.length < fl.minLength) e[fl.name] = `Please write at least ${fl.minLength} characters so we can reply usefully.`;
    }
    return e;
  }

  function onSubmit(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const f = new FormData(ev.currentTarget);
    const e = validate(f);
    setErrors(e);
    if (Object.keys(e).length) {
      setState("error");
      const first = ev.currentTarget.querySelector<HTMLElement>(`[name="${Object.keys(e)[0]}"]`);
      first?.focus();
      return;
    }
    const body = fields.map((fl) => `${fl.label}: ${(fl.type === "phone" ? phoneValue(f, fl.name) : String(f.get(fl.name) ?? "").trim()) || "—"}`).join("\n\n");
    const subj = `${subject}: ${String(f.get("company") || f.get("name") || "").trim()}`;
    setDraft(`To: ${to}\nSubject: ${subj}\n\n${body}`);
    window.location.href = `mailto:${to}?subject=${encodeURIComponent(subj)}&body=${encodeURIComponent(body)}`;
    setState("handoff");
  }

  const input =
    "mt-1.5 w-full rounded-xl border bg-bg/70 px-3.5 py-3 text-[15px] outline-none transition duration-200 hover:border-accent/30 focus:border-accent focus:bg-surface focus:ring-4 focus:ring-accent/15";

  return (
    <form noValidate onSubmit={onSubmit} className="glass-panel relative overflow-hidden rounded-3xl p-6 shadow-lift sm:p-8">
      <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent via-violet to-fuchsia" aria-hidden />
      {state === "error" && (
        <p role="alert" className="mb-5 rounded-xl border border-danger/40 bg-danger/10 px-4 py-3 text-sm font-medium text-danger">
          Please fix the {Object.keys(errors).length === 1 ? "highlighted field" : `${Object.keys(errors).length} highlighted fields`} below.
        </p>
      )}
      <div className="grid gap-4 sm:grid-cols-2">
        {fields.map((fl) => {
          const id = `f-${fl.name}`;
          const err = errors[fl.name];
          const common = {
            id,
            name: fl.name,
            required: fl.required,
            placeholder: fl.placeholder,
            autoComplete: fl.autoComplete,
            "aria-invalid": err ? true : undefined,
            "aria-describedby": err ? `${id}-err` : undefined,
            className: `${input} ${err ? "border-danger" : "border-line"}`,
          };
          if (fl.type === "phone")
            return (
              <div key={fl.name}>
                <PhoneField id={id} name={fl.name} label={fl.label} required={fl.required} error={err} inputClass={input} />
              </div>
            );
          return (
            <div key={fl.name} className={fl.full || fl.type === "textarea" ? "sm:col-span-2" : ""}>
              <label htmlFor={id} className="text-sm font-medium">
                {fl.label}
                {fl.required && <span className="text-danger" aria-hidden> *</span>}
              </label>
              {fl.type === "textarea" ? (
                <textarea rows={5} {...common} />
              ) : fl.type === "select" ? (
                <select {...common} defaultValue="">
                  <option value="" disabled>Select…</option>
                  {fl.options?.map((o) => <option key={o}>{o}</option>)}
                </select>
              ) : (
                <input type={fl.type ?? "text"} {...common} />
              )}
              {err && <p id={`${id}-err`} className="mt-1.5 text-xs font-medium text-danger">{err}</p>}
            </div>
          );
        })}
      </div>
      <p className="mt-4 text-xs text-muted">
        <span className="text-danger">*</span> Required. Submitting opens your email app with this message addressed to {to}; it is sent only when you press Send there.
      </p>
      <button type="submit" className="btn-shimmer mt-5 w-full rounded-xl bg-gradient-to-r from-accent to-violet px-7 py-3.5 font-semibold text-white shadow-[0_12px_28px_-12px_oklch(56%_0.2_277/0.75)] transition duration-300 hover:-translate-y-0.5 active:translate-y-0 sm:w-auto">
        {submitLabel}
      </button>
      {state === "handoff" && (
        <div role="status" className="mt-5 rounded-xl border border-line bg-surface-2/70 p-4 text-sm">
          <p className="font-semibold">Your email app should now be open with the message ready.</p>
          <p className="mt-1 text-muted">
            Nothing has been sent yet. Press Send in your email app. If no app opened, copy the text below and email it to{" "}
            <a href={`mailto:${to}`} className="font-semibold text-accent-text hover:underline">{to}</a>.
          </p>
          <textarea readOnly value={draft} rows={6} aria-label="Message text to copy" className="mt-3 w-full rounded-lg border border-line bg-bg p-3 font-mono text-xs" />
        </div>
      )}
    </form>
  );
}
