import type { PageContent } from "../types";

const pilotNote =
  "Averages from pilot offices in their first month on ZapBuzzer. Treat them as a reference point, not a guarantee; results depend on your office, team and setup.";

export const pages: PageContent[] = [
  // ───────────────────────────── Chase calls ─────────────────────────────
  {
    path: "use-cases/stop-office-chase-calls",
    title: "Stop Office Chase Calls for Good",
    description:
      "Chase calls happen when nobody can see a request's status. ZapBuzzer shows who accepted it and the ETA, so nobody has to call to ask if it is coming.",
    h1: "Nobody should have to call to ask “is it coming?”",
    eyebrow: "Problem · Chase calls",
    lead:
      "A chase call is the second, third or fourth call about the same request. It exists for one reason: the requester cannot see what is happening. ZapBuzzer makes the status visible, so the chase has nothing left to ask.",
    keywords: ["stop chase calls", "office follow up calls", "request status visibility", "office request eta", "reduce follow ups"],
    heroVisual: "request-timeline",
    sections: [
      {
        type: "prose",
        heading: "Anatomy of a chase call",
        paragraphs: [
          "The first call places the request. The second call checks it was heard. The third asks where it is. Each one interrupts the person doing the work, which makes the job slower, which causes the next call.",
          "Chase calls are not a discipline problem. They are an information problem: the requester has no signal between asking and receiving.",
        ],
      },
      {
        type: "visual",
        visual: "request-timeline",
        heading: "Every step visible to the person who asked",
        body:
          "A ZapBuzzer request moves through buzzed, accepted, started with ETA, delivered and rated. The requester sees each change, along with the name and photo of the person handling it.",
      },
      {
        type: "comparison",
        heading: "What the requester knows",
        columns: ["Phone and chat", "ZapBuzzer"],
        rows: [
          { label: "Was it received?", a: "Unknown until someone replies", b: "Shows as accepted, usually within seconds" },
          { label: "Who is handling it?", a: "Unknown", b: "Name and photo" },
          { label: "When will it arrive?", a: "Call and ask", b: "ETA on screen" },
          { label: "Is it late?", a: "You notice when it does not come", b: "Deadline tracked; overdue items escalate" },
          { label: "Was it done?", a: "You see it, or you don't", b: "Marked delivered, optionally with a photo" },
        ],
      },
      {
        type: "scenario",
        heading: "The pitch that needed prints",
        persona: "Kavya, Sales Lead",
        setting: "24 colour copies needed in 10 minutes.",
        timeline: [
          { time: "10:50", event: "Kavya uploads the PDF and requests 24 colour copies to the meeting room." },
          { time: "10:50", event: "The print room accepts. Kavya sees the operator's name and ETA." },
          { time: "10:58", event: "Prints arrive before her demo." },
        ],
        outcome: "Kavya's words: “Print jobs land at my desk before the client even sits down. Zero chase calls.”",
      },
      {
        type: "stats",
        heading: "Pilot office results",
        items: [
          { value: "32s", label: "Average accept time" },
          { value: "−87%", label: "Phone calls" },
          { value: "96%", label: "On-time delivery" },
        ],
        note: pilotNote,
      },
      {
        type: "workflow",
        heading: "How the chase disappears",
        steps: [
          { title: "Fast acknowledgement", body: "The whole team is pinged and the first free person accepts, so the requester gets a signal right away." },
          { title: "Named owner", body: "Seeing a name removes the “did anyone see it?” call." },
          { title: "ETA", body: "Seeing a time removes the “where is it?” call." },
          { title: "Automatic escalation", body: "If it runs late, the system escalates instead of the requester." },
        ],
      },
      {
        type: "checklist",
        heading: "Make it stick",
        items: [
          "Ask staff to set an ETA when they start every job.",
          "Tell employees: if you can see the status, do not call.",
          "Make sure staff have the mobile app so accepts happen fast.",
          "Review any request that drew a call anyway and fix the cause.",
        ],
      },
      {
        type: "table",
        heading: "What one chased request really costs",
        intro: "Using the canonical boss-cabin coffee as the example.",
        headers: ["", "Chased by phone", "Buzzed in ZapBuzzer"],
        rows: [
          ["Time to arrive", "25 minutes", "4 minutes"],
          ["Phone calls", "3", "0"],
          ["People interrupted", "Requester, pantry, often a third person to find them", "Only the person who accepts"],
          ["Outcome", "1 cold coffee", "1 hot coffee"],
        ],
      },
      {
        type: "audience",
        heading: "Who stops chasing",
        items: [
          { role: "Sales leads", benefit: "Prints and room set-up confirmed on screen before a client meeting." },
          { role: "Executives", benefit: "No stepping out of a call to ask where the coffee is." },
          { role: "Pantry and print staff", benefit: "Fewer calls about jobs they are already doing." },
          { role: "Office managers", benefit: "No longer the person everyone calls to find out what is happening." },
        ],
      },
      {
        type: "prose",
        heading: "Why visibility beats reminders",
        paragraphs: [
          "Some offices try to fix chase calls with rules: wait ten minutes before following up, or send all requests through one coordinator. Rules add delay and a bottleneck. Showing the status removes the reason to chase at all, and it costs the person doing the job nothing beyond tapping Accept and setting an ETA.",
        ],
      },
    ],
    faqs: [
      { q: "Why do people still call after we roll out an app?", a: "Usually because the app does not tell them anything new. ZapBuzzer shows the owner, ETA and status, which answers the questions a chase call asks." },
      { q: "What if the ETA slips?", a: "The requester can still see the request is in progress and who owns it. If it passes the deadline, it escalates to a manager automatically." },
      { q: "How much did phone calls drop in pilots?", a: "Pilot offices saw phone calls fall by 87% in their first month. That is an average across pilots, not a promise for every office." },
      { q: "Do staff get interrupted less too?", a: "Yes. Fewer chase calls means the person doing the job is not stopping to answer the phone about that same job." },
    ],
    related: ["use-cases/reduce-phone-calls", "features/eta-tracking", "features/request-tracking", "use-cases/sales", "compare/phone-calls", "free-trial"],
    cta: { title: "End the chase", body: "Try ZapBuzzer free for 14 days and see how many calls your office stops making." },
  },

  // ───────────────────────────── WhatsApp ─────────────────────────────
  {
    path: "use-cases/reduce-whatsapp-requests",
    title: "Move Office Requests Out of WhatsApp",
    description:
      "The pantry WhatsApp group buries orders under chatter. ZapBuzzer turns requests into tracked jobs, and on Pro still pings staff on WhatsApp itself.",
    h1: "Your pantry WhatsApp group can finally go quiet",
    eyebrow: "Problem · WhatsApp requests",
    lead:
      "WhatsApp groups are where office requests go to get lost: orders mixed with good-morning messages, nobody sure who replied, nothing timed. ZapBuzzer keeps the convenience of a ping and adds ownership, deadlines and a record.",
    keywords: ["office whatsapp group requests", "pantry whatsapp group", "replace whatsapp office requests", "whatsapp request tracking", "office request app"],
    heroVisual: "before-after",
    sections: [
      {
        type: "prose",
        heading: "Why WhatsApp groups break",
        paragraphs: [
          "A group chat is a conversation, not a queue. A coffee order posted at 10:02 scrolls out of view by 10:05. Two people reply “ok”, so each assumes the other has it. Someone sends a voice note with no location.",
          "There is no deadline, no owner, and no record. When a request is missed, the chat history gives you an argument, not an answer.",
        ],
      },
      {
        type: "comparison",
        heading: "WhatsApp group vs ZapBuzzer",
        columns: ["Pantry WhatsApp group", "ZapBuzzer"],
        rows: [
          { label: "Request format", a: "Free text, voice notes, forwards", b: "Catalogue item, destination and note" },
          { label: "Ownership", a: "Whoever says ok first, maybe", b: "Whoever taps Accept first becomes the owner" },
          { label: "Missed messages", a: "Scrolled away", b: "Pings repeat until accepted" },
          { label: "Deadline", a: "None", b: "Every request is timed" },
          { label: "Record", a: "Chat history", b: "Status, timings, ratings and audit log" },
        ],
      },
      {
        type: "visual",
        visual: "notification-flow",
        heading: "Keep the ping, lose the group",
        body:
          "On Pro, ZapBuzzer can notify staff on WhatsApp and Telegram as well as the app and email. Staff still hear about requests where they already look; the request itself lives in a tracked queue.",
      },
      {
        type: "scenario",
        heading: "The 9 a.m. coffee rush",
        persona: "Priya, Office Manager",
        setting: "Twelve coffee orders in ten minutes, two pantry staff.",
        timeline: [
          { time: "09:00", event: "Orders arrive as buzzes, each with a destination." },
          { time: "09:00", event: "Both pantry staff are pinged; each order is accepted by one of them." },
          { time: "09:12", event: "All twelve delivered; nobody posted in the group." },
        ],
        outcome: "Priya's words: “Coffee arrives before anyone asks twice. The pantry WhatsApp group is finally quiet.”",
      },
      {
        type: "stats",
        heading: "Pilot office results",
        items: [
          { value: "32s", label: "Average accept time" },
          { value: "96%", label: "On-time delivery" },
          { value: "4.8★", label: "Average staff rating" },
        ],
        note: pilotNote,
      },
      {
        type: "checklist",
        heading: "Moving off the group",
        items: [
          "Turn the most common group messages into catalogue items.",
          "On Pro, connect WhatsApp pings for staff who rely on it.",
          "Pin a message in the group: requests now go through ZapBuzzer.",
          "After a week, stop accepting requests in the group.",
          "Keep the group for social chat if people like it.",
        ],
      },
      {
        type: "problem-solution",
        heading: "What WhatsApp is good at, and what it is not",
        intro: "WhatsApp is not the enemy. It is a great way to reach people and a poor way to run a queue.",
        problem: {
          title: "Using a group as the queue",
          points: [
            "Orders compete with greetings, forwards and photos.",
            "“Ok” from two people means nobody is sure who owns it.",
            "A missed order leaves no trace until someone complains.",
            "New staff must scroll back to understand anything.",
          ],
        },
        solution: {
          title: "Using WhatsApp as a ping",
          points: [
            "The request lives in ZapBuzzer with item, room and note.",
            "WhatsApp (on Pro) just tells staff something is waiting.",
            "Accepting in the app names one owner for everyone to see.",
            "The record stays, timed and rated.",
          ],
        },
      },
      {
        type: "visual",
        visual: "staff-queue",
        heading: "What pantry staff see instead of a chat",
        body:
          "A short list of open requests, each with its destination and note and an Accept button. When a colleague takes one, it drops off everyone else's list, which is exactly what a group chat cannot do.",
      },
    ],
    faqs: [
      { q: "Do staff still get WhatsApp messages?", a: "On Pro, yes: ZapBuzzer can ping staff on WhatsApp and Telegram alongside the app and email. On Free, notifications are by email and the app." },
      { q: "Is ZapBuzzer just a WhatsApp bot?", a: "No. Notifications are one part. The core is the request itself: a catalogue item with an owner, a deadline, a status and a rating." },
      { q: "What about requests that do not fit the catalogue?", a: "Add a note to the closest item, or add a new item. Most offices find a short catalogue covers the majority of requests." },
      { q: "Will people resist moving off WhatsApp?", a: "Requesters usually switch quickly because buzzing is faster than typing. The key is staff responding through ZapBuzzer so the new way clearly works better." },
      { q: "Can we keep the old group for announcements?", a: "Yes. Many offices keep a group for social chat and notices and simply stop taking requests there. The point is that orders live where they can be owned and timed." },
      { q: "How long does the switch usually take?", a: "Setup takes an afternoon. Habits take a week or two, mostly depending on whether staff consistently respond through ZapBuzzer rather than the group." },
    ],
    related: ["compare/whatsapp", "notifications/whatsapp", "solutions/pantry", "use-cases/office-manager", "use-cases/prevent-lost-requests", "pricing/pro"],
    cta: { title: "Quiet the group", body: "Start the 14-day trial and move your pantry orders into a tracked queue." },
  },

  // ───────────────────────────── Phone calls ─────────────────────────────
  {
    path: "use-cases/reduce-phone-calls",
    title: "Reduce Internal Office Phone Calls",
    description:
      "Pilot offices cut internal phone calls by 87% in their first month on ZapBuzzer. Here is where those calls come from and how one tap replaces them.",
    h1: "Fewer calls, and a much quieter office",
    eyebrow: "Problem · Phone calls",
    lead:
      "Internal phone calls for coffee, prints and IT help interrupt two people at once. Pilot offices reduced phone calls by 87% in their first month on ZapBuzzer by replacing them with a tap, a ping and a visible status.",
    keywords: ["reduce office phone calls", "internal phone calls office", "pantry extension calls", "office noise reduction", "quiet office"],
    heroVisual: "before-after",
    sections: [
      {
        type: "prose",
        heading: "Where internal calls come from",
        paragraphs: [
          "Most internal calls fall into three groups: placing a request, checking a request, and escalating a request that was missed. In a busy office the pantry extension and the IT desk line ring all morning.",
          "Each call needs both people free at the same moment. That is why the classic coffee to the boss cabin can take three calls and 25 minutes.",
        ],
      },
      {
        type: "visual",
        visual: "before-after",
        heading: "The same coffee, twice",
        body: "Before: 25 minutes, three phone calls, one cold coffee. After: four minutes, zero calls, one hot coffee.",
      },
      {
        type: "table",
        heading: "Which call each feature replaces",
        headers: ["Call type", "Replaced by"],
        rows: [
          ["Placing the request", "One tap on a catalogue item with destination and note"],
          ["“Did you get my message?”", "Accepted status with the owner's name and photo"],
          ["“Where is it?”", "ETA shown once the job is started"],
          ["Calling the manager when it is late", "Automatic escalation on deadline (escalation chain on Pro)"],
        ],
      },
      {
        type: "stats",
        heading: "Pilot office results",
        items: [
          { value: "−87%", label: "Phone calls" },
          { value: "32s", label: "Average accept time" },
          { value: "96%", label: "On-time delivery" },
          { value: "4.8★", label: "Average staff rating" },
        ],
        note: pilotNote,
      },
      {
        type: "scenario",
        heading: "A board call, uninterrupted",
        persona: "Aarav, CEO",
        setting: "Board call in the boss cabin.",
        timeline: [
          { time: "10:02", event: "Aarav taps Coffee → Boss Cabin." },
          { time: "10:02", event: "The buzz reaches the pantry on Telegram, and Raj accepts within 12 seconds." },
          { time: "10:06", event: "Coffee delivered. No call made." },
        ],
        outcome: "“The office runs quieter. Nobody's shouting names down the hall.” — Aarav Sharma, Founder & CEO, Acme HQ",
      },
      {
        type: "callout",
        tone: "info",
        title: "Measure your own baseline",
        body:
          "Before rollout, ask the pantry and IT desk to tally calls for a week. Compare after a month. Your drop may be bigger or smaller than the pilot average, and your own number is the one that matters.",
      },
      {
        type: "comparison",
        heading: "Phone extension vs one tap",
        columns: ["Calling an extension", "Buzzing in ZapBuzzer"],
        rows: [
          { label: "Needs both people free", a: "Yes, at the same moment", b: "No, staff accept when they are free" },
          { label: "Reaches the team", a: "One phone, one person", b: "Whole team, on every enabled channel" },
          { label: "Details", a: "Spoken, easily misheard", b: "Item, destination and written note" },
          { label: "Noise", a: "Ringing and shouting across the floor", b: "Silent for everyone except the staff concerned" },
          { label: "Record", a: "None", b: "Timed, owned and rated" },
        ],
      },
      {
        type: "workflow",
        heading: "Rolling out to cut calls",
        steps: [
          { title: "Baseline", body: "Tally calls to the pantry, print room and IT desk for one week." },
          { title: "Catalogue", body: "Turn the most-called reasons into catalogue items with destinations." },
          { title: "Staff phones", body: "Install the mobile app for staff so buzzes ring through even on silent." },
          { title: "Redirect", body: "When someone calls with a routine ask, staff politely ask them to buzz it." },
          { title: "Compare", body: "Recount after a month and share the drop with the office." },
        ],
      },
      {
        type: "prose",
        heading: "The quiet office",
        paragraphs: [
          "ZapBuzzer's stated mission is building the quiet office. Fewer calls is the measurable part. The part people notice is the floor itself: no extension ringing out, nobody calling a name down the corridor, fewer meetings paused while someone takes a call about tea.",
        ],
      },
      {
        "type": "metrics",
        "heading": "Measuring the drop in calls",
        "intro": "Pilot offices saw 87% fewer phone calls in month one. To measure your own:",
        "items": [
          {
            "metric": "Calls to pantry or IT per day",
            "meaning": "Count for a week before rollout and again a month after."
          },
          {
            "metric": "Requests raised in ZapBuzzer",
            "meaning": "Should rise as calls fall: the same needs, a quieter channel."
          },
          {
            "metric": "Accept time",
            "meaning": "Fast accepts remove the main reason to call and check."
          }
        ]
      },
    ],
    faqs: [
      {
        "q": "What about truly urgent requests?",
        "a": "The mobile app still rings when a phone is locked or set to silent, and it offers one tap to summon staff or security or raise an emergency."
      },
      { q: "Does the 87% figure apply to every office?", a: "It is the average drop measured across pilot offices during month one. Offices with heavy phone use for requests tend to see the clearest change." },
      { q: "Will staff miss requests without a ringing phone?", a: "A locked or silenced phone still rings with the mobile app, and notifications repeat until someone accepts." },
      { q: "What about genuine emergencies?", a: "The mobile app includes one tap to summon staff or security or raise an emergency. Keep your normal emergency procedures as well." },
      { q: "Can we still call when needed?", a: "Of course. ZapBuzzer removes routine calls, so the phone is free for the conversations that actually need it." },
      { q: "Which calls disappear first?", a: "Usually the follow-ups: “did you get my message?” and “where is it?”. Those are answered on screen by the accepted status and the ETA, so they go before the initial request calls do." },
      { q: "How should we measure the reduction?", a: "Ask the pantry, print room and IT desk to tally calls for one week before rollout and one week after the first month. It is rough, but it is your office's own number." },
    ],
    related: ["use-cases/stop-office-chase-calls", "compare/phone-calls", "mobile-app/notifications", "workflows/coffee-request", "use-cases/ceo", "free-trial"],
    cta: { title: "Count your calls, then cut them", body: "Start the free trial and compare your call volume after the first month." },
  },

  // ───────────────────────────── Lost requests ─────────────────────────────
  {
    path: "use-cases/prevent-lost-requests",
    title: "Prevent Lost Office Requests",
    description:
      "Requests get lost in DMs, groups and memory. ZapBuzzer gives every request an owner, a deadline and repeat pings, so none quietly disappear.",
    h1: "No request should quietly disappear",
    eyebrow: "Problem · Lost requests",
    lead:
      "A lost request is worse than a slow one: nobody is working on it and nobody knows. ZapBuzzer closes the three gaps where requests get lost, which are receipt, ownership and follow-through.",
    keywords: ["lost office requests", "missed requests office", "request tracking office", "dropped tickets", "office request ownership"],
    heroVisual: "escalation",
    sections: [
      {
        type: "prose",
        heading: "Three places requests get lost",
        paragraphs: [
          "Receipt: the message went to a group nobody was reading, or to one person on leave. Ownership: two people saw it and each assumed the other would act. Follow-through: someone accepted it, got pulled into something else and forgot.",
          "ZapBuzzer was started in an office where print jobs got lost in a WhatsApp group and IT tickets died in someone's DMs. Each feature below closes one of those gaps.",
        ],
      },
      {
        type: "problem-solution",
        heading: "Each gap, closed",
        problem: {
          title: "Where it slips",
          points: [
            "Sent to the wrong person or a silent group.",
            "Seen by many, owned by none.",
            "Accepted, then forgotten.",
          ],
        },
        solution: {
          title: "What catches it",
          points: [
            "Routed to the whole right team; pings repeat until accepted.",
            "First accept wins, with a named owner.",
            "Deadline on every request; overdue ones escalate.",
          ],
        },
      },
      {
        type: "visual",
        visual: "escalation",
        heading: "A safety net that climbs",
        body: "When a request passes its deadline, it escalates to a manager. On Pro, an escalation chain keeps climbing until someone acts.",
      },
      {
        type: "comparison",
        heading: "DMs vs a routed queue",
        columns: ["DMs and groups", "ZapBuzzer"],
        rows: [
          { label: "Person on leave", a: "Request waits", b: "Whole team pinged" },
          { label: "Nobody responds", a: "Silence", b: "Pings repeat" },
          { label: "Owner forgets", a: "Found out days later", b: "Escalates on deadline" },
          { label: "Proof it was done", a: "None", b: "Delivered status, optional photo, rating" },
        ],
      },
      {
        type: "scenario",
        heading: "A facilities ticket that would have rotted",
        persona: "Deepak, Admin Head",
        setting: "AC complaint in Conference Room B, technician pulled away mid-job.",
        timeline: [
          { time: "13:20", event: "Om taps Facilities → Conference Room B." },
          { time: "13:21", event: "A technician accepts, then is called to another floor." },
          { time: "13:35", event: "The 15-minute deadline passes; the request escalates to Deepak." },
          { time: "13:40", event: "Deepak reassigns and the fix is done." },
        ],
        outcome: "Deepak: “Facilities tickets auto-escalate now. Nothing rots in someone's DMs.”",
      },
      {
        type: "stats",
        heading: "Pilot office results",
        items: [
          { value: "96%", label: "On-time delivery" },
          { value: "32s", label: "Average accept time" },
        ],
        note: pilotNote,
      },
      {
        type: "visual",
        visual: "notification-flow",
        heading: "Received, on every channel",
        body:
          "The first gap is receipt. A buzz goes to the app and email on every plan, and to Telegram and WhatsApp as well on Pro, all at once, and keeps pinging until someone accepts. A request cannot sit in an unread group.",
      },
      {
        type: "metrics",
        heading: "Signals that requests are slipping",
        items: [
          { metric: "Unaccepted requests", meaning: "Items still waiting for an owner. Should be near zero most of the day." },
          { metric: "Overdue requests", meaning: "Accepted but past deadline. These are the ones that used to get lost." },
          { metric: "Escalations per week", meaning: "How often the safety net catches something, and in which category." },
          { metric: "On-time delivery", meaning: "The overall health check. Pilot offices averaged 96% in month one." },
        ],
      },
      {
        type: "checklist",
        heading: "Close the gaps in your office",
        items: [
          "Route each category to a team, never to a single person.",
          "Make sure every staff member has notifications working before launch.",
          "Set a deadline for every category, even generous ones.",
          "On Pro, end the escalation chain with someone who can reassign work.",
          "Check the overdue list daily for the first two weeks.",
        ],
      },
      {
        "type": "checklist",
        "heading": "Is your office losing requests? A quick audit",
        "intro": "Answer these honestly for one ordinary week.",
        "items": [
          "Are requests sent to one named person rather than a team?",
          "Do people still use DMs or personal phone numbers to ask for help?",
          "Would anyone notice if a request was never picked up?",
          "Does anything happen automatically when a job runs late?",
          "Can you say, today, how many requests the pantry handled yesterday?"
        ]
      },
      {
        "type": "prose",
        "heading": "Lost requests cost trust, not just time",
        "paragraphs": [
          "When a print job or an AC complaint disappears once, people adapt: they ask twice, they call as well as message, they walk over to check. That double-asking is what floods the pantry and IT desk, and it continues long after the original gap is fixed.",
          "Getting trust back takes a visible record. When requesters can see their request was received, who took it and when it was delivered, the habit of asking twice fades within a few weeks."
        ]
      },
    ],
    faqs: [
      {
        "q": "What if nobody accepts a request?",
        "a": "Notifications repeat until someone accepts. If the deadline still passes, the request auto-escalates to a manager, so it cannot quietly sit unowned."
      },
      { q: "What happens if every staff member ignores a request?", a: "Notifications repeat until someone accepts. If it still passes its deadline, it escalates to a manager." },
      { q: "Is escalation on the Free plan?", a: "Every request is timed. SLA with an escalation chain is part of Pro." },
      { q: "Can we see requests that were never completed?", a: "Yes. Open and overdue requests stay visible in the queue until they are delivered, so they cannot vanish." },
      { q: "How long is history kept?", a: "Free keeps the last 30 days of history. Pro includes audit logs and reports." },
      { q: "What if a staff member accepts and then goes on break?", a: "The request stays theirs and keeps its deadline. If it is not delivered in time, it escalates so a manager can reassign it before the requester has to chase." },
      { q: "Does routing to a team cause duplicate work?", a: "No. Only one person can accept a request. Once they do, everyone else sees it is taken." },
      { q: "Can we prove a request was completed?", a: "Each request is marked delivered, optionally with a photo, and then rated by the requester. That is usually enough to settle any “I never got it” question." },
    ],
    related: ["sla/overdue-requests", "sla/automatic-escalation", "features/request-tracking", "use-cases/admin-team", "use-cases/reduce-whatsapp-requests", "pricing/pro"],
    cta: { title: "Catch every request", body: "Try ZapBuzzer free for 14 days, with SLA timers and escalation included in the Pro trial." },
  },

  // ───────────────────────────── Response time ─────────────────────────────
  {
    path: "use-cases/improve-response-time",
    title: "Improve Office Request Response Time",
    description:
      "Pilot offices averaged a 32-second accept time with ZapBuzzer. See how team-wide pings and first-accept-wins make office response time faster.",
    h1: "From “someone will get to it” to 32 seconds",
    eyebrow: "Problem · Response time",
    lead:
      "Response time is mostly waiting for the right person to notice. ZapBuzzer pings the whole team on every channel at once and lets the first free person take it. Pilot offices averaged a 32-second accept time in their first month.",
    keywords: ["office response time", "request accept time", "faster office service", "first accept wins", "response time metrics"],
    heroVisual: "acceptance",
    sections: [
      {
        type: "prose",
        heading: "Where response time goes",
        paragraphs: [
          "Break a slow request into parts: the time until someone notices, the time until someone commits, and the time to do the job. In most offices the first two are the largest, and they are pure waiting.",
          "A request sent to one person waits for that person. A request sent to a team on every channel waits only for the fastest free person.",
        ],
      },
      {
        type: "visual",
        visual: "acceptance",
        heading: "First-accept-wins",
        body: "The request goes to the whole team. Whoever is free taps Accept and owns it; the others carry on. No negotiating, no duplicates.",
      },
      {
        type: "table",
        heading: "Response time, broken down",
        headers: ["Phase", "Typical delay without a system", "What ZapBuzzer does"],
        rows: [
          ["Notice", "Waits for one person to check messages", "Pings app and email, plus Telegram and WhatsApp on Pro, repeating until accepted"],
          ["Commit", "Waits for someone to reply", "First tap on Accept owns it"],
          ["Deliver", "Untracked", "ETA, deadline and escalation"],
        ],
      },
      {
        type: "stats",
        heading: "Pilot office results",
        items: [
          { value: "32s", label: "Average accept time" },
          { value: "96%", label: "On-time delivery" },
          { value: "4.8★", label: "Average staff rating" },
        ],
        note: pilotNote,
      },
      {
        type: "scenario",
        heading: "HDMI in three minutes",
        persona: "Tanvi, Designer",
        setting: "Client review, no HDMI cable in the room.",
        timeline: [
          { time: "15:57", event: "Tanvi taps IT → HDMI needed." },
          { time: "15:57", event: "IT desk pinged; Priya accepts." },
          { time: "16:00", event: "Cable delivered." },
        ],
        outcome: "Three minutes from tap to cable, with nobody calling anyone.",
      },
      {
        type: "metrics",
        heading: "Response metrics to track",
        items: [
          { metric: "Accept time", meaning: "Buzz to Accept. Shows how quickly the team notices and commits." },
          { metric: "Delivery time", meaning: "Accept to Delivered. Shows how long the job itself takes." },
          { metric: "On-time rate", meaning: "Share delivered before the deadline." },
          { metric: "Accept time by hour", meaning: "Reveals understaffed periods." },
        ],
      },
      {
        type: "comparison",
        heading: "Single-person routing vs team routing",
        columns: ["Sent to one person", "Sent to the team, first accept wins"],
        rows: [
          { label: "Person busy or away", a: "Request waits", b: "Someone else takes it" },
          { label: "Fastest response", a: "That person's response", b: "The fastest free person's response" },
          { label: "Duplicate work", a: "Rare, but slow", b: "Prevented: one owner only" },
          { label: "Requester knows", a: "When they reply", b: "Name, photo and ETA on accept" },
        ],
      },
      {
        type: "checklist",
        heading: "Get your accept time down",
        items: [
          "Put every staff member who can handle a category on that category's team.",
          "Install the Android app on staff phones so buzzes ring on silent or locked screens.",
          "On Pro, add Telegram or WhatsApp pings for staff who live in those apps.",
          "Check accept time by hour and add cover where it spikes.",
          "Share the weekly number with staff; most teams enjoy beating it.",
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Accept time is not delivery time",
        body:
          "A fast accept tells the requester someone is on it. Delivery still depends on the job: a coffee takes minutes, an AC part may take longer. Track both, and use deadlines to keep the second honest.",
      },
      {
        "type": "scenario",
        "heading": "Same projector, two Tuesdays",
        "persona": "Om, Engineer",
        "setting": "A projector fails ten minutes before a sprint review.",
        "timeline": [
          {
            "time": "Before",
            "event": "Om messages the one facilities person he knows. She is on leave; nobody replies for 20 minutes."
          },
          {
            "time": "After, 9:50",
            "event": "Om taps IT & Facilities and picks Conference Room B."
          },
          {
            "time": "9:50",
            "event": "Everyone on the team is pinged; Deepak accepts within the minute."
          },
          {
            "time": "9:56",
            "event": "Projector working, request delivered and rated."
          }
        ],
        "outcome": "The speed came from routing to a team instead of a person, not from anyone working harder."
      },
      {
        "type": "callout",
        "tone": "tip",
        "title": "Fix accept time first",
        "body": "Accept time is the easiest number to move. Adding Telegram or WhatsApp pings (Pro) and keeping enough people on each team in the busy hours usually cuts it before anything else changes."
      },
    ],
    faqs: [
      {
        "q": "What counts as response time in ZapBuzzer?",
        "a": "Usually accept time: the gap between a request being buzzed and someone tapping Accept. Delivery time and on-time rate are tracked separately, so you can tell a slow pickup from a slow job."
      },
      { q: "Is 32 seconds typical?", a: "It is the average accept time measured across pilot offices during month one. It measures time to accept, not to deliver." },
      { q: "Does pinging everyone cause chaos?", a: "No, because only one person can accept. The moment someone does, the others see it is taken." },
      { q: "Which channels speed things up most?", a: "The mobile app still rings when a phone is locked or silenced. On Pro, Telegram and WhatsApp pings reach staff where they already are." },
      { q: "Can we see response time per staff member?", a: "Yes, analytics and scorecards show who is fastest. Full analytics and scorecards are part of Pro." },
      { q: "What slows accept time down most?", a: "Notifications that staff do not hear. Make sure the mobile app is installed and allowed to ring, and on Pro add the channel each person actually checks." },
      { q: "Should we set targets for staff?", a: "Share the team number first and let people see it improve. Individual targets work better once everyone trusts the data." },
      { q: "Does faster accept mean rushed work?", a: "Accepting only claims the job. Delivery still has its own deadline and rating, so quality is tracked separately from speed." },
    ],
    related: ["features/first-accept-wins", "analytics/acceptance-time", "analytics/response-time", "notifications/multi-channel", "use-cases/it-manager", "pricing/pro"],
    cta: { title: "Measure your accept time", body: "Start the 14-day trial and see your office's average accept time by the end of week one." },
  },

  // ───────────────────────────── Tracking ─────────────────────────────
  {
    path: "use-cases/track-office-requests",
    title: "Track Every Office Request End to End",
    description:
      "Track office requests from buzz to rating: status, owner, ETA, deadline and delivery in one queue, with analytics on volume, timing and ratings.",
    h1: "Know where every request stands",
    eyebrow: "Problem · Tracking",
    lead:
      "If you cannot see your office's requests, you cannot manage them. ZapBuzzer tracks every request from the tap to the rating, and turns the stream into analytics you can act on.",
    keywords: ["track office requests", "office request tracking", "internal request crm", "request status", "office request analytics"],
    heroVisual: "request-dashboard",
    sections: [
      {
        type: "prose",
        heading: "Untracked work is invisible work",
        paragraphs: [
          "Offices handle hundreds of small requests a week, and most leave no trace. Nobody can say how many coffees, prints or IT fixes happened, how long they took, or who did them.",
          "ZapBuzzer sees itself as the internal-request CRM that offices have long been missing: each request turns into a record with a lifecycle.",
        ],
      },
      {
        type: "visual",
        visual: "request-dashboard",
        heading: "One live view",
        body: "All open requests, their status, owner, ETA and deadline. Overdue items stand out so you know where to look.",
      },
      {
        type: "table",
        heading: "What each stage records",
        headers: ["Stage", "What is captured"],
        rows: [
          ["Buzzed", "Item, destination, note, requester, time"],
          ["Accepted", "Who accepted and how fast"],
          ["Started", "ETA"],
          ["Delivered", "Time and an optional photo"],
          ["Rated", "1–5★ from the requester"],
        ],
      },
      {
        type: "comparison",
        heading: "Spreadsheet log vs ZapBuzzer",
        columns: ["Manual log", "ZapBuzzer"],
        rows: [
          { label: "Data entry", a: "Someone types it later, if at all", b: "Captured as the request happens" },
          { label: "Timing", a: "Approximate", b: "Every request timed" },
          { label: "Ownership", a: "Often blank", b: "Named owner" },
          { label: "Quality", a: "Not captured", b: "Requester rating" },
        ],
      },
      {
        type: "scenario",
        heading: "A week in review",
        persona: "Vivek, Operations",
        setting: "Friday afternoon, preparing a summary for leadership.",
        timeline: [
          { time: "16:00", event: "Vivek opens analytics: volume by category and busiest hours." },
          { time: "16:10", event: "He notes Tuesday's 1 p.m. lunch spike and the print room's rating." },
          { time: "16:20", event: "He checks the owner-only spend on team lunches." },
        ],
        outcome: "A summary built from records instead of memory, in twenty minutes.",
      },
      {
        type: "stats",
        heading: "Pilot office results",
        items: [
          { value: "96%", label: "On-time delivery" },
          { value: "4.8★", label: "Average staff rating" },
        ],
        note: pilotNote,
      },
      {
        type: "visual",
        visual: "request-timeline",
        heading: "One request, start to finish",
        body:
          "Every request carries its own timeline: when it was buzzed, routed, accepted, started, delivered and rated. Open any one to see exactly where the minutes went.",
      },
      {
        type: "metrics",
        heading: "Questions tracking answers",
        items: [
          { metric: "How many requests?", meaning: "Volume by category, team and location, per day or week." },
          { metric: "How fast?", meaning: "Accept time and delivery time, overall and by hour." },
          { metric: "How well?", meaning: "On-time rate and average rating per team and person." },
          { metric: "When?", meaning: "The hours the office buzzes most, for staffing." },
          { metric: "At what cost?", meaning: "Owner-only spend on requests like lunch orders." },
        ],
      },
      {
        type: "audience",
        heading: "Who uses the tracking",
        items: [
          { role: "Employees", benefit: "See their own request's status without asking." },
          { role: "Staff", benefit: "A clear queue and credit for what they delivered." },
          { role: "Office and admin managers", benefit: "Live view of open and overdue work." },
          { role: "Owners", benefit: "Volume, service levels and spend in one place." },
        ],
      },
      {
        type: "prose",
        heading: "Tracking without extra work",
        paragraphs: [
          "The usual objection to tracking is the admin it creates: forms, logs, end-of-day spreadsheets. ZapBuzzer avoids that because the record is the work. An employee buzzing coffee creates the request; a pantry staffer tapping Accept records ownership and timing; marking it delivered closes it. Nobody types anything that was not already part of getting the coffee to the boss cabin.",
          "That is also why the data is trustworthy. It is captured at the moment each step happens, not reconstructed from memory at 6 p.m.",
        ],
      },
      {
        "type": "metrics",
        "heading": "Numbers to check every week",
        "items": [
          {
            "metric": "Requests by category",
            "meaning": "Shows where support staff time actually goes, pantry versus print versus IT."
          },
          {
            "metric": "Overdue requests",
            "meaning": "How many crossed their deadline, and in which category."
          },
          {
            "metric": "Average rating",
            "meaning": "A quick read on how requesters feel about the service."
          },
          {
            "metric": "Busiest hours",
            "meaning": "When the office buzzes most, and when to schedule more help."
          }
        ]
      },
      {
        "type": "callout",
        "tone": "info",
        "title": "How far back tracking goes",
        "body": "Free keeps the last 30 days of request history. Pro adds full analytics, audit logs and reports for longer-term tracking and month-on-month comparisons."
      },
    ],
    faqs: [
      {
        "q": "Do staff have to log requests by hand?",
        "a": "No. The record starts when the employee taps Buzz, and each accept, start and delivery adds its own timestamp. Nobody fills in a spreadsheet."
      },
      { q: "How far back can we see requests?", a: "Free shows the last 30 days of history. Pro adds full analytics, audit logs and reports." },
      { q: "Can employees track their own requests?", a: "Yes. Requesters see status, the owner's name and photo, and the ETA." },
      { q: "Can we track across locations?", a: "Multi-location is part of Pro, so requests from different offices are tracked in one workspace." },
      { q: "Can we pull the data into other systems?", a: "Enterprise includes a REST API and webhooks. Talk to us for details." },
      { q: "Do staff have to log anything manually?", a: "No. Tracking happens as a side effect of the work: buzz, accept, start, deliver. Nobody fills in a log afterwards." },
      { q: "What does a request record include?", a: "The item, destination, note, requester, who accepted it, the ETA, delivery time, an optional photo and the rating. Every step is timestamped." },
      { q: "Is tracking useful in a small office?", a: "Yes. Even with ten people on the Free plan, seeing the last 30 days of requests shows patterns you would otherwise miss, like the daily 4 p.m. tea rush." },
    ],
    related: ["features/request-tracking", "features/request-status", "analytics/requests", "use-cases/operations", "features/request-history", "pricing/pro"],
    cta: { title: "Start your request record", body: "Try ZapBuzzer free and see your first week of office requests in one place." },
  },

  // ───────────────────────────── Accountability ─────────────────────────────
  {
    path: "use-cases/staff-accountability",
    title: "Fair Staff Accountability for Office Teams",
    description:
      "ZapBuzzer gives support staff fair attribution: every accepted and delivered request is credited, rated and audit-logged, so good work is visible.",
    h1: "Accountability that is fair to the people doing the work",
    eyebrow: "Problem · Accountability",
    lead:
      "“I thought you'd do it” is not a people problem, it is a system problem. ZapBuzzer makes ownership explicit and credit automatic, so accountability feels fair to staff and useful to managers.",
    keywords: ["staff accountability office", "support staff performance", "office staff scorecard", "fair attribution", "staff ratings"],
    heroVisual: "scorecard",
    sections: [
      {
        type: "prose",
        heading: "Blame without data",
        paragraphs: [
          "When work is shared and unrecorded, accountability turns into blame. The staff member who happened to be nearest gets scolded; the one who quietly delivered forty requests gets nothing.",
          "ZapBuzzer puts people first. Rather than acting as one more nag tool, it gives staff scorecards and fair credit for their work.",
        ],
      },
      {
        type: "problem-solution",
        heading: "From blame to attribution",
        problem: {
          title: "Without records",
          points: ["Ownership decided after the fact", "Credit goes to whoever is visible", "Reviews rely on anecdotes"],
        },
        solution: {
          title: "With ZapBuzzer",
          points: ["First accept sets the owner", "Every delivery is credited by name", "Ratings and on-time rates inform reviews"],
        },
      },
      {
        type: "visual",
        visual: "scorecard",
        heading: "Scorecards",
        body: "Who is fastest, who gets 5★, who delivers on time. Full analytics and scorecards are included in Pro.",
      },
      {
        type: "visual",
        visual: "audit-log",
        heading: "An audit trail for every action",
        body: "Every action is audit-logged, with granular permissions per role. Audit logs and reports are part of Pro.",
      },
      {
        type: "scenario",
        heading: "Month-end recognition",
        persona: "Priya, Office Manager",
        setting: "Monthly team meeting with pantry and admin staff.",
        timeline: [
          { time: "17:00", event: "Priya opens the scorecards." },
          { time: "17:05", event: "Raj leads on requests delivered; Suresh has the best rating." },
          { time: "17:15", event: "Both are thanked by name, with the numbers to show why." },
        ],
        outcome: "Recognition based on records, which staff trusted because the first use of the data was credit.",
      },
      {
        type: "stats",
        heading: "Pilot office results",
        items: [
          { value: "4.8★", label: "Average staff rating" },
          { value: "96%", label: "On-time delivery" },
        ],
        note: pilotNote,
      },
      {
        type: "checklist",
        heading: "Introduce accountability well",
        items: [
          "Explain attribution to staff before launch, and lead with recognition.",
          "Limit who sees individual scorecards with role permissions.",
          "Look at patterns, not single bad ratings.",
          "Fix process causes, like short staffing at peak hours, before blaming people.",
        ],
      },
      {
        type: "comparison",
        heading: "Nag tool vs people-first accountability",
        columns: ["Typical nag tool", "ZapBuzzer"],
        rows: [
          { label: "Purpose", a: "Remind staff they are late", b: "Record who did what, and credit them" },
          { label: "Ownership", a: "Assigned top-down", b: "Chosen by the person who accepts" },
          { label: "Feedback", a: "Only when something goes wrong", b: "A rating on every delivery" },
          { label: "Visibility for staff", a: "Little", b: "Their own scorecard" },
        ],
      },
      {
        type: "metrics",
        heading: "What a fair scorecard includes",
        items: [
          { metric: "Requests accepted and delivered", meaning: "Workload, credited to the person who did it." },
          { metric: "Accept speed", meaning: "How quickly they pick up work when free." },
          { metric: "On-time rate", meaning: "Share of their jobs delivered before deadline." },
          { metric: "Average rating", meaning: "How requesters felt about the result. Pilot staff averaged 4.8★." },
        ],
      },
      {
        type: "prose",
        heading: "Ending “I thought you'd do it”",
        paragraphs: [
          "Most dropped office tasks are not laziness. Two people saw the same message and each reasonably assumed the other would act. First-accept-wins removes that ambiguity: the moment one person taps Accept, they are the owner and everyone else can see it. Ownership is chosen by the person doing the work, which feels very different from being assigned blame after the fact.",
        ],
      },
      {
        "type": "scenario",
        "heading": "A disputed late coffee",
        "persona": "Priya, Office Manager",
        "setting": "A director complains the pantry was slow during a client visit.",
        "timeline": [
          {
            "time": "10:02",
            "event": "Request buzzed for two coffees to Conference Room A."
          },
          {
            "time": "10:09",
            "event": "Accepted by Raj seven minutes later, in the middle of the morning rush."
          },
          {
            "time": "10:16",
            "event": "Delivered and rated four stars."
          },
          {
            "time": "Afternoon",
            "event": "Priya checks the queue for 10:02 and sees every pantry staffer was already on another order."
          }
        ],
        "outcome": "The issue was staffing at peak, not Raj. Priya shifts a break, and the director gets a factual answer instead of a scapegoat."
      },
      {
        "type": "checklist",
        "heading": "Keeping accountability conversations fair",
        "items": [
          "Start from the request record, not the complaint.",
          "Check what else the team was handling at that moment.",
          "Recognise good scores in public; discuss weak ones in private.",
          "Ask staff what slowed them down before deciding anything.",
          "Look at weeks of data, not one bad afternoon."
        ]
      },
    ],
    faqs: [
      {
        "q": "Will staff feel watched?",
        "a": "ZapBuzzer is built to be people-first: fair attribution and scorecards, not another nag tool. Staff get credit for work that used to be invisible, which most teams welcome once they see their own numbers."
      },
      { q: "Will staff see it as surveillance?", a: "It depends on how it is introduced. Lead with credit and recognition, and staff tend to welcome a record of work that used to go unnoticed." },
      { q: "Who can see scorecards?", a: "Permissions are granular per role, so you decide which roles can see individual performance." },
      { q: "Can a bad rating be unfair?", a: "Sometimes. That is why patterns over a month matter more than a single rating." },
      { q: "Which plan includes scorecards?", a: "Full analytics and scorecards, plus audit logs and reports, are part of Pro." },
      { q: "Can staff see their own scorecard?", a: "Scorecards are meant to give staff fair attribution, so sharing them with the person is encouraged. What each role sees is controlled with permissions." },
      { q: "How do we handle a dispute about who did a job?", a: "Every action is audit-logged against the person who did it. The record shows who accepted, started and delivered, with timestamps." },
      { q: "Does accountability apply to managers too?", a: "Escalations land with named managers, and their response is part of the record. Accountability runs up the chain, not only down." },
    ],
    related: ["analytics/staff", "admin/audit-logs", "use-cases/hr", "features/request-ratings", "analytics/team-performance", "pricing/pro"],
    cta: { title: "Give credit where it is due", body: "Start a 14-day Pro trial and see your first staff scorecards." },
  },

  // ───────────────────────────── SLA compliance ─────────────────────────────
  {
    path: "use-cases/sla-compliance",
    title: "Meet Internal SLAs for Office Services",
    description:
      "Set deadlines for office requests and let overdue ones escalate on their own. Pilot offices reached 96% on-time delivery in month one on ZapBuzzer.",
    h1: "Turn service promises into deadlines that hold",
    eyebrow: "Problem · SLA compliance",
    lead:
      "Most offices have unwritten service levels: coffee in five minutes, a room fix in fifteen. ZapBuzzer writes them down as deadlines, times every request and escalates the ones that slip. Pilot offices reached 96% on-time delivery in their first month.",
    keywords: ["internal sla office", "sla compliance office requests", "office service level", "request deadline escalation", "on time delivery office"],
    heroVisual: "sla-timer",
    sections: [
      {
        type: "prose",
        heading: "SLAs nobody can measure",
        paragraphs: [
          "An SLA that is not timed is a hope. Without timestamps, you cannot say whether the pantry met its five minutes or the facilities team its fifteen, only whether anyone complained.",
          "ZapBuzzer starts a clock on every request. SLA with an escalation chain is part of Pro.",
        ],
      },
      {
        type: "visual",
        visual: "sla-timer",
        heading: "A timer on every request",
        body: "The timer runs from buzz to delivery. When it passes the deadline, the request escalates to a manager.",
      },
      {
        type: "table",
        heading: "Example deadlines by category",
        intro: "Illustrative only. Set your own based on what your office can deliver.",
        headers: ["Category", "Example deadline", "Escalates to"],
        rows: [
          ["Pantry coffee", "5 minutes", "Pantry supervisor"],
          ["Colour prints", "10 minutes", "Print room lead"],
          ["Meeting-room IT", "5 minutes", "IT manager"],
          ["AC issue", "15 minutes", "Admin head"],
          ["Courier pickup", "30 minutes", "Reception lead"],
        ],
      },
      {
        type: "comparison",
        heading: "Unwritten vs enforced SLAs",
        columns: ["Unwritten SLA", "ZapBuzzer SLA"],
        rows: [
          { label: "Measurement", a: "Complaints", b: "Every request timed" },
          { label: "Breach", a: "Noticed late, if at all", b: "Detected at the deadline" },
          { label: "Response to breach", a: "Requester chases", b: "Automatic escalation" },
          { label: "Reporting", a: "None", b: "On-time rate in analytics" },
        ],
      },
      {
        type: "scenario",
        heading: "The 15-minute AC rule",
        persona: "Om, Engineer",
        setting: "Conference Room B AC stuck at 16°C.",
        timeline: [
          { time: "11:00", event: "Om taps Facilities. Timer starts." },
          { time: "11:00", event: "Deepak's team is pinged; a technician accepts." },
          { time: "11:15", event: "If not fixed by now, it auto-escalates." },
        ],
        outcome: "Everyone knows the rule, and nobody has to enforce it by hand.",
      },
      {
        type: "stats",
        heading: "Pilot office results",
        items: [
          { value: "96%", label: "On-time delivery" },
          { value: "32s", label: "Average accept time" },
        ],
        note: pilotNote,
      },
      {
        type: "visual",
        visual: "escalation",
        heading: "What happens at the deadline",
        body:
          "A breached request does not just turn red. It escalates to a manager automatically, and on Pro it can keep climbing an escalation chain you define, so the right person hears about it while there is still time to act.",
      },
      {
        type: "checklist",
        heading: "Setting internal SLAs that work",
        items: [
          "Write down the unwritten expectations for each category first.",
          "Run a few weeks with generous deadlines and look at real delivery times.",
          "Tighten deadlines where on-time rate is comfortably high.",
          "Make sure every escalation lands with someone who can reassign or decide.",
          "Review breaches weekly and fix the cause, not just the request.",
          "Share the on-time rate with staff so they know the target is achievable.",
        ],
      },
      {
        type: "callout",
        tone: "warning",
        title: "An SLA is only as good as its escalation",
        body:
          "If overdue requests escalate to someone who never looks, the SLA is decoration. Pick escalation owners who will act, and check that they receive notifications.",
      },
      {
        type: "prose",
        heading: "What a deadline means for each job",
        paragraphs: [
          "A five-minute coffee deadline and a fifteen-minute AC deadline mean different things in practice. For coffee, the deadline is mostly about acceptance: if nobody takes it quickly, it will be late. For the AC, acceptance is fast but the fix can drag, so the timer is really watching the work itself. Looking at accept time and delivery time separately tells you which half of the SLA is failing.",
        ],
      },
      {
        "type": "metrics",
        "heading": "Compliance numbers to report",
        "intro": "A short set that a leadership team will actually read.",
        "items": [
          {
            "metric": "On-time rate by category",
            "meaning": "Pilot offices reached 96% on-time delivery in their first month."
          },
          {
            "metric": "Escalations by team",
            "meaning": "Count and pattern; a cluster usually means a staffing gap, not a lazy team."
          },
          {
            "metric": "Worst hour of the day",
            "meaning": "When most deadlines slip, so you can add cover there."
          }
        ]
      },
      {
        "type": "callout",
        "tone": "tip",
        "title": "Start with deadlines you can already hit",
        "body": "Set the first deadlines close to what the team delivers today, then tighten them once on-time rates are steady. A deadline everyone misses on day one teaches people to ignore the timer."
      },
    ],
    faqs: [
      {
        "q": "Are SLA deadlines on the Free plan?",
        "a": "Every request is timed on Free. SLA deadlines with an escalation chain are part of Pro."
      },
      { q: "Which plan includes SLAs?", a: "Every request is timed, and overdue ones escalate. SLA with a full escalation chain is part of Pro." },
      { q: "Should we start with strict deadlines?", a: "Start realistic, measure for a few weeks, then tighten. Constant escalations train people to ignore them." },
      { q: "Can deadlines differ by category?", a: "Yes, think of deadlines per type of request. A courier pickup and a coffee should not share a clock." },
      { q: "How do we report SLA performance?", a: "On-time delivery shows in analytics, and Pro includes reports and audit logs." },
      { q: "Is 96% on-time a realistic target?", a: "It is what pilot offices averaged in their first month, across their own deadlines. Treat it as a reference; your rate depends on how you set deadlines and staff your teams." },
      { q: "What counts as on time?", a: "A request delivered before its deadline. The timer runs from when it is buzzed, so slow acceptance counts against the SLA as well as slow delivery." },
      { q: "Can facility companies report SLAs to clients?", a: "Enterprise is designed for groups and facility companies, with white-label and reporting options. Talk to us at hello@zapbuzzer.com for details." },
    ],
    related: ["sla", "sla/timers", "sla/escalation-chains", "sla/breach-detection", "resources/sla-management-guide", "use-cases/facilities-manager", "pricing/pro"],
    cta: { title: "Put your SLAs on a clock", body: "Try Pro free for 14 days with SLA timers and escalation chains." },
  },

  // ───────────────────────────── Pantry ─────────────────────────────
  {
    path: "use-cases/pantry-operations",
    title: "Better Pantry Operations for Busy Offices",
    description:
      "Run the office pantry from a catalogue: coffee, tea, snacks and lunch orders routed to pantry staff, delivered to the right room, timed and rated.",
    h1: "A pantry that keeps up with the morning rush",
    eyebrow: "Problem · Pantry operations",
    lead:
      "The pantry is the busiest service in most offices and the most chaotic. ZapBuzzer gives it a catalogue, a queue and a clock, so coffee arrives before anyone asks twice.",
    keywords: ["office pantry management", "pantry orders office", "office coffee requests", "pantry staff app", "lunch orders office"],
    heroVisual: "catalog",
    sections: [
      {
        type: "prose",
        heading: "Why pantries get overwhelmed",
        paragraphs: [
          "Pantry demand is spiky: arrivals, the 11 o'clock meetings, post-lunch slump. Orders come by phone, chat and shouting, without destinations, and the pantry team spends half its time figuring out who wanted what and where.",
        ],
      },
      {
        type: "visual",
        visual: "catalog",
        heading: "The pantry catalogue",
        body: "Hot drinks, juice, snacks and dry fruits, with each person’s regular order a single tap away. Each order carries a destination and a note.",
      },
      {
        type: "comparison",
        heading: "Pantry chaos vs a pantry queue",
        columns: ["Calls and chat", "ZapBuzzer"],
        rows: [
          { label: "Order details", a: "“Two coffees” with no room", b: "Item, destination, note" },
          { label: "Who takes it", a: "Whoever answered", b: "First pantry staff to accept" },
          { label: "Rush hour", a: "Orders forgotten", b: "Queue with timers" },
          { label: "Cost", a: "Unknown", b: "Owner-only spend view" },
        ],
      },
      {
        type: "scenario",
        heading: "Coffee to the boss cabin",
        persona: "Raj, Pantry",
        setting: "Board call in the boss cabin, morning rush.",
        timeline: [
          { time: "10:02", event: "Aarav's buzz arrives on Telegram." },
          { time: "10:02", event: "Raj accepts in 12 seconds." },
          { time: "10:06", event: "Hot coffee delivered and rated." },
        ],
        outcome: "Four minutes, zero calls, one hot coffee, instead of 25 minutes and three calls.",
      },
      {
        type: "stats",
        heading: "Pilot office results",
        items: [
          { value: "32s", label: "Average accept time" },
          { value: "96%", label: "On-time delivery" },
          { value: "4.8★", label: "Average staff rating" },
        ],
        note: pilotNote,
      },
      {
        type: "metrics",
        heading: "Pantry metrics",
        items: [
          { metric: "Orders by hour", meaning: "When to staff up." },
          { metric: "Top items", meaning: "What to stock." },
          { metric: "Delivery time", meaning: "Whether the rush is handled." },
          { metric: "Spend", meaning: "Owner-only cost of orders like team lunches." },
        ],
      },
      {
        type: "scenario",
        heading: "Lunch for twelve on release day",
        persona: "Vivek, Operations",
        setting: "Product team working through lunch, 12 people, two vegetarian.",
        timeline: [
          { time: "12:10", event: "Vivek picks items for 12 from the catalogue, adds a note about the vegetarian meals." },
          { time: "12:11", event: "The pantry accepts and queues it behind two coffee orders." },
          { time: "13:00", event: "Lunch delivered; Vivek rates it." },
        ],
        outcome: "One request instead of a dozen messages, and the owner can see what lunch cost.",
      },
      {
        type: "workflow",
        heading: "Setting up the pantry",
        steps: [
          { title: "Catalogue", body: "List what the pantry actually serves, for example tea, coffee, snacks, juice and dry fruits." },
          { title: "Destinations", body: "Add rooms people order to: Boss Cabin, Conference Room B, 3rd-floor desks." },
          { title: "Team", body: "Add every pantry staff member so the whole team is pinged." },
          { title: "Deadlines", body: "Set a realistic delivery time and, on Pro, who it escalates to." },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Start here",
        body:
          "The pantry is usually the best first category: highest volume, fastest feedback, and the most visible change for everyone in the office.",
      },
      {
        type: "prose",
        heading: "Fair to the pantry team too",
        paragraphs: [
          "Pantry staff are usually the most interrupted people in the office and the least credited. With ZapBuzzer every delivery is attributed and rated, so the person who handled thirty orders before lunch gets recognition for it, and managers can see when the team is genuinely stretched rather than slow.",
        ],
      },
      {
        "type": "audience",
        "heading": "Who the pantry queue helps",
        "items": [
          {
            "role": "Pantry staff",
            "benefit": "One queue instead of calls, chats and people waiting at the counter."
          },
          {
            "role": "Executives",
            "benefit": "A single tap sends their regular order, delivered to the cabin."
          },
          {
            "role": "Office manager",
            "benefit": "Sees peak hours and on-time delivery without asking anyone."
          },
          {
            "role": "Owner",
            "benefit": "Sees what pantry orders and team lunches cost."
          }
        ]
      },
      {
        "type": "prose",
        "heading": "Notes that save a second trip",
        "paragraphs": [
          "Most pantry mistakes are small: sugar in a coffee that should not have it, green tea instead of black, four cups when six people turned up. A short note on the request, “one without sugar, 6 people”, travels with the order to whoever accepts it.",
          "Over time the catalogue can learn the office. If half the cabin orders say “less sugar”, it is worth adding as its own item so nobody has to type it again."
        ]
      },
    ],
    faqs: [
      {
        "q": "Can pantry staff see costs?",
        "a": "Spend is visible to the owner only. Pantry staff see the items, notes and destination they need to deliver."
      },
      {
        "q": "What about requests outside pantry hours?",
        "a": "Requests are still routed and timed, so the record shows how long they waited. Many offices trim the pantry catalogue or adjust expectations for late evenings."
      },
      { q: "Can we handle team lunch orders?", a: "Yes. Pick items for the group, add a note, and the pantry queues it. The owner can see what it cost." },
      { q: "What if two pantry staff are free?", a: "Both are pinged; whoever taps Accept first owns the order." },
      { q: "Can people save their usual order?", a: "The catalogue is designed so a regular order takes just a single tap." },
      { q: "Do pantry staff need smartphones?", a: "The mobile app works best. Email works on all plans, and Telegram and WhatsApp pings come with Pro." },
      { q: "How do we handle the morning rush?", a: "Every order goes to the whole pantry team and is accepted one by one, so nobody grabs the same order twice. Check orders by hour after a week and add cover where the queue builds." },
      { q: "Can we see what the pantry costs?", a: "Owners can see the cost of requests such as lunch orders. That view is owner-only, so it is not shown to every employee." },
      { q: "Is the pantry available on the Free plan?", a: "Yes. Free supports up to 10 staff in one location with email notifications. Telegram and WhatsApp pings, SLA escalation and full analytics come with Pro." },
    ],
    related: ["solutions/pantry", "solutions/pantry/catalog", "workflows/coffee-request", "workflows/lunch-request", "use-cases/office-manager", "pricing/free"],
    cta: { title: "Calm your pantry", body: "Start free with up to 10 staff, or trial Pro for 14 days." },
  },

  // ───────────────────────────── Facilities ─────────────────────────────
  {
    path: "use-cases/facilities-operations",
    title: "Better Facilities Operations in the Office",
    description:
      "Route AC, maintenance and room issues to facilities with a location, owner and deadline. Overdue jobs escalate on their own; nothing rots in DMs.",
    h1: "Facilities jobs with an address, an owner and a clock",
    eyebrow: "Problem · Facilities operations",
    lead:
      "Facilities requests arrive vague and leave no trace. ZapBuzzer gives each one a destination, a named owner and a deadline, and escalates jobs that stall.",
    keywords: ["facilities operations", "office maintenance tracking", "ac issue office", "facilities escalation", "maintenance request app"],
    heroVisual: "escalation",
    sections: [
      {
        type: "prose",
        heading: "The facilities blind spot",
        paragraphs: [
          "Facilities teams fix things all day, yet leadership mostly hears about what was not fixed. Without records, there is no way to show volume, response or which rooms keep breaking.",
        ],
      },
      {
        type: "workflow",
        heading: "A facilities job in ZapBuzzer",
        steps: [
          { title: "Report", body: "Employee taps Facilities, picks the room, adds a note." },
          { title: "Route", body: "The facilities team is pinged at once." },
          { title: "Own", body: "First technician to accept owns the job." },
          { title: "Escalate", body: "If it is not done by deadline, it escalates (chain on Pro)." },
          { title: "Close", body: "Delivered with optional photo, then rated." },
        ],
      },
      {
        type: "comparison",
        heading: "Reported by phone vs reported in ZapBuzzer",
        columns: ["Phone and email", "ZapBuzzer"],
        rows: [
          { label: "Location", a: "Often missing", b: "Destination on every request" },
          { label: "Owner", a: "Assigned verbally", b: "First to accept" },
          { label: "Stalled job", a: "Discovered by complaint", b: "Escalates on deadline" },
          { label: "Data", a: "None", b: "Requests by location and category" },
        ],
      },
      {
        type: "visual",
        visual: "escalation",
        heading: "Escalation that does not wait for complaints",
        body: "Overdue jobs climb to a manager automatically. On Pro you define the escalation chain.",
      },
      {
        type: "scenario",
        heading: "AC stuck at 16°C",
        persona: "Om, Engineer",
        setting: "Conference Room B, sprint review in progress.",
        timeline: [
          { time: "11:00", event: "Om taps Facilities → Conference Room B." },
          { time: "11:00", event: "Deepak's team pinged; technician accepts." },
          { time: "11:15", event: "Deadline: fixed, or auto-escalated." },
        ],
        outcome: "Deepak: “Facilities tickets auto-escalate now. Nothing rots in someone's DMs.”",
      },
      {
        type: "stats",
        heading: "Pilot office results",
        items: [
          { value: "96%", label: "On-time delivery" },
          { value: "32s", label: "Average accept time" },
        ],
        note: pilotNote,
      },
      {
        type: "metrics",
        heading: "Facilities metrics that matter",
        items: [
          { metric: "Requests by location", meaning: "Rooms and floors that need preventive attention." },
          { metric: "Requests by category", meaning: "AC vs electrical vs plumbing vs furniture." },
          { metric: "Time to fix", meaning: "From report to delivered, per category." },
          { metric: "Escalations", meaning: "Jobs that stalled, often waiting for parts or vendors." },
          { metric: "Ratings", meaning: "Whether the fix actually solved the problem for the person who reported it." },
        ],
      },
      {
        type: "audience",
        heading: "Who gains",
        items: [
          { role: "Employees", benefit: "Report in one tap with the room attached, and see who is coming." },
          { role: "Technicians", benefit: "Clear jobs with locations, and credit for each fix." },
          { role: "Facilities and admin heads", benefit: "Only stalled jobs reach them, early." },
          { role: "Facility service companies", benefit: "Enterprise adds white-label and custom domain for client sites." },
        ],
      },
      {
        type: "checklist",
        heading: "Facilities rollout checklist",
        items: [
          "Add every room and floor as a destination.",
          "Split facilities into a few categories with sensible deadlines.",
          "Put all technicians on the team so the first free one can accept.",
          "Ask for a photo on delivery for anything structural.",
          "Review repeat locations monthly.",
        ],
      },
      {
        type: "prose",
        heading: "Showing the work that usually goes unseen",
        paragraphs: [
          "When every job is recorded, the facilities team can finally show what it does: how many issues were fixed this month, how fast, and where. That record changes budget conversations, because a request for a new AC unit in Conference Room B comes with a count of how often the old one failed.",
        ],
      },
      {
        "type": "table",
        "heading": "Common facilities jobs and starting deadlines",
        "intro": "Examples to start from; set your own deadlines per category.",
        "headers": [
          "Job",
          "Example deadline",
          "If missed"
        ],
        "rows": [
          [
            "AC too cold in a meeting room",
            "15 minutes",
            "Escalates to a manager"
          ],
          [
            "Projector stuck before a meeting",
            "10 minutes",
            "Escalates to a manager"
          ],
          [
            "Washroom supplies out",
            "30 minutes",
            "Escalates to a manager"
          ],
          [
            "Desk light not working",
            "Same day",
            "Reviewed at the weekly check"
          ]
        ]
      },
      {
        "type": "prose",
        "heading": "Patterns hidden in small complaints",
        "paragraphs": [
          "One “AC too cold” request is an annoyance. Twenty of them from Conference Room B in a month is a thermostat that needs replacing. Because every facilities request is logged with its destination and category, those patterns show up in history and reports instead of in people’s moods.",
          "That changes conversations with the landlord or building management too. A dated list of repeat faults is far more persuasive than “it happens all the time”."
        ]
      },
    ],
    faqs: [
      {
        "q": "Can facilities requests include a location?",
        "a": "Yes. Requesters choose a destination such as a cabin or meeting room, so the technician knows exactly where to go without calling back."
      },
      {
        "q": "Does escalation need Pro?",
        "a": "Overdue requests auto-escalate to a manager; the multi-step escalation chain, along with Telegram and WhatsApp pings, is on Pro. Every plan times every request."
      },
      { q: "Can we run facilities across several sites?", a: "Multi-location is part of Pro. Free covers one location." },
      { q: "We are a facilities company serving clients. Does it fit?", a: "Enterprise is designed for groups and facility companies, with white-label and custom domain. Talk to us for details." },
      { q: "Can technicians prove the fix?", a: "They can attach a photo when marking the job delivered." },
      { q: "How do we find rooms that keep breaking?", a: "Analytics show requests by location and category, so repeat problems stand out." },
      { q: "What if a fix depends on an outside vendor?", a: "The technician starts the job with a longer ETA. If it still passes its deadline, escalation tells the manager who deals with the vendor." },
      { q: "Can employees report issues from their phone?", a: "Yes. The mobile and web app both let anyone tap Facilities, choose the room and add a note." },
      { q: "How quickly can we start?", a: "Most offices are running in an afternoon. The free trial lasts 14 days and needs neither a card nor a setup call." },
    ],
    related: ["solutions/facilities", "use-cases/facilities-manager", "workflows/ac-issue", "solutions/facilities/escalation", "sla/automatic-escalation", "pricing/pro"],
    cta: { title: "Put facilities on a clock", body: "Try ZapBuzzer Pro free for 14 days and route your first facilities job today." },
  },
];
