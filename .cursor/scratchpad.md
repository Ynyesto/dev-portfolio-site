### Project: Smart-Contract Portfolio Website (Planner Mode)

### Background and Motivation
- Goal: Convert your extensive proof-of-work (smart contracts, audits, hackathons, research) into a focused, professional portfolio that attracts part‑time smart‑contract engagements, while reinforcing your positioning as a Solidity engineer with security mindset.
- Business outcomes:
  - Inbound leads via site (contact form and calendar bookings)
  - Social proof for outreach (DMs, proposals, contest submissions)
  - SEO presence for niche keywords (solidity audits, ERC‑4626, Uniswap hooks, CCIP)
- Constraints and context: Strong body of work exists in `portfolio.md` and GitHub `Ynyesto`, plus BitChill and multiple course repos. We will curate 2–3 high‑signal case studies + audits page + writing.

### Key Challenges and Analysis
- SEO: Ensure crawlable, fast, SSR/SSG pages with structured data (JSON‑LD), sitemaps, canonical tags, Open Graph, and clear topical clusters (audits, case studies, writing).
- Content overload: Curate for clarity—prioritize recency, quality, and client value. Link out to long lists via MDX pages without crowding the homepage.
- Conversion: Clear CTA (“Smart Contract Engineer available for part‑time engagements”) with calendar + contact form. Productized services to reduce friction.
- Trust/Social proof: Highlight wins (ETHGlobal prizes, Rootstock grant, FilmChain vesting), security coursework and audit repos. Include logos where allowed.
- Performance/UX: Lighthouse 95+ across Performance/SEO/Best Practices/Accessibility; green Core Web Vitals. Dark/light themes, responsive design.

### Target Audience and Positioning
- Audience: Web3 founders, protocol teams, and PMs seeking smart‑contract development and pragmatic engineering reviews; also hackathon/grant collaborators.
- Positioning statement: “Security‑minded Smart Contract Engineer (Solidity + Foundry) specializing in DeFi integrations, Uniswap hooks, and protocol development—available for part‑time engagements.”
- Note on scope: Do not present as a professional security auditor. Frame security work as “engineering reviews” and “training audits from coursework,” not formal audits.
- Top services (non‑audit wording):
  - Smart contract development (ERC‑20/721/1155, ERC‑4626, Uniswap v4 hooks, vesting/airdrops)
  - Engineering code reviews (manual review + Slither + Foundry fuzz/invariants) with a clear non‑audit disclaimer
  - Protocol integrations (Aave, Chainlink CCIP, Rootstock)

### Information Architecture (IA)
- Primary navigation:
  - Home
  - Portfolio (overview) → links to Case Studies
  - Engineering Reviews (course/training reviews, contest findings, CTFs)
  - Writing (blog + external links to Medium/LinkedIn)
  - Services (packages, process, tools, FAQs)
  - About (bio, social proof, stack)
  - Contact (form + calendar)

- Page outlines
  - Home
    - Hero: headline + subcopy + CTA buttons (Book a call, Email)
    - Trust bar (logos: ETHGlobal, Rootstock, FilmChain; or text if logos unavailable)
    - Featured case studies (BitChill, FilmChain Vesting)
    - Featured audits (2–3 from Cyfrin Security series)
    - Writing highlights (Ethernaut L32/L33, Rekt Games)
    - Services teaser + secondary CTA
  - Portfolio (Overview)
    - Grid of projects by category: Case Studies, Hackathons, Courses, Personal Projects
  - Case Study (template for each)
    - Problem → Solution → Architecture → Security considerations → Tests → Links (repo, Etherscan) → Results
  - Engineering Reviews
    - Overview of review approach + tooling; clearly labeled course/training reviews; list of repos with short blurbs + links to tests/write‑ups; prominent non‑audit disclaimer
  - Writing
    - Blog (MDX) + external articles (Medium/LinkedIn) with summaries
  - Services
    - Productized packages (e.g., “Review up to 400 LoC in 48h”, “ERC‑4626 vault build”), tools, process, FAQs, rates (optional)
  - About
    - Short bio, current roles (Umbrella Research, BitChill), stack icons, credentials, awards
  - Contact
    - Contact form (serverless), Calendly embed, email, social links

### Content Mapping (from `portfolio.md`)
- Case studies (priority):
  - BitChill (Rootstock grant, DCA dApp; your SC role)
  - FilmChain Vesting (paid freelance; vesting with cliff & schedules)
  - ETHGlobal Bangkok (CCIP, L1SLOAD; multiple prizes)
