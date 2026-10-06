import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CompanyHero, Band } from "@/components/company/CompanyHero";
import { CopyButton } from "@/components/company/CopyButton";
import { DownloadGate } from "@/components/company/DownloadGate";
import { SectionHeading } from "@/components/ui/primitives";
import { Icon } from "@/components/ui/Icon";
import { FAQSection } from "@/components/sections/PageParts";
import { companyPages } from "@/lib/companyPages";
import { standaloneFaqs } from "@/content/standaloneFaqs";
import { site } from "@/lib/site";

const page = companyPages.pressKit;

export const metadata: Metadata = {
  title: page.label,
  description: page.description,
  alternates: { canonical: page.href },
  openGraph: { title: `${page.label} | ZapBuzzer`, description: page.description, url: page.href },
};

/** Every href here must be a real file under /public. */
const downloads = [
  { title: "ZapBuzzer App Icon", file: "/press-kit/zapbuzzer-app-icon-1024.png", meta: "PNG · 1024 × 1024 · transparent background · 57 KB", body: "The bell-and-Z app icon used across the website and app. Use it on its own or next to the ZapBuzzer wordmark set in text." },
  { title: "Approved Descriptions", file: "/press-kit/zapbuzzer-descriptions.txt", meta: "TXT · 2 KB", body: "Name, tagline, and one-line, short and long descriptions of the company and product." },
  { title: "Brand Colours and Type", file: "/press-kit/zapbuzzer-brand-colours.txt", meta: "TXT · 1 KB", body: "Hex and RGB values for the logo and website colours, plus the typefaces used on the website." },
];

const logoColours = [
  { name: "Logo blue", hex: "#0E3E9F", rgb: "14 62 159" },
  { name: "Bell orange", hex: "#FB800A", rgb: "251 128 10" },
  { name: "Bell off-white", hex: "#F0F4F7", rgb: "240 244 247", light: true },
];
const uiColours = [
  { name: "Indigo accent", hex: "#5C5FE6", rgb: "92 95 230" },
  { name: "Violet", hex: "#8B5CF6", rgb: "139 92 246" },
  { name: "Fuchsia", hex: "#D946EF", rgb: "217 70 239" },
  { name: "Ink", hex: "#0B0E1A", rgb: "11 14 26" },
  { name: "Light accent", hex: "#A5A8FF", rgb: "165 168 255", light: true },
];

const descriptions = [
  { label: "Tagline", text: "Press a button. Staff knows." },
  { label: "One Line", text: "ZapBuzzer is the internal-request CRM for offices that hate phone tag." },
  {
    label: "Short",
    text: "ZapBuzzer is an internal-request CRM for offices. Employees tap what they need (coffee, prints, IT help, facilities or a courier pickup) and the right team is notified on the app, Telegram, WhatsApp and email until someone accepts. The first person to accept owns the request. Every request is timed and rated.",
  },
];

const dos = [
  "Write the name as ZapBuzzer: one word, capital Z and capital B.",
  "Use the app icon file from this page at its original proportions.",
  "Leave clear space around the icon of at least a quarter of its width.",
  "Place the icon on plain light or dark backgrounds where the blue square stands out.",
  "Use the approved descriptions as written, or quote facts exactly as published on zapbuzzer.com.",
];
const donts = [
  "Do not stretch, rotate, recolour, crop or add effects to the icon.",
  "Do not rebuild the logo, or create your own wordmark lockup and present it as official.",
  "Do not write the name as Zap Buzzer, Zapbuzzer or ZAPBUZZER in running text.",
  "Do not imply a partnership, endorsement or customer relationship that has not been agreed in writing.",
  "Do not add figures, customer names or features that are not on zapbuzzer.com.",
];

const pending = [
  { title: "Product Screenshots", body: "Approved screenshots of the web and mobile apps have not been published yet." },
  { title: "Vector Logo (SVG / EPS)", body: "Only the PNG app icon is available. A vector version and a horizontal wordmark lockup have not been published." },
  { title: "Founder and Team Photos", body: "No approved people photography is available for press use." },
];

function Swatch({ name, hex, rgb, light }: { name: string; hex: string; rgb: string; light?: boolean }) {
  return (
    <div data-reveal className="overflow-hidden rounded-2xl border border-line bg-surface">
      <div className={`h-20 ${light ? "border-b border-line" : ""}`} style={{ background: hex }} />
      <div className="flex flex-wrap items-center justify-between gap-2 p-3">
        <div>
          <p className="text-sm font-semibold">{name}</p>
          <p className="font-mono text-xs text-muted">{hex} · RGB {rgb}</p>
        </div>
        <CopyButton text={hex} label="Copy Hex" />
      </div>
    </div>
  );
}

