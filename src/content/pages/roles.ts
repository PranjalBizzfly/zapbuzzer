import type { PageContent } from "../types";

export const pages: PageContent[] = [
  // ───────────────────────────── CEO ─────────────────────────────
  {
    path: "use-cases/ceo",
    title: "ZapBuzzer for CEOs: A Quieter Office",
    description:
      "How CEOs use ZapBuzzer to get coffee, prints and room fixes without leaving a board call, and to see how the office actually runs from one owner view.",
    h1: "Run the Company, Not the Coffee Chase",
    eyebrow: "Use Case · CEO",
    lead:
      "A CEO's day is back-to-back meetings, and every small request that needs a phone call breaks one of them. ZapBuzzer lets you tap once from the boss cabin and get back to the conversation, while the owner view shows you how well the office serves everyone else.",
    keywords: [
      "office app for ceo",
      "ceo office requests",
      "boss cabin coffee request",
      "office service visibility for founders",
      "internal request crm",
    ],
    heroVisual: "mobile-app",
    sections: [
      {
        type: "prose",
        eyebrow: "A CEO's Day",
        heading: "Eleven Meetings, and Every One Needs Something",
        paragraphs: [
          "The investor call at 9:30 needs coffee for three. The 11 o'clock board review needs the deck printed in colour. At 2 the projector in Conference Room B decides not to see the laptop. None of these are hard problems, but each one used to mean stepping out, calling the pantry extension, or asking an assistant to chase someone.",
          "The cost is not the coffee. It is the five minutes of broken attention, the guest waiting, and the quiet message the whole office receives when the person at the top has to shout a name down the hall to get anything done.",
        ],
      },
      {
        type: "problem-solution",
        heading: "What Changes When the Boss Cabin Has a Button",
        problem: {
          title: "Without ZapBuzzer",
          points: [
            "You call the pantry, it rings out, you call again.",
            "Requests go through an assistant who then chases on WhatsApp.",
            "You never know if anyone has actually picked it up.",
            "You have no picture of how the rest of the office is served.",
          ],
        },
        solution: {
          title: "With ZapBuzzer",
          points: [
            "Tap Coffee, choose Boss Cabin, tap Buzz. Done in seconds.",
            "The whole pantry team is pinged at once; the first to accept owns it.",
            "You see the name, photo and ETA of the person on it.",
            "The owner view shows response times, ratings and spend across the office.",
          ],
        },
      },
      {
        type: "scenario",
        heading: "A Board Call That Never Paused",
        persona: "Aarav, CEO",
        setting: "Board call in the boss cabin, two directors dialled in, one in the room.",
        timeline: [
          { time: "10:02", event: "Aarav taps Coffee → Boss Cabin on his phone without leaving the call, adds a note: two cups, one without sugar." },
          { time: "10:02", event: "The pantry team sees the buzz on Telegram and in the app at the same time." },
          { time: "10:02", event: "Raj taps Accept 12 seconds later. Aarav's screen shows Raj's photo and an ETA." },
          { time: "10:06", event: "Raj delivers. Aarav gives a quick 5★ after the call." },
        ],
        outcome:
          "The before version of this was 25 minutes, three phone calls and one cold coffee. The after version was four minutes, zero calls and a hot cup on the table.",
      },
      {
        type: "visual",
        visual: "mobile-app",
        heading: "Your Catalogue, One Thumb Away",
        body:
          "The mobile app shows the things you actually ask for: coffee, prints, IT help, facilities. Even a locked or silenced phone will ring for the staff who need to hear it, so your request does not sit unread.",
        points: [
          "One tap to summon staff or security",
          "Add a short note for the details",
          "Track the request until it is delivered",
        ],
      },
      {
        type: "metrics",
        heading: "What a CEO Looks At",
        intro: "You will not live in the dashboard, but a weekly glance tells you a lot about the office.",
        items: [
          { metric: "Average Accept Time", meaning: "How quickly someone owns a request. Pilot offices averaged 32 seconds in their first month." },
          { metric: "On-Time Delivery", meaning: "Share of requests delivered before their deadline. Pilot offices hit 96%." },
          { metric: "Staff Ratings", meaning: "How employees rate the people serving them. Pilot average was 4.8★." },
          { metric: "Request Spend", meaning: "Owner-only view of what things like lunch orders cost the company." },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "In Aarav's Words",
        body:
          "“The office runs quieter. Nobody's shouting names down the hall. Coffee arrives before anyone asks twice.” — Aarav Sharma, Founder & CEO, Acme HQ (Pune)",
      },
      {
        type: "checklist",
        heading: "Rollout Tips for a CEO Sponsor",
        intro: "You do not need to configure anything yourself. Your job is to make it the normal way to ask.",
        items: [
          "Ask your office manager to set up the pantry and IT catalogues first, the two you use most.",
          "Use it yourself in week one. When the CEO buzzes instead of calling, everyone else follows.",
          "Begin with 14 days free, with neither a credit card nor a setup call required.",
          "Move to Pro (₹99 per seat per month) when you want WhatsApp and Telegram pings, SLA escalation and scorecards.",
          "Review the analytics after the first month, not the first day.",
        ],
      },
    ],
    faqs: [
      { q: "Do I Need to Install Anything to Use It?", a: "You can use the web app or the mobile app. Staff who serve requests usually install the mobile app so it rings through on a locked phone. Your account and workspace are stored on the server, so nothing is set up on your laptop." },
      { q: "Can I See What Requests Cost the Company?", a: "Yes. Request cost visibility is owner-only, so you can see what a lunch order for the team came to without that figure showing to everyone. It sits alongside the role permissions and audit log." },
      { q: "Will My Requests Jump the Queue?", a: "Every request is routed to the right team and the first person free accepts it. Requests have deadlines, so a coffee to the boss cabin is handled on the same clock as everyone else's, which is usually fast enough that priority never comes up." },
      { q: "Is This Just a Nag Tool for Staff?", a: "No. Staff get fair attribution: when they accept and deliver, it is recorded against their name and rated. Scorecards show who is fastest and who earns 5★, which gives you a reason to recognise them." },
      { q: "How Long Does It Take to Get Running?", a: "Most offices are up in an afternoon. There are no setup fees and no consultant; you sign up, invite the team and add your catalogue." },
      { q: "Can I Buzz From My Phone Without Leaving a Board Call?", a: "Yes. Tap Coffee, pick Boss Cabin, add a short note and tap Buzz. The pantry team is pinged at once and you see who accepted and their ETA without saying a word on the call." },
      { q: "What Should a CEO Look at in the Analytics Each Week?", a: "A quick glance at average accept time, on-time delivery, staff ratings and owner-only request spend. Pilot offices averaged 32 seconds to accept and 96% on-time delivery in their first month." },
      { q: "Does the CEO Need to Configure ZapBuzzer Personally?", a: "No. Your office manager sets up the catalogues and teams. Your part is to use it yourself from week one, because when the CEO buzzes instead of calling, everyone else follows." },
    ],
    related: ["use-cases/founder", "admin/owner-dashboard", "admin/spend-visibility", "workflows/coffee-request", "analytics", "pricing/pro", "free-trial"],
    cta: { title: "Try It From the Boss Cabin", body: "Start a 14-day free trial, invite your pantry team and buzz your first coffee today." },
  },

  // ───────────────────────────── Founder ─────────────────────────────
  {
    path: "use-cases/founder",
    title: "ZapBuzzer for Founders of Growing Teams",
    description:
      "For founders whose office outgrew shouting across the room: set up internal requests in an afternoon, start free for 10 staff, add Pro as the team grows.",
    h1: "The Office Systems You Never Had Time to Build",
    eyebrow: "Use Case · Founder",
    lead:
      "When the team was eight people, everyone just shouted. At forty, the shouting turns into a pantry WhatsApp group, lost print jobs and IT asks buried in your DMs. ZapBuzzer gives a growing company a proper internal-request system without hiring an admin team to run it.",
    keywords: [
      "office app for startups",
      "founder office management",
      "startup internal requests",
      "small office request system",
      "free office request app",
    ],
    heroVisual: "before-after",
    sections: [
      {
        type: "prose",
        eyebrow: "A Founder's Day",
        heading: "You Are the CEO, the IT Desk and the Office Manager",
        paragraphs: [
          "In an early company the founder wears every hat. You are pitching investors at 10, hiring at 12, and at 3 someone messages you because the Wi-Fi in the meeting room is down and they do not know who else to ask. You probably also know which of the two office boys makes better chai.",
          "ZapBuzzer was itself born in a Pune office tired of exactly this: a single coffee needing three phone calls, printouts disappearing inside a group chat, and IT problems left unanswered in private messages. It is built so a founder can set it up once and stop being the router for every small request.",
        ],
      },
      {
        type: "problem-solution",
        heading: "The Growing-Pains Version vs. The Button Version",
        problem: {
          title: "Requests That Route Through You",
          points: [
            "Staff DM the founder because nobody else is clearly responsible.",
            "The pantry group mixes orders, jokes and forwarded memes.",
            "Nothing is timed, so you only hear about delays when someone is angry.",
            "No record of who did the work, so good staff go unnoticed.",
          ],
        },
        solution: {
          title: "Requests That Route Themselves",
          points: [
            "Each catalogue item goes to the team that handles it.",
            "The first person free taps Accept and owns it.",
            "Every request is timed from buzz to delivery.",
            "Staff get credit, ratings and a scorecard for the work they do.",
          ],
        },
      },
      {
        type: "table",
        heading: "Which Plan Fits Which Stage",
        intro: "Pay per seat and cancel anytime. There are no setup fees.",
        headers: ["Stage", "Plan", "What You Get"],
        rows: [
          ["Up to 10 staff, one office", "Free", "Android and web apps, alerts by email, a month of history"],
          ["Growing team, maybe a second floor or office", "Pro, ₹99 / seat / month", "Unlimited staff, multi-location, Telegram and WhatsApp pings, SLA and escalation chain, full analytics, audit logs"],
          ["Group of companies or a facility provider", "Enterprise, custom", "Company sign-in (SSO/SAML), your branding on your domain, API access with webhooks, a named success manager, optional self-hosting"],
        ],
      },
      {
        type: "scenario",
        heading: "The Pitch-Day Morning",
        persona: "Meera, Co-Founder",
        setting: "A 30-person startup, investor meeting at 11 in the only conference room.",
        timeline: [
          { time: "10:15", event: "Meera's colleague Kavya uploads the deck PDF and requests 24 colour copies to the conference room." },
          { time: "10:16", event: "The print room accepts; Kavya sees who is on it and the ETA." },
          { time: "10:30", event: "Meera taps Facilities: the conference room AC is stuck cold. It routes to facilities, not to Meera's phone." },
          { time: "10:50", event: "Prints arrive, the AC is fixed, and Meera pre-orders coffee for four to land at 11:05." },
        ],
        outcome:
          "Meera spent the hour before the pitch rehearsing instead of chasing. Nobody had to message the founder to get anything done.",
      },
      {
        type: "visual",
        visual: "before-after",
        heading: "From Phone Tag to One Tap",
        body:
          "The everyday example is the boss-cabin coffee. Before: 25 minutes, three phone calls, one cold coffee. After: four minutes, zero calls, one hot coffee. Multiply that by every request in a growing office.",
      },
      {
        type: "metrics",
        heading: "Numbers Worth a Founder's Attention",
        items: [
          { metric: "Requests per Week", meaning: "Shows how much invisible service work your office already does." },
          { metric: "Busiest Hours", meaning: "When the office buzzes most, useful for planning pantry and admin shifts." },
          { metric: "Accept and Delivery Time", meaning: "Whether service is keeping pace as headcount grows." },
          { metric: "Staff Scorecards", meaning: "Who is carrying the load, so recognition goes to the right people." },
        ],
      },
      {
        type: "checklist",
        heading: "Founder Rollout in One Afternoon",
        items: [
          "Sign up and create your workspace; no credit card for the 14-day trial.",
          "Add your pantry, print and IT items as a short catalogue. Start with what people actually ask for.",
          "Invite the people who serve requests and ask them to install the Android app.",
          "Invite everyone else and tell them: if you would have called someone, buzz instead.",
          "Archive the old pantry WhatsApp group once the first week goes smoothly.",
        ],
      },
    ],
    faqs: [
      { q: "Can a Small Startup Run on the Free Plan for Good?", a: "Yes. Free is free forever for up to 10 staff in one location, with the mobile and web app, email notifications and the last 30 days of history. You only pay when you move to Pro." },
      { q: "When Should We Move to Pro?", a: "Usually when you pass 10 staff, open a second location, or want requests to ping Telegram and WhatsApp with SLA escalation. Pro is ₹99 per seat per month and you can cancel anytime." },
      { q: "Do I Need an Admin to Manage It?", a: "No. It is designed to be set up in an afternoon by whoever is closest to the office, often the founder. Once catalogues and staff are in, requests route themselves." },
      { q: "Can We Pay in USD or Another Currency?", a: "Pricing is offered in INR, USD, EUR and GBP, which helps if your company is billed outside India." },
      { q: "What If We Outgrow Pro?", a: "Enterprise is built for groups and facility companies, with SSO, white-label, an API and a dedicated CSM. Talk to us at hello@zapbuzzer.com and we will walk you through it." },
      { q: "Can a Founder Set It Up Without an Admin Team?", a: "Yes. Sign up, add the catalogue items your team asks for most, invite staff and start buzzing. There is no setup call or consultant, and most offices are running in an afternoon." },
      { q: "What Does a 40-person Team Pay on Pro?", a: "Pro is ₹99 per seat per month, so you pay for the seats you use with no setup fees. You can cancel anytime, and the 14-day trial needs no credit card." },
      { q: "Will It Replace Our Pantry WhatsApp Group?", a: "That is usually the first thing it replaces. Requests go to the right team on the app, plus Telegram and WhatsApp on Pro, and the first to accept owns it, so nothing gets lost in a busy group chat." },
    ],
    related: ["use-cases/ceo", "use-cases/office-manager", "pricing/free", "pricing/pro", "how-it-works", "use-cases/reduce-whatsapp-requests", "sign-up"],
    cta: { title: "Set It Up This Afternoon", body: "Start free for up to 10 staff, or take the 14-day Pro trial with no credit card." },
  },

  // ───────────────────────────── Office Manager ─────────────────────────────
  {
    path: "use-cases/office-manager",
    title: "ZapBuzzer for Office Managers",
    description:
      "Office managers use ZapBuzzer to route pantry, print, IT and facilities requests to the right staff, track every one, and quiet the pantry WhatsApp group.",
    h1: "Stop Being the Office Switchboard",
    eyebrow: "Use Case · Office Manager",
    lead:
      "Everyone asks the office manager. Coffee, a missing HDMI cable, a courier at the gate, a room that is too cold. ZapBuzzer means you stop passing on every request yourself. Instead, you decide how requests should flow and keep an eye on the numbers.",
    keywords: [
      "office manager software",
      "office manager request tracking",
      "pantry request management",
      "office service desk",
      "office manager app india",
    ],
    heroVisual: "request-dashboard",
    sections: [
      {
        type: "prose",
        eyebrow: "An Office Manager's Day",
        heading: "Fifty Small Requests, One Phone",
        paragraphs: [
          "By 9:15 there are three messages about the 3rd-floor pantry running out of milk, a sales lead asking for prints, and a voice note from someone whose monitor will not wake up. You forward each one to the right person, then forward it again when nobody answers.",
          "The work is not hard. It is the relaying, the remembering and the chasing that eat the day, and the fact that when something slips, it lands on you.",
        ],
      },
      {
        type: "problem-solution",
        heading: "Your Pain, Specifically",
        problem: {
          title: "Relay and Chase",
          points: [
            "You are the human router between employees and staff.",
            "The pantry WhatsApp group buries orders under chatter.",
            "You find out about a slow request only when someone complains.",
            "There is no record to back you up in a performance conversation.",
          ],
        },
        solution: {
          title: "Design and Observe",
          points: [
            "Catalogue items route straight to pantry, print, IT or facilities.",
            "Notifications repeat until someone accepts.",
            "Every request is timed; overdue ones escalate to a manager.",
            "Ratings and scorecards give you fair, factual staff data.",
          ],
        },
      },
      {
        type: "visual",
        visual: "request-dashboard",
        heading: "One Live Queue for the Whole Office",
        body:
          "The dashboard shows every open request with its status: buzzed, accepted, started, delivered. You can see at a glance what is waiting and who owns what, without asking anyone.",
        points: ["Status for every request", "Owner and ETA visible", "Overdue requests stand out"],
      },
      {
        type: "scenario",
        heading: "Monday Morning, Before and After",
        persona: "Priya, Office Manager",
        setting: "80-person office, two floors, one pantry and one print room.",
        timeline: [
          { time: "09:05", event: "Twelve coffee requests arrive in ten minutes. Each pings the pantry team; Raj and Suresh split them by tapping Accept." },
          { time: "09:20", event: "Tanvi from design taps IT: HDMI missing in Room 2. It routes to the IT desk, not to Priya." },
          { time: "09:40", event: "A print request crosses its deadline. It auto-escalates to the print room's manager, and Priya sees it flagged." },
          { time: "10:00", event: "Priya checks the queue once. Everything is delivered or in progress." },
        ],
        outcome:
          "Priya did not forward a single message. Her own words afterwards: “Coffee arrives before anyone asks twice. The pantry WhatsApp group is finally quiet.”",
      },
      {
        type: "metrics",
        heading: "What an Office Manager Watches",
        items: [
          { metric: "Open and Overdue Requests", meaning: "Your live to-do list, but for the whole office." },
          { metric: "Accept Time by Team", meaning: "Is pantry slower than IT? Is one shift short-staffed?" },
          { metric: "On-Time Delivery", meaning: "The share of requests delivered within deadline. Pilot offices reached 96% in month one." },
          { metric: "Average Rating", meaning: "How employees feel about the service. Pilot average was 4.8★." },
          { metric: "Busiest Hours", meaning: "When to schedule pantry and admin staff." },
        ],
      },
      {
        type: "checklist",
        heading: "Rollout Tips From the Office Manager's Chair",
        items: [
          "Start with the pantry: it has the most requests and the fastest visible win.",
          "Keep the first catalogue short, around 10 to 15 items people already ask for.",
          "Name destinations the way people talk: Boss Cabin, Conference Room B, 3rd-floor Pantry.",
          "Get staff to install the Android app before launch day so it rings through on silent.",
          "On Pro, set up the escalation chain so overdue items reach a manager, not your phone.",
          "Share the first week's numbers with staff, and lead with who earned 5★.",
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Your New Role in One Line",
        body:
          "You stop relaying requests and start tuning the system: which items sit in the catalogue, which team gets which category, and how long each kind of job should take. An hour a week on that beats a day of forwarding messages.",
      },
    ],
    faqs: [
      { q: "Can I Set Up Different Teams for Pantry, Print and IT?", a: "Yes. Each catalogue item routes to the team that handles it, and everyone on that team is notified at once. The first to accept owns the request." },
      { q: "What If Nobody on a Team Picks Up a Request I Set Up?", a: "Notifications repeat until someone accepts, so you are not the one chasing. Every request also has a deadline, and overdue ones escalate automatically; the full escalation chain is part of Pro." },
      { q: "Will the Pantry and Admin Staff Resent Being Tracked?", a: "ZapBuzzer was designed with staff in mind. Every job someone delivers is credited to them on their scorecard, and the ratings mostly surface good work that used to go unnoticed by the office manager." },
      { q: "Can I See Who Changed What?", a: "Each role has its own permissions, and every action is audit-logged. Audit logs and reports come with Pro." },
      { q: "Do Our Staff Need Smartphones?", a: "The mobile app is the best experience for staff because it rings through on a locked phone. On Pro they can also get pings on Telegram or WhatsApp, and email works on every plan." },
      { q: "Can I See Every Open Request in One Place?", a: "Yes. You get one live queue showing each request, its owner, its state and its deadline, so you can spot what is slipping without anyone ringing you." },
      { q: "Do I Still Have to Relay Requests to Staff?", a: "No. Employees buzz the catalogue item themselves and it routes straight to the right team. Your role shifts from switchboard to designing catalogues and watching the numbers." },
      { q: "Which Numbers Should an Office Manager Watch?", a: "Accept time, on-time delivery, staff ratings and the busiest hours. Those tell you where cover is thin and which teams need help, with full analytics and scorecards on Pro." },
    ],
    related: ["use-cases/admin-team", "admin/team-management", "solutions/pantry", "use-cases/reduce-whatsapp-requests", "admin/staff-dashboard", "pricing/pro", "demo"],
    cta: { title: "Give Your Phone a Rest", body: "Start the 14-day free trial and route your pantry requests through ZapBuzzer this week." },
  },

  // ───────────────────────────── HR ─────────────────────────────
  {
    path: "use-cases/hr-team",
    title: "ZapBuzzer for HR and Employee Experience",
    description:
      "HR teams use ZapBuzzer to make office services fair and fast for every employee, and to recognise support staff with ratings and honest scorecards.",
    h1: "Employee Experience Starts With the Small Stuff",
    eyebrow: "Use Case · HR",
    lead:
      "Employees judge a workplace by whether the AC gets fixed and the coffee comes, not by the handbook. ZapBuzzer gives every employee the same simple way to ask for help, and gives HR a fair record of the support staff who make the office work.",
    keywords: [
      "employee experience office",
      "hr office services",
      "support staff recognition",
      "office staff ratings",
      "workplace experience app",
    ],
    heroVisual: "scorecard",
    sections: [
      {
        type: "prose",
        eyebrow: "HR's Day",
        heading: "You Hear About the Office in Exit Interviews",
        paragraphs: [
          "HR spends its time on hiring, onboarding and people conversations, yet a surprising share of complaints are about basic office service. The new joiner who did not know whom to ask for a laptop charger. The intern who felt awkward calling the pantry. The team that gave up on the meeting-room projector.",
          "There is a second, quieter problem: the office boys, housekeeping and admin staff who keep everything running are rarely measured or thanked in any structured way. Their good work is invisible, and so are their bad days.",
        ],
      },
      {
        type: "problem-solution",
        heading: "Two HR Problems, One System",
        problem: {
          title: "Today",
          points: [
            "Service depends on who you know and how loudly you ask.",
            "New joiners have no obvious way to request things.",
            "Support staff get blame when things slip and silence when they do not.",
            "No data for fair reviews or recognition.",
          ],
        },
        solution: {
          title: "With ZapBuzzer",
          points: [
            "Everyone uses the same catalogue and the same button.",
            "Onboarding includes one instruction: if you need something, buzz.",
            "Each delivered request is credited to the person who did it.",
            "Ratings and on-time records feed honest scorecards.",
          ],
        },
      },
      {
        type: "visual",
        visual: "scorecard",
        heading: "Scorecards That Recognise People",
        body:
          "Scorecards show who accepts fastest, who delivers on time and who earns 5★. On Pro, full analytics and scorecards are included. They make recognition specific: not “thanks, team” but “Raj delivered 140 requests this month at 4.9★”.",
      },
      {
        type: "scenario",
        heading: "A New Joiner's First Day",
        persona: "Rohan, New Analyst",
        setting: "Day one, desk on the 3rd floor, nobody yet knows his name.",
        timeline: [
          { time: "09:30", event: "HR's welcome email includes the ZapBuzzer link. Rohan signs in." },
          { time: "10:10", event: "His monitor cable is missing. He taps IT, adds a note with his desk number." },
          { time: "10:11", event: "The IT desk accepts; Rohan sees the name and photo of the person coming." },
          { time: "10:18", event: "Cable delivered. Rohan rates it 5★ and orders a tea at 11 without thinking twice." },
        ],
        outcome:
          "Rohan never had to ask who to ask. HR got a smoother first day without adding a single step to onboarding.",
      },
      {
        type: "metrics",
        heading: "What HR Looks At",
        items: [
          { metric: "Average Staff Rating", meaning: "A proxy for how employees experience office service. Pilot offices averaged 4.8★." },
          { metric: "Individual Scorecards", meaning: "Requests delivered, on-time rate and rating per support staff member." },
          { metric: "Requests by Department", meaning: "Which teams rely most on office services, useful for workspace planning." },
          { metric: "Low Ratings", meaning: "Early signs of a problem to talk through in a conversation, not a reprimand." },
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Use Ratings for Recognition First",
        body:
          "Introduce scorecards by celebrating the top performers in the first month. Staff will trust the numbers when the first thing they see is credit, not criticism.",
      },
      {
        type: "checklist",
        heading: "Rollout Tips for HR",
        items: [
          "Add ZapBuzzer to your onboarding email and first-day checklist.",
          "Brief support staff before launch: explain attribution and ratings as recognition.",
          "Agree with managers how scorecards will and will not be used.",
          "Review ratings monthly and share wins in team meetings.",
          "Use role permissions so only the right people see individual scorecards.",
        ],
      },
      {
        type: "audience",
        heading: "Who HR's Rollout Touches",
        items: [
          { role: "New Joiners", benefit: "One obvious place to ask for anything from day one, no awkward calls to strangers." },
          { role: "Support Staff", benefit: "Named credit for every delivery and a scorecard they can point to in their own review." },
          { role: "Managers", benefit: "Factual data for conversations about workload and service quality." },
          { role: "Leadership", benefit: "A measurable signal of everyday employee experience, not just survey scores." },
        ],
      },
      {
        "type": "checklist",
        "heading": "HR’s Quarterly Look",
        "items": [
          "Review top-rated support staff for recognition.",
          "Check whether new joiners raise requests in their first week.",
          "Look for teams with high escalations, which can signal overload.",
          "Share scorecards with staff well before review season."
        ]
      },
    ],
    faqs: [
      {
        "q": "Can HR See Scorecards Without Full Admin Rights?",
        "a": "Access follows the role you assign, with its own set of permissions. Many offices give HR a role with analytics and scorecard visibility, which is part of Pro."
      },
      { q: "Can Employees Rate Staff Anonymously?", a: "Employees rate a request from 1 to 5★ when it is delivered. How ratings are displayed depends on roles and permissions, so talk to us if you have a specific policy you need to follow." },
      { q: "Are Scorecards Available on Every Plan?", a: "Full analytics and scorecards come with Pro. The Free plan is good for trying the request flow with up to 10 staff." },
      { q: "Does This Replace Our HR System?", a: "No. ZapBuzzer handles internal service requests like pantry, print, IT, facilities and courier. It sits next to your HR tools, not in place of them." },
      { q: "Who Can See Individual Staff Performance?", a: "Permissions are set separately for each role, and every action is audit-logged, so you can limit scorecards to managers and HR." },
      { q: "Can HR Use Scorecards for Staff Recognition?", a: "Yes. Scorecards show who is fastest and who earns 5★, with fair attribution for every job delivered. Many HR teams use them to recognise pantry, admin and support staff who are usually invisible." },
      { q: "Does ZapBuzzer Help With New Joiners' First Day?", a: "A new joiner can ask for coffee, an HDMI cable or IT help through the same simple catalogue as everyone else, without needing to know whose extension to call." },
      { q: "Can HR See Office Complaints Before Exit Interviews?", a: "Requests and ratings give HR a running picture of how well the office serves employees, such as repeat AC complaints or slow responses, rather than hearing about it when someone leaves." },
    ],
    related: ["use-cases/staff-accountability", "analytics/staff", "analytics/ratings", "admin/roles-and-permissions", "use-cases/office-manager", "pricing/pro"],
    cta: { title: "Make Service Fair for Every Employee", body: "Try ZapBuzzer free for 14 days and see your first scorecards by the end of the month." },
  },

  // ───────────────────────────── Admin team ─────────────────────────────
  {
    path: "use-cases/admin-team",
    title: "ZapBuzzer for Office Admin Teams",
    description:
      "Admin teams use ZapBuzzer for single-owner routing, delivery deadlines and automatic escalation, so facilities, pantry and courier work never rots in a DM.",
    h1: "An Admin Team That Never Drops the Ball",
    eyebrow: "Use Case · Admin Team",
    lead:
      "Admin teams handle all the small, endless office jobs: maintenance, courier, pantry stock, meeting rooms. ZapBuzzer gives the team one shared queue and first-accept-wins ownership, which means whoever taps Accept first owns the job. Each job also gets a deadline, and if it’s missed, the job goes to a manager on its own.",
    keywords: [
      "office admin software",
      "admin team request management",
      "admin head office tool",
      "facilities admin escalation",
      "office admin workflow",
    ],
    heroVisual: "staff-queue",
    sections: [
      {
        type: "prose",
        eyebrow: "The Admin Team's Day",
        heading: "Shared Work, Unclear Owners",
        paragraphs: [
          "An admin team of four handles a hundred small jobs a day. The trouble is not volume; it is ownership. When a request lands in a group, everyone assumes someone else has it. When it lands in one person's DMs, it waits for that person's lunch break to end.",
          "The admin head ends up as the escalation path for everything, finding out about problems from angry employees rather than from the system.",
        ],
      },
      {
        type: "visual",
        visual: "acceptance",
        heading: "First to Accept Owns It",
        body:
          "A request goes to the whole admin team at once. The first person free taps Accept and it is theirs, with their name and photo shown to the requester. No more “I thought you'd do it”.",
      },
      {
        type: "workflow",
        heading: "How a Request Moves Through Your Team",
        steps: [
          { title: "Buzzed", body: "An employee taps a catalogue item, picks a destination and adds a note." },
          { title: "Pinged", body: "Everyone on the admin team is notified in the app, and on Pro via Telegram and WhatsApp too. Pings repeat until someone accepts." },
          { title: "Accepted", body: "Whoever taps Accept first becomes the owner, and everyone else sees it is taken." },
          { title: "Started With ETA", body: "The owner starts the job and sets an ETA the requester can see." },
          { title: "Delivered and Rated", body: "The owner marks it delivered, optionally with a photo, and the requester rates it 1–5★." },
        ],
      },
      {
        type: "scenario",
        heading: "A Cold Conference Room",
        persona: "Deepak, Admin Head",
        setting: "Conference Room B is booked for a client workshop at 2.",
        timeline: [
          { time: "13:20", event: "Om, an engineer, finds the AC stuck at 16°C. He taps Facilities → Conference Room B." },
          { time: "13:20", event: "Deepak's team is pinged. Suresh accepts and heads up." },
          { time: "13:28", event: "The fix needs a part. The 15-minute deadline approaches." },
          { time: "13:35", event: "The request auto-escalates to Deepak, who calls the AC vendor and moves the workshop to Room A." },
        ],
        outcome:
          "Deepak heard about the problem from the system, early enough to act, not from a client shivering at 2:05. As he puts it: “Facilities tickets auto-escalate now. Nothing rots in someone's DMs.”",
      },
      {
        type: "visual",
        visual: "escalation",
        heading: "Escalation That Climbs on Its Own",
        body:
          "Every request has a deadline. When one goes overdue it escalates to a manager automatically. On Pro you can set an escalation chain so a stuck job keeps climbing until someone acts.",
      },
      {
        type: "metrics",
        heading: "What the Admin Head Looks At",
        items: [
          { metric: "Overdue and Escalated Requests", meaning: "Where the process broke this week and why." },
          { metric: "Accept Time per Person", meaning: "Who picks up fast, who is overloaded." },
          { metric: "On-Time Delivery by Category", meaning: "Facilities vs courier vs pantry. Pilot offices averaged 96% on time." },
          { metric: "Audit Log", meaning: "Who accepted, started and delivered each job, with timestamps (Pro)." },
        ],
      },
      {
        type: "checklist",
        heading: "Rollout Tips for Admin Teams",
        items: [
          "Put every admin team member on the relevant categories before launch.",
          "Agree realistic deadlines per category; a courier pickup is not a coffee.",
          "Turn on Telegram or WhatsApp pings on Pro for staff who live in those apps.",
          "Set the escalation chain so it ends with someone who can make a decision.",
          "Review escalations weekly; each one is a process fix waiting to happen.",
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Read Escalations as Process Feedback",
        body:
          "If courier pickups escalate every Friday afternoon, the problem is probably staffing at that hour, not the person on shift. Use the pattern to move people, then watch the escalations fall.",
      },
    ],
    faqs: [
      { q: "What If Two People Tap Accept at the Same Time?", a: "Only one can own the request. The first accept wins and the others see that it has been taken, so nobody duplicates the work." },
      { q: "Can Deadlines Differ by Type of Request?", a: "Every request has a deadline, and you can think of them per category, so facilities and courier jobs do not have to share a coffee's timeline. SLA with an escalation chain is part of Pro." },
      { q: "Can Staff Attach Proof of Delivery?", a: "Yes. When marking a request delivered, staff can attach a photo, which is useful for courier pickups and maintenance jobs." },
      { q: "Is There a Record of Everything the Team Did?", a: "Every action is audit-logged against the person who did it. Audit logs and reports are included in Pro." },
      { q: "How Do New Admin Staff Learn the System?", a: "Staff see a list of open requests with Accept buttons, then start and deliver. Most pick it up after their first few jobs." },
      { q: "How Does the Admin Team Share One Queue?", a: "Every request routes to the whole team at once and the first to accept owns it. Everyone can see who has what, so there is no “I thought you'd do it”." },
      { q: "What Happens When an Admin Job Runs Past Its Deadline?", a: "It escalates to a manager on its own, with the timeline attached. On Pro you can set an escalation chain, so if the first manager is busy the next person hears about it." },
      { q: "Can the Admin Head See How Each Person Is Doing?", a: "Yes. Scorecards show accept times, deliveries and ratings for each team member with fair attribution. Full analytics and scorecards are part of Pro." },
    ],
    related: ["use-cases/facilities-manager", "features/first-accept-wins", "sla/automatic-escalation", "workflows/ac-issue", "admin/audit-logs", "pricing/pro"],
    cta: { title: "Give Your Admin Team One Queue", body: "Start a free 14-day trial and route your first facilities ticket in minutes." },
  },

  // ───────────────────────────── IT Manager ─────────────────────────────
  {
    path: "use-cases/it-manager",
    title: "ZapBuzzer for IT Managers and IT Desks",
    description:
      "IT managers use ZapBuzzer to catch projector, HDMI and hardware requests in one routed queue with ETAs and deadlines, instead of chats and hallway asks.",
    h1: "Catch the Meeting-Room Emergencies Before They Become Tickets",
    eyebrow: "Use Case · IT Manager",
    lead:
      "Your ticketing tool is great for laptops and access requests. It’s terrible for “the projector won't connect and the client is sitting down”. ZapBuzzer handles quick, hands-on IT jobs in the office with one tap. The first technician to accept owns the job, and the requester sees an ETA.",
    keywords: [
      "it desk request app",
      "meeting room it support",
      "projector support request",
      "hdmi request office",
      "it manager office tool",
    ],
    heroVisual: "notification-flow",
    sections: [
      {
        type: "prose",
        eyebrow: "An IT Manager's Day",
        heading: "Two Kinds of IT Work",
        paragraphs: [
          "There is planned IT work: provisioning, patching, access reviews. And there is the walk-up stream: a missing HDMI cable, a dead mouse, a projector that will not see the laptop ten minutes before a board meeting. The walk-up stream arrives as shouts, calls and chat messages to whoever on the team is most visible.",
          "Those asks are urgent, short and physical. Nobody files a ticket for them, so they leave no trace, and the IT manager has no idea how much of the team's day they consume.",
        ],
      },
      {
        type: "comparison",
        heading: "Walk-Up IT: Chat Messages vs ZapBuzzer",
        columns: ["Chat and Hallway Asks", "ZapBuzzer"],
        rows: [
          { label: "How It Arrives", a: "DM to whoever answered last time", b: "One tap on IT, routed to the whole IT desk" },
          { label: "Ownership", a: "Unclear until someone replies", b: "First to accept owns it" },
          { label: "Requester Sees", a: "Read receipts, maybe", b: "Name, photo and ETA" },
          { label: "If Nobody Responds", a: "Silence", b: "Pings repeat, then escalation on deadline" },
          { label: "Record", a: "Lost in chat history", b: "Timed, rated, in analytics" },
        ],
      },
      {
        type: "scenario",
        heading: "Three Minutes to an HDMI Cable",
        persona: "Tanvi, Designer",
        setting: "Client review in the design studio, laptop ready, no HDMI cable in the room.",
        timeline: [
          { time: "15:57", event: "Tanvi taps IT → HDMI needed, Design Studio." },
          { time: "15:57", event: "The IT desk is pinged on the app. Priya on the IT desk accepts." },
          { time: "16:00", event: "Priya walks in with the cable. Tanvi rates 5★." },
        ],
        outcome:
          "Three minutes from tap to cable. The IT desk has a record of the request, and the manager can see how many of these happen each week.",
      },
      {
        type: "visual",
        visual: "notification-flow",
        heading: "Every Channel at Once",
        body:
          "An IT request fans out to the app and email on every plan, and to Telegram and WhatsApp on Pro, at the same time. Whoever on the desk sees it first can take it, and pings repeat until someone does.",
      },
      {
        type: "metrics",
        heading: "What an IT Manager Looks At",
        items: [
          { metric: "Walk-Up Request Volume", meaning: "How much desk time goes to quick physical asks, by day and hour." },
          { metric: "Accept Time", meaning: "How fast someone owns a request. Pilot offices averaged 32 seconds." },
          { metric: "Top Requested Items", meaning: "If HDMI cables top the list, put one in every room." },
          { metric: "Repeat Locations", meaning: "Rooms that keep generating projector requests need a hardware fix." },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Keep Your Ticketing Tool for What It Is Good At",
        body:
          "ZapBuzzer is not trying to replace a full IT service-management tool. It handles the fast in-office stream that never makes it into one. Enterprise customers who want to connect systems can talk to us about the REST API and webhooks.",
      },
      {
        type: "checklist",
        heading: "Rollout Tips for IT",
        items: [
          "Add specific items to the IT catalogue: HDMI, projector, monitor, mouse, Wi-Fi.",
          "Name each meeting room as a destination so requests arrive with a location.",
          "Have the whole IT desk install the Android app so pings ring on silent.",
          "Set short deadlines for meeting-room issues and longer ones for desk hardware.",
          "After a month, use the top-items list to restock rooms and prevent repeat requests.",
        ],
      },
      {
        type: "prose",
        heading: "Why the Walk-Up Stream Matters to an IT Manager",
        paragraphs: [
          "Walk-up requests are where users form their opinion of IT. A fast cable before a client review earns more goodwill than a month of quiet patching. Once these asks are timed and rated, you can show that goodwill in numbers, and spot the rooms and devices that keep generating the same request.",
        ],
      },
    ],
    faqs: [
      { q: "Does ZapBuzzer Replace Our IT Helpdesk?", a: "For walk-up and meeting-room asks it usually does the job better. For planned work like provisioning and access requests, most teams keep their existing tool." },
      { q: "Can IT Requests Route to Different People for Different Items?", a: "Requests auto-route to the right team based on what was tapped. You decide which team handles which catalogue items." },
      { q: "Is There an API to Connect Our Tools?", a: "A REST API and webhooks are available on Enterprise. Email hello@zapbuzzer.com and we will discuss what you want to connect." },
      { q: "Does It Support Single Sign-On?", a: "SSO and SAML are part of the Enterprise plan. Talk to us for details on setting it up for your organisation." },
      { q: "Will the IT Team Hear Pings During Focused Work?", a: "The mobile app rings through on silent and on a locked phone, which is the point for urgent asks. Staff can be placed only on the categories they handle, so they are not pinged for coffee." },
      { q: "How Fast Can IT Respond to a Meeting-Room Problem?", a: "The whole IT desk is pinged at once on the app, plus Telegram and WhatsApp on Pro, and the first free person accepts. In the HDMI scenario Priya brings the cable in three minutes." },
      { q: "Can the IT Manager See Walk-Up Request Trends?", a: "Yes. Analytics show which rooms, items and hours generate the most IT asks, so you can leave spare cables or fix a problem projector for good. Full analytics are on Pro." },
      { q: "Do Walk-Up IT Requests Have Deadlines?", a: "Every request is timed, and if one runs past its deadline it escalates to a manager automatically. The full escalation chain is part of Pro." },
    ],
    related: ["solutions/it-support", "workflows/hdmi-request", "workflows/projector-request", "compare/helpdesk", "notifications/multi-channel", "pricing/enterprise"],
    cta: { title: "Put a Button in Every Meeting Room", body: "Start the 14-day trial and route your first walk-up IT request through ZapBuzzer today." },
  },

  // ───────────────────────────── Facilities Manager ─────────────────────────────
  {
    path: "use-cases/facilities-manager",
    title: "ZapBuzzer for Facilities Managers",
    description:
      "Facilities managers route AC, maintenance and room issues with deadlines and auto-escalation, and see multi-location performance on ZapBuzzer Pro.",
    h1: "Fix the AC Before Anyone Writes an Email About It",
    eyebrow: "Use Case · Facilities Manager",
    lead:
      "Facilities work is reactive by nature: AC too cold, a leaking tap, a broken chair in the boardroom. ZapBuzzer gives every issue a location, an owner and a deadline, and escalates on its own when a fix stalls.",
    keywords: [
      "facilities management app",
      "facilities request tracking",
      "office maintenance requests",
      "ac complaint office",
      "facilities escalation",
    ],
    heroVisual: "sla-timer",
    sections: [
      {
        type: "prose",
        eyebrow: "A Facilities Manager's Day",
        heading: "Complaints Arrive Without Addresses",
        paragraphs: [
          "“It's freezing in here” is the most common facilities report, and it rarely says where “here” is. Requests reach the facilities manager by phone, by email, through reception and in the lift. Half need a follow-up just to find the room.",
          "Then there are the slow ones: a job waiting for a part, a vendor who said Tuesday. Without a clock on each job, these drift, and nobody notices until a senior person complains.",
        ],
      },
      {
        type: "problem-solution",
        heading: "Reactive vs. Routed",
        problem: {
          title: "Reactive",
          points: [
            "No location on the complaint.",
            "Jobs assigned verbally and forgotten.",
            "Stalled jobs only surface when someone escalates by shouting.",
            "No data on which rooms and systems fail most.",
          ],
        },
        solution: {
          title: "Routed",
          points: [
            "Every request carries a destination, like Conference Room B.",
            "Facilities staff accept and own each job.",
            "Deadlines trigger automatic escalation.",
            "Analytics show repeat locations and busy hours.",
          ],
        },
      },
      {
        type: "visual",
        visual: "sla-timer",
        heading: "A Clock on Every Job",
        body:
          "Each request starts a timer when it is buzzed. If it is not delivered in time, it escalates to a manager. On Pro, an escalation chain lets you define who hears about it next.",
      },
      {
        type: "scenario",
        heading: "16°C in Conference Room B",
        persona: "Om, Engineer",
        setting: "Sprint review in Conference Room B, AC stuck at its lowest setting.",
        timeline: [
          { time: "11:00", event: "Om taps Facilities → Conference Room B, note: AC stuck at 16°C." },
          { time: "11:00", event: "Deepak's facilities team is pinged; a technician accepts." },
          { time: "11:09", event: "Technician starts the job and sets an ETA." },
          { time: "11:15", event: "Had the fix not landed within 15 minutes, it would have auto-escalated. It lands at 11:13." },
        ],
        outcome:
          "The review ran in a warm room. The facilities manager now has a record that Conference Room B's AC needed attention, the third time this month.",
      },
      {
        type: "metrics",
        heading: "What Facilities Managers Look At",
        items: [
          { metric: "Requests by Location", meaning: "Which rooms and floors generate the most issues." },
          { metric: "On-Time Completion", meaning: "Share of jobs fixed within deadline. Pilot offices reached 96%." },
          { metric: "Escalations", meaning: "Jobs that stalled, and at which step." },
          { metric: "Multi-Location View", meaning: "Compare sites side by side (Pro)." },
        ],
      },
      {
        type: "audience",
        heading: "Who Else Benefits",
        items: [
          { role: "Employees", benefit: "Report an issue in one tap and see who is fixing it." },
          { role: "Technicians", benefit: "Get clear jobs with a location and fair credit for each fix." },
          { role: "Admin Head", benefit: "Only hears about jobs that actually stall." },
          { role: "Facility Companies", benefit: "Enterprise adds white-label and multi-client setups." },
        ],
      },
      {
        type: "checklist",
        heading: "Rollout Tips for Facilities",
        items: [
          "Create destinations for every room, floor and common area before launch.",
          "Split categories: AC, electrical, plumbing, furniture, cleaning.",
          "Set deadlines that match reality, then tighten them after a month of data.",
          "Make the last step of the escalation chain someone with vendor authority.",
          "Ask technicians to attach a photo when they mark a job delivered.",
        ],
      },
      {
        type: "visual",
        visual: "delivery",
        heading: "Close the Loop With a Photo and a Rating",
        body:
          "When a technician marks a job delivered they can attach a photo of the fix, and the person who reported it rates the result. Over time that gives you a record of quality, not just speed, for every category and every technician on the team.",
      },
      {
        type: "prose",
        heading: "From Reactive to Planned",
        paragraphs: [
          "After a month of routed requests, patterns appear. The third-floor washroom tap, the AC in the boss cabin every afternoon, the chairs in the training room. Each repeat is a candidate for preventive maintenance or a vendor conversation, backed by dates and counts instead of memory.",
        ],
      },
    ],
    faqs: [
      { q: "Can We Manage Multiple Buildings?", a: "Yes. Multi-location is part of Pro, so you can run several sites in one workspace. The Free plan covers one location." },
      { q: "We Are a Facility Management Company. Can We Use Our Own Branding?", a: "Enterprise is built for groups and facility companies and includes white-label and a custom domain. Talk to us at hello@zapbuzzer.com for details." },
      { q: "What If a Job Needs an Outside Vendor?", a: "The technician can start the job with a longer ETA. If it still runs past deadline, escalation tells the right manager so they can chase the vendor." },
      { q: "Can Employees See the Status of Their Complaint?", a: "Yes. The requester sees who accepted it, the ETA and when it is delivered, and can rate the fix." },
      { q: "Can We Tell Which Rooms Break Most Often?", a: "Every request carries a destination, so analytics can show requests by location. Repeat rooms are your preventive maintenance list." },
      { q: "Does Every Facilities Complaint Come With a Location?", a: "Yes. The employee chooses a destination when they buzz, such as Conference Room B, so the technician knows exactly where to go without calling back." },
      { q: "What Happens If a Facilities Fix Stalls?", a: "Each job has a deadline. If it is not delivered in time it escalates to a manager automatically, as in Om's 15-minute AC example, and Pro adds a full escalation chain." },
      { q: "Can Technicians Close a Job With a Photo?", a: "Yes. When marking a request delivered, staff can attach a photo, and the requester can rate the fix from 1 to 5★. That closes the loop with proof." },
    ],
    related: ["solutions/facilities", "use-cases/facilities-operations", "workflows/ac-issue", "sla/escalation-chains", "enterprise/multi-location", "pricing/pro"],
    cta: { title: "Put Every Facilities Job on a Clock", body: "Try ZapBuzzer Pro free for 14 days with SLA timers and escalation." },
  },

  // ───────────────────────────── Reception ─────────────────────────────
  {
    path: "use-cases/reception-team",
    title: "ZapBuzzer for Reception and Front Desk",
    description:
      "Reception teams log courier pickups, summon staff or security and route visitor needs with one tap, with every handover audit-trailed in ZapBuzzer.",
    h1: "The Front Desk, Without the Phone Glued to Your Ear",
    eyebrow: "Use Case · Reception",
    lead:
      "Reception is the first thing visitors see, and it’s where every call ends up. ZapBuzzer lets the front desk hand off couriers, visitor coffees and urgent calls for help in one tap. Anything that leaves or enters the building gets an audit trail, a record of who handled it and when.",
    keywords: [
      "reception desk app",
      "front desk office requests",
      "courier pickup reception",
      "visitor coffee request",
      "summon security office",
    ],
    heroVisual: "audit-log",
    sections: [
      {
        type: "prose",
        eyebrow: "Reception's Day",
        heading: "Visitors, Couriers and a Ringing Phone",
        paragraphs: [
          "At 10 a client arrives early and needs water and a seat. At 10:05 a courier is at the gate asking for a signature for a parcel addressed to someone on the 4th floor. At 10:07 the internal phone rings: can reception find someone from admin?",
          "The receptionist cannot leave the desk, so every one of these turns into phone calls. And when a parcel goes missing a week later, there is no reliable record of who took it upstairs.",
        ],
      },
      {
        type: "scenario",
        heading: "Courier at the Gate",
        persona: "Neha, Reception",
        setting: "Courier waiting at the gate with a parcel for Accounts.",
        timeline: [
          { time: "10:05", event: "Neha taps Courier Pickup, adds a note: parcel for Accounts, 4th floor." },
          { time: "10:05", event: "The mailroom is pinged and one of them accepts." },
          { time: "10:09", event: "The parcel is collected and logged, with a photo attached on delivery." },
          { time: "10:15", event: "Accounts sees it delivered. The full chain is audit-trailed." },
        ],
        outcome:
          "Neha never left the desk and never made a call. If anyone asks about that parcel next month, the record is there.",
      },
      {
        type: "visual",
        visual: "audit-log",
        heading: "Every Handover on Record",
        body:
          "Courier pickups are logged by reception or the mailroom and audit-trailed: who accepted, who delivered, when. Audit logs and reports are part of Pro.",
      },
      {
        type: "features",
        heading: "What Reception Uses Most",
        items: [
          { title: "Courier Pickup", body: "Log incoming and outgoing parcels and hand them to the mailroom in one tap." },
          { title: "Visitor Refreshments", body: "Buzz the pantry for coffee or water to the waiting area or a meeting room." },
          { title: "Summon Staff or Security", body: "The mobile app has one-tap summon for staff or security, and a way to raise an emergency." },
          { title: "Room Problems", body: "Route a visitor's complaint about a cold or dark room straight to facilities." },
        ],
      },
      {
        type: "metrics",
        heading: "What a Front-Desk Lead Looks At",
        items: [
          { metric: "Courier Pickups per Day", meaning: "Volume and peak times for the mailroom." },
          { metric: "Time From Log to Delivery", meaning: "How long parcels sit at reception." },
          { metric: "Phone Calls Avoided", meaning: "Pilot offices saw phone calls drop 87% in their first month." },
          { metric: "Visitor Request Response Time", meaning: "How long a guest waits for coffee or help." },
        ],
      },
      {
        type: "callout",
        tone: "warning",
        title: "Emergencies Need a Plan Too",
        body:
          "One-tap emergency and security summon helps, but it does not replace your building's emergency procedures. Agree who receives these requests and test it before you need it.",
      },
      {
        type: "checklist",
        heading: "Rollout Tips for Reception",
        items: [
          "Add Courier Pickup, Visitor Coffee and Summon Security to the reception catalogue.",
          "Set up the mailroom or admin team as the receivers for courier requests.",
          "Name the waiting area and each meeting room as destinations.",
          "Keep the web app open on the reception computer and the mobile app on the desk phone.",
          "Test the security summon once with the security team on duty.",
        ],
      },
      {
        type: "problem-solution",
        heading: "The Desk You Cannot Leave",
        problem: {
          title: "Phone-First Reception",
          points: [
            "Every handoff needs someone to pick up an extension.",
            "Visitors wait while you hunt for the right person.",
            "Parcels change hands with no record.",
          ],
        },
        solution: {
          title: "Buzz-First Reception",
          points: [
            "One tap sends the job to the right team, whoever is free takes it.",
            "You see who is coming and their ETA, so you can tell the visitor.",
            "Courier pickups are logged and audit-trailed.",
          ],
        },
      },
    ],
    faqs: [
      { q: "Can Reception Log Incoming and Outgoing Couriers?", a: "Yes. Reception or the mailroom logs pickups, and each one is audit-trailed. That gives you a reliable record when someone asks where a parcel went." },
      { q: "How Does Security Summon Work?", a: "The mobile app offers one tap to summon staff or security, or to raise an emergency. You choose which people receive those requests." },
      { q: "Can Visitors Use ZapBuzzer?", a: "ZapBuzzer is for your staff and employees. Reception can place requests on a visitor's behalf, such as coffee to a meeting room." },
      { q: "Does Reception Need the Paid Plan?", a: "The request flow works on Free for up to 10 staff. Audit logs, reports and Telegram or WhatsApp pings come with Pro." },
      { q: "What If the Mailroom Does Not Respond?", a: "Notifications repeat until someone accepts, and every request has a deadline. If a pickup runs late it escalates to a manager, so reception is not left holding the parcel." },
      { q: "Can Reception Order Coffee for a Waiting Visitor?", a: "Yes. Buzz the pantry with the waiting area or meeting room as the destination and a note such as “two coffees, guest from Northwind”. You will see who accepted it and the ETA." },
      { q: "Can Reception Buzz IT for a Meeting Room Before a Guest Arrives?", a: "Yes. Choose the room as the destination and buzz IT or facilities from the front desk. The team is pinged at once and you see who accepted and their ETA." },
      { q: "Does Reception Need to Stay on the Phone to Chase Requests?", a: "No. Notifications repeat until someone accepts and you can see each request's status, so the front desk can keep greeting visitors instead of ringing extensions." },
    ],
    related: ["solutions/courier-and-reception/reception-requests", "workflows/courier-pickup", "workflows/emergency-summon", "solutions/courier", "admin/audit-logs", "use-cases/reduce-phone-calls", "pricing/pro"],
    cta: { title: "Free Up Your Front Desk", body: "Start the free trial and log your first courier pickup in ZapBuzzer today." },
  },

  // ───────────────────────────── Sales ─────────────────────────────
  {
    path: "use-cases/sales-team",
    title: "ZapBuzzer for Sales Teams and Client Meetings",
    description:
      "Sales teams use ZapBuzzer to get colour prints, meeting-room coffee and IT fixes before a client sits down, with a visible ETA and no chase calls.",
    h1: "Look Ready When the Client Walks In",
    eyebrow: "Use Case · Sales",
    lead:
      "Sales lives on meetings, and meetings fail on small things: the proposal not printed, the projector not working, no coffee on the table. ZapBuzzer lets a salesperson fix all three from their phone in the minutes before a pitch.",
    keywords: [
      "sales team office requests",
      "client meeting preparation",
      "print proposal office",
      "meeting room coffee request",
      "sales pitch prints",
    ],
    heroVisual: "print-job",
    sections: [
      {
        type: "prose",
        eyebrow: "A Sales Lead's Day",
        heading: "Every Minute Before a Pitch Counts",
        paragraphs: [
          "The proposal was finalised at 10:50 for an 11:00 meeting. Now it needs printing in colour, 24 copies, delivered to the meeting room. The old way: email the file to the print room, call to make sure they saw it, call again, walk over and collect it yourself.",
          "That walk is time not spent rehearsing the opening, checking the client's latest news or greeting them at reception.",
        ],
      },
      {
        type: "scenario",
        heading: "24 Colour Copies in Ten Minutes",
        persona: "Kavya, Sales Lead",
        setting: "Client pitch in Meeting Room 3 at 11:00. Deck finalised at 10:50.",
        timeline: [
          { time: "10:50", event: "Kavya uploads the PDF, sets 24 copies in colour, destination Meeting Room 3." },
          { time: "10:50", event: "The print room is pinged; the operator accepts and sees the job details." },
          { time: "10:52", event: "Kavya buzzes the pantry: coffee for five, Meeting Room 3, at 11." },
          { time: "10:58", event: "Prints arrive at the room before her demo. Coffee follows." },
        ],
        outcome:
          "Kavya's own words: “Print jobs land at my desk before the client even sits down. Zero chase calls.”",
      },
      {
        type: "visual",
        visual: "print-job",
        heading: "Upload, Set Copies, Done",
        body:
          "The print request takes a PDF, the number of copies and colour or black and white, and delivers to your seat or room. The print room sees exactly what to print and where to bring it.",
      },
      {
        type: "problem-solution",
        heading: "Pitch Prep, Two Ways",
        problem: {
          title: "Chasing",
          points: [
            "Emailing files and calling to confirm.",
            "Walking to the print room to collect.",
            "Asking reception to arrange coffee by phone.",
            "Discovering the projector problem with the client in the room.",
          ],
        },
        solution: {
          title: "Buzzing",
          points: [
            "Upload the PDF and pick copies and colour.",
            "Prints delivered to the meeting room.",
            "Coffee timed for the meeting.",
            "IT pinged in one tap if the screen misbehaves.",
          ],
        },
      },
      {
        type: "metrics",
        heading: "What a Sales Manager Notices",
        items: [
          { metric: "Print Turnaround", meaning: "Time from upload to delivery for client documents." },
          { metric: "Meeting-Room Requests", meaning: "Which rooms need IT attention most often before meetings." },
          { metric: "On-Time Delivery", meaning: "Whether prep requests land before the meeting. Pilot offices hit 96%." },
          { metric: "Client-Meeting Spend", meaning: "Owners can see what refreshments for client meetings cost." },
        ],
      },
      {
        type: "checklist",
        heading: "Rollout Tips for Sales Teams",
        items: [
          "Name every meeting room as a destination so prints and coffee arrive in the right place.",
          "Show the team the print request once; most only need to see it a single time.",
          "Ask the print room to install the mobile app so jobs ring through immediately.",
          "Build a habit: buzz prints and coffee together as soon as the deck is final.",
          "Rate deliveries so the print room gets credit for saving the meeting.",
        ],
      },
      {
        type: "workflow",
        heading: "The Ten-Minute Pre-Pitch Routine",
        intro: "What a sales rep does on their phone between the last edit and the client arriving.",
        steps: [
          { title: "Prints", body: "Upload the final PDF, set copies and colour, choose the meeting room." },
          { title: "Refreshments", body: "Buzz the pantry with headcount and time in the note." },
          { title: "Room Check", body: "If the screen or AC misbehaves, tap IT or Facilities from the room." },
          { title: "Track", body: "Watch each request move to accepted and started, then focus on the pitch." },
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Rate the Saves",
        body:
          "When the print room gets 24 copies to you with a minute to spare, a 5★ rating is the thank-you that shows up on their scorecard. It keeps the people who make your meetings work motivated to do it again.",
      },
    ],
    faqs: [
      { q: "What File Types Can I Send for Printing?", a: "You upload a PDF, choose the number of copies and colour, and the print room delivers to your seat or room." },
      { q: "Can I Request From My Phone Between Meetings?", a: "Yes. The mobile app lets you place requests and track them on the move, including prints and pantry orders." },
      { q: "What If the Print Room Is Busy?", a: "The request goes to the whole print team and the first one free accepts. You see who has it and the ETA, so you know whether to plan around it." },
      { q: "Can I Schedule Coffee for a Meeting Time?", a: "Add the time in the note, for example “coffee for five at 11”, and choose the meeting room as the destination. The pantry sees the note when they accept." },
      { q: "Does the Requester Get Notified When Prints Arrive?", a: "Yes. The request moves to delivered, and you can rate it. If the operator attaches a photo, you can see the job was dropped in the right room." },
      { q: "Can I Get Colour Copies Printed Before a Pitch?", a: "Yes. Upload the PDF, set copies and colour, and choose the meeting room. In Kavya's case, 24 colour copies arrived before her demo with zero chase calls." },
      { q: "Can I Fix a Projector Problem Right Before a Client Meeting?", a: "Buzz IT with the meeting room as the destination. The IT desk is pinged at once, the first free person accepts and you see their ETA on your phone." },
      { q: "Can a Sales Manager See How Pitch Prep Requests Went?", a: "Every request is timed and rated, so analytics show how quickly prints, coffee and IT help arrived for meetings. Full analytics and scorecards are on Pro." },
    ],
    related: ["solutions/print-room", "workflows/print-request", "solutions/print-room/color-printing", "use-cases/stop-office-chase-calls", "solutions/it-support/meeting-room-support", "free-trial"],
    cta: { title: "Walk Into Your Next Pitch Ready", body: "Start the free trial and send your next proposal to print with one tap." },
  },

  // ───────────────────────────── Operations ─────────────────────────────
  {
    path: "use-cases/operations-team",
    title: "ZapBuzzer for Operations Teams",
    description:
      "Operations teams use ZapBuzzer for team lunch orders, recurring office needs and owner cost visibility, with every request timed, rated and reported.",
    h1: "Office Operations You Can Actually Measure",
    eyebrow: "Use Case · Operations",
    lead:
      "Operations teams keep the office running and get asked to prove it. ZapBuzzer gives you a clear record of every pantry, print, IT, facilities and courier request, with times and ratings. Only the owner sees what each request cost.",
    keywords: [
      "office operations software",
      "workplace operations metrics",
      "team lunch order office",
      "office request reporting",
      "operations team tools",
    ],
    heroVisual: "analytics",
    sections: [
      {
        type: "prose",
        eyebrow: "An Operations Lead's Day",
        heading: "You Run the Machine but Cannot See It",
        paragraphs: [
          "Operations owns vendors, budgets and the support staff schedule. The questions from leadership are simple: are we well staffed, what does it cost, is service good? The honest answer is usually a guess built from complaints and invoices.",
          "Meanwhile the operational work itself, like a lunch order for twelve on a deadline day, still runs through calls and spreadsheets.",
        ],
      },
      {
        type: "scenario",
        heading: "Lunch for Twelve",
        persona: "Vivek, Operations",
        setting: "Product team working through lunch before a release, 12 people.",
        timeline: [
          { time: "12:10", event: "Vivek picks items from the pantry catalogue for 12 people and adds a note about two vegetarian meals." },
          { time: "12:11", event: "The pantry accepts and queues the order with an ETA." },
          { time: "13:00", event: "Lunch is delivered to the team area. Vivek rates the delivery." },
          { time: "13:05", event: "The owner can see what the order cost, without Vivek sending a spreadsheet." },
        ],
        outcome:
          "One request replaced a dozen messages, and the cost landed in the owner's view automatically.",
      },
      {
        type: "visual",
        visual: "analytics",
        heading: "Your Office, in Numbers",
        body:
          "Analytics show request volume, accept and delivery times, ratings and when the office buzzes most. Full analytics and scorecards are part of Pro.",
        points: ["Volume by category and hour", "Accept and delivery times", "Ratings by team and person"],
      },
      {
        type: "metrics",
        heading: "What Operations Looks At",
        items: [
          { metric: "Request Volume by Category", meaning: "Pantry vs print vs IT vs facilities vs courier, for staffing decisions." },
          { metric: "Peak Hours", meaning: "When the office buzzes most, to plan shifts and breaks." },
          { metric: "Accept Time and On-Time Delivery", meaning: "Service level. Pilot offices averaged 32s to accept and 96% on time." },
          { metric: "Request Cost", meaning: "Owner-only spend view for orders like team lunches." },
          { metric: "Staff Scorecards", meaning: "Workload and quality by person." },
        ],
      },
      {
        type: "stats",
        heading: "What Pilot Offices Saw in Month One",
        items: [
          { value: "32s", label: "Average Accept Time" },
          { value: "96%", label: "On-Time Delivery" },
          { value: "−87%", label: "Phone Calls" },
          { value: "4.8★", label: "Average Staff Rating" },
        ],
        note: "Pilot office results in their first month. Your numbers will depend on your team and setup.",
      },
      {
        type: "checklist",
        heading: "Rollout Tips for Operations",
        items: [
          "Capture a baseline first: rough phone calls and complaints per week.",
          "Roll out category by category, pantry first, so each change is measurable.",
          "On Pro, set SLA deadlines and escalation per category.",
          "Use role permissions so spend stays owner-only.",
          "Run a monthly review with the admin head using the reports.",
          "For multiple sites, compare locations side by side on Pro.",
        ],
      },
      {
        type: "comparison",
        heading: "Answering Leadership's Questions",
        columns: ["Before ZapBuzzer", "With ZapBuzzer"],
        rows: [
          { label: "Are We Well Staffed?", a: "A guess based on complaints", b: "Request volume and accept time by hour" },
          { label: "What Does It Cost?", a: "Invoices reconciled by hand", b: "Owner-only cost per request" },
          { label: "Is Service Good?", a: "Anecdotes", b: "On-time rate and average rating" },
          { label: "Who Is Doing the Work?", a: "Unclear", b: "Scorecards per staff member" },
        ],
      },
      {
        type: "prose",
        heading: "Why Operations Should Own the Rollout",
        paragraphs: [
          "Operations already owns the vendors, the support staff roster and the budget. Owning the request system as well closes the loop: you set the deadlines, you see the misses, and you decide whether the fix is a process change, an extra person at 1 p.m., or a conversation with a vendor. The data stops being someone else's report and becomes your planning tool.",
        ],
      },
      {
        "type": "checklist",
        "heading": "Operations’ First-Month Review",
        "items": [
          "Compare average accept time in week one and week four.",
          "List the categories with the most escalations and ask why.",
          "Check whether calls to the pantry and IT desk have dropped.",
          "Share the top-rated staff with their team leads.",
          "Decide which deadlines to tighten next month."
        ]
      },
    ],
    faqs: [
      {
        "q": "Can Operations See Costs?",
        "a": "The spend view is owner-only. Operations leads typically review costs with the owner, or the owner shares figures from the cost view."
      },
      { q: "Can We Export Reports?", a: "Audit logs and reports are part of Pro. If you need data in another system, Enterprise includes a REST API and webhooks; talk to us for details." },
      { q: "Can Operations Track Which Request Categories Are Busiest?", a: "Yes. Analytics show request volume by category, location and hour, so you can see whether pantry, print, IT, facilities or courier work peaks and plan staff cover around it. Full analytics are part of Pro." },
      { q: "Can We Compare Offices in Different Cities?", a: "Multi-location is included in Pro, so each site's requests and performance can be viewed separately." },
      { q: "How Do We Prove the Rollout Worked?", a: "Compare your baseline with the first month's numbers: accept time, on-time delivery, ratings and how often people still call. Pilot offices saw phone calls fall 87% in their first month." },
      { q: "Is There a Dedicated Contact for Larger Rollouts?", a: "Enterprise customers get a dedicated CSM. Email hello@zapbuzzer.com and you’ll hear back by the next working day." },
      { q: "How Long Before the Data Is Useful?", a: "A week shows busy hours and top items. A month gives you dependable accept times, on-time rates and ratings to plan with." },
      { q: "Can Operations Set Up the Lunch-for-Twelve Workflow?", a: "Yes. The organiser picks items from the pantry catalogue, adds headcount and dietary notes, and buzzes it as one request. The pantry queues it, the requester rates it and the owner sees the cost." },
    ],
    related: ["analytics", "admin/spend-visibility", "workflows/lunch-request", "use-cases/track-office-requests", "enterprise/multi-location", "resources/workplace-operations-guide", "pricing/pro"],
    cta: { title: "See Your Office in Numbers", body: "Start the 14-day Pro trial, no credit card, and review your first month of data." },
  },
];
