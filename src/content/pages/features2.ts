import type { PageContent } from "../types";

export const pages: PageContent[] = [
  // ───────────────────────────── REQUEST TIMERS
  {
    path: "features/request-timers",
    title: "Request Timers for Every Office Ask",
    description:
      "Every ZapBuzzer request is timed from buzz to delivery. See how long requests wait, how fast staff accept, and which ones are about to miss their deadline.",
    h1: "Every Request Has a Clock Running",
    eyebrow: "Feature · Request Timers",
    lead:
      "It is hard to speed things up if nobody knows how long they take. ZapBuzzer starts a timer the instant someone taps Buzz and stops it on delivery, so wait time, accept time and delivery time stop being guesses.",
    keywords: [
      "request timers",
      "office request response time",
      "time to accept requests",
      "service timer office",
      "request deadline countdown",
    ],
    heroVisual: "sla-timer",
    sections: [
      {
        type: "prose",
        eyebrow: "What Is Timed",
        heading: "From the Tap to the Doorstep",
        paragraphs: [
          "Every request in ZapBuzzer is timed. The clock starts when the employee taps Buzz, and each stage after that is time-stamped: when someone accepts, when they start, when they deliver and when the requester rates it.",
          "That gives you three numbers that matter. Time to accept tells you how responsive the team is. Time from start to delivery tells you how long the work takes. Total time tells you how long the requester actually waited. That is the number that decides whether the coffee arrives hot.",
          "Timers also make deadlines possible. Each request has an SLA, which is the time limit for finishing it, and the timer tells everyone how much of that time is left.",
        ],
      },
      {
        type: "visual",
        visual: "sla-timer",
        heading: "The Countdown Ring",
        body: "Open requests show a countdown against their deadline, so staff and managers can see at a glance what is comfortable, what is getting close and what has gone over.",
        points: [
          "Time elapsed since the buzz",
          "Time remaining before the deadline",
          "Clear state when a request is at risk or overdue",
          "Escalation note when it has been passed up",
        ],
      },
      {
        type: "table",
        heading: "The Timestamps on Every Request",
        headers: ["Stage", "Timestamp", "What It Tells You"],
        rows: [
          ["Buzzed", "Request created", "Start of the requester’s wait"],
          ["Accepted", "First Accept tapped", "Team responsiveness"],
          ["Started", "Owner begins, with ETA", "How quickly work begins after claiming"],
          ["Delivered", "Owner marks delivered", "End of the wait; on time or late"],
          ["Rated", "Requester gives stars", "Quality alongside speed"],
        ],
      },
      {
        type: "scenario",
        heading: "The 15-minute AC Fix",
        persona: "Om, Engineer",
        setting: "Conference Room B AC stuck at 16°C before a client workshop.",
        timeline: [
          { time: "09:30", event: "Om buzzes Facilities. A 15-minute deadline begins." },
          { time: "09:31", event: "Deepak accepts, 48 seconds on the clock." },
          { time: "09:33", event: "Deepak marks started with a 10-minute ETA." },
          { time: "09:41", event: "Delivered at 11 minutes, inside the deadline." },
        ],
        outcome: "If Deepak had been delayed past 09:45, the timer would have tipped the request into overdue and auto-escalated it to a manager. As Deepak put it: “Facilities tickets auto-escalate now. Nothing rots in someone’s DMs.”",
      },
      {
        type: "features",
        heading: "What Timers Make Possible",
        items: [
          { title: "Deadlines", body: "Timers power the SLA deadline on every request." },
          { title: "Escalation", body: "Overdue requests auto-escalate; the chain is on Pro." },
          { title: "Scorecards", body: "Accept and delivery times feed each staff member’s scorecard." },
          { title: "Analytics", body: "See average accept time, on-time rate and busy hours." },
          { title: "Fair Comparisons", body: "Everyone is timed the same way, so speed is measured, not argued about." },
        ],
      },
      {
        type: "stats",
        heading: "Timed Results From Pilot Offices",
        items: [
          { value: "32s", label: "Average Accept Time" },
          { value: "96%", label: "On-Time Delivery" },
          { value: "4 min", label: "Boss-Cabin Coffee, Buzz to Delivery" },
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Look at Accept Time First",
        body: "If total times are long, check accept time before anything else. A slow pickup usually means notifications are not reaching people. Install the mobile app and, on Pro, add Telegram or WhatsApp.",
      },
      {
        type: "checklist",
        heading: "Using Timers Well",
        items: [
          "Set realistic deadlines per category: a lunch for 12 is not a cup of tea",
          "Ask staff to tap Start so the start-to-delivery gap is accurate",
          "Watch the countdown on the dashboard during busy hours",
          "Review weekly averages, not single slow requests",
        ],
      },
      {
        "type": "comparison",
        "heading": "Without Timers Versus With Timers",
        "columns": [
          "No Timers",
          "ZapBuzzer Timers"
        ],
        "rows": [
          {
            "label": "How Long Things Take",
            "a": "Anyone’s guess",
            "b": "Recorded on every request"
          },
          {
            "label": "Late Jobs",
            "a": "Discovered when someone complains",
            "b": "Flagged as the deadline nears"
          },
          {
            "label": "Staff Performance",
            "a": "Based on impressions",
            "b": "Based on accept and delivery times"
          },
          {
            "label": "Planning Staff",
            "a": "Guesswork",
            "b": "Volume and timing by hour of day"
          }
        ]
      },
      {
        "type": "callout",
        "tone": "info",
        "title": "Timers on Free and Pro",
        "body": "Every request is timed on every plan. SLA deadlines with an escalation chain, plus the full analytics and scorecards built from those timings, are part of Pro."
      },
    ],
    faqs: [
      { q: "Do Timers Put Pressure on Staff?", a: "Timers make good work visible as much as they flag delays. Fast, on-time deliveries show up on staff scorecards, which is how ZapBuzzer gives staff fair credit instead of just nagging them." },
      { q: "When Does a Request Timer Start?", a: "The moment the requester taps Buzz. Every stage after that (accept, start, deliver, rate) is time-stamped." },
      { q: "Does the Request Timer Stop When Staff Accept?", a: "No. Accepting is recorded, but the clock runs until delivery, because that is what the requester experiences." },
      { q: "Is Every Request Timed on the Free Plan Too?", a: "Yes, every request is timed on every plan. The SLA escalation chain and full analytics and scorecards are part of Pro." },
      { q: "Can a Coffee and a Team Lunch Have Different Timer Deadlines?", a: "Deadlines work best when they suit the kind of request, because a coffee and a team lunch are very different jobs. Set them to match what is realistic for each category." },
      { q: "Which Timestamps Does a Request Timer Record?", a: "Buzzed, accepted, started and delivered, plus the rating. Together they show accept time, work time and the total time from tap to doorstep." },
      { q: "What Does the Countdown Ring Show Staff?", a: "How much time is left before the request’s deadline, so staff can see at a glance which jobs need attention first." },
      { q: "Which Timer Metric Should We Look at First?", a: "Accept time. It shows how quickly someone takes ownership, and in pilot offices it averaged 32 seconds in the first month." },
    ],
    related: ["features", "features/eta-tracking", "sla/timers", "sla", "analytics/response-time", "workflows/ac-issue", "pricing/pro"],
    cta: { title: "Find Out How Long Things Really Take", body: "Run ZapBuzzer free for 14 days and see your office’s real accept and delivery times." },
  },

  // ───────────────────────────── ETA TRACKING
  {
    path: "features/eta-tracking",
    title: "ETA Tracking for Office Requests",
    description:
      "When staff start a request they share an ETA, so requesters know when coffee, prints or an IT fix will arrive and can plan meetings around it, no calls.",
    h1: "Know When It Will Arrive, Not Just That It Is Coming",
    eyebrow: "Feature · ETA Tracking",
    lead:
      "“Someone’s on it” is good. “Raj will be there in four minutes” is better. When staff start a request in ZapBuzzer they give an ETA, and the requester sees it immediately.",
    keywords: [
      "ETA tracking office requests",
      "estimated arrival office service",
      "request ETA",
      "delivery ETA staff",
      "office service arrival time",
    ],
    heroVisual: "request-timeline",
    sections: [
      {
        type: "prose",
        eyebrow: "Why ETA",
        heading: "Planning Needs a Time, Not a Promise",
        paragraphs: [
          "Most office requests are tied to something else: a client arriving at 11, a pitch in 10 minutes, a board call that has just started. Knowing that someone accepted is reassuring, but it does not tell you whether to stall the meeting or carry on.",
          "In ZapBuzzer, the owner marks a request as started and gives an ETA. The requester sees it on their screen next to the owner’s name and photo. Kavya can decide to begin her pitch with the slides on screen while the prints arrive; Aarav knows the coffee will land before the second agenda item.",
          "The ETA comes between acceptance and delivery, so you know roughly when to expect it instead of just waiting.",
        ],
      },
      {
        type: "visual",
        visual: "request-timeline",
        heading: "ETA in the Request Timeline",
        body: "Accepted → Started with ETA → Delivered. The ETA appears the moment the owner starts work.",
        points: [
          "Owner name and photo",
          "ETA shown as soon as work starts",
          "Delivery and rating prompt at the end",
        ],
      },
      {
        type: "scenario",
        heading: "Deck Copies With a Deadline",
        persona: "Kavya, Sales Lead",
        setting: "Client arriving in 10 minutes; 24 colour copies needed in Conference Room A.",
        timeline: [
          { time: "10:50", event: "Kavya uploads the PDF and buzzes the print room." },
          { time: "10:51", event: "Ramesh accepts." },
          { time: "10:52", event: "Ramesh starts the job with a 6-minute ETA." },
          { time: "10:52", event: "Kavya sees “ETA 6 min” and decides not to delay the meeting." },
          { time: "10:57", event: "Prints delivered, a minute early." },
        ],
        outcome: "Kavya made a decision based on a real arrival time instead of calling the print room to ask.",
      },
      {
        type: "comparison",
        heading: "Asking Versus Seeing",
        columns: ["Without ETA", "With ZapBuzzer ETA"],
        rows: [
          { label: "Requester’s Question", a: "“How long will it be?”", b: "Already answered on screen" },
          { label: "Staff Interruption", a: "Phone call mid-task", b: "None" },
          { label: "Meeting Planning", a: "Guesswork", b: "Based on a stated time" },
          { label: "Accountability", a: "No commitment recorded", b: "ETA and delivery both time-stamped" },
        ],
      },
      {
        type: "features",
        heading: "ETA Details",
        items: [
          { title: "Given by the Owner", body: "The person doing the job sets the ETA, so it reflects reality on the floor." },
          { title: "Visible Instantly", body: "Requesters see it the moment work starts." },
          { title: "Paired With Deadline", body: "The ETA is the staff member’s estimate. The SLA deadline is the time limit the office has set for that kind of request." },
          { title: "Works on Mobile", body: "Staff start requests and set ETAs from the app while walking." },
        ],
      },
      {
        type: "audience",
        heading: "Who Relies on ETAs",
        items: [
          { role: "Sales Teams", benefit: "Time prints and refreshments around client arrivals." },
          { role: "Leaders", benefit: "Know whether to wait or move on in a meeting." },
          { role: "Reception", benefit: "Tell a courier or guest exactly when someone will come." },
          { role: "Staff", benefit: "Set expectations once instead of answering calls." },
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Honest ETAs Build Trust",
        body: "Encourage staff to give a realistic ETA rather than an optimistic one. Requesters forgive a 6-minute wait that arrives in 6 minutes far more than a 2-minute promise that takes 6.",
      },
      {
        "type": "checklist",
        "heading": "Setting ETAs People Can Trust",
        "intro": "An ETA is a small promise. These habits keep it believable.",
        "items": [
          "Give the ETA when you start the job, so it reflects real work rather than a guess at accept time.",
          "Round honestly: “8 minutes” for a coffee two floors up beats an optimistic “2”.",
          "For print jobs, count the copies: 24 colour copies takes longer than a single page.",
          "If something blocks you, such as a jammed printer, say so on the request rather than staying silent.",
          "Check your ETA against the SLA deadline; if it will not fit, flag it early."
        ]
      },
      {
        "type": "prose",
        "heading": "ETAs and the SLA Are Different Clocks",
        "paragraphs": [
          "The SLA deadline is the office’s promise for a category: facilities sorts an AC complaint within 15 minutes, say. The ETA is the staff member’s estimate for this particular job. Most of the time the ETA sits comfortably inside the deadline.",
          "When it does not, that is useful information. An ETA past the deadline tells the requester to plan around a delay, and tells the manager that the job may need help before the timer escalates it."
        ]
      },
    ],
    faqs: [
      { q: "Who Sets the ETA?", a: "The staff member who owns the request gives it when they start work. The requester sees it next to the owner’s name and photo." },
      { q: "Does a Missed ETA Trigger Escalation?", a: "Escalation is driven by the SLA deadline, not the ETA. A missed ETA is visible on the request, but auto-escalation to a manager happens when the deadline is crossed." },
      { q: "Is ETA the Same as the SLA Deadline?", a: "No. The deadline is the office’s commitment for that kind of request. The ETA is the owner’s estimate for this particular job, which should normally land inside the deadline." },
      { q: "Can Requesters See ETAs on the Web App?", a: "Yes. ETAs appear on both the web app and the mobile app, since your workspace lives on the server." },
      { q: "What If the ETA Passes and Nothing Has Arrived?", a: "The request is still tracked against its deadline. If it goes overdue, it auto-escalates to a manager, on Pro through the escalation chain." },
      { q: "When Does an ETA Appear on My Request?", a: "Once the owner marks the request as started. Before that you see who accepted it; after, you see their estimate alongside their name and photo." },
      { q: "Why Is Seeing an ETA Better Than Asking When Something Will Arrive?", a: "An ETA lets you plan, such as starting a meeting knowing the prints are minutes away, without calling the print room or walking over to ask." },
      { q: "How Does an ETA Help When Prints Are Needed Before a Pitch?", a: "When Kavya sends 24 colour copies ahead of a demo, the ETA tells her when they’ll arrive, so she can prepare her pitch instead of chasing the print room." },
    ],
    related: ["features", "features/request-timers", "features/request-tracking", "mobile-app/delivery-tracking", "solutions/print-room/request-tracking", "use-cases/sales", "free-trial"],
    cta: { title: "Give Every Request an Arrival Time", body: "Try ZapBuzzer free with no card required, and be live within one afternoon." },
  },

  // ───────────────────────────── REQUEST STATUS
  {
    path: "features/request-status",
    title: "Request Status Lifecycle Explained",
    description:
      "Requested, accepted, started, delivered, rated: what each ZapBuzzer request status means, who changes it, and how statuses drive escalation and reporting.",
    h1: "Five Statuses That Tell the Whole Story",
    eyebrow: "Feature · Request Status",
    lead:
      "Every ZapBuzzer request is always in exactly one status. That status tells the requester what to expect, tells staff what to do next and tells managers where things are stuck.",
    keywords: [
      "request status lifecycle",
      "office request statuses",
      "request workflow states",
      "accepted started delivered",
      "service request status",
    ],
    heroVisual: "request-timeline",
    sections: [
      {
        type: "prose",
        eyebrow: "Shared Language",
        heading: "Why a Fixed Set of Statuses Helps",
        paragraphs: [
          "When requests live in chats, status is whatever someone last typed: “ok”, “on it”, “coming”, a thumbs-up. Nobody can tell if “ok” means accepted, done or merely read.",
          "ZapBuzzer uses a small, fixed lifecycle. Each status has one meaning and is set by a specific action. That shared language is what lets the requester stop worrying, lets the team avoid double work and lets the system know when to escalate.",
        ],
      },
      {
        type: "glossary",
        heading: "The Statuses",
        terms: [
          { term: "Requested (Buzzed)", definition: "The employee has tapped Buzz. The team has been notified and pings repeat until someone accepts." },
          { term: "Accepted", definition: "A team member tapped Accept and owns the request. The requester sees their name and photo." },
          { term: "Started", definition: "The owner has begun the work and given an ETA." },
          { term: "Delivered", definition: "The owner has completed it, optionally attaching a photo." },
          { term: "Rated", definition: "The requester has given 1–5 stars, closing the request." },
          { term: "Overdue", definition: "Not a step but a condition: the request has passed its deadline and escalates to a manager." },
        ],
      },
      {
        type: "visual",
        visual: "request-timeline",
        heading: "Statuses on the Timeline",
        body: "Each status change is a time-stamped point on the request’s timeline.",
        points: ["Requested", "Accepted", "Started with ETA", "Delivered with optional photo", "Rated 1–5★"],
      },
      {
        type: "table",
        heading: "Who Moves a Request Between Statuses",
        headers: ["From", "To", "Action", "Who"],
        rows: [
          ["—", "Requested", "Tap Buzz", "Employee"],
          ["Requested", "Accepted", "Tap Accept", "First free staff member"],
          ["Accepted", "Started", "Start with ETA", "Owner"],
          ["Started", "Delivered", "Mark delivered (+ photo)", "Owner"],
          ["Delivered", "Rated", "Give stars", "Requester"],
        ],
      },
      {
        type: "scenario",
        heading: "Lunch for Twelve, Status by Status",
        persona: "Vivek, Operations",
        setting: "Team lunch for 12 during a quarterly review.",
        timeline: [
          { time: "12:10", event: "Requested: Vivek buzzes lunch items with a note." },
          { time: "12:11", event: "Accepted: Meena from the pantry takes it." },
          { time: "12:15", event: "Started: ETA 45 minutes." },
          { time: "12:58", event: "Delivered: with a photo of the set-up table." },
          { time: "13:30", event: "Rated: 5★." },
        ],
        outcome: "At any point Vivek and the owner could see exactly where lunch was without a single message.",
      },
      {
        type: "features",
        heading: "What Statuses Drive",
        items: [
          { title: "Requester View", body: "What they see changes with each status: waiting, owner, ETA, rate." },
          { title: "Staff Queues", body: "Requested items sit in the open queue; accepted ones move to the owner’s list." },
          { title: "Escalation", body: "Requests that pass their deadline before delivery escalate automatically." },
          { title: "Analytics", body: "Time between statuses becomes accept time and delivery time." },
          { title: "Audit Log", body: "Every status change is logged with who made it." },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Rating Closes the Loop",
        body: "A request is not fully finished until it is rated. Ratings feed staff scorecards, so encourage employees to tap the stars when the delivery prompt appears.",
      },
      {
        "type": "glossary",
        "heading": "Status Words, Defined",
        "terms": [
          {
            "term": "Buzzed",
            "definition": "The request has been raised and sent to the right team. Nobody owns it yet, and notifications keep repeating."
          },
          {
            "term": "Accepted",
            "definition": "One staff member tapped Accept and now owns it. The requester sees their name and photo."
          },
          {
            "term": "Started",
            "definition": "Work is under way, with an ETA the requester can plan around."
          },
          {
            "term": "Delivered",
            "definition": "The job is done, optionally with a photo as proof."
          },
          {
            "term": "Rated",
            "definition": "The requester has given 1 to 5 stars, closing the loop."
          }
        ]
      },
      {
        "type": "metrics",
        "heading": "What the Gaps Between Statuses Tell You",
        "intro": "Each status has a timestamp, so the time between two of them shows where a request slowed down.",
        "items": [
          {
            "metric": "Buzzed to Accepted",
            "meaning": "How quickly someone takes ownership. Long gaps mean the team is short-handed or pings are being missed."
          },
          {
            "metric": "Accepted to Started",
            "meaning": "Time a job waits after being claimed. A long gap can mean staff accept before they are actually free."
          },
          {
            "metric": "Started to Delivered",
            "meaning": "The actual work. Compare it by category to see which jobs are genuinely slow."
          },
          {
            "metric": "Delivered to Rated",
            "meaning": "How engaged requesters are. Unrated deliveries make the scorecard thinner."
          }
        ]
      },
    ],
    faqs: [
      { q: "Can a Request Skip a Status?", a: "Requests follow the same order every time, which is what makes the timestamps comparable. A quick job may move from accepted to delivered within moments, but each step is still recorded." },
      { q: "What Happens to Status If a Request Goes Overdue?", a: "The status stays where it is, but the SLA timer (the clock counting down to its deadline) marks it overdue and it auto-escalates to a manager (with a full escalation chain on Pro). The record shows both the status and the escalation." },
      { q: "Is Overdue a Status?", a: "Overdue is a condition on top of the current status. A request can be accepted or started and still be overdue, which is what triggers escalation." },
      { q: "Who Can See Status Changes?", a: "The requester sees their own requests, staff see their team’s and managers see those their role allows. Every change is recorded in the audit log." },
      { q: "What If a Requester Never Rates?", a: "The request is still delivered and counted. Ratings simply add quality data to the scorecard, so they are worth encouraging." },
      { q: "What Are the Request Statuses in ZapBuzzer?", a: "Buzzed, Accepted, Started (with an ETA), Delivered (optionally with a photo) and Rated (1–5★). Every request follows the same lifecycle and every step is timed." },
      { q: "Who Moves a Request From One Status to the Next?", a: "The requester buzzes and later rates it; the staff member who accepts it marks it started and delivered. Each change is a single tap." },
      { q: "Why Use a Fixed Set of Request Statuses?", a: "Everyone reads the same words the same way, so “started” means someone is actually working on it. Fixed statuses also make timings comparable across teams." },
    ],
    related: ["features", "features/request-tracking", "features/delivery-confirmation", "admin/audit-logs", "resources/glossary", "workflows", "pricing"],
    cta: { title: "Give Your Office One Language for Requests", body: "Start free and see the lifecycle in action on your first request." },
  },

  // ───────────────────────────── DELIVERY CONFIRMATION
  {
    path: "features/delivery-confirmation",
    title: "Delivery Confirmation With Photo Proof",
    description:
      "Staff mark requests delivered and can attach a photo; requesters confirm with a rating. ZapBuzzer gives every coffee, print and courier job a clear finish.",
    h1: "Done Means Delivered, And Everyone Can See It",
    eyebrow: "Feature · Delivery Confirmation",
    lead:
      "A request is only finished when the requester has what they asked for. ZapBuzzer closes each request with a delivery step: the owner marks it delivered, can attach a photo, and the requester is prompted to rate it.",
    keywords: [
      "delivery confirmation office",
      "proof of delivery photo",
      "request completion",
      "mark delivered app",
      "office delivery proof",
    ],
    heroVisual: "delivery",
    sections: [
      {
        type: "prose",
        eyebrow: "Closing the Loop",
        heading: "Why “Done” Needs Proof",
        paragraphs: [
          "Without confirmation, requests fade out instead of ending. The print job was probably delivered. The parcel was likely collected. The projector might be working. When something goes wrong later, nobody can say what actually happened.",
          "In ZapBuzzer, delivery is an explicit step. The owner taps Delivered when the job is complete and can attach a photo: the prints on the table, the parcel at reception, the meeting room set up. The requester sees it and gets a rating prompt. The timer stops and the request is recorded as on time or late.",
        ],
      },
      {
        type: "visual",
        visual: "delivery",
        heading: "The Delivery Moment",
        body: "The requester sees a delivered card with the owner, the time and any photo, followed by a 1–5★ rating prompt.",
        points: ["Delivered by name and photo", "Optional photo of the result", "Total time from buzz", "Tap to rate"],
      },
      {
        type: "table",
        heading: "When a Delivery Photo Helps",
        headers: ["Request", "Useful Photo"],
        rows: [
          ["Print job", "Stack of copies left in the room"],
          ["Courier pickup", "Parcel handed over or logged at the mailroom"],
          ["Meeting-room setup", "Room ready with water and snacks"],
          ["Facilities fix", "AC panel showing the corrected temperature"],
          ["Team lunch", "Table set up before people arrive"],
        ],
      },
      {
        type: "scenario",
        heading: "Prints Left in an Empty Room",
        persona: "Kavya, Sales Lead",
        setting: "Kavya is greeting the client in the lobby while her prints are delivered.",
        timeline: [
          { time: "10:57", event: "Ramesh leaves 24 colour copies in Conference Room A and marks delivered with a photo." },
          { time: "10:57", event: "Kavya’s phone shows the delivery photo while she is still in the lobby." },
          { time: "11:00", event: "She walks the client in, knowing the decks are on the table." },
          { time: "12:15", event: "After the meeting, she rates the delivery 5★." },
        ],
        outcome: "Kavya did not need to check the room first. The photo was enough.",
      },
      {
        type: "features",
        heading: "What Confirmation Gives You",
        items: [
          { title: "Clear Finish", body: "Every request ends with a recorded delivery, not a guess." },
          { title: "Photo Proof", body: "Optional photos show what was delivered and where." },
          { title: "Accurate Timing", body: "Delivery stops the clock, so on-time rates are real." },
          { title: "Rating Prompt", body: "Requesters are asked to rate at the right moment." },
          { title: "Audit Trail", body: "Deliveries are logged, useful for courier and mailroom work." },
        ],
      },
      {
        type: "problem-solution",
        heading: "Fading Out Versus Finishing",
        problem: {
          title: "No Confirmation",
          points: ["“I left it somewhere”", "Disputes about whether it happened", "On-time rates are guesswork"],
        },
        solution: {
          title: "ZapBuzzer Delivery",
          points: ["Delivered with time and optional photo", "Requester confirms by rating", "96% on-time in pilot offices, measured not estimated"],
        },
      },
      {
        type: "checklist",
        heading: "Good Delivery Habits for Staff",
        items: [
          "Mark delivered only when the item is in the requester’s hands or place",
          "Add a photo when the requester is not present",
          "Deliver to the destination on the request, not the requester’s usual desk",
          "Check the note before leaving: “less sugar” matters",
        ],
      },
      {
        "type": "table",
        "heading": "When to Attach a Photo, by Job Type",
        "intro": "Not every delivery needs a photo. A rough guide many offices use:",
        "headers": [
          "Job",
          "Photo Useful?",
          "Why"
        ],
        "rows": [
          [
            "Coffee to a cabin",
            "Rarely",
            "The requester is usually there to receive it"
          ],
          [
            "Prints left in an empty meeting room",
            "Yes",
            "Shows exactly where the stack was left"
          ],
          [
            "Courier handed over at the gate",
            "Yes",
            "Adds to the audit trail for the pickup"
          ],
          [
            "AC reset in Conference Room B",
            "Often",
            "A photo of the thermostat settles “is it fixed?”"
          ],
          [
            "HDMI cable delivered",
            "Sometimes",
            "Helpful if the room was empty"
          ]
        ]
      },
      {
        "type": "scenario",
        "heading": "The Courier That Was “Never Collected”",
        "persona": "Neha, Reception",
        "setting": "A client says a signed contract never reached them.",
        "timeline": [
          {
            "time": "11:05",
            "event": "Neha raises a Courier Pickup request; the mailroom is pinged."
          },
          {
            "time": "11:07",
            "event": "Suresh in the mailroom accepts and starts."
          },
          {
            "time": "11:20",
            "event": "Suresh marks it delivered with a photo of the handover at the gate."
          },
          {
            "time": "Next day",
            "event": "The client query comes in; Neha opens the request and finds the photo and timestamps in seconds."
          }
        ],
        "outcome": "The conversation moves from “did we even send it?” to “where is it in transit?”, and the office has its record straight."
      },
    ],
    faqs: [
      { q: "Is a Delivery Photo Required?", a: "A photo can be attached on delivery but is optional. Offices typically ask for one on jobs where the requester is not present to receive the item, such as prints left in a meeting room or a parcel at the mailroom." },
      { q: "What Does the Requester See on Delivery?", a: "They see the request marked delivered, any photo attached, and a prompt to rate the job from one to five stars." },
      { q: "What Happens After a Request Is Marked Delivered?", a: "The timer stops, the requester is prompted to rate 1–5★ and the request flows into analytics and the owner’s scorecard." },
      { q: "Can Delivery Confirmation Help With Courier Audits?", a: "Yes. Courier pickups are logged and every action is audit-logged. Audit logs and reports are part of Pro." },
      { q: "Can Staff Mark Delivered From Their Phone?", a: "Yes. Staff accept, start and deliver requests on the move with the mobile app, including attaching a photo." },
      { q: "Why Mark a Request Delivered Rather Than Just Leaving It?", a: "Without a delivered step, requests fade out and nobody knows if they finished. Marking delivered stops the timer, tells the requester and counts towards on-time delivery." },
      { q: "What If Prints Are Left in an Empty Meeting Room?", a: "Staff mark the request delivered and attach a photo of the prints in the room, so the requester knows exactly where to find them." },
      { q: "What Delivery Habits Should Staff Follow?", a: "Mark delivered at the moment of hand-over, add a photo when the requester isn’t there, and note anything unusual. That keeps timings accurate and ratings fair." },
    ],
    related: ["features", "features/request-ratings", "features/request-status", "mobile-app/delivery-tracking", "solutions/courier/tracking", "workflows/print-request", "free-trial"],
    cta: { title: "Make Every Request End Properly", body: "Try ZapBuzzer free for 14 days and see delivery confirmation on your first job." },
  },

  // ───────────────────────────── REQUEST RATINGS
  {
    path: "features/request-ratings",
    title: "Request Ratings and Staff Feedback",
    description:
      "After each delivery the requester rates it 1–5 stars. Ratings feed fair staff scorecards so pantry, print, IT and facilities teams get credit for good work.",
    h1: "Five Stars, Credited to the Person Who Earned Them",
    eyebrow: "Feature · Request Ratings",
    lead:
      "Office staff rarely hear when they do a great job. They mostly hear when something goes wrong. ZapBuzzer asks every requester to rate each delivery from 1 to 5 stars and credits it to the person who did the work.",
    keywords: [
      "request ratings",
      "office staff feedback",
      "rate service delivery",
      "staff scorecard ratings",
      "pantry staff rating",
    ],
    heroVisual: "scorecard",
    sections: [
      {
        type: "prose",
        eyebrow: "People-First",
        heading: "Feedback for the People Who Keep the Office Running",
        paragraphs: [
          "ZapBuzzer is built on a people-first principle: rather than being nagged by yet another tool, staff receive scorecards and fair credit for their work. Ratings are the main way that happens.",
          "When a request is delivered, the requester gets a simple prompt: rate it 1 to 5 stars. Because every request has a single owner from the moment of acceptance, that rating lands with the right person, not with “the pantry” in general.",
          "Over time, ratings build into a picture. Who gets consistent 5★? Which categories draw lower scores? Pilot offices averaged 4.8★ across staff in their first month.",
        ],
      },
      {
        type: "visual",
        visual: "scorecard",
        heading: "Ratings on the Scorecard",
        body: "Each staff member’s scorecard combines average rating with accept time and on-time delivery.",
        points: ["Average stars across delivered requests", "On-time percentage", "Accept speed", "Volume handled"],
      },
      {
        type: "scenario",
        heading: "A Week in the Pantry",
        persona: "Raj, Pantry Team",
        setting: "Raj handles most third-floor coffee and lunch requests.",
        timeline: [
          { time: "Mon", event: "Accepts the CEO’s boss-cabin coffee in 12s; rated 5★." },
          { time: "Wed", event: "Delivers lunch for 12 on time; rated 5★." },
          { time: "Thu", event: "A tea order arrives cold during a rush; rated 3★." },
          { time: "Fri", event: "Scorecard shows a strong average, high volume and one dip on Thursday afternoon." },
        ],
        outcome: "Raj’s manager sees real evidence of his work, and that Thursday afternoons need a second person in the pantry.",
      },
      {
        type: "features",
        heading: "How Ratings Are Used",
        items: [
          { title: "Credit", body: "Ratings attach to the owner, so good work is visible." },
          { title: "Coaching", body: "Patterns of low ratings point to real problems: cold tea, wrong destination." },
          { title: "Staffing", body: "Ratings dipping at busy times suggest a team needs more hands." },
          { title: "Analytics", body: "Rating analytics roll up by person, team and category on Pro." },
        ],
      },
      {
        type: "metrics",
        heading: "Rating Metrics Worth Watching",
        items: [
          { metric: "Average Rating", meaning: "Overall satisfaction for a person or team." },
          { metric: "Rating by Category", meaning: "Whether, say, prints score lower than coffee." },
          { metric: "Rating by Time of Day", meaning: "Whether quality drops when the office buzzes most." },
          { metric: "Rating Response Rate", meaning: "How many requesters actually rate. Low rates make averages less reliable." },
        ],
      },
      {
        type: "stats",
        items: [
          { value: "4.8★", label: "Average Staff Rating in Pilot Offices" },
          { value: "96%", label: "On-Time Delivery" },
        ],
      },
      {
        type: "callout",
        tone: "warning",
        title: "Ratings Are Not a Stick",
        body: "Use ratings to recognise and to fix systems, not to punish individuals for one bad day. A 3★ during a lunch rush usually says more about staffing than effort.",
      },
      {
        "type": "comparison",
        "heading": "Hallway Feedback Versus a Star Rating",
        "intro": "Offices already give feedback to support staff. It is just scattered, late and mostly negative.",
        "columns": [
          "Hallway Feedback",
          "ZapBuzzer Rating"
        ],
        "rows": [
          {
            "label": "When It Arrives",
            "a": "Days later, if ever",
            "b": "Right after delivery, while it is fresh"
          },
          {
            "label": "Who Hears It",
            "a": "Whoever the complainer bumps into",
            "b": "The person who did the job, and their manager"
          },
          {
            "label": "Balance",
            "a": "Mostly complaints; good work goes unmentioned",
            "b": "Every delivery can be rated, so good days count"
          },
          {
            "label": "Tied to a Job",
            "a": "“The coffee is always late”",
            "b": "One request, one owner, one score"
          },
          {
            "label": "Usable Later",
            "a": "Lost in conversation",
            "b": "Rolls up into the scorecard"
          }
        ]
      },
      {
        "type": "checklist",
        "heading": "Making Ratings Fair",
        "intro": "Ratings only help if staff trust them. A few habits keep them honest.",
        "items": [
          "Look at averages over weeks, not a single one-star rating on a busy Monday.",
          "Read the rating next to the timer: a late delivery caused by a stuck lift is not the runner’s fault.",
          "Encourage requesters to rate good work too, not only when something goes wrong.",
          "Share scorecards with staff themselves, so nobody learns their score in a review meeting.",
          "Use top ratings for recognition first and coaching second."
        ]
      },
    ],
    faqs: [
      { q: "Do Requesters Have to Rate Every Request?", a: "Rating is offered after delivery, and the more requests get rated the more useful the averages become. Many offices simply ask people to tap a star when their coffee or prints arrive, which takes a second." },
      { q: "Can a Low Rating Hurt a Staff Member Unfairly?", a: "A single rating rarely tells the full story, which is why ratings sit beside accept time and on-time delivery on the scorecard. Managers should look at patterns and the request details before drawing conclusions." },
      { q: "Who Can Rate a Request?", a: "The requester rates their own request after it is delivered, on a 1–5 star scale." },
      { q: "Do Staff See Their Ratings?", a: "Scorecards exist to give staff fair credit for their work. What each person sees is controlled by roles and permissions." },
      { q: "Are Rating-Based Staff Scorecards on the Free Plan?", a: "Ratings are collected on every request. Full analytics and staff scorecards are part of Pro at ₹99 per seat per month." },
      { q: "Can Ratings Be Anonymous?", a: "Ratings are tied to the request so they can be credited to the right owner. Treat them as service feedback rather than personal reviews." },
      { q: "What Can Ratings Tell an Office Manager?", a: "Patterns: which teams and items consistently earn 5★ and where quality dips. In pilot offices, staff averaged a 4.8★ rating in the first month." },
      { q: "How Should Managers Talk to Staff About Their Ratings?", a: "As recognition and coaching, not as a stick. Celebrate consistent 5★ work and talk through patterns of low ratings with the request details in front of you." },
    ],
    related: ["features", "features/delivery-confirmation", "analytics/ratings", "analytics/staff", "use-cases/staff-accountability", "mobile-app/ratings", "pricing/pro"],
    cta: { title: "Let Your Staff’s Good Work Show", body: "Turn on ratings and scorecards with a 14-day Pro trial." },
  },

  // ───────────────────────────── REQUEST HISTORY
  {
    path: "features/request-history",
    title: "Searchable Office Request History",
    description:
      "Look back at who asked for what, who handled it and how long it took. ZapBuzzer keeps request history: 30 days on Free, full history and reports on Pro.",
    h1: "A Record of Everything Your Office Asked For",
    eyebrow: "Feature · Request History",
    lead:
      "Every ZapBuzzer request leaves a record: who buzzed it, what for, where, who accepted, when it was delivered and how it was rated. Request history turns that into a log you can look back on.",
    keywords: [
      "office request history",
      "request log",
      "past office requests",
      "request records",
      "office service history",
    ],
    heroVisual: "audit-log",
    sections: [
      {
        type: "prose",
        eyebrow: "Memory",
        heading: "Offices Forget. Records Do Not.",
        paragraphs: [
          "Requests in chats and phone calls leave no usable trail. Was the projector in Conference Room B fixed last week too? Did the courier from Tuesday actually get picked up? How many prints did Sales run before the quarterly review?",
          "ZapBuzzer’s request history answers those questions because every request is stored with its full timeline. History is per person for employees, per team for staff and office-wide for admins and owners, depending on role.",
        ],
      },
      {
        type: "visual",
        visual: "audit-log",
        heading: "The Record Behind Every Request",
        body: "Each history entry carries the request and its time-stamped actions, and every action is audit-logged.",
        points: ["Requester, category, note and destination", "Owner and timestamps", "Delivery photo if attached", "Rating"],
      },
      {
        type: "table",
        heading: "History by Plan",
        headers: ["Plan", "History Kept", "Extras"],
        rows: [
          ["Free", "Last 30 days", "Email notifications, 1 location, up to 10 staff"],
          ["Pro", "Full history", "Audit logs + reports, full analytics"],
          ["Enterprise", "Full history", "REST API + webhooks, on-prem option, talk to us"],
        ],
      },
      {
        type: "scenario",
        heading: "The Recurring Projector",
        persona: "Deepak, Admin Head",
        setting: "The Conference Room B projector keeps failing before meetings.",
        timeline: [
          { time: "Day 1", event: "Deepak opens request history and filters for Conference Room B." },
          { time: "Day 1", event: "He finds several projector requests over recent weeks, each fixed temporarily." },
          { time: "Day 2", event: "He uses the record to justify replacing the unit." },
        ],
        outcome: "Without history, each failure looked like a one-off. With it, the pattern was obvious.",
      },
      {
        type: "features",
        heading: "What History Is Used For",
        items: [
          { title: "Resolving Disputes", body: "See exactly when something was accepted and delivered." },
          { title: "Spotting Repeats", body: "Recurring issues in one room or category become visible." },
          { title: "Courier Audit", body: "Pickups and deliveries are audit-trailed." },
          { title: "Spend Review", body: "Owners can look back at the cost of requests like lunch orders." },
          { title: "Reporting", body: "History feeds reports and analytics on Pro." },
        ],
      },
      {
        type: "audience",
        heading: "Who Uses History",
        items: [
          { role: "Employees", benefit: "Repeat or check past requests." },
          { role: "Facilities and IT Leads", benefit: "Find recurring faults by room or equipment." },
          { role: "Reception and Mailroom", benefit: "Prove a courier was handled." },
          { role: "Owners", benefit: "Review spend and service quality over time." },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Need Data Outside ZapBuzzer?",
        body: "Enterprise includes a REST API and webhooks for organisations that want request data in their own systems. Talk to us for details.",
      },
      {
        "type": "checklist",
        "heading": "Questions History Settles in Under a Minute",
        "intro": "Most disputes about office requests are really disputes about memory. A searchable record turns them into lookups.",
        "items": [
          "Did the colour print job for the client deck actually go out on Tuesday, and who delivered it?",
          "How many times has the Conference Room B projector been reported this month?",
          "Was the courier pickup Neha raised logged before or after 6 p.m.?",
          "Which pantry orders for the boss cabin were rated below four stars, and what did the note say?",
          "When a new admin joins, what does a normal week of requests look like for their floor?",
          "Who escalated the AC complaint, and how long did it sit before a manager saw it?"
        ]
      },
      {
        "type": "callout",
        "tone": "warning",
        "title": "Thirty Days Goes Faster Than You Think",
        "body": "On the Free plan, history covers the last 30 days. That is enough to settle this week’s arguments, but not to spot a projector that fails every quarter or compare December’s pantry load with March. If you plan to review trends or keep a longer trail, Pro adds audit logs and reports on top of the request record."
      },
      {
        "type": "prose",
        "heading": "History as Onboarding Material",
        "paragraphs": [
          "A quieter use of history is teaching. When a new pantry staffer or office assistant starts, scrolling through last week’s requests shows them the real rhythm of the floor: the 9 a.m. coffee wave, the post-lunch print rush, which cabins order the same thing every day and which notes they leave.",
          "It also shows good examples. A delivery with a photo and a five-star rating is a model of what “done” looks like; a request that sat accepted but not started for twenty minutes is an honest example of what to avoid."
        ]
      },
    ],
    faqs: [
      { q: "Can Staff See Their Own Past Requests?", a: "Requesters see the requests they raised, and staff see the work they accepted and delivered. Admins and owners see the wider record according to their role. What each person can view follows the role permissions you set." },
      { q: "Is History the Same as the Audit Log?", a: "Not quite. History is the record of requests: what was asked, by whom, who owned it, the timestamps and the rating. The audit log, on Pro, records every action taken in the workspace so you can see who did what." },
      { q: "How Many Days of Request History Does Each Plan Keep?", a: "Free keeps the last 30 days. Pro keeps full history along with audit logs and reports." },
      { q: "Can Employees See Other People’s Requests?", a: "Visibility follows roles and permissions. Employees typically see their own requests, while admins and owners see office-wide history." },
      { q: "Can We Export History?", a: "Reports are part of Pro. For pulling data into your own systems, Enterprise offers a REST API and webhooks, contact us for specifics." },
      { q: "What Is Recorded in Each Request’s History?", a: "What was asked and where, who requested and who owned it, every timestamp from buzz to delivery, any delivery photo and the rating." },
      { q: "How Can History Help With a Recurring Problem?", a: "Look back at the same item and room over time. A projector that fails every week shows up clearly, which makes the case for a repair or replacement." },
      { q: "Can History Settle a Question About a Courier Pickup?", a: "Yes. Courier pickups are logged with who handled them and when, and on Pro every action is also in the audit log." },
    ],
    related: ["features", "features/request-reports", "admin/audit-logs", "solutions/courier/tracking", "use-cases/prevent-lost-requests", "pricing/free", "pricing/pro"],
    cta: { title: "Stop Relying on Memory", body: "Start free with 30 days of history, or try Pro’s full history free for 14 days." },
  },

  // ───────────────────────────── REQUEST REPORTS
  {
    path: "features/request-reports",
    title: "Office Request Reports and Insights",
    description:
      "Reports on request volume, accept times, on-time delivery, ratings and spend. See who is fastest, what the office asks for and when it buzzes most. Pro plan.",
    h1: "Reports That Answer the Questions Your Office Keeps Asking",
    eyebrow: "Feature · Request Reports",
    lead:
      "Reports turn thousands of small requests into answers. Which team is fastest? How often do we miss deadlines? When does the office buzz most? What did lunches cost this month? Reports and full analytics are part of ZapBuzzer Pro.",
    keywords: [
      "office request reports",
      "office service analytics",
      "request volume report",
      "staff performance report",
      "facilities reporting",
    ],
    heroVisual: "analytics",
    sections: [
      {
        type: "prose",
        eyebrow: "From Records to Decisions",
        heading: "Small Requests Add Up to Big Questions",
        paragraphs: [
          "A single coffee request tells you nothing. A month of them tells you when the pantry is overloaded, whether the print room is meeting deadlines before client meetings and whether the AC in one room keeps failing.",
          "Because every ZapBuzzer request is categorised, owned, timed and rated, reports can slice by team, category, person, location and time without anyone filling in a spreadsheet.",
        ],
      },
      {
        type: "visual",
        visual: "analytics",
        heading: "The Reporting View",
        body: "KPI tiles for volume, accept time, on-time rate and rating, with charts of activity over the day and week.",
        points: ["Requests by category and team", "Average accept and delivery time", "On-time percentage", "Busy hours"],
      },
      {
        type: "metrics",
        heading: "Core Report Metrics",
        items: [
          { metric: "Request Volume", meaning: "How many requests, by category, team and location." },
          { metric: "Average Accept Time", meaning: "Responsiveness; pilot offices averaged 32s." },
          { metric: "On-Time Delivery", meaning: "Share delivered inside deadline; pilots hit 96%." },
          { metric: "Escalations", meaning: "How often requests went overdue and were escalated." },
          { metric: "Average Rating", meaning: "Quality as rated by requesters." },
          { metric: "Peak Hours", meaning: "When the office buzzes most." },
          { metric: "Spend", meaning: "Cost of requests like lunch orders, owner-only." },
        ],
      },
      {
        type: "scenario",
        heading: "The Monthly Review",
        persona: "Priya, Office Manager",
        setting: "Preparing a one-page update for the founder.",
        timeline: [
          { time: "Step 1", event: "Pulls volume by category: coffee and prints dominate." },
          { time: "Step 2", event: "Checks on-time rate by team: facilities slipped on Thursday afternoons." },
          { time: "Step 3", event: "Reviews scorecards to credit the fastest staff." },
          { time: "Step 4", event: "Owner reviews spend on team lunches." },
        ],
        outcome: "Priya walks in with facts instead of anecdotes, and a case for one more facilities person on Thursdays.",
      },
      {
        type: "audience",
        heading: "Who Reads the Reports",
        items: [
          { role: "Founders and CEOs", benefit: "See service quality and spend without asking around." },
          { role: "Office and Admin Managers", benefit: "Staff the right teams at the right hours." },
          { role: "IT and Facilities Leads", benefit: "Track deadlines and recurring issues." },
          { role: "Staff", benefit: "Scorecards that credit their work fairly." },
        ],
      },
      {
        type: "table",
        heading: "Reporting by Plan",
        headers: ["Plan", "Reporting"],
        rows: [
          ["Free", "Basic request history for the last 30 days"],
          ["Pro", "Complete analytics with scorecards, plus reports and audit logs"],
          ["Enterprise", "Everything in Pro plus REST API and webhooks for your own reporting, talk to us"],
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Review Weekly for the First Month",
        body: "Early reports show where notifications are slow, which categories need tighter deadlines and which tiles nobody uses. Weekly reviews help you tune quickly.",
      },
      {
        "type": "table",
        "heading": "Report Questions by Role",
        "intro": "The same data answers different questions depending on who is reading.",
        "headers": [
          "Reader",
          "Question",
          "Where It Shows Up"
        ],
        "rows": [
          [
            "Office manager",
            "Which hours need an extra pantry hand?",
            "Request volume by time of day"
          ],
          [
            "Admin head",
            "Which facilities jobs keep missing their deadline?",
            "On-time delivery by category"
          ],
          [
            "Owner",
            "What did team lunches cost this month?",
            "Owner-only spend view"
          ],
          [
            "HR",
            "Who deserves recognition this quarter?",
            "Ratings and scorecards"
          ],
          [
            "Operations",
            "Are we getting faster or slower?",
            "Accept time over time"
          ]
        ]
      },
      {
        "type": "prose",
        "heading": "From a Report to a Decision",
        "paragraphs": [
          "A report is only worth reading if it changes something. A typical example: volume by hour shows the 3rd-floor pantry gets a large share of its daily orders between 9 and 10:30 a.m., while on-time delivery dips in exactly that window. The fix is simple: move one pantry shift thirty minutes earlier.",
          "Another: the print room’s accept time is fine, but colour jobs for sales consistently land close to the deadline. Reading the notes shows decks are uploaded minutes before pitches. So the answer is a reminder to the sales team to upload earlier. More print staff would not help.",
          "Reports point at where to look. The request records underneath tell you why."
        ]
      },
      {
        "type": "callout",
        "tone": "tip",
        "title": "Keep the Review Short",
        "body": "Pick three numbers for the monthly review, such as accept time, on-time delivery and average rating, and only dig into a category when one of them moves. Long reports nobody reads are how offices end up back on gut feel."
      },
    ],
    faqs: [
      { q: "Who Can See Cost Figures in Reports?", a: "Spend is owner-only. Other roles see volume, timing and rating data according to their permissions, but not what lunches or orders cost." },
      { q: "Can I Get Reports on the Free Plan?", a: "Free keeps 30 days of request history so you can look back at recent work. Full analytics, scorecards, audit logs and reports are part of Pro at ₹99 per seat per month." },
      { q: "Can Reports Cover Multiple Offices?", a: "Multi-location is part of Pro, so reports can span your sites. Groups and facility companies may want Enterprise." },
      { q: "Can We Feed Request Data Into Our Own BI Tools?", a: "Enterprise includes a REST API and webhooks for that purpose. Contact us to discuss your setup." },
      { q: "How Soon Will Reports Be Useful?", a: "Within the first week you will see volumes and accept times. A month of data gives reliable patterns, which is the period our pilot figures cover." },
      { q: "What Metrics Do Request Reports Include?", a: "Request volume by item and team, accept time, on-time delivery, ratings and the busiest times of day. Owners also see request costs." },
      { q: "How Should We Run a Monthly Request Review?", a: "Look at volume, on-time delivery and ratings by team, then pick one or two items to improve. Review weekly during the first month while habits form." },
      { q: "Who Usually Reads Request Reports?", a: "Owners for spend and overall service, office managers for team performance, and admin heads for facilities and IT trends." },
    ],
    related: ["features", "features/request-history", "analytics", "analytics/requests", "sla/reporting", "use-cases/ceo", "pricing/pro", "demo"],
    cta: { title: "Get the Numbers Behind Your Office", body: "Start a 14-day Pro trial, no credit card, and see your first report within a week." },
  },
];