export default function PressKitPage() {
  return (
    <>
      <CompanyHero
        crumbs={[{ href: "/", label: "Home" }, { href: page.href, label: page.label }]}
        eyebrow={page.label}
        title="Official ZapBuzzer Brand Assets"
        lead="Download the app icon, approved descriptions and brand colours, and check the usage guidelines before you publish. For company information and media contacts, see the Media page."
      >
        <div className="flex flex-wrap gap-3 pt-2">
          <a href="#downloads" className="btn-shimmer inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-accent-hover">
            Go to downloads <Icon name="arrowRight" className="h-4 w-4" />
          </a>
          <Link href="/media" className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white/90 transition hover:bg-white/15">
            Media
          </Link>
        </div>
      </CompanyHero>

      <Band id="downloads">
        <SectionHeading eyebrow="Asset Library" title="Downloads" intro="Every file below is the actual asset. Use them as provided." />
        <div className="grid gap-5 md:grid-cols-3">
          {downloads.map((d) => (
            <div key={d.file} data-reveal className="glass-panel flex flex-col rounded-2xl p-6">
              <h3 className="font-heading text-lg font-bold">{d.title}</h3>
              <p className="mt-1 font-mono text-xs text-muted">{d.meta}</p>
              <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted">{d.body}</p>
              <DownloadGate file={d.file} title={d.title} />
            </div>
          ))}
        </div>
      </Band>

      <Band alt>
        <SectionHeading eyebrow="Logo" title="The App Icon" intro="A white bell with a Z inside and an orange clapper, on a rounded blue square." />
        <div className="grid gap-5 sm:grid-cols-3">
          {[
            { bg: "bg-white", label: "On White" },
            { bg: "bg-[#0b0e1a]", label: "On Dark" },
            { bg: "bg-[#eef0ff]", label: "On a Light Tint" },
          ].map((v) => (
            <figure key={v.label} data-reveal className="overflow-hidden rounded-2xl border border-line">
              <div className={`grid h-48 place-items-center ${v.bg}`}>
                <Image src="/press-kit/zapbuzzer-app-icon-1024.png" alt={`ZapBuzzer app icon shown ${v.label.toLowerCase()} background`} width={120} height={120} />
              </div>
              <figcaption className="bg-surface p-3 text-center text-sm font-medium">{v.label}</figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-muted">
          On the website the icon sits beside the name “ZapBuzzer” set in bold text. There is no separate wordmark file.
        </p>
      </Band>

      <Band>
        <SectionHeading eyebrow="Colours" title="Brand Colours" intro="Logo colours come from the app icon file. Interface colours are the ones used on zapbuzzer.com." />
        <h3 className="mb-3 font-heading text-lg font-bold">Logo</h3>
        <div className="grid gap-4 sm:grid-cols-3">{logoColours.map((c) => <Swatch key={c.hex} {...c} />)}</div>
        <h3 className="mb-3 mt-8 font-heading text-lg font-bold">Website Interface</h3>
        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-5">{uiColours.map((c) => <Swatch key={c.hex} {...c} />)}</div>
        <div data-reveal className="glass-panel mt-8 grid gap-4 rounded-2xl p-6 sm:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">Headings</p>
            <p className="mt-1 font-heading text-3xl font-extrabold">Poppins</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">Body text</p>
            <p className="mt-1 text-3xl">Inter</p>
          </div>
        </div>
      </Band>

      <Band alt>
        <SectionHeading eyebrow="Copy" title="Approved Descriptions" intro="Copy these as written. The full set, including the long description, is in the descriptions download." />
        <div className="mx-auto grid max-w-4xl gap-4">
          {descriptions.map((d) => (
            <div key={d.label} data-reveal className="glass-panel rounded-2xl p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-accent-text">{d.label}</p>
              <p className="mt-2 text-[15px] leading-relaxed">{d.text}</p>
            </div>
          ))}
        </div>
      </Band>

      <Band>
        <SectionHeading eyebrow="Guidelines" title="Brand Usage" />
        <div className="grid gap-5 md:grid-cols-2">
          {[
            { title: "Do", items: dos, icon: "check" as const, tone: "text-success" },
            { title: "Don’t", items: donts, icon: "plus" as const, tone: "rotate-45 text-danger" },
          ].map((g) => (
            <div key={g.title} data-reveal className="glass-panel rounded-2xl p-6">
              <h3 className="font-heading text-xl font-bold">{g.title}</h3>
              <ul className="mt-4 space-y-3 text-[15px]">
                {g.items.map((it) => (
                  <li key={it} className="flex gap-3"><Icon name={g.icon} className={`mt-0.5 h-5 w-5 shrink-0 ${g.tone}`} />{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Band>

      <Band alt>
        <SectionHeading eyebrow="Not yet Available" title="Assets on Request" intro="We would rather show nothing than publish unofficial files. These are not available yet." />
        <div className="grid gap-4 md:grid-cols-3">
          {pending.map((p) => (
            <div key={p.title} data-reveal className="rounded-2xl border border-dashed border-line bg-surface p-5">
              <h3 className="font-semibold">{p.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{p.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-muted">
          Need one of these for a story? Email{" "}
          <a href={`mailto:${site.email}?subject=${encodeURIComponent("Press kit asset request")}`} className="font-semibold text-accent-text hover:underline">{site.email}</a>{" "}
          or use the form on the <Link href="/media#media-enquiry" className="font-semibold text-accent-text hover:underline">Media</Link> page.
        </p>
      </Band>

      <section className="border-t border-line bg-surface-2/60 py-10 sm:py-14">
        <div className="px-4"><FAQSection faqs={standaloneFaqs["press-kit"]} about="the ZapBuzzer press kit and brand assets" /></div>
      </section>
    </>
  );
}
