import type { PageContent } from "../types";

export const pages: PageContent[] = [
  // ───────────────────────────── HUB ─────────────────────────────
  {
    path: "notifications",
    title: "Office Request Notifications That Get Answered",
    description:
      "ZapBuzzer pings the right team on app, email, Telegram and WhatsApp at once, and repeats until someone accepts. Missed requests stop being a thing.",
    h1: "Notifications that keep ringing until someone says yes",
    eyebrow: "Notifications",
    lead:
      "A request is only as good as the alert behind it. ZapBuzzer sends every buzz to the whole team on every channel at the same moment, repeats it until someone taps Accept, and rings the Android app even on a silent, locked phone.",
    keywords: [
      "office request notifications",
      "staff alert system",
      "multi-channel notifications",
      "repeat until accepted alerts",
      "pantry and IT notifications",
    ],
    heroVisual: "notification-flow",
    sections: [
      {
        type: "problem-solution",
        heading: "Why office requests get missed",
        intro: "Most requests are not refused. They just never reach anyone who is free to act.",
        problem: {
          title: "The usual channels",
          points: [
            "A message in the pantry WhatsApp group scrolls away under forty others.",
            "The IT desk phone rings while the only IT person is in Conference Room B.",
            "An email lands in an inbox nobody checks during the lunch rush.",
            "A phone on silent in a pocket means a buzz nobody hears.",
          ],
        },
        solution: {
          title: "How ZapBuzzer notifies",
          points: [
            "Every channel fires at once, so whichever one a person is looking at shows it.",
            "Everyone on the team is notified, not one person who might be busy.",
            "Notifications repeat until someone accepts, so silence is never the end of it.",
            "The Android app rings through on silent or locked phones.",
          ],
        },
      },
      {
        type: "visual",
        visual: "notification-flow",
        heading: "One buzz, four channels, one owner",
        body: "When Aarav taps Coffee for the Boss Cabin, the request fans out to the pantry team in the ZapBuzzer app and by email, and on Telegram and WhatsApp if you are on Pro. All of it happens at the same moment. The first person to accept owns the request, and the reminders stop for everyone else.",
        points: [
          "App, email, Telegram and WhatsApp in parallel, not one after another",
          "Repeat pings until the request is accepted",
          "Accepting stops the reminders and shows the requester who is on it",
        ],
      },
      {
        type: "prose",
        eyebrow: "The idea",
        heading: "Notify the team, not a person",
        paragraphs: [
          "Most office alerting is built around one person: call Raju, message the IT guy, email facilities. That works until Raju is on a break. ZapBuzzer routes each request to a team, such as pantry, print room, IT desk, facilities or mailroom, and notifies everyone on it together. Whoever is free first takes it.",
          "That is why notifications and first-accept-wins go together. Notifying everyone would cause chaos if three people all walked to the boss cabin with coffee. Because the first accept locks the request to one owner, a wide alert produces exactly one response.",
          "It also changes the requester’s experience. Instead of wondering whether anyone saw the message, they see a name and photo the moment someone accepts, followed by an ETA once the job starts.",
        ],
      },
      {
        type: "table",
        heading: "Channels and plans",
        intro: "Every plan includes the ZapBuzzer web and mobile apps.",
        headers: ["Channel", "Free", "Pro", "Best for"],
        rows: [
          ["ZapBuzzer mobile app", "Yes", "Yes", "Staff on the move. Rings on silent or locked Android phones"],
          ["Web app", "Yes", "Yes", "Front desks, admin screens, staff at a computer"],
          ["Email", "Yes", "Yes", "A record of each request and a fallback channel"],
          ["Telegram", "No", "Yes", "Teams that already live in Telegram"],
          ["WhatsApp", "No", "Yes", "Pantry, housekeeping and facilities staff who check WhatsApp first"],
        ],
      },
      {
        type: "scenario",
        heading: "A coffee during a board call",
        persona: "Aarav, CEO",
        setting: "Aarav is on a board call in his cabin and can’t step out or make a phone call.",
        timeline: [
          { time: "11:02:00", event: "Aarav taps Coffee and chooses Boss Cabin." },
          { time: "11:02:01", event: "The pantry team of three is notified in the app, by email and on Telegram at the same time." },
          { time: "11:02:12", event: "Raj sees it on Telegram and taps Accept. Reminders stop for the other two." },
          { time: "11:02:13", event: "Aarav sees Raj’s name and photo on the request." },
          { time: "11:06", event: "Coffee arrives. Aarav rates it 5★ without leaving the call." },
        ],
        outcome: "Twelve seconds to accept, no phone call and no interruption to the meeting.",
      },
      {
        type: "features",
        heading: "What the notification system does",
        items: [
          { title: "Parallel delivery", body: "All of a team’s channels fire together, so there is no waiting for one channel to fail before trying the next." },
          { title: "Repeat until accepted", body: "Unanswered requests keep pinging. Silence is never treated as acknowledgement." },
          { title: "Rings through silent mode", body: "The Android app rings even when the phone is on silent or locked." },
          { title: "Team routing", body: "Each catalogue item is routed to its team, so pantry alerts never reach IT." },
          { title: "Escalation", body: "If a request runs past its SLA, it auto-escalates to a manager. A full escalation chain is part of Pro." },
          { title: "Status updates", body: "Requesters see accepted, started with ETA, and delivered as they happen." },
        ],
      },
      {
        type: "stats",
        heading: "What faster notifications looked like in pilots",
        items: [
          { value: "32s", label: "average accept time" },
          { value: "−87%", label: "phone calls" },
          { value: "96%", label: "on-time delivery" },
          { value: "1.2M", label: "requests routed" },
        ],
        note: "Pilot office figures from the first month. Requests routed is a company-wide total.",
      },
      {
        type: "comparison",
        heading: "A WhatsApp group vs ZapBuzzer notifications",
        columns: ["Pantry WhatsApp group", "ZapBuzzer"],
        rows: [
          { label: "Who sees it", a: "Everyone, including people who don’t need to", b: "Only the team the request is routed to" },
          { label: "If nobody replies", a: "It scrolls away", b: "It repeats, then escalates" },
          { label: "Who is doing it", a: "‘I thought you were’", b: "First accept owns it, by name" },
          { label: "Record", a: "Buried in chat", b: "Timed and logged" },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Starting on Free",
        body: "The Free plan includes the mobile and web apps with email notifications for up to 10 staff in one location. Telegram and WhatsApp pings are part of Pro at ₹99 per seat per month, and the 14-day free trial needs no credit card.",
      },
    ],
    faqs: [
      { q: "Which channels are included on the Free plan?", a: "Free includes the ZapBuzzer mobile and web apps and email notifications. Telegram and WhatsApp pings are part of Pro." },
      { q: "Do channels fire one after another or all together?", a: "All together. A request goes out on every channel the team uses at the same moment, and keeps repeating until someone accepts." },
      { q: "When do the reminders stop?", a: "As soon as one person accepts the request. It then belongs to them, and the requester sees their name and photo." },
      { q: "Will staff hear alerts if their phone is on silent?", a: "On the Android app, yes. It rings through even when the phone is on silent or locked." },
      { q: "What if nobody accepts at all?", a: "Notifications keep repeating. If the request runs past its SLA, it auto-escalates to a manager, and on Pro it can climb a full escalation chain." },
      { q: "Is ZapBuzzer just a Telegram bot?", a: "No. Telegram is one delivery channel. The request itself, including routing, first-accept, SLA timers, ratings and analytics, lives in ZapBuzzer." },
    ],
    related: [
      "notifications/multi-channel",
      "notifications/whatsapp",
      "notifications/telegram",
      "notifications/push",
      "features/first-accept-wins",
      "sla/automatic-escalation",
      "pricing",
      "free-trial",
    ],
    cta: {
      title: "Make sure every buzz gets heard",
      body: "Start a 14-day free trial with no credit card and no setup call. Invite your pantry team and send your first buzz this afternoon.",
    },
  },

  // ───────────────────────────── MULTI-CHANNEL ─────────────────────────────
  {
    path: "notifications/multi-channel",
    title: "Multi-Channel Request Alerts, All at Once",
    description:
      "Send every office request to app, email, Telegram and WhatsApp simultaneously. Whichever screen staff are looking at, the buzz is there. Repeats till accepted.",
    h1: "Every channel, the same second",
    eyebrow: "Multi-channel",
    lead:
      "People don’t live in one app. Your pantry staff might check WhatsApp, the IT desk might have Telegram open, and facilities may be on the ZapBuzzer app. Multi-channel means the request reaches all of them together.",
    keywords: ["multi-channel notifications", "simultaneous staff alerts", "app email whatsapp telegram alerts", "parallel notifications"],
    heroVisual: "notification-flow",
    sections: [
      {
        type: "prose",
        heading: "Parallel beats fallback",
        paragraphs: [
          "Many alerting tools work as a ladder: try the app, and if there is no response, try email after a few minutes, then SMS. Each step adds delay, and the delay matters most when someone is standing at the gate or waiting in a meeting.",
          "ZapBuzzer doesn’t make the request wait. It sends to every channel the team uses at once and repeats until someone accepts. The fastest channel for any given person wins, and the first accept ends the noise for everyone.",
        ],
      },
      {
        type: "visual",
        visual: "notification-flow",
        heading: "The fan-out",
        body: "A single request appears in the ZapBuzzer app, in email, and on Pro in Telegram and WhatsApp, all within the same moment. Each notification carries the item, the note and the destination.",
      },
      {
        type: "table",
        heading: "Which channel catches whom",
        headers: ["Person", "Where they usually are", "Channel that reaches them"],
        rows: [
          ["Pantry staff", "Kitchen, phone in pocket", "Android app ringing through silent, or WhatsApp"],
          ["IT desk", "At a laptop", "Web app or Telegram"],
          ["Facilities lead", "Walking the floors", "Mobile app"],
          ["Admin head", "In meetings", "Email, as a record"],
        ],
      },
      {
        type: "scenario",
        heading: "Prints before a pitch",
        persona: "Kavya, Sales Lead",
        setting: "A pitch in 10 minutes. She needs 24 colour copies.",
        timeline: [
          { time: "10:50", event: "Kavya uploads the PDF and sets 24 copies in colour." },
          { time: "10:50", event: "The print room gets it in the app, by email and on WhatsApp together." },
          { time: "10:51", event: "Arjun, away from his desk, sees it on WhatsApp and accepts." },
          { time: "10:58", event: "The prints arrive at Kavya’s desk before the client sits down." },
        ],
        outcome: "“Print jobs land at my desk before the client even sits down. Zero chase calls.” — Kavya, Sales Lead",
      },
      {
        type: "comparison",
        heading: "Fallback alerting vs parallel alerting",
        columns: ["Fallback ladder", "ZapBuzzer parallel"],
        rows: [
          { label: "First alert", a: "One channel", b: "All channels" },
          { label: "Delay to second channel", a: "Minutes", b: "None" },
          { label: "If unanswered", a: "Moves down the ladder", b: "Repeats on all, then escalates" },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Plan note",
        body: "On Free, multi-channel means the app plus email. Pro adds Telegram and WhatsApp to the same simultaneous fan-out.",
      },
      {
        "type": "prose",
        "heading": "Why one channel is never enough",
        "paragraphs": [
          "Every channel has a blind spot. Email is ignored in the kitchen. A phone on silent gets nothing from an ordinary push. WhatsApp is noisy at lunch, and Telegram is only useful if the person has it open. Pick any one of them and some requests will wait.",
          "Firing on all of them at once covers those blind spots without anyone having to guess which channel a colleague is watching right now. The cost is a few duplicate alerts for a short while, and that ends the moment someone accepts."
        ]
      },
      {
        "type": "checklist",
        "heading": "Getting multi-channel right",
        "items": [
          "Install the mobile app for every staff member who is away from a desk",
          "Keep email on for every team as the written record",
          "On Pro, connect Telegram or WhatsApp for teams that already live in them",
          "Make sure each person is in the team their work belongs to",
          "Check accept times per team after the first week"
        ]
      },
      {
        "type": "metrics",
        "heading": "How to tell it’s working",
        "items": [
          {
            "metric": "Average accept time",
            "meaning": "Pilot offices averaged 32 seconds in their first month. A team well above its peers may be missing a channel."
          },
          {
            "metric": "Phone calls",
            "meaning": "Pilot offices saw 87% fewer. If people are still calling, alerts aren’t landing."
          },
          {
            "metric": "On-time delivery",
            "meaning": "Pilot offices reached 96%. Faster accepts leave more of the SLA for the work itself."
          }
        ]
      },
    ],
    faqs: [
      { q: "Won’t staff get the same alert four times?", a: "They may see it in more than one place, which is the point: it reaches them wherever they look first. Once anyone accepts, the reminders stop." },
      { q: "Can a team use only some channels?", a: "Teams can rely on whichever channels suit them. The app and email are available on every plan, and Telegram and WhatsApp on Pro." },
      { q: "Is there SMS?", a: "The channels ZapBuzzer offers are the app, email, Telegram and WhatsApp. For anything beyond that, talk to us about Enterprise." },
      { q: "Does the requester get notified too?", a: "The requester sees status changes, including accepted with name and photo, started with an ETA, and delivered." },
      {
        "q": "Do all channels show the same information?",
        "a": "Each notification carries the same request details: the item, the note and the destination. Accepting and tracking happen in ZapBuzzer itself."
      },
      {
        "q": "What happens to the other alerts once someone accepts?",
        "a": "The reminders stop for the whole team on every channel. The requester sees who accepted, with their name and photo."
      },
      {
        "q": "Is multi-channel worth it for a small office?",
        "a": "Even on Free, the app and email fire together, which covers both people at desks and people on the move. Pro adds Telegram and WhatsApp when a team relies on them."
      },
    ],
    related: ["notifications", "notifications/telegram", "notifications/whatsapp", "notifications/email", "features/real-time-updates", "pricing/pro"],
    cta: { title: "Reach staff wherever they are", body: "Try multi-channel notifications free for 14 days, including Telegram and WhatsApp on the Pro trial." },
  },

  // ───────────────────────────── TELEGRAM ─────────────────────────────
  {
    path: "notifications/telegram",
    title: "Telegram Notifications for Office Requests",
    description:
      "Get ZapBuzzer request alerts in Telegram alongside the app and email. Available on Pro. Repeats until accepted, so a busy chat never hides a buzz.",
    h1: "Office requests where your team already reads Telegram",
    eyebrow: "Telegram · Pro",
    lead:
      "If your staff keep Telegram open all day, that is where a buzz should show up. On Pro, ZapBuzzer sends request alerts to Telegram alongside the app and email, and the request itself stays in ZapBuzzer.",
    keywords: ["telegram notifications office", "telegram staff alerts", "telegram request alerts", "office telegram integration"],
    heroVisual: "notification-flow",
    sections: [
      {
        type: "prose",
        heading: "Not a glorified Telegram bot",
        paragraphs: [
          "Plenty of offices already run requests through Telegram: a group called ‘Pantry’ or ‘IT help’ where people post and hope. The trouble is not Telegram. It is that a chat has no owner, no timer and no memory.",
          "ZapBuzzer uses Telegram as a delivery channel. The request is raised, routed, accepted, timed, escalated and rated in ZapBuzzer. Telegram is where your team sees it, along with the app and email, at the same moment.",
        ],
      },
      {
        type: "workflow",
        heading: "How Telegram fits in",
        steps: [
          { title: "Requester buzzes", body: "Someone taps an item, adds a note and a destination, and buzzes it." },
          { title: "Alert on Telegram and elsewhere", body: "The team is pinged on Telegram, the app and email at the same time." },
          { title: "Someone accepts", body: "The first person to accept owns it, and reminders stop for the rest of the team." },
          { title: "Tracked in ZapBuzzer", body: "Started, ETA, delivered and rating all live on the request, not in chat history." },
        ],
      },
      {
        type: "scenario",
        heading: "Raj accepts in 12 seconds",
        persona: "Raj, Pantry",
        setting: "Raj is restocking the 3rd-floor pantry with Telegram open on his phone.",
        timeline: [
          { time: "11:02:00", event: "Aarav buzzes Coffee to Boss Cabin." },
          { time: "11:02:01", event: "The alert shows up in Raj’s Telegram and in the ZapBuzzer app." },
          { time: "11:02:12", event: "Raj accepts. Aarav sees his name and photo." },
        ],
        outcome: "The pantry team picked up the request in the app they already had open.",
      },
      {
        type: "visual",
        visual: "acceptance",
        heading: "Telegram shows it, ZapBuzzer settles it",
        body: "Three people might see the same alert on Telegram. Only one gets to own it: the first to accept. No more three people replying ‘on it’ in the group.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Pro feature",
        body: "Telegram pings are part of Pro at ₹99 per seat per month. The Free plan uses the app and email notifications. Your workspace admin connects Telegram during setup, and if you need help, write to hello@zapbuzzer.com.",
      },
      {
        "type": "comparison",
        "heading": "A Telegram group vs Telegram alerts from ZapBuzzer",
        "columns": [
          "‘IT help’ Telegram group",
          "ZapBuzzer on Telegram"
        ],
        "rows": [
          {
            "label": "Who it reaches",
            "a": "Everyone in the group, every message",
            "b": "The team the item is routed to"
          },
          {
            "label": "Who owns it",
            "a": "Whoever says ‘on it’, sometimes three people",
            "b": "The first to accept, by name and photo"
          },
          {
            "label": "Unanswered",
            "a": "Scrolls out of view",
            "b": "Repeats until accepted, then escalates when overdue"
          },
          {
            "label": "Afterwards",
            "a": "Chat history",
            "b": "Timed request with a rating and an audit trail"
          }
        ]
      },
      {
        "type": "audience",
        "heading": "Teams that tend to choose Telegram",
        "items": [
          {
            "role": "IT desk",
            "benefit": "Often keep Telegram open on desktop and phone, so an HDMI or projector request appears beside their other work."
          },
          {
            "role": "Engineering-heavy offices",
            "benefit": "Where Telegram is already the default chat, alerts land somewhere people actually read."
          },
          {
            "role": "Pantry teams",
            "benefit": "Raj picked up Aarav’s coffee in 12 seconds because Telegram was already open."
          }
        ]
      },
      {
        "type": "checklist",
        "heading": "Before you switch Telegram on",
        "items": [
          "Confirm the team really reads Telegram during working hours",
          "Make sure each team member is in ZapBuzzer, where requests are accepted",
          "Keep the app and email on alongside Telegram",
          "Tell people to buzz requests rather than post them in the old group",
          "Check accept times after the first week"
        ]
      },
    ],
    faqs: [
      { q: "Is Telegram available on the Free plan?", a: "No. Free includes app and email notifications. Telegram and WhatsApp pings come with Pro." },
      { q: "Does Telegram replace the ZapBuzzer app?", a: "No. Telegram is one of several channels that fire together. Accepting, tracking and rating happen in ZapBuzzer." },
      { q: "Can we keep our existing Telegram group?", a: "You can keep it for chat. Requests work better as buzzes, because each one gets an owner, a timer and a record." },
      { q: "What if a Telegram alert is missed?", a: "Notifications repeat until someone accepts, on Telegram and every other channel. Overdue requests escalate to a manager." },
      {
        "q": "Does the Telegram alert include the request details?",
        "a": "Yes. Staff see the item, the requester’s note and the destination, so they know whether they can take it before opening ZapBuzzer."
      },
      {
        "q": "Can we use Telegram for one team and WhatsApp for another?",
        "a": "Yes. On Pro, teams can lean on the channels they already use. The app and email keep firing alongside either one."
      },
      {
        "q": "Does escalation still apply to requests alerted on Telegram?",
        "a": "Yes. The channel only affects how the team hears a buzz. If the request passes its SLA it auto-escalates to a manager, and the full escalation chain is part of Pro."
      },
    ],
    related: ["notifications", "notifications/whatsapp", "notifications/multi-channel", "features/first-accept-wins", "compare/whatsapp", "pricing/pro"],
    cta: { title: "Bring requests to Telegram, properly", body: "Start a Pro trial free for 14 days. No credit card needed." },
  },

  // ───────────────────────────── WHATSAPP ─────────────────────────────
  {
    path: "notifications/whatsapp",
    title: "WhatsApp Notifications for Office Staff",
    description:
      "Ping pantry, housekeeping and facilities staff on WhatsApp the moment a request comes in, with app and email at the same time. Included in Pro.",
    h1: "Reach staff on WhatsApp, without the WhatsApp group chaos",
    eyebrow: "WhatsApp · Pro",
    lead:
      "For many office staff, WhatsApp is the one app that is always checked. On Pro, ZapBuzzer sends request alerts there, and keeps the request itself out of the group chat.",
    keywords: ["whatsapp notifications office", "whatsapp staff alerts", "whatsapp request alerts", "replace pantry whatsapp group"],
    heroVisual: "before-after",
    sections: [
      {
        type: "problem-solution",
        heading: "The pantry WhatsApp group problem",
        problem: {
          title: "Requests in a group chat",
          points: [
            "Orders, jokes and forwards all in one thread.",
            "No owner, so either nobody acts or three people do.",
            "No timer, no rating and no record you can report on.",
            "Print files lost in the scroll.",
          ],
        },
        solution: {
          title: "WhatsApp as an alert channel",
          points: [
            "Each request is pinged to the right team on WhatsApp, the app and email together.",
            "First accept owns it.",
            "Timer, escalation and rating live in ZapBuzzer.",
            "The group can go back to being a chat.",
          ],
        },
      },
      {
        type: "visual",
        visual: "before-after",
        heading: "Before and after",
        body: "Before: asking Raju to bring two coffees to the boss cabin meant 3 phone calls, 25 minutes and a cold coffee (1 cup). After: no calls at all, 4 minutes and a hot coffee (1 cup).",
      },
      {
        type: "scenario",
        heading: "Lunch for 12",
        persona: "Vivek, Operations",
        setting: "A 1 pm workshop for 12 people needs lunch in Conference Room B.",
        timeline: [
          { time: "11:30", event: "Vivek picks items, adds the note ‘12 people, 2 Jain, Conference Room B by 1 pm’ and buzzes." },
          { time: "11:30", event: "The pantry team gets it on WhatsApp and in the app." },
          { time: "11:31", event: "Meena accepts and the request is queued." },
          { time: "12:55", event: "Lunch is delivered. Vivek rates it and the owner can see the cost." },
        ],
        outcome: "One request, one owner and one record, instead of a dozen messages in a group.",
      },
      {
        type: "prose",
        heading: "Quieter, not just faster",
        paragraphs: [
          "The goal is not more WhatsApp messages. It is fewer, better ones. Each alert is about one request for one team, and it stops repeating once someone accepts.",
          "As one office manager put it: “Coffee arrives before anyone asks twice. The pantry WhatsApp group is finally quiet.” — Priya, Office Manager",
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Pro feature",
        body: "WhatsApp pings are part of Pro at ₹99 per seat per month. On Free, staff are notified in the app and by email. Your workspace admin connects WhatsApp during setup, and our team can help at hello@zapbuzzer.com.",
      },
      {
        "type": "table",
        "heading": "What lives in WhatsApp and what lives in ZapBuzzer",
        "headers": [
          "Part of the request",
          "WhatsApp",
          "ZapBuzzer"
        ],
        "rows": [
          [
            "Getting attention",
            "Yes, the alert",
            "Yes, app and email at the same time"
          ],
          [
            "Ownership",
            "No",
            "First accept wins, shown by name"
          ],
          [
            "Deadline",
            "No",
            "SLA timer and escalation"
          ],
          [
            "Status for the requester",
            "No",
            "Accepted, started with ETA, delivered"
          ],
          [
            "Rating and reporting",
            "No",
            "1–5★ rating, analytics and scorecards"
          ]
        ]
      },
      {
        "type": "workflow",
        "heading": "Moving the pantry off the group",
        "steps": [
          {
            "title": "Add the usual orders",
            "body": "Put coffee, tea, juice, snacks and lunch into the pantry catalogue."
          },
          {
            "title": "Connect WhatsApp on Pro",
            "body": "Your workspace admin connects WhatsApp so the pantry team gets alerts there."
          },
          {
            "title": "Tell the office",
            "body": "Ask people to buzz instead of posting orders in the group."
          },
          {
            "title": "Let the group go quiet",
            "body": "Keep it for chat if you like. Orders now arrive one at a time, each with an owner."
          }
        ]
      },
      {
        "type": "audience",
        "heading": "Teams that often prefer WhatsApp",
        "items": [
          {
            "role": "Pantry and housekeeping",
            "benefit": "Already check WhatsApp through the day, so a buzz shows up where they look."
          },
          {
            "role": "Mailroom and reception",
            "benefit": "Get courier pickup requests on the phone they carry at the desk or gate."
          },
          {
            "role": "Facilities",
            "benefit": "Hear about room issues while walking between floors."
          }
        ]
      },
      {
        type: "checklist",
        heading: "Before you switch WhatsApp alerts on",
        intro: "A little preparation makes the first week smooth for staff who have only ever taken orders in a group.",
        items: [
          "Confirm each staff member’s WhatsApp number with your workspace admin",
          "Install the ZapBuzzer mobile app on the same phones, since accepting happens there",
          "Show the team one test buzz end to end: alert, accept, start, deliver",
          "Agree that orders posted in the group will be redirected to a buzz",
          "Check the pantry catalogue covers the orders people used to post",
        ],
      },
    ],
    faqs: [
      { q: "What if a staff member changes their phone number?", a: "Ask your workspace admin to update their WhatsApp details so alerts follow them. In the meantime they still receive every request in the app and by email." },
      { q: "Is WhatsApp included on Free?", a: "No. Free uses app and email notifications. WhatsApp and Telegram pings are part of Pro." },
      { q: "Do staff accept requests from WhatsApp?", a: "The WhatsApp alert gets their attention. The request is accepted and tracked in ZapBuzzer, where first-accept-wins, timers and ratings live." },
      { q: "Will this spam our staff?", a: "Alerts only go to the team a request is routed to, and they stop once someone accepts." },
      { q: "Should we delete the pantry group?", a: "That’s up to you. Many offices keep it for chat and move requests to ZapBuzzer." },
      {
        "q": "Does each WhatsApp alert go to the whole team?",
        "a": "Yes. Every member of the team the request is routed to is notified together, and the first to accept in ZapBuzzer owns it."
      },
      {
        "q": "What do staff see in the WhatsApp alert?",
        "a": "The alert carries the request’s item, the note and the destination, so staff know what is needed and where before they open ZapBuzzer to accept."
      },
      {
        "q": "Can WhatsApp be tried before paying?",
        "a": "The 14-day free trial needs no credit card, and you can try Pro features such as WhatsApp pings during it. After that, WhatsApp needs a Pro plan."
      },
    ],
    related: ["notifications", "notifications/telegram", "use-cases/reduce-whatsapp-requests", "compare/whatsapp", "solutions/pantry", "pricing/pro"],
    cta: { title: "Quiet the group chat", body: "Try WhatsApp notifications on a 14-day Pro trial. You won't need a card or a setup call." },
  },

  // ───────────────────────────── EMAIL ─────────────────────────────
  {
    path: "notifications/email",
    title: "Email Notifications on Every Plan",
    description:
      "ZapBuzzer sends email alerts for office requests on every plan, including Free. A dependable channel and a written record, alongside the app.",
    h1: "Email alerts that come with every plan",
    eyebrow: "Email",
    lead:
      "Email is the channel every workspace gets, Free included. It sits beside the ZapBuzzer app, fires at the same time and repeats until someone accepts.",
    keywords: ["email notifications office requests", "free email staff alerts", "request email alerts", "email notification plan"],
    heroVisual: "notification-flow",
    sections: [
      {
        type: "prose",
        heading: "Why email still matters",
        paragraphs: [
          "Email is rarely the fastest way to reach pantry staff, but it is the one channel everybody has, it works on any device and it leaves a written trail. For admin, IT and facilities teams who live at a desk, it is often where they look first.",
          "In ZapBuzzer, email is not a fallback that waits its turn. It goes out with the app notification, so a desk-bound IT person and a mobile pantry runner both see the request at once.",
        ],
      },
      {
        type: "visual",
        visual: "notification-flow",
        heading: "Email in the fan-out",
        body: "Each request reaches the team by email at the same moment as the app. On Pro, Telegram and WhatsApp join in.",
      },
      {
        type: "table",
        heading: "Email by plan",
        headers: ["Plan", "Email", "Other channels"],
        rows: [
          ["Free", "Yes", "Mobile and web app"],
          ["Pro", "Yes", "App, Telegram, WhatsApp"],
          ["Enterprise", "Yes", "Everything in Pro. Custom domain and white-label available"],
        ],
      },
      {
        type: "scenario",
        heading: "A small office on Free",
        persona: "Priya, Office Manager",
        setting: "An eight-person office trying ZapBuzzer on one floor.",
        timeline: [
          { time: "Day 1", event: "Priya signs up, adds the pantry and IT items and invites the team." },
          { time: "Day 1, 3 pm", event: "Tanvi buzzes IT for an HDMI cable. Priya gets it by email and in the app." },
          { time: "Day 1, 3:03 pm", event: "Priya brings the cable and marks it delivered." },
        ],
        outcome: "Live on email and the app within an afternoon, without paying anything.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Pair email with the app",
        body: "For staff who move around, install the mobile app as well. On Android it rings even on silent, which an email can’t do.",
      },
      {
        "type": "features",
        "heading": "What a ZapBuzzer email carries",
        "items": [
          {
            "title": "The item",
            "body": "What was asked for, such as two coffees, 24 colour copies or an HDMI cable."
          },
          {
            "title": "The note",
            "body": "Anything the requester typed, like ‘no sugar’ or ‘needed before the 11 o’clock board meeting’."
          },
          {
            "title": "The destination",
            "body": "Where it should go, for example Boss Cabin or Conference Room B."
          },
          {
            "title": "A way to act",
            "body": "The request itself is accepted in ZapBuzzer on web or mobile, so the owner is recorded and shown to the requester."
          }
        ]
      },
      {
        "type": "audience",
        "heading": "Who email suits best",
        "items": [
          {
            "role": "IT desk",
            "benefit": "Already working in a browser and an inbox, so a request shows up alongside the rest of their work."
          },
          {
            "role": "Admin and facilities leads",
            "benefit": "A written copy of what came in is handy when reviewing the day or following up with a vendor."
          },
          {
            "role": "Small offices on Free",
            "benefit": "Email plus the app covers everything needed to run requests for up to 10 staff without paying."
          },
          {
            "role": "Managers",
            "benefit": "Desk-based managers often notice an email before a phone alert during meetings."
          }
        ]
      },
      {
        "type": "comparison",
        "heading": "Email alone vs email in ZapBuzzer",
        "columns": [
          "A shared email inbox",
          "Email from ZapBuzzer"
        ],
        "rows": [
          {
            "label": "Ownership",
            "a": "Whoever replies first, if anyone",
            "b": "First accept in ZapBuzzer owns it, by name"
          },
          {
            "label": "Unanswered",
            "a": "Sits unread",
            "b": "Repeats until accepted"
          },
          {
            "label": "Deadline",
            "a": "None",
            "b": "Every request is timed against its SLA"
          },
          {
            "label": "Close-out",
            "a": "A ‘done’ reply, sometimes",
            "b": "Delivered, optional photo and a 1–5★ rating"
          }
        ]
      },
      {
        "type": "checklist",
        "heading": "Making email work for your team",
        "items": [
          "Use work addresses people actually check during the day",
          "Ask staff who move around to install the mobile app as well",
          "Keep requests in ZapBuzzer and use email only as the alert",
          "Move to Pro when a team clearly lives on Telegram or WhatsApp instead"
        ]
      },
      {
        type: "prose",
        heading: "Keeping request emails out of the noise",
        paragraphs: [
          "The weak point of email is the rest of the inbox. A buzz for a projector fix can land between a newsletter and a long thread, and inbox filters sometimes sort it somewhere nobody looks. Ask each staff member to send a test buzz to themselves in the first week and check where it arrives.",
          "If it lands in a promotions or spam folder, mark it as important or add a simple inbox rule so ZapBuzzer emails stay in view. Because pings repeat until someone accepts, a missed first email is not the end of the request, but a clean inbox gets the accept time down.",
        ],
      },
    ],
    faqs: [
      { q: "Our ZapBuzzer emails went to spam. What should we do?", a: "Mark one as not spam and add an inbox rule that keeps them in the main inbox. If your IT team manages mail filtering centrally, ask them to allow ZapBuzzer alerts." },
      { q: "Is email the only channel on Free?", a: "Free includes email notifications plus the ZapBuzzer mobile and web apps. Telegram and WhatsApp are Pro." },
      { q: "Does email repeat like the other channels?", a: "Notifications repeat until the request is accepted, so an unanswered buzz keeps coming back." },
      { q: "Can we send from our own domain?", a: "Custom domain and white-label are Enterprise options. Talk to us for details." },
      { q: "Can staff accept by replying to the email?", a: "Requests are accepted in ZapBuzzer on web or mobile, where the first accept is recorded and shown to the requester." },
      {
        "q": "Do email alerts stop once someone accepts?",
        "a": "Yes. Repeats stop for the whole team once one person accepts, on email and every other channel. The request then belongs to that person."
      },
      {
        "q": "Is email enough for a pantry team?",
        "a": "It works, but pantry staff are rarely at an inbox. Pairing email with the Android app, which rings through silent mode, usually gets far quicker accepts."
      },
    ],
    related: ["notifications", "notifications/push", "notifications/multi-channel", "pricing/free", "integrations/custom-domain", "sign-up"],
    cta: { title: "Start free with email alerts", body: "Free forever for up to 10 staff on one location. Sign up and send your first buzz." },
  },

  // ───────────────────────────── PUSH ─────────────────────────────
  {
    path: "notifications/push",
    title: "Mobile Alerts That Ring Through Silent Mode",
    description:
      "The ZapBuzzer Android app keeps ringing on a silenced or locked handset, so staff walking the floor still catch every request. Accept and track from the phone.",
    h1: "A phone on silent shouldn’t mean a missed request",
    eyebrow: "Mobile app",
    lead:
      "Pantry runners, mailroom staff and facilities technicians carry their phones in a pocket, often on silent. The ZapBuzzer Android app rings through anyway, even when the phone is locked.",
    keywords: ["mobile push notifications staff", "ring through silent mode", "android staff alert app", "locked phone alerts"],
    heroVisual: "mobile-app",
    sections: [
      {
        type: "prose",
        heading: "Built for staff who aren’t at a desk",
        paragraphs: [
          "A normal push notification is easy to miss: one buzz, one banner, and it is gone. For someone carrying a tray or fixing an AC unit, that isn’t enough.",
          "The ZapBuzzer Android app is built to ring through silent mode and a locked screen, so the alert gets the same attention as a call. Staff can then accept, start with an ETA and mark delivered without opening a laptop.",
        ],
      },
      {
        type: "visual",
        visual: "staff-queue",
        heading: "Accept from the lock screen to the queue",
        body: "Staff see the request, the note and the destination, then tap Accept. Their queue shows what they own and what is still waiting for someone.",
      },
      {
        type: "features",
        heading: "What the mobile app does",
        items: [
          { title: "Rings on silent and locked phones", body: "Alerts get through even when the phone is set not to." },
          { title: "One-tap summon", body: "A single tap calls staff or security, flags an emergency or sends an order." },
          { title: "Accept and track on the move", body: "Accept, start with an ETA, mark delivered and attach a photo." },
          { title: "Account on the server", body: "The server holds your account and workspace, so nothing is lost when you switch phones." },
        ],
      },
      {
        type: "scenario",
        heading: "AC stuck at 16°C",
        persona: "Om, Engineer",
        setting: "The Conference Room B AC is stuck at 16°C before a client call.",
        timeline: [
          { time: "14:00", event: "Om taps Facilities with the note ‘Conf Room B AC stuck at 16°C’." },
          { time: "14:00", event: "Deepak’s phone is on silent in his pocket and rings anyway." },
          { time: "14:01", event: "Deepak accepts. If it isn’t fixed within 15 minutes, it auto-escalates." },
          { time: "14:10", event: "Fixed and marked delivered." },
        ],
        outcome: "“Facilities tickets auto-escalate now. Nothing rots in someone’s DMs.” — Deepak, Admin Head",
      },
      {
        type: "callout",
        tone: "info",
        title: "Getting the app",
        body: "The ZapBuzzer Android app (v1.15.2, 61 MB) is included on every plan, Free included.",
      },
      {
        "type": "comparison",
        "heading": "A standard push vs a ZapBuzzer ring",
        "columns": [
          "Typical app push",
          "ZapBuzzer Android app"
        ],
        "rows": [
          {
            "label": "Phone on silent",
            "a": "No sound",
            "b": "Rings through"
          },
          {
            "label": "Phone locked",
            "a": "A banner that is easy to miss",
            "b": "Rings like it matters"
          },
          {
            "label": "Ignored once",
            "a": "Gone",
            "b": "Repeats until someone on the team accepts"
          },
          {
            "label": "What you can do next",
            "a": "Open the app and look",
            "b": "Accept, start with an ETA, mark delivered"
          }
        ]
      },
      {
        "type": "audience",
        "heading": "Who should have the app installed",
        "items": [
          {
            "role": "Pantry staff",
            "benefit": "Coffee and lunch orders reach them in the kitchen, even with their hands full."
          },
          {
            "role": "Facilities technicians",
            "benefit": "AC, lighting and room issues reach them wherever they are in the building."
          },
          {
            "role": "Mailroom and reception",
            "benefit": "A courier at the gate gets picked up without anyone walking over to find them."
          },
          {
            "role": "Security",
            "benefit": "One tap from an employee can summon security or raise an emergency."
          },
          {
            "role": "Employees",
            "benefit": "Tap what they need from anywhere in the office and follow its status."
          }
        ]
      },
      {
        "type": "checklist",
        "heading": "Rolling the app out to staff phones",
        "items": [
          "Install the Android app on every staff member’s phone",
          "Sign each person in to the office workspace",
          "Send a test buzz with the phone on silent and locked to check it rings",
          "Show staff the Accept, Start and Delivered steps once",
          "Keep email on as well, so there is a written record"
        ]
      },
      {
        "type": "callout",
        "tone": "warning",
        "title": "Ringing through silent is deliberate",
        "body": "Staff should know in advance that the app will ring even on silent. That is what makes it work, and it stops the moment a teammate accepts, so it is loud only while a request is waiting."
      },
    ],
    faqs: [
      { q: "Does it really ring when the phone is on silent?", a: "Yes. The Android app rings through even on a silent or locked phone." },
      { q: "Is the mobile app part of the Free plan?", a: "Yes. Every plan includes the mobile and web apps." },
      { q: "Can employees use the app to request, not just staff?", a: "Yes. Employees use it to tap what they need, and staff use it to accept and track." },
      { q: "What happens if I change phones?", a: "Your account and workspace live on the server. Install the app on the new phone and sign in." },
      {
        "q": "Does the ringing stop if a colleague accepts first?",
        "a": "Yes. As soon as anyone on the team accepts, the request belongs to them and the reminders stop for everyone else."
      },
      {
        "q": "Can staff attach a photo from the phone?",
        "a": "Yes. When marking a request delivered, staff can attach a photo, which is useful for a print job left at a desk or a courier handed over at reception."
      },
      {
        "q": "Is there a web app for desk staff?",
        "a": "Yes. Every plan includes both the web app and the mobile app, so desk-based teams can work from a browser."
      },
    ],
    related: ["notifications", "mobile-app", "mobile-app/android", "mobile-app/notifications", "notifications/email", "free-trial"],
    cta: { title: "Put a buzzer in every pocket", body: "Sign up free and install the Android app on your staff phones today." },
  },

  // ───────────────────────────── ROUTING ─────────────────────────────
  {
    path: "notifications/routing",
    title: "Notification Routing to the Right Team",
    description:
      "Each request item notifies only its team: pantry, print room, IT or facilities. The right people are pinged at once and nobody else is disturbed.",
    h1: "The right team gets pinged. Everyone else gets peace.",
    eyebrow: "Routing",
    lead:
      "Notifying everyone about everything is how WhatsApp groups go noisy. ZapBuzzer routes each request to the team responsible for it, so alerts reach the people who can act and no one else.",
    keywords: ["notification routing", "route requests to team", "auto route office requests", "targeted staff alerts"],
    heroVisual: "notification-flow",
    sections: [
      {
        type: "prose",
        heading: "Routing happens before the first ping",
        paragraphs: [
          "Each catalogue item belongs to a team: coffee to pantry, a PDF print job to the print room, ‘projector stuck’ to IT, ‘AC too cold’ to facilities, and courier pickup to the mailroom. When someone buzzes, ZapBuzzer already knows who to notify.",
          "Requesters don’t need to know who is on shift. They pick what they need and where they are. Routing does the rest.",
        ],
      },
      {
        type: "table",
        heading: "Example routing",
        headers: ["Request", "Team notified", "Not notified"],
        rows: [
          ["Coffee to Boss Cabin", "Pantry", "IT, Facilities, Print"],
          ["24 colour copies", "Print room", "Pantry, IT"],
          ["HDMI cable", "IT desk", "Pantry, Facilities"],
          ["AC stuck at 16°C", "Facilities", "Pantry, Print"],
          ["Courier at Gate 1", "Mailroom", "Pantry, IT"],
        ],
      },
      {
        type: "visual",
        visual: "notification-flow",
        heading: "Routed, then fanned out",
        body: "First the request is routed to a team, then it fans out to that team’s channels together. Two steps that happen in the same moment.",
      },
      {
        type: "scenario",
        heading: "HDMI in three minutes",
        persona: "Tanvi, Design",
        setting: "Tanvi is about to present and there is no HDMI cable in the room.",
        timeline: [
          { time: "15:00", event: "Tanvi taps IT, chooses HDMI and her room." },
          { time: "15:00", event: "Only the IT desk is notified." },
          { time: "15:01", event: "Priya accepts." },
          { time: "15:03", event: "The cable is delivered." },
        ],
        outcome: "The pantry and print room never saw a ping that wasn’t for them.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Multi-location on Pro",
        body: "With multi-location on Pro, each office can route to its own teams, so a Pune coffee request doesn’t ping a Mumbai pantry.",
      },
      {
        "type": "problem-solution",
        "heading": "What happens without routing",
        "problem": {
          "title": "One alert for everyone",
          "points": [
            "The IT desk mutes the channel because it is mostly coffee orders.",
            "The pantry team sees projector complaints it can do nothing about.",
            "Requesters guess which person to message and often guess wrong.",
            "A request sent to the wrong person waits until someone forwards it."
          ]
        },
        "solution": {
          "title": "One alert for the right team",
          "points": [
            "Each catalogue item already knows its team.",
            "Only that team is pinged, so its alerts stay worth reading.",
            "Requesters choose what they need, not who to ask.",
            "Nothing needs forwarding, because it arrived in the right place."
          ]
        }
      },
      {
        "type": "workflow",
        "heading": "Setting up routing for the first time",
        "intro": "Most offices get this done in an afternoon.",
        "steps": [
          {
            "title": "List your teams",
            "body": "Pantry, print room, IT desk, facilities and mailroom are the usual starting set."
          },
          {
            "title": "Add catalogue items",
            "body": "Coffee, tea, snacks, print jobs, HDMI, AC, courier pickup and whatever else people ask for."
          },
          {
            "title": "Assign each item to a team",
            "body": "This is the routing. One decision per item, made once."
          },
          {
            "title": "Invite the staff",
            "body": "Add each person to the team that handles their work so they receive its alerts."
          },
          {
            "title": "Send a test buzz",
            "body": "Buzz one item per team and check that only the expected people were pinged."
          }
        ]
      },
      {
        "type": "metrics",
        "heading": "Signs your routing is working",
        "items": [
          {
            "metric": "Accept time per team",
            "meaning": "Quick, steady accepts suggest alerts reach people who are ready to act on them."
          },
          {
            "metric": "Requests by category",
            "meaning": "Shows which teams carry the most load and whether an item belongs somewhere else."
          },
          {
            "metric": "Escalations by team",
            "meaning": "Frequent escalations in one team can point to a misrouted item or too few staff on it."
          },
          {
            "metric": "Phone calls",
            "meaning": "When routing is right, people stop calling around to find who handles what."
          }
        ]
      },
      {
        "type": "callout",
        "tone": "tip",
        "title": "Route by job, not by person",
        "body": "Assign items to teams rather than individuals. When someone is on leave or at lunch, the rest of the team still gets the ping, and first-accept-wins decides who takes it."
      },
    ],
    faqs: [
      { q: "Who decides which team gets a request?", a: "Admins set up catalogue items and the team each one routes to. Requesters just pick the item." },
      { q: "Can one team handle several items?", a: "Yes. A pantry team might own coffee, tea, snacks and lunch." },
      { q: "What if the wrong team gets it?", a: "Fix the item’s routing once and every future request goes to the right place." },
      { q: "Does routing work across locations?", a: "Yes, with multi-location on Pro. Free covers one location." },
      {
        "q": "Does routing send a request to one person or a whole team?",
        "a": "The whole team. Everyone in it is pinged together and the first to accept owns the request, so nobody has to be on duty alone for a request to be picked up."
      },
      {
        "q": "Can a requester override where a request goes?",
        "a": "Requesters choose the item and the destination, such as Boss Cabin or Conference Room B. The team is decided by the item’s routing, which keeps requests from landing with whoever the requester happens to know."
      },
      {
        "q": "How do new staff start receiving alerts?",
        "a": "Add them to the right team. From then on they are pinged for that team’s items on the channels your plan includes."
      },
    ],
    related: ["notifications", "features/request-routing", "solutions/it-support/ticket-routing", "solutions/facilities/routing", "notifications/escalation", "enterprise/multi-location"],
    cta: { title: "Route every request to the right desk", body: "Set up your catalogue on a free trial in an afternoon." },
  },

  // ───────────────────────────── ESCALATION ─────────────────────────────
  {
    path: "notifications/escalation",
    title: "Notification Escalation for Overdue Requests",
    description:
      "When repeat pings aren’t enough, overdue requests auto-escalate to a manager. Pro adds a full escalation chain so nothing rots unanswered.",
    h1: "When nobody answers, someone with authority hears about it",
    eyebrow: "Escalation",
    lead:
      "Repeating notifications handle most requests. For the few that still slip, ZapBuzzer escalates automatically when the SLA runs out, first to a manager and then up a chain on Pro.",
    keywords: ["notification escalation", "overdue request escalation", "manager escalation alerts", "escalation chain office"],
    heroVisual: "escalation",
    sections: [
      {
        type: "workflow",
        heading: "Two layers of persistence",
        steps: [
          { title: "Repeat", body: "The team is pinged on all channels, repeating until someone accepts." },
          { title: "Timer", body: "Every request has an SLA deadline running from the buzz." },
          { title: "Escalate", body: "When the deadline passes, the request auto-escalates to a manager." },
          { title: "Chain (Pro)", body: "If it is still stuck, it moves up the next levels of the escalation chain." },
        ],
      },
      {
        type: "visual",
        visual: "escalation",
        heading: "The escalation ladder",
        body: "Each rung is a person with more authority to unblock the request. The ladder only runs when the request is overdue, so managers aren’t copied on everything.",
      },
      {
        type: "visual",
        visual: "sla-timer",
        heading: "The timer behind it",
        body: "Escalation is driven by the SLA timer. Requesters and staff can see the countdown, so the deadline is never a surprise.",
      },
      {
        type: "scenario",
        heading: "Facilities, 15 minutes",
        persona: "Om, Engineer",
        setting: "Conference Room B AC stuck at 16°C with a 15-minute SLA.",
        timeline: [
          { time: "14:00", event: "Buzzed to facilities. Deepak is notified on all channels." },
          { time: "14:01", event: "Accepted, but the part needed isn’t in stock." },
          { time: "14:15", event: "The SLA passes and the request auto-escalates to the manager." },
          { time: "14:20", event: "The manager arranges for the meeting to move rooms." },
        ],
        outcome: "The delay was visible to someone who could act on it, not buried in a DM.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Plan note",
        body: "Auto-escalation to a manager applies to overdue requests. The multi-step escalation chain is part of Pro, together with SLA reporting.",
      },
      {
        "type": "prose",
        "heading": "Escalation is a message to someone new",
        "paragraphs": [
          "Repeat pings talk to the same team over and over. Escalation changes the audience. When a request runs past its deadline, the alert stops being only the pantry’s or the IT desk’s problem and lands with a manager who can reassign work, call a vendor or move a meeting.",
          "That shift matters because most overdue requests are not ignored on purpose. The only technician is up a ladder on the 5th floor, the print room is jammed, or the part simply isn’t in the building. A teammate can’t fix those. A manager often can.",
          "Escalation also tells the requester that the delay has been seen. Om doesn’t need to phone anyone to ask about the AC. The request has already gone to the person who can make a decision about it."
        ]
      },
      {
        "type": "comparison",
        "heading": "Chasing by hand vs automatic escalation",
        "columns": [
          "Chasing by hand",
          "ZapBuzzer escalation"
        ],
        "rows": [
          {
            "label": "Who notices the delay",
            "a": "The requester, eventually",
            "b": "The SLA timer, the moment it passes"
          },
          {
            "label": "Who gets told",
            "a": "Whoever the requester knows to call",
            "b": "The manager on the escalation path"
          },
          {
            "label": "Context",
            "a": "Retold over the phone",
            "b": "The original item, note, destination and timeline"
          },
          {
            "label": "Record afterwards",
            "a": "None",
            "b": "Escalation logged against the request"
          }
        ]
      },
      {
        "type": "audience",
        "heading": "Who escalation helps",
        "items": [
          {
            "role": "Requesters",
            "benefit": "They stop being the ones who chase. An overdue request reaches a manager without a single phone call."
          },
          {
            "role": "Staff",
            "benefit": "A genuine blocker, such as a missing part, becomes visible to someone who can solve it, instead of looking like slowness."
          },
          {
            "role": "Managers",
            "benefit": "They hear only about requests that are actually late, with the full history attached, not every buzz in the office."
          },
          {
            "role": "Owners",
            "benefit": "Escalation counts in analytics show where a team is understaffed or a category needs a longer deadline."
          }
        ]
      },
      {
        "type": "checklist",
        "heading": "Setting up escalation sensibly",
        "items": [
          "Give each category a deadline people agree is fair, short for coffee and longer for facilities work",
          "Name a manager for each team who will actually act on an escalation",
          "On Pro, add further levels to the chain for requests that stay stuck",
          "Review escalated requests weekly to spot repeat causes",
          "Adjust deadlines that escalate constantly rather than ignoring the alerts"
        ]
      },
    ],
    faqs: [
      { q: "Do managers get every notification?", a: "No. Managers hear about a request only when it is overdue and escalates." },
      { q: "Is escalation only for unaccepted requests?", a: "Escalation is tied to the SLA deadline, so a request that is accepted but not delivered in time can escalate too." },
      { q: "Is the escalation chain on Free?", a: "The multi-step escalation chain is a Pro feature." },
      { q: "Can we see how often things escalate?", a: "Yes. Escalations show up in analytics and SLA reports on Pro." },
      {
        "q": "Does escalation stop the original team’s notifications?",
        "a": "No. The team still owns the work, and the person who accepted it remains responsible. Escalation adds a manager to the picture so the delay gets attention."
      },
      {
        "q": "Can different teams escalate to different managers?",
        "a": "Yes. Each team’s escalation path can lead to the person responsible for it, so a pantry delay reaches the office manager and a facilities delay reaches the admin head."
      },
      {
        "q": "Will escalation make staff look bad?",
        "a": "Escalations are about requests, not blame. Because every request is timed, the record shows when a delay came from a blocker such as a missing part, and scorecards credit staff fairly for the work they do."
      },
    ],
    related: ["notifications", "sla/automatic-escalation", "sla/escalation-chains", "solutions/facilities/escalation", "notifications/routing", "pricing/pro"],
    cta: { title: "Let the system chase, not you", body: "Try SLA escalation on a 14-day Pro trial." },
  },

  // ───────────────────────────── PREFERENCES ─────────────────────────────
  {
    path: "notifications/preferences",
    title: "Notification Preferences for Staff & Teams",
    description:
      "Decide which channels each team relies on: app, email, Telegram or WhatsApp. Keep alerts useful for staff without letting requests slip.",
    h1: "Choose how your team hears a buzz",
    eyebrow: "Preferences",
    lead:
      "Different teams have different habits. The pantry lives on WhatsApp and IT lives on a laptop. ZapBuzzer lets you lean on the channels each team actually checks, while keeping the repeat-until-accepted safety net.",
    keywords: ["notification preferences", "staff alert settings", "choose notification channels", "team notification setup"],
    heroVisual: "roles",
    sections: [
      {
        type: "prose",
        heading: "Preferences, with guardrails",
        paragraphs: [
          "The point of preferences is not to let alerts be turned off. It is to make sure they land where people look. A pantry runner who never opens email gets little from it, while an IT lead at a laptop may prefer email and the web app.",
          "Whatever channels a team uses, two things stay fixed: the request goes to the whole team at once, and it repeats until someone accepts.",
        ],
      },
      {
        type: "table",
        heading: "Common setups by team",
        headers: ["Team", "Typical channels", "Why"],
        rows: [
          ["Pantry", "Android app and WhatsApp", "Phones in pockets, rings on silent"],
          ["Print room", "Web app and app", "Near a computer, often moving"],
          ["IT desk", "Web app, email and Telegram", "At laptops all day"],
          ["Facilities", "Android app", "Walking the floors"],
          ["Mailroom", "Android app and WhatsApp", "At the gate and on the stairs"],
        ],
      },
      {
        type: "visual",
        visual: "roles",
        heading: "Roles shape what people see",
        body: "Granular role permissions decide who can raise, accept or manage requests, and the owner alone sees spend. Notifications follow those roles.",
      },
      {
        type: "checklist",
        heading: "Before you settle preferences",
        items: [
          "Ask each team which app they check first",
          "Install the Android app for anyone who isn’t at a desk",
          "Keep email on for a written record",
          "Upgrade to Pro if your teams live on Telegram or WhatsApp",
        ],
      },
      {
        type: "callout",
        tone: "warning",
        title: "Don’t rely on one channel",
        body: "A team with a single quiet channel is how requests get missed. Pair at least one fast channel, such as the mobile app, with one that leaves a record, such as email.",
      },
      {
        "type": "workflow",
        "heading": "Working out the right mix for a team",
        "steps": [
          {
            "title": "Watch a normal day",
            "body": "Notice where each team member actually is: at a desk, in the pantry, at the gate or walking the floors."
          },
          {
            "title": "Pick a fast channel",
            "body": "For people on the move that is usually the Android app, which rings through silent. On Pro it may also be WhatsApp or Telegram."
          },
          {
            "title": "Pick a record channel",
            "body": "Email works on every plan and leaves a written trail for desk-based leads."
          },
          {
            "title": "Run it for a week",
            "body": "Look at accept times for that team and ask staff whether alerts felt useful or noisy."
          },
          {
            "title": "Adjust",
            "body": "Swap a channel that isn’t being read for one that is, then check accept times again."
          }
        ]
      },
      {
        "type": "comparison",
        "heading": "Personal preference vs team guarantee",
        "intro": "Preferences shape how people hear a buzz. They don’t change the promise that someone will.",
        "columns": [
          "What preferences can shape",
          "What stays fixed"
        ],
        "rows": [
          {
            "label": "Channels",
            "a": "Which channels a team leans on",
            "b": "Every chosen channel fires at the same moment"
          },
          {
            "label": "Audience",
            "a": "Who belongs to which team",
            "b": "The whole team is pinged, not one person"
          },
          {
            "label": "Silence",
            "a": "Which channels make noise for whom",
            "b": "Pings repeat until someone accepts"
          },
          {
            "label": "Late requests",
            "a": "Who manages each team",
            "b": "Overdue requests escalate when the SLA passes"
          }
        ]
      },
      {
        "type": "audience",
        "heading": "What a good setup feels like for each role",
        "items": [
          {
            "role": "Pantry runner",
            "benefit": "One ring in the pocket for a coffee order, and it stops as soon as a colleague accepts."
          },
          {
            "role": "IT lead",
            "benefit": "Requests appear on the laptop they already have open, with an email copy for reference."
          },
          {
            "role": "Office manager",
            "benefit": "No need to relay messages between teams. Each team hears its own requests directly."
          },
          {
            "role": "Employees",
            "benefit": "They never think about channels at all. They tap Buzz and watch the status change."
          }
        ]
      },
    ],
    faqs: [
      { q: "Can staff mute notifications completely?", a: "ZapBuzzer is built so requests get answered. Notifications repeat until someone on the team accepts, which is the safety net." },
      { q: "Which channels can we choose from?", a: "The app and email on every plan, and Telegram and WhatsApp on Pro." },
      { q: "Do preferences change routing?", a: "No. Routing decides which team gets the request. Channels decide how that team hears about it." },
      { q: "Can we change setups later?", a: "Yes. Adjust as your teams learn what works." },
      {
        "q": "Do employees who raise requests need notification preferences?",
        "a": "Not really. Requesters mainly follow status in the app: accepted with a name and photo, started with an ETA, and delivered. Preferences matter most for the teams who receive and accept work."
      },
      {
        "q": "What if one person on a team never reads WhatsApp?",
        "a": "That’s why channels fire together. The same request reaches them in the app and by email at the same moment, so one unread channel doesn’t mean a missed request."
      },
      {
        "q": "Is there a recommended starting setup?",
        "a": "A simple start is the mobile app for anyone away from a desk plus email for everyone. Add Telegram or WhatsApp on Pro if a team already lives in one of them."
      },
    ],
    related: ["notifications", "notifications/multi-channel", "admin/roles-and-permissions", "admin/team-management", "notifications/push", "pricing"],
    cta: { title: "Fit alerts to your teams", body: "Start free and try different channels with each team for two weeks." },
  },

  // ───────────────────────────── WORKFLOW ─────────────────────────────
  {
    path: "notifications/workflow",
    title: "How a ZapBuzzer Notification Works",
    description:
      "Follow one notification from buzz to delivery: routed to a team, sent on every channel, repeated until accepted, escalated if late and closed with a rating.",
    h1: "The life of one buzz",
    eyebrow: "Workflow",
    lead:
      "Here is what happens to a single notification from the moment someone taps Buzz to the moment the job is rated, and which part of ZapBuzzer handles each step.",
    keywords: ["notification workflow", "request notification lifecycle", "how office alerts work", "buzz to delivery"],
    heroVisual: "request-timeline",
    sections: [
      {
        type: "workflow",
        heading: "Step by step",
        steps: [
          { title: "Buzz", body: "The requester picks an item, adds a note and destination and taps Buzz." },
          { title: "Route", body: "The item’s team is selected." },
          { title: "Fan out", body: "The team is pinged on the app and by email, and on Pro on Telegram and WhatsApp, all together." },
          { title: "Repeat", body: "Pings repeat until someone accepts." },
          { title: "Accept", body: "The first accept wins, reminders stop and the requester sees the name and photo." },
          { title: "Start and ETA", body: "The staff member starts the job and sets an ETA." },
          { title: "Escalate if late", body: "If the SLA runs out, the request escalates to a manager, and up the chain on Pro." },
          { title: "Deliver and rate", body: "Delivered, optionally with a photo, then rated from 1 to 5 stars and counted in analytics." },
        ],
      },
      {
        type: "visual",
        visual: "request-timeline",
        heading: "The timeline view",
        body: "Every step lands on the request’s timeline with a time and a name, from the first notification to the rating.",
      },
      {
        type: "scenario",
        heading: "Courier at the gate",
        persona: "Neha, Reception",
        setting: "A courier arrives at Gate 1.",
        timeline: [
          { time: "15:40:00", event: "Buzz: Courier Pickup." },
          { time: "15:40:01", event: "Routed to the mailroom and fanned out on the app and WhatsApp." },
          { time: "15:40:30", event: "Still unaccepted, so the ping repeats." },
          { time: "15:40:45", event: "Sunil accepts and the reminders stop." },
          { time: "15:52", event: "Delivered, logged and rated." },
        ],
        outcome: "Each step is audit-trailed.",
      },
      {
        type: "glossary",
        heading: "Terms used here",
        terms: [
          { term: "Buzz", definition: "A request sent from the catalogue." },
          { term: "Fan-out", definition: "Sending to all of a team’s channels at once." },
          { term: "First accept wins", definition: "The first person to accept owns the request." },
          { term: "SLA", definition: "The deadline each request carries." },
          { term: "Escalation", definition: "Automatic notification of a manager when a request is overdue." },
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "See it live",
        body: "The read-only demo workspace lets you click through a request’s timeline without signing up.",
      },
      {
        "type": "table",
        "heading": "Who sees what at each step",
        "headers": [
          "Step",
          "Requester sees",
          "Team sees",
          "Manager sees"
        ],
        "rows": [
          [
            "Buzz",
            "Request sent",
            "Alert on their channels",
            "Nothing"
          ],
          [
            "Repeat",
            "Waiting for accept",
            "Alert again until someone accepts",
            "Nothing"
          ],
          [
            "Accept",
            "Name and photo of the owner",
            "Request taken, reminders stop",
            "Nothing"
          ],
          [
            "Start",
            "ETA",
            "Owner’s job in progress",
            "Nothing"
          ],
          [
            "SLA passes",
            "Request still open",
            "Request overdue",
            "Escalation alert"
          ],
          [
            "Deliver and rate",
            "Delivered, rating prompt",
            "Job closed",
            "Counts in analytics"
          ]
        ]
      },
      {
        "type": "prose",
        "heading": "Where the notification hands over to the request",
        "paragraphs": [
          "The notification’s job ends at accept. Up to that moment ZapBuzzer is trying to get attention, which is why it uses every channel and repeats. After it, the job is to keep everyone informed without noise: the requester sees status changes and the team stops being pinged.",
          "The SLA timer is the thread that runs through both halves. Every request carries a deadline, so a request that waits a long time for an owner is still being measured against it. That keeps the measure honest from the requester’s side of the desk."
        ]
      },
      {
        "type": "metrics",
        "heading": "Numbers each step produces",
        "intro": "Because every request is timed, each step leaves something you can measure.",
        "items": [
          {
            "metric": "Time to accept",
            "meaning": "From buzz to first accept. Shows how well notifications reach people who are free."
          },
          {
            "metric": "Time to deliver",
            "meaning": "From accept to delivered. Shows how long the work itself takes."
          },
          {
            "metric": "On-time rate",
            "meaning": "Share of requests delivered within their SLA."
          },
          {
            "metric": "Rating",
            "meaning": "The requester’s 1–5★ score, which feeds staff scorecards."
          }
        ]
      },
      {
        "type": "visual",
        "visual": "delivery",
        "heading": "The last step: delivered and rated",
        "body": "When the job is done, the staff member marks it delivered, with a photo if useful, and the requester gets a prompt to rate it from 1 to 5 stars."
      },
      {
        type: "comparison",
        heading: "The same request, phoned in vs buzzed",
        intro: "Following one request for two coffees to the boss cabin shows where each step of the notification saves time.",
        columns: ["Phone call", "ZapBuzzer buzz"],
        rows: [
          { label: "Reaching someone", a: "Ring the pantry extension, then a mobile, then walk over", b: "Whole team pinged on every channel at once" },
          { label: "Nobody answers", a: "Try again later", b: "Pings repeat automatically" },
          { label: "Two people hear it", a: "Both go, or neither", b: "First accept wins, the rest stop" },
          { label: "Requester’s view", a: "Waits and wonders", b: "Name, photo and ETA" },
          { label: "Afterwards", a: "Nothing recorded", b: "Timed, rated and in analytics" },
        ],
      },
    ],
    faqs: [
      { q: "How quickly does the first notification go out?", a: "As soon as the requester taps Buzz. All channels fire together." },
      { q: "How long do repeats continue?", a: "Until someone accepts. If the SLA passes first, escalation kicks in as well." },
      { q: "Does the requester get notified at each step?", a: "They see live status: accepted, started with ETA, and delivered." },
      { q: "Is every step recorded?", a: "Every request is timed and every action is audit-logged. Full audit logs and reports are part of Pro." },
      {
        "q": "Can a request be delivered without being accepted first?",
        "a": "The lifecycle runs buzz, accept, start, deliver and rate, so someone owns every request before it is closed. That ownership is what makes ratings and scorecards fair."
      },
      {
        "q": "Where do I see the numbers from each step?",
        "a": "Accept times, on-time delivery and ratings feed ZapBuzzer’s analytics and staff scorecards. Full analytics and scorecards are part of Pro."
      },
    ],
    related: ["notifications", "how-it-works", "features/request-status", "workflows/coffee-request", "notifications/escalation", "demo"],
    cta: { title: "Follow a buzz yourself", body: "Open the read-only demo or start a free trial and send one." },
  },
];
