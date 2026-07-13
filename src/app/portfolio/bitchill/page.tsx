import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";
import { ProductionWeeks } from "@/components/ProductionWeeks";

export const metadata: Metadata = {
  title: "Case Study: BitChill — bitcoin DCA dApp on Rootstock",
  description:
    "Founder & Tech Lead of an automated bitcoin DCA dApp running weekly purchases on Rootstock since September 2025.",
};

export default function BitChillCaseStudy() {
  return (
    <div className="space-y-10 pt-10 pb-8">
      <div className="space-y-6">
        <Link
          href="/#work"
          className="text-sm text-muted hover:text-foreground transition-colors inline-flex items-center gap-1"
        >
          ← Back to work
        </Link>

        <div className="panel p-6 sm:p-8">
          <a href="https://bitchill.app" target="_blank" rel="noopener noreferrer">
            <Image
              src="/bitchill.svg"
              alt="BitChill"
              width={250}
              height={70}
              className="h-16 w-auto mb-6"
              priority
            />
          </a>

          <p className="text-lg text-foreground/90 leading-relaxed mb-6 max-w-3xl">
            Automated, non-custodial, yield-bearing bitcoin DCA dApp on Rootstock mainnet. I led
            architecture and development end-to-end: smart contracts, testing, back-end
            infrastructure, automation, and front-end. Active development concluded in March 2026; I
            continue occasional production maintenance.
          </p>

          <div className="grid sm:grid-cols-3 gap-6">
            <div>
              <h3 className="font-mono text-xs text-muted uppercase tracking-wider mb-2">Role</h3>
              <p>Founder &amp; Tech Lead</p>
            </div>
            <div>
              <h3 className="font-mono text-xs text-muted uppercase tracking-wider mb-2">
                Development
              </h3>
              <p>February 2024 — March 2026</p>
            </div>
            <div>
              <h3 className="font-mono text-xs text-muted uppercase tracking-wider mb-2">
                Funding
              </h3>
              <p>Rootstock grant recipient</p>
            </div>
          </div>

          <div
            className="border-t border-white/10"
            style={{ marginTop: "2rem", paddingTop: "1.5rem" }}
          >
            <div
              className="flex flex-wrap items-baseline justify-between gap-2"
              style={{ marginBottom: "1.25rem" }}
            >
              <h2 className="text-sm font-semibold">Production history</h2>
            </div>
            <p className="font-mono text-sm text-foreground/90" style={{ marginBottom: "1.25rem" }}>
              Live since September 2025 · <ProductionWeeks />
            </p>
            <div
              className="grid"
              style={{
                columnGap: "1.5rem",
                rowGap: "1.25rem",
                gridTemplateColumns: "repeat(auto-fit, minmax(8rem, 1fr))",
              }}
            >
              <div>
                <p className="text-2xl font-semibold">905</p>
                <p className="font-mono text-xs text-muted mt-1">Automated DCA purchases</p>
              </div>
              <div>
                <p className="text-2xl font-semibold">83</p>
                <p className="font-mono text-xs text-muted mt-1">Batched on-chain transactions</p>
              </div>
            </div>
            <p className="font-mono text-xs text-muted">As of July 2026</p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="panel p-6">
            <h2 className="text-xl font-semibold mb-4">Smart contract architecture</h2>
            <ul className="space-y-2 text-muted leading-relaxed list-disc pl-5 marker:text-white/30">
              <li>One core contract as the main entry point.</li>
              <li>
                One handler per stablecoin–lending protocol combination, so new assets and protocols
                can be added without touching the core.
              </li>
              <li>
                The original implementation supported DOC and USDRIF, with yield integrations for
                Tropykus and Sovryn and purchase paths through Money on Chain or Uniswap V3.
              </li>
              <li>
                After Tropykus wound down, the live configuration was reduced to DOC with Sovryn;
                rBTC purchases use Money on Chain redemption.
              </li>
            </ul>
          </div>

          <div className="panel p-6">
            <h2 className="text-xl font-semibold mb-4">Back-end &amp; operations</h2>
            <ul className="space-y-2 text-muted leading-relaxed list-disc pl-5 marker:text-white/30">
              <li>Postgres database and REST API.</li>
              <li>Monitoring systems and automation for periodic purchases.</li>
              <li>Safe admin multisig setup and protocol documentation.</li>
              <li>
                Live on mainnet since November 2024, open to the public since September 2025 —
                executing users&apos; weekly DCA purchases fully automated.
              </li>
            </ul>
          </div>

          <div className="panel p-6">
            <h2 className="text-xl font-semibold mb-4">Testing &amp; security</h2>
            <ul className="space-y-2 text-muted leading-relaxed list-disc pl-5 marker:text-white/30">
              <li>Comprehensive unit and integration tests with Foundry.</li>
              <li>Invariant testing for core protocol mechanics.</li>
              <li>Gas-optimized.</li>
              <li>
                Audited by{" "}
                <a
                  href="https://github.com/IvanFitro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent"
                >
                  Ivan Fitro
                </a>
                .
              </li>
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="panel p-6">
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <div className="space-y-3">
              <a
                href="https://bitchill.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center border border-white/20 hover:border-white/40 hover:bg-white/5 rounded-md px-4 py-2 text-sm transition-colors"
              >
                Try the dApp
              </a>
              <a
                href="https://github.com/BitChillRSK/bitchill-contracts"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center border border-white/20 hover:border-white/40 hover:bg-white/5 rounded-md px-4 py-2 text-sm transition-colors"
              >
                View repository
              </a>
            </div>
          </div>

          <div className="panel p-6">
            <h3 className="text-lg font-semibold mb-3">Impact</h3>
            <p className="text-sm text-muted leading-relaxed">
              First DCA protocol on Rootstock, enabling automated bitcoin accumulation with yield
              generation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
