import type { PageContent } from "../types";

export const pages: PageContent[] = [
  // ───────────────────────────── HUB ─────────────────────────────
  {
    path: "solutions/print-room",
    title: "Print Room Request Management for Offices",
    description:
      "Upload a PDF, set copies and colour, and get prints delivered to your seat. ZapBuzzer gives the print room a tracked queue, SLA timers and analytics.",
    h1: "Print jobs that land on your desk, not in a WhatsApp group",
    eyebrow: "Print room solution",
    lead:
      "ZapBuzzer turns every print job into a tracked request. Upload the PDF, choose copies and colour, pick where it should go, and the print room is pinged at once. The first person free accepts it and delivers it to your seat or meeting room.",
    keywords: [
      "print room management software",
      "office print request system",
      "print job tracking office",
      "pdf print request app",
      "print room workflow",
      "office printing requests",
    ],
    heroVisual: "print-job",
    sections: [
      {
        type: "problem-solution",
        heading: "Where print jobs go to get lost",
        intro: "ZapBuzzer was started in a Pune office where print jobs kept disappearing inside a WhatsApp group chat. It is a common story.",
        problem: {
          title: "The usual print room",
          points: [
            "A PDF is dropped into a group chat with “24 copies please” and nothing else.",
            "Nobody knows whether it should be colour, which version of the file, or where to bring it.",
            "The requester calls, then walks down to the print room to check.",
            "Urgent jobs and routine ones sit in the same pile with no order.",
          ],
        },
        solution: {
          title: "The print room with ZapBuzzer",
          points: [
            "The PDF, copy count, colour choice and destination arrive together as one request.",
            "The print team is pinged at once; the first to accept owns the job.",
            "The requester sees who is printing it and when it will arrive.",
            "Every job is timed against a deadline, and overdue jobs escalate.",
          ],
        },
      },
      {
        type: "visual",
        visual: "print-job",
        heading: "A print job, as the print room sees it",
        body:
          "Each request arrives as a job card: the uploaded PDF, number of copies, colour or black-and-white, destination and any note. There is nothing to ask and nothing to guess.",
        points: ["Uploaded PDF attached to the request", "Copies and colour set by the requester", "Destination: desk, cabin or meeting room", "Deadline and status visible to everyone involved"],
      },
      {
        type: "scenario",
        heading: "A pitch in ten minutes",
        persona: "Kavya, Sales Lead",
        setting: "Kavya has a client pitch in Conference Room B in ten minutes and needs 24 colour copies of the deck.",
        timeline: [
          { time: "10:50", event: "Kavya uploads the PDF, sets 24 copies in colour, picks Conference Room B, and taps Buzz." },
          { time: "10:50", event: "The print room team is pinged in the app and on Telegram." },
          { time: "10:51", event: "Anil accepts the job. Kavya sees his name and photo." },
          { time: "10:52", event: "Anil starts printing and sets an ETA." },
          { time: "10:58", event: "The copies are placed in Conference Room B and marked delivered." },
          { time: "11:00", event: "The client sits down to a printed deck on the table." },
        ],
        outcome: "“Print jobs land at my desk before the client even sits down. Zero chase calls.” — Kavya, Sales Lead",
      },
      {
        type: "workflow",
        heading: "How a print request moves",
        steps: [
          { title: "Upload and set", body: "The requester uploads a PDF, sets copies and colour, chooses a destination and taps Buzz." },
          { title: "Ping the print room", body: "The print team is notified at once on every channel the office uses; notifications repeat until someone accepts." },
          { title: "First to accept owns it", body: "Whoever is at the printer and free taps Accept. The job is theirs." },
          { title: "Print and deliver", body: "The staffer starts the job with an ETA, prints, and delivers to the seat or room — optionally with a photo." },
          { title: "Rate", body: "The requester rates the job from one to five stars, crediting the person who did it." },
        ],
      },
      {
        type: "prose",
        eyebrow: "Explore the print room solution",
        heading: "Every part of the print room, explained",
        paragraphs: [
          "Print work looks simple until you have twenty requests before a board meeting. We have broken the print room into the pieces that matter, each with its own page.",
          "Print Requests explains the basic request and what makes a good one. PDF Print Requests covers uploading files so the right version gets printed. Color Printing looks at when colour is worth it and how to make that choice explicit, and Copy Management covers copy counts, sets and large runs.",
          "For the people running the print room, Print Queue shows how jobs line up and get picked, Print Request Tracking shows status from upload to delivery, and Print Room Staff Workflow walks through a print staffer’s day. Print SLA Management explains deadlines and escalation for print, and Print Analytics shows what the numbers say about volume, timing and quality.",
        ],
        bullets: [
          "Print Requests — the basic print request and how to send a good one",
          "PDF Print Requests — upload the file, print the right version",
          "Color Printing — make colour an explicit choice",
          "Copy Management — copy counts, sets and big runs",
          "Print Queue — how jobs line up and get picked",
          "Print Request Tracking — status from upload to delivery",
          "Print Room Staff Workflow — a print staffer’s day",
          "Print SLA Management — deadlines and escalation for print",
          "Print Analytics — volume, timing and ratings",
        ],
      },
      {
        type: "features",
        heading: "What the print room gets",
        items: [
          { title: "PDF upload", body: "The file travels with the request, so nobody digs through a chat for the latest version." },
          { title: "Copies and colour", body: "Set by the requester up front, visible on the job card." },
          { title: "Delivery to your seat", body: "Prints are delivered to the destination chosen in the request — a desk, cabin or meeting room." },
          { title: "First-accept-wins", body: "Every job reaches the full print team, and whoever taps Accept first becomes its owner." },
          { title: "SLA and escalation", body: "Every job carries a deadline, and a manager is alerted automatically when one runs late. The escalation chain is on Pro." },
          { title: "Analytics and scorecards", body: "Who is fastest, who gets five stars and when the office prints most. Full analytics are on Pro." },
        ],
      },
      {
        type: "comparison",
        heading: "Print jobs in a chat group vs ZapBuzzer",
        columns: ["Chat group", "ZapBuzzer"],
        rows: [
          { label: "File", a: "Somewhere in the scroll", b: "Attached to the request" },
          { label: "Copies and colour", a: "Often missing", b: "Set before sending" },
          { label: "Owner", a: "Unclear", b: "The person who accepted, by name" },
          { label: "Delivery", a: "Requester walks to collect", b: "Delivered to seat or room" },
          { label: "Late jobs", a: "Discovered by the requester", b: "Auto-escalated to a manager" },
          { label: "Record", a: "None", b: "Timed, rated and kept in history" },
        ],
      },
      {
        type: "stats",
        heading: "Pilot results, first month",
        items: [
          { value: "32s", label: "average accept time" },
          { value: "96%", label: "on-time delivery" },
          { value: "−87%", label: "phone calls" },
          { value: "4.8★", label: "average staff rating" },
        ],
        note: "Across all request types in ZapBuzzer pilot offices.",
      },
      {
        type: "audience",
        heading: "Who relies on the print room",
        items: [
          { role: "Sales teams", benefit: "Decks and proposals printed and placed in the meeting room before the client arrives." },
          { role: "Leadership", benefit: "Board packs ready on time without chasing anyone." },
          { role: "HR and admin", benefit: "Offer letters, forms and onboarding packs handled as tracked jobs." },
          { role: "Print room staff", benefit: "Complete jobs, a clear queue and credit for every delivery." },
        ],
      },
      {
        type: "callout",
        tone: "tip",
        title: "Plans for the print room",
        body: "Free covers up to 10 staff at one location with email notifications. Pro at ₹99 per seat per month adds Telegram and WhatsApp pings, the SLA escalation chain, full analytics and audit logs. Every plan starts with a 14-day trial, no credit card.",
      },
    ],
    faqs: [
      { q: "What file type can be uploaded for printing?", a: "Print requests are built around uploading a PDF. Exporting to PDF before sending keeps formatting fixed and avoids printing the wrong version." },
      { q: "Do prints get delivered or do I collect them?", a: "The request includes a destination, and the print staffer delivers the job to your seat, cabin or meeting room." },
      { q: "Does ZapBuzzer connect directly to our printers?", a: "ZapBuzzer manages the request and the people who handle it: the file, settings, owner, deadline and delivery. The print staffer prints on your office’s existing printers." },
      { q: "What happens to urgent print jobs?", a: "Every job has a deadline. If it is not delivered in time it escalates to a manager automatically; on Pro, the escalation chain can go further." },
      { q: "Can we see print volume by team or time of day?", a: "Analytics show when the office prints most and how fast jobs are handled. Full analytics and scorecards are part of Pro." },
      { q: "How quickly can we start?", a: "Most offices are running in an afternoon: sign up, invite the print team and send the first job. No setup fees and no setup call." },
    ],
    related: [
      "solutions/print-room/print-requests",
      "solutions/print-room/pdf-print-requests",
      "workflows/print-request",
      "use-cases/sales",
      "features/first-accept-wins",
      "sla",
      "pricing",
      "free-trial",
    ],
    cta: { title: "Get the next deck printed before the client sits down", body: "Start a 14-day free trial, invite your print room team and send the first PDF today." },
  },

  // ───────────────────────────── PRINT REQUESTS ─────────────────────────────
  {
    path: "solutions/print-room/print-requests",
    title: "Office Print Requests in One Tap",
    description:
      "Send a complete print request — file, copies, colour, destination and note — so the print room never has to call back. Tracked from Buzz to delivery.",
    h1: "A print request that answers every question before it is asked",
    eyebrow: "Print requests",
    lead:
      "A good print request has five parts: the file, copies, colour, where it goes and anything unusual. ZapBuzzer asks for all five up front, so the print room can start the moment it accepts.",
    keywords: [
      "office print request",
      "send print job to print room",
      "print request form",
      "internal print request",
      "print request app",
    ],
    heroVisual: "mobile-app",
    sections: [
      {
        type: "prose",
        heading: "Why print requests bounce back",
        paragraphs: [
          "Most print delays start with a question. Which file? How many? Colour or not? Stapled? Where should it go? Each question is another message or call, and each one costs minutes when someone is about to walk into a meeting.",
          "A ZapBuzzer print request is built to remove those questions. The requester sets everything in one go and taps Buzz. The print team sees a complete job card and can start immediately.",
        ],
      },
      {
        type: "table",
        heading: "The five parts of a complete print request",
        headers: ["Part", "Example", "Why it matters"],
        rows: [
          ["File", "Q3-proposal.pdf", "Prints the right version"],
          ["Copies", "24", "No guessing at the printer"],
          ["Colour", "Colour", "Colour vs black-and-white decided up front"],
          ["Destination", "Conference Room B", "Delivered without a call"],
          ["Note", "Staple each set, double-sided", "Finishing done right first time"],
        ],
      },
      {
        type: "visual",
        visual: "mobile-app",
        heading: "Sent from a phone on the way to the meeting",
        body: "Print requests can be sent from the web app at a desk or the mobile app in a corridor. Pick Print, attach the PDF, set copies and colour, choose a room and tap Buzz.",
      },
      {
        type: "scenario",
        heading: "HR prints an onboarding pack",
        persona: "Sneha, HR Executive",
        setting: "Five new joiners start on Monday; each needs a printed onboarding pack at their desk.",
        timeline: [
          { time: "Fri 15:00", event: "Sneha uploads the onboarding PDF, sets 5 copies black-and-white, notes “staple, one per new joiner desk”." },
          { time: "Fri 15:01", event: "Anil accepts the job." },
          { time: "Fri 15:20", event: "Anil delivers the stack to HR and adds a delivery photo." },
          { time: "Fri 15:25", event: "Sneha rates the job five stars." },
        ],
        outcome: "No back-and-forth about which version or how many — and a record of when the packs were delivered.",
      },
      {
        type: "workflow",
        heading: "After you tap Buzz",
        steps: [
          { title: "Notified", body: "The print team is pinged at once; notifications repeat until someone accepts." },
          { title: "Owned", body: "The first to accept owns the job; you see their name and photo." },
          { title: "In progress", body: "They start the job and set an ETA." },
          { title: "Delivered and rated", body: "Prints arrive at your destination; you rate the job." },
        ],
      },
      {
        type: "checklist",
        heading: "Before you send a print request",
        items: [
          "Export to PDF so layouts do not shift",
          "Double-check the copy count",
          "Choose colour only when it adds something",
          "Pick the room or desk where you need it",
          "Use the note for stapling, sides or binding instructions",
          "Send early when you can — deadlines are easier to meet with a few minutes’ notice",
        ],
      },
      {
        "type": "comparison",
        "heading": "A vague request vs a complete one",
        "columns": [
          "Vague",
          "Complete"
        ],
        "rows": [
          {
            "label": "What",
            "a": "“Print the deck”",
            "b": "The final PDF attached"
          },
          {
            "label": "How many",
            "a": "Not mentioned",
            "b": "8 copies"
          },
          {
            "label": "Colour",
            "a": "Left to guess",
            "b": "Colour"
          },
          {
            "label": "Where",
            "a": "“My place”",
            "b": "Conference Room B"
          },
          {
            "label": "Anything else",
            "a": "Sent in a follow-up message",
            "b": "Note: staple top left, needed by 2:45"
          }
        ]
      },
      {
        "type": "audience",
        "heading": "Who sends print requests",
        "items": [
          {
            "role": "Sales",
            "benefit": "Pitch decks and proposals that must arrive before the client sits down."
          },
          {
            "role": "HR",
            "benefit": "Offer letters and onboarding packs, printed without leaving the interview room."
          },
          {
            "role": "Finance and legal",
            "benefit": "Contracts and statements printed in the right number of copies for signing."
          },
          {
            "role": "Leadership",
            "benefit": "Board packs delivered to the boardroom, not left in a tray."
          }
        ]
      },
      {
        "type": "prose",
        "heading": "A request is a promise both ways",
        "paragraphs": [
          "When a requester fills in the file, copies, colour and destination, they are making a clear ask. When a staffer taps Accept, they are taking ownership of it in front of everyone. That small exchange replaces the back-and-forth that usually eats the first ten minutes of an urgent job.",
          "Because the request is the single source of truth, there is no question later about what was asked for. If the copies were wrong, the request shows whether the count was wrong or the print was."
        ]
      },
    ],
    faqs: [
      { q: "Can I send a print request for someone else’s meeting?", a: "Yes. You choose the destination when you send it, so the prints can go to a colleague’s desk or any meeting room." },
      { q: "What if nobody in the print room is free?", a: "Notifications repeat until someone accepts, and the job’s deadline keeps running. If it goes overdue, it escalates to a manager automatically." },
      { q: "Can I send a print request from my phone?", a: "Yes. The mobile app and web app both let you upload a PDF, set copies and colour, pick a destination and send." },
      { q: "Can I add finishing instructions like stapling?", a: "Yes, use the note. The note appears on the job card for whoever accepts the request." },
      { q: "Who handles my request?", a: "It goes to the whole print team, and whoever taps Accept first owns it. You see their name and photo." },
      { q: "What if I need it urgently?", a: "Say so in the note and send it as early as possible. Every request is timed against a deadline and overdue ones escalate to a manager." },
    ],
    related: [
      "solutions/print-room",
      "solutions/print-room/pdf-print-requests",
      "solutions/print-room/copy-management",
      "features/one-tap-requests",
      "workflows/print-request",
      "use-cases/hr",
      "free-trial",
    ],
    cta: { title: "Send your first complete print request", body: "Start the free trial and print something today without a single follow-up call." },
  },

  // ───────────────────────────── PDF ─────────────────────────────
  {
    path: "solutions/print-room/pdf-print-requests",
    title: "PDF Print Requests: Upload and Deliver",
    description:
      "Upload a PDF with your print request so the print room always prints the right version. Set copies and colour, and get it delivered to your seat or room.",
    h1: "Upload the PDF. Get the right version printed.",
    eyebrow: "PDF printing",
    lead:
      "The most common print mistake is the wrong file. ZapBuzzer attaches the PDF to the request itself, so the version you send is the version that gets printed.",
    keywords: [
      "pdf print request",
      "upload pdf to print office",
      "office pdf printing",
      "print pdf delivered to desk",
      "pdf print job tracking",
    ],
    heroVisual: "print-job",
    sections: [
      {
        type: "problem-solution",
        heading: "Files in chats are a version-control problem",
        problem: {
          title: "Without an attached file",
          points: [
            "The print room scrolls a group to find “the latest” deck.",
            "An older draft gets printed and the requester only notices in the meeting.",
            "Word and slide files shift fonts and layouts on another machine.",
          ],
        },
        solution: {
          title: "With a PDF on the request",
          points: [
            "The file is part of the request and cannot be mixed up with another message.",
            "PDFs keep layout fixed, so what you see is what prints.",
            "The job card shows the file alongside copies, colour and destination.",
          ],
        },
      },
      {
        type: "visual",
        visual: "print-job",
        heading: "The PDF travels with the job",
        body: "The print staffer opens the job card, sees the attached PDF, copies, colour and destination, and prints. Nothing to search for and nobody to call.",
      },
      {
        type: "workflow",
        heading: "Sending a PDF print request",
        steps: [
          { title: "Export to PDF", body: "Save your deck, proposal or form as a PDF so fonts and layout stay fixed." },
          { title: "Upload", body: "Open Print in ZapBuzzer and upload the PDF." },
          { title: "Set copies and colour", body: "Choose the number of copies and colour or black-and-white." },
          { title: "Choose a destination", body: "Your desk, a cabin or a meeting room." },
          { title: "Buzz", body: "Send it. The print team is pinged and the first to accept owns the job." },
        ],
      },
      {
        type: "scenario",
        heading: "A last-minute revision",
        persona: "Kavya, Sales Lead",
        setting: "Kavya fixes a pricing slide 15 minutes before a pitch and needs the new version printed.",
        timeline: [
          { time: "10:45", event: "Kavya exports the revised deck to PDF and uploads it with 24 colour copies to Conference Room B." },
          { time: "10:45", event: "Anil accepts; the job card shows the new file only." },
          { time: "10:47", event: "Anil starts the job with an ETA." },
          { time: "10:56", event: "Copies are placed in the room and marked delivered." },
        ],
        outcome: "The corrected deck was the one on the table, because the old version never entered the print room’s hands.",
      },
      {
        type: "checklist",
        heading: "PDF tips for clean prints",
        items: [
          "Check page size before exporting",
          "Remove hidden or draft slides you do not want printed",
          "Name the file clearly so the job card is easy to read",
          "Note any page ranges or double-sided printing in the request note",
          "If you revise the file, send a new request rather than describing changes in a chat",
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Every job is kept in history",
        body: "Each print request — file, settings, owner and timestamps — stays in history: the last 30 days on Free, with audit logs and reports on Pro.",
      },
      {
        "type": "comparison",
        "heading": "Where the file lives",
        "columns": [
          "Shared via chat or USB",
          "Attached to the request"
        ],
        "rows": [
          {
            "label": "Which version",
            "a": "Whichever the staffer scrolled to",
            "b": "The PDF uploaded with this job"
          },
          {
            "label": "Who can find it",
            "a": "Anyone in the group, indefinitely",
            "b": "The people working on the job"
          },
          {
            "label": "Linked settings",
            "a": "Copies and colour in a separate message",
            "b": "Copies and colour on the same job card"
          },
          {
            "label": "After printing",
            "a": "Still sitting in the chat",
            "b": "Part of the request’s history"
          }
        ]
      },
      {
        "type": "audience",
        "heading": "Who benefits from PDF uploads",
        "items": [
          {
            "role": "Requesters on the move",
            "benefit": "Upload from a phone in a cab or between meetings, without emailing anyone."
          },
          {
            "role": "Print staff",
            "benefit": "Open the exact file from the job, not a forwarded attachment."
          },
          {
            "role": "Office managers",
            "benefit": "Fewer files floating around in personal chats and inboxes."
          }
        ]
      },
      {
        "type": "callout",
        "tone": "tip",
        "title": "Export, then upload",
        "body": "Export to PDF from the app you built the document in rather than sending a screenshot or a phone preview. Fonts, page breaks and images stay where you put them, and the staffer prints exactly what you saw."
      },
    ],
    faqs: [
      { q: "Why PDF rather than a Word or slides file?", a: "A PDF looks the same on every device and printer, so page breaks and fonts do not shift. That removes a common reason for reprints." },
      { q: "What if I upload the wrong version?", a: "Tell the staffer who accepted the job straight away, or send a new request with the correct PDF. Catching it before the job is started saves a wasted run." },
      { q: "Why PDF and not Word or PowerPoint files?", a: "Print requests in ZapBuzzer are built around uploading a PDF. PDFs keep layout and fonts fixed, so the print matches what you saw on screen." },
      { q: "Can I print only some pages?", a: "Add the page range in the note. The print staffer sees it on the job card before printing." },
      { q: "What if I uploaded the wrong file?", a: "Send a new request with the correct PDF and add a note so the print room knows to use the new one. Clear, separate requests avoid mix-ups." },
      { q: "Is the uploaded file visible to everyone?", a: "The request goes to the print team that handles it. Roles have granular permissions, and every action is audit-logged." },
    ],
    related: [
      "solutions/print-room",
      "solutions/print-room/print-requests",
      "solutions/print-room/color-printing",
      "workflows/print-request",
      "use-cases/prevent-lost-requests",
      "features/request-history",
      "demo",
    ],
    cta: { title: "Print the right version, every time", body: "Try ZapBuzzer free and send your next PDF straight to the print room." },
  },

  // ───────────────────────────── COLOR ─────────────────────────────
  {
    path: "solutions/print-room/color-printing",
    title: "Colour Printing Requests for Offices",
    description:
      "Make colour an explicit choice on every print request. Requesters pick colour or black-and-white up front, and the owner sees the cost of print jobs.",
    h1: "Colour when it counts, black-and-white when it doesn’t",
    eyebrow: "Colour printing",
    lead:
      "Colour is the setting most often left unsaid — and most often wrong. ZapBuzzer makes it a choice on every print request, visible on the job card for the person printing it.",
    keywords: [
      "office colour printing request",
      "color print job office",
      "colour vs black and white printing",
      "print cost visibility",
      "colour print tracking",
    ],
    heroVisual: "print-job",
    sections: [
      {
        type: "prose",
        heading: "The unspoken setting",
        paragraphs: [
          "When a request says only “print this”, the print room has to guess. Guess black-and-white for a client deck and the charts become grey blocks. Guess colour for an internal checklist and you have spent more than necessary.",
          "On ZapBuzzer, colour is set by the requester on the request itself. The print staffer does not decide; they follow what the job card says.",
        ],
      },
      {
        type: "table",
        heading: "When colour is usually worth it",
        headers: ["Document", "Suggested", "Reason"],
        rows: [
          ["Client pitch deck", "Colour", "Charts, brand and photos carry meaning"],
          ["Board pack with graphs", "Colour", "Data is easier to read"],
          ["Internal meeting agenda", "Black-and-white", "Text only"],
          ["HR forms and letters", "Black-and-white", "Signed and filed"],
          ["Event posters", "Colour", "Seen from a distance"],
        ],
      },
      {
        type: "visual",
        visual: "print-job",
        heading: "Colour on the job card",
        body: "The job card shows the colour setting alongside the PDF, copies and destination. A 24-copy colour job looks different from a 24-copy black-and-white one before anyone reaches the printer.",
      },
      {
        type: "scenario",
        heading: "24 colour copies for a demo",
        persona: "Kavya, Sales Lead",
        setting: "Kavya’s pitch deck has product screenshots and a pricing chart.",
        timeline: [
          { time: "10:50", event: "She uploads the PDF and chooses 24 copies in colour for Conference Room B." },
          { time: "10:51", event: "Anil accepts and loads the colour printer." },
          { time: "10:58", event: "Copies are delivered to the room." },
        ],
        outcome: "The charts read clearly, and nobody had to stop Anil at the printer to ask whether it should be colour.",
      },
      {
        type: "visual",
        visual: "analytics",
        heading: "Seeing what print costs",
        body: "Request cost visibility lets the owner see what requests cost, in an owner-only view. Combined with Pro analytics, it shows how much the office prints and when.",
      },
      {
        type: "checklist",
        heading: "A simple colour policy",
        items: [
          "Client-facing documents: colour",
          "Internal text documents: black-and-white",
          "Charts in internal reviews: colour if the chart is the point",
          "Large runs: think twice before colour",
          "When in doubt, say so in the note",
        ],
      },
      {
        "type": "table",
        "heading": "Colour or black-and-white? A quick guide",
        "intro": "A starting point many offices adapt for their own print room.",
        "headers": [
          "Document",
          "Usual choice",
          "Why"
        ],
        "rows": [
          [
            "Client pitch deck",
            "Colour",
            "Charts, brand colours and photos carry the story"
          ],
          [
            "Contract or agreement",
            "Black-and-white",
            "Text-only, often printed in several copies for signatures"
          ],
          [
            "Internal review draft",
            "Black-and-white",
            "It will be marked up and thrown away"
          ],
          [
            "Event signage or posters",
            "Colour",
            "Seen from a distance by visitors"
          ],
          [
            "Onboarding pack",
            "Mixed",
            "Colour cover and org chart, the rest in black-and-white"
          ]
        ]
      },
      {
        "type": "checklist",
        "heading": "Before you tick colour",
        "items": [
          "Check whether the inside pages actually need colour, or just the cover",
          "Confirm the PDF is the final version so a colour run is not wasted",
          "Set the copy count for the room, not for the whole team list",
          "Add a note if only certain pages should be in colour",
          "Choose the destination so the colour copies reach the meeting, not the printer tray"
        ]
      },
      {
        "type": "prose",
        "heading": "Why the setting belongs on the request",
        "paragraphs": [
          "When colour is a field on the request, nobody has to guess. The print staffer sees colour or black-and-white on the job card before they touch the printer, so a client deck is not printed in grey and a draft is not printed in full colour by mistake.",
          "It also gives the owner an honest picture. Because each request records its settings, the owner can see over a month how much of the print room’s work is colour and which teams ask for it, then decide whether a policy is needed at all."
        ]
      },
    ],
    faqs: [
      { q: "Can I mix colour and black-and-white pages in one job?", a: "The request records colour as a setting for the job. If only certain pages need colour, say so in the note and the print staffer will see it on the job card." },
      { q: "Can we restrict who can request colour?", a: "Roles have granular permissions, and many offices pair that with a simple written colour policy. Talk to us if you want help deciding what fits your office." },
      { q: "Who decides whether a job is printed in colour?", a: "The requester chooses colour or black-and-white when sending the request. The print staffer follows the job card." },
      { q: "Can the owner see what colour printing costs?", a: "ZapBuzzer shows request cost to the owner in an owner-only spend view, so leadership can see print spend without exposing it to everyone." },
      { q: "Can we restrict who prints in colour?", a: "Roles have granular permissions per role. For a specific colour policy, set expectations with the team and review requests in history and analytics." },
      { q: "Do we see colour print volume?", a: "Requests are recorded with their settings. Full analytics, reports and audit logs are part of Pro." },
    ],
    related: [
      "solutions/print-room",
      "solutions/print-room/copy-management",
      "solutions/print-room/analytics",
      "admin/spend-visibility",
      "use-cases/sales",
      "pricing/pro",
    ],
    cta: { title: "Make colour a decision, not a guess", body: "Start the free trial and send your next deck with colour set on the request." },
  },

  // ───────────────────────────── COPY MANAGEMENT ─────────────────────────────
  {
    path: "solutions/print-room/copy-management",
    title: "Copy Management for Office Print Rooms",
    description:
      "Set exact copy counts on every print request, handle large runs as clear jobs, and keep a timed record of who printed what, how many and where it went.",
    h1: "The right number of copies, in the right room",
    eyebrow: "Copy management",
    lead:
      "Too few copies and someone shares a deck in a client meeting. Too many and the recycling bin fills up. ZapBuzzer puts the exact copy count on every request and keeps a record of each run.",
    keywords: [
      "office copy management",
      "print copy count",
      "photocopy request office",
      "bulk print request",
      "copy job tracking",
    ],
    heroVisual: "print-job",
    sections: [
      {
        type: "problem-solution",
        heading: "Copy counts get lost in translation",
        problem: {
          title: "Common mistakes",
          points: [
            "“A few copies” turns into three when eight people attend.",
            "Copy counts change in a chat thread, and the print room sees the first number.",
            "Nobody can say afterwards how many copies were made.",
          ],
        },
        solution: {
          title: "With ZapBuzzer",
          points: [
            "Copies are a number set on the request, not a phrase.",
            "Changes go in a new request, so the latest count is never ambiguous.",
            "Every job is kept with its copy count, owner and timing.",
          ],
        },
      },
      {
        type: "visual",
        visual: "print-job",
        heading: "Copies, front and centre",
        body: "The copy count sits next to the file and colour setting on the job card, so the print staffer reads it before starting.",
      },
      {
        type: "table",
        heading: "Planning copy counts",
        headers: ["Situation", "How to set it", "Note to add"],
        rows: [
          ["Client meeting, 6 attendees", "8 copies", "Two spares for late joiners"],
          ["Board pack", "One per member plus one", "Bind each set"],
          ["Training for 20", "20 copies", "Double-sided, stapled"],
          ["Sign-up sheet", "1 copy", "Deliver to reception"],
        ],
      },
      {
        type: "scenario",
        heading: "A training day with a big run",
        persona: "Rohit, L&D",
        setting: "Rohit runs a training for 30 people and needs workbooks plus a one-page feedback form.",
        timeline: [
          { time: "Thu 16:00", event: "Rohit sends two requests: the workbook (30 copies, double-sided, stapled) and the feedback form (30 copies)." },
          { time: "Thu 16:02", event: "Anil accepts the workbook; Pooja accepts the form." },
          { time: "Thu 17:10", event: "Both jobs are delivered to the training room." },
        ],
        outcome: "Two clear jobs ran in parallel with two staffers, and each was timed and rated on its own.",
      },
      {
        type: "callout",
        tone: "tip",
        title: "Split big runs into separate requests",
        body: "When a run has different documents or finishing, send them as separate requests. Different staff can accept them in parallel, and each job’s deadline is easier to meet.",
      },
      {
        type: "metrics",
        heading: "What copy data tells you",
        items: [
          { metric: "Jobs per day", meaning: "How busy the print room really is." },
          { metric: "Large-run timing", meaning: "How long big jobs take compared with small ones." },
          { metric: "Peak hours", meaning: "When copy requests cluster, such as before morning meetings." },
          { metric: "Ratings", meaning: "Whether large runs arrive complete and on time." },
        ],
      },
      {
        "type": "table",
        "heading": "Typical copy counts by occasion",
        "intro": "Rough starting points; the right number is the one on the request.",
        "headers": [
          "Occasion",
          "Copies",
          "Note to add"
        ],
        "rows": [
          [
            "Client pitch",
            "One per attendee plus one spare",
            "Names of attendees if decks are personalised"
          ],
          [
            "Board meeting",
            "One per board member",
            "Binding or stapling preference"
          ],
          [
            "Contract signing",
            "One per signing party",
            "Which pages need initials"
          ],
          [
            "Training session",
            "One per participant",
            "Whether handouts go on seats or at the door"
          ]
        ]
      },
      {
        "type": "comparison",
        "heading": "Copy counts in a chat vs on the request",
        "columns": [
          "Chat message",
          "ZapBuzzer request"
        ],
        "rows": [
          {
            "label": "Where the number lives",
            "a": "Somewhere in a thread, maybe edited later",
            "b": "A field on the job card the staffer sees first"
          },
          {
            "label": "Corrections",
            "a": "“Actually make it 30” buried under other messages",
            "b": "A fresh, clear request with the right count"
          },
          {
            "label": "Over-printing",
            "a": "Staff round up to be safe",
            "b": "Staff print what was asked"
          },
          {
            "label": "Looking back",
            "a": "No record of volume",
            "b": "Copies recorded per request for reporting"
          }
        ]
      },
      {
        "type": "callout",
        "tone": "tip",
        "title": "Ask for a spare, not a stack",
        "body": "One spare copy covers a surprise guest. Ten spares usually end up in the recycling bin. Putting the exact count on the request is the simplest way to cut paper waste."
      },
    ],
    faqs: [
      { q: "What if I put the wrong copy count?", a: "Tell the staffer who accepted the job as soon as you notice, or send a corrected request. The earlier the better, especially for long runs." },
      { q: "Can we see how many copies each team prints?", a: "Copies are recorded with each request, so reports show volume over time. Full analytics and reports are on Pro." },
      { q: "How do I change the copy count after sending?", a: "Send a new request with the correct number and add a note. Keeping each request clear avoids the print room acting on an old number." },
      { q: "Can I request sets, stapling or binding?", a: "Yes, describe the finishing in the note. It appears on the job card for whoever accepts." },
      { q: "Can we see how many copies the office prints?", a: "Requests are kept with their settings in history. Full analytics and reports are on Pro." },
      { q: "Should a big run be one request or several?", a: "If it has different files or finishing, send several. Separate requests can be handled by different staff at the same time." },
    ],
    related: [
      "solutions/print-room",
      "solutions/print-room/print-queue",
      "solutions/print-room/color-printing",
      "features/request-history",
      "use-cases/operations",
      "free-trial",
    ],
    cta: { title: "Count copies once, correctly", body: "Try ZapBuzzer free and send your next run with the exact copy count on the request." },
  },

  // ───────────────────────────── QUEUE ─────────────────────────────
  {
    path: "solutions/print-room/print-queue",
    title: "Office Print Queue Management",
    description:
      "Give the print room one shared queue of jobs with deadlines. Staff accept what they can start now, first-accept-wins prevents double printing, and late jobs escalate.",
    h1: "One print queue the whole team can see",
    eyebrow: "Print queue",
    lead:
      "A print room with a pile of paper notes and a busy chat has no real queue. ZapBuzzer gives the print team one shared list of jobs, each with a file, settings and a deadline.",
    keywords: [
      "print queue management",
      "office print queue",
      "print job queue app",
      "print room job list",
      "shared print queue",
    ],
    heroVisual: "staff-queue",
    sections: [
      {
        type: "visual",
        visual: "staff-queue",
        heading: "The shared queue on a staffer’s phone",
        body: "Each open job appears as a card with an Accept button. When a staffer accepts, the job leaves the open queue for everyone else, so two people never print the same thing.",
        points: ["Open jobs at the top", "Deadline shown on each card", "Accept moves the job to the staffer’s list"],
      },
      {
        type: "prose",
        heading: "How the queue decides who prints what",
        paragraphs: [
          "ZapBuzzer does not assign print jobs by guesswork. Every job goes to the whole print team, and it belongs to whoever taps Accept first. In practice that means whoever is at the printer and free picks it up.",
          "This spreads the load without a dispatcher. When one person is busy with a 200-page run, a colleague picks up the next small job. Nothing waits for one specific person to be free.",
        ],
      },
      {
        type: "visual",
        visual: "acceptance",
        heading: "No double printing, no orphan jobs",
        body: "First-accept-wins means each job has exactly one owner. Repeating notifications mean no job sits unclaimed.",
      },
      {
        type: "scenario",
        heading: "Before a board meeting at 11",
        persona: "Anil, Print Room",
        setting: "Between 10:15 and 10:30 the print room receives seven jobs, four for the board meeting.",
        timeline: [
          { time: "10:15", event: "Anil accepts the board pack (12 copies, colour, bound)." },
          { time: "10:18", event: "Pooja accepts two short sales jobs while Anil runs the pack." },
          { time: "10:24", event: "A late agenda change arrives; Pooja accepts it." },
          { time: "10:45", event: "All board jobs are delivered to the boardroom." },
          { time: "10:50", event: "Anil picks up the remaining routine jobs." },
        ],
        outcome: "The board pack was ready 15 minutes early, and the routine jobs still got done — by whoever was free.",
      },
      {
        type: "comparison",
        heading: "Paper pile vs shared queue",
        columns: ["Paper pile and chat", "ZapBuzzer queue"],
        rows: [
          { label: "Order of work", a: "Whatever is on top", b: "Open jobs with deadlines" },
          { label: "Who picks it up", a: "Whoever the requester called", b: "First free staffer to accept" },
          { label: "Duplicate prints", a: "Common", b: "Prevented by single ownership" },
          { label: "Unclaimed jobs", a: "Found too late", b: "Notifications repeat; overdue jobs escalate" },
        ],
      },
      {
        type: "checklist",
        heading: "Queue habits for the print team",
        items: [
          "Accept only what you can start now",
          "Set an ETA when you start a long run",
          "Check deadlines before picking the next job",
          "Mark delivered once the prints reach the destination",
        ],
      },
      {
        "type": "metrics",
        "heading": "Signs of a healthy print queue",
        "items": [
          {
            "metric": "Jobs waiting unaccepted",
            "meaning": "Ideally close to zero. A growing number means the team is stretched or away from their phones."
          },
          {
            "metric": "Accept time",
            "meaning": "How quickly someone owns a new job. Pilot offices averaged 32 seconds across request types in their first month."
          },
          {
            "metric": "Jobs per staffer",
            "meaning": "Whether the queue is spread fairly or one person carries it."
          },
          {
            "metric": "Overdue jobs",
            "meaning": "Jobs past their deadline, which escalate to a manager automatically."
          }
        ]
      },
      {
        "type": "audience",
        "heading": "What the queue looks like to each role",
        "items": [
          {
            "role": "Print staff",
            "benefit": "Open jobs they can accept and their own accepted jobs, on the phone in their pocket."
          },
          {
            "role": "Print room lead",
            "benefit": "The whole queue, so they can see when to step in or call another person."
          },
          {
            "role": "Requester",
            "benefit": "Only their own job, with owner, ETA and status."
          },
          {
            "role": "Admin head",
            "benefit": "Escalated and overdue jobs that need a decision."
          }
        ]
      },
      {
        "type": "prose",
        "heading": "Why one shared queue beats several personal ones",
        "paragraphs": [
          "Before a shared queue, print work tends to live in whichever channel the requester happened to use: a call to Anil, a message to Pooja, a PDF left in a group. Each staffer has a private queue that nobody else can see, so one person is overloaded while another is idle.",
          "A single queue that every print staffer sees fixes that without a coordinator. Jobs go to the whole team, the first free person takes the next one, and nothing depends on who the requester knows."
        ]
      },
    ],
    faqs: [
      { q: "Can staff see which job has waited longest?", a: "Every job is timed from the moment it is sent, so staff can see what has been waiting longest. Deadlines and overdue status help them pick what to do next." },
      { q: "Can a job sit in the queue forever?", a: "No. Notifications repeat until someone accepts, and jobs that pass their deadline escalate to a manager automatically." },
      { q: "Can two staff accept the same job?", a: "No. The first tap on Accept wins and the job is assigned to that person. Everyone else sees it has been taken." },
      { q: "How do staff know which job is most urgent?", a: "Each job has a deadline shown on its card. Overdue jobs escalate to a manager automatically." },
      { q: "Can staff see the queue on their phones?", a: "Yes. The mobile app shows open jobs and lets staff accept and update them on the move, and it rings through on silent." },
      { q: "What if nobody accepts a job?", a: "Notifications repeat until someone accepts, and if the deadline passes, the job escalates. The escalation chain is part of Pro." },
    ],
    related: [
      "solutions/print-room",
      "solutions/print-room/staff-workflow",
      "solutions/print-room/sla",
      "features/first-accept-wins",
      "mobile-app/request-acceptance",
      "use-cases/prevent-lost-requests",
      "demo",
    ],
    cta: { title: "Give your print room a real queue", body: "Start the free trial and watch jobs line up — and get picked up — in one shared list." },
  },

  // ───────────────────────────── TRACKING ─────────────────────────────
  {
    path: "solutions/print-room/request-tracking",
    title: "Print Request Tracking: Upload to Delivery",
    description:
      "Track every print job from upload to delivery: who accepted it, ETA, delivered status with optional photo, rating, and a timestamped history of each step.",
    h1: "Stop walking to the print room to check",
    eyebrow: "Print tracking",
    lead:
      "Tracking means you never have to walk down the corridor to see if your job is done. Every print request shows who owns it, how far along it is and when it was delivered.",
    keywords: [
      "print request tracking",
      "track print job office",
      "print job status",
      "print delivery confirmation",
      "print request history",
    ],
    heroVisual: "request-timeline",
    sections: [
      {
        type: "visual",
        visual: "request-timeline",
        heading: "A print job’s timeline",
        body: "Requested, accepted, started, delivered, rated. Each state has a timestamp, so you can see how long the job waited and how long it took to print and deliver.",
      },
      {
        type: "audience",
        heading: "Who tracks what",
        items: [
          { role: "Requester", benefit: "Who accepted the job, the ETA and when it is delivered." },
          { role: "Print staff", benefit: "Their own jobs and what is still open for the team." },
          { role: "Office manager", benefit: "Every print job, overdue jobs and escalations on the dashboard." },
          { role: "Owner", benefit: "Volume, timing, ratings and owner-only cost." },
        ],
      },
      {
        type: "scenario",
        heading: "Tracking from a client site",
        persona: "Rahul, Account Manager",
        setting: "Rahul is travelling back to the office and wants a contract printed and on his desk when he arrives.",
        timeline: [
          { time: "15:10", event: "From his phone, Rahul uploads the contract PDF, 2 copies, black-and-white, to his desk." },
          { time: "15:11", event: "Pooja accepts; Rahul sees her name and photo." },
          { time: "15:14", event: "Pooja starts the job with a short ETA." },
          { time: "15:20", event: "Delivered to Rahul’s desk with a photo of the copies." },
          { time: "15:45", event: "Rahul arrives, signs and rates the job." },
        ],
        outcome: "Rahul knew the contract was waiting before he walked in, without calling anyone.",
      },
      {
        type: "visual",
        visual: "delivery",
        heading: "Delivery you can see",
        body: "When the prints are placed at your desk or meeting room, the staffer marks the job delivered and can add a photo. You get a rating prompt to close the loop.",
      },
      {
        type: "table",
        heading: "What each print job record holds",
        headers: ["Field", "Use"],
        rows: [
          ["File and settings", "What was printed: PDF, copies, colour"],
          ["Destination", "Where it was delivered"],
          ["Owner", "Who accepted and delivered it"],
          ["Timestamps", "Waiting, printing and delivery time"],
          ["Photo", "Optional proof of delivery"],
          ["Rating", "Requester’s 1–5★ feedback"],
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "History and plans",
        body: "Free keeps the last 30 days of request history. Pro adds audit logs and reports, and Enterprise can add a REST API and webhooks — talk to us for details.",
      },
      {
        "type": "comparison",
        "heading": "Checking on a print job, then and now",
        "columns": [
          "Without tracking",
          "With ZapBuzzer"
        ],
        "rows": [
          {
            "label": "Is anyone on it?",
            "a": "Walk to the print room or message the group and wait",
            "b": "The owner’s name and photo appear the moment they accept"
          },
          {
            "label": "When will it be ready?",
            "a": "“Ten minutes” said over the shoulder, then forgotten",
            "b": "An ETA set when the staffer starts the job"
          },
          {
            "label": "Did it arrive?",
            "a": "You find out when you reach your desk",
            "b": "Marked delivered, often with a photo of the stack"
          },
          {
            "label": "What went wrong last week?",
            "a": "Nobody remembers",
            "b": "Every state is timestamped in the job’s history"
          }
        ]
      },
      {
        "type": "metrics",
        "heading": "Reading a print job’s timestamps",
        "intro": "The gaps between states tell you different things about the print room.",
        "items": [
          {
            "metric": "Sent to accepted",
            "meaning": "How long the job sat unowned. Long gaps usually mean the team was busy or notifications were missed."
          },
          {
            "metric": "Accepted to started",
            "meaning": "Time spent in someone’s personal queue before the printer was free."
          },
          {
            "metric": "Started to delivered",
            "meaning": "The actual printing and walking time, which grows with copies, colour and distance."
          },
          {
            "metric": "Delivered to rated",
            "meaning": "Whether requesters are closing the loop, which keeps scorecards fair."
          }
        ]
      },
      {
        "type": "prose",
        "heading": "Tracking helps the print room too",
        "paragraphs": [
          "It is easy to think of tracking as something for the person waiting. In practice the print staff benefit as much. When a requester can see that Anil accepted their job two minutes ago and has set an ETA, they do not phone him, walk over or post in a group. The print room gets fewer interruptions in exactly the moments it is busiest.",
          "Tracking also settles disagreements quietly. If someone says their prints were late, the timeline shows when the job was sent, when it was accepted and when it was delivered. Staff are judged on what actually happened, not on who complained loudest."
        ]
      },
    ],
    faqs: [
      { q: "Does the requester see each step?", a: "The requester sees the job change state as it is accepted, started and delivered, along with the owner’s name and ETA. That is what removes the need to call or walk over." },
      { q: "Can an office manager see jobs that are not theirs?", a: "Yes, depending on role permissions. Managers typically see every print job on the request dashboard, including those that are overdue or escalated." },
      { q: "Can I check my print job from my phone?", a: "Yes. The mobile app shows your request’s status, owner and ETA, and notifies you as it moves." },
      { q: "How do I know the prints were actually delivered?", a: "The staffer marks the job delivered and can attach a photo. You are then prompted to rate the job." },
      { q: "How long are print records kept?", a: "Free keeps the last 30 days of history. Pro includes audit logs and reports for longer-term records." },
      { q: "Can we pull print data into our own systems?", a: "A REST API and webhooks are available on Enterprise for that kind of need. Contact us to discuss your use case." },
    ],
    related: [
      "solutions/print-room",
      "solutions/print-room/print-queue",
      "features/request-tracking",
      "features/delivery-confirmation",
      "use-cases/track-office-requests",
      "mobile-app/delivery-tracking",
      "pricing",
    ],
    cta: { title: "See where your print job is right now", body: "Open the read-only demo or start a free trial and send a tracked print job." },
  },

  // ───────────────────────────── STAFF WORKFLOW ─────────────────────────────
  {
    path: "solutions/print-room/staff-workflow",
    title: "Print Room Staff Workflow and Daily Routine",
    description:
      "How print room staff use ZapBuzzer through the day: accept jobs, set ETAs, deliver to seats, earn ratings and build a fair scorecard without chase calls.",
    h1: "A print staffer’s day, without the chase calls",
    eyebrow: "Print staff workflow",
    lead:
      "For the people at the printer, ZapBuzzer means complete jobs, one queue and credit for the work they do. Here is how a print staffer’s day runs.",
    keywords: [
      "print room staff workflow",
      "print staff app",
      "print room routine",
      "print staff scorecard",
      "print operator workflow",
    ],
    heroVisual: "mobile-app",
    sections: [
      {
        type: "scenario",
        heading: "A day at the printer",
        persona: "Pooja, Print Room",
        setting: "Pooja shares the print room with Anil in a 120-person office.",
        timeline: [
          { time: "09:30", event: "Opens the app; three overnight requests are waiting in the queue." },
          { time: "09:32", event: "Accepts a 10-copy agenda for a 10 am meeting and starts it with an ETA." },
          { time: "09:45", event: "Delivers to Conference Room A, marks delivered." },
          { time: "11:15", event: "Her phone rings through on silent while she is on the 2nd floor; she accepts a contract print." },
          { time: "16:00", event: "Accepts a 30-copy training workbook while Anil handles small jobs." },
          { time: "18:00", event: "Checks her ratings for the day — mostly five stars." },
        ],
        outcome: "No one called Pooja’s name across the floor, and every job she finished counts toward her scorecard.",
      },
      {
        type: "workflow",
        heading: "The staff side of every job",
        steps: [
          { title: "Get pinged", body: "Notifications come through the app — and on Pro, Telegram and WhatsApp — repeating until someone accepts." },
          { title: "Accept", body: "Tap Accept if you can start now. The job is yours and the requester sees your name." },
          { title: "Start with an ETA", body: "Mark started and set a realistic ETA so the requester stops wondering." },
          { title: "Deliver", body: "Take the prints to the destination, mark delivered and add a photo if useful." },
          { title: "Get rated", body: "The requester rates the job and the rating is credited to you." },
        ],
      },
      {
        type: "visual",
        visual: "mobile-app",
        heading: "Built for staff who are on their feet",
        body: "The Android app still rings when a phone is locked or set to silent. Staff accept and track jobs on the move, from the printer to the boardroom and back.",
      },
      {
        type: "visual",
        visual: "scorecard",
        heading: "Fair attribution",
        body: "Each job is credited to the person who accepted and delivered it. Scorecards — part of Pro’s full analytics — show volume, speed, on-time share and ratings.",
      },
      {
        type: "features",
        heading: "What staff stop dealing with",
        items: [
          { title: "Missing details", body: "File, copies, colour and destination are on the job card." },
          { title: "Chase calls", body: "Requesters see status and ETA, so they do not call." },
          { title: "Blame games", body: "The record shows who owned a job and when each step happened." },
          { title: "Invisible effort", body: "Every delivery and rating is attributed to the person who did it." },
        ],
      },
      {
        type: "checklist",
        heading: "Good habits for print staff",
        items: [
          "Keep the app open on your phone during your shift",
          "Accept only what you can start right away",
          "Always set an ETA on longer jobs",
          "Add a delivery photo when the requester is away from their desk",
        ],
      },
      {
        "type": "workflow",
        "heading": "One job from the staffer’s phone",
        "steps": [
          {
            "title": "The buzz",
            "body": "The phone rings through, even on silent, with the file, copies, colour and destination."
          },
          {
            "title": "Accept",
            "body": "One tap claims it. Teammates see it is taken, so nobody else starts printing the same file."
          },
          {
            "title": "Start with an ETA",
            "body": "When the job hits the printer, the staffer marks it started and gives a realistic time."
          },
          {
            "title": "Deliver",
            "body": "Prints go to the seat or room on the request; a quick photo shows where they were left."
          },
          {
            "title": "Get rated",
            "body": "The requester rates the job, and the rating counts on the staffer’s scorecard."
          }
        ]
      },
      {
        "type": "comparison",
        "heading": "A print staffer’s day, before and after",
        "columns": [
          "Before",
          "With ZapBuzzer"
        ],
        "rows": [
          {
            "label": "How jobs arrive",
            "a": "Calls, desk visits, chat messages and USB sticks",
            "b": "One queue on the phone"
          },
          {
            "label": "Knowing what to print",
            "a": "Asking twice about copies and colour",
            "b": "Settings on the job card"
          },
          {
            "label": "Proving the work",
            "a": "Nobody notices a job done well",
            "b": "Timestamps, delivery photos and ratings"
          }
        ]
      },
      {
        "type": "callout",
        "tone": "info",
        "title": "Fair to the people doing the work",
        "body": "ZapBuzzer puts people first. Rather than acting as one more nag tool, it gives staff scorecards and fair credit for their work. Overdue jobs escalate to a manager rather than turning into a stream of reminders at the staffer."
      },
    ],
    faqs: [
      { q: "What if a staffer accepts a job and then gets stuck?", a: "The job stays theirs and its timer keeps running. If it goes past its deadline, it escalates to a manager, who can ask someone else to help." },
      { q: "Do staff need a computer to work the print queue?", a: "No. The mobile app lets staff accept, start and deliver jobs from their phone, and the web app is there if they prefer a screen at the print station." },
      { q: "What phone do print staff need?", a: "Staff use the ZapBuzzer mobile app (Android APK available) or the web app. Because the server holds each account and workspace, staff just sign in." },
      { q: "Will I hear a job if my phone is on silent?", a: "Yes. The mobile app is built to keep ringing when a phone is locked or silenced." },
      { q: "Who sees my ratings?", a: "Ratings feed into scorecards that managers and owners review. Roles have granular permissions, so your office decides who sees what." },
      { q: "Can I reject a job?", a: "You simply do not accept it, and it stays open for a colleague. Repeating notifications and escalation make sure someone picks it up." },
    ],
    related: [
      "solutions/print-room",
      "solutions/print-room/print-queue",
      "mobile-app/staff-workflow",
      "analytics/staff",
      "use-cases/staff-accountability",
      "mobile-app/android",
    ],
    cta: { title: "Make the print room a better place to work", body: "Start a free trial and invite your print staff — they will notice the quiet first." },
  },

  // ───────────────────────────── SLA ─────────────────────────────
  {
    path: "solutions/print-room/sla",
    title: "Print SLA Management and Escalation",
    description:
      "Put a deadline on every print job. See what an SLA timer means for a 24-copy colour run, and how overdue jobs auto-escalate to a manager on Pro.",
    h1: "Deadlines for print jobs that someone actually watches",
    eyebrow: "Print SLA",
    lead:
      "Print jobs are almost always tied to a moment — a meeting, a client, a signature. ZapBuzzer gives each job a deadline and escalates it automatically when it is overdue.",
    keywords: [
      "print sla management",
      "print job deadline",
      "print escalation office",
      "print turnaround time",
      "print sla timer",
    ],
    heroVisual: "sla-timer",
    sections: [
      {
        type: "visual",
        visual: "sla-timer",
        heading: "The timer on a print job",
        body: "From the moment a job is sent, its timer runs against a deadline. The ring shows how much time is left; when it runs out, the job escalates.",
        points: ["Starts when the job is sent", "Stops when it is delivered", "Overdue jobs escalate automatically"],
      },
      {
        type: "prose",
        heading: "What an SLA means for a 24-copy colour job",
        paragraphs: [
          "A single black-and-white page and a 24-copy colour deck are not the same job. Treating them alike means either the small job waits too long or the big one is always late. Thinking in terms of deadlines per kind of work keeps expectations honest.",
          "For Kavya’s 24 colour copies, the deadline is what matters to her: the moment the client sits down. The timer tells the print room how much of that time is left, and tells the manager when a job is in trouble — before Kavya has to call.",
        ],
      },
      {
        type: "visual",
        visual: "escalation",
        heading: "When a print job is overdue",
        body: "An overdue job auto-escalates to a manager. On Pro, the escalation chain can move it up further — for example from the print room lead to the admin head — if it is still not handled.",
      },
      {
        type: "scenario",
        heading: "An escalation that saved a board meeting",
        persona: "Deepak, Admin Head",
        setting: "A board pack was sent at 9:30 for an 11 am meeting; the print room was short-staffed.",
        timeline: [
          { time: "09:30", event: "The board pack request is sent with colour, 12 copies, bound." },
          { time: "09:30", event: "Notifications repeat; Anil is stuck with another long run." },
          { time: "10:00", event: "The job’s deadline passes without delivery and it escalates to Deepak." },
          { time: "10:03", event: "Deepak asks Pooja to take it; she accepts." },
          { time: "10:40", event: "The board pack is delivered to the boardroom." },
        ],
        outcome: "Escalation brought in a manager with time to spare, and the board pack was on the boardroom table twenty minutes before the meeting started.",
      },
      {
        type: "metrics",
        heading: "Print SLA metrics",
        items: [
          { metric: "On-time rate", meaning: "Share of print jobs delivered before their deadline. Pilot offices reached 96% on-time across request types." },
          { metric: "Accept time", meaning: "How long a job waits before someone owns it." },
          { metric: "Escalations", meaning: "How many jobs needed a manager, and when." },
          { metric: "Overdue by type", meaning: "Whether large or colour jobs are the ones slipping." },
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Plan note",
        body: "Every request has a deadline and overdue ones escalate to a manager. The multi-step escalation chain, full analytics and reports are part of Pro at ₹99 per seat per month.",
      },
      {
        "type": "table",
        "heading": "Example deadlines by kind of print job",
        "intro": "An illustration of thinking per category, not fixed product defaults.",
        "headers": [
          "Job",
          "What drives the deadline",
          "Watch for"
        ],
        "rows": [
          [
            "A few black-and-white pages",
            "Usually needed within minutes",
            "Jobs waiting unaccepted"
          ],
          [
            "Contract set for signing",
            "The signing time",
            "Wrong copy count found late"
          ],
          [
            "24-copy colour deck",
            "The client meeting",
            "Printer time for long colour runs"
          ],
          [
            "Board pack",
            "The board meeting at 11",
            "Binding and delivery to the boardroom"
          ]
        ]
      },
      {
        "type": "checklist",
        "heading": "Setting up print deadlines",
        "items": [
          "List the main kinds of print work your office sends",
          "Agree a realistic deadline for each, with the print team in the room",
          "Decide who the first escalation goes to — usually the print room lead",
          "On Pro, decide who comes next in the escalation chain",
          "Review on-time rate after a few weeks and adjust"
        ]
      },
      {
        "type": "prose",
        "heading": "Deadlines protect the print team as well",
        "paragraphs": [
          "Without a clear deadline, every job feels urgent and the loudest requester wins. With one, staff can see which jobs truly need to go first and which can wait twenty minutes, and requesters learn that sending a board pack at 10:45 for an 11 o’clock meeting is a planning problem, not a print room failure."
        ]
      },
    ],
    faqs: [
      { q: "Does an escalation take the job away from the staffer?", a: "Escalation brings a manager in; it is not a penalty for the person who accepted. The manager can help, move the work to someone else in person or call in another staffer." },
      { q: "When does a print job’s timer start?", a: "Every request is timed from the moment it is sent, and the timer runs until the job is delivered." },
      { q: "Who gets notified when a print job is late?", a: "An overdue job escalates to a manager automatically. On Pro, the escalation chain can pass it further up if nobody acts." },
      { q: "Can big jobs have a different deadline from small ones?", a: "SLAs can be thought of per category of work, so it makes sense to treat large colour runs differently from single pages. Talk to us if you want help setting this up." },
      { q: "How do we report on print SLA performance?", a: "Pro includes full analytics, audit logs and reports, including on-time performance across print jobs." },
    ],
    related: [
      "solutions/print-room",
      "solutions/print-room/analytics",
      "sla",
      "sla/automatic-escalation",
      "use-cases/sla-compliance",
      "pricing/pro",
    ],
    cta: { title: "Put a clock on every print job", body: "Start the free trial and see your first overdue job escalate — before anyone has to call." },
  },

  // ───────────────────────────── ANALYTICS ─────────────────────────────
  {
    path: "solutions/print-room/analytics",
    title: "Print Room Analytics and Reports",
    description:
      "See print volume, peak hours, accept and delivery times, on-time rate and ratings for your print room, with staff scorecards and owner-only cost on Pro.",
    h1: "What your print room is really doing, in numbers",
    eyebrow: "Print analytics",
    lead:
      "Because every print job is timed and rated, ZapBuzzer can show what the print room actually handles: how much, when, how fast and how well. Full analytics and scorecards are part of Pro.",
    keywords: [
      "print room analytics",
      "print volume reports",
      "office print statistics",
      "print staff performance",
      "print turnaround analytics",
    ],
    heroVisual: "analytics",
    sections: [
      {
        type: "visual",
        visual: "analytics",
        heading: "The print room dashboard",
        body: "KPI tiles for volume, average accept time, on-time rate and rating, with a chart of when the office prints most.",
      },
      {
        type: "metrics",
        heading: "Metrics that matter for print",
        items: [
          { metric: "Job volume", meaning: "How many print requests come in per day and per week." },
          { metric: "Peak hours", meaning: "When the office buzzes most — often before morning meetings and end-of-day sign-offs." },
          { metric: "Accept time", meaning: "How quickly jobs get an owner." },
          { metric: "Delivery time", meaning: "From accept to delivered at the seat or room." },
          { metric: "On-time rate", meaning: "Share of jobs delivered before the deadline." },
          { metric: "Average rating", meaning: "Requester satisfaction, 1–5★." },
        ],
      },
      {
        type: "visual",
        visual: "scorecard",
        heading: "Scorecards for print staff",
        body: "Who is fastest, who gets five stars and who is carrying the most jobs — attributed fairly to the person who did the work.",
      },
      {
        type: "scenario",
        heading: "Using analytics to fix the 10 am crunch",
        persona: "Priya, Office Manager",
        setting: "Priya hears complaints about late prints before morning meetings.",
        timeline: [
          { time: "Week 1", event: "She sees most print jobs arrive between 9:30 and 10:30 and on-time delivery dips then." },
          { time: "Week 1", event: "Scorecards show Anil handles most of these jobs alone." },
          { time: "Week 2", event: "She schedules Pooja to start at 9:15 instead of 10." },
          { time: "Week 3", event: "On-time delivery in the morning window improves and ratings rise." },
        ],
        outcome: "A small schedule change, based on real data, fixed a problem that had been blamed on people.",
      },
      {
        type: "table",
        heading: "Questions analytics can answer",
        headers: ["Question", "Where to look"],
        rows: [
          ["Are we understaffed in the morning?", "Peak hours and on-time rate by time"],
          ["Is one person doing everything?", "Staff scorecards"],
          ["Are big colour runs slipping?", "Overdue jobs and escalations"],
          ["What does printing cost us?", "Owner-only spend view"],
          ["Are requesters happy?", "Average rating trend"],
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Plans and reporting",
        body: "Free keeps 30 days of history. Pro adds full analytics, scorecards, audit logs and reports. Enterprise adds a REST API and webhooks for teams that want data in their own tools — talk to us for details.",
      },
      {
        "type": "table",
        "heading": "From a number on the dashboard to a decision",
        "headers": [
          "What you notice",
          "What it might mean",
          "What to try"
        ],
        "rows": [
          [
            "Accept time spikes around 10 am",
            "Everyone prints for morning meetings at once",
            "Put a second staffer on print for that hour"
          ],
          [
            "Colour jobs miss deadlines more often",
            "Large colour runs take longer than people expect",
            "Give colour work a longer deadline or ask for earlier requests"
          ],
          [
            "One staffer delivers most jobs",
            "Work is uneven across the team",
            "Look at shifts and who is free to accept"
          ],
          [
            "Ratings dip on a single floor",
            "Delivery to that floor is slow or prints go to the wrong room",
            "Check destinations and walking routes"
          ]
        ]
      },
      {
        "type": "audience",
        "heading": "Who reads print analytics",
        "items": [
          {
            "role": "Admin head",
            "benefit": "Spots the busy hours and decides on staffing and shifts."
          },
          {
            "role": "Print room lead",
            "benefit": "Sees which jobs slip and coaches the team with real numbers."
          },
          {
            "role": "Owner",
            "benefit": "Understands print volume and owner-only cost across the office."
          },
          {
            "role": "Print staff",
            "benefit": "Get credit for jobs they delivered fast and well, visible on their scorecard."
          }
        ]
      },
      {
        "type": "callout",
        "tone": "tip",
        "title": "Look at trends, not single days",
        "body": "A board pack or a training day can make any one day look unusual. Compare weeks before changing staffing, and read ratings together with on-time rate rather than in isolation."
      },
      {
        "type": "prose",
        "heading": "Data that comes for free",
        "paragraphs": [
          "Nobody on the print team has to fill in a spreadsheet. Because every request is timed from Buzz to rating, the analytics build themselves from the ordinary work of sending, accepting and delivering jobs. The more the office uses ZapBuzzer for print, the more accurate the picture becomes."
        ]
      },
    ],
    faqs: [
      { q: "Do we need to log print jobs manually for analytics?", a: "No. Every request is timed and recorded as it moves through its states, so analytics come from normal use. Full analytics and scorecards are part of Pro." },
      { q: "Can we compare print with pantry or IT?", a: "Analytics cover requests across the office, so you can see when the print room is busiest compared with other teams. That helps when the same staff cover more than one area." },
      { q: "Which plan includes print analytics?", a: "Full analytics and scorecards are part of Pro at ₹99 per seat per month. Free includes the last 30 days of history." },
      { q: "Can we see print cost?", a: "Request cost is visible to the owner in an owner-only view. It is not shown to staff or employees." },
      { q: "Are staff compared unfairly?", a: "Scorecards credit each job to the person who accepted and delivered it, and show volume alongside speed and rating, so a busy staffer’s load is visible." },
      { q: "Can we export print data?", a: "Pro includes reports. For connecting data to your own systems, Enterprise offers a REST API and webhooks — contact us to discuss." },
    ],
    related: [
      "solutions/print-room",
      "solutions/print-room/sla",
      "analytics",
      "analytics/staff",
      "admin/spend-visibility",
      "use-cases/office-manager",
      "pricing/pro",
    ],
    cta: { title: "See your print room in numbers", body: "Start a free trial and get your first week of print analytics." },
  },
];
