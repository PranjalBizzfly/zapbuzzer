export const site = {
  name: "ZapBuzzer",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://zapbuzzer.com",
  tagline: "Press a button. Staff knows.",
  // Our own positioning line, used outside the hero.
  strapline: "Every office request gets an owner, a timer and a rating.",
  description:
    "ZapBuzzer is the internal-request CRM for offices: one tap for coffee, prints, IT, facilities and courier — routed to the right team, first-accept-wins, timed and rated.",
  email: "hello@zapbuzzer.com",
  location: "Pune, Maharashtra, India",
  // The product app. Marketing-site auth pages hand off here.
  app: {
    signIn: "https://zapbuzzer.com/sign-in",
    signUp: "https://zapbuzzer.com/signup",
    signUpPro: "https://zapbuzzer.com/signup?plan=pro",
    demo: "https://zapbuzzer.com/sign-in?demo=1",
  },
  legal: {
    privacy: "https://zapbuzzer.com/privacy",
    terms: "https://zapbuzzer.com/terms",
    deleteAccount: "https://zapbuzzer.com/delete-account",
  },
};

export const absUrl = (path: string) =>
  `${site.url.replace(/\/$/, "")}/${path.replace(/^\//, "")}`.replace(/\/$/, "") || site.url;
