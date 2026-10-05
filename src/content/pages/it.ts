import type { PageContent } from "../types";

export const pages: PageContent[] = [
  // ───────────────────────────── HUB ─────────────────────────────
  {
    path: "solutions/it-support",
    title: "Office IT Support Requests for Everyday Fixes",
    description:
      "ZapBuzzer gives your IT desk one place for quick office asks: projector stuck, HDMI missing, meeting room not working. One tap, first accept owns it, every request timed.",
    h1: "The quick IT asks that never deserved a ticket, handled in seconds",
    eyebrow: "IT Support",
    lead:
      "Most IT requests in an office are small and urgent: the projector in Conference Room B won’t wake up, someone needs an HDMI cable before a client call, a mouse has died. ZapBuzzer turns each of those into one tap that pings the whole IT desk at once, and the first person free owns it.",
    keywords: [
      "office it support requests",
      "it desk request app",
      "projector support request",
      "hdmi request office",
      "meeting room it support",
      "internal it request tool",
    ],
    heroVisual: "staff-queue",
    sections: [
      {
        type: "prose",
        eyebrow: "Where ZapBuzzer fits",
        heading: "Built for the ask-in-the-corridor kind of IT work",
        paragraphs: [
          "Every office has two kinds of IT work. There is the long-running kind: laptop provisioning projects, network changes, licence audits, incidents that need investigation and a written root cause. Then there is the five-minute kind: “the projector isn’t showing my laptop”, “can someone bring a USB-C adapter to the 4th floor”, “the room display is frozen and the board meets at 11”. The second kind is where most daily friction lives, and it usually travels by phone call, WhatsApp message or a shout across the floor.",
          "ZapBuzzer is designed for that second kind. It is an internal-request tool, not a full IT service management suite. It won’t replace an ITSM platform if you run change management, asset databases or problem records. What it does is make the quick asks fast, visible and accountable: the employee taps IT, picks what they need, adds a note and a location, and the IT desk is pinged immediately. Many teams run both side by side, with ZapBuzzer catching the corridor requests that would never make it into a formal ticket anyway.",
          "The reason this matters is simple. Our founders started in a Pune office where IT tickets died in someone’s DMs. The request was made, nobody wrote it down, and the person who asked spent the meeting apologising to the client. Small IT requests have a short shelf life; if they aren’t picked up in minutes, they don’t matter any more.",
        ],
      },
      {
        type: "problem-solution",
        heading: "What changes for the IT desk",
        problem: {
          title: "Without a request tool",
          points: [
            "Asks arrive on personal phones, WhatsApp groups and in person, so nobody sees the full list.",
            "Two technicians walk to the same room while a third request goes unanswered.",
            "The person who asked has no idea whether anyone is coming.",
            "There is no record of how long fixes took or which rooms keep failing.",
          ],
        },
        solution: {
          title: "With ZapBuzzer",
          points: [
            "Every ask lands in one queue, routed to the IT team by category.",
            "Everyone on the team is pinged, and ownership goes to whoever taps Accept first, so nobody makes a duplicate walk.",
            "The requester sees the technician’s name, photo and ETA as soon as it’s accepted.",
            "Every request is timed from buzz to delivery, giving you real data on response times.",
          ],
        },
      },
      {
        type: "visual",
        visual: "staff-queue",
        heading: "The IT desk sees one live queue",
        body:
          "Technicians see open requests on their phone with what is needed, where, who asked and how long it has been waiting. Tapping Accept claims the job for them and tells everyone else it is taken.",
        points: [
          "Location travels with the request, e.g. Conference Room B, 3rd floor",
          "Notes carry details like “Mac, USB-C only” or “client arriving 10:30”",
          "Accepted jobs move out of everyone else’s list instantly",
        ],
      },
      {
        type: "features",
        heading: "Explore IT support in ZapBuzzer",
        intro:
          "Each part of the IT setup has its own page with more detail. Start with whichever problem is loudest in your office.",
        items: [
          {
            title: "IT request management",
            body: "How quick IT asks are captured, queued, accepted and closed, and how admins keep the catalogue tidy. See solutions/it-support/request-management.",
          },
          {
            title: "Projector support",
            body: "Getting someone to a stuck projector before the meeting starts, with ETA visible to the presenter. See solutions/it-support/projector-support.",
          },
          {
            title: "HDMI and adapter requests",
            body: "The most common two-minute IT ask in any office, made one tap. See solutions/it-support/hdmi-requests.",
          },
          {
            title: "Meeting room IT support",
            body: "Room-by-room help for displays, conferencing kits and cables before and during meetings. See solutions/it-support/meeting-room-support.",
          },
          {
            title: "Hardware requests",
            body: "Spare mice, keyboards, chargers, headsets and loaners requested and delivered to the desk. See solutions/it-support/hardware-requests.",
          },
          {
            title: "Software support requests",
            body: "Quick help with logins, installs and “it won’t open” moments, routed to whoever can sit with you. See solutions/it-support/software-requests.",
          },
          {
            title: "IT ticket routing",
            body: "How categories send each ask to the right IT team, and how first-accept-wins avoids double handling. See solutions/it-support/ticket-routing.",
          },
          {
            title: "IT SLA management",
            body: "Deadlines per request and automatic escalation to a manager when a fix runs late (Pro). See solutions/it-support/sla.",
          },
          {
            title: "IT support analytics",
            body: "Accept times, on-time rate, ratings and the rooms that buzz most (Pro). See solutions/it-support/analytics.",
          },
        ],
      },
      {
        type: "scenario",
        heading: "Tanvi’s missing HDMI cable",
        persona: "Tanvi, Design",
        setting: "Client review at 3:00 in Conference Room B; the cable in the room is gone.",
        timeline: [
          { time: "2:51", event: "Tanvi taps IT → HDMI cable, adds “Room B, MacBook, need USB-C adapter too” and taps Buzz." },
          { time: "2:51", event: "The IT desk is pinged on the app and, on Pro, on Telegram and WhatsApp too." },
          { time: "2:52", event: "Priya taps Accept. Tanvi sees Priya’s name, photo and a 3-minute ETA." },
          { time: "2:54", event: "Priya arrives with the cable and adapter and marks the request delivered." },
          { time: "2:55", event: "Tanvi rates the request 5★ and starts setting up her deck." },
        ],
        outcome:
          "Three minutes from tap to cable, no phone calls and no walking around looking for IT. The request is logged with timings for the monthly report.",
      },
      {
        type: "workflow",
        heading: "How an IT request moves",
        steps: [
          { title: "Tap", body: "The employee picks an IT item from the catalogue, adds a note and location, and taps Buzz." },
          { title: "Ping", body: "Everyone on the IT team is notified at once, and the ping repeats until someone accepts." },
          { title: "Accept", body: "The first technician to tap Accept owns it; the requester sees who is coming and when." },
          { title: "Fix", body: "The technician marks it started, then delivered, optionally attaching a photo." },
          { title: "Rate", body: "The requester rates 1–5★, and the timing feeds analytics and scorecards." },
        ],
      },
      {
        type: "comparison",
        heading: "ZapBuzzer or a full ITSM platform?",
        intro:
          "They solve different problems. Use this to decide where ZapBuzzer fits in your setup.",
        columns: ["Full ITSM platform", "ZapBuzzer"],
        rows: [
          { label: "Best for", a: "Incidents, changes, asset records, formal processes", b: "Quick in-office asks that need someone physically there in minutes" },
          { label: "Raising a request", a: "Form with fields, category trees and priority", b: "One tap from a catalogue, plus an optional note" },
          { label: "Who picks it up", a: "Assigned by a dispatcher or queue rules", b: "Whole team pinged; first to accept owns it" },
          { label: "Setup", a: "Often weeks, sometimes with consultants", b: "Live within one afternoon, with no setup fees" },
          { label: "Also covers", a: "IT only", b: "Pantry, print room, facilities and courier in the same app" },
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
        note: "Figures from ZapBuzzer pilot offices across all request types, not IT alone.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Which plan do I need?",
        body:
          "Free covers up to 10 staff in one location with email notifications and 30 days of history, which is enough to trial an IT desk. Telegram and WhatsApp pings, SLA deadlines with escalation chains, full analytics and audit reports are on Pro at ₹99 per seat per month.",
      },
    ],
    faqs: [
      {
        q: "Is ZapBuzzer an IT helpdesk or ITSM replacement?",
        a: "No. ZapBuzzer handles quick internal asks like projectors, cables and meeting room help, where speed matters more than forms. If you run incident, change or asset management, keep your ITSM tool for that and use ZapBuzzer for the corridor requests.",
      },
      {
        q: "Can the IT team share ZapBuzzer with pantry and facilities?",
        a: "Yes. One workspace covers IT, pantry, print room, facilities and courier. Each request is routed only to the team that handles that category, so IT never sees coffee orders.",
      },
      {
        q: "What happens if nobody on IT accepts a request?",
        a: "Notifications repeat until someone accepts. On Pro, an SLA deadline is attached and overdue requests auto-escalate to a manager.",
      },
      {
        q: "Do technicians need a laptop to use it?",
        a: "No. Most IT staff use the Android app, which rings through even on silent and lets them accept, start and deliver requests on the move. A web app is also available.",
      },
      {
        q: "How long does setup take for an IT desk?",
        a: "Most offices are running in an afternoon. Add your IT staff, set up a few catalogue items such as HDMI cable or projector help, and share the app with employees.",
      },
    ],
    related: [
      "solutions/it-support/projector-support",
      "solutions/it-support/hdmi-requests",
      "solutions/it-support/meeting-room-support",
      "use-cases/it-manager",
      "workflows/it-support",
      "compare/helpdesk",
      "features/first-accept-wins",
      "pricing",
    ],
    cta: {
      title: "Give your IT desk one queue this afternoon",
      body: "Start the 14-day free trial, add your technicians and put HDMI and projector help one tap away. No credit card needed.",
    },
  },

  // ───────────────────────── REQUEST MANAGEMENT ─────────────────────────
  {
    path: "solutions/it-support/request-management",
    title: "IT Request Management for Quick Office Fixes",
    description:
      "Capture, queue and close small IT requests in one place. ZapBuzzer gives IT staff a live list, owners a timed record, and employees a clear answer to “is anyone coming?”",
    h1: "Keep every small IT ask in one list, from tap to rating",
    eyebrow: "IT Support",
    lead:
      "IT request management in ZapBuzzer is deliberately lightweight. Employees request from a short catalogue, the IT team works from one live queue, and every request carries its own timer, owner and outcome.",
    keywords: [
      "it request management",
      "manage office it requests",
      "it request queue",
      "internal it requests",
      "track it asks",
    ],
    heroVisual: "request-dashboard",
    sections: [
      {
        type: "prose",
        heading: "Managing requests, not tickets",
        paragraphs: [
          "A request in ZapBuzzer is smaller than a ticket in a helpdesk. It has what was asked for, a note, a destination, who asked, who accepted and a set of timestamps. That’s enough to get a technician to the right room and to measure how long it took. It isn’t trying to hold diagnostics, linked incidents or change approvals.",
          "Keeping it small is what makes it work for everyday IT. An employee with a meeting in ten minutes will tap a button. They won’t fill in a six-field form. And an IT team juggling a dozen asks an hour needs a list they can glance at on a phone, not a console.",
        ],
      },
      {
        type: "visual",
        visual: "request-dashboard",
        heading: "One dashboard for the whole IT queue",
        body:
          "Admins and IT leads see live requests with status, owner and age. Anything still waiting stands out, and you can see at a glance who is busy and which rooms have open issues.",
        points: [
          "Statuses: requested, accepted, started, delivered, rated",
          "Owner name visible on every accepted request",
          "Age shown so stale asks are obvious",
        ],
      },
      {
        type: "workflow",
        heading: "The life of a managed IT request",
        steps: [
          { title: "Captured", body: "An employee picks an item such as “Projector help” or “Spare charger”, adds a note and taps Buzz. The request is created with a timestamp." },
          { title: "Queued", body: "It appears in the IT queue and pings every IT team member until someone accepts." },
          { title: "Owned", body: "First accept wins. The request now shows one owner, and the requester sees their name and photo." },
          { title: "Worked", body: "The technician marks it started with an ETA, so the requester knows when to expect them." },
          { title: "Closed", body: "Marked delivered, optionally with a photo, then rated by the requester. History keeps the record." },
        ],
      },
      {
        type: "features",
        heading: "Tools for whoever runs the IT desk",
        items: [
          { title: "A short IT catalogue", body: "Set up the handful of asks that make up most of your day: HDMI cable, projector help, room display, spare mouse, login help. Fewer, clearer items mean faster taps." },
          { title: "Notes and destinations", body: "Every request carries where and what exactly, so technicians grab the right adapter before walking over." },
          { title: "Request history", body: "See past requests by item, room, requester or technician. Free keeps 30 days; Pro keeps full history with reports." },
          { title: "Roles and permissions", body: "Decide who can request, who can accept IT jobs and who can see reports. Every action is audit-logged." },
        ],
      },
      {
        type: "scenario",
        heading: "A Monday morning at the IT desk",
        persona: "Rohan, IT Lead",
        setting: "Two technicians, 140 staff across three floors, a client visit at 10.",
        timeline: [
          { time: "9:05", event: "Three requests arrive: a dead mouse on 2nd floor, login trouble in Finance, projector in Board Room." },
          { time: "9:05", event: "Sameer accepts the projector; Anjali accepts the login issue. The mouse waits in the queue." },
          { time: "9:12", event: "Board Room projector delivered. Sameer accepts the mouse request from his phone on the way back." },
          { time: "9:20", event: "Rohan checks the dashboard: nothing open, all three closed inside 15 minutes." },
        ],
        outcome:
          "Rohan didn’t dispatch anything. The queue and first-accept-wins did the coordination, and he has timings for all three.",
      },
      {
        type: "metrics",
        heading: "Numbers you can manage by",
        intro: "Every request is timed, so these come for free once the team is using it. Full analytics is on Pro.",
        items: [
          { metric: "Time to accept", meaning: "How long employees wait before someone owns their request." },
          { metric: "Time to deliver", meaning: "Tap to fixed, the number the requester actually feels." },
          { metric: "On-time rate", meaning: "Share of requests closed before their SLA deadline." },
          { metric: "Rating", meaning: "1–5★ from the requester, per technician and per item." },
        ],
      },
      {
        type: "checklist",
        heading: "Before you go live",
        items: [
          "List the ten IT asks you hear most often and make each one a catalogue item.",
          "Add every technician who walks to desks and rooms.",
          "Name your meeting rooms and floors consistently so destinations are clear.",
          "Decide who sees reports and who can only request.",
          "Tell staff: if it needs someone in person within the hour, buzz it.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can I import existing IT tickets into ZapBuzzer?",
        a: "ZapBuzzer is built for new, short-lived requests rather than migrating ticket backlogs. Most teams start fresh with quick asks and keep their existing system for long-running work.",
      },
      {
        q: "How many catalogue items should IT have?",
        a: "Start with five to ten. A short list makes requesting quick and keeps routing simple; you can add items later as patterns emerge.",
      },
      {
        q: "Can a request be reassigned after it is accepted?",
        a: "The first person to accept owns the request, which is what keeps accountability clear. Admins can manage requests from the dashboard if something needs to change.",
      },
      {
        q: "How long is request history kept?",
        a: "The Free plan keeps the last 30 days. Pro keeps full history along with audit logs and reports.",
      },
    ],
    related: [
      "solutions/it-support",
      "solutions/it-support/ticket-routing",
      "features/request-management",
      "features/request-history",
      "admin/roles-and-permissions",
      "use-cases/prevent-lost-requests",
      "free-trial",
    ],
    cta: {
      title: "Put your IT queue in one place",
      body: "Try ZapBuzzer free for 14 days and see every IT request, owner and timing on one dashboard.",
    },
  },

  // ───────────────────────── PROJECTOR ─────────────────────────
  {
    path: "solutions/it-support/projector-support",
    title: "Projector Support Requests Before Meetings Start",
    description:
      "When the projector won’t show your laptop and the meeting starts in five minutes, one tap gets IT moving. See who is coming, their ETA, and a full record of room issues.",
    h1: "Projector stuck? Get IT to the room before your guests sit down",
    eyebrow: "Projector Support",
    lead:
      "A projector that won’t wake up is a two-minute fix for IT and a disaster for the presenter. ZapBuzzer makes the ask one tap from inside the room, pings the IT team at once and shows the presenter exactly who is on the way.",
    keywords: [
      "projector support request",
      "projector not working office",
      "meeting room projector help",
      "it projector request",
      "conference room projector",
    ],
    heroVisual: "request-timeline",
    sections: [
      {
        type: "prose",
        heading: "Why projector issues need speed, not paperwork",
        paragraphs: [
          "Projector problems almost always appear at the worst moment: when the laptop is plugged in and the client is walking down the corridor. The fix is usually simple, a wrong input source, a sleeping lamp, a loose cable, a resolution mismatch. What takes time is finding someone from IT who is free and getting them to the right room.",
          "In most offices that means a phone call to whoever you know in IT, then a second call when they don’t pick up, then a walk to the IT room. ZapBuzzer removes the hunt. The presenter taps Projector help, picks the room, and every IT technician is pinged together. Whoever is closest accepts, and the presenter can focus on the meeting instead of the hunt.",
        ],
      },
      {
        type: "scenario",
        heading: "Board Room, 10:56, meeting at 11",
        persona: "Aarav, CEO",
        setting: "Quarterly board meeting; the Board Room projector shows “No signal”.",
        timeline: [
          { time: "10:56", event: "Aarav’s EA taps IT → Projector help → Board Room, note: “No signal, board at 11”." },
          { time: "10:56", event: "All three IT technicians get the ping on their phones." },
          { time: "10:57", event: "Sameer accepts; the EA sees his photo and a 2-minute ETA." },
          { time: "10:59", event: "Sameer switches the input and reseats the cable. Marked delivered." },
          { time: "11:00", event: "The first slide is on screen as the board sits down." },
        ],
        outcome: "Four minutes, no calls, and a 5★ rating for Sameer recorded against the Board Room projector.",
      },
      {
        type: "visual",
        visual: "request-timeline",
        heading: "The presenter always knows the status",
        body:
          "From the moment of the tap, the requester sees the request move: buzzed, accepted, started with an ETA, delivered. No guessing whether IT got the message.",
        points: [
          "Technician name and photo shown on accept",
          "ETA shown once work starts",
          "Delivered status and rating prompt at the end",
        ],
      },
      {
        type: "features",
        heading: "What helps with projector requests",
        items: [
          { title: "Room as destination", body: "Each request carries the exact room, so nobody walks to Conference Room A when the problem is in B." },
          { title: "Notes for context", body: "“No signal”, “HDMI only”, “presenting from iPad” lets the technician bring the right thing first time." },
          { title: "Repeat pings", body: "If nobody accepts, the notification repeats so a projector request doesn’t sit unseen." },
          { title: "Short SLA", body: "On Pro, give projector help a tight deadline. If it runs over, it escalates to the IT lead automatically." },
        ],
      },
      {
        type: "table",
        heading: "Common projector asks and what to put in the note",
        headers: ["Problem", "Helpful note", "Typical fix"],
        rows: [
          ["No signal", "Device and port, e.g. “MacBook, USB-C”", "Input source or adapter"],
          ["Projector won’t turn on", "Any lights on the unit?", "Power, remote batteries, lamp"],
          ["Image cut off or blurry", "Resolution or what you see", "Display settings, focus"],
          ["No sound through room speakers", "Video call or local video", "Audio output selection"],
        ],
      },
      {
        type: "metrics",
        heading: "Projector data worth watching",
        items: [
          { metric: "Requests per room", meaning: "The same room buzzing every week usually means hardware, not users." },
          { metric: "Time to accept", meaning: "How quickly IT reacts when a meeting is about to start." },
          { metric: "Time of day", meaning: "Clusters before 10 and 3 o’clock meetings suggest pre-checks." },
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Use the data to prevent the next one",
        body:
          "If one room keeps generating projector requests, schedule a check before the morning’s first meeting. Pro analytics shows when and where the office buzzes most.",
      },
      {
        "type": "checklist",
        "heading": "Before the big presentation",
        "items": [
          "Buzz a room check request an hour ahead.",
          "Note the laptop type so the right adapter arrives.",
          "Keep the phone handy: the technician’s name and ETA show on the request."
        ]
      },
      {
        "type": "callout",
        "tone": "tip",
        "title": "Use the request history to fix the room for good",
        "body": "If the same projector needs help every week, the request history by room shows it clearly. That is usually the evidence needed to repair the unit or relabel the inputs."
      },
    ],
    faqs: [
      {
        "q": "Can visitors’ laptops be supported?",
        "a": "Yes. Whoever is hosting raises the request for the room and notes the visitor’s laptop type, and IT brings what’s needed."
      },
      {
        q: "Can someone else request projector help on my behalf?",
        a: "Yes. An assistant or colleague can raise the request and set the room as the destination. The technician goes to the room, not to the requester’s desk.",
      },
      {
        q: "What if the technician can’t fix it on the spot?",
        a: "They can note what happened when marking the request delivered or attach a photo. Longer repairs are usually tracked in your regular IT or facilities process.",
      },
      {
        q: "Will IT get the ping if their phone is on silent?",
        a: "The ZapBuzzer mobile app is built to keep ringing when a phone is locked or silenced, and notifications repeat until someone accepts.",
      },
      {
        q: "Can projector requests escalate automatically?",
        a: "On Pro, yes. Each request has a deadline, and overdue requests escalate to a manager through your escalation chain.",
      },
    ],
    related: [
      "solutions/it-support",
      "solutions/it-support/meeting-room-support",
      "solutions/it-support/hdmi-requests",
      "workflows/projector-request",
      "features/eta-tracking",
      "solutions/facilities/conference-room-issues",
      "demo",
    ],
    cta: {
      title: "Never start a meeting on “No signal” again",
      body: "Set up projector help in ZapBuzzer today and let presenters summon IT in one tap.",
    },
  },

  // ───────────────────────── HDMI ─────────────────────────
  {
    path: "solutions/it-support/hdmi-requests",
    title: "HDMI Cable and Adapter Requests in One Tap",
    description:
      "The cable vanished from the meeting room again. ZapBuzzer lets anyone request an HDMI cable or adapter in one tap and see IT bring it, usually within minutes.",
    h1: "The missing HDMI cable, delivered to the room in minutes",
    eyebrow: "HDMI Requests",
    lead:
      "HDMI cables and adapters walk out of meeting rooms every week. Instead of messaging the IT group and hoping, employees tap HDMI cable, choose the room, note their laptop’s port, and the first free technician brings the right one.",
    keywords: [
      "hdmi request office",
      "hdmi cable request",
      "usb-c adapter request",
      "meeting room cable missing",
      "it cable request app",
    ],
    heroVisual: "mobile-app",
    sections: [
      {
        type: "prose",
        heading: "The most common IT ask in the building",
        paragraphs: [
          "Ask any office IT team what they hear most and cables come near the top. HDMI leads get borrowed for a desk monitor and never returned. Adapters disappear into laptop bags. New laptops ship with only USB-C. The request itself is trivial; the cost is the presenter standing in a room with a dead screen while they try to reach someone.",
          "Because the ask is so predictable, it suits a single catalogue item. “HDMI cable” and “USB-C to HDMI adapter” as one-tap options mean the employee doesn’t have to explain, and IT knows exactly what to grab before leaving their desk.",
        ],
      },
      {
        type: "scenario",
        heading: "Tanvi and the client review",
        persona: "Tanvi, Design",
        setting: "Conference Room B, client review in nine minutes, the cable is gone.",
        timeline: [
          { time: "2:51", event: "Tanvi taps IT → HDMI cable → Conference Room B, note “MacBook, USB-C”." },
          { time: "2:51", event: "The IT team’s phones ring at once." },
          { time: "2:52", event: "Priya accepts and grabs a cable and adapter from the IT cupboard." },
          { time: "2:54", event: "Priya plugs it in, marks it delivered. Tanvi rates 5★." },
        ],
        outcome: "Three minutes from tap to cable. The request is logged against Room B, which has now lost its cable three times this month.",
      },
      {
        type: "visual",
        visual: "mobile-app",
        heading: "Request from your phone, in the room",
        body:
          "Employees use the web app at their desk or the mobile app in the room. HDMI cable sits in the IT section of the grid, one tap away.",
      },
      {
        type: "comparison",
        heading: "Group chat vs. one tap",
        columns: ["IT WhatsApp group", "ZapBuzzer"],
        rows: [
          { label: "Asking", a: "“Anyone have an HDMI? Room B, urgent”", b: "Tap HDMI cable, pick Room B" },
          { label: "Who responds", a: "Maybe two people, maybe nobody", b: "First to accept owns it, others are told" },
          { label: "Knowing it’s coming", a: "Scroll for a thumbs-up", b: "Name, photo and ETA on screen" },
          { label: "Afterwards", a: "No record", b: "Timed, rated, counted per room" },
        ],
      },
      {
        type: "features",
        heading: "Small details that make HDMI requests faster",
        items: [
          { title: "Separate items for cable types", body: "HDMI cable, USB-C adapter and display port adapter as separate items save a return trip." },
          { title: "Room as destination", body: "The request goes to the room, not the requester’s desk." },
          { title: "First-accept-wins", body: "Only one person walks over. Everyone else sees it’s taken." },
          { title: "Per-room counts", body: "Analytics (Pro) shows which rooms lose cables most, so you can fix the cause." },
        ],
      },
      {
        type: "checklist",
        heading: "Setting up HDMI requests",
        items: [
          "Add HDMI cable and your common adapters as IT catalogue items.",
          "Keep a stocked cable box near the IT desk so the accept-to-deliver gap is short.",
          "Name rooms consistently so destinations match signage.",
          "Review the per-room count monthly and replace or secure cables in repeat rooms.",
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Fix the leak, not just the request",
        body: "If one room keeps buzzing for cables, it might need a cable tethered to the table. The request history tells you where to look.",
      },
      {
        "type": "workflow",
        "heading": "From missing cable to connected screen",
        "steps": [
          {
            "title": "Tap HDMI from the room",
            "body": "Pick the cable or adapter item and choose the room, with a note about the laptop port."
          },
          {
            "title": "IT desk pinged at once",
            "body": "Every technician on the team is notified; the first to accept owns it."
          },
          {
            "title": "Walk over with the right adapter",
            "body": "The note means the right cable leaves the cupboard the first time."
          },
          {
            "title": "Delivered and rated",
            "body": "The requester rates once the screen is showing, often before the meeting starts."
          }
        ]
      },
      {
        "type": "callout",
        "tone": "tip",
        "title": "Keep a cable in every room, and still use requests",
        "body": "Room cables go missing. Requests tell you which rooms lose them, so you know where to restock instead of guessing."
      },
    ],
    faqs: [
      {
        "q": "What if IT is busy with another request when an HDMI buzz comes in?",
        "a": "The request goes to the whole IT team, so a colleague who is free can accept it. If nobody accepts, notifications keep repeating, and on Pro an overdue request escalates to a manager."
      },
      {
        "q": "Can HDMI requests go to whoever is nearest?",
        "a": "Requests go to the whole IT team and the first to accept owns it, which in practice is usually someone close by and free."
      },
      {
        q: "Can I ask for a specific adapter type?",
        a: "Yes. Either pick a dedicated catalogue item, if your admin has set one up, or add a note such as “USB-C” or “Mini DisplayPort”. The technician sees the note before they leave.",
      },
      {
        q: "How fast are HDMI requests usually handled?",
        a: "It depends on your team and office layout. Pilot offices averaged 32 seconds to accept across all request types, and cable requests are usually among the quickest to deliver.",
      },
      {
        q: "Does the cable need to be returned?",
        a: "ZapBuzzer tracks the request, not the cable as an asset. Many offices simply leave the cable in the room, which is where it should have been.",
      },
      {
        q: "Can I see which rooms lose cables most?",
        a: "Yes. Request history shows destinations, and Pro analytics lets you see request volume by item and location.",
      },
    ],
    related: [
      "solutions/it-support",
      "solutions/it-support/projector-support",
      "solutions/it-support/meeting-room-support",
      "workflows/hdmi-request",
      "features/one-tap-requests",
      "compare/whatsapp",
      "free-trial",
    ],
    cta: {
      title: "Make HDMI cables a one-tap ask",
      body: "Start free, add HDMI cable to your IT catalogue, and stop the “anyone have a cable?” messages.",
    },
  },

  // ───────────────────────── MEETING ROOM ─────────────────────────
  {
    path: "solutions/it-support/meeting-room-support",
    title: "Meeting Room IT Support for Every Room",
    description:
      "Displays, conferencing kits, cables and room screens: ZapBuzzer gets IT into any meeting room quickly and shows which rooms cause the most trouble over time.",
    h1: "Help in the meeting room while the meeting is still on",
    eyebrow: "Meeting Room Support",
    lead:
      "Meeting rooms are where IT problems are most visible and most expensive. ZapBuzzer gives every room a fast route to IT: the requester picks the room, describes the issue, and a technician accepts within moments.",
    keywords: [
      "meeting room it support",
      "conference room tech support",
      "video call room help",
      "meeting room display not working",
      "room support request",
    ],
    heroVisual: "acceptance",
    sections: [
      {
        type: "prose",
        heading: "Rooms fail in front of an audience",
        paragraphs: [
          "When a desk laptop misbehaves, one person is inconvenienced. When the meeting room’s display, camera or speakerphone fails, eight people are waiting and maybe a client on the other end of a call. Meeting room support needs to be fast, and it needs to be easy to ask for from inside the room.",
          "ZapBuzzer treats meeting rooms as destinations. Each request says which room, so IT walks straight there. And because every request is logged against the room, you build a picture of which spaces need attention.",
        ],
      },
      {
        type: "visual",
        visual: "acceptance",
        heading: "First free technician wins the room",
        body:
          "The request reaches the whole IT team at once. Whoever is nearest taps Accept and owns it, and the others see it’s handled, so no two people walk to the same room.",
      },
      {
        type: "table",
        heading: "Typical meeting room asks",
        headers: ["Catalogue item", "Example note", "Who usually takes it"],
        rows: [
          ["Room display / projector", "“Screen black, presenting at 3”", "IT"],
          ["Video call setup", "“Camera not detected, client on line”", "IT"],
          ["Cable or adapter", "“USB-C to HDMI”", "IT"],
          ["Room too cold / hot", "“AC at 16°C”", "Facilities"],
          ["Extra chairs", "“Need 4 more for Room B”", "Facilities"],
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "IT and facilities, one app",
        body:
          "Meeting rooms need both teams. In ZapBuzzer, an AC complaint routes to facilities and a display issue routes to IT, from the same app, so employees don’t need to know who handles what.",
      },
      {
        type: "scenario",
        heading: "A client call that almost didn’t start",
        persona: "Kavya, Sales Lead",
        setting: "Pitch on a video call from Conference Room A at 4:00; the camera isn’t detected.",
        timeline: [
          { time: "3:52", event: "Kavya taps IT → Video call setup → Conference Room A, note “camera not detected”." },
          { time: "3:53", event: "Anjali accepts; Kavya sees a 3-minute ETA." },
          { time: "3:56", event: "Anjali reconnects the USB hub and selects the room camera. Delivered." },
          { time: "4:00", event: "Kavya joins the call on time." },
        ],
        outcome: "Kavya rated 5★. The room’s third camera issue this month shows in the report, so IT schedules a hub replacement.",
      },
      {
        type: "features",
        heading: "What meeting room support gets you",
        items: [
          { title: "Room-level history", body: "Every request tagged with its room, so recurring faults are easy to spot." },
          { title: "Clear status for the room", body: "Everyone waiting can see someone accepted and when they’ll arrive." },
          { title: "Tight deadlines", body: "On Pro, give room requests a short SLA and escalate if they run late." },
          { title: "Ratings", body: "Requesters rate the fix, giving IT feedback without a survey." },
        ],
      },
      {
        type: "audience",
        heading: "Who benefits",
        items: [
          { role: "Presenters", benefit: "One tap from the room, and they see help is on the way." },
          { role: "IT team", benefit: "Exact room and issue up front; no duplicate walks." },
          { role: "Office manager", benefit: "Knows which rooms need investment before the next client visit." },
          { role: "Leadership", benefit: "Fewer meetings starting late because of kit." },
        ],
      },
      {
        type: "prose",
        heading: "Running meeting rooms well across a whole office",
        paragraphs: [
          "Offices with six or eight meeting rooms tend to have one or two problem rooms that cause most of the trouble: the one with the old display, the one where the HDMI keeps walking, the one under the AC vent. Without data those rooms just get a reputation. With ZapBuzzer each request is logged against its room, so the reputation turns into a number you can act on.",
          "A simple habit helps: once a month, look at requests by room and pick the worst one to fix properly. Replace the hub, tether the cable, move the camera. Over a quarter the noisy rooms quieten down and IT spends less time running between floors.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can we pre-check rooms before big meetings?",
        a: "ZapBuzzer handles requests rather than room bookings, but an admin or EA can raise a request ahead of time, such as “check Board Room display before 11”, and IT will see it in the queue.",
      },
      {
        q: "Does ZapBuzzer integrate with our room booking system?",
        a: "ZapBuzzer does not list specific booking-system integrations. Enterprise includes a REST API and webhooks; talk to us about what you need.",
      },
      {
        q: "How do I see which rooms have the most issues?",
        a: "Request history records the destination of every request, and Pro analytics shows when and where requests cluster.",
      },
      {
        q: "Can AC and display issues go to different teams?",
        a: "Yes. Routing is by category, so IT items go to IT and comfort items go to facilities, even when raised from the same room.",
      },
    ],
    related: [
      "solutions/it-support",
      "solutions/it-support/projector-support",
      "solutions/facilities/conference-room-issues",
      "features/request-routing",
      "use-cases/office-manager",
      "analytics/office-activity",
      "pricing/pro",
    ],
    cta: {
      title: "Give every meeting room a direct line to IT",
      body: "Try ZapBuzzer free for 14 days and see your room requests handled in minutes.",
    },
  },

  // ───────────────────────── HARDWARE ─────────────────────────
  {
    path: "solutions/it-support/hardware-requests",
    title: "Hardware Requests: Mice, Chargers and Spares",
    description:
      "Dead mouse, forgotten charger, broken headset. Request spare hardware in one tap and have IT bring it to your desk, with every request timed and rated.",
    h1: "Spare mouse, charger or headset, brought to your desk",
    eyebrow: "Hardware Requests",
    lead:
      "Small hardware swaps keep people working: a mouse that stopped clicking, a charger left at home, a headset before a call. ZapBuzzer makes each one a tap, and IT delivers it to the desk.",
    keywords: [
      "office hardware requests",
      "spare charger request",
      "it peripherals request",
      "replace mouse keyboard office",
      "headset request it",
    ],
    heroVisual: "delivery",
    sections: [
      {
        type: "prose",
        heading: "Small swaps, big difference",
        paragraphs: [
          "Hardware requests in this sense are the quick ones: peripherals and accessories IT keeps in a cupboard. Nobody should lose an hour to a dead mouse, yet in many offices the path is: message IT, wait, walk over, find they’re out, walk back. ZapBuzzer shortens that to one tap and one walk by the technician.",
          "Larger hardware, such as new laptops, procurement and asset tagging, usually belongs in your purchasing or IT asset process. ZapBuzzer is for the swap-and-go items, and we’d rather say so than pretend otherwise.",
        ],
      },
      {
        type: "table",
        heading: "Good candidates for the hardware catalogue",
        headers: ["Item", "Why it suits one tap"],
        rows: [
          ["Mouse / keyboard", "Fails without warning, easy swap"],
          ["Laptop charger", "Forgotten at home most mornings"],
          ["Headset", "Needed right before a call"],
          ["Monitor cable", "Hot-desking breaks setups"],
          ["Loaner laptop", "Short-term while one is repaired"],
        ],
      },
      {
        type: "visual",
        visual: "delivery",
        heading: "Delivered, confirmed, rated",
        body:
          "When the technician drops off the charger, they mark it delivered, optionally with a photo. The requester confirms with a rating, and the request is closed with its full timing.",
      },
      {
        type: "scenario",
        heading: "Charger left at home",
        persona: "Om, Engineer",
        setting: "Laptop at 8% battery, standup in 20 minutes.",
        timeline: [
          { time: "9:40", event: "Om taps IT → Laptop charger, note “USB-C 65W, desk 3-14”." },
          { time: "9:41", event: "Sameer accepts from the 2nd floor." },
          { time: "9:46", event: "Charger delivered to desk 3-14 and marked delivered." },
        ],
        outcome: "Om rates 5★ and joins standup with a full screen. Sameer’s scorecard updates.",
      },
      {
        type: "features",
        heading: "Why IT teams like it",
        items: [
          { title: "Desk-level destinations", body: "Desk numbers or floors in the note mean the technician walks straight there." },
          { title: "Demand patterns", body: "Request counts by item tell you what to stock more of." },
          { title: "Fair attribution", body: "Scorecards credit whoever actually did the work, not whoever shouts loudest." },
          { title: "Owner cost view", body: "Owners can see request costs where they are set, useful for loaners and consumables." },
        ],
      },
      {
        type: "metrics",
        heading: "What to track",
        items: [
          { metric: "Requests by item", meaning: "Chargers spiking? Consider a shared charging station." },
          { metric: "Delivery time", meaning: "Long gaps often mean the stock is in the wrong place." },
          { metric: "Repeat requesters", meaning: "One person asking weekly may need a permanent replacement." },
        ],
      },
      {
        type: "callout",
        tone: "warning",
        title: "Not an asset register",
        body: "ZapBuzzer records requests, not serial numbers or ownership of devices. If you need full asset management, keep it in your asset tool.",
      },
      {
        type: "prose",
        heading: "Where the hardware cupboard should live",
        paragraphs: [
          "Delivery time for a hardware swap is mostly walking time. If the spares cupboard is on the ground floor and most requests come from the 4th, every charger costs the technician ten minutes on the stairs. Request history shows where requests come from, which makes it easy to decide whether a second small stock point would pay for itself.",
          "It also helps to split items that need a technician from items anyone can hand over. A spare mouse can be delivered by whoever is free on the IT team; a loaner laptop may need someone to sign it out and log in the user. Keeping these as separate catalogue items means the right person accepts each one, and the requester gets a sensible ETA.",
          "Finally, watch for repeat requesters. Someone asking for a charger every Monday probably needs a second one for their desk, which is cheaper than the technician’s weekly walk.",
        ],
      },
      {
        "type": "workflow",
        "heading": "A hardware swap, step by step",
        "steps": [
          {
            "title": "Choose the item",
            "body": "Mouse, keyboard, charger or headset, picked from the IT catalogue with the desk as destination."
          },
          {
            "title": "Accept and fetch",
            "body": "The first free technician accepts and takes it from the cupboard."
          },
          {
            "title": "Deliver with a photo",
            "body": "A delivered photo confirms the hand-over at the desk."
          }
        ]
      },
      {
        "type": "callout",
        "tone": "info",
        "title": "Owner-only cost view",
        "body": "Where hardware items carry a cost, the owner sees request spend without exposing it to everyone."
      },
    ],
    faqs: [
      {
        "q": "What if the item is out of stock?",
        "a": "The technician can accept the request and add a note with a realistic ETA, so the employee knows a spare is coming rather than assuming it was ignored. Repeated stock-outs show up as long delivery times for that item."
      },
      {
        "q": "Can hardware requests be delivered to a hot desk or meeting room?",
        "a": "Yes. The requester chooses the destination, so a charger can go to whichever desk or room they are sitting in today."
      },
      {
        q: "Can ZapBuzzer track which device was handed out?",
        a: "The technician can add a note or photo on delivery, but ZapBuzzer isn’t an asset register. Use your asset system for serial numbers and ownership.",
      },
      {
        q: "Can we request a new laptop through ZapBuzzer?",
        a: "You can set up any catalogue item, but new laptop procurement usually needs approvals that sit better in your purchasing process. ZapBuzzer works best for quick swaps and loaners.",
      },
      {
        q: "Who sees the cost of hardware requests?",
        a: "Spend visibility is owner-only. Other roles see the request but not the cost.",
      },
      {
        q: "Does this work for hot-desking offices?",
        a: "Yes. Requesters add their current desk or floor as a note or destination, so the technician knows where to go today.",
      },
    ],
    related: [
      "solutions/it-support",
      "solutions/it-support/software-requests",
      "solutions/facilities/office-equipment",
      "features/delivery-confirmation",
      "admin/spend-visibility",
      "analytics/staff",
      "pricing",
    ],
    cta: {
      title: "Keep the spares cupboard one tap away",
      body: "Start your free trial and add your common hardware swaps to the IT catalogue.",
    },
  },

  // ───────────────────────── SOFTWARE ─────────────────────────
  {
    path: "solutions/it-support/software-requests",
    title: "Software Support Requests: Logins and Installs",
    description:
      "Locked out, app won’t open, need a tool installed before a deadline. ZapBuzzer gets someone from IT to your desk quickly and keeps a timed record of every software ask.",
    h1: "When an app won’t open, get a person, not a form",
    eyebrow: "Software Support",
    lead:
      "Most software help in an office is quick and in person: a password reset, a stuck update, a printer driver, a tool needed before tomorrow’s deadline. ZapBuzzer routes these to IT with one tap and shows who is coming.",
    keywords: [
      "software support request",
      "it login help request",
      "software install request office",
      "desk side it support",
      "app not working help",
    ],
    heroVisual: "notification-flow",
    sections: [
      {
        type: "prose",
        heading: "Desk-side help for everyday software trouble",
        paragraphs: [
          "Software problems vary more than hardware ones, but the everyday ones follow a pattern: someone is blocked and needs a person to sit with them for five minutes. Raising a formal ticket feels heavier than the problem, so people message whoever they know, and the request gets lost.",
          "ZapBuzzer gives these a lighter path. Employees tap Software help or Login help, describe it in a note, and the IT team gets it on every channel the plan allows. The requester knows within seconds whether someone’s coming.",
        ],
      },
      {
        type: "visual",
        visual: "notification-flow",
        heading: "One request, every channel",
        body:
          "On Pro, a software request pings IT on the app, Telegram, WhatsApp and email at the same time. On Free, it goes via the app and email. Pings repeat until someone accepts.",
      },
      {
        type: "features",
        heading: "Catalogue items that work well",
        items: [
          { title: "Login / password help", body: "Locked out of email or a business app. Quick but blocking." },
          { title: "Install request", body: "A tool needed for a task, e.g. a design app before a client brief." },
          { title: "App not working", body: "Crashes, freezes, failed updates, with the app name in the note." },
          { title: "Printer driver / setup", body: "Often paired with the print room; IT handles the laptop side." },
        ],
      },
      {
        type: "scenario",
        heading: "Locked out before payroll",
        persona: "Meera, Finance",
        setting: "Payroll run due at noon; her account locked after a password change.",
        timeline: [
          { time: "11:10", event: "Meera taps IT → Login help, note “locked out after reset, payroll due 12”." },
          { time: "11:11", event: "Anjali accepts and marks started with a 5-minute ETA." },
          { time: "11:15", event: "Account unlocked at Meera’s desk. Delivered." },
        ],
        outcome: "Meera finishes payroll by 11:50 and rates 5★.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Where formal tickets still belong",
        body:
          "Licence approvals, security incidents and anything needing investigation over days fit better in a dedicated IT service tool. ZapBuzzer handles the ask-and-fix moments.",
      },
      {
        type: "comparison",
        heading: "Quick software ask: message vs. ZapBuzzer",
        columns: ["Direct message to IT", "ZapBuzzer"],
        rows: [
          { label: "Reaches", a: "One person, if they see it", b: "The whole IT team at once" },
          { label: "If that person is busy", a: "Request waits silently", b: "Someone else accepts" },
          { label: "Record", a: "Buried in a chat", b: "Timed, rated, in history" },
        ],
      },
      {
        type: "checklist",
        heading: "Tips for software requests",
        items: [
          "Ask employees to name the app in the note.",
          "Include any deadline, e.g. “client brief at 3”.",
          "Keep sensitive details like passwords out of notes.",
          "Use ratings to spot recurring app problems worth fixing centrally.",
        ],
      },
      {
        type: "prose",
        heading: "Why a person still matters for software help",
        paragraphs: [
          "Self-service portals and knowledge bases are useful, but in a busy office the person stuck on a login screen ten minutes before a deadline doesn’t want to read an article. They want someone to come and look. ZapBuzzer is honest about that: it gets a person to the desk quickly, rather than trying to deflect the request.",
          "Over time the request history becomes its own knowledge base. If the same app produces a dozen “won’t open” requests after every update, that is a signal to fix the rollout, not to keep sending technicians. Ratings help here too: a run of low ratings on one item often means the fix is a workaround rather than a cure.",
        ],
      },
      {
        "type": "audience",
        "heading": "Who software requests help",
        "items": [
          {
            "role": "Employees",
            "benefit": "Get a person at the desk without writing a ticket."
          },
          {
            "role": "Technicians",
            "benefit": "Know the app and the problem before they walk over."
          },
          {
            "role": "IT lead",
            "benefit": "See which apps generate the most help requests."
          }
        ]
      },
      {
        "type": "metrics",
        "heading": "Software request metrics",
        "items": [
          {
            "metric": "Requests by app",
            "meaning": "Shows where training or documentation would cut demand."
          },
          {
            "metric": "Delivery time",
            "meaning": "Login help should be fast; installs naturally take longer."
          }
        ]
      },
      {
        "type": "callout",
        "tone": "warning",
        "title": "Keep credentials out of notes",
        "body": "Ask employees to describe the problem, not to type passwords or one-time codes into the request note. The technician will sort access in person at the desk."
      },
    ],
    faqs: [
      {
        "q": "Can we tell software requests apart from hardware in reports?",
        "a": "Yes. Each catalogue item is reported separately on Pro analytics, so login help, app installs and printer drivers each show their own volume and timings."
      },
      {
        "q": "Can software requests be raised from a phone if the laptop is locked?",
        "a": "Yes. The mobile app lets an employee buzz IT even when their laptop is the problem."
      },
      {
        q: "Should employees share passwords in the request note?",
        a: "No. Notes are visible to the IT team and kept in history. The technician will handle credentials in person.",
      },
      {
        q: "Can remote employees use it?",
        a: "ZapBuzzer is designed for in-office requests where someone comes to you, but any employee can raise a request from the web or mobile app. How IT responds remotely is up to your team.",
      },
      {
        q: "Can software requests go to a different person than hardware?",
        a: "Yes. Route categories to different teams, for example an apps specialist for software and the floor technicians for hardware.",
      },
      {
        q: "Is every action logged?",
        a: "Yes. Every action is audit-logged, and on Pro you get audit logs and reports to review them.",
      },
    ],
    related: [
      "solutions/it-support",
      "solutions/it-support/hardware-requests",
      "solutions/it-support/ticket-routing",
      "notifications/multi-channel",
      "admin/audit-logs",
      "workflows/it-support",
      "free-trial",
    ],
    cta: {
      title: "Unblock people in minutes",
      body: "Try ZapBuzzer free and route software help to whoever is free right now.",
    },
  },

  // ───────────────────────── ROUTING ─────────────────────────
  {
    path: "solutions/it-support/ticket-routing",
    title: "IT Ticket Routing by Category, First Accept Wins",
    description:
      "Route each IT request to the right team by category, ping everyone on it at once, and let the first free technician own it. No dispatcher needed, no double handling.",
    h1: "Route IT asks to the right people without a dispatcher",
    eyebrow: "IT Routing",
    lead:
      "ZapBuzzer routes each request by the catalogue item the employee picked. IT items go to the IT team; the whole team is notified; the first to accept owns it. That’s the whole model, and it removes most of the coordination overhead.",
    keywords: [
      "it ticket routing",
      "it request routing",
      "first accept wins it",
      "auto route it requests",
      "it dispatch office",
    ],
    heroVisual: "acceptance",
    sections: [
      {
        type: "prose",
        heading: "Routing without a routing project",
        paragraphs: [
          "Traditional helpdesks route through rules, queues and often a human dispatcher deciding who takes what. That makes sense for complex work. For a cable or a projector it’s overhead: by the time someone has assigned the ticket, the meeting has started.",
          "ZapBuzzer’s routing has two parts. First, the item decides the team: HDMI cable goes to IT, AC too cold goes to facilities. Second, within the team, nobody is assigned in advance. Everyone is pinged, and the first to accept owns it. The person who’s free and closest naturally picks it up.",
        ],
      },
      {
        type: "visual",
        visual: "acceptance",
        heading: "First accept wins",
        body:
          "Three technicians receive the same ping. One taps Accept; the request is theirs and disappears from the others’ lists. There’s no “I thought you were doing it”.",
      },
      {
        type: "workflow",
        heading: "How routing decides",
        steps: [
          { title: "Item chosen", body: "The employee picks an IT item; the item belongs to a category." },
          { title: "Team matched", body: "The category is linked to the IT team (or a sub-team you define)." },
          { title: "Fan-out", body: "Every member of that team is notified across the channels on your plan." },
          { title: "Claim", body: "First Accept takes ownership; the requester sees name and ETA." },
          { title: "Fallback", body: "If nobody accepts, pings repeat; on Pro, overdue requests escalate." },
        ],
      },
      {
        type: "table",
        heading: "Example IT routing setup",
        headers: ["Item", "Category", "Team pinged"],
        rows: [
          ["HDMI cable", "IT – rooms", "Floor technicians"],
          ["Projector help", "IT – rooms", "Floor technicians"],
          ["Login help", "IT – software", "Apps support"],
          ["Laptop charger", "IT – hardware", "Floor technicians"],
          ["AC too cold", "Facilities", "Facilities team"],
        ],
      },
      {
        type: "scenario",
        heading: "Two requests, two teams, one minute",
        persona: "Office at 10:00",
        setting: "Conference Room B: no display and the AC at 16°C.",
        timeline: [
          { time: "10:00", event: "Om taps Facilities → AC too cold; Tanvi taps IT → Room display, both for Room B." },
          { time: "10:00", event: "Facilities and IT are pinged separately." },
          { time: "10:01", event: "Deepak accepts the AC; Priya accepts the display." },
        ],
        outcome: "Both fixed before the 10:15 start, and nobody had to know which team handles what.",
      },
      {
        type: "comparison",
        heading: "Dispatcher-led vs. first-accept-wins",
        columns: ["Dispatcher assigns", "First accept wins"],
        rows: [
          { label: "Speed", a: "Waits for the dispatcher", b: "Starts the moment someone’s free" },
          { label: "Load balance", a: "Depends on the dispatcher’s view", b: "Free people naturally take more" },
          { label: "Single point of failure", a: "Dispatcher on leave", b: "None" },
          { label: "Accountability", a: "Assigned name", b: "Accepted name, with timestamps" },
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Keep teams small enough to feel ownership",
        body: "If a ping goes to 30 people, everyone assumes someone else will take it. Split large IT groups by floor or speciality.",
      },
      {
        type: "prose",
        heading: "Designing IT teams for routing",
        paragraphs: [
          "Routing works best when each team is small enough that a ping feels personal. Two to six people per team is a good range. Larger IT groups can split by floor, by building or by speciality, such as rooms and hardware versus software and accounts.",
          "It is worth thinking about coverage too. If your apps specialist is the only person in the software team, every login request waits on them. Adding a floor technician as a backup member means someone can always accept, and the SLA timer on Pro will flag it if nobody does.",
        ],
      },
      {
        "type": "checklist",
        "heading": "Routing health check",
        "items": [
          "Every IT catalogue item routes to one team.",
          "No team has only one member.",
          "New technicians are added to teams on their first day.",
          "Requests reassigned often point to an item routed to the wrong team."
        ]
      },
      {
        "type": "callout",
        "tone": "info",
        "title": "Plan note",
        "body": "Routing and first-accept-wins work on every plan. Telegram and WhatsApp pings, SLAs and escalation are on Pro; API and webhooks for custom routing needs are on Enterprise."
      },
    ],
    faqs: [
      {
        "q": "Does routing work for a single technician?",
        "a": "Yes, but a team of one has no cover. Even adding the office manager as a backup member means requests can still be accepted when the technician is on leave or in the middle of a long fix."
      },
      {
        "q": "Can routing send IT requests to an external vendor?",
        "a": "If vendor staff are invited as users and added to a team, they receive requests like anyone else. For larger outsourced setups, talk to us about Enterprise."
      },
      {
        q: "Can I assign a request directly to one technician?",
        a: "ZapBuzzer is built around first-accept-wins, which avoids bottlenecks on any one person. You control who is in each team, which decides who can accept.",
      },
      {
        q: "Can routing differ by office location?",
        a: "Yes, with multi-location on Pro. Each location can have its own teams so a request in one office doesn’t ping technicians in another.",
      },
      {
        q: "Is there routing via API?",
        a: "REST API and webhooks are available on Enterprise. Talk to us about your use case and we’ll go through what’s possible.",
      },
      {
        q: "What if the wrong team gets a request?",
        a: "That usually means the item sits in the wrong category. Admins can adjust the catalogue so future requests route correctly.",
      },
    ],
    related: [
      "solutions/it-support",
      "solutions/it-support/request-management",
      "features/request-routing",
      "features/first-accept-wins",
      "solutions/facilities/routing",
      "notifications/routing",
      "demo",
    ],
    cta: {
      title: "Let the free technician take it",
      body: "Set up your IT categories in an afternoon and see first-accept-wins working the same day.",
    },
  },

  // ───────────────────────── SLA ─────────────────────────
  {
    path: "solutions/it-support/sla",
    title: "IT SLA Management with Automatic Escalation",
    description:
      "Give every IT request a deadline. ZapBuzzer times projector, HDMI and room requests and escalates overdue ones to a manager automatically on the Pro plan.",
    h1: "Deadlines that match the meeting clock",
    eyebrow: "IT SLA",
    lead:
      "A projector fix that arrives after the meeting is useless. ZapBuzzer attaches a deadline to every IT request and, on Pro, escalates to your IT lead when one runs late, so nothing quietly misses its moment.",
    keywords: [
      "it sla management",
      "it request sla",
      "it escalation office",
      "sla timer it support",
      "overdue it requests",
    ],
    heroVisual: "sla-timer",
    sections: [
      {
        type: "prose",
        heading: "SLAs sized for quick asks",
        paragraphs: [
          "In a full ITSM tool, SLAs are often measured in hours or days. For in-office asks they need to be measured in minutes. An HDMI cable that takes an hour is a failure even if it was technically delivered.",
          "ZapBuzzer’s SLA is simple: every request has a deadline, the timer runs from the moment of the tap, and if it isn’t delivered on time it escalates. SLA deadlines with an escalation chain are part of Pro.",
        ],
      },
      {
        type: "visual",
        visual: "sla-timer",
        heading: "A visible clock on every request",
        body:
          "The technician sees time left; the IT lead sees which requests are close to breaching. When the timer runs out, escalation kicks in automatically.",
      },
      {
        type: "table",
        heading: "Example IT deadlines",
        intro: "These are illustrations; set deadlines that reflect your office.",
        headers: ["Request", "Suggested deadline", "Why"],
        rows: [
          ["Projector / room display", "10 minutes", "Meetings start on time or not at all"],
          ["HDMI / adapter", "10 minutes", "Usually needed right now"],
          ["Login help", "20 minutes", "Person is blocked"],
          ["Spare mouse / charger", "30 minutes", "Annoying but workable"],
        ],
      },
      {
        type: "visual",
        visual: "escalation",
        heading: "Escalation chain",
        body:
          "If a request breaches, it goes up the chain you set: for example the IT lead first, then the office manager. Each step is logged.",
      },
      {
        type: "scenario",
        heading: "A projector request that stalled",
        persona: "Rohan, IT Lead",
        setting: "Both technicians are mid-job on another floor.",
        timeline: [
          { time: "2:50", event: "Projector help raised for the Training Room; 10-minute deadline." },
          { time: "2:51", event: "Sameer accepts but gets held up finishing a desk job." },
          { time: "3:00", event: "Deadline passes; the request escalates to Rohan." },
          { time: "3:03", event: "Rohan walks over himself and fixes it." },
        ],
        outcome: "The presenter lost three minutes instead of thirty, and the breach shows in reports so Rohan can review staffing at 3 o’clock.",
      },
      {
        type: "metrics",
        heading: "SLA numbers for IT",
        items: [
          { metric: "On-time %", meaning: "Share of IT requests delivered before deadline. Pilot offices hit 96% across all types." },
          { metric: "Breaches by item", meaning: "Which kinds of request run late most often." },
          { metric: "Escalations", meaning: "How often managers had to step in." },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Plan note",
        body: "Free shows request timings. SLA deadlines with an escalation chain, plus reports, are on Pro at ₹99 per seat per month.",
      },
      {
        type: "prose",
        heading: "Choosing deadlines your team can meet",
        paragraphs: [
          "The best IT deadlines are slightly uncomfortable but achievable most of the time. Start with generous numbers for the first two weeks and look at actual delivery times. Then tighten the deadline for items where the team is consistently well inside it, and leave the others alone until staffing or stock changes.",
          "Keep in mind that the timer starts at the tap, not the accept. That is deliberate: the employee waiting in Conference Room B doesn’t care when IT saw the ping, only when the cable arrives. A deadline that includes accept time encourages the whole team to react quickly, not just to finish quickly.",
          "Breaches are information, not failure. A cluster of breaches at 3 o’clock usually means meetings and technician breaks overlap. A breach pattern on one floor may mean stock is too far away. Review them weekly for the first month.",
        ],
      },
      {
        "type": "comparison",
        "heading": "IT SLA in a helpdesk tool vs. in ZapBuzzer",
        "columns": [
          "Typical ticket SLA",
          "ZapBuzzer request SLA"
        ],
        "rows": [
          {
            "label": "Unit of work",
            "a": "Tickets that can run for days",
            "b": "Quick asks measured in minutes"
          },
          {
            "label": "Visibility",
            "a": "Mostly to the IT team",
            "b": "Timer seen by technician and requester"
          },
          {
            "label": "When breached",
            "a": "Report at month end",
            "b": "Auto-escalation to a manager on Pro"
          }
        ]
      },
      {
        "type": "checklist",
        "heading": "Before switching IT SLAs on",
        "items": [
          "Set a deadline per item, starting generous.",
          "Confirm the escalation chain names a manager who is reachable.",
          "Tell the team why: the timer protects them as much as the requester."
        ]
      },
      {
        "type": "callout",
        "tone": "info",
        "title": "Plan note",
        "body": "SLA timers and the escalation chain are part of Pro at ₹99 per seat per month. Free still times every request, so you can collect a baseline before you set deadlines."
      },
    ],
    faqs: [
      {
        "q": "How should we pick a first deadline for an item?",
        "a": "Look at how long that item takes today, either from Free history or a week of Pro data, and set the deadline a little above the typical delivery time. Tighten it once the team is hitting it comfortably."
      },
      {
        "q": "Can the SLA be changed after go-live?",
        "a": "Yes. Most teams tighten or relax deadlines after the first few weeks of data. Changing an item’s deadline applies to new requests for that item."
      },
      {
        q: "Can different IT items have different deadlines?",
        a: "Yes. Deadlines are set per category or item, so a projector can have a tighter deadline than a spare mouse.",
      },
      {
        q: "Who gets the escalation?",
        a: "Whoever you put in the escalation chain, typically the IT lead and then an office or operations manager. The chain is a Pro feature.",
      },
      {
        q: "Does the timer pause outside office hours?",
        a: "Set deadlines to match how your office works. If you have specific out-of-hours needs, talk to us during your trial.",
      },
      {
        q: "Is the SLA visible to the requester?",
        a: "The requester sees who accepted and the ETA. Admins and managers see SLA state across all requests.",
      },
    ],
    related: [
      "solutions/it-support",
      "solutions/it-support/analytics",
      "sla",
      "sla/escalation-chains",
      "solutions/facilities/sla",
      "use-cases/sla-compliance",
      "pricing/pro",
    ],
    cta: {
      title: "Put a clock on every IT ask",
      body: "Start the 14-day trial with Pro features and watch late requests escalate on their own.",
    },
  },

  // ───────────────────────── ANALYTICS ─────────────────────────
  {
    path: "solutions/it-support/analytics",
    title: "IT Support Analytics and Technician Scorecards",
    description:
      "See IT accept times, delivery times, on-time rate and ratings, plus which rooms and items buzz most. Full analytics and scorecards are part of ZapBuzzer Pro.",
    h1: "Know how fast IT really responds, and where it’s needed",
    eyebrow: "IT Analytics",
    lead:
      "Because every ZapBuzzer request is timed from tap to rating, IT analytics come without extra data entry. Pro shows how fast your team accepts and delivers, who earns 5★, and which rooms keep calling.",
    keywords: [
      "it support analytics",
      "it response time report",
      "technician scorecard",
      "it request metrics",
      "meeting room issue report",
    ],
    heroVisual: "analytics",
    sections: [
      {
        type: "prose",
        heading: "Data you already have, finally visible",
        paragraphs: [
          "Most small IT teams know they’re busy but can’t show it. Requests came by phone and WhatsApp, so there’s no count, no timing and no way to argue for another technician or better cables in Room B.",
          "With ZapBuzzer, every request already has timestamps for buzz, accept, start and delivery, plus a rating. Analytics turns those into a picture of IT workload and quality.",
        ],
      },
      {
        type: "visual",
        visual: "analytics",
        heading: "The IT dashboard",
        body: "KPI tiles for accept time, delivery time, on-time rate and rating, with a chart of request volume over the day.",
      },
      {
        type: "metrics",
        heading: "Core IT metrics",
        items: [
          { metric: "Average accept time", meaning: "From tap to someone owning it. Pilot offices averaged 32 seconds across request types." },
          { metric: "Average delivery time", meaning: "From tap to delivered; what employees feel." },
          { metric: "On-time delivery", meaning: "Share meeting their SLA deadline." },
          { metric: "Average rating", meaning: "Requester satisfaction, 1–5★." },
          { metric: "Peak hours", meaning: "When the office buzzes most, often just before meetings." },
        ],
      },
      {
        type: "visual",
        visual: "scorecard",
        heading: "Scorecards that credit the work",
        body:
          "Each technician gets a scorecard with requests handled, on-time % and average rating. It’s designed for fair attribution, not surveillance.",
      },
      {
        type: "scenario",
        heading: "Making the case for a second cable box",
        persona: "Rohan, IT Lead",
        setting: "Monthly review with the office manager.",
        timeline: [
          { time: "Week 1", event: "Rohan notices HDMI requests from 4th-floor rooms take twice as long to deliver." },
          { time: "Week 2", event: "The data shows the cable box is on the 1st floor." },
          { time: "Week 3", event: "A second box goes on the 4th floor." },
          { time: "Week 4", event: "4th-floor HDMI delivery time drops to match the rest." },
        ],
        outcome: "A decision backed by request data instead of anecdotes.",
      },
      {
        type: "audience",
        heading: "Who uses IT analytics",
        items: [
          { role: "IT lead", benefit: "Staffing, stock placement and recurring faults." },
          { role: "Technicians", benefit: "Visible credit for fast, well-rated work." },
          { role: "Office manager", benefit: "Which rooms need investment." },
          { role: "Owner", benefit: "Service quality and request costs in one view." },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Plan note",
        body: "Full analytics, scorecards and reports are on Pro. Free keeps 30 days of request history.",
      },
      {
        type: "prose",
        heading: "Reading IT analytics without over-reading them",
        paragraphs: [
          "Numbers from a small IT team can swing a lot week to week, so look at trends over a month rather than reacting to a single bad day. A slow Monday might just be a projector failure in the Board Room that took an hour to diagnose.",
          "Pair the timing numbers with ratings. Fast delivery with low ratings suggests rushed fixes; slower delivery with 5★ may simply be thorough work on harder problems. And compare by item: HDMI requests and login help have very different natural speeds, so a single average across everything hides more than it shows.",
          "Finally, share the good news. Scorecards exist so technicians get credit for the work they do all day, which in most offices goes unseen.",
        ],
      },
      {
        "type": "table",
        "heading": "Turning IT numbers into decisions",
        "headers": [
          "What you see",
          "What it may mean",
          "What to try"
        ],
        "rows": [
          [
            "Accept time rises after 5 pm",
            "Fewer technicians on shift",
            "Stagger one shift or add a cover person"
          ],
          [
            "Login help rated lower than hardware",
            "Fixes are rushed or incomplete",
            "Add a short checklist for password resets"
          ],
          [
            "One room dominates projector requests",
            "Faulty unit or confusing setup",
            "Repair or label the inputs"
          ]
        ]
      },
      {
        "type": "checklist",
        "heading": "A monthly IT review agenda",
        "items": [
          "On-time % this month vs. last month.",
          "Top five items by volume and their average delivery time.",
          "Rooms or floors with repeat issues.",
          "Scorecard highlights to thank people for."
        ]
      },
      {
        "type": "prose",
        "heading": "Analytics for a one- or two-person IT desk",
        "paragraphs": [
          "Small teams sometimes assume analytics is for big helpdesks. In practice it matters more when IT is one or two people, because there is nobody else to vouch for how much they handle. A month of request counts, accept times and 5★ ratings is the clearest way to show an owner what the IT desk does between the big projects.",
          "It also protects their time. When the data shows that half the week goes on HDMI cables and password resets, it becomes easier to justify spare cables in every room or a short login guide for new joiners."
        ]
      },
    ],
    faqs: [
      {
        "q": "Do employees see IT analytics?",
        "a": "Analytics and reports are meant for the people running the service, such as the IT lead, office manager and owner. Access follows the roles and permissions you set, and request costs stay in the owner-only view."
      },
      {
        "q": "Does analytics include requests that were never accepted?",
        "a": "Yes. Every request is timed from the buzz, so unaccepted or escalated requests show up rather than disappearing from the numbers."
      },
      {
        q: "Can I export IT analytics?",
        a: "Pro includes reports for sharing results. For data feeds into other systems, the REST API and webhooks on Enterprise are the route.",
      },
      {
        q: "Are scorecards used to rank technicians publicly?",
        a: "That’s your choice through roles and permissions. ZapBuzzer’s aim is fair attribution, so good work is visible, not to create a nag tool.",
      },
      {
        q: "Can I see analytics per office?",
        a: "Yes. With multi-location on Pro you can look at each office separately.",
      },
      {
        q: "How soon is there useful data?",
        a: "Within the first week of real use most teams see clear patterns in peak times and common items.",
      },
    ],
    related: [
      "solutions/it-support",
      "solutions/it-support/sla",
      "analytics",
      "analytics/response-time",
      "analytics/staff",
      "solutions/facilities/analytics",
      "use-cases/it-manager",
      "pricing/pro",
    ],
    cta: {
      title: "See your IT desk in numbers",
      body: "Run the 14-day trial and get your first IT response-time picture within a week.",
    },
  },
];
