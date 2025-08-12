// import Link from "next/link";
import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import Script from "next/script";
import Image from "next/image";
import TrackedLink from "@/components/TrackedLink";

export const metadata: Metadata = {
  title: SITE.name,
  description: SITE.description,
  alternates: { canonical: "/" },
  openGraph: { images: [{ url: "/opengraph-image" }] },
  twitter: { images: ["/opengraph-image"] },
};

export default function Home() {
  return (
    <section className="space-y-10 relative overflow-hidden">
      <Script id="ld-person" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Antonio Rodríguez‑Ynyesto",
          url: SITE.url,
          email: SITE.email,
          sameAs: [SITE.github],
          jobTitle: "Smart Contract Engineer",
        })}
      </Script>
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 py-8">
        <div className="flex-1 space-y-6 text-center lg:text-left">
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
              <span className="gradient-text">Ynyesto</span>
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white/90">
              Smart Contract Engineer
            </h2>
          </div>
          <p className="text-lg sm:text-xl max-w-2xl text-white/80 leading-relaxed">
            Solidity + Foundry. I build smart-contract systems with a security-first mindset, and
            perform thorough unit and invariant testing. Book a call to discuss your project.
          </p>
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2">
            <a
              className="rounded-full border border-transparent transition-all bg-foreground text-background hover:opacity-90 hover:scale-105 text-base font-medium h-12 px-8 flex items-center shadow-lg"
              href="https://calendly.com/ynyesto/30min"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a call
            </a>
            <TrackedLink
              className="rounded-full border-2 border-white/30 hover:border-white/50 hover:bg-white/5 transition-all text-base font-medium h-12 px-8 flex items-center"
              href="/portfolio"
              event="cta_click"
              props={{ cta: "view_portfolio", location: "hero" }}
            >
              View portfolio
            </TrackedLink>
          </div>
        </div>
        <div className="w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
          <Image
            src="/ynyesto.jpg"
            alt="Antonio Rodríguez‑Ynyesto"
            width={300}
            height={300}
            className="object-cover w-full h-full"
            priority
          />
        </div>
      </div>
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <TrackedLink
            href="/portfolio/bitchill"
            className="glass p-6 block hover:border-white/30 transition-all hover:scale-105 group"
            event="card_click"
            props={{ card: "bitchill" }}
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-xl font-semibold group-hover:text-white transition-colors">
                BitChill
              </h3>
              <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full">
                Rootstock Grant
              </span>
            </div>
            <p className="text-white/70 mb-4 leading-relaxed">
              Automated, non-custodial DCA protocol on Rootstock. SC protocol integrating Money on
              Chain, Uniswap, Tropykus, and Sovryn.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-white/50">Co-Founder, Smart Contract Developer</span>
              <span className="text-sm text-blue-400 group-hover:underline">View project →</span>
            </div>
          </TrackedLink>

          <TrackedLink
            href="/portfolio/ethglobal-bangkok"
            className="glass p-6 block hover:border-white/30 transition-all hover:scale-105 group"
            event="card_click"
            props={{ card: "ethglobal_bangkok" }}
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-xl font-semibold group-hover:text-white transition-colors">
                ETHGlobal Bangkok
              </h3>
              <span className="text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded-full">
                $5,500 Prize
              </span>
            </div>
            <p className="text-white/70 mb-4 leading-relaxed">
              Cross-chain token migration tool using Chainlink CCIP, Scroll L1SLOAD, and Vlayer
              incentive mechanisms.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-white/50">48-hour hackathon</span>
              <span className="text-sm text-blue-400 group-hover:underline">View project →</span>
            </div>
          </TrackedLink>
        </div>

        <div className="text-center">
          <TrackedLink
            href="/portfolio"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors"
            event="cta_click"
            props={{ cta: "view_all_projects", location: "homepage" }}
          >
            View more projects <span>→</span>
          </TrackedLink>
        </div>
      </div>
    </section>
  );
}
