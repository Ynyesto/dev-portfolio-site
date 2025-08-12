import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Study: FilmChain Vesting",
  description:
    "Token vesting contract with a one-year cliff and two schedules for team and investors.",
};

export default function FilmChainVestingContract() {
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
          <h1 className="text-3xl font-bold mb-6">FilmChain — Vesting Contracts</h1>

          <p className="text-lg text-white/90 leading-relaxed mb-6">
            Delivered a vesting smart contract suite implementing a one‑year cliff and two vesting
            schedules for early investors and team members.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-white/60 text-sm font-medium uppercase tracking-wide mb-2">
                Role
              </h3>
              <p className="text-white/90">Freelance Smart Contract Developer</p>
            </div>
            <div>
              <h3 className="text-white/60 text-sm font-medium uppercase tracking-wide mb-2">
                Project Type
              </h3>
              <p className="text-white/90">Client Contract Work</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="glass p-6 rounded-lg border-l-4 border-blue-500/30">
            <h2 className="text-xl font-semibold mb-4">Technical Implementation</h2>
            <ul className="space-y-2 text-white/80">
              <li>• Clear separation of schedules for different stakeholders</li>
              <li>• Secure claim function with comprehensive checks and guards</li>
              <li>• Flexible parameterization for allocations and timelines</li>
              <li>• Gas-optimized token distribution mechanism</li>
            </ul>
          </div>

          <div className="glass p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Project Context</h2>
            <p className="text-white/80">
              After successfully verifying the FILM token contract, I was hired by FilmChain to
              develop a secure vesting solution for their early investors and team. The contract
              needed to handle different vesting schedules while maintaining security and gas
              efficiency.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="glass p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <a
              href="https://github.com/ynyesto/FilmChainVesting"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 rounded px-4 py-2 text-sm transition-colors w-full justify-center"
            >
              View Repository
            </a>
          </div>

          <div className="glass p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3">Outcome</h3>
            <p className="text-sm text-white/70">
              Delivered a secure, well-tested vesting solution that successfully managed token
              distribution according to the client&apos;s requirements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
