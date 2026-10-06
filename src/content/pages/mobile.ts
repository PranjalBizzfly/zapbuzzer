import type { PageContent } from "../types";

const base: PageContent[] = [
  {
    path: "mobile-app/android-app",
    title: "ZapBuzzer Android App: Download and Install",
    description:
      "Install the ZapBuzzer Android app (v1.15.2, build 47, 61 MB APK). Alerts ring through on silent, and your account and workspace stay on the server.",
    h1: "Get Buzzer on Your Android Phone",
    eyebrow: "Android App",
    lead:
      "The Android app puts the whole office in your pocket: buzz for coffee, accept a print job, summon security. The current release is v1.15.2 (build 47), a 61 MB APK.",
    keywords: ["zapbuzzer android app", "zapbuzzer apk download", "office request android app", "buzzer app install"],
    heroVisual: "mobile-app",
    sections: [
      {
        type: "table",
        heading: "Current Release",
        headers: ["Detail", "Value"],
        rows: [
          ["Platform", "Android (APK)"],
          ["Version", "v1.15.2"],
          ["Build", "47"],
          ["Download size", "61 MB"],
          ["Account data", "Lives on the server, not the phone"],
        ],
      },
      {
        type: "workflow",
        heading: "Installing the APK",
        intro: "The app comes as an APK (the Android install file), so Android will ask you to allow the install.",
        steps: [
          { title: "Download", body: "Download the 61 MB APK on your phone, ideally over Wi-Fi." },
          { title: "Allow the Install", body: "If Android asks, allow your browser or file manager to install apps for this one install." },
          { title: "Install and Open", body: "Tap Install, then open Buzzer." },
          { title: "Sign In", body: "Sign in with your ZapBuzzer account. Your workspace, teams and history load from the server." },
          { title: "Allow Notifications", body: "Grant notification permission so requests can ring through." },
        ],
      },
      {
        type: "callout",
        tone: "warning",
        title: "Seeing “App Not Installed”?",
        body:
          "If you installed a build from before 11 August 2026, Android may refuse the new APK with “App not installed”. Uninstall the old Buzzer app first, then install v1.15.2. Nothing is lost: your account and workspace are kept on the server, and everything comes back once you sign in again.",
      },
      {
        type: "visual",
        visual: "mobile-app",
        heading: "What You Get on the Phone",
        body: "The same workspace as the web app, laid out for one hand.",
        points: [
          "Call security or staff with a single tap",
          "Raise an emergency",
          "Place an order from the catalogue",
          "Accept and track requests on the move",
        ],
      },
      {
        type: "prose",
        heading: "Rings Through on Silent",
        paragraphs: [
          "A request alert that sits quietly in a notification tray is no better than a missed call. The Android app is built to ring through even when the phone is on silent or locked, so pantry, IT and facilities staff hear the buzz while they are walking between floors.",
          "Notifications also repeat until someone accepts. Once a teammate takes the request, it stops ringing for everyone else.",
        ],
      },
      {
        type: "scenario",
        heading: "First Day With the App",
        persona: "Raj, Pantry",
        setting: "Raj’s office has just moved from a WhatsApp group to ZapBuzzer.",
        timeline: [
          { time: "09:00", event: "Raj installs the APK and signs in; the pantry queue appears." },
          { time: "09:12", event: "Phone on silent in his pocket; a Boss Cabin coffee request rings through." },
          { time: "09:12", event: "He accepts in 12 seconds from the lock screen prompt." },
          { time: "09:16", event: "Delivered and rated." },
        ],
        outcome: "Raj did not have to check a chat once. The phone told him when something needed doing.",
      },
      {
        type: "checklist",
        heading: "Before You Roll It Out to Staff",
        items: [
          "Share the APK link with your team.",
          "Ask anyone on a build from before 11 August 2026 to uninstall first.",
          "Make sure notifications are allowed after install.",
          "Check battery settings don’t silence the app.",
          "Send a test buzz to each team.",
        ],
      },
    ],
    faqs: [
      { q: "Which Version Is Current?", a: "The current Android release is v1.15.2, build 47. The APK is 61 MB." },
      { q: "Why Does Android Say “App Not Installed”?", a: "This happens if you have a build from before 11 August 2026 on the phone. Uninstall the old app and install v1.15.2; your account is on the server so nothing is lost." },
      { q: "Will I Lose My Requests If I Reinstall?", a: "No. Your account and workspace live on the server. Sign back in and your history and teams come back." },
      { q: "Does It Work When the Phone Is on Silent?", a: "Yes. Request alerts still sound when the phone is locked or set to silent." },
      { q: "Can I Use ZapBuzzer Without the App?", a: "Yes. There is a web app too, and the same account works on both." },
      { q: "Why Does Android Ask Me to Allow the Install?", a: "The app is distributed as an APK rather than through a store listing, so Android asks you to allow your browser or file manager to install it. You only need to allow it for this one install." },
      { q: "Which Permission Should I Grant After Installing the Android App?", a: "Grant notification permission when Buzzer asks. Without it, request alerts can’t ring through on silent or on a locked phone, which is the main reason staff install the app." },
    ],
    related: ["mobile-app", "mobile-app/notifications", "mobile-app/staff-workflow", "notifications/push", "features/one-tap-requests", "workflows/emergency-summon", "free-trial"],
    cta: { title: "Put the Office in Your Pocket", body: "Start a free trial, install the Android app and send your first buzz." },
  },
  {
    path: "mobile-app/mobile-requests",
    title: "Make Office Requests From Your Phone",
    description:
      "Buzz for coffee, prints, IT help or a courier pickup from the ZapBuzzer mobile app: pick an item, add a note, choose a destination and tap Buzz.",
    h1: "Your Usual Order, One Tap Away",
    eyebrow: "Mobile App",
    lead:
      "Out of your seat and need something? The mobile app keeps the office catalogue on your phone. Pick it, say where you are, and tap Buzz.",
    keywords: ["request coffee from phone office", "mobile office requests", "buzz staff app", "office catalogue app"],
    heroVisual: "catalog",
    sections: [
      {
        type: "visual",
        visual: "catalog",
        heading: "The Catalogue on Your Phone",
        body: "Coffee or tea, juice, snacks and dry fruits, prints, IT help, courier pickup. You see whatever your office has set up.",
      },
      {
        type: "workflow",
        heading: "Four Taps From Need to Buzz",
        steps: [
          { title: "Pick", body: "Tap the tile: coffee, prints, IT help." },
          { title: "Note", body: "Add detail like “less sugar” or “24 colour copies”." },
          { title: "Destination", body: "Choose Boss Cabin, Conference Room B or your desk." },
          { title: "Buzz", body: "The right team is pinged at once." },
        ],
      },
      {
        type: "scenario",
        heading: "Coffee During a Board Call",
        persona: "Aarav, CEO",
        setting: "Aarav is on a board call and can’t step out.",
        timeline: [
          { time: "11:04", event: "Taps Coffee → Boss Cabin on his phone, under the table." },
          { time: "11:04", event: "Pantry sees it on Telegram." },
          { time: "11:04", event: "Raj accepts in 12 seconds." },
          { time: "11:08", event: "Coffee arrives; Aarav rates it." },
        ],
        outcome: "No interruption to the call, no one shouting down the hall.",
      },
      {
        type: "features",
        heading: "Beyond Coffee",
        items: [
          { title: "Prints", body: "Upload a PDF, set copies and colour, get them at your seat." },
          { title: "IT and Facilities", body: "A projector that is stuck or an AC set too cold is routed automatically to the team that handles it." },
          { title: "Courier", body: "Request a pickup; reception logs it." },
          { title: "Summon and Emergency", body: "Call for security or staff, or flag an emergency, with a single tap." },
        ],
      },
      {
        type: "prose",
        heading: "Built for One Hand",
        paragraphs: [
          "Requests from a phone are made in corridors, in meetings and on the way back from lunch. The app keeps the catalogue big and the steps few, so a request takes seconds, not a form.",
          "Your account lives on the server, so a request started on the phone shows up in the web app too.",
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Choose the Right Destination",
        body: "Pick where you will be, not where you are now, and the coffee meets you in the meeting room.",
      },
    ],
    faqs: [
      { q: "What Can I Request From the App?", a: "Whatever your office has put in the catalogue, typically pantry items, prints, IT help, facilities issues and courier pickups." },
      { q: "Can I Print From My Phone?", a: "Yes. Upload a PDF, set copies and colour, and the print room delivers it to your seat or room." },
      { q: "Who Gets My Request?", a: "The team that handles that item. Everyone on the team is pinged and the first to accept owns it." },
      { q: "Can Colleagues Without the Android App Still Buzz for Things?", a: "Yes. The app currently available is the Android APK, and anyone can make the same requests from the web app with the same account and catalogue." },
      { q: "Can I Send a Request to a Meeting Room Instead of My Desk?", a: "Yes. Choose a destination such as Boss Cabin or Meeting Room 2 when you buzz, so the person who accepts walks straight to the right door." },
    ],
    related: ["mobile-app", "mobile-app/request-tracking", "features/one-tap-requests", "features/request-catalog", "workflows/coffee-request", "use-cases/ceo", "free-trial"],
    cta: { title: "Ask Without Leaving Your Seat", body: "Try ZapBuzzer free for 14 days." },
  },
  {
    path: "mobile-app/mobile-notifications",
    title: "Mobile Notifications That Ring on Silent",
    description:
      "ZapBuzzer mobile alerts keep ringing on a silenced or locked phone and repeat until someone accepts, alongside Telegram, WhatsApp and email on Pro.",
    h1: "Alerts That Get Heard, Not Buried",
    eyebrow: "Mobile App",
    lead:
      "A silent phone in a pocket is where requests used to go to die. ZapBuzzer’s mobile alerts ring through on silent and keep ringing until someone on the team accepts.",
    keywords: ["office request notifications", "ring on silent app", "staff alert app", "repeat notification until accepted"],
    heroVisual: "notification-flow",
    sections: [
      {
        type: "visual",
        visual: "notification-flow",
        heading: "One Request, Every Channel",
        body: "The app is one channel. On Pro, the same request also goes to Telegram and WhatsApp; email is available on every plan.",
      },
      {
        type: "table",
        heading: "Channels by Plan",
        headers: ["Channel", "Free", "Pro"],
        rows: [
          ["Mobile app", "Yes", "Yes"],
          ["Email", "Yes", "Yes"],
          ["Telegram", "—", "Yes"],
          ["WhatsApp", "—", "Yes"],
        ],
      },
      {
        type: "prose",
        heading: "Why Ringing Through Matters",
        paragraphs: [
          "Pantry and facilities staff are on their feet. Phones go on silent in meetings and stay that way. A notification that doesn’t make a sound will be found twenty minutes later, with a cold coffee and an annoyed requester.",
          "A locked screen or silent mode does not stop the app from ringing. And it repeats: until someone accepts, the request keeps asking.",
        ],
      },
      {
        type: "workflow",
        heading: "What Happens to an Alert",
        steps: [
          { title: "Buzzed", body: "A request is created and the team is notified." },
          { title: "Rings", body: "Every staff phone on the team rings, even on silent." },
          { title: "Repeats", body: "If nobody accepts, it pings again." },
          { title: "Stops", body: "The first accept stops the alert for everyone." },
          { title: "Escalates", body: "If it goes overdue, a manager is alerted." },
        ],
      },
      {
        type: "scenario",
        heading: "Facilities on the Move",
        persona: "Deepak, Admin Head",
        setting: "Deepak is in the basement checking the generator, phone on silent.",
        timeline: [
          { time: "14:20", event: "Om buzzes Facilities: Conference Room B AC stuck at 16°C." },
          { time: "14:20", event: "Deepak’s phone rings through despite silent mode." },
          { time: "14:21", event: "He accepts and sets an ETA." },
        ],
        outcome: "The request didn’t wait for Deepak to come back upstairs and check a chat.",
      },
      {
        type: "checklist",
        heading: "Make Sure Alerts Reach Staff",
        items: ["Allow notifications after install.", "Exclude the app from aggressive battery saving.", "Connect Telegram or WhatsApp on Pro as a backup.", "Send a test request to each team."],
      },
    ],
    faqs: [
      { q: "Will Alerts Ring If My Phone Is on Silent?", a: "Yes. ZapBuzzer request alerts ring through on silent and on a locked phone." },
      { q: "How Do I Stop the Repeats?", a: "Repeats stop as soon as anyone on the team accepts the request." },
      { q: "Are WhatsApp and Telegram Included on Free?", a: "No. Free includes email notifications plus the app. Telegram and WhatsApp pings are on Pro." },
      { q: "Do I Need to Keep the App Open to Get Request Alerts?", a: "No. Once notification permission is granted, alerts ring through even when the phone is locked or on silent, so staff can keep the phone in a pocket between jobs." },
      { q: "Do Employees Get Notifications Too?", a: "Requesters see status changes such as who accepted and the ETA, so they know what’s happening without calling." },
    ],
    related: ["mobile-app", "notifications", "notifications/push", "notifications/multi-channel", "mobile-app/android", "use-cases/reduce-phone-calls", "pricing/pro"],
    cta: { title: "Never Miss a Buzz", body: "Install the app and try ZapBuzzer free for 14 days." },
  },
  {
    path: "mobile-app/mobile-staff-assignment",
    title: "Accept-to-Own Staff Assignment on Mobile",
    description:
      "On the ZapBuzzer mobile app, staff take ownership of a request by tapping Accept first. The requester instantly sees who is on it, with name, photo and ETA.",
    h1: "Whoever’s Free, Takes It, From Their Phone",
    eyebrow: "Mobile App",
    lead:
      "Assignment on mobile is a single tap. The request reaches the whole team’s phones, and the first person to accept becomes its owner.",
    keywords: ["mobile staff assignment", "accept request from phone", "first accept wins mobile", "office staff app"],
    heroVisual: "acceptance",
    sections: [
      {
        type: "visual",
        visual: "acceptance",
        heading: "Ownership in One Tap",
        body: "Every phone on the team shows the request. One tap claims it, and the rest see it is taken.",
      },
      {
        type: "prose",
        heading: "Why the Phone Is the Right Place to Assign",
        paragraphs: [
          "The person best placed to take a request is the one nearest and free right now. That person is rarely at a desk. They are carrying a tray, restocking paper, or walking back from the server room.",
          "By putting the Accept button on their phone, ZapBuzzer lets proximity decide. Nobody has to dispatch, and nobody has to guess who is free.",
        ],
      },
      {
        type: "workflow",
        heading: "Assignment From the Staff Phone",
        steps: [
          { title: "Ring", body: "The request rings through, even on silent." },
          { title: "Read", body: "Item, note and destination are on screen." },
          { title: "Accept", body: "Tap Accept. You own it." },
          { title: "Set ETA", body: "Mark started and give an ETA so the requester knows." },
        ],
      },
      {
        type: "scenario",
        heading: "Two Print Jobs, Two People",
        persona: "Print Room, Two Staff",
        setting: "Two print requests land within a minute of each other.",
        timeline: [
          { time: "10:01", event: "Kavya’s 24 colour copies arrive; Sunil accepts." },
          { time: "10:02", event: "A second job arrives; Sunil is busy, Anita accepts." },
          { time: "10:08", event: "Both delivered to seats." },
        ],
        outcome: "The work split itself by availability, with no one coordinating.",
      },
      {
        type: "comparison",
        heading: "Group Chat vs Accept on Mobile",
        columns: ["Group Chat", "ZapBuzzer Mobile"],
        rows: [
          { label: "Claiming a Request", a: "“I’ll do it”, and maybe two people do", b: "One tap, one owner" },
          { label: "Requester Knows Who", a: "Only if they scroll", b: "Name and photo shown" },
          { label: "Record", a: "Lost in the thread", b: "Logged and timed" },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Credit Where It’s Due",
        body: "Because accepting is explicit, scorecards show who actually did the work. Full scorecards are on Pro.",
      },
    ],
    faqs: [
      { q: "What Happens on My Teammates’ Phones When I Accept?", a: "The request is locked to you and stops ringing for everyone else on the team, so nobody heads off to do the same job twice." },
      { q: "Does a Manager Need to Assign Requests to Staff?", a: "No. Requests reach the whole team at once and whoever is free claims them by tapping Accept. Managers only step in when something goes overdue and escalates." },
      { q: "What If I Accept by Mistake?", a: "Talk to your manager or admin about how your office handles hand-backs. The request remains timed, so it won’t be forgotten." },
      { q: "Does the Requester See My Name?", a: "Yes. They see your name, photo and ETA once you accept." },
      { q: "Is This Available on Free?", a: "Yes. First-accept-wins is on every plan." },
    ],
    related: ["mobile-app", "mobile-app/request-acceptance", "admin/staff-assignment", "features/first-accept-wins", "solutions/print-room/staff-workflow", "free-trial"],
    cta: { title: "Let the Nearest Person Take It", body: "Install the app and start a free trial." },
  },
  {
    path: "mobile-app/mobile-request-tracking",
    title: "Track Office Requests Live on Your Phone",
    description:
      "Follow every request from your phone with ZapBuzzer: see who accepted, when it started, the ETA and when it’s delivered, with no follow-up calls.",
    h1: "Stop Calling. Start Watching the Status.",
    eyebrow: "Mobile App",
    lead:
      "Every request you make has a live status on your phone. You’ll see who took it, when they started, how long they expect, and when it arrived.",
    keywords: ["track office request mobile", "request status app", "office request eta", "live request tracking"],
    heroVisual: "request-timeline",
    sections: [
      {
        type: "visual",
        visual: "request-timeline",
        heading: "The Request Timeline",
        body: "Buzzed, accepted, started, delivered, rated. Each step is stamped with a time.",
      },
      {
        type: "prose",
        heading: "The Cure for Phone Tag",
        paragraphs: [
          "The reason people call the pantry three times for one coffee is uncertainty. Has anyone seen it? Is it coming? Tracking removes the question.",
          "Pilot offices saw phone calls fall 87% in their first month, mostly because people could see the answer on their phone instead of asking for it.",
        ],
      },
      {
        type: "table",
        heading: "What Each Status Means",
        headers: ["Status", "What It Tells You"],
        rows: [
          ["Buzzed", "Your request has been sent to the team."],
          ["Accepted", "A named person owns it."],
          ["Started", "They are on it, with an ETA."],
          ["Delivered", "It has arrived; a photo may be attached."],
          ["Rated", "You’ve scored it 1–5★."],
        ],
      },
      {
        type: "scenario",
        heading: "The Projector Before a Client Demo",
        persona: "Kavya, Sales Lead",
        setting: "The Conference Room B projector won’t turn on 15 minutes before a demo.",
        timeline: [
          { time: "15:45", event: "Kavya taps IT: projector stuck." },
          { time: "15:46", event: "Accepted by Sameer; ETA 5 minutes." },
          { time: "15:50", event: "Started; Kavya keeps setting up instead of calling." },
          { time: "15:53", event: "Delivered: projector working." },
        ],
        outcome: "Kavya spent the 15 minutes preparing, not chasing.",
      },
      {
        type: "stats",
        heading: "Pilot Results",
        items: [
          { value: "32s", label: "Average Accept Time" },
          { value: "96%", label: "On-Time Delivery" },
          { value: "−87%", label: "Phone Calls" },
        ],
        note: "Pilot offices, first month.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "History",
        body: "Free keeps the last 30 days of request history. Pro adds audit logs and reports for longer look-backs.",
      },
    ],
    faqs: [
      { q: "Can I Track Requests I Made on the Web App?", a: "Yes. Your account and workspace are stored on the server, so requests show up on both." },
      { q: "What If Nobody Has Accepted Yet?", a: "It shows as waiting while the team is re-pinged. If it goes overdue, it escalates to a manager." },
      { q: "Is the ETA Exact?", a: "The ETA is set by the person who accepted. It’s their honest estimate, and the timer keeps running against the deadline." },
      { q: "How Far Back Can I See?", a: "Free shows the last 30 days. Pro adds audit logs and reports." },
    ],
    related: ["mobile-app", "mobile-app/delivery-tracking", "features/request-tracking", "features/eta-tracking", "use-cases/track-office-requests", "workflows/projector-request", "demo"],
    cta: { title: "See Every Request, Live", body: "Try it free for 14 days; you won't need a credit card." },
  },
  {
    path: "mobile-app/mobile-request-acceptance",
    title: "Accept Office Requests From the Lock Screen",
    description:
      "ZapBuzzer staff accept requests from their phone in seconds. Alerts ring on silent, the first tap wins, and the requester sees who’s coming straight away.",
    h1: "Seconds From Ring to “I’ve Got It”",
    eyebrow: "Mobile App",
    lead:
      "Pilot offices averaged 32 seconds from buzz to accept. Most of that speed comes from one thing: the Accept button is on the phone in the staffer’s pocket.",
    keywords: ["accept office request app", "fast request acceptance", "staff accept button", "32 second accept time"],
    heroVisual: "staff-queue",
    sections: [
      {
        type: "visual",
        visual: "staff-queue",
        heading: "The Queue on a Staff Phone",
        body: "Open requests for your team, newest first, each with a clear Accept button.",
      },
      {
        type: "stats",
        items: [
          { value: "32s", label: "Average Accept Time in Pilot Offices" },
          { value: "12s", label: "Raj’s Accept on Aarav’s Coffee" },
        ],
      },
      {
        type: "prose",
        heading: "What Makes Acceptance Fast",
        paragraphs: [
          "Three things: the alert is loud (it rings through on silent), it repeats until someone acts, and accepting takes one tap. There’s no reply to type and no dispatcher to wait for.",
          "Accepting is also public within the team. Once you tap, everyone else can stop, which removes the “I thought you’d do it” gap.",
        ],
      },
      {
        type: "workflow",
        heading: "Accepting Well",
        steps: [
          { title: "Read the Note", body: "Check the item, note and destination before you tap." },
          { title: "Accept", body: "Claim it if you can do it now." },
          { title: "Start With an ETA", body: "Give a realistic ETA so the requester can relax." },
          { title: "Deliver on Time", body: "The timer is running against the deadline." },
        ],
      },
      {
        type: "scenario",
        heading: "Board Meeting at 11",
        persona: "Meena, Pantry",
        setting: "Eight coffees for a board meeting, requested at 10:50.",
        timeline: [
          { time: "10:50", event: "Request rings Meena’s phone while she’s restocking." },
          { time: "10:50", event: "She accepts within seconds." },
          { time: "10:52", event: "Starts with ETA 6 minutes." },
          { time: "10:57", event: "Delivered before the meeting starts." },
        ],
        outcome: "The board meeting began with hot coffee on the table.",
      },
      {
        type: "metrics",
        heading: "How Acceptance Shows Up in Analytics",
        items: [
          { metric: "Accept Time", meaning: "From buzz to first accept." },
          { metric: "Acceptance by Person", meaning: "Who picks up most often (scorecards on Pro)." },
          { metric: "Unaccepted Escalations", meaning: "Requests that went overdue before anyone accepted." },
        ],
      },
    ],
    faqs: [
      { q: "Do I Have to Open the App to Accept?", a: "The alert brings you to the request so you can accept with a tap. The app rings through even on a locked phone." },
      { q: "What If I Can’t Do It Right Now?", a: "Don’t accept. Someone else on the team will, and the alert keeps repeating until they do." },
      { q: "Is Accept Time Tracked?", a: "Yes. Every request is timed, and accept time feeds analytics. Full scorecards are on Pro." },
      { q: "Should I Set an ETA When I Accept?", a: "Yes. Once you start the job, set a realistic ETA so the requester knows roughly how long to wait. That is what stops most follow-up calls." },
      { q: "How Fast Do Teams Usually Accept Requests?", a: "Pilot offices averaged a 32-second accept time in their first month, because every request rings the whole team at once, even on silent phones." },
      { q: "Can I Accept From Telegram or WhatsApp?", a: "On Pro, requests are also pinged on Telegram and WhatsApp. The app is the most direct way to accept and track." },
    ],
    related: ["mobile-app", "mobile-app/staff-assignment", "features/first-accept-wins", "analytics/acceptance-time", "use-cases/improve-response-time", "workflows/coffee-request", "free-trial"],
    cta: { title: "Get to “Accepted” in Seconds", body: "Try ZapBuzzer free for 14 days." },
  },
  {
    path: "mobile-app/mobile-delivery-tracking",
    title: "Mobile Delivery Tracking With Photo Proof",
    description:
      "Staff mark office requests delivered from their phone, with an optional photo, and the requester is asked to rate it. Every ZapBuzzer request ends properly.",
    h1: "Delivered Means Delivered",
    eyebrow: "Mobile App",
    lead:
      "The last step is the one that used to go missing. With ZapBuzzer, staff mark a request delivered from their phone, attach a photo if it helps, and the requester confirms with a rating.",
    keywords: ["delivery confirmation office", "photo proof delivery app", "office delivery tracking", "mark request delivered"],
    heroVisual: "delivery",
    sections: [
      {
        type: "visual",
        visual: "delivery",
        heading: "Delivered, With Proof",
        body: "A delivered request can carry a photo, such as the print stack on the desk or the projector showing a slide. Then comes a rating prompt for the requester.",
      },
      {
        type: "problem-solution",
        heading: "Closing the Loop",
        problem: {
          title: "Without Delivery Tracking",
          points: ["Nobody knows if the job is done.", "Requesters call to check.", "Staff get no credit for finishing."],
        },
        solution: {
          title: "With Mobile Delivery",
          points: ["Delivered is a timestamped state.", "A photo removes doubt.", "The requester rates it and the staffer gets credit."],
        },
      },
      {
        type: "scenario",
        heading: "Prints to Meeting Room 2",
        persona: "Sunil, Print Room",
        setting: "Kavya’s 24 colour copies are needed before her demo.",
        timeline: [
          { time: "14:51", event: "Sunil accepts and starts the job." },
          { time: "14:56", event: "Places the copies in Meeting Room 2 and snaps a photo." },
          { time: "14:56", event: "Marks delivered; Kavya gets the update." },
          { time: "15:00", event: "Kavya rates 5★." },
        ],
        outcome: "Kavya knew the copies were waiting before she walked in.",
      },
      {
        type: "prose",
        heading: "On Time, Measured",
        paragraphs: [
          "Every request is timed, and delivery is the moment the clock stops. That gives each request a clear on-time or late result, which is how pilot offices tracked 96% on-time delivery.",
          "For staff, delivery is also where credit lands. The delivered request and its rating sit on their record.",
        ],
      },
      {
        type: "checklist",
        heading: "Good Delivery Habits",
        items: ["Mark delivered when it’s in the requester’s hands or place.", "Add a photo when the requester isn’t there.", "Don’t mark it early. The timer records the real time.", "Check the destination in the note."],
      },
    ],
    faqs: [
      { q: "Is a Photo Required?", a: "No. A photo can be attached when it helps, such as when the requester isn’t at their desk." },
      { q: "What Happens After Delivery?", a: "The requester is prompted to rate the job 1–5★, and the request closes and feeds analytics." },
      { q: "Can Delivery Be Late?", a: "Yes. Every request has a deadline. Late ones are recorded and, if overdue before delivery, escalate to a manager." },
      { q: "Where Can I See Delivery Times?", a: "In analytics. Full analytics and scorecards are on Pro." },
    ],
    related: ["mobile-app", "mobile-app/ratings", "features/delivery-confirmation", "analytics/delivery-time", "workflows/print-request", "solutions/print-room", "pricing"],
    cta: { title: "Close Every Request Properly", body: "Start your 14-day free trial." },
  },
  {
    path: "mobile-app/mobile-ratings",
    title: "Rate Office Staff From Your Phone",
    description:
      "After every delivery, ZapBuzzer asks the requester for a 1–5★ rating on their phone. Ratings feed fair staff scorecards rather than nagging staff.",
    h1: "One Tap to Say Thanks, Or That It Was Late",
    eyebrow: "Mobile App",
    lead:
      "When your coffee or prints arrive, the app asks for a quick 1–5★. It takes a second, and it gives the people who do the work real, fair credit.",
    keywords: ["rate office staff app", "staff rating 5 star", "office service feedback", "staff scorecard ratings"],
    heroVisual: "scorecard",
    sections: [
      {
        type: "visual",
        visual: "scorecard",
        heading: "Ratings Become Scorecards",
        body: "Each rating attaches to the person who accepted and delivered. Scorecards combine ratings with accept time and on-time rate.",
      },
      {
        type: "stats",
        items: [{ value: "4.8★", label: "Average Staff Rating in Pilot Offices, First Month" }],
      },
      {
        type: "prose",
        heading: "People-First Ratings",
        paragraphs: [
          "ZapBuzzer is built to give staff fair credit, not to be another nag tool. Ratings are one part of that: they make good work visible.",
          "Because scorecards also show accept time and on-time delivery, a single unhappy rating doesn’t define anyone. Managers see patterns, not one-offs.",
        ],
      },
      {
        type: "workflow",
        heading: "How a Rating Happens",
        steps: [
          { title: "Delivered", body: "Staff mark the request delivered." },
          { title: "Prompt", body: "The requester’s phone asks for a rating." },
          { title: "Tap Stars", body: "1–5★, done." },
          { title: "Scorecard", body: "The rating joins the staffer’s record." },
        ],
      },
      {
        type: "scenario",
        heading: "Recognising the Pantry",
        persona: "Priya, Office Manager",
        setting: "End of the month review.",
        timeline: [
          { time: "Day 30", event: "Priya opens scorecards (Pro)." },
          { time: "Day 30", event: "Raj has the most deliveries and a 4.9★ average." },
          { time: "Day 31", event: "Raj is recognised in the team meeting with data to back it." },
        ],
        outcome: "Recognition was based on the record, not on who was most visible.",
      },
      {
        type: "callout",
        tone: "info",
        title: "Scorecards on Pro",
        body: "Ratings are collected on every request. Full analytics and staff scorecards are part of Pro.",
      },
    ],
    faqs: [
      { q: "Do I Have to Rate Every Request?", a: "The app prompts you after delivery. Rating takes a tap and helps staff get fair credit." },
      { q: "Who Sees My Rating?", a: "Ratings feed staff scorecards and analytics, which managers and owners use. Full scorecards are on Pro." },
      { q: "Can a Low Rating Hurt Staff Unfairly?", a: "Scorecards show ratings alongside accept time and on-time rate, so patterns matter more than one rating." },
      { q: "What Scale Is Used?", a: "A 1–5★ scale." },
      { q: "When Does the App Ask Me to Rate a Request?", a: "Right after the request is marked delivered. Rating then, while you still remember whether the coffee was hot or the prints were in the right room, gives the most useful feedback." },
    ],
    related: ["mobile-app", "mobile-app/delivery-tracking", "features/request-ratings", "analytics/ratings", "use-cases/staff-accountability", "analytics/staff", "pricing/pro"],
    cta: { title: "Give Your Staff the Credit They Earn", body: "Start a free trial and see ratings build up." },
  },
  {
    path: "mobile-app/mobile-staff-workflow",
    title: "A Day of Office Staff Work on Mobile",
    description:
      "How pantry, print, IT and facilities staff work through the day on the ZapBuzzer mobile app: ring, accept, start with ETA, deliver with photo, get rated.",
    h1: "The Staff Shift, Start to Finish, on One Phone",
    eyebrow: "Mobile App",
    lead:
      "For the people who run the office, the mobile app is the job board. It tells them what to do next, keeps them honest on time, and records the work they did.",
    keywords: ["staff workflow app", "pantry staff mobile", "facilities staff app", "office staff daily workflow"],
    heroVisual: "request-timeline",
    sections: [
      {
        type: "workflow",
        heading: "The Five-Step Loop",
        steps: [
          { title: "Ring", body: "Requests ring through even on silent and repeat until someone accepts." },
          { title: "Accept", body: "First to accept owns it." },
          { title: "Start", body: "Mark started with an ETA." },
          { title: "Deliver", body: "Mark delivered; attach a photo if helpful." },
          { title: "Rated", body: "The requester rates 1–5★." },
        ],
      },
      {
        type: "visual",
        visual: "request-timeline",
        heading: "Every Step on the Clock",
        body: "Each state is time-stamped, so the request’s whole life is visible from the phone.",
      },
      {
        type: "scenario",
        heading: "A Facilities Shift",
        persona: "Deepak, Admin Head",
        setting: "A typical Tuesday in a two-floor office.",
        timeline: [
          { time: "09:30", event: "Accepts a light fault on the 3rd floor; delivered in 20 minutes." },
          { time: "11:10", event: "Conference Room B AC stuck at 16°C; accepts, ETA 15 minutes." },
          { time: "13:40", event: "Courier at the gate. Neha logs it and the mailroom takes it." },
          { time: "17:00", event: "Shift ends with every accepted job delivered." },
        ],
        outcome: "Deepak never checked a group chat, and his day’s work is on record.",
      },
      {
        type: "audience",
        heading: "Who Runs on the Staff Workflow",
        items: [
          { role: "Pantry", benefit: "Orders with notes like “oat milk” and a destination." },
          { role: "Print Room", benefit: "PDF jobs with copies and colour preset." },
          { role: "IT Desk", benefit: "Projector, HDMI and hardware calls." },
          { role: "Facilities", benefit: "AC, maintenance, room issues." },
          { role: "Security", benefit: "One-tap summons and emergencies." },
        ],
      },
      {
        type: "prose",
        heading: "Fewer Interruptions, More Done",
        paragraphs: [
          "Staff used to be interrupted by calls asking about requests they were already working on. With status on the requester’s screen, those calls stop.",
          "Staff switch tasks less often and always know what’s next.",
        ],
      },
      {
        type: "checklist",
        heading: "Staff App Setup",
        items: ["Install the Android app (v1.15.2).", "Allow notifications.", "Confirm you’re on the right team.", "Test a request with your manager."],
      },
    ],
    faqs: [
      { q: "Can Staff Work Only From the Web App?", a: "Yes, but the mobile app suits staff who move around, and it rings through on silent." },
      { q: "How Do Staff Know What’s Next?", a: "The queue shows open requests for their team, with waiting times." },
      { q: "Is Work Recorded?", a: "Every action is logged and timed. Audit logs and reports are on Pro." },
      { q: "What If a Job Will Take Longer Than Expected?", a: "Set a realistic ETA when you start. If it runs overdue, it escalates to a manager." },
    ],
    related: ["mobile-app", "admin/staff-dashboard", "mobile-app/request-acceptance", "solutions/facilities", "use-cases/facilities-operations", "workflows", "free-trial"],
    cta: { title: "Give Staff a Better Shift", body: "Install the app and start a 14-day free trial." },
  },
  {
    path: "mobile-app/mobile-office-management",
    title: "Manage the Office From Your Phone",
    description:
      "Office managers and owners keep an eye on requests, escalations and staff from the ZapBuzzer mobile app, with the same server-side workspace as the web app.",
    h1: "Run the Office Between Meetings",
    eyebrow: "Mobile App",
    lead:
      "Office managers are rarely at their desks. The mobile app shows them what’s happening in the office wherever they are: open requests, escalations and who’s on what.",
    keywords: ["office management app", "office manager mobile", "manage office requests phone", "admin mobile app"],
    heroVisual: "request-dashboard",
    sections: [
      {
        type: "visual",
        visual: "request-dashboard",
        heading: "The Office, Live",
        body: "Open and in-progress requests with owners and timers, the same workspace as on the web.",
      },
      {
        type: "features",
        heading: "What Managers Do From the Phone",
        items: [
          { title: "Watch the Queue", body: "See what’s open and who owns it." },
          { title: "Handle Escalations", body: "Overdue requests reach the manager; on Pro, the escalation chain goes further." },
          { title: "Summon Help", body: "Call for security or staff, or flag an emergency, with a single tap." },
          { title: "Place Orders", body: "Order for guests or the team from the catalogue." },
        ],
      },
      {
        type: "scenario",
        heading: "Visitors in Reception",
        persona: "Priya, Office Manager",
        setting: "Priya is in a vendor meeting when clients arrive early.",
        timeline: [
          { time: "15:30", event: "Neha messages that clients have arrived." },
          { time: "15:31", event: "Priya buzzes tea for 4 → Meeting Room 1 from her phone." },
          { time: "15:31", event: "Pantry accepts; she sees the name and ETA." },
          { time: "15:36", event: "Delivered before the clients are seated." },
        ],
        outcome: "Priya never left her meeting.",
      },
      {
        type: "prose",
        heading: "Setup on the Web, Oversight on the Phone",
        paragraphs: [
          "Building the catalogue, teams and roles is easiest at a desk on the web app. Day-to-day oversight works best on the phone.",
          "Because the account and workspace live on the server, both always show the same picture.",
        ],
      },
      {
        type: "table",
        heading: "Plan Notes for Managers",
        headers: ["Need", "Plan"],
        rows: [
          ["One location with a maximum of 10 staff", "Free"],
          ["Multiple locations, unlimited staff", "Pro"],
          ["Escalation chain, full analytics, audit logs", "Pro"],
          ["SSO + SAML, white-label", "Enterprise"],
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Spend Stays With the Owner",
        body: "Request costs are visible in the owner-only spend view, not to managers.",
      },
    ],
    faqs: [
      { q: "Can I Manage Settings From the Phone?", a: "Day-to-day oversight works well on mobile. Bigger setup tasks like catalogue and roles are easier on the web app." },
      { q: "Do I Need Pro for Multiple Offices?", a: "Yes. Multi-location is part of Pro." },
      { q: "Can I See Request Costs?", a: "Spend is owner-only. If you hold the owner role, you can see it." },
      { q: "Is the Data the Same as on the Web?", a: "Yes. Your account and workspace live on the server." },
      { q: "Can I Handle Escalations From My Phone?", a: "Yes. Overdue requests auto-escalate to a manager, and the app lets you see who owns the request and step in from the corridor instead of returning to your desk." },
    ],
    related: ["mobile-app", "admin", "admin/manager-dashboard", "use-cases/office-manager", "mobile-app/requests", "enterprise/multi-location", "pricing"],
    cta: { title: "Take the Office With You", body: "Begin a free trial without a credit card or a setup call." },
  },
];

type Extra = { sections: PageContent["sections"]; faqs: NonNullable<PageContent["faqs"]> };

const extra: Record<string, Extra> = {
  "mobile-app/android": {
    sections: [
      {
        type: "prose",
        heading: "Updating From an Older Build",
        paragraphs: [
          "Most updates are simple: download the new APK and install it over the old one. The exception is phones still running a build from before 11 August 2026. On those, Android can refuse the new version with a plain “App not installed” message and no further explanation.",
          "The fix is to uninstall the old Buzzer app and then install v1.15.2 fresh. That sounds drastic, but nothing important lives on the phone. Your account and workspace are stored on the server, so once you sign in again your teams, catalogue and request history are all there.",
          "If you run an office with many staff phones, it is worth sending one message to everyone before rollout: if the install fails, uninstall first, then install. It saves a round of calls to whoever manages IT.",
        ],
      },
      {
        type: "audience",
        heading: "Who Should Install It",
        items: [
          { role: "Pantry, Print, IT and Facilities Staff", benefit: "Hear every request, even on silent, and accept on the move." },
          { role: "Reception and Security", benefit: "Respond to one-tap summons and emergencies quickly." },
          { role: "Managers", benefit: "Keep an eye on the queue and escalations away from the desk." },
          { role: "Employees", benefit: "Buzz for coffee or prints from a meeting without opening a laptop." },
        ],
      },
    ],
    faqs: [
      {
        q: "How Big Is the Download?",
        a: "The v1.15.2 APK is 61 MB. Downloading over Wi-Fi is easiest, especially when rolling out to a whole team at once.",
      },
    ],
  },
  "mobile-app/requests": {
    sections: [
      {
        type: "prose",
        heading: "Why Requests From the Phone Are Better Than a Call",
        paragraphs: [
          "A phone call needs someone on the other end who is free, who hears it, who remembers it and who writes it down. A buzz from the app needs none of that. It reaches the whole team at once, repeats until someone accepts, and carries the note and destination with it.",
          "That matters most for the requests people make away from their desk. Aarav in a board call cannot step out to ring the pantry. Kavya walking to a meeting room cannot stop to explain which slides to print. On the phone, both are a few taps.",
          "The request is also timed from the moment it is made. If it stalls, it escalates to a manager rather than depending on the requester to call again.",
        ],
      },
      {
        type: "comparison",
        heading: "Calling vs Buzzing",
        columns: ["Phone Call", "Buzz From the App"],
        rows: [
          { label: "Reaches", a: "One person, if they pick up", b: "The whole team at once" },
          { label: "Details", a: "Remembered, maybe", b: "Written in the note" },
          { label: "Follow-Up", a: "Call again", b: "Check the status" },
          { label: "If Ignored", a: "Nothing happens", b: "Repeats, then escalates" },
        ],
      },
    ],
    faqs: [
      {
        q: "What Should I Type in the Note When Buzzing From My Phone?",
        a: "Add details like “oat milk”, “double-sided” or “Room 4, HDMI” so the person who accepts knows exactly what to bring.",
      },
    ],
  },
  "mobile-app/notifications": {
    sections: [
      {
        type: "prose",
        heading: "Loud for Staff, Calm for Everyone Else",
        paragraphs: [
          "Ringing through on silent is meant for the people who handle requests. They need to know when something is waiting, wherever they are. For requesters, the app is quieter: it tells them when someone accepts, when work starts and when it is delivered.",
          "The repeat behaviour is equally targeted. Alerts keep going only until someone accepts. After that, the rest of the team is left alone, which stops the alert fatigue that makes people mute group chats in the first place.",
          "On Pro, Telegram and WhatsApp act as extra channels for the same request. Staff who live in those apps see the buzz there too, while the app remains the place to accept, start and deliver.",
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Free vs Pro Channels",
        body: "Free sends email notifications plus the app. Pro adds Telegram and WhatsApp pings for ₹99 per seat per month.",
      },
    ],
    faqs: [
      {
        q: "Will My Phone Ring for Requests From Other Teams?",
        a: "No. Alerts go to the team that handles that kind of request, so IT staff are not woken up by coffee orders.",
      },
    ],
  },
  "mobile-app/staff-assignment": {
    sections: [
      {
        type: "prose",
        heading: "What the Requester Sees When You Accept",
        paragraphs: [
          "The moment a staffer accepts on their phone, the requester’s screen changes from waiting to a name and a photo. That small change does a lot. It tells the requester that a real person has it, and it tells them who to look out for at the door.",
          "When the staffer marks it started and sets an ETA, the requester knows roughly how long to wait. Most follow-up calls disappear at this point, which is why pilot offices saw phone calls drop by 87% in their first month.",
          "For the staffer, accepting from the phone also means the request is now on their record. When it is delivered and rated, the credit goes to them.",
        ],
      },
      {
        type: "checklist",
        heading: "Before You Tap Accept",
        items: [
          "Read the note and destination.",
          "Make sure you can do it now, not in half an hour.",
          "Check you have what you need: the HDMI cable, the paper, the milk.",
          "Accept, then set a realistic ETA.",
        ],
      },
    ],
    faqs: [
      {
        q: "Does It Matter Who Is Closest?",
        a: "Not formally, but in practice the nearest free person tends to accept first, which is usually the fastest outcome for the requester.",
      },
    ],
  },
  "mobile-app/request-tracking": {
    sections: [
      {
        type: "prose",
        heading: "Tracking From the Requester’s Side",
        paragraphs: [
          "Tracking is designed around one question: do I need to do anything? If the request says accepted, someone has it. If it says started with an ETA, it is coming. If it says delivered, look at your desk. At no point does the requester need to call, message or walk over.",
          "Every request is timed, so the timeline also shows how long each step took. That is useful when something feels slow. Was it waiting for acceptance, or was the work itself long? The answer is on the screen.",
          "Because the account and workspace live on the server, the same request is visible on the web app. Start it on the phone in a corridor, check it later from a laptop.",
        ],
      },
      {
        type: "visual",
        visual: "sla-timer",
        heading: "The Deadline Behind Each Request",
        body: "Each request runs against a deadline. If it goes overdue before delivery, it escalates to a manager automatically.",
      },
    ],
    faqs: [
      {
        q: "Does Tracking Work for Prints and IT Jobs Too?",
        a: "Yes. Every category follows the same states (accepted, started, delivered, rated), whether it is coffee, a print job or a projector fix.",
      },
    ],
  },
  "mobile-app/request-acceptance": {
    sections: [
      {
        type: "prose",
        heading: "Why Accepting Only What You Can Do Now Matters",
        paragraphs: [
          "Accepting is a promise. Once you tap, the requester sees your name and the rest of the team stops looking. If you accept a job you cannot start for twenty minutes, it sits with you while a free colleague could have done it straight away.",
          "That is why the best habit is simple: accept only when you can act now. If you are mid-task, let the alert pass. Someone else will take it, and if nobody does, it repeats and eventually escalates to a manager.",
          "Scorecards on Pro reward this. Accept time, on-time delivery and rating sit side by side, so the person who accepts quickly but delivers late shows up just as clearly as the one who quietly gets everything done on time.",
        ],
      },
      {
        type: "comparison",
        heading: "Replying in a Group vs Accepting in the App",
        columns: ["Group Reply", "App Accept"],
        rows: [
          { label: "Claiming", a: "Type “on it”", b: "One tap" },
          { label: "Others Know", a: "If they read the thread", b: "Request disappears from their queue" },
          { label: "Timed", a: "No", b: "Yes, from buzz to accept" },
        ],
      },
    ],
    faqs: [
      {
        q: "What If I Accepted but Something Urgent Came Up?",
        a: "Let your manager know straight away. The request is still timed, so if it goes overdue it escalates rather than being forgotten.",
      },
    ],
  },
  "mobile-app/delivery-tracking": {
    sections: [
      {
        type: "prose",
        heading: "When the Requester Isn’t There",
        paragraphs: [
          "Plenty of deliveries happen to empty desks. The requester has stepped into a meeting, gone to reception, or is on a call in a phone booth. In the past, that meant a print stack left on a chair with nobody sure it had arrived.",
          "A delivery photo solves that. The staffer snaps the prints on the desk or the coffee on the cabin table, marks delivered, and the requester sees it on their phone. No one has to walk back to check.",
          "For facilities and IT jobs, a photo can show the fix: the projector showing a slide, the AC display at a sensible temperature. It turns “I fixed it” into something the requester can see.",
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
    ],
    faqs: [
      {
        q: "Can the Requester See the Delivery Photo?",
        a: "Yes. When a photo is attached on delivery, the requester sees it with the delivered status.",
      },
    ],
  },
  "mobile-app/ratings": {
    sections: [
      {
        type: "prose",
        heading: "Why Ratings Are Tied to a Person",
        paragraphs: [
          "In a group chat, thanks are scattered and anonymous. “Thanks!” to the whole pantry group does not tell anyone who actually made the coffee. ZapBuzzer ties each rating to the person who accepted and delivered, because they are the one who did the work.",
          "That makes ratings meaningful for staff. Over a month, a pantry staffer can see their average climb, and a manager can point to it in a review. It is recognition based on a record rather than on who happened to be noticed.",
          "Ratings also help the office learn. If one category keeps getting lower stars, it usually points to a process problem, such as too few people at peak hours or a missing supply, rather than a person.",
        ],
      },
      {
        type: "metrics",
        heading: "How Ratings Are Used",
        items: [
          { metric: "Average Rating per Staffer", meaning: "How requesters feel about each person’s work over time." },
          { metric: "Rating by Category", meaning: "Whether pantry, print, IT or facilities is landing well." },
          { metric: "Ratings Next to On-Time Rate", meaning: "Whether lower stars track late deliveries or something else." },
        ],
      },
    ],
    faqs: [
      {
        q: "Can I Rate From the Web App as Well?",
        a: "Yes. Your account works on both the web app and the mobile app, so you can rate wherever you see the delivered request.",
      },
    ],
  },
  "mobile-app/staff-workflow": {
    sections: [
      {
        type: "prose",
        heading: "What Changes for Staff in the First Week",
        paragraphs: [
          "The first change staff notice is quiet. The pantry WhatsApp group stops filling up, the desk phone rings less, and fewer people walk over to ask whether their coffee is coming. Requests arrive in one place, with a note and a destination.",
          "The second change is clarity. When a request rings through, the staffer knows exactly what is wanted and where. When they accept, everyone else knows it is handled. When they deliver, the requester knows without being told.",
          "The third change takes a little longer: credit. After a few weeks of deliveries and ratings, staff can see their own record, and managers can see who carried the busy days. Pilot offices averaged a 4.8★ staff rating in their first month.",
        ],
      },
      {
        type: "stats",
        items: [
          { value: "32s", label: "Average Accept Time" },
          { value: "−87%", label: "Phone Calls" },
        ],
        note: "Pilot offices, first month.",
      },
    ],
    faqs: [
      {
        q: "Can Staff Also Make Requests?",
        a: "Yes. Staff can buzz from the catalogue like anyone else. For example, the print room asking IT for help with a jammed printer.",
      },
    ],
  },
  "mobile-app/office-management": {
    sections: [
      {
        type: "prose",
        heading: "The Manager’s Two-Minute Check",
        paragraphs: [
          "Between meetings, an office manager usually has two minutes, not twenty. The mobile app is built for that window. Open it, glance at what is still open, see whether anything has escalated, and move on.",
          "If nothing needs attention, that is the answer. If something has gone overdue, the request shows who accepted it and when it started, so the manager knows whether to call the staffer, bring in someone else or tell the requester it is under control.",
          "The same view helps on bigger days. During a board meeting or a client visit, the manager can watch requests for the meeting room in real time and step in before anyone in the room notices a delay.",
        ],
      },
      {
        type: "checklist",
        heading: "Mobile Habits for Office Managers",
        items: [
          "Check for escalations after each meeting.",
          "Buzz for guests the moment they arrive.",
          "Use one-tap summon for security when needed.",
          "Leave catalogue and role changes for the web app.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can I Raise an Emergency From the Phone?",
        a: "Yes. The mobile app lets you raise an emergency or summon staff or security in one tap.",
      },
    ],
  },
};

const more: Record<string, Extra> = {
  "mobile-app/requests": {
    sections: [
      {
        type: "table",
        heading: "What to Put in the Note",
        intro: "The catalogue item says what you want. The note covers everything the person delivering needs to get it right first time.",
        headers: ["Request", "Useful Note", "Why It Helps"],
        rows: [
          ["Coffee", "Two cappuccinos, one without sugar, Boss Cabin", "The pantry brews once instead of coming back to ask."],
          ["Prints", "Staple each set, leave on the table in Conference Room B", "The print room delivers ready to hand out."],
          ["IT help", "Projector shows no signal from the HDMI port", "IT brings the right cable or adapter on the first trip."],
          ["Lunch", "Order for 12, two vegetarian, by 1 pm", "The pantry can plan quantities and timing."],
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Pick the Destination, Not Just the Item",
        body: "Choosing a destination such as Boss Cabin or Meeting Room 2 means staff walk straight to the right door. If you are about to move rooms, say so in the note so the delivery follows you.",
      },
    ],
    faqs: [
      { q: "What If the Item I Need Isn’t in the Catalogue?", a: "Ask your admin to add it. The catalogue is set up by your office, so it can grow with what people actually ask for. Until then, pick the closest category and explain in the note." },
      { q: "Can I Buzz for Several Things at Once?", a: "Each request is timed and owned on its own, which keeps tracking clear. For a bigger order like lunch for a team, pick the items and add one note covering the details." },
    ],
  },
  "mobile-app/notifications": {
    sections: [
      {
        type: "table",
        heading: "Who Hears What",
        intro: "Notifications go to the people who can act on them, and status updates go to the person waiting.",
        headers: ["Moment", "Who Is Notified", "What They See"],
        rows: [
          ["Request buzzed", "Every member of the routed team", "The item, note, destination and requester"],
          ["Still unaccepted", "The same team, again", "A repeat alert until someone taps Accept"],
          ["Accepted", "The requester", "Name, photo and ETA of the person on it"],
          ["Overdue", "A manager", "An escalation for the late request"],
          ["Delivered", "The requester", "A prompt to rate the job 1–5★"],
        ],
      },
      {
        type: "prose",
        heading: "The Alert That Stops on Its Own",
        paragraphs: [
          "Most notification fatigue comes from alerts that keep firing after the job is handled. ZapBuzzer’s repeats are tied to the request’s state: the moment one person accepts, the rest of the team stops hearing about it.",
          "That means a pantry team of four does not get four rounds of noise for one coffee. They get pinged until it is owned, and then their phones go quiet again for the next real request.",
        ],
      },
    ],
    faqs: [
      { q: "Does Email Work on Every Plan?", a: "Yes. Email notifications are included on Free along with the mobile and web app. Pro adds Telegram and WhatsApp pings on top." },
      { q: "Can a Manager Be Notified About Late Requests?", a: "Yes. Overdue requests auto-escalate to a manager. On Pro you can set up an escalation chain so it moves further up if needed." },
    ],
  },
  "mobile-app/staff-assignment": {
    sections: [
      {
        type: "metrics",
        heading: "What Assignment on Mobile Changes",
        intro: "Pilot offices measured these in their first month.",
        items: [
          { metric: "32s Average Accept Time", meaning: "Requests are owned within about half a minute because the whole team hears them at once." },
          { metric: "96% On-Time Delivery", meaning: "Once someone owns a request, the timer keeps it moving to the door." },
          { metric: "−87% Phone Calls", meaning: "Nobody has to ring around to find out who is handling it." },
        ],
      },
      {
        type: "audience",
        heading: "Who Assigns Themselves From the Phone",
        items: [
          { role: "Pantry Staff", benefit: "Accept a coffee while walking back from the 3rd-floor kitchen." },
          { role: "Print Room", benefit: "Take a print job between runs without leaving the printer." },
          { role: "IT Desk", benefit: "Claim a projector issue while already on the right floor." },
          { role: "Facilities", benefit: "Own an AC complaint from wherever the last job finished." },
        ],
      },
    ],
    faqs: [
      { q: "Can a Manager See Who Owns Each Request?", a: "Yes. Once accepted, the request shows the owner, and every action is logged. Managers use that view to spot gaps, especially when something escalates." },
    ],
  },
  "mobile-app/request-tracking": {
    sections: [
      {
        type: "comparison",
        heading: "Waiting Blind vs Waiting With a Status",
        columns: ["Before", "With Tracking"],
        rows: [
          { label: "Is Anyone on It?", a: "Call the pantry and hope someone picks up", b: "See the name and photo of whoever accepted" },
          { label: "When Will It Arrive?", a: "“Coming, coming”", b: "An ETA set by the person doing it" },
          { label: "Is It Running Late?", a: "You find out when it doesn’t show", b: "The deadline is tracked and late jobs escalate" },
          { label: "Did It Get Done?", a: "Nobody records it", b: "Delivered, timed and ready to rate" },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Tracking Is the Same Everywhere You Sign In",
        body: "Buzz from the web app at your desk and follow it on the phone in a meeting. Your account and workspace are stored on the server, so the status is the same on both.",
      },
    ],
    faqs: [
      { q: "Do I Get Told When the Status Changes?", a: "Yes. You see when someone accepts, with their name and ETA, and you are prompted to rate once it is delivered. You do not need to keep the app open in between." },
      { q: "Can My Manager Track My Requests?", a: "Managers and admins oversee the queue for the teams they look after. Employees see their own requests; spend stays owner-only." },
    ],
  },
  "mobile-app/request-acceptance": {
    sections: [
      {
        type: "checklist",
        heading: "Quick Check Before Tapping Accept",
        intro: "Acceptance is a promise to the requester. A few seconds of thought keeps it honest.",
        items: [
          "Read the note and destination, not just the item name.",
          "Make sure you have what the job needs, like the right cable or enough paper.",
          "Know roughly how long it will take so the ETA you set is real.",
          "If you are mid-job elsewhere, leave it for a teammate.",
        ],
      },
      {
        type: "prose",
        heading: "Accept Time Is a Team Number",
        paragraphs: [
          "The 32-second average accept time pilot offices saw was not about one fast person. It came from every request reaching the whole team at once, on a phone that rings even on silent, so whoever is free can take it.",
          "That is why speed of acceptance is best read per team. A pantry team that accepts quickly at 9 am but slowly at 1 pm is telling you something about lunch-hour staffing, not about any one person.",
        ],
      },
    ],
    faqs: [
      { q: "Does Accepting Start the SLA Clock?", a: "An SLA is the time limit for finishing a request. Every request is timed from the moment it is buzzed, and the deadline applies throughout. Accepting quickly leaves more of that time for actually doing the job." },
    ],
  },
  "mobile-app/delivery-tracking": {
    sections: [
      {
        type: "table",
        heading: "Delivery by Request Type",
        intro: "What “delivered” looks like depends on what was asked for.",
        headers: ["Request", "Delivered Means", "Photo Useful?"],
        rows: [
          ["Coffee to Boss Cabin", "Handed over or left on the desk", "Only if the cabin is empty"],
          ["24 colour copies", "Prints placed in the meeting room", "Yes, to show where they were left"],
          ["HDMI cable", "Cable connected and working", "Rarely"],
          ["Courier pickup", "Parcel handed to the courier and logged", "Yes, as part of the trail"],
          ["AC fix", "Temperature back to normal", "Optional"],
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Mark Delivered at the Door, Not Later",
        body: "Tapping Delivered as you hand something over keeps delivery times accurate. Marking a batch of jobs done at the end of a run makes them look slower than they were and blurs the on-time numbers.",
      },
    ],
    faqs: [
      { q: "Who Sees Delivery Times?", a: "Managers and owners see them through analytics, and staff can see their own record. Full analytics and scorecards are on Pro." },
      { q: "What If I Deliver to the Wrong Room?", a: "Check the destination and note before you set off; they are on the request. If the requester moved, they can say so in the note, or you can confirm before marking it delivered." },
    ],
  },
  "mobile-app/ratings": {
    sections: [
      {
        type: "table",
        heading: "Reading the Stars",
        intro: "A simple guide many offices share with employees so ratings mean the same thing across teams.",
        headers: ["Rating", "Typical Meaning"],
        rows: [
          ["5★", "Right thing, right place, on time"],
          ["4★", "Done well with a small miss, like a slightly later arrival"],
          ["3★", "Done, but something needed fixing"],
          ["2★", "Late or not quite what was asked"],
          ["1★", "The request wasn’t really handled"],
        ],
      },
      {
        type: "metrics",
        heading: "Ratings Next to Other Numbers",
        items: [
          { metric: "4.8★ Average Staff Rating", meaning: "What pilot offices recorded in their first month, which shows most jobs are done well." },
          { metric: "On-Time Rate", meaning: "Reads alongside rating so a late but friendly delivery is not mistaken for a perfect one." },
          { metric: "Accept Time", meaning: "Shows responsiveness, which ratings alone don’t capture." },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Rate the Job, Not the Menu",
        body: "If the pantry was out of juice, that is a catalogue or stock question for your admin, not a reason to give the person who delivered tea a low score.",
      },
    ],
    faqs: [
      { q: "Can Staff See Their Own Ratings?", a: "Ratings feed staff scorecards so people get fair credit for their work. Full scorecards are part of Pro." },
    ],
  },
  "mobile-app/staff-workflow": {
    sections: [
      {
        type: "table",
        heading: "What Staff Tap at Each Step",
        headers: ["Step", "Staff Action", "What the Requester Sees"],
        rows: [
          ["Buzzed", "Phone rings, even on silent", "Waiting for someone to accept"],
          ["Accept", "Tap Accept", "Your name and photo"],
          ["Start", "Tap Start and set an ETA", "When to expect you"],
          ["Deliver", "Tap Delivered, add a photo if useful", "Prompt to rate"],
          ["Rated", "Nothing more to do", "Request closed"],
        ],
      },
      {
        type: "callout",
        tone: "warning",
        title: "Keep the Phone’s Battery and Network in Mind",
        body: "Alerts can only ring on a phone that is charged and online. Staff on long shifts benefit from a charging spot near the pantry or print room.",
      },
    ],
    faqs: [
      { q: "Does the Workflow Differ for Print, Pantry and IT?", a: "The steps are the same: accept, start, deliver, rated. What changes is the job itself and the note that comes with it, like copies and colour for prints." },
      { q: "Can Staff See Their Own History?", a: "Every request is recorded with timings. Free keeps 30 days of history, and Pro adds full analytics, scorecards and audit logs." },
    ],
  },
  "mobile-app/office-management": {
    sections: [
      {
        type: "metrics",
        heading: "Numbers Worth Glancing at on the Go",
        items: [
          { metric: "Waiting Requests", meaning: "Anything not yet accepted is a sign a team is stretched right now." },
          { metric: "Escalations", meaning: "Overdue jobs that reached you need a decision, not another reminder." },
          { metric: "On-Time Rate", meaning: "A daily read on whether teams keep up; pilot offices hit 96%." },
          { metric: "Busiest Hours", meaning: "When the office buzzes most, which helps plan pantry and print cover." },
        ],
      },
      {
        type: "scenario",
        heading: "A Client Visit Across Two Floors",
        persona: "Priya, Office Manager",
        setting: "A client team arrives at 11 for a review in Conference Room B.",
        timeline: [
          { time: "10:40", event: "Priya buzzes for water and coffee for six to Conference Room B from her phone." },
          { time: "10:41", event: "The pantry accepts; she sees the name and ETA." },
          { time: "10:52", event: "Kavya’s print job for the room is delivered; Priya sees it closed." },
          { time: "11:05", event: "An AC request from the room escalates to her, and she calls facilities directly." },
        ],
        outcome: "Priya ran the visit from the corridor without returning to her desk once.",
      },
    ],
    faqs: [
      { q: "Can I See More Than One Office From the Phone?", a: "With Pro’s multi-location support, managers can oversee requests across sites. Larger groups can talk to us about Enterprise." },
    ],
  },
};

const depth: Record<string, Extra> = {
  "mobile-app/ratings": {
    sections: [
      {
        type: "prose",
        heading: "When to Rate, and How Honestly",
        paragraphs: [
          "The best moment to rate is right after delivery, while you still remember whether the coffee was hot and the prints were in the right room. Ratings left hours later tend to drift toward an automatic five stars, which tells nobody anything.",
          "Honest does not mean harsh. A four for a slightly late but otherwise good delivery is useful; it shows the job was done well and hints at timing. Because scorecards put ratings beside accept time and on-time rate, one middling score on a busy day will not define anyone.",
        ],
      },
    ],
    faqs: [
      { q: "Should Guests or Visitors Rate Requests?", a: "Ratings come from the person who buzzed. If you requested refreshments for a client visit, rate based on how it went for your guests." },
    ],
  },
  "mobile-app/staff-workflow": {
    sections: [
      {
        type: "prose",
        heading: "Handling a Rush Without Dropping Anything",
        paragraphs: [
          "Around 11 am, when meetings start and the pantry gets several buzzes at once, the workflow does the sorting. Each request sits in the queue with its waiting time, so staff can see what has been waiting longest and accept in a sensible order.",
          "The rule of thumb is to accept only what you can start now. Two people on the same team each taking one request clears a rush faster than one person accepting three and leaving the rest waiting behind them.",
        ],
      },
    ],
    faqs: [
      { q: "What Should Staff Do at the End of a Shift?", a: "Finish or deliver anything already accepted rather than leaving it open. Unaccepted requests keep pinging the rest of the team, so nothing new is lost." },
    ],
  },
  "mobile-app/delivery-tracking": {
    sections: [
      {
        type: "prose",
        heading: "What the Requester Learns From Delivery",
        paragraphs: [
          "For the person who asked, “delivered” is the end of waiting. They don’t need to check the pantry or wonder whether prints were left in the wrong meeting room, because the request tells them it is done and, if a photo was attached, where.",
          "That certainty matters most when the requester is busy. Kavya walking into a pitch wants to know her 24 colour copies are on the table, not hunt for them. A delivered status with a photo answers that before she opens the door.",
        ],
      },
    ],
    faqs: [
      { q: "Is the Delivery Time Recorded Automatically?", a: "Yes. Tapping Delivered records the time, which feeds on-time figures. Every request is timed from buzz to delivery." },
    ],
  },
  "mobile-app/office-management": {
    sections: [
      {
        type: "prose",
        heading: "Knowing When Not to Step In",
        paragraphs: [
          "Managing from the phone is tempting to overdo. If requests are being accepted within a minute and delivered on time, the best thing a manager can do is leave the queue alone and let first-accept-wins work.",
          "The phone earns its place when something goes wrong: an escalation, a team with requests piling up unaccepted, or a visitor arriving early. Those are moments when a quick call or a buzz from the corridor makes a real difference.",
        ],
      },
    ],
    faqs: [
      { q: "Will I Be Pinged for Every Request?", a: "Managers don’t need to be on every team. Escalations reach you when requests go overdue, so your phone stays quiet when things run well." },
    ],
  },
  "mobile-app/staff-assignment": {
    sections: [
      {
        type: "prose",
        heading: "Why No One Hands Out Jobs",
        paragraphs: [
          "In many offices, someone has to decide who does what: the office manager forwards a message, a supervisor calls a name across the floor. Everything waits on that person, and when they are in a meeting nothing moves.",
          "With assignment on the phone, nobody plays dispatcher. The request reaches everyone who can do it, and the person who is free claims it. Managers stay involved only when it matters, through escalations for requests that were never accepted or are running late.",
        ],
      },
    ],
    faqs: [
      { q: "Does a Request Ever Go to Only One Person?", a: "Only if that person is the only member of the team. For resilience, most offices put at least two people on every team." },
    ],
  },
  "mobile-app/request-tracking": {
    sections: [
      {
        type: "prose",
        heading: "Tracking During a Meeting",
        paragraphs: [
          "The time you most need to know where something is tends to be when you can’t leave the room. A glance at the phone under the table shows whether the coffee for the board is accepted and who is bringing it.",
          "It also helps when plans change. If the meeting moves to Conference Room B, you can see who accepted the request and let them know, instead of the delivery arriving at an empty room.",
        ],
      },
    ],
    faqs: [
      { q: "Can I See Requests My Colleagues Made?", a: "Employees track their own requests. Admins and managers see the wider queue for the teams they look after." },
    ],
  },
};

export const pages: PageContent[] = base.map((p) => {
  const parts = [extra[p.path], more[p.path], depth[p.path]].filter((x): x is Extra => Boolean(x));
  return parts.reduce<PageContent>(
    (acc, e) => ({ ...acc, sections: [...acc.sections, ...e.sections], faqs: [...(acc.faqs ?? []), ...e.faqs] }),
    p,
  );
});
