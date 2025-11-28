// import Link from "next/link";
import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import Script from "next/script";
import Image from "next/image";
import TrackedLink from "@/components/TrackedLink";
import BookCallButton from "@/components/BookCallButton";

export const metadata: Metadata = {
  title: SITE.name,
  description: SITE.description,
  alternates: { canonical: "/" },
  openGraph: { images: [{ url: "/opengraph-image" }] },
  twitter: { images: ["/opengraph-image"] },
};

export default function Home() {
  return (
    <section className="space-y-10 relative overflow-visible">
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
        {/* Image first on mobile, second on desktop */}
        <div className="w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl order-1 lg:order-2">
          <Image
            src="/ynyesto.jpg"
            alt="Antonio Rodríguez‑Ynyesto"
            width={224}
            height={224}
            className="object-cover w-full h-full"
            priority
            sizes="(max-width: 640px) 160px, (max-width: 1024px) 192px, 224px"
          />
        </div>
        {/* Text content second on mobile, first on desktop */}
        <div className="flex-1 space-y-6 text-center lg:text-left order-2 lg:order-1">
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
              <span className="gradient-text">Ynyesto</span>
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white/90">
              Smart Contract Engineer
            </h2>
          </div>
          <p className="text-lg sm:text-xl max-w-2xl text-white/80 leading-relaxed">
            I build Solidity smart-contract systems with a security-first mindset, and perform
            thorough testing. Book a call to discuss your project.
          </p>
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2 max-w-2xl">
            <BookCallButton size="lg" />
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
      </div>
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-2">
          <div className="glass p-6 flex hover:border-white/30 transition-all hover:scale-105 group relative overflow-hidden flex-col justify-between">
            {/* BitChill logo background */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-20 transition-all duration-300 pointer-events-none">
              <Image
                src="/bitchill.svg"
                alt=""
                width={300}
                height={100}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-semibold group-hover:text-white transition-colors">
                  BitChill
                </h3>
                <div className="flex flex-col gap-1">
                  <span className="text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded-full">
                    Live on Mainnet
                  </span>
                </div>
              </div>
              <p className="text-white/70 mb-4 leading-relaxed">
                Automated, non-custodial and yield-bearing bitcoin DCA dApp on Rootstock. Smart
                contract protocol integrating Money on Chain, Uniswap, Tropykus, and Sovryn.
              </p>
            </div>
            <div className="flex items-center justify-between relative z-10">
              <span className="text-sm text-white/50">Founder, SC Dev</span>
              <div className="flex gap-2">
                <a
                  href="https://bitchill.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-green-400 hover:underline"
                >
                  Try dApp →
                </a>
                <TrackedLink
                  href="/portfolio/bitchill"
                  className="text-sm text-blue-400 hover:underline"
                  event="card_click"
                  props={{ card: "bitchill" }}
                >
                  View project →
                </TrackedLink>
              </div>
            </div>
          </div>

          <TrackedLink
            href="/portfolio/ethglobal-bangkok"
            className="glass p-6 flex hover:border-white/30 transition-all hover:scale-105 group relative overflow-hidden flex-col justify-between"
            event="card_click"
            props={{ card: "ethglobal_bangkok" }}
          >
            {/* ETHGlobal logo background */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-20 transition-all duration-300 pointer-events-none">
              <Image
                src="/ethglobal-negative.svg"
                alt=""
                width={300}
                height={100}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-semibold group-hover:text-white transition-colors">
                  ETHGlobal Bangkok
                </h3>
                <span className="text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded-full">
                  3 sponsor prizes
                </span>
              </div>
              <p className="text-white/70 mb-4 leading-relaxed">
                L1 to multi-chain L2 token migration tool using Scroll L1SLOAD, Chainlink CCIP, and
                Vlayer incentive mechanisms.
              </p>
            </div>
            <div className="flex items-center justify-between relative z-10">
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
