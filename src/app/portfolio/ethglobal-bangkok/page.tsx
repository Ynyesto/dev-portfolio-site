import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Study: ETHGlobal Bangkok — CCIP + L1SLOAD",
  description:
    "48-hour hackathon build using Chainlink CCIP and Scroll L1SLOAD. Three sponsor prizes, including Chainlink's best use of CCIP.",
};

export default function EthGlobalCaseStudy() {
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
          <h1 className="text-3xl font-semibold tracking-tight mb-6">
            ETHGlobal Bangkok — Migratoooor
          </h1>

          <p className="text-lg text-foreground/90 leading-relaxed mb-6 max-w-3xl">
            Hackathon submission: a migration tool for ERC-20 tokens from L1 to multi-chain L2s,
            using Scroll&apos;s L1SLOAD, Vlayer incentives, and Chainlink CCIP for cross-chain
            messaging.
          </p>

          <div className="grid sm:grid-cols-3 gap-6">
            <div>
              <h3 className="font-mono text-xs text-muted uppercase tracking-wider mb-2">Role</h3>
              <p>Smart Contract Developer &amp; Pitch Lead</p>
            </div>
            <div>
              <h3 className="font-mono text-xs text-muted uppercase tracking-wider mb-2">
                Duration
              </h3>
              <p>48-hour hackathon</p>
            </div>
            <div>
              <h3 className="font-mono text-xs text-muted uppercase tracking-wider mb-2">When</h3>
              <p>November 2024</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="panel p-6">
            <h2 className="text-xl font-semibold mb-4">Results</h2>
            <ul className="space-y-2 text-muted leading-relaxed list-disc pl-5 marker:text-white/30">
              <li>
                <strong className="text-foreground">Chainlink — Best use of CCIP</strong> ($4,000)
              </li>
              <li>
                <strong className="text-foreground">Scroll — Best use case of L1SLOAD</strong> (2nd
                place, $1,500)
              </li>
              <li>
                <strong className="text-foreground">Blockscout — Pool prize</strong>
              </li>
            </ul>
          </div>

          <div className="panel p-6">
            <h2 className="text-xl font-semibold mb-4">Technical implementation</h2>
            <ul className="space-y-2 text-muted leading-relaxed list-disc pl-5 marker:text-white/30">
              <li>Chainlink CCIP for cross-chain token transfers.</li>
              <li>Scroll L1SLOAD precompile for mainnet data access.</li>
              <li>Vlayer Time Travel for incentive mechanisms.</li>
              <li>Multichain token standard (CCT) implementation.</li>
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="panel p-6">
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <div className="space-y-3">
              <a
                href="https://github.com/GianfrancoBazzani/ETHGlobalBKK"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center border border-white/20 hover:border-white/40 hover:bg-white/5 rounded-md px-4 py-2 text-sm transition-colors"
              >
                View repository
              </a>
              <a
                href="https://ethglobal.com/showcase/migrator-ethbelgrade-7x4pc"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center border border-white/20 hover:border-white/40 hover:bg-white/5 rounded-md px-4 py-2 text-sm transition-colors"
              >
                Project submission
              </a>
            </div>
          </div>

          <div className="panel p-6">
            <h3 className="text-lg font-semibold mb-3">My contribution</h3>
            <p className="text-sm text-muted leading-relaxed">
              Sole contributor to the CCIP integration — the part that won Chainlink&apos;s prize —
              while teammates focused on Scroll/Vlayer features and the front-end.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
