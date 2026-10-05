import type { PageContent } from "../types";

export const pages: PageContent[] = [
  // ───────────────────────────── HUB ─────────────────────────────
  {
    path: "solutions/courier",
    title: "Courier & Mailroom Management for Offices",
    description:
      "Run courier pickups, mailroom handoffs and reception requests from one tap. ZapBuzzer routes every parcel request, times it and keeps an audit trail.",
    h1: "Every parcel, pickup and handoff on one audit trail",
    eyebrow: "Courier & Reception",
    lead:
      "A courier waiting at the gate should not depend on someone finding the right phone number. With ZapBuzzer, reception taps Courier Pickup, the mailroom team is pinged on every channel at once, and the first person free accepts it. Every step is timed and logged.",
    keywords: [
      "office courier management",
      "mailroom request software",
      "reception courier pickup",
      "courier tracking for offices",
      "parcel handoff audit trail",
    ],
    heroVisual: "request-timeline",
    sections: [
      {
        type: "problem-solution",
        heading: "Why courier handling falls apart in busy offices",
        intro:
          "Courier work is small and frequent, and it usually lands on whoever is nearest. That is why it goes missing.",
        problem: {
          title: "How it usually goes",
          points: [
            "The delivery agent waits at the gate while reception calls three extensions looking for someone from the mailroom.",
            "Outgoing documents sit on a desk because nobody was told the pickup slot is at 4 pm.",
            "A signed contract is ‘handed over’ but nobody can say to whom, or when.",
            "Requests come in on a WhatsApp group, a sticky note and a hallway shout, and none of them are written down.",
          ],
        },
        solution: {
          title: "How it goes with ZapBuzzer",
          points: [
            "Reception taps Courier Pickup and adds a short note, such as ‘Blue Dart, 2 boxes, Gate 1’.",
            "The mailroom team is notified at the same time. The first person to tap Accept owns the request.",
            "The requester sees who is on it, with name and photo, and an ETA.",
            "Every action is recorded in the audit log, so a handoff can always be traced later.",
          ],
        },
      },
      {
        type: "prose",
        eyebrow: "What counts as courier work",
        heading: "One catalogue for every kind of handoff",
        paragraphs: [
          "Most offices deal with the same few jobs over and over: an inbound parcel at reception, an outbound document that needs to reach the courier counter, an envelope that has to go from the mailroom to the 4th-floor finance team, and the occasional ‘please collect this from my desk before 5’. In ZapBuzzer each of these can be its own catalogue item, so the request already says what kind of job it is before anyone reads the note.",
          "Because courier requests are ordinary ZapBuzzer requests, they follow the same rules as coffee, prints and IT help. They are routed to a team instead of a person, they ring on every channel at once, the first accept wins, and an SLA timer runs from the moment the buzz goes out. Your mailroom staff don’t need to learn a separate tool.",
        ],
        bullets: [
          "Courier pickup from the gate or reception desk",
          "Outgoing documents and parcels to be dispatched",
          "Internal deliveries from the mailroom to a seat or cabin",
          "Reception requests such as visitor packages or keys left at the front desk",
        ],
      },
      {
        type: "workflow",
        heading: "How a courier request moves through ZapBuzzer",
        intro: "The same five steps whether it is an inbound box or an outbound contract.",
        steps: [
          {
            title: "Reception or an employee taps the request",
            body: "Pick Courier Pickup (or your own item, such as Outgoing Dispatch), add a note with the courier name, number of packages and location, and tap Buzz.",
          },
          {
            title: "The mailroom team is pinged together",
            body: "Everyone on the team gets the request at once in the app and by email, and on Telegram and WhatsApp on Pro. Notifications repeat until someone accepts.",
          },
          {
            title: "First to accept owns it",
            body: "Whoever is free taps Accept. The requester sees their name and photo straight away, so reception can tell the courier agent who is coming.",
          },
          {
            title: "Started, with an ETA",
            body: "The staff member marks it started with an ETA. The SLA timer keeps running, and if it goes overdue it escalates to a manager.",
          },
          {
            title: "Delivered, logged and rated",
            body: "On completion a photo can be attached as proof of handoff. The requester rates the job, and the whole trail goes into the audit log.",
          },
        ],
      },
      {
        type: "scenario",
        heading: "A courier at the gate, handled in under five minutes",
        persona: "Neha, Reception",
        setting: "A courier agent arrives at Gate 1 at 3:40 pm with two boxes for the finance team on the 4th floor.",
        timeline: [
          { time: "15:40", event: "Neha taps Courier Pickup on the front-desk tablet and adds ‘2 boxes for Finance, agent waiting at Gate 1’." },
          { time: "15:40", event: "The three-person mailroom team is pinged at once in the app and on WhatsApp." },
          { time: "15:41", event: "Sunil accepts. Neha sees his name and photo and tells the agent someone is on the way." },
          { time: "15:44", event: "Sunil signs for the boxes and marks the request started, ETA 10 minutes to the 4th floor." },
          { time: "15:52", event: "The boxes reach the finance cabin. Sunil marks it delivered and attaches a photo." },
        ],
        outcome:
          "No calls to three extensions, no agent waiting fifteen minutes, and an audit-trailed record of who took the boxes and when they arrived.",
      },
      {
        type: "visual",
        visual: "audit-log",
        heading: "An audit trail for every handoff",
        body: "Couriers bring contracts, cheques, laptops and legal notices. When someone asks ‘who received it?’, the answer should take ten seconds to find. ZapBuzzer records every action, from request and accept to started and delivered, against a named person and a timestamp.",
        points: [
          "Every action is audit-logged, with who did it and when",
          "Delivery photos attached by staff stay with the request",
          "Full audit logs and reports are part of Pro",
        ],
      },
      {
        type: "features",
        heading: "What courier and reception teams get",
        items: [
          { title: "Courier catalogue items", body: "Separate items for inbound, outbound and internal delivery, so the request type is clear before anyone opens it." },
          { title: "Team routing", body: "Requests go to the mailroom or reception team, not to one person who might be on leave." },
          { title: "Repeat-until-accepted pings", body: "App, email and, on Pro, Telegram and WhatsApp all ring together and keep ringing until someone accepts." },
          { title: "Rings on a silent phone", body: "The Android app rings through even when a staff phone is on silent or locked, which matters when the agent is waiting at the gate." },
          { title: "SLA timers", body: "Each courier request carries a deadline, and late ones escalate automatically, with an escalation chain on Pro." },
          { title: "Mailroom analytics", body: "See volume by hour, accept times and on-time delivery for the mailroom team, with full analytics on Pro." },
        ],
      },
      {
        type: "audience",
        heading: "Who it helps",
        items: [
          { role: "Receptionists", benefit: "One tap at the front desk instead of a round of phone calls while the courier agent waits." },
          { role: "Mailroom staff", benefit: "A clear queue, fair attribution for every handoff, and no more ‘I thought you were doing it’." },
          { role: "Admin heads", benefit: "SLA timers and escalation so nothing waits at the gate unnoticed, plus reports on volume." },
          { role: "Employees", benefit: "Know who has your parcel and when it will reach your desk, without walking down to ask." },
        ],
      },
      {
        type: "stats",
        heading: "Month-one results from pilot offices",
        items: [
          { value: "32s", label: "average accept time" },
          { value: "96%", label: "on-time delivery" },
          { value: "−87%", label: "phone calls" },
          { value: "4.8★", label: "average staff rating" },
        ],
        note: "Figures across all request types in ZapBuzzer pilot offices, not courier requests alone.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Which plan do you need?",
        body: "The Free plan covers one location and up to 10 staff, with email notifications and 30 days of history, which is enough to try courier requests with a small team. Telegram and WhatsApp pings, escalation chains, full analytics and audit logs with reports come with Pro at ₹99 per seat per month.",
      },
    ],
    faqs: [
      {
        q: "Does ZapBuzzer connect to courier companies’ tracking systems?",
        a: "No. ZapBuzzer tracks the internal side of the job: who requested it, who accepted it, when it was started and when it was handed over. Staff can add the courier name or a reference number in the request note so it stays with the record.",
      },
      {
        q: "Can reception raise requests for other employees?",
        a: "Yes. Reception simply raises the request and uses the note and destination to say who the parcel is for. The mailroom team sees the details and the employee’s location before accepting.",
      },
      {
        q: "What happens if nobody in the mailroom accepts?",
        a: "Notifications repeat until someone accepts. If the request runs past its SLA, it auto-escalates to a manager, and on Pro it can move up an escalation chain.",
      },
      {
        q: "Can we prove who received a parcel?",
        a: "Every action is audit-logged against a named person and a time, and staff can attach a photo when they mark a request delivered. That gives you a clear record of each handoff.",
      },
      {
        q: "Do we need separate software for the mailroom?",
        a: "No. Courier requests use the same ZapBuzzer app your office uses for pantry, print and IT requests, on web and mobile.",
      },
    ],
    related: [
      "solutions/courier/pickup",
      "solutions/courier/mailroom",
      "solutions/courier/tracking",
      "workflows/courier-pickup",
      "use-cases/reception",
      "admin/audit-logs",
      "pricing",
      "free-trial",
    ],
    cta: {
      title: "Stop chasing the mailroom by phone",
      body: "The free trial runs for 14 days and needs neither a card nor a setup call. Add a Courier Pickup item and invite your reception team this afternoon.",
    },
  },

  // ───────────────────────────── PICKUP ─────────────────────────────
  {
    path: "solutions/courier/pickup",
    title: "Courier Pickup Requests in One Tap",
    description:
      "Reception taps Courier Pickup, the mailroom is pinged on every channel, and the first person free collects it. Timed, attributed and audit-logged.",
    h1: "The courier is at the gate. Someone is already on the way.",
    eyebrow: "Courier pickup",
    lead:
      "Courier pickup is a job with a real person waiting. ZapBuzzer gets it to the mailroom team in seconds and shows reception exactly who is coming.",
    keywords: ["courier pickup request", "office parcel pickup", "reception courier alert", "mailroom pickup app"],
    heroVisual: "staff-queue",
    sections: [
      {
        type: "prose",
        heading: "Why pickup is the most time-sensitive courier job",
        paragraphs: [
          "Most office requests can wait a few minutes. A courier pickup often cannot: the delivery agent has a route to finish, and if nobody turns up they may leave with the parcel or drop it at the wrong desk. Every minute reception spends looking for someone is a minute the agent stands at the gate.",
          "ZapBuzzer treats a pickup like any other buzz, sent to the whole team at once and repeated until accepted, but the payoff is bigger because the waiting is so visible. Reception gets a name and an ETA to pass on instead of ‘someone will come’.",
        ],
      },
      {
        type: "workflow",
        heading: "Pickup in four taps",
        steps: [
          { title: "Tap Courier Pickup", body: "From the front-desk tablet, web app or phone. Add the courier name, number of packages and the gate or desk." },
          { title: "Mailroom is pinged together", body: "App and email for everyone, with Telegram and WhatsApp on Pro, repeating until someone accepts." },
          { title: "Accept and walk", body: "The first person free taps Accept. Reception sees who it is right away." },
          { title: "Collected and logged", body: "Staff mark it started, then delivered once the parcel is with the recipient or in the mailroom, with an optional photo." },
        ],
      },
      {
        type: "visual",
        visual: "staff-queue",
        heading: "What the mailroom team sees",
        body: "Each person on the team sees the pickup in their queue with the note, the location and the time it was raised. One tap on Accept takes it, and it disappears from everyone else’s list so nobody makes a wasted trip to the gate.",
      },
      {
        type: "scenario",
        heading: "Two pickups at once on a Monday",
        persona: "Neha, Reception",
        setting: "Monday 11:15 am. Two courier agents arrive within a minute of each other.",
        timeline: [
          { time: "11:15", event: "Neha raises two Courier Pickup requests: ‘DTDC, 1 envelope, Gate 1’ and ‘3 boxes for IT, Gate 2’." },
          { time: "11:15", event: "Sunil and Farah are both pinged on their phones, which ring even though they are on silent." },
          { time: "11:16", event: "Sunil accepts the envelope and Farah accepts the boxes. Neither duplicates the other." },
          { time: "11:24", event: "Both are marked delivered. The IT boxes have a photo attached at the IT store." },
        ],
        outcome: "Two agents gone in under ten minutes, and reception never picked up the phone.",
      },
      {
        type: "comparison",
        heading: "Pickup by phone vs pickup by buzz",
        columns: ["Calling around", "ZapBuzzer"],
        rows: [
          { label: "Finding someone", a: "Call extensions until one answers", b: "Whole team pinged at once" },
          { label: "Who is coming", a: "‘Someone will be there’", b: "Name, photo and ETA" },
          { label: "If nobody answers", a: "Keep calling", b: "Repeats, then escalates past SLA" },
          { label: "Record afterwards", a: "None", b: "Audit-logged with timestamps" },
        ],
      },
      {
        type: "checklist",
        heading: "What to put in a pickup note",
        items: [
          "Courier company name",
          "Number of packages and rough size",
          "Where the agent is waiting (gate, lobby, reception desk)",
          "Who the parcel is for, if known",
          "Anything unusual, such as cash on delivery or signature needed",
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Keep a phone ringing at the mailroom",
        body: "The ZapBuzzer Android app rings through even on a silent or locked phone. Mailroom staff who step away from their desk still hear pickups as they come in.",
      },
      {
        type: "metrics",
        heading: "Pickup numbers worth a weekly look",
        intro: "Because every pickup is timed, reception and the mailroom lead can see where the gate wait actually comes from.",
        items: [
          { metric: "Time to accept", meaning: "How long the agent stood at the gate before anyone in the mailroom took ownership. This is the number that decides whether couriers start dreading your building." },
          { metric: "Accept to delivered", meaning: "How long it took to walk to the gate, sign and get the parcel to the recipient or the mailroom shelf." },
          { metric: "Pickups by hour", meaning: "Shows the slots when agents cluster, so you can keep one more person near the mailroom at those times." },
          { metric: "Escalated pickups", meaning: "Requests that ran past their deadline and went to a manager. A rising count usually points to a staffing gap at a particular hour, not a lazy team." },
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Let reception rate the gate run",
        body: "Reception raised the pickup, so reception rates it once it is delivered. Those ratings give mailroom staff credit on their scorecard for the unglamorous gate runs that usually go unnoticed.",
      },
    ],
    faqs: [
      { q: "Can the courier agent raise the request?", a: "Requests are raised by people in your workspace, typically reception. The agent tells reception, reception taps once, and the mailroom takes it from there." },
      { q: "How fast does the mailroom get notified?", a: "Immediately. The request goes out on all of the team’s channels at once and repeats until someone accepts. Pilot offices averaged a 32-second accept time across request types." },
      { q: "Is pickup different from an outgoing dispatch?", a: "Yes. Pickup is usually about receiving something at the gate. Outgoing dispatch is about getting your documents to the courier, and many offices set it up as a separate catalogue item." },
      { q: "Can I see past pickups?", a: "Yes. Request history covers the last 30 days on Free, and Pro adds full audit logs and reports." },
      { q: "What if the mailroom is empty during lunch?", a: "The request still goes to the whole team on every channel they use, so someone eating in the pantry can accept from their phone. If nobody accepts before the deadline, it escalates to a manager instead of quietly waiting." },
      { q: "Can security or reception handle the pickup instead?", a: "Yes. Courier Pickup routes to whichever team you assign it to. Some offices send it to reception during the day and rely on escalation to pull in a manager when the desk is busy." },
    ],
    related: ["solutions/courier", "solutions/courier/reception", "workflows/courier-pickup", "features/first-accept-wins", "mobile-app/android", "pricing/pro"],
    cta: { title: "Make the gate wait shorter", body: "Try Courier Pickup with your reception team free for 14 days, with no card required." },
  },

  // ───────────────────────────── MAILROOM ─────────────────────────────
  {
    path: "solutions/courier/mailroom",
    title: "Mailroom Request Management",
    description:
      "Give your mailroom a single queue for parcels, envelopes and internal deliveries, with first-accept routing, SLA timers and fair credit for every handoff.",
    h1: "A mailroom queue that runs itself",
    eyebrow: "Mailroom",
    lead:
      "Mailroom staff juggle inbound parcels, outbound documents and desk deliveries, usually from three different places. ZapBuzzer puts them in one queue, shared by the team and timed from the first tap.",
    keywords: ["mailroom request management", "mailroom software for offices", "internal mail delivery", "mailroom staff queue"],
    heroVisual: "request-dashboard",
    sections: [
      {
        type: "problem-solution",
        heading: "The mailroom’s real problem is the inbox, not the parcels",
        problem: {
          title: "Requests from everywhere",
          points: [
            "Calls from reception, messages in a WhatsApp group, and people walking in.",
            "No shared view of what is pending, so two people chase the same envelope.",
            "Good work goes unnoticed because nothing is attributed.",
          ],
        },
        solution: {
          title: "One shared queue",
          points: [
            "Every request arrives as a buzz in the same queue.",
            "First to accept owns it, and it leaves everyone else’s list.",
            "Each completed job is credited to the person who did it, with a rating.",
          ],
        },
      },
      {
        type: "visual",
        visual: "request-dashboard",
        heading: "The whole mailroom on one screen",
        body: "The dashboard shows each open request with its status, whether that is buzzed, accepted, started or delivered, along with who owns it and how long it has been open. A supervisor can see at a glance what is stuck.",
      },
      {
        type: "features",
        heading: "Built for how mailrooms work",
        items: [
          { title: "Team-based routing", body: "Requests go to the mailroom team as a whole, so shift changes and leave days don’t break anything." },
          { title: "Statuses that mean something", body: "Accepted means someone owns it. Started means it is moving. Delivered means it reached the person." },
          { title: "Photo on delivery", body: "Attach a photo when you mark a request delivered, which is useful for parcels left in a cabin." },
          { title: "Fair attribution", body: "Scorecards show who handled how many requests and how they were rated. This is people-first, not another nag tool." },
        ],
      },
      {
        type: "scenario",
        heading: "End-of-day dispatch rush",
        persona: "Farah, Mailroom",
        setting: "4:30 pm. The last courier pickup is at 5:15 and six people need things sent.",
        timeline: [
          { time: "16:30", event: "Six Outgoing Dispatch requests arrive from different floors, each with a note on what is going and where." },
          { time: "16:31", event: "Farah accepts four and Sunil accepts two. The queue shows exactly who has what." },
          { time: "16:50", event: "All six packets are at the dispatch desk, each marked delivered with the time." },
          { time: "17:15", event: "The courier collects everything. Nobody called to ask ‘did mine go?’" },
        ],
        outcome: "Six senders tracked their own packets in the app instead of calling the mailroom.",
      },
      {
        type: "metrics",
        heading: "Numbers a mailroom lead can watch",
        items: [
          { metric: "Accept time", meaning: "How long a request waits before someone takes it." },
          { metric: "On-time %", meaning: "Share of requests delivered within their SLA." },
          { metric: "Rating", meaning: "The 1–5★ score from the person who asked." },
          { metric: "Peak hours", meaning: "When courier work bunches up, so you can plan staffing." },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Plan note",
        body: "Basic request history works on Free. Full analytics, scorecards, audit logs and reports are part of Pro.",
      },
      {
        type: "audience",
        heading: "Who uses the mailroom queue, and for what",
        items: [
          { role: "Mailroom staff", benefit: "One list of open jobs on the phone, an Accept button, and credit on the scorecard for every parcel they move." },
          { role: "Mailroom lead", benefit: "Sees which jobs are unclaimed or running late without walking the floor, and can step in before escalation does." },
          { role: "Employees", benefit: "Ask for a parcel to be brought up or a packet to be sent out, then see a name and ETA instead of guessing." },
          { role: "Office owner", benefit: "Gets a mailroom that can be measured, with role-based permissions and an audit log on every action." },
        ],
      },
      {
        type: "checklist",
        heading: "Moving a mailroom off WhatsApp in a week",
        intro: "Most teams switch over gradually. This order keeps the old group quiet without losing anything in between.",
        items: [
          "Day 1: list every kind of job the mailroom does today and turn each into a catalogue item.",
          "Day 1: add every mailroom staff member and install the mobile app on their phones.",
          "Day 2: give reception the web app on the front-desk screen and ask them to buzz instead of calling.",
          "Day 3: post one message in the old WhatsApp group pointing people to the new catalogue items.",
          "Day 5: check which requests were accepted slowly and adjust deadlines where they were unrealistic.",
          "Day 7: mute or archive the old group once requests stop arriving there.",
        ],
      },
    ],
    faqs: [
      { q: "Can we run more than one mailroom?", a: "Yes. Multi-location is part of Pro, so each office or building can route requests to its own team." },
      { q: "Does every request need a mailroom staff account?", a: "Staff who accept requests need to be in your workspace. Free covers up to 10 staff, and Pro has unlimited staff at ₹99 per seat per month." },
      { q: "How do we stop two people doing the same job?", a: "First accept wins. Once someone accepts, the request is theirs and nobody else is asked to do it." },
      { q: "Can mailroom staff work from their phones?", a: "Yes. The mobile app lets them accept, start and deliver on the move, and the Android app rings even when the phone is on silent." },
      { q: "Can the mailroom handle requests that are not about couriers?", a: "Yes. Many mailrooms also store stationery, move boxes or run small errands. Add those as catalogue items routed to the same team and they share one queue." },
    ],
    related: ["solutions/courier", "solutions/courier/mailroom-analytics", "solutions/courier/outgoing-workflow", "features/request-management", "analytics/staff", "pricing"],
    cta: { title: "Give your mailroom one queue", body: "Set it up in an afternoon. Sign up free, add your mailroom team and start routing." },
  },

  // ───────────────────────────── RECEPTION ─────────────────────────────
  {
    path: "solutions/courier/reception",
    title: "Reception Requests Without Phone Tag",
    description:
      "Reception raises couriers, visitor packages and front-desk handoffs with one tap. The right team is pinged at once and reception sees who is coming.",
    h1: "The front desk, without the phone",
    eyebrow: "Reception",
    lead:
      "Reception is where office requests start: a courier, a visitor’s package, a key left for someone. ZapBuzzer gives the front desk one tap for each, and a clear answer to ‘who’s coming?’",
    keywords: ["reception request app", "front desk requests", "reception courier handling", "receptionist tools"],
    heroVisual: "mobile-app",
    sections: [
      {
        type: "prose",
        heading: "Reception is a dispatcher, whether you planned it or not",
        paragraphs: [
          "Receptionists spend a large part of the day passing messages along: courier at the gate, guest wants water, package for the CEO, projector delivery for Conference Room B. Each one usually means a phone call, and a phone call means waiting for someone to pick up.",
          "With ZapBuzzer, the front desk raises a request to the right team, whether that is mailroom, pantry, IT or facilities, and goes back to the next visitor. The team sorts out who takes it, and reception watches the status instead of chasing it.",
        ],
      },
      {
        type: "visual",
        visual: "mobile-app",
        heading: "A request grid built for the front desk",
        body: "The employee app shows your catalogue as a grid of large buttons. Reception can keep Courier Pickup, Visitor Package and Guest Refreshments one tap away on a tablet or phone.",
      },
      {
        type: "table",
        heading: "Typical reception requests and where they go",
        headers: ["Request", "Routed to", "Usual note"],
        rows: [
          ["Courier pickup", "Mailroom", "Courier name, packages, gate"],
          ["Visitor package", "Mailroom", "Recipient name and floor"],
          ["Guest refreshments", "Pantry", "Number of guests, meeting room"],
          ["Meeting room not ready", "Facilities", "Room name, what is wrong"],
          ["Security needed", "Security team", "Location and reason"],
        ],
      },
      {
        type: "scenario",
        heading: "A client walks in early",
        persona: "Neha, Reception",
        setting: "10:50 am. A client arrives for an 11:00 board meeting while a courier waits at the gate.",
        timeline: [
          { time: "10:50", event: "Neha taps Guest Refreshments for Conference Room B and Courier Pickup for Gate 1." },
          { time: "10:51", event: "Raj in the pantry accepts the refreshments and Sunil in the mailroom accepts the pickup." },
          { time: "10:57", event: "Tea is in Conference Room B and the parcel is signed for." },
        ],
        outcome: "Neha stayed at her desk with the client and made no calls.",
      },
      {
        type: "features",
        heading: "Why reception teams like it",
        items: [
          { title: "Names, not promises", body: "See who accepted, with photo, so you can tell visitors exactly who is coming." },
          { title: "No more chasing", body: "Notifications repeat until accepted, and late requests escalate to a manager on their own." },
          { title: "A record for disputes", body: "Every handoff is audit-logged, which helps when someone says a parcel never arrived." },
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Summon security in one tap",
        body: "The mobile app has one-tap summon for staff or security and can raise an emergency, which is useful for a front desk that is often staffed by one person.",
      },
      {
        type: "comparison",
        heading: "The front desk on the intercom vs. on ZapBuzzer",
        columns: ["Intercom and mobile calls", "ZapBuzzer"],
        rows: [
          { label: "Finding someone", a: "Call extensions until one picks up.", b: "One tap reaches the whole team." },
          { label: "Telling the visitor", a: "“Someone is coming, I think.”", b: "The name and photo of the person who accepted." },
          { label: "When nobody answers", a: "Try again, then walk over.", b: "Pings repeat, then the request escalates." },
          { label: "End of the day", a: "No record of what was asked.", b: "Every request timed and logged." },
        ],
      },
      {
        type: "prose",
        heading: "Reception’s own workload becomes visible",
        paragraphs: [
          "Front-desk work is easy to undercount because most of it happens on the phone. When every courier, refreshment and help request is raised through ZapBuzzer, the count shows up in analytics, and an office manager can see that reception raised dozens of requests on a Monday rather than hearing that it was ‘a busy day’.",
          "That record also helps hand-overs. A receptionist starting the afternoon shift can look at open requests and see what is still with the mailroom or facilities, instead of relying on a note stuck to the keyboard.",
        ],
      },
    ],
    faqs: [
      { q: "Can reception raise requests for any team?", a: "Yes. Reception sees the catalogue items your workspace sets up and can raise any of them. Each item routes to its team." },
      { q: "Does reception need the mobile app?", a: "No. The web app works well on a front-desk computer or tablet. The mobile app is useful if reception moves around." },
      { q: "How does reception know a request was handled?", a: "The status changes from requested to accepted, started and delivered, each with the staff member’s name. Reception can also rate the job." },
      { q: "Is this a visitor management system?", a: "No. ZapBuzzer handles internal requests such as couriers, refreshments and help. It does not check in visitors or print badges." },
      { q: "Can reception see requests it did not raise?", a: "What each person can see is controlled by roles and permissions in your workspace. Many offices let reception view open requests so the front desk can answer ‘is someone on it?’ for anyone who asks." },
      { q: "Does reception need a paid plan?", a: "No. Free covers up to 10 staff in one location with email notifications. Telegram and WhatsApp pings, escalation chains and multi-location come with Pro." },
    ],
    related: ["solutions/courier", "solutions/courier/reception-workflow", "use-cases/reception", "solutions/courier/pickup", "features/one-tap-requests", "free-trial"],
    cta: { title: "Give your front desk one tap", body: "Free for up to 10 staff on one location. Sign up and add your reception team today." },
  },

  // ───────────────────────────── DELIVERY REQUESTS ─────────────────────────────
  {
    path: "solutions/courier/delivery-requests",
    title: "Internal Delivery Requests to Desks and Cabins",
    description:
      "Get parcels, documents and packages from reception or the mailroom to the right desk. Assigned, timed and confirmed with a photo on delivery.",
    h1: "From the mailroom to your desk, with proof",
    eyebrow: "Delivery requests",
    lead:
      "The last fifty metres are where parcels get lost: on a reception counter, a mailroom shelf or the wrong floor. ZapBuzzer turns each internal delivery into a request with an owner, an ETA and a delivered status.",
    keywords: ["internal parcel delivery", "office desk delivery", "mailroom to desk delivery", "delivery confirmation photo"],
    heroVisual: "delivery",
    sections: [
      {
        type: "prose",
        heading: "‘It came in yesterday’ is not a location",
        paragraphs: [
          "When a parcel arrives, the courier’s job ends at reception. Getting it to the person who needs it, whether a laptop for a new joiner, a cheque for accounts or samples for the sales team, is an internal job that nobody tracks. That is how a parcel spends two days on a shelf.",
          "A delivery request gives that last leg an owner. The mailroom or reception raises it, the right person accepts, and the recipient sees it coming. When it is handed over, it is marked delivered, optionally with a photo, and the recipient rates it.",
        ],
      },
      {
        type: "workflow",
        heading: "How an internal delivery runs",
        steps: [
          { title: "Raise", body: "Reception or the mailroom raises a delivery request with the recipient and destination, for example ‘Laptop box for Tanvi, Design, 3rd floor’." },
          { title: "Accept", body: "The first free team member accepts it and the request now has an owner." },
          { title: "Start with an ETA", body: "They mark it started and give an ETA, so the recipient knows when to expect it." },
          { title: "Deliver with proof", body: "Marked delivered with an optional photo of the parcel at the desk." },
          { title: "Rate", body: "The person who asked rates the job from 1 to 5 stars." },
        ],
      },
      {
        type: "visual",
        visual: "delivery",
        heading: "Delivered means delivered",
        body: "When staff mark a request delivered they can attach a photo, and the requester is prompted to rate it. If a parcel is left in an empty cabin, the photo shows where.",
      },
      {
        type: "scenario",
        heading: "A new joiner’s laptop",
        persona: "Tanvi, Design",
        setting: "Her new laptop arrives at reception while she is in a workshop on another floor.",
        timeline: [
          { time: "12:05", event: "Neha raises a delivery request: ‘Laptop box for Tanvi, leave at desk 3-14’." },
          { time: "12:06", event: "Sunil accepts and marks it started with a 10-minute ETA." },
          { time: "12:13", event: "Delivered with a photo of the box on desk 3-14." },
          { time: "13:00", event: "Tanvi returns, finds it where the photo shows and rates the job 5★." },
        ],
        outcome: "No ‘has my laptop come?’ calls and no box left at reception overnight.",
      },
      {
        type: "comparison",
        heading: "Untracked vs tracked internal delivery",
        columns: ["Shelf and hope", "Delivery request"],
        rows: [
          { label: "Owner", a: "Whoever notices", b: "Named staff member" },
          { label: "Recipient knows", a: "When they ask", b: "Live status and ETA" },
          { label: "Proof", a: "None", b: "Delivered status and optional photo" },
          { label: "If late", a: "Nobody notices", b: "SLA timer escalates" },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Escalation on Pro",
        body: "Each request runs against an SLA, and a manager is alerted automatically when one runs late. A multi-step escalation chain is part of Pro.",
      },
      {
        type: "table",
        heading: "What to deliver, and what to note",
        intro: "Different items need different details. A consistent note makes the job quick for whoever accepts it.",
        headers: ["Item", "What to put in the note", "Worth a photo?"],
        rows: [
          ["Laptop or equipment box", "Recipient, team, floor and whether IT needs to see it first", "Yes, at the desk"],
          ["Signed documents", "Recipient and whether it must be handed over in person", "Only if left in a cabin"],
          ["Personal parcel", "Recipient and floor", "Yes, if the person is away"],
          ["Boxes for an event room", "Room name, count and the time they are needed", "Yes, of the stacked boxes"],
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Ratings come from the requester",
        body: "The person who raised the delivery request is the one who rates it. If reception raises it on someone’s behalf, agree whether reception rates after hearing back, or whether recipients raise their own ‘Bring my parcel up’ request instead.",
      },
      {
        type: "audience",
        heading: "Who relies on internal delivery",
        items: [
          { role: "New joiners", benefit: "Equipment reaches the right desk on day one instead of waiting at reception." },
          { role: "Accounts", benefit: "Cheques and signed documents are handed over with a timestamp and a named carrier." },
          { role: "Event organisers", benefit: "Boxes reach the event room before the session, with a photo to confirm the count." },
        ],
      },
    ],
    faqs: [
      { q: "Can a delivery request be raised from a phone?", a: "Yes. Reception or mailroom staff can raise, accept and update delivery requests from the mobile app, including attaching the delivery photo." },
      { q: "Can employees request a delivery themselves?", a: "Yes. If you add a catalogue item such as ‘Bring my parcel up’, employees can ask the mailroom to deliver anything waiting for them." },
      { q: "Is the photo mandatory?", a: "A photo can be attached when a request is delivered. How strictly your team uses it is up to you." },
      { q: "What if the recipient is not at their desk?", a: "Staff can leave the item and attach a photo showing where it is. The requester sees the delivered status and the photo." },
      { q: "Does this cover deliveries between offices?", a: "Each request is handled by a team in your workspace. With multi-location on Pro, each office can run its own deliveries." },
    ],
    related: ["solutions/courier", "solutions/courier/incoming-workflow", "features/delivery-confirmation", "features/eta-tracking", "solutions/courier/tracking", "pricing/pro"],
    cta: { title: "Close the last fifty metres", body: "Try delivery requests free for 14 days. No credit card required." },
  },

  // ───────────────────────────── INCOMING WORKFLOW ─────────────────────────────
  {
    path: "solutions/courier/incoming-workflow",
    title: "Incoming Courier Workflow, Step by Step",
    description:
      "How an incoming parcel moves from the gate to the recipient in ZapBuzzer: logged at reception, accepted by the mailroom, delivered and rated.",
    h1: "Incoming parcels, from the gate to the right hands",
    eyebrow: "Workflow",
    lead:
      "Here is the inbound path in ZapBuzzer, from the courier arriving at the gate to the parcel reaching its owner, and where the timer, escalation and audit log come in.",
    keywords: ["incoming courier workflow", "inbound parcel process", "office mail receiving", "parcel receiving steps"],
    heroVisual: "request-timeline",
    sections: [
      {
        type: "workflow",
        heading: "The inbound path",
        steps: [
          { title: "Courier arrives", body: "The delivery agent reaches the gate or reception with one or more parcels." },
          { title: "Reception buzzes", body: "Reception taps Courier Pickup with the courier name, package count and recipient, if known." },
          { title: "Mailroom accepts", body: "The team is pinged at once and the first to accept walks to the gate. Reception sees who it is." },
          { title: "Received and started", body: "The staff member signs for the parcel, marks the request started and sets an ETA to the recipient." },
          { title: "Delivered", body: "The parcel reaches the recipient’s desk or cabin and is marked delivered, with an optional photo." },
          { title: "Rated and logged", body: "The requester rates it and every step stays in the audit trail." },
        ],
      },
      {
        type: "visual",
        visual: "request-timeline",
        heading: "Every step has a timestamp",
        body: "The request timeline shows when the parcel was buzzed, accepted, started and delivered. If someone asks how long it took a parcel to get from the gate to the 4th floor, the answer is on the request.",
      },
      {
        type: "prose",
        heading: "Where incoming parcels used to get stuck",
        paragraphs: [
          "Two points usually break: the gap between the agent arriving and someone coming to sign, and the gap between signing and handing over. The first leaves the agent waiting. The second leaves the parcel on a shelf.",
          "In this workflow the first gap is closed by the team-wide ping that repeats until someone accepts. The second is closed because the request stays open, and its SLA timer keeps running, until someone marks it delivered.",
        ],
      },
      {
        type: "scenario",
        heading: "A legal notice that cannot wait",
        persona: "Deepak, Admin Head",
        setting: "A registered legal notice arrives for the company secretary at 2:10 pm.",
        timeline: [
          { time: "14:10", event: "Neha buzzes Courier Pickup with the note ‘Registered post, legal, for Company Secretary’." },
          { time: "14:11", event: "Sunil accepts and signs for it at the gate." },
          { time: "14:30", event: "The company secretary is in a meeting. The request is still open and its SLA timer is close to running out." },
          { time: "14:35", event: "Past SLA, the request auto-escalates to Deepak, who arranges for it to be handed over after the meeting." },
          { time: "15:05", event: "Delivered and logged." },
        ],
        outcome: "Deepak can later show exactly when the notice arrived and when it was handed over.",
      },
      {
        type: "checklist",
        heading: "Setting up an incoming workflow",
        items: [
          "Create a Courier Pickup catalogue item routed to the mailroom team",
          "Add mailroom staff to the team and install the mobile app on their phones",
          "Agree what reception writes in the note",
          "Decide what ‘delivered’ means, for example handed over or left at the desk with a photo",
          "Set a sensible SLA for incoming parcels",
        ],
      },
      {
        type: "table",
        heading: "Who does what on the inbound path",
        headers: ["Step", "Owner", "What they see"],
        rows: [
          ["Agent at the gate", "Reception", "Who accepted and is coming to sign"],
          ["Signing and collecting", "Mailroom staff member", "The note with courier, count and recipient"],
          ["Carrying to the floor", "Same staff member", "Their own ETA and the SLA timer"],
          ["Overdue parcel", "Manager or admin head", "The escalated request and its history"],
          ["Receiving", "Recipient or requester", "Delivered status, optional photo, rating prompt"],
        ],
      },
      {
        type: "callout",
        tone: "warning",
        title: "Valuable or confidential items",
        body: "For items such as legal notices, cheques or equipment, write ‘hand over in person’ in the note and treat delivered as a handover, not a drop at the desk. The audit trail then shows exactly who carried it and when.",
      },
    ],
    faqs: [
      { q: "Can we tell how long parcels wait before reaching people?", a: "Yes. The timeline records when each request was accepted, started and delivered, so the gap between the gate and the desk is visible per parcel and, on Pro, in analytics." },
      { q: "Should incoming and outgoing be separate requests?", a: "Usually, yes. They go to the same team but have different notes and different deadlines, so separate catalogue items keep reporting clear." },
      { q: "What SLA should incoming parcels have?", a: "That depends on your office. Many teams pick a short deadline for the gate step because someone is waiting. ZapBuzzer escalates whatever you set once it runs out." },
      { q: "Can one request cover several parcels?", a: "Yes. Put the count in the note. If parcels go to different people, separate delivery requests make each handoff traceable." },
      { q: "What if the recipient is not in today?", a: "Staff can leave a note on the request and mark it delivered when it is handed over, or follow your own rule such as leaving it at the desk with a photo." },
    ],
    related: ["solutions/courier", "solutions/courier/outgoing-workflow", "solutions/courier/delivery-requests", "workflows/courier-pickup", "sla/automatic-escalation", "demo"],
    cta: { title: "Map your inbound path in ZapBuzzer", body: "Book a demo or explore the read-only demo workspace to see a request timeline end to end." },
  },

  // ───────────────────────────── OUTGOING WORKFLOW ─────────────────────────────
  {
    path: "solutions/courier/outgoing-workflow",
    title: "Outgoing Courier & Dispatch Workflow",
    description:
      "Send documents and parcels out on time: employees buzz a dispatch request, the mailroom collects it, and every handoff to the courier is logged.",
    h1: "Get it out the door before the courier leaves",
    eyebrow: "Workflow",
    lead:
      "Outgoing couriers fail quietly: a contract still on a desk after the last pickup. With ZapBuzzer, the sender buzzes the mailroom, someone collects it from their seat, and the sender can see it reach the dispatch desk.",
    keywords: ["outgoing courier workflow", "document dispatch office", "outbound parcel process", "courier dispatch request"],
    heroVisual: "acceptance",
    sections: [
      {
        type: "workflow",
        heading: "The outbound path",
        steps: [
          { title: "Sender buzzes", body: "The employee taps Outgoing Dispatch and notes what is going, where, and how urgent it is." },
          { title: "Mailroom accepts", body: "The first free person accepts it and the sender sees their name and photo." },
          { title: "Collected from the desk", body: "The staff member collects the packet, marks it started and gives an ETA for the dispatch desk." },
          { title: "Handed to the courier", body: "Marked delivered once it is with the courier or at the dispatch point, with an optional photo." },
          { title: "Rated", body: "The sender rates the job and the request is closed with a full trail." },
        ],
      },
      {
        type: "visual",
        visual: "acceptance",
        heading: "First accept wins, even in the 4:45 pm rush",
        body: "When five people want things sent before the last pickup, everyone on the mailroom team sees the requests together. Each one is owned by whoever accepts first, so nothing is collected twice and nothing is forgotten.",
      },
      {
        type: "scenario",
        heading: "A signed contract before the last pickup",
        persona: "Kavya, Sales Lead",
        setting: "4:40 pm. A signed contract must go to a client in Mumbai with the 5:15 courier.",
        timeline: [
          { time: "16:40", event: "Kavya taps Outgoing Dispatch: ‘Signed contract, Mumbai, must go today’." },
          { time: "16:41", event: "Farah accepts and sets a 5-minute ETA to Kavya’s desk." },
          { time: "16:46", event: "Collected and marked started." },
          { time: "17:15", event: "Handed to the courier and marked delivered with a photo of the packet at dispatch." },
        ],
        outcome: "Kavya saw it leave without walking down or calling, and the handoff is on record.",
      },
      {
        type: "problem-solution",
        heading: "Why outbound is different from inbound",
        problem: {
          title: "Outbound risks",
          points: [
            "A fixed courier cut-off, so a late collection means a missed day.",
            "The sender is busy and assumes someone else is handling it.",
            "No record of when the packet actually left.",
          ],
        },
        solution: {
          title: "How ZapBuzzer handles them",
          points: [
            "An SLA timer on every dispatch request, with escalation if it runs late.",
            "A named owner from the moment of accept.",
            "Delivered status and timestamps on every packet.",
          ],
        },
      },
      {
        type: "callout",
        tone: "tip",
        title: "Use the note for the cut-off",
        body: "Writing ‘must go with the 5:15 pickup’ in the note tells the mailroom team the real deadline at a glance.",
      },
      {
        type: "checklist",
        heading: "What a good dispatch note includes",
        intro: "The mailroom collects from your desk, so the note has to stand in for a conversation.",
        items: [
          "What is going: ‘signed contract, 1 envelope’ or ‘2 sample boxes’",
          "Where it is going, at least the city and recipient name",
          "The pickup it must make, such as the 5:15 courier",
          "Where to collect it, if not at your desk",
          "Whether it is sealed and ready, or still needs packing",
        ],
      },
      {
        type: "metrics",
        heading: "Outbound numbers worth knowing",
        intro: "Dispatch requests are timed like any other, which makes a few outbound-specific measures easy to read.",
        items: [
          { metric: "Requests after the cut-off window", meaning: "How many senders buzz too close to the last pickup. A rising count is a reminder to send earlier." },
          { metric: "Desk-to-dispatch time", meaning: "From accepted to delivered at the dispatch point. Shows whether collection rounds keep up in the afternoon." },
          { metric: "Escalated dispatches", meaning: "Packets that went past SLA, which usually means a missed courier day." },
          { metric: "Dispatch volume by team", meaning: "Which departments send most, useful when planning the mailroom’s afternoon." },
        ],
      },
      {
        type: "prose",
        heading: "Batching the afternoon rush",
        paragraphs: [
          "Outbound traffic tends to bunch up late in the day. When several dispatch requests come in from the same floor, one mailroom staff member can accept them all and collect in a single round, with each request still closed separately so every sender sees their own packet handed over.",
          "If you want to reduce the rush, an internal cut-off helps: ask senders to buzz at least 30 minutes before the courier arrives. The SLA on the Outgoing Dispatch item can reflect that, so late requests are visible as late rather than silently squeezed in.",
        ],
      },
    ],
    faqs: [
      { q: "Can one person collect several dispatch requests in one round?", a: "Yes. They can accept several requests and work through them together. Each request is still marked delivered on its own, so every sender gets a status." },
      { q: "Does ZapBuzzer book the courier?", a: "No. ZapBuzzer handles the internal steps of collecting, carrying and handing over. Your office’s courier arrangement stays as it is." },
      { q: "Can the sender add the tracking number later?", a: "Staff and requesters can use the request note to record details such as a courier reference, so it stays with the request history." },
      { q: "What happens if dispatch runs late?", a: "Each request has an SLA. If it runs over, it auto-escalates to a manager, and on Pro it follows your escalation chain." },
      { q: "Can we see how many items go out each day?", a: "Yes. Analytics show request volume by type and time of day, with full analytics and reports on Pro." },
    ],
    related: ["solutions/courier", "solutions/courier/incoming-workflow", "solutions/courier/mailroom", "sla", "use-cases/sales", "pricing"],
    cta: { title: "Never miss the last pickup", body: "Add an Outgoing Dispatch item on a free trial and let your senders track their own packets." },
  },

  // ───────────────────────────── TRACKING ─────────────────────────────
  {
    path: "solutions/courier/tracking",
    title: "Courier Tracking Inside Your Office",
    description:
      "Track every courier request inside your office: who accepted it, when it started, the ETA and delivery. Live status for senders, recipients and admins.",
    h1: "Know where every parcel is inside the building",
    eyebrow: "Tracking",
    lead:
      "Courier companies track the parcel up to your gate. ZapBuzzer tracks what happens after that: who took it, when, and whether it has reached the person yet.",
    keywords: ["internal courier tracking", "office parcel tracking", "mailroom status tracking", "parcel status inside office"],
    heroVisual: "request-timeline",
    sections: [
      {
        type: "prose",
        heading: "The blind spot between the gate and the desk",
        paragraphs: [
          "External tracking ends with ‘Delivered’ the moment reception signs. For the person waiting, that is often when the confusion starts. Is it at reception, in the mailroom or already on their desk?",
          "Every courier request in ZapBuzzer carries a live status. The requester, the recipient named in the note and admins all see the same thing: buzzed, accepted by Sunil, started with ETA 10 minutes, delivered at 3:52 pm.",
        ],
      },
      {
        type: "visual",
        visual: "request-timeline",
        heading: "One timeline per parcel",
        body: "Each request shows its full path with timestamps and names. Updates happen in real time, so there is no need to refresh or ask.",
        points: ["Buzzed, accepted, started, delivered and rated", "Name and photo of the person handling it", "ETA once started"],
      },
      {
        type: "table",
        heading: "What each status tells you",
        headers: ["Status", "Meaning for a courier request"],
        rows: [
          ["Buzzed", "Reception or the sender has raised it and the mailroom is being pinged"],
          ["Accepted", "A named person owns it and is on the way"],
          ["Started", "The parcel is in hand, with an ETA to the destination"],
          ["Delivered", "Handed over or left at the desk, optionally with a photo"],
          ["Rated", "The requester has scored the job from 1 to 5 stars"],
        ],
      },
      {
        type: "scenario",
        heading: "‘Has my parcel come?’, answered without a call",
        persona: "Om, Engineer",
        setting: "Om is expecting a replacement keyboard and keeps checking with reception.",
        timeline: [
          { time: "11:02", event: "Reception logs the parcel and the request shows Om’s name in the note." },
          { time: "11:03", event: "Accepted by Farah, visible to everyone with access to the request." },
          { time: "11:10", event: "Started, ETA 5 minutes." },
          { time: "11:14", event: "Delivered with a photo at Om’s desk." },
        ],
        outcome: "Reception answered zero ‘has it come?’ calls.",
      },
      {
        type: "features",
        heading: "Tracking features that matter for couriers",
        items: [
          { title: "Real-time status", body: "Statuses update live on web and mobile." },
          { title: "Every request timed", body: "Accept time and delivery time are recorded automatically." },
          { title: "History", body: "30 days of request history on Free, with longer records, audit logs and reports on Pro." },
        ],
      },
      {
        type: "comparison",
        heading: "Two kinds of tracking, side by side",
        intro: "They answer different questions, and an office needs both.",
        columns: ["Courier company tracking", "ZapBuzzer tracking"],
        rows: [
          { label: "Covers", a: "Sender to your gate", b: "Your gate to the person’s desk, and desk to dispatch" },
          { label: "Ends at", a: "‘Delivered’ when reception signs", b: "Delivered and rated inside the office" },
          { label: "Names", a: "The delivery agent", b: "The staff member who accepted the request" },
          { label: "Who updates it", a: "The courier company", b: "Your own team, from the app" },
          { label: "Proof", a: "Signature at the gate", b: "Timestamps and an optional photo at the desk" },
        ],
      },
      {
        type: "audience",
        heading: "Who checks the status, and why",
        items: [
          { role: "Recipient", benefit: "Knows whether to walk down or wait, and where the parcel was left if they were away." },
          { role: "Sender of an outgoing packet", benefit: "Sees it collected and handed over without calling the mailroom." },
          { role: "Reception", benefit: "Answers ‘has it come?’ by pointing to the request instead of searching shelves." },
          { role: "Admin head", benefit: "Spots requests that are stuck in started for too long before anyone complains." },
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Name the recipient the same way every time",
        body: "Tracking only helps if people can find their parcel. Agree a note format such as ‘Name, team, floor’ so a search or a glance at the queue turns it up straight away.",
      },
      {
        type: "prose",
        heading: "What ‘started’ is really telling you",
        paragraphs: [
          "Most internal parcel questions are about the middle of the journey. Accepted means someone owns it. Started means the parcel is physically in their hands, and the ETA is their own estimate of when it will arrive. A request that sits in started far longer than its ETA is the one to look at.",
          "Because every step is timed, the gap is visible to everyone with access rather than discovered at the end of the day. If the SLA runs out first, the request escalates on its own.",
        ],
      },
    ],
    faqs: [
      { q: "Can I record the courier’s tracking number on the request?", a: "Yes, put it in the note. ZapBuzzer doesn’t connect to courier companies’ systems, but keeping the reference on the request means it stays with the internal history." },
      { q: "Does this replace the courier company’s tracking?", a: "No. Use the courier’s tracking until the parcel reaches your office. ZapBuzzer covers the internal journey after that." },
      { q: "Can the recipient see the status if reception raised it?", a: "Reception can name the recipient in the note. How widely a request is visible depends on your roles and permissions." },
      { q: "Is tracking available on the phone?", a: "Yes. The mobile app shows live request status, and staff can accept and update requests from it." },
      { q: "How long is courier history kept?", a: "The Free plan shows the last 30 days. Pro adds audit logs and reports for longer-term records." },
    ],
    related: ["solutions/courier", "features/request-tracking", "features/real-time-updates", "solutions/courier/delivery-requests", "mobile-app/request-tracking", "free-trial"],
    cta: { title: "See every parcel’s last fifty metres", body: "Start free and track your first courier request today." },
  },

  // ───────────────────────────── RECEPTION WORKFLOW ─────────────────────────────
  {
    path: "solutions/courier/reception-workflow",
    title: "Reception Workflow for Busy Front Desks",
    description:
      "A practical front-desk routine in ZapBuzzer: triage what arrives, buzz the right team, watch status and close the loop without picking up the phone.",
    h1: "A front-desk routine that doesn’t depend on who answers",
    eyebrow: "Workflow",
    lead:
      "This is a practical routine for receptionists using ZapBuzzer: what to buzz, where it goes and how to close the loop, whether one person is on the desk or three.",
    keywords: ["reception workflow", "front desk process", "receptionist routine", "front desk request routing"],
    heroVisual: "notification-flow",
    sections: [
      {
        type: "workflow",
        heading: "The front-desk loop",
        steps: [
          { title: "Triage", body: "Something arrives, whether a courier, a guest, a delivery or a problem. Decide which team it belongs to." },
          { title: "Buzz", body: "Tap the matching catalogue item and add a one-line note. It goes to the whole team." },
          { title: "Tell the person waiting", body: "As soon as someone accepts, you see their name and can tell the agent or guest who is coming." },
          { title: "Watch, don’t chase", body: "Status updates come to you. If nobody responds, repeat pings and escalation take over." },
          { title: "Close and rate", body: "When it is delivered, rate it. That rating feeds the staff scorecard." },
        ],
      },
      {
        type: "visual",
        visual: "notification-flow",
        heading: "One tap, every channel",
        body: "Each buzz from reception goes out to the team on the app and by email at once, and on Telegram and WhatsApp on Pro. Notifications repeat until someone accepts, so reception never needs to follow up by phone.",
      },
      {
        type: "scenario",
        heading: "Monday morning at the front desk",
        persona: "Neha, Reception",
        setting: "9:30–10:00 am, the busiest half-hour of the week.",
        timeline: [
          { time: "09:31", event: "Courier for HR: buzzes Courier Pickup and Sunil accepts in 20 seconds." },
          { time: "09:38", event: "Guest for Aarav: buzzes Coffee to Boss Cabin and Raj accepts." },
          { time: "09:45", event: "Projector in Conference Room B not working: buzzes IT and Priya accepts." },
          { time: "09:58", event: "All three delivered. Neha rates each one." },
        ],
        outcome: "Three teams engaged in thirty minutes with no extensions dialled.",
      },
      {
        type: "checklist",
        heading: "Front-desk setup checklist",
        items: [
          "Keep the reception catalogue to the requests you actually raise every week",
          "Use the same note format, for example what, how many, where",
          "Pin the web app on the front-desk screen",
          "Install the mobile app if reception steps away from the desk",
          "Agree with each team what SLA is reasonable for front-desk requests",
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Free for small front desks",
        body: "The Free plan supports one location and up to 10 staff with email notifications. Offices with several buildings or receptions use Pro for multi-location and Telegram and WhatsApp pings.",
      },
      {
        type: "table",
        heading: "Triage at a glance",
        intro: "Most of what lands at a front desk falls into a handful of buckets. Printing this next to the screen helps a relief receptionist on their first day.",
        headers: ["What arrives", "Buzz", "One-line note"],
        rows: [
          ["Courier agent with a parcel", "Courier Pickup", "Courier name, count, recipient"],
          ["Employee wants something sent out", "Outgoing Dispatch", "What, destination, pickup it must make"],
          ["Visitor for a meeting", "Pantry item to the meeting room", "Room, number of guests"],
          ["Something broken in a common area", "AC / Facilities or IT Help", "Room and what is wrong"],
          ["Urgent safety issue", "Your emergency or security item", "Exact location"],
        ],
      },
      {
        type: "comparison",
        heading: "Shift handover, before and after",
        intro: "The riskiest moment at reception is when one person hands over to the next.",
        columns: ["Verbal handover", "Handover in ZapBuzzer"],
        rows: [
          { label: "Open items", a: "‘I think the IT thing is sorted’", b: "Every open request is visible with its status" },
          { label: "Who is on it", a: "Remembered, or not", b: "Name and photo on each accepted request" },
          { label: "Overdue work", a: "Found when someone complains", b: "SLA timer shows it and escalation has already started" },
          { label: "What happened earlier", a: "Lost with the morning shift", b: "Request history and timestamps" },
        ],
      },
      {
        type: "prose",
        heading: "When the desk is empty for ten minutes",
        paragraphs: [
          "Receptionists take breaks, walk guests to rooms and sign for deliveries at the gate. A routine that only works while someone is sitting at the desk is fragile. Because requests are raised and tracked from the mobile app as well as the web app, Neha can buzz Courier Pickup from the lobby and see Sunil accept while she is still walking back.",
          "It also means the team, not the receptionist, owns the follow-up. Once a request is buzzed it keeps pinging the team until someone accepts, whether or not reception is watching the screen.",
        ],
      },
    ],
    faqs: [
      { q: "How should a relief receptionist learn the routine?", a: "Give them the triage table and a login. The catalogue does the routing, so the main skill is picking the right item and writing a clear one-line note." },
      { q: "What if reception is unsure which team a request belongs to?", a: "Keep catalogue names plain, such as ‘Courier Pickup’, ‘AC / Facilities’ or ‘IT Help’. Each item is already routed, so reception only picks the closest one." },
      { q: "Can two receptionists share the workload?", a: "Yes. Both can raise requests, and each request shows who raised it in the audit log." },
      { q: "Do teams get reception’s note?", a: "Yes. The note travels with the request to every channel the team is notified on." },
      { q: "What if reception is the one being asked to do something?", a: "Reception can be a team too. Employees can buzz reception for things like booking a cab or holding a parcel." },
    ],
    related: ["solutions/courier", "solutions/courier/reception", "use-cases/reception", "notifications/multi-channel", "features/request-catalog", "pricing/free"],
    cta: { title: "Try it at your front desk", body: "Sign up free, add Courier Pickup and two other items, and run Monday morning on it." },
  },

  // ───────────────────────────── MAILROOM ANALYTICS ─────────────────────────────
  {
    path: "solutions/courier/mailroom-analytics",
    title: "Mailroom Analytics & Courier Reports",
    description:
      "See courier volume by hour, accept and delivery times, on-time rates and staff ratings for your mailroom. Full analytics and scorecards on Pro.",
    h1: "What your mailroom data says about your office",
    eyebrow: "Analytics",
    lead:
      "Every courier request is timed from buzz to delivery. Put together, those timings show when the mailroom is busiest, who is carrying the load and where parcels wait.",
    keywords: ["mailroom analytics", "courier reports office", "mailroom performance metrics", "parcel handling analytics"],
    heroVisual: "analytics",
    sections: [
      {
        type: "visual",
        visual: "analytics",
        heading: "The mailroom at a glance",
        body: "KPI tiles for requests, accept time and on-time delivery sit above a chart of when the office buzzes most. Filter to courier requests to see the mailroom on its own.",
      },
      {
        type: "metrics",
        heading: "Metrics worth watching",
        intro: "All of these come from timestamps ZapBuzzer records anyway. Nobody has to fill in a spreadsheet.",
        items: [
          { metric: "Volume by hour", meaning: "When couriers arrive and dispatch requests pile up, which helps you plan breaks and shifts." },
          { metric: "Accept time", meaning: "How long a courier agent waits before someone owns the pickup." },
          { metric: "Delivery time", meaning: "Gate to desk. Long delivery times usually mean parcels sitting on a shelf." },
          { metric: "On-time %", meaning: "Share of courier requests finished within SLA." },
          { metric: "Escalations", meaning: "How often a request went past SLA and reached a manager." },
          { metric: "Rating", meaning: "Average stars from the people the mailroom serves." },
        ],
      },
      {
        type: "visual",
        visual: "scorecard",
        heading: "Scorecards that give credit",
        body: "Mailroom work is often invisible. Scorecards show each person’s handled requests, on-time rate and rating, so the person who carried the 4:45 pm rush gets the credit for it.",
      },
      {
        type: "scenario",
        heading: "Fixing the post-lunch backlog",
        persona: "Deepak, Admin Head",
        setting: "Deepak reviews a month of courier data.",
        timeline: [
          { time: "Week 1", event: "Analytics show most courier requests arrive between 2 and 4 pm, while one person covers lunch until 2:30." },
          { time: "Week 2", event: "On-time delivery for that window is lower than the rest of the day." },
          { time: "Week 3", event: "Deepak staggers lunch so two people are on from 1:45 pm." },
          { time: "Week 4", event: "Accept times in the afternoon window drop and escalations fall." },
        ],
        outcome: "A staffing change based on the office’s own data, not on whoever complained loudest.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Plan note",
        body: "Full analytics, scorecards, audit logs and reports are part of Pro at ₹99 per seat per month. Enterprise adds a REST API and webhooks for teams that want to move data into their own systems.",
      },
      {
        type: "table",
        heading: "From a question to a decision",
        intro: "Mailroom data is only useful if it changes something. These are common questions admin heads bring to the numbers, and what usually follows.",
        headers: ["Question", "Where to look", "Typical action"],
        rows: [
          ["Are couriers waiting at the gate?", "Accept time on courier pickup requests", "Add a second person to the team during peak arrival hours"],
          ["Are parcels sitting on shelves?", "Gap between started and delivered", "Agree a rule for parcels whose recipient is away"],
          ["Is dispatch beating the last pickup?", "On-time % for outgoing requests after 4 pm", "Ask senders to buzz earlier or move the internal cut-off"],
          ["Is one person carrying the team?", "Requests handled per person on the scorecard", "Rebalance shifts and recognise the load"],
          ["Is the SLA realistic?", "Escalation count per week", "Adjust the deadline or the staffing, not just the people"],
        ],
      },
      {
        type: "prose",
        heading: "Reading mailroom numbers fairly",
        paragraphs: [
          "Courier work is lumpy. A single afternoon delivery of thirty boxes for an event can drag the week’s average delivery time up without anyone doing a worse job. Look at volume next to timing before drawing conclusions, and compare like with like: incoming against incoming, dispatch against dispatch.",
          "Ratings need the same care. A parcel that arrived late from the courier company is not the mailroom’s fault, and requesters sometimes rate the whole experience. Use averages over a month rather than reacting to a single 2★ job, and read the notes on low-rated requests before talking to anyone.",
        ],
      },
      {
        type: "checklist",
        heading: "A 20-minute monthly mailroom review",
        items: [
          "Compare this month’s courier volume with last month’s, split into incoming and outgoing",
          "Check the busiest hour and whether staffing matched it",
          "List every escalated courier request and the reason in its notes",
          "Look at accept time for the gate step on its own",
          "Thank the people at the top of the scorecard, by name",
        ],
      },
    ],
    faqs: [
      { q: "How much data do I need before the numbers mean anything?", a: "A couple of weeks of normal courier traffic usually shows the daily pattern. A full month smooths out one-off spikes such as event deliveries or quarter-end dispatches." },
      { q: "Do analytics include the courier company’s transit times?", a: "No. ZapBuzzer only measures the internal steps it records, from the buzz to delivery inside your office. Transit times stay with your courier company." },
      { q: "Can I see analytics only for courier requests?", a: "Courier requests are separate catalogue items, so you can view them apart from pantry, print or IT work." },
      { q: "Are scorecards used to punish staff?", a: "ZapBuzzer is built to be people-first. Scorecards give fair attribution and credit, not just another nag tool. How you use them is up to your office." },
      { q: "Can I export mailroom reports?", a: "Reports are part of Pro. For pulling data into other systems, Enterprise includes a REST API and webhooks. Talk to us for details." },
      { q: "Does the Free plan include analytics?", a: "Free includes the mobile and web app with 30 days of history. Full analytics and scorecards come with Pro." },
    ],
    related: ["solutions/courier", "analytics", "analytics/staff", "solutions/courier/mailroom", "sla/reporting", "pricing/pro"],
    cta: { title: "See your mailroom’s numbers", body: "Run a 14-day free trial of Pro and look at the data after the first week." },
  },
];
