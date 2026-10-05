export interface NavLink {
  href: string;
  label: string;
  desc?: string;
}
export interface NavMenu {
  label: string;
  columns: { title: string; links: NavLink[] }[];
  feature?: { title: string; body: string; href: string; cta: string };
}

export const mainNav: NavMenu[] = [
  {
    label: "Product",
    columns: [
      {
        title: "Platform",
        links: [
          { href: "/product", label: "Product overview", desc: "The internal-request CRM, end to end" },
          { href: "/how-it-works", label: "How it works", desc: "Tap → route → accept → deliver → rate" },
          { href: "/features", label: "All features", desc: "Everything Buzzer does, in one place" },
          { href: "/mobile-app", label: "Mobile app", desc: "Rings through even on silent" },
          { href: "/enterprise", label: "Enterprise", desc: "SSO, white-label, API, on-prem" },
        ],
      },
      {
        title: "Core features",
        links: [
          { href: "/features/one-tap-requests", label: "One-tap requests" },
          { href: "/features/first-accept-wins", label: "First-accept-wins" },
          { href: "/features/request-routing", label: "Request routing" },
          { href: "/notifications/multi-channel", label: "Multi-channel alerts" },
          { href: "/sla", label: "SLA & escalation" },
          { href: "/analytics", label: "Analytics & scorecards" },
          { href: "/admin/roles-and-permissions", label: "Roles & audit logs" },
        ],
      },
    ],
    feature: {
      title: "See a request live",
      body: "Watch a coffee go from tap to 5★ in under four minutes.",
      href: "/how-it-works",
      cta: "How it works",
    },
  },
  {
    label: "Solutions",
    columns: [
      {
        title: "By team",
        links: [
          { href: "/solutions/pantry", label: "Pantry", desc: "Coffee, tea, snacks, lunch" },
          { href: "/solutions/print-room", label: "Print room", desc: "PDF upload, copies, colour" },
          { href: "/solutions/it-support", label: "IT support", desc: "Projector, HDMI, hardware" },
          { href: "/solutions/facilities", label: "Facilities", desc: "AC, rooms, maintenance" },
          { href: "/solutions/courier", label: "Courier & reception", desc: "Pickups, mailroom, front desk" },
        ],
      },
      {
        title: "Workflows",
        links: [
          { href: "/workflows", label: "Office service workflow" },
          { href: "/workflows/coffee-request", label: "Coffee request" },
          { href: "/workflows/print-request", label: "Print request" },
          { href: "/workflows/ac-issue", label: "AC issue" },
          { href: "/workflows/courier-pickup", label: "Courier pickup" },
          { href: "/workflows/emergency-summon", label: "Emergency summon" },
        ],
      },
    ],
  },
  {
    label: "Use cases",
    columns: [
      {
        title: "By role",
        links: [
          { href: "/use-cases/ceo", label: "CEO" },
          { href: "/use-cases/office-manager", label: "Office manager" },
          { href: "/use-cases/hr", label: "HR" },
          { href: "/use-cases/it-manager", label: "IT manager" },
          { href: "/use-cases/facilities-manager", label: "Facilities manager" },
          { href: "/use-cases/operations", label: "Operations" },
        ],
      },
      {
        title: "By problem",
        links: [
          { href: "/use-cases/stop-office-chase-calls", label: "Stop chase calls" },
          { href: "/use-cases/reduce-whatsapp-requests", label: "Quiet the WhatsApp group" },
          { href: "/use-cases/prevent-lost-requests", label: "Prevent lost requests" },
          { href: "/use-cases/improve-response-time", label: "Faster response times" },
          { href: "/use-cases/staff-accountability", label: "Staff accountability" },
          { href: "/use-cases/sla-compliance", label: "SLA compliance" },
        ],
      },
    ],
  },
  {
    label: "Resources",
    columns: [
      {
        title: "Learn",
        links: [
          { href: "/resources", label: "Resource hub" },
          { href: "/explore", label: "Explore all pages" },
          { href: "/resources/internal-request-management-guide", label: "Internal request guide" },
          { href: "/resources/office-automation-guide", label: "Office automation guide" },
          { href: "/resources/sla-management-guide", label: "SLA management guide" },
          { href: "/resources/glossary", label: "Glossary" },
        ],
      },
      {
        title: "Evaluate",
        links: [
          { href: "/resources/product-tour", label: "Product tour" },
          { href: "/customers", label: "Customer stories" },
          { href: "/compare", label: "Feature comparison" },
          { href: "/compare/whatsapp", label: "ZapBuzzer vs WhatsApp" },
          { href: "/resources/faq", label: "Product FAQ" },
          { href: "/developers/api", label: "API & developers" },
        ],
      },
    ],
  },
  {
    label: "Company",
    columns: [
      {
        title: "ZapBuzzer",
        links: [
          { href: "/about", label: "About", desc: "Building the quiet office" },
          { href: "/clients", label: "Clients", desc: "200+ offices onboarded" },
          { href: "/pricing", label: "Pricing", desc: "Free, Pro ₹99/seat, Enterprise" },
          { href: "/contact", label: "Contact", desc: "Reply within one business day" },
          { href: "/demo", label: "Book a demo" },
        ],
      },
    ],
  },
];
