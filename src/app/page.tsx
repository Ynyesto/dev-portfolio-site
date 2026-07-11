import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: SITE.name,
  description: SITE.description,
  alternates: { canonical: "/" },
  openGraph: { images: [{ url: "/opengraph-image" }] },
  twitter: { images: ["/opengraph-image"] },
};

function SectionHeading({ id, label, title }: { id: string; label: string; title: string }) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-4 mb-2">
        <p className="eyebrow">
          <a href={`#${id}`}>{label}</a>
        </p>
        <div aria-hidden className="h-px flex-1 bg-gradient-to-r from-white/15 to-transparent" />
      </div>
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">{title}</h2>
    </div>
  );
}

function ExternalLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-accent hover:underline underline-offset-4 ${className}`}
    >
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <div className="space-y-24 pb-8">
      <Script id="ld-person" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Antonio Rodríguez‑Ynyesto",
          url: SITE.url,
          email: SITE.email,
          sameAs: [SITE.github, SITE.linkedin, SITE.twitter],
          jobTitle: "Web3 Software Engineer",
        })}
      </Script>

      {/* Hero */}
      <section className="pt-16 sm:pt-24">
        <div className="flex flex-col-reverse sm:flex-row items-center sm:items-start gap-10 animate-fade-up">
          <div className="flex-1 space-y-6 text-center sm:text-left">
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
                Antonio Rodríguez‑Ynyesto
              </h1>
              <p className="text-xl sm:text-2xl text-accent font-medium">Web3 Software Engineer</p>
            </div>
            <p className="text-base sm:text-lg text-muted leading-relaxed max-w-2xl mx-auto sm:mx-0">
              I work closest to the EVM: Solidity protocol design, Foundry test suites, and
              security-minded DeFi integrations. I led the smart-contract protocol and tests for
              BitChill, a Bitcoin DCA dApp live on Rootstock, and I also build the surrounding
              back-end systems: protocol integrations, APIs, databases, monitoring, and automation.
            </p>
            <p className="text-sm font-mono text-muted">
              Open to full-time roles · Madrid, Spain · CET/CEST · Remote-friendly
            </p>
            <div className="flex flex-wrap gap-3 justify-center sm:justify-start pt-1">
              <a
                href={SITE.cvDownloadPath}
                className="inline-flex items-center h-11 px-6 rounded-md bg-accent text-background text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                Download CV
              </a>
              <a
                href="#work"
                className="inline-flex items-center h-11 px-6 rounded-md border border-white/20 text-sm font-medium hover:border-white/40 hover:bg-white/5 transition-colors"
              >
                View work
              </a>
              <a
                href="#contact"
                className="inline-flex items-center h-11 px-6 rounded-md border border-white/20 text-sm font-medium hover:border-white/40 hover:bg-white/5 transition-colors"
              >
                Contact
              </a>
            </div>
            <p className="text-sm text-muted">
              <ExternalLink href={SITE.github}>GitHub</ExternalLink>
              <span className="mx-2 text-white/20">·</span>
              <ExternalLink href={SITE.linkedin}>LinkedIn</ExternalLink>
              <span className="mx-2 text-white/20">·</span>
              <ExternalLink href={SITE.cvView}>View CV in browser</ExternalLink>
            </p>
          </div>
          <div className="relative shrink-0">
            <div aria-hidden className="absolute -inset-5 rounded-full bg-accent/10 blur-2xl" />
            <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border border-white/15">
              <Image
                src="/ynyesto.jpg"
                alt="Antonio Rodríguez‑Ynyesto"
                width={176}
                height={176}
                className="object-cover w-full h-full"
                priority
                sizes="(max-width: 640px) 144px, 176px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="scroll-mt-24">
        <SectionHeading id="experience" label="01 · Experience" title="Where I've worked" />
        <div className="space-y-12">
          <article className="grid sm:grid-cols-[11rem_1fr] gap-2 sm:gap-8">
            <p className="font-mono text-sm text-muted pt-1">Mar 2025 — Jun 2026</p>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold">Blockchain Developer · Umbrella Research</h3>
              <ul className="space-y-2 text-muted leading-relaxed list-disc pl-5 marker:text-white/30">
                <li>
                  Built an automated liquidation engine for Aave, designed for future expansion to
                  multiple EVM lending protocols — protocol integration, execution infrastructure,
                  and performance optimization.
                </li>
                <li>
                  Owned most of the TypeScript back-end work, managed staging and production
                  databases (Postgres and Redis), built the React front-end, and updated the
                  Solidity contract used by the liquidation system.
                </li>
                <li>
                  Conducted market and competitor research to keep our liquidation strategies
                  competitive.
                </li>
                <li>
                  The project wound down after Chainlink SVR changed the economics of third-party
                  liquidations.
                </li>
              </ul>
            </div>
          </article>

          <article className="grid sm:grid-cols-[11rem_1fr] gap-2 sm:gap-8">
            <p className="font-mono text-sm text-muted pt-1">Feb 2024 — Present</p>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold">Founder &amp; Tech Lead · BitChill</h3>
              <ul className="space-y-2 text-muted leading-relaxed list-disc pl-5 marker:text-white/30">
                <li>
                  Founded BitChill — an automated, non-custodial, yield-bearing Bitcoin DCA dApp on
                  Rootstock — after winning a Rootstock-sponsored hackathon; development continued
                  under a Rootstock grant. Live on mainnet since early 2025 and open to the public
                  since September 2025, executing users&apos; DCA purchases weekly, fully automated.
                </li>
                <li>
                  Led architecture and development end-to-end. Designed and built the smart contract
                  protocol: two stablecoins (DOC, USDRIF), lending on Tropykus or Sovryn, and rBTC
                  purchases via Money on Chain or Uniswap.
                </li>
                <li>
                  Wrote the unit and integration test suites in Foundry, set up the Safe admin
                  multisig, and wrote the documentation.
                </li>
                <li>
                  Built the back-end — Postgres database, REST API, monitoring, and purchase
                  automation — and the front-end.
                </li>
              </ul>
            </div>
          </article>

          <article className="grid sm:grid-cols-[11rem_1fr] gap-2 sm:gap-8">
            <p className="font-mono text-sm text-muted pt-1">Apr 2022 — Mar 2025</p>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold">Software Designer · Alstom</h3>
              <ul className="space-y-2 text-muted leading-relaxed list-disc pl-5 marker:text-white/30">
                <li>
                  Software development, maintenance, and validation in the railway signalling team,
                  working mainly with C#.
                </li>
              </ul>
            </div>
          </article>

          <div className="grid sm:grid-cols-[11rem_1fr] gap-2 sm:gap-8">
            <p className="font-mono text-sm text-muted">Earlier</p>
            <p className="text-muted leading-relaxed">
              RPA developer at Cognizant (2021–2022) · Automation &amp; control internship at Zeus
              Control (2020)
            </p>
          </div>

          <div className="grid sm:grid-cols-[11rem_1fr] gap-2 sm:gap-8 border-t border-white/10 pt-8">
            <p className="font-mono text-sm text-muted">Education</p>
            <p className="text-muted leading-relaxed">
              Double M.Sc. in Industrial Engineering and Automation &amp; Robotics — Technical
              University of Madrid (UPM). B.Sc. in Industrial Technologies Engineering — UPM.
            </p>
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="scroll-mt-24">
        <SectionHeading id="work" label="02 · Work" title="Selected work" />
        <div className="space-y-6">
          <article className="panel p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-3">
              <h3 className="text-xl font-semibold">BitChill</h3>
              <span className="font-mono text-xs text-accent border border-accent/30 rounded-full px-3 py-1">
                Live on Rootstock mainnet
              </span>
            </div>
            <p className="text-muted leading-relaxed mb-4 max-w-3xl">
              Automated, non-custodial, yield-bearing Bitcoin DCA dApp. I led it end-to-end: a smart
              contract protocol integrating Money on Chain, Uniswap, Tropykus, and Sovryn; Foundry
              unit and integration test suites; a Postgres/REST back-end with monitoring and
              purchase automation; the React front-end; Safe multisig setup and docs.
            </p>
            <p className="font-mono text-xs text-foreground/80 mb-4">
              Production metrics · July 2026: $49.2k purchased · 884 DCA executions · 82 on-chain
              transactions · 73 all-time users
            </p>
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
              <Link
                href="/portfolio/bitchill"
                className="text-accent hover:underline underline-offset-4"
              >
                Read case study →
              </Link>
              <ExternalLink href="https://bitchill.app">bitchill.app</ExternalLink>
              <ExternalLink href="https://github.com/BitChillRSK/bitchill-contracts">
                Contracts repo
              </ExternalLink>
            </div>
          </article>

          <article className="panel p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-3">
              <h3 className="text-xl font-semibold">ETHGlobal Bangkok — Migratoooor</h3>
              <span className="font-mono text-xs text-accent border border-accent/30 rounded-full px-3 py-1">
                3 sponsor prizes
              </span>
            </div>
            <p className="text-muted leading-relaxed mb-4 max-w-3xl">
              48-hour hackathon build: a tool to migrate ERC-20 tokens from L1 to multi-chain L2s
              using Scroll&apos;s L1SLOAD and Chainlink CCIP. I implemented the CCIP integration,
              which won Chainlink&apos;s prize for best use of CCIP; we also took Scroll&apos;s
              L1SLOAD prize (2nd place) and a Blockscout pool prize.
            </p>
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
              <Link
                href="/portfolio/ethglobal-bangkok"
                className="text-accent hover:underline underline-offset-4"
              >
                Read case study →
              </Link>
              <ExternalLink href="https://github.com/GianfrancoBazzani/ETHGlobalBKK">
                Repository
              </ExternalLink>
            </div>
          </article>

          <ul className="space-y-5 pt-2">
            <li className="grid sm:grid-cols-[14rem_1fr] gap-1 sm:gap-6">
              <h4 className="font-medium">Immunefi bug report</h4>
              <p className="text-muted text-sm leading-relaxed">
                Reported a low-severity bug in Tropykus&apos; fork of Compound&apos;s CToken
                contract via <ExternalLink href={SITE.immunefi}>Immunefi</ExternalLink> (November
                2025), since fixed in their documentation.
              </p>
            </li>
            <li className="grid sm:grid-cols-[14rem_1fr] gap-1 sm:gap-6">
              <h4 className="font-medium">
                <ExternalLink
                  href="https://evm-storage.codes/"
                  className="text-foreground hover:text-accent"
                >
                  EVM Storage Codes
                </ExternalLink>
              </h4>
              <p className="text-muted text-sm leading-relaxed">
                Implemented EIP-1967 and legacy proxy resolution, decoded live on-chain storage
                values, and recursive Solidity project-directory uploads with relative-import
                support; also fixed correctness and UI bugs (July 2026). Review the{" "}
                <ExternalLink href="https://github.com/GianfrancoBazzani/evm-storage.codes/pulls?q=is%3Apr+author%3AYnyesto">
                  PRs on GitHub
                </ExternalLink>
                .
              </p>
            </li>
            <li className="grid sm:grid-cols-[14rem_1fr] gap-1 sm:gap-6">
              <h4 className="font-medium">Earlier hackathon wins</h4>
              <p className="text-muted text-sm leading-relaxed">
                First prize at the Vottun &amp; DexTools hackathon sponsored by Rootstock with the
                BitChill MVP (January 2024) · Social-impact prize at Block &amp; Change with
                QualiHire, an NFT-based credentials system (October 2023).
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="scroll-mt-24">
        <SectionHeading id="skills" label="03 · Skills" title="What I work with" />
        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-8">
          <div>
            <h3 className="font-mono text-sm text-foreground/90 uppercase tracking-wider mb-3">
              Solidity / EVM
            </h3>
            <p className="text-muted leading-relaxed">
              Solidity · Foundry (unit, integration, fuzz, invariant testing) · ERC standards
              (20/721/1155/4626/6909) · upgradeable contracts · Safe multisig · Slither · Aderyn ·
              Chainlink · Uniswap · Rootstock · Aave · Compound
            </p>
          </div>
          <div>
            <h3 className="font-mono text-sm text-foreground/90 uppercase tracking-wider mb-3">
              Back-end blockchain
            </h3>
            <p className="text-muted leading-relaxed">
              TypeScript · Node.js · Viem · Ethers.js · PostgreSQL · REST APIs · monitoring &amp;
              automation · Docker · GitHub Actions
            </p>
          </div>
          <div>
            <h3 className="font-mono text-sm text-foreground/90 uppercase tracking-wider mb-3">
              Front-end
            </h3>
            <p className="text-muted leading-relaxed">React · Next.js · Tailwind CSS</p>
          </div>
          <div>
            <h3 className="font-mono text-sm text-foreground/90 uppercase tracking-wider mb-3">
              Other languages
            </h3>
            <p className="text-muted leading-relaxed">JavaScript · Python · C#</p>
          </div>
          <div>
            <h3 className="font-mono text-sm text-foreground/90 uppercase tracking-wider mb-3">
              Training &amp; certifications
            </h3>
            <ul className="text-muted leading-relaxed space-y-1 text-sm">
              <li>Assembly &amp; Formal Verification — Cyfrin Updraft (2026)</li>
              <li>Smart Contract Security — Cyfrin Updraft (2025)</li>
              <li>Uniswap Hooks Incubator — Atrium Academy (2025)</li>
              <li>Advanced Foundry — Cyfrin Updraft (2023)</li>
              <li>Ethereum Developer Bootcamp — Alchemy University (2023)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Writing / Proof */}
      <section id="writing" className="scroll-mt-24">
        <SectionHeading id="writing" label="04 · Writing & Proof" title="Writing and public work" />
        <ul className="space-y-5">
          <li className="grid sm:grid-cols-[14rem_1fr] gap-1 sm:gap-6">
            <p className="font-mono text-sm text-muted">CTF write-up</p>
            <div>
              <ExternalLink
                href="https://medium.com/@ynyesto/how-i-solved-the-rekt-games-ctf-by-the-red-guild-at-devcon-7-sea-227226d8106c"
                className="font-medium text-foreground hover:text-accent"
              >
                How I solved The Rekt Games CTF
              </ExternalLink>
              <p className="text-muted text-sm mt-1">
                The Red Guild&apos;s challenges at Devcon 7 Southeast Asia (December 2024).
              </p>
            </div>
          </li>
          <li className="grid sm:grid-cols-[14rem_1fr] gap-1 sm:gap-6">
            <p className="font-mono text-sm text-muted">CTF write-ups</p>
            <div>
              <span className="font-medium">
                Ethernaut levels{" "}
                <ExternalLink
                  href="https://medium.com/@ynyesto/ethernaut-32-impersonator-825c0ea9d76d"
                  className="text-foreground hover:text-accent"
                >
                  32
                </ExternalLink>{" "}
                and{" "}
                <ExternalLink
                  href="https://medium.com/@ynyesto/ethernaut-33-magical-animal-carousel-3aff78fe67be"
                  className="text-foreground hover:text-accent"
                >
                  33
                </ExternalLink>
              </span>
              <p className="text-muted text-sm mt-1">
                Signature malleability and bitwise operations — the two final levels (at the time of
                publication) of OpenZeppelin&apos;s wargame, which I completed in full.
              </p>
            </div>
          </li>
          <li className="grid sm:grid-cols-[14rem_1fr] gap-1 sm:gap-6">
            <p className="font-mono text-sm text-muted">Security report</p>
            <div>
              <ExternalLink
                href="https://github.com/Ynyesto/VaultGuardiansAudit/blob/main/audit-ynyesto/report.pdf"
                className="font-medium text-foreground hover:text-accent"
              >
                VaultGuardians audit report
              </ExternalLink>
              <p className="text-muted text-sm mt-1">
                Solo training audit from Cyfrin Updraft&apos;s security course.
              </p>
            </div>
          </li>
          <li className="grid sm:grid-cols-[14rem_1fr] gap-1 sm:gap-6">
            <p className="font-mono text-sm text-muted">Research</p>
            <div>
              <ExternalLink
                href="https://hackmd.io/@Ynyesto/BkwKsCtJ0"
                className="font-medium text-foreground hover:text-accent"
              >
                Proposer-Builder Separation
              </ExternalLink>
              <p className="text-muted text-sm mt-1">
                Contribution to the{" "}
                <ExternalLink
                  href="https://epf.wiki/#/"
                  className="text-muted text-sm mt-1 text-foreground hover:text-accent"
                >
                  Ethereum Protocol Fellowship wiki
                </ExternalLink>
                .
              </p>
            </div>
          </li>
          <li className="grid sm:grid-cols-[14rem_1fr] gap-1 sm:gap-6">
            <p className="font-mono text-sm text-muted">Research</p>
            <div>
              <ExternalLink
                href="https://www.linkedin.com/feed/update/urn:li:activity:7171854584959623168/"
                className="font-medium text-foreground hover:text-accent"
              >
                Quantitative research directions for staking providers
              </ExternalLink>
              <p className="text-muted text-sm mt-1">
                Piece on staking economics and provider optimization (March, 2024).
              </p>
            </div>
          </li>
        </ul>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-24">
        <SectionHeading id="contact" label="05 · Contact" title="Get in touch" />
        <div className="max-w-2xl space-y-6">
          <p className="text-muted leading-relaxed">
            I&apos;m looking for a full-time role as a Web3 software engineer — smart contracts and
            protocol engineering first, or the back-end systems around them. If my profile fits your
            team, I&apos;d love to hear from you.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={`mailto:${SITE.email}`}
              className="inline-flex items-center h-11 px-6 rounded-md bg-accent text-background text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Email me
            </a>
            <a
              href={SITE.cvDownloadPath}
              className="inline-flex items-center h-11 px-6 rounded-md border border-white/20 text-sm font-medium hover:border-white/40 hover:bg-white/5 transition-colors"
            >
              Download CV
            </a>
            <a
              href={SITE.cvView}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center h-11 px-6 rounded-md border border-white/20 text-sm font-medium hover:border-white/40 hover:bg-white/5 transition-colors"
            >
              View CV
            </a>
          </div>
          <p className="text-sm text-muted">
            <ExternalLink href={SITE.github}>GitHub</ExternalLink>
            <span className="mx-2 text-white/20">·</span>
            <ExternalLink href={SITE.linkedin}>LinkedIn</ExternalLink>
            <span className="mx-2 text-white/20">·</span>
            <ExternalLink href={SITE.telegram}>Telegram</ExternalLink>
            <span className="mx-2 text-white/20">·</span>
            <ExternalLink href={SITE.twitter}>X</ExternalLink>
          </p>
          <p className="text-sm font-mono text-muted">Madrid, Spain · CET/CEST · Remote-friendly</p>
        </div>
      </section>
    </div>
  );
}