- Engineering Reviews / Training Audits:
  - Cyfrin six training audits (PasswordStore → VaultGuardians) with brief notes and disclaimer
  - Ethernaut write‑ups (L32/L33) and Rekt Games write‑up
- Integrations/Protocols:
  - CCIP Bootcamp (cross‑chain), Aave V3, Uniswap hooks (5 workshop + capstone)
- Courses/Foundations:
  - Foundry fundamentals/advanced repos; Alchemy series; CodeCrypto web2 (condense to one section)
- Personal projects:
  - Carbon Defootprint dApp, Oasis Riddle

### SEO Strategy
- Technical
  - Next.js App Router with SSG/ISR for most pages; SSR only where needed.
  - Metadata API for per‑page titles/descriptions; canonical URLs; Open Graph/Twitter cards.
  - JSON‑LD structured data: `Person`, `Organization` (if applicable), `WebSite`, `BreadcrumbList`, `Article` (for posts), `CreativeWork`/`SoftwareSourceCode` (for repos/case studies).
  - `robots.txt`, `sitemap.xml` (auto with next-sitemap), `humans.txt`.
  - Image optimization via `next/image`; font optimization via `next/font`.
  - Internationalization: English only initially; plan for `en` locale.
- Content
  - Keyword themes: “smart contract engineer,” “solidity audit,” “Uniswap v4 hooks,” “ERC‑4626 vault,” “Chainlink CCIP,” “Rootstock smart contracts.”
  - On‑page: scannable headings, internal links between related pages, FAQs.
  - Social SEO: cross‑post case studies and audits; generate OG images per page.
- KPIs
  - Lighthouse SEO ≥ 95; CLS < 0.1, LCP < 2.5s; Rich Results pass for JSON‑LD.

### Visual Design & UX
- Clean, developer‑first aesthetic; dark mode default, light mode toggle.
- Components: Hero, Trust bar, Project cards, Timeline, Code snippet blocks (MDX), Callouts, Tag filters.
- Accessibility: semantic HTML, focus states, color contrast AA+.

### Tech Stack
- Next.js 14 (App Router) + TypeScript
- Tailwind CSS + shadcn/ui (or headless) for accessible primitives
- MDX content + Contentlayer for typed content
- next-seo for metadata helpers; next-sitemap for sitemaps
- Forms: Next.js Route Handler + Resend (email) or Formspree (fallback) + hCaptcha/reCAPTCHA
- Analytics: Plausible (privacy‑friendly) or GA4; track CTAs and outbound clicks
- Deployment: Vercel (preview/staging/prod) with custom domain

### Testing & Quality
- Unit: React Testing Library for critical components; snapshot test for MDX rendering.
- E2E: Playwright for navigation, contact flow, and structured data presence.
- SEO checks: Jest test for JSON‑LD presence and validity (schema.org), Lighthouse CI in PR.
- Performance budget: block large deps; analyze bundles with `next-bundle-analyzer`.

### Legal & Ops
- Pages: Privacy Policy, Terms, Cookies (simple templates).
- Payment note: state USDC accepted; billing via Coinbase Commerce/Request (no integration needed on site).

### High‑level Task Breakdown (with success criteria)
1) Project scaffolding
   - Create Next.js app (App Router, TS), Tailwind, ESLint/Prettier, Husky.
   - Success: dev server runs; lint passes; CI pipeline ready.
2) Global layout & design system
   - Header/nav, footer, typography, color tokens, dark mode; responsive grid.
   - Success: Lighthouse Accessibility ≥ 95; mobile nav usable.
3) SEO foundations
   - Metadata API, next-seo, OG image generator, sitemap/robots, canonical.
   - Success: Lighthouse SEO ≥ 95; pages have valid OG/Twitter cards.
 4) Content modeling
   - Contentlayer schemas for CaseStudy, Review, Article, Project; MDX templates.
   - Success: Type‑safe content builds; example MDX renders.
 5) Pages (routing & content stubs)
   - Home, Portfolio, Engineering Reviews, Writing, Services, About, Contact.
   - Success: All pages render with stubs; nav and breadcrumbs work.
6) Case studies (3 items)
   - BitChill, FilmChain Vesting, ETHGlobal Bangkok—full MDX with assets.
   - Success: Each page includes architecture, security, tests, links.
 7) Engineering Reviews
   - Index of course/training reviews + CTF write‑ups; brief summaries and links; non‑audit disclaimer.
   - Success: Structured list with filters/tags; JSON‑LD per item; disclaimer visible.
