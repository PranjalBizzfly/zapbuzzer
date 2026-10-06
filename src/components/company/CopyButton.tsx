"use client";

import { useState } from "react";

export function CopyButton({ text, label = "Copy" }: { text: string; label?: string }) {
  const [state, setState] = useState<"idle" | "done" | "fail">("idle");
  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setState("done");
    } catch {
      setState("fail");
    }
    setTimeout(() => setState("idle"), 2000);
  }
  return (
    <button
      type="button"
      onClick={copy}
      aria-live="polite"
      className="rounded-lg border border-line bg-surface px-3 py-1.5 text-xs font-semibold transition hover:border-accent/50 hover:text-accent-text"
    >
      {state === "done" ? "Copied" : state === "fail" ? "Select and copy manually" : label}
    </button>
  );
}
