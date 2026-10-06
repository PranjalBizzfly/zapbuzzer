import type { VisualKind } from "@/content/types";
import { Avatar, Frame, Phone, StatusPill, type Status } from "@/components/ui/primitives";

/**
 * HTML/CSS product mockups. Each one illustrates a real ZapBuzzer concept
 * (request queue, first-accept-wins, SLA timer…) rather than a stock photo.
 */
export function Visual({ kind }: { kind: VisualKind }) {
  const V = visuals[kind];
  return <V />;
}

const queue: { icon: string; item: string; where: string; who: string; status: Status; time: string }[] = [
  { icon: "☕", item: "2× Black coffee", where: "Boss Cabin", who: "Arjun", status: "started", time: "ETA 3 min" },
  { icon: "📄", item: "Print · 24 pgs colour", where: "Desk 4B", who: "Suresh", status: "accepted", time: "00:41" },
  { icon: "❄️", item: "AC too cold · 16°C", where: "Conf Room B", who: "Deepak", status: "overdue", time: "+2 min" },
  { icon: "💻", item: "HDMI cable", where: "Meeting Rm 2", who: "Priya", status: "delivered", time: "3m 05s" },
  { icon: "📦", item: "Courier pickup", where: "Reception", who: "—", status: "pinging", time: "00:08" },
];

function RequestDashboard() {
  return (
    <Frame title="Buzzer · Live Requests, 3rd Floor">
      <div className="mb-4 grid grid-cols-3 gap-2 text-center">
        {[
          ["Open", "7"],
          ["Avg accept", "32s"],
          ["On time", "96%"],
        ].map(([l, v]) => (
          <div key={l} className="rounded-xl bg-surface-2 px-2 py-2.5">
            <p className="text-lg font-bold text-fg">{v}</p>
            <p className="text-[11px] text-muted">{l}</p>
          </div>
        ))}
      </div>
      <ul className="space-y-2" aria-label="Live request queue">
        {queue.map((r, i) => (
          <li key={r.item} className="anim-rise flex items-center gap-3 rounded-xl border border-line px-3 py-2.5" style={{ animationDelay: `${i * 90}ms` }}>
            <span className="text-lg" aria-hidden>{r.icon}</span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium">{r.item}</p>
              <p className="truncate text-[11px] text-muted">
                {r.where} · {r.who === "—" ? "Waiting for accept" : r.who}
              </p>
            </div>
            <div className="flex flex-col items-end gap-1">
              <StatusPill status={r.status} />
              <span className="text-[11px] tabular-nums text-muted">{r.time}</span>
            </div>
          </li>
        ))}
      </ul>
    </Frame>
  );
}

