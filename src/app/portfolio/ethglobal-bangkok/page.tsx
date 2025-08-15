import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Study: ETHGlobal Bangkok — CCIP + L1SLOAD",
  description:
    "Hackathon project leveraging Chainlink CCIP and Scroll L1SLOAD. Prize winner with smart contract role and demo integration.",
};

export default function EthGlobalCaseStudy() {
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
          <h1 className="text-3xl font-bold mb-6">ETHGlobal Bangkok — CCIP + L1SLOAD</h1>

          <p className="text-lg text-white/90 leading-relaxed mb-6">
            Hackathon submission implementing a migration tool for ERC‑20 to multichain tokens on
            L2s, using Scroll&apos;s L1SLOAD, Vlayer incentives, and Chainlink CCIP for cross‑chain
            messaging.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-white/60 text-sm font-medium uppercase tracking-wide mb-2">
                Role
              </h3>
              <p className="text-white/90">Smart Contract Developer & Pitch Lead</p>
            </div>
            <div>
              <h3 className="text-white/60 text-sm font-medium uppercase tracking-wide mb-2">
                Duration
              </h3>
              <p className="text-white/90">48-hour hackathon</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="glass p-6 rounded-lg border-l-4 border-green-500/30">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">🏆 Results</h2>
            <ul className="space-y-2 text-white/80">
              <li>
                • <strong>Chainlink Best use of CCIP</strong> — $4,000
              </li>
              <li>
                • <strong>Scroll Best Use Case of L1SLOAD</strong> — 2nd place, $1,500
              </li>
              <li>
                • <strong>Blockscout Pool Prize</strong>
              </li>
            </ul>
            <p className="text-sm text-green-400/80 mt-3">Total prize money: $5,500+</p>
          </div>

          <div className="glass p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Technical Implementation</h2>
            <ul className="space-y-2 text-white/80">
              <li>• Chainlink CCIP for cross-chain token transfers</li>
              <li>• Scroll L1SLOAD precompile for mainnet data access</li>
              <li>• Vlayer Time Travel for incentive mechanisms</li>
              <li>• Multichain token standard (CCT) implementation</li>
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="glass p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <div className="space-y-3">
              <a
                href="https://github.com/GianfrancoBazzani/ETHGlobalBKK"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 rounded px-4 py-2 text-sm transition-colors w-full justify-center"
              >
                View Repository
              </a>
              <a
                href="https://ethglobal.com/showcase/migrator-ethbelgrade-7x4pc"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 rounded px-4 py-2 text-sm transition-colors w-full justify-center"
              >
                Project Submission
              </a>
            </div>
          </div>

          <div className="glass p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3">Team Contribution</h3>
            <p className="text-sm text-white/70">
              Sole contributor to CCIP integration while teammates focused on Scroll/Vlayer features
              and frontend.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
