import type { PageContent } from "../types";

export const pages: PageContent[] = [
  // ───────────────────────────── HUB ─────────────────────────────
  {
    path: "solutions/pantry",
    title: "Pantry Management Software for Offices",
    description:
      "Run your office pantry without phone tag: a one-tap catalogue for coffee, tea, snacks and lunch, routing to whoever accepts first, delivery deadlines and staff ratings.",
    h1: "The office pantry, without the shouting down the hall",
    eyebrow: "Pantry solution",
    lead:
      "ZapBuzzer turns every coffee, tea, snack and lunch order into a tracked request. Employees tap their usual from the pantry catalogue, the pantry team gets pinged at once, and the first person free taps Accept and owns it.",
    keywords: [
      "office pantry management software",
      "pantry request system",
      "office coffee ordering app",
      "pantry staff app",
      "office refreshment requests",
      "cafeteria request management",
    ],
    heroVisual: "catalog",
    sections: [
      {
        type: "problem-solution",
        heading: "Why the pantry is the noisiest corner of most offices",
        intro:
          "Pantry requests are small, frequent and time-sensitive. That combination is exactly what breaks phone calls, intercoms and WhatsApp groups.",
        problem: {
          title: "How it usually works",
          points: [
            "Someone shouts, phones or posts “Raju, boss’s cabin needs two coffees” in a group — and no one knows who has taken it.",
            "Three calls for one coffee: the request, the reminder, and the “is it coming?” follow-up.",
            "The pantry WhatsApp group scrolls so fast that a lunch order for 12 gets buried under ‘ok’ and thumbs-up replies.",
            "Nobody knows how long anything took, who is overloaded, or what the pantry actually costs.",
          ],
        },
        solution: {
          title: "How it works with ZapBuzzer",
          points: [
            "Every order starts from a catalogue item with a destination, so the request is complete the first time.",
            "The whole pantry team is pinged together; the first to tap Accept owns the order and everyone else stands down.",
            "The requester sees the name and photo of whoever is bringing it, plus an ETA.",
            "Every request is timed, rated and counted, so the owner and office manager finally see the pantry in numbers.",
          ],
        },
      },
      {
        type: "visual",
        visual: "before-after",
        heading: "Same coffee, two very different mornings",
        body:
          "Done the old way, getting two coffees to the boss’s cabin needed three phone calls and 25 minutes, and the coffee was cold on arrival. Through ZapBuzzer, that order landed hot in 4 minutes without a single call. Nothing about the pantry staff changed — only how the request reached them.",
        points: [
          "Before: 3 calls and 25 minutes for a coffee that arrived cold",
          "After: no calls and 4 minutes for a coffee that arrived hot",
        ],
      },
      {
        type: "workflow",
        heading: "One pantry order, start to finish",
        intro:
          "The pantry flow follows the same lifecycle as every ZapBuzzer request. Here is what each step means for a cup of coffee.",
        steps: [
          {
            title: "Tap the usual",
            body:
              "An employee opens the app or web app, taps Coffee from the pantry catalogue, picks a destination such as Boss Cabin or Conference Room B, adds a note like “less sugar”, and taps Buzz.",
          },
          {
            title: "The pantry team is pinged",
            body:
              "Everyone on the pantry team is notified at once — in the app, and on Pro also on Telegram and WhatsApp, plus email. Notifications repeat until someone accepts.",
          },
          {
            title: "First to accept owns it",
            body:
              "Whoever is free taps Accept. The request is now theirs, the others drop off, and the requester sees who is on it.",
          },
          {
            title: "Started, with an ETA",
            body:
              "The pantry staffer marks the order as started and gives an ETA, so the person in the board call knows it is three minutes away.",
          },
          {
            title: "Delivered and rated",
            body:
              "On delivery the staffer can attach a photo, and the requester rates the service from one to five stars. The full timeline is stored against the request.",
          },
        ],
      },
      {
        type: "prose",
        eyebrow: "Explore the pantry solution",
        heading: "Everything the pantry handles, one page each",
        paragraphs: [
          "The pantry is not one kind of request. A single espresso for the CEO, a round of masala chai for a client visit, an afternoon snack tray and a lunch order for 12 all behave differently. We have written a page for each so you can see how ZapBuzzer handles your office’s actual habits.",
          "Start with the Pantry Catalog to see how items are set up so that the usual order is always one tap away. Coffee Requests and Tea Requests cover the most frequent orders of the day, including notes, destinations and repeat orders. Snacks Requests covers dry fruits, biscuits and trays for meetings, while Lunch Requests walks through group orders, notes and the owner’s cost view. Office Refreshments looks at meeting and visitor hospitality as a whole.",
          "For the people running the pantry, the Pantry Ordering Workflow explains each state of a request in detail, Pantry Staff Management covers teams, fair attribution and scorecards, and Pantry Request Tracking shows how employees, staff and managers follow every order from Buzz to rating.",
        ],
        bullets: [
          "Pantry Catalog — set up items so regular orders take a single tap",
          "Coffee Requests — the CEO’s coffee in a board call, handled in seconds",
          "Tea Requests — chai rounds, green tea and client-meeting trays",
          "Snacks Requests — dry fruits, biscuits and meeting platters",
          "Lunch Requests — group orders with notes and owner cost visibility",
          "Office Refreshments — hospitality for meetings, visitors and events",
          "Pantry Ordering Workflow — each state from Buzz to rating",
          "Pantry Staff Management — teams, attribution and scorecards",
          "Pantry Request Tracking — live status for everyone involved",
        ],
      },
      {
        type: "scenario",
        heading: "A board call, a coffee, twelve seconds",
        persona: "Aarav, Founder & CEO",
        setting: "Aarav is in a board call in his cabin and cannot step out or pick up the phone.",
        timeline: [
          { time: "10:02", event: "Aarav taps Coffee on his phone, chooses Boss Cabin as the destination and taps Buzz." },
          { time: "10:02", event: "The pantry team sees the request in the app and on Telegram at the same moment." },
          { time: "10:02", event: "Raj accepts 12 seconds later. Aarav sees Raj’s name and photo on the request." },
          { time: "10:03", event: "Raj marks it started with a short ETA." },
          { time: "10:06", event: "Coffee is delivered to the cabin; Raj marks it delivered." },
          { time: "10:40", event: "After the call, Aarav rates the delivery five stars." },
        ],
        outcome:
          "No call was interrupted, nobody had to shout a name down the corridor, and the request left a timed record that shows up in the pantry’s analytics.",
      },
      {
        type: "features",
        heading: "What the pantry team gets out of the box",
        items: [
          {
            title: "A menu for the pantry",
            body: "Coffee, tea, juice, snacks and dry fruits laid out as tap-able items, so a regular order never takes more than a single tap.",
          },
          {
            title: "Destinations",
            body: "Every order says where it goes — Boss Cabin, Conference Room B, the 3rd-floor reception — so staff never have to call back and ask.",
          },
          {
            title: "First-accept-wins",
            body: "Every member of the pantry team receives the request, and it belongs to whoever accepts first. Nobody is left assuming someone else took it.",
          },
          {
            title: "Repeat until accepted",
            body: "Notifications keep repeating until someone accepts, so an order cannot sit unseen on a busy morning.",
          },
          {
            title: "SLA and escalation",
            body: "Each order carries a deadline, and a manager is alerted automatically if it slips past. Pro includes the full escalation chain.",
          },
          {
            title: "Ratings and scorecards",
            body: "Requesters rate each delivery, and staff get fair attribution for the work they actually did.",
          },
          {
            title: "Cost visibility",
            body: "The owner can see the cost of orders such as a team lunch, without making that view available to everyone.",
          },
          {
            title: "Works on a locked phone",
            body: "Pantry staff on the move still hear the buzz, because the mobile app rings on a locked phone or one set to silent.",
          },
        ],
      },
      {
        type: "stats",
        heading: "What pilot offices saw in the first month",
        items: [
          { value: "32s", label: "average accept time" },
          { value: "96%", label: "on-time delivery" },
          { value: "−87%", label: "phone calls" },
          { value: "4.8★", label: "average staff rating" },
        ],
        note: "Figures from ZapBuzzer pilot offices across all request types, first month of use.",
      },
      {
        type: "audience",
        heading: "Who the pantry solution is for",
        items: [
          { role: "Founders and CEOs", benefit: "Coffee in the middle of a board call without picking up the phone or stepping out." },
          { role: "Office managers", benefit: "A quiet pantry WhatsApp group and a clear view of who did what, when." },
          { role: "Pantry staff", benefit: "One clear list of orders, fair credit for every delivery and fewer people shouting their name." },
          { role: "Operations teams", benefit: "Group lunch orders with notes, timings and a cost the owner can see." },
          { role: "Admin and HR", benefit: "Hospitality for interviews, client visits and events that runs on time." },
        ],
      },
      {
        type: "comparison",
        heading: "Pantry WhatsApp group vs ZapBuzzer",
        columns: ["Pantry WhatsApp group", "ZapBuzzer"],
        rows: [
          { label: "Who owns the order", a: "Whoever replies “ok” first, maybe", b: "The person who tapped Accept, shown by name and photo" },
          { label: "Where it goes", a: "Often missing; staff call back to ask", b: "Destination picked with every request" },
          { label: "If nobody responds", a: "Message scrolls away", b: "Notifications repeat; overdue requests escalate" },
          { label: "Timing", a: "Unknown", b: "Every request is timed from Buzz to delivery" },
          { label: "Feedback", a: "Complaints in the corridor", b: "1–5★ rating on every delivery" },
          { label: "Cost", a: "Reconstructed from bills later", b: "Owner-only spend view per request" },
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Start with one floor for free",
        body:
          "The Free plan covers up to 10 staff on one location with the mobile and web app and email notifications — enough to run a single pantry. Telegram and WhatsApp pings, escalation chains and full analytics come with Pro at ₹99 per seat per month.",
      },
    ],
    faqs: [
      {
        q: "Do our pantry staff need smartphones?",
        a: "The pantry team accepts and updates requests from the ZapBuzzer mobile app or web app. On Pro they can also be pinged on Telegram and WhatsApp. The Android app rings through even when the phone is on silent or locked.",
      },
      {
        q: "Can we set up our own pantry items?",
        a: "Yes. You decide what goes in the pantry catalogue: tea, coffee, snacks, juice, dry fruits or anything else your office serves. Employees then pick from that list instead of typing free-form messages.",
      },
      {
        q: "What happens if nobody accepts a coffee request?",
        a: "Notifications keep repeating until someone accepts. Every request also has a deadline, and overdue ones escalate to a manager automatically; the multi-step escalation chain is part of the Pro plan.",
      },
      {
        q: "Can the owner see what the pantry costs?",
        a: "Yes. ZapBuzzer shows request cost to the owner, for example the cost of a lunch order. That spend view is owner-only, so the rest of the team does not see it.",
      },
      {
        q: "How long does it take to get the pantry running?",
        a: "An afternoon is usually enough for most offices. You sign up, add your catalogue and invite the team — no consultant, no setup fees, no setup call. No card is needed for the 14-day trial.",
      },
      {
        q: "Does it work for more than one pantry or office?",
        a: "Multi-location is part of Pro, so each office or floor can have its own pantry team. The Free plan is limited to one location and up to 10 staff.",
      },
    ],
    related: [
      "solutions/pantry/catalog",
      "solutions/pantry/coffee-requests",
      "use-cases/pantry-operations",
      "workflows/coffee-request",
      "features/first-accept-wins",
      "use-cases/reduce-whatsapp-requests",
      "pricing",
      "free-trial",
    ],
    cta: {
      title: "Quiet the pantry this afternoon",
      body: "Start the 14-day free trial, add your coffee and tea to the catalogue, and invite the pantry team — without a card or a setup call.",
    },
  },

  // ───────────────────────────── CATALOG ─────────────────────────────
  {
    path: "solutions/pantry/catalog",
    title: "Office Pantry Catalogue: One-Tap Ordering",
    description:
      "Build a pantry catalogue of coffee, tea, juice, snacks and dry fruits so each person can reorder their regular in a single tap, with notes and destinations built in.",
    h1: "A pantry menu your whole office can order from in one tap",
    eyebrow: "Pantry catalog",
    lead:
      "The pantry catalogue is the menu behind every ZapBuzzer pantry request. When items are set up well, nobody types, nobody calls, and the pantry team always gets a complete order.",
    keywords: [
      "office pantry catalogue",
      "pantry menu app",
      "office coffee menu",
      "one tap pantry order",
      "pantry item list",
    ],
    heroVisual: "catalog",
    sections: [
      {
        type: "prose",
        heading: "Why the catalogue matters more than anything else",
        paragraphs: [
          "Most pantry confusion is not about speed — it is about incomplete requests. “Coffee please” leaves out what kind, how many and where. The pantry staffer either guesses or calls back, and a call back is exactly what the employee was trying to avoid.",
          "A catalogue fixes the request before it is sent. The employee taps an item that the pantry already knows how to make, picks a destination, and adds a short note only when something is different. The pantry team receives the same clear card every time.",
        ],
      },
      {
        type: "visual",
        visual: "catalog",
        heading: "What employees see when they open the pantry",
        body:
          "Familiar items such as tea, coffee, snacks, juice and dry fruits sit in a grid, each reachable in one tap. Pick one, choose where it should go, add a note if needed, and tap Buzz.",
        points: [
          "Large tap targets that work on a phone between meetings",
          "Optional note for sugar, milk or quantity",
          "Destination picker for cabins, meeting rooms and desks",
        ],
      },
      {
        type: "workflow",
        heading: "Setting up your catalogue in an afternoon",
        steps: [
          { title: "List what the pantry actually serves", body: "Walk the pantry with the staff and write down what people order most: filter coffee, black coffee, masala chai, green tea, lemon water, biscuits, dry fruits." },
          { title: "Group items sensibly", body: "Keep hot drinks, cold drinks and snacks apart so people find things without scrolling. Fewer, clearer items beat a long list." },
          { title: "Add your destinations", body: "Add the places orders go: Boss Cabin, Conference Room B, 3rd-floor reception, the sales bay. Destinations save a call every single time." },
          { title: "Route to the pantry team", body: "Point the pantry items at the pantry team so every order notifies the right people at once." },
          { title: "Invite people and watch the first week", body: "Look at which items are used and which are ignored, then trim. The catalogue should mirror real habits." },
        ],
      },
      {
        type: "checklist",
        heading: "A good pantry catalogue checklist",
        items: [
          "Item names match what people say out loud (“Chai”, not “Beverage – Tea – Standard”)",
          "The five most-ordered items are visible without scrolling",
          "Every meeting room and cabin exists as a destination",
          "Notes are used for exceptions, not for the whole order",
          "Items that are out of stock or seasonal are removed rather than left to disappoint",
          "Snacks for meetings are separate from personal snacks so trays are planned properly",
        ],
      },
      {
        type: "scenario",
        heading: "Turning ‘coffee please’ into a complete order",
        persona: "Priya, Office Manager",
        setting: "Priya is replacing the pantry WhatsApp group with a catalogue in a 40-person office.",
        timeline: [
          { time: "Mon 14:00", event: "Priya lists the 12 items the pantry serves and adds 9 destinations, including both meeting rooms and the boss cabin." },
          { time: "Mon 15:30", event: "She invites the pantry team and the rest of the office." },
          { time: "Tue 09:15", event: "The first orders arrive as cards with item, destination and notes — no call-backs." },
          { time: "Fri 17:00", event: "Priya removes two items nobody ordered and moves masala chai to the top." },
        ],
        outcome:
          "In her words: “Coffee arrives before anyone asks twice. The pantry WhatsApp group is finally quiet.”",
      },
      {
        type: "features",
        heading: "How the catalogue connects to the rest of ZapBuzzer",
        items: [
          { title: "Routing", body: "Each catalogue item reaches the pantry team automatically, so nobody has to pick who to ask." },
          { title: "Timing", body: "Every request created from an item is timed, so you can see how long chai takes versus lunch." },
          { title: "Ratings", body: "Ratings attach to the delivery, so you learn which orders delight people and which disappoint." },
          { title: "Analytics", body: "On Pro, full analytics show the most-ordered items and when the office buzzes most." },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "The catalogue is not just for pantry",
        body:
          "The same idea powers print, IT, facilities and courier requests. Many offices start with the pantry catalogue because it is the most frequent request of the day, then add other teams.",
      },
    ],
    faqs: [
      { q: "How many items should our pantry catalogue have?", a: "Enough to cover what people actually order, and no more. Most offices do well with a short list of hot drinks, cold drinks and snacks. You can trim after the first week once you see real usage." },
      { q: "Can employees customise an item?", a: "Yes, with a note on the request — for example less sugar, no milk or two cups. The note travels with the request so the pantry staffer sees it before they start." },
      { q: "Do we need to set prices on items?", a: "You do not need prices to start ordering. ZapBuzzer does show request cost to the owner, which is most useful for things like lunch orders; that view is owner-only." },
      { q: "Can different floors have different catalogues?", a: "Multi-location is part of the Pro plan, which lets each office or location run its own pantry setup. On Free you work with one location." },
      { q: "Can we change the catalogue later?", a: "Yes. The catalogue should evolve with your office. Adding a seasonal drink or removing an unused snack is part of normal upkeep." },
    ],
    related: [
      "solutions/pantry",
      "solutions/pantry/coffee-requests",
      "solutions/pantry/snacks-requests",
      "features/request-catalog",
      "features/one-tap-requests",
      "use-cases/office-manager",
      "free-trial",
    ],
    cta: { title: "Build your pantry menu today", body: "Start a free trial, add your top items and destinations, and send the first one-tap order before the evening chai." },
  },

  // ───────────────────────────── COFFEE ─────────────────────────────
  {
    path: "solutions/pantry/coffee-requests",
    title: "Office Coffee Requests Without Phone Calls",
    description:
      "Order coffee to a cabin or meeting room in one tap. The pantry team is pinged at once, the first free person accepts, and you see who is bringing it and when.",
    h1: "Coffee to the boss cabin, without a single phone call",
    eyebrow: "Coffee requests",
    lead:
      "Coffee is the request that started ZapBuzzer: three calls for one coffee, and it still arrived cold. Here is how a one-tap coffee request reaches the pantry, gets owned and arrives hot.",
    keywords: [
      "office coffee request app",
      "order coffee to meeting room",
      "coffee for boss cabin",
      "pantry coffee ordering",
      "coffee request tracking",
    ],
    heroVisual: "acceptance",
    sections: [
      {
        type: "problem-solution",
        heading: "Why shouting for Raju to bring two coffees fails",
        problem: {
          title: "The phone-tag version",
          points: [
            "Call the pantry. Nobody picks up because they are carrying a tray.",
            "Call again. Someone says yes, but two staffers both think the other one is doing it.",
            "Call a third time. Coffee arrives after 25 minutes, and it is cold.",
          ],
        },
        solution: {
          title: "The ZapBuzzer version",
          points: [
            "Tap Coffee, pick Boss Cabin, add “two cups” and tap Buzz.",
            "Everyone in the pantry team gets pinged, and whoever accepts first takes the order.",
            "You see who is on it and the ETA. Four minutes later, two hot coffees.",
          ],
        },
      },
      {
        type: "visual",
        visual: "acceptance",
        heading: "First-accept-wins, explained with a coffee",
        body:
          "When a coffee request lands, every pantry staffer sees it. The first person free taps Accept and the order is theirs. Everyone else sees it is taken and moves on, so there are never two coffees arriving at the same door — or none.",
      },
      {
        type: "scenario",
        heading: "Coffee during a board call",
        persona: "Aarav, Founder & CEO, Acme HQ",
        setting: "Aarav is mid-presentation in a board call and needs coffee for himself and a guest.",
        timeline: [
          { time: "11:00", event: "Aarav taps Coffee on his phone, picks Boss Cabin, adds “two cups, one black”, taps Buzz." },
          { time: "11:00", event: "The pantry team sees it on Telegram and in the app." },
          { time: "11:00", event: "Raj taps Accept 12 seconds later." },
          { time: "11:01", event: "Raj starts the order and sets an ETA of three minutes." },
          { time: "11:04", event: "Two coffees arrive. Raj marks the request delivered." },
        ],
        outcome:
          "“The office runs quieter. Nobody’s shouting names down the hall. Coffee arrives before anyone asks twice.” — Aarav Sharma, Founder & CEO, Acme HQ (Pune)",
      },
      {
        type: "workflow",
        heading: "What a coffee request looks like to each person",
        steps: [
          { title: "Requester", body: "Taps Coffee, chooses a destination, optionally adds a note, and taps Buzz. Then sees the accepting staffer’s name and photo and the ETA." },
          { title: "Pantry team", body: "Receives the request on every channel the office uses. Notifications repeat until someone accepts." },
          { title: "Accepting staffer", body: "Owns the order, marks it started with an ETA, and marks it delivered — optionally with a photo." },
          { title: "Manager", body: "Sees overdue coffee requests escalate automatically and can review timings and ratings later." },
        ],
      },
      {
        type: "metrics",
        heading: "Numbers worth watching for coffee",
        intro: "Coffee is high-volume and time-sensitive, so small delays show up quickly in these metrics.",
        items: [
          { metric: "Accept time", meaning: "How long from Buzz to someone tapping Accept. Pilot offices averaged 32 seconds across all request types." },
          { metric: "Delivery time", meaning: "From Accept to delivered — the honest measure of whether coffee arrives hot." },
          { metric: "On-time rate", meaning: "Share of coffee requests delivered within their deadline." },
          { metric: "Rating", meaning: "The 1–5★ score requesters give each delivery." },
          { metric: "Peak hours", meaning: "When the office buzzes most, so you can staff the pantry around the morning and post-lunch rush." },
        ],
      },
      {
        type: "checklist",
        heading: "Tips for smooth coffee orders",
        items: [
          "Name coffee items the way your office talks: filter coffee, black, cappuccino",
          "Use the note for quantity and sugar instead of creating dozens of variations",
          "Add every cabin and meeting room as a destination",
          "Keep at least two people on the pantry team so first-accept-wins has someone to pick it up",
          "Rate deliveries honestly — staff scorecards depend on it",
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Telegram and WhatsApp pings are on Pro",
        body:
          "The Free plan sends email notifications alongside the mobile and web app. Pro adds Telegram and WhatsApp, which most pantry teams prefer because they already have those apps open all day.",
      },
    ],
    faqs: [
      { q: "Can I order coffee for someone else’s meeting room?", a: "Yes. The destination is chosen with each request, so you can send coffee to Conference Room B or a client’s seat as easily as your own desk." },
      { q: "What if two staff try to accept the same coffee?", a: "Only the first tap wins. The request is assigned to that person and the others see it is already taken, so the same coffee is never made twice." },
      { q: "How do I know my coffee is actually coming?", a: "Once accepted, you see the staffer’s name and photo and, when they start, an ETA. If nobody accepts, notifications keep repeating and an overdue request escalates to a manager." },
      { q: "Can I repeat yesterday’s order?", a: "Your usual order lives in the pantry catalogue, so it is one tap away every time. Add a note only when something changes." },
      { q: "Will pantry staff hear the buzz if their phone is on silent?", a: "Yes. The ZapBuzzer mobile app is designed to ring on a locked or silenced phone, so a coffee request sitting in a pocket still gets heard." },
    ],
    related: [
      "solutions/pantry",
      "solutions/pantry/tea-requests",
      "workflows/coffee-request",
      "features/first-accept-wins",
      "use-cases/ceo",
      "mobile-app",
      "demo",
    ],
    cta: { title: "Get your first hot coffee in four minutes", body: "Start the free trial, add Coffee to your catalogue, and send it to the boss cabin today." },
  },

  // ───────────────────────────── TEA ─────────────────────────────
  {
    path: "solutions/pantry/tea-requests",
    title: "Tea Requests for Offices: Chai on Time",
    description:
      "Handle chai rounds, green tea and tea trays for client meetings with tracked requests. Destinations, notes and first-accept-wins keep every cup on time.",
    h1: "Chai rounds and tea trays that arrive when the meeting needs them",
    eyebrow: "Tea requests",
    lead:
      "Tea in an Indian office is rarely one cup. It is the 4 pm chai round, the tray for a client visit, the green tea with no sugar. ZapBuzzer gives each of these a clear request the pantry can own.",
    keywords: [
      "office tea request",
      "chai ordering office",
      "tea for client meeting",
      "pantry tea tracking",
      "office tea service app",
    ],
    heroVisual: "staff-queue",
    sections: [
      {
        type: "prose",
        heading: "Tea is a ritual, and rituals break under phone tag",
        paragraphs: [
          "Most offices have a tea rhythm: a morning cup, an afternoon round, and trays whenever a client walks in. The rhythm is predictable, but the requests still arrive as shouts, intercom calls and WhatsApp messages that do not say how many cups or which room.",
          "With ZapBuzzer, each kind of tea becomes a catalogue item. The requester says where and how many in the note, the pantry team sees the full order, and whoever is free takes it. When the afternoon round hits, the staff queue shows every pending request in one place instead of five phone calls stacking up.",
        ],
      },
      {
        type: "visual",
        visual: "staff-queue",
        heading: "The afternoon rush, seen from the pantry",
        body:
          "At 4 pm the pantry staff queue fills with tea requests from cabins, desks and meeting rooms. Each card shows item, destination and notes, with an Accept button. Staff pick what they can carry next, and the rest of the team sees what is still open.",
        points: ["One list instead of many phone calls", "Accepted requests drop off for everyone else", "Notes like “no sugar” stay visible"],
      },
      {
        type: "scenario",
        heading: "A client visit with ten minutes’ notice",
        persona: "Sneha, HR Executive",
        setting: "Three candidates and a client arrive at the same time; Conference Room B needs tea for six.",
        timeline: [
          { time: "15:50", event: "Sneha taps Tea, chooses Conference Room B and notes “6 cups, 2 without sugar”." },
          { time: "15:50", event: "The pantry team is pinged; Suresh accepts within seconds." },
          { time: "15:52", event: "Suresh starts the order with a five-minute ETA." },
          { time: "15:57", event: "The tray arrives before the meeting begins; Suresh marks it delivered." },
          { time: "16:30", event: "Sneha rates the service after the meeting." },
        ],
        outcome: "The client meeting started on time with tea on the table, and Sneha never left her desk to chase the pantry.",
      },
      {
        type: "table",
        heading: "Common tea requests and how to set them up",
        headers: ["Request", "Catalogue item", "Typical note", "Destination"],
        rows: [
          ["Personal cup", "Chai", "Less sugar", "Desk or cabin"],
          ["Afternoon round for a team", "Chai", "8 cups", "Sales bay"],
          ["Client tray", "Tea", "6 cups, 2 without sugar", "Conference Room B"],
          ["Health option", "Green tea", "No sugar", "Desk"],
          ["Interview panel", "Tea", "4 cups plus water", "Interview room"],
        ],
      },
      {
        type: "features",
        heading: "What makes tea requests work",
        items: [
          { title: "Notes travel with the order", body: "Sugar, milk and count go in the note, so the pantry does not have to call back." },
          { title: "Destinations per request", body: "A round for the sales bay and a tray for a meeting room are just two destinations, not two different processes." },
          { title: "Repeat notifications", body: "If the pantry is busy, notifications repeat until someone accepts, so a tray order cannot slip." },
          { title: "SLA deadlines", body: "Requests carry deadlines, and a late one is raised to a manager so a client is never left waiting." },
        ],
      },
      {
        type: "checklist",
        heading: "Before your next client visit",
        items: [
          "Add the meeting room as a destination",
          "Include the number of cups and sugar preferences in the note",
          "Send the request a few minutes before guests arrive, not after",
          "Check the request shows Accepted before you walk in",
        ],
      },
      {
        "type": "metrics",
        "heading": "Tea numbers worth a glance",
        "items": [
          {
            "metric": "Peak tea hour",
            "meaning": "When chai orders spike, often mid-afternoon, so staffing can follow."
          },
          {
            "metric": "Accept time in the rush",
            "meaning": "Whether orders sit unowned while the kettle is busy."
          },
          {
            "metric": "Ratings by item",
            "meaning": "Whether green tea or masala chai is the one that disappoints."
          }
        ]
      },
      {
        "type": "callout",
        "tone": "tip",
        "title": "Make the usual order the default",
        "body": "If most of the floor drinks the same chai, make it a catalogue item with a clear name so it is one tap away. Notes are then only needed for the exceptions, like less sugar or no milk."
      },
    ],
    faqs: [
      { q: "Can pantry staff batch several tea orders?", a: "Each order is its own request with its own owner, but one staffer can accept several and deliver them in one walk. Each requester still sees their own status." },
      { q: "Can I order tea for a group in one request?", a: "Yes. Put the number of cups and any preferences in the note. The pantry staffer sees the whole order on one card and can plan the tray." },
      { q: "Should chai and green tea be separate items?", a: "Usually yes. Separate items make your analytics more useful and stop the pantry from guessing what “tea” means." },
      { q: "What if the pantry is overwhelmed at 4 pm?", a: "Requests stay in the pantry queue and notifications repeat until accepted. Overdue requests escalate to a manager, and on Pro the escalation chain can continue up the line." },
      { q: "Can visitors order tea themselves?", a: "Requests are made by people in your workspace. In practice, the host or reception orders on the visitor’s behalf and picks the meeting room as the destination." },
    ],
    related: [
      "solutions/pantry",
      "solutions/pantry/coffee-requests",
      "solutions/pantry/office-refreshments",
      "features/request-catalog",
      "use-cases/hr",
      "sla",
      "pricing",
    ],
    cta: { title: "Make the 4 pm chai round painless", body: "Try ZapBuzzer free for 14 days and see your pantry queue fill up — in the app, not on the phone." },
  },

  // ───────────────────────────── SNACKS ─────────────────────────────
  {
    path: "solutions/pantry/snacks-requests",
    title: "Office Snacks Requests and Meeting Platters",
    description:
      "Request biscuits, dry fruits and meeting platters from the office pantry in one tap, with notes, destinations, deadlines and ratings for every order.",
    h1: "Snacks for the desk, the meeting and the long afternoon",
    eyebrow: "Snacks requests",
    lead:
      "Snack requests are easy to forget and easy to get wrong — a plate for four becomes a plate for two, or arrives after the meeting. ZapBuzzer gives every snack order a destination, an owner and a deadline.",
    keywords: [
      "office snacks request",
      "meeting snack platter",
      "dry fruits office pantry",
      "pantry snack ordering",
      "office snack management",
    ],
    heroVisual: "mobile-app",
    sections: [
      {
        type: "problem-solution",
        heading: "Why snack orders go missing",
        problem: {
          title: "What usually happens",
          points: [
            "Snack requests are added as an afterthought to a tea call and forgotten.",
            "Nobody says how many people are in the room.",
            "The plate arrives once the meeting has ended.",
          ],
        },
        solution: {
          title: "What changes with ZapBuzzer",
          points: [
            "Snacks are their own catalogue items — dry fruits, biscuits, a meeting platter.",
            "The note carries headcount and preferences.",
            "The deadline and ETA make lateness visible before it happens.",
          ],
        },
      },
      {
        type: "visual",
        visual: "mobile-app",
        heading: "Ordering from the phone between meetings",
        body:
          "Employees order from the mobile app request grid: tap Snacks, choose a destination, write “for 6, one vegan” and tap Buzz. It takes a few seconds while walking to the meeting room.",
      },
      {
        type: "scenario",
        heading: "A long planning session that needs fuel",
        persona: "Vivek, Operations",
        setting: "Vivek is running a three-hour planning session in Conference Room A with eight people.",
        timeline: [
          { time: "14:00", event: "Vivek orders tea for 8 and a snack platter, noting “one person with nut allergy”." },
          { time: "14:00", event: "Meena on the pantry team accepts and starts with an ETA of ten minutes." },
          { time: "14:11", event: "Meena delivers and attaches a photo to the delivery." },
          { time: "16:00", event: "Vivek sends a second snack request with “refill, same as before”." },
          { time: "17:05", event: "After the session he rates both deliveries." },
        ],
        outcome: "Two orders, both on time, with the allergy note visible to the person preparing the plate.",
      },
      {
        type: "features",
        heading: "Snack orders, handled properly",
        items: [
          { title: "Separate items for personal and meeting snacks", body: "A handful of dry fruits for a desk and a platter for a room are different jobs; the catalogue keeps them apart." },
          { title: "Notes for headcount and dietary needs", body: "Allergies, vegetarian or Jain preferences and counts are written once and seen by the person preparing the plate." },
          { title: "Delivery photo", body: "Staff can attach a photo on delivery, which helps when the requester is in a meeting and not watching." },
          { title: "Ratings", body: "A 1–5★ rating on each delivery shows which snack orders people like." },
        ],
      },
      {
        type: "metrics",
        heading: "What snack data tells you",
        items: [
          { metric: "Most-requested items", meaning: "What the office actually eats, useful when restocking the pantry." },
          { metric: "Meeting-related orders", meaning: "How often meeting rooms trigger snack orders and at what times." },
          { metric: "Delivery time", meaning: "Whether platters arrive before the meeting or after it ends." },
          { metric: "Rating trend", meaning: "Whether snack quality and timing are improving." },
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Order snacks with the tea, not after it",
        body: "Two requests sent together reach the pantry at the same time, so one staffer can bring the whole tray in one trip.",
      },
      {
        "type": "table",
        "heading": "Snack orders by occasion",
        "intro": "Examples of how offices word the request and the note.",
        "headers": [
          "Occasion",
          "What to pick",
          "What to note"
        ],
        "rows": [
          [
            "Afternoon slump at your desk",
            "A single snack item",
            "Usually nothing — the usual order is one tap"
          ],
          [
            "Client meeting",
            "Dry fruits or a small platter",
            "Number of guests and the room"
          ],
          [
            "Long workshop",
            "Snacks in rounds",
            "Headcount, timing of each round, allergies"
          ],
          [
            "Team celebration",
            "Several items in one go",
            "Where to set up and when"
          ]
        ]
      },
      {
        "type": "callout",
        "tone": "tip",
        "title": "Split long sessions into rounds",
        "body": "For a session that runs all afternoon, send one request per round instead of one huge order at noon. Each round gets its own timer, its own owner and arrives fresh rather than sitting out for hours."
      },
      {
        "type": "audience",
        "heading": "Who orders snacks most",
        "items": [
          {
            "role": "Team leads",
            "benefit": "Keep a planning session going without someone leaving to fetch food."
          },
          {
            "role": "Reception and hosts",
            "benefit": "Have something ready on the table when visitors walk in."
          },
          {
            "role": "Office managers",
            "benefit": "See which snacks are popular before restocking the pantry."
          },
          {
            "role": "Employees at their desks",
            "benefit": "Get a small order without phoning the pantry or walking down."
          }
        ]
      },
    ],
    faqs: [
      { q: "Can snack requests help with restocking?", a: "Every request is recorded per item, so over a few weeks you can see what is ordered most and what is rarely touched. That is a better guide for the next purchase than guesswork." },
      { q: "Can I order snacks to be ready at a specific time?", a: "Add the time in the note when you send the request. For larger orders, sending a little earlier gives the pantry room to plan." },
      { q: "Can I note allergies or dietary needs?", a: "Yes. Add them to the note on the request. The note is shown to the pantry staffer who accepts the order, before they start preparing it." },
      { q: "Can the pantry attach a photo when the platter is delivered?", a: "Yes. Delivery can include a photo, which is handy when the requester is busy in a meeting and wants to confirm what was brought." },
      { q: "Will we know which snacks people actually like?", a: "Requests and ratings are recorded per item, so over time you see what is ordered and rated well. Full analytics and scorecards are part of Pro." },
      { q: "Is a snack request treated differently from coffee?", a: "It follows the same lifecycle — Buzz, accept, start, deliver, rate — but you can treat it as a separate catalogue item so timings and analytics stay meaningful." },
    ],
    related: [
      "solutions/pantry",
      "solutions/pantry/catalog",
      "solutions/pantry/office-refreshments",
      "features/delivery-confirmation",
      "use-cases/operations",
      "mobile-app/requests",
      "free-trial",
    ],
    cta: { title: "Stop forgetting the snacks", body: "Add snacks to your pantry catalogue and let the team order with a note and a destination." },
  },

  // ───────────────────────────── LUNCH ─────────────────────────────
  {
    path: "solutions/pantry/lunch-requests",
    title: "Group Lunch Requests for the Office",
    description:
      "Order lunch for one or for a team of 12 with item picks and notes. The pantry queues it, the requester rates it, and the owner sees what each lunch cost.",
    h1: "Lunch for 12, ordered once, tracked to the last plate",
    eyebrow: "Lunch requests",
    lead:
      "Lunch orders are the biggest pantry request of the day and the easiest to muddle. ZapBuzzer turns a team lunch into one clear request with notes, an owner, a deadline, a rating — and a cost the owner can see.",
    keywords: [
      "office lunch ordering",
      "team lunch request",
      "group lunch office app",
      "lunch order tracking",
      "office lunch cost visibility",
    ],
    heroVisual: "request-timeline",
    sections: [
      {
        type: "prose",
        heading: "Why lunch is different from coffee",
        paragraphs: [
          "A coffee is one item to one room. Lunch for a team is many items, dietary notes, a delivery time and a bill. When lunch is organised in a WhatsApp thread, the order is spread across twenty messages and nobody can say what was finally agreed.",
          "With ZapBuzzer, the organiser picks items and writes the note once. The pantry queues the order, one staffer owns it, and the timeline shows every step. Afterwards the requester rates it, and the owner sees the cost in the owner-only spend view.",
        ],
      },
      {
        type: "scenario",
        heading: "Lunch for a 12-person workshop",
        persona: "Vivek, Operations",
        setting: "Vivek is hosting a full-day workshop and needs lunch for 12 in the training room at 1 pm.",
        timeline: [
          { time: "11:30", event: "Vivek picks the lunch items and adds a note: “12 people, 3 veg Jain, serve at 13:00, training room”." },
          { time: "11:31", event: "The pantry queues the request; Rakesh accepts it." },
          { time: "12:40", event: "Rakesh marks it started with an ETA of 20 minutes." },
          { time: "12:58", event: "Lunch is laid out and marked delivered with a photo." },
          { time: "14:15", event: "Vivek rates the lunch. The owner sees the order’s cost in the spend view." },
        ],
        outcome: "One request replaced a long thread, the Jain meals were right, and the cost was visible without anyone collecting bills.",
      },
      {
        type: "visual",
        visual: "request-timeline",
        heading: "The lunch timeline everyone can see",
        body:
          "Requested, accepted, started, delivered, rated — each with a timestamp. When the organiser wonders whether lunch is on its way, the answer is on the request, not on the phone.",
      },
      {
        type: "workflow",
        heading: "How a lunch request moves",
        steps: [
          { title: "Pick and note", body: "The organiser picks items from the catalogue and writes headcount, dietary needs, time and room in the note." },
          { title: "Queue and accept", body: "The pantry team is notified; one person accepts and becomes responsible for the whole order." },
          { title: "Prepare and start", body: "When preparation or pickup begins, the staffer marks it started with an ETA." },
          { title: "Deliver", body: "The staffer marks the order delivered, optionally with a photo of the setup." },
          { title: "Rate and review cost", body: "The organiser rates the delivery. The owner sees the cost of the order in the owner-only view." },
        ],
      },
      {
        type: "visual",
        visual: "analytics",
        heading: "Lunch spend, visible to the owner only",
        body:
          "Request cost visibility lets the owner see what lunch orders cost, alongside how often they happen. The view is owner-only, so team members order freely without seeing company spend.",
      },
      {
        type: "audience",
        heading: "Who benefits",
        items: [
          { role: "Operations and team leads", benefit: "One request for a group lunch instead of a long chat thread." },
          { role: "Pantry staff", benefit: "A complete order with notes, time and room, owned by one person." },
          { role: "Owners and founders", benefit: "A clear view of what lunches cost, per request." },
          { role: "HR", benefit: "Reliable lunches for trainings, onboarding days and interview panels." },
        ],
      },
      {
        type: "checklist",
        heading: "What to put in a lunch note",
        items: ["Headcount", "Dietary needs: veg, Jain, allergies", "Serve time", "Room or destination", "Anything that must not be forgotten: plates, water, cutlery"],
      },
      {
        "type": "table",
        "heading": "Planning lunch lead time",
        "intro": "A rough guide; your pantry will know its own pace.",
        "headers": [
          "Order",
          "Send it",
          "Why"
        ],
        "rows": [
          [
            "Lunch for one",
            "Shortly before you want it",
            "Similar to a snack order"
          ],
          [
            "Working lunch for 4",
            "About an hour ahead",
            "Gives the pantry time to plan around other orders"
          ],
          [
            "Workshop lunch for 12",
            "Morning of the session",
            "Headcount and dietary notes need preparing"
          ]
        ]
      },
      {
        "type": "comparison",
        "heading": "Lunch by group chat vs by request",
        "columns": [
          "Group chat",
          "ZapBuzzer"
        ],
        "rows": [
          {
            "label": "Headcount",
            "a": "Changes across five messages",
            "b": "In the note on one request"
          },
          {
            "label": "Dietary needs",
            "a": "Easy to miss",
            "b": "Shown to whoever accepts"
          },
          {
            "label": "Cost",
            "a": "Shows up later on a bill",
            "b": "Visible to the owner per request"
          }
        ]
      },
    ],
    faqs: [
      { q: "What if the headcount changes after I order?", a: "Let the staffer who accepted know as early as possible, or send an additional request for the extra people. Changes are easier the earlier they come." },
      { q: "Can I order lunch for a group in one request?", a: "Yes. Pick the items and put headcount, dietary needs and timing in the note. One pantry staffer accepts and owns the entire order." },
      { q: "Who can see what lunch cost?", a: "Request cost visibility is for the owner. Spend is shown in an owner-only view, so regular employees and staff do not see it." },
      { q: "What if lunch is running late?", a: "Every request has a deadline. If lunch is overdue, it escalates to a manager automatically; Pro adds a full escalation chain." },
      { q: "Can we see how often teams order lunch?", a: "Yes. Requests are recorded and timed, and full analytics on Pro show when and how often lunch orders happen." },
      { q: "Can lunch be marked with a photo when it is set up?", a: "Yes. The staffer can attach a photo on delivery, which helps the organiser confirm the setup without leaving their session." },
    ],
    related: [
      "solutions/pantry",
      "solutions/pantry/office-refreshments",
      "workflows/lunch-request",
      "admin/spend-visibility",
      "use-cases/operations",
      "pricing/pro",
      "demo",
    ],
    cta: { title: "Run the next team lunch from one request", body: "Start your free trial and see the cost of every lunch in the owner view." },
  },

  // ───────────────────────────── REFRESHMENTS ─────────────────────────────
  {
    path: "solutions/pantry/office-refreshments",
    title: "Office Refreshments for Meetings and Guests",
    description:
      "Plan refreshments for client meetings, interviews and office events with tracked requests: juice, tea, snacks and water on time, with an owner for every order.",
    h1: "Hospitality that is ready before the guests sit down",
    eyebrow: "Office refreshments",
    lead:
      "Refreshments are how an office says welcome. ZapBuzzer helps reception, HR and hosts get water, juice, tea and snacks to the right room at the right time — and gives the pantry a fair, clear queue.",
    keywords: [
      "office refreshments management",
      "meeting refreshments request",
      "visitor hospitality office",
      "client meeting refreshments",
      "office event refreshments",
    ],
    heroVisual: "request-dashboard",
    sections: [
      {
        type: "prose",
        heading: "Refreshments are a first impression",
        paragraphs: [
          "A client who waits ten minutes for water notices. So does a candidate who sits in an interview room with nothing on the table. Refreshments are rarely complicated, but they are judged on timing.",
          "ZapBuzzer treats each hospitality need as a request with a destination and deadline. Reception, HR or the host sends it, the pantry owns it, and anyone watching the dashboard can see what is pending, in progress or done.",
        ],
      },
      {
        type: "visual",
        visual: "request-dashboard",
        heading: "The office manager’s view of a busy day",
        body:
          "On the request dashboard, every refreshment order shows its status: requested, accepted, started or delivered. An office manager can see at a glance that Conference Room B has tea on the way and the interview room is still waiting for water.",
      },
      {
        type: "table",
        heading: "Typical refreshment moments",
        headers: ["Moment", "Who requests", "What", "Timing tip"],
        rows: [
          ["Client meeting", "Host", "Tea, juice, snacks", "Send 10 minutes before arrival"],
          ["Interview panel", "HR", "Water and tea", "Send when the candidate checks in"],
          ["Visitor at reception", "Reception", "Water or juice", "Send as soon as the guest sits"],
          ["Town hall", "Admin", "Tea round and snacks", "Split into several requests by area"],
          ["Late-night release", "Team lead", "Coffee and snacks", "Note the headcount and floor"],
        ],
      },
      {
        type: "scenario",
        heading: "Reception handles three guests at once",
        persona: "Neha, Reception",
        setting: "At 10:30 a client, a vendor and a candidate arrive within five minutes of each other.",
        timeline: [
          { time: "10:30", event: "Neha sends juice to the waiting area for the client." },
          { time: "10:32", event: "She sends water to the interview room for the candidate." },
          { time: "10:34", event: "She sends tea for two to Conference Room A for the vendor meeting." },
          { time: "10:34", event: "The pantry team accepts all three; two different staffers pick them up." },
          { time: "10:41", event: "All three requests are marked delivered." },
        ],
        outcome: "Neha stayed at the front desk the whole time, and every guest had something to drink within minutes.",
      },
      {
        type: "features",
        heading: "What helps hospitality run smoothly",
        items: [
          { title: "Anyone can request", body: "Reception, HR and hosts each send their own requests without going through one person." },
          { title: "Parallel handling", body: "Because the first free staffer accepts, several requests are handled at once by different people." },
          { title: "Deadlines and escalation", body: "Overdue requests escalate to a manager, so a guest is never forgotten." },
          { title: "History", body: "Every request is kept, so you can see how events and visits were served. Free keeps 30 days; Pro adds full reports." },
        ],
      },
      {
        type: "callout",
        tone: "warning",
        title: "Big events need several requests",
        body: "For a town hall or offsite, split refreshments by area or time slot. Smaller requests can be accepted by different staff in parallel, which is faster than one huge order.",
      },
      {
        "type": "checklist",
        "heading": "Before guests arrive",
        "items": [
          "Confirm the meeting room and send requests to that destination",
          "Note the headcount and any dietary needs",
          "Send the request a few minutes before guests arrive, not after",
          "For a long meeting, plan a second round as its own request",
          "Rate the order afterwards so the team knows what worked"
        ]
      },
      {
        "type": "comparison",
        "heading": "Hospitality by phone vs by request",
        "columns": [
          "Calling the pantry",
          "ZapBuzzer request"
        ],
        "rows": [
          {
            "label": "During a visitor’s arrival",
            "a": "Reception juggles the phone and the guest",
            "b": "A tap, then attention back on the guest"
          },
          {
            "label": "Several rooms at once",
            "a": "Orders get mixed up between rooms",
            "b": "Each request carries its own destination"
          },
          {
            "label": "When it goes quiet",
            "a": "Nobody knows if tea is coming",
            "b": "Owner and ETA visible to the host"
          },
          {
            "label": "Cost of hosting",
            "a": "Unknown",
            "b": "Visible to the owner per request"
          }
        ]
      },
      {
        "type": "prose",
        "heading": "Refreshments say something about the office",
        "paragraphs": [
          "A guest who is offered tea promptly and served without fuss reads that as a sign of how the business is run. A host who has to step out to chase the pantry sends the opposite message. Refreshments are a small thing that visitors notice more than most people expect.",
          "Treating refreshments as tracked requests rather than favours asked by phone means the experience no longer depends on who happens to be at reception that day."
        ]
      },
    ],
    faqs: [
      { q: "Can several people order refreshments for the same meeting?", a: "They can, but it is cleaner if the host sends one request with the full headcount and preferences. That avoids duplicate trays arriving at the same room." },
      { q: "Can the owner see what hosting visitors costs?", a: "Yes. Request cost is visible to the owner in an owner-only view, so hospitality spend can be understood without exposing it to everyone." },
      { q: "Can reception order refreshments for visitors?", a: "Yes. Reception sends the request on the visitor’s behalf and chooses the room or waiting area as the destination." },
      { q: "How do we handle an event with many guests?", a: "Split it into several requests by area or time. Different pantry staff can accept them in parallel, and each one is tracked separately." },
      { q: "Can managers see what is pending?", a: "Yes. The request dashboard shows every request and its status, so an office manager can spot a waiting room before a guest complains." },
      { q: "Is there a record of refreshments for past events?", a: "Requests are stored in history — the last 30 days on Free, with audit logs and reports on Pro." },
    ],
    related: [
      "solutions/pantry",
      "solutions/pantry/tea-requests",
      "solutions/pantry/snacks-requests",
      "use-cases/reception",
      "features/request-management",
      "admin/owner-dashboard",
      "free-trial",
    ],
    cta: { title: "Welcome every guest on time", body: "Try ZapBuzzer free for 14 days and run your next client visit from the request dashboard." },
  },

  // ───────────────────────────── ORDERING WORKFLOW ─────────────────────────────
  {
    path: "solutions/pantry/ordering-workflow",
    title: "Pantry Ordering Workflow, Step by Step",
    description:
      "See every state of a pantry order — Buzzed, Accepted, Started, Delivered, Rated — and what employees, pantry staff and managers do at each step.",
    h1: "Every pantry order, from Buzz to five stars",
    eyebrow: "Ordering workflow",
    lead:
      "A pantry order passes through five clear states. Knowing what happens at each one — and who is responsible — is what keeps the pantry quiet and fair.",
    keywords: [
      "pantry ordering workflow",
      "pantry request lifecycle",
      "office order process",
      "pantry order states",
      "pantry workflow app",
    ],
    heroVisual: "request-timeline",
    sections: [
      {
        type: "visual",
        visual: "request-timeline",
        heading: "The five states of a pantry order",
        body: "Buzzed, Accepted, Started, Delivered, Rated. Each state is timestamped, so the request carries its own history.",
        points: ["Buzzed: request created and routed", "Accepted: one staffer owns it", "Started: work begun, ETA given", "Delivered: arrived, photo optional", "Rated: 1–5★ from the requester"],
      },
      {
        type: "workflow",
        heading: "What happens in each state",
        steps: [
          { title: "Buzzed", body: "The employee picks an item, destination and note and taps Buzz. The pantry team is notified on every channel the office uses, and notifications repeat until someone accepts. The SLA clock starts." },
          { title: "Accepted", body: "The first staffer to tap Accept owns the order. Others see it is taken. The requester sees the name and photo of the person on it." },
          { title: "Started", body: "The staffer marks the order started and sets an ETA. The requester now knows how long to wait." },
          { title: "Delivered", body: "The order arrives and is marked delivered, optionally with a photo. The SLA clock stops." },
          { title: "Rated", body: "The requester gives one to five stars. The rating is attributed to the staffer who did the work." },
        ],
      },
      {
        type: "table",
        heading: "Who does what at each step",
        headers: ["State", "Employee", "Pantry staff", "Manager"],
        rows: [
          ["Buzzed", "Sends the request", "Gets pinged", "Can see it on the dashboard"],
          ["Accepted", "Sees who owns it", "One person owns it", "Sees assignment"],
          ["Started", "Sees ETA", "Prepares the order", "Watches the deadline"],
          ["Delivered", "Receives it", "Marks delivered, photo optional", "Sees on-time or late"],
          ["Rated", "Rates 1–5★", "Gets credit", "Reviews scorecards"],
        ],
      },
      {
        type: "visual",
        visual: "sla-timer",
        heading: "What if an order stalls?",
        body:
          "Every request has a deadline. If a pantry order is still not delivered when the timer runs out, it escalates to a manager automatically. On Pro, an escalation chain can take it further up the line if nobody acts.",
      },
      {
        type: "scenario",
        heading: "One order, traced through every state",
        persona: "Tanvi, Design",
        setting: "Tanvi wants a cold coffee at her desk on the 3rd floor during a deadline crunch.",
        timeline: [
          { time: "15:10", event: "Buzzed: Tanvi taps Cold coffee, picks her desk, notes “no sugar”." },
          { time: "15:10", event: "Accepted: Raj accepts after a few seconds." },
          { time: "15:11", event: "Started: Raj sets a four-minute ETA." },
          { time: "15:15", event: "Delivered: Raj marks it delivered." },
          { time: "15:16", event: "Rated: Tanvi gives five stars." },
        ],
        outcome: "Six minutes, five states, zero calls — and a record that counts toward Raj’s scorecard.",
      },
      {
        type: "checklist",
        heading: "Rules that keep the workflow fair",
        items: [
          "Only accept what you can start now",
          "Always set an ETA when you start",
          "Mark delivered when the order is in the person’s hands, not when it leaves the pantry",
          "Requesters should rate every delivery, good or bad",
          "Managers should look at overdue requests daily, not just at month end",
        ],
      },
      {
        "type": "table",
        "heading": "What each state looks like on screen",
        "headers": [
          "State",
          "Requester sees",
          "Pantry staff see"
        ],
        "rows": [
          [
            "Requested",
            "Order sent, waiting for someone to accept",
            "A buzz that repeats until someone accepts"
          ],
          [
            "Accepted",
            "Who is on it, with name and photo",
            "The order in their own queue"
          ],
          [
            "Started",
            "An ETA",
            "The timer still running against the deadline"
          ],
          [
            "Delivered",
            "Delivered status and any photo",
            "The order closed from their side"
          ],
          [
            "Rated",
            "Their 1–5★ rating recorded",
            "The rating added to their scorecard"
          ]
        ]
      },
      {
        "type": "checklist",
        "heading": "Rolling the workflow out to a new pantry team",
        "items": [
          "Install the mobile app on every pantry staffer’s phone and test a buzz on silent",
          "Run a few practice orders so everyone sees accept, start and deliver",
          "Agree what a realistic ETA means for coffee versus lunch",
          "Tell employees to rate every order for the first few weeks",
          "Retire the pantry WhatsApp group once orders are flowing through ZapBuzzer"
        ]
      },
      {
        "type": "callout",
        "tone": "info",
        "title": "Channels by plan",
        "body": "On Free, staff get app and email notifications. Telegram and WhatsApp pings, the SLA escalation chain and full analytics are part of Pro at ₹99 per seat per month."
      },
    ],
    faqs: [
      { q: "Can an order skip the Started state?", a: "Marking an order started is what gives the requester an ETA, so it is worth doing even for quick orders. For a coffee it is a single tap before walking out of the pantry." },
      { q: "How long does it take to set up the workflow?", a: "For most offices it takes an afternoon. Create an account, bring your team in and place a first order — no consultant and no setup fees." },
      { q: "When does the SLA timer start?", a: "Every request is timed from the moment it is created. The deadline applies until the request is delivered, and overdue requests escalate automatically." },
      { q: "Can a staffer accept and then pass the order on?", a: "The core rule is that the first to accept owns the order. If your office needs reassignment, managers can handle it — see staff assignment in the admin section." },
      { q: "Is rating required?", a: "Rating is how staff get fair credit and how managers see quality, so we strongly encourage it. It takes one tap from one to five stars." },
      { q: "Can we see the full timeline later?", a: "Yes. Each request keeps its states and timestamps in history — 30 days on Free, with audit logs and reports on Pro." },
    ],
    related: [
      "solutions/pantry",
      "solutions/pantry/request-tracking",
      "features/request-status",
      "sla/timers",
      "workflows/coffee-request",
      "how-it-works",
    ],
    cta: { title: "Watch the workflow live", body: "Open the read-only demo to see real request states, or start a free trial and send your first order." },
  },

  // ───────────────────────────── STAFF MANAGEMENT ─────────────────────────────
  {
    path: "solutions/pantry/staff-management",
    title: "Pantry Staff Management and Scorecards",
    description:
      "Organise your pantry team with first-accept-wins routing, fair attribution, ratings and scorecards, so good work is seen and nobody is shouted at down the hall.",
    h1: "A fairer day for the people who run your pantry",
    eyebrow: "Pantry staff",
    lead:
      "ZapBuzzer is people-first. Pantry staff get one clear queue, credit for every order they deliver and scorecards that show their real work — not another nag tool.",
    keywords: [
      "pantry staff management",
      "pantry staff scorecard",
      "office boy management app",
      "pantry team performance",
      "pantry staff ratings",
    ],
    heroVisual: "scorecard",
    sections: [
      {
        type: "prose",
        heading: "The pantry team has the hardest job in the office",
        paragraphs: [
          "Pantry staff are called by name all day, from every direction, usually while their hands are full. When something is late, they get the blame; when it is on time, nobody notices. In many offices one dependable person ends up doing most of the work because everyone calls them first.",
          "ZapBuzzer changes the setup. Requests go to the whole team, the person who is free accepts, and every delivery is credited to whoever did it. Over a month, that produces a scorecard that reflects reality — and a manager who can see who is carrying the load.",
        ],
      },
      {
        type: "visual",
        visual: "scorecard",
        heading: "Scorecards built from real deliveries",
        body:
          "Each staffer’s scorecard shows how many requests they handled, how quickly they accepted, their on-time share and their average rating. Full analytics and scorecards are part of the Pro plan.",
        points: ["Requests delivered", "Average accept time", "On-time percentage", "Average star rating"],
      },
      {
        type: "features",
        heading: "Tools for running the pantry team",
        items: [
          { title: "One team, one queue", body: "Everyone on the pantry team sees the same open requests; nobody needs to be the human switchboard." },
          { title: "First-accept-wins", body: "Work goes to whoever is free, which spreads the load naturally." },
          { title: "Fair attribution", body: "The person who accepted and delivered gets the credit and the rating." },
          { title: "Roles and permissions", body: "Granular permissions per role keep staff, managers and owners in the right views." },
          { title: "Audit log", body: "Every action is audit-logged, so disputes about who did what are settled by the record." },
          { title: "Mobile first", body: "Staff accept and update requests on the mobile app, which rings through even on a silent or locked phone." },
        ],
      },
      {
        type: "scenario",
        heading: "Spotting an overloaded staffer",
        persona: "Deepak, Admin Head",
        setting: "Deepak runs a pantry team of four across two floors and reviews scorecards on Friday.",
        timeline: [
          { time: "Fri 16:00", event: "Deepak opens the scorecards and sees Raj handled almost half of all pantry requests this week." },
          { time: "Fri 16:05", event: "He checks analytics: peaks are 10–11 am and 4–5 pm on the 3rd floor." },
          { time: "Fri 16:15", event: "He moves Meena to the 3rd-floor pantry during those hours." },
          { time: "Next Fri", event: "Requests are spread more evenly and on-time delivery improves." },
        ],
        outcome: "Raj got recognition for a heavy week, and the team got a schedule that matches when the office actually buzzes.",
      },
      {
        type: "metrics",
        heading: "Metrics that are fair to staff",
        intro: "Good metrics reward the work, not the loudest person.",
        items: [
          { metric: "Accept time", meaning: "How quickly someone picks up an open request." },
          { metric: "On-time delivery", meaning: "Share of requests delivered within the deadline." },
          { metric: "Average rating", meaning: "Requester satisfaction on a 1–5★ scale." },
          { metric: "Volume", meaning: "How many requests a person handled — useful for spotting overload." },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Scorecards are for recognition first",
        body: "Use scorecards to thank people and balance shifts. A low rating on one order is a signal to look at the request, not a verdict on a person.",
      },
      {
        "type": "workflow",
        "heading": "Bringing a new pantry staffer on board",
        "steps": [
          {
            "title": "Invite",
            "body": "Add them to the workspace and the pantry team, with the role that fits."
          },
          {
            "title": "Install the app",
            "body": "Set up the mobile app and check that a test buzz rings through on silent."
          },
          {
            "title": "Shadow a rush",
            "body": "Let them accept orders alongside an experienced colleague during a busy hour."
          },
          {
            "title": "Own their scorecard",
            "body": "After a couple of weeks, review their accept times and ratings together."
          }
        ]
      },
      {
        "type": "comparison",
        "heading": "Managing by feel vs managing by data",
        "columns": [
          "By feel",
          "With scorecards"
        ],
        "rows": [
          {
            "label": "Who is fastest",
            "a": "Whoever the boss sees most",
            "b": "Accept and delivery times from real orders"
          },
          {
            "label": "Quality",
            "a": "One loud complaint",
            "b": "Average rating over many orders"
          },
          {
            "label": "Workload",
            "a": "Unclear until someone burns out",
            "b": "Orders handled per person, per day"
          }
        ]
      },
    ],
    faqs: [
      { q: "Can a manager reassign an order between staff?", a: "The core rule is first-accept-wins, so whoever accepts owns the order. If an order goes overdue it escalates to a manager, who can sort it out with the team." },
      { q: "Can scorecards be used for recognition?", a: "Yes, and that is what they are designed for. ZapBuzzer is people-first, so scorecards give staff fair attribution for good work rather than acting as another nag tool." },
      { q: "How are pantry staff added?", a: "You invite them to your workspace and add them to the pantry team. Since the account and workspace are held server-side, staff just sign in on the web or mobile app." },
      { q: "Do staff see each other’s scorecards?", a: "Roles have granular permissions, so you decide what each role can see. Owners and managers typically review scorecards; spend is always owner-only." },
      { q: "Which plan includes scorecards?", a: "Full analytics and scorecards are part of Pro at ₹99 per seat per month. The Free plan covers basic request handling for up to 10 staff." },
      { q: "Can staff work across several floors or offices?", a: "Multi-location is a Pro feature, so you can organise pantry teams by office or location." },
      { q: "Will the app wake staff on a silent phone?", a: "Yes. A locked or silenced phone still rings for new requests in the mobile app, so they are heard on a busy shift." },
    ],
    related: [
      "solutions/pantry",
      "solutions/pantry/request-tracking",
      "analytics/staff",
      "admin/team-management",
      "use-cases/staff-accountability",
      "mobile-app/staff-workflow",
      "pricing/pro",
    ],
    cta: { title: "Give your pantry team the credit they earn", body: "Start a free trial, invite your pantry staff, and see the first week’s scorecards." },
  },

  // ───────────────────────────── REQUEST TRACKING ─────────────────────────────
  {
    path: "solutions/pantry/request-tracking",
    title: "Track Pantry Requests in Real Time",
    description:
      "Follow every pantry order live: who accepted it, the ETA, delivery photo and rating, plus history and dashboards for office managers and owners.",
    h1: "Know where every coffee, tray and lunch is right now",
    eyebrow: "Pantry tracking",
    lead:
      "Tracking replaces the “is it coming?” call. Employees see their order’s state, staff see their queue, and managers see the whole pantry — all from the same request record.",
    keywords: [
      "pantry request tracking",
      "track office orders",
      "pantry order status",
      "pantry dashboard",
      "office request history",
    ],
    heroVisual: "request-dashboard",
    sections: [
      {
        type: "problem-solution",
        heading: "The cost of not knowing",
        problem: {
          title: "Without tracking",
          points: [
            "Employees call the pantry to ask if their order is coming — the second and third call.",
            "Managers find out about delays from complaints.",
            "There is no record of what was ordered or when.",
          ],
        },
        solution: {
          title: "With ZapBuzzer",
          points: [
            "Each request shows its state, owner and ETA.",
            "Overdue requests escalate automatically.",
            "History keeps every request with timestamps and ratings.",
          ],
        },
      },
      {
        type: "visual",
        visual: "request-dashboard",
        heading: "The pantry at a glance",
        body: "The dashboard lists live pantry requests with their status — requested, accepted, started, delivered — so an office manager can see bottlenecks before people start calling.",
      },
      {
        type: "audience",
        heading: "What each person tracks",
        items: [
          { role: "Employee", benefit: "Their own order: who is bringing it and the ETA." },
          { role: "Pantry staff", benefit: "Their accepted orders and what is still open for the team." },
          { role: "Office manager", benefit: "All pantry requests, overdue items and escalations." },
          { role: "Owner", benefit: "Trends, scorecards and the owner-only cost of orders like lunch." },
        ],
      },
      {
        type: "scenario",
        heading: "No more “is it coming?” calls",
        persona: "Kavya, Sales Lead",
        setting: "Kavya ordered water and tea for a client call in Conference Room B and is about to start.",
        timeline: [
          { time: "14:55", event: "Kavya sends the request and sees it accepted by Suresh." },
          { time: "14:56", event: "The request shows Started with a three-minute ETA." },
          { time: "14:59", event: "Status flips to Delivered as the tray reaches the room." },
        ],
        outcome: "Kavya checked her phone instead of calling the pantry, and walked into the meeting knowing everything was ready.",
      },
      {
        type: "visual",
        visual: "delivery",
        heading: "Delivered, confirmed, rated",
        body: "On delivery, the staffer can add a photo and the requester is prompted to rate. That last step closes the record and feeds staff scorecards.",
      },
      {
        type: "table",
        heading: "What is kept for each pantry request",
        headers: ["Field", "Why it matters"],
        rows: [
          ["Item and note", "What was ordered and any special instructions"],
          ["Destination", "Where it went"],
          ["Accepted by", "Who owned it"],
          ["Timestamps per state", "How long each step took"],
          ["Delivery photo", "Proof of delivery when needed"],
          ["Rating", "How the requester felt about it"],
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "History by plan",
        body: "The Free plan keeps the last 30 days of history. Pro adds full analytics, audit logs and reports for longer-term tracking.",
      },
      {
        "type": "comparison",
        "heading": "Following up on an order, before and after",
        "columns": [
          "Phone and chat",
          "ZapBuzzer"
        ],
        "rows": [
          {
            "label": "Is my order seen?",
            "a": "Message read, no reply",
            "b": "Accepted, with the staffer’s name and photo"
          },
          {
            "label": "How long?",
            "a": "Call the pantry again",
            "b": "ETA set when the order is started"
          },
          {
            "label": "Did it reach the right room?",
            "a": "Someone walks around looking for it",
            "b": "Delivered to the destination on the request, photo optional"
          },
          {
            "label": "Was it any good?",
            "a": "Complaints travel by word of mouth",
            "b": "A 1–5★ rating on the request"
          }
        ]
      },
      {
        "type": "metrics",
        "heading": "What tracking data shows a pantry manager",
        "items": [
          {
            "metric": "Open orders right now",
            "meaning": "Everything requested but not yet delivered, so the 4 pm rush is visible before it becomes a problem."
          },
          {
            "metric": "Unaccepted orders",
            "meaning": "Orders still ringing on staff phones. These are the ones that turn into phone calls if they sit."
          },
          {
            "metric": "Delivery time by destination",
            "meaning": "Whether the boss cabin on the 5th floor waits longer than desks next to the pantry."
          },
          {
            "metric": "Ratings by item",
            "meaning": "Whether a slow filter coffee or a cold sandwich is pulling scores down."
          }
        ]
      },
      {
        "type": "checklist",
        "heading": "Getting the most out of pantry tracking",
        "items": [
          "Ask staff to set an honest ETA when they start, not the hopeful one",
          "Encourage requesters to rate every order, including the good ones",
          "Use delivery photos for meeting rooms where the requester is not present",
          "Glance at unaccepted orders during known rush hours",
          "Review the week’s overdue orders with the pantry lead, not in front of the whole office"
        ]
      },
    ],
    faqs: [
      { q: "Can I see orders I placed for a meeting room?", a: "Yes. Your requests show their status wherever they were sent, so you can track an order for Conference Room B from your desk or phone." },
      { q: "Does tracking add work for pantry staff?", a: "Very little. Accept, start and deliver are single taps on the phone, and those taps are what create the timeline everyone else sees." },
      { q: "What does a delivery photo add?", a: "It confirms where and how the order was left, which is useful when the requester is in a meeting or the order went to a shared room." },
      { q: "Can employees see who is bringing their order?", a: "Yes. Once accepted, the requester sees the staffer’s name and photo, and an ETA once the order is started." },
      { q: "How long is pantry history kept?", a: "The Free plan keeps the last 30 days of history. Pro includes full analytics, audit logs and reports." },
      { q: "Do managers get alerted to late orders?", a: "Every request has a deadline, and overdue ones escalate to a manager automatically. Pro adds the escalation chain." },
      { q: "Can I track orders from my phone?", a: "Yes. The mobile app lets employees track their requests and staff accept and update them on the move." },
    ],
    related: [
      "solutions/pantry",
      "solutions/pantry/ordering-workflow",
      "features/request-tracking",
      "features/eta-tracking",
      "use-cases/track-office-requests",
      "mobile-app/request-tracking",
      "demo",
    ],
    cta: { title: "Replace the follow-up call with a status", body: "Try ZapBuzzer free and track your pantry from Buzz to rating." },
  },
];