function StaffQueue() {
  return (
    <Phone label="Pantry Staff Phone Showing Incoming Requests With Accept Buttons">
      <p className="text-[11px] font-semibold uppercase tracking-wider text-muted">Pantry team · Arjun</p>
      <div className="mt-2 space-y-2">
        {[
          { i: "☕", t: "2× Black coffee", w: "Boss Cabin · Aarav", s: "new" },
          { i: "🍵", t: "Masala chai ×3", w: "Conf Room A", s: "new" },
          { i: "🥪", t: "Lunch for 12", w: "Ops bay · Vivek", s: "mine" },
        ].map((r) => (
          <div key={r.t} className="rounded-xl border border-line bg-surface p-2.5">
            <div className="flex items-center gap-2">
              <span aria-hidden>{r.i}</span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-[13px] font-semibold">{r.t}</p>
                <p className="truncate text-[11px] text-muted">{r.w}</p>
              </div>
            </div>
            {r.s === "new" ? (
              <div className="mt-2 grid grid-cols-2 gap-1.5">
                <span className="rounded-lg bg-accent py-1.5 text-center text-[11px] font-semibold text-white">Accept</span>
                <span className="rounded-lg bg-surface-2 py-1.5 text-center text-[11px] font-medium text-muted">Details</span>
              </div>
            ) : (
              <div className="mt-2 flex items-center justify-between">
                <StatusPill status="started">In progress</StatusPill>
                <span className="text-[11px] text-muted">ETA 12 min</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </Phone>
  );
}

const lifecycle = [
  { t: "2:00:00", l: "Buzzed", d: "Aarav · 2× Black coffee → Boss Cabin" },
  { t: "2:00:01", l: "Routed", d: "Pantry team · app + Telegram + WhatsApp + email" },
  { t: "2:00:12", l: "Accepted", d: "Arjun tapped Accept first · owner assigned" },
  { t: "2:01:00", l: "Started", d: "ETA 3 min · SLA timer running" },
  { t: "2:04:00", l: "Delivered", d: "Photo attached · requester notified" },
  { t: "2:04:20", l: "Rated", d: "★★★★★ · counted in Arjun’s scorecard" },
];

function RequestTimeline() {
  return (
    <Frame title="Request #4821 · Timeline">
      <ol className="relative space-y-4 border-l-2 border-line pl-5" aria-label="Request lifecycle from buzz to rating">
        {lifecycle.map((s, i) => (
          <li key={s.l} className="anim-rise relative" style={{ animationDelay: `${i * 120}ms` }}>
            <span className={`absolute -left-[27px] top-1 grid h-3.5 w-3.5 place-items-center rounded-full ring-4 ring-surface ${i === lifecycle.length - 1 ? "bg-fuchsia" : "bg-accent"}`} />
            <div className="flex flex-wrap items-baseline gap-x-3">
              <span className="text-sm font-semibold">{s.l}</span>
              <span className="text-[11px] tabular-nums text-muted">{s.t}</span>
            </div>
            <p className="text-[13px] text-muted">{s.d}</p>
          </li>
        ))}
      </ol>
    </Frame>
  );
}

function SlaTimer() {
  const r = 46;
  const c = 2 * Math.PI * r;
  const used = 0.72;
  return (
    <Frame title="SLA · Facilities · AC Too Cold">
      <div className="flex flex-col items-center gap-5 sm:flex-row">
        <div className="relative h-32 w-32 shrink-0" role="img" aria-label="SLA timer: 10 minutes 48 seconds used of 15 minutes">
          <svg viewBox="0 0 110 110" className="h-full w-full -rotate-90">
            <circle cx="55" cy="55" r={r} fill="none" stroke="var(--border)" strokeWidth="9" />
            <circle
              cx="55" cy="55" r={r} fill="none" stroke="var(--warning)" strokeWidth="9" strokeLinecap="round"
              strokeDasharray={c} strokeDashoffset={c * (1 - used)}
              className="anim-ring" style={{ ["--dash" as string]: c } as React.CSSProperties}
            />
          </svg>
          <div className="absolute inset-0 grid place-items-center text-center">
            <div>
              <p className="text-xl font-bold tabular-nums">04:12</p>
              <p className="text-[11px] text-muted">left of 15:00</p>
            </div>
          </div>
        </div>
        <div className="w-full space-y-2 text-sm">
          <Row k="Owner" v="Deepak · Facilities" />
          <Row k="Status" v={<StatusPill status="started">In progress</StatusPill>} />
          <Row k="On breach" v="Escalate to Admin Head" />
          <Row k="Requester" v="Om · Conf Room B" />
        </div>
      </div>
    </Frame>
  );
}

function Row({ k, v }: { k: string; v: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-3 border-b border-line pb-2 last:border-0">
      <span className="text-muted">{k}</span>
      <span className="text-right font-medium">{v}</span>
    </div>
  );
}

function Analytics() {
  const bars = [38, 62, 90, 74, 55, 81, 46, 30];
  const hours = ["9", "10", "11", "12", "1", "2", "3", "4"];
  return (
    <Frame title="Analytics · Last 30 Days">
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {[
          ["Avg accept", "32s"],
          ["On-time", "96%"],
          ["Avg rating", "4.8★"],
          ["Calls saved", "−87%"],
        ].map(([l, v]) => (
          <div key={l} className="rounded-xl border border-line px-3 py-2.5">
            <p className="text-[11px] text-muted">{l}</p>
            <p className="text-lg font-bold">{v}</p>
          </div>
        ))}
      </div>
      <p className="mb-2 mt-5 text-xs font-medium text-muted">When your office buzzes most</p>
      <div className="flex h-32 items-end gap-2" role="img" aria-label="Bar chart of requests by hour, peaking at 11 am and 2 pm">
        {bars.map((b, i) => (
          <div key={i} className="flex flex-1 flex-col items-center gap-1">
            <div className="anim-bar w-full rounded-t-md bg-gradient-to-t from-accent to-violet" style={{ height: `${b}%`, animationDelay: `${i * 60}ms` }} />
            <span className="text-[11px] text-muted">{hours[i]}</span>
          </div>
        ))}
      </div>
    </Frame>
  );
}

function Scorecard() {
  const staff = [
    { n: "Arjun", team: "Pantry", acc: "12s", ontime: 98, rating: "4.9" },
    { n: "Suresh", team: "Print Room", acc: "28s", ontime: 95, rating: "4.8" },
    { n: "Deepak", team: "Facilities", acc: "41s", ontime: 91, rating: "4.7" },
    { n: "Priya", team: "IT", acc: "19s", ontime: 97, rating: "4.9" },
  ];
  return (
    <Frame title="Staff Scorecards · This Month">
      <ul className="space-y-3">
        {staff.map((s) => (
          <li key={s.n} className="flex items-center gap-3">
            <Avatar name={s.n} />
            <div className="min-w-0 flex-1">
              <div className="flex items-baseline justify-between gap-2">
                <p className="truncate text-sm font-semibold">
                  {s.n} <span className="font-normal text-muted">· {s.team}</span>
                </p>
                <p className="text-xs font-semibold text-[oklch(55%_0.15_70)]">{s.rating}★</p>
              </div>
              <div className="mt-1 flex items-center gap-2">
                <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-surface-2">
                  <div className="anim-bar h-full rounded-full bg-gradient-to-r from-accent to-fuchsia" style={{ width: `${s.ontime}%` }} />
                </div>
                <span className="w-24 text-right text-[11px] tabular-nums text-muted">
                  {s.ontime}% · {s.acc}
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Frame>
  );
}

function MobileApp() {
  const items = [
    ["☕", "Coffee"], ["🍵", "Tea"], ["🥤", "Juice"], ["🍪", "Snacks"],
    ["📄", "Print"], ["💻", "IT help"], ["❄️", "Facilities"], ["📦", "Courier"], ["🛡️", "Security"],
  ];
  return (
    <Phone label="ZapBuzzer Mobile App Home With One-Tap Request Tiles">
      <p className="text-[11px] text-muted">Good afternoon, Aarav</p>
      <p className="text-sm font-bold">What do you need?</p>
      <div className="mt-3 grid grid-cols-3 gap-2">
        {items.map(([i, l]) => (
          <div key={l} className="rounded-xl border border-line bg-surface py-2.5 text-center">
            <span className="text-lg" aria-hidden>{i}</span>
            <p className="text-[11px] font-medium">{l}</p>
          </div>
        ))}
      </div>
      <div className="mt-3 rounded-xl bg-ink p-2.5 text-white">
        <div className="flex items-center justify-between">
          <p className="text-[11px] font-semibold">☕ 2× Coffee · Boss Cabin</p>
          <span className="text-[11px] text-white/60">ETA 3m</span>
        </div>
        <p className="mt-0.5 text-[11px] text-white/70">Arjun is on it · accepted in 12s</p>
      </div>
    </Phone>
  );
}

function NotificationFlow() {
  const ch = [
    ["App", "Rings through on silent", "📱"],
    ["Telegram", "Pantry team group", "✈️"],
    ["WhatsApp", "Staff phones", "💬"],
    ["Email", "Team inbox", "✉️"],
  ];
  return (
    <Frame title="One Buzz → Every Channel at Once">
      <div className="flex flex-col items-center gap-4">
        <div className="anim-ping rounded-xl bg-accent px-4 py-2 text-sm text-white font-semibold text-white">☕ 2× Coffee · Boss Cabin</div>
        <svg className="h-8 w-full max-w-sm text-line" viewBox="0 0 300 30" preserveAspectRatio="none" aria-hidden>
          {[37, 112, 188, 263].map((x) => (
            <path key={x} d={`M150 0 C150 15, ${x} 15, ${x} 30`} fill="none" stroke="currentColor" strokeWidth="2" />
          ))}
        </svg>
        <ul className="grid w-full grid-cols-2 gap-2 sm:grid-cols-4">
          {ch.map(([n, d, i], k) => (
            <li key={n} className="anim-rise rounded-xl border border-line p-3 text-center" style={{ animationDelay: `${k * 100}ms` }}>
              <span aria-hidden>{i}</span>
              <p className="text-sm font-semibold">{n}</p>
              <p className="text-[11px] text-muted">{d}</p>
            </li>
          ))}
        </ul>
        <p className="text-xs text-muted">Repeats until someone taps Accept.</p>
      </div>
    </Frame>
  );
}

function Acceptance() {
  const staff = [
    { n: "Arjun", s: "Accepted · 12s", win: true },
    { n: "Manoj", s: "Too late, Arjun has it", win: false },
    { n: "Sunita", s: "Notified · on break", win: false },
  ];
  return (
    <Frame title="First-Accept-Wins · Pantry Team">
      <p className="mb-3 text-sm">
        <span className="font-semibold">☕ 2× Coffee</span> <span className="text-muted">sent to 3 pantry staff</span>
      </p>
      <ul className="space-y-2">
        {staff.map((p) => (
          <li key={p.n} className={`flex items-center gap-3 rounded-xl border px-3 py-2.5 ${p.win ? "border-success/50 bg-[oklch(62%_0.16_155/0.07)]" : "border-line opacity-70"}`}>
            <Avatar name={p.n} />
            <span className="flex-1 text-sm font-medium">{p.n}</span>
            {p.win ? <StatusPill status="accepted">✓ Owner</StatusPill> : <span className="text-[11px] text-muted">{p.s}</span>}
          </li>
        ))}
      </ul>
      <p className="mt-3 text-xs text-muted">Exactly one person owns it. Nobody assumes a colleague has it covered.</p>
    </Frame>
  );
}

function Delivery() {
  return (
    <Frame title="Delivered · Request #4821">
      <div className="flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-full bg-success text-white" aria-hidden>✓</span>
        <div>
          <p className="text-sm font-semibold">2× Black coffee delivered to Boss Cabin</p>
          <p className="text-xs text-muted">by Arjun · 4 min total · 0 phone calls</p>
        </div>
      </div>
      <div className="mt-4 grid h-24 place-items-center rounded-xl bg-gradient-to-br from-surface-2 to-accent-soft text-3xl" role="img" aria-label="Delivery photo attached by staff">
        ☕☕
      </div>
      <p className="mt-4 text-sm font-medium">How was it?</p>
      <p className="mt-1 text-2xl tracking-widest text-[oklch(76.9%_0.188_70)]" aria-label="Rated 5 out of 5 stars">★★★★★</p>
    </Frame>
  );
}

function Catalog() {
  const items = [
    ["☕", "Black coffee", "Usual"], ["🥛", "Cappuccino", ""], ["🍵", "Masala chai", "Usual"], ["🌿", "Green tea", ""],
    ["🥤", "Fresh juice", ""], ["🍪", "Cookies", ""], ["🥜", "Dry fruits", ""], ["🥪", "Sandwich", ""],
  ];
  return (
    <Frame title="Pantry Catalogue">
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {items.map(([i, n, tag]) => (
          <div key={n} className="relative rounded-xl border border-line p-3 text-center transition hover:border-accent/40">
            {tag && <span className="absolute right-1.5 top-1.5 rounded-full bg-accent-soft px-1.5 text-[11px] font-semibold text-accent-text">{tag}</span>}
            <span className="text-2xl" aria-hidden>{i}</span>
            <p className="mt-1 text-xs font-medium">{n}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-between rounded-xl bg-surface-2 px-3 py-2.5 text-sm">
        <span>
          <span className="font-semibold">2× Black coffee</span> <span className="text-muted">→ Boss Cabin</span>
        </span>
        <span className="rounded-lg bg-accent px-3 py-1 text-xs font-semibold text-white">Send</span>
      </div>
    </Frame>
  );
}

function PrintJob() {
  return (
    <Frame title="Print Room · New Job">
      <div className="flex items-center gap-3 rounded-xl border border-dashed border-accent/40 bg-accent-soft p-3">
        <span className="grid h-10 w-9 place-items-center rounded-md bg-danger text-[11px] font-bold text-white" aria-hidden>PDF</span>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold">Q3-pitch-deck.pdf</p>
          <p className="text-[11px] text-muted">12 pages · uploaded by Kavya</p>
        </div>
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2 text-center text-xs">
        {[
          ["Copies", "24"],
          ["Colour", "Yes"],
          ["Deliver to", "Desk 4B"],
        ].map(([k, v]) => (
          <div key={k} className="rounded-lg bg-surface-2 py-2">
            <p className="text-muted">{k}</p>
            <p className="text-sm font-semibold">{v}</p>
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center justify-between">
        <StatusPill status="accepted">Suresh accepted</StatusPill>
        <span className="text-xs text-muted">Pitch in 10 min · ETA 6 min</span>
      </div>
    </Frame>
  );
}

function Escalation() {
  const steps = [
    { who: "Facilities team", when: "0:00", s: "pinging" as Status, d: "Deepak, Ravi notified" },
    { who: "Owner: Deepak", when: "0:40", s: "accepted" as Status, d: "Accepted, timer running" },
    { who: "SLA 15:00 breached", when: "15:00", s: "overdue" as Status, d: "Not marked delivered" },
    { who: "Admin Head", when: "15:01", s: "escalated" as Status, d: "Auto-escalated with full history" },
  ];
  return (
    <Frame title="Escalation Chain · AC Issue">
      <ol className="space-y-2">
        {steps.map((s, i) => (
          <li key={s.who} className="anim-rise flex items-center gap-3 rounded-xl border border-line px-3 py-2.5" style={{ animationDelay: `${i * 110}ms` }}>
            <span className="w-11 text-[11px] tabular-nums text-muted">{s.when}</span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold">{s.who}</p>
              <p className="truncate text-[11px] text-muted">{s.d}</p>
            </div>
            <StatusPill status={s.s} />
          </li>
        ))}
      </ol>
    </Frame>
  );
}

function Roles() {
  const cols = ["Owner", "Manager", "Staff", "Employee"];
  const rows: [string, boolean[]][] = [
    ["Raise requests", [true, true, true, true]],
    ["Accept & deliver", [false, true, true, false]],
    ["Edit catalogue", [true, true, false, false]],
    ["View analytics", [true, true, false, false]],
    ["View spend", [true, false, false, false]],
    ["Audit log", [true, false, false, false]],
  ];
  return (
    <Frame title="Roles & Permissions (Example)">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[340px] text-sm">
          <thead>
            <tr className="text-left text-[11px] uppercase tracking-wider text-muted">
              <th className="pb-2 font-semibold">Permission</th>
              {cols.map((c) => (
                <th key={c} className="pb-2 text-center font-semibold">{c}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map(([p, v]) => (
              <tr key={p} className="border-t border-line">
                <td className="py-2">{p}</td>
                {v.map((on, i) => (
                  <td key={i} className="text-center">
                    {on ? <span className="text-success" aria-label="allowed">●</span> : <span className="text-line" aria-label="not allowed">○</span>}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Frame>
  );
}

function AuditLog() {
  const rows = [
    ["14:00:12", "Arjun", "accepted request #4821"],
    ["14:01:00", "Arjun", "marked #4821 started · ETA 3m"],
    ["14:04:00", "Arjun", "delivered #4821 · photo attached"],
    ["14:06:31", "Priya (Manager)", "added “Cold brew” to pantry catalogue"],
    ["14:10:02", "System", "escalated #4817 to Admin Head (SLA)"],
    ["14:12:45", "Aarav (Owner)", "changed role of Neha → Manager"],
  ];
  return (
    <Frame title="Audit Log">
      <ul className="divide-y divide-line font-mono text-[12px]">
        {rows.map(([t, who, what]) => (
          <li key={t} className="flex gap-3 py-2">
            <span className="shrink-0 text-muted">{t}</span>
            <span className="min-w-0">
              <span className="font-semibold text-accent-text">{who}</span> {what}
            </span>
          </li>
        ))}
      </ul>
    </Frame>
  );
}

function BeforeAfter() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <div className="rounded-2xl border border-line bg-surface p-5">
        <p className="text-sm font-semibold">The phone-call way</p>
        <ul className="mt-3 space-y-2 text-sm text-muted">
          <li><span className="tabular-nums text-fg">2:00</span> Aarav rings the pantry: two coffees for the boss cabin.</li>
          <li><span className="tabular-nums text-fg">2:09</span> Still waiting. Second call. Raju forgot the order.</li>
          <li><span className="tabular-nums text-fg">2:14</span> Third call. Raju has stepped out for lunch.</li>
          <li><span className="tabular-nums text-fg">2:25</span> A colleague finally brings it. The meeting is half over.</li>
        </ul>
        <p className="mt-4 rounded-lg bg-[oklch(60%_0.2_20/0.08)] px-3 py-2 text-sm font-semibold text-[oklch(50%_0.19_20)]">25 minutes · three calls · coffee gone cold</p>
      </div>
      <div className="rounded-2xl border border-accent/30 bg-surface p-5 shadow-card">
        <p className="text-sm font-semibold">The ZapBuzzer way</p>
        <ul className="mt-3 space-y-2 text-sm text-muted">
          <li><span className="tabular-nums text-fg">2:00:00</span> One tap sends two black coffees to the Boss Cabin.</li>
          <li><span className="tabular-nums text-fg">2:00:12</span> Arjun claims it; his name and photo appear.</li>
          <li><span className="tabular-nums text-fg">2:01</span> Marked as started, three minutes away.</li>
          <li><span className="tabular-nums text-fg">2:04</span> Handed over with a photo, then rated five stars.</li>
        </ul>
        <p className="mt-4 rounded-lg bg-[oklch(62%_0.16_155/0.1)] px-3 py-2 text-sm font-semibold text-[oklch(42%_0.13_155)]">4 minutes · zero calls · still hot</p>
      </div>
    </div>
  );
}

const visuals: Record<VisualKind, () => React.JSX.Element> = {
  "request-dashboard": RequestDashboard,
  "staff-queue": StaffQueue,
  "request-timeline": RequestTimeline,
  "sla-timer": SlaTimer,
  analytics: Analytics,
  scorecard: Scorecard,
  "mobile-app": MobileApp,
  "notification-flow": NotificationFlow,
  acceptance: Acceptance,
  delivery: Delivery,
  catalog: Catalog,
  "print-job": PrintJob,
  escalation: Escalation,
  roles: Roles,
  "audit-log": AuditLog,
  "before-after": BeforeAfter,
};