8) Writing
   - MDX blog + external links; RSS feed.
   - Success: RSS validates; posts have `Article` schema.
9) Services
   - Packages + process + FAQs; optional rates.
   - Success: Clear CTAs; internal links to case studies.
10) Contact & booking
   - Contact form (serverless) with spam protection; Calendly embed.
   - Success: Form delivers to inbox; test spam prevention; events tracked.
11) Analytics & events
   - Plausible/GA4; track CTA clicks, form views/submits, outbound links.
   - Success: Events visible in dashboard.
12) Testing & hardening
   - Playwright flows; Lighthouse CI; structured data tests.
   - Success: All tests green; Lighthouse ≥ 95 across categories.
13) Deploy & polish
   - Vercel preview → prod; custom domain; 404/500 pages; favicon set.
   - Success: Live site, indexed by Google; sitemap submitted.

### Project Status Board
- [x] 1. Confirm domain, email, and brand preferences
- [x] 2. Scaffold Next.js + Tailwind + TS + lint/format/CI
- [x] 3. Implement global layout and theme (fixed footer, removed theme toggle, hero layout)
- [x] 4. SEO base (metadata, sitemap, robots, OG)
- [ ] 5. Contentlayer schemas + MDX setup (Deferred: version conflict with Next 15; proceed later or replace with simple MDX loader)
- [x] 6. Build core pages (stubs)
- [x] 7. Write 3 case studies (BitChill, FilmChain Vesting, ETHGlobal Bangkok)
- [x] 8. Revise "Engineering Reviews" → "Learning" page with courses/training + links
- [x] 9. Add actual links to Writing page (Medium articles, EPF wiki)
- [x] 10. Reconsider Services page: convert to "How I Work" or merge into About/Contact (merged into About)
- [x] 11. Add LinkedIn to footer
- [x] 12. Visual enhancements: consistent page headers, glass cards, background logos, enhanced hero
- [x] 13. Home page redesign: larger hero, professional profile, featured projects section
- [x] 14. Portfolio enhancement: all case study pages with professional formatting
- [x] 15. Responsive design implementation: mobile-first with proper scaling
- [ ] 16. Contact form + Calendly integration + spam protection
- [ ] 17. Analytics event instrumentation (Plausible already added)
- [ ] 18. E2E + Lighthouse CI + schema tests
- [ ] 19. Deploy to Vercel with custom domain
- [x] 20. Project README documentation

### Current Status / Progress Tracking

#### Phase 1: Foundation & Core Structure ✅ COMPLETE
- [x] Next.js 15 + TypeScript + Tailwind scaffolding
- [x] SEO foundation (metadata, sitemaps, structured data)
- [x] Global layout with navigation and footer
- [x] Core page routing and structure

#### Phase 2: Content & Design ✅ COMPLETE  
- [x] All case study pages with professional formatting
- [x] Learning page with comprehensive course listings
- [x] Writing page with external article links
- [x] About page with bio and "How I Work" section
- [x] Visual design system: glass cards, gradient headers, consistent styling
- [x] Background logo collages on relevant pages

#### Phase 3: User Experience & Polish ✅ COMPLETE
- [x] Home page hero redesign: massive typography, professional photo, clear CTAs
- [x] Enhanced featured projects section with status badges
- [x] Consistent page headers across all sections
- [x] Mobile-first responsive design implementation
- [x] LinkedIn integration in footer
- [x] Project documentation (comprehensive README)

#### Phase 4: Responsive Design Analysis ✅ COMPLETE

**Mobile (< 640px)**:
- ✅ Hero: Centered layout, stacked content, text-4xl scaling
- ✅ Navigation: Compact header with collapsible potential
- ✅ Cards: Single column layout with proper spacing
- ✅ Profile: Smaller image (w-40 h-40), centered alignment
- ✅ Typography: Proper scaling from text-base to text-xl

**Tablet (640px - 1024px)**:
- ✅ Hero: Semi-responsive with text-6xl, better spacing
- ✅ Cards: 2-column grid for featured projects
- ✅ Profile: Medium size (w-48 h-48), good balance
- ✅ Navigation: Full horizontal layout

**Desktop (> 1024px)**:
- ✅ Hero: Full side-by-side layout with text-7xl impact
- ✅ Cards: Grid layouts with hover effects
- ✅ Profile: Large size (w-56 h-56), professional presentation
- ✅ Full navigation with enhanced CTAs

