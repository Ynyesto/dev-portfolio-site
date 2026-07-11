---
name: update-portfolio-from-cv
description: Update Antonio Rodriguez-Ynyesto's developer portfolio from his live Google Docs CV. Use when an AI coding agent is asked to refresh the portfolio site, compare portfolio copy against the CV, update job-search positioning, keep the CV download route/link current, or make small content/metadata changes for Antonio's Web3 full-time job search portfolio.
---

# Update Portfolio From CV

Use this workflow to keep Antonio's portfolio aligned with the live CV without turning the site into a CV dump.

## Source Of Truth

- Portfolio repo: this repository.
- CV Google Doc: `https://docs.google.com/document/d/1K0DNrPhYCkpiHpLEa4oH24102Zz3CMXlEeydCPOghHE`
- CV PDF export URL: `https://docs.google.com/document/d/1K0DNrPhYCkpiHpLEa4oH24102Zz3CMXlEeydCPOghHE/export?format=pdf`
- Site CV route should remain `/cv`, proxying the Google Doc PDF export so Antonio does not need to commit new PDF files after CV edits.

Prefer the active branch/worktree the user names. If unclear, inspect `git worktree list`, `git status --short --branch`, and any open PR branch before editing.

## Positioning

Keep the site aimed at full-time roles, not freelance smart-contract contracting.

- Public title: `Web3 Software Engineer`.
- Strength order: Solidity/EVM/Foundry first, back-end blockchain systems second, front-end as supporting implementation work.
- Emphasize: EVM protocol design, Solidity, Foundry test suites, DeFi integrations, APIs, databases, monitoring, automation.
- Be honest about experience: Antonio has production ownership of BitChill's smart-contract protocol and Foundry test suite, limited paid Solidity role history, and broader production ownership at Umbrella across liquidation infrastructure and TypeScript back-end work.
- Avoid claiming extensive live-protocol/security-auditor experience. Avoid making TypeScript sound stronger than it is.
- Avoid unexplained references like `BitChill's protocol` without immediately saying it is a Bitcoin DCA dApp live on Rootstock.
- Umbrella shut down because Chainlink SVR changed the liquidation market; mention this only if useful and neutrally, never defensively.

## Workflow

1. Fetch or inspect the current CV. Prefer the Google Doc export route or a user-provided PDF. If network access is unavailable, ask the user for the latest PDF or exported text.
2. Read the existing portfolio copy before editing. Check `src/lib/site.ts`, `src/app/page.tsx`, `src/app/cv/route.ts`, `src/app/opengraph-image.tsx`, `public/manifest.json`, and any portfolio case-study pages.
3. Compare the CV to the site. Identify only meaningful deltas: new roles, changed dates, stronger wording, new projects, updated contact/profile links, and obsolete claims.
4. Make scoped edits. Preserve the site's concise narrative style and avoid stuffing every CV line onto the page.
5. Keep analytics, CV download, metadata, sitemap, manifest, and Open Graph copy consistent when visible copy changes.
6. Run `npm run build`. If visual or interaction changes were made, run the local app and inspect the affected pages with browser automation or a local browser.
7. Summarize what changed and what, if anything, still needs human confirmation.

## Copy Rules

- Prefer concrete ownership verbs: `led`, `built`, `owned`, `implemented`, `maintained`, `integrated`, `optimized`.
- Keep claims recruiter-readable. Explain Web3 nouns in context when they are project-specific.
- Do not over-index on front-end polish; the site should read as engineering-first.
- Do not add a photo to the CV. The portfolio site may include a photo if it helps trust and personality.
- Keep the tone confident but not inflated.

## Validation Checklist

- `npm run build` passes.
- `/cv` still returns or links to the Google Doc PDF export behavior.
- The hero, metadata, manifest, and OG image all agree on `Web3 Software Engineer`.
- The site does not drift back toward freelance-only smart-contract positioning.
- New copy does not imply paid Solidity employment where there was none.
- No local PDF copy is introduced unless the user explicitly asks for one.
