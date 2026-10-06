import type React from "react";

/**
 * Title Case for short text (headings, buttons, labels, card titles, FAQ questions).
 *
 * - Capitalises the first letter of each main word.
 * - Keeps short joining words lowercase in the middle of a phrase
 *   ("a", "and", "of", "the", "to", "vs" …) but capitalises them at the start,
 *   at the end, and after a colon, dash or full stop.
 * - Never touches words that already carry their own capitalisation or aren't plain
 *   words: acronyms and brand names (SLA, ZapBuzzer, iPhone, PDF), anything with a
 *   digit (2×, 32s, ₹99), emails, URLs, domains and paths.
 * - Hyphenated words are capitalised part by part ("First-Accept-Wins", "Step-by-Step").
 * Only capitalisation changes — never the words themselves.
 */
const MINOR = new Set(["a", "an", "the", "and", "but", "or", "nor", "for", "yet", "so", "as", "at", "by", "in", "of", "on", "to", "per", "via", "vs", "vs.", "v", "en", "de", "x"]);

const PROTECTED = /[@/\\]|:\/\/|\.[a-z]{2,}$|\d|[A-Z].*[A-Z]|^[a-z]+[A-Z]/; // email, url, path, domain, digits, inner caps

function capFirst(w: string) {
  const i = w.search(/\p{L}/u);
  if (i < 0) return w;
  return w.slice(0, i) + w[i].toUpperCase() + w.slice(i + 1);
}

function fixWord(token: string, forceCap: boolean): string {
  // Separate leading/trailing punctuation: “(Word)”, “Word,” etc.
  const m = token.match(/^([^\p{L}\p{N}]*)(.*?)([^\p{L}\p{N}.]*)$/u);
  if (!m) return token;
  const [, lead, core, trail] = m;
  if (!core) return token;
  // hyphenated words are judged part by part, so "14-day" still becomes "14-Day"
  const hyphenated = core.includes("-") && !/[@/\\]|:\/\//.test(core);
  if (!hyphenated && PROTECTED.test(core)) return token;
  const lower = core.toLowerCase();
  if (!forceCap && MINOR.has(lower)) return lead + lower + trail;
  const parts = core.split("-");
  const out = parts
    .map((p, i) => {
      if (!p || PROTECTED.test(p)) return p;
      const pl = p.toLowerCase();
      if (i > 0 && MINOR.has(pl) && i < parts.length - 1) return pl; // step-by-step → Step-by-Step
      return capFirst(p);
    })
    .join("-");
  return lead + out + trail;
}

export function titleCase(text: string): string {
  const tokens = text.split(/(\s+)/);
  const words = tokens.map((t, i) => ({ t, i })).filter((x) => /\S/.test(x.t));
  let capNext = true;
  words.forEach((w, n) => {
    const isLast = n === words.length - 1 || /^[^\p{L}\p{N}]+$/u.test(words[n + 1]?.t ?? "");
    // a standalone dash/colon token means the next word starts a new phrase
    if (/^[—–:|·•/→+&]+$/.test(w.t)) {
      capNext = true;
      return;
    }
    tokens[w.i] = fixWord(w.t, capNext || isLast);
    capNext = /[:.?!—–]["”’)]*$/.test(w.t);
  });
  return tokens.join("");
}

/** Title-cases plain string children; anything else (elements, fragments) is left as is. */
export const titleCaseNode = (node: React.ReactNode): React.ReactNode =>
  typeof node === "string" ? titleCase(node) : node;

/** True if the text is already in Title Case by the rules above. */
export const isTitleCase = (text: string) => titleCase(text) === text;
