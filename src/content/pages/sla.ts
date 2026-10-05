import type { PageContent } from "../types";

export const pages: PageContent[] = [
  // ───────────────────────────── HUB ─────────────────────────────
  {
    path: "sla",
    title: "SLA Management for Office Requests",
    description:
      "Give every office request a deadline. ZapBuzzer times coffee, prints, IT and facilities jobs, flags breaches and escalates overdue work to a manager automatically.",
    h1: "Every request gets a deadline. Nothing quietly rots.",
    eyebrow: "SLA & Escalation",
    lead:
      "ZapBuzzer starts a clock the moment someone taps Buzz. If the pantry, print room, IT desk or facilities team misses the deadline, the request climbs to a manager on its own, so nobody has to chase it by phone.",
    keywords: [
      "office request sla",
      "internal sla management",
      "sla escalation software",
      "facilities sla tracking",
      "pantry request deadline",
      "auto escalation office requests",
    ],
    heroVisual: "sla-timer",
    sections: [
      {
        type: "prose",
        eyebrow: "Why deadlines",
        heading: "Office requests fail quietly, not loudly",
        paragraphs: [
          "Most internal requests never get refused. They just drift. Someone asks for the Conference Room B projector to be fixed, a facilities person says “on it”, then gets pulled into a delivery at the gate. Forty minutes later the client is squinting at a laptop screen and nobody can say whose job it was.",
          "Service-level agreements are usually associated with helpdesks and vendor contracts, but the idea is simple enough for a pantry or a print room: a request should be done within an agreed time, and if it is not, someone with authority should know before the requester has to complain. ZapBuzzer applies that idea to everyday office work, from a coffee order for the boss cabin to an AC stuck at 16°C.",
          "Every request in ZapBuzzer is timed from the moment it is buzzed. The timer is visible to the person who accepted it, to the requester, and to managers. When the timer runs out, the request is marked overdue and escalated automatically. That is the whole promise: deadlines that people can see, and a safety net that does not depend on anybody remembering to follow up.",
        ],
      },
      {
        type: "visual",
        visual: "sla-timer",
        heading: "What a running SLA looks like",
        body:
          "Each live request carries a countdown. Staff see how much time is left on the job they own, requesters see an ETA instead of guessing, and managers see which jobs are close to the line.",
        points: [
          "Timer starts when the request is buzzed, not when someone remembers to log it",
          "Accepted, Started and Delivered states are timestamped along the way",
          "Requests that pass their deadline are flagged overdue and escalated",
        ],
      },
      {
        type: "workflow",
        heading: "How SLA and escalation fit the request lifecycle",
        intro:
          "The SLA is not a separate module bolted on later. It runs alongside every step a request already goes through.",
        steps: [
          {
            title: "Buzz",
            body: "An employee picks an item such as Facilities or Coffee, adds a note and destination, and taps Buzz. The clock starts here.",
          },
          {
            title: "Notify and accept",
            body: "The right team is pinged, and notifications repeat until someone taps Accept. Time to accept is recorded as its own number.",
          },
          {
            title: "Work under the timer",
            body: "The owner marks the job Started with an ETA. The remaining time stays visible to the owner and the requester.",
          },
          {
            title: "Deadline passes",
            body: "If the request is not delivered in time, it becomes overdue and is escalated to a manager automatically.",
          },
          {
            title: "Close and learn",
            body: "Delivery and rating close the loop. On-time and overdue results feed reports and analytics so patterns become visible.",
          },
        ],
      },
      {
        type: "scenario",
        heading: "The AC that would not warm up",
        persona: "Om, Engineer",
        setting: "Conference Room B is stuck at 16°C an hour before a design review.",
        timeline: [
          { time: "10:02", event: "Om taps Facilities, notes “AC stuck at 16°C, Conf Room B”, and buzzes." },
          { time: "10:02", event: "Facilities team is pinged on the app and Telegram; the timer starts." },
          { time: "10:03", event: "Deepak accepts and is shown to Om with his name and photo." },
          { time: "10:12", event: "Deepak is called to the loading bay; the AC job sits untouched." },
          { time: "10:17", event: "Deadline passes. The request is marked overdue and escalates to the facilities manager." },
          { time: "10:24", event: "Manager reassigns help; the AC is reset and the job is marked Delivered." },
        ],
        outcome:
          "Om never had to phone anyone. The escalation did the chasing, and the overdue minutes are recorded so the team can see why it happened.",
      },
      {
        type: "features",
        heading: "What the SLA layer covers",
        items: [
          { title: "SLA timers", body: "Every request carries a deadline from the moment it is buzzed, visible to staff, requester and managers." },
          { title: "Live tracking", body: "See which requests are on time, close to the line or already late, across teams." },
          { title: "Breach detection", body: "When the deadline passes the request is flagged overdue without anyone checking a spreadsheet." },
          { title: "Automatic escalation", body: "Overdue requests are pushed to a manager automatically instead of waiting for a complaint." },
          { title: "Escalation chains (Pro)", body: "Define who hears about it next if the first escalation is not resolved." },
          { title: "Reporting and analytics (Pro)", body: "On-time percentage, overdue counts and breach patterns by team, category and time of day." },
        ],
      },
      {
        type: "comparison",
        heading: "Following up by memory vs. following up by timer",
        columns: ["Without SLAs", "With ZapBuzzer SLAs"],
        rows: [
          { label: "Who notices a late job", a: "The requester, usually by phoning", b: "The system, at the deadline" },
          { label: "Who gets told", a: "Whoever picks up the phone", b: "The manager in the escalation path" },
          { label: "Proof of what happened", a: "Conflicting memories", b: "Timestamped states for every step" },
          { label: "Learning from misses", a: "Rarely happens", b: "Overdue trends in reports and analytics" },
          { label: "Fairness to staff", a: "Blame goes to whoever is visible", b: "Attribution based on recorded times" },
        ],
      },
      {
        type: "stats",
        heading: "Results from the first month in pilot offices",
        items: [
          { value: "32s", label: "average accept time" },
          { value: "96%", label: "on-time delivery" },
          { value: "−87%", label: "phone calls" },
          { value: "4.8★", label: "average staff rating" },
        ],
        note: "Figures from ZapBuzzer pilot offices, first month of use.",
      },
      {
        type: "table",
        heading: "What is included on each plan",
        headers: ["Capability", "Free", "Pro", "Enterprise"],
        rows: [
          ["Every request timed", "Yes", "Yes", "Yes"],
          ["Overdue requests escalate to a manager", "Yes", "Yes", "Yes"],
          ["Multi-step escalation chain", "—", "Yes", "Yes"],
          ["Full analytics and scorecards", "—", "Yes", "Yes"],
          ["Audit logs and reports", "—", "Yes", "Yes"],
          ["History window", "Last 30 days", "Full", "Full"],
        ],
      },
      {
        type: "audience",
        heading: "Who relies on SLAs day to day",
        items: [
          { role: "Office managers", benefit: "Stop being the human alarm clock. Late jobs come to you; on-time ones never need you." },
          { role: "Facilities and IT leads", benefit: "See which categories routinely run late and staff the busy hours properly." },
          { role: "Pantry and print staff", benefit: "A clear deadline and fair, time-stamped credit for jobs done on time." },
          { role: "Founders and CEOs", benefit: "Confidence that a request from a board meeting will not be forgotten." },
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Start with deadlines people already expect",
        body:
          "You do not need a policy document. Ask the pantry how long a coffee should take and IT how long an HDMI cable should take, then set SLAs a little above that. Tighten them once a few weeks of on-time data are in.",
      },
    ],
    faqs: [
      {
        q: "Is SLA tracking available on the Free plan?",
        a: "Every request is timed on every plan, and overdue requests escalate to a manager. The multi-step escalation chain, full analytics and scorecards, and audit logs and reports are part of Pro at ₹99 per seat per month.",
      },
      {
        q: "When does the SLA clock start?",
        a: "When the request is buzzed. That means the time staff spend not noticing a notification counts, which is exactly the delay offices usually cannot see. Accept time is also recorded separately so you can tell slow pickup apart from slow work.",
      },
      {
        q: "Can different requests have different deadlines?",
        a: "Yes. SLAs are set by request type, so a coffee and a projector repair do not share the same target. Keep them realistic for each team and adjust after you see real data.",
      },
      {
        q: "What happens when a request becomes overdue?",
        a: "It is flagged overdue and escalated to a manager automatically. On Pro you can add further steps in an escalation chain so that if the first manager does not act, the next person hears about it.",
      },
      {
        q: "Will SLAs make staff feel watched?",
        a: "ZapBuzzer is designed to be people-first. Timestamps give staff fair attribution for work done well, and analytics show when a team is understaffed rather than just who was late.",
      },
      {
        q: "How do I try SLAs and escalation chains?",
        a: "Begin a free trial lasting 14 days. You need neither a card nor an onboarding call, so you can invite your team and watch real requests run against deadlines the same afternoon.",
      },
    ],
    related: [
      "sla/timers",
      "sla/automatic-escalation",
      "sla/escalation-chains",
      "analytics/on-time-performance",
      "use-cases/sla-compliance",
      "resources/sla-management-guide",
      "pricing/pro",
      "free-trial",
    ],
    cta: {
      title: "Put a deadline on every request",
      body: "Start a 14-day Pro trial with SLA timers and escalation chains. No card, no setup call.",
    },
  },

  // ───────────────────────────── TIMERS ─────────────────────────────
  {
    path: "sla/timers",
    title: "SLA Timers for Office Requests",
    description:
      "SLA timers give each pantry, print, IT and facilities request a visible countdown from the moment it is buzzed, so staff and requesters share the same deadline.",
    h1: "A visible countdown on every job",
    eyebrow: "SLA Timers",
    lead:
      "A deadline only works if the person doing the work can see it. ZapBuzzer puts a running timer on each request, in the staff member’s queue and on the requester’s screen.",
    keywords: ["sla timer", "request countdown timer", "office request deadline", "internal request timer"],
    heroVisual: "sla-timer",
    sections: [
      {
        type: "prose",
        heading: "Why a timer beats a promise",
        paragraphs: [
          "“Two minutes” from a busy pantry runner means something different at 9:30 than at 1:15. A timer replaces the vague promise with a shared number. The runner knows how long is left; the person in the boss cabin knows when to expect the tray.",
          "In ZapBuzzer, the timer is attached to the request itself, not to a person’s memory. It starts at the buzz, carries through Accepted and Started, and stops when the job is marked Delivered. Each state change is time-stamped, so the full timeline is available later.",
        ],
      },
      {
        type: "visual",
        visual: "sla-timer",
        heading: "The countdown ring",
        body: "Each live request shows time remaining and its state. When it runs out, the ring changes to overdue and the escalation note appears.",
        points: ["On time", "Close to deadline", "Overdue and escalated"],
      },
      {
        type: "metrics",
        heading: "What a timer actually measures",
        intro: "Several durations come out of one request. Each answers a different question.",
        items: [
          { metric: "Time to accept", meaning: "From buzz to the first staff member tapping Accept. Shows how quickly the team notices and picks up work." },
          { metric: "Time to start", meaning: "From accept to Started. Shows how long a job waits in someone’s hands before work begins." },
          { metric: "Time to deliver", meaning: "From buzz to Delivered. This is the number the SLA deadline is measured against." },
          { metric: "Time remaining", meaning: "The live countdown: SLA target minus elapsed time since the buzz." },
          { metric: "Overdue minutes", meaning: "How far past the deadline a request was delivered, or has run so far." },
        ],
      },
      {
        type: "scenario",
        heading: "24 colour copies against the clock",
        persona: "Kavya, Sales Lead",
        setting: "A client pitch starts in 10 minutes and the deck is not printed.",
        timeline: [
          { time: "14:50", event: "Kavya uploads the PDF, sets 24 colour copies and buzzes the print room." },
          { time: "14:50", event: "The print-room queue shows the job with its timer running." },
          { time: "14:51", event: "Sunil accepts; Kavya sees his name and ETA." },
          { time: "14:53", event: "Sunil marks it Started; the countdown is visible on his phone." },
          { time: "14:58", event: "Copies are delivered to Kavya’s desk and marked Delivered, inside the deadline." },
        ],
        outcome: "“Print jobs land at my desk before the client even sits down. Zero chase calls.” — Kavya, Sales Lead",
      },
      {
        type: "table",
        heading: "Example targets offices start with",
        intro: "These are illustrations to help you choose, not built-in values. Set what suits your team.",
        headers: ["Request", "Typical starting SLA", "Why"],
        rows: [
          ["Coffee or tea to a cabin", "10 minutes", "Short walk, simple prep"],
          ["HDMI cable or adapter", "10 minutes", "Item usually in stock at the IT desk"],
          ["Colour print job", "15 minutes", "Depends on copies and queue"],
          ["AC or projector issue", "15 minutes", "Meeting usually waiting on it"],
          ["Lunch for a group", "45 minutes", "Multiple items and prep time"],
        ],
      },
      {
        type: "features",
        heading: "Timer details that matter",
        items: [
          { title: "Starts automatically", body: "No one has to remember to open a ticket; the buzz is the ticket." },
          { title: "Shared view", body: "Staff, requester and manager see the same clock, which ends arguments about how long it has been." },
          { title: "Per-type targets", body: "Different request types carry different deadlines that fit the work." },
          { title: "Feeds everything else", body: "Timer data drives overdue flags, escalation, reports and analytics." },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Timers run on every plan",
        body: "Every request is timed on Free, Pro and Enterprise. Escalation chains, full analytics and reports built on those timers are Pro features.",
      },
      {
        type: "checklist",
        heading: "Setting your first timers",
        items: [
          "List your five most common request types",
          "Ask the team that handles each how long it normally takes",
          "Set the SLA slightly above that figure",
          "Review overdue counts after two weeks",
          "Tighten targets where the team is comfortably on time",
        ],
      },
    ],
    faqs: [
      { q: "Can the requester see the timer?", a: "Yes. The requester sees who accepted the job and the ETA, so they do not need to call to ask. That visibility is a large part of why phone calls drop." },
      { q: "Does the timer pause when a job is accepted?", a: "No. The SLA is measured from buzz to delivery, so accepting a job does not stop the clock. Time to accept is recorded separately so you can see where delay comes from." },
      { q: "What if a request is cancelled?", a: "A cancelled request is not delivered, so it should not be counted as an on-time delivery. Use cancellation honestly and your on-time numbers stay meaningful." },
      { q: "Are timers available on the Free plan?", a: "Yes, every request is timed on all plans. Pro adds escalation chains, full analytics, scorecards and reports built on the timer data." },
      { q: "Should every request type have the same SLA?", a: "Usually not. A cup of tea and a broken projector are different jobs. Start with a realistic target per type and adjust once you have a few weeks of data." },
    ],
    related: ["sla", "sla/tracking", "sla/breach-detection", "features/request-timers", "features/eta-tracking", "workflows/print-request", "pricing"],
    cta: { title: "See the countdown on a real request", body: "Open the read-only demo or start a free trial and buzz your first coffee." },
  },

  // ───────────────────────────── TRACKING ─────────────────────────────
  {
    path: "sla/tracking",
    title: "Live SLA Tracking Across Office Teams",
    description:
      "Track which office requests are on time, close to deadline or overdue, across pantry, print, IT and facilities, from one live view instead of phone calls.",
    h1: "Know which jobs are slipping before anyone complains",
    eyebrow: "SLA Tracking",
    lead:
      "SLA tracking is the live picture: every open request, its owner, its state and how much time is left. Managers see risk early; staff see their own priorities.",
    keywords: ["sla tracking", "live request tracking", "office sla dashboard", "request deadline tracking"],
    heroVisual: "request-dashboard",
    sections: [
      {
        type: "prose",
        heading: "A queue sorted by urgency, not by who shouted",
        paragraphs: [
          "Without tracking, the request that gets done first is the one whose requester is loudest or nearest. Live SLA tracking replaces that with a view of open requests and their remaining time, so the job about to breach gets attention before the one that just arrived.",
          "Tracking in ZapBuzzer comes from the states a request already moves through: buzzed, accepted, started, delivered. Each step is time-stamped, and the SLA status is worked out from those times. Nobody fills in a tracker by hand.",
        ],
      },
      {
        type: "visual",
        visual: "request-dashboard",
        heading: "The live board",
        body: "Open requests with owner, state and time left. Overdue ones stand out so a manager can step in.",
        points: ["Who owns it", "What state it is in", "How long until its deadline"],
      },
      {
        type: "problem-solution",
        heading: "What tracking replaces",
        problem: {
          title: "Tracking by WhatsApp group",
          points: ["Requests scroll out of view", "“Done?” messages in reply chains", "No idea which job is late", "No record once the chat is cleared"],
        },
        solution: {
          title: "Tracking in ZapBuzzer",
          points: ["Every open request in one list", "State changes visible instantly", "Late jobs flagged automatically", "Full timeline kept with the request"],
        },
      },
      {
        type: "scenario",
        heading: "A busy hour on the 3rd floor",
        persona: "Priya, Office Manager",
        setting: "Three meetings start at 11; the pantry and IT queues fill up at once.",
        timeline: [
          { time: "10:45", event: "Five coffee requests and an HDMI request arrive within four minutes." },
          { time: "10:47", event: "Priya’s board shows four on time and one coffee close to its deadline with no owner." },
          { time: "10:48", event: "Raj accepts the unowned coffee after the repeat notification." },
          { time: "10:52", event: "Tanvi’s HDMI request is delivered in 3 minutes." },
          { time: "10:58", event: "All six are delivered; none hit overdue." },
        ],
        outcome: "Priya did not walk to the pantry once. She watched the board and only would have stepped in if something went red.",
      },
      {
        type: "metrics",
        heading: "Live states you will see",
        items: [
          { metric: "Open, unaccepted", meaning: "Buzzed but no one has tapped Accept yet; notifications keep repeating." },
          { metric: "Accepted", meaning: "A named staff member owns it; the requester can see who." },
          { metric: "Started", meaning: "Work has begun and an ETA has been given." },
          { metric: "Near deadline", meaning: "Still open with little time left before the SLA target." },
          { metric: "Overdue", meaning: "The deadline has passed without delivery; escalation has been triggered." },
        ],
      },
      {
        type: "audience",
        heading: "Different eyes on the same data",
        items: [
          { role: "Staff", benefit: "See your own accepted jobs and which is closest to its deadline." },
          { role: "Requesters", benefit: "See your request’s owner and ETA without calling." },
          { role: "Managers", benefit: "See every team’s open work and step in only on risk." },
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Watch unaccepted requests most closely",
        body: "A request no one has accepted has no owner. If those linger, the issue is usually notification reach or staffing, not effort. Pro’s Telegram and WhatsApp pings help teams who are away from a screen.",
      },
      {
        type: "prose",
        heading: "Tracking across channels and floors",
        paragraphs: [
          "Staff do not sit in front of a dashboard all day. A pantry runner is on the stairs, the facilities technician is under a desk, the mailroom lead is at the gate. That is why tracking in ZapBuzzer follows the request, not the screen. The same states appear on the mobile app, which still rings when a phone is locked or silenced, and on the web app used by managers at their desks.",
          "For larger offices, the value grows with distance. A manager on the ground floor can see that a 5th-floor tea request has been accepted and started without taking the lift. On Pro, multi-location tracking extends that view across offices, so a group operations head can see that one site is running late while another is clear, and ask the right person rather than ringing everyone.",
        ],
      },
    ],
    faqs: [
      { q: "Does tracking work on the mobile app?", a: "Yes. Staff accept, start and deliver from the mobile app, and those state changes appear on the board immediately. The Android app rings through even on silent so requests are not missed." },
      { q: "What should a manager do when something turns red?", a: "Open the request to see who owns it and its timeline, then nudge, add help or reassign. In most cases the escalation will already have reached you." },
      { q: "Do I need to update a tracker manually?", a: "No. SLA status is derived from the request’s own states and timestamps. Staff only tap Accept, Started and Delivered as they work." },
      { q: "Can staff see other people’s requests?", a: "What each person sees depends on their role. Roles carry granular permissions, so you can decide who sees the whole board and who sees only their queue." },
      { q: "Can I track across several office locations?", a: "Multi-location is part of Pro. On Free, you get one location with up to 10 staff." },
      { q: "How is tracking different from SLA reporting?", a: "Tracking is the live, right-now view for acting on open requests. Reporting looks back over a period to show on-time rates and overdue patterns." },
    ],
    related: ["sla", "sla/timers", "sla/overdue-requests", "features/request-tracking", "admin/manager-dashboard", "use-cases/track-office-requests", "demo"],
    cta: { title: "Watch a live board fill up", body: "Explore the read-only demo, then start a free trial for your own office." },
  },

  // ───────────────────────────── BREACH DETECTION ─────────────────────────────
  {
    path: "sla/breach-detection",
    title: "SLA Breach Detection for Internal Requests",
    description:
      "ZapBuzzer detects SLA breaches the moment a request passes its deadline, flags it overdue and triggers escalation, so late office jobs never go unnoticed.",
    h1: "The moment a deadline is missed, it is noticed",
    eyebrow: "Breach Detection",
    lead:
      "A breach is simple: the deadline passed and the job is not delivered. What matters is that it is caught at that moment, by the system, rather than hours later by an annoyed colleague.",
    keywords: ["sla breach detection", "overdue request alert", "missed deadline office request", "sla breach"],
    heroVisual: "sla-timer",
    sections: [
      {
        type: "prose",
        heading: "Breaches are information, not just failures",
        paragraphs: [
          "Every office will have late jobs. A lift is out, two people are on leave, a vendor is at the gate. The problem is not that breaches happen; it is that they are invisible until someone complains, and by then the cause is forgotten.",
          "ZapBuzzer checks each open request against its SLA. The instant the deadline passes without a Delivered state, the request is flagged overdue. That flag is recorded with the request, drives escalation, and later shows up in reports, so a breach becomes something the team can learn from.",
        ],
      },
      {
        type: "workflow",
        heading: "What happens at the breach",
        steps: [
          { title: "Deadline reached", body: "The request’s timer hits zero while it is still open." },
          { title: "Flagged overdue", body: "Its status changes to overdue on the board and in the owner’s queue." },
          { title: "Escalation triggered", body: "A manager is notified automatically; on Pro, a chain can continue upward." },
          { title: "Recorded", body: "The breach and overdue minutes stay attached to the request for reports." },
        ],
      },
      {
        type: "visual",
        visual: "escalation",
        heading: "From breach to escalation",
        body: "The overdue flag is the trigger. The escalation ladder shows who is told next.",
      },
      {
        type: "scenario",
        heading: "The projector before the board meeting",
        persona: "Aarav, Founder & CEO",
        setting: "Board meeting at 11 in the boss cabin; the projector shows no signal.",
        timeline: [
          { time: "10:30", event: "Aarav’s assistant buzzes IT: “Projector no signal, boss cabin, board at 11.”" },
          { time: "10:31", event: "Farhan accepts and marks it Started." },
          { time: "10:45", event: "The SLA passes; the request is flagged overdue and escalated to the IT manager." },
          { time: "10:47", event: "The IT manager sends a spare projector from the store room." },
          { time: "10:55", event: "Delivered. The meeting starts on time." },
        ],
        outcome: "The breach was caught 15 minutes before the meeting, not at 11:01. The overdue record later showed the boss cabin projector cable needed replacing.",
      },
      {
        type: "metrics",
        heading: "Breach measures",
        items: [
          { metric: "Breach count", meaning: "Number of requests delivered after, or still open past, their deadline in a period." },
          { metric: "Breach rate", meaning: "Breaches as a share of all requests in the period; the inverse of on-time percentage." },
          { metric: "Overdue minutes", meaning: "How late each breached request was, which separates near-misses from real failures." },
          { metric: "Breaches by category", meaning: "Which request types breach most, such as AC issues versus coffee." },
        ],
      },
      {
        type: "checklist",
        heading: "Reviewing breaches without blame",
        items: [
          "Look at breach patterns by hour before looking at individuals",
          "Check whether breaches were slow to accept or slow to deliver",
          "Ask whether the SLA target was realistic for that request type",
          "Note recurring causes such as a faulty cable or a staffing gap",
          "Recognise staff who keep breach rates low in busy hours",
        ],
      },
      {
        type: "callout",
        tone: "warning",
        title: "Do not set SLAs you know will breach",
        body: "If every AC request breaches, your target is wrong or your team is short-staffed. Constant breaches train people to ignore the overdue flag.",
      },
      {
        type: "prose",
        heading: "Why detection must be immediate",
        paragraphs: [
          "A breach found the next morning is history. A breach found at the deadline is still a request someone can rescue. That difference is the reason ZapBuzzer checks deadlines continuously instead of in a nightly batch or a weekly spreadsheet review.",
          "Immediate detection also changes how people behave. When staff know a missed deadline will be visible within seconds, they tend to accept only what they can start, ask for help earlier, and mark jobs Delivered as soon as they are done. That last habit matters: a job finished but not marked becomes a false breach, so a quick tap at the desk keeps the record accurate. Over a few weeks, breach data becomes trustworthy enough to base staffing and target decisions on.",
        ],
      },
    ],
    faqs: [
      { q: "Can a forgotten Delivered tap cause a false breach?", a: "Yes, if staff finish the job but do not mark it, the timer keeps running. Encourage marking Delivered at the point of handover, optionally with a photo." },
      { q: "Are breaches visible to the staff member?", a: "Staff see the overdue state on their own accepted jobs, which helps them prioritise the next task sensibly." },
      { q: "Is breach detection automatic?", a: "Yes. No one has to check a list. The request is flagged overdue the moment its deadline passes without delivery." },
      { q: "Who is told about a breach?", a: "A manager is notified through escalation. On Pro you can set up an escalation chain so further people are told if the issue remains unresolved." },
      { q: "Can a breached request still be completed normally?", a: "Yes. Staff deliver and the requester rates it as usual. The request simply keeps its record of being late." },
      { q: "Where can I see breach history?", a: "Breach and on-time data appear in SLA reporting and analytics, which are part of Pro. Free keeps the last 30 days of request history." },
    ],
    related: ["sla", "sla/overdue-requests", "sla/automatic-escalation", "sla/reporting", "solutions/it-support/sla", "use-cases/prevent-lost-requests", "pricing/pro"],
    cta: { title: "Catch late jobs at the deadline", body: "Try ZapBuzzer free for 14 days and see breaches flagged in real time." },
  },

  // ───────────────────────────── AUTOMATIC ESCALATION ─────────────────────────────
  {
    path: "sla/automatic-escalation",
    title: "Automatic Escalation for Overdue Requests",
    description:
      "Overdue office requests escalate to a manager on their own. ZapBuzzer removes chase calls by pushing late pantry, IT and facilities jobs up the line automatically.",
    h1: "Late requests climb the ladder by themselves",
    eyebrow: "Automatic Escalation",
    lead:
      "Escalation used to mean the requester calling someone senior. In ZapBuzzer, the request does it: when a deadline passes, a manager is told, with the full timeline attached.",
    keywords: ["automatic escalation", "auto escalate overdue requests", "office escalation workflow", "facilities escalation"],
    heroVisual: "escalation",
    sections: [
      {
        type: "prose",
        heading: "Why manual escalation fails",
        paragraphs: [
          "People are reluctant to escalate. Calling a manager about a late coffee feels petty; calling about a late projector fix feels like blaming a colleague. So they wait, and the problem gets worse.",
          "Automatic escalation takes the social cost away. It is not a complaint from a person; it is a rule the whole office agreed to. When the SLA passes, the request goes up. As Deepak, an Admin Head, put it: “Facilities tickets auto-escalate now. Nothing rots in someone’s DMs.”",
        ],
      },
      {
        type: "visual",
        visual: "escalation",
        heading: "The escalation ladder",
        body: "The overdue request moves from the owner to a manager. On Pro, further rungs can be added.",
        points: ["Owner keeps the job unless reassigned", "Manager sees the full timeline", "Next rung if still unresolved (Pro)"],
      },
      {
        type: "workflow",
        heading: "Escalation step by step",
        steps: [
          { title: "Request overdue", body: "The SLA deadline passes without delivery." },
          { title: "Manager notified", body: "The responsible manager receives the escalation with request details and history." },
          { title: "Manager acts", body: "They can nudge the owner, reassign, or send extra help." },
          { title: "Resolution recorded", body: "Delivery and any reassignment are time-stamped against the request." },
        ],
      },
      {
        type: "scenario",
        heading: "Courier at the gate, mailroom busy",
        persona: "Neha, Reception",
        setting: "A courier is waiting for an outgoing contract pickup during lunch hour.",
        timeline: [
          { time: "13:05", event: "Neha taps Courier Pickup with a note on the package." },
          { time: "13:06", event: "Mailroom is pinged; Imran accepts." },
          { time: "13:20", event: "Imran is stuck with an incoming delivery; the deadline passes." },
          { time: "13:20", event: "The request escalates to the admin manager automatically." },
          { time: "13:24", event: "The manager sends another team member; the pickup is logged and audit-trailed." },
        ],
        outcome: "Neha did not need to leave the desk or phone anyone. The courier left with the contract.",
      },
      {
        type: "comparison",
        heading: "Manual vs automatic escalation",
        columns: ["Manual", "Automatic"],
        rows: [
          { label: "Trigger", a: "Requester loses patience", b: "Deadline passes" },
          { label: "Timing", a: "Late and unpredictable", b: "Exactly at the SLA" },
          { label: "Context", a: "Told second-hand", b: "Full timeline attached" },
          { label: "Tone", a: "Feels like a complaint", b: "A neutral, agreed rule" },
        ],
      },
      {
        type: "features",
        heading: "Built in vs Pro",
        items: [
          { title: "Overdue to manager", body: "Overdue requests auto-escalate to a manager on every plan." },
          { title: "Escalation chain (Pro)", body: "Add more levels so unresolved escalations keep climbing." },
          { title: "Telegram and WhatsApp (Pro)", body: "Escalations reach managers on the channels they actually watch." },
          { title: "Reports (Pro)", body: "See how often and where escalation happens over time." },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Escalation is not punishment",
        body: "The aim is to get the job done, not to log a black mark. Use escalation data to spot staffing gaps and unrealistic targets.",
      },
      {
        type: "prose",
        heading: "What escalation is for, and what it is not",
        paragraphs: [
          "Automatic escalation is a safety net, not a second queue. On a healthy day almost nothing escalates, because notifications repeat until someone accepts and timers keep owners focused. When escalations do arrive, they point to something unusual: a person pulled into an emergency, a team short-staffed, an item out of stock, or a fault that needs a specialist.",
          "That is why escalation in ZapBuzzer carries the full request history. The manager does not need to reconstruct who was asked or when. They can see the buzz time, the accept time, the owner, and how long it has been overdue, and make a decision in under a minute. It also protects staff: the record shows whether the delay came from too much work rather than too little effort, which is the people-first approach ZapBuzzer is built around.",
        ],
      },
    ],
    faqs: [
      { q: "What if escalations happen every day?", a: "Frequent escalations usually mean SLAs are too tight or a team lacks cover at certain hours. Use SLA analytics on Pro to find the pattern before changing targets." },
      { q: "Do I need Pro for escalation?", a: "Overdue requests auto-escalate to a manager on all plans. The multi-level escalation chain is a Pro feature." },
      { q: "Does the original owner lose the request?", a: "Not automatically. The manager is told and decides whether to nudge, add help or reassign." },
      { q: "How is the manager notified?", a: "Through ZapBuzzer’s notification channels. Free uses the app and email; Pro adds Telegram and WhatsApp pings." },
      { q: "Can escalation be different per team?", a: "Each team usually has its own manager, so a facilities escalation goes to facilities leadership and an IT escalation to IT. Set this up to match your organisation." },
      { q: "Will the requester know it was escalated?", a: "The requester keeps seeing the request’s owner and progress. They do not need to chase, because someone with authority already knows." },
    ],
    related: ["sla", "sla/manager-escalation", "sla/escalation-chains", "notifications/escalation", "solutions/facilities/escalation", "use-cases/stop-office-chase-calls", "free-trial"],
    cta: { title: "Let requests escalate themselves", body: "Start a 14-day free trial and stop being the person who chases." },
  },

  // ───────────────────────────── MANAGER ESCALATION ─────────────────────────────
  {
    path: "sla/manager-escalation",
    title: "Manager Escalation: Handling Late Requests",
    description:
      "What managers see and do when an office request escalates in ZapBuzzer: full timeline, owner, overdue minutes, and the options to nudge, reassign or add help.",
    h1: "When a late job lands on a manager’s phone",
    eyebrow: "Manager Escalation",
    lead:
      "Escalation only helps if the manager can act quickly. This page is about the manager’s side: what arrives, what it tells you, and how to resolve it in a minute.",
    keywords: ["manager escalation", "escalated request handling", "team lead escalation", "office manager escalation"],
    heroVisual: "escalation",
    sections: [
      {
        type: "prose",
        heading: "Designed for someone who is busy too",
        paragraphs: [
          "The manager receiving an escalation is usually in the middle of something else. They need to know, at a glance, what is late, by how much, who owns it and what has been tried. ZapBuzzer escalations carry the request’s timeline, so there is no need to ring the requester for the backstory.",
          "Because routine on-time requests never reach the manager, escalations are rare enough to take seriously. That is the point: managers handle exceptions, not every cup of tea.",
        ],
      },
      {
        type: "visual",
        visual: "request-timeline",
        heading: "The timeline that comes with it",
        body: "Buzzed, accepted, started, and the moment it went overdue, all time-stamped.",
      },
      {
        type: "features",
        heading: "What the manager sees",
        items: [
          { title: "Request and note", body: "What was asked, where it is going, and the requester’s note." },
          { title: "Owner", body: "Who accepted it, with name and photo, or that no one has accepted." },
          { title: "Time so far", body: "Time to accept, time since start and minutes overdue." },
          { title: "Team context", body: "Other open requests for that team, so you can judge whether the team is overloaded." },
        ],
      },
      {
        type: "workflow",
        heading: "Three ways to resolve it",
        steps: [
          { title: "Nudge", body: "If the owner is simply finishing up, a quick check is enough." },
          { title: "Add help", body: "If the team is swamped, send another person to take it." },
          { title: "Reassign", body: "If the owner is stuck elsewhere, move the job to someone free." },
        ],
      },
      {
        type: "scenario",
        heading: "Lunch for twelve, running late",
        persona: "Vivek, Operations",
        setting: "A working lunch for 12 in the large meeting room; the pantry is short one person.",
        timeline: [
          { time: "12:30", event: "Vivek picks items, adds a note “12 people, 2 vegetarian”, and buzzes the pantry." },
          { time: "12:31", event: "Raj accepts; the pantry queues the order." },
          { time: "13:15", event: "The 45-minute SLA passes; the request escalates to the pantry manager." },
          { time: "13:16", event: "The manager sees Raj has three other open requests and sends Sunita to help." },
          { time: "13:24", event: "Lunch is delivered; Vivek rates it and the owner sees the cost." },
        ],
        outcome: "The escalation exposed a staffing gap at lunch rather than a slow person. The pantry rota changed the next week.",
      },
      {
        type: "audience",
        heading: "Typical escalation owners",
        items: [
          { role: "Facilities manager", benefit: "AC, lights, furniture and room issues that ran past target." },
          { role: "IT manager", benefit: "Projectors, HDMI, hardware and software jobs that stalled." },
          { role: "Office or admin manager", benefit: "Pantry, print and courier requests across the floor." },
        ],
      },
      {
        type: "checklist",
        heading: "Good habits for escalation owners",
        items: [
          "Respond to escalations before reading new routine requests",
          "Check the team’s open queue before blaming the owner",
          "Record the cause when it is something fixable",
          "Review the week’s escalations in reports on Pro",
        ],
      },
      {
        type: "prose",
        heading: "Escalation without a phone call",
        paragraphs: [
          "Before ZapBuzzer, the typical manager escalation was a phone call from an irritated requester, followed by the manager phoning the team, followed by someone walking down to check. Three calls for one late job is exactly the phone tag ZapBuzzer was built to end; pilot offices saw phone calls drop by 87% in their first month.",
          "Escalation in ZapBuzzer arrives as a notification on the channels the manager already uses: the app and email on every plan, plus Telegram and WhatsApp on Pro. Because managers only see requests that have genuinely passed their deadline, they can treat each one as worth a minute of attention. And because every action is time-stamped, a manager who reassigns a job at 13:16 has that decision on record, which is useful when reviewing the week or explaining a late lunch to leadership.",
        ],
      },
    ],
    faqs: [
      { q: "Do managers need to watch the dashboard all day?", a: "No. Escalations come to them as notifications. The dashboard is there for when they want the wider picture." },
      { q: "Can more than one manager receive an escalation?", a: "Escalation goes to the responsible manager; on Pro, an escalation chain adds further people if the request stays unresolved." },
      { q: "Will managers be flooded with escalations?", a: "Only requests that miss their SLA escalate. If managers see too many, the targets are probably too tight or a team is understaffed, both worth fixing." },
      { q: "Can a manager reassign the request?", a: "Managers can reassign or add help according to their role’s permissions. Every action is recorded." },
      { q: "What if the manager does not respond?", a: "On Pro, an escalation chain can pass the request to the next person. On Free, escalation stops at the manager." },
      { q: "Are manager actions logged?", a: "Every action in ZapBuzzer is audit-logged. Audit logs and reports are available on Pro." },
    ],
    related: ["sla", "sla/automatic-escalation", "sla/escalation-chains", "admin/manager-dashboard", "admin/staff-assignment", "use-cases/office-manager", "pricing/pro"],
    cta: { title: "Handle exceptions, not every request", body: "Try ZapBuzzer free for 14 days and only hear about the jobs that need you." },
  },

  // ───────────────────────────── ESCALATION CHAINS ─────────────────────────────
  {
    path: "sla/escalation-chains",
    title: "Escalation Chains for Office Requests (Pro)",
    description:
      "Escalation chains on ZapBuzzer Pro keep unresolved overdue requests climbing past the first manager, so a late job always reaches someone who can fix it.",
    h1: "If the first person cannot fix it, the next one hears",
    eyebrow: "Escalation Chains · Pro",
    lead:
      "A single escalation fails when that one manager is in a meeting or on leave. An escalation chain adds further steps, so an overdue request keeps moving up until someone acts.",
    keywords: ["escalation chain", "multi level escalation", "escalation matrix office", "pro escalation chain"],
    heroVisual: "escalation",
    sections: [
      {
        type: "prose",
        heading: "One manager is a single point of failure",
        paragraphs: [
          "Basic escalation sends an overdue request to a manager. That works most days. But the facilities manager might be on a site visit, or the IT lead might be in the same board meeting that needs the projector. If escalation stops there, the request waits again.",
          "Escalation chains, available on Pro, define the next steps. If an escalated request is still not resolved, it goes to the next person in the chain. Each step is recorded, so afterwards you can see exactly where the request stalled.",
        ],
      },
      {
        type: "visual",
        visual: "escalation",
        heading: "A chain in action",
        body: "Owner, then team manager, then the next level you choose. Each rung only fires if the previous one did not resolve the request.",
      },
      {
        type: "table",
        heading: "Example chains",
        intro: "Illustrations of how offices structure chains. Design yours around who actually has authority.",
        headers: ["Team", "Step 1", "Step 2", "Step 3"],
        rows: [
          ["Facilities", "Facilities supervisor", "Facilities manager", "Admin head"],
          ["IT desk", "IT lead on shift", "IT manager", "Operations head"],
          ["Pantry", "Pantry supervisor", "Office manager", "Admin head"],
          ["Courier and mailroom", "Mailroom lead", "Reception manager", "Office manager"],
        ],
      },
      {
        type: "scenario",
        heading: "The AC on a Saturday half-day",
        persona: "Om, Engineer",
        setting: "Weekend sprint; the facilities manager is off and the AC is stuck at 16°C.",
        timeline: [
          { time: "09:40", event: "Om buzzes Facilities; the on-duty technician accepts." },
          { time: "09:55", event: "Deadline passes; step one escalates to the facilities manager, who is off." },
          { time: "10:10", event: "Still unresolved; the chain moves to the admin head." },
          { time: "10:15", event: "The admin head calls the building’s maintenance desk; the AC is reset." },
          { time: "10:22", event: "Delivered and rated." },
        ],
        outcome: "Without a chain, the request would have waited for Monday. The record shows the chain fired twice, which led to a better weekend rota.",
      },
      {
        type: "checklist",
        heading: "Designing a sensible chain",
        items: [
          "Keep chains short; two or three steps is usually enough",
          "Each step should have authority to send help or reassign",
          "Include a backup for weekends and leave",
          "Avoid escalating straight to the CEO for routine requests",
          "Review chain firings monthly on Pro reports",
        ],
      },
      {
        type: "metrics",
        heading: "Chain measures worth watching",
        items: [
          { metric: "Escalations per step", meaning: "How many requests reached each rung. A busy step two suggests step one is unavailable too often." },
          { metric: "Time to resolve after escalation", meaning: "From escalation to delivery; shows how effective each rung is." },
          { metric: "Full-chain escalations", meaning: "Requests that reached the top rung; these deserve individual review." },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Escalation chains are part of Pro",
        body: "Pro is ₹99 per seat per month and also includes Telegram and WhatsApp pings, multi-location, full analytics, scorecards, audit logs and reports. Try it free for 14 days.",
      },
      {
        type: "prose",
        heading: "Chains for groups and facility companies",
        paragraphs: [
          "Chains become more important as an organisation grows. A single office might rely on one admin head who knows everyone. A group with several locations, or a facility company running services for clients, needs requests to reach the right person at the right site without anyone forwarding messages by hand.",
          "With multi-location on Pro, each office can have chains that match its own structure, and escalations land with the people responsible for that site. Groups and facility companies with more complex needs, such as SSO, white-label or a dedicated customer success manager, can talk to us about Enterprise.",
        ],
      },
      {"type":"callout","tone":"tip","title":"Keep names current","body":"A chain is only as good as the people in it. When a manager leaves or changes role, update the chain the same day, or escalations will land with someone who can no longer act."},
    ],
    faqs: [
      {"q":"Should the top of the chain be the founder?","a":"Rarely. If escalations regularly reach the top, the fix belongs lower down. Keep the last step for someone with authority who only needs to see real exceptions, such as an admin head."},
      { q: "How are chain members notified?", a: "Through ZapBuzzer notifications on the app and email, plus Telegram and WhatsApp on Pro, so people on the move still hear about it." },
      { q: "Which plan includes escalation chains?", a: "Pro and Enterprise. Free escalates overdue requests to a manager, but does not support further chain steps." },
      { q: "How many levels should a chain have?", a: "Most offices need two or three. More steps tend to mean a request travels further from the people who can actually fix it." },
      { q: "Can each team have its own chain?", a: "Yes. Chains make most sense per team, because the people with authority over facilities are not the same as those over IT or the pantry." },
      { q: "Does every step get the full history?", a: "Each escalation carries the request’s timeline, so the person at step three does not need to ask what happened at step one." },
      { q: "Can I see how often chains fire?", a: "Yes, through Pro reports and SLA analytics, which show escalations by team and period." },
    ],
    related: ["sla", "sla/manager-escalation", "sla/automatic-escalation", "notifications/escalation", "solutions/facilities/escalation", "pricing/pro", "free-trial"],
    cta: { title: "Make sure late jobs always land somewhere", body: "Start a 14-day Pro trial and set up your first escalation chain." },
  },

  // ───────────────────────────── OVERDUE REQUESTS ─────────────────────────────
  {
    path: "sla/overdue-requests",
    title: "Managing Overdue Office Requests",
    description:
      "How ZapBuzzer handles overdue requests: clear flags, escalation, and a full time-stamped record, so late coffee, print and facilities jobs get finished and learned from.",
    h1: "Overdue, visible, and on its way to done",
    eyebrow: "Overdue Requests",
    lead:
      "An overdue request is a promise already broken. The goal is to finish it quickly, keep the requester informed, and make sure the same thing happens less next month.",
    keywords: ["overdue requests", "late office requests", "overdue ticket management", "overdue facilities request"],
    heroVisual: "request-dashboard",
    sections: [
      {
        type: "prose",
        heading: "What overdue means in ZapBuzzer",
        paragraphs: [
          "A request is overdue when it has passed its SLA deadline without being marked Delivered. It may have no owner yet, or it may be accepted and in progress. Both count, and the difference matters: an unaccepted overdue request is a reach or staffing problem, while an accepted one is a capacity or complexity problem.",
          "Overdue requests stand out on the board, escalate automatically to a manager, and keep their overdue status in history after delivery.",
        ],
      },
      {
        type: "visual",
        visual: "request-dashboard",
        heading: "Overdue on the board",
        body: "Overdue requests are flagged so managers can find them among on-time work immediately.",
      },
      {
        type: "problem-solution",
        heading: "The two kinds of overdue",
        problem: {
          title: "Overdue and unaccepted",
          points: ["Nobody has claimed it", "Notifications may not be reaching staff", "Team may be away from screens", "Often happens at peak hours"],
        },
        solution: {
          title: "What helps",
          points: ["Notifications repeat until accepted", "Telegram and WhatsApp reach (Pro)", "Escalation to a manager", "Staffing peak hours using activity analytics"],
        },
      },
      {
        type: "scenario",
        heading: "Two coffees that nearly went cold",
        persona: "Aarav, Founder & CEO",
        setting: "A client is in the boss cabin; the pantry is clearing a lunch order.",
        timeline: [
          { time: "15:10", event: "Aarav taps Coffee ×2 → Boss Cabin." },
          { time: "15:11", event: "Raj accepts from the pantry; the timer runs." },
          { time: "15:20", event: "The 10-minute SLA passes; flagged overdue; pantry supervisor notified." },
          { time: "15:22", event: "The supervisor takes the tray up while Raj finishes the lunch order." },
          { time: "15:23", event: "Delivered hot; Aarav rates 5★." },
        ],
        outcome: "Three minutes late, not twenty-five. Compare the old way: 3 phone calls, 25 minutes and 1 cold coffee.",
      },
      {
        type: "checklist",
        heading: "Weekly overdue review",
        items: [
          "Sort overdue requests by category and hour",
          "Separate unaccepted from accepted overdue requests",
          "Look for repeat locations, such as one meeting room",
          "Adjust SLAs that are consistently missed by small margins",
          "Thank teams whose overdue count dropped",
        ],
      },
      {
        type: "metrics",
        heading: "Overdue numbers",
        items: [
          { metric: "Open overdue", meaning: "Requests past their deadline right now; the number to drive to zero today." },
          { metric: "Delivered late", meaning: "Requests completed after their deadline in the period." },
          { metric: "Average overdue minutes", meaning: "How late late requests typically are." },
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Small overdue margins often mean the SLA is wrong",
        body: "If most overdue print jobs are one or two minutes late, the target may be slightly too tight. If they are twenty minutes late, look at staffing or the printer.",
      },
      {
        type: "prose",
        heading: "Keeping the requester in the loop",
        paragraphs: [
          "The most stressful part of an overdue request for an employee is uncertainty. Did anyone see it? Should I walk down to the pantry myself? ZapBuzzer answers both questions on the requester’s screen: the request shows who accepted it, with name and photo, and its current state. Even when a job runs late, the requester can see that someone owns it and that a manager has been told.",
          "That visibility is why overdue requests rarely turn into phone calls. Instead of three calls for one coffee, the requester waits a couple of extra minutes, knowing it is in hand. When the job is delivered, they still rate it, and a late-but-handled job often earns a fair rating because the communication was clear.",
          "For managers, the rule is simple: drive open overdue requests to zero each day, then look at the delivered-late list each week to find causes.",
        ],
      },
    ],
    faqs: [
      { q: "Can the requester see that a request is overdue?", a: "The requester sees the owner and progress of their request. They do not need to escalate it themselves, because escalation already happens automatically." },
      { q: "What is the fastest way to clear overdue requests?", a: "Start with unaccepted overdue requests, since they have no owner. Then check accepted ones whose owners have several open jobs and add help." },
      { q: "Does an overdue request stay overdue after delivery?", a: "Its history keeps the fact that it was delivered late, which is what reporting needs. The live board stops showing it once delivered." },
      { q: "Can the requester cancel an overdue request?", a: "If the need has passed, cancelling keeps queues honest. Cancelled requests are not counted as on-time deliveries." },
      { q: "Who is notified about an overdue request?", a: "A manager via automatic escalation, and further people on Pro if you use an escalation chain." },
      { q: "How long is overdue history kept?", a: "Free keeps the last 30 days of history. Pro adds full analytics, audit logs and reports for longer-term review." },
    ],
    related: ["sla", "sla/breach-detection", "sla/tracking", "features/request-status", "use-cases/prevent-lost-requests", "analytics/on-time-performance", "demo"],
    cta: { title: "Get overdue requests under control", body: "Start free and see which jobs slip, and why, within a week." },
  },

  // ───────────────────────────── REPORTING ─────────────────────────────
  {
    path: "sla/reporting",
    title: "SLA Reporting for Office Operations (Pro)",
    description:
      "SLA reports on ZapBuzzer Pro show on-time delivery, breaches and escalations by team and category, so office managers can prove service levels and fix weak spots.",
    h1: "Proof that the office runs on time",
    eyebrow: "SLA Reporting · Pro",
    lead:
      "Reporting turns thousands of timed requests into a short answer: are we on time, where are we not, and is it getting better? SLA reports are part of Pro.",
    keywords: ["sla reporting", "sla report office", "on-time delivery report", "facilities sla report"],
    heroVisual: "analytics",
    sections: [
      {
        type: "prose",
        heading: "Reports for people who were not watching the board",
        paragraphs: [
          "The live board is for the people managing today. Reports are for everyone else: the admin head preparing a monthly review, the founder who wants to know if the new pantry staffing worked, the facility company showing a client what it delivered.",
          "Because every request in ZapBuzzer is timed from buzz to delivery and every action is logged, reports are built from records, not from someone’s recollection or a hand-filled spreadsheet.",
        ],
      },
      {
        type: "visual",
        visual: "analytics",
        heading: "Report view",
        body: "KPI tiles for on-time rate and breaches, with breakdowns by team and period.",
      },
      {
        type: "metrics",
        heading: "What an SLA report contains",
        items: [
          { metric: "On-time delivery %", meaning: "Share of delivered requests completed within their SLA in the period." },
          { metric: "Breaches", meaning: "Requests delivered late or still open past deadline." },
          { metric: "Escalations", meaning: "How many requests escalated, and on Pro how far up the chain." },
          { metric: "Average accept time", meaning: "Mean time from buzz to Accept across requests." },
          { metric: "Average delivery time", meaning: "Mean time from buzz to Delivered." },
        ],
      },
      {
        type: "table",
        heading: "Common report cuts",
        headers: ["Cut", "Question it answers"],
        rows: [
          ["By team", "Is facilities or IT carrying the most breaches?"],
          ["By category", "Are AC issues routinely slower than projector fixes?"],
          ["By hour of day", "Does the 11 am meeting rush break the pantry?"],
          ["By location (multi-location on Pro)", "Is one floor or office behind the others?"],
          ["By period", "Did last month’s changes improve on-time %?"],
        ],
      },
      {
        type: "scenario",
        heading: "The monthly operations review",
        persona: "Deepak, Admin Head",
        setting: "First Monday of the month, preparing for the leadership review.",
        timeline: [
          { time: "09:30", event: "Deepak opens the SLA report for the previous month." },
          { time: "09:35", event: "Overall on-time is strong, but facilities breaches cluster after 3 pm." },
          { time: "09:40", event: "The category cut shows most are AC requests on one floor." },
          { time: "09:50", event: "He adds the finding to the review with a plan to service that unit." },
        ],
        outcome: "Twenty minutes of preparation, backed by timestamps rather than anecdotes.",
      },
      {
        type: "audience",
        heading: "Who reads SLA reports",
        items: [
          { role: "Admin and operations heads", benefit: "Monthly evidence of service levels and where to invest." },
          { role: "Founders", benefit: "A quick health check on how the office actually runs." },
          { role: "Facility companies", benefit: "Show clients delivery against agreed targets; talk to us about Enterprise for groups." },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Reports need Pro",
        body: "Audit logs, reports, and full analytics are Pro features at ₹99 per seat per month. Free keeps 30 days of request history.",
      },
      {
        type: "prose",
        heading: "Reports that hold up to scrutiny",
        paragraphs: [
          "A report is only useful if people trust it. ZapBuzzer reports draw on time-stamped states that staff create in the normal course of work, and on Pro every action is also captured in the audit log. If a leadership team asks why last month’s on-time rate dropped, the answer can be traced to specific requests, owners and times.",
          "That traceability also protects staff. A team blamed for slow service can point to report cuts showing that breaches clustered when the team was one person short, or when one faulty AC unit generated half the facilities requests. Reports in ZapBuzzer are a shared record, not a tool for one side of the argument.",
          "Most offices settle into a simple rhythm: a weekly glance for team leads, and a monthly review for leadership that compares on-time %, breaches and escalations with the previous month.",
        ],
      },
    ],
    faqs: [
      { q: "How often should we review SLA reports?", a: "Weekly for team leads and monthly for leadership works for most offices. Weekly reviews catch emerging problems; monthly ones show trends." },
      { q: "Do reports include who did each job?", a: "Reports draw on records that include the owner of each request, and every action is audit-logged on Pro, so details can be traced when needed." },
      { q: "Is SLA reporting included on Free?", a: "No. Reports, audit logs and full analytics are part of Pro. Free keeps the last 30 days of request history." },
      { q: "Can I report across multiple offices?", a: "Multi-location is a Pro feature. Groups and facility companies with many sites should look at Enterprise." },
      { q: "Can I get the data into other systems?", a: "Enterprise includes a REST API and webhooks. Talk to us about your use case for details." },
      { q: "How is a report different from SLA analytics?", a: "A report summarises a period for review and sharing. SLA analytics is for exploring patterns, such as which hours or categories breach most." },
    ],
    related: ["sla", "sla/analytics", "features/request-reports", "analytics/on-time-performance", "enterprise/reporting", "use-cases/sla-compliance", "pricing/pro"],
    cta: { title: "Show your service levels with data", body: "Start a 14-day Pro trial and run your first SLA report on real requests." },
  },

  // ───────────────────────────── SLA ANALYTICS ─────────────────────────────
  {
    path: "sla/analytics",
    title: "SLA Analytics: Find Why Requests Run Late",
    description:
      "SLA analytics in ZapBuzzer Pro break down breaches by hour, team, category and stage, showing whether delays come from slow pickup, slow work or wrong targets.",
    h1: "Find out why late requests are late",
    eyebrow: "SLA Analytics · Pro",
    lead:
      "Knowing your on-time rate is useful. Knowing that most breaches are slow pickups between 1 and 2 pm on the 3rd floor is what actually lets you fix it.",
    keywords: ["sla analytics", "sla breach analysis", "request delay analysis", "office sla insights"],
    heroVisual: "analytics",
    sections: [
      {
        type: "prose",
        heading: "From a number to a cause",
        paragraphs: [
          "A breach can come from three places: nobody picked the request up fast enough, the work itself took too long, or the target was unrealistic. Each needs a different fix: better notification reach, more hands, or a new SLA.",
          "SLA analytics in ZapBuzzer split request time into stages using the recorded states, then slice it by team, category, location and time. That lets you see not just how often you are late, but where in the lifecycle the minutes went.",
        ],
      },
      {
        type: "visual",
        visual: "analytics",
        heading: "Breaches by stage and hour",
        body: "Bars by hour of day, split into accept time and work time, show where delay builds up.",
      },
      {
        type: "metrics",
        heading: "SLA analytics definitions",
        items: [
          { metric: "Accept share of delay", meaning: "Portion of total time spent before anyone accepted. High values point to reach or staffing." },
          { metric: "Work share of delay", meaning: "Portion spent between accept and delivery. High values point to capacity or complexity." },
          { metric: "Breach rate by hour", meaning: "Breaches as a share of requests in each hour of the day." },
          { metric: "Breach rate by category", meaning: "Which request types miss their target most often." },
          { metric: "Near-miss rate", meaning: "Requests delivered just inside their deadline; a warning sign before breaches rise." },
        ],
      },
      {
        type: "scenario",
        heading: "The post-lunch IT dip",
        persona: "Farhan, IT Manager",
        setting: "IT on-time rate has slipped for three weeks.",
        timeline: [
          { time: "Week 1", event: "Farhan sees IT breaches rising but overall volume flat." },
          { time: "Week 2", event: "Stage split shows accept time doubling between 1 and 2 pm." },
          { time: "Week 2", event: "Both IT staff take lunch at the same time." },
          { time: "Week 3", event: "Lunch breaks are staggered; Telegram pings added for the on-call person." },
          { time: "Week 4", event: "Accept time in that hour returns to normal and breaches drop." },
        ],
        outcome: "No one worked harder. The fix was a rota change the data made obvious.",
      },
      {
        type: "comparison",
        heading: "SLA analytics vs SLA reports",
        columns: ["SLA reports", "SLA analytics"],
        rows: [
          { label: "Purpose", a: "Summarise a period", b: "Explore causes" },
          { label: "Audience", a: "Leadership, clients", b: "Team leads, managers" },
          { label: "Typical question", a: "Were we on time last month?", b: "Why were we late at 1 pm?" },
        ],
      },
      {
        type: "checklist",
        heading: "Questions to ask the data",
        items: [
          "Which hour has the highest breach rate?",
          "Are breaches mostly unaccepted or in progress?",
          "Which category has the most near-misses?",
          "Did a target change improve or just hide the problem?",
          "Does one location lag the others?",
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Part of full analytics on Pro",
        body: "SLA analytics sit inside ZapBuzzer’s full analytics and scorecards, included in Pro at ₹99 per seat per month.",
      },
      {
        type: "prose",
        heading: "Turning patterns into changes",
        paragraphs: [
          "Analytics are only worth the time if they lead to a change. In practice the fixes are usually small and practical: stagger lunch breaks, keep an HDMI cable in Conference Room B, encourage sales to buzz large print jobs the evening before, service the AC on one floor, add Telegram pings for the person on call.",
          "After each change, SLA analytics show whether it worked. If accept time in the problem hour falls and breaches drop, keep the change. If not, try the next idea. Over a few months, this habit tends to move an office from reacting to complaints to preventing them. Because every request contributes data automatically, the cost of running these small experiments is close to zero.",
        ],
      },
      {"type":"stats","heading":"What pilot offices reached","items":[{"value":"96%","label":"on-time delivery, first month"},{"value":"32s","label":"average accept time"},{"value":"4.8★","label":"average staff rating"}],"note":"Pilot offices, first month. Use your own trend as the main benchmark."},
    ],
    faqs: [
      {"q":"What should I look at first in SLA analytics?","a":"Start with the stage where breaches happen: before accept, before start or during work. That narrows the cause to staffing, workload or the job itself."},
      { q: "Can SLA analytics tell me if my targets are wrong?", a: "Yes. A high near-miss rate or many requests that are only a minute or two late suggests the target is slightly too tight for that category." },
      { q: "Should I change several things at once?", a: "Changing one thing at a time makes it easier to see what worked in the analytics." },
      { q: "Which plan includes SLA analytics?", a: "Pro and Enterprise. They are part of full analytics and scorecards." },
      { q: "Can I compare locations?", a: "Yes, if you use multi-location on Pro. Enterprise suits groups and facility companies with many sites." },
      { q: "Does SLA analytics rank individual staff?", a: "SLA analytics focus on patterns across teams, hours and categories. Individual performance, with fair attribution, is covered by staff scorecards." },
      { q: "How soon is there useful data?", a: "Patterns usually appear within a couple of weeks of normal use, because every request contributes timed data from day one." },
    ],
    related: ["sla", "sla/reporting", "analytics", "analytics/response-time", "analytics/office-activity", "solutions/it-support/analytics", "pricing/pro"],
    cta: { title: "See where your minutes go", body: "Try Pro free for 14 days and get SLA analytics on your own requests." },
  },
];