**Responsive Features Implemented**:
- ✅ Mobile-first CSS with progressive enhancement
- ✅ Flexible grid systems (1-col → 2-col → multi-col)
- ✅ Responsive typography scaling
- ✅ Touch-friendly button sizing (h-12 on mobile)
- ✅ Optimized image sizing across breakpoints
- ✅ Proper spacing and padding adjustments

#### Phase 5: Functionality & Interactivity 🚧 NEXT PHASE

**Priority: HIGH (Core functionality for lead generation)**
- [ ] 16. Contact form implementation with serverless backend
  - Success: Form submits to email, includes spam protection
  - Components: Contact form UI, Next.js API route, email service integration
  - Estimated: 2-3 hours

- [ ] 17. Enhanced Calendly integration  
  - Success: Seamless booking flow, proper tracking
  - Components: Embed optimization, event tracking setup
  - Estimated: 1 hour

**Priority: MEDIUM (Analytics & optimization)**
- [ ] 18. Analytics event instrumentation
  - Success: Track CTA clicks, form submissions, external links
  - Components: Event tracking code, goal setup in Plausible
  - Estimated: 1-2 hours

**Priority: MEDIUM (Quality assurance)**
- [ ] 19. Performance and accessibility audit
  - Success: Lighthouse scores 95+ across all categories
  - Components: Performance optimization, accessibility fixes
  - Estimated: 2-3 hours

#### Phase 5.1: UI Consistency & Mobile Nav Polish 🚧 NEW

- [ ] A. Unify page card/list formats across `portfolio`, `writing`, and `learning` pages
  - Success: All three pages use consistent “glass” cards, grid layout (1‑col on mobile, 2‑col on md+), and the same hover affordances.
  - Changes:
    - `portfolio/page.tsx`: add same hover/transition styles as writing; ensure grid behavior matches.
    - `writing/page.tsx`: switch list items to glass cards in a responsive grid.
    - `learning/page.tsx`: present items as glass cards in a responsive grid (keep section headings).
  - Acceptance: Visual parity across pages; no layout shift; passes mobile/desktop checks.

- [ ] B. Mobile header/nav spacing
  - Success: No overlap on small screens; “Book a call” remains legible; nav links don’t collide.
  - Changes: Allow header row to wrap on mobile; reduce nav text size; make nav horizontally scrollable if needed; shrink CTA on xs.
  - Acceptance: iPhone SE/Pro and Pixel widths render without overlap; no CLS when scrolling.

#### Phase 6: Deployment & Launch 🎯 FINAL PHASE

**Priority: HIGH (Go-live requirements)**
- [ ] 20. Vercel deployment with custom domain
  - Success: Live site accessible, proper redirects configured
  - Components: Vercel setup, DNS configuration, SSL
  - Estimated: 1-2 hours

- [ ] 21. Production optimizations
  - Success: Error pages, favicon, final polish
  - Components: 404/500 pages, meta tags, final testing
  - Estimated: 1 hour

**Priority: LOW (Long-term maintenance)**
- [ ] 22. E2E testing setup (optional)
  - Success: Automated testing for critical user flows
  - Components: Playwright tests, CI integration
  - Estimated: 3-4 hours

#### Estimated Timeline for Completion
- **Phase 5**: 4-6 hours (core functionality)
- **Phase 6**: 2-3 hours (deployment)
- **Total remaining**: 6-9 hours of focused development

#### Current Assessment: 85% Complete
- ✅ Design & UX: Fully implemented and polished
- ✅ Content: All pages populated with real content  
- ✅ SEO: Foundation complete, structured data implemented
- ✅ Responsive: Comprehensive mobile-first implementation
- 🚧 Functionality: Contact form and enhanced interactivity needed
- 🚧 Deployment: Ready for production deployment

### Executor's Feedback or Assistance Requests
Decisions recorded based on user input:
1) Domain: Use free Vercel subdomain for launch (`ynyesto.vercel.app` if available; otherwise project‑generated). Optionally purchase `ynyesto.dev` later.
2) Email: `ynyesto@gmail.com` (display + form delivery).
3) Calendly: Use booking link `https://calendly.com/ynyesto/30min` for "Book a call" CTAs.
4) Branding: Modern dev theme—dark slate with cyan/purple accent. Initial palette: slate (background), zinc/slate text, accent cyan‑500 and purple‑500 gradient. Headshot/logo can be added later for `Person` schema.
5) Rates: Not shown at launch.
6) Services (proposed packages; non‑audit wording):
   - Package A: ERC‑20/721 implementation from spec to deployment (Foundry tests, gas report, docs). Typical duration 1–2 weeks.
   - Package B: ERC‑4626 vault or vesting/airdrop module (configurable), with fuzz/invariant tests and integration notes.
   - Package C: Engineering review (up to 400 LoC): manual review + Slither + Foundry tests; non‑audit disclaimer; fast turnaround option.
   - Package D: Integrations: Chainlink CCIP flow, Uniswap v4 hook POC, or Aave V3 interaction module.
