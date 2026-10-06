import type { PageContent } from "../types";

const ENTERPRISE_CTA = {
  title: "Talk to Us About Enterprise",
  body: "Write to hello@zapbuzzer.com with what you want to connect and why. We reply within one business day and walk you through what Enterprise includes for your setup.",
};

export const pages: PageContent[] = [
  // ───────────────────────────── Hub ─────────────────────────────
  {
    path: "integrations",
    title: "Integrations, API, SSO and White-Label",
    description:
      "How ZapBuzzer connects to the rest of your office: Telegram, WhatsApp and email pings on Pro, plus REST API, webhooks, SSO/SAML and white-label on Enterprise.",
    h1: "Connect ZapBuzzer to the Way Your Company Already Works",
    eyebrow: "Integrations & API",
    lead:
      "Most offices need nothing more than the app and the channels their staff already carry in their pockets. Larger groups and facility companies often need more: their own sign-in, their own brand, and a way to move request data into their own systems. This page explains what connects to what, and on which plan.",
    keywords: [
      "zapbuzzer integrations",
      "office request api",
      "internal request webhooks",
      "sso saml office app",
      "white label office request software",
    ],
    heroVisual: "notification-flow",
    sections: [
      {
        type: "prose",
        heading: "Two Kinds of Connection",
        paragraphs: [
          "ZapBuzzer connects outwards in two different ways, and it helps to keep them apart. The first is about people: getting a buzz in front of the pantry team, the print room or the IT desk wherever they are looking. That is the notification layer, and it is part of the everyday product. The free plan sends email; Pro adds Telegram and WhatsApp alongside the mobile app and web app, all at once, repeating until someone taps Accept.",
          "The second is about systems: letting your company’s own software read what happens in ZapBuzzer, react to it, or control who gets in and what they see. That is the Enterprise layer: a REST API, webhooks, single sign-on (SSO) with SAML, white-label branding and a custom domain. Each one is explained in plain words below. They are built for groups and facility companies running many offices. You don’t switch them on from a settings page; a dedicated customer success manager (CSM) sets them up with you.",
        ],
      },
      {
        type: "table",
        heading: "What Connects, and on Which Plan",
        intro: "Plan boundaries as listed on our pricing page.",
        headers: ["Connection", "What It Does", "Plan"],
        rows: [
          ["Email notifications", "Sends new requests to the right team’s inbox", "Free and above"],
          ["Mobile app and web app", "Rings through on silent phones; accept and track on the move", "Free and above"],
          ["Telegram and WhatsApp pings", "Same buzz, on the chat apps staff already open", "Pro"],
          ["REST API", "Lets your systems read and work with request data", "Enterprise"],
          ["Webhooks", "Pushes request lifecycle moments to your systems", "Enterprise"],
          ["SSO and SAML", "Employees sign in with your company identity provider", "Enterprise"],
          ["White-label and custom domain", "Your brand and your web address on the app", "Enterprise"],
        ],
      },
      {
        type: "visual",
        visual: "notification-flow",
        heading: "The Notification Layer, in One Picture",
        body:
          "One buzz fans out to every channel the team uses at the same moment. Nobody has to forward it to a WhatsApp group by hand, and it keeps ringing until one person owns it.",
        points: [
          "App, Telegram, WhatsApp and email together on Pro",
          "Email on the free plan",
          "Repeats until accepted, so a muted chat does not mean a missed request",
        ],
      },
      {
        type: "features",
        heading: "The Enterprise Building Blocks",
        intro: "Each one has its own page with more detail. Here is what each is for.",
        items: [
          { title: "REST API", body: "A REST API is a way for your own software to ask ZapBuzzer for data. Your internal tools can read requests and their history, so a weekly operations report or a facilities dashboard is built from real data instead of exports." },
          { title: "Webhooks", body: "A webhook is an automatic message ZapBuzzer sends to your system when something happens, such as a request being delivered or escalated. Your system can react straight away without checking again and again." },
          { title: "SSO and SAML", body: "Single sign-on lets staff and employees log in with the work account your company already manages. SAML is the standard that makes this work. Leavers lose access when their company account is closed." },
          { title: "White-Label", body: "White-label means the app shows your brand instead of ours. Facility companies use it to offer the app under their own name to the offices they serve." },
          { title: "Custom Domain", body: "The web app runs at a web address your people recognise, such as one with your company name, rather than ours." },
          { title: "Dedicated CSM and On-Prem Option", body: "A named person who knows your rollout. On-prem means running the system on your own servers, for organisations that need that." },
        ],
      },
      {
        type: "scenario",
        heading: "A Facility Company Connecting Twelve Client Offices",
        persona: "Meera, Head of Operations at a Facility Services Company",
        setting: "Her team runs pantry, print and housekeeping for twelve client offices across three cities.",
        timeline: [
          { time: "Week 1", event: "Meera writes to hello@zapbuzzer.com describing the twelve sites and the monthly SLA report each client expects." },
          { time: "Week 2", event: "With the customer success manager she agrees on white-label branding and a custom domain her clients will see." },
          { time: "Week 3", event: "Client employees sign in through SSO; her own staff get the app on their phones with Telegram pings." },
          { time: "Week 4", event: "Her IT contractor uses the REST API to pull last month’s requests into the report template her clients already know." },
          { time: "Week 5", event: "A webhook on escalations posts every SLA breach into the supervisor’s own shift tracker the moment it happens." },
        ],
        outcome:
          "Clients see one branded service with on-time numbers they can check. Meera’s supervisors hear about late jobs before the client does.",
      },
      {
        type: "comparison",
        heading: "When Pro Is Enough, and When to Look at Enterprise",
        columns: ["Pro Is Usually Enough", "Enterprise Is Worth a Conversation"],
        rows: [
          { label: "Size", a: "One company, one or several locations", b: "A group of companies or a facility provider serving many clients" },
          { label: "Sign-In", a: "People sign up with email invites", b: "Your IT team wants everyone to sign in through your identity provider (the system that manages your company logins)" },
          { label: "Reporting", a: "Built-in analytics, scorecards and reports cover it", b: "Request data must flow into your own reporting or BI (business intelligence) tools" },
          { label: "Brand", a: "ZapBuzzer branding is fine", b: "Clients should see your name and your web address" },
          { label: "Automation", a: "SLA timers and escalation chains handle follow-up", b: "Other internal systems need to react to request events" },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "No Public API Reference, on Purpose",
        body:
          "We do not publish an open API reference. Enterprise customers receive access, credentials and the documentation for their account during onboarding, along with help from their customer success manager. That keeps every integration tied to a named customer and a named contact.",
      },
      {
        type: "checklist",
        heading: "Before You Get in Touch, It Helps to Know",
        items: [
          "How many offices, staff and employees will use ZapBuzzer",
          "Which identity provider your company uses for sign-in, if any",
          "Which internal system should receive request data, and who owns it",
          "Which request moments matter most to you, for example deliveries or SLA breaches",
          "Whether clients or employees should see your brand instead of ours",
          "Any hosting requirements that might point to the on-prem option",
        ],
      },
      {
        type: "prose",
        heading: "What We Do Not Integrate With",
        paragraphs: [
          "Today, ZapBuzzer’s ready-made connections are its notification channels: the app, Telegram, WhatsApp and email. We don’t offer built-in connectors to chat suites, ticketing tools or HR systems. If you need data to reach one of those, use the Enterprise API and webhooks. Your team or a partner builds the link, with our help.",
        ],
      },
    ],
    faqs: [
      { q: "Do I Need Enterprise to Get Telegram or WhatsApp Notifications?", a: "No. Telegram and WhatsApp pings are part of Pro at ₹99 per seat per month. The free plan sends email notifications, and the mobile and web apps work on every plan." },
      { q: "Is There a Public API I Can Try During the Free Trial?", a: "No. The REST API and webhooks are Enterprise capabilities, and access is set up during Enterprise onboarding. The 14-day trial is a good way to see the request flow your integration would work with." },
      { q: "Can I Connect ZapBuzzer to Our Ticketing or Chat Tool?", a: "There is no ready-made connector for third-party tools beyond our notification channels. With Enterprise, your team can use the REST API and webhooks to pass request data into the tools you already run." },
      { q: "Who Helps Us Set Integrations Up?", a: "Enterprise includes a dedicated customer success manager. They share the documentation for your account and stay involved while your team builds and tests." },
      { q: "Can We Buy Only SSO Without the Rest of Enterprise?", a: "Enterprise is priced to fit each organisation, so tell us what you need. Write to hello@zapbuzzer.com and we will reply within one business day." },
      { q: "Does ZapBuzzer Connect to Slack, Microsoft Teams or Our HR System?", a: "No ready-made connectors exist for those tools. The verified channels are the app, Telegram, WhatsApp and email, and on Enterprise the REST API and webhooks let your own developers move request data wherever it needs to go." },
      { q: "Which Integrations Come With the Free Plan?", a: "Free includes the mobile and web apps with email notifications for one location and up to 10 staff. Telegram and WhatsApp pings arrive with Pro, and the API, webhooks, SSO and white-label sit on Enterprise." },
      { q: "Can We Run ZapBuzzer on Our Own Servers?", a: "Enterprise includes an on-prem option for organisations that need the system on their own infrastructure. Write to hello@zapbuzzer.com and we will talk through what that involves for your setup." },
    ],
    related: ["enterprise", "pricing/enterprise", "developers/api", "developers/webhooks", "integrations/sso-saml", "notifications/multi-channel", "contact"],
    cta: ENTERPRISE_CTA,
  },

  // ───────────────────────────── API overview ─────────────────────────────
  {
    path: "developers/api-documentation",
    title: "ZapBuzzer API Overview for Enterprise Teams",
    description:
      "What the ZapBuzzer Enterprise API is for: moving office request data into your own reports and tools, the patterns teams use, and how to get access to it.",
    h1: "An API for the Requests Your Office Already Makes",
    eyebrow: "Developers",
    lead:
      "Every coffee, print job, AC complaint and courier pickup in ZapBuzzer leaves a timed record. On Enterprise, your developers can work with those records through a REST API, which lets your software ask for data. They can also get webhooks, which are automatic messages ZapBuzzer sends when something changes. This page explains what that is good for before anyone writes code.",
    keywords: ["zapbuzzer api", "office request api", "facilities request data api", "enterprise api office app"],
    heroVisual: "request-timeline",
    sections: [
      {
        type: "prose",
        heading: "Why an Internal-Request Tool Needs an API at All",
        paragraphs: [
          "For most offices the built-in dashboard, analytics and reports answer the daily questions: who accepted, how long it took, whether it was on time, how it was rated. Groups and facility companies have a second set of questions that live outside ZapBuzzer. Finance wants the monthly cost of pantry orders by cost centre. A client wants on-time delivery numbers in their own report format. An operations team wants overdue facilities jobs on the same wall screen as everything else.",
          "The API (a way for your software to talk to ZapBuzzer directly) is built for those questions. Your systems work with request data directly, so nobody has to export, copy and paste every month.",
        ],
      },
      {
        type: "features",
        heading: "Two Halves: Pull and Push",
        items: [
          { title: "REST API (Pull)", body: "Your system asks ZapBuzzer for data when it needs it, such as last week’s print requests for the 4th floor or every escalated facilities job this month." },
          { title: "Webhooks (Push)", body: "ZapBuzzer tells your system when a request moment happens, such as delivery or escalation, so you can act right away without asking repeatedly." },
          { title: "Same Records, Same Lifecycle", body: "Both describe the requests you see in the app: buzzed, accepted, started, delivered and rated, each with timings attached." },
        ],
      },
      {
        type: "visual",
        visual: "request-timeline",
        heading: "The Lifecycle Your Integration Works With",
        body:
          "A request moves from buzzed to accepted to started, delivered and rated, and every step is timed. Integrations read this timeline or react when it moves forward.",
        points: ["Accept time shows how quickly the team responded", "Delivery against the SLA shows whether it was on time", "Ratings show how the requester felt about it"],
      },
      {
        type: "table",
        heading: "Common Uses We Hear About",
        headers: ["Goal", "Typical Approach"],
        rows: [
          ["Monthly client report for a facility contract", "Pull completed requests per site through the REST API once a month"],
          ["Pantry spend by department", "Pull delivered orders and costs into your finance sheet or BI tool"],
          ["Live wall screen for the operations room", "Receive webhooks for new, accepted and escalated requests"],
          ["Alert a supervisor’s own tracker on SLA breach", "Receive escalation webhooks and create an item there"],
          ["Archive request history in your data warehouse", "Run a scheduled sync (an automatic copy job) that picks up new and changed requests"],
        ],
      },
      {
        type: "scenario",
        heading: "Replacing a Monthly Export",
        persona: "Rohan, IT Lead at a Group With Four Offices",
        setting: "Every month his admin team spent half a day building a pantry and print report by hand.",
        timeline: [
          { time: "Day 1", event: "Rohan and the customer success manager agree what the report needs: requests per office, on-time rate and pantry cost." },
          { time: "Day 3", event: "He receives API access and the documentation for his account during onboarding." },
          { time: "Day 6", event: "A small nightly job pulls the previous day’s requests into the group’s reporting database." },
          { time: "Day 30", event: "The month-end report builds itself from that table. The admin team checks it instead of making it." },
        ],
        outcome: "Half a day of copy-paste each month became a ten-minute review, with numbers that match what the office saw in ZapBuzzer.",
      },
      {
        type: "checklist",
        heading: "Good Habits for Any Integration",
        intro: "General advice that applies to the ZapBuzzer API as much as any other.",
        items: [
          "Give each integration its own credentials, so one can be revoked without breaking the rest",
          "Ask only for the access the integration needs; a reporting job should not be able to change requests",
          "Keep passwords and keys in a secrets manager (a secure store for them) or protected settings, never in source code or chat",
          "Make syncs safe to run twice, so a retry never creates duplicate rows",
          "Log what your integration did and when, so problems can be traced",
          "Name an owner for every integration who will notice when it stops",
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Where the Technical Details Live",
        body:
          "Endpoints (the exact addresses your software calls), data fields, authentication (how your software proves who it is) and limits are documented for Enterprise customers. We share them during onboarding. We keep them off public pages so what you read always matches what your account has.",
      },
      {
        type: "workflow",
        heading: "How to Get Access",
        steps: [
          { title: "Tell Us the Goal", body: "Email hello@zapbuzzer.com or use the contact page with what you want to build and which offices it covers." },
          { title: "Agree the Enterprise Plan", body: "Enterprise is custom-priced. We work out seats, locations and the capabilities you need." },
          { title: "Onboard With Your CSM", body: "Your customer success manager shares access and documentation and answers questions as you build." },
          { title: "Test, Then Go Live", body: "Run your integration against real requests from a pilot office before rolling it out to every location." },
        ],
      },
    ],
    faqs: [
      { q: "Which Plan Includes the API?", a: "The REST API and webhooks are part of Enterprise. They are not available on the Free or Pro plans." },
      { q: "Can I See the API Documentation Before Buying?", a: "Documentation is shared with Enterprise customers during onboarding. If you are evaluating, write to us with what you want to build and we can tell you whether it fits." },
      { q: "Do I Need the API to Get Reports?", a: "Often not. Pro includes full analytics, scorecards, audit logs and reports. The API is for when that data must live inside your own systems." },
      { q: "Can the API Create Requests as Well as Read Them?", a: "What your account can do through the API is agreed and documented during Enterprise onboarding. Tell us your use case and we will be specific about it." },
      { q: "Who Should Own the Integration on Our Side?", a: "Usually an IT or engineering lead, with an operations person who knows what the numbers should look like. Your customer success manager works with both." },
      { q: "What Kinds of Projects Is the ZapBuzzer API Good For?", a: "Typical uses are feeding request data into an internal operations report, a facilities dashboard or a data warehouse, and reacting to events such as a delivery or an escalation through webhooks. If built-in Pro reports already answer your questions, you may not need it." },
      { q: "Is There a Sandbox or Test Workspace for API Development?", a: "How testing works for your account is agreed during Enterprise onboarding. Tell your customer success manager how your team likes to build and test, and they will set things up accordingly." },
      { q: "Does Using the API Change How Requests Flow for Staff?", a: "No. Employees still tap, the right team is pinged on the app, Telegram, WhatsApp or email, and the first to accept owns the request. The API simply gives your systems access to those same records." },
    ],
    related: ["integrations", "developers/rest-api", "developers/webhooks", "developers/authentication", "features/request-reports", "enterprise/reporting", "pricing/enterprise"],
    cta: ENTERPRISE_CTA,
  },

  // ───────────────────────────── REST API ─────────────────────────────
  {
    path: "developers/rest-api",
    title: "REST API for Office Request Data",
    description:
      "Use the ZapBuzzer REST API on Enterprise to sync office requests into internal reports, dashboards and data warehouses, with sound patterns for reliable syncs.",
    h1: "Pull Request Data Into the Systems You Already Report From",
    eyebrow: "Developers",
    lead:
      "The REST API is the “pull” side of ZapBuzzer’s Enterprise integration. Your system asks for request data when it needs it. It suits scheduled syncs, reports and dashboards that should show what really happened in the pantry, print room and facilities queue.",
    keywords: ["zapbuzzer rest api", "office request data sync", "facilities report api", "request data export api"],
    heroVisual: "analytics",
    sections: [
      {
        type: "prose",
        heading: "What a REST API Is, in This Context",
        paragraphs: [
          "A REST API is a set of web addresses your software can call to read or work with data, much like a browser loads a page but for programs. In ZapBuzzer the data is your office’s requests: what was asked for, from where, by whom, who accepted it, how long each step took, and how it was rated.",
          "Because every record is timed, the API is a reliable source for operations reports. A 24-copy colour print job carries its accept time and delivery time; an AC complaint carries whether it escalated. Your reports can use those facts directly.",
        ],
      },
      {
        type: "visual",
        visual: "analytics",
        heading: "The Numbers in Your Own Tools",
        body:
          "The same accept times, on-time rates and ratings you see in ZapBuzzer analytics can be pulled into the tools your finance team, clients or leadership already read.",
        points: ["Group-level views across many offices", "Client-ready reports for facility contracts", "Long-term history in your own warehouse"],
      },
      {
        type: "problem-solution",
        heading: "Exports Versus a Sync",
        problem: {
          title: "Monthly Export by Hand",
          points: ["Someone remembers to download it, or doesn’t", "Copy-paste errors creep into client reports", "Numbers drift from what managers saw in the app", "History lives in scattered spreadsheets"],
        },
        solution: {
          title: "Scheduled API Sync",
          points: ["Runs on its own, every night or hour", "Same records ZapBuzzer used for its own analytics", "One table every report reads from", "History kept as long as your policy says"],
        },
      },
      {
        type: "workflow",
        heading: "A Typical Sync Pattern",
        intro: "A shape many teams use for reporting. The exact calls come from your Enterprise documentation.",
        steps: [
          { title: "Remember Where You Stopped", body: "Save the time of the last successful sync, so the next run only asks for what is new or changed." },
          { title: "Fetch in Pages", body: "Read results in batches rather than all at once, so large months do not time out." },
          { title: "Upsert, Don’t Insert", body: "“Upsert” means update the row if it exists, add it if it doesn’t. Save each request by its own ID, so reading the same request again updates it instead of creating a copy." },
          { title: "Advance the Marker Last", body: "Only move the last-sync marker after everything is written, so a failed run simply repeats." },
          { title: "Report on the Copy", body: "Point dashboards and reports at your synced table, not at live calls, to keep them fast and predictable." },
        ],
      },
      {
        type: "scenario",
        heading: "Pantry Cost by Department",
        persona: "Sneha, Finance Controller",
        setting: "The owner sees pantry costs in ZapBuzzer, but finance needs them split by department in the ledger.",
        timeline: [
          { time: "Mon 02:00", event: "A nightly job pulls the previous day’s delivered pantry requests, including Vivek’s lunch for 12." },
          { time: "Mon 02:05", event: "Each request is matched to the requester’s department in the finance system." },
          { time: "Mon 09:30", event: "Sneha opens her department cost sheet; Friday’s team lunch already sits under Operations." },
        ],
        outcome: "Cost allocation no longer waits for month end, and nobody asks the pantry team for receipts.",
      },
      {
        type: "checklist",
        heading: "Good Practices for REST Integrations",
        items: [
          "Give reporting jobs read-only access where your account allows it",
          "On temporary errors, wait and retry instead of calling again and again",
          "Respect whatever usage limits your documentation describes",
          "Keep credentials (the keys your software uses to sign in) in a secrets manager, change them regularly, and never save them in code",
          "Treat personal data, such as names on requests, under your own data policy",
          "Alert a named person if a scheduled sync fails twice in a row",
        ],
      },
      {
        type: "callout",
        tone: "warning",
        title: "We Will Not Guess at Specifics Here",
        body:
          "This page deliberately avoids endpoint names, field lists and limits. Those come with your Enterprise documentation, which is the only source your developers should build against.",
      },
      {
        type: "prose",
        heading: "Reporting That People Trust",
        paragraphs: ["A sync is worth building when the numbers in a client report or a board pack match what really happened in the office. When Aarav’s coffee arrives in four minutes instead of twenty-five, those four minutes should show up the same way in ZapBuzzer analytics and in your own dashboard.","That is why we suggest building reports on a synced copy of the request records rather than on hand-made exports, and checking a sample of requests against the admin dashboard when you first go live."],
      },
    ],
    faqs: [
      { q: "Is the REST API Included on Pro?", a: "No. The REST API is an Enterprise capability. Pro includes built-in analytics, scorecards, audit logs and reports inside ZapBuzzer." },
      { q: "How Fresh Is the Data From a Sync?", a: "As fresh as your schedule makes it. Many teams sync nightly for reports; if you need to react within seconds, webhooks are the better fit." },
      { q: "Can We Pull Data for Several Offices at Once?", a: "Enterprise is designed for groups and multi-location setups. How locations are represented in the API is covered in your onboarding documentation." },
      { q: "Where Can I Find the Endpoint List?", a: "It is shared with Enterprise customers during onboarding. Write to hello@zapbuzzer.com to start that conversation." },
      { q: "What Is the Difference Between the REST API and Webhooks?", a: "The REST API is pull: your system asks for request data on its own schedule. Webhooks are push: ZapBuzzer tells your system when something happens. Many Enterprise teams use the REST API for nightly reports and webhooks for instant reactions." },
      { q: "Can We Build a Facilities Dashboard From REST API Data?", a: "Yes, that is one of the main reasons teams use it. Request records carry timings, owners and ratings, so a dashboard can show real accept and delivery times for pantry, print and facilities." },
      { q: "Are There Rate Limits on the REST API?", a: "Usage guidance for your account is part of the documentation shared during Enterprise onboarding. Scheduled, incremental syncs rather than repeated full pulls are good practice either way." },
      { q: "Should We Pull Everything Every Night or Only What Changed?", a: "Pull only what changed since your last successful sync wherever you can. It is lighter, faster and less likely to fail halfway, and requests still in progress can be picked up again on a later run." },
    ],
    related: ["developers/api-documentation", "developers/api-requests", "developers/authentication", "developers/webhooks", "enterprise/reporting", "admin/spend-visibility", "pricing/enterprise"],
    cta: ENTERPRISE_CTA,
  },

  // ───────────────────────────── Authentication ─────────────────────────────
  {
    path: "developers/api-authentication",
    title: "API Authentication and Credential Safety",
    description:
      "How access to the ZapBuzzer Enterprise API is given and controlled, with advice on least privilege, storing secrets, changing keys and revoking access.",
    h1: "Who Gets to Call the API, and How You Keep It That Way",
    eyebrow: "Developers",
    lead:
      "API access to ZapBuzzer is issued to Enterprise customers during onboarding, with the method and documentation for your account. This page covers the part that is up to you. That means deciding who holds credentials (the keys your software uses to sign in), keeping them safe and taking them back when needed.",
    keywords: ["zapbuzzer api authentication", "api credentials best practice", "least privilege api access", "enterprise api security"],
    heroVisual: "roles",
    sections: [
      {
        type: "prose",
        heading: "Authentication, in Plain Words",
        paragraphs: [
          "Authentication is how ZapBuzzer knows that a call really comes from your integration and not from someone who guessed an address. Authorisation is what that integration is then allowed to do. Both matter: a reporting script that can read requests is useful, and the same script able to change them is a risk nobody needs.",
          "The specific scheme your account uses is described in the documentation you receive at onboarding. We do not publish it here, so nobody builds against a guess.",
        ],
      },
      {
        type: "visual",
        visual: "roles",
        heading: "Treat Integrations Like People With Roles",
        body:
          "ZapBuzzer already gives people detailed permissions by role, and only the owner can see spend. Treat each integration the same way. Give it a clear purpose, a named owner and only the access that purpose needs.",
        points: ["Reporting jobs read; they do not edit", "Each integration has its own credentials", "Every action stays traceable in the audit log"],
      },
      {
        type: "checklist",
        heading: "Checklist for Keeping Credentials Safe",
        intro: "General practice we recommend to every Enterprise team.",
        items: [
          "Store secrets in a secrets manager (a secure store for keys) or protected settings",
          "Never paste credentials into chat, email, tickets or source code",
          "Issue separate credentials per integration and per environment",
          "Replace credentials on a schedule, and whenever someone with access leaves",
          "Keep a short register: credential, purpose, owner, created date",
          "Revoke anything you cannot name an owner for",
        ],
      },
      {
        type: "comparison",
        heading: "Shared Key Versus Scoped Credentials",
        columns: ["One Shared Credential", "Scoped, Per-Integration Credentials"],
        rows: [
          { label: "When It Leaks", a: "Everything stops while you replace it everywhere", b: "Revoke one, the rest keep running" },
          { label: "Who Did What", a: "Impossible to tell which tool made a call", b: "Each call traces back to one integration" },
          { label: "Access", a: "Usually broader than any one job needs", b: "Limited to what that job needs" },
          { label: "Staff Changes", a: "Leavers may still know it", b: "Rotate only what they touched" },
        ],
      },
      {
        type: "scenario",
        heading: "A Contractor Leaves Mid-Project",
        persona: "Rohan, IT Lead",
        setting: "A contractor built the nightly reporting sync and a webhook receiver, then finished his contract.",
        timeline: [
          { time: "Fri 17:00", event: "The contract ends. Rohan checks the credential register: two credentials list the contractor as a holder." },
          { time: "Fri 17:15", event: "He issues replacements through the process agreed at onboarding and updates the secrets manager." },
          { time: "Fri 17:30", event: "The old credentials are revoked. The nightly sync runs at 02:00 with the new ones." },
        ],
        outcome: "No downtime, no guessing, and nothing the former contractor knows still works.",
      },
      {
        type: "features",
        heading: "How SSO Relates, and How It Doesn’t",
        items: [
          { title: "SSO Is for People", body: "SSO and SAML let employees and staff sign in to the app with your company identity." },
          { title: "API Credentials Are for Systems", body: "Integrations authenticate separately, as described in your Enterprise documentation." },
          { title: "Both on Enterprise", body: "Both are part of Enterprise and are set up with your customer success manager." },
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Least Privilege Is a Habit, Not a Setting",
        body:
          "Least privilege means giving each integration only the access it needs. Start with the smallest access that works and widen it only when a real need comes up. That is much easier than taking access away later.",
      },
      {
        type: "prose",
        heading: "Keeping the Audit Trail Meaningful",
        paragraphs: ["ZapBuzzer records every action in its audit log, a running record of who did what and when. That record is only useful if you can tell who each actor is. Give integrations clear names and separate credentials, and the trail stays readable: you can tell a nightly reporting job from a webhook receiver, and both from a person working in the app.","When something unexpected appears, such as a request changed at 3 a.m., a well-named credential turns a long investigation into a short one. Pair that with a simple register of who owns which credential and you have most of what an auditor will ask about."],
      },
    ],
    faqs: [
      { q: "What Authentication Method Does the ZapBuzzer API Use?", a: "The method for your account is documented and shared during Enterprise onboarding. We keep it off public pages so your team builds against the exact details for your setup." },
      { q: "Can We Limit an Integration to Read-Only Access?", a: "Tell your customer success manager what each integration needs. Scoping access to the job is what we recommend, and we will explain what your account supports." },
      { q: "What Should We Do If a Credential Leaks?", a: "Revoke it straight away, issue a replacement, and review recent activity. Then contact us at hello@zapbuzzer.com so we can help check anything unusual." },
      { q: "Is API Authentication the Same as SSO?", a: "No. SSO and SAML are for people signing in to the app. API credentials are for software calling the API. Both are Enterprise capabilities." },
      { q: "Who in Our Organisation Should Hold API Credentials?", a: "A named owner, usually in IT or engineering, rather than an individual developer’s personal setup. Keep a short register of which integration uses which credential so nothing is orphaned when people move roles." },
      { q: "Where Should We Store ZapBuzzer API Credentials?", a: "In a secrets store or your platform’s protected configuration, never in source code, spreadsheets or chat messages. Limit who can read them to the people who run the integration." },
      { q: "How Often Should We Rotate API Credentials?", a: "Set a regular rotation schedule that suits your security policy, and rotate immediately when someone with access leaves or a credential may have been exposed. Your Enterprise documentation explains how replacement works for your account." },
      { q: "Does a Leaver’s SSO Removal Also Cut Off API Access?", a: "Not automatically. SSO controls people signing in to the app, while API credentials belong to integrations. When an integration owner leaves, review and rotate the credentials they could see." },
    ],
    related: ["developers/api-documentation", "developers/rest-api", "integrations/sso-saml", "enterprise/security", "admin/roles-and-permissions", "admin/audit-logs", "pricing/enterprise"],
    cta: ENTERPRISE_CTA,
  },

  // ───────────────────────────── API requests ─────────────────────────────
  {
    path: "developers/api-requests",
    title: "Working With Office Requests via the API",
    description:
      "How Enterprise integrations work with ZapBuzzer office requests through the API: reading the lifecycle, building reliable syncs and handling errors safely.",
    h1: "Office Requests, Seen From Your Integration’s Side",
    eyebrow: "Developers",
    lead:
      "An office request in ZapBuzzer is more than a message. It has a requester, a destination, a team, an owner, timings and a rating. This page explains how to think about that record when your Enterprise integration reads it through the API (the way your software talks to ZapBuzzer), and how to avoid common mistakes.",
    keywords: ["office request api", "request lifecycle data", "api sync best practices", "zapbuzzer requests api"],
    heroVisual: "request-dashboard",
    sections: [
      {
        type: "prose",
        heading: "What a Request Represents",
        paragraphs: [
          "When Kavya uploads a PDF and asks for 24 colour copies, the request records what she asked for, where it should go, which team was pinged, who accepted it first, when it started, when it was delivered and the rating she gave. When Om reports Conference Room B’s AC stuck at 16°C, the same shape applies, plus whether it escalated to a manager.",
          "Your integration works with that same record. The exact names of the data it carries are in your Enterprise documentation; the concepts are the ones your teams already see in the app.",
        ],
      },
      {
        type: "glossary",
        heading: "Concepts You Will Meet",
        terms: [
          { term: "Requester", definition: "The employee who tapped Buzz." },
          { term: "Destination", definition: "Where the request should arrive, such as the boss cabin or a meeting room." },
          { term: "Team", definition: "The group pinged for this kind of request, such as pantry, print room or IT desk." },
          { term: "Owner", definition: "The staff member who accepted first and now owns the request." },
          { term: "SLA Deadline", definition: "The time limit for delivering the request. If it runs past this, it escalates to a manager." },
          { term: "Rating", definition: "The 1 to 5 star score the requester gave after delivery." },
        ],
      },
      {
        type: "visual",
        visual: "request-dashboard",
        heading: "The Same Queue Your Admins Watch",
        body:
          "The live queue in the admin dashboard shows the records your integration works with. If a number in your report looks odd, this is where to check it.",
      },
      {
        type: "table",
        heading: "Reading the Lifecycle Reliably",
        headers: ["Situation", "What to Do"],
        rows: [
          ["A request is still open", "Expect it to change; store it, and re-read it later"],
          ["A request was delivered but not yet rated", "Leave room for a rating to arrive afterwards"],
          ["A request escalated", "Keep the escalation as part of its history, not a separate item"],
          ["You read the same request twice", "Update your copy by its identifier rather than adding a row"],
          ["A call fails with a temporary error", "Wait, then retry with increasing gaps"],
        ],
      },
      {
        type: "scenario",
        heading: "Board-Day Readiness Check",
        persona: "Priya, Office Manager",
        setting: "A board meeting at 11 in the boss cabin; her IT team built a small readiness page from the API.",
        timeline: [
          { time: "10:15", event: "The readiness page reads open requests tagged to the boss cabin and Conference Room B." },
          { time: "10:20", event: "It shows Tanvi’s HDMI request accepted, and Aarav’s coffee request delivered in four minutes." },
          { time: "10:40", event: "One facilities request is still open; Priya walks over to check before the board arrives." },
        ],
        outcome: "Priya sees board-day requests on one page instead of asking three teams.",
      },
      {
        type: "checklist",
        heading: "Error Handling Basics",
        items: [
          "Tell temporary failures (worth retrying) apart from permanent ones (worth fixing)",
          "Retry with longer and longer waits between tries, up to a sensible limit",
          "Make saves safe to repeat, so a retry can’t create duplicates",
          "Log the request and response details you need to debug, without logging secrets",
          "Fail loudly to a named owner rather than silently skipping data",
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Documentation Comes With Access",
        body:
          "Field names, filters, paging and limits are documented for your account during Enterprise onboarding. Contact hello@zapbuzzer.com to begin.",
      },
      {
        type: "prose",
        heading: "Start Small, Then Widen",
        paragraphs: ["The most successful integrations begin with one question, such as how many print jobs each floor sent last month, and one office. Once those numbers match what managers see in ZapBuzzer, the same sync is extended to more sites and more request types.","Starting small also makes it easier to spot gaps in your own data, like employees missing a department or offices named differently in two systems, before they spread into every report."],
      },
    ],
    faqs: [
      { q: "Does the API Return the Same Data I See in the App?", a: "Integrations work with the same request records your teams see in ZapBuzzer. Which details your account exposes is covered in your Enterprise documentation." },
      { q: "How Should We Handle Requests That Are Still in Progress?", a: "Expect them to change. Store them, read them again later or listen for webhooks, and update your copy using the request’s ID." },
      { q: "Can Ratings Change After Delivery?", a: "A rating arrives after delivery, so your integration should expect a delivered request to gain a rating later. Design your sync to update rather than freeze delivered records." },
      { q: "What If Our Sync Misses a Night?", a: "If you store a last-successful-sync marker and advance it only after a full run, the next run simply picks up everything since then." },
      { q: "Is This Available on Pro?", a: "No. API access is part of Enterprise. Pro customers get built-in analytics, reports and audit logs." },
      { q: "What Fields Make Up a Request Record?", a: "Conceptually, a request has a requester, a destination, a team, an owner, timings for each lifecycle step and a rating. The exact fields your account exposes are documented during Enterprise onboarding." },
      { q: "How Should We Work Out Accept and Delivery Times From Request Data?", a: "Use the timings recorded at each lifecycle step, from buzz to accept to delivery, rather than when your sync happened to read the record. That keeps your reports consistent with what ZapBuzzer’s own analytics show." },
      { q: "Should We Treat a Delivered Request as Final?", a: "Not entirely. A delivered request can still gain a rating afterwards, so keep it updatable for a while. Records that are rated are the ones least likely to change." },
    ],
    related: ["developers/rest-api", "developers/api", "developers/webhook-events", "features/request-management", "features/request-status", "admin", "pricing/enterprise"],
    cta: ENTERPRISE_CTA,
  },

  // ───────────────────────────── Webhooks ─────────────────────────────
  {
    path: "developers/webhooks",
    title: "Webhooks for Office Request Events",
    description:
      "ZapBuzzer Enterprise webhooks push request moments to your systems, from delivery to SLA escalation. Uses, receiver patterns and good security practices.",
    h1: "Let Your Systems Hear About Requests the Moment They Move",
    eyebrow: "Developers",
    lead:
      "A webhook is an automatic message ZapBuzzer sends to your system when something happens, so your system doesn’t have to keep asking. On Enterprise, webhooks let other tools react to deliveries, escalations and other request moments as they happen.",
    keywords: ["zapbuzzer webhooks", "office request webhooks", "sla breach webhook", "enterprise webhooks"],
    heroVisual: "escalation",
    sections: [
      {
        type: "prose",
        heading: "Push Instead of Poll",
        paragraphs: [
          "With the REST API your system asks for data. With webhooks ZapBuzzer sends a short message to an address you provide whenever a request reaches a moment you care about. That lets other tools react almost instantly: an operations wall screen updating as requests are accepted, or a supervisor’s tracker getting an item the moment an AC complaint misses its SLA (its time limit).",
          "Webhooks complement notifications rather than replacing them. People still get buzzed in the app, on Telegram, WhatsApp and email. Webhooks are for software.",
        ],
      },
      {
        type: "visual",
        visual: "escalation",
        heading: "Escalations Are the Classic Use",
        body:
          "When a request runs past its deadline, ZapBuzzer escalates it to a manager. A webhook can carry that same moment into the system where your supervisors already plan their day.",
        points: ["React within moments, not at the next report", "Keep a breach log in your own system", "Combine with the escalation chain on the manager’s side"],
      },
      {
        type: "table",
        heading: "What Teams Do With Webhooks",
        headers: ["Request Moment", "Typical Reaction"],
        rows: [
          ["New request created", "Show it on an operations room screen"],
          ["Request delivered", "Close the matching item in a client’s service log"],
          ["Request escalated", "Create a follow-up for the duty supervisor"],
          ["Low rating received", "Flag it for the team lead to review that day"],
        ],
      },
      {
        type: "workflow",
        heading: "Building a Dependable Receiver",
        intro: "General patterns that keep webhook receivers reliable.",
        steps: [
          { title: "Verify the Sender", body: "Check that each message really came from ZapBuzzer using the verification method in your Enterprise documentation, and reject anything that fails." },
          { title: "Acknowledge Fast", body: "Respond quickly and do heavy work afterwards in a queue, so slow processing does not look like a failure." },
          { title: "Handle Duplicates", body: "Assume the same message may arrive more than once, and make sure handling it twice does no harm." },
          { title: "Don’t Rely on Order", body: "Messages can arrive out of sequence; when it matters, check the request’s current state." },
          { title: "Have a Fallback", body: "Run a periodic REST sync as a safety net in case your receiver was down." },
        ],
      },
      {
        type: "scenario",
        heading: "The AC That Wouldn’t Warm Up",
        persona: "Deepak, Admin Head",
        setting: "Om reports Conference Room B’s AC stuck at 16°C. The facilities SLA is 15 minutes.",
        timeline: [
          { time: "14:02", event: "Om taps Facilities. Deepak’s team is pinged on the app and Telegram." },
          { time: "14:17", event: "No one has fixed it; ZapBuzzer escalates to the manager." },
          { time: "14:17", event: "A webhook reaches the group’s building operations tracker and opens a follow-up for the duty engineer." },
          { time: "14:26", event: "The issue is resolved and delivered; a second webhook closes the follow-up." },
        ],
        outcome: "Two systems stay in step without anyone updating either by hand. As Deepak puts it: “Facilities tickets auto-escalate now. Nothing rots in someone’s DMs.”",
      },
      {
        type: "checklist",
        heading: "Security Basics for Receivers",
        items: [
          "Only accept messages over HTTPS (secure web connections)",
          "Verify every message before acting on it",
          "Keep the verification secret in a secrets manager and rotate it",
          "Don’t expose more of your internal system than the receiver needs",
          "Log receipts and failures so you can audit what happened",
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Event Catalogue and Setup",
        body:
          "Which events your account can subscribe to, how they are verified and how retries work are documented during Enterprise onboarding.",
      },
      {
        type: "prose",
        heading: "Webhooks and People Work Together",
        paragraphs: ["A webhook never replaces the person who has to act. When Aarav buzzes for coffee in a board call, Raj still hears it on Telegram and accepts it in 12 seconds. The webhook simply tells another system that it happened, so a screen, a log or a report can stay current without anyone typing it in.","Keep that split in mind when designing: notifications and escalation chains handle the human follow-up; webhooks carry the record to wherever else it needs to be."],
      },
    ],
    faqs: [
      { q: "Which Plan Includes Webhooks?", a: "Webhooks are an Enterprise capability, alongside the REST API, SSO and SAML, white-label and a custom domain." },
      { q: "Do Webhooks Replace Telegram or WhatsApp Notifications?", a: "No. Notifications reach people; webhooks reach software. Most Enterprise customers use both." },
      { q: "What Happens If Our Receiver Is Down?", a: "How deliveries are retried is described in your Enterprise documentation. As a general practice, pair webhooks with a periodic REST sync so nothing is lost." },
      { q: "How Do We Know a Webhook Really Came From ZapBuzzer?", a: "Your documentation describes how to verify messages. Always verify before acting, and reject anything that fails the check." },
      { q: "Can We Send Webhooks to a Third-Party Tool Directly?", a: "Webhooks go to an address you control. What you do from there, including passing data on to other tools, is up to your integration." },
      { q: "What Should Our Webhook Receiver Do When a Message Arrives?", a: "Verify it, record it and respond quickly, then do the heavier work in the background. Quick replies, and handling that is safe to repeat, keep your integration reliable when traffic spikes." },
      { q: "Can Webhooks Alert Our Operations Team When an SLA Is Breached?", a: "Escalation is one of the request moments webhooks are designed for, so your system can react when a request runs late. The exact events available to your account are confirmed during Enterprise onboarding." },
      { q: "Should We Still Poll the REST API If We Use Webhooks?", a: "Yes, an occasional check through the REST API is good practice. Webhooks give you speed, and an occasional sync catches anything missed while your receiver was unavailable." },
    ],
    related: ["developers/webhook-events", "developers/api", "developers/rest-api", "sla/automatic-escalation", "sla/breach-detection", "notifications/multi-channel", "pricing/enterprise"],
    cta: ENTERPRISE_CTA,
  },

  // ───────────────────────────── Webhook events ─────────────────────────────
  {
    path: "developers/webhook-events",
    title: "Webhook Events Across the Request Lifecycle",
    description:
      "The request lifecycle moments Enterprise teams usually subscribe to with ZapBuzzer webhooks, from created to rated. The exact catalogue is shared at onboarding.",
    h1: "Which Request Moments Are Worth Listening For",
    eyebrow: "Developers",
    lead:
      "Every ZapBuzzer request moves through a clear lifecycle: buzzed, accepted, started, delivered and rated, with escalation if it runs late. These are the natural moments to subscribe to. The exact event catalogue for your account is shared during Enterprise onboarding.",
    keywords: ["zapbuzzer webhook events", "request lifecycle events", "sla escalation event", "office request event subscription"],
    heroVisual: "request-timeline",
    sections: [
      {
        type: "callout",
        tone: "info",
        title: "Concepts, Not a Catalogue",
        body:
          "This page describes lifecycle moments in general terms. A webhook is an automatic message ZapBuzzer sends to your system when one of these moments happens. Event names, contents and delivery rules come from your Enterprise documentation, which your customer success manager shares during onboarding.",
      },
      {
        type: "visual",
        visual: "request-timeline",
        heading: "The Lifecycle, Step by Step",
        body: "Each step is timed in ZapBuzzer, which is what makes these moments useful to other systems.",
      },
      {
        type: "table",
        heading: "Lifecycle Moments and Why You Might Subscribe",
        headers: ["Moment", "What It Means in the Office", "Why a System Might Care"],
        rows: [
          ["Created", "Someone tapped Buzz, e.g. two coffees to the boss cabin", "Show it live on an operations screen"],
          ["Accepted", "The first staff member tapped Accept and owns it", "Record response time; stop external follow-ups"],
          ["Started", "Work has begun, with an ETA", "Show the ETA in another tool"],
          ["Delivered", "Done, sometimes with a photo", "Close a matching item in a service log or client report"],
          ["Rated", "The requester gave 1 to 5 stars", "Flag low ratings for review"],
          ["Escalated", "Past its deadline and sent to a manager", "Open a follow-up in a supervisor’s tracker"],
        ],
      },
      {
        type: "audience",
        heading: "Who Usually Listens to What",
        items: [
          { role: "Operations Room", benefit: "Created, accepted and escalated, to keep a live board accurate." },
          { role: "Facility Company Account Managers", benefit: "Delivered and escalated, to keep client service logs current." },
          { role: "Finance", benefit: "Delivered, to pick up costed pantry orders as they complete." },
          { role: "Team Leads", benefit: "Rated, to catch a two-star delivery the same day." },
        ],
      },
      {
        type: "scenario",
        heading: "Watching a Pitch-Day Print Job",
        persona: "Kavya, Sales Lead",
        setting: "A pitch in 10 minutes, 24 colour copies needed. The office’s operations screen listens to lifecycle webhooks.",
        timeline: [
          { time: "09:50", event: "Created: Kavya uploads her PDF; the job appears on the operations screen." },
          { time: "09:50", event: "Accepted: the print room accepts within seconds; the screen shows who owns it." },
          { time: "09:51", event: "Started: printing begins with an ETA." },
          { time: "09:57", event: "Delivered: copies reach her desk; the item turns green." },
          { time: "10:30", event: "Rated: five stars after the pitch." },
        ],
        outcome: "“Print jobs land at my desk before the client even sits down. Zero chase calls.” The screen showed the whole story without a single phone call.",
      },
      {
        type: "checklist",
        heading: "Choosing Subscriptions Sensibly",
        items: [
          "Subscribe only to the moments a real process uses",
          "Start with one or two, like delivered and escalated, then add more",
          "Treat each event as a hint, and check the request’s current state when it matters",
          "Expect duplicates and out-of-order arrivals",
          "Write down which system owns each subscription",
        ],
      },
      {
        type: "prose",
        heading: "Why Escalation Is Often the First One",
        paragraphs: [
          "Most teams start with escalation because it marks the moment something has gone wrong. ZapBuzzer already escalates overdue requests to a manager, with an escalation chain available on Pro and above. On Enterprise, a webhook lets the same moment reach a separate system your supervisors watch, so breaches show up in the place they plan their work.",
        ],
      },
      {
        type: "prose",
        heading: "Mapping Moments to Your Own Process",
        paragraphs: ["Before subscribing, sketch your own process on paper. For a facility contract it might be: request arrives, our staff respond, work is done, client confirms. Each step lines up with a lifecycle moment in ZapBuzzer, which tells you which events matter and which you can ignore.","This also shows where the timing lives. Accept time measures how quickly your staff responded; delivery against the deadline measures whether the promise was kept; the rating measures how the requester felt. Most client reports need all three, each from a different moment.","Once the sketch is agreed, your customer success manager can confirm which events in the Enterprise catalogue correspond to each step."],
      },
      {
        "type": "checklist",
        "heading": "Before Subscribing to an Event",
        "items": [
          "Name the person or system that will act on it.",
          "Decide what happens if your receiver is down for an hour.",
          "Start with one or two moments, such as escalation, not everything.",
          "Confirm delivery details with us during Enterprise onboarding."
        ]
      },
    ],
    faqs: [
      {
        "q": "Where Do I Find the Event List and Message Details?",
        "a": "Webhooks are part of Enterprise, and the technical details are shared during onboarding with your dedicated CSM. Write to hello@zapbuzzer.com to start."
      },
      { q: "Can We Get an Event When a Request Escalates?", a: "Escalation is one of the natural moments to subscribe to. Your onboarding documentation confirms exactly what your account offers." },
      { q: "Do We Have to Subscribe to Everything?", a: "No, and we would not recommend it. Subscribe to the moments a real process depends on and add more as needs appear." },
      { q: "Will Events Arrive in Lifecycle Order?", a: "Design as if they might not. Check a request’s current state when order matters, and handle duplicates safely." },
      { q: "Which Lifecycle Moments Are Most Useful to Subscribe to First?", a: "Most teams start with delivery and escalation. Delivery confirms work was done, and escalation flags a request that ran past its deadline. Add accepted or rated events later if a real process needs them." },
      { q: "Can We React When a Request Is Rated?", a: "Rating is the last step of the lifecycle, after delivery, so it is a natural moment to subscribe to for feedback reporting. Check your onboarding documentation for the exact events available to your account." },
      { q: "How Do We Handle the Same Event Arriving Twice?", a: "Make repeats harmless. Record what you have already handled and ignore anything you have seen before. Combined with checking the request’s current state, duplicates then do no harm." },
      { q: "Can We Filter Events by Team, Such as Only Facilities Requests?", a: "Subscribe to the lifecycle events you need and filter by team or request type on your side if necessary. What filtering your account supports is covered during Enterprise onboarding." },
    ],
    related: ["developers/webhooks", "developers/api-requests", "features/request-status", "sla/automatic-escalation", "features/request-ratings", "workflows/print-request", "pricing/enterprise"],
    cta: ENTERPRISE_CTA,
  },

  // ───────────────────────────── Custom domain ─────────────────────────────
  {
    path: "integrations/custom-domain",
    title: "Custom Domain for Your Request App",
    description:
      "Run ZapBuzzer at a web address your people recognise. Custom domains are an Enterprise feature for groups and facility companies. What it involves, next steps.",
    h1: "Your Web Address, Your Staff’s Request App",
    eyebrow: "Integrations",
    lead:
      "On Enterprise, ZapBuzzer’s web app can run at a web address (domain) you choose. Employees bookmark an address that belongs to your company or your facility brand, which matters most when the app is part of a service you offer to others.",
    keywords: ["custom domain office app", "zapbuzzer custom domain", "branded request portal", "white label domain"],
    heroVisual: "mobile-app",
    sections: [
      {
        type: "prose",
        heading: "Why the Address Matters",
        paragraphs: [
          "People trust links that look like they belong to their employer. A request page at an address with your company name is easier to remember, easier to put on a poster in the pantry, and less likely to be mistaken for something suspicious by a cautious employee or IT team.",
          "For facility companies, the address is part of the service. If you run pantry, print and housekeeping for client offices, a domain carrying your name tells clients whose service this is.",
        ],
      },
      {
        type: "visual",
        visual: "mobile-app",
        heading: "Same App, Familiar Address",
        body: "Employees see the same request grid and the same one-tap flow. Only the address in the browser, and with white-label the branding, is yours.",
      },
      {
        type: "features",
        heading: "What a Custom Domain Gives You",
        items: [
          { title: "Recognisable Links", body: "Invites, posters and intranet links point to your address." },
          { title: "Pairs With White-Label", body: "Combined with white-label, employees see your name in the address and on the screen." },
          { title: "Works With SSO", body: "Sign-in through your identity provider (the system that manages your company logins) can use the same address." },
          { title: "Set Up With Your CSM", body: "Your customer success manager coordinates the steps with your IT team." },
        ],
      },
      {
        type: "workflow",
        heading: "How It Usually Goes",
        steps: [
          { title: "Choose the Address", body: "Pick a subdomain your IT team controls, such as one under your company’s main domain." },
          { title: "Agree It With Us", body: "Confirm the domain with your customer success manager as part of Enterprise onboarding." },
          { title: "Update DNS", body: "DNS is the system that points a web address to the right place. Your IT team makes the DNS change we give you for your account." },
          { title: "Test With a Pilot Office", body: "Invite one floor to use the new address before announcing it to everyone." },
          { title: "Announce and Update Links", body: "Change bookmarks, posters and intranet links to the new address." },
        ],
      },
      {
        type: "scenario",
        heading: "A Facility Company’s New Client",
        persona: "Meera, Head of Operations",
        setting: "Her company takes on a 300-person office as a new pantry and print client.",
        timeline: [
          { time: "Mon", event: "The client’s employees receive invites pointing to the facility company’s own request address." },
          { time: "Tue", event: "Posters in the 3rd-floor pantry show the same address and a QR code." },
          { time: "Wed", event: "Requests flow; the client’s admin never sees an unfamiliar link." },
        ],
        outcome: "The service looks and feels like Meera’s from the first day, which is what her client is paying for.",
      },
      {
        type: "checklist",
        heading: "Before You Request a Custom Domain",
        items: [
          "Confirm who in IT controls DNS for the domain you want",
          "Decide whether you also want white-label branding",
          "Plan where the new address will be announced",
          "Check whether SSO should be set up at the same time",
          "Agree a test window with a pilot office",
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "An Enterprise Capability",
        body: "Custom domains are part of Enterprise, together with white-label, SSO and SAML, REST API and webhooks. Contact hello@zapbuzzer.com to discuss it.",
      },
      {
        type: "prose",
        heading: "What Changes, and What Doesn’t",
        paragraphs: ["A custom domain changes where people go, not how the product behaves. Requests still go to the whole team, the first to accept still owns them, SLA timers still run and escalations still reach a manager. Telegram, WhatsApp and email pings carry on as before.","What does change is everything around the address: invitation emails, posters, intranet links and any bookmark employees saved. Plan the switch like a small office move. Announce it, and check with reception and the pantry team that their phones and screens point to the new place.","Facility companies often time the switch with a new client’s first day so nobody ever learns an old address."],
      },
    ],
    faqs: [
      { q: "Is a Custom Domain Available on Pro?", a: "No. Custom domains are an Enterprise capability, usually paired with white-label branding." },
      { q: "Do We Need White-Label to Use a Custom Domain?", a: "They are separate ideas, but most customers who want their own address also want their own branding. Talk to us about which combination fits." },
      { q: "Does the Mobile App Change Too?", a: "The custom domain is about the web address. Ask your customer success manager how branding and sign-in will appear across the web and mobile apps for your setup." },
      { q: "Who Makes the DNS Change?", a: "Your IT team, following the details we share for your account during onboarding." },
      { q: "Can a Facility Company Use a Different Domain per Client?", a: "Tell us how your client setup works and we will discuss options as part of your Enterprise agreement." },
      { q: "Why Would a Facility Company Want Its Own Domain for the App?", a: "When the request app is part of a service you sell, employees should see your address, not ours. A custom domain keeps the experience consistent with your brand and the rest of your offering." },
      { q: "Will Existing Bookmarks and Sign-In Links Keep Working After We Switch Domains?", a: "Plan the switch with your customer success manager so employees get the new address and any changes to sign-in are explained in advance. A short announcement usually avoids confusion." },
      { q: "Does a Custom Domain Work With SSO?", a: "Both are Enterprise capabilities and can be used together. How sign-in looks on your domain is set up with your customer success manager during onboarding." },
    ],
    related: ["integrations", "integrations/white-label", "integrations/sso-saml", "enterprise", "enterprise/rollout", "demo", "pricing/enterprise"],
    cta: ENTERPRISE_CTA,
  },

  // ───────────────────────────── White label ─────────────────────────────
  {
    path: "integrations/white-label",
    title: "White-Label Office Request App",
    description:
      "Offer ZapBuzzer under your own brand. White-label is an Enterprise capability for facility companies and groups that run office services for many sites.",
    h1: "Your Brand on the Button Your Clients Press",
    eyebrow: "Integrations",
    lead:
      "White-label means the app carries your brand instead of ours. It lets facility companies and large groups offer ZapBuzzer under their own name. Employees tap for coffee, prints or a facilities fix, and the service they see is yours. It is part of the Enterprise plan.",
    keywords: ["white label office request app", "white label facility management app", "branded office service app", "zapbuzzer white label"],
    heroVisual: "catalog",
    sections: [
      {
        type: "prose",
        heading: "Who White-Label Is For",
        paragraphs: [
          "Our Enterprise plan is described as being for groups and facility companies, and white-label is one of the main reasons why. A facility company runs pantry, print room, housekeeping and front desk for client offices. Its staff do the work, its supervisors answer for the SLA, and its name is on the contract. It makes sense that its name is on the app too.",
          "Groups use it differently: a holding company with several businesses may want one internal brand for workplace services across every office.",
        ],
      },
      {
        type: "visual",
        visual: "catalog",
        heading: "Your Catalogue, Your Look",
        body: "The pantry catalogue, print requests and facilities buttons work exactly as in ZapBuzzer. White-label changes whose service it appears to be.",
      },
      {
        type: "comparison",
        heading: "Standard Versus White-Label",
        columns: ["Standard ZapBuzzer", "White-Label on Enterprise"],
        rows: [
          { label: "Brand Employees See", a: "ZapBuzzer", b: "Your company or facility brand" },
          { label: "Web Address", a: "Ours", b: "Yours, with a custom domain" },
          { label: "Best For", a: "A company running its own office", b: "A provider serving many clients, or a group" },
          { label: "Setup", a: "Sign up and invite your team", b: "Agreed and configured with your CSM" },
        ],
      },
      {
        type: "scenario",
        heading: "Winning a Renewal With Visible Service",
        persona: "Meera, Head of Operations",
        setting: "A client’s contract is up for renewal and the client asks how well her team has performed.",
        timeline: [
          { time: "Day 1", event: "Meera pulls a year of on-time delivery and ratings from analytics for that site." },
          { time: "Day 2", event: "The client’s admin head confirms employees know the service by her company’s brand, not a third-party app." },
          { time: "Day 5", event: "The renewal meeting uses her numbers and her brand throughout." },
        ],
        outcome: "Her team’s work is visible as her team’s work, which is what a renewal conversation needs.",
      },
      {
        type: "features",
        heading: "What Stays the Same Underneath",
        items: [
          { title: "First-Accept-Wins", body: "Requests still go to the whole team and the first to accept owns it." },
          { title: "SLA and Escalation", body: "Deadlines, timers and escalation to a manager work as usual." },
          { title: "Multi-Channel Pings", body: "Staff still get the app, Telegram, WhatsApp and email." },
          { title: "Analytics and Audit", body: "Scorecards, reports and the audit log carry on, ready for client reviews." },
        ],
      },
      {
        type: "checklist",
        heading: "What to Prepare",
        items: [
          "Your brand name and the assets you want employees to see",
          "Whether you need a custom domain alongside it",
          "How many client sites and staff are involved",
          "Who at each client is the admin contact",
          "Whether client employees should sign in with SSO",
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Start With One Client Site",
        body: "Most providers pilot the branded app with one client office before rolling it out, so posters, invites and support routes are tested on a small group first.",
      },
      {
        type: "prose",
        heading: "How White-Label Fits a Service Contract",
        paragraphs: ["For a facility company, the app is evidence. Every coffee delivered on time, every print job accepted in seconds, every escalation handled is recorded under the client’s site and rated by the people you serve. With white-label, that evidence carries your name from the employee’s first tap to the month-end report.","It also simplifies support. Employees know whose service they are using, so questions go to your supervisors rather than to an unfamiliar vendor. Your client’s admin team deals with one provider for both the people and the tool.","Groups use the same idea internally. A shared workplace-services brand across several companies makes it clear that one team runs pantry, print and facilities for everyone, even when the offices sit in different cities.","Either way, the work happens with your customer success manager, who agrees the branding, the domain and the rollout order with you before the first site goes live."],
      },
    ],
    faqs: [
      { q: "Which Plan Includes White-Label?", a: "White-label is part of Enterprise, which has custom pricing. Contact hello@zapbuzzer.com to discuss it." },
      { q: "Does White-Label Change How the Product Works?", a: "No. The request flow, routing, SLA timers, notifications and analytics stay the same. White-label changes the brand people see." },
      { q: "Can We Combine White-Label With a Custom Domain?", a: "Yes, both are Enterprise capabilities and they are commonly set up together." },
      { q: "Can Our Staff Still Get Telegram and WhatsApp Pings?", a: "Yes. White-label changes what employees see, not how your staff are notified. The app, Telegram, WhatsApp and email pings work as usual, repeating until someone accepts." },
      { q: "Exactly Which Parts of the App Can Be Branded?", a: "That is agreed with your customer success manager for your setup. Tell us what you need employees to see and we will be specific." },
      { q: "Who Usually Buys White-Label?", a: "Facility companies and larger groups that run pantry, print, facilities or courier services for several offices and want the app to carry their own brand. It is part of the Enterprise plan." },
      { q: "Will Employees See the ZapBuzzer Name Anywhere?", a: "The aim of white-label is that employees see your brand. Exactly which screens, emails and notifications are branded is agreed with your customer success manager for your setup." },
      { q: "Do We Keep Access to Analytics and Scorecards Under White-Label?", a: "Yes. White-label changes branding, not features. Analytics, staff scorecards, audit logs and reports work the same way behind your brand." },
    ],
    related: ["integrations", "integrations/custom-domain", "enterprise", "enterprise/multi-location", "analytics", "solutions/facilities", "pricing/enterprise"],
    cta: ENTERPRISE_CTA,
  },

  // ───────────────────────────── SSO / SAML ─────────────────────────────
  {
    path: "integrations/sso-and-saml",
    title: "SSO and SAML Sign-In for ZapBuzzer",
    description:
      "Let employees and staff sign in to ZapBuzzer with your company identity provider through SSO and SAML, an Enterprise capability. Why it helps and how to start.",
    h1: "One Company Login for Every Coffee, Print and Fix",
    eyebrow: "Integrations",
    lead:
      "Single sign-on (SSO) with SAML lets people sign in to ZapBuzzer using the work account your company already manages. Joiners get access without another password, and leavers lose it when IT closes their company account. SSO and SAML are part of the Enterprise plan.",
    keywords: ["zapbuzzer sso", "saml office app", "single sign-on internal requests", "enterprise sso office"],
    heroVisual: "roles",
    sections: [
      {
        type: "prose",
        heading: "What SSO and SAML Mean Here",
        paragraphs: [
          "Single sign-on means an employee signs in once with their company identity and can use ZapBuzzer without a separate password. SAML is a widely used standard that lets your identity provider (the system that manages company logins) confirm to ZapBuzzer who that person is.",
          "For an office with a few dozen people, email invites are fine. For a group with hundreds or thousands of employees across cities, IT usually wants every work app to follow the same sign-in and the same offboarding. That is what SSO gives you.",
        ],
      },
      {
        type: "problem-solution",
        heading: "Passwords Versus Company Sign-In",
        problem: {
          title: "Separate Passwords",
          points: ["Another password to forget", "IT cannot see who has access", "Leavers may keep access until someone remembers", "Password resets land on the office manager"],
        },
        solution: {
          title: "SSO With SAML",
          points: ["Sign in with the company account", "Access follows your identity provider", "Offboarding happens where IT already does it", "Fewer reset requests for admins"],
        },
      },
      {
        type: "visual",
        visual: "roles",
        heading: "Sign-In Decides Who; Roles Decide What",
        body:
          "SSO confirms who someone is. ZapBuzzer roles and permissions then decide what they can do, from tapping Buzz to accepting requests to viewing owner-only spend.",
        points: ["Employees request", "Staff accept and deliver", "Managers see escalations", "Owners see spend"],
      },
      {
        type: "scenario",
        heading: "Joiner Monday, Leaver Friday",
        persona: "Rohan, IT Lead",
        setting: "A group office with SSO in place. Two changes in one week.",
        timeline: [
          { time: "Mon 09:00", event: "Ananya joins Sales. Her company account exists; she opens ZapBuzzer and signs in with it." },
          { time: "Mon 09:05", event: "She orders a coffee to her desk on day one without asking anyone for a password." },
          { time: "Fri 18:00", event: "A pantry contractor finishes his assignment. IT disables his company account as usual." },
          { time: "Fri 18:01", event: "He can no longer sign in to ZapBuzzer. The audit log keeps his past actions." },
        ],
        outcome: "Access to ZapBuzzer followed the company’s own joiner and leaver process, with nothing extra for the office manager to remember.",
      },
      {
        type: "workflow",
        heading: "How SSO Is Set Up",
        steps: [
          { title: "Tell Us Your Identity Provider", body: "Share which provider your company uses when you contact us about Enterprise." },
          { title: "Exchange Configuration", body: "Your IT team and our team exchange the details needed, guided by your customer success manager." },
          { title: "Test With a Small Group", body: "A pilot floor signs in through SSO before everyone switches." },
          { title: "Roll Out", body: "Invite the rest of the company and retire separate passwords where your policy says so." },
        ],
      },
      {
        type: "checklist",
        heading: "Questions IT Usually Asks Us",
        items: [
          "Which identity provider do we use, and who administers it?",
          "Should staff such as pantry or housekeeping use SSO too, or is that different?",
          "How will roles in ZapBuzzer be assigned after sign-in?",
          "What is our offboarding process, and does it cover contractors?",
          "Do we want a custom domain at the same time?",
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Part of Enterprise",
        body: "SSO and SAML are included with Enterprise, along with a REST API, webhooks, white-labelling, your own domain, a dedicated customer success manager and an on-prem option. Write to hello@zapbuzzer.com to start.",
      },
      {
        type: "prose",
        heading: "Why It Matters for Audits",
        paragraphs: ["Every action in ZapBuzzer goes into the audit log, a record of who did what and when. With SSO, each entry belongs to a company account that IT already manages. That makes the usual review questions much easier to answer: who accepted this request, who changed that permission, who still has access today.","It also closes a common gap. In offices without SSO, a departing employee’s app access depends on someone remembering to remove it. With SSO, it ends with the company account."],
      },
    ],
    faqs: [
      { q: "Is SSO Available on the Pro Plan?", a: "No. SSO and SAML are Enterprise capabilities. Pro uses standard sign-in with invites." },
      { q: "Which Identity Providers Do You Support?", a: "Tell us which provider your company uses and we will confirm the setup during Enterprise onboarding. We would rather confirm than give you a generic list." },
      { q: "Does SSO Change What People Can Do in ZapBuzzer?", a: "No. SSO handles who someone is. What they can do still comes from ZapBuzzer roles and permissions." },
      { q: "What Happens to a Leaver’s History?", a: "Their past requests and actions stay in the audit log and reports. Once IT disables their company account, they can no longer sign in through SSO." },
      { q: "Can Staff Without Company Email Use the App?", a: "Many offices have pantry, housekeeping or contract staff without company accounts. Discuss how you want them to sign in with your customer success manager." },
      { q: "Do Employees Need a Separate ZapBuzzer Password With SSO?", a: "No. With SSO and SAML they sign in using the company account they already have, so there is no extra password to remember or reset." },
      { q: "How Quickly Does a Leaver Lose Access With SSO?", a: "Access follows the company account. Once your IT team disables that account, the person can no longer sign in to ZapBuzzer, without anyone needing to remember a separate step." },
      { q: "Can We Enable SSO for One Location Before the Whole Group?", a: "Tell us how you want to roll it out and your customer success manager will plan the setup with you during Enterprise onboarding." },
    ],
    related: ["integrations", "enterprise/security", "enterprise/user-management", "admin/roles-and-permissions", "developers/authentication", "integrations/custom-domain", "pricing/enterprise"],
    cta: ENTERPRISE_CTA,
  },
];
