import type { PageContent } from "../types";

export const pages: PageContent[] = [
  // ───────────────────────────── ONE-TAP REQUESTS
  {
    path: "features/one-tap-requests",
    title: "One-Tap Office Requests",
    description:
      "Ask for coffee, prints, IT help or a courier pickup with one tap. ZapBuzzer turns every office request into a tracked job with an owner, a timer and a rating.",
    h1: "Press a button. Staff knows.",
    eyebrow: "Feature · One-Tap Requests",
    lead:
      "The fastest way to ask for something in an office should not be a phone call, a shout down the corridor or a message in a busy WhatsApp group. With ZapBuzzer you pick what you need, choose where it goes and tap Buzz. That is the whole request.",
    keywords: [
      "one tap office request",
      "office request button",
      "request coffee at desk app",
      "internal request app",
      "office service request app",
    ],
    heroVisual: "mobile-app",
    sections: [
      {
        type: "prose",
        eyebrow: "What it means",
        heading: "One tap replaces the whole ask-and-chase routine",
        paragraphs: [
          "A one-tap request is exactly what it sounds like. You open the Buzzer app or the web app, tap a tile from your office catalogue — Coffee, Tea, Print, IT Help, Facilities, Courier Pickup — add an optional note, pick a destination such as Boss Cabin or Conference Room B, and tap Buzz. You do not need to know who is on duty in the pantry today or which extension the IT desk uses.",
          "Behind that single tap, three things happen. The request lands with the right team, everyone on that team is pinged at once, and the first person who is free taps Accept and owns it. You see their name and photo, an ETA, and later you rate the delivery. Nothing about that flow needs a second message from you.",
          "The point is not that tapping is clever. The point is that the request now exists as a record, with a time stamp, a destination and an owner, instead of living in someone's memory.",
        ],
      },
      {
        type: "problem-solution",
        heading: "Why asking for things in an office is still so slow",
        intro:
          "ZapBuzzer began in Pune, at an office fed up with making three calls just to get one coffee. The pattern is familiar everywhere.",
        problem: {
          title: "The usual way",
          points: [
            "You call the pantry extension. Nobody picks up, so you call again, then walk over.",
            "Print requests get posted in a WhatsApp group and scroll away under lunch photos.",
            "IT problems are sent as a DM to one person who happens to be on leave.",
            "You never know if anyone has seen the request, so you ask twice — and sometimes get two coffees.",
          ],
        },
        solution: {
          title: "The one-tap way",
          points: [
            "One tap creates a request with a destination, a note and a time stamp.",
            "The whole responsible team sees it immediately, not one person.",
            "Whoever accepts is shown to you by name and photo, with an ETA.",
            "There is nothing to chase: the request is either waiting, accepted, in progress or delivered.",
          ],
        },
      },
      {
        type: "workflow",
        heading: "What a one-tap request looks like, step by step",
        steps: [
          { title: "Tap a tile", body: "Pick Coffee, Print, IT Help or any item your admin has put in the catalogue. Whatever you order most often takes a single tap." },
          { title: "Add a note and destination", body: "“Two cups, less sugar” and “Boss Cabin” is enough. The note is optional; the destination tells staff where to go." },
          { title: "Tap Buzz", body: "The request is sent to the team that handles that category — pantry, print room, IT desk, facilities or reception." },
          { title: "Watch it get picked up", body: "As soon as someone accepts, your screen shows who it is and when they expect to arrive." },
          { title: "Receive and rate", body: "When it is delivered you give a 1–5★ rating, which feeds that staff member's scorecard." },
        ],
      },
      {
        type: "visual",
        visual: "mobile-app",
        heading: "Built for the moment you are busy",
        body:
          "One-tap requests matter most when you cannot step away: you are on a client call, in a board meeting or presenting. The mobile app puts your catalogue on a single screen so you can buzz without breaking focus.",
        points: [
          "Catalogue grid with your most-used items first",
          "Optional note field for specifics like “no sugar” or “double-sided”",
          "Destination picker for cabins, meeting rooms and desks",
          "Live status of your open requests right below",
        ],
      },
      {
        type: "scenario",
        heading: "Coffee during a board call",
        persona: "Aarav, CEO",
        setting: "Board call running long in the boss cabin, two guests, no time to step out.",
        timeline: [
          { time: "11:02", event: "Aarav taps Coffee, adds “2 cups, one black”, picks Boss Cabin, taps Buzz." },
          { time: "11:02", event: "The pantry team sees the request on Telegram and in the app." },
          { time: "11:02", event: "Raj accepts in 12 seconds. Aarav sees Raj’s photo and an ETA." },
          { time: "11:06", event: "Coffee is delivered to the cabin. The call never paused." },
          { time: "11:40", event: "After the call Aarav rates the delivery 5★." },
        ],
        outcome:
          "Compare that with the old way, where calling out to Raju for a pair of coffees in the boss cabin took 25 minutes and 3 phone calls, and the coffee arrived cold. With one tap it took 4 minutes, 0 phone calls and 1 hot coffee.",
      },
      {
        type: "features",
        heading: "What makes a single tap enough",
        items: [
          { title: "Catalogue, not free text", body: "Requests come from a list your admin controls, so staff always know exactly what is being asked for." },
          { title: "Auto-routing by category", body: "A Print tile goes to the print room, an AC tile goes to facilities. The requester never picks a person." },
          { title: "Multi-channel pings", body: "Staff are notified in the app and by email; on Pro also on Telegram and WhatsApp, repeating until someone accepts." },
          { title: "Visible ownership", body: "Requesters see who accepted. No more wondering whether anyone saw it." },
          { title: "Timed by default", body: "Every request is timed from Buzz to delivery, so speed becomes measurable." },
          { title: "Works on web and mobile", body: "Buzz from your laptop at your desk or from the Android app in a meeting room." },
        ],
      },
      {
        type: "stats",
        heading: "What happened in pilot offices in the first month",
        items: [
          { value: "32s", label: "average accept time" },
          { value: "96%", label: "on-time delivery" },
          { value: "−87%", label: "phone calls" },
          { value: "4.8★", label: "average staff rating" },
        ],
      },
      {
        type: "audience",
        heading: "Who gets the most out of one-tap requests",
        items: [
          { role: "Leaders and founders", benefit: "Get what you need during calls and meetings without leaving the room or picking up a phone." },
          { role: "Sales and client-facing teams", benefit: "Prints, refreshments and room fixes arrive before the client sits down." },
          { role: "Office managers", benefit: "Requests stop arriving as interruptions at your desk and start arriving as a queue you can see." },
          { role: "Pantry, IT and facilities staff", benefit: "Clear, specific requests with a destination — and fair credit for the ones you deliver." },
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Start with your five most common asks",
        body: "Most offices get the bulk of their value from a handful of tiles: coffee, tea, prints, IT help and AC. Put those in the catalogue first, invite the team, and add the rest once people are buzzing.",
      },
    ],
    faqs: [
      { q: "Do employees need training to send a one-tap request?", a: "Very little. If someone can tap an icon on a phone, they can buzz. Pick an item, optionally add a note and destination, and tap Buzz. Most offices are fully live within one afternoon." },
      { q: "Can I add details to a one-tap request?", a: "Yes. Each request has an optional note field for specifics like “less sugar”, “24 colour copies” or “AC stuck at 16°C”, and a destination such as a cabin or meeting room." },
      { q: "What if nobody responds to my request?", a: "Notifications repeat until someone accepts. Every request also has a deadline, and on Pro overdue requests auto-escalate to a manager through the escalation chain." },
      { q: "Can I request from a laptop, or only the phone?", a: "Both. ZapBuzzer has a web app and an Android mobile app, and since your account and workspace are stored server-side, requests look the same in either place." },
      { q: "Is one-tap requesting available on the Free plan?", a: "Yes. The Free plan covers up to 10 staff in one location with mobile and web apps and email notifications. Telegram and WhatsApp pings, SLA escalation and full analytics are on Pro at ₹99 per seat per month." },
    ],
    related: ["features", "features/request-catalog", "features/first-accept-wins", "workflows/coffee-request", "mobile-app/requests", "use-cases/reduce-phone-calls", "free-trial"],
    cta: { title: "Try one tap in your office this afternoon", body: "Try it free for 14 days without a card or an onboarding call. Create an account, bring your colleagues in and send the first buzz." },
  },

  // ───────────────────────────── REQUEST MANAGEMENT
  {
    path: "features/request-management",
    title: "Internal Request Management for Offices",
    description:
      "Manage every pantry, print, IT, facilities and courier request in one queue. See owners, deadlines and status live, and stop losing requests in chats and calls.",
    h1: "Every office request, in one place, with an owner",
    eyebrow: "Feature · Request Management",
    lead:
      "ZapBuzzer is the internal-request CRM your office should have had years ago. Instead of requests scattered across extensions, WhatsApp groups and DMs, every ask becomes a managed record with a team, an owner, a deadline and an outcome.",
    keywords: [
      "internal request management",
      "office request management software",
      "office service desk",
      "request queue for admin team",
      "workplace request CRM",
    ],
    heroVisual: "request-dashboard",
    sections: [
      {
        type: "prose",
        eyebrow: "The idea",
        heading: "Treat office requests like the work they are",
        paragraphs: [
          "Sales teams have a CRM. Engineering has an issue tracker. But the steady stream of small requests that keep an office running — coffee for a client, 24 colour copies, a projector that will not connect, a courier waiting at the gate — usually has no system at all. It runs on goodwill and memory, which is exactly why things slip.",
          "Request management in ZapBuzzer gives that stream a home. Each request has a category, a requester, a destination, a note, a responsible team, an owner once accepted, a timer and a final rating. Admins and managers see the whole picture in one dashboard; staff see only what they need to act on.",
          "By design it is neither an all-purpose task list nor a dressed-up Telegram bot. It is built around how office services actually work: someone needs something, a team can provide it, and the first free person should take it.",
        ],
      },
      {
        type: "visual",
        visual: "request-dashboard",
        heading: "The live queue",
        body:
          "The request dashboard shows every open request across pantry, print room, IT, facilities and reception, with its current status and who owns it. You can tell at a glance what is waiting, what is moving and what is late.",
        points: [
          "Status for each request: requested, accepted, started, delivered, rated",
          "Owner name and photo once someone accepts",
          "Time since the buzz and time left on the deadline",
          "Overdue requests stand out so they can be dealt with",
        ],
      },
      {
        type: "problem-solution",
        heading: "What changes when requests are managed, not remembered",
        problem: {
          title: "Unmanaged requests",
          points: [
            "No single list of what has been asked for today",
            "Requests die in someone’s DMs when they go on leave",
            "Managers only hear about problems when someone complains",
            "Good staff get no credit; slow handling is invisible",
          ],
        },
        solution: {
          title: "Managed in ZapBuzzer",
          points: [
            "One queue across all teams and categories",
            "Requests go to a team, so nobody’s absence blocks them",
            "Deadlines and escalation surface problems before complaints do",
            "Scorecards credit the people who actually deliver",
          ],
        },
      },
      {
        type: "workflow",
        heading: "The request lifecycle from a manager’s point of view",
        steps: [
          { title: "Created", body: "An employee buzzes from the catalogue. The request appears in the queue with category, note and destination." },
          { title: "Routed", body: "It goes to the team responsible for that category and everyone on the team is notified." },
          { title: "Accepted", body: "The first free team member accepts and becomes the owner. Duplicates are avoided." },
          { title: "In progress", body: "The owner marks it started with an ETA; the requester sees this live." },
          { title: "Delivered", body: "The owner marks it delivered, optionally with a photo." },
          { title: "Rated and reported", body: "The requester rates 1–5★ and the request flows into analytics and the staff scorecard." },
        ],
      },
      {
        type: "table",
        heading: "Categories most offices manage on day one",
        intro: "These are examples drawn from real offices. Your catalogue is your own.",
        headers: ["Category", "Typical requests", "Handled by"],
        rows: [
          ["Pantry", "Tea, coffee, juice, dry fruits, snacks, team lunch", "Pantry team"],
          ["Print room", "PDF upload with copies and colour, delivered to seat", "Print room"],
          ["IT", "HDMI cable, projector stuck, laptop issue", "IT desk"],
          ["Facilities", "AC too cold, light out, room setup", "Facilities team"],
          ["Courier", "Pickup at the gate, outgoing parcel", "Reception or mailroom"],
        ],
      },
      {
        type: "scenario",
        heading: "One morning across five teams",
        persona: "Priya, Office Manager",
        setting: "A 60-person office with a client visit at 11 and a team lunch at 1.",
        timeline: [
          { time: "09:40", event: "Kavya buzzes 24 colour copies of her pitch deck. Print room accepts." },
          { time: "09:55", event: "Om reports Conference Room B AC stuck at 16°C. Facilities accepts; a 15-minute deadline starts." },
          { time: "10:20", event: "Neha logs a courier pickup at the gate. Mailroom accepts; it is audit-trailed." },
          { time: "10:50", event: "Tanvi needs an HDMI cable. IT brings it in 3 minutes." },
          { time: "11:30", event: "Vivek orders lunch for 12 with a note. Pantry queues it; the owner can see the cost." },
        ],
        outcome:
          "Priya did not field a single phone call. She watched the dashboard, saw everything closed on time, and could show the CEO exactly what was handled and by whom.",
      },
      {
        type: "features",
        heading: "Management tools that come with every request",
        items: [
          { title: "Team-based routing", body: "Requests go to teams, not individuals, so coverage survives leave and shift changes." },
          { title: "Deadlines and escalation", body: "Each request is given a due time. On Pro, overdue requests escalate up a chain to managers." },
          { title: "Roles and audit log", body: "Permissions are set role by role, and every action audit-logged so you can see who did what." },
          { title: "Cost visibility", body: "The owner can see the cost of requests such as a lunch order. The spend view is owner-only." },
          { title: "History", body: "Free keeps the last 30 days. Pro keeps full history with reports." },
          { title: "Multi-location", body: "Run several floors or offices from one workspace on Pro." },
        ],
      },
      {
        type: "checklist",
        heading: "Getting request management running",
        items: [
          "List the five to ten things people ask for most often",
          "Create a team for each service: pantry, print, IT, facilities, reception",
          "Add staff to their teams and ask them to install the mobile app",
          "Add common destinations like cabins and meeting rooms",
          "Invite employees and send the first test buzz together",
          "Review the dashboard at the end of week one",
        ],
      },
    ],
    faqs: [
      { q: "How is this different from a helpdesk ticketing tool?", a: "Helpdesks are built for long-running tickets with back-and-forth. ZapBuzzer is built for fast physical office services — coffee, prints, cables, AC — where the right answer is that the first free person goes and does it. Requests are one tap, broadcast to a team and timed in minutes." },
      { q: "Can managers see requests across all teams?", a: "Yes. Admins and managers with the right role see the live queue across categories. Staff see what is relevant to them, and employees see their own requests." },
      { q: "What happens to requests when a staff member is on leave?", a: "Requests go to the whole team rather than one named person, so whoever is working picks them up. Nothing waits in an absent person’s inbox." },
      { q: "Can we manage more than one office?", a: "Multi-location is part of Pro. Free covers one location with up to 10 staff." },
      { q: "Is there an audit trail?", a: "Every action is audit-logged, and audit logs plus reports are part of Pro. This is useful for courier pickups and anything where you need to prove who handled what." },
    ],
    related: ["features", "features/request-tracking", "features/request-routing", "admin", "use-cases/office-manager", "use-cases/prevent-lost-requests", "pricing"],
    cta: { title: "Give your office requests a proper home", body: "Start free with one floor and up to 10 staff, or try Pro for 14 days with no credit card." },
  },

  // ───────────────────────────── REQUEST CATALOG
  {
    path: "features/request-catalog",
    title: "Office Request Catalogue",
    description:
      "Build a catalogue of the things your office asks for — coffee, tea, prints, IT help, AC fixes, courier pickups — so every request is clear, routed and one tap away.",
    h1: "A menu of everything your office can ask for",
    eyebrow: "Feature · Request Catalogue",
    lead:
      "The catalogue is the list of tiles employees see when they open Buzzer. It decides what can be requested, how it is described and which team receives it. A good catalogue is the difference between “can someone help?” and a clear, routable request.",
    keywords: [
      "office request catalogue",
      "pantry menu app",
      "service catalogue for office",
      "office services list",
      "request templates office",
    ],
    heroVisual: "catalog",
    sections: [
      {
        type: "prose",
        eyebrow: "Why a catalogue",
        heading: "Clear requests start with a fixed menu",
        paragraphs: [
          "Free-text requests are where office communication breaks down. “Can I get something?” could mean tea, a charger or someone to fix the blinds. A catalogue removes the guesswork: each tile is a specific thing, owned by a specific team, with an optional note for the details.",
          "Because the catalogue is structured, ZapBuzzer knows where to route each item. A Coffee tile goes to the pantry. A Print tile opens a PDF upload with copies and colour. An AC tile goes to facilities. Employees never have to know who handles what.",
          "It also makes the usual order one tap away. If the CEO always has black coffee and Sales always needs colour prints before demos, the catalogue makes those the fastest things on the screen.",
        ],
      },
      {
        type: "visual",
        visual: "catalog",
        heading: "What employees see",
        body: "A grid of tiles grouped by service. Tap one, add a note if needed, pick a destination, tap Buzz.",
        points: [
          "Pantry: tea, coffee, juice, dry fruits and snacks",
          "Print room: send a PDF and choose colour and the number of copies",
          "IT and facilities: HDMI, projector, AC, lights",
          "Reception: courier pickup and deliveries",
        ],
      },
      {
        type: "table",
        heading: "A sample catalogue for a mid-sized office",
        intro: "Illustrative only — your admin decides what goes in yours.",
        headers: ["Tile", "Routes to", "Useful note examples"],
        rows: [
          ["Coffee", "Pantry", "“2 cups, one black”, “for guests”"],
          ["Tea", "Pantry", "“Green tea, no sugar”"],
          ["Snacks / dry fruits", "Pantry", "“For 6 people in Conference Room B”"],
          ["Team lunch", "Pantry", "“12 people, 2 vegetarian”"],
          ["Print job", "Print room", "PDF + “24 copies, colour”"],
          ["HDMI / adapter", "IT desk", "“USB-C to HDMI”"],
          ["Projector help", "IT desk", "“Not detecting laptop”"],
          ["AC issue", "Facilities", "“Stuck at 16°C”"],
          ["Courier pickup", "Reception / mailroom", "“Parcel at gate, sign needed”"],
        ],
      },
      {
        type: "problem-solution",
        heading: "Free text versus a catalogue",
        problem: {
          title: "Free-text messages",
          points: [
            "Vague asks that need a follow-up call",
            "Posted to the wrong group or person",
            "Impossible to report on — every message is different",
            "Staff guess what is wanted and get it wrong",
          ],
        },
        solution: {
          title: "Catalogue tiles",
          points: [
            "Each tile means one thing, with an optional note for detail",
            "Routing is built in to each category",
            "Analytics can count coffees, prints and AC calls separately",
            "Staff know exactly what to bring and where",
          ],
        },
      },
      {
        type: "scenario",
        heading: "Lunch for twelve without a spreadsheet",
        persona: "Vivek, Operations",
        setting: "Quarterly review running through lunch, 12 people in the large meeting room.",
        timeline: [
          { time: "12:10", event: "Vivek picks lunch items from the pantry catalogue and adds “12 people, 2 vegetarian”." },
          { time: "12:10", event: "The pantry team is pinged and one member accepts." },
          { time: "12:15", event: "Pantry queues the order and marks it started with an ETA." },
          { time: "13:00", event: "Lunch is delivered to the meeting room; Vivek rates it." },
          { time: "13:05", event: "The owner sees the cost of the order in the spend view." },
        ],
        outcome: "No group chat poll, no forwarded menu, and the owner knows exactly what lunch cost.",
      },
      {
        type: "features",
        heading: "Catalogue details that matter in practice",
        items: [
          { title: "Usual order first", body: "Frequently requested items are the quickest to reach, so repeat asks really are one tap." },
          { title: "Notes on every item", body: "Specifics go in the note rather than a second message." },
          { title: "Destinations", body: "Cabins, meeting rooms and desks can be chosen so staff know where to deliver." },
          { title: "Print-specific fields", body: "Print tiles take a PDF with copies and colour settings." },
          { title: "Category routing", body: "Every tile belongs to a category that routes to the right team." },
          { title: "Cost visibility", body: "For items with a cost, like a lunch order, the owner sees what was spent." },
        ],
      },
      {
        type: "checklist",
        heading: "How to design a good catalogue",
        intro: "A short, honest catalogue beats a long one nobody reads.",
        items: [
          "Start from what people actually ask for today — check the pantry WhatsApp group",
          "Name tiles the way people speak: “Coffee”, not “Hot beverage service”",
          "Keep each tile to one team so routing stays clean",
          "Use notes for variations instead of creating dozens of near-identical tiles",
          "Add destinations for every cabin and meeting room",
          "Review after a month using request analytics and remove unused tiles",
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "The catalogue drives your reports",
        body: "Because each request comes from a tile, analytics can tell you how many coffees, print jobs and AC calls your office handles, and when the office buzzes most. Free text can never give you that.",
      },
    ],
    faqs: [
      { q: "Who can edit the catalogue?", a: "Catalogue management sits with admins. Roles and permissions decide who can change what, and changes are captured in the audit log." },
      { q: "Can employees ask for something that is not in the catalogue?", a: "The catalogue is designed to cover the common asks. If people keep requesting something through notes or side channels, that is a signal to add a tile for it." },
      { q: "Does the print tile handle files?", a: "Yes. Print requests let you upload a PDF and set copies and colour, and the prints are delivered to your seat or room." },
      { q: "Can different offices have different catalogues?", a: "Offices differ — one may have a full pantry, another just tea. Multi-location is on Pro; talk to us about how you want to structure catalogues across sites." },
      { q: "Will the catalogue show prices to employees?", a: "Cost visibility is an owner capability. The owner sees the cost of requests like a lunch order through the owner-only spend view." },
    ],
    related: ["features", "features/one-tap-requests", "features/request-routing", "solutions/pantry/catalog", "solutions/print-room/pdf-print-requests", "workflows/lunch-request", "admin/spend-visibility"],
    cta: { title: "Put your office menu in everyone’s pocket", body: "Set up your first catalogue in minutes on the free plan, then invite your team." },
  },

  // ───────────────────────────── REQUEST ROUTING
  {
    path: "features/request-routing",
    title: "Automatic Request Routing to the Right Team",
    description:
      "ZapBuzzer routes each office request to the team that handles it — pantry, print room, IT desk, facilities or reception — and notifies every member at once.",
    h1: "The right team hears about it the moment you tap",
    eyebrow: "Feature · Request Routing",
    lead:
      "Employees should not need an org chart to get an AC fixed. ZapBuzzer routes every request by category to the team responsible for it, and pings the whole team on every channel you use until someone accepts.",
    keywords: [
      "office request routing",
      "auto route requests to team",
      "facilities request routing",
      "IT request auto routing",
      "internal ticket routing",
    ],
    heroVisual: "notification-flow",
    sections: [
      {
        type: "prose",
        eyebrow: "How routing works",
        heading: "Category in, team out",
        paragraphs: [
          "Every catalogue item belongs to a category, and every category maps to a team. When Om taps Facilities to report an AC stuck at 16°C, the request goes to the facilities team. When Tanvi taps IT for an HDMI cable, it goes to the IT desk. The requester picks what they need, not who should do it.",
          "Routing to a team, not a person, is a deliberate choice. Individuals take leave, step out for lunch and switch shifts. Teams do not disappear. By sending each request to everyone who could handle it, ZapBuzzer makes sure there is always someone who sees it.",
          "Once routed, the request is announced on every channel the team uses — in the app and by email on every plan, and also on Telegram and WhatsApp on Pro — and the notification repeats until someone accepts.",
        ],
      },
      {
        type: "visual",
        visual: "notification-flow",
        heading: "One request, every channel, one team",
        body: "A single buzz fans out to the responsible team across the app, Telegram, WhatsApp and email at the same time.",
        points: [
          "App notifications still ring when a phone is locked or set to silent",
          "Telegram and WhatsApp pings on Pro",
          "Email on every plan, including Free",
          "Repeats until someone accepts",
        ],
      },
      {
        type: "comparison",
        heading: "Routing by habit versus routing by ZapBuzzer",
        columns: ["Routing by habit", "ZapBuzzer routing"],
        rows: [
          { label: "Who receives it", a: "Whoever the requester happens to know", b: "Everyone on the responsible team" },
          { label: "When someone is away", a: "Request waits in their DMs", b: "Another team member picks it up" },
          { label: "Channel", a: "Phone, WhatsApp, walking over", b: "App, email, plus Telegram and WhatsApp on Pro" },
          { label: "If ignored", a: "Requester chases manually", b: "Pings repeat; overdue requests escalate" },
          { label: "Record", a: "None", b: "Timed, owned and audit-logged" },
        ],
      },
      {
        type: "workflow",
        heading: "Routing from tap to accept",
        steps: [
          { title: "Employee buzzes", body: "The request carries its category, note and destination." },
          { title: "Category matched to team", body: "Pantry items to pantry, print to print room, AC to facilities, courier to reception or mailroom." },
          { title: "Team notified on all channels", body: "Every member sees the request at the same time." },
          { title: "Reminders repeat", body: "Until someone accepts, the pings keep coming." },
          { title: "First accept takes it", body: "Routing ends the moment one person owns the request." },
        ],
      },
      {
        type: "scenario",
        heading: "A freezing conference room",
        persona: "Om, Engineer",
        setting: "Conference Room B AC stuck at 16°C, a design review starts in 20 minutes.",
        timeline: [
          { time: "14:00", event: "Om taps Facilities → AC issue, notes “stuck at 16°C”, picks Conference Room B." },
          { time: "14:00", event: "The facilities team is pinged; Deepak sees it on his phone." },
          { time: "14:01", event: "Deepak accepts. Om sees his name and an ETA." },
          { time: "14:09", event: "Deepak resets the unit and marks it delivered." },
        ],
        outcome: "Had nobody accepted, or the fix run past its 15-minute deadline, the request would have auto-escalated to a manager. Om never had to find out who looks after the AC.",
      },
      {
        type: "features",
        heading: "Routing capabilities",
        items: [
          { title: "Category-based", body: "Routing follows the catalogue, so every tile already knows its team." },
          { title: "Team broadcast", body: "Everyone eligible is notified at once rather than in a round-robin queue." },
          { title: "Destination aware", body: "Staff see where to go — Boss Cabin, Conference Room B, the gate." },
          { title: "Multi-location", body: "On Pro, requests can be organised by location so each office’s teams handle their own." },
          { title: "Escalation on silence", body: "On Pro, an escalation chain takes over if a request is not handled in time." },
        ],
      },
      {
        type: "audience",
        heading: "Why each side likes it",
        items: [
          { role: "Employees", benefit: "Tap what you need; never look up an extension again." },
          { role: "Team leads", benefit: "Requests reach your whole team, so coverage does not depend on one person." },
          { role: "Admin heads", benefit: "Nothing rots in someone’s DMs. Facilities tickets auto-escalate." },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Channels by plan",
        body: "Free sends email notifications alongside the app. Telegram and WhatsApp pings, multi-location and the SLA escalation chain are part of Pro at ₹99 per seat per month.",
      },
    ],
    faqs: [
      { q: "Do employees choose who handles their request?", a: "No. They choose what they need and where. The category decides the team, and the first free team member accepts it." },
      { q: "Can one request go to more than one team?", a: "Each catalogue item belongs to one category and routes to that team, which keeps ownership clear. If a job needs two teams, buzzing two separate items keeps each one tracked." },
      { q: "What if the whole team is busy?", a: "Notifications repeat until someone accepts, and every request has a deadline. On Pro, overdue requests climb the escalation chain to a manager." },
      { q: "Can routing differ between our offices?", a: "Multi-location is part of Pro, so each site can have its own teams. For complex group or facility-company setups, Enterprise adds a dedicated CSM to help design it." },
      { q: "Does routing work without Telegram or WhatsApp?", a: "Yes. The app and email work on every plan. Telegram and WhatsApp are extra channels on Pro." },
    ],
    related: ["features", "features/first-accept-wins", "notifications/routing", "solutions/it-support/ticket-routing", "solutions/facilities/routing", "workflows/ac-issue", "pricing/pro"],
    cta: { title: "Stop telling people who to call", body: "Set up teams and categories once, and every request finds its way. Try Pro free for 14 days." },
  },

  // ───────────────────────────── FIRST-ACCEPT-WINS
  {
    path: "features/first-accept-wins",
    title: "First-Accept-Wins Request Routing",
    description:
      "Broadcast each office request to the whole team; the first person free taps Accept and owns it. No duplicates, no “I thought you’d do it”, and every ask timed.",
    h1: "Whoever’s free takes it. Everyone else knows it’s handled.",
    eyebrow: "Feature · First-Accept-Wins",
    lead:
      "First-accept-wins is the rule at the heart of ZapBuzzer. A request goes to the whole team at once, the first person who taps Accept owns it, and it disappears from everyone else’s list. It ends “I thought you’d do it” for good.",
    keywords: [
      "first accept wins routing",
      "first to accept owns request",
      "broadcast request to team",
      "office task claiming",
      "prevent duplicate office requests",
    ],
    heroVisual: "acceptance",
    sections: [
      {
        type: "prose",
        eyebrow: "What it means",
        heading: "A simple rule: first to accept owns it",
        paragraphs: [
          "When an employee buzzes, ZapBuzzer does not try to guess which staff member should do the job. It sends the request to everyone on the responsible team. Each of them sees an Accept button. The first person to tap it becomes the owner, and the request is locked to them.",
          "That one rule settles three questions at once: who is doing this, is anyone doing this, and is more than one person doing this. The owner is named, the requester is told, and the rest of the team can get on with something else.",
          "It is how good teams already work when they are in the same room — “I’ll get it” — made reliable for an office where the pantry is on the third floor, the print room is in the basement and the IT desk is out on a call.",
        ],
      },
      {
        type: "problem-solution",
        heading: "Why normal office requests fail",
        intro: "Most requests are not ignored on purpose. They fail because ownership is never settled.",
        problem: {
          title: "Without a claiming rule",
          points: [
            "A request posted in a group chat is seen by five people; each assumes another will act",
            "Two people respond to the same ask and you get two coffees and no prints",
            "A request sent to one person waits while they are at lunch or on leave",
            "The requester cannot tell if anyone has seen it, so they call — three calls for one coffee",
          ],
        },
        solution: {
          title: "With first-accept-wins",
          points: [
            "Everyone on the team sees it, but only one person can own it",
            "The moment someone accepts, the others see it is taken",
            "The request never depends on one specific person being available",
            "The requester sees exactly who is on it, with name and photo",
          ],
        },
      },
      {
        type: "visual",
        visual: "acceptance",
        heading: "Broadcast to the team, claimed by one",
        body:
          "Raj, Sunita and Imran on the pantry team all receive the same coffee request at the same moment — in the app, and on Pro on Telegram and WhatsApp too. Raj is nearest the kettle and taps Accept first. On Sunita’s and Imran’s screens the request is marked as taken by Raj.",
        points: [
          "Multiple staff receive the request at the same time",
          "The first available person taps Accept",
          "Ownership locks to that person — duplicate ownership is prevented",
          "Everyone else sees it is handled and moves on",
        ],
      },
      {
        type: "workflow",
        heading: "What happens in the seconds after a buzz",
        steps: [
          { title: "Broadcast", body: "The request is sent to every member of the responsible team across the app, email and, on Pro, Telegram and WhatsApp." },
          { title: "Repeat until accepted", body: "Pings repeat so a request cannot be missed because a phone was face down. On the mobile app they ring through even on silent." },
          { title: "First accept", body: "The first staff member to tap Accept becomes the owner. The acceptance time is recorded." },
          { title: "Lock and inform", body: "Other team members see the request as taken. The requester sees the owner’s name and photo." },
          { title: "Start with ETA", body: "The owner marks it started and gives an ETA, which the requester sees live." },
          { title: "Deliver and rate", body: "On delivery the requester rates 1–5★, credited to the person who accepted." },
        ],
      },
      {
        type: "scenario",
        heading: "Two coffees for the boss cabin",
        persona: "Aarav, CEO",
        setting: "Board call in the boss cabin; three people on the pantry team on different floors.",
        timeline: [
          { time: "11:02:00", event: "Aarav taps Coffee → Boss Cabin. The request goes to Raj, Sunita and Imran at once." },
          { time: "11:02:05", event: "Sunita is restocking on the ground floor; Imran is serving the 2nd floor." },
          { time: "11:02:12", event: "Raj, in the 3rd-floor pantry, sees it on Telegram and taps Accept — 12 seconds after the buzz." },
          { time: "11:02:12", event: "Sunita and Imran see “Accepted by Raj” and carry on. Aarav sees Raj’s photo and ETA." },
          { time: "11:06", event: "Raj delivers. Aarav rates 5★ after the call." },
        ],
        outcome: "Nobody called, nobody shouted down the hall, nobody made a second coffee. The old way took 25 minutes, 3 calls and produced 1 cold coffee; this took 4 minutes and 0 calls.",
      },
      {
        type: "features",
        heading: "How first-accept-wins fits the rest of ZapBuzzer",
        items: [
          { title: "Requester sees the assignee", body: "Once accepted, the requester sees who is on it — name and photo — and an ETA. No “has anyone seen my request?” messages." },
          { title: "The timer starts at the buzz", body: "Every request is timed, so you know how long it waited before someone accepted and how long delivery took after that." },
          { title: "SLA interplay", body: "Each request has a deadline. Accepting does not stop the clock — the SLA is about delivery, so an accepted-but-stuck request is still visible as at risk." },
          { title: "Escalation as the safety net", body: "If nobody accepts, or the job overruns, overdue requests auto-escalate to a manager. On Pro this follows an escalation chain." },
          { title: "Analytics on acceptance", body: "Accept times feed analytics and scorecards: who is fastest to pick up, who gets 5★, when the office buzzes most." },
          { title: "Fair attribution", body: "Credit goes to the person who actually took the job, so scorecards reflect real effort." },
        ],
      },
      {
        type: "metrics",
        heading: "What first-accept-wins lets you measure",
        intro: "Because there is a single moment of ownership, these numbers become precise.",
        items: [
          { metric: "Time to accept", meaning: "Seconds from buzz to first Accept. Pilot offices averaged 32s in their first month." },
          { metric: "Accepts per staff member", meaning: "Who is picking up the most work — useful for spotting overload or under-use." },
          { metric: "Unaccepted requests", meaning: "Requests that needed reminders or escalation before anyone took them." },
          { metric: "Rating per owner", meaning: "Average stars for the requests each person accepted and delivered." },
          { metric: "On-time after accept", meaning: "Whether accepted requests went on to be delivered inside their deadline." },
        ],
      },
      {
        type: "comparison",
        heading: "Assigning versus first-accept-wins",
        columns: ["Manual assignment", "First-accept-wins"],
        rows: [
          { label: "Who decides", a: "A coordinator picks someone", b: "Whoever is free claims it" },
          { label: "Speed", a: "Waits for the coordinator, then the assignee", b: "Starts the instant anyone is free" },
          { label: "When assignee is busy", a: "Request sits until reassigned", b: "Someone else simply accepts" },
          { label: "Duplicates", a: "Possible if two people are told", b: "Prevented — one owner only" },
          { label: "Fairness", a: "Depends on the coordinator", b: "Visible in scorecards for everyone" },
        ],
      },
      {
        type: "audience",
        heading: "Benefits for everyone involved",
        items: [
          { role: "Requesters", benefit: "Know within seconds that someone is on it, and who." },
          { role: "Pantry, print, IT and facilities staff", benefit: "No double work and fair credit for every request you take." },
          { role: "Team leads", benefit: "No need to dispatch every job; the team self-organises around who is free." },
          { role: "Managers and owners", benefit: "Clear accountability, measurable response times and escalation when something stalls." },
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Keep teams small and relevant",
        body: "First-accept-wins works best when everyone who receives a request can actually do it. Put pantry staff in the pantry team and IT staff in IT, rather than broadcasting everything to everyone.",
      },
    ],
    faqs: [
      { q: "What happens if two people tap Accept at almost the same time?", a: "Only one can own the request. The first accept is recorded and the request locks to that person; everyone else sees it as already taken, so duplicate ownership is prevented." },
      { q: "Can a manager still assign a request to a specific person?", a: "First-accept-wins is the default because it is fastest. Admins manage who is on which team, which decides who can accept what — see the staff assignment page for how teams are set up." },
      { q: "Does the requester see who accepted?", a: "Yes. As soon as someone accepts, the requester sees their name and photo along with an ETA, and later rates them when the request is delivered." },
      { q: "What if nobody accepts?", a: "Notifications repeat until someone accepts. Every request also has a deadline, and overdue requests auto-escalate to a manager — on Pro through a full escalation chain." },
      { q: "Is first-accept-wins available on the Free plan?", a: "Yes, it is how every request works. Free notifies by app and email for up to 10 staff in one location; Pro adds Telegram and WhatsApp pings, the escalation chain and full analytics and scorecards." },
      { q: "Does accepting stop the SLA clock?", a: "No. The timer runs from the buzz to delivery. Accepting quickly helps, but the deadline is about the requester actually getting what they asked for." },
    ],
    related: ["features", "features/request-routing", "features/request-assignment", "sla", "notifications/multi-channel", "admin/staff-assignment", "analytics/acceptance-time", "demo"],
    cta: { title: "See first-accept-wins on your own team", body: "Start a 14-day free trial, add your pantry team, and watch the first request get picked up in seconds." },
  },

  // ───────────────────────────── REQUEST ASSIGNMENT
  {
    path: "features/request-assignment",
    title: "Request Assignment and Ownership",
    description:
      "Every ZapBuzzer request ends up with exactly one named owner. See how assignment works through teams, first-accept-wins, visible ownership and fair attribution.",
    h1: "One request, one owner, no confusion",
    eyebrow: "Feature · Request Assignment",
    lead:
      "Assignment answers the question every office asks too often: “Who’s doing this?” In ZapBuzzer, requests are assigned through teams and settled by the first person to accept — and from that moment the owner is visible to the requester, the team and management.",
    keywords: [
      "office request assignment",
      "request ownership",
      "assign office tasks to staff",
      "staff accountability tool",
      "team based assignment",
    ],
    heroVisual: "staff-queue",
    sections: [
      {
        type: "prose",
        eyebrow: "Ownership",
        heading: "Assignment that happens on its own",
        paragraphs: [
          "Traditional assignment needs a dispatcher: somebody reads the request, decides who should do it, and tells them. In an office that somebody is usually the office manager, who ends up being a human switchboard for coffee and cables.",
          "ZapBuzzer assigns in two layers. First, admins decide who belongs to which team — pantry, print room, IT, facilities, reception. That determines who is eligible for each request. Second, for each individual request, the first eligible person to tap Accept becomes the owner. No dispatcher needed.",
          "Once assigned, ownership is not a hidden field. The requester sees the owner’s name and photo, the team sees it is taken, and the dashboard shows it to managers.",
        ],
      },
      {
        type: "visual",
        visual: "staff-queue",
        heading: "The staff view",
        body: "Each staff member sees open requests for their team with an Accept button, plus the ones they already own.",
        points: [
          "Open requests waiting for an owner",
          "My accepted requests, with destination and note",
          "Start with ETA, then mark delivered",
          "Requests taken by colleagues drop off the open list",
        ],
      },
      {
        type: "workflow",
        heading: "How a request gets its owner",
        steps: [
          { title: "Team membership", body: "Admins add staff to the teams they serve. This is set once and adjusted when people join or move." },
          { title: "Eligible staff notified", body: "When a request arrives, everyone in the responsible team is pinged." },
          { title: "Owner by acceptance", body: "The first to accept is assigned. The request is now theirs." },
          { title: "Owner visible", body: "Requester and managers see who it is; colleagues see it is taken." },
          { title: "Owner credited", body: "Timing and rating are attributed to the owner’s scorecard." },
        ],
      },
      {
        type: "problem-solution",
        heading: "Dispatcher assignment versus team assignment",
        problem: {
          title: "Office manager as dispatcher",
          points: [
            "Every request passes through one busy person",
            "Requests wait when the dispatcher is in a meeting",
            "Assignee may already be busy, so the job sits",
            "No record of who was asked or when",
          ],
        },
        solution: {
          title: "ZapBuzzer team assignment",
          points: [
            "Requests go straight to the people who can do them",
            "Whoever is free claims it immediately",
            "No one is handed work they cannot get to",
            "Every assignment is time-stamped and audit-logged",
          ],
        },
      },
      {
        type: "scenario",
        heading: "The missing HDMI cable",
        persona: "Tanvi, Design",
        setting: "Client presentation in the small meeting room, laptop will not connect.",
        timeline: [
          { time: "15:28", event: "Tanvi taps IT → HDMI / adapter, notes “USB-C to HDMI”, picks Meeting Room 2." },
          { time: "15:28", event: "Both members of the IT desk are pinged." },
          { time: "15:28", event: "Priya from IT accepts. Tanvi sees her name and photo." },
          { time: "15:31", event: "Priya brings the adapter — 3 minutes after the buzz." },
        ],
        outcome: "Nobody had to decide who should go. The person nearest the cable drawer took it, and her scorecard records the fast delivery.",
      },
      {
        type: "features",
        heading: "What assignment gives you",
        items: [
          { title: "Single owner", body: "Exactly one person owns each request after acceptance." },
          { title: "Visible to the requester", body: "Name, photo and ETA replace “has anyone seen this?”." },
          { title: "Team coverage", body: "Absences do not stall requests because the whole team is eligible." },
          { title: "Fair attribution", body: "Staff get credit for what they actually delivered — the people-first part of ZapBuzzer." },
          { title: "Roles and permissions", body: "Granular permissions per role control who can manage teams and see what." },
          { title: "Audit trail", body: "Every acceptance is logged, which matters for things like courier pickups." },
        ],
      },
      {
        type: "metrics",
        heading: "Assignment health at a glance",
        items: [
          { metric: "Accepts per person", meaning: "Shows whether work is shared or falling on one person." },
          { metric: "Time to assignment", meaning: "How quickly the team claims new requests." },
          { metric: "Owner rating", meaning: "Average stars on requests each owner delivered." },
          { metric: "On-time by owner", meaning: "How often each owner delivers inside the deadline." },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Scorecards are on Pro",
        body: "Assignment and attribution work on every plan. Full analytics and staff scorecards, along with audit logs and reports, are part of Pro.",
      },
    ],
    faqs: [
      { q: "Can I pre-assign a staff member to a category?", a: "You assign staff to teams, and teams handle categories. Within a team, the first person to accept takes each request. That keeps work moving even when a particular person is busy." },
      { q: "Can staff see who accepted a request they did not take?", a: "Yes. Once a colleague accepts, the request shows as taken so nobody else starts on it." },
      { q: "Is it unfair to slower staff?", a: "Scorecards show accept time alongside ratings and on-time delivery, so they reflect quality as well as speed. The goal is fair credit, not a nag tool." },
      { q: "How do I move someone between teams?", a: "Admins manage team membership. When someone changes role, update their team and they start receiving that team’s requests." },
      { q: "Is assignment recorded for compliance?", a: "Every action is audit-logged. Audit logs and reports are included in Pro." },
    ],
    related: ["features", "features/first-accept-wins", "admin/staff-assignment", "admin/team-management", "use-cases/staff-accountability", "workflows/hdmi-request", "pricing/pro"],
    cta: { title: "Retire the human switchboard", body: "Let your teams claim their own work. Start free with up to 10 staff." },
  },

  // ───────────────────────────── REQUEST TRACKING
  {
    path: "features/request-tracking",
    title: "Office Request Tracking",
    description:
      "Track every office request from buzz to rating. Requesters see who is on it and when it will arrive; managers see every open, late and delivered request live.",
    h1: "Know where every request is, without asking",
    eyebrow: "Feature · Request Tracking",
    lead:
      "Tracking means nobody has to call to find out what is happening. Each request moves through clear stages — requested, accepted, started, delivered, rated — and everyone with a stake can see which stage it is in.",
    keywords: [
      "office request tracking",
      "track internal requests",
      "request status tracking",
      "where is my request",
      "track office service requests",
    ],
    heroVisual: "request-timeline",
    sections: [
      {
        type: "prose",
        eyebrow: "Why tracking",
        heading: "The chase call exists because there is no tracking",
        paragraphs: [
          "Most follow-up calls in an office are not complaints — they are status checks. “Did you get my print request?” “Is someone coming for the AC?” Each one interrupts the person doing the work, and the answer is usually “yes, I’m on it”.",
          "ZapBuzzer makes that answer visible. The moment a request is accepted, the requester sees who has it. When it is started, they see an ETA. When it is delivered, they get a prompt to rate it. Pilot offices cut phone calls by 87% in their first month, and much of that came from people no longer needing to ask.",
          "For managers, tracking is the same information across the whole office: what is open, who owns it, how long it has been waiting and whether it is on time.",
        ],
      },
      {
        type: "visual",
        visual: "request-timeline",
        heading: "A request’s journey, step by step",
        body: "Every request carries a timeline of time-stamped events from the moment it is buzzed.",
        points: [
          "Requested — with category, note and destination",
          "Accepted — by whom, and how fast",
          "Started — with an ETA",
          "Delivered — optionally with a photo",
          "Rated — 1 to 5 stars",
        ],
      },
      {
        type: "table",
        heading: "Who sees what",
        headers: ["Person", "What they track", "Where"],
        rows: [
          ["Requester", "Their own requests: owner, ETA, delivery", "App or web"],
          ["Staff", "Requests they own and their team’s open queue", "Mobile app on the move"],
          ["Manager", "All requests for their area, overdue ones flagged", "Dashboard"],
          ["Owner", "Everything, including cost of requests", "Owner dashboard"],
        ],
      },
      {
        type: "scenario",
        heading: "Prints before the pitch",
        persona: "Kavya, Sales Lead",
        setting: "Client pitch in 10 minutes; she needs 24 colour copies of the deck.",
        timeline: [
          { time: "10:50", event: "Kavya uploads the PDF, sets 24 copies, colour, destination Conference Room A." },
          { time: "10:50", event: "Print room accepts. Kavya sees who has it." },
          { time: "10:52", event: "Marked started with a 6-minute ETA." },
          { time: "10:57", event: "Delivered to the room. Kavya sees the delivery on her phone." },
        ],
        outcome: "Kavya never left her desk to check the printer and never called the print room. In her words: “Print jobs land at my desk before the client even sits down. Zero chase calls.”",
      },
      {
        type: "problem-solution",
        heading: "Before and after tracking",
        problem: {
          title: "No tracking",
          points: [
            "Requester calls to check; staff stop work to answer",
            "Managers find out about delays from complaints",
            "Nobody can say how long things usually take",
          ],
        },
        solution: {
          title: "With ZapBuzzer",
          points: [
            "Status, owner and ETA are always visible",
            "Overdue requests are flagged and escalated",
            "Every stage is time-stamped for analytics",
          ],
        },
      },
      {
        type: "features",
        heading: "Tracking features",
        items: [
          { title: "Live status", body: "Requests update as staff accept, start and deliver." },
          { title: "Owner and photo", body: "You know exactly who to thank — or who to ask." },
          { title: "ETA", body: "Staff give an ETA when they start, so you can plan around it." },
          { title: "Delivery proof", body: "A photo can be attached on delivery." },
          { title: "Mobile tracking", body: "Staff and requesters can accept and track on the move." },
          { title: "History", body: "Free keeps 30 days; Pro keeps full history with reports." },
        ],
      },
      {
        type: "stats",
        heading: "Tracking in pilot offices",
        items: [
          { value: "−87%", label: "phone calls" },
          { value: "96%", label: "on-time delivery" },
          { value: "1.2M", label: "requests routed to date" },
        ],
      },
      {
        type: "checklist",
        heading: "Make tracking a habit",
        items: [
          "Ask staff to tap Start with an ETA as soon as they begin",
          "Encourage delivery photos for prints, parcels and room setups",
          "Tell employees to check the app before calling",
          "Review overdue requests on the dashboard daily for the first fortnight",
        ],
      },
      {
        "type": "metrics",
        "heading": "Tracking numbers worth a weekly glance",
        "items": [
          {
            "metric": "Average accept time",
            "meaning": "How quickly requests get an owner. Pilot offices averaged 32 seconds in their first month."
          },
          {
            "metric": "On-time delivery",
            "meaning": "Share of requests delivered before their deadline; 96% in pilot offices."
          },
          {
            "metric": "Open requests by age",
            "meaning": "Anything accepted but not started for a long while is worth a look."
          },
          {
            "metric": "Escalations per week",
            "meaning": "A rising count points at a category or team that is struggling."
          }
        ]
      },
      {
        "type": "callout",
        "tone": "tip",
        "title": "Tracking cuts calls only once people trust it",
        "body": "In the first week, when someone still phones the pantry to check an order, the pantry can answer “it’s on the app, Raj has it, five minutes”. After a few answers like that, the calls stop on their own."
      },
    ],
    faqs: [
      {
        "q": "Can managers track every request, or only their team’s?",
        "a": "What a person sees depends on their role. Admins and owners typically see the whole office queue, staff see their team’s work, and requesters see their own requests."
      },
      { q: "Do requesters get notified as their request progresses?", a: "Yes. They see the owner once accepted, the ETA once started and a rating prompt once delivered." },
      { q: "Can staff update status from their phone?", a: "Yes. The mobile app lets staff accept, start and deliver requests on the move, and notifications ring through even on silent." },
      { q: "How far back can we track requests?", a: "Free keeps the last 30 days of history. Pro keeps full history and adds reports and audit logs." },
      { q: "Can managers see only their own team’s requests?", a: "Roles and permissions control what each person sees, so managers can focus on their area while the owner sees everything." },
      { q: "Is there proof that something was delivered?", a: "Staff mark the request delivered and can attach a photo. The requester then rates it, closing the loop." },
    ],
    related: ["features", "features/request-status", "features/eta-tracking", "mobile-app/request-tracking", "use-cases/track-office-requests", "use-cases/stop-office-chase-calls", "free-trial"],
    cta: { title: "Replace status calls with a status screen", body: "Try ZapBuzzer free for 14 days, with no card required and no onboarding call." },
  },

  // ───────────────────────────── REAL-TIME UPDATES
  {
    path: "features/real-time-updates",
    title: "Real-Time Request Updates",
    description:
      "ZapBuzzer pushes every change instantly — new requests, accepts, ETAs, deliveries — across app, email, Telegram and WhatsApp, so nobody works from stale information.",
    h1: "The moment something changes, the right people see it",
    eyebrow: "Feature · Real-Time Updates",
    lead:
      "Office requests are measured in minutes. An update that arrives ten minutes late is useless — the coffee is cold and the client has already sat down. ZapBuzzer pushes every change as it happens to the people who need it.",
    keywords: [
      "real time request updates",
      "live office request notifications",
      "instant staff notifications",
      "real time service updates office",
      "live request status",
    ],
    heroVisual: "notification-flow",
    sections: [
      {
        type: "prose",
        eyebrow: "Why live matters",
        heading: "Office requests do not wait for a refresh",
        paragraphs: [
          "Most office services are short. A coffee takes four minutes, an HDMI cable three, a print job a few more. If staff only learn about a request when they next open an inbox, or a requester only learns it was accepted when they walk over to check, the whole point is lost.",
          "Real-time updates in ZapBuzzer flow both ways. Staff hear about new requests the instant they are buzzed. Requesters see acceptance, start and delivery as they happen. Other team members see a request disappear from their open list the second a colleague takes it.",
        ],
      },
      {
        type: "visual",
        visual: "notification-flow",
        heading: "Updates on every channel at once",
        body: "New requests reach staff on the app, by email and — on Pro — on Telegram and WhatsApp simultaneously. Pings repeat until someone accepts.",
        points: [
          "Mobile app still rings on a locked or silenced phone",
          "Email on every plan",
          "Telegram and WhatsApp on Pro",
          "Repeats until accepted",
        ],
      },
      {
        type: "table",
        heading: "Which event updates whom",
        headers: ["Event", "Who is updated", "Why it matters"],
        rows: [
          ["Request buzzed", "Responsible team", "Someone free can act immediately"],
          ["Request accepted", "Requester, rest of team", "Requester relaxes; others skip it"],
          ["Started with ETA", "Requester", "They can plan around the arrival"],
          ["Delivered", "Requester", "Prompt to confirm and rate"],
          ["Overdue", "Manager (escalation)", "Problems surface before complaints"],
        ],
      },
      {
        type: "scenario",
        heading: "Courier at the gate",
        persona: "Neha, Reception",
        setting: "A courier is waiting at the gate with a parcel that needs a signature.",
        timeline: [
          { time: "16:10", event: "Neha taps Courier Pickup, notes “signature needed, gate 1”." },
          { time: "16:10", event: "Mailroom staff are pinged on app and WhatsApp." },
          { time: "16:11", event: "Suresh accepts; Neha sees it instantly and tells the courier someone is coming." },
          { time: "16:14", event: "Parcel logged as received; the pickup is audit-trailed." },
        ],
        outcome: "The courier was not kept waiting and Neha never had to leave the front desk to find someone.",
      },
      {
        type: "comparison",
        heading: "Live updates versus group chats",
        columns: ["WhatsApp group", "ZapBuzzer real-time"],
        rows: [
          { label: "New request", a: "Lost among other messages", b: "Dedicated alert that repeats until accepted" },
          { label: "Who took it", a: "Maybe a “ok” reply, maybe not", b: "Shown to everyone instantly" },
          { label: "ETA", a: "Ask and wait", b: "Shown when started" },
          { label: "Silent phone", a: "Missed", b: "App rings through" },
        ],
      },
      {
        type: "features",
        heading: "What keeps updates reliable",
        items: [
          { title: "Repeat until accepted", body: "One missed notification cannot strand a request." },
          { title: "Silent-mode ring-through", body: "Alerts from the mobile app get through when the phone is locked or silenced." },
          { title: "Server-side state", body: "Web and mobile always agree because the account and workspace are stored server-side." },
          { title: "99.9% uptime", body: "ZapBuzzer runs at 99.9% uptime across 200+ offices." },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Channels by plan",
        body: "Free includes app and email notifications. Telegram and WhatsApp pings are part of Pro at ₹99 per seat per month.",
      },
      {
        "type": "scenario",
        "heading": "Lunch for a release-day team",
        "persona": "Vivek, Operations",
        "setting": "Twelve engineers are heads-down; Vivek orders lunch at 12:40.",
        "timeline": [
          {
            "time": "12:40",
            "event": "Vivek picks items, adds a note about two vegetarian meals and buzzes the pantry."
          },
          {
            "time": "12:41",
            "event": "The pantry team is pinged on app and Telegram; Raj accepts. Vivek’s screen shows Raj’s name and photo."
          },
          {
            "time": "12:48",
            "event": "Raj starts with an ETA of 25 minutes. Vivek tells the team lunch lands around 1:15."
          },
          {
            "time": "1:12",
            "event": "Delivered. Vivek rates it, and the owner sees what the order cost."
          }
        ],
        "outcome": "Nobody walked to the pantry to ask. Every change reached Vivek the moment it happened."
      },
      {
        "type": "audience",
        "heading": "Who notices live updates most",
        "items": [
          {
            "role": "Executives in meetings",
            "benefit": "See that coffee is accepted without stepping out of a call."
          },
          {
            "role": "Sales before a pitch",
            "benefit": "Watch prints move to delivered while setting up the room."
          },
          {
            "role": "Pantry and print staff",
            "benefit": "See a request leave the queue the instant a colleague takes it."
          },
          {
            "role": "Office managers",
            "benefit": "A live queue instead of a stack of messages to reconcile."
          }
        ]
      },
      {
        "type": "callout",
        "tone": "info",
        "title": "Channels by plan",
        "body": "Free sends email notifications alongside the web and mobile app. Telegram and WhatsApp pings, which most staff respond to fastest, are on Pro."
      },
    ],
    faqs: [
      {
        "q": "Do I need to keep the app open to get updates?",
        "a": "No. The mobile app still rings when the phone is locked or silenced, and notifications also go out on the channels your plan supports. Opening the app shows the latest state of every request."
      },
      {
        "q": "What if two staff try to accept at the same moment?",
        "a": "First accept wins. The request goes to whoever tapped first, and everyone else sees it as taken straight away, so nobody walks to the pantry for the same order."
      },
      { q: "Will staff get updates if their phone is on silent?", a: "Yes. The ZapBuzzer mobile app is designed to keep ringing when a phone is locked or on silent, so new requests are not missed." },
      { q: "How quickly do requesters see that someone accepted?", a: "As soon as a staff member taps Accept, the requester sees their name, photo and, once started, an ETA." },
      { q: "Do updates work on both web and mobile?", a: "Yes. Because your account and workspace are stored server-side, the web app and the Android app show the same live state." },
      { q: "Can we get updates on WhatsApp on the Free plan?", a: "No. Free includes app and email notifications. Telegram and WhatsApp pings are part of Pro." },
      { q: "Are managers told when something goes wrong?", a: "Yes. Overdue requests auto-escalate to a manager, and on Pro this follows an escalation chain." },
    ],
    related: ["features", "features/request-tracking", "notifications", "notifications/push", "mobile-app/notifications", "compare/whatsapp", "pricing"],
    cta: { title: "Make your office run on live information", body: "Start a free trial and send a test request to your team’s phones." },
  },
];
