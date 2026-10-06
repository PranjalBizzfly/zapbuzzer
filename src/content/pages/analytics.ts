import type { PageContent } from "../types";

export const pages: PageContent[] = [
  // ───────────────────────────── HUB ─────────────────────────────
  {
    path: "analytics",
    title: "Office Request Analytics and Scorecards",
    description:
      "ZapBuzzer analytics show who is fastest, who earns 5★, when the office buzzes most and how often requests land on time, built from every timed request.",
    h1: "See How Your Office Actually Runs",
    eyebrow: "Analytics",
    lead:
      "Every buzz, accept, delivery and rating in ZapBuzzer is time-stamped. Analytics turns that record into plain answers: how fast teams respond, how often they deliver on time, who earns the 5★ ratings, and when the office is busiest.",
    keywords: [
      "office request analytics",
      "staff scorecard",
      "workplace operations analytics",
      "facilities analytics",
      "pantry analytics",
      "internal request metrics",
    ],
    heroVisual: "analytics",
    sections: [
      {
        type: "prose",
        eyebrow: "Why Measure",
        heading: "Offices Run on Guesswork Until Something Is Measured",
        paragraphs: [
          "Ask an office manager how long coffee takes to reach the boss cabin and you will get a confident answer that is usually wrong. Requests arrived through phone calls, WhatsApp groups and people walking over, so nothing was recorded. The pantry felt overworked; employees felt ignored; neither side had numbers.",
          "ZapBuzzer records each request as it moves from buzzed to accepted, started, delivered and rated. So analytics doesn’t need a separate project. The data is there from the moment your team starts using the app, whether it is a single tea or 24 colour copies for a pitch.",
          "Analytics answers four kinds of question. How much is being asked, and of whom? How quickly do teams respond and deliver? How often do they meet their deadlines? And how do the people they serve rate the work? Full analytics and staff scorecards are part of the Pro plan.",
        ],
      },
      {
        type: "visual",
        visual: "analytics",
        heading: "The Analytics View",
        body: "KPI tiles for volume, accept time, on-time delivery and rating, with a chart of requests over the day and breakdowns by team and category.",
        points: ["Volume and mix of requests", "Speed at each stage", "On-time performance against deadlines", "Ratings and staff scorecards"],
      },
      {
        type: "metrics",
        heading: "The Core Metrics, Defined",
        intro: "Each analytics page goes deeper on one of these. Here is what they mean.",
        items: [
          { metric: "Request Volume", meaning: "Number of requests buzzed in a period, by team, category, location or requester." },
          { metric: "Acceptance Time", meaning: "Time from buzz to the first staff member tapping Accept." },
          { metric: "Response Time", meaning: "Time from buzz until work visibly begins (Started), combining pickup and wait." },
          { metric: "Delivery Time", meaning: "Time from buzz to Delivered: the full wait the requester experienced." },
          { metric: "On-Time %", meaning: "Share of delivered requests finished within their SLA (the time limit set for that kind of request)." },
          { metric: "Average Rating", meaning: "Mean of 1–5★ ratings that requesters give after delivery." },
          { metric: "Peak Hours", meaning: "Times of day and days of the week with the most requests." },
        ],
      },
      {
        type: "stats",
        heading: "Pilot Office Results, First Month",
        items: [
          { value: "32s", label: "Average Accept Time" },
          { value: "96%", label: "On-Time Delivery" },
          { value: "−87%", label: "Phone Calls" },
          { value: "4.8★", label: "Average Staff Rating" },
        ],
        note: "Measured across ZapBuzzer pilot offices in their first month.",
      },
      {
        type: "visual",
        visual: "scorecard",
        heading: "Scorecards That Credit People Fairly",
        body: "Each staff member gets a scorecard with jobs completed, on-time percentage and average rating. Credit follows the person who accepted the job, so quiet, reliable work is visible.",
        points: ["Jobs completed", "On-time %", "Average ★", "Typical accept time"],
      },
      {
        type: "features",
        heading: "What You Can Analyse",
        items: [
          { title: "Requests", body: "What gets asked for, how much, and from which floors and teams." },
          { title: "Staff", body: "Individual scorecards that give fair credit for every accepted job." },
          { title: "Team Performance", body: "How pantry, print, IT, facilities and mailroom compare on speed and quality." },
          { title: "Response, Acceptance and Delivery Time", body: "Where in the lifecycle the minutes go." },
          { title: "On-Time Performance", body: "How often deadlines are met, and where they are not." },
          { title: "Ratings", body: "What requesters think, and which jobs earn 5★." },
          { title: "Office Activity", body: "When the office buzzes most, so you can staff for it." },
        ],
      },
      {
        type: "scenario",
        heading: "A Founder’s First Month of Numbers",
        persona: "Aarav, Founder & CEO",
        setting: "Acme HQ in Pune, four weeks after switching from the pantry WhatsApp group.",
        timeline: [
          { time: "Week 1", event: "Requests flow through ZapBuzzer; Aarav does not look at analytics yet." },
          { time: "Week 2", event: "The activity chart shows a sharp coffee peak at 11 and another at 4." },
          { time: "Week 3", event: "Pantry shifts are moved so two people cover both peaks." },
          { time: "Week 4", event: "Accept time at 11 drops and the pantry’s on-time rate rises." },
        ],
        outcome: "“The office runs quieter. Nobody’s shouting names down the hall. Coffee arrives before anyone asks twice.” — Aarav Sharma, Founder & CEO, Acme HQ",
      },
      {
        type: "audience",
        heading: "Who Uses Analytics",
        items: [
          { role: "Founders and CEOs", benefit: "A quick check that the office works, without walking the floor." },
          { role: "Office and Admin Managers", benefit: "Staff the right hours and spot weak categories early." },
          { role: "Team Leads", benefit: "Coach with real numbers and recognise strong performers." },
          { role: "Staff", benefit: "See your own scorecard and get credit for jobs done well." },
        ],
      },
      {
        type: "table",
        heading: "Analytics by Plan",
        headers: ["Capability", "Free", "Pro", "Enterprise"],
        rows: [
          ["Request history", "Last 30 days", "Full", "Full"],
          ["Full analytics", "—", "Yes", "Yes"],
          ["Staff scorecards", "—", "Yes", "Yes"],
          ["Audit logs and reports", "—", "Yes", "Yes"],
          ["Multi-location analysis", "—", "Yes", "Yes"],
          ["REST API and webhooks", "—", "—", "Yes"],
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Start With One Question",
        body: "Do not try to read every chart in week one. Pick one question, such as “why is the 11 am coffee always late?”, and let the data answer it.",
      },
      {
        type: "prose",
        heading: "From Data to Decisions",
        paragraphs: [
          "Analytics in ZapBuzzer is designed for office people, not data teams. You do not build queries or maintain a spreadsheet. You look at a handful of numbers, notice something odd, and drill into it: a team, a category, an hour, a location.",
          "The decisions that follow are usually practical. Move a pantry break so two runners cover the 11 am meeting rush. Keep a spare HDMI cable in the room that keeps asking for one. Add morning cover in the print room before client meetings. Recognise the staff member whose scorecard shows the highest 5★ share. Change an SLA that the team almost always misses by a minute.",
          "Analytics also connect to the rest of ZapBuzzer. On-time performance depends on the SLA timers and escalation you set up. Acceptance time reflects how notifications reach staff, including Telegram and WhatsApp on Pro. Request volume, combined with the owner-only spend view, shows what internal requests cost. Audit logs and reports on Pro give the paper trail behind every number.",
          "For multi-site groups, multi-location on Pro lets you compare offices with the same definitions. Enterprise customers can also connect ZapBuzzer data to their own systems through the REST API and webhooks; contact us to discuss what you need.",
        ],
      },
    ],
    faqs: [
      { q: "Do Staff See Analytics Too?", a: "What each person sees depends on their role’s permissions. Many offices let staff see their own scorecard so they get credit for their work." },
      { q: "Which Plan Includes Analytics and Scorecards?", a: "Full analytics and staff scorecards are part of Pro at ₹99 per seat per month, and Enterprise. Free keeps the last 30 days of request history." },
      { q: "Do I Need to Set Anything Up to Get Analytics?", a: "No separate setup is needed. Every request is timed and every action is recorded as your team uses the app, so analytics are built from normal use." },
      { q: "Are Scorecards Meant to Rank Staff?", a: "Scorecards are there to give fair credit, so staff are recognised for the jobs they accept and deliver. Use them for recognition and coaching, not just comparison." },
      { q: "Can Analytics Cover Several Offices?", a: "Yes, with multi-location on Pro. Groups and facility companies with many sites should talk to us about Enterprise." },
      { q: "Can I Export Analytics Data?", a: "Enterprise includes a REST API and webhooks for connecting ZapBuzzer to your own systems. Contact us for details." },
      { q: "How Quickly Will I See Useful Patterns?", a: "Most offices see clear peaks and slow spots within two weeks. Pilot offices reported a 32-second average accept time and 96% on-time delivery in their first month." },
      { q: "What Does the Analytics Overview Actually Answer?", a: "Who is fastest, who gets 5★, and when the office buzzes most. It brings accept time, on-time delivery, ratings and busy hours together so you can see how internal service is running." },
    ],
    related: [
      "analytics/staff",
      "analytics/on-time-performance",
      "analytics/office-activity",
      "sla/analytics",
      "admin/owner-dashboard",
      "use-cases/staff-accountability",
      "pricing/pro",
      "free-trial",
    ],
    cta: { title: "Get Your Office’s Numbers", body: "Start a 14-day Pro trial with full analytics and scorecards. No card, no setup call." },
  },

  // ───────────────────────────── REQUESTS ─────────────────────────────
  {
    path: "analytics/request-analytics",
    title: "Request Analytics: What Your Office Asks For",
    description:
      "Request analytics show volume and mix of office requests by team, category, floor and requester, so you can plan pantry stock, print capacity and IT cover.",
    h1: "What Gets Asked for, How Often, and by Whom",
    eyebrow: "Request Analytics",
    lead:
      "Before you can speed anything up, you need to know what the office actually requests. Request analytics count and categorise every buzz.",
    keywords: ["request analytics", "office request volume", "request mix analysis", "internal request statistics"],
    heroVisual: "analytics",
    sections: [
      {
        type: "prose",
        heading: "Volume Is the Starting Point",
        paragraphs: [
          "Most offices underestimate how many small requests they handle. A floor of 60 people can easily generate dozens of coffee, tea, print and IT requests a day. When those lived in phone calls, nobody counted them.",
          "In ZapBuzzer, each request is created from your catalogue, so it already has a category, a destination and a requester. Request analytics group those into counts and trends, which is the base for every other metric.",
        ],
      },
      {
        type: "visual",
        visual: "analytics",
        heading: "Volume and Mix",
        body: "Requests by category over time, with a split by team and destination.",
      },
      {
        type: "metrics",
        heading: "Request Analytics Definitions",
        items: [
          { metric: "Total Requests", meaning: "All requests buzzed in the selected period." },
          { metric: "Requests by Category", meaning: "Counts for coffee, tea, prints, IT, facilities, courier and other catalogue items." },
          { metric: "Requests by Destination", meaning: "Where requests are sent, such as Boss Cabin or Conference Room B." },
          { metric: "Requests per Employee", meaning: "Average requests each requester makes; useful for planning, not policing." },
          { metric: "Cancellation Rate", meaning: "Share of requests cancelled before delivery." },
        ],
      },
      {
        type: "scenario",
        heading: "Planning Pantry Stock",
        persona: "Priya, Office Manager",
        setting: "The pantry keeps running out of green tea mid-week.",
        timeline: [
          { time: "Mon", event: "Priya opens request analytics filtered to the pantry." },
          { time: "Mon", event: "Green tea requests have doubled over the last month." },
          { time: "Tue", event: "She raises the weekly order and moves tea nearer the 3rd-floor station." },
          { time: "Following week", event: "No more out-of-stock notes on tea requests." },
        ],
        outcome: "“Coffee arrives before anyone asks twice. The pantry WhatsApp group is finally quiet.” — Priya, Office Manager",
      },
      {
        type: "table",
        heading: "Decisions Request Data Supports",
        headers: ["Observation", "Possible Action"],
        rows: [
          ["Print requests spike before month-end", "Schedule extra print-room cover"],
          ["Many HDMI requests from one room", "Leave a cable permanently in that room"],
          ["High cancellation on lunch orders", "Review lunch SLA or menu"],
          ["One meeting room drives most facilities requests", "Inspect its AC and projector"],
        ],
      },
      {
        type: "audience",
        heading: "Who Reads Request Analytics",
        items: [
          { role: "Office Managers", benefit: "Stock, staffing and budget planning." },
          { role: "Facilities Leads", benefit: "Spot rooms and equipment that generate repeat issues." },
          { role: "Owners", benefit: "Combine with cost visibility to see what requests cost the business." },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Owner-Only Spend View",
        body: "The owner can see request cost, such as a lunch order, alongside volume. Spend is limited to the owner role.",
      },
      {
        type: "prose",
        heading: "Reading Volume Without Misreading It",
        paragraphs: [
          "High request volume isn’t necessarily a bad sign. When an office moves from phone calls and WhatsApp to ZapBuzzer, volume often appears to rise, simply because requests that used to be invisible are now counted. A floor that seemed to need a few coffees a day may turn out to place dozens of requests across pantry, print and IT.",
          "The useful questions are about mix and trend. Is a category growing? Are requests concentrated on a few destinations? Did volume fall after you fixed a recurring problem, such as a projector that kept failing? Combined with the owner-only cost view, volume also shows what internal services cost, for example how much the weekly lunch orders add up to.",
        ],
      },
      {"type":"scenario","heading":"Does the Sales Floor Need Its Own Printer?","persona":"Vivek, Operations","setting":"A two-floor office debating a second printer.","timeline":[{"time":"Month 1","event":"Vivek filters request analytics to print jobs by destination."},{"time":"Month 1","event":"Most print requests come from the sales floor, mostly before 11am."},{"time":"Month 2","event":"Rather than buy a printer, the print room adds early-morning cover for sales."}],"outcome":"A purchase decision made from request counts, not opinions in a meeting."},
      {"type":"callout","tone":"info","title":"Volume Is Not Workload","body":"One lunch order for 12 is one request but much more work than a coffee. Read volume together with delivery time before deciding how many people a team needs."},
    ],
    faqs: [
      {"q":"Can I See Which Catalogue Items Are Never Requested?","a":"Yes. Low-volume items show up when you look at requests by item over a month, which is a good prompt to tidy the catalogue."},
      { q: "Why Did Our Request Count Go Up After Switching to ZapBuzzer?", a: "Usually because requests that used to happen by phone or chat are now recorded. It is a more accurate count, not more work." },
      { q: "Can Request Analytics Show Costs?", a: "The owner can see request cost, such as lunch orders, through the owner-only spend view." },
      { q: "Is Request Analytics on the Free Plan?", a: "Free keeps the last 30 days of request history. Full analytics, including request breakdowns over time, are part of Pro." },
      { q: "Can I See Requests by Floor or Location?", a: "Requests carry a destination, and multi-location on Pro lets you compare offices." },
      { q: "Does This Show Individual Employee Requests?", a: "It can show requests per requester, depending on role permissions. Use it to plan, not to discourage people from asking." },
      { q: "What Counts as a Category?", a: "Categories come from your catalogue, such as pantry items, prints, IT help, facilities and courier pickup." },
      { q: "Which Request Categories Usually Take Up Most of the Volume?", a: "It varies by office, which is why the breakdown is useful. Request analytics count every buzz by catalogue item, so you can see whether pantry, print, IT, facilities or courier requests dominate your week." },
    ],
    related: ["analytics", "analytics/office-activity", "features/request-catalog", "features/request-history", "admin/spend-visibility", "solutions/pantry", "pricing/pro"],
    cta: { title: "Count What Your Office Asks For", body: "Try ZapBuzzer free for 14 days and see your first request breakdown." },
  },

  // ───────────────────────────── STAFF ─────────────────────────────
  {
    path: "analytics/staff-analytics",
    title: "Staff Analytics and Scorecards (Pro)",
    description:
      "Staff scorecards on ZapBuzzer Pro show jobs accepted, on-time rate, accept time and average rating for each person, giving fair, time-stamped credit for work.",
    h1: "Fair Credit for the People Who Do the Work",
    eyebrow: "Staff Analytics · Pro",
    lead:
      "Office staff are usually noticed only when something goes wrong. Scorecards show the other side: every job accepted, delivered on time and rated well.",
    keywords: ["staff scorecard", "staff analytics", "office staff performance", "employee performance tracking office"],
    heroVisual: "scorecard",
    sections: [
      {
        type: "prose",
        heading: "People-First, Not a Nag Tool",
        paragraphs: [
          "ZapBuzzer was built on the belief that staff deserve fair credit for their work, not another tool for chasing them. With first-accept-wins, the person who taps Accept owns the job, and the job’s outcome is credited to them.",
          "That means the pantry runner who quietly handles most of the 11 am rush, or the IT person who fixes things in three minutes, finally has numbers behind their reputation.",
        ],
      },
      {
        type: "visual",
        visual: "scorecard",
        heading: "A Scorecard",
        body: "Name and photo, jobs completed, on-time percentage, typical accept time and average rating.",
      },
      {
        type: "metrics",
        heading: "Scorecard Metrics",
        items: [
          { metric: "Jobs Completed", meaning: "Requests this person accepted and marked Delivered in the period." },
          { metric: "On-Time %", meaning: "Share of their delivered jobs that met the SLA." },
          { metric: "Average Accept Time", meaning: "How quickly they typically pick up requests sent to their team." },
          { metric: "Average Rating", meaning: "Mean of the 1–5★ ratings requesters gave their jobs." },
          { metric: "5★ Share", meaning: "Proportion of their rated jobs that earned five stars." },
        ],
      },
      {
        type: "scenario",
        heading: "Recognising Raj",
        persona: "Priya, Office Manager",
        setting: "Quarter-end staff recognition for the pantry team.",
        timeline: [
          { time: "Day 1", event: "Priya opens pantry scorecards for the quarter." },
          { time: "Day 1", event: "Raj has the most jobs and a typical accept time in seconds." },
          { time: "Day 1", event: "Sunita has fewer jobs but the highest 5★ share." },
          { time: "Day 2", event: "Both are recognised, for speed and for quality respectively." },
        ],
        outcome: "Recognition was based on records, not on who happened to be seen by leadership.",
      },
      {
        type: "comparison",
        heading: "Perception vs Scorecard",
        columns: ["Without Scorecards", "With Scorecards"],
        rows: [
          { label: "Who Gets Credit", a: "Whoever is most visible", b: "Whoever accepted and delivered" },
          { label: "Performance Talks", a: "Based on complaints", b: "Based on time-stamped jobs and ratings" },
          { label: "Staff View of Own Work", a: "None", b: "Their own scorecard" },
        ],
      },
      {
        type: "checklist",
        heading: "Using Scorecards Well",
        items: [
          "Compare people within the same team and shift",
          "Look at volume alongside on-time % and rating",
          "Share scorecards with staff, not just about them",
          "Use them for recognition first",
          "Check team load before reading a low score",
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Scorecards Are Part of Pro",
        body: "Full analytics and scorecards come with Pro at ₹99 per seat per month. Try them free for 14 days.",
      },
      {
        type: "prose",
        heading: "Reading a Scorecard in Context",
        paragraphs: [
          "A scorecard is a summary, and summaries can mislead without context. A staff member who handles the busiest hour will have more jobs and possibly a slightly lower on-time rate than a colleague on a quiet shift. Someone who takes on the difficult facilities requests may have longer delivery times but better ratings.",
          "That is why scorecards sit next to team performance and office activity analytics. Before drawing a conclusion about a person, check their share of the team’s load and the hours they work. Used this way, scorecards answer the question staff themselves care about: is my work being seen? For most service staff, the answer has been no for a long time. Pilot offices reported a 4.8★ average staff rating in their first month, a number that is far easier to celebrate when it is attached to names.",
          "Scorecards also help new staff. Seeing what a strong week looks like in terms of accept time and on-time rate sets a clear, fair expectation.",
        ],
      },
      {"type":"checklist","heading":"Before Discussing a Scorecard With Someone","items":["Check how many jobs it is based on; a handful is not a trend.","Note their shifts and which categories they cover.","Look for reassignments that moved jobs to or from them.","Bring something they did well as well as something to fix."]},
    ],
    faqs: [
      {"q":"Do Part-Time Staff Get a Fair Scorecard?","a":"Scorecards are based on the jobs each person actually handled, so times and ratings reflect their own work. Compare volume with shifts worked rather than with full-timers’ totals."},
      { q: "Can Scorecards Be Used for Appraisals?", a: "They can inform appraisals, but read them alongside workload and shift data. They are strongest as evidence of good work and for recognition." },
      { q: "Do Scorecards Show Jobs a Person Declined?", a: "First-accept-wins means people accept rather than decline. Scorecards focus on jobs accepted and delivered." },
      { q: "How Is Credit Assigned?", a: "With first-accept-wins, the person who taps Accept owns the request. Its timing and rating count towards their scorecard." },
      { q: "What Does an Individual Staff Scorecard Include?", a: "Each scorecard shows the jobs that person accepted and delivered, their accept time, how often they delivered on time and the average 1–5★ rating requesters gave them." },
      { q: "Do Scorecards Include Jobs That Escalated?", a: "Yes. A request that went overdue still belongs to the person who accepted it, so its timing counts on their scorecard. Read escalations alongside workload before drawing conclusions." },
      { q: "Are Scorecards Available on Free?", a: "No, scorecards are part of Pro and Enterprise." },
      { q: "Can Scorecards Highlight Staff Who Quietly Carry the Most Work?", a: "Yes. Because every accept is a deliberate tap, scorecards show who took the most requests and how they were rated, so busy staff get credit instead of the work disappearing into a chat." },
    ],
    related: ["analytics", "analytics/team-performance", "analytics/ratings", "features/first-accept-wins", "use-cases/staff-accountability", "admin/staff-dashboard", "pricing/pro"],
    cta: { title: "Give Your Staff the Credit They Earn", body: "Start a 14-day Pro trial and open your first scorecards." },
  },

  // ───────────────────────────── TEAM PERFORMANCE ─────────────────────────────
  {
    path: "analytics/team-performance",
    title: "Team Performance for Office Service Teams",
    description:
      "Compare pantry, print room, IT desk, facilities and mailroom on volume, speed, on-time delivery and ratings, and see where each team needs support.",
    h1: "How Each Service Team Is Really Doing",
    eyebrow: "Team Performance",
    lead:
      "Individual scorecards show people; team performance shows the system. It compares your service teams side by side so you can staff, train and invest where it matters.",
    keywords: ["team performance analytics", "service team metrics", "facilities team performance", "it desk performance"],
    heroVisual: "analytics",
    sections: [
      {
        type: "prose",
        heading: "Teams Have Different Jobs, so Compare Fairly",
        paragraphs: [
          "A pantry delivering tea and a facilities team fixing an AC should not be judged by the same clock. The fair way is to compare each team against its own SLAs (the time limits set for its requests) and then look at the trend over time.",
          "Because requests are routed to teams and accepted by individuals, team numbers are simply the sum of real jobs. No one has to fill in a weekly summary.",
        ],
      },
      {
        type: "visual",
        visual: "analytics",
        heading: "Teams Side by Side",
        body: "Volume, accept time, on-time % and rating for each service team.",
      },
      {
        type: "table",
        heading: "What to Compare",
        headers: ["Measure", "What It Tells You"],
        rows: [
          ["Volume", "How much demand each team carries"],
          ["Accept time", "How quickly the team notices and claims work"],
          ["On-time %", "How reliably it meets its own SLAs"],
          ["Average rating", "How satisfied requesters are"],
          ["Escalations", "How often managers have to step in"],
        ],
      },
      {
        type: "metrics",
        heading: "Team Metric Definitions",
        items: [
          { metric: "Team Load", meaning: "Requests per team member in a period; a fair way to compare teams of different sizes." },
          { metric: "Team On-Time %", meaning: "Share of the team’s delivered requests completed within SLA." },
          { metric: "Team Escalation Rate", meaning: "Share of the team’s requests that escalated to a manager." },
        ],
      },
      {
        type: "scenario",
        heading: "Facilities vs IT",
        persona: "Deepak, Admin Head",
        setting: "Deciding where to add one new hire.",
        timeline: [
          { time: "Mon", event: "Deepak compares team load for the last quarter." },
          { time: "Mon", event: "IT load per person is far higher than facilities, with a rising escalation rate." },
          { time: "Tue", event: "Facilities is steady with high ratings." },
          { time: "Wed", event: "The new hire goes to the IT desk." },
        ],
        outcome: "A hiring decision based on load data rather than whichever team complained loudest.",
      },
      {
        type: "audience",
        heading: "Who Uses Team Views",
        items: [
          { role: "Admin and Operations Heads", benefit: "Staffing and budget decisions." },
          { role: "Team Leads", benefit: "Show what the team handles and where help is needed." },
          { role: "Facility Companies", benefit: "Compare teams across client sites; talk to us about Enterprise." },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Pro Feature",
        body: "Team performance is part of full analytics on Pro. Multi-location comparisons also require Pro.",
      },
      {
        type: "prose",
        heading: "Teams Depend on Each Other",
        paragraphs: [
          "Office service teams are linked. When the print room is slow before a pitch, the sales team calls IT for a laptop to show the deck on screen instead. When facilities cannot fix an AC, the pantry gets more requests for hot drinks in that room. Looking at teams side by side helps you spot these knock-on effects.",
          "Team performance also helps with fairness between teams. A team lead can show, with load per person and escalation rates, that their team needs another person, rather than arguing from impressions. And a team that has improved its on-time rate quarter on quarter has a clear achievement to point to.",
          "For operators who run services across several sites, the same comparisons work between locations with multi-location on Pro, and Enterprise adds options such as a dedicated customer success manager for groups and facility companies.",
        ],
      },
      {"type":"checklist","heading":"Running a Fair Team Review","items":["Compare each team with its own last month first.","Use load per person, not total requests.","Look at ratings beside on-time %.","Ask the team lead what the numbers miss before drawing conclusions."]},
      {"type":"callout","tone":"tip","title":"Share Team Results With the Team","body":"Teams that see their own on-time % and ratings tend to fix small problems themselves, such as who covers lunch. Visibility is set by role permissions."},
    ],
    faqs: [
      {"q":"What If a Team Is Small and One Person Is on Leave?","a":"Expect a dip and note it. Compare that week with others where the team was at full strength before deciding anything changed."},
      { q: "What Is the Best Single Measure of Team Health?", a: "There is no single one. On-time % against the team’s own SLAs, together with average rating and load per person, gives a balanced picture." },
      { q: "Can Team Leads See Only Their Own Team?", a: "Visibility follows role permissions, so you can give team leads their own team’s view and managers the wider one." },
      { q: "Can I Compare Teams in Different Offices?", a: "Yes, with multi-location on Pro. Each office’s teams can be compared side by side." },
      { q: "Is It Fair to Compare Pantry With IT?", a: "Compare each team against its own SLA and over time, and use load per person for capacity. Raw speed comparisons across very different work are not meaningful." },
      { q: "Does Team Performance Include Ratings?", a: "Yes. Average rating per team shows how requesters feel about the service, not just how fast it was." },
      { q: "Which Plan Do I Need?", a: "Pro or Enterprise, as team performance is part of full analytics." },
      { q: "Can Team Performance Show Where to Add Staff?", a: "Yes. Load per person, accept times and escalations by team show which service team is stretched, so you can add cover to the print room or pantry where it is actually needed." },
    ],
    related: ["analytics", "analytics/staff", "analytics/on-time-performance", "admin/team-management", "use-cases/facilities-operations", "solutions/it-support/analytics", "pricing/pro"],
    cta: { title: "Compare Your Teams Fairly", body: "Try full analytics free for 14 days on Pro." },
  },

  // ───────────────────────────── RESPONSE TIME ─────────────────────────────
  {
    path: "analytics/response-time-analytics",
    title: "Response Time Analytics for Office Requests",
    description:
      "Response time analytics measure how long office requests wait before work begins, by team and hour, so you can cut the dead time between asking and action.",
    h1: "How Long Until Someone Actually Starts?",
    eyebrow: "Response Time",
    lead:
      "Response time is the stretch between asking and seeing work begin. It is where most frustration builds, and where small changes make the biggest difference.",
    keywords: ["response time analytics", "office response time", "request response time", "improve response time"],
    heroVisual: "request-timeline",
    sections: [
      {
        type: "prose",
        heading: "The Silent Wait",
        paragraphs: [
          "When someone buzzes for an HDMI cable, the worst part is the minutes of not knowing whether anyone saw the request, more than the walk from the IT desk. Response time measures that silent wait.",
          "In ZapBuzzer, response time runs from buzz to Started. It includes acceptance time (someone claims it) and the gap before work begins. Splitting it this way shows whether the delay is in noticing or in getting going.",
        ],
      },
      {
        type: "visual",
        visual: "request-timeline",
        heading: "Where Response Time Sits",
        body: "Buzzed → Accepted → Started is response time. Started → Delivered is work time.",
      },
      {
        type: "metrics",
        heading: "Response Time Definitions",
        items: [
          { metric: "Response Time", meaning: "From buzz to Started: total time before work visibly begins." },
          { metric: "Accept Component", meaning: "From buzz to Accept: the time to claim the job." },
          { metric: "Start Gap", meaning: "From Accept to Started: time the owner holds the job before beginning." },
          { metric: "Median Response Time", meaning: "The middle value, less distorted by a few unusual requests than the average." },
        ],
      },
      {
        type: "scenario",
        heading: "The HDMI in Three Minutes",
        persona: "Tanvi, Designer",
        setting: "Client presentation in Conference Room B; no HDMI cable.",
        timeline: [
          { time: "16:00", event: "Tanvi taps IT → HDMI, Conference Room B." },
          { time: "16:00", event: "The IT desk is pinged on app and Telegram." },
          { time: "16:01", event: "Priya accepts and marks it Started." },
          { time: "16:03", event: "Cable delivered; Tanvi rates 5★." },
        ],
        outcome: "A one-minute response time and a three-minute delivery. No one left the room to find IT.",
      },
      {
        type: "problem-solution",
        heading: "Common Causes of Slow Response",
        problem: {
          title: "What Slows Response",
          points: ["Staff away from screens", "Only email notifications", "Peak hours with thin cover", "Owners accepting more than they can start"],
        },
        solution: {
          title: "What Helps",
          points: ["Mobile app that rings even on silent", "Telegram and WhatsApp pings (Pro)", "Staffing to the activity chart", "Watching the start gap per person"],
        },
      },
      {
        type: "checklist",
        heading: "Improving Response Time",
        items: [
          "Make sure staff have the mobile app installed",
          "Turn on Telegram or WhatsApp for teams on the move (Pro)",
          "Check response time by hour for gaps",
          "Discourage accepting jobs you cannot start soon",
        ],
      },
      {
        type: "prose",
        heading: "Response Time and the Phone Call",
        paragraphs: [
          "There is a direct link between response time and phone calls. When people do not know whether their request was seen, they pick up the phone. When the screen shows within seconds that Raj or Priya has accepted it and started, there is nothing to call about. Pilot offices saw phone calls fall by 87% in their first month, largely because requesters could see response happen.",
          "That makes response time worth tracking even when delivery times are fine. A team that delivers in ten minutes but leaves requests unacknowledged for five of them feels slower than one that accepts in thirty seconds and delivers in twelve. Watch the accept component and the start gap separately: the first is about reach and staffing, the second is about how owners manage several jobs at once.",
          "Track response time by hour too. Most offices find one or two windows where it climbs, usually around meetings or lunch, and those are the cheapest places to improve.",
        ],
      },
      {"type":"table","heading":"Where the Minutes Go","intro":"A simple way to see which stage to improve.","headers":["Stage","Starts","Ends","Usually Improved By"],"rows":[["Accept","Buzz","Accept","Channels, staffing"],["Start","Accept","Started with ETA","Fewer parallel jobs"],["Work","Started","Delivered","Stock, equipment, distance"]]},
    ],
    faqs: [
      {"q":"Should Staff Mark Started Immediately After Accept?","a":"Only when they actually begin. Marking Started early makes response time look good but the ETA becomes unreliable, which requesters notice."},
      { q: "What Is a Good Response Time?", a: "It depends on the request type, but a fast accept matters most. Pilot offices averaged 32 seconds to accept." },
      { q: "Does Marking Started Matter?", a: "Yes. Started tells the requester work has begun and gives an ETA, and it is the point where response time ends." },
      { q: "How Is Response Time Different From Acceptance Time?", a: "Acceptance time stops at Accept. Response time continues until the job is marked Started, so it also captures any wait after someone claims it." },
      { q: "Why Use the Median?", a: "A single forgotten request can inflate an average. The median shows what a typical requester experiences." },
      { q: "Do Notifications Affect Response Time?", a: "Strongly. ZapBuzzer repeats notifications until a request is accepted, and Pro adds Telegram and WhatsApp to reach staff away from a computer." },
      { q: "Is Response Time Analytics on Free?", a: "Full analytics is a Pro feature. Every request is still timed on Free." },
      { q: "Does the ETA Given at Started Affect Response Time?", a: "No. Response time ends when the job is marked Started. The ETA tells the requester when to expect delivery, which is measured separately as delivery time." },
    ],
    related: ["analytics", "analytics/acceptance-time", "analytics/delivery-time", "use-cases/improve-response-time", "notifications/multi-channel", "workflows/hdmi-request", "pricing/pro"],
    cta: { title: "Shrink the Silent Wait", body: "Start a 14-day free trial and measure your real response time." },
  },

  // ───────────────────────────── ACCEPTANCE TIME ─────────────────────────────
  {
    path: "analytics/acceptance-time-analytics",
    title: "Acceptance Time: How Fast Requests Get Claimed",
    description:
      "Acceptance time measures how quickly someone taps Accept after a request is buzzed. Pilot offices averaged 32 seconds. See how ZapBuzzer tracks it by team.",
    h1: "Seconds From Buzz to “I’ve Got It”",
    eyebrow: "Acceptance Time",
    lead:
      "With first-accept-wins, a request is sent to the whole team and the first person to tap Accept owns it. Acceptance time measures how long that takes.",
    keywords: ["acceptance time", "time to accept request", "first accept wins metric", "request pickup time"],
    heroVisual: "acceptance",
    sections: [
      {
        type: "prose",
        heading: "The Moment Ownership Begins",
        paragraphs: [
          "Before acceptance, a request belongs to no one. That is the window in which, in a WhatsApp group, everyone assumes someone else will handle it. ZapBuzzer shrinks that window by notifying the whole team on several channels and repeating until someone accepts.",
          "Acceptance time is the cleanest measure of whether that is working. Pilot offices recorded an average accept time of 32 seconds in their first month.",
        ],
      },
      {
        type: "visual",
        visual: "acceptance",
        heading: "The First-Accept Race",
        body: "The request goes to every team member. One taps Accept; the others see it is taken.",
      },
      {
        type: "metrics",
        heading: "Acceptance Metrics",
        items: [
          { metric: "Average Accept Time", meaning: "Mean time from buzz to Accept across requests in a period." },
          { metric: "Median Accept Time", meaning: "The typical accept time, less affected by outliers." },
          { metric: "Unaccepted at Deadline", meaning: "Requests nobody accepted before their SLA ran out." },
          { metric: "Accept Share", meaning: "Each staff member’s portion of the team’s accepted requests." },
        ],
      },
      {
        type: "stats",
        items: [
          { value: "32s", label: "Average Accept Time in Pilot Offices" },
          { value: "−87%", label: "Phone Calls" },
        ],
        note: "Pilot offices, first month.",
      },
      {
        type: "scenario",
        heading: "Twelve Seconds in a Board Call",
        persona: "Aarav, Founder & CEO",
        setting: "Mid board call, the boss cabin needs coffee.",
        timeline: [
          { time: "11:20:00", event: "Aarav taps Coffee → Boss Cabin." },
          { time: "11:20:01", event: "The pantry team sees it on Telegram." },
          { time: "11:20:12", event: "Raj accepts; Aarav sees his name and photo." },
          { time: "11:26", event: "Coffee delivered while the call continues." },
        ],
        outcome: "A 12-second accept. Aarav never had to step out of the call.",
      },
      {
        type: "checklist",
        heading: "If Acceptance Is Slow",
        items: [
          "Check which channels the team receives notifications on",
          "Look for hours with fewer people on shift",
          "See whether one person accepts nearly everything",
          "Confirm the mobile app is installed and allowed to ring",
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Watch Accept Share Too",
        body: "If one person accepts most jobs, the team may be leaning on them. Fast average accept time can hide an uneven load.",
      },
      {
        type: "prose",
        heading: "Why Acceptance Comes Before Everything Else",
        paragraphs: [
          "Every other number depends on acceptance. A request that waits two minutes to be accepted has used up a fifth of a ten-minute coffee SLA before anyone has moved. That is why ZapBuzzer puts so much into this first step: the request goes to the whole team at once, on the app and email on every plan and on Telegram and WhatsApp with Pro, and notifications repeat until someone taps Accept.",
          "Acceptance also changes the experience for the requester. The moment someone accepts, the requester sees their name and photo, which removes the urge to chase. For the team, first-accept-wins ends the “I thought you would do it” problem: there is never any doubt who owns the job.",
          "When acceptance time rises, look at notification reach first, then staffing in that hour, before assuming anyone is ignoring requests.",
        ],
      },
      {"type":"comparison","heading":"Calling a Name Versus Buzzing a Team","columns":["Calling Someone’s Name","Buzz to the Whole Team"],"rows":[{"label":"Who Hears It","a":"One person, if they are nearby","b":"Everyone on the team, on the channels your plan includes"},{"label":"If They Are Busy","a":"The request waits or is forgotten","b":"Whoever is free taps Accept"},{"label":"Requester Knows","a":"Nothing until something arrives","b":"Name, photo and ETA once someone accepts"},{"label":"Measured","a":"Never","b":"Every accept is timed"}]},
      {"type":"checklist","heading":"Quick Checks When One Person Accepts Slowly","items":["Is their phone allowing the app to ring through?","Are they on the right team, or getting pings meant for others?","Do they usually work away from their phone, such as at the printer?","Are they always the one finishing a job when new requests arrive?"]},
    ],
    faqs: [
      {"q":"Should We Reward the Fastest Acceptor?","a":"Be careful. Rewarding speed alone can make people grab jobs they cannot start soon. Look at accept time together with start, delivery and ratings on the scorecard."},
      { q: "Can Notifications Reach Staff Whose Phone Is on Silent?", a: "Yes. A silent or locked phone still rings with the ZapBuzzer mobile app, which helps keep acceptance fast." },
      { q: "Does Fast Acceptance Guarantee Fast Delivery?", a: "No. It removes the first delay, but delivery also depends on work time. Look at delivery time analytics for the full picture." },
      { q: "What Counts as Accepted?", a: "A request is accepted when a staff member taps Accept. They then own it and the requester sees who is on it." },
      { q: "What If Two People Tap Accept at Once?", a: "First-accept-wins: only the first tap claims it, and others see it is taken. That avoids duplicate work." },
      { q: "What Happens If No One Accepts?", a: "Notifications repeat until someone does. If the SLA passes, the request escalates to a manager." },
      { q: "Is Acceptance Time Analytics Included on Free?", a: "Accept times are recorded on all plans; full analytics to explore them is part of Pro." },
      { q: "How Fast Did Pilot Offices Accept Requests?", a: "Pilot offices averaged 32 seconds from buzz to accept in their first month, with notifications repeating across channels until someone tapped Accept." },
    ],
    related: ["analytics", "analytics/response-time", "features/first-accept-wins", "mobile-app/request-acceptance", "notifications/multi-channel", "workflows/coffee-request", "pricing/pro"],
    cta: { title: "See How Fast Your Team Claims Work", body: "Try ZapBuzzer free for 14 days." },
  },

  // ───────────────────────────── DELIVERY TIME ─────────────────────────────
  {
    path: "analytics/delivery-time-analytics",
    title: "Delivery Time Analytics: The Full Wait",
    description:
      "Delivery time measures the full wait from buzz to Delivered for coffee, prints, IT and facilities jobs, so you know what requesters really experience.",
    h1: "The Number Requesters Actually Feel",
    eyebrow: "Delivery Time",
    lead:
      "Delivery time is the whole journey: from the tap on Buzz to the job marked Delivered. It is the figure your SLAs (the time limits for each kind of request) are measured against and the one employees remember.",
    keywords: ["delivery time analytics", "request turnaround time", "office request delivery time", "time to complete request"],
    heroVisual: "delivery",
    sections: [
      {
        type: "prose",
        heading: "The Whole Wait, Not Just the Fast Part",
        paragraphs: [
          "A team can accept requests quickly and still deliver slowly. Delivery time captures everything: pickup, waiting, the walk to the 3rd floor, the print queue. When staff mark a job Delivered, they can attach a photo as confirmation, and the clock stops.",
          "Delivery time analytics look at that full duration by category and team, so you can set realistic SLAs and see where a job type is getting slower.",
        ],
      },
      {
        type: "visual",
        visual: "delivery",
        heading: "Delivered and Rated",
        body: "The job is marked Delivered, optionally with a photo, and the requester is asked to rate it.",
      },
      {
        type: "metrics",
        heading: "Delivery Time Definitions",
        items: [
          { metric: "Delivery Time", meaning: "From buzz to Delivered for one request." },
          { metric: "Median Delivery Time", meaning: "The typical total wait, from buzz to delivered, for a category or team." },
          { metric: "Work Time", meaning: "From Started to Delivered: the hands-on part of the job." },
          { metric: "Slowest 10%", meaning: "The longest waits; where frustration and escalations come from." },
        ],
      },
      {
        type: "table",
        heading: "Reading Delivery Time by Category",
        headers: ["Category", "What Usually Drives It"],
        rows: [
          ["Coffee and tea", "Pantry queue and distance to the cabin"],
          ["Print jobs", "Copies, colour and printer queue"],
          ["IT help", "Whether the item is in stock at the desk"],
          ["Facilities", "Diagnosis, parts and building access"],
          ["Lunch orders", "Number of items and preparation"],
        ],
      },
      {
        type: "scenario",
        heading: "Before and After: Two Coffees",
        persona: "Aarav, Founder & CEO",
        setting: "The same request, before and after ZapBuzzer.",
        timeline: [
          { time: "Before", event: "Two coffees for the boss’s cabin, asked of Raju, 25 minutes and 3 phone calls." },
          { time: "Before", event: "Coffee arrives cold." },
          { time: "After", event: "Coffee ×2 → Boss Cabin buzzed; accepted in seconds." },
          { time: "After", event: "Delivered in 4 minutes, 0 phone calls, hot." },
        ],
        outcome: "Delivery time went from 25 minutes to 4. That is the change people notice.",
      },
      {
        type: "checklist",
        heading: "Using Delivery Time",
        items: [
          "Set SLAs from the median delivery time plus a buffer",
          "Investigate the slowest 10% rather than the average",
          "Split delivery into response and work time to find the cause",
          "Track the trend after any process change",
        ],
      },
      {
        type: "prose",
        heading: "Delivery Time for Different Jobs",
        paragraphs: [
          "Delivery time means different things for different requests. For a cup of tea to a cabin, it is mostly pantry queue and walking time. For 24 colour copies before a pitch, it depends on the printer queue and the size of the job. For an AC stuck at 16°C, it may include diagnosis or a call to the building’s maintenance desk. Comparing categories against each other is rarely useful; comparing each category against its own past is.",
          "This is also the measure that connects most directly to SLAs. Most offices set each SLA from the median delivery time for that category, with a buffer, then tighten it once the team is comfortably on time. Delivery confirmation, optionally with a photo, keeps the stop time honest.",
        ],
      },
      {"type":"metrics","heading":"Splitting Delivery Time Into Its Parts","intro":"Total delivery time is easier to improve once you know which stretch is slow.","items":[{"metric":"Wait to Accept","meaning":"From Buzz to Accept. Long here means notifications or staffing."},{"metric":"Accept to Start","meaning":"Time before work begins. Long here often means staff are finishing another job first."},{"metric":"Start to Delivered","meaning":"The work and the walk. Long here points at stock, printers or distance."}]},
      {"type":"callout","tone":"warning","title":"Watch for Early Delivered Taps","body":"If a team’s delivery times look too good, check ratings. Marking a job Delivered before it reaches the desk improves the clock but tends to show up as low stars. An optional photo at delivery helps keep the record honest."},
    ],
    faqs: [
      {"q":"Should a 24-copy Colour Print and a Coffee Have the Same Target?","a":"No. Set SLAs per category so each kind of job is judged against what is realistic for it. Then compare delivery time for that category over time rather than across categories."},
      { q: "Does a Photo at Delivery Affect the Timing?", a: "No. The photo is optional confirmation; the time is recorded when the request is marked Delivered." },
      { q: "Can I Compare Delivery Time Across Locations?", a: "Yes, with multi-location on Pro." },
      { q: "When Does Delivery Time Stop?", a: "When the staff member marks the request Delivered. A photo can be attached as confirmation." },
      { q: "How Does Delivery Time Relate to SLAs?", a: "The SLA deadline is measured against delivery time. A request is on time if it is delivered before the deadline." },
      { q: "Why Look at the Slowest 10%?", a: "Averages hide the worst experiences. The slowest requests are where escalations, complaints and phone calls come from." },
      { q: "Which Plan Includes Delivery Time Analytics?", a: "Full analytics is part of Pro and Enterprise." },
      { q: "Why Is Delivery Time the Number Employees Care About?", a: "It covers the whole wait, from tapping Buzz to the job marked Delivered. In the before-and-after coffee example, that wait dropped from 25 minutes to 4." },
    ],
    related: ["analytics", "analytics/on-time-performance", "analytics/response-time", "features/delivery-confirmation", "sla/timers", "workflows/print-request", "pricing/pro"],
    cta: { title: "Measure the Full Wait", body: "Start a free 14-day trial and see your real delivery times." },
  },

  // ───────────────────────────── ON-TIME PERFORMANCE ─────────────────────────────
  {
    path: "analytics/on-time-performance",
    title: "On-Time Performance for Office Requests",
    description:
      "On-time performance shows what share of office requests are delivered within their SLA. Pilot offices hit 96% in month one. See how ZapBuzzer tracks it.",
    h1: "How Often Your Office Keeps Its Promises",
    eyebrow: "On-Time Performance",
    lead:
      "On-time performance is the single number that says whether internal service is reliable. It compares real delivery times against your SLAs, the time limits you set for each kind of request.",
    keywords: ["on-time performance", "on time delivery rate", "sla compliance rate", "office service reliability"],
    heroVisual: "sla-timer",
    sections: [
      {
        type: "prose",
        heading: "One Number, Many Causes",
        paragraphs: [
          "On-time % is simple: delivered within SLA divided by all delivered requests. Pilot offices reached 96% on-time delivery in their first month.",
          "The number is only as honest as the SLAs behind it. If targets are too loose, the number looks great but means little. If they are impossible, it looks terrible and wears staff down. Track it alongside breaches and overdue minutes to keep it meaningful.",
        ],
      },
      {
        type: "visual",
        visual: "sla-timer",
        heading: "On Time, Close, Overdue",
        body: "Each request ends either inside its deadline or past it. On-time % summarises those outcomes.",
      },
      {
        type: "metrics",
        heading: "On-Time Definitions",
        items: [
          { metric: "On-Time %", meaning: "Requests delivered within their SLA as a share of all delivered requests." },
          { metric: "On-Time % by Team", meaning: "The same measure for pantry, print, IT, facilities and mailroom separately." },
          { metric: "On-Time Trend", meaning: "How on-time % changes week to week or month to month." },
          { metric: "Late but Close", meaning: "Requests that missed by only a few minutes; often a target issue." },
        ],
      },
      {
        type: "stats",
        items: [
          { value: "96%", label: "On-Time Delivery in Pilot Offices" },
          { value: "4.8★", label: "Average Staff Rating" },
        ],
        note: "Pilot offices, first month.",
      },
      {
        type: "scenario",
        heading: "Raising the Print Room’s On-Time Rate",
        persona: "Kavya, Sales Lead",
        setting: "Sales relies on the print room before every client meeting.",
        timeline: [
          { time: "Month 1", event: "Print room on-time % is the lowest of all teams." },
          { time: "Month 1", event: "Analytics show breaches cluster on large colour jobs before 10 am." },
          { time: "Month 2", event: "Sales starts buzzing big decks the evening before; the print room adds morning cover." },
          { time: "Month 3", event: "Print on-time % rises to match the other teams." },
        ],
        outcome: "Kavya: “Print jobs land at my desk before the client even sits down. Zero chase calls.”",
      },
      {
        type: "checklist",
        heading: "Keeping On-Time % Honest",
        items: [
          "Set SLAs from real delivery data, not wishes",
          "Report breaches and overdue minutes alongside the %",
          "Do not count cancelled requests as on time",
          "Review targets quarterly",
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Pro Feature",
        body: "On-time analytics, SLA reports and escalation chains are part of Pro at ₹99 per seat per month.",
      },
      {
        type: "prose",
        heading: "What On-Time Performance Does for Trust",
        paragraphs: [
          "Internal services are judged on reliability more than speed. An employee who knows coffee will reach the boss cabin within ten minutes, every time, stops checking. An employee who sometimes gets it in three minutes and sometimes in thirty keeps calling. On-time % captures that reliability in a way averages cannot.",
          "It also gives teams a goal they can own. A print room or facilities team can see its on-time rate each week and decide what to try next, from rearranging shifts to asking colleagues to buzz large jobs earlier. Combined with escalation chains on Pro, it means late jobs are both rare and handled when they happen.",
          "For leadership, on-time % is the quickest health check of internal service. A steady figure means the office is working; a sudden drop is worth a look at SLA analytics to find the cause.",
        ],
      },
      {"type":"workflow","heading":"A Monthly On-Time Review","steps":[{"title":"Find the Lowest Team","body":"Start with the team whose on-time % is lowest or falling."},{"title":"Break It Down","body":"Look at which categories and hours its late requests fall in."},{"title":"Pick One Cause","body":"A short-staffed hour, a slow item, or an SLA that was never realistic."},{"title":"Change and Recheck","body":"Make one change and compare next month."}]},
      {"type":"callout","tone":"tip","title":"Look at Near Misses Too","body":"Requests delivered in the last minute before the deadline count as on time but are warnings. A rising share of close calls tells you a team is about to start missing."},
    ],
    faqs: [
      {"q":"Can On-Time % Be Gamed by Setting Long SLAs?","a":"It can, which is why it should be read with delivery time and ratings. A team that is always on time against generous targets but slow in practice will show it in those numbers."},
      { q: "Does On-Time % Include Escalated Requests?", a: "Yes. An escalated request counts as late if it was delivered after its deadline, regardless of how it was resolved." },
      { q: "Should Every Team Aim for the Same On-Time %?", a: "A common target keeps things simple, but set each team’s SLAs realistically first, or the target will mean different things for different teams." },
      { q: "How Is On-Time % Calculated?", a: "Requests delivered within their SLA, divided by all delivered requests in the period. Open and cancelled requests are not counted as on time." },
      { q: "What Is a Good On-Time %?", a: "Pilot offices reached 96% in their first month. What matters more is a steady or rising trend against realistic SLAs." },
      { q: "Can I See On-Time % per Person?", a: "Yes, on staff scorecards in Pro. Team-level views are better for spotting system problems." },
      { q: "Is On-Time Performance Tracked on the Free Plan?", a: "Every request is timed against its deadline on all plans. Full analytics to track on-time % over time, by team and by person, is part of Pro and Enterprise." },
      { q: "What Happens to On-Time % When Requests Escalate a Lot?", a: "Frequent escalations usually mean deadlines are being missed, so on-time % falls. Look at which categories escalate most and fix the cause or review the SLA." },
    ],
    related: ["analytics", "analytics/delivery-time", "sla", "sla/reporting", "use-cases/sla-compliance", "solutions/print-room/analytics", "pricing/pro"],
    cta: { title: "Track Your On-Time Rate", body: "Start a 14-day Pro trial and see how often your office delivers on time." },
  },

  // ───────────────────────────── RATINGS ─────────────────────────────
  {
    path: "analytics/rating-analytics",
    title: "Rating Analytics: 1–5★ Feedback on Requests",
    description:
      "Every delivered request can be rated 1–5★. Rating analytics show average scores by team, staff and category, so speed is balanced with quality of service.",
    h1: "Fast Is Good. Fast and 5★ Is Better.",
    eyebrow: "Rating Analytics",
    lead:
      "After delivery, the requester rates the job from 1 to 5 stars. Rating analytics turn those taps into a quality signal that sits next to speed.",
    keywords: ["rating analytics", "request ratings", "staff rating office", "service quality feedback"],
    heroVisual: "delivery",
    sections: [
      {
        type: "prose",
        heading: "Speed Without Quality Is Not Service",
        paragraphs: [
          "A coffee delivered in two minutes but cold, or a print job on time but in black and white instead of colour, would score well on every timer and still disappoint. Ratings catch what timers miss.",
          "Rating takes one tap at the end of each request, so response rates stay high. Pilot offices averaged 4.8★ for staff in their first month.",
        ],
      },
      {
        type: "visual",
        visual: "delivery",
        heading: "The Rating Prompt",
        body: "When a job is delivered, the requester sees who did it and is asked for 1–5★.",
      },
      {
        type: "metrics",
        heading: "Rating Definitions",
        items: [
          { metric: "Average Rating", meaning: "Mean of all 1–5★ ratings in the period." },
          { metric: "Rating Distribution", meaning: "How many ratings fall at each star level; reveals whether a 4.5 is consistent or mixed." },
          { metric: "Low-Rating Rate", meaning: "Share of jobs rated 1 or 2★; the jobs worth reviewing." },
          { metric: "Rating by Category", meaning: "Average rating for coffee, prints, IT, facilities and other types." },
        ],
      },
      {
        type: "scenario",
        heading: "The Lukewarm Coffee Pattern",
        persona: "Priya, Office Manager",
        setting: "Pantry ratings dip slightly though delivery times are fine.",
        timeline: [
          { time: "Week 1", event: "Priya sees more 3★ coffee ratings for the 4th floor." },
          { time: "Week 1", event: "Delivery times there are normal, but the floor is the furthest from the pantry." },
          { time: "Week 2", event: "The pantry starts using a covered tray for that floor." },
          { time: "Week 3", event: "4th-floor coffee ratings recover." },
        ],
        outcome: "The timers said all was well. The ratings said otherwise, and the fix was a tray.",
      },
      {
        type: "comparison",
        heading: "Timers vs Ratings",
        columns: ["Timers", "Ratings"],
        rows: [
          { label: "Measures", a: "How fast", b: "How well" },
          { label: "Source", a: "Recorded states", b: "Requester’s 1–5★" },
          { label: "Catches", a: "Delays", b: "Wrong item, poor quality, attitude" },
        ],
      },
      {
        type: "checklist",
        heading: "Using Ratings Well",
        items: [
          "Look at distribution, not just the average",
          "Review 1–2★ jobs individually",
          "Celebrate staff with a high 5★ share",
          "Encourage everyone to rate every job, including the good ones",
        ],
      },
      {
        type: "prose",
        heading: "Ratings Are About People as Well as Jobs",
        paragraphs: [
          "Every rating in ZapBuzzer is attached to a person: the staff member whose name and photo the requester saw when the job was accepted. That makes ratings personal in a good way. Staff who take care with their work see it reflected; a pantry runner who always brings sugar on the side for the founder’s guests earns stars for it.",
          "Rating analytics then look across those individual ratings to find patterns: a category that dips, a floor that rates lower, a time of day when quality slips because the team is rushed. Pilot offices averaged 4.8★ for staff in their first month, which shows how often everyday service goes right when people can see and credit it.",
          "Treat low ratings as a prompt for a conversation, not a verdict. A 2★ on an AC repair may be about the building’s system rather than the technician.",
        ],
      },
      {"type":"table","heading":"Reading Rating Patterns","headers":["Pattern","Likely Meaning","What to Try"],"rows":[["Low stars, fast deliveries","Rushed or wrong items","Check notes are being read"],["Low stars at one hour","Peak-time pressure","Add cover at that hour"],["Low stars for one item","The item itself","Fix the recipe, stock or printer"],["High stars, slow deliveries","Good work, tight SLA","Review the SLA target"]]},
      {"type":"audience","heading":"Who Reads Ratings","items":[{"role":"Office Manager","benefit":"Sees where quality slips without walking the floors asking people."},{"role":"Team Lead","benefit":"Finds which items or hours draw low stars and coaches on specifics."},{"role":"Staff Member","benefit":"Gets credit when requesters are happy, attached to their own name."}]},
    ],
    faqs: [
      {"q":"What If One Requester Always Rates Low?","a":"Look at the spread rather than single scores. One harsh rater matters less across many requests, and ratings from many requesters give a fairer picture."},
      { q: "Can a Requester Add a Comment to the Rating?", a: "Requests carry notes, but ratings themselves are a 1–5★ tap. Use low ratings as a reason to talk to the requester if the cause is unclear." },
      { q: "Do Ratings Affect SLAs?", a: "No. Ratings measure quality and SLAs measure time. Look at both together for a full view of service." },
      { q: "Who Rates the Request?", a: "The requester, after the job is marked Delivered. It takes one tap from 1 to 5 stars." },
      { q: "Are Ratings Tied to the Staff Member?", a: "Yes. The rating goes to the person who accepted and delivered the job, and appears on their scorecard in Pro." },
      { q: "Can Requesters Skip Rating?", a: "Rating is quick, but treat ratings as a sample of opinion, not a complete survey. Encouraging everyone to rate makes the average more representative." },
      { q: "Is Rating Analytics on Free?", a: "Ratings are collected on all plans. Full rating analytics and scorecards are part of Pro." },
      { q: "What Average Rating Did Pilot Offices See?", a: "Pilot offices averaged 4.8★ across staff in their first month. Use your own trend over time as the main benchmark rather than chasing a single number." },
    ],
    related: ["analytics", "analytics/staff", "features/request-ratings", "mobile-app/ratings", "analytics/delivery-time", "solutions/pantry", "pricing/pro"],
    cta: { title: "Hear What the Office Thinks", body: "Try ZapBuzzer free for 14 days and collect your first ratings." },
  },

  // ───────────────────────────── OFFICE ACTIVITY ─────────────────────────────
  {
    path: "analytics/office-activity-analytics",
    title: "Office Activity Analytics: When the Office Buzzes",
    description:
      "Office activity analytics show when requests peak by hour and weekday, and where they come from, so you can staff pantry, print, IT and facilities for the rush.",
    h1: "Know When the Office Buzzes Most",
    eyebrow: "Office Activity",
    lead:
      "Every office has a rhythm: the 9:30 coffee wave, the pre-meeting print rush, the 3 pm AC complaints. Activity analytics draw that rhythm so you can staff for it.",
    keywords: ["office activity analytics", "peak request hours", "workplace activity heatmap", "office demand patterns"],
    heroVisual: "analytics",
    sections: [
      {
        type: "prose",
        heading: "Demand Is Predictable Once You See It",
        paragraphs: [
          "Staffing problems usually look like performance problems. When the pantry is slow at 11, it’s usually because every meeting room orders at once, not because people are slow. Activity analytics show when requests arrive, so you can match cover to demand.",
          "The data comes straight from request timestamps and destinations. Within a couple of weeks, the shape of your office’s day becomes clear.",
        ],
      },
      {
        type: "visual",
        visual: "analytics",
        heading: "Requests by Hour",
        body: "A bar chart of requests across the working day, filterable by team and weekday.",
      },
      {
        type: "metrics",
        heading: "Activity Definitions",
        items: [
          { metric: "Requests by Hour", meaning: "How many requests are buzzed in each hour of the working day." },
          { metric: "Requests by Weekday", meaning: "Which days are busiest, such as Monday mornings or month-end Fridays." },
          { metric: "Peak Hour", meaning: "The single busiest hour for a team or the whole office." },
          { metric: "Hot Spots", meaning: "Destinations, such as Conference Room B, that generate the most requests." },
        ],
      },
      {
        type: "scenario",
        heading: "Staffing the 11 O’clock Rush",
        persona: "Priya, Office Manager",
        setting: "Complaints that the pantry is slow, but only sometimes.",
        timeline: [
          { time: "Day 1", event: "Priya opens activity analytics for the pantry." },
          { time: "Day 1", event: "Requests spike between 10:45 and 11:15 when meetings start." },
          { time: "Day 2", event: "A second pantry runner shifts their break to cover that window." },
          { time: "Week 2", event: "Accept time in the rush drops and on-time % rises." },
        ],
        outcome: "Same team, same work, better timing.",
      },
      {
        type: "table",
        heading: "Patterns Offices Commonly Find",
        headers: ["Pattern", "Typical Response"],
        rows: [
          ["Coffee peak before morning meetings", "Extra pantry cover in that window"],
          ["Print rush before client meetings", "Encourage buzzing large jobs early"],
          ["AC requests after lunch", "Check building settings for the afternoon"],
          ["Courier pickups late in the day", "Mailroom cover until the last pickup"],
        ],
      },
      {
        type: "audience",
        heading: "Who Uses Activity Data",
        items: [
          { role: "Office Managers", benefit: "Plan shifts and breaks around real demand." },
          { role: "Facilities Leads", benefit: "Spot rooms and times that need attention." },
          { role: "Multi-Site Operators", benefit: "Compare rhythms across locations with multi-location on Pro." },
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Pair Activity With Acceptance Time",
        body: "A peak hour with a fast accept time is fine. A peak hour where accept time shoots up is your staffing gap.",
      },
      {
        type: "prose",
        heading: "Activity Across the Whole Day",
        paragraphs: [
          "Activity data is useful well beyond the pantry. The print room sees a rush before client meetings and at month-end. The IT desk sees a spike when people arrive and connect laptops in meeting rooms. Facilities requests often climb after lunch as the building warms up or the AC overcorrects. The mailroom gets busier late in the day as courier pickups are booked.",
          "Seeing these rhythms side by side helps an office manager plan shared resources. If facilities and IT peak at different times, one flexible person can support both. If every team peaks at 11, that is the hour to avoid scheduling stock deliveries or staff training.",
          "Hot spots are just as useful. When one meeting room produces far more AC and projector requests than the others, the fix is often a maintenance visit rather than more staff.",
        ],
      },
      {"type":"table","heading":"A Typical Weekday Shape","intro":"An illustration of the kind of pattern offices find; yours will differ.","headers":["Time","What Tends to Happen"],"rows":[["9:30–10:30","Coffee and tea wave as people arrive"],["10:30–12:00","Prints before client meetings, IT setup in meeting rooms"],["12:30–14:00","Lunch orders and pantry snacks"],["15:00–16:00","Second coffee wave, facilities tickets as AC complaints rise"],["17:00 onwards","Courier pickups before the evening cut-off"]]},
      {"type":"checklist","heading":"Acting on an Activity Chart","items":["Match pantry shifts to the two coffee peaks.","Restock before the peak, not during it.","Keep one IT person free in the hour before big meetings.","Ask reception to clear courier pickups before the last rush."]},
    ],
    faqs: [
      {"q":"Can Activity Data Help Plan for Events?","a":"Yes. Look at past days with board meetings or client visits to see how demand changed, and staff the pantry and IT desk accordingly."},
      { q: "Can Activity Analytics Show Weekends?", a: "Yes, if your office uses ZapBuzzer at weekends, those requests appear in the weekday breakdown." },
      { q: "Does Activity Data Include Who Made Requests?", a: "Activity analytics focus on timing and destination. Requester-level views depend on role permissions." },
      { q: "How Long Before Patterns Appear?", a: "Usually within two weeks of normal use, since every request adds a timestamp and destination." },
      { q: "Can I See Activity for One Team?", a: "Yes. Filter by team to see when the pantry, print room, IT desk or facilities is busiest." },
      { q: "Does It Work Across Multiple Offices?", a: "With multi-location on Pro, you can view and compare activity for each location." },
      { q: "Which Plan Includes Office Activity Analytics?", a: "Pro and Enterprise, as part of full analytics." },
      { q: "Can Activity Analytics Show Our Busiest Hour for Coffee?", a: "Yes. Every request carries a timestamp and category, so the activity view shows waves like the 9:30 coffee rush or the pre-meeting print peak, and you can staff the pantry for them." },
    ],
    related: ["analytics", "analytics/requests", "analytics/acceptance-time", "sla/analytics", "use-cases/office-manager", "use-cases/pantry-operations", "pricing/pro"],
    cta: { title: "See Your Office’s Rhythm", body: "Start a 14-day Pro trial and find your peak hours." },
  },
];
