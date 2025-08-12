import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Case Study: BitChill — Rootstock DCA Protocol",
  description:
    "Smart contract developer role. Automated, non-custodial, yield-bearing DCA protocol on Rootstock mainnet.",
};

export default function BitChillCaseStudy() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <Link
          href="/portfolio"
          className="text-sm text-white/60 hover:text-white underline inline-flex items-center gap-1"
        >
          ← Back to portfolio
        </Link>

        <div className="glass p-8 rounded-lg">
          <div className="flex items-center gap-4 mb-6">
            <h1 className="text-3xl font-bold m-0">BitChill</h1>
            <div className="flex items-center gap-2">
              <Image src="/rsk.svg" alt="RSK" width={28} height={28} className="opacity-60" />
            </div>
          </div>

          <p className="text-lg text-white/90 leading-relaxed mb-6">
            Automated, non‑custodial, yield‑bearing DCA protocol on Rootstock mainnet. Smart
            contract development integrating Money on Chain, Uniswap, Tropykus, and Sovryn.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-white/60 text-sm font-medium uppercase tracking-wide mb-2">
                Role
              </h3>
              <p className="text-white/90">Smart Contract Developer & Co-Founder</p>
            </div>
            <div>
              <h3 className="text-white/60 text-sm font-medium uppercase tracking-wide mb-2">
                Funding
              </h3>
              <p className="text-white/90">Rootstock Grant Recipient</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="glass p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Architecture</h2>
            <ul className="space-y-2 text-white/80">
              <li>• ERC-4626 vault pattern for yield-bearing positions</li>
              <li>• Integration with Tropykus lending protocol</li>
              <li>• Automated swaps via Sovryn DEX</li>
              <li>• Dollar-cost averaging scheduler with configurable intervals</li>
            </ul>
          </div>

          <div className="glass p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Testing & Security</h2>
            <ul className="space-y-2 text-white/80">
              <li>• Comprehensive unit tests with Foundry</li>
              <li>• Invariant testing for core protocol mechanics</li>
              <li>• Gas optimization reports</li>
              <li>• Slither static analysis integration</li>
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="glass p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <a
              href="https://github.com/BitChillRSK/bitchill-contracts"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 rounded px-4 py-2 text-sm transition-colors w-full justify-center"
            >
              View Repository
            </a>
          </div>

          <div className="glass p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3">Impact</h3>
            <p className="text-sm text-white/70">
              First DCA protocol on Rootstock, enabling automated Bitcoin accumulation with yield
              generation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
