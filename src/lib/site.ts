const CV_DOC_ID = "1_9dUKUDBtRzAt7B3VOBIyF_ywLb5-7m5PUYHmlsZU1k";

export const SITE = {
  name: "Antonio Rodríguez‑Ynyesto | Web3 Software Engineer",
  description:
    "Web3 Software Engineer focused on Solidity, EVM protocol design, Foundry testing, and the back-end systems around DeFi products.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  get domain() {
    try {
      return new URL(this.url).hostname;
    } catch {
      return "localhost";
    }
  },
  email: "ynyesto@gmail.com",
  github: "https://github.com/Ynyesto",
  linkedin: "https://www.linkedin.com/in/antonio-maria-rodriguez-ynyesto-sanchez",
  twitter: "https://twitter.com/ynyesto",
  telegram: "https://t.me/ynyesto",
  immunefi: "https://immunefi.com/profile/Ynyesto",
  cvDownload: `https://docs.google.com/document/d/${CV_DOC_ID}/export?format=pdf`,
  // Same-origin proxy (src/app/cv/route.ts) that renames the downloaded file
  cvDownloadPath: "/cv",
  // Same-origin inline viewer (src/app/cv/view/route.ts) so reading the CV
  // never requires reaching Google (corporate networks, mobile Docs app)
  cvViewPath: "/cv/view",
  cvView: `https://docs.google.com/document/d/${CV_DOC_ID}`,
};
