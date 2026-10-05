import type { PageContent } from "../types";

export const pages: PageContent[] = [
  // ───────────────────────────── HUB ─────────────────────────────
  {
    path: "solutions/facilities",
    title: "Facilities Request Management for Offices",
    description:
      "AC too cold, a leaking tap, chairs for Room B: ZapBuzzer routes facilities requests to the right team in one tap, times every job and escalates anything left to rot.",
    h1: "Facilities requests that get picked up, not passed around",
    eyebrow: "Facilities",
    lead:
      "Facilities work is constant and physical: temperature, lights, leaks, furniture, rooms. ZapBuzzer gives employees one tap to report it, pings the facilities team at once, and makes sure every job has an owner, a deadline and a record.",
    keywords: [
      "facilities request management",
      "office facilities requests",
      "facilities team app",
      "office maintenance requests",
      "ac complaint office",
      "facilities escalation",
    ],
    heroVisual: "escalation",
    sections: [
      {
        type: "prose",
        eyebrow: "Why facilities is different",
        heading: "The requests nobody owns until somebody shouts",
        paragraphs: [
          "Facilities requests have a habit of rotting. Someone mentions the AC in the conference room is freezing; the admin says they’ll tell maintenance; maintenance is on another floor; by the time anyone arrives the meeting is over and the complaint is forgotten, until the next meeting. Multiply that by flickering lights, a jammed door, a broken chair and a leaking pantry tap, and you have the most familiar background noise in any office.",
          "The issue is rarely the fix itself. Most facilities jobs are well within the team’s skills. The issue is that requests travel by word of mouth, nobody knows who has picked them up, and there’s no clock telling anyone they’re late. That is precisely what ZapBuzzer is built to fix.",
          "One of our earliest pilot admins put it simply: “Facilities tickets auto-escalate now. Nothing rots in someone’s DMs.” — Deepak, Admin Head. That sentence is the whole facilities pitch.",
        ],
      },
      {
        type: "problem-solution",
        heading: "From word of mouth to a working queue",
        problem: {
          title: "Today",
          points: [
            "Complaints arrive by phone, chat and corridor conversations.",
            "The facilities team doesn’t see the whole list in one place.",
            "Employees report the same issue three times because they can’t tell if anyone’s on it.",
            "Nobody notices when a job has been sitting for hours.",
          ],
        },
        solution: {
          title: "With ZapBuzzer",
          points: [
            "Employees tap Facilities, pick the issue and the room.",
            "The whole facilities team is pinged; first to accept owns it.",
            "Requesters see who’s coming and when.",
            "Each request carries a deadline, and a manager is brought in when one runs late (Pro).",
          ],
        },
      },
      {
        type: "visual",
        visual: "escalation",
        heading: "Nothing sits quietly",
        body:
          "On Pro, every facilities request runs against a deadline. If it isn’t delivered in time, it climbs your escalation chain, for example from the facilities supervisor to the admin head, until someone acts.",
      },
      {
        type: "scenario",
        heading: "Om and the 16°C conference room",
        persona: "Om, Engineer",
        setting: "Design review in Conference Room A; the AC is stuck at 16°C.",
        timeline: [
          { time: "11:02", event: "Om taps Facilities → AC too cold → Conference Room A." },
          { time: "11:02", event: "Deepak and the facilities team are pinged on the app and Telegram." },
          { time: "11:03", event: "Deepak accepts. Om sees his name, photo and ETA." },
          { time: "11:09", event: "Deepak resets the unit to 24°C and marks it delivered." },
          { time: "11:10", event: "Om rates 5★. Had it gone past 15 minutes, it would have escalated automatically." },
        ],
        outcome: "Eight minutes, no phone calls, and a timed record against Conference Room A.",
      },
      {
        type: "features",
        heading: "Explore facilities in ZapBuzzer",
        intro: "Each part of the facilities setup has a dedicated page.",
        items: [
          { title: "Facilities requests", body: "How employees raise everyday facilities issues and how the team works them. See solutions/facilities/requests." },
          { title: "AC requests", body: "Too cold, too hot, not working: the most frequent facilities complaint, handled by the clock. See solutions/facilities/ac-requests." },
          { title: "Conference room issues", body: "Chairs, lights, cleaning, temperature, before and during meetings. See solutions/facilities/conference-room-issues." },
          { title: "Maintenance requests", body: "Leaks, doors, lights and fixtures reported with a photo and location. See solutions/facilities/maintenance-requests." },
          { title: "Office equipment", body: "Whiteboard markers, extension boards, furniture moves and more. See solutions/facilities/office-equipment." },
          { title: "Facilities routing", body: "Sending each issue to the right people: housekeeping, electrical, maintenance. See solutions/facilities/routing." },
          { title: "Facilities escalation", body: "Escalation chains that make sure overdue jobs reach a manager (Pro). See solutions/facilities/escalation." },
          { title: "Facilities SLA", body: "Deadlines per issue type and on-time tracking (Pro). See solutions/facilities/sla." },
          { title: "Facilities analytics", body: "Which rooms, floors and issue types generate the most work (Pro). See solutions/facilities/analytics." },
        ],
      },
      {
        type: "workflow",
        heading: "A facilities request, start to finish",
        steps: [
          { title: "Report", body: "Employee taps Facilities, chooses the issue, adds a note or location, and taps Buzz." },
          { title: "Ping", body: "The facilities team is notified together; pings repeat until accepted." },
          { title: "Own", body: "First to accept owns it. The requester sees who and when." },
          { title: "Fix", body: "Marked started, then delivered, with a photo if useful." },
          { title: "Escalate if late", body: "On Pro, overdue requests climb the escalation chain." },
          { title: "Rate and learn", body: "The requester rates it; analytics show patterns by room and type." },
        ],
      },
      {
        type: "audience",
        heading: "Who it’s for",
        items: [
          { role: "Facilities manager", benefit: "One queue, clear owners, and data for planning maintenance." },
          { role: "Admin head", benefit: "Escalations reach you only when something is actually late." },
          { role: "Facilities staff", benefit: "Clear jobs with locations, and fair credit on scorecards." },
          { role: "Employees", benefit: "Report once, see it handled." },
          { role: "Facility companies", benefit: "Enterprise adds white-label, custom domain and multi-site options for groups and facility firms." },
        ],
      },
      {
        type: "stats",
        heading: "Pilot office results",
        items: [
          { value: "32s", label: "average accept time" },
          { value: "96%", label: "on-time delivery" },
          { value: "−87%", label: "phone calls" },
          { value: "4.8★", label: "average staff rating" },
        ],
        note: "First-month figures from pilot offices across all request types.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Plans for facilities teams",
        body:
          "Free covers one location and up to 10 staff with email notifications. Pro (₹99 per seat per month) adds multi-location, Telegram and WhatsApp pings, SLA with escalation chains, analytics and audit reports. Enterprise suits groups and facility companies.",
      },
      {
        type: "prose",
        heading: "How facilities teams usually roll it out",
        paragraphs: [
          "Most offices start with five or six facilities items, the ones that come up every week: AC too cold or hot, cleaning needed, light out, washroom issue, extra chairs and a general maintenance item. They add the facilities team, housekeeping and maintenance staff, and ask employees to use ZapBuzzer instead of calling the admin desk.",
          "In the first week, facilities staff get used to accepting from their phones. The mobile app rings through even on silent, which matters for people who are on their feet all day. By the second week the admin desk notices fewer calls, and by the end of the month there is enough data to see which rooms and issues take the most time.",
          "Because ZapBuzzer also covers pantry, print room, IT and courier, many offices then bring those teams in as well, so employees have one app for every internal request.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is ZapBuzzer a CAFM or full facilities management system?",
        a: "No. It doesn’t manage leases, planned maintenance schedules or asset registers. It handles the reactive, everyday requests employees raise, and makes sure each one is owned and finished on time.",
      },
      {
        q: "Can facilities share the app with IT and pantry?",
        a: "Yes. One workspace covers facilities, IT, pantry, print room and courier, with each request routed only to the right team.",
      },
      {
        q: "Does it work for outsourced facility teams?",
        a: "Yes. Add the outsourced staff to the facilities team and they receive pings like anyone else. Enterprise is designed for groups and facility companies running many sites.",
      },
      {
        q: "What stops a facilities request being ignored?",
        a: "Notifications repeat until someone accepts, and on Pro every request has a deadline after which it escalates to a manager automatically.",
      },
      {
        q: "How quickly can we start?",
        a: "Most offices are running in an afternoon: add the team, set up a few facilities items and share the app. The 14-day trial needs no credit card.",
      },
    ],
    related: [
      "solutions/facilities/ac-requests",
      "solutions/facilities/escalation",
      "solutions/facilities/maintenance-requests",
      "use-cases/facilities-manager",
      "solutions/facilities/requests",
      "solutions/facilities/sla",
      "solutions/facilities/routing",
      "pricing",
    ],
    cta: {
      title: "Stop facilities requests rotting in DMs",
      body: "Start the 14-day free trial and give your facilities team one queue with built-in deadlines.",
    },
  },

  // ───────────────────────── REQUESTS ─────────────────────────
  {
    path: "solutions/facilities/requests",
    title: "Facilities Requests Employees Actually Raise",
    description:
      "Employees report lights, temperature, cleaning and furniture issues in one tap. ZapBuzzer pings the facilities team, shows who’s coming and keeps a timed record.",
    h1: "Report it once, see it handled",
    eyebrow: "Facilities Requests",
    lead:
      "Most employees don’t report facilities problems because they don’t know who to tell or whether it’ll make a difference. ZapBuzzer makes reporting a single tap and shows them the result.",
    keywords: [
      "facilities requests",
      "report office issue",
      "office facilities complaint",
      "facilities request app",
      "employee facilities reporting",
    ],
    heroVisual: "mobile-app",
    sections: [
      {
        type: "prose",
        heading: "Under-reported, over-repeated",
        paragraphs: [
          "Facilities issues suffer from two opposite problems. Many go unreported because people assume someone else has already said something. Others get reported five times by five people, each through a different channel, wasting everyone’s time.",
          "A single request route fixes both. When reporting takes one tap, people do it. When the request shows who has accepted it, people stop re-reporting.",
        ],
      },
      {
        type: "visual",
        visual: "mobile-app",
        heading: "Facilities in the request grid",
        body: "Employees see facilities items next to coffee and print: AC, lights, cleaning, furniture, maintenance. Pick one, add a room, tap Buzz.",
      },
      {
        type: "table",
        heading: "A starter facilities catalogue",
        headers: ["Item", "Typical note"],
        rows: [
          ["AC too cold / too hot", "Room and current temperature"],
          ["Light not working", "Floor and nearest desk"],
          ["Cleaning needed", "“Coffee spill, 3rd floor pantry”"],
          ["Extra chairs", "How many and which room"],
          ["Washroom issue", "Which washroom, what’s wrong"],
          ["Maintenance", "Leak, door, fixture, with photo"],
        ],
      },
      {
        type: "scenario",
        heading: "A spill before the client lunch",
        persona: "Vivek, Operations",
        setting: "Lunch for 12 clients in the 3rd-floor meeting room at 1:00; coffee spilled on the carpet.",
        timeline: [
          { time: "12:40", event: "Vivek taps Facilities → Cleaning needed, note “coffee spill, 3rd floor meeting room”." },
          { time: "12:41", event: "Sunita from housekeeping accepts." },
          { time: "12:48", event: "Spill cleaned, marked delivered with a photo." },
        ],
        outcome: "The room is ready by 12:50, and Vivek can focus on the lunch order he’s also tracking in ZapBuzzer.",
      },
      {
        type: "features",
        heading: "What makes it work",
        items: [
          { title: "Visible ownership", body: "Once accepted, everyone can see who has it. No duplicate reports." },
          { title: "Location in every request", body: "Rooms and floors travel with the request." },
          { title: "Photos on delivery", body: "Staff can attach a photo showing it’s done." },
          { title: "Ratings", body: "The requester confirms quality, not just completion." },
        ],
      },
      {
        type: "checklist",
        heading: "Rolling out facilities requests",
        items: [
          "Start with six to eight common issues.",
          "Use the same room names as your signage.",
          "Tell staff: if it’s broken, buzz it, don’t message it.",
          "Have the facilities team accept from their phones.",
          "Review the first week’s requests and adjust items.",
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Fewer channels, fewer misses",
        body: "Retire the facilities WhatsApp group once ZapBuzzer is live. Keeping both means requests split across two places.",
      },
      {
        type: "prose",
        heading: "What a good facilities request looks like",
        paragraphs: [
          "The best requests answer two questions for the person walking over: where exactly, and what exactly. “Light out” on its own sends a technician searching a floor. “Light out, above desk row 4, 2nd floor” sends them straight there with a ladder. Encourage employees to add the location and one useful detail.",
          "On the staff side, the habit to build is accept first, then go. Accepting immediately tells the requester and the rest of the team that it is handled, even if the walk takes a few minutes. Marking it started with an ETA is useful for longer jobs so nobody follows up.",
          "When the job is done, a quick photo on delivery closes the loop, especially for jobs where the requester isn’t standing there to see it.",
        ],
      },
      {
        "type": "comparison",
        "heading": "Facilities WhatsApp group vs. ZapBuzzer",
        "columns": [
          "Office WhatsApp group",
          "ZapBuzzer requests"
        ],
        "rows": [
          {
            "label": "Ownership",
            "a": "Several thumbs-up, nobody actually goes",
            "b": "Named ownership for whoever taps Accept first"
          },
          {
            "label": "Follow-up",
            "a": "“Any update?” messages",
            "b": "Status and ETA visible on the request"
          },
          {
            "label": "Lost messages",
            "a": "Buried under lunch plans",
            "b": "Every request stays in the queue until delivered"
          },
          {
            "label": "Learning",
            "a": "None",
            "b": "Analytics by item, location and time on Pro"
          }
        ]
      },
      {
        "type": "audience",
        "heading": "Who raises and who handles facilities requests",
        "items": [
          {
            "role": "Employees",
            "benefit": "One place to report anything physical, from a flickering light to a jammed drawer."
          },
          {
            "role": "Reception",
            "benefit": "Can raise requests on behalf of visitors instead of making calls."
          },
          {
            "role": "Housekeeping and maintenance",
            "benefit": "Clear jobs with destination and notes, delivered to their phones."
          },
          {
            "role": "Office manager",
            "benefit": "Sees what is open right now without asking around."
          }
        ]
      },
      {
        "type": "callout",
        "tone": "info",
        "title": "Start on Free with one floor",
        "body": "Free covers up to 10 staff at one location with email notifications and 30 days of history. Move to Pro for Telegram and WhatsApp pings, SLAs and full analytics."
      },
    ],
    faqs: [
      {
        "q": "Do employees need training to raise a request?",
        "a": "Very little. They tap an item, pick a destination, add a note if needed and tap Buzz. Most offices just share a short message with the sign-up link."
      },
      {
        q: "Can employees attach a photo of the problem?",
        a: "Photos are part of delivery confirmation by staff. Employees describe the issue and location in the note when they request.",
      },
      {
        q: "What if two people report the same issue?",
        a: "Once one is accepted, staff can handle both from the same visit. Visible ownership tends to reduce duplicates quickly.",
      },
      {
        q: "Can visitors or contractors raise requests?",
        a: "Requests are raised by members of your workspace. Reception can raise them on a visitor’s behalf.",
      },
      {
        q: "Is there a limit on requests?",
        a: "No request limit is listed on any plan. Free limits staff to 10 and one location; Pro is unlimited staff.",
      },
    ],
    related: [
      "solutions/facilities",
      "solutions/facilities/maintenance-requests",
      "solutions/facilities/routing",
      "features/one-tap-requests",
      "use-cases/reduce-whatsapp-requests",
      "mobile-app",
      "free-trial",
    ],
    cta: {
      title: "Make reporting a one-tap habit",
      body: "Set up your facilities catalogue today and see what employees have been putting up with.",
    },
  },

  // ───────────────────────── AC ─────────────────────────
  {
    path: "solutions/facilities/ac-requests",
    title: "AC Requests: Too Cold, Too Hot, Not Working",
    description:
      "Conference room at 16°C again? ZapBuzzer turns AC complaints into one-tap requests with a deadline, so the facilities team fixes it before the meeting ends.",
    h1: "The AC complaint, fixed while you’re still in the room",
    eyebrow: "AC Requests",
    lead:
      "AC is the most common facilities complaint in Indian offices and the most likely to be ignored. With ZapBuzzer, “too cold in Room A” becomes a timed request with an owner, and if it isn’t sorted in 15 minutes, a manager hears about it.",
    keywords: [
      "ac request office",
      "ac too cold complaint",
      "office temperature request",
      "air conditioning facilities request",
      "conference room ac",
    ],
    heroVisual: "sla-timer",
    sections: [
      {
        type: "prose",
        heading: "Why AC complaints get lost",
        paragraphs: [
          "Temperature complaints are frequent, mild and easy to dismiss individually. Nobody wants to be the person who rings maintenance about being chilly. So people bring jackets to meetings, or prop doors open, and the room stays at 16°C for weeks.",
          "When the complaint is one tap, people report it. When there’s a deadline, it gets fixed. ZapBuzzer’s canonical example is exactly this: Om, an engineer, taps Facilities when the conference room AC is stuck at 16°C; Deepak is pinged; if it isn’t fixed in 15 minutes, it escalates.",
        ],
      },
      {
        type: "scenario",
        heading: "Stuck at 16°C",
        persona: "Om, Engineer",
        setting: "Conference Room A, design review, everyone in jackets.",
        timeline: [
          { time: "11:02", event: "Om taps Facilities → AC too cold → Conference Room A." },
          { time: "11:03", event: "Deepak accepts; a 15-minute deadline is running." },
          { time: "11:09", event: "Remote found, set to 24°C. Marked delivered." },
          { time: "11:10", event: "Om rates 5★." },
        ],
        outcome: "Fixed in eight minutes. If Deepak had been held up, the request would have escalated at 11:17.",
      },
      {
        type: "visual",
        visual: "sla-timer",
        heading: "A countdown on every AC request",
        body: "On Pro, the deadline is visible to the team and the manager. As it approaches, the request stands out; when it passes, escalation starts automatically.",
      },
      {
        type: "table",
        heading: "AC request types",
        headers: ["Item", "What to note", "Typical fix"],
        rows: [
          ["Too cold", "Room, current setting", "Adjust setpoint, fan speed"],
          ["Too hot", "Room, how long", "Setpoint, check filter, unit on"],
          ["Not working", "Any display error", "Power, reset, call vendor"],
          ["Leaking / noisy", "Where it drips", "Maintenance visit"],
        ],
      },
      {
        type: "features",
        heading: "Built-in help for AC complaints",
        items: [
          { title: "Room-specific requests", body: "Each complaint is tied to a room, building a history per unit." },
          { title: "15-minute style deadlines", body: "Set a short SLA for comfort issues on Pro." },
          { title: "Escalation", body: "Overdue AC requests reach the facilities manager or admin head." },
          { title: "Patterns", body: "Analytics show which rooms complain most and at what time." },
        ],
      },
      {
        type: "metrics",
        heading: "What AC data tells you",
        items: [
          { metric: "Complaints per room", meaning: "Persistent ones may need servicing or a thermostat lock." },
          { metric: "Time of day", meaning: "Afternoon spikes often mean the morning setpoint is wrong." },
          { metric: "Fix time", meaning: "Long fixes suggest remotes or controls are hard to find." },
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Keep remotes where staff can find them",
        body: "Many AC fixes are a remote and a button. If delivery time is long, check where the remotes live.",
      },
      {
        type: "prose",
        heading: "The AC setpoint debate, settled by data",
        paragraphs: [
          "Every office has the person who wants 20°C and the person who wants 26°C. ZapBuzzer doesn’t settle that argument, but it does show which rooms generate complaints in which direction and at what time. If one meeting room gets “too cold” requests every morning and “too hot” every afternoon, that is a schedule problem, not a people problem.",
          "Use the request history to agree a sensible default per room with the facilities team, then measure whether complaints drop. It is a small change that can save a lot of corridor grumbling.",
        ],
      },
      {
        "type": "workflow",
        "heading": "Handling an AC complaint end to end",
        "steps": [
          {
            "title": "Pick too cold or too warm",
            "body": "The employee chooses the right AC item and the room, so the technician knows what to adjust before arriving."
          },
          {
            "title": "Facilities is pinged on every channel",
            "body": "On Pro, the team gets app, Telegram, WhatsApp and email pings at once, repeating until someone accepts."
          },
          {
            "title": "Adjust and confirm",
            "body": "The technician changes the setting or checks the unit, then marks it delivered."
          },
          {
            "title": "Rate after the room settles",
            "body": "The requester rates once the room is comfortable, so the rating reflects the result, not just the visit."
          }
        ]
      },
      {
        "type": "checklist",
        "heading": "Note template for AC requests",
        "items": [
          "Room or zone name as it appears on the door.",
          "Too cold or too warm, and roughly since when.",
          "Whether a meeting is running and until what time.",
          "Anything unusual: dripping water, noise, a smell."
        ]
      },
    ],
    faqs: [
      {
        "q": "Can several people complain about the same room?",
        "a": "They can, and the queue will show multiple requests for that room. Staff can deliver one and close the duplicates with a note; the volume itself is useful data about that room."
      },
      {
        q: "Can ZapBuzzer control the AC directly?",
        a: "No. ZapBuzzer routes the request to people; it doesn’t connect to building systems. A facilities team member makes the change.",
      },
      {
        q: "Can AC requests escalate to the building’s vendor?",
        a: "Escalation goes to people in your escalation chain. If a vendor contact is part of your team in ZapBuzzer, they can be included.",
      },
      {
        q: "What deadline should AC requests have?",
        a: "Many offices use around 15 minutes for comfort issues in meeting rooms and longer for open floors. SLA deadlines are a Pro feature.",
      },
      {
        q: "Can I see which rooms are always cold?",
        a: "Yes. Every request records its destination, and Pro analytics shows volume by location and time.",
      },
    ],
    related: [
      "solutions/facilities",
      "solutions/facilities/conference-room-issues",
      "solutions/facilities/sla",
      "workflows/ac-issue",
      "sla/timers",
      "use-cases/facilities-manager",
      "pricing/pro",
    ],
    cta: {
      title: "No more jackets in meetings",
      body: "Add AC requests to your facilities catalogue and put a 15-minute clock on them.",
    },
  },

  // ───────────────────────── CONFERENCE ROOM ─────────────────────────
  {
    path: "solutions/facilities/conference-room-issues",
    title: "Conference Room Issues: Chairs, Lights, Cleaning",
    description:
      "Missing chairs, dirty tables, dim lights or a freezing room. ZapBuzzer gets facilities to the conference room fast, alongside IT for display and cable problems.",
    h1: "A conference room that’s ready when your guests arrive",
    eyebrow: "Conference Rooms",
    lead:
      "Conference rooms take a beating: leftover cups, too few chairs, a light out, the AC on full blast. ZapBuzzer lets anyone in the room request facilities help in one tap and see when it’ll arrive.",
    keywords: [
      "conference room issues",
      "meeting room facilities request",
      "conference room cleaning request",
      "extra chairs meeting room",
      "meeting room setup request",
    ],
    heroVisual: "request-timeline",
    sections: [
      {
        type: "prose",
        heading: "The room is the first impression",
        paragraphs: [
          "Clients judge the meeting by the room before anyone has spoken. Cups from the last meeting, a whiteboard covered in someone else’s diagram, two chairs short: each is small, and each is avoidable if the right person is told in time.",
          "ZapBuzzer handles the facilities side of the room: cleaning, chairs, lights, temperature. The IT side, displays, cables and video kits, routes separately to IT. Employees don’t need to know which is which.",
        ],
      },
      {
        type: "visual",
        visual: "request-timeline",
        heading: "From “room needs clearing” to delivered",
        body: "The requester sees each step: accepted by name, started with ETA, delivered. No walking to reception to ask.",
      },
      {
        type: "table",
        heading: "Conference room issues and who handles them",
        headers: ["Issue", "Routes to"],
        rows: [
          ["Clear and wipe table", "Housekeeping"],
          ["Extra chairs", "Facilities"],
          ["Light out", "Maintenance / electrical"],
          ["AC too cold or hot", "Facilities"],
          ["Display or projector", "IT"],
          ["Water and glasses", "Pantry"],
        ],
      },
      {
        type: "scenario",
        heading: "Board meeting prep",
        persona: "Aarav’s EA",
        setting: "Board meeting at 11 in the Board Room; previous meeting ran until 10:45.",
        timeline: [
          { time: "10:46", event: "EA taps Facilities → Clear room, and Pantry → Water for 8, both for the Board Room." },
          { time: "10:47", event: "Housekeeping and pantry accept separately." },
          { time: "10:53", event: "Room cleared, water set out. Both marked delivered." },
        ],
        outcome: "Room ready seven minutes before the board arrives, without a single phone call.",
      },
      {
        type: "features",
        heading: "Why it works for rooms",
        items: [
          { title: "Cross-team in one app", body: "Facilities, IT and pantry requests for the same room, each to the right team." },
          { title: "Ahead-of-time requests", body: "Raise a setup request before the meeting with a note on timing." },
          { title: "Room history", body: "See every request for a room to spot recurring problems." },
          { title: "Fast acceptance", body: "Pilot offices averaged 32 seconds to accept across request types." },
        ],
      },
      {
        type: "checklist",
        heading: "A room-ready routine",
        items: [
          "Add Clear room, Extra chairs and Light out as facilities items.",
          "Ask EAs and hosts to buzz setup 15 minutes before key meetings.",
          "Check the Board Room’s request history monthly.",
          "Pair with IT items so display issues go straight to IT.",
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Not a room booking system",
        body: "ZapBuzzer doesn’t book rooms. It makes sure the room you booked is ready and working.",
      },
      {
        type: "prose",
        heading: "Handover between meetings",
        paragraphs: [
          "The hardest moment for a conference room is the gap between back-to-back meetings. The first meeting overruns, leaves cups and notes behind, and the next host walks in with a client two minutes later. A quick Clear room request raised by the outgoing host, or by the next host on arrival, gives housekeeping the best chance to reset the room in time.",
          "Some offices make this a habit for their main rooms: whoever books the Board Room buzzes a reset when they leave. It costs a single tap and keeps the room in a state you’d be happy for a client to see.",
        ],
      },
      {
        "type": "table",
        "heading": "Who to route each room issue to",
        "intro": "A starting map; adjust for how your teams are actually split.",
        "headers": [
          "Issue",
          "Team",
          "Note to include"
        ],
        "rows": [
          [
            "Room too cold or too warm",
            "Facilities",
            "Room name and how long the meeting runs"
          ],
          [
            "Room needs clearing",
            "Housekeeping",
            "When the next meeting starts"
          ],
          [
            "Water and glasses for guests",
            "Pantry",
            "Number of people"
          ],
          [
            "Projector or HDMI not working",
            "IT desk",
            "Laptop type and adapter needed"
          ],
          [
            "Chairs short",
            "Facilities",
            "How many extra"
          ]
        ]
      },
      {
        "type": "metrics",
        "heading": "Room numbers to watch",
        "items": [
          {
            "metric": "Requests per room",
            "meaning": "Shows which rooms fail most and might need fixing properly."
          },
          {
            "metric": "Turnaround between meetings",
            "meaning": "How fast rooms are cleared when one meeting follows another."
          },
          {
            "metric": "Requests in the 10 minutes before the hour",
            "meaning": "A spike here means rooms are being checked too late."
          }
        ]
      },
      {
        "type": "callout",
        "tone": "tip",
        "title": "Check the room before the guests arrive",
        "body": "For board meetings or client visits, buzz the room-setup request well ahead of time rather than at five to the hour. The request still gets a named owner and a delivered confirmation, without a scramble."
      },
    ],
    faqs: [
      {
        "q": "Can reception raise room requests for visitors?",
        "a": "Yes. Anyone with access can raise a request and pick the room as the destination, so reception can ask for water or extra chairs for arriving guests."
      },
      {
        q: "Can I request room setup in advance?",
        a: "Yes. Raise the request ahead of time with a note like “ready by 11:00”. The team sees it in the queue and accepts when they can schedule it.",
      },
      {
        q: "Does a single request go to both IT and facilities?",
        a: "Each request routes by its item. For a display issue and a cold room, raise two quick requests, and each team gets its own.",
      },
      {
        q: "Can we link this to our calendar?",
        a: "ZapBuzzer doesn’t list calendar integrations. Enterprise includes REST API and webhooks; talk to us about specific needs.",
      },
      {
        q: "How do I know which rooms need attention?",
        a: "Request history records the room for every request, and Pro analytics breaks volume down by location.",
      },
    ],
    related: [
      "solutions/facilities",
      "solutions/facilities/ac-requests",
      "solutions/it-support/meeting-room-support",
      "solutions/pantry",
      "features/request-tracking",
      "use-cases/office-manager",
      "demo",
    ],
    cta: {
      title: "Make every room meeting-ready",
      body: "Try ZapBuzzer free and let hosts summon facilities, IT and pantry from one app.",
    },
  },

  // ───────────────────────── MAINTENANCE ─────────────────────────
  {
    path: "solutions/facilities/maintenance-requests",
    title: "Office Maintenance Requests with Owners",
    description:
      "Leaks, broken doors, flickering lights, wobbly chairs. ZapBuzzer gives every maintenance request an owner and a deadline, with photo confirmation when it’s done.",
    h1: "Small repairs, finished instead of forgotten",
    eyebrow: "Maintenance",
    lead:
      "Reactive maintenance is where facilities lists grow quietly. ZapBuzzer gives each repair a named owner from the moment someone accepts it, a clock, and a delivered photo when it’s finished.",
    keywords: [
      "office maintenance requests",
      "maintenance request app",
      "report office repair",
      "reactive maintenance office",
      "facilities repair tracking",
    ],
    heroVisual: "delivery",
    sections: [
      {
        type: "prose",
        heading: "Reactive, not planned",
        paragraphs: [
          "ZapBuzzer is for reactive maintenance: things employees notice and report. A dripping tap in the 3rd-floor pantry, a door that won’t latch, a flickering tube light over desk row 4. It isn’t a planned-maintenance scheduler or a CAFM system, and it won’t track AMC contracts.",
          "For reactive jobs, what matters is that someone owns it and that it’s visibly done. First-accept-wins gives ownership; delivery confirmation with an optional photo shows completion.",
        ],
      },
      {
        type: "visual",
        visual: "delivery",
        heading: "Proof it’s fixed",
        body: "Staff mark the job delivered and can attach a photo, such as the repaired latch or the new tube light. The requester rates it.",
      },
      {
        type: "scenario",
        heading: "The pantry tap",
        persona: "Raj, Pantry",
        setting: "3rd-floor pantry tap dripping onto the counter.",
        timeline: [
          { time: "9:30", event: "Raj taps Facilities → Maintenance, note “pantry tap dripping, 3rd floor”." },
          { time: "9:32", event: "Imran, the maintenance technician, accepts and marks a 20-minute ETA." },
          { time: "9:50", event: "Washer replaced, photo attached, delivered." },
        ],
        outcome: "Fixed before the 10 o’clock coffee rush. The request shows in history if the tap fails again.",
      },
      {
        type: "table",
        heading: "Common maintenance items",
        headers: ["Item", "Suggested deadline", "Note"],
        rows: [
          ["Leak", "30 minutes", "Water damage spreads"],
          ["Light out", "Same day", "Floor and desk row"],
          ["Door / lock", "1 hour", "Security relevance"],
          ["Broken furniture", "Same day", "Remove from use"],
        ],
      },
      {
        type: "features",
        heading: "What helps maintenance teams",
        items: [
          { title: "Started with ETA", body: "Longer jobs show a realistic ETA, so nobody chases." },
          { title: "Escalation on Pro", body: "Overdue repairs go up the chain automatically." },
          { title: "History per location", body: "Repeat failures are easy to spot." },
          { title: "Audit trail", body: "Every action is logged with who and when." },
        ],
      },
      {
        type: "metrics",
        heading: "Maintenance metrics",
        items: [
          { metric: "Open repairs", meaning: "What’s still outstanding right now." },
          { metric: "Repeat locations", meaning: "Same fixture failing again and again." },
          { metric: "Time to fix", meaning: "By item type, to set fair deadlines." },
        ],
      },
      {
        type: "callout",
        tone: "warning",
        title: "Emergencies",
        body: "For safety emergencies, the mobile app has one-tap emergency and security summon. Use your building’s emergency procedures alongside it.",
      },
      {
        type: "prose",
        heading: "Turning repeat repairs into planned fixes",
        paragraphs: [
          "Reactive maintenance data is the best input you have for planned maintenance. When the same pantry tap, door closer or tube light appears in the history three times in a month, it is cheaper to replace the part properly than to keep sending someone to patch it.",
          "ZapBuzzer won’t schedule that planned work for you, but it will show you where to look. A monthly glance at maintenance requests by location gives your facilities manager a short list of fixtures that deserve a proper fix, backed by dates, times and photos from each visit.",
          "It also protects the team. When someone says “that light has been broken for weeks”, the history shows exactly when it was reported, who fixed it and how it was rated.",
        ],
      },
      {
        "type": "workflow",
        "heading": "From report to verified repair",
        "steps": [
          {
            "title": "Report in seconds",
            "body": "Someone notices the loose door handle in the 2nd-floor washroom, taps the maintenance item and adds a short note."
          },
          {
            "title": "Technician accepts",
            "body": "The maintenance team is pinged; the first to accept owns the job, so it doesn’t sit with two people each assuming the other has it."
          },
          {
            "title": "Start with an ETA",
            "body": "If the job needs a tool from the basement store, the ETA says so and the requester stops wondering."
          },
          {
            "title": "Close with a photo",
            "body": "A delivered photo shows the fix, and the requester’s rating confirms it actually works."
          }
        ]
      },
      {
        "type": "comparison",
        "heading": "Maintenance register vs. maintenance requests",
        "columns": [
          "Paper register at reception",
          "ZapBuzzer request"
        ],
        "rows": [
          {
            "label": "Reporting",
            "a": "Walk to reception and write it down",
            "b": "Tap from your desk or phone"
          },
          {
            "label": "Who picks it up",
            "a": "Whoever reads the register next",
            "b": "First technician to accept, named on the request"
          },
          {
            "label": "Status",
            "a": "Unknown until you walk past",
            "b": "Accepted, started and delivered, visible to the requester"
          },
          {
            "label": "History",
            "a": "Pages nobody searches",
            "b": "Timed records by item and location"
          }
        ]
      },
      {
        "type": "audience",
        "heading": "Who maintenance requests help",
        "items": [
          {
            "role": "Employees",
            "benefit": "Report a fault once and see that someone owns it."
          },
          {
            "role": "Technicians",
            "benefit": "Clear jobs with location and notes, and credit for each fix."
          },
          {
            "role": "Admin head",
            "benefit": "A record of recurring faults to take to the landlord or vendor."
          }
        ]
      },
    ],
    faqs: [
      {
        "q": "What if the fix needs the building management or landlord?",
        "a": "The technician can note that in the request and keep it open while waiting. The timed history then becomes useful evidence when raising the issue with the building."
      },
      {
        "q": "Can maintenance requests have a deadline?",
        "a": "On Pro, every item can carry an SLA and overdue requests auto-escalate to a manager. Free tracks the request but does not include SLAs or escalation."
      },
      {
        q: "Can ZapBuzzer schedule planned maintenance?",
        a: "No. It handles reactive requests. Planned maintenance schedules belong in a dedicated facilities system.",
      },
      {
        q: "Can external vendors receive maintenance requests?",
        a: "If the vendor’s staff are added to your workspace in the maintenance team, they get pings like any staff member.",
      },
      {
        q: "Is there a record of who fixed what?",
        a: "Yes. Every request shows who accepted and delivered it, and every action is audit-logged.",
      },
      {
        q: "Can a job be marked as needing parts?",
        a: "Staff can mark it started with an ETA and add context. How you handle parts ordering stays in your normal process.",
      },
    ],
    related: [
      "solutions/facilities",
      "solutions/facilities/requests",
      "solutions/facilities/escalation",
      "features/delivery-confirmation",
      "workflows/emergency-summon",
      "admin/audit-logs",
      "free-trial",
    ],
    cta: {
      title: "Give every repair an owner",
      body: "Start free and see your outstanding maintenance list in one place by the end of the day.",
    },
  },

  // ───────────────────────── EQUIPMENT ─────────────────────────
  {
    path: "solutions/facilities/office-equipment",
    title: "Office Equipment Requests: Supplies and Moves",
    description:
      "Extension boards, whiteboard markers, desk moves and extra chairs. Request office equipment in one tap and track it to your desk with ZapBuzzer.",
    h1: "From extension boards to desk moves, ask once",
    eyebrow: "Office Equipment",
    lead:
      "Every office has a cupboard of things people need now and then: extension boards, markers, staplers, footrests, a spare chair. ZapBuzzer turns each into a one-tap request that the admin or facilities team delivers.",
    keywords: [
      "office equipment requests",
      "office supplies request app",
      "desk move request",
      "extension board request",
      "facilities equipment request",
    ],
    heroVisual: "catalog",
    sections: [
      {
        type: "prose",
        heading: "The office cupboard, made requestable",
        paragraphs: [
          "Office equipment requests are low drama but high volume. Individually they take seconds; collectively they eat the admin team’s day in calls and interruptions. A catalogue turns them into a queue the team can work through in order.",
          "This isn’t procurement. ZapBuzzer won’t raise purchase orders. It gets things already in the building to the person who needs them, and tells the owner what is being used.",
        ],
      },
      {
        type: "visual",
        visual: "catalog",
        heading: "A catalogue employees can scan in seconds",
        body: "The same grid style used for pantry items works for equipment: tap Extension board, add a desk number, done.",
      },
      {
        type: "table",
        heading: "Starter equipment catalogue",
        headers: ["Item", "Team", "Typical delivery"],
        rows: [
          ["Extension board", "Facilities", "To desk"],
          ["Whiteboard markers", "Admin", "To room"],
          ["Extra chair", "Facilities", "To room or desk"],
          ["Desk move", "Facilities", "Scheduled"],
          ["Stationery pack", "Admin", "To desk"],
        ],
      },
      {
        type: "scenario",
        heading: "New joiner, day one",
        persona: "Ananya, new joiner in Marketing",
        setting: "First day; desk has no extension board and no chair cushion.",
        timeline: [
          { time: "10:15", event: "Ananya taps Facilities → Extension board, desk 2-08." },
          { time: "10:16", event: "Suresh accepts." },
          { time: "10:22", event: "Delivered. Ananya rates 5★." },
        ],
        outcome: "A good first impression of the office, and no need to know who to ask.",
      },
      {
        type: "features",
        heading: "Why owners like it",
        items: [
          { title: "Spend visibility", body: "Owners can see request cost where items have one; other roles don’t." },
          { title: "Demand data", body: "What gets requested most tells you what to stock." },
          { title: "Fewer interruptions", body: "Admin works a queue instead of answering calls." },
          { title: "Roles", body: "Decide who can request which items." },
        ],
      },
      {
        type: "checklist",
        heading: "Setting up equipment items",
        items: [
          "List what lives in the admin cupboard.",
          "Separate quick items from scheduled ones like desk moves.",
          "Set a cost on items where you want spend visibility.",
          "Review monthly demand and restock accordingly.",
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "IT hardware lives with IT",
        body: "Mice, chargers and headsets usually route to IT. See the IT hardware requests page for that setup.",
      },
      {
        type: "prose",
        heading: "Quick items vs. scheduled items",
        paragraphs: [
          "Equipment requests fall into two groups. Quick items, like an extension board or a pack of markers, should be delivered within minutes and suit a short deadline. Scheduled items, like a desk move or a set of chairs for an event, need a time agreed in advance and suit a note with the date.",
          "Keeping them as separate catalogue items stops quick requests from waiting behind big jobs and gives the team a realistic view of their day. It also makes analytics cleaner: you can see how fast quick items arrive without desk moves skewing the average.",
          "For owners, attaching a cost to items such as chairs or monitors gives a running view of spend that is otherwise scattered across petty cash and admin notebooks.",
        ],
      },
      {
        "type": "workflow",
        "heading": "How an equipment request reaches the desk",
        "steps": [
          {
            "title": "Pick the item",
            "body": "An employee taps Office Equipment and chooses, say, a monitor stand or extension board, then picks their desk or room as the destination."
          },
          {
            "title": "The team is pinged",
            "body": "Whoever holds the supplies cupboard is notified at once, with repeats until someone accepts."
          },
          {
            "title": "Accept and fetch",
            "body": "The first free staff member accepts, so the requester sees a name, a photo and an ETA instead of wondering if anyone read it."
          },
          {
            "title": "Deliver with proof",
            "body": "A photo of the item at the desk can be attached, and the requester rates the delivery."
          }
        ]
      },
      {
        "type": "metrics",
        "heading": "Equipment numbers worth a monthly look",
        "items": [
          {
            "metric": "Most-requested items",
            "meaning": "Tells you what to keep more of in the cupboard."
          },
          {
            "metric": "Requests per new joiner",
            "meaning": "If day-one kits keep needing extras, change the standard kit."
          },
          {
            "metric": "Delivery time by floor",
            "meaning": "Highlights floors that need their own small supply shelf."
          },
          {
            "metric": "Request cost (owner-only)",
            "meaning": "Where items carry a cost, the owner sees spend without others seeing it."
          }
        ]
      },
      {
        "type": "callout",
        "tone": "info",
        "title": "Not an inventory system",
        "body": "ZapBuzzer records who asked for what, who delivered it and when. It does not count stock, so pair it with whatever you already use for stock-taking."
      },
    ],
    faqs: [
      {
        "q": "Can employees request something that isn’t in the catalogue?",
        "a": "Add a general item such as “Other equipment” with a note, so odd requests still reach the right team. If the same note keeps appearing, turn it into its own catalogue item."
      },
      {
        "q": "Can equipment be delivered to a meeting room instead of a desk?",
        "a": "Yes. The requester chooses a destination, so a spare chair can go to Conference Room B as easily as to a desk."
      },
      {
        q: "Can ZapBuzzer track stock levels?",
        a: "No. It tracks requests, not inventory. Request counts by item are a good guide for restocking.",
      },
      {
        q: "Can desk moves be requested?",
        a: "Yes, as a catalogue item. Add the date and time in the note; the team accepts and marks it started when they begin.",
      },
      {
        q: "Who sees the cost of items?",
        a: "Cost visibility is owner-only, so the owner sees spend while employees and staff just see requests.",
      },
      {
        q: "Can we restrict who requests expensive items?",
        a: "Roles and permissions let you control access, and every action is audit-logged.",
      },
    ],
    related: [
      "solutions/facilities",
      "solutions/facilities/requests",
      "solutions/it-support/hardware-requests",
      "features/request-catalog",
      "admin/spend-visibility",
      "use-cases/admin-team",
      "pricing",
    ],
    cta: {
      title: "Open the cupboard, digitally",
      body: "Add your common office equipment to ZapBuzzer and let the admin team work from one queue.",
    },
  },

  // ───────────────────────── ROUTING ─────────────────────────
  {
    path: "solutions/facilities/routing",
    title: "Facilities Routing to Housekeeping and Maintenance",
    description:
      "Send cleaning to housekeeping, repairs to maintenance and AC to facilities automatically. ZapBuzzer routes each request by category and lets the first free person own it.",
    h1: "The right facilities person, without anyone forwarding",
    eyebrow: "Facilities Routing",
    lead:
      "Facilities is really several teams: housekeeping, maintenance, electrical, admin. ZapBuzzer routes each request by its item to the right group, pings everyone in it and lets the first free person take it.",
    keywords: [
      "facilities routing",
      "route facilities requests",
      "housekeeping requests routing",
      "maintenance team routing",
      "auto route office requests",
    ],
    heroVisual: "notification-flow",
    sections: [
      {
        type: "prose",
        heading: "No more “let me forward this”",
        paragraphs: [
          "In many offices, the admin desk is a human router: complaints come in, the admin decides who handles it, and forwards it. It works until the admin is in a meeting, on leave, or juggling ten things.",
          "ZapBuzzer moves routing into the catalogue. Each item belongs to a category, each category goes to a team. Cleaning goes to housekeeping. A leak goes to maintenance. Nobody needs to forward anything.",
        ],
      },
      {
        type: "visual",
        visual: "notification-flow",
        heading: "Fan-out to the whole team",
        body: "A routed request reaches every member of the team across the channels on your plan: app and email on Free; plus Telegram and WhatsApp on Pro. Pings repeat till accepted.",
      },
      {
        type: "table",
        heading: "Example facilities routing",
        headers: ["Item", "Team"],
        rows: [
          ["Cleaning needed", "Housekeeping"],
          ["Washroom issue", "Housekeeping"],
          ["Leak / tap", "Maintenance"],
          ["Light out", "Electrical"],
          ["AC too cold / hot", "Facilities"],
          ["Extra chairs", "Facilities"],
        ],
      },
      {
        type: "scenario",
        heading: "Three issues, three teams",
        persona: "2nd floor at 2:00",
        setting: "A spill, a light out and a cold meeting room, reported within a minute.",
        timeline: [
          { time: "2:00", event: "Three employees tap three different items." },
          { time: "2:00", event: "Housekeeping, electrical and facilities each get their own ping." },
          { time: "2:01", event: "Sunita, Manoj and Deepak accept their respective requests." },
        ],
        outcome: "Nobody forwarded anything, and each team only saw what was theirs.",
      },
      {
        type: "visual",
        visual: "acceptance",
        heading: "First accept wins inside each team",
        body: "Within housekeeping, whoever is free accepts. The others see it’s taken and carry on.",
      },
      {
        type: "features",
        heading: "Routing options",
        items: [
          { title: "By item", body: "Each item maps to a category and team." },
          { title: "By location (Pro)", body: "Multi-location keeps requests within the right office." },
          { title: "Escalation", body: "Unaccepted or overdue requests climb the chain on Pro." },
          { title: "API (Enterprise)", body: "REST API and webhooks for connecting other systems; talk to us." },
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Keep categories few and obvious",
        body: "If employees hesitate over which item to pick, you have too many. Merge similar items and let the note carry detail.",
      },
      {
        type: "prose",
        heading: "Routing for outsourced and in-house teams",
        paragraphs: [
          "Many offices mix in-house facilities staff with outsourced housekeeping or security. Routing doesn’t care who employs whom: anyone added to a team receives that team’s requests and can accept them. That makes it easy to bring a contractor’s staff into the same queue without a separate system.",
          "It also gives a fair record of who did what. When a housekeeping contract comes up for review, the request history shows accept times, delivery times and ratings for the contractor’s team, measured the same way as everyone else.",
          "If you are a facility company running several client sites, Enterprise offers white-label, custom domain and multi-site options. Talk to us about how that would look for your clients.",
        ],
      },
      {
        "type": "checklist",
        "heading": "Routing setup checklist",
        "intro": "Work through this once before you invite the whole office.",
        "items": [
          "List every facilities team that actually exists on the ground: housekeeping, maintenance, security, front desk.",
          "Map each catalogue item to exactly one receiving team.",
          "Make sure every team has at least one person on each shift the office works.",
          "Add staff who cover two roles to both teams instead of creating a catch-all team.",
          "Send a test request for each item and confirm the right phones ring."
        ]
      },
      {
        "type": "comparison",
        "heading": "Routing by person vs. routing by team",
        "columns": [
          "Send to one named person",
          "Send to the team (ZapBuzzer)"
        ],
        "rows": [
          {
            "label": "When they’re on leave",
            "a": "Request waits until they return",
            "b": "Anyone else on the team can accept"
          },
          {
            "label": "Workload",
            "a": "The reliable person gets everything",
            "b": "Whoever is free takes it, and scorecards show the split"
          },
          {
            "label": "Accountability",
            "a": "Clear, until they forward it",
            "b": "Clear once accepted: one name and photo on the request"
          }
        ]
      },
      {
        "type": "prose",
        "heading": "Keeping routing honest as the office changes",
        "paragraphs": [
          "Routing goes stale quietly. A new floor opens, a housekeeping contractor changes, a maintenance technician moves to the other building, and requests start landing with people who can’t act on them.",
          "A simple habit fixes this: whenever staff join or leave, check their team memberships the same day, and once a quarter look at requests that were accepted slowly by item. A slow item is often a routing problem in disguise."
        ]
      },
    ],
    faqs: [
      {
        "q": "Can the same item route differently on each floor?",
        "a": "Pro supports multiple locations, so offices commonly set up separate locations or teams so that a 3rd-floor request reaches 3rd-floor staff. Keep the structure simple; talk to us if your layout is unusual."
      },
      {
        "q": "Does routing need any IT involvement?",
        "a": "No. Teams and items are set up by an admin in the web app, and most offices finish in an afternoon without a consultant or setup call."
      },
      {
        q: "Can a facility company route requests across multiple client sites?",
        a: "Multi-location is on Pro, and Enterprise is built for groups and facility companies. Talk to us about multi-site setups.",
      },
      {
        q: "What happens if a team has nobody on shift?",
        a: "Pings repeat until someone accepts, and on Pro the request escalates when its deadline passes.",
      },
      {
        q: "Can one person be in several teams?",
        a: "Yes. A facilities generalist can be in housekeeping and maintenance, and will receive both.",
      },
      {
        q: "How do I change routing later?",
        a: "Admins adjust the catalogue and teams; future requests follow the new setup.",
      },
    ],
    related: [
      "solutions/facilities",
      "solutions/facilities/escalation",
      "solutions/it-support/ticket-routing",
      "features/request-routing",
      "notifications/routing",
      "admin/team-management",
      "demo",
    ],
    cta: {
      title: "Retire the human router",
      body: "Set up facilities categories in an afternoon and let requests find the right team by themselves.",
    },
  },

  // ───────────────────────── ESCALATION ─────────────────────────
  {
    path: "solutions/facilities/escalation",
    title: "Facilities Escalation Chains That Prevent Rot",
    description:
      "When a facilities request misses its deadline, ZapBuzzer escalates it up your chain automatically, from supervisor to admin head, so nothing rots in someone’s DMs.",
    h1: "When a job runs late, the right manager knows",
    eyebrow: "Facilities Escalation",
    lead:
      "“Facilities tickets auto-escalate now. Nothing rots in someone’s DMs.” — Deepak, Admin Head. On ZapBuzzer Pro, every facilities request has a deadline and an escalation chain behind it.",
    keywords: [
      "facilities escalation",
      "auto escalate facilities",
      "escalation chain office",
      "overdue facilities requests",
      "facilities manager escalation",
    ],
    heroVisual: "escalation",
    sections: [
      {
        type: "prose",
        heading: "Escalation without anyone having to complain",
        paragraphs: [
          "Traditionally, escalation happens when an employee gets fed up and calls the admin head. By then the issue has dragged for hours and goodwill is gone.",
          "ZapBuzzer escalates on the clock instead. Each request has a deadline. When it passes without delivery, the request moves to the next person in the chain. Managers only hear about the late ones, which keeps escalations meaningful.",
        ],
      },
      {
        type: "visual",
        visual: "escalation",
        heading: "The chain, step by step",
        body: "A typical chain: facilities team, then facilities supervisor, then admin head. Each step is timed and logged.",
      },
      {
        type: "workflow",
        heading: "How escalation runs",
        steps: [
          { title: "Deadline set", body: "Each item has an SLA, e.g. 15 minutes for AC in meeting rooms." },
          { title: "Timer runs", body: "The clock starts at the tap, not at acceptance." },
          { title: "Breach", body: "If not delivered in time, the request escalates to the next level." },
          { title: "Manager acts", body: "The manager can chase, reassign effort or step in." },
          { title: "Logged", body: "The breach and escalation are recorded for reports." },
        ],
      },
      {
        type: "scenario",
        heading: "A washroom issue on a busy day",
        persona: "Deepak, Admin Head",
        setting: "Housekeeping is stretched during a town hall.",
        timeline: [
          { time: "4:00", event: "Washroom issue raised, 30-minute deadline." },
          { time: "4:30", event: "Not delivered; escalates to the housekeeping supervisor." },
          { time: "4:45", event: "Still open; escalates to Deepak." },
          { time: "4:50", event: "Deepak pulls a staff member from the town hall setup. Fixed." },
        ],
        outcome: "Deepak only stepped in once, for the one request that really needed him.",
      },
      {
        type: "comparison",
        heading: "Complaint-driven vs. clock-driven escalation",
        columns: ["Complaint-driven", "ZapBuzzer"],
        rows: [
          { label: "Trigger", a: "Someone gets angry", b: "Deadline passes" },
          { label: "Timing", a: "Hours later", b: "Minutes after breach" },
          { label: "Record", a: "None", b: "Logged with timestamps" },
          { label: "Manager load", a: "Every complaint", b: "Only breaches" },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Plan note",
        body: "Overdue requests auto-escalating to a manager, with an escalation chain, is part of Pro (₹99 per seat per month).",
      },
      {
        type: "prose",
        heading: "Designing a chain people respect",
        paragraphs: [
          "An escalation chain only works if the people on it act when they receive an escalation. Keep it short, usually two or three levels, and make sure each person knows what they are expected to do: chase, reassign effort or step in.",
          "Avoid putting very senior people at the first level. If the CEO gets every late washroom request, escalations become noise. A supervisor first, then the admin head, then perhaps an operations manager for the rare case nobody has dealt with, is a common shape.",
          "Review escalations monthly. If the same item escalates repeatedly, the fix is usually its deadline, staffing at that time of day, or where tools and supplies are kept, not more escalation.",
        ],
      },
      {
        "type": "metrics",
        "heading": "Signs your escalation chain is working",
        "items": [
          {
            "metric": "Escalations per week",
            "meaning": "Should fall after the first month as deadlines settle and staff respond earlier."
          },
          {
            "metric": "Escalations by item",
            "meaning": "A single item escalating often points to a wrong deadline or a missing skill on the team."
          },
          {
            "metric": "Time from escalation to delivery",
            "meaning": "Shows whether managers who get escalations actually unblock them."
          },
          {
            "metric": "Unaccepted vs. late escalations",
            "meaning": "Nobody accepting is a staffing gap; accepted-but-late is a capacity or parts issue."
          }
        ]
      },
      {
        "type": "audience",
        "heading": "What each level of the chain sees",
        "items": [
          {
            "role": "Facilities staff",
            "benefit": "A clear deadline and a chance to act before anyone above them is pinged."
          },
          {
            "role": "Facilities supervisor",
            "benefit": "Only the requests that have actually breached, with timestamps and notes."
          },
          {
            "role": "Admin head",
            "benefit": "Repeat breaches and items that keep escalating, not every small delay."
          },
          {
            "role": "Owner",
            "benefit": "Confidence that nothing rots in someone’s DMs, without reading every request."
          }
        ]
      },
      {
        "type": "callout",
        "tone": "tip",
        "title": "Escalation is a safety net, not the plan",
        "body": "If the same requests escalate every day, the fix is usually upstream: a more realistic deadline, a second person on shift, or supplies stored closer to where they are needed. Use the escalation history to spot those patterns."
      },
    ],
    faqs: [
      {
        "q": "Does the requester know their request was escalated?",
        "a": "The requester keeps seeing the request’s status and who owns it. Escalation is designed to put pressure on the facilities side, so employees don’t have to chase anyone themselves."
      },
      {
        "q": "Is escalation on the Free plan?",
        "a": "No. SLA deadlines and the escalation chain are part of Pro at ₹99 per seat per month. Free covers requests, first-accept-wins and email notifications for up to 10 staff."
      },
      {
        q: "How many levels can an escalation chain have?",
        a: "Set up the chain that fits your organisation, typically two or three levels. Escalation chains are available on Pro.",
      },
      {
        q: "Does escalation notify on WhatsApp?",
        a: "On Pro, notifications go via the app, Telegram, WhatsApp and email, so escalations reach managers wherever they are.",
      },
      {
        q: "Can escalation happen if nobody accepts?",
        a: "The deadline runs from the tap, so an unaccepted request will breach and escalate just like a slow one.",
      },
      {
        q: "Will managers get flooded?",
        a: "Only breaches escalate. If managers get many, it’s a signal that deadlines or staffing need adjusting.",
      },
    ],
    related: [
      "solutions/facilities",
      "solutions/facilities/sla",
      "sla/escalation-chains",
      "sla/manager-escalation",
      "notifications/escalation",
      "use-cases/prevent-lost-requests",
      "pricing/pro",
    ],
    cta: {
      title: "Let the clock do the chasing",
      body: "Try Pro features free for 14 days and watch overdue facilities requests escalate on their own.",
    },
  },

  // ───────────────────────── SLA ─────────────────────────
  {
    path: "solutions/facilities/sla",
    title: "Facilities SLA: Deadlines per Issue Type",
    description:
      "Set facilities deadlines that fit each issue: minutes for AC in a meeting, hours for a light out. ZapBuzzer tracks on-time delivery and flags breaches on Pro.",
    h1: "Different issues, different clocks",
    eyebrow: "Facilities SLA",
    lead:
      "A leak and a missing whiteboard marker shouldn’t share a deadline. ZapBuzzer Pro lets you set SLAs that reflect urgency, and tracks how often facilities hits them.",
    keywords: [
      "facilities sla",
      "facilities service level",
      "office maintenance sla",
      "facilities on time delivery",
      "sla per request type",
    ],
    heroVisual: "sla-timer",
    sections: [
      {
        type: "prose",
        heading: "SLAs people can believe in",
        paragraphs: [
          "Facilities SLAs often live in a contract nobody reads. In ZapBuzzer they live on each request, as a visible timer that both staff and managers see.",
          "The key is picking deadlines that match how urgent things really are. Too tight and every request breaches; too loose and the SLA means nothing.",
        ],
      },
      {
        type: "table",
        heading: "Example facilities deadlines",
        intro: "Illustrations to adapt, not defaults.",
        headers: ["Issue", "Deadline", "Reason"],
        rows: [
          ["AC in meeting room", "15 min", "Meeting in progress"],
          ["Cleaning spill", "15 min", "Safety and appearance"],
          ["Leak", "30 min", "Damage spreads"],
          ["Washroom issue", "30 min", "Shared facility"],
          ["Light out", "4 hours", "Workable meanwhile"],
          ["Furniture / desk move", "Next day", "Planned work"],
        ],
      },
      {
        type: "visual",
        visual: "sla-timer",
        heading: "Timer, state, escalation",
        body: "Each request shows its countdown and SLA state. When it breaches, escalation starts.",
      },
      {
        type: "scenario",
        heading: "Setting fair deadlines",
        persona: "Deepak, Admin Head",
        setting: "First month on Pro; leaks breaching often.",
        timeline: [
          { time: "Week 1", event: "Leak SLA set at 15 minutes; most breach." },
          { time: "Week 2", event: "Data shows the technician needs 20 minutes just to get tools." },
          { time: "Week 3", event: "Deadline moved to 30 minutes; tool kit moved to a central cupboard." },
          { time: "Week 4", event: "Leaks mostly on time." },
        ],
        outcome: "A realistic SLA plus a small process fix beat an aspirational number nobody hit.",
      },
      {
        type: "metrics",
        heading: "Facilities SLA metrics",
        items: [
          { metric: "On-time %", meaning: "Pilot offices reached 96% on-time across request types." },
          { metric: "Breaches by type", meaning: "Shows where deadlines or staffing are off." },
          { metric: "Average time to deliver", meaning: "Baseline for setting future deadlines." },
        ],
      },
      {
        type: "checklist",
        heading: "SLA setup checklist",
        items: [
          "Group items by urgency, not by team.",
          "Start generous, tighten with data.",
          "Make sure the escalation chain is in place before go-live.",
          "Review breaches weekly for the first month.",
        ],
      },
      {
        type: "prose",
        heading: "Explaining SLAs to the team",
        paragraphs: [
          "Facilities staff sometimes worry that timers are there to catch them out. It helps to explain the purpose up front: the deadline protects the employee waiting for the fix, and it protects staff too, because a request that was impossible to finish on time shows as a staffing or process issue in the data, not as one person’s fault.",
          "Scorecards credit everyone for on-time work, and ZapBuzzer’s values are explicit about being people-first: fair attribution, not another nag tool. When staff see their on-time percentage and ratings go up, the timer becomes something they’re proud of.",
          "Share the weekly on-time number with the team, celebrate good weeks, and adjust deadlines together when the data says they are unrealistic.",
        ],
      },
      {
        "type": "comparison",
        "heading": "Contract SLA vs. request-level SLA",
        "columns": [
          "SLA in a contract",
          "SLA on each ZapBuzzer request"
        ],
        "rows": [
          {
            "label": "Where it lives",
            "a": "A PDF signed once a year",
            "b": "On the request card the technician is holding"
          },
          {
            "label": "Who sees it",
            "a": "Procurement and the vendor’s account manager",
            "b": "The requester, the assigned staff member and their manager"
          },
          {
            "label": "How breaches surface",
            "a": "Someone complains at the quarterly review",
            "b": "The timer runs out and escalation starts on its own"
          },
          {
            "label": "Evidence",
            "a": "Memory and email threads",
            "b": "Timestamps for buzz, accept, start and delivery"
          }
        ]
      },
      {
        "type": "workflow",
        "heading": "What happens across a single facilities deadline",
        "steps": [
          {
            "title": "Clock starts on the buzz",
            "body": "The moment Om taps a request for Conference Room B, its deadline is set from the item’s SLA, not from when someone happens to read it."
          },
          {
            "title": "Acceptance is part of the deadline",
            "body": "A request nobody accepts still burns its clock, so a quiet team cannot make an SLA look good by ignoring work."
          },
          {
            "title": "ETA sets expectations inside the SLA",
            "body": "When the technician starts and gives an ETA, the requester can see whether the fix will land before the deadline."
          },
          {
            "title": "Breach hands over to the chain",
            "body": "If time runs out, the request moves up the escalation chain on Pro, with the full history attached."
          }
        ]
      },
      {
        "type": "callout",
        "tone": "warning",
        "title": "Avoid one deadline for everything",
        "body": "A single office-wide SLA is easy to set and almost always wrong: urgent items breach constantly while routine ones never come close, and the on-time number tells you nothing. Set deadlines per item from the start."
      },
    ],
    faqs: [
      {
        "q": "What happens to the SLA if a request is reassigned?",
        "a": "The deadline belongs to the request, not to the person, so it keeps running. That keeps the requester’s wait honest and shows in analytics if handovers are slowing work down."
      },
      {
        "q": "Can outsourced facility staff see their deadlines?",
        "a": "Yes. Anyone on the team receiving the request sees its timer in the app, which is useful when a facility company’s staff work alongside your own admin team."
      },
      {
        q: "Are SLAs available on Free?",
        a: "Free records request timings. SLA deadlines with escalation chains are a Pro feature.",
      },
      {
        q: "When does the SLA clock start?",
        a: "From the moment the request is buzzed, which reflects what the employee actually experiences.",
      },
      {
        q: "Can the SLA differ by location?",
        a: "With multi-location on Pro you can manage offices separately; talk to us during the trial about specific setups.",
      },
      {
        q: "Can I report SLA performance to leadership?",
        a: "Yes. Pro includes reports, and on-time performance is part of analytics.",
      },
    ],
    related: [
      "solutions/facilities",
      "solutions/facilities/escalation",
      "solutions/facilities/analytics",
      "solutions/it-support/sla",
      "sla/tracking",
      "resources/sla-management-guide",
      "pricing/pro",
    ],
    cta: {
      title: "Put a fair clock on facilities",
      body: "Start the trial, set deadlines by issue type and see your on-time rate in the first week.",
    },
  },

  // ───────────────────────── ANALYTICS ─────────────────────────
  {
    path: "solutions/facilities/analytics",
    title: "Facilities Analytics by Room, Floor and Issue",
    description:
      "See which rooms, floors and issue types create the most facilities work, how fast your team responds and who earns 5★. Full facilities analytics on ZapBuzzer Pro.",
    h1: "See where your building needs attention",
    eyebrow: "Facilities Analytics",
    lead:
      "Every facilities request carries a location, an item and a full set of timings. ZapBuzzer Pro turns that into a map of where the building struggles and how well the team keeps up.",
    keywords: [
      "facilities analytics",
      "facilities reporting",
      "office maintenance analytics",
      "facilities team performance",
      "room issue analytics",
    ],
    heroVisual: "analytics",
    sections: [
      {
        type: "prose",
        heading: "From anecdotes to evidence",
        paragraphs: [
          "Facilities managers often know a room is “always cold” or a floor “always has issues”, but can’t prove it when asking for budget. Requests that came by phone left no trace.",
          "With ZapBuzzer, every request is evidence: where, what, when, how long and how it was rated. Analytics adds it up.",
        ],
      },
      {
        type: "visual",
        visual: "analytics",
        heading: "The facilities dashboard",
        body: "Volume over time, accept and delivery times, on-time rate and ratings, filterable by item and location.",
      },
      {
        type: "metrics",
        heading: "Facilities metrics that matter",
        items: [
          { metric: "Requests by location", meaning: "The rooms and floors that generate the most work." },
          { metric: "Requests by type", meaning: "AC vs. cleaning vs. maintenance mix." },
          { metric: "Accept and delivery time", meaning: "How fast the team reacts and finishes." },
          { metric: "On-time %", meaning: "SLA performance by item." },
          { metric: "Peak hours", meaning: "When the office buzzes most." },
        ],
      },
      {
        type: "visual",
        visual: "scorecard",
        heading: "Staff scorecards",
        body: "Requests handled, on-time % and average rating per staff member. ZapBuzzer is built to give staff fair attribution, not to be another nag tool.",
      },
      {
        type: "scenario",
        heading: "Budget for a new AC unit",
        persona: "Deepak, Admin Head",
        setting: "Quarterly budget review.",
        timeline: [
          { time: "Q1", event: "Conference Room A logs far more AC requests than any other room." },
          { time: "Review", event: "Deepak shows the request count, times and ratings." },
          { time: "Decision", event: "Unit servicing approved; complaints drop the following month." },
        ],
        outcome: "A spending decision made on request data, not on who complained loudest.",
      },
      {
        type: "audience",
        heading: "Who uses facilities analytics",
        items: [
          { role: "Facilities manager", benefit: "Staffing, shift timing and hotspots." },
          { role: "Admin head", benefit: "SLA performance and escalations." },
          { role: "Owner", benefit: "Service quality and owner-only spend view." },
          { role: "Facility companies", benefit: "Site-by-site comparison; Enterprise adds white-label options." },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Plan note",
        body: "Full analytics, scorecards, audit logs and reports are on Pro. Free keeps 30 days of request history.",
      },
      {
        type: "prose",
        heading: "A monthly facilities review in twenty minutes",
        paragraphs: [
          "A simple monthly routine gets most of the value. Start with volume by type to see whether AC, cleaning or maintenance dominated. Look at the top five locations by request count. Check on-time percentage by item and note any that slipped. Finish with scorecards and thank the people who carried the month.",
          "Bring one decision out of each review: service a unit, move a supply cupboard, adjust a shift, tighten a deadline. Over a few months, those small decisions add up to a building that generates fewer requests in the first place.",
          "For facility companies running several sites, the same review per site makes it easy to compare service levels and share what is working.",
        ],
      },
      {
        "type": "table",
        "heading": "Questions facilities analytics can answer",
        "intro": "Each answer comes from data ZapBuzzer already records on every request.",
        "headers": [
          "Question",
          "Where to look",
          "Typical action"
        ],
        "rows": [
          [
            "Which room complains about AC most?",
            "Requests by item and destination",
            "Ask the building vendor to inspect that unit"
          ],
          [
            "Are cleaning requests clustered at lunch?",
            "Peak hours",
            "Shift one cleaner’s break by half an hour"
          ],
          [
            "Is the 3rd floor slower to serve?",
            "Delivery time by location or destination",
            "Move a tool kit or supplies closer"
          ],
          [
            "Are breaches a people or a process problem?",
            "Breaches by item vs. by staff member",
            "Adjust the deadline or the staffing, not blame"
          ]
        ]
      },
      {
        "type": "checklist",
        "heading": "Before your first monthly review",
        "intro": "A few minutes of setup makes the numbers far easier to read.",
        "items": [
          "Name destinations consistently (Conference Room B, not “Conf B” on one item and “Room B” on another).",
          "Split vague items such as “Other issue” into the three or four things people actually report.",
          "Agree which metrics the review will look at, so it does not turn into scrolling charts.",
          "Decide who owns each follow-up action before the meeting ends."
        ]
      },
      {
        "type": "prose",
        "heading": "Using ratings alongside timings",
        "paragraphs": [
          "Facilities work is easy to rush. A spill wiped in five minutes but left sticky earns a quick delivery time and a 2★ rating, and the rating is the part that tells you something went wrong. Reading the two together stops a team from chasing speed at the cost of quality.",
          "Ratings also give quieter staff a voice. The housekeeper who always leaves Conference Room B spotless rarely gets thanked in person, but a run of 5★ ratings on the scorecard is visible to the admin head and the owner."
        ]
      },
    ],
    faqs: [
      {
        "q": "Can I see how much facilities requests cost?",
        "a": "Where items carry a cost, the owner can see request costs in an owner-only view. Most facilities fixes have no item cost, so the useful numbers are volume, time and rating."
      },
      {
        "q": "Do I need to tag requests for analytics to work?",
        "a": "No. Item, destination, timestamps, staff member and rating are captured as part of the normal request flow, so there is nothing extra for employees or staff to fill in."
      },
      {
        q: "Can I compare offices?",
        a: "Yes, with multi-location on Pro. Enterprise adds options for groups and facility companies managing many sites.",
      },
      {
        q: "Can facilities data be exported to other tools?",
        a: "Pro includes reports. For system-to-system data, Enterprise offers REST API and webhooks; talk to us for details.",
      },
      {
        q: "Are staff ratings visible to everyone?",
        a: "Visibility is controlled by roles and permissions, so you decide who sees scorecards.",
      },
      {
        q: "How far back does data go?",
        a: "Free keeps the last 30 days. Pro keeps full history for analytics and reports.",
      },
    ],
    related: [
      "solutions/facilities",
      "solutions/facilities/sla",
      "solutions/it-support/analytics",
      "analytics",
      "analytics/office-activity",
      "analytics/staff",
      "use-cases/facilities-operations",
      "pricing/pro",
    ],
    cta: {
      title: "Turn complaints into a plan",
      body: "Run ZapBuzzer for a month and see exactly where your building needs attention.",
    },
  },
];
