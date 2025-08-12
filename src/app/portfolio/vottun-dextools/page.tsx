import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hackathon: Vottun & DexTools — BitChill MVP",
  description:
    "Winner — Rootstock-sponsored hackathon. Built automated, non-custodial DCA Bitcoin purchases (BitChill MVP).",
};

export default function VottunDexToolsPage() {
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
          <h1 className="text-3xl font-bold mb-6">Vottun & DexTools Hackathon</h1>

          <p className="text-lg text-white/90 leading-relaxed mb-6">
            Weekend hackathon sponsored by Rootstock. Our team shipped the BitChill MVP: a dApp for
            automated, non‑custodial DCA Bitcoin purchases.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-white/60 text-sm font-medium uppercase tracking-wide mb-2">
                Result
              </h3>
              <p className="text-white/90 flex items-center gap-2">🥇 First Prize Winner</p>
            </div>
            <div>
              <h3 className="text-white/60 text-sm font-medium uppercase tracking-wide mb-2">
                Duration
              </h3>
              <p className="text-white/90">Weekend hackathon (48 hours)</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="glass p-6 rounded-lg border-l-4 border-yellow-500/30">
            <h2 className="text-xl font-semibold mb-4">Impact & Legacy</h2>
            <ul className="space-y-2 text-white/80">
              <li>• Foundation for subsequent Rootstock grant application</li>
              <li>• Proved market demand for DCA-as-a-service on Bitcoin L2</li>
              <li>• Validated technical approach for automated yield-bearing positions</li>
            </ul>
          </div>

          <div className="glass p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">MVP Features</h2>
            <ul className="space-y-2 text-white/80">
              <li>• Automated DCA scheduling for Bitcoin purchases</li>
              <li>• Non-custodial architecture with user-controlled funds</li>
              <li>• Integration with Rootstock ecosystem protocols</li>
              <li>• Simple web interface for configuration</li>
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="glass p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <a
              href="https://github.com/ynyesto/VottunDextoolsHackathon"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 rounded px-4 py-2 text-sm transition-colors w-full justify-center"
            >
              View Repository
            </a>
          </div>

          <div className="glass p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3">Evolution</h3>
            <p className="text-sm text-white/70">
              This MVP evolved into the full BitChill protocol, which later received official
              Rootstock grant funding.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
