import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Study: ETHGlobal Lisbon — Orloj Finance Agents",
  description:
    "Keep Building on 0G sponsor-prize hackathon work on Orloj Finance Agents: Uniswap V3 LP management and The Graph evidence pipelines exposed to AI agents through MCPs.",
};

const linkClass =
  "text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent";

export default function EthGlobalLisbonCaseStudy() {
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
            ETHGlobal Lisbon — Orloj Finance Agents
          </h1>

          <p className="text-lg text-foreground/90 leading-relaxed mb-6 max-w-3xl">
            Hackathon continuation of Orloj Finance Agents, an ETHPrague project that exposes
            on-chain capabilities to AI agents as MCP servers. I built the Uniswap and The Graph
            integrations for a specialized agent that can inspect and manage Sepolia Uniswap V3
            liquidity positions using live subgraph evidence.
          </p>

          <div className="grid sm:grid-cols-3 gap-6">
            <div>
              <h3 className="font-mono text-xs text-muted uppercase tracking-wider mb-2">Role</h3>
              <p>Uniswap &amp; The Graph integrations</p>
            </div>
            <div>
              <h3 className="font-mono text-xs text-muted uppercase tracking-wider mb-2">Prize</h3>
              <p>Keep Building on 0G</p>
            </div>
            <div>
              <h3 className="font-mono text-xs text-muted uppercase tracking-wider mb-2">When</h3>
              <p>July 2026</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="panel p-6">
            <h2 className="text-xl font-semibold mb-4">What I built</h2>
            <ul className="space-y-2 text-muted leading-relaxed list-disc pl-5 marker:text-white/30">
              <li>
                Extended Orloj Finance Agents&apos; Uniswap MCP with Sepolia Uniswap V3
                liquidity-position tooling: position reads, position creation, liquidity decreases,
                fee collection, pool discovery, and owned-position listing.
              </li>
              <li>
                Built a Graph-powered LP agent that queries the Uniswap V3 Sepolia subgraph, turns
                pool activity, fee, volume, liquidity, and range data into deterministic features,
                and asks for strictly cited HOLD / REDUCE_LIQUIDITY / REBALANCE decisions.
              </li>
              <li>
                Exposed the LP agent back into Orloj Finance Agents chat through an internal MCP, so
                the conversational supervisor can delegate one observe or guarded management cycle
                to the specialist.
              </li>
            </ul>
          </div>

          <div className="panel p-6">
            <h2 className="text-xl font-semibold mb-4">Why it mattered</h2>
            <p className="text-muted leading-relaxed mb-4">
              Generic chat agents should not invent pool addresses, tick ranges, NFT IDs, chain IDs,
              or transaction arguments. The useful part of this work was separating conversation
              from execution: chat can ask for LP management, while deterministic code controls
              discovery, evidence collection, planning, recovery, and whether writes are enabled.
            </p>
            <ul className="space-y-2 text-muted leading-relaxed list-disc pl-5 marker:text-white/30">
              <li>
                The Graph integration supplies live market evidence instead of prompt guesses.
              </li>
              <li>
                Uniswap actions are routed through typed MCP tools owned by the authenticated Orloj
                agent wallet.
              </li>
              <li>
                Execution is server-gated; observe mode can recommend a plan without broadcasting
                transactions.
              </li>
            </ul>
          </div>

          <div className="panel p-6">
            <h2 className="text-xl font-semibold mb-4">Result</h2>
            <p className="text-muted leading-relaxed">
              Orloj Finance Agents won the Keep Building on 0G sponsor prize at ETHGlobal Lisbon. We
              did not win the Uniswap or The Graph sponsor prizes, but those integrations were
              central to the product narrative: an agent could gather live DeFi context, reason over
              an LP position, and map that decision to constrained on-chain actions.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="panel p-6">
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <div className="space-y-3">
              <a
                href="https://app.orloj.xyz/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center border border-white/20 hover:border-white/40 hover:bg-white/5 rounded-md px-4 py-2 text-sm transition-colors"
              >
                Open app
              </a>
              <a
                href="https://ethglobal.com/showcase/orloj-finance-agents-jejoc"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center border border-white/20 hover:border-white/40 hover:bg-white/5 rounded-md px-4 py-2 text-sm transition-colors"
              >
                Project showcase
              </a>
              <a
                href="https://github.com/GianfrancoBazzani/orloj-registry"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center border border-white/20 hover:border-white/40 hover:bg-white/5 rounded-md px-4 py-2 text-sm transition-colors"
              >
                View repository
              </a>
            </div>
          </div>

          <div className="panel p-6">
            <h3 className="text-lg font-semibold mb-3">Evidence</h3>
            <ul className="space-y-3 text-sm text-muted leading-relaxed">
              <li>
                <a
                  href="https://github.com/GianfrancoBazzani/orloj-registry/pull/28"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  PR #28
                </a>{" "}
                added Sepolia Uniswap V3 liquidity management tools.
              </li>
              <li>
                <a
                  href="https://github.com/GianfrancoBazzani/orloj-registry/pull/29"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  PR #29
                </a>{" "}
                added the Graph-powered autonomous LP manager.
              </li>
              <li>
                <a
                  href="https://github.com/GianfrancoBazzani/orloj-registry/pull/31"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  PR #31
                </a>{" "}
                hardened ergonomic LP position creation.
              </li>
              <li>
                <a
                  href="https://github.com/GianfrancoBazzani/orloj-registry/pull/32"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  PR #32
                </a>{" "}
                exposed the Graph LP Manager in chat.
              </li>
            </ul>
          </div>

          <div className="panel p-6">
            <h3 className="text-lg font-semibold mb-3">My contribution</h3>
            <p className="text-sm text-muted leading-relaxed">
              I worked on the LP-management surface rather than the original ETHPrague foundation:
              Uniswap tools for the agent to manage liquidity, The Graph queries and feature
              extraction for decision evidence, and the MCP bridge that made the specialist usable
              from chat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
