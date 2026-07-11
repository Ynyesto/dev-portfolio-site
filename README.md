# Web3 Software Engineer Portfolio

Personal hiring portfolio for Antonio Rodríguez‑Ynyesto (Ynyesto) — Web3 software engineer focused on Solidity, EVM protocol design, Foundry testing, and the back-end systems around DeFi products.

## ✨ Highlights

- Next.js 15 (App Router) + TypeScript + Tailwind CSS
- Single-page portfolio on `/` with anchor navigation: Experience, Work, Skills, Writing & Proof, Contact
- Case-study pages for BitChill and ETHGlobal Bangkok
- CV served from Google Docs (PDF export link) — no static PDF in the repo
- Restrained dark engineering aesthetic, mobile-first
- SEO: metadata, sitemap, robots, dynamic OG image, redirects for retired routes
- Optional free analytics via Cloudflare Web Analytics (env‑gated)

## 🚀 Quickstart

```bash
npm install
npm run dev
```

Open http://localhost:3000

## 🧱 Tech Stack

- Framework: Next.js (App Router) + TypeScript
- Styling: Tailwind CSS
- Images/OG: next/image, @vercel/og
- Lint/Format: ESLint, Prettier, Husky pre‑commit

## 📁 Structure

```
src/app/                # App Router pages
  layout.tsx            # Global layout, header (anchor nav), footer
  page.tsx              # Single-page portfolio (hero, experience, work, skills, writing, contact)
  portfolio/bitchill/   # BitChill case study
  portfolio/ethglobal-bangkok/  # ETHGlobal Bangkok case study
  robots.ts, sitemap.ts # SEO
  opengraph-image.tsx   # Dynamic OG image
src/components/*        # MobileNav, FooterSocials
src/lib/site.ts         # Site constants (links, email, CV URLs)
.agents/skills/*        # Provider-agnostic workflows for AI coding agents
```

Retired routes (`/about`, `/contact`, `/writing`, `/learning`, `/portfolio`, and old case pages) 301-redirect to the relevant homepage anchor — see `next.config.ts`.

## 🔎 SEO

- Metadata API per page
- `robots.txt`, `sitemap.xml`
- Dynamic OG/Twitter image route

## 📊 Optional Free Analytics (Cloudflare)

1. In Cloudflare Web Analytics, choose “JavaScript beacon”, add your deployed hostname, and copy the token from the snippet (`{"token":"..."}`).
2. Create `.env.local`:

```bash
NEXT_PUBLIC_CF_BEACON_TOKEN=YOUR_TOKEN
```

No token set → no analytics script is injected.

## 🌐 Deploy to Vercel (recommended)

1. Push to GitHub.
2. In Vercel → New Project → import this repo.
   - Root directory: repo root
   - Framework: Next.js (auto)
   - Build: `next build` (default)
3. (Optional) Project → Settings → Environment Variables:
   - `NEXT_PUBLIC_CF_BEACON_TOKEN` = your Cloudflare token
   - `NEXT_PUBLIC_SITE_URL` = your final URL (e.g., `https://your-site.vercel.app`)

## 🧪 Scripts

```bash
npm run dev       # start dev server
npm run build     # production build
npm run start     # start prod server
npm run lint      # ESLint
npm run format    # Prettier
```

## 📝 License

Code is MIT; content is © Antonio Rodríguez‑Ynyesto.
