import type { PageContent } from "../types";

export const pages: PageContent[] = [
  {
    path: "resources/office-efficiency-guide",
    title: "Office Efficiency Guide: Find the Hidden Time Leaks",
    description:
      "A practical guide to office efficiency: where small requests waste time, how to measure accept and delivery times, and a four-week plan to quieten your office.",
    h1: "The office efficiency guide: small requests, big leaks",
    eyebrow: "Guide",
    lead:
      "Most office inefficiency is not in the big projects. It is in the dozens of small asks every day: a coffee, a print, a cold meeting room, a courier at the gate. This guide shows how to find those leaks, measure them and close them, with or without software.",
    keywords: ["office efficiency guide", "improve office efficiency", "office productivity small requests", "reduce office interruptions", "office operations efficiency"],
    heroVisual: "analytics",
    sections: [
      {
        type: "prose",
        heading: "Why small requests matter more than they look",
        paragraphs: [
          "Ask a manager where office time goes and they will talk about meetings and email. Ask the pantry staff, the print room or the admin desk and you get a different answer: interruptions. Each one is small. Someone calls for tea. Someone walks over with a USB stick. Someone shouts that Conference Room B is freezing. None takes long on its own, but they arrive all day, unannounced, and they pull people off whatever they were doing.",
          "The cost lands on both sides. The requester stops work to make a call, waits, calls again, then walks over. The staff member is interrupted mid-task, often by several people at once, and has to decide whose ask comes first with no information except who was loudest. ZapBuzzer began in a Pune office where a single coffee took three phone calls, printouts vanished inside a group chat and IT problems went unanswered in private messages. That office was not badly run. It just had no system for small things.",
          "The good news is that small-request inefficiency is unusually easy to fix, because the work itself is simple. Nobody needs training to make coffee or bring an HDMI cable. What needs fixing is how the request travels.",
        ],
      },
      {
        type: "problem-solution",
        heading: "The five common leaks",
        problem: {
          title: "Where time goes",
          points: [
            "Reaching someone: calls that ring out, messages that get buried",
            "Ambiguity: ‘tea for the meeting’ with no room or number of cups",
            "Duplicate effort: two people respond, or each assumes the other will",
            "Silence: the requester does not know if anyone is on it, so they chase",
            "No memory: the same problems recur because nothing is recorded",
          ],
        },
        solution: {
          title: "What closes each leak",
          points: [
            "Send to the whole responsible team at once, not one person",
            "Use a catalogue with destinations, so details travel with the request",
            "Make ownership explicit: one person accepts, everyone sees it",
            "Show the requester who is on it and the ETA",
            "Time and record every request so patterns become visible",
          ],
        },
      },
      {
        type: "prose",
        heading: "Step one: measure for one week",
        paragraphs: [
          "Before changing anything, find out what is actually happening. For one week, ask each service team, whether pantry, print, IT, facilities or reception, to keep a simple tally: what was asked, by whom, how it arrived (call, WhatsApp, walk-up, shout) and roughly how long it took from ask to done.",
          "You will almost certainly find three things. First, a handful of request types make up most of the volume; in most offices coffee and tea dominate, followed by printing and small IT asks. Second, there are clear peaks, usually the first hour of the day, just before lunch and around big meetings. Third, a meaningful share of contacts are chase calls: people asking about something they already requested.",
          "Chase calls are the clearest signal of a broken process. Every one is pure waste: the work has not moved, and two people have been interrupted to confirm that.",
        ],
      },
      {
        type: "metrics",
        heading: "Four numbers worth tracking",
        intro: "You do not need a dashboard of twenty metrics. These four tell you almost everything about small-request efficiency.",
        items: [
          { metric: "Accept time", meaning: "How long until someone takes ownership. If this is long, routing or alerting is the problem." },
          { metric: "Delivery time", meaning: "How long from request to done. If accept is fast but delivery is slow, capacity or stock is the problem." },
          { metric: "On-time rate", meaning: "Share of requests delivered within an agreed deadline. This is what requesters feel." },
          { metric: "Chase calls", meaning: "Follow-ups about existing requests. The goal is close to zero." },
        ],
      },
      {
        type: "stats",
        heading: "What good looks like",
        items: [
          { value: "32s", label: "Average accept time" },
          { value: "96%", label: "On-time delivery" },
          { value: "−87%", label: "Phone calls" },
          { value: "4.8★", label: "Average staff rating" },
        ],
        note: "ZapBuzzer pilot offices, first month. Use them as a reference point, not a promise.",
      },
      {
        type: "prose",
        heading: "Step two: fix how requests travel",
        paragraphs: [
          "Once you know your volume and peaks, the fix is structural. Route requests to teams rather than individuals, so the person who is free picks it up. Make the first response a visible acceptance, not a vague ‘ok’. Give the requester a name and an ETA so they stop chasing. And give every request a clock, so ‘coming’ has a meaning.",
          "You can approximate this manually with a shared sheet and a rule that the first person to write their name owns the job. It works for a week or two in a small office. It rarely survives a busy Monday. This is the gap a tool like ZapBuzzer fills: the request is a tap, the team is pinged at once, the first to accept owns it and the requester sees exactly who is coming.",
        ],
      },
      {
        type: "visual",
        visual: "before-after",
        heading: "The same request, before and after",
        body: "Two coffees for the boss cabin. By phone it took 25 minutes and three calls, and the coffee arrived cold. Through ZapBuzzer it took four minutes, no calls, and it arrived hot. The pantry team did not get faster at making coffee. The request just stopped getting lost on the way.",
      },
      {
        type: "scenario",
        heading: "A typical scenario: the 11 o’clock crunch",
        persona: "Kavya, Sales Lead",
        setting: "Board meeting at 11, client pitch at 11:15, everybody wants something at once.",
        timeline: [
          { time: "10:48", event: "Aarav taps Coffee for the Boss Cabin; Raj accepts in 12 seconds." },
          { time: "10:50", event: "Kavya uploads her deck for 24 colour copies to Conference Room B." },
          { time: "10:52", event: "Tanvi taps IT for an HDMI cable; Priya brings it in 3 minutes." },
          { time: "10:58", event: "Kavya’s prints arrive before the client sits down." },
        ],
        outcome: "Three teams, three requests, zero calls. Each team saw only what it needed, and each requester knew who was on it.",
      },
      {
        type: "checklist",
        heading: "A four-week plan",
        intro: "A realistic schedule for a single office.",
        items: [
          "Week 1: tally every small request by type, channel and time to done",
          "Week 1: pick the single highest-volume request type, usually pantry",
          "Week 2: route that type through one structured flow with clear acceptance",
          "Week 2: tell requesters to stop calling and trust the flow for that type",
          "Week 3: add print and IT requests once the first type runs smoothly",
          "Week 3: agree realistic deadlines for each type",
          "Week 4: review accept time, on-time rate and chase calls against week 1",
          "Week 4: recognise the staff who carried the most requests",
        ],
      },
      {
        type: "prose",
        heading: "Step three: make it fair for staff",
        paragraphs: [
          "Efficiency drives often fail because they feel like surveillance to the people doing the work. Pantry and admin staff already know they are interrupted constantly; a system that only tracks how slow they are will be resented and quietly worked around.",
          "Flip it. Use the data to show who carries the load. In most offices, one or two people handle a large share of requests without credit. Ratings and scorecards make that visible. That is why ZapBuzzer was designed around the people doing the work: each completed job is credited on their scorecard instead of being used to pester them. Full analytics and scorecards are on the Pro plan.",
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Start smaller than you think",
        body: "One floor, one request type, one week. ZapBuzzer’s Free plan covers up to 10 staff in one location, which is enough to prove the approach before involving the whole office.",
      },
    ],
    faqs: [
      { q: "What is the single biggest efficiency gain in most offices?", a: "Removing chase calls. They are pure waste and they disappear once requesters can see who is handling their request and when it will arrive." },
      { q: "How do I measure office efficiency without software?", a: "Keep a one-week tally of every small request: type, channel, requester and time to done. It is rough but enough to find your biggest request types and peaks." },
      { q: "Will measuring requests upset staff?", a: "It can if you only measure speed. Pair it with fair attribution, such as ratings and recognition for people who carry the most work, and staff usually welcome it." },
      { q: "Which requests should we fix first?", a: "Start with the highest-volume type, which in most offices is pantry. Quick wins there build trust for the rest." },
      { q: "How quickly can we see results?", a: "Pilot offices on ZapBuzzer saw 87% fewer phone calls in their first month. Your results will depend on volume and how fully requests move to the new flow." },
    ],
    related: ["resources", "resources/internal-request-management-guide", "resources/workplace-operations-guide", "use-cases/stop-office-chase-calls", "analytics", "pricing/free"],
    cta: { title: "Measure your own office", body: "Start a 14-day free trial and see your real accept and delivery times by the end of week one." },
  },
  {
    path: "resources/internal-request-management-guide",
    title: "Internal Request Management: A Practical Guide",
    description:
      "How to design internal request management for an office: catalogue, routing, ownership, status, deadlines, closure and feedback, with templates and pitfalls.",
    h1: "How to manage internal requests without a helpdesk headache",
    eyebrow: "Guide",
    lead:
      "Internal requests are the asks one part of an office makes of another: pantry, print, IT, facilities, courier. This guide walks through designing a request process that is fast for the person asking, fair for the person doing and visible to the person running the office.",
    keywords: ["internal request management", "office request process", "internal service requests", "request routing office", "internal request crm"],
    heroVisual: "request-dashboard",
    sections: [
      {
        type: "prose",
        heading: "What makes internal requests different",
        paragraphs: [
          "Customer requests get a lot of attention and a lot of software. Internal requests usually get neither. They run on habit: call the pantry, message the admin, walk to the print room. That works until the office grows past the point where everyone knows everyone’s extension.",
          "Internal requests have a particular shape. They are frequent, small and time-sensitive. The person asking usually needs it in minutes, not days. The work is routine; the hard part is getting the request to someone who is free and making sure they actually take it. A good internal request process is designed around that shape, not borrowed from IT ticketing.",
        ],
      },
      {
        type: "workflow",
        heading: "The seven parts of a request process",
        intro: "Every working request process has these parts, whether it uses software or not.",
        steps: [
          { title: "1. Catalogue", body: "A short, clear list of what people can ask for, grouped by team: pantry, print, IT, facilities, courier." },
          { title: "2. Intake", body: "A fast way to ask that captures item, note and destination in one go." },
          { title: "3. Routing", body: "Rules for which team gets each request type, so nobody has to know who to call." },
          { title: "4. Ownership", body: "A single person explicitly takes the request." },
          { title: "5. Status", body: "The requester can see it has been taken, by whom, and an ETA." },
          { title: "6. Deadline", body: "Each request type has an expected completion time, and an escalation path when it is missed." },
          { title: "7. Closure and feedback", body: "The job is marked done and the requester can rate it." },
        ],
      },
      {
        type: "prose",
        heading: "Designing the catalogue",
        paragraphs: [
          "The catalogue is the most underrated part. If people have to describe their request in free text, details go missing: which room, how many cups, colour or black and white. A catalogue turns common asks into a single choice, with room for a note.",
          "Keep it short. Start with what people actually ask for, which your week-one tally will show. For a pantry that might be coffee, tea, juice, snacks and dry fruits. For print, upload a PDF and set copies and colour. For IT and facilities, list the frequent problems, such as a stuck projector, a missing HDMI cable or an AC running too cold. For reception, courier pickup. Ten good items beat fifty rarely used ones.",
          "Every item should carry a destination. ‘Coffee’ is not a complete request. ‘Coffee, two cups, Boss Cabin’ is.",
        ],
      },
      {
        type: "visual",
        visual: "catalog",
        heading: "A catalogue people will actually use",
        body: "Grid of common items, usual order one tap away, room for a short note and a destination. In ZapBuzzer, this is the first screen an employee sees.",
      },
      {
        type: "prose",
        heading: "Routing and ownership: the part most offices get wrong",
        paragraphs: [
          "Most informal systems route to a person: ‘call Raju for coffee’. That fails whenever Raju is busy, on break or on leave. Better is to route to a team and let the first free person take it. In ZapBuzzer this is called first-accept-wins: the request goes to everyone on the team at once, and whoever taps Accept first becomes its owner.",
          "The ownership step must be explicit and visible. In a WhatsApp group, a thumbs-up or an ‘ok’ is ambiguous, and you end up with two people making tea or nobody. An explicit accept, visible to the whole team and to the requester, removes the ‘I thought you’d do it’ problem entirely.",
          "Alerts matter as much as routing. A request nobody sees is the same as no request. Send it where staff actually look and keep reminding until someone accepts. ZapBuzzer notifies on app and email on every plan, adds Telegram and WhatsApp on Pro, and repeats until accepted.",
        ],
      },
      {
        type: "comparison",
        heading: "Routing to a person vs routing to a team",
        columns: ["Route to one person", "Route to the team, first accept wins"],
        rows: [
          { label: "Person busy or away", a: "Request waits or is lost", b: "Someone else accepts" },
          { label: "Peak hours", a: "One queue, one bottleneck", b: "Load shared across the team" },
          { label: "Ownership", a: "Assumed", b: "Explicit and visible" },
          { label: "Fairness", a: "Whoever is known gets all the work", b: "Work spreads; ratings credit the doer" },
        ],
      },
      {
        type: "prose",
        heading: "Status, deadlines and escalation",
        paragraphs: [
          "Once a request is accepted, the requester should not have to ask what is happening. The minimum is who has it and roughly when it will arrive. ZapBuzzer shows the staff member’s name and photo, and an ETA once they start.",
          "Deadlines turn ‘in a bit’ into something measurable. Set them by request type and keep them realistic: a coffee might be a few minutes, 24 colour copies longer, a cold conference room perhaps 15 minutes. What matters most is what happens when the deadline passes. Without escalation, deadlines are decoration. With escalation, an overdue request reaches someone who can act. ZapBuzzer’s SLA and escalation chain are on Pro.",
        ],
      },
      {
        type: "scenario",
        heading: "A typical scenario: a request that would have rotted",
        persona: "Om, Engineer",
        setting: "AC stuck at 16°C in Conference Room B, facilities team stretched.",
        timeline: [
          { time: "14:02", event: "Om taps Facilities, notes the AC and the room." },
          { time: "14:02", event: "The facilities team, including Deepak, is pinged." },
          { time: "14:03", event: "Deepak accepts and starts the job." },
          { time: "14:17", event: "On Pro, if the 15-minute deadline passes, the request escalates up the chain automatically." },
        ],
        outcome: "Om never sends a chase message. In Deepak’s words: “Facilities tickets auto-escalate now. Nothing rots in someone’s DMs.”",
      },
      {
        type: "prose",
        heading: "Closure, feedback and memory",
        paragraphs: [
          "Mark requests done explicitly. A delivery photo helps for prints or courier items. Then ask for a quick rating. Ratings are less about catching bad service and more about giving staff credit for good service, which matters for morale.",
          "Finally, keep a history. Without one, every month starts from zero. With one, you can see that print requests spike on Monday mornings, or that a particular meeting room generates half of all facilities complaints. Free ZapBuzzer workspaces keep 30 days of history; Pro adds full analytics, audit logs and reports.",
        ],
      },
      {
        type: "prose",
        heading: "Getting people to use the new process",
        paragraphs: [
          "A request process only works if people route requests through it. Announce each change clearly, start with the request type that hurts most, and make sure the first week goes well by having staff watch the queue closely. When a call comes in for something that has moved, the staff member can take it once and gently point the caller to the app. Within a couple of weeks the new path becomes the habit, because it is visibly faster.",
        ],
      },
      {
        type: "checklist",
        heading: "Pitfalls to avoid",
        items: [
          "A catalogue so long nobody can find anything",
          "Routing to named individuals instead of teams",
          "Accepting ‘ok’ in a chat as ownership",
          "Deadlines with no escalation behind them",
          "Measuring only speed, not credit for staff",
          "Letting phone and WhatsApp requests continue in parallel indefinitely",
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Run the process before you scale it",
        body: "Start with one team and one floor. ZapBuzzer’s Free plan supports up to 10 staff and one location, which is enough to prove your design.",
      },
    ],
    faqs: [
      { q: "What is internal request management?", a: "It is the process of receiving, routing, completing and recording requests that employees make of in-house service teams such as pantry, print, IT, facilities and reception." },
      { q: "Do we need a helpdesk for internal requests?", a: "Not usually. Helpdesks are designed for longer IT tickets. Quick office requests work better with a lighter flow: one tap, team-wide alert, first to accept owns it." },
      { q: "How many items should our catalogue have?", a: "Start with the ten or so things people ask for most, based on a week of tallying. Add more only when you see repeated free-text requests for the same thing." },
      { q: "What if nobody accepts a request?", a: "Alerts should repeat until someone does, and an escalation path should kick in once the deadline passes. In ZapBuzzer, repeat notifications are standard and the escalation chain is on Pro." },
      { q: "How do we get people to stop calling?", a: "Make the new flow visibly faster. When requesters see a name and ETA within seconds, the calls stop on their own." },
    ],
    related: ["resources", "resources/office-efficiency-guide", "resources/sla-management-guide", "features/request-routing", "features/first-accept-wins", "features/request-catalog", "free-trial"],
    cta: { title: "Put your process on rails", body: "Try ZapBuzzer free for 14 days without a credit card or a setup call." },
  },
  {
    path: "resources/workplace-operations-guide",
    title: "Workplace Operations Guide for Office Managers",
    description:
      "Run pantry, print room, IT desk, facilities and mailroom as one workplace operation: staffing, peak hours, routing, deadlines, cost visibility and reporting.",
    h1: "Running workplace operations as one service, not five",
    eyebrow: "Guide",
    lead:
      "In most offices, pantry, print, IT, facilities and the mailroom run as separate islands with separate phone numbers and separate WhatsApp groups. This guide is for the office manager or admin head who wants to run them as one coherent operation.",
    keywords: ["workplace operations guide", "office operations management", "facilities and pantry operations", "office manager guide", "workplace services"],
    heroVisual: "request-dashboard",
    sections: [
      {
        type: "prose",
        heading: "Five teams, one experience",
        paragraphs: [
          "From an employee’s point of view, there is no difference between the pantry and the print room. Both are ‘the office’ and both should just work. From the office manager’s point of view, they are different teams with different rhythms: the pantry is busiest first thing and before lunch, the print room before client meetings, facilities when the weather changes, the mailroom at the end of the day.",
          "Good workplace operations hides those differences from employees and makes them visible to managers. One way to ask for anything. One way to see what is happening. Team-specific routing and deadlines underneath.",
        ],
      },
      {
        type: "table",
        heading: "How each team typically works",
        headers: ["Team", "Typical requests", "Peak times", "Sensible deadline"],
        rows: [
          ["Pantry", "Coffee, tea, juice, snacks, lunch orders", "Morning, pre-lunch, before big meetings", "Minutes for drinks; longer for lunch for 12"],
          ["Print room", "PDF prints, copies, colour jobs", "Before client meetings and pitches", "Depends on copies and colour"],
          ["IT desk", "HDMI cables, projector, small hardware", "Meeting start times", "Minutes for cables; longer for faults"],
          ["Facilities", "AC, lighting, room issues, equipment", "Weather changes, Monday mornings", "Around 15 minutes for urgent room issues"],
          ["Reception and mailroom", "Courier pickups, deliveries", "Afternoon courier windows", "Before the courier leaves"],
        ],
      },
      {
        type: "prose",
        heading: "Staffing for peaks, not averages",
        paragraphs: [
          "Average request volume tells you very little. What hurts is the 10:45 crunch before an 11 o’clock board meeting, when the CEO wants coffee, a sales lead needs 24 colour copies and someone discovers the projector is stuck. Plan staffing and stock around those peaks.",
          "Team-wide routing helps here. If every pantry request goes to the whole pantry team and the first free person accepts, load spreads naturally. The person restocking on the 3rd floor does not need to drop everything; someone else picks it up. A first-accept-wins model is effectively a self-balancing queue.",
          "Once you have a few weeks of data, look at when requests cluster. ZapBuzzer’s analytics show when the office buzzes most, so you can shift breaks and restocking away from peak windows. Full analytics are on Pro.",
        ],
      },
      {
        type: "visual",
        visual: "analytics",
        heading: "See the rhythm of your office",
        body: "Request volume by hour, accept and delivery times, ratings by team. Patterns that were guesswork become obvious within a couple of weeks.",
      },
      {
        type: "prose",
        heading: "One front door for every request",
        paragraphs: [
          "The biggest single improvement most offices can make is a single front door. Instead of five extensions and three WhatsApp groups, employees open one app, pick what they need and tap Buzz. Routing to the right team happens behind the scenes: coffee to the pantry, prints to the print room, AC to facilities.",
          "This also fixes the reception problem. In many offices the front desk becomes the default router for everything because it is the one number everybody knows. That pulls reception away from visitors. With one front door, reception handles reception work, including courier pickups, which get logged with an audit trail.",
        ],
      },
      {
        type: "scenario",
        heading: "A typical scenario: an ordinary afternoon",
        persona: "Deepak, Admin Head",
        setting: "Responsible for facilities, pantry and reception on two floors.",
        timeline: [
          { time: "12:05", event: "Vivek orders lunch for 12; the pantry queues it and the owner can see the cost." },
          { time: "14:02", event: "Om reports the AC stuck at 16°C; Deepak’s team accepts." },
          { time: "15:25", event: "Tanvi needs an HDMI cable; IT delivers in 3 minutes." },
          { time: "16:10", event: "Neha at reception taps Courier Pickup; the mailroom logs it." },
        ],
        outcome: "Deepak did not field a single call. He checked the dashboard twice and saw everything on time.",
      },
      {
        type: "prose",
        heading: "Cost, permissions and accountability",
        paragraphs: [
          "Workplace operations spends money: pantry supplies, print consumables, team lunches. Owners usually want to see that spend without exposing it to everyone. ZapBuzzer’s request cost visibility is owner-only, so the owner sees what a lunch order cost while staff and requesters do not.",
          "Permissions matter as operations grow. Pantry staff should see pantry requests; facilities staff should see facilities requests; managers should see their teams. ZapBuzzer supports granular permissions per role, and every action is audit-logged. Audit logs and reports are part of Pro, which also adds multi-location support if you run several floors or branches.",
        ],
      },
      {
        type: "visual",
        visual: "roles",
        heading: "Right people, right view",
        body: "A permissions matrix by role: owner, manager, staff, employee. Spend stays with the owner; every action is logged.",
      },
      {
        type: "metrics",
        heading: "A monthly operations review",
        intro: "Bring these to a 30-minute monthly review with team leads.",
        items: [
          { metric: "Volume by team", meaning: "Is any team overloaded relative to its headcount?" },
          { metric: "Accept time by hour", meaning: "Are there windows where nobody is available?" },
          { metric: "On-time rate by request type", meaning: "Are deadlines realistic, or is a team under-resourced?" },
          { metric: "Escalations", meaning: "Which requests keep escalating, and why?" },
          { metric: "Ratings and scorecards", meaning: "Who deserves recognition this month?" },
        ],
      },
      {
        type: "prose",
        heading: "Rolling out changes without upsetting anyone",
        paragraphs: [
          "Operations teams are often the people with the least say in how the office runs, and the most to lose when a new process is imposed. Before changing anything, sit down with each team lead and walk through what slows them down. Pantry staff will tell you about being stopped in corridors with three orders at once. The print room will tell you about PDFs sent to the wrong number. Facilities will tell you about complaints that arrive third-hand with no room name. Those conversations shape the catalogue and routing far better than a top-down design.",
          "Then move one team at a time. Pantry usually goes first because it has the highest volume and the quickest wins. Once pantry staff see that requests arrive with the room and the number of cups already filled in, they become the best advocates for the next team. Print and IT tend to follow within a week or two, facilities and mailroom after that.",
          "Tell employees clearly when a request type has moved. A short note from the office manager, such as ‘from Monday, tap Coffee instead of calling the pantry’, does more than any training session. Expect a few calls in the first week and redirect them politely. By the second week most people prefer the tap, because they can see who is coming.",
        ],
      },
      {
        type: "prose",
        heading: "When one office becomes several",
        paragraphs: [
          "Growth changes operations in predictable ways. A second floor means a second pantry or a longer walk. A second branch means separate teams who should not receive each other’s requests. Plan for this by treating each site as its own location with its own teams, while keeping one way of asking and one view for leadership.",
          "Multi-location support is part of ZapBuzzer Pro. Groups with many sites, and facility companies that run services for several client offices, usually need more: single sign-on, branding or deployment options. Those are part of Enterprise, and the right first step is a conversation about your setup.",
        ],
      },
      {
        type: "checklist",
        heading: "Workplace operations checklist",
        items: [
          "One front door for all internal requests",
          "Routing by team, not by individual",
          "Deadlines set per request type",
          "Escalation path for overdue requests",
          "Owner-only view of spend",
          "Monthly review with team leads",
          "Recognition for staff who carry the load",
        ],
      },
      {"type":"callout","tone":"tip","title":"One lead per team, not per request","body":"Name a lead for each service team who owns the team’s catalogue items, destinations and deadlines. Individual requests are still owned by whoever accepts them; the lead owns how the team works."},
    ],
    faqs: [
      { q: "Should each team have its own tool?", a: "It is better for employees to have one front door. Behind it, each team can have its own routing, deadlines and queue." },
      { q: "How do we handle multiple floors or branches?", a: "Treat each as a location with its own teams. ZapBuzzer’s Free plan covers one location; Pro supports multiple." },
      { q: "Who should see request costs?", a: "Usually just the owner. ZapBuzzer’s spend view is owner-only by design." },
      { q: "How often should we review operations data?", a: "Monthly is enough for most offices, with a quick weekly glance at escalations." },
      { q: "We are a facility company serving several clients. Does this apply?", a: "Yes. ZapBuzzer Enterprise is built for groups and facility companies, with options such as white-label and a custom domain. Talk to us for details." },
    ],
    related: ["resources", "resources/office-efficiency-guide", "resources/sla-management-guide", "use-cases/office-manager", "use-cases/facilities-operations", "admin/spend-visibility", "pricing/pro"],
    cta: { title: "Give your office one front door", body: "Start a 14-day free trial and route pantry, print, IT, facilities and courier through one app." },
  },
  {
    path: "resources/sla-management-guide",
    title: "SLA Management Guide for Office Requests",
    description:
      "How to set realistic SLAs for office requests, design an escalation chain, handle breaches without blame and report on on-time performance across teams.",
    h1: "SLAs for coffee, prints and cold meeting rooms",
    eyebrow: "Guide",
    lead:
      "SLAs are usually discussed for IT and customer support. They are just as useful for small office requests, as long as you keep them realistic and put escalation behind them. This guide shows how.",
    keywords: ["sla management guide", "office request sla", "escalation chain design", "sla breach handling", "internal sla"],
    heroVisual: "sla-timer",
    sections: [
      {
        type: "prose",
        heading: "Why small requests need deadlines",
        paragraphs: [
          "Without a deadline, ‘coming’ can mean two minutes or forty. Requesters fill that uncertainty by chasing, and staff prioritise whoever chased last. A deadline replaces that negotiation with a shared expectation: this kind of request should be done in this much time.",
          "An internal SLA is not a legal contract. It is a promise the office makes to itself. It works when it is realistic, visible to staff, and backed by an escalation path that kicks in automatically. In ZapBuzzer, every request is timed; SLA deadlines and the escalation chain are on the Pro plan.",
        ],
      },
      {
        type: "visual",
        visual: "sla-timer",
        heading: "A timer that everyone can see",
        body: "The countdown starts when the request is sent. Staff see how long is left; when it runs out, the request escalates rather than sitting quietly overdue.",
      },
      {
        type: "prose",
        heading: "Setting realistic deadlines",
        paragraphs: [
          "Start from data, not ambition. Look at a week or two of actual delivery times for each request type and set the deadline a little above what your team usually manages at a normal moment. If coffee usually takes four minutes, a deadline of one minute guarantees breaches and a deadline of thirty is meaningless.",
          "Set deadlines by request type, not one number for everything. Two coffees and 24 colour copies are not the same job. Urgent room issues, like an AC stuck at 16°C before a client meeting, deserve a tight deadline such as 15 minutes, because the cost of delay is high.",
          "Review deadlines after a month. If a type almost never breaches, you may be able to tighten it. If it breaches constantly, the problem is probably capacity rather than effort, and tightening will just demoralise people.",
        ],
      },
      {
        type: "table",
        heading: "Example deadline thinking",
        intro: "Illustrative only. Set your own from your own data.",
        headers: ["Request", "What drives the time", "What to consider"],
        rows: [
          ["Coffee to a cabin", "Distance from pantry, queue length", "Short deadline, peaks at meeting starts"],
          ["24 colour copies", "Copies, colour, printer load", "Longer deadline; prioritise pitch times"],
          ["HDMI cable", "Stock location", "Short; keep cables near meeting rooms"],
          ["AC too cold", "Diagnosis and access", "Around 15 minutes before escalating"],
          ["Courier pickup", "Courier schedule", "Deadline tied to the pickup window"],
        ],
      },
      {
        type: "prose",
        heading: "Designing the escalation chain",
        paragraphs: [
          "An escalation chain is the ordered list of people an overdue request moves to. The first step is usually the team lead, the second the admin or facilities head, and occasionally a third step for requests that matter a lot. Keep chains short. A chain with five steps tells you that ownership is unclear.",
          "Escalation should be automatic. If it depends on the requester complaining, you are back to chase calls. ZapBuzzer escalates overdue requests to a manager automatically; on Pro you define the full escalation chain.",
          "Escalation is a signal, not a punishment. An escalated request means the system needs attention: maybe the team is short-staffed, maybe the deadline is wrong, maybe the stock is in the wrong place.",
        ],
      },
      {
        type: "visual",
        visual: "escalation",
        heading: "A short, clear ladder",
        body: "Team, then lead, then admin head. Each step is notified automatically when the previous step’s time runs out.",
      },
      {
        type: "scenario",
        heading: "A typical scenario: escalation done right",
        persona: "Om, Engineer",
        setting: "Conference Room B AC stuck at 16°C, client call in 20 minutes.",
        timeline: [
          { time: "14:02", event: "Om taps Facilities; the 15-minute deadline starts." },
          { time: "14:03", event: "A facilities staff member accepts." },
          { time: "14:12", event: "The part needed is in another building; the job stalls." },
          { time: "14:17", event: "The deadline passes and the request escalates to Deepak, the admin head." },
          { time: "14:20", event: "Deepak moves the client call to another room and arranges the repair." },
        ],
        outcome: "The meeting goes ahead in a warm room. The escalation revealed a stock problem, not a lazy team member.",
      },
      {
        type: "metrics",
        heading: "SLA metrics worth reporting",
        items: [
          { metric: "On-time rate", meaning: "Share of requests completed within their deadline. Pilot offices reached 96% in the first month." },
          { metric: "Breaches by type", meaning: "Which request types miss deadlines most often." },
          { metric: "Breaches by hour", meaning: "Whether breaches cluster at peaks, suggesting a capacity issue." },
          { metric: "Escalation outcomes", meaning: "What happened after escalation, to find root causes." },
        ],
      },
      {
        type: "prose",
        heading: "Accept time vs completion time",
        paragraphs: [
          "Most SLA discussions focus on completion: was the job done in time? For small office requests, accept time matters almost as much. A requester who sees that Raj accepted their coffee within 12 seconds stops worrying, even if the coffee takes another four minutes. A requester who hears nothing for three minutes picks up the phone.",
          "Track both. A slow accept time points at alerting and availability: staff are not seeing requests, or nobody on the team is free at that hour. A slow completion time after a fast accept points at the work itself: stock in the wrong place, a printer queue, a repair that needs a part. The fixes are different, so the measurements should be too. ZapBuzzer pilot offices averaged a 32-second accept time in their first month.",
        ],
      },
      {
        type: "prose",
        heading: "Communicating SLAs to the office",
        paragraphs: [
          "Staff should know the deadlines before they are switched on, and they should have a say in them. A deadline set in a meeting room upstairs and discovered on the pantry floor will be resented. Share the delivery-time data, propose numbers and ask the team whether they are fair at peak times.",
          "Requesters benefit from knowing the deadlines too. If people know that a 24-copy colour job is expected within a set window, they plan around it and stop sending urgent requests at the last minute. Kavya’s habit of uploading her deck as soon as it is final, rather than ten minutes before the pitch, is the kind of behaviour change that visible deadlines produce over time.",
          "Finally, celebrate the on-time rate, not just the breaches. A monthly note that the pantry delivered almost every request on time costs nothing and makes the next tightening of a deadline far easier to agree.",
        ],
      },
      {
        type: "checklist",
        heading: "SLA rollout checklist",
        items: [
          "Collect two weeks of real delivery times per request type",
          "Set deadlines slightly above normal delivery time",
          "Keep escalation chains to two or three steps",
          "Make escalation automatic",
          "Share deadlines with staff before switching them on",
          "Review breaches monthly and adjust deadlines or staffing",
          "Never use breach counts alone to judge individuals",
        ],
      },
      {
        type: "callout",
        tone: "warning",
        title: "Do not weaponise the timer",
        body: "If staff feel SLAs exist to catch them out, they will game them. Pair deadlines with fair attribution: ratings and scorecards that credit the people who deliver.",
      },
      {"type":"prose","heading":"When an SLA keeps breaching","paragraphs":["A deadline that breaches every day is telling you something. Either the deadline is unrealistic, the team is short-staffed at that hour, or the request type is badly defined. Look at when the breaches happen before you change anything: breaches clustered around lunch point to staffing, while breaches spread evenly point to the deadline itself.","Resist fixing it by quietly loosening the deadline. Talk to the team first. Sometimes the fix is as simple as splitting a vague category, such as separating a quick AC adjustment from a repair that needs a technician."]},
    ],
    faqs: [
      {"q":"Should SLAs differ between floors or sites?","a":"Often, yes. A pantry on the same floor can meet a tighter deadline than one two floors away. Pro supports multiple locations, so deadlines can reflect each site."},
      { q: "What is an SLA for internal office requests?", a: "It is the agreed time within which a type of request should be completed, such as a few minutes for coffee or 15 minutes for an urgent room issue. It is an internal expectation, not a contract." },
      { q: "Is SLA included in ZapBuzzer Free?", a: "Every request is timed on all plans, but SLA deadlines and the escalation chain are part of Pro." },
      { q: "How long should an escalation chain be?", a: "Two or three steps is usually enough. Longer chains suggest unclear ownership." },
      { q: "What should we do when SLAs are breached often?", a: "Look at capacity, stock location and peak hours before blaming individuals. Adjust deadlines or staffing based on what the data shows." },
      { q: "How do we report on SLA performance?", a: "Track on-time rate overall and by request type, plus breaches by hour. ZapBuzzer Pro includes full analytics and reports." },
    ],
    related: ["resources", "sla", "sla/escalation-chains", "sla/breach-detection", "resources/internal-request-management-guide", "use-cases/sla-compliance", "pricing/pro"],
    cta: { title: "Put a clock on every request", body: "Try Pro’s SLA and escalation chain free for 14 days." },
  },
  {
    path: "resources/office-automation-guide",
    title: "Office Automation Guide: What to Automate",
    description:
      "A practical guide to office automation for internal services: what to automate (routing, alerts, reminders, escalation, reporting) and what to keep human.",
    h1: "Automate the chasing, not the people",
    eyebrow: "Guide",
    lead:
      "Office automation does not mean robots in the pantry. It means removing the repetitive coordination around office work: who to tell, reminding them, chasing them, noting what happened. This guide covers what is worth automating and what should stay human.",
    keywords: ["office automation guide", "automate office requests", "office workflow automation", "automatic escalation office", "office admin automation"],
    heroVisual: "notification-flow",
    sections: [
      {
        type: "prose",
        heading: "The coordination tax",
        paragraphs: [
          "Look at any small office request and split it into the work and the coordination. Making two coffees is the work. Finding out who is free, telling them, confirming they heard, asking whether it is on its way and remembering whether it happened is the coordination.",
          "In most offices the coordination takes longer than the work. That is the coordination tax, and it is the right target for automation. The work itself, making coffee, fixing an AC, bringing a cable, stays with people. The tax goes to software.",
        ],
      },
      {
        type: "table",
        heading: "What to automate and what to keep human",
        headers: ["Task", "Automate?", "Why"],
        rows: [
          ["Deciding which team gets a request", "Yes", "Rules by request type are reliable"],
          ["Alerting the team", "Yes", "Software can ping several channels at once"],
          ["Reminding until someone responds", "Yes", "Repeat notifications do not get tired"],
          ["Choosing who takes it", "Partly", "Let staff accept; first accept wins"],
          ["Escalating overdue requests", "Yes", "Removes the need to chase"],
          ["Doing the work", "No", "This is what staff are for"],
          ["Judging quality", "No", "Requesters rate; managers interpret"],
          ["Recording and reporting", "Yes", "Every request timed and logged"],
        ],
      },
      {
        type: "prose",
        heading: "Automation one: routing",
        paragraphs: [
          "The first thing to automate is ‘who should I tell?’. If coffee always goes to the pantry team, prints to the print room and AC complaints to facilities, the requester should not need to know any of that. They pick what they need; the system routes it. ZapBuzzer auto-routes requests to the right team based on what was asked for.",
          "Route to teams, not people. Automation that pings one named person inherits every weakness of the phone call it replaced.",
        ],
      },
      {
        type: "visual",
        visual: "notification-flow",
        heading: "Automation two: alerts on every channel",
        body: "One request, several channels at once. ZapBuzzer notifies through the app and email on every plan; Pro adds Telegram and WhatsApp. Notifications repeat until someone accepts, so a busy staff member cannot miss one.",
      },
      {
        type: "prose",
        heading: "Automation three: reminders and escalation",
        paragraphs: [
          "Chasing is the most hated part of office life, for both sides. It is also the easiest to automate. Repeat notifications handle the first part: until someone accepts, the alert keeps sounding. On the mobile app, a locked screen or silent mode does not stop the ring.",
          "Escalation handles the second part. When a request passes its deadline, it moves to a manager automatically. Nobody has to decide whether it is worth complaining about. On ZapBuzzer Pro you define the escalation chain and SLA deadlines.",
        ],
      },
      {
        type: "scenario",
        heading: "A typical scenario: no human chasing at all",
        persona: "Neha, Reception",
        setting: "Courier at the gate, mailroom staff on another floor.",
        timeline: [
          { time: "16:10", event: "Neha taps Courier Pickup." },
          { time: "16:10", event: "The mailroom team is notified automatically." },
          { time: "16:11", event: "Notifications repeat until a mailroom staff member accepts." },
          { time: "16:13", event: "Pickup logged with an audit trail." },
        ],
        outcome: "Neha stayed at the desk with visitors. The only human steps were asking and doing.",
      },
      {
        type: "prose",
        heading: "Automation four: the record",
        paragraphs: [
          "When every request flows through one system, the record writes itself. Every request is timed; acceptance, start, delivery and rating are captured as they happen. That gives you analytics without anyone filling in a spreadsheet: who is fastest, who earns 5★, when the office buzzes most.",
          "Automated records also protect staff. When a courier package is questioned, the audit trail shows exactly who logged it and when. Audit logs and reports are part of Pro.",
        ],
      },
      {
        type: "prose",
        heading: "What to keep human",
        paragraphs: [
          "Do not automate the choice of who does the job. Assigning requests by algorithm sounds efficient but ignores everything the algorithm does not know: who is carrying a tray, who is on a ladder, who just started a lunch order for 12. First-accept-wins keeps that judgement with staff while still making ownership instant and visible.",
          "Do not automate quality judgements either. Ratings come from the person who received the coffee or the prints. Managers should read scorecards as conversation starters, not verdicts.",
        ],
      },
      {
        type: "prose",
        heading: "Common automation mistakes",
        paragraphs: [
          "The first mistake is automating a broken process. If nobody agrees which team handles projector problems, automating the routing just sends the confusion faster. Sort out ownership on paper first: every request type has one responsible team.",
          "The second is too many notifications. Alerting every staff member about every request on every channel leads to people muting everything. Send each request to the team that handles it, on the channels that team actually uses, and stop alerting the moment someone accepts.",
          "The third is automating away the requester’s visibility. Some systems route a request and then go silent until it is closed. That brings back the chase calls you were trying to remove. The requester should see who accepted, the ETA and the delivery, without asking.",
          "The fourth is treating automation as a project. Office service automation should not take months. If it needs consultants and a steering committee, the tool is too heavy for two coffees and an HDMI cable. Most ZapBuzzer offices are live within a single afternoon, and there is no setup fee.",
        ],
      },
      {
        type: "prose",
        heading: "Measuring whether automation worked",
        paragraphs: [
          "Pick a baseline before you start: a week’s count of phone calls and WhatsApp messages about requests, and rough delivery times for your top request types. After a month, compare. The most telling number is usually chase calls, because they only exist when coordination has failed. ZapBuzzer pilot offices saw phone calls fall 87% in their first month, alongside 96% on-time delivery.",
          "Ask staff as well as managers. If pantry and admin staff say their day feels calmer and less interrupted, the automation is doing its job, whatever the numbers say.",
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Connecting to other systems",
        body: "Organisations that want ZapBuzzer requests and events in their own systems can use the REST API and webhooks on Enterprise. Talk to us for details.",
      },
      {
        type: "checklist",
        heading: "Office automation starter list",
        items: [
          "Replace ‘who do I call’ with routing by request type",
          "Alert whole teams on the channels they already use",
          "Repeat alerts until someone accepts",
          "Escalate overdue requests automatically",
          "Record every request with timings and ratings",
          "Keep the choice of who does the job with staff",
          "Review analytics monthly rather than micromanaging daily",
        ],
      },
      {"type":"workflow","heading":"A four-week automation plan","intro":"Automating office services works best in small steps, each one checked before the next.","steps":[{"title":"Week 1: map ownership","body":"List every request type and the one team responsible. Resolve disputes, such as who handles a stuck projector, before anything is automated."},{"title":"Week 2: routing and alerts","body":"Turn on routing by request type and alerts to whole teams. Watch for requests that land with the wrong team and fix the catalogue."},{"title":"Week 3: deadlines","body":"Add realistic deadlines and an escalation chain for the request types that matter most. On ZapBuzzer this is part of Pro."},{"title":"Week 4: review","body":"Compare chase calls and delivery times with your baseline, and ask staff how their day feels."}]},
      {"type":"prose","heading":"Automation and fairness to staff","paragraphs":["Automation changes how staff experience their day, so design it with them. Repeat alerts are welcome when they stop a request being missed and unwelcome when they keep ringing after a colleague has already taken the job. Stopping alerts the moment someone accepts is the difference.","Automated records also change how credit is given. When every delivery is timed and rated, the quiet person who handles most of the pantry requests finally shows up in the numbers. Say that out loud when you roll out: the record is there to give fair attribution, not to catch people out."]},
    ],
    faqs: [
      {"q":"How do we stop automated alerts annoying staff?","a":"Send each request only to the team that handles it, on the channels that team uses, and stop alerting once someone accepts. ZapBuzzer notifications repeat only until a request is accepted."},
      {"q":"What should stay manual during the first month?","a":"Anything you have not agreed ownership for. Automate the request types with a clear responsible team first and add the awkward ones once that is settled."},
      { q: "What should an office automate first?", a: "Routing and alerts. Once requests reach the right team without anyone having to know who to call, most of the coordination tax disappears." },
      { q: "Will automation replace pantry or admin staff?", a: "No. It removes the chasing and coordination around their work so they can spend more time on the work itself." },
      { q: "Do we need an API for office automation?", a: "Not for routing, alerts, escalation or reporting, which ZapBuzzer handles itself. The REST API and webhooks on Enterprise are for connecting to other systems." },
      { q: "Is automatic escalation available on Free?", a: "Repeat notifications are part of every plan. SLA deadlines with an escalation chain are part of Pro." },
      { q: "How long does it take to set up?", a: "Most offices go live within a single afternoon, with no setup fee and no consultant." },
    ],
    related: ["resources", "resources/sla-management-guide", "resources/office-efficiency-guide", "features/request-routing", "notifications/multi-channel", "sla/automatic-escalation", "free-trial"],
    cta: { title: "Stop paying the coordination tax", body: "Start a 14-day free trial and let ZapBuzzer do the chasing." },
  },
];
