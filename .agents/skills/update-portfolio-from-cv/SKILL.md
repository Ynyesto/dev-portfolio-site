---
name: update-portfolio-from-cv
description: Maintain Antonio Rodriguez-Ynyesto's developer portfolio from his live Google Docs CV and review both artifacts for recruiter and ATS quality. Use when an AI coding agent is asked to refresh portfolio content, audit CV-to-site consistency, improve job-search positioning or CV wording, keep the CV download route current, or make related metadata and case-study updates for Antonio's full-time Web3 job search.
---

# Update Portfolio From CV

Keep Antonio's portfolio and CV aligned without turning either artifact into a copy of the other.

## Sources

- Portfolio repo: this repository.
- Public CV Google Doc: `https://docs.google.com/document/d/1_9dUKUDBtRzAt7B3VOBIyF_ywLb5-7m5PUYHmlsZU1k`
- Public CV PDF export: `https://docs.google.com/document/d/1_9dUKUDBtRzAt7B3VOBIyF_ywLb5-7m5PUYHmlsZU1k/export?format=pdf`
- Keep the site CV route at `/cv`, proxying the public PDF export, unless Antonio explicitly selects a different source document.

Prefer the branch or worktree Antonio names. If unclear, inspect `git worktree list`, `git status --short --branch`, and the open PR branch before editing.

## Factual Guardrails

- Never invent dates, employers, titles, numbers, metrics, responsibilities, or outcomes. Ask Antonio when a needed fact is ambiguous or unsupported.
- Treat the public CV as the default source for factual changes, not as final copy and not as an exhaustive database.
- Preserve existing site facts that do not conflict with the CV. Do not remove a valid site detail merely because the shorter CV omits it.
- Flag contradictions between the CV, site, case studies, and linked evidence. Ask Antonio which fact is current before resolving a material conflict.
- Improve phrasing and information hierarchy without inflating scope. Do not turn team work into sole ownership or imply paid Solidity employment where there was none.
- Antonio confirms that BitChill was the first and remains the only DCA service on Rootstock to his knowledge. Preserve that positioning unless Antonio or reliable current evidence supersedes it.

## Positioning

Aim at full-time roles, not freelance smart-contract contracting.

- Public title: `Web3 Software Engineer`.
- Strength order: Solidity/EVM/Foundry first, back-end blockchain systems second, front-end as supporting implementation work.
- Emphasize EVM protocol design, Solidity, Foundry test suites, DeFi integrations, APIs, databases, monitoring, and automation.
- Antonio has production ownership of BitChill's smart-contract protocol and Foundry test suite, limited paid Solidity role history, and broader production ownership at Umbrella across liquidation infrastructure and TypeScript back-end work.
- Avoid claiming extensive live-protocol or security-auditor experience. Avoid making TypeScript sound stronger than it is.
- Explain project-specific nouns immediately. Describe BitChill as a Bitcoin DCA dApp or protocol live on Rootstock before discussing its implementation.
- Umbrella shut down after Chainlink SVR changed the liquidation market. Mention this only when useful and neutrally; it usually belongs on the site or in interview context, not in a CV accomplishment bullet.

## Workflow

1. Fetch the current CV and read the existing portfolio before editing. If the live document is unavailable, use a user-provided export and state that limitation.
2. Inspect `src/lib/site.ts`, `src/app/page.tsx` (including JSON-LD `jobTitle`), `src/app/cv/route.ts`, `src/app/opengraph-image.tsx`, `public/manifest.json`, and all case-study pages.
3. Audit the CV itself before treating it as input. Flag weak framing, duplicated content, stale terminology, typos, unverifiable claims, missing visible contact details, and information that hides recent relevant experience.
4. Compare facts across the CV, site, and linked evidence. Identify only meaningful deltas: roles, dates, ownership, projects, outcomes, links, positioning, and obsolete claims.
5. Make scoped edits. Preserve the site's concise narrative and the CV's scan-friendly hierarchy. Do not copy every CV line onto the site.
6. Keep analytics, CV download behavior, metadata, sitemap, manifest, Open Graph copy, and JSON-LD consistent. Update `src/app/sitemap.ts` and `next.config.ts` when routes change.
7. Run `npx prettier --write` on changed repository files, then run `npm run build`, `npm run lint`, and `npm run format:check`. For visual or interaction changes, inspect affected pages with browser automation or a local browser.
8. Summarize the changes, evidence used, and anything still requiring Antonio's confirmation.

## CV And ATS Rules

- Keep the CV as selectable text in a simple single-column layout with standard section headings. Avoid photos, decorative graphics, layout tables, and contact details placed only in headers, footers, text boxes, or hyperlink targets.
- Show the email address as visible text. Keep GitHub, LinkedIn, and portfolio links human-readable and clickable.
- Use standard skill spellings such as `TypeScript`, `JavaScript`, `Node.js`, `Ethers.js`, `PostgreSQL`, and `GitHub Actions`.
- Put important skills in context as well as in the skills list. Prefer evidence such as `Built Foundry invariant tests` over keyword repetition.
- Match a target job's terminology naturally when tailoring an application, but never add a skill Antonio cannot defend. Do not keyword-stuff or add a meta-keywords tag to the site.
- Lead with current Web3 value and production evidence. Keep career-transition history in Experience or Education rather than opening the summary with it.
- Prefer concrete ownership verbs: `led`, `built`, `owned`, `implemented`, `maintained`, `integrated`, and `optimized`.
- Label courses as `Selected Training`, not professional certifications, unless the credential is genuinely a certification.
- Do not add a photo to the CV. The portfolio may include one when it supports trust and personality.

## Validation

- `npm run build`, `npm run lint`, and `npm run format:check` pass for repository changes.
- `/cv` still returns or redirects to the selected Google Docs PDF export.
- The hero, metadata, manifest, Open Graph image, and JSON-LD `jobTitle` agree on `Web3 Software Engineer`.
- The site does not drift toward freelance-only positioning or overstate Solidity employment history.
- New or changed claims are supported by the CV, existing site evidence, linked work, or Antonio's explicit confirmation.
- For CV edits, export the latest PDF, confirm text extraction order, and inspect every rendered page for clipping, overlap, awkward page breaks, and excessive spillover.
- Never modify an original CV when Antonio asks for a copy. Confirm the source documents remain untouched.
- Do not introduce a local PDF into the repository unless Antonio explicitly asks for one.
