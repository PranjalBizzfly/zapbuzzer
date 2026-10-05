import type { PageContent } from "../types";

const ENTERPRISE_CTA = {
  title: "Talk to us about Enterprise",
  body: "Write to hello@zapbuzzer.com with what you want to connect and why. We reply within one business day and walk you through what Enterprise includes for your setup.",
};

export const pages: PageContent[] = [
  // ───────────────────────────── Hub ─────────────────────────────
  {
    path: "integrations",
    title: "Integrations, API, SSO and White-Label",
    description:
      "How ZapBuzzer connects to the rest of your office: Telegram, WhatsApp and email pings on Pro, plus REST API, webhooks, SSO/SAML and white-label on Enterprise.",
    h1: "Connect ZapBuzzer to the way your company already works",
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
        heading: "Two kinds of connection",
        paragraphs: [
          "ZapBuzzer connects outwards in two different ways, and it helps to keep them apart. The first is about people: getting a buzz in front of the pantry team, the print room or the IT desk wherever they are looking. That is the notification layer, and it is part of the everyday product. The free plan sends email; Pro adds Telegram and WhatsApp alongside the mobile app and web app, all at once, repeating until someone taps Accept.",
          "The second is about systems: letting your company’s own software read what happens in ZapBuzzer, react to it, or control who gets in and what they see. That is the Enterprise layer: a REST API, webhooks, single sign-on with SAML, white-label branding and a custom domain. These are built for groups and facility companies running many offices, and they are set up with a dedicated customer success manager rather than switched on from a settings page.",
        ],
      },
      {
        type: "table",
        heading: "What connects, and on which plan",
        intro: "Plan boundaries as listed on our pricing page.",
        headers: ["Connection", "What it does", "Plan"],
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
        heading: "The notification layer, in one picture",
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
        heading: "The Enterprise building blocks",
        intro: "Each has its own page with the detail. In short:",
        items: [
          { title: "REST API", body: "A way for your internal tools to read requests and their history, so a weekly operations report or a facilities dashboard can be built from real data instead of exports." },
          { title: "Webhooks", body: "ZapBuzzer tells your system when something happens, such as a request being delivered or escalated, so you can react without polling." },
          { title: "SSO and SAML", body: "Staff and employees sign in with the identity your company already manages, and leavers lose access when their company account is closed." },
          { title: "White-label", body: "Facility companies can present the app under their own brand to the offices they serve." },
          { title: "Custom domain", body: "The web app lives at an address your people recognise, rather than ours." },
          { title: "Dedicated CSM and on-prem option", body: "Someone who knows your rollout, and a deployment option for organisations that need the system on their own infrastructure." },
        ],
      },
      {
        type: "scenario",
        heading: "A facility company connecting twelve client offices",
        persona: "Meera, Head of Operations at a facility services company",
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
        heading: "When Pro is enough, and when to look at Enterprise",
        columns: ["Pro is usually enough", "Enterprise is worth a conversation"],
        rows: [
          { label: "Size", a: "One company, one or several locations", b: "A group of companies or a facility provider serving many clients" },
          { label: "Sign-in", a: "People sign up with email invites", b: "Your IT team requires sign-in through your identity provider" },
          { label: "Reporting", a: "Built-in analytics, scorecards and reports cover it", b: "Request data must flow into your own reporting or BI tools" },
          { label: "Brand", a: "ZapBuzzer branding is fine", b: "Clients should see your name and your web address" },
          { label: "Automation", a: "SLA timers and escalation chains handle follow-up", b: "Other internal systems need to react to request events" },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "No public API reference, on purpose",
        body:
          "We do not publish an open API reference. Enterprise customers receive access, credentials and the documentation for their account during onboarding, along with help from their customer success manager. That keeps every integration tied to a named customer and a named contact.",
      },
      {
        type: "checklist",
        heading: "Before you get in touch, it helps to know",
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
        heading: "What we do not integrate with",
        paragraphs: [
          "To be plain about it: today ZapBuzzer’s ready-made connections are its notification channels, meaning the app, Telegram, WhatsApp and email. We do not list built-in connectors to chat suites, ticketing tools or HR systems. If you need data to reach one of those, the Enterprise API and webhooks are the route, built by your team or a partner with our help.",
        ],
      },
    ],
    faqs: [
      { q: "Do I need Enterprise to get Telegram or WhatsApp notifications?", a: "No. Telegram and WhatsApp pings are part of Pro at ₹99 per seat per month. The free plan sends email notifications, and the mobile and web apps work on every plan." },
      { q: "Is there a public API I can try during the free trial?", a: "No. The REST API and webhooks are Enterprise capabilities, and access is set up during Enterprise onboarding. The 14-day trial is a good way to see the request flow your integration would work with." },
      { q: "Can I connect ZapBuzzer to our ticketing or chat tool?", a: "There is no ready-made connector for third-party tools beyond our notification channels. With Enterprise, your team can use the REST API and webhooks to pass request data into the tools you already run." },
      { q: "Who helps us set integrations up?", a: "Enterprise includes a dedicated customer success manager. They share the documentation for your account and stay involved while your team builds and tests." },
      { q: "Can we buy only SSO without the rest of Enterprise?", a: "Enterprise is priced to fit each organisation, so tell us what you need. Write to hello@zapbuzzer.com and we will reply within one business day." },
    ],
    related: ["enterprise", "pricing/enterprise", "developers/api", "developers/webhooks", "integrations/sso-saml", "notifications/multi-channel", "contact"],
    cta: ENTERPRISE_CTA,
  },

  // ───────────────────────────── API overview ─────────────────────────────
  {
    path: "developers/api",
    title: "ZapBuzzer API Overview for Enterprise Teams",
    description:
      "What the ZapBuzzer Enterprise API is for: moving office request data into your own reports and tools, the patterns teams use, and how to get access to it.",
    h1: "An API for the requests your office already makes",
    eyebrow: "Developers",
    lead:
      "Every coffee, print job, AC complaint and courier pickup in ZapBuzzer leaves a timed record. On Enterprise, your developers can work with those records through a REST API and hear about changes through webhooks. This page explains what that is good for before anyone writes a line of code.",
    keywords: ["zapbuzzer api", "office request api", "facilities request data api", "enterprise api office app"],
    heroVisual: "request-timeline",
    sections: [
      {
        type: "prose",
        heading: "Why an internal-request tool needs an API at all",
        paragraphs: [
          "For most offices the built-in dashboard, analytics and reports answer the daily questions: who accepted, how long it took, whether it was on time, how it was rated. Groups and facility companies have a second set of questions that live outside ZapBuzzer. Finance wants the monthly cost of pantry orders by cost centre. A client wants on-time delivery numbers in their own report format. An operations team wants overdue facilities jobs on the same wall screen as everything else.",
          "The API exists for those questions. It lets your systems work with request data directly, so nobody has to export, copy and paste every month.",
        ],
      },
      {
        type: "features",
        heading: "Two halves: pull and push",
        items: [
          { title: "REST API (pull)", body: "Your system asks ZapBuzzer for data when it needs it, such as last week’s print requests for the 4th floor or every escalated facilities job this month." },
          { title: "Webhooks (push)", body: "ZapBuzzer tells your system when a request moment happens, such as delivery or escalation, so you can act right away without asking repeatedly." },
          { title: "Same records, same lifecycle", body: "Both describe the requests you see in the app: buzzed, accepted, started, delivered and rated, each with timings attached." },
        ],
      },
      {
        type: "visual",
        visual: "request-timeline",
        heading: "The lifecycle your integration works with",
        body:
          "A request moves from buzzed to accepted to started, delivered and rated, and every step is timed. Integrations read this timeline or react when it moves forward.",
        points: ["Accept time shows how quickly the team responded", "Delivery against the SLA shows whether it was on time", "Ratings show how the requester felt about it"],
      },
      {
        type: "table",
        heading: "Common uses we hear about",
        headers: ["Goal", "Typical approach"],
        rows: [
          ["Monthly client report for a facility contract", "Pull completed requests per site through the REST API once a month"],
          ["Pantry spend by department", "Pull delivered orders and costs into your finance sheet or BI tool"],
          ["Live wall screen for the operations room", "Receive webhooks for new, accepted and escalated requests"],
          ["Alert a supervisor’s own tracker on SLA breach", "Receive escalation webhooks and create an item there"],
          ["Archive request history in your data warehouse", "Run a scheduled sync that picks up new and changed requests"],
        ],
      },
      {
        type: "scenario",
        heading: "Replacing a monthly export",
        persona: "Rohan, IT lead at a group with four offices",
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
        heading: "Good habits for any integration",
        intro: "General advice that applies to the ZapBuzzer API as much as any other.",
        items: [
          "Give each integration its own credentials, so one can be revoked without breaking the rest",
          "Ask only for the access the integration needs; a reporting job should not be able to change requests",
          "Keep secrets in a secrets manager or environment configuration, never in source code or chat",
          "Make syncs safe to run twice, so a retry never creates duplicate rows",
          "Log what your integration did and when, so problems can be traced",
          "Name an owner for every integration who will notice when it stops",
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Where the technical details live",
        body:
          "Endpoints, data fields, authentication and limits are documented for Enterprise customers and shared during onboarding. We keep them out of public pages so that what you read always matches what your account actually has.",
      },
      {
        type: "workflow",
        heading: "How to get access",
        steps: [
          { title: "Tell us the goal", body: "Email hello@zapbuzzer.com or use the contact page with what you want to build and which offices it covers." },
          { title: "Agree the Enterprise plan", body: "Enterprise is custom-priced. We work out seats, locations and the capabilities you need." },
          { title: "Onboard with your CSM", body: "Your customer success manager shares access and documentation and answers questions as you build." },
          { title: "Test, then go live", body: "Run your integration against real requests from a pilot office before rolling it out to every location." },
        ],
      },
    ],
    faqs: [
      { q: "Which plan includes the API?", a: "The REST API and webhooks are part of Enterprise. They are not available on the Free or Pro plans." },
      { q: "Can I see the API documentation before buying?", a: "Documentation is shared with Enterprise customers during onboarding. If you are evaluating, write to us with what you want to build and we can tell you whether it fits." },
      { q: "Do I need the API to get reports?", a: "Often not. Pro includes full analytics, scorecards, audit logs and reports. The API is for when that data must live inside your own systems." },
      { q: "Can the API create requests as well as read them?", a: "What your account can do through the API is agreed and documented during Enterprise onboarding. Tell us your use case and we will be specific about it." },
      { q: "Who should own the integration on our side?", a: "Usually an IT or engineering lead, with an operations person who knows what the numbers should look like. Your customer success manager works with both." },
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
    h1: "Pull request data into the systems you already report from",
    eyebrow: "Developers",
    lead:
      "The REST API is the pull side of ZapBuzzer’s Enterprise integration: your system asks for request data when it needs it. It suits scheduled syncs, reports and dashboards that should reflect what really happened in the pantry, print room and facilities queue.",
    keywords: ["zapbuzzer rest api", "office request data sync", "facilities report api", "request data export api"],
    heroVisual: "analytics",
    sections: [
      {
        type: "prose",
        heading: "What a REST API is, in this context",
        paragraphs: [
          "A REST API is a set of web addresses your software can call to read or work with data, much like a browser loads a page but for programs. In ZapBuzzer the data is your office’s requests: what was asked for, from where, by whom, who accepted it, how long each step took, and how it was rated.",
          "Because those records are timed, the API is a reliable source for operations reporting. A 24-copy colour print job carries its accept time and delivery time; an AC complaint carries whether it escalated. Your reports can use those facts directly.",
        ],
      },
      {
        type: "visual",
        visual: "analytics",
        heading: "The numbers in your own tools",
        body:
          "The same accept times, on-time rates and ratings you see in ZapBuzzer analytics can be pulled into the tools your finance team, clients or leadership already read.",
        points: ["Group-level views across many offices", "Client-ready reports for facility contracts", "Long-term history in your own warehouse"],
      },
      {
        type: "problem-solution",
        heading: "Exports versus a sync",
        problem: {
          title: "Monthly export by hand",
          points: ["Someone remembers to download it, or doesn’t", "Copy-paste errors creep into client reports", "Numbers drift from what managers saw in the app", "History lives in scattered spreadsheets"],
        },
        solution: {
          title: "Scheduled API sync",
          points: ["Runs on its own, every night or hour", "Same records ZapBuzzer used for its own analytics", "One table every report reads from", "History kept as long as your policy says"],
        },
      },
      {
        type: "workflow",
        heading: "A typical sync pattern",
        intro: "A shape many teams use for reporting. The exact calls come from your Enterprise documentation.",
        steps: [
          { title: "Remember where you stopped", body: "Store the time of the last successful sync so the next run only asks for what is new or changed." },
          { title: "Fetch in pages", body: "Read results in batches rather than all at once, so large months do not time out." },
          { title: "Upsert, don’t insert", body: "Write each request by its own identifier, so re-reading the same request updates it instead of duplicating it." },
          { title: "Advance the marker last", body: "Only move the last-sync marker after everything is written, so a failed run simply repeats." },
          { title: "Report on the copy", body: "Point dashboards and reports at your synced table, not at live calls, to keep them fast and predictable." },
        ],
      },
      {
        type: "scenario",
        heading: "Pantry cost by department",
        persona: "Sneha, finance controller",
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
        heading: "Good practices for REST integrations",
        items: [
          "Use a read-only scope for reporting jobs where your account allows it",
          "Back off and retry on temporary errors instead of hammering the service",
          "Respect whatever usage limits your documentation describes",
          "Keep credentials in a secrets manager, rotate them, and never commit them to code",
          "Treat personal data, such as names on requests, under your own data policy",
          "Alert a named person if a scheduled sync fails twice in a row",
        ],
      },
      {
        type: "callout",
        tone: "warning",
        title: "We will not guess at specifics here",
        body:
          "This page deliberately avoids endpoint names, field lists and limits. Those come with your Enterprise documentation, which is the only source your developers should build against.",
      },
      {
        type: "prose",
        heading: "Reporting that people trust",
        paragraphs: ["The point of a sync is not the code; it is that the numbers in a client report or a board pack match what the office actually lived through. When Aarav’s coffee arrives in four minutes instead of twenty-five, that four minutes should show up the same way in ZapBuzzer analytics and in your own dashboard.","That is why we suggest building reports on a synced copy of the request records rather than on hand-made exports, and checking a sample of requests against the admin dashboard when you first go live."],
      },
    ],
    faqs: [
      { q: "Is the REST API included on Pro?", a: "No. The REST API is an Enterprise capability. Pro includes built-in analytics, scorecards, audit logs and reports inside ZapBuzzer." },
      { q: "How fresh is the data from a sync?", a: "As fresh as your schedule makes it. Many teams sync nightly for reports; if you need to react within seconds, webhooks are the better fit." },
      { q: "Can we pull data for several offices at once?", a: "Enterprise is designed for groups and multi-location setups. How locations are represented in the API is covered in your onboarding documentation." },
      { q: "Where can I find the endpoint list?", a: "It is shared with Enterprise customers during onboarding. Write to hello@zapbuzzer.com to start that conversation." },
    ],
    related: ["developers/api", "developers/api-requests", "developers/authentication", "developers/webhooks", "enterprise/reporting", "admin/spend-visibility", "pricing/enterprise"],
    cta: ENTERPRISE_CTA,
  },

  // ───────────────────────────── Authentication ─────────────────────────────
  {
    path: "developers/authentication",
    title: "API Authentication and Credential Safety",
    description:
      "How access to the ZapBuzzer Enterprise API is granted and governed, with practical advice on least privilege, secret storage, rotation and revoking access.",
    h1: "Who gets to call the API, and how you keep it that way",
    eyebrow: "Developers",
    lead:
      "API access to ZapBuzzer is issued to Enterprise customers during onboarding, with the method and documentation for your account. This page covers the part that is up to you: deciding who holds credentials, keeping them safe and taking them back when needed.",
    keywords: ["zapbuzzer api authentication", "api credentials best practice", "least privilege api access", "enterprise api security"],
    heroVisual: "roles",
    sections: [
      {
        type: "prose",
        heading: "Authentication, in plain words",
        paragraphs: [
          "Authentication is how ZapBuzzer knows that a call really comes from your integration and not from someone who guessed an address. Authorisation is what that integration is then allowed to do. Both matter: a reporting script that can read requests is useful, and the same script able to change them is a risk nobody needs.",
          "The specific scheme your account uses is described in the documentation you receive at onboarding. We do not publish it here, so nobody builds against a guess.",
        ],
      },
      {
        type: "visual",
        visual: "roles",
        heading: "Treat integrations like people with roles",
        body:
          "ZapBuzzer already gives people granular permissions by role, with an owner-only spend view. Think about each integration the same way: a named purpose, a named owner and only the access that purpose needs.",
        points: ["Reporting jobs read; they do not edit", "Each integration has its own credentials", "Every action stays traceable in the audit log"],
      },
      {
        type: "checklist",
        heading: "Credential hygiene checklist",
        intro: "General practice we recommend to every Enterprise team.",
        items: [
          "Store secrets in a secrets manager or protected environment configuration",
          "Never paste credentials into chat, email, tickets or source code",
          "Issue separate credentials per integration and per environment",
          "Rotate credentials on a schedule and whenever someone with access leaves",
          "Keep a short register: credential, purpose, owner, created date",
          "Revoke anything you cannot name an owner for",
        ],
      },
      {
        type: "comparison",
        heading: "Shared key versus scoped credentials",
        columns: ["One shared credential", "Scoped, per-integration credentials"],
        rows: [
          { label: "When it leaks", a: "Everything stops while you replace it everywhere", b: "Revoke one, the rest keep running" },
          { label: "Who did what", a: "Impossible to tell which tool made a call", b: "Each call traces back to one integration" },
          { label: "Access", a: "Usually broader than any one job needs", b: "Limited to what that job needs" },
          { label: "Staff changes", a: "Leavers may still know it", b: "Rotate only what they touched" },
        ],
      },
      {
        type: "scenario",
        heading: "A contractor leaves mid-project",
        persona: "Rohan, IT lead",
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
        heading: "How SSO relates, and how it doesn’t",
        items: [
          { title: "SSO is for people", body: "SSO and SAML let employees and staff sign in to the app with your company identity." },
          { title: "API credentials are for systems", body: "Integrations authenticate separately, as described in your Enterprise documentation." },
          { title: "Both on Enterprise", body: "Both are part of Enterprise and are set up with your customer success manager." },
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Least privilege is a habit, not a setting",
        body:
          "Start every integration with the smallest access that works and widen it only when a real need appears. It is much easier than taking access away later.",
      },
      {
        type: "prose",
        heading: "Keeping the audit trail meaningful",
        paragraphs: ["ZapBuzzer audit-logs every action, which is useful only if each actor is identifiable. Give integrations clear names and separate credentials, and the trail stays readable: you can tell a nightly reporting job from a webhook receiver, and both from a person working in the app.","When something unexpected appears, such as a request changed at 3 a.m., a well-named credential turns a long investigation into a short one. Pair that with a simple register of who owns which credential and you have most of what an auditor will ask about."],
      },
    ],
    faqs: [
      { q: "What authentication method does the ZapBuzzer API use?", a: "The method for your account is documented and shared during Enterprise onboarding. We keep it off public pages so your team builds against the exact details for your setup." },
      { q: "Can we limit an integration to read-only access?", a: "Tell your customer success manager what each integration needs. Scoping access to the job is what we recommend, and we will explain what your account supports." },
      { q: "What should we do if a credential leaks?", a: "Revoke it straight away, issue a replacement, and review recent activity. Then contact us at hello@zapbuzzer.com so we can help check anything unusual." },
      { q: "Is API authentication the same as SSO?", a: "No. SSO and SAML are for people signing in to the app. API credentials are for software calling the API. Both are Enterprise capabilities." },
    ],
    related: ["developers/api", "developers/rest-api", "integrations/sso-saml", "enterprise/security", "admin/roles-and-permissions", "admin/audit-logs", "pricing/enterprise"],
    cta: ENTERPRISE_CTA,
  },

  // ───────────────────────────── API requests ─────────────────────────────
  {
    path: "developers/api-requests",
    title: "Working With Office Requests via the API",
    description:
      "How Enterprise integrations work with ZapBuzzer office requests through the API: reading the lifecycle, building reliable syncs and handling errors safely.",
    h1: "Office requests, seen from your integration’s side",
    eyebrow: "Developers",
    lead:
      "An office request in ZapBuzzer is more than a message. It has a requester, a destination, a team, an owner, timings and a rating. This page explains how to think about that record when your Enterprise integration reads it, and how to avoid the usual mistakes.",
    keywords: ["office request api", "request lifecycle data", "api sync best practices", "zapbuzzer requests api"],
    heroVisual: "request-dashboard",
    sections: [
      {
        type: "prose",
        heading: "What a request represents",
        paragraphs: [
          "When Kavya uploads a PDF and asks for 24 colour copies, the request records what she asked for, where it should go, which team was pinged, who accepted it first, when it started, when it was delivered and the rating she gave. When Om reports Conference Room B’s AC stuck at 16°C, the same shape applies, plus whether it escalated to a manager.",
          "Your integration works with that same record. The exact names of the data it carries are in your Enterprise documentation; the concepts are the ones your teams already see in the app.",
        ],
      },
      {
        type: "glossary",
        heading: "Concepts you will meet",
        terms: [
          { term: "Requester", definition: "The employee who tapped Buzz." },
          { term: "Destination", definition: "Where the request should arrive, such as the boss cabin or a meeting room." },
          { term: "Team", definition: "The group pinged for this kind of request, such as pantry, print room or IT desk." },
          { term: "Owner", definition: "The staff member who accepted first and now owns the request." },
          { term: "SLA deadline", definition: "The time by which the request should be delivered before it escalates." },
          { term: "Rating", definition: "The 1 to 5 star score the requester gave after delivery." },
        ],
      },
      {
        type: "visual",
        visual: "request-dashboard",
        heading: "The same queue your admins watch",
        body:
          "The live queue in the admin dashboard shows the records your integration works with. If a number in your report looks odd, this is where to check it.",
      },
      {
        type: "table",
        heading: "Reading the lifecycle reliably",
        headers: ["Situation", "What to do"],
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
        heading: "Board-day readiness check",
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
        heading: "Error handling basics",
        items: [
          "Distinguish temporary failures, worth retrying, from permanent ones, worth fixing",
          "Retry with exponential back-off and a sensible cap",
          "Make writes idempotent so a retry cannot double up",
          "Log the request and response details you need to debug, without logging secrets",
          "Fail loudly to a named owner rather than silently skipping data",
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Documentation comes with access",
        body:
          "Field names, filters, paging and limits are documented for your account during Enterprise onboarding. Contact hello@zapbuzzer.com to begin.",
      },
      {
        type: "prose",
        heading: "Start small, then widen",
        paragraphs: ["The most successful integrations begin with one question, such as how many print jobs each floor sent last month, and one office. Once those numbers match what managers see in ZapBuzzer, the same sync is extended to more sites and more request types.","Starting small also makes it easier to spot gaps in your own data, like employees missing a department or offices named differently in two systems, before they spread into every report."],
      },
    ],
    faqs: [
      { q: "Does the API return the same data I see in the app?", a: "Integrations work with the same request records your teams see in ZapBuzzer. Which details your account exposes is covered in your Enterprise documentation." },
      { q: "How should we handle requests that are still in progress?", a: "Treat them as changeable. Store them, re-read them later or listen for webhooks, and update your copy by the request’s identifier." },
      { q: "Can ratings change after delivery?", a: "A rating arrives after delivery, so your integration should expect a delivered request to gain a rating later. Design your sync to update rather than freeze delivered records." },
      { q: "What if our sync misses a night?", a: "If you store a last-successful-sync marker and advance it only after a full run, the next run simply picks up everything since then." },
      { q: "Is this available on Pro?", a: "No. API access is part of Enterprise. Pro customers get built-in analytics, reports and audit logs." },
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
    h1: "Let your systems hear about requests the moment they move",
    eyebrow: "Developers",
    lead:
      "A webhook is ZapBuzzer calling your system when something happens, instead of your system asking over and over. On Enterprise, webhooks let other tools react to deliveries, escalations and other request moments as they occur.",
    keywords: ["zapbuzzer webhooks", "office request webhooks", "sla breach webhook", "enterprise webhooks"],
    heroVisual: "escalation",
    sections: [
      {
        type: "prose",
        heading: "Push instead of poll",
        paragraphs: [
          "With the REST API your system asks for data. With webhooks ZapBuzzer sends a short message to an address you provide whenever a request reaches a moment you care about. That is what makes near-real-time reactions possible: an operations wall screen updating as requests are accepted, or a supervisor’s tracker getting an item the moment an AC complaint breaches its SLA.",
          "Webhooks complement notifications rather than replacing them. People still get buzzed in the app, on Telegram, WhatsApp and email. Webhooks are for software.",
        ],
      },
      {
        type: "visual",
        visual: "escalation",
        heading: "Escalations are the classic use",
        body:
          "When a request runs past its deadline, ZapBuzzer escalates it to a manager. A webhook can carry that same moment into the system where your supervisors already plan their day.",
        points: ["React within moments, not at the next report", "Keep a breach log in your own system", "Combine with the escalation chain on the manager’s side"],
      },
      {
        type: "table",
        heading: "What teams do with webhooks",
        headers: ["Request moment", "Typical reaction"],
        rows: [
          ["New request created", "Show it on an operations room screen"],
          ["Request delivered", "Close the matching item in a client’s service log"],
          ["Request escalated", "Create a follow-up for the duty supervisor"],
          ["Low rating received", "Flag it for the team lead to review that day"],
        ],
      },
      {
        type: "workflow",
        heading: "Building a dependable receiver",
        intro: "General patterns that keep webhook receivers reliable.",
        steps: [
          { title: "Verify the sender", body: "Check that each message really came from ZapBuzzer using the verification method in your Enterprise documentation, and reject anything that fails." },
          { title: "Acknowledge fast", body: "Respond quickly and do heavy work afterwards in a queue, so slow processing does not look like a failure." },
          { title: "Handle duplicates", body: "Assume the same message may arrive more than once and make your handling idempotent." },
          { title: "Don’t rely on order", body: "Messages can arrive out of sequence; when it matters, check the request’s current state." },
          { title: "Have a fallback", body: "Run a periodic REST sync as a safety net in case your receiver was down." },
        ],
      },
      {
        type: "scenario",
        heading: "The AC that wouldn’t warm up",
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
        heading: "Security basics for receivers",
        items: [
          "Only accept messages over HTTPS",
          "Verify every message before acting on it",
          "Keep the verification secret in a secrets manager and rotate it",
          "Don’t expose more of your internal system than the receiver needs",
          "Log receipts and failures so you can audit what happened",
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Event catalogue and setup",
        body:
          "Which events your account can subscribe to, how they are verified and how retries work are documented during Enterprise onboarding.",
      },
      {
        type: "prose",
        heading: "Webhooks and people work together",
        paragraphs: ["A webhook never replaces the person who has to act. When Aarav buzzes for coffee in a board call, Raj still hears it on Telegram and accepts it in 12 seconds. The webhook simply tells another system that it happened, so a screen, a log or a report can stay current without anyone typing it in.","Keep that split in mind when designing: notifications and escalation chains handle the human follow-up; webhooks carry the record to wherever else it needs to be."],
      },
    ],
    faqs: [
      { q: "Which plan includes webhooks?", a: "Webhooks are an Enterprise capability, alongside the REST API, SSO and SAML, white-label and a custom domain." },
      { q: "Do webhooks replace Telegram or WhatsApp notifications?", a: "No. Notifications reach people; webhooks reach software. Most Enterprise customers use both." },
      { q: "What happens if our receiver is down?", a: "How deliveries are retried is described in your Enterprise documentation. As a general practice, pair webhooks with a periodic REST sync so nothing is lost." },
      { q: "How do we know a webhook really came from ZapBuzzer?", a: "Your documentation describes how to verify messages. Always verify before acting, and reject anything that fails the check." },
      { q: "Can we send webhooks to a third-party tool directly?", a: "Webhooks go to an address you control. What you do from there, including passing data on to other tools, is up to your integration." },
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
    h1: "Which request moments are worth listening for",
    eyebrow: "Developers",
    lead:
      "Every ZapBuzzer request moves through a clear lifecycle: buzzed, accepted, started, delivered and rated, with escalation if it runs late. These are the natural moments to subscribe to. The exact event catalogue for your account is shared during Enterprise onboarding.",
    keywords: ["zapbuzzer webhook events", "request lifecycle events", "sla escalation event", "office request event subscription"],
    heroVisual: "request-timeline",
    sections: [
      {
        type: "callout",
        tone: "info",
        title: "Concepts, not a catalogue",
        body:
          "This page describes lifecycle moments as concepts. Event names, contents and delivery rules come from your Enterprise documentation, which your customer success manager shares during onboarding.",
      },
      {
        type: "visual",
        visual: "request-timeline",
        heading: "The lifecycle, step by step",
        body: "Each step is timed in ZapBuzzer, which is what makes these moments useful to other systems.",
      },
      {
        type: "table",
        heading: "Lifecycle moments and why you might subscribe",
        headers: ["Moment", "What it means in the office", "Why a system might care"],
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
        heading: "Who usually listens to what",
        items: [
          { role: "Operations room", benefit: "Created, accepted and escalated, to keep a live board accurate." },
          { role: "Facility company account managers", benefit: "Delivered and escalated, to keep client service logs current." },
          { role: "Finance", benefit: "Delivered, to pick up costed pantry orders as they complete." },
          { role: "Team leads", benefit: "Rated, to catch a two-star delivery the same day." },
        ],
      },
      {
        type: "scenario",
        heading: "Watching a pitch-day print job",
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
        heading: "Choosing subscriptions sensibly",
        items: [
          "Subscribe only to the moments a real process uses",
          "Start with one or two, like delivered and escalated, then add more",
          "Treat each event as a hint and confirm current state when it matters",
          "Expect duplicates and out-of-order arrivals",
          "Write down which system owns each subscription",
        ],
      },
      {
        type: "prose",
        heading: "Why escalation is often the first one",
        paragraphs: [
          "Most teams start with escalation because it marks the moment something has gone wrong. ZapBuzzer already escalates overdue requests to a manager, with an escalation chain available on Pro and above. On Enterprise, a webhook lets the same moment reach a separate system your supervisors watch, so breaches show up in the place they plan their work.",
        ],
      },
      {
        type: "prose",
        heading: "Mapping moments to your own process",
        paragraphs: ["Before subscribing, sketch your own process on paper. For a facility contract it might be: request arrives, our staff respond, work is done, client confirms. Each step lines up with a lifecycle moment in ZapBuzzer, which tells you which events matter and which you can ignore.","This also shows where the timing lives. Accept time measures how quickly your staff responded; delivery against the deadline measures whether the promise was kept; the rating measures how the requester felt. Most client reports need all three, each from a different moment.","Once the sketch is agreed, your customer success manager can confirm which events in the Enterprise catalogue correspond to each step."],
      },
      {
        "type": "checklist",
        "heading": "Before subscribing to an event",
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
        "q": "Where do I find the event list and payload details?",
        "a": "Webhooks are part of Enterprise, and the technical details are shared during onboarding with your dedicated CSM. Write to hello@zapbuzzer.com to start."
      },
      { q: "Where is the full list of webhook events?", a: "The exact event catalogue is shared with Enterprise customers during onboarding. This page only describes the lifecycle moments in general terms." },
      { q: "Can we get an event when a request escalates?", a: "Escalation is one of the natural moments to subscribe to. Your onboarding documentation confirms exactly what your account offers." },
      { q: "Do we have to subscribe to everything?", a: "No, and we would not recommend it. Subscribe to the moments a real process depends on and add more as needs appear." },
      { q: "Will events arrive in lifecycle order?", a: "Design as if they might not. Check a request’s current state when order matters, and handle duplicates safely." },
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
    h1: "Your web address, your staff’s request app",
    eyebrow: "Integrations",
    lead:
      "On Enterprise, ZapBuzzer’s web app can be served from a domain you choose. Employees bookmark an address that belongs to your company or your facility brand, which matters most when the app is part of a service you offer to others.",
    keywords: ["custom domain office app", "zapbuzzer custom domain", "branded request portal", "white label domain"],
    heroVisual: "mobile-app",
    sections: [
      {
        type: "prose",
        heading: "Why the address matters",
        paragraphs: [
          "People trust links that look like they belong to their employer. A request page at an address with your company name is easier to remember, easier to put on a poster in the pantry, and less likely to be mistaken for something suspicious by a cautious employee or IT team.",
          "For facility companies, the address is part of the service. If you run pantry, print and housekeeping for client offices, a domain carrying your name tells clients whose service this is.",
        ],
      },
      {
        type: "visual",
        visual: "mobile-app",
        heading: "Same app, familiar address",
        body: "Employees see the same request grid and the same one-tap flow. Only the address in the browser, and with white-label the branding, is yours.",
      },
      {
        type: "features",
        heading: "What a custom domain gives you",
        items: [
          { title: "Recognisable links", body: "Invites, posters and intranet links point to your address." },
          { title: "Pairs with white-label", body: "Combined with white-label, employees see your name in the address and on the screen." },
          { title: "Works with SSO", body: "Sign-in through your identity provider can sit behind the same domain experience." },
          { title: "Set up with your CSM", body: "Your customer success manager coordinates the steps with your IT team." },
        ],
      },
      {
        type: "workflow",
        heading: "How it usually goes",
        steps: [
          { title: "Choose the address", body: "Pick a subdomain your IT team controls, such as one under your company’s main domain." },
          { title: "Agree it with us", body: "Confirm the domain with your customer success manager as part of Enterprise onboarding." },
          { title: "Update DNS", body: "Your IT team makes the DNS change we specify for your account." },
          { title: "Test with a pilot office", body: "Invite one floor to use the new address before announcing it to everyone." },
          { title: "Announce and update links", body: "Change bookmarks, posters and intranet links to the new address." },
        ],
      },
      {
        type: "scenario",
        heading: "A facility company’s new client",
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
        heading: "Before you request a custom domain",
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
        title: "An Enterprise capability",
        body: "Custom domains are part of Enterprise, together with white-label, SSO and SAML, REST API and webhooks. Contact hello@zapbuzzer.com to discuss it.",
      },
      {
        type: "prose",
        heading: "What changes, and what doesn’t",
        paragraphs: ["A custom domain changes where people go, not how the product behaves. Requests still go to the whole team, the first to accept still owns them, SLA timers still run and escalations still reach a manager. Telegram, WhatsApp and email pings carry on as before.","What does change is everything around the address: invitation emails, posters, intranet links and any bookmark employees saved. Plan the switch like a small office move. Announce it, and check with reception and the pantry team that their phones and screens point to the new place.","Facility companies often time the switch with a new client’s first day so nobody ever learns an old address."],
      },
    ],
    faqs: [
      { q: "Is a custom domain available on Pro?", a: "No. Custom domains are an Enterprise capability, usually paired with white-label branding." },
      { q: "Do we need white-label to use a custom domain?", a: "They are separate ideas, but most customers who want their own address also want their own branding. Talk to us about which combination fits." },
      { q: "Does the mobile app change too?", a: "The custom domain is about the web address. Ask your customer success manager how branding and sign-in will appear across the web and mobile apps for your setup." },
      { q: "Who makes the DNS change?", a: "Your IT team, following the details we share for your account during onboarding." },
      { q: "Can a facility company use a different domain per client?", a: "Tell us how your client setup works and we will discuss options as part of your Enterprise agreement." },
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
    h1: "Your brand on the button your clients press",
    eyebrow: "Integrations",
    lead:
      "White-label lets facility companies and large groups present ZapBuzzer under their own name. Employees tap for coffee, prints or a facilities fix, and the service they see is yours. It is part of the Enterprise plan.",
    keywords: ["white label office request app", "white label facility management app", "branded office service app", "zapbuzzer white label"],
    heroVisual: "catalog",
    sections: [
      {
        type: "prose",
        heading: "Who white-label is for",
        paragraphs: [
          "Our Enterprise plan is described as being for groups and facility companies, and white-label is one of the main reasons why. A facility company runs pantry, print room, housekeeping and front desk for client offices. Its staff do the work, its supervisors answer for the SLA, and its name is on the contract. It makes sense that its name is on the app too.",
          "Groups use it differently: a holding company with several businesses may want one internal brand for workplace services across every office.",
        ],
      },
      {
        type: "visual",
        visual: "catalog",
        heading: "Your catalogue, your look",
        body: "The pantry catalogue, print requests and facilities buttons work exactly as in ZapBuzzer. White-label changes whose service it appears to be.",
      },
      {
        type: "comparison",
        heading: "Standard versus white-label",
        columns: ["Standard ZapBuzzer", "White-label on Enterprise"],
        rows: [
          { label: "Brand employees see", a: "ZapBuzzer", b: "Your company or facility brand" },
          { label: "Web address", a: "Ours", b: "Yours, with a custom domain" },
          { label: "Best for", a: "A company running its own office", b: "A provider serving many clients, or a group" },
          { label: "Setup", a: "Sign up and invite your team", b: "Agreed and configured with your CSM" },
        ],
      },
      {
        type: "scenario",
        heading: "Winning a renewal with visible service",
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
        heading: "What stays the same underneath",
        items: [
          { title: "First-accept-wins", body: "Requests still go to the whole team and the first to accept owns it." },
          { title: "SLA and escalation", body: "Deadlines, timers and escalation to a manager work as usual." },
          { title: "Multi-channel pings", body: "Staff still get the app, Telegram, WhatsApp and email." },
          { title: "Analytics and audit", body: "Scorecards, reports and the audit log carry on, ready for client reviews." },
        ],
      },
      {
        type: "checklist",
        heading: "What to prepare",
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
        title: "Start with one client site",
        body: "Most providers pilot the branded app with one client office before rolling it out, so posters, invites and support routes are tested on a small group first.",
      },
      {
        type: "prose",
        heading: "How white-label fits a service contract",
        paragraphs: ["For a facility company, the app is evidence. Every coffee delivered on time, every print job accepted in seconds, every escalation handled is recorded under the client’s site and rated by the people you serve. With white-label, that evidence carries your name from the employee’s first tap to the month-end report.","It also simplifies support. Employees know whose service they are using, so questions go to your supervisors rather than to an unfamiliar vendor. Your client’s admin team deals with one provider for both the people and the tool.","Groups use the same idea internally. A shared workplace-services brand across several companies makes it clear that one team runs pantry, print and facilities for everyone, even when the offices sit in different cities.","Either way, the work happens with your customer success manager, who agrees the branding, the domain and the rollout order with you before the first site goes live."],
      },
    ],
    faqs: [
      { q: "Which plan includes white-label?", a: "White-label is part of Enterprise, which has custom pricing. Contact hello@zapbuzzer.com to discuss it." },
      { q: "Does white-label change how the product works?", a: "No. The request flow, routing, SLA timers, notifications and analytics stay the same. White-label changes the brand people see." },
      { q: "Can we combine white-label with a custom domain?", a: "Yes, both are Enterprise capabilities and they are commonly set up together." },
      { q: "Can our staff still get Telegram and WhatsApp pings?", a: "Yes. White-label changes what employees see, not how your staff are notified. The app, Telegram, WhatsApp and email pings work as usual, repeating until someone accepts." },
      { q: "Exactly which parts of the app can be branded?", a: "That is agreed with your customer success manager for your setup. Tell us what you need employees to see and we will be specific." },
    ],
    related: ["integrations", "integrations/custom-domain", "enterprise", "enterprise/multi-location", "analytics", "solutions/facilities", "pricing/enterprise"],
    cta: ENTERPRISE_CTA,
  },

  // ───────────────────────────── SSO / SAML ─────────────────────────────
  {
    path: "integrations/sso-saml",
    title: "SSO and SAML Sign-In for ZapBuzzer",
    description:
      "Let employees and staff sign in to ZapBuzzer with your company identity provider through SSO and SAML, an Enterprise capability. Why it helps and how to start.",
    h1: "One company login for every coffee, print and fix",
    eyebrow: "Integrations",
    lead:
      "Single sign-on with SAML lets people sign in to ZapBuzzer using the account your company already manages. Joiners get access without another password, and leavers lose it when IT closes their company account. SSO and SAML are part of the Enterprise plan.",
    keywords: ["zapbuzzer sso", "saml office app", "single sign-on internal requests", "enterprise sso office"],
    heroVisual: "roles",
    sections: [
      {
        type: "prose",
        heading: "What SSO and SAML mean here",
        paragraphs: [
          "Single sign-on means an employee signs in once with their company identity and can use ZapBuzzer without a separate password. SAML is a widely used standard that lets your identity provider vouch for that person to ZapBuzzer.",
          "For an office with a few dozen people, email invites are fine. For a group with hundreds or thousands of employees across cities, IT usually wants every work app to follow the same sign-in and the same offboarding. That is what SSO gives you.",
        ],
      },
      {
        type: "problem-solution",
        heading: "Passwords versus company sign-in",
        problem: {
          title: "Separate passwords",
          points: ["Another password to forget", "IT cannot see who has access", "Leavers may keep access until someone remembers", "Password resets land on the office manager"],
        },
        solution: {
          title: "SSO with SAML",
          points: ["Sign in with the company account", "Access follows your identity provider", "Offboarding happens where IT already does it", "Fewer reset requests for admins"],
        },
      },
      {
        type: "visual",
        visual: "roles",
        heading: "Sign-in decides who; roles decide what",
        body:
          "SSO confirms who someone is. ZapBuzzer roles and permissions then decide what they can do, from tapping Buzz to accepting requests to viewing owner-only spend.",
        points: ["Employees request", "Staff accept and deliver", "Managers see escalations", "Owners see spend"],
      },
      {
        type: "scenario",
        heading: "Joiner Monday, leaver Friday",
        persona: "Rohan, IT lead",
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
        heading: "How SSO is set up",
        steps: [
          { title: "Tell us your identity provider", body: "Share which provider your company uses when you contact us about Enterprise." },
          { title: "Exchange configuration", body: "Your IT team and our team exchange the details needed, guided by your customer success manager." },
          { title: "Test with a small group", body: "A pilot floor signs in through SSO before everyone switches." },
          { title: "Roll out", body: "Invite the rest of the company and retire separate passwords where your policy says so." },
        ],
      },
      {
        type: "checklist",
        heading: "Questions IT usually asks us",
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
        body: "SSO and SAML are included with Enterprise alongside a REST API, webhooks, white-labelling, your own domain, a dedicated CSM and an on-prem option. Write to hello@zapbuzzer.com to start.",
      },
      {
        type: "prose",
        heading: "Why it matters for audits",
        paragraphs: ["Every action in ZapBuzzer is audit-logged. With SSO, each entry belongs to a company identity that IT already manages, which makes it far easier to answer the questions that come up in a review: who accepted this request, who changed that permission, who still has access today.","It also closes a common gap. In offices without SSO, a departing employee’s app access depends on someone remembering to remove it. With SSO, it ends with the company account."],
      },
    ],
    faqs: [
      { q: "Is SSO available on the Pro plan?", a: "No. SSO and SAML are Enterprise capabilities. Pro uses standard sign-in with invites." },
      { q: "Which identity providers do you support?", a: "Tell us which provider your company uses and we will confirm the setup during Enterprise onboarding. We would rather confirm than give you a generic list." },
      { q: "Does SSO change what people can do in ZapBuzzer?", a: "No. SSO handles who someone is. What they can do still comes from ZapBuzzer roles and permissions." },
      { q: "What happens to a leaver’s history?", a: "Their past requests and actions stay in the audit log and reports. Once IT disables their company account, they can no longer sign in through SSO." },
      { q: "Can staff without company email use the app?", a: "Many offices have pantry, housekeeping or contract staff without company accounts. Discuss how you want them to sign in with your customer success manager." },
    ],
    related: ["integrations", "enterprise/security", "enterprise/user-management", "admin/roles-and-permissions", "developers/authentication", "integrations/custom-domain", "pricing/enterprise"],
    cta: ENTERPRISE_CTA,
  },
];
