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
          { href: "/overview", label: "Overview", desc: "The Internal-Request CRM, End to End" },
          { href: "/how-it-works", label: "How It Works", desc: "Tap → Route → Accept → Deliver → Rate" },
          { href: "/features", label: "Features", desc: "Everything Buzzer Does, in One Place" },
          { href: "/mobile-app", label: "Mobile App", desc: "Rings Through Even on Silent" },
          { href: "/enterprise", label: "Enterprise", desc: "SSO, White-Label, API, On-Prem" },
        ],
      },
      {
        title: "Core Features",
        links: [
          { href: "/features/one-tap-requests", label: "One-Tap Requests" },
          { href: "/features/first-accept-wins", label: "First-Accept-Wins" },
          { href: "/features/request-routing", label: "Request Routing" },
          { href: "/notifications/multi-channel-notifications", label: "Multi-Channel Notifications" },
          { href: "/sla-and-escalation", label: "SLA & Escalation" },
          { href: "/analytics", label: "Analytics" },
          { href: "/administration/roles-and-permissions", label: "Roles & Permissions" },
        ],
      },
    ],
    feature: {
      title: "See a Request Live",
      body: "Watch a coffee go from tap to 5★ in under four minutes.",
      href: "/how-it-works",
      cta: "How It Works",
    },
  },
  {
    label: "Solutions",
    columns: [
      {
        title: "By Team",
        links: [
          { href: "/solutions/pantry", label: "Pantry", desc: "Coffee, Tea, Snacks, Lunch" },
          { href: "/solutions/print-room", label: "Print Room", desc: "PDF Upload, Copies, Colour" },
          { href: "/solutions/it-support", label: "IT Support", desc: "Projector, HDMI, Hardware" },
          { href: "/solutions/facilities", label: "Facilities", desc: "AC, Rooms, Maintenance" },
          { href: "/solutions/courier-and-reception", label: "Courier & Reception", desc: "Pickups, Mailroom, Front Desk" },
        ],
      },
      {
        title: "Workflows",
        links: [
          { href: "/workflows", label: "Workflows" },
          { href: "/workflows/coffee-request", label: "Coffee Request" },
          { href: "/workflows/print-request", label: "Print Request" },
          { href: "/workflows/ac-issue", label: "AC Issue" },
          { href: "/workflows/courier-pickup", label: "Courier Pickup" },
          { href: "/workflows/emergency-summon", label: "Emergency Summon" },
        ],
      },
    ],
  },
  {
    label: "Use Cases",
    columns: [
      {
        title: "By Role",
        links: [
          { href: "/use-cases/ceo", label: "CEO" },
          { href: "/use-cases/office-manager", label: "Office Manager" },
          { href: "/use-cases/hr-team", label: "HR Team" },
          { href: "/use-cases/it-manager", label: "IT Manager" },
          { href: "/use-cases/facilities-manager", label: "Facilities Manager" },
          { href: "/use-cases/operations-team", label: "Operations Team" },
        ],
      },
      {
        title: "By Problem",
        links: [
          { href: "/use-cases/stop-chase-calls", label: "Stop Chase Calls" },
          { href: "/use-cases/reduce-whatsapp-requests", label: "Reduce WhatsApp Requests" },
          { href: "/use-cases/prevent-lost-requests", label: "Prevent Lost Requests" },
          { href: "/use-cases/improve-response-time", label: "Improve Response Time" },
          { href: "/use-cases/staff-accountability", label: "Staff Accountability" },
          { href: "/use-cases/sla-compliance", label: "SLA Compliance" },
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
          { href: "/resource-hub", label: "Resource Hub" },
          { href: "/explore-all-pages", label: "Explore All Pages" },
          { href: "/resource-hub/internal-request-management-guide", label: "Internal Request Management Guide" },
          { href: "/resource-hub/office-automation-guide", label: "Office Automation Guide" },
          { href: "/resource-hub/sla-management-guide", label: "SLA Management Guide" },
          { href: "/resource-hub/glossary", label: "Glossary" },
        ],
      },
      {
        title: "Evaluate",
        links: [
          { href: "/resource-hub/product-tour", label: "Product Tour" },
          { href: "/customer-stories", label: "Customer Stories" },
          { href: "/feature-comparison", label: "Feature Comparison" },
          { href: "/feature-comparison/vs-whatsapp", label: "Vs WhatsApp" },
          { href: "/resource-hub/faq", label: "FAQ" },
          { href: "/developers/api-documentation", label: "API Documentation" },
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
          { href: "/about-us", label: "About Us", desc: "Building the Quiet Office" },
          { href: "/clients", label: "Clients", desc: "200+ Offices Onboarded" },
          { href: "/pricing", label: "Pricing", desc: "Free, Pro ₹99/seat, Enterprise" },
          { href: "/contact-us", label: "Contact Us", desc: "Reply Within One Business Day" },
          { href: "/book-a-demo", label: "Book a Demo" },
        ],
      },
      {
        title: "Newsroom & People",
        links: [
          { href: "/blog", label: "Blog", desc: "Guides on running office requests" },
          { href: "/careers", label: "Careers", desc: "Help build the quiet office" },
          { href: "/vendors-and-partners", label: "Vendors & Partners", desc: "Serve offices? Work with us" },
          { href: "/media", label: "Media", desc: "Company facts and media contact" },
          { href: "/press-kit", label: "Press Kit", desc: "Logo, colours and descriptions" },
        ],
      },
    ],
  },
];