7) Analytics: Use Plausible (privacy‑friendly, cookieless, simple setup) vs GA4 (richer features but heavier and cookie/consent considerations). We’ll implement Plausible now; can add GA4 later if needed.
8) Spam protection: Use hCaptcha (privacy‑friendly). Fallback to reCAPTCHA if required by volume.
9) Case study assets: Add later (BitChill live screenshots/diagrams when available).
10) Top featured links:
   - BitChill contracts: https://github.com/BitChillRSK/bitchill-contracts
   - ETHGlobal Bangkok: https://github.com/GianfrancoBazzani/ETHGlobalBKK
   - FilmChain Vesting: https://github.com/ynyesto/FilmChainVesting

New decisions from user feedback:
11) LinkedIn: https://www.linkedin.com/in/antonio-maria-rodriguez-ynyesto-sanchez (add to footer)
12) Learning focus: Rename "Engineering Reviews" to "Learning"; emphasize continuous education
13) Services reconsideration: Convert to "How I Work" or merge into About/Contact
14) Add external links to Writing page content

### Updated Content Strategy (Based on User Feedback)

#### Navigation Changes
- "Engineering Reviews" → "Learning" (better positioning as continuous learner)
- Update routes: `/reviews` → `/learning`
- Services page: convert to "How I Work" section or merge into About

#### Learning Page Content
- Introduction: "Continuous learning is essential in blockchain development. Here are courses, bootcamps, and training programs I've completed and am currently pursuing."
- Categories:
  - **Security & Auditing**: Cyfrin Updraft Security course (6 training audits), Ethernaut challenges
  - **DeFi Protocols**: Aave V3 Protocol Development, Uniswap Hooks Incubator
  - **Cross-chain**: Chainlink CCIP Bootcamp, Chainlink RWA Bootcamp  
  - **Foundations**: Foundry fundamentals/advanced, Alchemy University series
  - **Research**: Ethereum Protocol Fellowship Study Group
- Include repo links for each course where applicable

#### Writing Page Updates
- Add actual external links:
  - [Ethernaut Level 32: Impersonator](https://medium.com/@ynyesto/ethernaut-32-impersonator-825c0ea9d76d)
  - [Ethernaut Level 33: Magical Animal Carousel](https://medium.com/@ynyesto/ethernaut-33-magical-animal-carousel-3aff78fe67be)
  - [The Rekt Games CTF writeup](https://medium.com/@ynyesto/how-i-solved-the-rekt-games-ctf-by-the-red-guild-at-devcon-7-sea-227226d8106c)
  - [EPF PBS wiki entry](https://hackmd.io/@Ynyesto/BkwKsCtJ0)

### Lessons
- (To be filled by Executor during implementation)
 - After adding content tooling, run `npm audit` and prefer non-breaking `npm audit fix`; moderate transitive issues in contentlayer/esbuild are common and often not exploitable in prod builds. Monitor upstream before forcing major changes.

### Visual Enhancements Backlog (Brainstorm)
- Logos strip: Chainlink, Uniswap, Aave, Rootstock, ETHGlobal (SVGs in `public/logos/`), small shimmer hover.
- Case cards: glass style (border + gradient sheen), award badges (ETHGlobal prizes) as chips.
- Page headers: gradient background blobs per page (Learning/Writing/Portfolio) consistent with home.
- Micro‑interactions: staggered reveal, subtle hover parallax/scale on cards.
- Optional canvas header (Portfolio) inspired by v4hookaddressminer; graceful fallback to static gradient.
- Architecture thumbnail + lightbox on BitChill case study.
- Floating CTA: “Book a call” appears after 30% scroll.
- Contact form: minimal form with hCaptcha, plus Calendly link.
- Learning: category icons, “In progress” badges.
- Writing: card layout with favicons and estimated reading time.

### Next Implementation Bundle (High‑ROI)
1) Logos strip in header/footer.
2) Glass cards on Home/Portfolio with award badges.
3) Gradient headers for Learning, Writing, Portfolio.

Success criteria:
- Visual polish without layout shift; Lighthouse scores unchanged or improved.
- No hydration issues; animations reduced for prefers-reduced-motion.


