import type { PageContent } from "../types";

const base: PageContent[] = [
  {
    path: "admin",
    title: "Admin Dashboard for Office Requests",
    description:
      "The ZapBuzzer admin dashboard shows every pantry, print, IT, facilities and courier request in one live queue, with owners, timers, roles and audit history.",
    h1: "One screen for every request your office makes",
    eyebrow: "Administration",
    lead:
      "The admin dashboard is where the office stops being a guessing game. Every buzz — a coffee for the boss cabin, 24 colour copies, an AC stuck at 16°C — shows up with who asked, who accepted, and how long it has been waiting.",
    keywords: [
      "office request admin dashboard",
      "internal request crm dashboard",
      "office admin panel",
      "request queue dashboard",
      "zapbuzzer admin",
    ],
    heroVisual: "request-dashboard",
    sections: [
      {
        type: "prose",
        eyebrow: "Why it exists",
        heading: "The office used to run on memory and phone calls",
        paragraphs: [
          "Before ZapBuzzer, most offices ran their internal requests through a mix of shouting down the hall, the pantry WhatsApp group and an IT person’s DMs. Nobody had a single view. If the CEO’s coffee went cold or a print job vanished, the only way to find out what happened was to ask three people and hope one of them remembered.",
          "The admin dashboard replaces that with a live list. Every request carries its category, its destination (Boss Cabin, Conference Room B, desk 3F-12), its current state and its timer. The people who run the office can see the whole day at a glance instead of reconstructing it afterwards.",
        ],
      },
      {
        type: "visual",
        visual: "request-dashboard",
        heading: "What the live queue shows",
        body:
          "Each row is one request moving through its lifecycle. Admins see the state change as it happens rather than waiting for someone to report back.",
        points: [
          "Requester, item and destination — “2 coffees, Boss Cabin”",
          "Current state: buzzed, accepted, started, delivered, rated",
          "Who accepted it, with name and photo",
          "Time elapsed against the request’s deadline",
        ],
      },
      {
        type: "features",
        heading: "What admins can do from here",
        intro:
          "The dashboard is not just a viewer. It is where the office is set up and kept honest.",
        items: [
          {
            title: "Shape the catalogue",
            body:
              "Decide what people can buzz for — coffee, tea, prints, IT help, courier pickup — and which team each item goes to.",
          },
          {
            title: "Organise teams",
            body:
              "Group staff into pantry, print room, IT desk, facilities and reception so requests reach the right people and nobody else.",
          },
          {
            title: "Set roles",
            body:
              "Give owners, managers, staff and employees the permissions they need and nothing more. Permissions are granular per role.",
          },
          {
            title: "Watch the timers",
            body:
              "Every request is timed. A manager is pulled in automatically once one runs late, and Pro adds a full escalation chain.",
          },
          {
            title: "Review history",
            body:
              "Free keeps the last 30 days of requests. Pro adds audit logs and reports so you can look back further and prove what happened.",
          },
          {
            title: "See cost",
            body:
              "The owner gets a spend view showing what requests like a team lunch actually cost. It is visible to the owner only.",
          },
        ],
      },
      {
        type: "workflow",
        heading: "A request as the admin sees it",
        intro:
          "From the dashboard, the core flow reads like a status board rather than a chat thread.",
        steps: [
          {
            title: "Buzzed",
            body:
              "Aarav taps Coffee → Boss Cabin during a board call. A new row appears at the top of the queue with a running timer.",
          },
          {
            title: "Routed",
            body:
              "The pantry team is pinged on every channel the plan allows. The admin can see the request is waiting, not lost.",
          },
          {
            title: "Accepted",
            body:
              "Raj taps Accept 12 seconds later. His name and photo replace “waiting” on the row, so the admin knows exactly who owns it.",
          },
          {
            title: "Delivered and rated",
            body:
              "Raj marks it delivered and Aarav rates it. The row closes and feeds into analytics and the staff scorecard.",
          },
        ],
      },
      {
        type: "audience",
        heading: "Different people, different dashboards",
        items: [
          {
            role: "Owner",
            benefit:
              "Sees everything including spend, and controls billing, roles and workspace settings.",
          },
          {
            role: "Manager",
            benefit:
              "Watches their team’s queue, receives escalations and checks who is falling behind.",
          },
          {
            role: "Staff",
            benefit:
              "Sees requests waiting for their team, accepts them and moves them to delivered.",
          },
          {
            role: "Employee",
            benefit:
              "Buzzes for what they need and tracks their own requests to the door.",
          },
        ],
      },
      {
        type: "scenario",
        heading: "A Monday morning from the admin chair",
        persona: "Priya, Office Manager",
        setting: "Priya runs a 60-person office across two floors in Pune.",
        timeline: [
          { time: "09:40", event: "Queue shows 11 open pantry requests as people arrive; all accepted within a minute." },
          { time: "10:05", event: "Kavya’s 24-copy colour print appears; the print room accepts it straight away." },
          { time: "10:22", event: "An AC complaint from Conference Room B passes its deadline and escalates to Deepak automatically." },
          { time: "10:30", event: "Priya opens the row, sees Deepak accepted at 10:24, and leaves him to it." },
        ],
        outcome:
          "Priya did not make a single chase call. She spent the morning reading a list instead of walking the floor asking who was doing what.",
      },
      {
        type: "table",
        heading: "What each plan gives the admin",
        headers: ["Capability", "Free", "Pro", "Enterprise"],
        rows: [
          ["Staff and locations", "One location, max 10 staff", "Unlimited staff, multi-location", "Custom"],
          ["Notifications", "Email (plus app)", "Adds Telegram and WhatsApp", "As Pro"],
          ["SLA and escalation", "Every request timed", "SLA + escalation chain", "As Pro"],
          ["History and audit", "Last 30 days", "Audit logs + reports", "As Pro"],
          ["Sign-in and branding", "Standard", "Standard", "Custom domain, white-label, SSO + SAML"],
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Start small, then widen",
        body:
          "Most offices set up the pantry first, watch the dashboard for a week, then add print, IT and facilities. You can be running in an afternoon.",
      },
    ],
    faqs: [
      {
        q: "Who can see the admin dashboard?",
        a: "Access depends on role. Owners and managers see the queue and settings their role allows, staff see their team’s work, and employees see their own requests. Spend is visible to the owner only.",
      },
      {
        q: "Does the admin dashboard work on the Free plan?",
        a: "Yes. Free gives you the dashboard for up to 10 staff in one location with 30 days of history. Pro removes the staff limit and adds multi-location, audit logs and full analytics.",
      },
      {
        q: "Can I manage the office from my phone?",
        a: "ZapBuzzer has both a web app and a mobile app. Most setup is easiest on the web app, while accepting and tracking requests on the move works well on the phone.",
      },
      {
        q: "What happens if nobody accepts a request?",
        a: "Notifications repeat until someone accepts, and every request has a deadline. If it goes overdue it auto-escalates to a manager, and on Pro it can climb an escalation chain.",
      },
      {
        q: "Can I try the dashboard without signing up?",
        a: "There is a read-only demo you can open from the sign-in page. You can also start a 14-day free trial with no credit card.",
      },
    ],
    related: [
      "admin/owner-dashboard",
      "admin/roles-and-permissions",
      "admin/audit-logs",
      "features/request-management",
      "use-cases/office-manager",
      "analytics",
      "pricing",
      "demo",
    ],
    cta: {
      title: "See your office on one screen",
      body: "Start a 14-day free trial, invite your pantry and IT teams, and watch the first requests land on the dashboard today.",
    },
  },
  {
    path: "admin/roles-and-permissions",
    title: "Roles & Permissions for Office Requests",
    description:
      "Give owners, managers, staff and employees exactly the access they need in ZapBuzzer, with granular permissions per role and owner-only spend view.",
    h1: "The right access for every person in the office",
    eyebrow: "Administration",
    lead:
      "An employee who wants coffee does not need to see the lunch bill. A pantry staffer does not need to change the catalogue. ZapBuzzer roles keep each person’s screen focused on what they actually do.",
    keywords: [
      "office app roles and permissions",
      "request management permissions",
      "role based access office requests",
      "owner only spend view",
    ],
    heroVisual: "roles",
    sections: [
      {
        type: "problem-solution",
        heading: "Why roles matter in an internal-request tool",
        problem: {
          title: "Everyone sees everything",
          points: [
            "In a WhatsApp group, every request and every reply is visible to every member.",
            "Anyone can delete, edit or ignore a message with no record.",
            "Costs and personal requests end up in front of people who should not see them.",
          ],
        },
        solution: {
          title: "Each role sees its job",
          points: [
            "Permissions are granular per role, so access matches responsibility.",
            "Spend is visible to the owner only.",
            "Every action is audit-logged, so changes are traceable (audit logs and reports on Pro).",
          ],
        },
      },
      {
        type: "visual",
        visual: "roles",
        heading: "A permissions matrix you can read in seconds",
        body:
          "Roles are laid out as a grid of who can do what. You can tell at a glance whether a manager can edit the catalogue or a staffer can see reports.",
        points: [
          "Owner: workspace, billing, roles and spend",
          "Manager: team queues, escalations, performance",
          "Staff: accept and deliver requests for their team",
          "Employee: buzz and track their own requests",
        ],
      },
      {
        type: "table",
        heading: "Typical role layout",
        intro:
          "Most offices start from a layout like this and adjust permissions to fit how they run.",
        headers: ["Role", "Usually can", "Usually cannot"],
        rows: [
          ["Owner", "Manage workspace, roles, billing; see spend", "—"],
          ["Manager", "See team queues, receive escalations, view performance", "See spend"],
          ["Staff", "Accept, start and deliver requests for their team", "Change roles or catalogue"],
          ["Employee", "Buzz from the catalogue, track and rate their requests", "See other people’s requests"],
        ],
      },
      {
        type: "prose",
        heading: "Least access, not least useful",
        paragraphs: [
          "The goal is not to lock people out. It is to make sure each screen is useful. Raj in the pantry wants a clean list of coffees to make, not a settings menu. Om in engineering wants a grid of things he can ask for, not other people’s tickets.",
          "Because permissions are set per role rather than per person, adding a new pantry hire takes one step: invite them and give them the staff role on the pantry team. They inherit everything the role allows.",
        ],
      },
      {
        type: "scenario",
        heading: "Onboarding a new IT hire",
        persona: "Deepak, Admin Head",
        setting: "A new IT support engineer, Sameer, joins on a Wednesday.",
        timeline: [
          { time: "09:15", event: "Deepak invites Sameer and assigns him the staff role on the IT desk team." },
          { time: "09:20", event: "Sameer installs the app and sees only IT requests waiting for acceptance." },
          { time: "09:48", event: "Tanvi buzzes for an HDMI cable; Sameer accepts it first and delivers." },
          { time: "09:55", event: "The role change and his first acceptance are both recorded in the log." },
        ],
        outcome:
          "Sameer was useful within an hour, never saw pantry or spend data, and Deepak never had to configure individual permissions.",
      },
      {
        type: "checklist",
        heading: "Setting up roles the first time",
        items: [
          "Make sure exactly the right people hold the owner role.",
          "Give managers the teams they are responsible for.",
          "Put each staff member on the team whose requests they handle.",
          "Leave everyone else as an employee who can buzz and track.",
          "Review role changes in the audit log on Pro.",
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Enterprise sign-in",
        body:
          "Larger groups can pair roles with SSO + SAML on Enterprise. Talk to us for details on how that fits your identity setup.",
      },
    ],
    faqs: [
      {
        q: "Can a manager see what lunch orders cost?",
        a: "No. The spend view is owner-only by design. Managers see their team’s queues and performance but not cost.",
      },
      {
        q: "Can one person hold more than one role?",
        a: "In small offices the owner often also handles requests. Set roles to match how people actually work, and review them as the team grows.",
      },
      {
        q: "Are role changes recorded?",
        a: "Every action in ZapBuzzer is audit-logged. Browsing audit logs and reports is part of the Pro plan.",
      },
      {
        q: "Do employees see each other’s requests?",
        a: "Employees typically see their own requests and their status. Staff on the receiving team see the requests routed to them.",
      },
    ],
    related: [
      "admin",
      "admin/team-management",
      "admin/audit-logs",
      "admin/spend-visibility",
      "enterprise/permissions",
      "use-cases/admin-team",
      "pricing/pro",
    ],
    cta: {
      title: "Set up roles in minutes",
      body: "Start a free trial, invite your team and give each person the access their job needs.",
    },
  },
  {
    path: "admin/owner-dashboard",
    title: "Owner Dashboard: Office Requests and Spend",
    description:
      "The ZapBuzzer owner dashboard gives founders and owners the full picture: live requests, staff performance, workspace settings, billing and owner-only spend.",
    h1: "The whole office, as the owner sees it",
    eyebrow: "Owner view",
    lead:
      "The owner holds the keys: workspace, roles, billing and the only view of what requests cost. The owner dashboard brings those together so a founder can check the health of the office in two minutes.",
    keywords: ["owner dashboard office", "founder office overview", "office request spend", "workspace owner"],
    heroVisual: "analytics",
    sections: [
      {
        type: "prose",
        heading: "What only the owner can see",
        paragraphs: [
          "Most people in ZapBuzzer see a slice of the office. The owner sees all of it. That includes the one thing no other role sees by default: spend. When Vivek orders lunch for 12, the owner can see what that order cost.",
          "The owner also controls the workspace itself — who is invited, what roles they have, and which plan the office is on. Because the account and workspace are stored server-side, the owner sees the same view on any device they sign in from.",
        ],
      },
      {
        type: "visual",
        visual: "analytics",
        heading: "The numbers that matter",
        body:
          "KPI tiles and a simple chart show how the office is running: how fast requests are accepted, how many arrive on time, and when the office buzzes most.",
        points: [
          "Average accept time",
          "On-time delivery rate",
          "Average staff rating",
          "Busiest hours and categories",
        ],
      },
      {
        type: "stats",
        heading: "First-month results from the pilot offices",
        items: [
          { value: "32s", label: "average accept time" },
          { value: "96%", label: "on-time delivery" },
          { value: "−87%", label: "phone calls" },
          { value: "4.8★", label: "average staff rating" },
        ],
        note: "Figures from ZapBuzzer pilot offices in their first month.",
      },
      {
        type: "features",
        heading: "Owner controls",
        items: [
          { title: "Spend view", body: "Owner-only view of what requests cost, such as team lunches." },
          { title: "Roles", body: "Decide who is a manager, who is staff and who is an employee." },
          { title: "Billing and seats", body: "Pro is ₹99 per seat per month, with INR, USD, EUR and GBP offered. Cancel anytime." },
          { title: "Analytics and scorecards", body: "Full analytics and staff scorecards are part of Pro." },
          { title: "Audit trail", body: "Audit logs and reports on Pro let you check exactly who did what." },
        ],
      },
      {
        type: "scenario",
        heading: "Five minutes on a Friday",
        persona: "Aarav Sharma, Founder & CEO",
        setting: "Aarav checks the owner dashboard before the weekly leadership meeting.",
        timeline: [
          { time: "17:00", event: "Opens the dashboard: on-time delivery is steady and accept times are under a minute." },
          { time: "17:02", event: "Checks spend: three team lunches this week, all visible with their cost." },
          { time: "17:03", event: "Notices facilities had two escalations, both on Conference Room B’s AC." },
          { time: "17:05", event: "Raises the AC unit with Deepak instead of hearing about it third-hand." },
        ],
        outcome:
          "Aarav walks into the meeting with facts about the office instead of anecdotes, and the AC gets fixed properly.",
      },
      {
        type: "callout",
        tone: "info",
        title: "In Aarav’s words",
        body:
          "“The office runs quieter. Nobody’s shouting names down the hall. Coffee arrives before anyone asks twice.” — Aarav Sharma, Founder & CEO, Acme HQ (Pune)",
      },
      {
        type: "checklist",
        heading: "A weekly owner check",
        items: [
          "Scan on-time delivery and accept time.",
          "Look at spend for the week.",
          "Check which categories escalated and why.",
          "Read the scorecard for staff who deserve credit.",
          "Confirm roles still match who works where.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can I share the spend view with my office manager?",
        a: "The spend view is designed to be owner-only. If someone else needs it, they would need to hold the owner role.",
      },
      {
        q: "Does the owner dashboard need Pro?",
        a: "The owner role exists on every plan. Full analytics, scorecards, audit logs and reports are part of Pro, which costs ₹99 per seat per month.",
      },
      {
        q: "Can I see multiple offices together?",
        a: "Multi-location is a Pro feature. Groups and facility companies with larger needs can talk to us about Enterprise.",
      },
      {
        q: "Where does the data live?",
        a: "Yes. Account and workspace data sit on the server, which keeps the owner view identical across the web and mobile apps.",
      },
    ],
    related: ["admin", "admin/spend-visibility", "admin/manager-dashboard", "analytics", "use-cases/founder", "use-cases/ceo", "pricing/pro"],
    cta: {
      title: "Know how your office is really running",
      body: "Try ZapBuzzer free for 14 days — you won’t need a card or a setup call.",
    },
  },
  {
    path: "admin/staff-dashboard",
    title: "Staff Dashboard: Accept, Start, Deliver",
    description:
      "ZapBuzzer’s staff dashboard gives pantry, print, IT and facilities staff one clean queue to accept, start, deliver and get rated, with fair credit.",
    h1: "A clear queue for the people who get things done",
    eyebrow: "Staff view",
    lead:
      "Raj in the pantry should not have to scroll a WhatsApp group to find the next coffee. The staff dashboard shows only the requests waiting for his team, and whoever taps Accept first owns it.",
    keywords: ["staff request queue", "pantry staff app", "office staff dashboard", "accept office requests"],
    heroVisual: "staff-queue",
    sections: [
      {
        type: "visual",
        visual: "staff-queue",
        heading: "What staff see",
        body:
          "A list of open requests for their team, each with the item, the destination and how long it has been waiting, plus a big Accept button.",
        points: ["Item and note — “Black coffee, no sugar”", "Destination — Boss Cabin", "Waiting time", "Accept"],
      },
      {
        type: "workflow",
        heading: "The staff side of a request",
        steps: [
          { title: "Get pinged", body: "Notifications arrive on the app and, depending on plan, Telegram, WhatsApp and email. They repeat until someone accepts." },
          { title: "Accept", body: "Whoever taps Accept first takes the job. Everyone else sees it is taken, so there is no double-making." },
          { title: "Start with ETA", body: "Mark it started and give an ETA so the requester stops wondering." },
          { title: "Deliver", body: "Mark it delivered and attach a photo if useful — a print stack on a desk, a fixed projector." },
          { title: "Get rated", body: "The requester rates the job 1–5★, which goes onto your scorecard." },
        ],
      },
      {
        type: "prose",
        heading: "People-first, not a nag tool",
        paragraphs: [
          "ZapBuzzer was built with the people who make the coffee and fix the projectors in mind. Staff get fair attribution: the person who accepted and delivered gets the credit and the rating, not whoever happened to reply in the group.",
          "That matters on busy days. When the pantry turns around 40 orders before lunch, the scorecard shows who did them and how fast, instead of the work disappearing into a chat.",
        ],
      },
      {
        type: "scenario",
        heading: "The 11 o’clock rush",
        persona: "Raj, Pantry",
        setting: "A board meeting starts at 11 and four people buzz at once.",
        timeline: [
          { time: "10:56", event: "Four pantry requests arrive; Raj accepts two, his colleague Meena accepts two." },
          { time: "10:58", event: "Raj marks Boss Cabin coffees started with a 3-minute ETA." },
          { time: "11:01", event: "Delivered; Aarav rates 5★ from the meeting." },
          { time: "11:03", event: "Raj’s queue is empty again." },
        ],
        outcome: "No one was asked twice, no one made the same order twice, and Raj’s work is on record.",
      },
      {
        type: "metrics",
        heading: "What staff are measured on",
        items: [
          { metric: "Accept time", meaning: "How quickly a request is picked up after it is buzzed." },
          { metric: "On-time delivery", meaning: "Whether the job was delivered before its deadline." },
          { metric: "Rating", meaning: "The 1–5★ score the requester gave." },
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Rings through on silent",
        body: "On the mobile app, request alerts ring through even when the phone is on silent or locked, so staff on the move do not miss a buzz.",
      },
      {
        type: "audience",
        heading: "Who uses the staff dashboard",
        items: [
          { role: "Pantry", benefit: "Coffee, tea, juice, snacks and lunch orders in one list." },
          { role: "Print room", benefit: "PDFs with copies and colour already set." },
          { role: "IT desk", benefit: "Projector, HDMI and hardware requests auto-routed." },
          { role: "Facilities", benefit: "AC, maintenance and room issues with deadlines." },
          { role: "Reception / mailroom", benefit: "Courier pickups logged and audit-trailed." },
        ],
      },
    ],
    faqs: [
      { q: "What if two staff tap Accept at the same time?", a: "The first accept wins and that person owns the request. Everyone else sees it is taken." },
      { q: "Can staff see requests for other teams?", a: "Staff see requests routed to their own team. Routing is based on the catalogue category." },
      { q: "Do staff need a smartphone?", a: "There is a web app and a mobile app. The mobile app is the most practical for staff who move around the office." },
      { q: "Are ratings fair to staff?", a: "Ratings go to the person who accepted and delivered. Scorecards show accept time and on-time rate alongside stars, so one bad day does not define anyone." },
    ],
    related: ["admin", "admin/staff-assignment", "mobile-app/staff-workflow", "features/first-accept-wins", "analytics/staff", "solutions/pantry", "free-trial"],
    cta: { title: "Give your staff a queue, not a group chat", body: "Start a free trial and invite your pantry team today." },
  },
  {
    path: "admin/employee-dashboard",
    title: "Employee Dashboard: Buzz and Track",
    description:
      "The ZapBuzzer employee dashboard is a one-tap grid of what you can ask for — coffee, prints, IT help — plus live tracking of who is on it and when it arrives.",
    h1: "Ask once. See who’s on it.",
    eyebrow: "Employee view",
    lead:
      "For most people in the office, ZapBuzzer is a grid of buttons and a status line. Tap what you need, pick where it goes, and watch a name and an ETA appear.",
    keywords: ["employee request app", "office request button", "request coffee at work app", "track office request"],
    heroVisual: "mobile-app",
    sections: [
      {
        type: "visual",
        visual: "mobile-app",
        heading: "The catalogue grid",
        body: "Employees see the items your office has set up — coffee, tea, prints, IT help, courier pickup — as big tappable tiles.",
        points: ["Your usual order one tap away", "Add a note", "Choose a destination", "Tap Buzz"],
      },
      {
        type: "workflow",
        heading: "From tap to doorstep",
        steps: [
          { title: "Tap what you need", body: "Pick from the catalogue and add a note like “oat milk” or “double-sided”." },
          { title: "Choose where", body: "Your desk, Boss Cabin, Conference Room B — wherever you will be." },
          { title: "See who accepted", body: "A name and photo replace “waiting” as soon as someone accepts." },
          { title: "Track the ETA", body: "Started, then delivered, with an ETA in between." },
          { title: "Rate it", body: "Give 1–5★ when it arrives." },
        ],
      },
      {
        type: "comparison",
        heading: "Asking before vs now",
        columns: ["Before", "With ZapBuzzer"],
        rows: [
          { label: "Two coffees for the boss’s cabin", a: "25 min and 3 calls; coffee arrived cold", b: "4 min and no calls; coffee arrived hot" },
          { label: "Knowing who is on it", a: "Ask around", b: "Name and photo on screen" },
          { label: "Following up", a: "Call again", b: "Check the ETA" },
        ],
      },
      {
        type: "scenario",
        heading: "Ten minutes before a pitch",
        persona: "Kavya, Sales Lead",
        setting: "Kavya has a client pitch in 10 minutes and no printed deck.",
        timeline: [
          { time: "14:50", event: "Uploads the PDF and asks for 24 colour copies to Meeting Room 2." },
          { time: "14:51", event: "Print room accepts; Kavya sees the name and ETA." },
          { time: "14:57", event: "Copies delivered with a photo of the stack." },
          { time: "15:00", event: "Client sits down; Kavya rates 5★." },
        ],
        outcome: "“Print jobs land at my desk before the client even sits down. Zero chase calls.” — Kavya, Sales Lead",
      },
      {
        type: "prose",
        heading: "Why employees stop calling",
        paragraphs: [
          "Phone tag happens because people cannot see what is happening. Once the status is on screen, there is nothing to chase. Pilot offices saw phone calls drop by 87% in their first month.",
          "The employee view is deliberately simple. There is no ticket form, no priority dropdown and no category tree. If it takes more than a tap and a note, people go back to shouting.",
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Emergencies too",
        body: "The mobile app can summon staff or security and raise an emergency in one tap, not just place orders.",
      },
    ],
    faqs: [
      { q: "Do employees need training?", a: "Not really. If they can tap a button and type a note, they can use it. Most offices go live in an afternoon." },
      { q: "Can employees see what a request costs?", a: "No. Spend is visible to the owner only." },
      { q: "Can I cancel a request?", a: "Ask your admin how your office has it set up. The status always shows whether someone has already accepted it." },
      { q: "Is there a desktop version?", a: "Yes. ZapBuzzer has a web app as well as a mobile app, and your account works on both." },
    ],
    related: ["admin", "mobile-app/requests", "features/one-tap-requests", "features/request-tracking", "use-cases/sales", "workflows/print-request", "free-trial"],
    cta: { title: "Give everyone a button", body: "Try ZapBuzzer free for 14 days and stop the phone tag." },
  },
  {
    path: "admin/manager-dashboard",
    title: "Manager Dashboard for Team Requests",
    description:
      "Managers use the ZapBuzzer dashboard to watch team queues, receive overdue escalations and compare staff performance with scorecards on the Pro plan.",
    h1: "Run your team’s requests without hovering",
    eyebrow: "Manager view",
    lead:
      "A good manager should hear about a problem before the requester complains. The manager dashboard surfaces overdue requests, escalations and team performance so you step in only when it counts.",
    keywords: ["manager dashboard office requests", "team request performance", "escalation manager view", "facilities manager dashboard"],
    heroVisual: "escalation",
    sections: [
      {
        type: "visual",
        visual: "escalation",
        heading: "Escalations come to you",
        body: "Every request has a deadline. When one goes overdue it auto-escalates to a manager. On Pro, an escalation chain can take it further if it is still stuck.",
        points: ["Overdue requests flagged", "Escalation lands with the manager", "Pro: multi-step escalation chain"],
      },
      {
        type: "problem-solution",
        heading: "Managing without the noise",
        problem: {
          title: "Without a dashboard",
          points: ["You find out about the stuck AC when the CEO mentions it.", "You cannot tell who is overloaded.", "Credit goes to whoever is loudest."],
        },
        solution: {
          title: "With the manager dashboard",
          points: ["Overdue items reach you automatically.", "Team queues show who is busy.", "Scorecards show who is fast and well rated (Pro)."],
        },
      },
      {
        type: "scenario",
        heading: "The AC at 16°C",
        persona: "Deepak, Admin Head",
        setting: "Om reports the Conference Room B AC stuck at 16°C before a client meeting.",
        timeline: [
          { time: "10:00", event: "Om taps Facilities; the facilities team is pinged." },
          { time: "10:15", event: "Nobody has fixed it within 15 minutes; it escalates to Deepak." },
          { time: "10:17", event: "Deepak sees the escalation, calls in the technician and marks it started." },
          { time: "10:35", event: "Delivered; Om rates it." },
        ],
        outcome: "“Facilities tickets auto-escalate now. Nothing rots in someone’s DMs.” — Deepak, Admin Head",
      },
      {
        type: "metrics",
        heading: "What managers watch",
        items: [
          { metric: "Open and overdue", meaning: "Requests not yet delivered, and those past their deadline." },
          { metric: "Escalations", meaning: "How often requests needed a manager, by category." },
          { metric: "Accept time by person", meaning: "Who picks up fast and who may be overloaded." },
          { metric: "Ratings", meaning: "How requesters rated the team’s work." },
        ],
      },
      {
        type: "prose",
        heading: "Coaching with facts",
        paragraphs: [
          "Scorecards on Pro turn vague impressions into specifics. If the print room is slow every Monday morning, you can see it in the busy-hours chart and add cover rather than blaming a person.",
          "Equally, the people who quietly take the most requests get recognised. Fair attribution is part of how ZapBuzzer is built.",
        ],
      },
      {
        type: "checklist",
        heading: "A manager’s daily habits",
        items: ["Clear escalations first.", "Check overdue requests by category.", "Glance at accept times before peak hours.", "Thank the top-rated staffer of the week."],
      },
    ],
    faqs: [
      { q: "Does every plan escalate overdue requests?", a: "Every request is timed, and overdue requests auto-escalate to a manager. A full escalation chain with further steps is part of Pro." },
      { q: "Can managers see spend?", a: "No. The spend view is owner-only." },
      { q: "Can a manager look after several teams?", a: "Yes. Set roles and teams to match who is responsible for what." },
      { q: "Are scorecards on Free?", a: "Full analytics and scorecards are part of Pro at ₹99 per seat per month." },
    ],
    related: ["admin", "sla/manager-escalation", "sla/escalation-chains", "analytics/team-performance", "use-cases/facilities-manager", "admin/team-management", "pricing/pro"],
    cta: { title: "Hear about problems before your boss does", body: "Start a 14-day trial and let overdue requests find you." },
  },
  {
    path: "admin/team-management",
    title: "Team Management for Office Service Teams",
    description:
      "Organise pantry, print room, IT desk, facilities and reception teams in ZapBuzzer so every request reaches the right people and the whole team sees it at once.",
    h1: "Build the teams that answer the buzz",
    eyebrow: "Administration",
    lead:
      "Routing only works if the teams are right. In ZapBuzzer you group staff into teams — pantry, print, IT, facilities, reception — and each catalogue item knows which team to ping.",
    keywords: ["office team management", "service team setup", "pantry team app", "it desk team routing"],
    heroVisual: "notification-flow",
    sections: [
      {
        type: "prose",
        heading: "Teams are the routing table",
        paragraphs: [
          "When Tanvi taps IT for an HDMI cable, ZapBuzzer does not ask her who to send it to. The request goes to the whole IT team at once, and the first person to accept owns it.",
          "That makes team membership the most important setting in the workspace. Put the right people on the right team and requests route themselves.",
        ],
      },
      {
        type: "visual",
        visual: "notification-flow",
        heading: "One request, the whole team",
        body: "A request fans out to every member of the receiving team, on app plus Telegram, WhatsApp and email depending on plan, and repeats until accepted.",
      },
      {
        type: "features",
        heading: "Common team setups",
        items: [
          { title: "Pantry", body: "Lunch orders plus coffee, tea, juice, dry fruits and snacks." },
          { title: "Print room", body: "PDF uploads with copies and colour, delivered to seat or room." },
          { title: "IT desk", body: "Projectors, HDMI, hardware and software help." },
          { title: "Facilities", body: "AC, maintenance, conference room issues." },
          { title: "Reception / mailroom", body: "Courier pickups, logged and audit-trailed." },
          { title: "Security", body: "Summoned in one tap from the mobile app." },
        ],
      },
      {
        type: "table",
        heading: "Team size by plan",
        headers: ["Plan", "Staff", "Locations"],
        rows: [
          ["Free", "Up to 10", "1"],
          ["Pro", "Unlimited", "Multi-location"],
          ["Enterprise", "Custom", "For groups and facility companies"],
        ],
      },
      {
        type: "scenario",
        heading: "Adding a second floor",
        persona: "Priya, Office Manager",
        setting: "The office expands to a second floor with its own pantry.",
        timeline: [
          { time: "Day 1", event: "Priya creates a 3rd-floor pantry team with two staff." },
          { time: "Day 1", event: "She points 3rd-floor coffee requests at the new team." },
          { time: "Day 2", event: "Requests from the new floor reach the closer pantry first." },
        ],
        outcome: "“Coffee arrives before anyone asks twice. The pantry WhatsApp group is finally quiet.” — Priya, Office Manager",
      },
      {
        type: "checklist",
        heading: "Team health check",
        items: ["Every catalogue item routes to a team.", "No team has only one person during working hours.", "Leavers are removed promptly.", "Managers are set for escalation."],
      },
    ],
    faqs: [
      { q: "Can one person be on more than one team?", a: "Small offices often have one person covering IT and facilities. Set teams to reflect who actually handles each kind of request." },
      { q: "What if a team has nobody available?", a: "Notifications repeat until someone accepts, and overdue requests auto-escalate to a manager." },
      { q: "How many staff can I have on Free?", a: "Up to 10 staff in one location. Pro removes the limit and adds multi-location." },
      { q: "Can teams span offices?", a: "Multi-location is on Pro. Larger groups can talk to us about Enterprise." },
    ],
    related: ["admin", "admin/staff-assignment", "admin/roles-and-permissions", "features/request-routing", "enterprise/multi-location", "use-cases/office-manager", "pricing"],
    cta: { title: "Set up your first team today", body: "Invite your pantry staff, add a catalogue, and watch requests route themselves." },
  },
  {
    path: "admin/staff-assignment",
    title: "Staff Assignment with First-Accept-Wins",
    description:
      "ZapBuzzer assigns office requests by first-accept-wins: the whole team is pinged and whoever taps Accept first owns it, with their name shown to the requester.",
    h1: "Nobody assigns. Somebody owns.",
    eyebrow: "Administration",
    lead:
      "Manual assignment means someone has to sit and dispatch. ZapBuzzer skips that: the request goes to the whole team, and whoever is free taps Accept. Nobody is left assuming a colleague has it.",
    keywords: ["staff assignment office requests", "first accept wins", "auto assign office tasks", "request ownership"],
    heroVisual: "acceptance",
    sections: [
      {
        type: "visual",
        visual: "acceptance",
        heading: "The race to accept",
        body: "Every member of the team sees the request. Ownership goes to whoever taps Accept first, and the others see it is taken.",
        points: ["No dispatcher needed", "Clear owner from the first second", "Requester sees name and photo"],
      },
      {
        type: "comparison",
        heading: "Assigning by hand vs first-accept-wins",
        columns: ["Manual dispatch", "First-accept-wins"],
        rows: [
          { label: "Who decides", a: "A supervisor picks someone", b: "Whoever is free takes it" },
          { label: "When the picked person is busy", a: "Request waits", b: "Someone else accepts" },
          { label: "Ownership", a: "Often unclear", b: "One named owner" },
          { label: "Speed", a: "Depends on the dispatcher", b: "Pilot offices averaged 32s to accept" },
        ],
      },
      {
        type: "workflow",
        heading: "How assignment happens",
        steps: [
          { title: "Routed to a team", body: "The catalogue item decides which team is pinged." },
          { title: "Repeated pings", body: "Notifications repeat until someone accepts." },
          { title: "First accept", body: "The first tap assigns the request to that person." },
          { title: "Owner on screen", body: "The requester sees who is on it and the ETA." },
        ],
      },
      {
        type: "scenario",
        heading: "The HDMI in three minutes",
        persona: "Tanvi, Design",
        setting: "Tanvi’s laptop will not connect in the design review room.",
        timeline: [
          { time: "15:10", event: "Tanvi taps IT and notes “HDMI missing, Room 4”." },
          { time: "15:10", event: "The IT team is pinged; Priya, closest to the store, accepts." },
          { time: "15:13", event: "HDMI delivered; Tanvi rates it." },
        ],
        outcome: "Nobody had to decide who should go. The nearest free person went.",
      },
      {
        type: "prose",
        heading: "Fair to the people doing the work",
        paragraphs: [
          "Because accepting is a deliberate tap, the record of who took what is accurate. That feeds the scorecard (full scorecards on Pro) and gives credit to the people who carry the load.",
          "If nobody accepts in time, the deadline still runs and the request auto-escalates to a manager, so first-accept-wins never means nobody-accepts-loses.",
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Accepting on the move",
        body: "Staff can accept from the mobile app, which rings through even on silent, so the person walking past the pantry can still take the next order.",
      },
    ],
    faqs: [
      { q: "Can an admin reassign a request?", a: "The core model is first-accept-wins, with escalation to a manager when a request goes overdue. Check with your admin on how your office handles hand-offs." },
      { q: "What stops one person taking everything?", a: "Scorecards show accept time, on-time delivery and rating together, so managers can see if one person is overloaded or cherry-picking." },
      { q: "Does the requester know who accepted?", a: "Yes. They see the name and photo of the person who accepted, along with the ETA." },
      { q: "Is this on the Free plan?", a: "Yes. First-accept-wins works on every plan. Telegram and WhatsApp pings and the escalation chain are on Pro." },
    ],
    related: ["admin", "features/first-accept-wins", "features/request-assignment", "mobile-app/staff-assignment", "admin/team-management", "workflows/hdmi-request", "free-trial"],
    cta: { title: "Stop dispatching by hand", body: "Try first-accept-wins free for 14 days." },
  },
  {
    path: "admin/audit-logs",
    title: "Audit Logs for Office Requests (Pro)",
    description:
      "ZapBuzzer audit-logs every action — requests, accepts, deliveries, role changes. Audit logs and reports are part of Pro, so you can prove exactly who did what.",
    h1: "A record of who did what, and when",
    eyebrow: "Pro feature",
    lead:
      "When the courier did not get picked up or the wrong person changed a role, you need more than memory. ZapBuzzer records every action, and on Pro you can browse audit logs and pull reports.",
    keywords: ["office request audit log", "audit trail internal requests", "courier pickup audit trail", "pro audit logs"],
    heroVisual: "audit-log",
    sections: [
      {
        type: "visual",
        visual: "audit-log",
        heading: "Every action, a row",
        body: "Each entry shows who acted, what they did and when. The log reads like a timeline of the office.",
        points: ["Request buzzed", "Accepted by", "Started, delivered, rated", "Role and settings changes"],
      },
      {
        type: "prose",
        heading: "Why an office needs an audit trail",
        paragraphs: [
          "Most internal requests are small, but some matter a lot. A courier with signed contracts, a lunch order billed to a client, a facilities fault that keeps coming back. When something goes wrong, the question is always the same: who had it, and when?",
          "In a WhatsApp group the answer is buried, editable or deleted. In ZapBuzzer every action is logged as it happens, so the answer is already written down.",
        ],
      },
      {
        type: "scenario",
        heading: "The missing courier",
        persona: "Neha, Reception",
        setting: "A client calls asking where their documents are.",
        timeline: [
          { time: "12:05", event: "Neha logged the courier pickup at the gate via Courier Pickup." },
          { time: "12:07", event: "Mailroom accepted it." },
          { time: "16:30", event: "Client calls; the admin opens the audit log." },
          { time: "16:31", event: "Log shows pickup logged, accepted and handed over, with times." },
        ],
        outcome: "Instead of a blame round, the office had an answer in one minute.",
      },
      {
        type: "table",
        heading: "History by plan",
        headers: ["Plan", "What you get"],
        rows: [
          ["Free", "Last 30 days of request history"],
          ["Pro", "Audit logs + reports"],
          ["Enterprise", "As Pro, plus Enterprise options — talk to us"],
        ],
      },
      {
        type: "audience",
        heading: "Who reads the log",
        items: [
          { role: "Owner", benefit: "Checks role changes and sensitive actions." },
          { role: "Admin head", benefit: "Resolves disputes about who handled what." },
          { role: "Reception", benefit: "Proves courier handovers." },
          { role: "Managers", benefit: "Reviews escalations after the fact." },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Need more for a group?",
        body: "Groups and facility companies with specific audit requirements can talk to us about Enterprise. See the Enterprise audit logs page for how we engage.",
      },
    ],
    faqs: [
      { q: "Is the audit log on the Free plan?", a: "Free keeps the last 30 days of request history. Audit logs and reports are part of Pro at ₹99 per seat per month." },
      { q: "Can staff edit or delete log entries?", a: "The log is a record of actions taken, not a chat. It exists so the office has a trustworthy history." },
      { q: "Are role changes logged?", a: "Every action is audit-logged, including changes made by admins." },
      { q: "Can I export reports?", a: "Pro includes audit logs and reports. Ask us if you have a specific reporting format in mind." },
    ],
    related: ["admin", "admin/roles-and-permissions", "enterprise/audit-logs", "solutions/courier/tracking", "use-cases/staff-accountability", "features/request-history", "pricing/pro"],
    cta: { title: "Get the record straight", body: "Try Pro free for 14 days and see every action in the audit log." },
  },
  {
    path: "admin/spend-visibility",
    title: "Spend Visibility: Owner-Only Request Costs",
    description:
      "See what office requests cost, from a team lunch to pantry orders, in ZapBuzzer’s owner-only spend view, kept out of sight of staff and employees.",
    h1: "Know what the office actually spends on itself",
    eyebrow: "Owner only",
    lead:
      "A lunch for 12 is a real cost, but it usually vanishes into a petty-cash book. ZapBuzzer shows the owner what requests cost, and shows it to nobody else.",
    keywords: ["office spend visibility", "pantry cost tracking", "lunch order cost", "owner only spend view"],
    heroVisual: "analytics",
    sections: [
      {
        type: "problem-solution",
        heading: "Costs hiding in plain sight",
        problem: {
          title: "Today",
          points: ["Lunch orders are paid and forgotten.", "Pantry spend is a monthly surprise.", "Nobody links cost to a specific request."],
        },
        solution: {
          title: "With spend visibility",
          points: ["Each request can carry its cost.", "The owner sees it next to who asked and when.", "Only the owner sees it."],
        },
      },
      {
        type: "visual",
        visual: "analytics",
        heading: "Spend alongside activity",
        body: "The owner sees request costs in context — which categories cost most and when the office orders most.",
      },
      {
        type: "scenario",
        heading: "Lunch for 12",
        persona: "Vivek, Operations",
        setting: "Vivek orders lunch for a 12-person planning day.",
        timeline: [
          { time: "11:30", event: "Vivek picks items and adds a note: “2 veg Jain, 1 no onion”." },
          { time: "11:32", event: "Pantry queues it and accepts." },
          { time: "12:45", event: "Delivered; Vivek rates it." },
          { time: "18:00", event: "The owner sees the order and its cost in the spend view." },
        ],
        outcome: "The order is fulfilled like any other request, and the cost is captured without Vivek filling in a form.",
      },
      {
        type: "prose",
        heading: "Why owner-only",
        paragraphs: [
          "Spend is sensitive. Employees should not feel watched when they order tea, and staff should not be judged on what ingredients cost. Keeping the spend view to the owner role means cost data informs decisions without changing how people behave.",
          "Managers still see performance and escalations. They just do not see the money.",
        ],
      },
      {
        type: "checklist",
        heading: "Using the spend view well",
        items: ["Review spend weekly alongside request volume.", "Compare categories, not individuals.", "Look at large orders like team lunches.", "Pair with analytics on Pro to see when spend peaks."],
      },
      {
        type: "callout",
        tone: "warning",
        title: "Owner role only",
        body: "If someone else needs to see spend, they need the owner role. Choose carefully who holds it.",
      },
    ],
    faqs: [
      { q: "Who can see request costs?", a: "Only the owner. Managers, staff and employees do not see the spend view." },
      { q: "Does every request have a cost?", a: "Not every request costs money — an HDMI cable or an AC fix may not. Spend visibility matters most for things like pantry and lunch orders." },
      { q: "Is spend visibility a Pro feature?", a: "The owner-only spend view is part of how roles work in ZapBuzzer. Full analytics and reports to put spend in context are on Pro." },
      { q: "Can I use this to bill clients?", a: "The spend view shows what requests cost. How you use that internally is up to you." },
    ],
    related: ["admin", "admin/owner-dashboard", "admin/roles-and-permissions", "workflows/lunch-request", "solutions/pantry/lunch-requests", "use-cases/founder", "pricing"],
    cta: { title: "See the cost behind the coffee", body: "Start a free trial and open the owner view." },
  },
];

type Extra = { sections: PageContent["sections"]; faqs: NonNullable<PageContent["faqs"]> };

const extra: Record<string, Extra> = {
  "admin/roles-and-permissions": {
    sections: [
      {
        type: "prose",
        heading: "Roles change as the office changes",
        paragraphs: [
          "Offices are not static. Someone from the print room moves to reception, a new manager takes over facilities, the founder hands day-to-day running to an office manager. Each of those is a role change, and each should be quick to make and easy to check later.",
          "Because ZapBuzzer records every action, role changes are part of the history rather than a quiet edit nobody remembers. On Pro, the audit log lets the owner see who changed whose access and when, which is useful when a question comes up months later about why someone could see a team’s queue.",
          "A good habit is to review roles whenever someone joins, leaves or moves desks. It takes a minute and keeps the workspace tidy.",
        ],
      },
    ],
    faqs: [
      {
        q: "What happens to a leaver’s requests?",
        a: "Requests they accepted stay on record with their name, so history is not rewritten. Remove their access when they leave so new requests stop reaching them.",
      },
    ],
  },
  "admin/owner-dashboard": {
    sections: [
      {
        type: "prose",
        heading: "Why owners stop asking “how’s the office?”",
        paragraphs: [
          "Founders of growing offices usually learn about operations through complaints. The coffee was late, the AC is broken again, the courier did not go. By the time it reaches the owner, it is a story, not a fact.",
          "The owner dashboard changes the direction of that flow. Instead of waiting to hear, the owner can look. On-time delivery, accept times, which categories escalate, what the lunch orders cost — the answers are already there, and they cover the whole workspace rather than one person’s memory of the week.",
          "That also changes conversations with the team. Praise is specific (the pantry hit every deadline on board day) and problems are specific (Conference Room B’s AC escalated twice). Nobody has to defend themselves against a vague impression.",
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Billing basics",
        body: "You are billed per seat, can cancel whenever you like, and pay nothing to set up. Pro is ₹99 per seat per month, and every new workspace gets a 14-day free trial with no credit card.",
      },
    ],
    faqs: [
      {
        q: "Can I try the owner view before committing?",
        a: "Yes. Start a 14-day free trial with no credit card, or open the read-only demo from the sign-in page to look around first.",
      },
    ],
  },
  "admin/staff-dashboard": {
    sections: [
      {
        type: "prose",
        heading: "Why a queue beats a group chat",
        paragraphs: [
          "In a WhatsApp group, requests are mixed with jokes, photos and “ok” replies. A coffee order from 9:40 can be twenty messages up by 9:45. Staff end up scrolling, guessing what is still open and occasionally making the same order twice because two people saw it at once.",
          "The staff dashboard only shows open work for the team. When a request is accepted it leaves everyone else’s list, and the person who took it sees it through to delivered. What remains is exactly what still needs doing, in the order it arrived, with the oldest clearly marked by its waiting time.",
          "For a pantry handling dozens of orders before lunch, that is the difference between a calm morning and a frantic one.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can staff add a photo when delivering?",
        a: "Yes. A photo can be attached on delivery, which is handy for print jobs left on a desk or a fixed projector in an empty room.",
      },
    ],
  },
  "admin/employee-dashboard": {
    sections: [
      {
        type: "prose",
        heading: "What the employee doesn’t see",
        paragraphs: [
          "Part of what makes the employee view easy is what is left out. Employees do not see other people’s requests, the team queues, the spend view or the settings. They see the catalogue, their own requests and the status of each one.",
          "That keeps the experience focused and private. Nobody in sales needs to know who ordered three coffees before ten, and the pantry staff do not need an audience while they work.",
          "Employees can still see enough to trust the system: the name and photo of whoever accepted, the ETA once work starts, and a delivered state with an optional photo. Then they rate it, which takes a second and gives the staffer credit for the job.",
        ],
      },
      {
        type: "checklist",
        heading: "Getting employees started",
        items: [
          "Invite them and ask them to sign in on the web or on their phone.",
          "Show them the catalogue tiles once.",
          "Remind them to choose a destination.",
          "Ask them to rate when things arrive.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can employees request for someone else?",
        a: "Yes, by choosing the right destination — for example, coffee to the Boss Cabin or tea to Meeting Room 1 for visitors.",
      },
    ],
  },
  "admin/manager-dashboard": {
    sections: [
      {
        type: "prose",
        heading: "What escalation feels like from the manager’s side",
        paragraphs: [
          "Escalation is not a punishment for the team. It is a safety net for the requester. When a request passes its deadline without being delivered, it lands with the manager, who can find out why and unblock it.",
          "Sometimes the reason is simple: the only facilities person is at the bank, or the projector needs a part. The manager’s job is to step in, not to assign blame. Because the request carries its whole timeline — when it was buzzed, who accepted, when it started — the manager starts with facts.",
          "On Pro, the escalation chain adds further steps, so a request that the first manager cannot resolve keeps climbing instead of stalling. Over a month, the escalation pattern by category tells you where the office needs more people, better equipment or a different deadline.",
        ],
      },
      {
        type: "audience",
        heading: "Managers who use this view",
        items: [
          { role: "Admin head", benefit: "Oversees facilities, courier and reception requests." },
          { role: "IT manager", benefit: "Watches projector, HDMI and hardware turnaround." },
          { role: "Office manager", benefit: "Keeps pantry and print running through peak hours." },
        ],
      },
    ],
    faqs: [
      {
        q: "Can different categories have different deadlines?",
        a: "Yes, SLA deadlines can be set per category. Pick deadlines that match what each team can realistically deliver.",
      },
    ],
  },
  "admin/team-management": {
    sections: [
      {
        type: "prose",
        heading: "Why the whole team gets every request",
        paragraphs: [
          "It can feel noisy to ping everyone on the pantry team for each coffee. In practice it is what makes requests fast. The person who is free right now is the one who should take it, and only the team as a whole knows who that is.",
          "The noise stops the moment someone accepts. The request leaves everyone else’s queue and the repeats stop. For a team of four, that typically means one short ring for three people and a clear job for the fourth.",
          "This is also why team size matters. A team of one has nobody to cover lunch breaks or meetings. Two or more people per team during working hours keeps accept times low and escalations rare.",
        ],
      },
      {
        type: "visual",
        visual: "staff-queue",
        heading: "What each team member sees",
        body: "Each person on a team sees the same open queue. Accepted requests drop off for everyone except the person who took them.",
      },
    ],
    faqs: [
      {
        q: "How do I move someone between teams?",
        a: "Change their team membership as an admin. New requests will route to them on their new team from then on.",
      },
    ],
  },
  "admin/staff-assignment": {
    sections: [
      {
        type: "prose",
        heading: "Where manual assignment breaks",
        paragraphs: [
          "Manual dispatch works when one supervisor sits by the phone all day and knows where everyone is. That is rare. More often the supervisor is in a meeting, the chosen person is already carrying a tray, and the request waits for a decision nobody is around to make.",
          "First-accept-wins replaces that bottleneck with the team itself. Each person knows whether they are free. By letting them claim work directly, ZapBuzzer turns a chain of decisions into a single tap.",
          "It also ends the most common office failure: two people both assuming the other would handle it. With first-accept-wins there is always either a named owner or a request that is clearly unclaimed and still ringing.",
        ],
      },
      {
        type: "metrics",
        heading: "Signals that assignment is working",
        items: [
          { metric: "Accept time", meaning: "Pilot offices averaged 32 seconds from buzz to accept." },
          { metric: "Unclaimed escalations", meaning: "Requests that went overdue before anyone accepted — these should be rare." },
          { metric: "Spread of accepts", meaning: "Whether work is shared across the team or piling up on one person." },
        ],
      },
    ],
    faqs: [
      {
        q: "Does first-accept-wins work for small teams?",
        a: "Yes. Even with two people it removes the “who’s doing this?” question, and if neither accepts in time the request escalates.",
      },
    ],
  },
  "admin/audit-logs": {
    sections: [
      {
        type: "prose",
        heading: "What makes a log trustworthy",
        paragraphs: [
          "An audit log is only useful if people believe it. That means it has to record actions as they happen, attribute them to the person who took them, and carry the time. ZapBuzzer captures each step — buzzed, accepted, started, delivered, rated — along with changes made by admins.",
          "The courier workflow shows why this matters. Reception logs a pickup, the mailroom handles it, and the handover is audit-trailed. When a client asks where their documents went, the office can answer with times and names rather than a round of “I think Neha gave it to…”.",
          "Audit logs also protect staff. When a requester says a job was late, the record shows exactly when it was accepted and delivered, which is fairer to everyone than memory.",
        ],
      },
      {
        type: "checklist",
        heading: "When to open the audit log",
        items: [
          "A dispute about who handled a request.",
          "A courier or delivery that cannot be found.",
          "An unexpected role or settings change.",
          "A monthly review of escalations.",
        ],
      },
    ],
    faqs: [
      {
        q: "Who can view audit logs?",
        a: "Access follows roles, so typically the owner and senior admins review the log. Audit logs and reports require Pro.",
      },
    ],
  },
  "admin/spend-visibility": {
    sections: [
      {
        type: "prose",
        heading: "From petty cash to a clear picture",
        paragraphs: [
          "In many offices, pantry and lunch spend lives in a notebook, a petty-cash tin and a stack of receipts. The total turns up at month end with no link to who ordered what or why. Owners either accept the number or spend an afternoon reconstructing it.",
          "Because lunch orders and pantry requests already pass through ZapBuzzer, the cost can sit right next to them. The owner sees the order, the time, the requester and the cost together. That makes it easy to notice that planning days drive the biggest lunch bills, or that guest refreshments spike in the last week of the quarter.",
          "None of this requires extra work from staff or employees. They keep buzzing and delivering as usual; the owner simply gets a view that used to take a spreadsheet to build.",
        ],
      },
      {
        type: "audience",
        heading: "Who benefits",
        items: [
          { role: "Founder / owner", benefit: "Sees what the office spends on itself without chasing receipts." },
          { role: "Operations", benefit: "Orders lunch as usual, with no separate form for the record." },
          { role: "Employees and staff", benefit: "Work without feeling watched on cost." },
        ],
      },
    ],
    faqs: [
      {
        q: "Can I look at spend for one category, like lunch?",
        a: "The spend view puts cost next to each request, so it is easy to focus on something like lunch orders. Pair it with Pro analytics to see when spend peaks.",
      },
    ],
  },
};

const more: Record<string, Extra> = {
  "admin/team-management": {
    sections: [
      {
        type: "table",
        heading: "Matching catalogue items to teams",
        intro: "Every catalogue item should land with exactly one team. A quick map before setup avoids requests that nobody hears.",
        headers: ["Catalogue item", "Team", "Typical members"],
        rows: [
          ["Coffee, tea, snacks, lunch", "Pantry", "Raj and the 3rd-floor pantry staff"],
          ["Prints and copies", "Print room", "Whoever runs the printers that day"],
          ["Projector, HDMI, laptop help", "IT desk", "IT staff, sometimes one person"],
          ["AC, lights, furniture", "Facilities", "Facilities staff, led by someone like Deepak"],
          ["Courier pickup", "Reception / mailroom", "Neha at the front desk"],
        ],
      },
      {
        type: "callout",
        tone: "warning",
        title: "Watch for one-person teams",
        body: "A team with a single member has no one to pick up when that person is on leave. Add a backup, even someone from another team, so first-accept-wins still has more than one candidate.",
      },
    ],
    faqs: [
      { q: "What happens when someone leaves the company?", a: "Remove them from their teams so requests stop reaching them. Their past requests stay on record, and the change itself is logged." },
      { q: "Should managers be on the team they manage?", a: "Not necessarily. Managers receive escalations for overdue work, so they hear about problems without being pinged for every coffee." },
    ],
  },
  "admin/audit-logs": {
    sections: [
      {
        type: "table",
        heading: "What a request leaves behind",
        intro: "One courier pickup, as it might read in the log.",
        headers: ["Time", "Action", "By"],
        rows: [
          ["14:02", "Courier Pickup requested at the gate", "Neha, Reception"],
          ["14:02", "Mailroom team notified", "System"],
          ["14:03", "Accepted", "Mailroom staff member"],
          ["14:09", "Parcel handed over, marked delivered", "Mailroom staff member"],
        ],
      },
      {
        type: "checklist",
        heading: "Questions the log answers quickly",
        items: [
          "Was this request ever accepted, and by whom?",
          "When exactly did it go overdue and escalate?",
          "Who changed a role or team membership last week?",
          "Was the parcel actually handed to the courier?",
        ],
      },
    ],
    faqs: [
      { q: "How is the audit log different from request history?", a: "Request history shows what was asked for and how it went. The audit log records every action, including admin changes such as roles. Audit logs and reports are on Pro." },
      { q: "Does Enterprise add anything for audit?", a: "Enterprise is for groups and facility companies that need things like SSO, an API or an on-prem option. Talk to us about specific audit or compliance needs." },
    ],
  },
  "admin/spend-visibility": {
    sections: [
      {
        type: "metrics",
        heading: "Questions the spend view helps answer",
        items: [
          { metric: "Cost per order", meaning: "What a lunch for 12 or a round of guest refreshments actually came to." },
          { metric: "Who ordered", meaning: "Each cost sits next to the requester, so there is no guessing at month end." },
          { metric: "When spend happens", meaning: "Paired with Pro analytics, shows which days or weeks drive the bill." },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Visibility, not approval",
        body: "The spend view shows cost next to requests for the owner. It doesn’t slow down ordering for everyone else, so Vivek can still get lunch for the team on time.",
      },
    ],
    faqs: [
      { q: "Can a co-founder see spend too?", a: "Spend is visible to the owner role. Who holds that role is set by your admin, and every change is logged." },
      { q: "Does the spend view cover several offices?", a: "Multi-location is part of Pro. Larger groups with complex setups can talk to us about Enterprise." },
    ],
  },
  "admin/manager-dashboard": {
    sections: [
      {
        type: "table",
        heading: "What to do with what you see",
        headers: ["Signal", "Likely cause", "Manager action"],
        rows: [
          ["Requests waiting unaccepted", "Team is busy or short", "Check who is in, add cover"],
          ["Same category escalating", "Deadline too tight or a recurring fault", "Review the SLA or fix the root issue"],
          ["Ratings dipping for one team", "Process or stock problem", "Talk to the team, not just one person"],
          ["Lunch-hour slowdown", "Fewer people on shift", "Stagger breaks"],
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Escalations are a to-do list, not a scorecard",
        body: "When the AC request escalates to you, the job is to get it fixed. Patterns in escalations are for the weekly review, where scorecards give the fuller picture.",
      },
    ],
    faqs: [
      { q: "Can a manager see employees’ requests?", a: "Managers oversee the queue for the teams they are responsible for, including what is waiting and what has escalated. Spend stays owner-only." },
    ],
  },
  "admin/staff-assignment": {
    sections: [
      {
        type: "metrics",
        heading: "Measuring assignment",
        items: [
          { metric: "Accept time", meaning: "How quickly someone takes ownership; pilot offices averaged 32 seconds." },
          { metric: "Share of requests per person", meaning: "Shows whether work is spread evenly across the team." },
          { metric: "Escalation rate", meaning: "How often nobody accepted or finished in time." },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Escalation is the safety net",
        body: "Assignment doesn’t rely on any one person staying alert. If no one accepts or the job runs late, it goes to a manager automatically, with a full escalation chain on Pro.",
      },
    ],
    faqs: [
      { q: "Can I limit a request to one specific person?", a: "Requests go to the team that handles the item, and the first to accept owns it. If something should only reach one person, give it a team of its own." },
    ],
  },
  "admin/employee-dashboard": {
    sections: [
      {
        type: "callout",
        tone: "tip",
        title: "Try it as an employee first",
        body: "Before rolling out, open the read-only demo and buzz for a coffee from the employee view. Two minutes there answers most of the questions people will ask on day one.",
      },
      {
        type: "audience",
        heading: "Employees who use it most",
        items: [
          { role: "Founders in back-to-back calls", benefit: "Coffee to the cabin without leaving the call." },
          { role: "Sales before a pitch", benefit: "Colour copies delivered to the meeting room in time." },
          { role: "Engineers in long sessions", benefit: "AC or HDMI issues fixed without hunting for facilities." },
          { role: "Operations planning events", benefit: "Lunch for 12 ordered with one note." },
        ],
      },
    ],
    faqs: [
      { q: "Do employees get a rating prompt every time?", a: "Yes, after delivery they are asked to rate 1–5★. It takes a tap and gives staff fair credit for their work." },
    ],
  },
};

export const pages: PageContent[] = base.map((p) => {
  const parts = [extra[p.path], more[p.path]].filter((x): x is Extra => Boolean(x));
  return parts.reduce<PageContent>(
    (acc, e) => ({ ...acc, sections: [...acc.sections, ...e.sections], faqs: [...(acc.faqs ?? []), ...e.faqs] }),
    p,
  );
});
