export const SITE = {
  name: "Antonio Rodríguez‑Ynyesto | Smart Contract Engineer",
  description:
    "Antonio Rodríguez‑Ynyesto is a Smart Contract Engineer available for part‑time engagements.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  get domain() {
    try {
      return new URL(this.url).hostname;
    } catch {
      return "localhost";
    }
  },
  email: "ynyesto@gmail.com",
  calendly: "https://calendly.com/ynyesto/30min",
  github: "https://github.com/Ynyesto",
  twitter: "https://twitter.com/ynyesto",
  telegram: "https://t.me/ynyesto",
};
