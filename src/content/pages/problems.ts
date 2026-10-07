import type { PageContent } from "../types";

const pilotNote =
  "Averages from pilot offices in their first month on ZapBuzzer. Treat them as a reference point, not a guarantee; results depend on your office, team and setup.";

export const pages: PageContent[] = [
  // ───────────────────────────── Chase calls ─────────────────────────────
  {
    path: "use-cases/stop-chase-calls",
    title: "Stop Office Chase Calls for Good",
    description:
      "Chase calls happen when nobody can see a request's status. ZapBuzzer shows who accepted it and the ETA, so nobody has to call to ask if it is coming.",
    h1: "Nobody Should Have to Call to Ask “Is It Coming?”",
    eyebrow: "Problem · Chase Calls",
    lead:
      "A chase call is the second, third or fourth call about the same request. People make it for one reason: they cannot see what is happening. ZapBuzzer shows the status on screen, so there is nothing left to call about.",
    keywords: ["stop chase calls", "office follow up calls", "request status visibility", "office request eta", "reduce follow ups"],
    heroVisual: "request-timeline",
    sections: [
      {
        type: "prose",
        heading: "How Chase Calls Pile Up",
        paragraphs: [
          "The first call places the request. The second call checks it was heard. The third asks where it is. Each one interrupts the person doing the work, which makes the job slower, which causes the next call.",
          "The cause is missing information, not bad manners. Between asking and receiving, the requester hears nothing.",
        ],
      },
      {
        type: "visual",
        visual: "request-timeline",
        heading: "Every Step Visible to the Person Who Asked",
        body:
          "A ZapBuzzer request moves through buzzed, accepted, started with ETA, delivered and rated. The requester sees each change, along with the name and photo of the person handling it.",
      },
      {
        type: "comparison",
        heading: "What the Requester Knows",
        columns: ["Phone and Chat", "ZapBuzzer"],
        rows: [
          { label: "Was It Received?", a: "Unknown until someone replies", b: "Shows as accepted, usually within seconds" },
          { label: "Who Is Handling It?", a: "Unknown", b: "Name and photo" },
          { label: "When Will It Arrive?", a: "Call and ask", b: "ETA on screen" },
          { label: "Is It Late?", a: "You notice when it does not come", b: "Deadline tracked; overdue items escalate" },
          { label: "Was It Done?", a: "You see it, or you don't", b: "Marked delivered, optionally with a photo" },
        ],
      },
      {
        type: "scenario",
        heading: "The Pitch That Needed Prints",
        persona: "Kavya, Sales Lead",
        setting: "24 colour copies needed in 10 minutes.",
        timeline: [
          { time: "10:50", event: "Kavya uploads the PDF and requests 24 colour copies to the meeting room." },
          { time: "10:50", event: "The print room accepts. Kavya sees the operator's name and ETA." },
          { time: "10:58", event: "Prints arrive before her demo." },
        ],
        outcome: "Kavya's words: “Print jobs land at my desk before the client even sits down. Zero chase calls.”",
      },
      {
        type: "stats",
        heading: "Pilot Office Results",
        items: [
          { value: "32s", label: "Average Accept Time" },
          { value: "−87%", label: "Phone Calls" },
          { value: "96%", label: "On-Time Delivery" },
        ],
        note: pilotNote,
      },
      {
        type: "workflow",
        heading: "How the Chase Disappears",
        steps: [
          { title: "Fast Acknowledgement", body: "The whole team is pinged and the first free person accepts, so the requester gets a signal right away." },
          { title: "Named Owner", body: "Seeing a name removes the “did anyone see it?” call." },
          { title: "ETA", body: "Seeing a time removes the “where is it?” call." },
          { title: "Automatic Escalation", body: "If it runs late, the system escalates instead of the requester." },
        ],
      },
      {
        type: "checklist",
        heading: "Make It Stick",
        items: [
          "Ask staff to set an ETA when they start every job.",
          "Tell employees: if you can see the status, do not call.",
          "Make sure staff have the mobile app so accepts happen fast.",
          "Review any request that drew a call anyway and fix the cause.",
        ],
      },
      {
        type: "table",
        heading: "What One Chased Request Really Costs",
        intro: "Using the familiar boss-cabin coffee as the example.",
        headers: ["", "Chased by Phone", "Buzzed in ZapBuzzer"],
        rows: [
          ["Time to arrive", "25 minutes", "4 minutes"],
          ["Phone calls", "3", "0"],
          ["People interrupted", "Requester, pantry, often a third person to find them", "Only the person who accepts"],
          ["Outcome", "1 cold coffee", "1 hot coffee"],
        ],
      },
      {
        type: "audience",
        heading: "Who Stops Chasing",
        items: [
          { role: "Sales Leads", benefit: "Prints and room set-up confirmed on screen before a client meeting." },
          { role: "Executives", benefit: "No stepping out of a call to ask where the coffee is." },
          { role: "Pantry and Print Staff", benefit: "Fewer calls about jobs they are already doing." },
          { role: "Office Managers", benefit: "No longer the person everyone calls to find out what is happening." },
        ],
      },
      {
        type: "prose",
        heading: "Why Showing the Status Works Better Than Rules",
        paragraphs: [
          "Some offices try to fix chase calls with rules: wait ten minutes before following up, or send all requests through one coordinator. Rules add delay and a bottleneck. Showing the status removes the reason to chase at all, and it costs the person doing the job nothing beyond tapping Accept and setting an ETA.",
        ],
      },
    ],
    faqs: [
      { q: "Why Do People Still Call After We Roll Out an App?", a: "Usually because the app does not tell them anything new. ZapBuzzer shows the owner, ETA and status, which answers the questions a chase call asks." },
      { q: "What If the ETA Slips After Someone Accepts?", a: "The requester can still see the request is in progress and who owns it. If it passes the deadline, it escalates to a manager automatically." },
      { q: "How Much Did Phone Calls Drop in Pilot Offices?", a: "Pilot offices saw phone calls fall by 87% in their first month. That is an average across pilots, not a promise for every office." },
      { q: "Do Staff Get Interrupted Less Too?", a: "Yes. Fewer chase calls means the person doing the job is not stopping to answer the phone about that same job." },
      { q: "Why Are Chase Calls an Information Problem Rather Than a Discipline One?", a: "People call because they hear nothing between asking and receiving. Showing the owner, ETA and status gives them that signal, so the reason to call disappears." },
      { q: "What Should We Do When a Request Still Draws a Chase Call?", a: "Review it. Usually the staffer did not set an ETA or the app was not set up to ring on their phone. Fixing that cause is what makes the drop in calls stick." },
      { q: "Does the Requester Find Out When the Job Is Delivered?", a: "Yes. The request is marked delivered, optionally with a photo, and the requester is prompted to rate it, so there is no need to call to check it arrived." },
      { q: "What Can Staff Do to Prevent Chase Calls?", a: "Two habits matter most: accept quickly and set an ETA when starting each job. Those two signals answer the questions a chase call would ask." },
    ],
    related: ["use-cases/reduce-phone-calls", "features/eta-tracking", "features/request-tracking", "use-cases/sales-team", "feature-comparison/vs-phone-calls", "free-trial"],
    cta: { title: "End the Chase", body: "Try ZapBuzzer free for 14 days and see how many calls your office stops making." },
  },

  // ───────────────────────────── WhatsApp ─────────────────────────────
  {
    path: "use-cases/reduce-whatsapp-requests",
    title: "Move Office Requests Out of WhatsApp",
    description:
      "The pantry WhatsApp group buries orders under chatter. ZapBuzzer turns requests into tracked jobs, and on Pro still pings staff on WhatsApp itself.",
    h1: "Your Pantry WhatsApp Group Can Finally Go Quiet",
    eyebrow: "Problem · WhatsApp Requests",
    lead:
      "WhatsApp groups are where office requests go to get lost: orders mixed with good-morning messages, nobody sure who replied, nothing timed. ZapBuzzer keeps the quick ping and adds a named owner, a deadline and a record.",
    keywords: ["office whatsapp group requests", "pantry whatsapp group", "replace whatsapp office requests", "whatsapp request tracking", "office request app"],
    heroVisual: "before-after",
    sections: [
      {
        type: "prose",
        heading: "Why WhatsApp Groups Break",
        paragraphs: [
          "A group chat is a conversation, not a queue. A coffee order posted at 10:02 scrolls out of view by 10:05. Two people reply “ok”, so each assumes the other has it. Someone sends a voice note with no location.",
          "There is no deadline, no owner and no record. When a request is missed, the chat history starts an argument instead of settling it.",
        ],
      },
      {
        type: "comparison",
        heading: "WhatsApp Group vs ZapBuzzer",
        columns: ["Pantry WhatsApp Group", "ZapBuzzer"],
        rows: [
          { label: "Request Format", a: "Free text, voice notes, forwards", b: "Catalogue item, destination and note" },
          { label: "Ownership", a: "Whoever says ok first, maybe", b: "Whoever taps Accept first becomes the owner" },
          { label: "Missed Messages", a: "Scrolled away", b: "Pings repeat until accepted" },
          { label: "Deadline", a: "None", b: "Every request is timed" },
          { label: "Record", a: "Chat history", b: "Status, timings, ratings and audit log" },
        ],
      },
      {
        type: "visual",
        visual: "notification-flow",
        heading: "Keep the Ping, Lose the Group",
        body:
          "On Pro, ZapBuzzer can notify staff on WhatsApp and Telegram as well as the app and email. Staff still hear about requests where they already look; the request itself lives in a tracked queue.",
      },
      {
        type: "scenario",
        heading: "The 9 A.m. Coffee Rush",
        persona: "Priya, Office Manager",
        setting: "Twelve coffee orders in ten minutes, two pantry staff.",
        timeline: [
          { time: "09:00", event: "Orders arrive as buzzes, each with a destination." },
          { time: "09:00", event: "Both pantry staff are pinged; each order is accepted by one of them." },
          { time: "09:12", event: "All twelve delivered; nobody posted in the group." },
        ],
        outcome: "Priya's words: “Coffee arrives before anyone asks twice. The pantry WhatsApp group is finally quiet.”",
      },
      {
        type: "stats",
        heading: "Pilot Office Results",
        items: [
          { value: "32s", label: "Average Accept Time" },
          { value: "96%", label: "On-Time Delivery" },
          { value: "4.8★", label: "Average Staff Rating" },
        ],
        note: pilotNote,
      },
      {
        type: "checklist",
        heading: "Moving Off the Group",
        items: [
          "Turn the most common group messages into catalogue items.",
          "On Pro, connect WhatsApp pings for staff who rely on it.",
          "Pin a message in the group: requests now go through ZapBuzzer.",
          "After a week, stop accepting requests in the group.",
          "Keep the group for social chat if people like it.",
        ],
      },
      {
        type: "problem-solution",
        heading: "What WhatsApp Is Good at, and What It Is Not",
        intro: "WhatsApp is fine for reaching people. It is just a poor way to run a queue.",
        problem: {
          title: "Using a Group as the Queue",
          points: [
            "Orders compete with greetings, forwards and photos.",
            "“Ok” from two people means nobody is sure who owns it.",
            "A missed order leaves no trace until someone complains.",
            "New staff must scroll back to understand anything.",
          ],
        },
        solution: {
          title: "Using WhatsApp as a Ping",
          points: [
            "The request lives in ZapBuzzer with item, room and note.",
            "WhatsApp (on Pro) just tells staff something is waiting.",
            "Accepting in the app names one owner for everyone to see.",
            "The record stays, timed and rated.",
          ],
        },
      },
      {
        type: "visual",
        visual: "staff-queue",
        heading: "What Pantry Staff See Instead of a Chat",
        body:
          "A short list of open requests, each with its destination and note and an Accept button. When a colleague takes one, it drops off everyone else's list, which is exactly what a group chat cannot do.",
      },
    ],
    faqs: [
      { q: "Do Staff Still Get WhatsApp Messages?", a: "On Pro, yes: ZapBuzzer can ping staff on WhatsApp and Telegram alongside the app and email. On Free, notifications are by email and the app." },
      { q: "How Is ZapBuzzer Different From a WhatsApp Ordering Bot?", a: "A bot mostly passes messages along. In ZapBuzzer, notifications are only one part. The core is the request itself: a catalogue item with an owner, a deadline, a status and a rating." },
      { q: "What About Requests That Do Not Fit the Catalogue?", a: "Add a note to the closest item, or add a new item. Most offices find a short catalogue covers the majority of requests." },
      { q: "Will People Resist Moving Off WhatsApp?", a: "Requesters usually switch quickly because buzzing is faster than typing. The key is staff responding through ZapBuzzer so the new way clearly works better." },
      { q: "Can We Keep the Old Group for Announcements?", a: "Yes. Many offices keep a group for social chat and notices and simply stop taking requests there. What matters is that each order lives where someone owns it and it is timed." },
      { q: "How Long Does It Take to Move Requests Off the WhatsApp Group?", a: "Setup takes an afternoon. Habits take a week or two, mostly depending on whether staff consistently respond through ZapBuzzer rather than the group." },
      { q: "Why Do Requests Get Lost in WhatsApp Groups?", a: "Orders get mixed with good-morning messages, two people reply “ok” and nobody is sure who owns it, and nothing is timed. ZapBuzzer gives each request one owner, a deadline and a record." },
      { q: "Do Employees Need WhatsApp to Send Requests?", a: "No. Employees buzz requests from the web or mobile app. On Pro, WhatsApp is one of the channels used to ping staff, alongside the app, Telegram and email." },
    ],
    related: ["feature-comparison/vs-whatsapp", "notifications/whatsapp-notifications", "solutions/pantry", "use-cases/office-manager", "use-cases/prevent-lost-requests", "pricing/pro-plan"],
    cta: { title: "Quiet the Group", body: "Start the 14-day trial and move your pantry orders into a tracked queue." },
  },

  // ───────────────────────────── Phone calls ─────────────────────────────
  {
    path: "use-cases/reduce-phone-calls",
    title: "Reduce Internal Office Phone Calls",
    description:
      "Pilot offices cut internal phone calls by 87% in their first month on ZapBuzzer. Here is where those calls come from and how one tap replaces them.",
    h1: "Fewer Calls, and a Much Quieter Office",
    eyebrow: "Problem · Phone Calls",
    lead:
      "Internal phone calls for coffee, prints and IT help interrupt two people at once. Pilot offices reduced phone calls by 87% in their first month on ZapBuzzer by replacing them with a tap, a ping and a visible status.",
    keywords: ["reduce office phone calls", "internal phone calls office", "pantry extension calls", "office noise reduction", "quiet office"],
    heroVisual: "before-after",
    sections: [
      {
        type: "prose",
        heading: "Where Internal Calls Come From",
        paragraphs: [
          "Most internal calls fall into three groups: placing a request, checking a request, and escalating a request that was missed. In a busy office the pantry extension and the IT desk line ring all morning.",
          "Each call needs both people free at the same moment. That is why the classic coffee to the boss cabin can take three calls and 25 minutes.",
        ],
      },
      {
        type: "visual",
        visual: "before-after",
        heading: "The Same Coffee, Twice",
        body: "Before: 25 minutes, three phone calls, one cold coffee. After: four minutes, zero calls, one hot coffee.",
      },
      {
        type: "table",
        heading: "Which Call Each Feature Replaces",
        headers: ["Call Type", "Replaced By"],
        rows: [
          ["Placing the request", "One tap on a catalogue item with destination and note"],
          ["“Did you get my message?”", "Accepted status with the owner's name and photo"],
          ["“Where is it?”", "ETA shown once the job is started"],
          ["Calling the manager when it is late", "Automatic escalation on deadline (escalation chain on Pro)"],
        ],
      },
      {
        type: "stats",
        heading: "Pilot Office Results",
        items: [
          { value: "−87%", label: "Phone Calls" },
          { value: "32s", label: "Average Accept Time" },
          { value: "96%", label: "On-Time Delivery" },
          { value: "4.8★", label: "Average Staff Rating" },
        ],
        note: pilotNote,
      },
      {
        type: "scenario",
        heading: "A Board Call, Uninterrupted",
        persona: "Aarav, CEO",
        setting: "Board call in the boss cabin.",
        timeline: [
          { time: "10:02", event: "Aarav taps Coffee → Boss Cabin." },
          { time: "10:02", event: "The buzz reaches the pantry on Telegram, and Raj accepts within 12 seconds." },
          { time: "10:06", event: "Coffee delivered. No call made." },
        ],
        outcome: "“The office runs quieter. Nobody's shouting names down the hall.” — Aarav Sharma, Founder & CEO, Acme HQ (Pune)",
      },
      {
        type: "callout",
        tone: "info",
        title: "Measure Your Own Baseline",
        body:
          "Before rollout, ask the pantry and IT desk to tally calls for a week. Compare after a month. Your drop may be bigger or smaller than the pilot average, and your own number is the one that matters.",
      },
      {
        type: "comparison",
        heading: "Phone Extension vs One Tap",
        columns: ["Calling an Extension", "Buzzing in ZapBuzzer"],
        rows: [
          { label: "Needs Both People Free", a: "Yes, at the same moment", b: "No, staff accept when they are free" },
          { label: "Reaches the Team", a: "One phone, one person", b: "Whole team, on every enabled channel" },
          { label: "Details", a: "Spoken, easily misheard", b: "Item, destination and written note" },
          { label: "Noise", a: "Ringing and shouting across the floor", b: "Silent for everyone except the staff concerned" },
          { label: "Record", a: "None", b: "Timed, owned and rated" },
        ],
      },
      {
        type: "workflow",
        heading: "Rolling Out to Cut Calls",
        steps: [
          { title: "Baseline", body: "Tally calls to the pantry, print room and IT desk for one week." },
          { title: "Catalogue", body: "Turn the most-called reasons into catalogue items with destinations." },
          { title: "Staff Phones", body: "Install the mobile app for staff so buzzes ring through even on silent." },
          { title: "Redirect", body: "When someone calls with a routine ask, staff politely ask them to buzz it." },
          { title: "Compare", body: "Recount after a month and share the drop with the office." },
        ],
      },
      {
        type: "prose",
        heading: "The Quiet Office",
        paragraphs: [
          "ZapBuzzer's mission is to build the quiet office. Fewer calls is the part you can measure. What people notice is the floor itself: no extension ringing out, nobody calling a name down the corridor, fewer meetings paused while someone takes a call about tea.",
        ],
      },
      {
        "type": "metrics",
        "heading": "Measuring the Drop in Calls",
        "intro": "Pilot offices saw 87% fewer phone calls in month one. To measure your own:",
        "items": [
          {
            "metric": "Calls to Pantry or IT per Day",
            "meaning": "Count for a week before rollout and again a month after."
          },
          {
            "metric": "Requests Raised in ZapBuzzer",
            "meaning": "Should rise as calls fall: the same needs, a quieter channel."
          },
          {
            "metric": "Accept Time",
            "meaning": "Fast accepts remove the main reason to call and check."
          }
        ]
      },
    ],
    faqs: [
      { q: "What About Truly Urgent Requests?", a: "The mobile app still rings when a phone is locked or set to silent, and it offers one tap to summon staff or security or raise an emergency." },
      { q: "Does the 87% Figure Apply to Every Office?", a: "It is the average drop measured across pilot offices during month one. Offices with heavy phone use for requests tend to see the clearest change." },
      { q: "Will Staff Miss Requests Without a Ringing Phone?", a: "A locked or silenced phone still rings with the mobile app, and notifications repeat until someone accepts." },
      { q: "Can We Still Call When Needed?", a: "Of course. ZapBuzzer removes routine calls, so the phone is free for the conversations that actually need it." },
      { q: "Which Calls Disappear First?", a: "Usually the follow-ups: “did you get my message?” and “where is it?”. Those are answered on screen by the accepted status and the ETA, so they go before the initial request calls do." },
      { q: "How Should We Measure the Reduction?", a: "Ask the pantry, print room and IT desk to tally calls for one week before rollout and one week after the first month. It is rough, but it is your office's own number." },
      { q: "What Should Staff Say When Someone Still Phones With a Routine Request?", a: "Politely ask them to buzz it instead. Once requesters see that buzzing gets a faster, visible response, most routine calls stop on their own." },
      { q: "What Changes on the Office Floor When Calls Drop?", a: "Fewer extensions ringing out, nobody calling names down the corridor and fewer meetings paused for a call about tea. That is the quiet office ZapBuzzer is built for." },
    ],
    related: ["use-cases/stop-chase-calls", "feature-comparison/vs-phone-calls", "mobile-app/mobile-notifications", "workflows/coffee-request", "use-cases/ceo", "free-trial"],
    cta: { title: "Count Your Calls, Then Cut Them", body: "Start the free trial and compare your call volume after the first month." },
  },

  // ───────────────────────────── Lost requests ─────────────────────────────
  {
    path: "use-cases/prevent-lost-requests",
    title: "Prevent Lost Office Requests",
    description:
      "Requests get lost in DMs, groups and memory. ZapBuzzer gives every request an owner, a deadline and repeat pings, so none quietly disappear.",
    h1: "No Request Should Quietly Disappear",
    eyebrow: "Problem · Lost Requests",
    lead:
      "A lost request is worse than a slow one: nobody is working on it and nobody knows. ZapBuzzer closes the three gaps where requests get lost: nobody receives it, nobody owns it, or nobody finishes it.",
    keywords: ["lost office requests", "missed requests office", "request tracking office", "dropped tickets", "office request ownership"],
    heroVisual: "escalation",
    sections: [
      {
        type: "prose",
        heading: "Three Places Requests Get Lost",
        paragraphs: [
          "Not received: the message went to a group nobody was reading, or to one person on leave. Not owned: two people saw it and each assumed the other would act. Not finished: someone accepted it, got pulled into something else and forgot.",
          "ZapBuzzer was started in an office where print jobs got lost in a WhatsApp group and IT tickets died in someone's DMs. Each feature below closes one of those gaps.",
        ],
      },
      {
        type: "problem-solution",
        heading: "Each Gap, Closed",
        problem: {
          title: "Where It Slips",
          points: [
            "Sent to the wrong person or a silent group.",
            "Seen by many, owned by none.",
            "Accepted, then forgotten.",
          ],
        },
        solution: {
          title: "What Catches It",
          points: [
            "Routed to the whole right team; pings repeat until accepted.",
            "First accept wins, with a named owner.",
            "Deadline on every request; overdue ones escalate.",
          ],
        },
      },
      {
        type: "visual",
        visual: "escalation",
        heading: "A Safety Net That Climbs",
        body: "When a request passes its deadline, it escalates to a manager. On Pro, an escalation chain keeps climbing until someone acts.",
      },
      {
        type: "comparison",
        heading: "DMs vs a Routed Queue",
        columns: ["DMs and Groups", "ZapBuzzer"],
        rows: [
          { label: "Person on Leave", a: "Request waits", b: "Whole team pinged" },
          { label: "Nobody Responds", a: "Silence", b: "Pings repeat" },
          { label: "Owner Forgets", a: "Found out days later", b: "Escalates on deadline" },
          { label: "Proof It Was Done", a: "None", b: "Delivered status, optional photo, rating" },
        ],
      },
      {
        type: "scenario",
        heading: "A Facilities Ticket That Would Have Rotted",
        persona: "Deepak, Admin Head",
        setting: "AC complaint in Conference Room B, technician pulled away mid-job.",
        timeline: [
          { time: "13:20", event: "Om taps Facilities → Conference Room B." },
          { time: "13:21", event: "A technician accepts, then is called to another floor." },
          { time: "13:35", event: "The 15-minute deadline passes; the request escalates to Deepak." },
          { time: "13:40", event: "Deepak reassigns and the fix is done." },
        ],
        outcome: "Deepak: “Facilities tickets auto-escalate now. Nothing rots in someone's DMs.”",
      },
      {
        type: "stats",
        heading: "Pilot Office Results",
        items: [
          { value: "96%", label: "On-Time Delivery" },
          { value: "32s", label: "Average Accept Time" },
        ],
        note: pilotNote,
      },
      {
        type: "visual",
        visual: "notification-flow",
        heading: "Received, on Every Channel",
        body:
          "The first gap is making sure the request is received. A buzz goes to the app and email on every plan, and to Telegram and WhatsApp as well on Pro, all at once, and keeps pinging until someone accepts. A request cannot sit in an unread group.",
      },
      {
        type: "metrics",
        heading: "Signals That Requests Are Slipping",
        items: [
          { metric: "Unaccepted Requests", meaning: "Items still waiting for an owner. Should be near zero most of the day." },
          { metric: "Overdue Requests", meaning: "Accepted but past deadline. These are the ones that used to get lost." },
          { metric: "Escalations per Week", meaning: "How often the safety net catches something, and in which category." },
          { metric: "On-Time Delivery", meaning: "The overall health check. Pilot offices averaged 96% in month one." },
        ],
      },
      {
        type: "checklist",
        heading: "Close the Gaps in Your Office",
        items: [
          "Route each category to a team, never to a single person.",
          "Make sure every staff member has notifications working before launch.",
          "Set a deadline for every category, even generous ones.",
          "On Pro, end the escalation chain with someone who can reassign work.",
          "Check the overdue list daily for the first two weeks.",
        ],
      },
      {
        "type": "checklist",
        "heading": "Is Your Office Losing Requests? A Quick Audit",
        "intro": "Answer these honestly for one ordinary week.",
        "items": [
          "Are requests sent to one named person rather than a team?",
          "Do people still use DMs or personal phone numbers to ask for help?",
          "Would anyone notice if a request was never picked up?",
          "Does anything happen automatically when a job runs late?",
          "Can you say, today, how many requests the pantry handled yesterday?"
        ]
      },
      {
        "type": "prose",
        "heading": "Lost Requests Cost Trust, Not Just Time",
        "paragraphs": [
          "When a print job or an AC complaint disappears once, people adapt: they ask twice, they call as well as message, they walk over to check. That double-asking is what floods the pantry and IT desk, and it continues long after the original gap is fixed.",
          "Getting trust back takes a visible record. When requesters can see their request was received, who took it and when it was delivered, the habit of asking twice fades within a few weeks."
        ]
      },
    ],
    faqs: [
      { q: "How Does ZapBuzzer Stop a Request From Sitting Unowned?", a: "Notifications repeat until someone accepts. If the deadline still passes, the request auto-escalates to a manager, so it cannot quietly sit unowned." },
      { q: "Do the Lost-Request Safeguards Work on the Free Plan?", a: "The basics do: notifications repeat until someone accepts and every request is timed. The SLA escalation chain that pushes overdue requests up to managers is part of Pro." },
      { q: "Can We See Requests That Were Never Completed?", a: "Yes. Open and overdue requests stay visible in the queue until they are delivered, so they cannot vanish." },
      { q: "How Far Back Can We Check Whether a Request Was Lost?", a: "Free keeps the last 30 days of history. Pro adds audit logs and reports for a longer record." },
      { q: "What If a Staff Member Accepts and Then Goes on Break?", a: "The request stays theirs and keeps its deadline. If it is not delivered in time, it escalates so a manager can reassign it before the requester has to chase." },
      { q: "Does Routing to a Team Cause Duplicate Work?", a: "No. Only one person can accept a request. Once they do, everyone else sees it is taken." },
      { q: "Can We Prove a Request Was Completed?", a: "Each request is marked delivered, optionally with a photo, and then rated by the requester. That is usually enough to settle any “I never got it” question." },
      { q: "Where Do Office Requests Usually Get Lost?", a: "In group chats where messages scroll away, in someone’s DMs, or in a hallway ask that nobody wrote down. Putting every request into one tracked queue removes those hiding places." },
    ],
    related: ["sla-and-escalation/overdue-requests", "sla-and-escalation/automatic-escalation", "features/request-tracking", "use-cases/admin-team", "use-cases/reduce-whatsapp-requests", "pricing/pro-plan"],
    cta: { title: "Catch Every Request", body: "Try ZapBuzzer free for 14 days, with SLA timers and escalation included in the Pro trial." },
  },

  // ───────────────────────────── Response time ─────────────────────────────
  {
    path: "use-cases/improve-response-time",
    title: "Improve Office Request Response Time",
    description:
      "Pilot offices averaged a 32-second accept time with ZapBuzzer. See how team-wide pings and first-accept-wins make office response time faster.",
    h1: "From “Someone Will Get to It” to 32 Seconds",
    eyebrow: "Problem · Response Time",
    lead:
      "Response time is mostly waiting for the right person to notice. ZapBuzzer pings the whole team on every channel at once and lets the first free person take it. Pilot offices averaged a 32-second accept time in their first month.",
    keywords: ["office response time", "request accept time", "faster office service", "first accept wins", "response time metrics"],
    heroVisual: "acceptance",
    sections: [
      {
        type: "prose",
        heading: "Where Response Time Goes",
        paragraphs: [
          "Break a slow request into parts: the time until someone notices, the time until someone commits, and the time to do the job. In most offices the first two are the largest, and they are pure waiting.",
          "A request sent to one person waits for that person. A request sent to a team on every channel waits only for the fastest free person.",
        ],
      },
      {
        type: "visual",
        visual: "acceptance",
        heading: "First-Accept-Wins",
        body: "The request goes to the whole team. Whoever is free taps Accept and owns it; the others carry on. No negotiating, no duplicates.",
      },
      {
        type: "table",
        heading: "Response Time, Broken Down",
        headers: ["Phase", "Typical Delay Without a System", "What ZapBuzzer Does"],
        rows: [
          ["Notice", "Waits for one person to check messages", "Pings app and email, plus Telegram and WhatsApp on Pro, repeating until accepted"],
          ["Commit", "Waits for someone to reply", "First tap on Accept owns it"],
          ["Deliver", "Untracked", "ETA, deadline and escalation"],
        ],
      },
      {
        type: "stats",
        heading: "Pilot Office Results",
        items: [
          { value: "32s", label: "Average Accept Time" },
          { value: "96%", label: "On-Time Delivery" },
          { value: "4.8★", label: "Average Staff Rating" },
        ],
        note: pilotNote,
      },
      {
        type: "scenario",
        heading: "HDMI in Three Minutes",
        persona: "Tanvi, Designer",
        setting: "Client review, no HDMI cable in the room.",
        timeline: [
          { time: "15:57", event: "Tanvi taps IT → HDMI needed." },
          { time: "15:57", event: "IT desk pinged; Priya accepts." },
          { time: "16:00", event: "Cable delivered." },
        ],
        outcome: "Three minutes from tap to cable, with nobody calling anyone.",
      },
      {
        type: "metrics",
        heading: "Response Metrics to Track",
        items: [
          { metric: "Accept Time", meaning: "Buzz to Accept. Shows how quickly the team notices and commits." },
          { metric: "Delivery Time", meaning: "Accept to Delivered. Shows how long the job itself takes." },
          { metric: "On-Time Rate", meaning: "Share delivered before the deadline." },
          { metric: "Accept Time by Hour", meaning: "Shows the hours when you are short of staff." },
        ],
      },
      {
        type: "comparison",
        heading: "Single-Person Routing vs Team Routing",
        columns: ["Sent to One Person", "Sent to the Team, First Accept Wins"],
        rows: [
          { label: "Person Busy or Away", a: "Request waits", b: "Someone else takes it" },
          { label: "Fastest Response", a: "That person's response", b: "The fastest free person's response" },
          { label: "Duplicate Work", a: "Rare, but slow", b: "Prevented: one owner only" },
          { label: "Requester Knows", a: "When they reply", b: "Name, photo and ETA on accept" },
        ],
      },
      {
        type: "checklist",
        heading: "Get Your Accept Time Down",
        items: [
          "Put every staff member who can handle a category on that category's team.",
          "Install the Android app on staff phones so buzzes ring on silent or locked screens.",
          "On Pro, add Telegram or WhatsApp pings for staff who live in those apps.",
          "Check accept time by hour and add cover where it spikes.",
          "Share the weekly number with staff; most teams enjoy beating it.",
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Accept Time Is Not Delivery Time",
        body:
          "A fast accept tells the requester someone is on it. Delivery still depends on the job: a coffee takes minutes, an AC part may take longer. Track both, and use deadlines to keep delivery on track.",
      },
      {
        "type": "scenario",
        "heading": "Same Projector, Two Tuesdays",
        "persona": "Om, Engineer",
        "setting": "A projector fails ten minutes before a sprint review.",
        "timeline": [
          {
            "time": "Before",
            "event": "Om messages the one facilities person he knows. She is on leave; nobody replies for 20 minutes."
          },
          {
            "time": "After, 9:50",
            "event": "Om taps IT & Facilities and picks Conference Room B."
          },
          {
            "time": "9:50",
            "event": "Everyone on the team is pinged; Deepak accepts within the minute."
          },
          {
            "time": "9:56",
            "event": "Projector working, request delivered and rated."
          }
        ],
        "outcome": "The speed came from routing to a team instead of a person, not from anyone working harder."
      },
      {
        "type": "callout",
        "tone": "tip",
        "title": "Fix Accept Time First",
        "body": "Accept time is the easiest number to move. Adding Telegram or WhatsApp pings (Pro) and keeping enough people on each team in the busy hours usually cuts it before anything else changes."
      },
    ],
    faqs: [
      {
        "q": "What Counts as Response Time in ZapBuzzer?",
        "a": "Usually accept time: the gap between a request being buzzed and someone tapping Accept. Delivery time and on-time rate are tracked separately, so you can tell a slow pickup from a slow job."
      },
      { q: "Is 32 Seconds Typical?", a: "It is the average accept time measured across pilot offices during month one. It measures time to accept, not to deliver." },
      { q: "Does Pinging Everyone Cause Chaos?", a: "No, because only one person can accept. The moment someone does, the others see it is taken." },
      { q: "Which Channels Speed Things Up Most?", a: "The mobile app still rings when a phone is locked or silenced. On Pro, Telegram and WhatsApp pings reach staff where they already are." },
      { q: "Can We See Response Time per Staff Member?", a: "Yes, analytics and scorecards show who is fastest. Full analytics and scorecards are part of Pro." },
      { q: "What Slows Accept Time Down Most?", a: "Notifications that staff do not hear. Make sure the mobile app is installed and allowed to ring, and on Pro add the channel each person actually checks." },
      { q: "Should We Set Targets for Staff?", a: "Share the team number first and let people see it improve. Individual targets work better once everyone trusts the data." },
      { q: "Does Faster Accept Mean Rushed Work?", a: "Accepting only claims the job. Delivery still has its own deadline and rating, so quality is tracked separately from speed." },
    ],
    related: ["features/first-accept-wins", "analytics/acceptance-time-analytics", "analytics/response-time-analytics", "notifications/multi-channel-notifications", "use-cases/it-manager", "pricing/pro-plan"],
    cta: { title: "Measure Your Accept Time", body: "Start the 14-day trial and see your office's average accept time by the end of week one." },
  },

  // ───────────────────────────── Tracking ─────────────────────────────
  {
    path: "use-cases/track-office-requests",
    title: "Track Every Office Request End to End",
    description:
      "Track office requests from buzz to rating: status, owner, ETA, deadline and delivery in one queue, with analytics on volume, timing and ratings.",
    h1: "Know Where Every Request Stands",
    eyebrow: "Problem · Tracking",
    lead:
      "If you cannot see your office's requests, you cannot manage them. ZapBuzzer tracks every request from the tap to the rating, and turns them into reports you can actually use.",
    keywords: ["track office requests", "office request tracking", "internal request crm", "request status", "office request analytics"],
    heroVisual: "request-dashboard",
    sections: [
      {
        type: "prose",
        heading: "Untracked Work Is Invisible Work",
        paragraphs: [
          "Offices handle hundreds of small requests a week, and most leave no trace. Nobody can say how many coffees, prints or IT fixes happened, how long they took, or who did them.",
          "ZapBuzzer calls itself an internal-request CRM: it keeps a record of every request inside the office, the way a sales CRM keeps a record of every customer. Each request becomes a record that moves through clear stages.",
        ],
      },
      {
        type: "visual",
        visual: "request-dashboard",
        heading: "One Live View",
        body: "All open requests, their status, owner, ETA and deadline. Overdue items stand out so you know where to look.",
      },
      {
        type: "table",
        heading: "What Each Stage Records",
        headers: ["Stage", "What Is Captured"],
        rows: [
          ["Buzzed", "Item, destination, note, requester, time"],
          ["Accepted", "Who accepted and how fast"],
          ["Started", "ETA"],
          ["Delivered", "Time and an optional photo"],
          ["Rated", "1–5★ from the requester"],
        ],
      },
      {
        type: "comparison",
        heading: "Spreadsheet Log vs ZapBuzzer",
        columns: ["Manual Log", "ZapBuzzer"],
        rows: [
          { label: "Data Entry", a: "Someone types it later, if at all", b: "Captured as the request happens" },
          { label: "Timing", a: "Approximate", b: "Every request timed" },
          { label: "Ownership", a: "Often blank", b: "Named owner" },
          { label: "Quality", a: "Not captured", b: "Requester rating" },
        ],
      },
      {
        type: "scenario",
        heading: "A Week in Review",
        persona: "Vivek, Operations",
        setting: "Friday afternoon, preparing a summary for leadership.",
        timeline: [
          { time: "16:00", event: "Vivek opens analytics: volume by category and busiest hours." },
          { time: "16:10", event: "He notes Tuesday's 1 p.m. lunch spike and the print room's rating." },
          { time: "16:20", event: "He checks the owner-only spend on team lunches." },
        ],
        outcome: "A summary built from records instead of memory, in twenty minutes.",
      },
      {
        type: "stats",
        heading: "Pilot Office Results",
        items: [
          { value: "96%", label: "On-Time Delivery" },
          { value: "4.8★", label: "Average Staff Rating" },
        ],
        note: pilotNote,
      },
      {
        type: "visual",
        visual: "request-timeline",
        heading: "One Request, Start to Finish",
        body:
          "Every request carries its own timeline: when it was buzzed, routed, accepted, started, delivered and rated. Open any one to see exactly where the minutes went.",
      },
      {
        type: "metrics",
        heading: "Questions Tracking Answers",
        items: [
          { metric: "How Many Requests?", meaning: "Volume by category, team and location, per day or week." },
          { metric: "How Fast?", meaning: "Accept time and delivery time, overall and by hour." },
          { metric: "How Well?", meaning: "On-time rate and average rating per team and person." },
          { metric: "When?", meaning: "The hours the office buzzes most, for staffing." },
          { metric: "At What Cost?", meaning: "Owner-only spend on requests like lunch orders." },
        ],
      },
      {
        type: "audience",
        heading: "Who Uses the Tracking",
        items: [
          { role: "Employees", benefit: "See their own request's status without asking." },
          { role: "Staff", benefit: "A clear queue and credit for what they delivered." },
          { role: "Office and Admin Managers", benefit: "Live view of open and overdue work." },
          { role: "Owners", benefit: "Volume, service levels and spend in one place." },
        ],
      },
      {
        type: "prose",
        heading: "Tracking Without Extra Work",
        paragraphs: [
          "The usual objection to tracking is the admin it creates: forms, logs, end-of-day spreadsheets. ZapBuzzer avoids that because the record is the work. An employee buzzing coffee creates the request; a pantry staffer tapping Accept records ownership and timing; marking it delivered closes it. Nobody types anything that was not already part of getting the coffee to the boss cabin.",
          "That is also why the data is trustworthy. It is captured at the moment each step happens, not reconstructed from memory at 6 p.m.",
        ],
      },
      {
        "type": "metrics",
        "heading": "Numbers to Check Every Week",
        "items": [
          {
            "metric": "Requests by Category",
            "meaning": "Shows where support staff time actually goes, pantry versus print versus IT."
          },
          {
            "metric": "Overdue Requests",
            "meaning": "How many crossed their deadline, and in which category."
          },
          {
            "metric": "Average Rating",
            "meaning": "A quick read on how requesters feel about the service."
          },
          {
            "metric": "Busiest Hours",
            "meaning": "When the office buzzes most, and when to schedule more help."
          }
        ]
      },
      {
        "type": "callout",
        "tone": "info",
        "title": "How Far Back Tracking Goes",
        "body": "Free keeps the last 30 days of request history. Pro adds full analytics, audit logs and reports for longer-term tracking and month-on-month comparisons."
      },
    ],
    faqs: [
      { q: "Do Staff Have to Log Requests by Hand?", a: "No. The record starts when the employee taps Buzz, and each accept, start and delivery adds its own timestamp. Nobody fills in a spreadsheet." },
      { q: "How Far Back Can We See Requests?", a: "Free shows the last 30 days of history. Pro adds full analytics, audit logs and reports." },
      { q: "Can Employees Track Their Own Requests?", a: "Yes. Requesters see status, the owner's name and photo, and the ETA." },
      { q: "Can We Track Across Locations?", a: "Multi-location is part of Pro, so requests from different offices are tracked in one workspace." },
      { q: "Can We Pull the Data Into Other Systems?", a: "Enterprise includes a REST API and webhooks. Talk to us for details." },
      { q: "What Does a Request Record Include?", a: "The item, destination, note, requester, who accepted it, the ETA, delivery time, an optional photo and the rating. Every step is timestamped." },
      { q: "Is Tracking Useful in a Small Office?", a: "Yes. Even with ten people on the Free plan, seeing the last 30 days of requests shows patterns you would otherwise miss, like the daily 4 p.m. tea rush." },
      { q: "Can Managers See Every Open Request at Once?", a: "Yes, depending on role permissions. Managers can see open, in-progress and overdue requests across teams in one place, so they know where things stand without asking." },
    ],
    related: ["features/request-tracking", "features/request-status", "analytics/request-analytics", "use-cases/operations-team", "features/request-history", "pricing/pro-plan"],
    cta: { title: "Start Your Request Record", body: "Try ZapBuzzer free and see your first week of office requests in one place." },
  },

  // ───────────────────────────── Accountability ─────────────────────────────
  {
    path: "use-cases/staff-accountability",
    title: "Fair Staff Accountability for Office Teams",
    description:
      "Fair staff accountability: every accepted and delivered request is credited to the person who did it, rated and logged, so good work gets noticed.",
    h1: "Accountability That Is Fair to the People Doing the Work",
    eyebrow: "Problem · Accountability",
    lead:
      "“I thought you'd do it” usually comes from how work is handed out, not from the people. ZapBuzzer makes it clear who owns each request and gives credit automatically, so accountability feels fair to staff and useful to managers.",
    keywords: ["staff accountability office", "support staff performance", "office staff scorecard", "fair attribution", "staff ratings"],
    heroVisual: "scorecard",
    sections: [
      {
        type: "prose",
        heading: "Blame Without Data",
        paragraphs: [
          "When work is shared and unrecorded, accountability turns into blame. The staff member who happened to be nearest gets scolded; the one who quietly delivered forty requests gets nothing.",
          "ZapBuzzer is built to be fair to staff. Instead of nagging them, it gives them scorecards and fair credit for their work.",
        ],
      },
      {
        type: "problem-solution",
        heading: "From Blame to Credit",
        problem: {
          title: "Without Records",
          points: ["Ownership decided after the fact", "Credit goes to whoever is visible", "Reviews rely on anecdotes"],
        },
        solution: {
          title: "With ZapBuzzer",
          points: ["First accept sets the owner", "Every delivery is credited by name", "Ratings and on-time rates inform reviews"],
        },
      },
      {
        type: "visual",
        visual: "scorecard",
        heading: "Scorecards",
        body: "Who is fastest, who gets 5★, who delivers on time. Full analytics and scorecards are included in Pro.",
      },
      {
        type: "visual",
        visual: "audit-log",
        heading: "An Audit Trail for Every Action",
        body: "Every action is recorded in an audit log: who did what, and when. You decide what each role can see. Audit logs and reports are part of Pro.",
      },
      {
        type: "scenario",
        heading: "Month-End Recognition",
        persona: "Priya, Office Manager",
        setting: "Monthly team meeting with pantry and admin staff.",
        timeline: [
          { time: "17:00", event: "Priya opens the scorecards." },
          { time: "17:05", event: "Raj leads on requests delivered; Suresh has the best rating." },
          { time: "17:15", event: "Both are thanked by name, with the numbers to show why." },
        ],
        outcome: "Recognition based on records, which staff trusted because the first use of the data was credit.",
      },
      {
        type: "stats",
        heading: "Pilot Office Results",
        items: [
          { value: "4.8★", label: "Average Staff Rating" },
          { value: "96%", label: "On-Time Delivery" },
        ],
        note: pilotNote,
      },
      {
        type: "checklist",
        heading: "Introduce Accountability Well",
        items: [
          "Explain to staff how credit works before launch, and lead with recognition.",
          "Limit who sees individual scorecards with role permissions.",
          "Look at patterns, not single bad ratings.",
          "Fix process causes, like short staffing at peak hours, before blaming people.",
        ],
      },
      {
        type: "comparison",
        heading: "Nag Tool vs People-First Accountability",
        columns: ["Typical Nag Tool", "ZapBuzzer"],
        rows: [
          { label: "Purpose", a: "Remind staff they are late", b: "Record who did what, and credit them" },
          { label: "Ownership", a: "Assigned top-down", b: "Chosen by the person who accepts" },
          { label: "Feedback", a: "Only when something goes wrong", b: "A rating on every delivery" },
          { label: "Visibility for Staff", a: "Little", b: "Their own scorecard" },
        ],
      },
      {
        type: "metrics",
        heading: "What a Fair Scorecard Includes",
        items: [
          { metric: "Requests Accepted and Delivered", meaning: "Workload, credited to the person who did it." },
          { metric: "Accept Speed", meaning: "How quickly they pick up work when free." },
          { metric: "On-Time Rate", meaning: "Share of their jobs delivered before deadline." },
          { metric: "Average Rating", meaning: "How requesters felt about the result. Pilot staff averaged 4.8★." },
        ],
      },
      {
        type: "prose",
        heading: "Ending “I Thought You'd Do It”",
        paragraphs: [
          "Most dropped office tasks are not laziness. Two people saw the same message and each reasonably assumed the other would act. First-accept-wins fixes that: the moment one person taps Accept, they are the owner and everyone else can see it. Ownership is chosen by the person doing the work, which feels very different from being assigned blame after the fact.",
        ],
      },
      {
        "type": "scenario",
        "heading": "A Disputed Late Coffee",
        "persona": "Priya, Office Manager",
        "setting": "A director complains the pantry was slow during a client visit.",
        "timeline": [
          {
            "time": "10:02",
            "event": "Request buzzed for two coffees to Conference Room A."
          },
          {
            "time": "10:09",
            "event": "Accepted by Raj seven minutes later, in the middle of the morning rush."
          },
          {
            "time": "10:16",
            "event": "Delivered and rated four stars."
          },
          {
            "time": "Afternoon",
            "event": "Priya checks the queue for 10:02 and sees every pantry staffer was already on another order."
          }
        ],
        "outcome": "The issue was staffing at peak, not Raj. Priya shifts a break, and the director gets a factual answer instead of a scapegoat."
      },
      {
        "type": "checklist",
        "heading": "Keeping Accountability Conversations Fair",
        "items": [
          "Start from the request record, not the complaint.",
          "Check what else the team was handling at that moment.",
          "Recognise good scores in public; discuss weak ones in private.",
          "Ask staff what slowed them down before deciding anything.",
          "Look at weeks of data, not one bad afternoon."
        ]
      },
    ],
    faqs: [
      { q: "Will Staff See It as Surveillance?", a: "It depends on how it is introduced. Lead with credit and recognition, and staff tend to welcome a record of work that used to go unnoticed." },
      { q: "Who Can See Scorecards?", a: "Permissions are set for each role, so you decide which roles can see individual performance." },
      { q: "Can a Bad Rating Be Unfair?", a: "Sometimes. That is why patterns over a month matter more than a single rating." },
      { q: "Which Plan Includes Scorecards?", a: "Full analytics and scorecards, plus audit logs and reports, are part of Pro." },
      { q: "Can Staff See Their Own Scorecard?", a: "Scorecards are meant to give staff fair credit, so sharing them with the person is encouraged. What each role sees is controlled with permissions." },
      { q: "How Do We Handle a Dispute About Who Did a Job?", a: "Every action is audit-logged against the person who did it. The record shows who accepted, started and delivered, with timestamps." },
      { q: "Does Accountability Apply to Managers Too?", a: "Escalations land with named managers, and their response is part of the record. Managers are accountable too, not just staff." },
      { q: "How Do We Introduce Scorecards to Staff Fairly?", a: "Lead with credit: show staff the work they did that used to go unnoticed. Look at patterns over a month rather than single ratings, and make clear scorecards are for fair credit, not nagging." },
    ],
    related: ["analytics/staff-analytics", "administration/audit-logs", "use-cases/hr-team", "features/request-ratings", "analytics/team-performance", "pricing/pro-plan"],
    cta: { title: "Give Credit Where It Is Due", body: "Start a 14-day Pro trial and see your first staff scorecards." },
  },

  // ───────────────────────────── SLA compliance ─────────────────────────────
  {
    path: "use-cases/sla-compliance",
    title: "Meet Internal SLAs for Office Services",
    description:
      "Set deadlines for office requests and let overdue ones escalate on their own. Pilot offices reached 96% on-time delivery in month one on ZapBuzzer.",
    h1: "Turn Service Promises Into Deadlines That Hold",
    eyebrow: "Problem · SLA Compliance",
    lead:
      "Most offices have unwritten service levels: coffee in five minutes, a room fix in fifteen. ZapBuzzer writes them down as deadlines, times every request and escalates the ones that slip. Pilot offices reached 96% on-time delivery in their first month.",
    keywords: ["internal sla office", "sla compliance office requests", "office service level", "request deadline escalation", "on time delivery office"],
    heroVisual: "sla-timer",
    sections: [
      {
        type: "prose",
        heading: "SLAs Nobody Can Measure",
        paragraphs: [
          "An SLA is the time limit for finishing a request. If nobody times it, it is only a hope. Without timestamps, you cannot say whether the pantry met its five minutes or the facilities team its fifteen, only whether anyone complained.",
          "ZapBuzzer starts a clock on every request. SLA deadlines with an escalation chain (a list of people to alert, in order) are part of Pro.",
        ],
      },
      {
        type: "visual",
        visual: "sla-timer",
        heading: "A Timer on Every Request",
        body: "The timer runs from buzz to delivery. When it passes the deadline, the request escalates to a manager.",
      },
      {
        type: "table",
        heading: "Example Deadlines by Category",
        intro: "Examples only. Set your own based on what your office can deliver.",
        headers: ["Category", "Example Deadline", "Escalates To"],
        rows: [
          ["Pantry coffee", "5 minutes", "Pantry supervisor"],
          ["Colour prints", "10 minutes", "Print room lead"],
          ["Meeting-room IT", "5 minutes", "IT manager"],
          ["AC issue", "15 minutes", "Admin head"],
          ["Courier pickup", "30 minutes", "Reception lead"],
        ],
      },
      {
        type: "comparison",
        heading: "Unwritten vs Enforced SLAs",
        columns: ["Unwritten SLA", "ZapBuzzer SLA"],
        rows: [
          { label: "Measurement", a: "Complaints", b: "Every request timed" },
          { label: "Breach", a: "Noticed late, if at all", b: "Detected at the deadline" },
          { label: "Response to Breach", a: "Requester chases", b: "Automatic escalation" },
          { label: "Reporting", a: "None", b: "On-time rate in analytics" },
        ],
      },
      {
        type: "scenario",
        heading: "The 15-minute AC Rule",
        persona: "Om, Engineer",
        setting: "Conference Room B AC stuck at 16°C.",
        timeline: [
          { time: "11:00", event: "Om taps Facilities. Timer starts." },
          { time: "11:00", event: "Deepak's team is pinged; a technician accepts." },
          { time: "11:15", event: "If not fixed by now, it auto-escalates." },
        ],
        outcome: "Everyone knows the rule, and nobody has to enforce it by hand.",
      },
      {
        type: "stats",
        heading: "Pilot Office Results",
        items: [
          { value: "96%", label: "On-Time Delivery" },
          { value: "32s", label: "Average Accept Time" },
        ],
        note: pilotNote,
      },
      {
        type: "visual",
        visual: "escalation",
        heading: "What Happens at the Deadline",
        body:
          "When a request misses its deadline, it does not just turn red. It escalates to a manager automatically, and on Pro it can keep climbing an escalation chain you define, so the right person hears about it while there is still time to act.",
      },
      {
        type: "checklist",
        heading: "Setting Internal SLAs That Work",
        items: [
          "Write down the unwritten expectations for each category first.",
          "Run a few weeks with generous deadlines and look at real delivery times.",
          "Tighten deadlines where on-time rate is comfortably high.",
          "Make sure every escalation lands with someone who can reassign or decide.",
          "Review breaches weekly and fix the cause, not just the request.",
          "Share the on-time rate with staff so they know the target is achievable.",
        ],
      },
      {
        type: "callout",
        tone: "warning",
        title: "An SLA Is Only as Good as Its Escalation",
        body:
          "If overdue requests escalate to someone who never looks, the deadline means nothing. Pick escalation owners who will act, and check that they receive notifications.",
      },
      {
        type: "prose",
        heading: "What a Deadline Means for Each Job",
        paragraphs: [
          "A five-minute coffee deadline and a fifteen-minute AC deadline mean different things in practice. For coffee, the deadline is mostly about acceptance: if nobody takes it quickly, it will be late. For the AC, acceptance is fast but the fix can drag, so the timer is really watching the work itself. Looking at accept time and delivery time separately tells you which half of the SLA is failing.",
        ],
      },
      {
        "type": "metrics",
        "heading": "Compliance Numbers to Report",
        "intro": "A short set that a leadership team will actually read.",
        "items": [
          {
            "metric": "On-Time Rate by Category",
            "meaning": "Pilot offices reached 96% on-time delivery in their first month."
          },
          {
            "metric": "Escalations by Team",
            "meaning": "Count and pattern; a cluster usually means a staffing gap, not a lazy team."
          },
          {
            "metric": "Worst Hour of the Day",
            "meaning": "When most deadlines slip, so you can add cover there."
          }
        ]
      },
      {
        "type": "callout",
        "tone": "tip",
        "title": "Start With Deadlines You Can Already Hit",
        "body": "Set the first deadlines close to what the team delivers today, then tighten them once on-time rates are steady. A deadline everyone misses on day one teaches people to ignore the timer."
      },
    ],
    faqs: [
      { q: "Are SLA Deadlines on the Free Plan?", a: "Every request is timed on Free. SLA deadlines with an escalation chain are part of Pro." },
      { q: "Should We Start With Strict Deadlines?", a: "Start realistic, measure for a few weeks, then tighten. Constant escalations train people to ignore them." },
      { q: "Can Deadlines Differ by Category?", a: "Yes, think of deadlines per type of request. A courier pickup and a coffee should not share a clock." },
      { q: "How Do We Report SLA Performance?", a: "On-time delivery shows in analytics, and Pro includes reports and audit logs." },
      { q: "Is 96% On-Time a Realistic Target?", a: "It is what pilot offices averaged in their first month, across their own deadlines. Treat it as a reference; your rate depends on how you set deadlines and staff your teams." },
      { q: "What Counts as on Time?", a: "A request delivered before its deadline. The timer runs from when it is buzzed, so slow acceptance counts against the SLA as well as slow delivery." },
      { q: "Can Facility Companies Report SLAs to Clients?", a: "Enterprise is designed for groups and facility companies, with white-label and reporting options. Talk to us at hello@zapbuzzer.com for details." },
      { q: "Who Is Alerted When an Internal SLA Is Breached?", a: "An overdue request escalates to a manager automatically. On Pro, the escalation chain can pass it further up if it still is not handled." },
    ],
    related: ["sla-and-escalation", "sla-and-escalation/sla-timers", "sla-and-escalation/escalation-chains", "sla-and-escalation/sla-breach-detection", "resource-hub/sla-management-guide", "use-cases/facilities-manager", "pricing/pro-plan"],
    cta: { title: "Put Your SLAs on a Clock", body: "Try Pro free for 14 days with SLA timers and escalation chains." },
  },

  // ───────────────────────────── Pantry ─────────────────────────────
  {
    path: "use-cases/better-pantry-operations",
    title: "Better Pantry Operations for Busy Offices",
    description:
      "Run the office pantry from a catalogue: coffee, tea, snacks and lunch orders routed to pantry staff, delivered to the right room, timed and rated.",
    h1: "A Pantry That Keeps Up With the Morning Rush",
    eyebrow: "Problem · Pantry Operations",
    lead:
      "The pantry is the busiest service in most offices and the most chaotic. ZapBuzzer gives it a catalogue, a queue and a clock, so coffee arrives before anyone asks twice.",
    keywords: ["office pantry management", "pantry orders office", "office coffee requests", "pantry staff app", "lunch orders office"],
    heroVisual: "catalog",
    sections: [
      {
        type: "prose",
        heading: "Why Pantries Get Overwhelmed",
        paragraphs: [
          "Pantry demand is spiky: arrivals, the 11 o'clock meetings, post-lunch slump. Orders come by phone, chat and shouting, without destinations, and the pantry team spends half its time figuring out who wanted what and where.",
        ],
      },
      {
        type: "visual",
        visual: "catalog",
        heading: "The Pantry Catalogue",
        body: "Hot drinks, juice, snacks and dry fruits, with each person’s regular order a single tap away. Each order carries a destination and a note.",
      },
      {
        type: "comparison",
        heading: "Pantry Chaos vs a Pantry Queue",
        columns: ["Calls and Chat", "ZapBuzzer"],
        rows: [
          { label: "Order Details", a: "“Two coffees” with no room", b: "Item, destination, note" },
          { label: "Who Takes It", a: "Whoever answered", b: "First pantry staff to accept" },
          { label: "Rush Hour", a: "Orders forgotten", b: "Queue with timers" },
          { label: "Cost", a: "Unknown", b: "Owner-only spend view" },
        ],
      },
      {
        type: "scenario",
        heading: "Coffee to the Boss Cabin",
        persona: "Raj, Pantry",
        setting: "Board call in the boss cabin, morning rush.",
        timeline: [
          { time: "10:02", event: "Aarav's buzz arrives on Telegram." },
          { time: "10:02", event: "Raj accepts in 12 seconds." },
          { time: "10:06", event: "Hot coffee delivered and rated." },
        ],
        outcome: "Four minutes, zero calls, one hot coffee, instead of 25 minutes and three calls.",
      },
      {
        type: "stats",
        heading: "Pilot Office Results",
        items: [
          { value: "32s", label: "Average Accept Time" },
          { value: "96%", label: "On-Time Delivery" },
          { value: "4.8★", label: "Average Staff Rating" },
        ],
        note: pilotNote,
      },
      {
        type: "metrics",
        heading: "Pantry Metrics",
        items: [
          { metric: "Orders by Hour", meaning: "When to staff up." },
          { metric: "Top Items", meaning: "What to stock." },
          { metric: "Delivery Time", meaning: "Whether the rush is handled." },
          { metric: "Spend", meaning: "Owner-only cost of orders like team lunches." },
        ],
      },
      {
        type: "scenario",
        heading: "Lunch for Twelve on Release Day",
        persona: "Vivek, Operations",
        setting: "Product team working through lunch, 12 people, two vegetarian.",
        timeline: [
          { time: "12:10", event: "Vivek picks items for 12 from the catalogue, adds a note about the vegetarian meals." },
          { time: "12:11", event: "The pantry accepts and queues it behind two coffee orders." },
          { time: "13:00", event: "Lunch delivered; Vivek rates it." },
        ],
        outcome: "One request instead of a dozen messages, and the owner can see what lunch cost.",
      },
      {
        type: "workflow",
        heading: "Setting Up the Pantry",
        steps: [
          { title: "Catalogue", body: "List what the pantry actually serves, for example tea, coffee, snacks, juice and dry fruits." },
          { title: "Destinations", body: "Add rooms people order to: Boss Cabin, Conference Room B, 3rd-floor desks." },
          { title: "Team", body: "Add every pantry staff member so the whole team is pinged." },
          { title: "Deadlines", body: "Set a realistic delivery time and, on Pro, who it escalates to." },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Start Here",
        body:
          "The pantry is usually the best first category: highest volume, fastest feedback, and the most visible change for everyone in the office.",
      },
      {
        type: "prose",
        heading: "Fair to the Pantry Team Too",
        paragraphs: [
          "Pantry staff are usually the most interrupted people in the office and the least credited. With ZapBuzzer every delivery is credited and rated, so the person who handled thirty orders before lunch gets recognition for it, and managers can see when the team is genuinely stretched rather than slow.",
        ],
      },
      {
        "type": "audience",
        "heading": "Who the Pantry Queue Helps",
        "items": [
          {
            "role": "Pantry Staff",
            "benefit": "One queue instead of calls, chats and people waiting at the counter."
          },
          {
            "role": "Executives",
            "benefit": "A single tap sends their regular order, delivered to the cabin."
          },
          {
            "role": "Office Manager",
            "benefit": "Sees peak hours and on-time delivery without asking anyone."
          },
          {
            "role": "Owner",
            "benefit": "Sees what pantry orders and team lunches cost."
          }
        ]
      },
      {
        "type": "prose",
        "heading": "Notes That Save a Second Trip",
        "paragraphs": [
          "Most pantry mistakes are small: sugar in a coffee that should not have it, green tea instead of black, four cups when six people turned up. A short note on the request, “one without sugar, 6 people”, travels with the order to whoever accepts it.",
          "Over time the catalogue can grow to fit the office. If half the cabin orders say “less sugar”, it is worth adding as its own item so nobody has to type it again."
        ]
      },
    ],
    faqs: [
      { q: "Can Pantry Staff See Costs?", a: "Spend is visible to the owner only. Pantry staff see the items, notes and destination they need to deliver." },
      { q: "What About Requests Outside Pantry Hours?", a: "Requests are still routed and timed, so the record shows how long they waited. Many offices trim the pantry catalogue or adjust expectations for late evenings." },
      { q: "Can We Handle Team Lunch Orders?", a: "Yes. Pick items for the group, add a note, and the pantry queues it. The owner can see what it cost." },
      { q: "What If Two Pantry Staff Are Free?", a: "Both are pinged; whoever taps Accept first owns the order." },
      { q: "Can People Save Their Usual Order?", a: "The catalogue is designed so a regular order takes just a single tap." },
      { q: "How Do We Handle the Morning Rush?", a: "Every order goes to the whole pantry team and is accepted one by one, so nobody grabs the same order twice. Check orders by hour after a week and add cover where the queue builds." },
      { q: "Can We See What the Pantry Costs?", a: "Owners can see the cost of requests such as lunch orders. That view is owner-only, so it is not shown to every employee." },
      { q: "Is the Pantry Available on the Free Plan?", a: "Yes. Free supports up to 10 staff in one location with email notifications. Telegram and WhatsApp pings, SLA escalation and full analytics come with Pro." },
    ],
    related: ["solutions/pantry", "solutions/pantry/pantry-catalog", "workflows/coffee-request", "workflows/lunch-request", "use-cases/office-manager", "pricing/free-plan"],
    cta: { title: "Calm Your Pantry", body: "Start free with up to 10 staff, or trial Pro for 14 days." },
  },

  // ───────────────────────────── Facilities ─────────────────────────────
  {
    path: "use-cases/better-facilities-operations",
    title: "Better Facilities Operations in the Office",
    description:
      "Route AC, maintenance and room issues to facilities with a location, owner and deadline. Overdue jobs escalate on their own; nothing rots in DMs.",
    h1: "Facilities Jobs With an Address, an Owner and a Clock",
    eyebrow: "Problem · Facilities Operations",
    lead:
      "Facilities requests arrive vague and leave no trace. ZapBuzzer gives each one a destination, a named owner and a deadline, and escalates jobs that stall.",
    keywords: ["facilities operations", "office maintenance tracking", "ac issue office", "facilities escalation", "maintenance request app"],
    heroVisual: "escalation",
    sections: [
      {
        type: "prose",
        heading: "The Facilities Blind Spot",
        paragraphs: [
          "Facilities teams fix things all day, yet leadership mostly hears about what was not fixed. Without records, there is no way to show volume, response or which rooms keep breaking.",
        ],
      },
      {
        type: "workflow",
        heading: "A Facilities Job in ZapBuzzer",
        steps: [
          { title: "Report", body: "Employee taps Facilities, picks the room, adds a note." },
          { title: "Route", body: "The facilities team is pinged at once." },
          { title: "Own", body: "First technician to accept owns the job." },
          { title: "Escalate", body: "If it is not done by deadline, it escalates (chain on Pro)." },
          { title: "Close", body: "Delivered with optional photo, then rated." },
        ],
      },
      {
        type: "comparison",
        heading: "Reported by Phone vs Reported in ZapBuzzer",
        columns: ["Phone and Email", "ZapBuzzer"],
        rows: [
          { label: "Location", a: "Often missing", b: "Destination on every request" },
          { label: "Owner", a: "Assigned verbally", b: "First to accept" },
          { label: "Stalled Job", a: "Discovered by complaint", b: "Escalates on deadline" },
          { label: "Data", a: "None", b: "Requests by location and category" },
        ],
      },
      {
        type: "visual",
        visual: "escalation",
        heading: "Escalation That Does Not Wait for Complaints",
        body: "Overdue jobs climb to a manager automatically. On Pro you define the escalation chain.",
      },
      {
        type: "scenario",
        heading: "AC Stuck at 16°C",
        persona: "Om, Engineer",
        setting: "Conference Room B, sprint review in progress.",
        timeline: [
          { time: "11:00", event: "Om taps Facilities → Conference Room B." },
          { time: "11:00", event: "Deepak's team pinged; technician accepts." },
          { time: "11:15", event: "Deadline: fixed, or auto-escalated." },
        ],
        outcome: "Deepak: “Facilities tickets auto-escalate now. Nothing rots in someone's DMs.”",
      },
      {
        type: "stats",
        heading: "Pilot Office Results",
        items: [
          { value: "96%", label: "On-Time Delivery" },
          { value: "32s", label: "Average Accept Time" },
        ],
        note: pilotNote,
      },
      {
        type: "metrics",
        heading: "Facilities Metrics That Matter",
        items: [
          { metric: "Requests by Location", meaning: "Rooms and floors that need regular checks." },
          { metric: "Requests by Category", meaning: "AC vs electrical vs plumbing vs furniture." },
          { metric: "Time to Fix", meaning: "From report to delivered, per category." },
          { metric: "Escalations", meaning: "Jobs that stalled, often waiting for parts or vendors." },
          { metric: "Ratings", meaning: "Whether the fix actually solved the problem for the person who reported it." },
        ],
      },
      {
        type: "audience",
        heading: "Who Gains",
        items: [
          { role: "Employees", benefit: "Report in one tap with the room attached, and see who is coming." },
          { role: "Technicians", benefit: "Clear jobs with locations, and credit for each fix." },
          { role: "Facilities and Admin Heads", benefit: "Only stalled jobs reach them, early." },
          { role: "Facility Service Companies", benefit: "Enterprise adds white-label and custom domain for client sites." },
        ],
      },
      {
        type: "checklist",
        heading: "Facilities Rollout Checklist",
        items: [
          "Add every room and floor as a destination.",
          "Split facilities into a few categories with sensible deadlines.",
          "Put all technicians on the team so the first free one can accept.",
          "Ask for a photo on delivery for anything structural.",
          "Review repeat locations monthly.",
        ],
      },
      {
        type: "prose",
        heading: "Showing the Work That Usually Goes Unseen",
        paragraphs: [
          "When every job is recorded, the facilities team can finally show what it does: how many issues were fixed this month, how fast, and where. That record changes budget conversations, because a request for a new AC unit in Conference Room B comes with a count of how often the old one failed.",
        ],
      },
      {
        "type": "table",
        "heading": "Common Facilities Jobs and Starting Deadlines",
        "intro": "Examples to start from; set your own deadlines per category.",
        "headers": [
          "Job",
          "Example Deadline",
          "If Missed"
        ],
        "rows": [
          [
            "AC too cold in a meeting room",
            "15 minutes",
            "Escalates to a manager"
          ],
          [
            "Projector stuck before a meeting",
            "10 minutes",
            "Escalates to a manager"
          ],
          [
            "Washroom supplies out",
            "30 minutes",
            "Escalates to a manager"
          ],
          [
            "Desk light not working",
            "Same day",
            "Reviewed at the weekly check"
          ]
        ]
      },
      {
        "type": "prose",
        "heading": "Patterns Hidden in Small Complaints",
        "paragraphs": [
          "One “AC too cold” request is an annoyance. Twenty of them from Conference Room B in a month is a thermostat that needs replacing. Because every facilities request is logged with its destination and category, those patterns show up in history and reports instead of in people’s moods.",
          "That changes conversations with the landlord or building management too. A dated list of repeat faults is far more persuasive than “it happens all the time”."
        ]
      },
    ],
    faqs: [
      { q: "Can Facilities Requests Include a Location?", a: "Yes. Requesters choose a destination such as a cabin or meeting room, so the technician knows exactly where to go without calling back." },
      { q: "Does Escalation Need Pro?", a: "Overdue requests auto-escalate to a manager; the multi-step escalation chain, along with Telegram and WhatsApp pings, is on Pro. Every plan times every request." },
      { q: "Can We Run Facilities Across Several Sites?", a: "Multi-location is part of Pro. Free covers one location." },
      { q: "We Are a Facilities Company Serving Clients. Does It Fit?", a: "Enterprise is designed for groups and facility companies, with white-label and custom domain. Talk to us for details." },
      { q: "Can Technicians Prove the Fix?", a: "They can attach a photo when marking the job delivered." },
      { q: "How Do We Find Rooms That Keep Breaking?", a: "Analytics show requests by location and category, so repeat problems stand out." },
      { q: "What If a Fix Depends on an Outside Vendor?", a: "The technician starts the job with a longer ETA. If it still passes its deadline, escalation tells the manager who deals with the vendor." },
      { q: "Can Employees Report Issues From Their Phone?", a: "Yes. The mobile and web app both let anyone tap Facilities, choose the room and add a note." },
    ],
    related: ["solutions/facilities", "use-cases/facilities-manager", "workflows/ac-issue", "solutions/facilities/facilities-escalation", "sla-and-escalation/automatic-escalation", "pricing/pro-plan"],
    cta: { title: "Put Facilities on a Clock", body: "Try ZapBuzzer Pro free for 14 days and route your first facilities job today." },
  },
];
