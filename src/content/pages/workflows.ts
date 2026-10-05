import type { PageContent } from "../types";

export const pages: PageContent[] = [
  // ───────────────────────────── HUB ─────────────────────────────
  {
    path: "workflows",
    title: "Office Service Workflow: Request to Rating",
    description:
      "How every office request moves through ZapBuzzer: tap, route, ping, first accept, ETA, delivery, rating. One shared workflow behind nine everyday office jobs.",
    h1: "One workflow behind every office request",
    eyebrow: "Workflows",
    lead:
      "Coffee, prints, a stuck projector, a courier at the gate: they look like different jobs, but in ZapBuzzer they all follow the same path. Learn it once and you understand all nine workflows below.",
    keywords: [
      "office service workflow",
      "internal request workflow",
      "office request lifecycle",
      "request to delivery workflow",
      "office operations workflow",
    ],
    heroVisual: "request-timeline",
    sections: [
      {
        type: "prose",
        heading: "Why a single workflow matters",
        paragraphs: [
          "Most offices run each kind of request on its own informal channel. Coffee goes through a shout down the corridor, prints through a WhatsApp group, IT problems through someone's DMs, and courier pickups through a call to reception. Each channel has its own way of getting lost.",
          "ZapBuzzer replaces all of them with one path. The employee taps, the right team is pinged, the first free person accepts, and the requester can see who is on it and when it will arrive. Because the steps are identical, staff learn one habit and managers read one set of numbers.",
        ],
      },
      {
        type: "workflow",
        heading: "The end-to-end workflow, step by step",
        intro: "These steps apply to every request type. Individual workflow pages show what changes for each one.",
        steps: [
          { title: "Tap a catalogue item", body: "The employee picks what they need from the catalogue on the mobile or web app, adds a note if useful, and chooses a destination such as Boss Cabin or Conference Room B." },
          { title: "Buzz", body: "Tapping Buzz creates the request and starts its clock. Every request is timed from this moment." },
          { title: "Route to the right team", body: "The request goes to the team that owns that category: pantry, print room, IT desk, facilities or mailroom. Nobody has to decide who to call." },
          { title: "Ping every channel", body: "The team is notified in the app and by email. On Pro, Telegram and WhatsApp pings go out at the same time. Notifications repeat until someone accepts." },
          { title: "First to accept owns it", body: "Whoever is free taps Accept. The request leaves everyone else's queue, so two people never walk to the same desk." },
          { title: "Start with an ETA", body: "The owner marks the request as started with an ETA. The requester sees the staff member's name, photo and expected arrival." },
          { title: "Deliver", body: "The owner marks it delivered and can attach a photo as confirmation." },
          { title: "Rate", body: "The requester gives a 1–5 star rating. That rating stays attached to the request and the staff member." },
          { title: "Escalate if late (Pro)", body: "With SLA and the escalation chain on Pro, a request that misses its deadline is automatically escalated to a manager." },
        ],
      },
      {
        type: "visual",
        visual: "request-timeline",
        heading: "Every state, visible to everyone involved",
        body: "Requested, accepted, started, delivered, rated. The requester, the staff member and the admin all see the same timeline, so there is no need to call and ask where things are.",
        points: ["Timestamps on every state change", "Name and photo of the person who accepted", "Delivery photo when attached"],
      },
      {
        type: "scenario",
        heading: "One morning, three different requests",
        persona: "A 40-person office in Pune",
        setting: "Board meeting at 11, a sales pitch at 10:30 and a warm conference room.",
        timeline: [
          { time: "10:14", event: "Kavya uploads a PDF and requests 24 colour copies for her pitch." },
          { time: "10:15", event: "The print room accepts; Kavya sees the name and ETA." },
          { time: "10:21", event: "Om reports the Conference Room B AC stuck at 16°C; facilities is pinged." },
          { time: "10:22", event: "Deepak accepts the AC request and marks it started." },
          { time: "10:26", event: "Prints delivered to Kavya's desk, photo attached." },
          { time: "10:52", event: "Aarav taps Coffee → Boss Cabin before the board call; Raj accepts in seconds." },
        ],
        outcome: "Three teams, three request types, zero phone calls, and every request has a timestamped record.",
      },
      {
        type: "table",
        heading: "The nine workflows at a glance",
        headers: ["Workflow", "Team pinged", "What is different"],
        rows: [
          ["Coffee request", "Pantry", "Usual order is one tap; destination matters most"],
          ["Print request", "Print room", "PDF upload, copies and colour set by requester"],
          ["IT support", "IT desk", "Note describes the problem; category auto-routes"],
          ["AC issue", "Facilities", "Comfort issue that escalates if not fixed in time"],
          ["Projector request", "IT desk", "Tied to a room and often to a meeting start time"],
          ["HDMI request", "IT desk", "Small item, very short delivery window"],
          ["Courier pickup", "Mailroom / reception", "Logged and audit-trailed for later lookup"],
          ["Lunch request", "Pantry", "Multiple items and a headcount; owner sees cost"],
          ["Emergency summon", "Staff or security", "Mobile alert rings through silent mode"],
        ],
      },
      {
        type: "comparison",
        heading: "Informal channels vs one workflow",
        columns: ["Calls, shouts and group chats", "ZapBuzzer workflow"],
        rows: [
          { label: "Who owns the job", a: "Unclear until someone replies", b: "First person to tap Accept" },
          { label: "Status", a: "Ask again", b: "Visible with ETA" },
          { label: "Late requests", a: "Noticed when someone complains", b: "Escalated to a manager on Pro" },
          { label: "Record", a: "Scattered chat history", b: "Timed request with rating" },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "What each plan includes",
        body: "Free covers one location, up to 10 staff, email notifications and 30 days of history. Pro adds Telegram and WhatsApp pings, SLA with the escalation chain, full analytics and scorecards, and multi-location, at ₹99 per seat per month.",
      },
    ],
    faqs: [
      { q: "Do all request types really use the same steps?", a: "Yes. Every request is tapped, routed, accepted, started, delivered and rated. What changes is the catalogue item, the team it goes to and the details the requester adds, such as copies for a print job or a headcount for lunch." },
      { q: "Can I start with just one workflow?", a: "Yes. Many offices start with coffee or prints because they are frequent and easy to measure, then add IT, facilities and courier categories once staff are used to accepting requests." },
      { q: "What happens if nobody accepts?", a: "Notifications keep repeating until someone does. On Pro, the SLA timer also runs and an overdue request escalates to a manager through the escalation chain." },
      { q: "Does the workflow work on phones?", a: "Yes. Employees can request and staff can accept and update from the mobile app, which still rings when the phone is locked or on silent. The web app works the same way for desk-based users." },
      { q: "How long does setup take?", a: "Pricing is per seat with no setup fees or consultant, and most offices are running in an afternoon. You can try it free for 14 days without a credit card." },
    ],
    related: [
      "workflows/coffee-request",
      "workflows/print-request",
      "workflows/it-support",
      "workflows/ac-issue",
      "workflows/projector-request",
      "workflows/hdmi-request",
      "workflows/courier-pickup",
      "workflows/lunch-request",
    ],
    cta: { title: "Run your first workflow today", body: "Try it free for 14 days: add a catalogue item and send your first buzz, without a credit card or a setup call." },
  },

  // ─────────────────────────── COFFEE ───────────────────────────
  {
    path: "workflows/coffee-request",
    title: "Coffee Request Workflow for Offices",
    description:
      "Step-by-step coffee request workflow: tap your usual order, pick Boss Cabin, the pantry is pinged, first accept wins, hot coffee arrives and you rate it.",
    h1: "From one tap to a hot cup at the boss cabin",
    eyebrow: "Workflow · Pantry",
    lead:
      "The classic office request is “Raju, two coffees in the boss cabin.” Handled over the phone, it can drag on for 25 minutes and three calls, and the cup turns up cold. Here is how the same request runs in ZapBuzzer.",
    keywords: ["coffee request workflow", "office coffee ordering", "pantry coffee request", "boss cabin coffee", "office pantry app"],
    heroVisual: "catalog",
    sections: [
      {
        type: "problem-solution",
        heading: "Why coffee is the hardest easy request",
        problem: {
          title: "By phone or shout",
          points: [
            "The caller has to know who is in the pantry right now",
            "Order details get lost: sugar, milk, how many cups",
            "Nobody confirms, so the requester calls again",
            "Coffee arrives late, or twice, or cold",
          ],
        },
        solution: {
          title: "In ZapBuzzer",
          points: [
            "The usual order is one tap from the pantry catalogue",
            "Notes carry the details; destination is picked from a list",
            "The pantry team sees who accepted it and so does the requester",
            "Delivery is timed and rated",
          ],
        },
      },
      {
        type: "workflow",
        heading: "The coffee request, step by step",
        steps: [
          { title: "Pick the item", body: "Open the pantry catalogue and tap Coffee. Alongside it you will find tea, juice, snacks and dry fruits." },
          { title: "Add a note and quantity", body: "“Two cups, one without sugar” goes in the note so nobody has to call back for details." },
          { title: "Choose the destination", body: "Select Boss Cabin, a conference room or your desk. This tells the pantry exactly where to walk." },
          { title: "Tap Buzz", body: "The pantry team is pinged at once in the app and by email, and on Pro via Telegram and WhatsApp too." },
          { title: "First accept", body: "Whoever is free in the pantry taps Accept. The request disappears from the others' queues." },
          { title: "ETA shown", body: "The requester sees the staff member's name, photo and ETA instead of wondering whether anyone heard." },
          { title: "Deliver and rate", body: "Coffee is delivered and marked done. The requester rates it from 1 to 5 stars." },
        ],
      },
      {
        type: "scenario",
        heading: "Aarav's board call",
        persona: "Aarav, CEO",
        setting: "A board call is starting in the boss cabin and two guests have just arrived.",
        timeline: [
          { time: "10:58", event: "Aarav taps Coffee, adds “2 cups”, picks Boss Cabin and taps Buzz." },
          { time: "10:58", event: "The pantry team sees the request on Telegram and in the app." },
          { time: "10:58", event: "Raj accepts in 12 seconds and sets an ETA." },
          { time: "11:02", event: "Coffee is delivered to the cabin and marked delivered." },
          { time: "11:40", event: "After the call, Aarav rates the delivery 5★." },
        ],
        outcome: "About 4 minutes, zero phone calls, one hot coffee. Aarav never left the call.",
      },
      {
        type: "visual",
        visual: "before-after",
        heading: "Twenty-five minutes vs four",
        body: "The before-and-after we hear most often: 25 minutes, 3 phone calls and 1 cold coffee, against 4 minutes, 0 phone calls and 1 hot coffee.",
      },
      {
        type: "visual",
        visual: "acceptance",
        heading: "No more “I thought you'd do it”",
        body: "The coffee request goes to the whole pantry team. Ownership goes to whoever taps Accept first, so it is never made twice and never skipped.",
      },
      {
        type: "checklist",
        heading: "Setting up coffee requests",
        items: [
          "Add Coffee and your other common drinks to the pantry catalogue",
          "Add destinations people actually use: Boss Cabin, conference rooms, floor areas",
          "Invite pantry staff and make sure they have the mobile app installed",
          "Encourage notes for sugar, milk and cup count",
          "On Pro, connect Telegram or WhatsApp for staff who live in those apps",
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Rings even on silent",
        body: "Pantry staff often keep their phones in a pocket. Silent mode and a locked screen do not stop the ZapBuzzer mobile app from ringing, so requests are not missed during a busy rush.",
      },
    ],
    faqs: [
      { q: "Can I save my usual coffee order?", a: "The pantry catalogue keeps your usual order one tap away. Add specifics like sugar or milk in the note so the pantry has everything it needs." },
      { q: "What if the pantry is busy and nobody accepts?", a: "Notifications repeat until someone accepts. On Pro, the request also has an SLA timer and escalates to a manager if it goes overdue." },
      { q: "Does the CEO's request get priority?", a: "Every request is routed to the pantry team the same way and the first free person accepts it. The destination, such as Boss Cabin, tells staff where it is going." },
      { q: "Do pantry staff need Telegram or WhatsApp?", a: "No. The app and email notifications work on every plan. Telegram and WhatsApp pings are an addition on Pro for teams that prefer them." },
      { q: "Why rate a cup of coffee?", a: "Ratings give pantry staff fair credit for fast, good service. Over time they feed staff scorecards so the office can see who consistently delivers 5★." },
    ],
    related: ["workflows", "solutions/pantry/coffee-requests", "workflows/lunch-request", "features/first-accept-wins", "solutions/pantry/catalog", "use-cases/ceo", "free-trial"],
    cta: { title: "Get the next coffee without a phone call", body: "Set up your pantry catalogue in minutes on the 14-day free trial." },
  },

  // ─────────────────────────── PRINT ───────────────────────────
  {
    path: "workflows/print-request",
    title: "Print Request Workflow: PDF to Desk",
    description:
      "Print request workflow in ZapBuzzer: upload a PDF, set copies and colour, the print room accepts, prints are delivered to your seat before the meeting starts.",
    h1: "Upload a PDF, get printed copies at your seat",
    eyebrow: "Workflow · Print room",
    lead:
      "Print jobs used to get lost in a WhatsApp group: a file posted, a reply nobody saw, a printout that never came. In ZapBuzzer the file, the copy count and the delivery seat travel together as one request.",
    keywords: ["print request workflow", "office print request", "pdf print request", "print room workflow", "colour copies request"],
    heroVisual: "print-job",
    sections: [
      {
        type: "prose",
        heading: "What makes printing different",
        paragraphs: [
          "Unlike coffee, a print request carries a file and a specification. The print room needs the right PDF, the right number of copies and to know whether it should be colour. Get any one wrong and the job has to be redone, usually when time is shortest.",
          "ZapBuzzer keeps those details inside the request, so whoever accepts it has everything in one place and the requester never has to resend the file or explain it twice.",
        ],
      },
      {
        type: "workflow",
        heading: "The print request, step by step",
        steps: [
          { title: "Choose Print", body: "Pick the print item from the catalogue on the web or mobile app." },
          { title: "Upload the PDF", body: "Attach the file directly to the request instead of sending it in a chat." },
          { title: "Set copies and colour", body: "Enter the number of copies and choose colour or black and white." },
          { title: "Pick where to deliver", body: "Choose your seat or a room such as Conference Room B." },
          { title: "Buzz the print room", body: "The print room is notified at once; notifications repeat until someone accepts." },
          { title: "Accept and start", body: "The first free person accepts, starts the job and sets an ETA you can see." },
          { title: "Deliver with proof", body: "Prints are delivered to the seat or room and marked delivered; a photo can be attached." },
          { title: "Rate the job", body: "The requester rates the delivery 1–5 stars." },
        ],
      },
      {
        type: "visual",
        visual: "print-job",
        heading: "A print job card that carries everything",
        body: "File, copies, colour and destination sit on one card that the print room accepts and works from.",
        points: ["PDF attached to the request", "Copies and colour set by the requester", "Delivery location shown up front"],
      },
      {
        type: "scenario",
        heading: "Kavya's pitch in ten minutes",
        persona: "Kavya, Sales Lead",
        setting: "A client pitch starts in 10 minutes and the deck changed this morning.",
        timeline: [
          { time: "14:50", event: "Kavya uploads the final PDF, sets 24 copies, colour, Conference Room B." },
          { time: "14:50", event: "The print room is pinged." },
          { time: "14:51", event: "Suresh accepts and sets an ETA." },
          { time: "14:57", event: "24 colour copies are placed in Conference Room B; delivery marked with a photo." },
          { time: "15:00", event: "The client sits down; Kavya rates the job 5★ after the meeting." },
        ],
        outcome: "Prints arrived before the demo. In Kavya's words: “Print jobs land at my desk before the client even sits down. Zero chase calls.”",
      },
      {
        type: "comparison",
        heading: "Print request in a group chat vs ZapBuzzer",
        columns: ["WhatsApp group", "ZapBuzzer"],
        rows: [
          { label: "File", a: "Buried under other messages", b: "Attached to the request" },
          { label: "Copies and colour", a: "In a follow-up message, if at all", b: "Set as part of the request" },
          { label: "Who is printing", a: "Unknown", b: "Name and photo of the person who accepted" },
          { label: "Proof of delivery", a: "None", b: "Delivered state with optional photo" },
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Deadlines for print jobs",
        body: "On Pro, each request has an SLA deadline. If a print job is overdue it auto-escalates to a manager, which matters most for client meetings.",
      },
    ],
    faqs: [
      { q: "Which files can I send?", a: "The print room workflow is built around uploading a PDF. Export your document to PDF first so it prints exactly as you see it." },
      { q: "Can I request colour and black-and-white in one go?", a: "Each request carries its own copies and colour settings. If you need both, raise two requests so the print room has clear instructions for each." },
      { q: "Where are the prints delivered?", a: "To the seat or room you choose when you buzz. That could be your desk, a cabin or a conference room ahead of a meeting." },
      { q: "How do I know the print room has my job?", a: "As soon as someone accepts, you see their name, photo and ETA. You will not need to call to check." },
      { q: "Can a manager see late print jobs?", a: "On Pro, overdue requests escalate to a manager automatically, and analytics show on-time delivery across the print room." },
    ],
    related: ["workflows", "solutions/print-room", "solutions/print-room/pdf-print-requests", "workflows/coffee-request", "features/delivery-confirmation", "use-cases/sales", "pricing"],
    cta: { title: "Stop chasing print jobs", body: "Try the print room workflow free for 14 days." },
  },

  // ─────────────────────────── IT SUPPORT ───────────────────────────
  {
    path: "workflows/it-support",
    title: "IT Support Request Workflow",
    description:
      "IT support request workflow: describe the problem, the request auto-routes to the IT desk, first technician to accept owns it, with timing and rating built in.",
    h1: "IT help that doesn't die in someone's DMs",
    eyebrow: "Workflow · IT support",
    lead:
      "A message to whichever IT person you know best is how most small offices ask for help, and it is how tickets disappear. This workflow sends every IT problem to the whole IT desk and keeps it visible until it is solved.",
    keywords: ["it support request workflow", "office it help request", "it desk routing", "internal it request", "it ticket workflow"],
    heroVisual: "staff-queue",
    sections: [
      {
        type: "problem-solution",
        heading: "The DM problem",
        problem: {
          title: "Asking one person directly",
          points: [
            "Only one person knows, and they may be busy or on leave",
            "No record that the problem was raised",
            "No way for the requester to see progress",
            "Repeat issues are invisible to the IT manager",
          ],
        },
        solution: {
          title: "Routing to the IT desk",
          points: [
            "The request auto-routes to the whole IT team",
            "Every request is timed from the moment it is raised",
            "The requester sees who accepted and the ETA",
            "Request history shows what keeps breaking",
          ],
        },
      },
      {
        type: "workflow",
        heading: "The IT support request, step by step",
        steps: [
          { title: "Tap IT help", body: "Choose the IT item from the catalogue, or a specific one like Projector or HDMI if your office has added them." },
          { title: "Describe the issue", body: "Add a short note: “Laptop won't connect to office Wi-Fi” or “Monitor flickering”." },
          { title: "Pick the location", body: "Choose your desk or the room you are in so the technician comes to the right place." },
          { title: "Auto-route", body: "The category sends it straight to the IT desk. Nobody needs to know which technician is on duty." },
          { title: "First accept", body: "The first technician free taps Accept and owns the ticket." },
          { title: "Work and update", body: "The technician marks it started with an ETA; the requester can see progress." },
          { title: "Resolve and rate", body: "Once fixed, the request is marked delivered and the requester rates it." },
        ],
      },
      {
        type: "visual",
        visual: "staff-queue",
        heading: "The IT desk's queue",
        body: "Each technician sees open IT requests on their phone with an Accept button. Accepted items leave everyone else's queue, so effort is not duplicated.",
      },
      {
        type: "scenario",
        heading: "A Monday-morning Wi-Fi problem",
        persona: "Ritika, Finance Analyst",
        setting: "Month-end reports are due and her laptop has dropped off the network.",
        timeline: [
          { time: "09:32", event: "Ritika taps IT help, notes “Laptop off Wi-Fi, month-end today”, picks Desk 3F-14." },
          { time: "09:32", event: "The IT desk is pinged in the app and by email." },
          { time: "09:33", event: "Arjun accepts and sets an ETA of 10 minutes." },
          { time: "09:41", event: "Arjun arrives, reconnects the laptop and marks it delivered." },
          { time: "09:42", event: "Ritika rates the fix 5★." },
        ],
        outcome: "One request, one owner, ten minutes. The IT manager can later see how often Wi-Fi issues appear in request history.",
      },
      {
        type: "metrics",
        heading: "What IT managers can read from these requests",
        intro: "Full analytics and scorecards are part of Pro.",
        items: [
          { metric: "Accept time", meaning: "How long a problem waits before a technician takes it." },
          { metric: "On-time delivery", meaning: "Share of IT requests resolved before their deadline." },
          { metric: "Staff ratings", meaning: "Average stars per technician, for fair recognition." },
          { metric: "Busy hours", meaning: "When the office buzzes most, to plan cover." },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Escalation for stuck tickets",
        body: "On Pro, every IT request carries an SLA deadline and the escalation chain moves overdue ones to a manager automatically.",
      },
    ],
    faqs: [
      { q: "Is this a replacement for a full helpdesk?", a: "ZapBuzzer handles quick, in-office IT requests: a cable, a stuck projector, a laptop that will not connect. It focuses on getting the right person to the right desk fast, with timing and ratings." },
      { q: "How does the request reach the right technician?", a: "IT items in the catalogue route to the IT desk team. Everyone on that team is pinged and the first to accept owns it." },
      { q: "Can I add specific IT items to the catalogue?", a: "Yes. Common items such as projector help or an HDMI cable can sit in the catalogue so requests are clearer and faster to act on." },
      { q: "What if the technician who accepts gets pulled away?", a: "The request stays open and timed. On Pro, if it goes past its deadline it escalates to a manager instead of quietly waiting." },
      { q: "Does the Free plan include IT routing?", a: "Yes, routing and first-accept-wins work on Free for up to 10 staff in one location, with email notifications. SLA escalation and full analytics are on Pro." },
    ],
    related: ["workflows", "solutions/it-support", "solutions/it-support/ticket-routing", "workflows/hdmi-request", "workflows/projector-request", "use-cases/it-manager", "features/request-routing", "pricing/pro"],
    cta: { title: "Give your IT desk one queue", body: "Start a 14-day free trial and route your first IT request today." },
  },

  // ─────────────────────────── AC ISSUE ───────────────────────────
  {
    path: "workflows/ac-issue",
    title: "AC Issue Workflow: Report, Fix, Escalate",
    description:
      "AC issue workflow for offices: report a room that's too cold or warm, facilities is pinged, a technician accepts, and on Pro it goes to a manager after 15 minutes without a fix.",
    h1: "Conference room at 16°C? Here's what happens next",
    eyebrow: "Workflow · Facilities",
    lead:
      "AC complaints are small until they are not. A room stuck too cold can derail a two-hour workshop. This workflow gets facilities to the room quickly and makes sure the issue cannot sit unattended.",
    keywords: ["ac issue workflow", "office ac complaint", "facilities request workflow", "conference room ac", "ac too cold office"],
    heroVisual: "sla-timer",
    sections: [
      {
        type: "prose",
        heading: "Why AC issues get ignored",
        paragraphs: [
          "Everyone in the room feels the problem, so everyone assumes someone else has reported it. When someone does, it is usually by calling the admin desk, who then has to find the facilities person on the floor.",
          "In ZapBuzzer, anyone in the room can raise it in a few taps. Facilities is pinged directly, and the request has a deadline so it does not quietly wait until the meeting ends.",
        ],
      },
      {
        type: "workflow",
        heading: "The AC issue, step by step",
        steps: [
          { title: "Tap Facilities", body: "Pick the AC or facilities item from the catalogue." },
          { title: "Describe it", body: "Note the problem plainly: “AC stuck at 16°C” or “No cooling, room warm”." },
          { title: "Pick the room", body: "Select the room, for example Conference Room B, so the technician goes straight there." },
          { title: "Facilities pinged", body: "The facilities team gets the request at once; notifications repeat until someone accepts." },
          { title: "Accept and attend", body: "The first free team member accepts and marks it started with an ETA." },
          { title: "Deadline runs (Pro)", body: "On Pro the SLA timer counts down. If it is not fixed in time, it auto-escalates to a manager." },
          { title: "Fixed and rated", body: "Once the room is comfortable, the request is marked delivered and rated by the person who raised it." },
        ],
      },
      {
        type: "visual",
        visual: "sla-timer",
        heading: "A countdown on every AC complaint",
        body: "With SLA on Pro, each facilities request shows how long is left before its deadline and what happens if it is missed.",
        points: ["Deadline visible to staff", "Overdue requests auto-escalate", "Escalation chain on Pro"],
      },
      {
        type: "scenario",
        heading: "Om's frozen workshop",
        persona: "Om, Engineer",
        setting: "A design review in Conference Room B, and the AC is stuck at 16°C.",
        timeline: [
          { time: "15:05", event: "Om taps Facilities, notes “AC stuck at 16°C”, picks Conference Room B." },
          { time: "15:05", event: "Deepak and the facilities team are pinged." },
          { time: "15:07", event: "Deepak accepts; the 15-minute deadline is running." },
          { time: "15:15", event: "Deepak resets the unit and marks the request delivered." },
          { time: "15:16", event: "Om rates it 5★. Had it run past 15 minutes, it would have escalated to the manager." },
        ],
        outcome: "Fixed inside its deadline. As Deepak, Admin Head, puts it: “Facilities tickets auto-escalate now. Nothing rots in someone's DMs.”",
      },
      {
        type: "visual",
        visual: "escalation",
        heading: "Who hears about it if it isn't fixed",
        body: "The escalation chain on Pro moves an overdue request up to a manager, so a stuck AC does not depend on someone remembering to follow up.",
      },
      {
        type: "checklist",
        heading: "Before you roll out AC requests",
        items: [
          "Add an AC or facilities item to the catalogue",
          "List every meeting room and floor as a destination",
          "Invite the facilities team and install the mobile app",
          "On Pro, set a sensible deadline for comfort issues",
          "On Pro, decide which manager overdue requests escalate to",
        ],
      },
    ],
    faqs: [
      { q: "Who can report an AC problem?", a: "Any employee with access to ZapBuzzer. The request goes to the facilities team, not to a single person, so it does not depend on who happens to be at the desk." },
      { q: "Is the 15-minute escalation automatic?", a: "SLA deadlines and automatic escalation to a manager are part of Pro. The 15-minute example is a deadline an office might choose for comfort issues in meeting rooms." },
      { q: "What if several people report the same room?", a: "Each report is a request the facilities team can see. The first accepted one shows who is handling it, which helps others in the room see it is already in hand." },
      { q: "Can facilities track recurring AC problems?", a: "Request history shows how often a room is reported. On Pro, analytics show patterns across rooms and times of day." },
      { q: "Does it work on the Free plan?", a: "Yes, reporting and first-accept routing work on Free with email notifications. The SLA timer and escalation chain need Pro." },
    ],
    related: ["workflows", "solutions/facilities/ac-requests", "solutions/facilities/escalation", "workflows/projector-request", "sla/automatic-escalation", "use-cases/facilities-manager", "pricing/pro"],
    cta: { title: "Keep meeting rooms comfortable", body: "Try facilities requests with SLA escalation on the 14-day free trial." },
  },

  // ─────────────────────────── PROJECTOR ───────────────────────────
  {
    path: "workflows/projector-request",
    title: "Projector Request Workflow for Meetings",
    description:
      "Projector request workflow: report a stuck projector or book help before a meeting, IT accepts, sets an ETA and fixes it in the room before the agenda starts.",
    h1: "Projector stuck five minutes before the meeting",
    eyebrow: "Workflow · IT support",
    lead:
      "A projector problem is tied to a room and a clock. Guests are arriving, the laptop shows nothing on the wall, and nobody knows who to call. This workflow gets IT into the right room with the problem already described.",
    keywords: ["projector request workflow", "projector not working office", "meeting room projector support", "it projector help", "conference room av request"],
    heroVisual: "request-dashboard",
    sections: [
      {
        type: "prose",
        heading: "Time is the whole problem",
        paragraphs: [
          "Most projector issues are quick to fix for someone who knows the room: a wrong input, a loose cable, a remote with dead batteries. The delay comes from finding that person while everyone waits.",
          "Because the request carries the room and a note, the technician who accepts can arrive with the right fix, and the person presenting can see an ETA and keep the room calm.",
        ],
      },
      {
        type: "workflow",
        heading: "The projector request, step by step",
        steps: [
          { title: "Tap Projector", body: "Choose the projector item in the IT section of the catalogue." },
          { title: "Note the symptom", body: "“No signal from laptop” or “Projector won't power on” helps IT bring the right thing." },
          { title: "Pick the room", body: "Select the conference room so the request is location-specific." },
          { title: "IT desk pinged", body: "Every IT team member is notified; on Pro this also reaches Telegram and WhatsApp." },
          { title: "Accept with ETA", body: "The first free technician accepts and sets an ETA the presenter can see." },
          { title: "Fix in the room", body: "The technician sorts the issue and marks it delivered." },
          { title: "Rate", body: "The presenter rates the help once the meeting is underway or over." },
        ],
      },
      {
        type: "scenario",
        heading: "A client review at 11",
        persona: "Sameer, Account Manager",
        setting: "Client review in Conference Room A at 11:00; the projector shows “No signal”.",
        timeline: [
          { time: "10:52", event: "Sameer taps Projector, notes “No signal from laptop”, picks Conference Room A." },
          { time: "10:52", event: "The IT desk is pinged." },
          { time: "10:53", event: "Tanmay accepts and sets an ETA of 4 minutes." },
          { time: "10:56", event: "Tanmay switches the input and reseats the cable; request marked delivered." },
          { time: "11:00", event: "The meeting starts on time. Sameer rates it 5★ afterwards." },
        ],
        outcome: "The presenter knew help was coming within a minute, and the meeting started on schedule.",
      },
      {
        type: "visual",
        visual: "request-dashboard",
        heading: "What the admin sees",
        body: "The live request dashboard shows the projector request alongside everything else in the office, with its status and who owns it.",
      },
      {
        type: "table",
        heading: "Projector request vs nearby workflows",
        headers: ["Situation", "Use this workflow"],
        rows: [
          ["Projector shows nothing or won't power on", "Projector request"],
          ["Missing cable to connect a laptop", "HDMI request"],
          ["Room too cold or warm", "AC issue"],
          ["Laptop or software issue at your desk", "IT support"],
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Raise it early",
        body: "If you are setting up 15 minutes before a meeting and something looks wrong, buzz then. The earlier the request starts its clock, the more time IT has to fix it before guests arrive.",
      },
    ],
    faqs: [
      { q: "Can IT see which rooms have repeat projector problems?", a: "Each request records the room, so request history shows where problems repeat. On Pro, analytics make those patterns easier to spot." },
      { q: "Should I use the projector workflow or general IT support?", a: "Use the projector item when the issue is the room's display. It gives IT a clear picture and the room location straight away. General IT support is better for desk issues." },
      { q: "Can I see when the technician will arrive?", a: "Yes. Once someone accepts, you see their name, photo and ETA on the request." },
      { q: "What if IT doesn't respond in time?", a: "Notifications repeat until someone accepts. On Pro, overdue requests auto-escalate to a manager through the escalation chain." },
      { q: "Can reception raise it for a visiting client?", a: "Anyone in ZapBuzzer can raise a request and choose the room, so reception or an assistant can buzz IT on behalf of a guest." },
    ],
    related: ["workflows", "solutions/it-support/projector-support", "solutions/it-support/meeting-room-support", "workflows/hdmi-request", "features/eta-tracking", "solutions/facilities/conference-room-issues", "demo"],
    cta: { title: "Keep meetings starting on time", body: "Add a projector item to your catalogue on the 14-day free trial." },
  },

  // ─────────────────────────── HDMI ───────────────────────────
  {
    path: "workflows/hdmi-request",
    title: "HDMI Cable Request Workflow",
    description:
      "HDMI request workflow: tap IT, say which room and adapter you need, the IT desk accepts and walks it over in minutes. Small item, short wait, fully tracked.",
    h1: "Need an HDMI cable? Three minutes, not three calls",
    eyebrow: "Workflow · IT support",
    lead:
      "An HDMI cable is the smallest thing an office can need and one of the most urgent. It is usually missing at exactly the moment someone wants to share a screen. This workflow is built for that kind of quick fetch.",
    keywords: ["hdmi request workflow", "hdmi cable office request", "meeting room cable request", "it accessory request", "adapter request office"],
    heroVisual: "mobile-app",
    sections: [
      {
        type: "prose",
        heading: "A fetch, not a fix",
        paragraphs: [
          "Most IT requests involve diagnosing something. HDMI requests do not. Someone needs a specific item brought to a specific room, fast. The whole value is in skipping the search for who has the cable cupboard key.",
          "The request tells IT what to bring and where to go before anyone has to ask, so the technician can grab the cable on the way.",
        ],
      },
      {
        type: "workflow",
        heading: "The HDMI request, step by step",
        steps: [
          { title: "Tap IT → HDMI", body: "Choose the HDMI item from the IT section of the catalogue on your phone." },
          { title: "Say which connector", body: "Note what your laptop needs, for example “USB-C to HDMI adapter”." },
          { title: "Pick the room", body: "Select the room where you are setting up." },
          { title: "Buzz", body: "The IT team is pinged immediately on every channel your plan includes." },
          { title: "Accept", body: "The nearest free person accepts; you see their name and ETA." },
          { title: "Hand over", body: "The cable arrives and the request is marked delivered." },
          { title: "Rate", body: "Tap a star rating before you start presenting." },
        ],
      },
      {
        type: "visual",
        visual: "mobile-app",
        heading: "Raised from the meeting room",
        body: "Most HDMI requests come from a phone in a meeting room. The mobile app's request grid puts the item one tap away.",
      },
      {
        type: "scenario",
        heading: "Tanvi's design review",
        persona: "Tanvi, Designer",
        setting: "Reviewing mock-ups in the 2nd-floor huddle room; no cable on the table.",
        timeline: [
          { time: "16:01", event: "Tanvi taps IT → HDMI, notes “USB-C adapter”, picks Huddle Room 2." },
          { time: "16:01", event: "The IT desk is pinged." },
          { time: "16:01", event: "Priya accepts and sets an ETA." },
          { time: "16:04", event: "Priya brings the cable; request marked delivered." },
          { time: "16:04", event: "Tanvi rates 5★ and starts the review." },
        ],
        outcome: "Three minutes from tap to cable. No one left the room to look for IT.",
      },
      {
        type: "comparison",
        heading: "Finding a cable the old way vs buzzing",
        columns: ["Asking around", "HDMI request"],
        rows: [
          { label: "First step", a: "Leave the room to look for IT", b: "Tap HDMI from your seat" },
          { label: "Details", a: "Explained in person, often twice", b: "Connector and room in the request" },
          { label: "Waiting", a: "No idea when help is coming", b: "Name and ETA on screen" },
          { label: "Afterwards", a: "No record", b: "Timed request with a rating" },
        ],
      },
      {
        type: "stats",
        heading: "First-month results from pilot offices",
        items: [
          { value: "32s", label: "average accept time" },
          { value: "96%", label: "on-time delivery" },
          { value: "−87%", label: "phone calls" },
          { value: "4.8★", label: "average staff rating" },
        ],
        note: "Figures from ZapBuzzer pilot offices across all request types, not HDMI requests alone.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Keep the catalogue specific",
        body: "If your office regularly needs particular adapters, add them as their own catalogue items. Clear items mean fewer clarifying questions and faster fetches.",
      },
    ],
    faqs: [
      { q: "Can I see how often HDMI requests happen?", a: "Request history shows every HDMI request with its room and time. On Pro, analytics show patterns, such as one meeting room that always needs a cable, so you can leave a spare there for good." },
      { q: "Why have a separate HDMI item instead of general IT help?", a: "A dedicated item tells IT exactly what to bring without reading a long note. It also lets you see in request history how often cables are needed and where." },
      { q: "Can I ask for an adapter instead of a cable?", a: "Yes. Add the connector you need in the note, or ask your admin to add common adapters to the catalogue." },
      { q: "Who receives HDMI requests?", a: "They route to the IT desk team. Everyone on it is notified and the first person to accept owns the request." },
      { q: "Will I know if nobody picks it up?", a: "The request shows as not yet accepted, and notifications keep repeating to the team. On Pro, it escalates to a manager if it passes its deadline." },
    ],
    related: ["workflows", "solutions/it-support/hdmi-requests", "workflows/projector-request", "workflows/it-support", "mobile-app/requests", "features/one-tap-requests", "free-trial"],
    cta: { title: "Put cables one tap away", body: "Start your free 14-day trial and add HDMI to the catalogue." },
  },

  // ─────────────────────────── COURIER ───────────────────────────
  {
    path: "workflows/courier-pickup",
    title: "Courier Pickup Workflow with Audit Trail",
    description:
      "Courier pickup workflow: reception taps Courier Pickup, the mailroom is pinged, accepts and logs the handover, and every step is audit-trailed for later lookup.",
    h1: "Courier at the gate, logged in a few taps",
    eyebrow: "Workflow · Courier & reception",
    lead:
      "Courier handovers are easy to do and hard to prove later. “Did that contract go out?” is a common question with no good answer. This workflow makes every pickup a logged, timed request.",
    keywords: ["courier pickup workflow", "office courier management", "mailroom pickup request", "reception courier log", "courier audit trail"],
    heroVisual: "audit-log",
    sections: [
      {
        type: "problem-solution",
        heading: "When nobody wrote it down",
        problem: {
          title: "Paper registers and phone calls",
          points: [
            "Reception calls the mailroom, who may be on another floor",
            "The courier waits at the gate",
            "The handover goes in a register, or nowhere",
            "Weeks later nobody can confirm what happened",
          ],
        },
        solution: {
          title: "A courier pickup request",
          points: [
            "Reception buzzes the mailroom in one tap",
            "The first free person accepts and goes to the gate",
            "The handover is marked delivered, with an optional photo",
            "Actions are audit-logged for later lookup",
          ],
        },
      },
      {
        type: "workflow",
        heading: "The courier pickup, step by step",
        steps: [
          { title: "Courier arrives", body: "The courier reaches the gate or front desk." },
          { title: "Reception taps Courier Pickup", body: "Reception picks the item and adds a note such as the courier company and parcel count." },
          { title: "Mailroom pinged", body: "The mailroom team is notified; notifications repeat until someone accepts." },
          { title: "Accept", body: "The first free mailroom person accepts and heads to the gate." },
          { title: "Hand over", body: "Parcels are handed over and the request is marked delivered; a photo can be attached as proof." },
          { title: "Logged", body: "Each action is recorded in the audit log, with who did it and when." },
        ],
      },
      {
        type: "scenario",
        heading: "Neha at the front desk",
        persona: "Neha, Reception",
        setting: "An outgoing contract packet needs to leave with the afternoon courier.",
        timeline: [
          { time: "15:30", event: "The courier arrives at the gate. Neha taps Courier Pickup, notes “1 envelope, legal”." },
          { time: "15:30", event: "The mailroom is pinged." },
          { time: "15:31", event: "Imran accepts and walks to the gate." },
          { time: "15:34", event: "Imran hands over the envelope, attaches a photo and marks it delivered." },
          { time: "15:34", event: "The pickup appears in the audit log with each step's time and owner." },
        ],
        outcome: "When legal asks next week whether the contract went out, the answer is in the log.",
      },
      {
        type: "visual",
        visual: "audit-log",
        heading: "Every handover, on record",
        body: "Audit log rows show who raised the pickup, who accepted it and when it was delivered. Audit logs and reports are part of Pro.",
      },
      {
        type: "visual",
        visual: "delivery",
        heading: "Proof at the moment of handover",
        body: "Marking a pickup delivered can include a photo, which is often the quickest way to settle a later question.",
      },
      {
        type: "callout",
        tone: "info",
        title: "History on each plan",
        body: "Free keeps the last 30 days of request history. Pro adds audit logs and reports, which suit offices that need to look back further on courier movements.",
      },
    ],
    faqs: [
      { q: "What should reception put in the note?", a: "Enough for the mailroom to act without calling back: the courier company, how many parcels and whether it is incoming or outgoing. Short notes are fine." },
      { q: "Who usually raises a courier pickup?", a: "Reception, since they see the courier first. Any employee expecting a pickup can also raise one from their desk." },
      { q: "Can we attach proof of handover?", a: "Yes. When the request is marked delivered, a photo can be attached. That photo stays with the request." },
      { q: "How far back can we look up pickups?", a: "The Free plan keeps the last 30 days of history. Pro adds audit logs and reports for longer-term records." },
      { q: "Does this replace our courier company's tracking?", a: "No. ZapBuzzer tracks the internal side: who in your office handled the pickup and when. The courier company's own tracking covers the parcel after it leaves." },
      { q: "Can the courier wait less?", a: "The mailroom is pinged at once and the first free person accepts, so there is no round of calls to find someone. Requests are timed, which makes long waits visible." },
    ],
    related: ["workflows", "solutions/courier/pickup", "solutions/courier/reception-workflow", "admin/audit-logs", "use-cases/reception", "workflows/emergency-summon", "pricing/pro"],
    cta: { title: "Make every pickup traceable", body: "Try courier pickups free for 14 days; a credit card is not required." },
  },

  // ─────────────────────────── LUNCH ───────────────────────────
  {
    path: "workflows/lunch-request",
    title: "Lunch Request Workflow for Teams",
    description:
      "Lunch request workflow for a team of 12: pick items, add notes, the pantry queues the order, the requester rates it and the owner sees what the lunch cost.",
    h1: "Lunch for twelve, ordered without a group chat",
    eyebrow: "Workflow · Pantry",
    lead:
      "A team lunch has more moving parts than a coffee: several items, a headcount, dietary notes and a cost the owner will want to see. This workflow keeps all of it in one request.",
    keywords: ["lunch request workflow", "office lunch ordering", "team lunch request", "pantry lunch order", "office meal request cost"],
    heroVisual: "catalog",
    sections: [
      {
        type: "prose",
        heading: "A bigger order with a bill attached",
        paragraphs: [
          "Team lunches usually start in a group chat with twelve opinions and end with someone calling the pantry to read out an order. Items get missed, the count is wrong, and the office owner sees the cost weeks later, if at all.",
          "In ZapBuzzer, the organiser builds the order from the catalogue, adds notes, and buzzes it as one request. The pantry works from the same list, and the owner can see what each lunch cost.",
        ],
      },
      {
        type: "workflow",
        heading: "The lunch request, step by step",
        steps: [
          { title: "Pick items", body: "The organiser selects lunch items from the pantry catalogue." },
          { title: "Add a note", body: "Headcount and dietary needs go in the note: “12 people, 3 veg, 1 no onion”." },
          { title: "Choose the destination", body: "Pick the room where the team is eating, such as the 4th-floor meeting room." },
          { title: "Buzz the pantry", body: "The pantry team is pinged and the order joins its queue." },
          { title: "Accept and prepare", body: "The first free pantry member accepts, starts the order and sets an ETA." },
          { title: "Deliver", body: "Lunch arrives and is marked delivered, with a photo if useful." },
          { title: "Rate and cost", body: "The organiser rates the delivery. The owner sees the cost of the order." },
        ],
      },
      {
        type: "visual",
        visual: "catalog",
        heading: "Built from the pantry catalogue",
        body: "Lunch items sit in the same catalogue as the pantry's coffee, tea, juice, snacks and dry fruits, so ordering feels the same as any other pantry request.",
      },
      {
        type: "scenario",
        heading: "Vivek's quarterly planning lunch",
        persona: "Vivek, Operations",
        setting: "Twelve people in a planning session that runs through lunch.",
        timeline: [
          { time: "12:10", event: "Vivek picks lunch items, notes “12 people, 3 veg”, picks the 4th-floor meeting room." },
          { time: "12:10", event: "The pantry is pinged; the order enters its queue." },
          { time: "12:12", event: "Sunita accepts and sets an ETA for 13:00." },
          { time: "12:58", event: "Lunch is delivered and marked done." },
          { time: "13:30", event: "Vivek rates it 5★; the owner can see the order's cost." },
        ],
        outcome: "One request instead of a chat thread and a phone call, with the cost visible to the person who pays.",
      },
      {
        type: "visual",
        visual: "roles",
        heading: "Cost is for the owner's eyes",
        body: "Request cost visibility and the spend view are owner-only, set through role permissions. Employees order; the owner sees what it costs.",
      },
      {
        type: "audience",
        heading: "Who gets what from this workflow",
        items: [
          { role: "Organiser", benefit: "One request with the full order instead of chasing replies in a group." },
          { role: "Pantry staff", benefit: "A clear item list, headcount and room, plus fair credit through ratings." },
          { role: "Office owner", benefit: "Visibility into what each lunch order cost." },
        ],
      },
    ],
    faqs: [
      { q: "What if the pantry cannot meet the requested time?", a: "The person who accepts sets an ETA, so the organiser sees the expected time straight away and can adjust plans. On Pro, the request also has an SLA deadline and escalates to a manager if it runs late." },
      { q: "Can one request include several lunch items?", a: "Yes. The organiser picks items and adds a note with headcount and dietary needs, then buzzes it as one request." },
      { q: "Who can see the cost of a lunch order?", a: "The owner. The spend view is owner-only, so employees can order without seeing cost data." },
      { q: "How does the pantry handle several orders at once?", a: "Each order joins the pantry queue. Staff accept them one by one, and the requester sees who accepted and the ETA." },
      { q: "Can we rate the lunch?", a: "Yes. The organiser rates the delivery from 1 to 5 stars, which feeds into pantry staff ratings over time." },
    ],
    related: ["workflows", "solutions/pantry/lunch-requests", "workflows/coffee-request", "admin/spend-visibility", "use-cases/operations", "solutions/pantry/ordering-workflow", "pricing"],
    cta: { title: "Order the next team lunch in one request", body: "Set up lunch items on the 14-day free trial." },
  },

  // ─────────────────────────── EMERGENCY ───────────────────────────
  {
    path: "workflows/emergency-summon",
    title: "Emergency Summon Workflow for Offices",
    description:
      "Emergency summon workflow: one tap on the ZapBuzzer mobile app summons staff or security, rings through silent and locked phones, and records who responded.",
    h1: "When you need someone now, not in a minute",
    eyebrow: "Workflow · Staff & security",
    lead:
      "Some requests cannot wait for a reply in a chat. The ZapBuzzer mobile app has one-tap options to summon staff or security and to raise an emergency, and its alerts keep ringing even when the phone is silenced or locked.",
    keywords: ["emergency summon workflow", "summon security office", "office emergency alert app", "call staff one tap", "office security request"],
    heroVisual: "notification-flow",
    sections: [
      {
        type: "prose",
        heading: "Built for the urgent end of office requests",
        paragraphs: [
          "Most workflows on this site are about convenience: coffee, prints, cables. A summon is different. Someone in the office needs a person to come right away, whether that is security at the entrance or a staff member to a specific room.",
          "ZapBuzzer handles a summon with the same mechanics as other requests, which is why it works: the right team is pinged, alerts break through silent phones, and the first responder to accept is visible to everyone.",
        ],
      },
      {
        type: "callout",
        tone: "warning",
        title: "Not a substitute for emergency services",
        body: "For medical emergencies, fire or any threat to safety, call your local emergency number first. ZapBuzzer helps get people inside your office moving; it does not contact outside emergency services.",
      },
      {
        type: "workflow",
        heading: "The emergency summon, step by step",
        steps: [
          { title: "Open the mobile app", body: "The summon and emergency options are one tap away on the app's home screen." },
          { title: "Choose summon or emergency", body: "Summon staff or security, or raise an emergency, depending on what is happening." },
          { title: "Location and note", body: "Pick where you are and add a short note if there is time." },
          { title: "Alert goes out", body: "The team is pinged at once. On the mobile app, the alert rings through silent mode and locked screens." },
          { title: "First responder accepts", body: "The first person to accept owns the response; the requester sees their name." },
          { title: "Resolve and record", body: "The request is closed once handled, leaving a timed record of who responded and when." },
        ],
      },
      {
        type: "visual",
        visual: "notification-flow",
        heading: "One tap, every channel",
        body: "A summon fans out to the app and email on every plan; Telegram and WhatsApp pings are added on Pro. Alerts repeat until someone accepts.",
      },
      {
        type: "scenario",
        heading: "An unwanted visitor at the entrance",
        persona: "Neha, Reception",
        setting: "A visitor is refusing to leave the front desk and is becoming agitated.",
        timeline: [
          { time: "17:42", event: "Neha taps Summon Security on the mobile app and picks Main Reception." },
          { time: "17:42", event: "Security staff phones ring, including one on silent." },
          { time: "17:42", event: "Ganesh accepts; Neha sees his name on screen." },
          { time: "17:44", event: "Ganesh arrives at reception and handles the situation." },
          { time: "17:50", event: "The request is closed with a timed record of the response." },
        ],
        outcome: "Neha knew help was coming without making a call, and the office has a record of how quickly security responded.",
      },
      {
        type: "visual",
        visual: "mobile-app",
        heading: "Designed for a phone in your hand",
        body: "The Android app (v1.15.2) puts summon, emergency and everyday orders on one screen. Your account and workspace are stored on the server, so nothing is lost if a phone changes.",
      },
      {
        type: "checklist",
        heading: "Preparing your office",
        items: [
          "Make sure security and on-call staff have the mobile app installed and signed in",
          "Check that notifications are allowed for the app on their phones",
          "Add locations such as Main Reception, each floor and parking",
          "Tell employees where the summon option is before they need it",
          "Keep local emergency numbers posted; ZapBuzzer is for internal response",
        ],
      },
    ],
    faqs: [
      { q: "Will the alert wake a phone on silent?", a: "Yes. The ZapBuzzer mobile app still rings when a phone is locked or set to silent, which is why it suits summons." },
      { q: "Does ZapBuzzer call the police or an ambulance?", a: "No. It alerts people inside your office. For medical, fire or safety emergencies, call your local emergency number first." },
      { q: "Who receives a summon?", a: "The team set up for it, such as security or on-call staff. Everyone on that team is alerted and the first to accept owns the response." },
      { q: "Is there a record of the response?", a: "Every request is timed, so you can see when the summon was raised and when it was accepted. On Pro, audit logs and reports add a fuller history." },
      { q: "Do summons work on the Free plan?", a: "The mobile app and email notifications are available on Free. Telegram and WhatsApp pings and the escalation chain are Pro features." },
    ],
    related: ["workflows", "mobile-app", "mobile-app/notifications", "notifications/push", "use-cases/reception", "workflows/courier-pickup", "enterprise/security"],
    cta: { title: "Get the right people moving, fast", body: "Install the mobile app and try summons during your 14-day free trial." },
  },
];
