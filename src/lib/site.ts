export const site = {
  name: "ZapBuzzer",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://zapbuzzer.com",
  tagline: "Press a button. Staff knows.",
  // Our own positioning line, used outside the hero.
  strapline: "Every office request gets an owner, a timer and a rating.",
  description:
    "ZapBuzzer is the internal-request CRM for offices: one tap for coffee, prints, IT, facilities and courier. Each request goes to the right team, the first person to accept gets it, and every job is timed and rated.",
  email: "hello@zapbuzzer.com",
  location: "Pune, Maharashtra, India",
  // The product app. Marketing-site auth pages hand off here.
  app: {
    signIn: "https://zapbuzzer.com/sign-in",
    signUp: "https://zapbuzzer.com/signup",
    signUpPro: "https://zapbuzzer.com/signup?plan=pro",
    demo: "https://zapbuzzer.com/sign-in?demo=1",
  },
  // Social profiles shown in the footer. Replace each with the real profile URL; until then they point at the site.
  social: {
    facebook: "https://zapbuzzer.com",
    instagram: "https://zapbuzzer.com",
    linkedin: "https://zapbuzzer.com",
    x: "https://zapbuzzer.com",
    youtube: "https://zapbuzzer.com",
  },
  legal: {
    privacy: "https://zapbuzzer.com/privacy",
    terms: "https://zapbuzzer.com/terms",
  },
};

export const absUrl = (path: string) =>
  `${site.url.replace(/\/$/, "")}/${path.replace(/^\//, "")}`.replace(/\/$/, "") || site.url;
