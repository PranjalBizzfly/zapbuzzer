import type { PageContent } from "../types";

export const pages: PageContent[] = [
  // ───────────────────────────── HUB ─────────────────────────────
  {
    path: "sla-and-escalation",
    title: "SLA Management for Office Requests",
    description:
      "Give every office request a deadline. ZapBuzzer times coffee, prints, IT and facilities jobs, flags breaches and escalates late work to a manager automatically.",
    h1: "Every Request Gets a Deadline. Nothing Quietly Rots.",
    eyebrow: "SLA & Escalation",
    lead:
      "An SLA is simply the time limit for finishing a request. ZapBuzzer starts that clock the moment someone taps Buzz. If the pantry, print room, IT desk or facilities team misses the deadline, the request is passed up to a manager on its own (that’s escalation), so nobody has to chase it by phone.",
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
        eyebrow: "Why Deadlines",
        heading: "Office Requests Fail Quietly, Not Loudly",
        paragraphs: [
          "Most internal requests never get refused. They just drift. Someone asks for the Conference Room B projector to be fixed, a facilities person says “on it”, then gets pulled into a delivery at the gate. Forty minutes later the client is squinting at a laptop screen and nobody can say whose job it was.",
          "You may know SLAs (service-level agreements) from helpdesks and vendor contracts. The idea works just as well for a pantry or a print room. A request should be done within an agreed time. If it isn’t, someone in charge should know before the requester has to complain. ZapBuzzer applies that idea to everyday office work, from a coffee order for the boss cabin to an AC stuck at 16°C.",
          "Every request in ZapBuzzer is timed from the moment it is buzzed. The timer is visible to the person who accepted it, to the requester, and to managers. When the timer runs out, the request is marked overdue and escalated automatically. That’s all it promises: deadlines people can see, and a safety net that doesn’t rely on anyone remembering to follow up.",
        ],
      },
      {
        type: "visual",
        visual: "sla-timer",
        heading: "What a Running SLA Looks Like",
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
        heading: "How SLA and Escalation Fit the Request Lifecycle",
        intro:
          "The SLA isn’t a separate add-on. It runs alongside every step a request already goes through.",
        steps: [
          {
            title: "Buzz",
            body: "An employee picks an item such as Facilities or Coffee, adds a note and destination, and taps Buzz. The clock starts here.",
          },
          {
            title: "Notify and Accept",
            body: "The right team is pinged, and notifications repeat until someone taps Accept. Time to accept is recorded as its own number.",
          },
          {
            title: "Work Under the Timer",
            body: "The owner marks the job Started with an ETA. The remaining time stays visible to the owner and the requester.",
          },
          {
            title: "Deadline Passes",
            body: "If the request is not delivered in time, it becomes overdue and is escalated to a manager automatically.",
          },
          {
            title: "Close and Learn",
            body: "Delivery and rating close the loop. On-time and overdue results feed reports and analytics so patterns become visible.",
          },
        ],
      },
      {
        type: "scenario",
        heading: "The AC That Would Not Warm Up",
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
        heading: "What the SLA Layer Covers",
        items: [
          { title: "SLA Timers", body: "Every request carries a deadline from the moment it is buzzed, visible to staff, requester and managers." },
          { title: "Live Tracking", body: "See which requests are on time, close to the line or already late, across teams." },
          { title: "Breach Detection", body: "A breach means a missed deadline. When it happens, the request is flagged overdue without anyone checking a spreadsheet." },
          { title: "Automatic Escalation", body: "Overdue requests are pushed to a manager automatically instead of waiting for a complaint." },
          { title: "Escalation Chains (Pro)", body: "Define who hears about it next if the first escalation is not resolved." },
          { title: "Reporting and Analytics (Pro)", body: "On-time percentage, overdue counts and breach patterns by team, category and time of day." },
        ],
      },
      {
        type: "comparison",
        heading: "Following Up by Memory vs. Following Up by Timer",
        columns: ["Without SLAs", "With ZapBuzzer SLAs"],
        rows: [
          { label: "Who Notices a Late Job", a: "The requester, usually by phoning", b: "The system, at the deadline" },
          { label: "Who Gets Told", a: "Whoever picks up the phone", b: "The manager in the escalation path" },
          { label: "Proof of What Happened", a: "Conflicting memories", b: "Timestamped states for every step" },
          { label: "Learning From Misses", a: "Rarely happens", b: "Overdue trends in reports and analytics" },
          { label: "Fairness to Staff", a: "Blame goes to whoever is visible", b: "Credit based on recorded times" },
        ],
      },
      {
        type: "stats",
        heading: "Results From the First Month in Pilot Offices",
        items: [
          { value: "32s", label: "Average Accept Time" },
          { value: "96%", label: "On-Time Delivery" },
          { value: "−87%", label: "Phone Calls" },
          { value: "4.8★", label: "Average Staff Rating" },
        ],
        note: "Figures from ZapBuzzer pilot offices, first month of use.",
      },
      {
        type: "table",
        heading: "What Is Included on Each Plan",
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
        heading: "Who Relies on SLAs Day to Day",
        items: [
          { role: "Office Managers", benefit: "Stop being the human alarm clock. Late jobs come to you; on-time ones never need you." },
          { role: "Facilities and IT Leads", benefit: "See which categories routinely run late and staff the busy hours properly." },
          { role: "Pantry and Print Staff", benefit: "A clear deadline and fair, time-stamped credit for jobs done on time." },
          { role: "Founders and CEOs", benefit: "Confidence that a request from a board meeting will not be forgotten." },
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Start With Deadlines People Already Expect",
        body:
          "You do not need a policy document. Ask the pantry how long a coffee should take and IT how long an HDMI cable should take, then set SLAs a little above that. Tighten them once a few weeks of on-time data are in.",
      },
    ],
    faqs: [
      {
        q: "Is SLA Tracking Available on the Free Plan?",
        a: "Every request is timed on every plan, and overdue requests escalate to a manager. The multi-step escalation chain, full analytics and scorecards, and audit logs and reports are part of Pro at ₹99 per seat per month.",
      },
      { q: "Does the SLA Include the Time Before Anyone Accepts?", a: "Yes. The clock starts when the request is buzzed, so time spent not noticing a notification counts, which is the delay offices usually cannot see. Accept time is also recorded separately so you can tell slow pickup apart from slow work." },
      { q: "Do Pantry, Print, IT and Facilities Share One SLA Target?", a: "No. SLAs are set by request type, so a coffee and a projector repair do not share the same target. Keep them realistic for each team and adjust after you see real data." },
      {
        q: "What Happens When a Request Becomes Overdue?",
        a: "It is flagged overdue and escalated to a manager automatically. On Pro you can add further steps in an escalation chain so that if the first manager does not act, the next person hears about it.",
      },
      {
        q: "Will SLAs Make Staff Feel Watched?",
        a: "ZapBuzzer is built to be people-first. Timestamps give staff fair credit for work done well, and analytics show when a team is understaffed rather than just who was late.",
      },
      {
        q: "How Do I Try SLAs and Escalation Chains?",
        a: "Start a 14-day free trial. You don’t need a card or a setup call, so you can invite your team and watch real requests run against deadlines the same afternoon.",
      },
      { q: "Who Sets the SLA Targets in Our Office?", a: "An admin with the right role permissions sets targets per request type. Start with realistic figures for each team, then adjust once you have a few weeks of timed requests." },
      { q: "What On-Time Rate Can We Expect With SLAs?", a: "Pilot offices reached 96% on-time delivery and a 32-second average accept time in their first month. Your figures depend on your teams and targets." },
    ],
    related: [
      "sla-and-escalation/sla-timers",
      "sla-and-escalation/automatic-escalation",
      "sla-and-escalation/escalation-chains",
      "analytics/on-time-performance",
      "use-cases/sla-compliance",
      "resource-hub/sla-management-guide",
      "pricing/pro-plan",
      "free-trial",
    ],
    cta: {
      title: "Put a Deadline on Every Request",
      body: "Start a 14-day Pro trial with SLA timers and escalation chains. No card, no setup call.",
    },
  },

  // ───────────────────────────── TIMERS ─────────────────────────────
  {
    path: "sla-and-escalation/sla-timers",
    title: "SLA Timers for Office Requests",
    description:
      "SLA timers give each pantry, print, IT and facilities request a visible countdown from the moment it is buzzed, so staff and requesters share the same deadline.",
    h1: "A Visible Countdown on Every Job",
    eyebrow: "SLA Timers",
    lead:
      "A deadline only works if the person doing the work can see it. ZapBuzzer puts a running timer on each request that counts down to its SLA, the time limit for that kind of job. It shows in the staff member’s queue and on the requester’s screen.",
    keywords: ["sla timer", "request countdown timer", "office request deadline", "internal request timer"],
    heroVisual: "sla-timer",
    sections: [
      {
        type: "prose",
        heading: "Why a Timer Beats a Promise",
        paragraphs: [
          "“Two minutes” from a busy pantry runner means something different at 9:30 than at 1:15. A timer replaces the vague promise with a shared number. The runner knows how long is left; the person in the boss cabin knows when to expect the tray.",
          "In ZapBuzzer, the timer is attached to the request itself, not to a person’s memory. It starts at the buzz, carries through Accepted and Started, and stops when the job is marked Delivered. Each state change is time-stamped, so the full timeline is available later.",
        ],
      },
      {
        type: "visual",
        visual: "sla-timer",
        heading: "The Countdown Ring",
        body: "Each live request shows time remaining and its state. When it runs out, the ring changes to overdue and the escalation note appears.",
        points: ["On time", "Close to deadline", "Overdue and escalated"],
      },
      {
        type: "metrics",
        heading: "What a Timer Actually Measures",
        intro: "Several durations come out of one request. Each answers a different question.",
        items: [
          { metric: "Time to Accept", meaning: "From buzz to the first staff member tapping Accept. Shows how quickly the team notices and picks up work." },
          { metric: "Time to Start", meaning: "From accept to Started. Shows how long a job waits in someone’s hands before work begins." },
          { metric: "Time to Deliver", meaning: "From buzz to Delivered. This is the number the SLA deadline is measured against." },
          { metric: "Time Remaining", meaning: "The live countdown: SLA target minus elapsed time since the buzz." },
          { metric: "Overdue Minutes", meaning: "How far past the deadline a request was delivered, or has run so far." },
        ],
      },
      {
        type: "scenario",
        heading: "24 Colour Copies Against the Clock",
        persona: "Kavya, Sales Lead",
        setting: "A client pitch starts in 10 minutes and the deck is not printed.",
        timeline: [
          { time: "14:50", event: "Kavya uploads the PDF, sets 24 colour copies and buzzes the print room." },
          { time: "14:50", event: "The print-room queue shows the job with its timer running." },
          { time: "14:51", event: "Sunil accepts; Kavya sees his name and ETA." },
          { time: "14:53", event: "Sunil marks it Started; the countdown is visible on his phone." },
          { time: "14:58", event: "Copies are delivered to Kavya’s desk and marked Delivered, inside the deadline." },
        ],
        outcome: "“Print jobs land at my desk before the client even sits down. Zero chase calls.” — Kavya, Sales Lead, Northwind",
      },
      {
        type: "table",
        heading: "Example Targets Offices Start With",
        intro: "These are illustrations to help you choose, not built-in values. Set what suits your team.",
        headers: ["Request", "Typical Starting SLA", "Why"],
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
        heading: "Timer Details That Matter",
        items: [
          { title: "Starts Automatically", body: "No one has to remember to open a ticket; the buzz is the ticket." },
          { title: "Shared View", body: "Staff, requester and manager see the same clock, which ends arguments about how long it has been." },
          { title: "Per-Type Targets", body: "Different request types carry different deadlines that fit the work." },
          { title: "Feeds Everything Else", body: "Timer data drives overdue flags, escalation, reports and analytics." },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Timers Run on Every Plan",
        body: "Every request is timed on Free, Pro and Enterprise. Escalation chains, full analytics and reports built on those timers are Pro features.",
      },
      {
        type: "checklist",
        heading: "Setting Your First Timers",
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
      { q: "Can the Requester See the Timer?", a: "Yes. The requester sees who accepted the job and the ETA, so they do not need to call to ask. That visibility is a large part of why phone calls drop." },
      { q: "Does the Timer Pause When a Job Is Accepted?", a: "No. The SLA is measured from buzz to delivery, so accepting a job does not stop the clock. Time to accept is recorded separately so you can see where delay comes from." },
      { q: "What If a Request Is Cancelled?", a: "A cancelled request is not delivered, so it should not be counted as an on-time delivery. Use cancellation honestly and your on-time numbers stay meaningful." },
      { q: "Do Free Plan Requests Get a Countdown Timer Too?", a: "Yes, every request is timed on all plans. Pro adds escalation chains, full analytics, scorecards and reports built on the timer data." },
      { q: "Should Every Request Type Have the Same SLA?", a: "Usually not. A cup of tea and a broken projector are different jobs. Start with a realistic target per type and adjust once you have a few weeks of data." },
      { q: "Can Staff See the Countdown in Their Queue?", a: "Yes. Each accepted request shows its running timer in the staff member's queue, so they can see which job is closest to its deadline and plan the next one." },
      { q: "What Does the Request Timer Actually Measure?", a: "It measures from buzz to delivery, with accept time and start time recorded along the way. That shows whether a delay came from slow pickup or slow work." },
      { q: "Can Staff Change the ETA Once a Timer Is Running?", a: "Staff set an ETA when they start the job, which the requester sees. The SLA deadline itself stays the same, so the timer remains a fair measure." },
    ],
    related: ["sla-and-escalation", "sla-and-escalation/sla-tracking", "sla-and-escalation/sla-breach-detection", "features/request-timers", "features/eta-tracking", "workflows/print-request", "pricing"],
    cta: { title: "See the Countdown on a Real Request", body: "Open the read-only demo or start a free trial and buzz your first coffee." },
  },

  // ───────────────────────────── TRACKING ─────────────────────────────
  {
    path: "sla-and-escalation/sla-tracking",
    title: "Live SLA Tracking Across Office Teams",
    description:
      "Track which office requests are on time, close to deadline or overdue, across pantry, print, IT and facilities, from one live view instead of phone calls.",
    h1: "Know Which Jobs Are Slipping Before Anyone Complains",
    eyebrow: "SLA Tracking",
    lead:
      "An SLA is the time limit for finishing a request. SLA tracking shows you, live, every open request, who owns it, where it’s up to and how much time is left. Managers spot trouble early, and staff can see what to do next.",
    keywords: ["sla tracking", "live request tracking", "office sla dashboard", "request deadline tracking"],
    heroVisual: "request-dashboard",
    sections: [
      {
        type: "prose",
        heading: "A Queue Sorted by Urgency, Not by Who Shouted",
        paragraphs: [
          "Without tracking, the request that gets done first is the one whose requester is loudest or nearest. Live SLA tracking replaces that with a view of open requests and their remaining time, so the job about to miss its deadline gets attention before the one that just arrived.",
          "Tracking in ZapBuzzer comes from the states a request already moves through: buzzed, accepted, started, delivered. Each step is time-stamped, and the SLA status is worked out from those times. Nobody fills in a tracker by hand.",
        ],
      },
      {
        type: "visual",
        visual: "request-dashboard",
        heading: "The Live Board",
        body: "Open requests with owner, state and time left. Overdue ones stand out so a manager can step in.",
        points: ["Who owns it", "What state it is in", "How long until its deadline"],
      },
      {
        type: "problem-solution",
        heading: "What Tracking Replaces",
        problem: {
          title: "Tracking by WhatsApp Group",
          points: ["Requests scroll out of view", "“Done?” messages in reply chains", "No idea which job is late", "No record once the chat is cleared"],
        },
        solution: {
          title: "Tracking in ZapBuzzer",
          points: ["Every open request in one list", "State changes visible instantly", "Late jobs flagged automatically", "Full timeline kept with the request"],
        },
      },
      {
        type: "scenario",
        heading: "A Busy Hour on the 3rd Floor",
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
        heading: "Live States You Will See",
        items: [
          { metric: "Open, Unaccepted", meaning: "Buzzed but no one has tapped Accept yet; notifications keep repeating." },
          { metric: "Accepted", meaning: "A named staff member owns it; the requester can see who." },
          { metric: "Started", meaning: "Work has begun and an ETA has been given." },
          { metric: "Near Deadline", meaning: "Still open with little time left before the SLA target." },
          { metric: "Overdue", meaning: "The deadline has passed without delivery; escalation has been triggered." },
        ],
      },
      {
        type: "audience",
        heading: "Different Eyes on the Same Data",
        items: [
          { role: "Staff", benefit: "See your own accepted jobs and which is closest to its deadline." },
          { role: "Requesters", benefit: "See your request’s owner and ETA without calling." },
          { role: "Managers", benefit: "See every team’s open work and step in only on risk." },
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Watch Unaccepted Requests Most Closely",
        body: "A request no one has accepted has no owner. If those linger, the issue is usually notification reach or staffing, not effort. Pro’s Telegram and WhatsApp pings help teams who are away from a screen.",
      },
      {
        type: "prose",
        heading: "Tracking Across Channels and Floors",
        paragraphs: [
          "Staff do not sit in front of a dashboard all day. A pantry runner is on the stairs, the facilities technician is under a desk, the mailroom lead is at the gate. That is why tracking in ZapBuzzer follows the request, not the screen. The same states appear on the mobile app, which still rings when a phone is locked or silenced, and on the web app used by managers at their desks.",
          "For larger offices, the value grows with distance. A manager on the ground floor can see that a 5th-floor tea request has been accepted and started without taking the lift. On Pro, multi-location tracking extends that view across offices, so a group operations head can see that one site is running late while another is clear, and ask the right person rather than ringing everyone.",
        ],
      },
    ],
    faqs: [
      { q: "Does Tracking Work on the Mobile App?", a: "Yes. Staff accept, start and deliver from the mobile app, and those state changes appear on the board immediately. The Android app rings through even on silent so requests are not missed." },
      { q: "What Should a Manager Do When Something Turns Red?", a: "Open the request to see who owns it and its timeline, then nudge, add help or reassign. In most cases the escalation will already have reached you." },
      { q: "Do I Need to Update a Tracker Manually?", a: "No. SLA status is derived from the request’s own states and timestamps. Staff only tap Accept, Started and Delivered as they work." },
      { q: "Can Staff See Other People’s Requests?", a: "What each person sees depends on their role. Each role has its own permissions, so you can decide who sees the whole board and who sees only their queue." },
      { q: "Can I Track Across Several Office Locations?", a: "Multi-location is part of Pro. On Free, you get one location with up to 10 staff." },
      { q: "How Is Tracking Different From SLA Reporting?", a: "Tracking is the live, right-now view for acting on open requests. Reporting looks back over a period to show on-time rates and overdue patterns." },
      { q: "Does the Live Board Sort Requests by Urgency?", a: "Yes. Open requests are shown with their owner, state and time left, so managers see the jobs closest to breach first rather than whoever shouted loudest." },
      { q: "Which Request States Appear on the Tracking Board?", a: "Requested, accepted, started with an ETA, and delivered, along with overdue when a deadline passes. Each state change appears as soon as staff tap it." },
    ],
    related: ["sla-and-escalation", "sla-and-escalation/sla-timers", "sla-and-escalation/overdue-requests", "features/request-tracking", "administration/manager-dashboard", "use-cases/track-office-requests", "book-a-demo"],
    cta: { title: "Watch a Live Board Fill Up", body: "Explore the read-only demo, then start a free trial for your own office." },
  },

  // ───────────────────────────── BREACH DETECTION ─────────────────────────────
  {
    path: "sla-and-escalation/sla-breach-detection",
    title: "SLA Breach Detection for Internal Requests",
    description:
      "ZapBuzzer detects SLA breaches the moment a request passes its deadline, flags it overdue and triggers escalation, so late office jobs never go unnoticed.",
    h1: "The Moment a Deadline Is Missed, It Is Noticed",
    eyebrow: "Breach Detection",
    lead:
      "An SLA breach is simple: the request’s time limit passed and the job isn’t delivered. What matters is catching it at that moment, automatically, rather than hours later from an annoyed colleague.",
    keywords: ["sla breach detection", "overdue request alert", "missed deadline office request", "sla breach"],
    heroVisual: "sla-timer",
    sections: [
      {
        type: "prose",
        heading: "Breaches Are Information, Not Just Failures",
        paragraphs: [
          "Every office will have late jobs. A lift is out, two people are on leave, a vendor is at the gate. The problem is not that breaches happen; it is that they are invisible until someone complains, and by then the cause is forgotten.",
          "ZapBuzzer checks each open request against its SLA. The instant the deadline passes without a Delivered state, the request is flagged overdue. That flag is recorded with the request, drives escalation, and later shows up in reports, so a breach becomes something the team can learn from.",
        ],
      },
      {
        type: "workflow",
        heading: "What Happens at the Breach",
        steps: [
          { title: "Deadline Reached", body: "The request’s timer hits zero while it is still open." },
          { title: "Flagged Overdue", body: "Its status changes to overdue on the board and in the owner’s queue." },
          { title: "Escalation Triggered", body: "A manager is notified automatically; on Pro, a chain can continue upward." },
          { title: "Recorded", body: "The breach and overdue minutes stay attached to the request for reports." },
        ],
      },
      {
        type: "visual",
        visual: "escalation",
        heading: "From Breach to Escalation",
        body: "The overdue flag is the trigger. The escalation ladder shows who is told next.",
      },
      {
        type: "scenario",
        heading: "The Projector Before the Board Meeting",
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
        heading: "Breach Measures",
        items: [
          { metric: "Breach Count", meaning: "Number of requests delivered after, or still open past, their deadline in a period." },
          { metric: "Breach Rate", meaning: "Breaches as a share of all requests in the period; the inverse of on-time percentage." },
          { metric: "Overdue Minutes", meaning: "How late each breached request was, which separates near-misses from real failures." },
          { metric: "Breaches by Category", meaning: "Which request types breach most, such as AC issues versus coffee." },
        ],
      },
      {
        type: "checklist",
        heading: "Reviewing Breaches Without Blame",
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
        title: "Do Not Set SLAs You Know Will Breach",
        body: "If every AC request breaches, your target is wrong or your team is short-staffed. Constant breaches train people to ignore the overdue flag.",
      },
      {
        type: "prose",
        heading: "Why Detection Must Be Immediate",
        paragraphs: [
          "A breach found the next morning is history. A breach found at the deadline is still a request someone can rescue. That difference is the reason ZapBuzzer checks deadlines continuously instead of in a nightly batch or a weekly spreadsheet review.",
          "Immediate detection also changes how people behave. When staff know a missed deadline will be visible within seconds, they tend to accept only what they can start, ask for help earlier, and mark jobs Delivered as soon as they are done. That last habit matters: a job finished but not marked becomes a false breach, so a quick tap at the desk keeps the record accurate. Over a few weeks, breach data becomes trustworthy enough to base staffing and target decisions on.",
        ],
      },
    ],
    faqs: [
      { q: "Can a Forgotten Delivered Tap Cause a False Breach?", a: "Yes, if staff finish the job but do not mark it, the timer keeps running. Encourage marking Delivered at the point of handover, optionally with a photo." },
      { q: "Are Breaches Visible to the Staff Member?", a: "Staff see the overdue state on their own accepted jobs, which helps them prioritise the next task sensibly." },
      { q: "Is Breach Detection Automatic?", a: "Yes. No one has to check a list. The request is flagged overdue the moment its deadline passes without delivery." },
      { q: "Who Is Told About a Breach?", a: "A manager is notified through escalation. On Pro you can set up an escalation chain so further people are told if the issue remains unresolved." },
      { q: "Can a Breached Request Still Be Completed Normally?", a: "Yes. Staff deliver and the requester rates it as usual. The request simply keeps its record of being late." },
      { q: "Where Can I See Breach History?", a: "Breach and on-time data appear in SLA reporting and analytics, which are part of Pro. Free keeps the last 30 days of request history." },
      { q: "What Counts as an SLA Breach in ZapBuzzer?", a: "A breach happens when a request's deadline passes and it has not been marked Delivered. It is flagged at that moment by the system, not hours later by a colleague." },
      { q: "How Should We Review Breaches Without Blaming Staff?", a: "Look at the stage where each breach happened, before accept, before start or during work. That points to staffing, workload or a too-tight target rather than one person." },
    ],
    related: ["sla-and-escalation", "sla-and-escalation/overdue-requests", "sla-and-escalation/automatic-escalation", "sla-and-escalation/sla-reporting", "solutions/it-support/it-sla-management", "use-cases/prevent-lost-requests", "pricing/pro-plan"],
    cta: { title: "Catch Late Jobs at the Deadline", body: "Try ZapBuzzer free for 14 days and see breaches flagged in real time." },
  },

  // ───────────────────────────── AUTOMATIC ESCALATION ─────────────────────────────
  {
    path: "sla-and-escalation/automatic-escalation",
    title: "Automatic Escalation for Overdue Requests",
    description:
      "Overdue office requests escalate to a manager on their own. ZapBuzzer ends chase calls by pushing late pantry, IT and facilities jobs up the line.",
    h1: "Late Requests Climb the Ladder by Themselves",
    eyebrow: "Automatic Escalation",
    lead:
      "Escalation means passing a late job up to someone senior. It used to mean the requester phoning a manager. In ZapBuzzer, the request does it: when its SLA deadline passes, a manager is told, with the full timeline attached.",
    keywords: ["automatic escalation", "auto escalate overdue requests", "office escalation workflow", "facilities escalation"],
    heroVisual: "escalation",
    sections: [
      {
        type: "prose",
        heading: "Why Manual Escalation Fails",
        paragraphs: [
          "People are reluctant to escalate. Calling a manager about a late coffee feels petty; calling about a late projector fix feels like blaming a colleague. So they wait, and the problem gets worse.",
          "Automatic escalation takes the awkwardness away. Nobody is complaining. It’s a rule the whole office agreed to. When the SLA passes, the request goes up. As Deepak, an Admin Head, put it: “Facilities tickets auto-escalate now. Nothing rots in someone’s DMs.”",
        ],
      },
      {
        type: "visual",
        visual: "escalation",
        heading: "The Escalation Ladder",
        body: "The overdue request moves from the owner to a manager. On Pro, further rungs can be added.",
        points: ["Owner keeps the job unless reassigned", "Manager sees the full timeline", "Next rung if still unresolved (Pro)"],
      },
      {
        type: "workflow",
        heading: "Escalation Step by Step",
        steps: [
          { title: "Request Overdue", body: "The SLA deadline passes without delivery." },
          { title: "Manager Notified", body: "The responsible manager receives the escalation with request details and history." },
          { title: "Manager Acts", body: "They can nudge the owner, reassign, or send extra help." },
          { title: "Resolution Recorded", body: "Delivery and any reassignment are time-stamped against the request." },
        ],
      },
      {
        type: "scenario",
        heading: "Courier at the Gate, Mailroom Busy",
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
        heading: "Manual vs Automatic Escalation",
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
          { title: "Overdue to Manager", body: "Overdue requests auto-escalate to a manager on every plan." },
          { title: "Escalation Chain (Pro)", body: "Add more levels so unresolved escalations keep climbing." },
          { title: "Telegram and WhatsApp (Pro)", body: "Escalations reach managers on the channels they actually watch." },
          { title: "Reports (Pro)", body: "See how often and where escalation happens over time." },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Escalation Is Not Punishment",
        body: "The aim is to get the job done, not to log a black mark. Use escalation data to spot staffing gaps and unrealistic targets.",
      },
      {
        type: "prose",
        heading: "What Escalation Is for, and What It Is Not",
        paragraphs: [
          "Automatic escalation is a safety net, not a second queue. On a healthy day almost nothing escalates, because notifications repeat until someone accepts and timers keep owners focused. When escalations do arrive, they point to something unusual: a person pulled into an emergency, a team short-staffed, an item out of stock, or a fault that needs a specialist.",
          "That is why escalation in ZapBuzzer carries the full request history. The manager does not need to reconstruct who was asked or when. They can see the buzz time, the accept time, the owner, and how long it has been overdue, and make a decision in under a minute. It also protects staff: the record shows whether the delay came from too much work rather than too little effort, which is the people-first approach ZapBuzzer is built around.",
        ],
      },
    ],
    faqs: [
      { q: "What If Escalations Happen Every Day?", a: "Frequent escalations usually mean SLAs are too tight or a team lacks cover at certain hours. Use SLA analytics on Pro to find the pattern before changing targets." },
      { q: "Do I Need Pro for Escalation?", a: "Overdue requests auto-escalate to a manager on all plans. The multi-level escalation chain is a Pro feature." },
      { q: "Does the Original Owner Lose the Request?", a: "Not automatically. The manager is told and decides whether to nudge, add help or reassign." },
      { q: "How Is the Manager Notified?", a: "Through ZapBuzzer’s notification channels. Free uses the app and email; Pro adds Telegram and WhatsApp pings." },
      { q: "Can Escalation Be Different per Team?", a: "Each team usually has its own manager, so a facilities escalation goes to facilities leadership and an IT escalation to IT. Set this up to match your organisation." },
      { q: "Will the Requester Know It Was Escalated?", a: "The requester keeps seeing the request’s owner and progress. They do not need to chase, because someone with authority already knows." },
      { q: "What Triggers an Automatic Escalation?", a: "A request passing its deadline without being delivered. At that point a manager is told automatically, with the full timeline attached, and nobody has to pick up the phone." },
      { q: "Can Staff Escalate a Request Manually Before the Deadline?", a: "Escalation is driven by the deadline so it happens consistently. If a job needs help earlier, staff can add a note or tell their manager, who can add help or reassign." },
    ],
    related: ["sla-and-escalation", "sla-and-escalation/manager-escalation", "sla-and-escalation/escalation-chains", "notifications/notification-escalation", "solutions/facilities/facilities-escalation", "use-cases/stop-chase-calls", "free-trial"],
    cta: { title: "Let Requests Escalate Themselves", body: "Start a 14-day free trial and stop being the person who chases." },
  },

  // ───────────────────────────── MANAGER ESCALATION ─────────────────────────────
  {
    path: "sla-and-escalation/manager-escalation",
    title: "Manager Escalation: Handling Late Requests",
    description:
      "What managers see and do when an office request escalates in ZapBuzzer: full timeline, owner, overdue minutes, and the options to nudge, reassign or add help.",
    h1: "When a Late Job Lands on a Manager’s Phone",
    eyebrow: "Manager Escalation",
    lead:
      "Escalation means a late request is passed up to a manager. It only helps if that manager can act quickly. This page covers the manager’s side: what arrives, what it tells you, and how to sort it out in a minute.",
    keywords: ["manager escalation", "escalated request handling", "team lead escalation", "office manager escalation"],
    heroVisual: "escalation",
    sections: [
      {
        type: "prose",
        heading: "Designed for Someone Who Is Busy Too",
        paragraphs: [
          "The manager receiving an escalation is usually in the middle of something else. They need to know, at a glance, what is late, by how much, who owns it and what has been tried. ZapBuzzer escalations carry the request’s timeline, so there is no need to ring the requester for the backstory.",
          "Because routine on-time requests never reach the manager, escalations are rare enough to take seriously. That is the point: managers handle exceptions, not every cup of tea.",
        ],
      },
      {
        type: "visual",
        visual: "request-timeline",
        heading: "The Timeline That Comes With It",
        body: "Buzzed, accepted, started, and the moment it went overdue, all time-stamped.",
      },
      {
        type: "features",
        heading: "What the Manager Sees",
        items: [
          { title: "Request and Note", body: "What was asked, where it is going, and the requester’s note." },
          { title: "Owner", body: "Who accepted it, with name and photo, or that no one has accepted." },
          { title: "Time so Far", body: "Time to accept, time since start and minutes overdue." },
          { title: "Team Context", body: "Other open requests for that team, so you can judge whether the team is overloaded." },
        ],
      },
      {
        type: "workflow",
        heading: "Three Ways to Resolve It",
        steps: [
          { title: "Nudge", body: "If the owner is simply finishing up, a quick check is enough." },
          { title: "Add Help", body: "If the team is swamped, send another person to take it." },
          { title: "Reassign", body: "If the owner is stuck elsewhere, move the job to someone free." },
        ],
      },
      {
        type: "scenario",
        heading: "Lunch for Twelve, Running Late",
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
        heading: "Typical Escalation Owners",
        items: [
          { role: "Facilities Manager", benefit: "AC, lights, furniture and room issues that ran past target." },
          { role: "IT Manager", benefit: "Projectors, HDMI, hardware and software jobs that stalled." },
          { role: "Office or Admin Manager", benefit: "Pantry, print and courier requests across the floor." },
        ],
      },
      {
        type: "checklist",
        heading: "Good Habits for Escalation Owners",
        items: [
          "Respond to escalations before reading new routine requests",
          "Check the team’s open queue before blaming the owner",
          "Record the cause when it is something fixable",
          "Review the week’s escalations in reports on Pro",
        ],
      },
      {
        type: "prose",
        heading: "Escalation Without a Phone Call",
        paragraphs: [
          "Before ZapBuzzer, the typical manager escalation was a phone call from an irritated requester, followed by the manager phoning the team, followed by someone walking down to check. Three calls for one late job is exactly the phone tag ZapBuzzer was built to end; pilot offices saw phone calls drop by 87% in their first month.",
          "Escalation in ZapBuzzer arrives as a notification on the channels the manager already uses: the app and email on every plan, plus Telegram and WhatsApp on Pro. Because managers only see requests that have genuinely passed their deadline, they can treat each one as worth a minute of attention. And because every action is time-stamped, a manager who reassigns a job at 13:16 has that decision on record, which is useful when reviewing the week or explaining a late lunch to leadership.",
        ],
      },
    ],
    faqs: [
      { q: "Do Managers Need to Watch the Dashboard All Day?", a: "No. Escalations come to them as notifications. The dashboard is there for when they want the wider picture." },
      { q: "Can More Than One Manager Receive an Escalation?", a: "Escalation goes to the responsible manager; on Pro, an escalation chain adds further people if the request stays unresolved." },
      { q: "Will Managers Be Flooded With Escalations?", a: "Only requests that miss their SLA escalate. If managers see too many, the targets are probably too tight or a team is understaffed, both worth fixing." },
      { q: "Can a Manager Reassign the Request?", a: "Managers can reassign or add help according to their role’s permissions. Every action is recorded." },
      { q: "What If the Manager Does Not Respond?", a: "On Pro, an escalation chain can pass the request to the next person. On Free, escalation stops at the manager." },
      { q: "Are Manager Actions Logged?", a: "Every action in ZapBuzzer is audit-logged. Audit logs and reports are available on Pro." },
      { q: "What Information Arrives With a Manager Escalation?", a: "The request, its owner, its state and its timeline: when it was buzzed, accepted and started. That lets the manager decide in a minute without calling anyone." },
      { q: "How Can a Manager Resolve an Escalated Request?", a: "Usually one of three ways: nudge the current owner, add help, or reassign the job. Which actions each manager can take depends on their role's permissions." },
    ],
    related: ["sla-and-escalation", "sla-and-escalation/automatic-escalation", "sla-and-escalation/escalation-chains", "administration/manager-dashboard", "administration/staff-assignment", "use-cases/office-manager", "pricing/pro-plan"],
    cta: { title: "Handle Exceptions, Not Every Request", body: "Try ZapBuzzer free for 14 days and only hear about the jobs that need you." },
  },

  // ───────────────────────────── ESCALATION CHAINS ─────────────────────────────
  {
    path: "sla-and-escalation/escalation-chains",
    title: "Escalation Chains for Office Requests (Pro)",
    description:
      "Escalation chains on ZapBuzzer Pro keep unresolved overdue requests climbing past the first manager, so a late job always reaches someone who can fix it.",
    h1: "If the First Person Cannot Fix It, the Next One Hears",
    eyebrow: "Escalation Chains · Pro",
    lead:
      "When a request runs late, escalation passes it up to a manager. But if that one manager is in a meeting or on leave, it stalls. An escalation chain adds more people in order, so an overdue request keeps moving up until someone acts.",
    keywords: ["escalation chain", "multi level escalation", "escalation matrix office", "pro escalation chain"],
    heroVisual: "escalation",
    sections: [
      {
        type: "prose",
        heading: "One Manager Is a Single Point of Failure",
        paragraphs: [
          "Basic escalation sends an overdue request to a manager. That works most days. But the facilities manager might be on a site visit, or the IT lead might be in the same board meeting that needs the projector. If escalation stops there, the request waits again.",
          "Escalation chains, available on Pro, define the next steps. If an escalated request is still not resolved, it goes to the next person in the chain. Each step is recorded, so afterwards you can see exactly where the request stalled.",
        ],
      },
      {
        type: "visual",
        visual: "escalation",
        heading: "A Chain in Action",
        body: "Owner, then team manager, then the next level you choose. Each rung only fires if the previous one did not resolve the request.",
      },
      {
        type: "table",
        heading: "Example Chains",
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
        heading: "The AC on a Saturday Half-Day",
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
        heading: "Designing a Sensible Chain",
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
        heading: "Chain Measures Worth Watching",
        items: [
          { metric: "Escalations per Step", meaning: "How many requests reached each rung. A busy step two suggests step one is unavailable too often." },
          { metric: "Time to Resolve After Escalation", meaning: "From escalation to delivery; shows how effective each rung is." },
          { metric: "Full-Chain Escalations", meaning: "Requests that reached the top rung; these deserve individual review." },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Escalation Chains Are Part of Pro",
        body: "Pro is ₹99 per seat per month and also includes Telegram and WhatsApp pings, multi-location, full analytics, scorecards, audit logs and reports. Try it free for 14 days.",
      },
      {
        type: "prose",
        heading: "Chains for Groups and Facility Companies",
        paragraphs: [
          "Chains become more important as an organisation grows. A single office might rely on one admin head who knows everyone. A group with several locations, or a facility company running services for clients, needs requests to reach the right person at the right site without anyone forwarding messages by hand.",
          "With multi-location on Pro, each office can have chains that match its own structure, and escalations land with the people responsible for that site. Groups and facility companies with more complex needs, such as SSO, white-label or a dedicated customer success manager, can talk to us about Enterprise.",
        ],
      },
      {"type":"callout","tone":"tip","title":"Keep Names Current","body":"A chain is only as good as the people in it. When a manager leaves or changes role, update the chain the same day, or escalations will land with someone who can no longer act."},
    ],
    faqs: [
      {"q":"Should the Top of the Chain Be the Founder?","a":"Rarely. If escalations regularly reach the top, the fix belongs lower down. Keep the last step for someone with authority who only needs to see real exceptions, such as an admin head."},
      { q: "How Are Chain Members Notified?", a: "Through ZapBuzzer notifications on the app and email, plus Telegram and WhatsApp on Pro, so people on the move still hear about it." },
      { q: "Which Plan Includes Escalation Chains?", a: "Pro and Enterprise. Free escalates overdue requests to a manager, but does not support further chain steps." },
      { q: "How Many Levels Should a Chain Have?", a: "Most offices need two or three. More steps tend to mean a request travels further from the people who can actually fix it." },
      { q: "Can Each Team Have Its Own Chain?", a: "Yes. Chains make most sense per team, because the people with authority over facilities are not the same as those over IT or the pantry." },
      { q: "Does Every Step Get the Full History?", a: "Each escalation carries the request’s timeline, so the person at step three does not need to ask what happened at step one." },
      { q: "Can I See How Often Chains Fire?", a: "Yes, through Pro reports and SLA analytics, which show escalations by team and period." },
      { q: "What Happens If a Chain Step Is on Leave?", a: "The chain does not wait for them. If the request stays unresolved, it moves to the next step, which is why a chain beats relying on a single manager." },
    ],
    related: ["sla-and-escalation", "sla-and-escalation/manager-escalation", "sla-and-escalation/automatic-escalation", "notifications/notification-escalation", "solutions/facilities/facilities-escalation", "pricing/pro-plan", "free-trial"],
    cta: { title: "Make Sure Late Jobs Always Land Somewhere", body: "Start a 14-day Pro trial and set up your first escalation chain." },
  },

  // ───────────────────────────── OVERDUE REQUESTS ─────────────────────────────
  {
    path: "sla-and-escalation/overdue-requests",
    title: "Managing Overdue Office Requests",
    description:
      "How ZapBuzzer handles overdue requests: clear flags, escalation and a time-stamped record, so late coffee, print and facilities jobs get done and learned from.",
    h1: "Overdue, Visible, and on Its Way to Done",
    eyebrow: "Overdue Requests",
    lead:
      "A request is overdue once it has passed its SLA, the time limit set for that kind of job. The aim is to finish it quickly, keep the requester informed, and make it happen less often next month.",
    keywords: ["overdue requests", "late office requests", "overdue ticket management", "overdue facilities request"],
    heroVisual: "request-dashboard",
    sections: [
      {
        type: "prose",
        heading: "What Overdue Means in ZapBuzzer",
        paragraphs: [
          "A request is overdue when it has passed its SLA deadline without being marked Delivered. It may have no owner yet, or it may be accepted and in progress. Both count, and the difference matters: an unaccepted overdue request is a reach or staffing problem, while an accepted one is a capacity or complexity problem.",
          "Overdue requests stand out on the board, escalate automatically to a manager, and keep their overdue status in history after delivery.",
        ],
      },
      {
        type: "visual",
        visual: "request-dashboard",
        heading: "Overdue on the Board",
        body: "Overdue requests are flagged so managers can find them among on-time work immediately.",
      },
      {
        type: "problem-solution",
        heading: "The Two Kinds of Overdue",
        problem: {
          title: "Overdue and Unaccepted",
          points: ["Nobody has claimed it", "Notifications may not be reaching staff", "Team may be away from screens", "Often happens at peak hours"],
        },
        solution: {
          title: "What Helps",
          points: ["Notifications repeat until accepted", "Telegram and WhatsApp reach (Pro)", "Escalation to a manager", "Staffing peak hours using activity analytics"],
        },
      },
      {
        type: "scenario",
        heading: "Two Coffees That Nearly Went Cold",
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
        heading: "Weekly Overdue Review",
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
        heading: "Overdue Numbers",
        items: [
          { metric: "Open Overdue", meaning: "Requests past their deadline right now; the number to drive to zero today." },
          { metric: "Delivered Late", meaning: "Requests completed after their deadline in the period." },
          { metric: "Average Overdue Minutes", meaning: "How late late requests typically are." },
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Small Overdue Margins Often Mean the SLA Is Wrong",
        body: "If most overdue print jobs are one or two minutes late, the target may be slightly too tight. If they are twenty minutes late, look at staffing or the printer.",
      },
      {
        type: "prose",
        heading: "Keeping the Requester in the Loop",
        paragraphs: [
          "The most stressful part of an overdue request for an employee is uncertainty. Did anyone see it? Should I walk down to the pantry myself? ZapBuzzer answers both questions on the requester’s screen: the request shows who accepted it, with name and photo, and its current state. Even when a job runs late, the requester can see that someone owns it and that a manager has been told.",
          "That visibility is why overdue requests rarely turn into phone calls. Instead of three calls for one coffee, the requester waits a couple of extra minutes, knowing it is in hand. When the job is delivered, they still rate it, and a late-but-handled job often earns a fair rating because the communication was clear.",
          "For managers, the rule is simple: drive open overdue requests to zero each day, then look at the delivered-late list each week to find causes.",
        ],
      },
    ],
    faqs: [
      { q: "Can the Requester See That a Request Is Overdue?", a: "The requester sees the owner and progress of their request. They do not need to escalate it themselves, because escalation already happens automatically." },
      { q: "What Is the Fastest Way to Clear Overdue Requests?", a: "Start with unaccepted overdue requests, since they have no owner. Then check accepted ones whose owners have several open jobs and add help." },
      { q: "Does an Overdue Request Stay Overdue After Delivery?", a: "Its history keeps the fact that it was delivered late, which is what reporting needs. The live board stops showing it once delivered." },
      { q: "Can the Requester Cancel an Overdue Request?", a: "If the need has passed, cancelling keeps queues honest. Cancelled requests are not counted as on-time deliveries." },
      { q: "Who Is Notified About an Overdue Request?", a: "A manager via automatic escalation, and further people on Pro if you use an escalation chain." },
      { q: "How Long Is Overdue History Kept?", a: "Free keeps the last 30 days of history. Pro adds full analytics, audit logs and reports for longer-term review." },
      { q: "What Are the Two Kinds of Overdue Request?", a: "Overdue before anyone accepted, which usually means no free staff or missed notifications, and overdue after accept, which usually means workload or a hard job. They need different fixes." },
      { q: "How Should We Run a Weekly Overdue Review?", a: "Look at overdue counts by team and hour, then check whether they were unaccepted or slow to deliver. Change one thing, such as cover or a target, and watch the next week." },
    ],
    related: ["sla-and-escalation", "sla-and-escalation/sla-breach-detection", "sla-and-escalation/sla-tracking", "features/request-status", "use-cases/prevent-lost-requests", "analytics/on-time-performance", "book-a-demo"],
    cta: { title: "Get Overdue Requests Under Control", body: "Start free and see which jobs slip, and why, within a week." },
  },

  // ───────────────────────────── REPORTING ─────────────────────────────
  {
    path: "sla-and-escalation/sla-reporting",
    title: "SLA Reporting for Office Operations (Pro)",
    description:
      "SLA reports on ZapBuzzer Pro show on-time delivery, breaches and escalations by team and category, so office managers can prove service and fix weak spots.",
    h1: "Proof That the Office Runs on Time",
    eyebrow: "SLA Reporting · Pro",
    lead:
      "Every request has an SLA, a time limit for getting it done. SLA reports turn thousands of timed requests into a short answer: how often you’re on time, where you’re not, and whether it’s getting better. SLA reports are part of Pro.",
    keywords: ["sla reporting", "sla report office", "on-time delivery report", "facilities sla report"],
    heroVisual: "analytics",
    sections: [
      {
        type: "prose",
        heading: "Reports for People Who Were Not Watching the Board",
        paragraphs: [
          "The live board is for the people managing today. Reports are for everyone else: the admin head preparing a monthly review, the founder who wants to know if the new pantry staffing worked, the facility company showing a client what it delivered.",
          "Because every request in ZapBuzzer is timed from buzz to delivery and every action is logged, reports are built from records, not from someone’s recollection or a hand-filled spreadsheet.",
        ],
      },
      {
        type: "visual",
        visual: "analytics",
        heading: "Report View",
        body: "KPI tiles for on-time rate and breaches, with breakdowns by team and period.",
      },
      {
        type: "metrics",
        heading: "What an SLA Report Contains",
        items: [
          { metric: "On-Time Delivery %", meaning: "Share of delivered requests completed within their SLA in the period." },
          { metric: "Breaches", meaning: "Requests delivered late or still open past deadline." },
          { metric: "Escalations", meaning: "How many requests escalated, and on Pro how far up the chain." },
          { metric: "Average Accept Time", meaning: "Mean time from buzz to Accept across requests." },
          { metric: "Average Delivery Time", meaning: "Mean time from buzz to Delivered." },
        ],
      },
      {
        type: "table",
        heading: "Common Report Cuts",
        headers: ["Cut", "Question It Answers"],
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
        heading: "The Monthly Operations Review",
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
        heading: "Who Reads SLA Reports",
        items: [
          { role: "Admin and Operations Heads", benefit: "Monthly evidence of service levels and where to invest." },
          { role: "Founders", benefit: "A quick health check on how the office actually runs." },
          { role: "Facility Companies", benefit: "Show clients delivery against agreed targets; talk to us about Enterprise for groups." },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Reports Need Pro",
        body: "Audit logs, reports, and full analytics are Pro features at ₹99 per seat per month. Free keeps 30 days of request history.",
      },
      {
        type: "prose",
        heading: "Reports That Hold Up to Scrutiny",
        paragraphs: [
          "A report is only useful if people trust it. ZapBuzzer reports draw on time-stamped states that staff create in the normal course of work, and on Pro every action is also captured in the audit log. If a leadership team asks why last month’s on-time rate dropped, the answer can be traced to specific requests, owners and times.",
          "That traceability also protects staff. A team blamed for slow service can point to report cuts showing that breaches clustered when the team was one person short, or when one faulty AC unit generated half the facilities requests. Reports in ZapBuzzer are a shared record, not a tool for one side of the argument.",
          "Most offices settle into a simple rhythm: a weekly glance for team leads, and a monthly review for leadership that compares on-time %, breaches and escalations with the previous month.",
        ],
      },
    ],
    faqs: [
      { q: "How Often Should We Review SLA Reports?", a: "Weekly for team leads and monthly for leadership works for most offices. Weekly reviews catch emerging problems; monthly ones show trends." },
      { q: "Do Reports Include Who Did Each Job?", a: "Reports draw on records that include the owner of each request, and every action is audit-logged on Pro, so details can be traced when needed." },
      { q: "Is SLA Reporting Included on Free?", a: "No. Reports, audit logs and full analytics are part of Pro. Free keeps the last 30 days of request history." },
      { q: "Can I Report Across Multiple Offices?", a: "Multi-location is a Pro feature. Groups and facility companies with many sites should look at Enterprise." },
      { q: "Can I Get the Data Into Other Systems?", a: "Enterprise includes a REST API and webhooks. Talk to us about your use case for details." },
      { q: "How Is a Report Different From SLA Analytics?", a: "A report summarises a period for review and sharing. SLA analytics is for exploring patterns, such as which hours or categories breach most." },
      { q: "What Does an SLA Report Contain?", a: "On-time rate, overdue counts, average accept and delivery times and escalations, cut by team, category, location and period. It is built from timed requests, so nobody fills it in by hand." },
      { q: "Can I Use SLA Reports in a Monthly Leadership Review?", a: "Yes. A monthly report gives leadership a short answer on whether the office runs on time and is improving, without them needing to watch the live board." },
    ],
    related: ["sla-and-escalation", "sla-and-escalation/sla-analytics", "features/request-reports", "analytics/on-time-performance", "enterprise/enterprise-reporting", "use-cases/sla-compliance", "pricing/pro-plan"],
    cta: { title: "Show Your Service Levels With Data", body: "Start a 14-day Pro trial and run your first SLA report on real requests." },
  },

  // ───────────────────────────── SLA ANALYTICS ─────────────────────────────
  {
    path: "sla-and-escalation/sla-analytics",
    title: "SLA Analytics: Find Why Requests Run Late",
    description:
      "SLA analytics in ZapBuzzer Pro break down breaches by hour, team, category and stage, showing whether delays come from slow pickup, slow work or wrong targets.",
    h1: "Find Out Why Late Requests Are Late",
    eyebrow: "SLA Analytics · Pro",
    lead:
      "Knowing your on-time rate is useful. Knowing that most breaches (missed deadlines) are slow pickups between 1 and 2 pm on the 3rd floor is what actually lets you fix it.",
    keywords: ["sla analytics", "sla breach analysis", "request delay analysis", "office sla insights"],
    heroVisual: "analytics",
    sections: [
      {
        type: "prose",
        heading: "From a Number to a Cause",
        paragraphs: [
          "A breach can come from three places: nobody picked the request up fast enough, the work itself took too long, or the target was unrealistic. Each needs a different fix: better notification reach, more hands, or a new SLA.",
          "SLA analytics in ZapBuzzer split request time into stages using the recorded states, then slice it by team, category, location and time. That lets you see not just how often you are late, but where in the lifecycle the minutes went.",
        ],
      },
      {
        type: "visual",
        visual: "analytics",
        heading: "Breaches by Stage and Hour",
        body: "Bars by hour of day, split into accept time and work time, show where delay builds up.",
      },
      {
        type: "metrics",
        heading: "SLA Analytics Definitions",
        items: [
          { metric: "Accept Share of Delay", meaning: "Portion of total time spent before anyone accepted. High values point to reach or staffing." },
          { metric: "Work Share of Delay", meaning: "Portion spent between accept and delivery. High values point to capacity or complexity." },
          { metric: "Breach Rate by Hour", meaning: "Breaches as a share of requests in each hour of the day." },
          { metric: "Breach Rate by Category", meaning: "Which request types miss their target most often." },
          { metric: "Near-Miss Rate", meaning: "Requests delivered just inside their deadline; a warning sign before breaches rise." },
        ],
      },
      {
        type: "scenario",
        heading: "The Post-Lunch IT Dip",
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
        heading: "SLA Analytics vs SLA Reports",
        columns: ["SLA Reports", "SLA Analytics"],
        rows: [
          { label: "Purpose", a: "Summarise a period", b: "Explore causes" },
          { label: "Audience", a: "Leadership, clients", b: "Team leads, managers" },
          { label: "Typical Question", a: "Were we on time last month?", b: "Why were we late at 1 pm?" },
        ],
      },
      {
        type: "checklist",
        heading: "Questions to Ask the Data",
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
        title: "Part of Full Analytics on Pro",
        body: "SLA analytics sit inside ZapBuzzer’s full analytics and scorecards, included in Pro at ₹99 per seat per month.",
      },
      {
        type: "prose",
        heading: "Turning Patterns Into Changes",
        paragraphs: [
          "Analytics are only worth the time if they lead to a change. In practice the fixes are usually small and practical: stagger lunch breaks, keep an HDMI cable in Conference Room B, encourage sales to buzz large print jobs the evening before, service the AC on one floor, add Telegram pings for the person on call.",
          "After each change, SLA analytics show whether it worked. If accept time in the problem hour falls and breaches drop, keep the change. If not, try the next idea. Over a few months, this habit tends to move an office from reacting to complaints to preventing them. Because every request contributes data automatically, the cost of running these small experiments is close to zero.",
        ],
      },
      {"type":"stats","heading":"What Pilot Offices Reached","items":[{"value":"96%","label":"On-Time Delivery, First Month"},{"value":"32s","label":"Average Accept Time"},{"value":"4.8★","label":"Average Staff Rating"}],"note":"Pilot offices, first month. Use your own trend as the main benchmark."},
    ],
    faqs: [
      {"q":"What Should I Look at First in SLA Analytics?","a":"Start with the stage where breaches happen: before accept, before start or during work. That narrows the cause to staffing, workload or the job itself."},
      { q: "Can SLA Analytics Tell Me If My Targets Are Wrong?", a: "Yes. A high near-miss rate or many requests that are only a minute or two late suggests the target is slightly too tight for that category." },
      { q: "Should I Change Several Things at Once?", a: "Changing one thing at a time makes it easier to see what worked in the analytics." },
      { q: "Which Plan Includes SLA Analytics?", a: "Pro and Enterprise. They are part of full analytics and scorecards." },
      { q: "Can I Compare Locations?", a: "Yes, if you use multi-location on Pro. Enterprise suits groups and facility companies with many sites." },
      { q: "Does SLA Analytics Rank Individual Staff?", a: "SLA analytics focus on patterns across teams, hours and categories. Individual performance, with fair credit for each person, is covered by staff scorecards." },
      { q: "How Many Weeks of Requests Before SLA Patterns Show Up?", a: "Breach patterns by stage, hour and category usually appear within a couple of weeks of normal use, because every request contributes timed data from day one." },
      { q: "Can SLA Analytics Show Breaches by Hour of Day?", a: "Yes. Breaches can be viewed by stage and hour, which surfaces patterns such as slow IT pickups just after lunch that a single on-time rate would hide." },
    ],
    related: ["sla-and-escalation", "sla-and-escalation/sla-reporting", "analytics", "analytics/response-time-analytics", "analytics/office-activity-analytics", "solutions/it-support/it-support-analytics", "pricing/pro-plan"],
    cta: { title: "See Where Your Minutes Go", body: "Try Pro free for 14 days and get SLA analytics on your own requests." },
  },
];
