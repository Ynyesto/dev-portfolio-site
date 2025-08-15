# Smart‑Contract Portfolio Website

A professional portfolio for Antonio Rodríguez‑Ynyesto (Ynyesto) to showcase smart‑contract engineering work, continuous learning, and technical writing.

## ✨ Highlights

- Next.js 15 (App Router) + TypeScript + Tailwind CSS
- Professional dark UI with glass cards, gradient headers, responsive layout
- Learning page with courses/bootcamps; Writing page with external articles
- SEO: metadata, sitemap, robots, dynamic OG image
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
  layout.tsx            # Global layout, header, footer
  page.tsx              # Home (hero + featured work)
  portfolio/*           # Case studies
  learning/page.tsx     # Courses & training
  writing/page.tsx      # Articles & writeups
  about/page.tsx        # Bio + How I Work
  contact/page.tsx      # Contact/CTA
  robots.ts, sitemap.ts # SEO
  opengraph-image.tsx   # Dynamic OG image
src/components/*        # Reusable UI
src/lib/site.ts         # Site constants (links, email, urls)
```

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
```

## 📝 License

Code is MIT; content is © Antonio Rodríguez‑Ynyesto.
