import type { PageContent } from "../types";

export const pages: PageContent[] = [
  // ───────────────────────────── HUB ─────────────────────────────
  {
    path: "notifications",
    title: "Office Request Notifications That Get Answered",
    description:
      "ZapBuzzer pings the right team on app, email, Telegram and WhatsApp at once, and repeats until someone accepts. Missed requests stop being a thing.",
    h1: "Notifications That Keep Ringing Until Someone Says Yes",
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
        heading: "Why Office Requests Get Missed",
        intro: "Most requests are not refused. They just never reach anyone who is free to act.",
        problem: {
          title: "The Usual Channels",
          points: [
            "A message in the pantry WhatsApp group scrolls away under forty others.",
            "The IT desk phone rings while the only IT person is in Conference Room B.",
            "An email lands in an inbox nobody checks during the lunch rush.",
            "A phone on silent in a pocket means a buzz nobody hears.",
          ],
        },
        solution: {
          title: "How ZapBuzzer Notifies",
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
        heading: "One Buzz, Four Channels, One Owner",
        body: "When Aarav taps Coffee for the Boss Cabin, the request fans out to the pantry team in the ZapBuzzer app and by email, and on Telegram and WhatsApp if you are on Pro. All of it happens at the same moment. The first person to accept owns the request, and the reminders stop for everyone else.",
        points: [
          "App, email, Telegram and WhatsApp in parallel, not one after another",
          "Repeat pings until the request is accepted",
          "Accepting stops the reminders and shows the requester who is on it",
        ],
      },
      {
        type: "prose",
        eyebrow: "The Idea",
        heading: "Notify the Team, Not a Person",
        paragraphs: [
          "Most office alerting is built around one person: call Raju, message the IT guy, email facilities. That works until Raju is on a break. ZapBuzzer routes each request to a team, such as pantry, print room, IT desk, facilities or mailroom, and notifies everyone on it together. Whoever is free first takes it.",
          "That is why notifications and first-accept-wins go together. Notifying everyone would cause chaos if three people all walked to the boss cabin with coffee. Because the first accept locks the request to one owner, a wide alert produces exactly one response.",
          "It also changes the requester’s experience. Instead of wondering whether anyone saw the message, they see a name and photo the moment someone accepts, followed by an ETA once the job starts.",
        ],
      },
      {
        type: "table",
        heading: "Channels and Plans",
        intro: "Every plan includes the ZapBuzzer web and mobile apps.",
        headers: ["Channel", "Free", "Pro", "Best For"],
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
        heading: "A Coffee During a Board Call",
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
        heading: "What the Notification System Does",
        items: [
          { title: "Parallel Delivery", body: "All of a team’s channels fire together, so there is no waiting for one channel to fail before trying the next." },
          { title: "Repeat Until Accepted", body: "Unanswered requests keep pinging. Silence is never treated as acknowledgement." },
          { title: "Rings Through Silent Mode", body: "The Android app rings even when the phone is on silent or locked." },
          { title: "Team Routing", body: "Each catalogue item is routed to its team, so pantry alerts never reach IT." },
          { title: "Escalation", body: "If a request runs past its SLA (its time limit), it is passed up to a manager automatically. A full escalation chain is part of Pro." },
          { title: "Status Updates", body: "Requesters see accepted, started with ETA, and delivered as they happen." },
        ],
      },
      {
        type: "stats",
        heading: "What Faster Notifications Looked Like in Pilots",
        items: [
          { value: "32s", label: "Average Accept Time" },
          { value: "−87%", label: "Phone Calls" },
          { value: "96%", label: "On-Time Delivery" },
          { value: "1.2M", label: "Requests Routed" },
        ],
        note: "Pilot office figures from the first month. Requests routed is a company-wide total.",
      },
      {
        type: "comparison",
        heading: "A WhatsApp Group vs ZapBuzzer Notifications",
        columns: ["Pantry WhatsApp Group", "ZapBuzzer"],
        rows: [
          { label: "Who Sees It", a: "Everyone, including people who don’t need to", b: "Only the team the request is routed to" },
          { label: "If Nobody Replies", a: "It scrolls away", b: "It repeats, then escalates" },
          { label: "Who Is Doing It", a: "‘I thought you were’", b: "First accept owns it, by name" },
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
      { q: "Which Channels Are Included on the Free Plan?", a: "Free includes the ZapBuzzer mobile and web apps and email notifications. Telegram and WhatsApp pings are part of Pro." },
      { q: "Do Channels Fire One After Another or All Together?", a: "All together. A request goes out on every channel the team uses at the same moment, and keeps repeating until someone accepts." },
      { q: "When Do the Reminders Stop?", a: "As soon as one person accepts the request. It then belongs to them, and the requester sees their name and photo." },
      { q: "Will Staff Hear Alerts If Their Phone Is on Silent?", a: "On the Android app, yes. It rings through even when the phone is on silent or locked." },
      { q: "What If Nobody Accepts at All?", a: "Notifications keep repeating. If the request runs past its SLA, it auto-escalates to a manager, and on Pro it can climb a full escalation chain." },
      { q: "Is ZapBuzzer Just a Telegram Bot?", a: "No. Telegram is one delivery channel. The request itself, including routing, first-accept, SLA timers, ratings and analytics, lives in ZapBuzzer." },
      { q: "Can I See Who Is on My Request Once the Alerts Stop?", a: "Yes. When someone accepts, the requester sees their name and photo, then an ETA once the work starts. That is usually enough to stop the follow-up calls that used to chase every request." },
      { q: "How Much Did Notifications Cut Phone Calls in Pilot Offices?", a: "Pilot offices saw phone calls drop by 87% in their first month, with a 32-second average accept time. Alerts reaching the whole team at once, on every channel, is a big part of that." },
    ],
    related: [
      "notifications/multi-channel-notifications",
      "notifications/whatsapp-notifications",
      "notifications/telegram-integration",
      "notifications/mobile-push-notifications",
      "features/first-accept-wins",
      "sla-and-escalation/automatic-escalation",
      "pricing",
      "free-trial",
    ],
    cta: {
      title: "Make Sure Every Buzz Gets Heard",
      body: "Start a 14-day free trial with no credit card and no setup call. Invite your pantry team and send your first buzz this afternoon.",
    },
  },

  // ───────────────────────────── MULTI-CHANNEL ─────────────────────────────
  {
    path: "notifications/multi-channel-notifications",
    title: "Multi-Channel Request Alerts, All at Once",
    description:
      "Send every office request to app, email, Telegram and WhatsApp simultaneously. Whichever screen staff are looking at, the buzz is there. Repeats till accepted.",
    h1: "Every Channel, the Same Second",
    eyebrow: "Multi-Channel",
    lead:
      "People don’t live in one app. Your pantry staff might check WhatsApp, the IT desk might have Telegram open, and facilities may be on the ZapBuzzer app. Multi-channel means the request reaches all of them together.",
    keywords: ["multi-channel notifications", "simultaneous staff alerts", "app email whatsapp telegram alerts", "parallel notifications"],
    heroVisual: "notification-flow",
    sections: [
      {
        type: "prose",
        heading: "All at Once Beats One After Another",
        paragraphs: [
          "Many alerting tools work as a ladder: try the app, and if there is no response, try email after a few minutes, then SMS. Each step adds delay, and the delay matters most when someone is standing at the gate or waiting in a meeting.",
          "ZapBuzzer doesn’t make the request wait. It sends to every channel the team uses at once and repeats until someone accepts. The fastest channel for any given person wins, and the first accept ends the noise for everyone.",
        ],
      },
      {
        type: "visual",
        visual: "notification-flow",
        heading: "The Fan-Out",
        body: "A single request appears in the ZapBuzzer app, in email, and on Pro in Telegram and WhatsApp, all within the same moment. Each notification carries the item, the note and the destination.",
      },
      {
        type: "table",
        heading: "Which Channel Catches Whom",
        headers: ["Person", "Where They Usually Are", "Channel That Reaches Them"],
        rows: [
          ["Pantry staff", "Kitchen, phone in pocket", "Android app ringing through silent, or WhatsApp"],
          ["IT desk", "At a laptop", "Web app or Telegram"],
          ["Facilities lead", "Walking the floors", "Mobile app"],
          ["Admin head", "In meetings", "Email, as a record"],
        ],
      },
      {
        type: "scenario",
        heading: "Prints Before a Pitch",
        persona: "Kavya, Sales Lead",
        setting: "A pitch in 10 minutes. She needs 24 colour copies.",
        timeline: [
          { time: "10:50", event: "Kavya uploads the PDF and sets 24 copies in colour." },
          { time: "10:50", event: "The print room gets it in the app, by email and on WhatsApp together." },
          { time: "10:51", event: "Arjun, away from his desk, sees it on WhatsApp and accepts." },
          { time: "10:58", event: "The prints arrive at Kavya’s desk before the client sits down." },
        ],
        outcome: "“Print jobs land at my desk before the client even sits down. Zero chase calls.” — Kavya, Sales Lead, Northwind",
      },
      {
        type: "comparison",
        heading: "Fallback Alerting vs Parallel Alerting",
        columns: ["Fallback Ladder", "ZapBuzzer Parallel"],
        rows: [
          { label: "First Alert", a: "One channel", b: "All channels" },
          { label: "Delay to Second Channel", a: "Minutes", b: "None" },
          { label: "If Unanswered", a: "Moves down the ladder", b: "Repeats on all, then escalates" },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Plan Note",
        body: "On Free, multi-channel means the app plus email. Pro adds Telegram and WhatsApp to the same simultaneous fan-out.",
      },
      {
        "type": "prose",
        "heading": "Why One Channel Is Never Enough",
        "paragraphs": [
          "Every channel has a blind spot. Email is ignored in the kitchen. A phone on silent gets nothing from an ordinary push. WhatsApp is noisy at lunch, and Telegram is only useful if the person has it open. Pick any one of them and some requests will wait.",
          "Firing on all of them at once covers those blind spots without anyone having to guess which channel a colleague is watching right now. The cost is a few duplicate alerts for a short while, and that ends the moment someone accepts."
        ]
      },
      {
        "type": "checklist",
        "heading": "Getting Multi-Channel Right",
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
        "heading": "How to Tell It’s Working",
        "items": [
          {
            "metric": "Average Accept Time",
            "meaning": "Pilot offices averaged 32 seconds in their first month. A team well above its peers may be missing a channel."
          },
          {
            "metric": "Phone Calls",
            "meaning": "Pilot offices saw 87% fewer. If people are still calling, alerts aren’t landing."
          },
          {
            "metric": "On-Time Delivery",
            "meaning": "Pilot offices reached 96%. Faster accepts leave more of the SLA, the time limit for the request, for the work itself."
          }
        ]
      },
    ],
    faqs: [
      { q: "Won’t Staff Get the Same Alert Four Times?", a: "They may see it in more than one place, which is the point: it reaches them wherever they look first. Once anyone accepts, the reminders stop." },
      { q: "Can a Team Use Only Some Channels?", a: "Teams can rely on whichever channels suit them. The app and email are available on every plan, and Telegram and WhatsApp on Pro." },
      { q: "Is There SMS?", a: "The channels ZapBuzzer offers are the app, email, Telegram and WhatsApp. For anything beyond that, talk to us about Enterprise." },
      { q: "Does the Requester Get Notified Too?", a: "The requester sees status changes, including accepted with name and photo, started with an ETA, and delivered." },
      {
        "q": "Do All Channels Show the Same Information?",
        "a": "Each notification carries the same request details: the item, the note and the destination. Accepting and tracking happen in ZapBuzzer itself."
      },
      {
        "q": "What Happens to the Other Alerts Once Someone Accepts?",
        "a": "The reminders stop for the whole team on every channel. The requester sees who accepted, with their name and photo."
      },
      {
        "q": "Is Multi-Channel Worth It for a Small Office?",
        "a": "Even on Free, the app and email fire together, which covers both people at desks and people on the move. Pro adds Telegram and WhatsApp when a team relies on them."
      },
      { q: "Which Channels Fire Together on the Pro Plan?", a: "On Pro, a request goes out on the app, email, Telegram and WhatsApp at the same moment. Free uses the app and email. Pro is ₹99 per seat per month." },
    ],
    related: ["notifications", "notifications/telegram-integration", "notifications/whatsapp-notifications", "notifications/email-notifications", "features/real-time-updates", "pricing/pro-plan"],
    cta: { title: "Reach Staff Wherever They Are", body: "Try multi-channel notifications free for 14 days, including Telegram and WhatsApp on the Pro trial." },
  },

  // ───────────────────────────── TELEGRAM ─────────────────────────────
  {
    path: "notifications/telegram-integration",
    title: "Telegram Notifications for Office Requests",
    description:
      "Get ZapBuzzer request alerts in Telegram alongside the app and email. Available on Pro. Repeats until accepted, so a busy chat never hides a buzz.",
    h1: "Office Requests Where Your Team Already Reads Telegram",
    eyebrow: "Telegram · Pro",
    lead:
      "If your staff keep Telegram open all day, that is where a buzz should show up. On Pro, ZapBuzzer sends request alerts to Telegram alongside the app and email, and the request itself stays in ZapBuzzer.",
    keywords: ["telegram notifications office", "telegram staff alerts", "telegram request alerts", "office telegram integration"],
    heroVisual: "notification-flow",
    sections: [
      {
        type: "prose",
        heading: "Not a Glorified Telegram Bot",
        paragraphs: [
          "Plenty of offices already run requests through Telegram: a group called ‘Pantry’ or ‘IT help’ where people post and hope. The trouble is not Telegram. It is that a chat has no owner, no timer and no memory.",
          "ZapBuzzer uses Telegram as a delivery channel. The request is raised, routed, accepted, timed, escalated and rated in ZapBuzzer. Telegram is where your team sees it, along with the app and email, at the same moment.",
        ],
      },
      {
        type: "workflow",
        heading: "How Telegram Fits In",
        steps: [
          { title: "Requester Buzzes", body: "Someone taps an item, adds a note and a destination, and buzzes it." },
          { title: "Alert on Telegram and Elsewhere", body: "The team is pinged on Telegram, the app and email at the same time." },
          { title: "Someone Accepts", body: "The first person to accept owns it, and reminders stop for the rest of the team." },
          { title: "Tracked in ZapBuzzer", body: "Started, ETA, delivered and rating all live on the request, not in chat history." },
        ],
      },
      {
        type: "scenario",
        heading: "Raj Accepts in 12 Seconds",
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
        heading: "Telegram Shows It, ZapBuzzer Settles It",
        body: "Three people might see the same alert on Telegram. Only one gets to own it: the first to accept. No more three people replying ‘on it’ in the group.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Pro Feature",
        body: "Telegram pings are part of Pro at ₹99 per seat per month. The Free plan uses the app and email notifications. Your workspace admin connects Telegram during setup, and if you need help, write to hello@zapbuzzer.com.",
      },
      {
        "type": "comparison",
        "heading": "A Telegram Group vs Telegram Alerts From ZapBuzzer",
        "columns": [
          "‘IT Help’ Telegram Group",
          "ZapBuzzer on Telegram"
        ],
        "rows": [
          {
            "label": "Who It Reaches",
            "a": "Everyone in the group, every message",
            "b": "The team the item is routed to"
          },
          {
            "label": "Who Owns It",
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
        "heading": "Teams That Tend to Choose Telegram",
        "items": [
          {
            "role": "IT Desk",
            "benefit": "Often keep Telegram open on desktop and phone, so an HDMI or projector request appears beside their other work."
          },
          {
            "role": "Engineering-Heavy Offices",
            "benefit": "Where Telegram is already the default chat, alerts land somewhere people actually read."
          },
          {
            "role": "Pantry Teams",
            "benefit": "Raj picked up Aarav’s coffee in 12 seconds because Telegram was already open."
          }
        ]
      },
      {
        "type": "checklist",
        "heading": "Before You Switch Telegram On",
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
      { q: "Is Telegram Available on the Free Plan?", a: "No. Free includes app and email notifications. Telegram and WhatsApp pings come with Pro." },
      { q: "Does Telegram Replace the ZapBuzzer App?", a: "No. Telegram is one of several channels that fire together. Accepting, tracking and rating happen in ZapBuzzer." },
      { q: "Can We Keep Our Existing Telegram Group?", a: "You can keep it for chat. Requests work better as buzzes, because each one gets an owner, a timer and a record." },
      { q: "What If a Telegram Alert Is Missed?", a: "Notifications repeat until someone accepts, on Telegram and every other channel. Overdue requests escalate to a manager." },
      {
        "q": "Does the Telegram Alert Include the Request Details?",
        "a": "Yes. Staff see the item, the requester’s note and the destination, so they know whether they can take it before opening ZapBuzzer."
      },
      {
        "q": "Can We Use Telegram for One Team and WhatsApp for Another?",
        "a": "Yes. On Pro, teams can lean on the channels they already use. The app and email keep firing alongside either one."
      },
      {
        "q": "Does Escalation Still Apply to Requests Alerted on Telegram?",
        "a": "Yes. The channel only affects how the team hears a buzz. If the request passes its SLA (its time limit), it goes up to a manager automatically, and the full escalation chain is part of Pro."
      },
      { q: "Do Staff Need to Change How They Use Telegram?", a: "No. They keep using Telegram as normal and the buzz arrives there alongside the app and other channels. Accepting, starting and delivering the request still happen in ZapBuzzer." },
    ],
    related: ["notifications", "notifications/whatsapp-notifications", "notifications/multi-channel-notifications", "features/first-accept-wins", "feature-comparison/vs-whatsapp", "pricing/pro-plan"],
    cta: { title: "Bring Requests to Telegram, Properly", body: "Start a Pro trial free for 14 days. No credit card needed." },
  },

  // ───────────────────────────── WHATSAPP ─────────────────────────────
  {
    path: "notifications/whatsapp-notifications",
    title: "WhatsApp Notifications for Office Staff",
    description:
      "Ping pantry, housekeeping and facilities staff on WhatsApp the moment a request comes in, with app and email at the same time. Included in Pro.",
    h1: "Reach Staff on WhatsApp, Without the WhatsApp Group Chaos",
    eyebrow: "WhatsApp · Pro",
    lead:
      "For many office staff, WhatsApp is the one app that is always checked. On Pro, ZapBuzzer sends request alerts there, and keeps the request itself out of the group chat.",
    keywords: ["whatsapp notifications office", "whatsapp staff alerts", "whatsapp request alerts", "replace pantry whatsapp group"],
    heroVisual: "before-after",
    sections: [
      {
        type: "problem-solution",
        heading: "The Pantry WhatsApp Group Problem",
        problem: {
          title: "Requests in a Group Chat",
          points: [
            "Orders, jokes and forwards all in one thread.",
            "No owner, so either nobody acts or three people do.",
            "No timer, no rating and no record you can report on.",
            "Print files lost in the scroll.",
          ],
        },
        solution: {
          title: "WhatsApp as an Alert Channel",
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
        heading: "Before and After",
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
        heading: "Quieter, Not Just Faster",
        paragraphs: [
          "The goal is not more WhatsApp messages. It is fewer, better ones. Each alert is about one request for one team, and it stops repeating once someone accepts.",
          "As one office manager put it: “Coffee arrives before anyone asks twice. The pantry WhatsApp group is finally quiet.” — Priya, Office Manager, Lumen Labs",
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Pro Feature",
        body: "WhatsApp pings are part of Pro at ₹99 per seat per month. On Free, staff are notified in the app and by email. Your workspace admin connects WhatsApp during setup, and our team can help at hello@zapbuzzer.com.",
      },
      {
        "type": "table",
        "heading": "What Lives in WhatsApp and What Lives in ZapBuzzer",
        "headers": [
          "Part of the Request",
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
        "heading": "Moving the Pantry Off the Group",
        "steps": [
          {
            "title": "Add the Usual Orders",
            "body": "Put coffee, tea, juice, snacks and lunch into the pantry catalogue."
          },
          {
            "title": "Connect WhatsApp on Pro",
            "body": "Your workspace admin connects WhatsApp so the pantry team gets alerts there."
          },
          {
            "title": "Tell the Office",
            "body": "Ask people to buzz instead of posting orders in the group."
          },
          {
            "title": "Let the Group Go Quiet",
            "body": "Keep it for chat if you like. Orders now arrive one at a time, each with an owner."
          }
        ]
      },
      {
        "type": "audience",
        "heading": "Teams That Often Prefer WhatsApp",
        "items": [
          {
            "role": "Pantry and Housekeeping",
            "benefit": "Already check WhatsApp through the day, so a buzz shows up where they look."
          },
          {
            "role": "Mailroom and Reception",
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
        heading: "Before You Switch WhatsApp Alerts On",
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
      { q: "What If a Staff Member Changes Their Phone Number?", a: "Ask your workspace admin to update their WhatsApp details so alerts follow them. In the meantime they still receive every request in the app and by email." },
      { q: "Is WhatsApp Included on Free?", a: "No. Free uses app and email notifications. WhatsApp and Telegram pings are part of Pro." },
      { q: "Do Staff Accept Requests From WhatsApp?", a: "The WhatsApp alert gets their attention. The request is accepted and tracked in ZapBuzzer, where first-accept-wins, timers and ratings live." },
      { q: "Will This Spam Our Staff?", a: "Alerts only go to the team a request is routed to, and they stop once someone accepts." },
      { q: "Should We Delete the Pantry Group?", a: "That’s up to you. Many offices keep it for chat and move requests to ZapBuzzer." },
      {
        "q": "Does Each WhatsApp Alert Go to the Whole Team?",
        "a": "Yes. Every member of the team the request is routed to is notified together, and the first to accept in ZapBuzzer owns it."
      },
      {
        "q": "What Do Staff See in the WhatsApp Alert?",
        "a": "The alert carries the request’s item, the note and the destination, so staff know what is needed and where before they open ZapBuzzer to accept."
      },
      {
        "q": "Can WhatsApp Be Tried Before Paying?",
        "a": "The 14-day free trial needs no credit card, and you can try Pro features such as WhatsApp pings during it. After that, WhatsApp needs a Pro plan."
      },
    ],
    related: ["notifications", "notifications/telegram-integration", "use-cases/reduce-whatsapp-requests", "feature-comparison/vs-whatsapp", "solutions/pantry", "pricing/pro-plan"],
    cta: { title: "Quiet the Group Chat", body: "Try WhatsApp notifications on a 14-day Pro trial. You won't need a card or a setup call." },
  },

  // ───────────────────────────── EMAIL ─────────────────────────────
  {
    path: "notifications/email-notifications",
    title: "Email Notifications on Every Plan",
    description:
      "ZapBuzzer sends email alerts for office requests on every plan, including Free. A dependable channel and a written record, alongside the app.",
    h1: "Email Alerts That Come With Every Plan",
    eyebrow: "Email",
    lead:
      "Email is the channel every workspace gets, Free included. It sits beside the ZapBuzzer app, fires at the same time and repeats until someone accepts.",
    keywords: ["email notifications office requests", "free email staff alerts", "request email alerts", "email notification plan"],
    heroVisual: "notification-flow",
    sections: [
      {
        type: "prose",
        heading: "Why Email Still Matters",
        paragraphs: [
          "Email is rarely the fastest way to reach pantry staff, but it is the one channel everybody has, it works on any device and it leaves a written trail. For admin, IT and facilities teams who live at a desk, it is often where they look first.",
          "In ZapBuzzer, email doesn’t wait its turn as a backup. It goes out with the app notification, so a desk-bound IT person and a mobile pantry runner both see the request at once.",
        ],
      },
      {
        type: "visual",
        visual: "notification-flow",
        heading: "Email in the Fan-Out",
        body: "Each request reaches the team by email at the same moment as the app. On Pro, Telegram and WhatsApp join in.",
      },
      {
        type: "table",
        heading: "Email by Plan",
        headers: ["Plan", "Email", "Other Channels"],
        rows: [
          ["Free", "Yes", "Mobile and web app"],
          ["Pro", "Yes", "App, Telegram, WhatsApp"],
          ["Enterprise", "Yes", "Everything in Pro. Custom domain and white-label available"],
        ],
      },
      {
        type: "scenario",
        heading: "A Small Office on Free",
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
        title: "Pair Email With the App",
        body: "For staff who move around, install the mobile app as well. On Android it rings even on silent, which an email can’t do.",
      },
      {
        "type": "features",
        "heading": "What a ZapBuzzer Email Carries",
        "items": [
          {
            "title": "The Item",
            "body": "What was asked for, such as two coffees, 24 colour copies or an HDMI cable."
          },
          {
            "title": "The Note",
            "body": "Anything the requester typed, like ‘no sugar’ or ‘needed before the 11 o’clock board meeting’."
          },
          {
            "title": "The Destination",
            "body": "Where it should go, for example Boss Cabin or Conference Room B."
          },
          {
            "title": "A Way to Act",
            "body": "The request itself is accepted in ZapBuzzer on web or mobile, so the owner is recorded and shown to the requester."
          }
        ]
      },
      {
        "type": "audience",
        "heading": "Who Email Suits Best",
        "items": [
          {
            "role": "IT Desk",
            "benefit": "Already working in a browser and an inbox, so a request shows up alongside the rest of their work."
          },
          {
            "role": "Admin and Facilities Leads",
            "benefit": "A written copy of what came in is handy when reviewing the day or following up with a vendor."
          },
          {
            "role": "Small Offices on Free",
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
        "heading": "Email Alone vs Email in ZapBuzzer",
        "columns": [
          "A Shared Email Inbox",
          "Email From ZapBuzzer"
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
            "b": "Every request is timed against its SLA (time limit)"
          },
          {
            "label": "Close-Out",
            "a": "A ‘done’ reply, sometimes",
            "b": "Delivered, optional photo and a 1–5★ rating"
          }
        ]
      },
      {
        "type": "checklist",
        "heading": "Making Email Work for Your Team",
        "items": [
          "Use work addresses people actually check during the day",
          "Ask staff who move around to install the mobile app as well",
          "Keep requests in ZapBuzzer and use email only as the alert",
          "Move to Pro when a team clearly lives on Telegram or WhatsApp instead"
        ]
      },
      {
        type: "prose",
        heading: "Keeping Request Emails Out of the Noise",
        paragraphs: [
          "The weak point of email is the rest of the inbox. A buzz for a projector fix can land between a newsletter and a long thread, and inbox filters sometimes sort it somewhere nobody looks. Ask each staff member to send a test buzz to themselves in the first week and check where it arrives.",
          "If it lands in a promotions or spam folder, mark it as important or add a simple inbox rule so ZapBuzzer emails stay in view. Because pings repeat until someone accepts, a missed first email is not the end of the request, but a clean inbox gets the accept time down.",
        ],
      },
    ],
    faqs: [
      { q: "Our ZapBuzzer Emails Went to Spam. What Should We Do?", a: "Mark one as not spam and add an inbox rule that keeps them in the main inbox. If your IT team manages mail filtering centrally, ask them to allow ZapBuzzer alerts." },
      { q: "Is Email the Only Channel on Free?", a: "Free includes email notifications plus the ZapBuzzer mobile and web apps. Telegram and WhatsApp are Pro." },
      { q: "Does Email Repeat Like the Other Channels?", a: "Notifications repeat until the request is accepted, so an unanswered buzz keeps coming back." },
      { q: "Can We Send From Our Own Domain?", a: "Custom domain and white-label are Enterprise options. Talk to us for details." },
      { q: "Can Staff Accept by Replying to the Email?", a: "Requests are accepted in ZapBuzzer on web or mobile, where the first accept is recorded and shown to the requester." },
      {
        "q": "Do Email Alerts Stop Once Someone Accepts?",
        "a": "Yes. Repeats stop for the whole team once one person accepts, on email and every other channel. The request then belongs to that person."
      },
      {
        "q": "Is Email Enough for a Pantry Team?",
        "a": "It works, but pantry staff are rarely at an inbox. Pairing email with the Android app, which rings through silent mode, usually gets far quicker accepts."
      },
      { q: "Who Is Email Alerting Best Suited To?", a: "Desk-based staff who keep their inbox open, and offices starting on the Free plan. Staff who move around the building usually do better with the mobile app, which rings through on silent." },
    ],
    related: ["notifications", "notifications/mobile-push-notifications", "notifications/multi-channel-notifications", "pricing/free-plan", "integrations/custom-domain", "sign-up"],
    cta: { title: "Start Free With Email Alerts", body: "Free forever for up to 10 staff on one location. Sign up and send your first buzz." },
  },

  // ───────────────────────────── PUSH ─────────────────────────────
  {
    path: "notifications/mobile-push-notifications",
    title: "Mobile Alerts That Ring Through Silent Mode",
    description:
      "The ZapBuzzer Android app keeps ringing on a silenced or locked handset, so staff walking the floor still catch every request. Accept and track from the phone.",
    h1: "A Phone on Silent Shouldn’t Mean a Missed Request",
    eyebrow: "Mobile App",
    lead:
      "Pantry runners, mailroom staff and facilities technicians carry their phones in a pocket, often on silent. The ZapBuzzer Android app rings through anyway, even when the phone is locked.",
    keywords: ["mobile push notifications staff", "ring through silent mode", "android staff alert app", "locked phone alerts"],
    heroVisual: "mobile-app",
    sections: [
      {
        type: "prose",
        heading: "Built for Staff Who Aren’t at a Desk",
        paragraphs: [
          "A normal push notification is easy to miss: one buzz, one banner, and it is gone. For someone carrying a tray or fixing an AC unit, that isn’t enough.",
          "The ZapBuzzer Android app is built to ring through silent mode and a locked screen, so the alert gets the same attention as a call. Staff can then accept, start with an ETA and mark delivered without opening a laptop.",
        ],
      },
      {
        type: "visual",
        visual: "staff-queue",
        heading: "Accept From the Lock Screen to the Queue",
        body: "Staff see the request, the note and the destination, then tap Accept. Their queue shows what they own and what is still waiting for someone.",
      },
      {
        type: "features",
        heading: "What the Mobile App Does",
        items: [
          { title: "Rings on Silent and Locked Phones", body: "Alerts get through even when the phone is set not to." },
          { title: "One-Tap Summon", body: "A single tap calls staff or security, flags an emergency or sends an order." },
          { title: "Accept and Track on the Move", body: "Accept, start with an ETA, mark delivered and attach a photo." },
          { title: "Account on the Server", body: "The server holds your account and workspace, so nothing is lost when you switch phones." },
        ],
      },
      {
        type: "scenario",
        heading: "AC Stuck at 16°C",
        persona: "Om, Engineer",
        setting: "The Conference Room B AC is stuck at 16°C before a client call.",
        timeline: [
          { time: "14:00", event: "Om taps Facilities with the note ‘Conf Room B AC stuck at 16°C’." },
          { time: "14:00", event: "Deepak’s phone is on silent in his pocket and rings anyway." },
          { time: "14:01", event: "Deepak accepts. If it isn’t fixed within 15 minutes, it auto-escalates." },
          { time: "14:10", event: "Fixed and marked delivered." },
        ],
        outcome: "“Facilities tickets auto-escalate now. Nothing rots in someone’s DMs.” — Deepak, Admin Head, Meridian",
      },
      {
        type: "callout",
        tone: "info",
        title: "Getting the App",
        body: "The ZapBuzzer Android app (v1.16.0, 61 MB) is included on every plan, Free included.",
      },
      {
        "type": "comparison",
        "heading": "A Standard Push vs a ZapBuzzer Ring",
        "columns": [
          "Typical App Push",
          "ZapBuzzer Android App"
        ],
        "rows": [
          {
            "label": "Phone on Silent",
            "a": "No sound",
            "b": "Rings through"
          },
          {
            "label": "Phone Locked",
            "a": "A banner that is easy to miss",
            "b": "Rings like it matters"
          },
          {
            "label": "Ignored Once",
            "a": "Gone",
            "b": "Repeats until someone on the team accepts"
          },
          {
            "label": "What You Can Do Next",
            "a": "Open the app and look",
            "b": "Accept, start with an ETA, mark delivered"
          }
        ]
      },
      {
        "type": "audience",
        "heading": "Who Should Have the App Installed",
        "items": [
          {
            "role": "Pantry Staff",
            "benefit": "Coffee and lunch orders reach them in the kitchen, even with their hands full."
          },
          {
            "role": "Facilities Technicians",
            "benefit": "AC, lighting and room issues reach them wherever they are in the building."
          },
          {
            "role": "Mailroom and Reception",
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
        "heading": "Rolling the App Out to Staff Phones",
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
        "title": "Ringing Through Silent Is Deliberate",
        "body": "Staff should know in advance that the app will ring even on silent. That is what makes it work, and it stops the moment a teammate accepts, so it is loud only while a request is waiting."
      },
    ],
    faqs: [
      { q: "Does It Really Ring When the Phone Is on Silent?", a: "Yes. The Android app rings through even on a silent or locked phone." },
      { q: "Is the Mobile App Part of the Free Plan?", a: "Yes. Every plan includes the mobile and web apps." },
      { q: "Can Employees Use the App to Request, Not Just Staff?", a: "Yes. Employees use it to tap what they need, and staff use it to accept and track." },
      { q: "What Happens If I Change Phones?", a: "Your account and workspace live on the server. Install the app on the new phone and sign in." },
      {
        "q": "Does the Ringing Stop If a Colleague Accepts First?",
        "a": "Yes. As soon as anyone on the team accepts, the request belongs to them and the reminders stop for everyone else."
      },
      {
        "q": "Can Staff Attach a Photo From the Phone?",
        "a": "Yes. When marking a request delivered, staff can attach a photo, which is useful for a print job left at a desk or a courier handed over at reception."
      },
      {
        "q": "Is There a Web App for Desk Staff?",
        "a": "Yes. Every plan includes both the web app and the mobile app, so desk-based teams can work from a browser."
      },
      { q: "Do Mobile Alerts Work When the Phone Is Locked?", a: "Yes. The Android app is built to ring through on a locked phone as well as on silent, once notification permission has been granted after install." },
    ],
    related: ["notifications", "mobile-app", "mobile-app/android-app", "mobile-app/mobile-notifications", "notifications/email-notifications", "free-trial"],
    cta: { title: "Put a Buzzer in Every Pocket", body: "Sign up free and install the Android app on your staff phones today." },
  },

  // ───────────────────────────── ROUTING ─────────────────────────────
  {
    path: "notifications/notification-routing",
    title: "Notification Routing to the Right Team",
    description:
      "Each request item notifies only its team: pantry, print room, IT or facilities. The right people are pinged at once and nobody else is disturbed.",
    h1: "The Right Team Gets Pinged. Everyone Else Gets Peace.",
    eyebrow: "Routing",
    lead:
      "Notifying everyone about everything is how WhatsApp groups go noisy. ZapBuzzer routes each request to the team responsible for it, so alerts reach the people who can act and no one else.",
    keywords: ["notification routing", "route requests to team", "auto route office requests", "targeted staff alerts"],
    heroVisual: "notification-flow",
    sections: [
      {
        type: "prose",
        heading: "Routing Happens Before the First Ping",
        paragraphs: [
          "Each catalogue item belongs to a team: coffee to pantry, a PDF print job to the print room, ‘projector stuck’ to IT, ‘AC too cold’ to facilities, and courier pickup to the mailroom. When someone buzzes, ZapBuzzer already knows who to notify.",
          "Requesters don’t need to know who is on shift. They pick what they need and where they are. Routing does the rest.",
        ],
      },
      {
        type: "table",
        heading: "Example Routing",
        headers: ["Request", "Team Notified", "Not Notified"],
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
        heading: "Routed, Then Fanned Out",
        body: "First the request is routed to a team, then it fans out to that team’s channels together. Two steps that happen in the same moment.",
      },
      {
        type: "scenario",
        heading: "HDMI in Three Minutes",
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
        title: "Multi-Location on Pro",
        body: "With multi-location on Pro, each office can route to its own teams, so a Pune coffee request doesn’t ping a Mumbai pantry.",
      },
      {
        "type": "problem-solution",
        "heading": "What Happens Without Routing",
        "problem": {
          "title": "One Alert for Everyone",
          "points": [
            "The IT desk mutes the channel because it is mostly coffee orders.",
            "The pantry team sees projector complaints it can do nothing about.",
            "Requesters guess which person to message and often guess wrong.",
            "A request sent to the wrong person waits until someone forwards it."
          ]
        },
        "solution": {
          "title": "One Alert for the Right Team",
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
        "heading": "Setting Up Routing for the First Time",
        "intro": "Most offices get this done in an afternoon.",
        "steps": [
          {
            "title": "List Your Teams",
            "body": "Pantry, print room, IT desk, facilities and mailroom are the usual starting set."
          },
          {
            "title": "Add Catalogue Items",
            "body": "Coffee, tea, snacks, print jobs, HDMI, AC, courier pickup and whatever else people ask for."
          },
          {
            "title": "Assign Each Item to a Team",
            "body": "This is the routing. One decision per item, made once."
          },
          {
            "title": "Invite the Staff",
            "body": "Add each person to the team that handles their work so they receive its alerts."
          },
          {
            "title": "Send a Test Buzz",
            "body": "Buzz one item per team and check that only the expected people were pinged."
          }
        ]
      },
      {
        "type": "metrics",
        "heading": "Signs Your Routing Is Working",
        "items": [
          {
            "metric": "Accept Time per Team",
            "meaning": "Quick, steady accepts suggest alerts reach people who are ready to act on them."
          },
          {
            "metric": "Requests by Category",
            "meaning": "Shows which teams carry the most load and whether an item belongs somewhere else."
          },
          {
            "metric": "Escalations by Team",
            "meaning": "Frequent escalations in one team can point to a misrouted item or too few staff on it."
          },
          {
            "metric": "Phone Calls",
            "meaning": "When routing is right, people stop calling around to find who handles what."
          }
        ]
      },
      {
        "type": "callout",
        "tone": "tip",
        "title": "Route by Job, Not by Person",
        "body": "Assign items to teams rather than individuals. When someone is on leave or at lunch, the rest of the team still gets the ping, and first-accept-wins decides who takes it."
      },
    ],
    faqs: [
      { q: "Who Decides Which Team Gets a Request?", a: "Admins set up catalogue items and the team each one routes to. Requesters just pick the item." },
      { q: "Can One Team Handle Several Items?", a: "Yes. A pantry team might own coffee, tea, snacks and lunch." },
      { q: "What If the Wrong Team Gets It?", a: "Fix the item’s routing once and every future request goes to the right place." },
      { q: "Does Routing Work Across Locations?", a: "Yes, with multi-location on Pro. Free covers one location." },
      {
        "q": "Does Routing Send a Request to One Person or a Whole Team?",
        "a": "The whole team. Everyone in it is pinged together and the first to accept owns the request, so nobody has to be on duty alone for a request to be picked up."
      },
      {
        "q": "Can a Requester Override Where a Request Goes?",
        "a": "Requesters choose the item and the destination, such as Boss Cabin or Conference Room B. The team is decided by the item’s routing, which keeps requests from landing with whoever the requester happens to know."
      },
      {
        "q": "How Do New Staff Start Receiving Alerts?",
        "a": "Add them to the right team. From then on they are pinged for that team’s items on the channels your plan includes."
      },
      { q: "Can IT and Facilities Requests Go to Different Teams?", a: "Yes. Each catalogue item routes to its own team, so an HDMI request reaches the IT desk while a cold AC goes to facilities, without anyone forwarding it." },
    ],
    related: ["notifications", "features/request-routing", "solutions/it-support/it-ticket-routing", "solutions/facilities/facilities-routing", "notifications/notification-escalation", "enterprise/multi-location"],
    cta: { title: "Route Every Request to the Right Desk", body: "Set up your catalogue on a free trial in an afternoon." },
  },

  // ───────────────────────────── ESCALATION ─────────────────────────────
  {
    path: "notifications/notification-escalation",
    title: "Notification Escalation for Overdue Requests",
    description:
      "When repeat pings aren’t enough, overdue requests are passed to a manager automatically. Pro adds a full escalation chain so nothing sits unanswered.",
    h1: "When Nobody Answers, Someone With Authority Hears About It",
    eyebrow: "Escalation",
    lead:
      "Repeating notifications handle most requests. For the few that still slip, ZapBuzzer escalates automatically when the SLA (the time limit for the request) runs out, first to a manager and then up a chain on Pro.",
    keywords: ["notification escalation", "overdue request escalation", "manager escalation alerts", "escalation chain office"],
    heroVisual: "escalation",
    sections: [
      {
        type: "workflow",
        heading: "Two Layers of Persistence",
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
        heading: "The Escalation Ladder",
        body: "Each rung is a person with more authority to unblock the request. The ladder only runs when the request is overdue, so managers aren’t copied on everything.",
      },
      {
        type: "visual",
        visual: "sla-timer",
        heading: "The Timer Behind It",
        body: "Escalation is driven by the SLA timer. Requesters and staff can see the countdown, so the deadline is never a surprise.",
      },
      {
        type: "scenario",
        heading: "Facilities, 15 Minutes",
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
        title: "Plan Note",
        body: "Auto-escalation to a manager applies to overdue requests. The multi-step escalation chain is part of Pro, together with SLA reporting.",
      },
      {
        "type": "prose",
        "heading": "Escalation Is a Message to Someone New",
        "paragraphs": [
          "Repeat pings talk to the same team over and over. Escalation changes the audience. When a request runs past its deadline, the alert stops being only the pantry’s or the IT desk’s problem and lands with a manager who can reassign work, call a vendor or move a meeting.",
          "That shift matters because most overdue requests are not ignored on purpose. The only technician is up a ladder on the 5th floor, the print room is jammed, or the part simply isn’t in the building. A teammate can’t fix those. A manager often can.",
          "Escalation also tells the requester that the delay has been seen. Om doesn’t need to phone anyone to ask about the AC. The request has already gone to the person who can make a decision about it."
        ]
      },
      {
        "type": "comparison",
        "heading": "Chasing by Hand vs Automatic Escalation",
        "columns": [
          "Chasing by Hand",
          "ZapBuzzer Escalation"
        ],
        "rows": [
          {
            "label": "Who Notices the Delay",
            "a": "The requester, eventually",
            "b": "The SLA timer, the moment it passes"
          },
          {
            "label": "Who Gets Told",
            "a": "Whoever the requester knows to call",
            "b": "The manager on the escalation path"
          },
          {
            "label": "Context",
            "a": "Retold over the phone",
            "b": "The original item, note, destination and timeline"
          },
          {
            "label": "Record Afterwards",
            "a": "None",
            "b": "Escalation logged against the request"
          }
        ]
      },
      {
        "type": "audience",
        "heading": "Who Escalation Helps",
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
        "heading": "Setting Up Escalation Sensibly",
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
      { q: "Do Managers Get Every Notification?", a: "No. Managers hear about a request only when it is overdue and escalates." },
      { q: "Is Escalation Only for Unaccepted Requests?", a: "Escalation is tied to the SLA deadline, so a request that is accepted but not delivered in time can escalate too." },
      { q: "Is the Escalation Chain on Free?", a: "The multi-step escalation chain is a Pro feature." },
      { q: "Can We See How Often Things Escalate?", a: "Yes. Escalations show up in analytics and SLA reports on Pro." },
      {
        "q": "Does Escalation Stop the Original Team’s Notifications?",
        "a": "No. The team still owns the work, and the person who accepted it remains responsible. Escalation adds a manager to the picture so the delay gets attention."
      },
      {
        "q": "Can Different Teams Escalate to Different Managers?",
        "a": "Yes. Each team’s escalation path can lead to the person responsible for it, so a pantry delay reaches the office manager and a facilities delay reaches the admin head."
      },
      {
        "q": "Will Escalation Make Staff Look Bad?",
        "a": "Escalations are about requests, not blame. Because every request is timed, the record shows when a delay came from a blocker such as a missing part, and scorecards credit staff fairly for the work they do."
      },
      { q: "How Soon Does an Overdue Request Escalate?", a: "Each request has its own deadline. If it is not done in time, it auto-escalates to a manager. For example, a stuck conference-room AC can escalate if not fixed within 15 minutes." },
    ],
    related: ["notifications", "sla-and-escalation/automatic-escalation", "sla-and-escalation/escalation-chains", "solutions/facilities/facilities-escalation", "notifications/notification-routing", "pricing/pro-plan"],
    cta: { title: "Let the System Chase, Not You", body: "Try SLA escalation on a 14-day Pro trial." },
  },

  // ───────────────────────────── PREFERENCES ─────────────────────────────
  {
    path: "notifications/notification-preferences",
    title: "Notification Preferences for Staff & Teams",
    description:
      "Decide which channels each team relies on: app, email, Telegram or WhatsApp. Keep alerts useful for your staff without letting any requests slip.",
    h1: "Choose How Your Team Hears a Buzz",
    eyebrow: "Preferences",
    lead:
      "Different teams have different habits. The pantry lives on WhatsApp and IT lives on a laptop. ZapBuzzer lets you lean on the channels each team actually checks, while keeping the repeat-until-accepted safety net.",
    keywords: ["notification preferences", "staff alert settings", "choose notification channels", "team notification setup"],
    heroVisual: "roles",
    sections: [
      {
        type: "prose",
        heading: "Preferences, With Guardrails",
        paragraphs: [
          "The point of preferences is not to let alerts be turned off. It is to make sure they land where people look. A pantry runner who never opens email gets little from it, while an IT lead at a laptop may prefer email and the web app.",
          "Whatever channels a team uses, two things stay fixed: the request goes to the whole team at once, and it repeats until someone accepts.",
        ],
      },
      {
        type: "table",
        heading: "Common Setups by Team",
        headers: ["Team", "Typical Channels", "Why"],
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
        heading: "Roles Shape What People See",
        body: "Detailed role permissions decide who can raise, accept or manage requests, and the owner alone sees spend. Notifications follow those roles.",
      },
      {
        type: "checklist",
        heading: "Before You Settle Preferences",
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
        title: "Don’t Rely on One Channel",
        body: "A team with a single quiet channel is how requests get missed. Pair at least one fast channel, such as the mobile app, with one that leaves a record, such as email.",
      },
      {
        "type": "workflow",
        "heading": "Working Out the Right Mix for a Team",
        "steps": [
          {
            "title": "Watch a Normal Day",
            "body": "Notice where each team member actually is: at a desk, in the pantry, at the gate or walking the floors."
          },
          {
            "title": "Pick a Fast Channel",
            "body": "For people on the move that is usually the Android app, which rings through silent. On Pro it may also be WhatsApp or Telegram."
          },
          {
            "title": "Pick a Record Channel",
            "body": "Email works on every plan and leaves a written trail for desk-based leads."
          },
          {
            "title": "Run It for a Week",
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
        "heading": "Personal Preference vs Team Guarantee",
        "intro": "Preferences shape how people hear a buzz. They don’t change the promise that someone will.",
        "columns": [
          "What Preferences Can Shape",
          "What Stays Fixed"
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
            "label": "Late Requests",
            "a": "Who manages each team",
            "b": "Overdue requests escalate when the SLA (time limit) passes"
          }
        ]
      },
      {
        "type": "audience",
        "heading": "What a Good Setup Feels Like for Each Role",
        "items": [
          {
            "role": "Pantry Runner",
            "benefit": "One ring in the pocket for a coffee order, and it stops as soon as a colleague accepts."
          },
          {
            "role": "IT Lead",
            "benefit": "Requests appear on the laptop they already have open, with an email copy for reference."
          },
          {
            "role": "Office Manager",
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
      { q: "Can Staff Mute Notifications Completely?", a: "ZapBuzzer is built so requests get answered. Notifications repeat until someone on the team accepts, which is the safety net." },
      { q: "Which Channels Can We Choose From?", a: "The app and email on every plan, and Telegram and WhatsApp on Pro." },
      { q: "Do Preferences Change Routing?", a: "No. Routing decides which team gets the request. Channels decide how that team hears about it." },
      { q: "Can We Change Setups Later?", a: "Yes. Adjust as your teams learn what works." },
      {
        "q": "Do Employees Who Raise Requests Need Notification Preferences?",
        "a": "Not really. Requesters mainly follow status in the app: accepted with a name and photo, started with an ETA, and delivered. Preferences matter most for the teams who receive and accept work."
      },
      {
        "q": "What If One Person on a Team Never Reads WhatsApp?",
        "a": "That’s why channels fire together. The same request reaches them in the app and by email at the same moment, so one unread channel doesn’t mean a missed request."
      },
      {
        "q": "Is There a Recommended Starting Setup?",
        "a": "A simple start is the mobile app for anyone away from a desk plus email for everyone. Add Telegram or WhatsApp on Pro if a team already lives in one of them."
      },
      { q: "Can Each Team Use a Different Set of Channels?", a: "Yes. A pantry team might lean on WhatsApp while the IT desk prefers the app and email. Telegram and WhatsApp need Pro; the app and email are on every plan." },
    ],
    related: ["notifications", "notifications/multi-channel-notifications", "administration/roles-and-permissions", "administration/team-management", "notifications/mobile-push-notifications", "pricing"],
    cta: { title: "Fit Alerts to Your Teams", body: "Start free and try different channels with each team for two weeks." },
  },

  // ───────────────────────────── WORKFLOW ─────────────────────────────
  {
    path: "notifications/notification-workflow",
    title: "How a ZapBuzzer Notification Works",
    description:
      "Follow one notification from buzz to delivery: routed to a team, sent on every channel, repeated until accepted, escalated if late and closed with a rating.",
    h1: "The Life of One Buzz",
    eyebrow: "Workflow",
    lead:
      "Here is what happens to a single notification from the moment someone taps Buzz to the moment the job is rated, and which part of ZapBuzzer handles each step.",
    keywords: ["notification workflow", "request notification lifecycle", "how office alerts work", "buzz to delivery"],
    heroVisual: "request-timeline",
    sections: [
      {
        type: "workflow",
        heading: "Step by Step",
        steps: [
          { title: "Buzz", body: "The requester picks an item, adds a note and destination and taps Buzz." },
          { title: "Route", body: "The item’s team is selected." },
          { title: "Fan Out", body: "The team is pinged on the app and by email, and on Pro on Telegram and WhatsApp, all together." },
          { title: "Repeat", body: "Pings repeat until someone accepts." },
          { title: "Accept", body: "The first accept wins, reminders stop and the requester sees the name and photo." },
          { title: "Start and ETA", body: "The staff member starts the job and sets an ETA." },
          { title: "Escalate If Late", body: "If the SLA (the time limit) runs out, the request goes to a manager, and up the chain on Pro." },
          { title: "Deliver and Rate", body: "Delivered, optionally with a photo, then rated from 1 to 5 stars and counted in analytics." },
        ],
      },
      {
        type: "visual",
        visual: "request-timeline",
        heading: "The Timeline View",
        body: "Every step lands on the request’s timeline with a time and a name, from the first notification to the rating.",
      },
      {
        type: "scenario",
        heading: "Courier at the Gate",
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
        heading: "Terms Used Here",
        terms: [
          { term: "Buzz", definition: "A request sent from the catalogue." },
          { term: "Fan-Out", definition: "Sending to all of a team’s channels at once." },
          { term: "First Accept Wins", definition: "The first person to accept owns the request." },
          { term: "SLA", definition: "The deadline each request carries." },
          { term: "Escalation", definition: "Automatic notification of a manager when a request is overdue." },
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "See It Live",
        body: "The read-only demo workspace lets you click through a request’s timeline without signing up.",
      },
      {
        "type": "table",
        "heading": "Who Sees What at Each Step",
        "headers": [
          "Step",
          "Requester Sees",
          "Team Sees",
          "Manager Sees"
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
        "heading": "Where the Notification Hands Over to the Request",
        "paragraphs": [
          "The notification’s job ends at accept. Up to that moment ZapBuzzer is trying to get attention, which is why it uses every channel and repeats. After it, the job is to keep everyone informed without noise: the requester sees status changes and the team stops being pinged.",
          "The SLA timer is the thread that runs through both halves. Every request carries a deadline, so a request that waits a long time for an owner is still being measured against it. That keeps the measure honest from the requester’s side of the desk."
        ]
      },
      {
        "type": "metrics",
        "heading": "Numbers Each Step Produces",
        "intro": "Because every request is timed, each step leaves something you can measure.",
        "items": [
          {
            "metric": "Time to Accept",
            "meaning": "From buzz to first accept. Shows how well notifications reach people who are free."
          },
          {
            "metric": "Time to Deliver",
            "meaning": "From accept to delivered. Shows how long the work itself takes."
          },
          {
            "metric": "On-Time Rate",
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
        "heading": "The Last Step: Delivered and Rated",
        "body": "When the job is done, the staff member marks it delivered, with a photo if useful, and the requester gets a prompt to rate it from 1 to 5 stars."
      },
      {
        type: "comparison",
        heading: "The Same Request, Phoned in vs Buzzed",
        intro: "Following one request for two coffees to the boss cabin shows where each step of the notification saves time.",
        columns: ["Phone Call", "ZapBuzzer Buzz"],
        rows: [
          { label: "Reaching Someone", a: "Ring the pantry extension, then a mobile, then walk over", b: "Whole team pinged on every channel at once" },
          { label: "Nobody Answers", a: "Try again later", b: "Pings repeat automatically" },
          { label: "Two People Hear It", a: "Both go, or neither", b: "First accept wins, the rest stop" },
          { label: "Requester’s View", a: "Waits and wonders", b: "Name, photo and ETA" },
          { label: "Afterwards", a: "Nothing recorded", b: "Timed, rated and in analytics" },
        ],
      },
    ],
    faqs: [
      { q: "How Quickly Does the First Notification Go Out?", a: "As soon as the requester taps Buzz. All channels fire together." },
      { q: "How Long Do Repeats Continue?", a: "Until someone accepts. If the SLA passes first, escalation kicks in as well." },
      { q: "Does the Requester Get Notified at Each Step?", a: "They see live status: accepted, started with ETA, and delivered." },
      { q: "Is Every Step Recorded?", a: "Every request is timed and every action is audit-logged. Full audit logs and reports are part of Pro." },
      {
        "q": "Can a Request Be Delivered Without Being Accepted First?",
        "a": "The lifecycle runs buzz, accept, start, deliver and rate, so someone owns every request before it is closed. That ownership is what makes ratings and scorecards fair."
      },
      {
        "q": "Where Do I See the Numbers From Each Step?",
        "a": "Accept times, on-time delivery and ratings feed ZapBuzzer’s analytics and staff scorecards. Full analytics and scorecards are part of Pro."
      },
      { q: "What Happens to the Notifications After Someone Accepts?", a: "They stop for the rest of the team. The request now belongs to the person who accepted, and the requester moves from waiting to seeing a name, photo and, once started, an ETA." },
      { q: "Does the Requester Get a Prompt When the Job Is Delivered?", a: "Yes. Once the request is marked delivered, sometimes with a photo, the requester is asked to rate it 1–5★. That closes the loop and feeds the analytics." },
    ],
    related: ["notifications", "how-it-works", "features/request-status", "workflows/coffee-request", "notifications/notification-escalation", "book-a-demo"],
    cta: { title: "Follow a Buzz Yourself", body: "Open the read-only demo or start a free trial and send one." },
  },
];
