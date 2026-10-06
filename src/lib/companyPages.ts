/**
 * Company pages that live in their own app routes (not in the content manifest).
 * Labels here are the single source for nav, footer, breadcrumbs, search and sitemap.
 */
export const companyPages = {
  blog: { href: "/blog", label: "Blog", description: "Guides and explainers on running office requests: pantry, print, IT, facilities, SLAs and fair credit for support staff." },
  vendors: { href: "/vendors-and-partners", label: "Vendors & Partners", description: "Do you supply, serve or help set up offices that use ZapBuzzer? Here’s how to start a conversation with us." },
  careers: { href: "/careers", label: "Careers", description: "Help build the quiet office. Our mission, how we work, the kinds of roles we hire for and how to get in touch." },
  media: { href: "/media", label: "Media", description: "Company overview, verified facts, announcements and the media contact for journalists writing about ZapBuzzer." },
  pressKit: { href: "/press-kit", label: "Press Kit", description: "Download the official ZapBuzzer logo, brand colours, approved descriptions and brand usage guidelines." },
} as const;

export const companyPageList = Object.values(companyPages);
