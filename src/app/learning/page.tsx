import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Learning | Continuous Education",
  description:
    "Courses, bootcamps, and training programs in blockchain development, security, and DeFi protocols.",
};

export default function LearningPage() {
  return (
    <section className="space-y-6">
      {/* Background logo collage */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <Image
          src="/aave.svg"
          alt=""
          width={180}
          height={120}
          className="absolute top-40 right-20 opacity-[0.1] rotate-12"
          priority
        />
        <Image
          src="/uniswap.svg"
          alt=""
          width={340}
          height={340}
          className="absolute top-80 left-8 opacity-[0.1] -rotate-6"
          priority
        />
        <Image
          src="/chainlink.svg"
          alt=""
          width={170}
          height={120}
          className="absolute bottom-80 right-60 opacity-[0.1] rotate-6"
          priority
        />
        <Image
          src="/solidity.svg"
          alt=""
          width={150}
          height={150}
          className="absolute bottom-20 left-100 opacity-[0.2] -rotate-12"
          priority
        />
      </div>
      <div className="page-header rounded-lg overflow-hidden relative">
        <div className="bg" />
        <div className="relative z-10 py-8">
          <h1 className="text-3xl font-bold mb-2">Learning</h1>
          <p className="text-white/70 text-sm max-w-2xl">
            I find continuous learning to be essential to stay current with the evolving Web3
            ecosystem.
          </p>
        </div>
      </div>

      <div className="space-y-6 relative">
        <div className="relative z-10">
          <h2 className="text-lg font-semibold mb-4">Security & Auditing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass p-4">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-semibold">
                  <a
                    href="https://updraft.cyfrin.io/courses/security"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Cyfrin Updraft Security Course
                  </a>
                </h3>
              </div>
              <div className="text-white/60 text-xs mb-2">
                Manual review, static analysis, fuzz testing
              </div>
              <div className="text-sm text-white/70 space-y-1">
                <div className="flex flex-wrap items-center gap-1">
                  <span>5 training audits:</span>
                  <a
                    href="https://github.com/ynyesto/PasswordStoreAudit"
                    className="underline hover:text-white transition-colors"
                    target="_blank"
                    rel="noreferrer"
                  >
                    PasswordStore,
                  </a>
                  <a
                    href="https://github.com/ynyesto/PuppyRaffleAudit"
                    className="underline hover:text-white transition-colors"
                    target="_blank"
                    rel="noreferrer"
                  >
                    PuppyRaffle,
                  </a>
                  <a
                    href="https://github.com/ynyesto/TSwapAudit"
                    className="underline hover:text-white transition-colors"
                    target="_blank"
                    rel="noreferrer"
                  >
                    TSwap,
                  </a>
                  <a
                    href="https://github.com/ynyesto/ThunderLoanAudit"
                    className="underline hover:text-white transition-colors"
                    target="_blank"
                    rel="noreferrer"
                  >
                    ThunderLoan,
                  </a>
                  <a
                    href="https://github.com/ynyesto/BossBridgeAudit"
                    className="underline hover:text-white transition-colors"
                    target="_blank"
                    rel="noreferrer"
                  >
                    BossBridge
                  </a>
                </div>
              </div>
              <div className="text-sm text-white/70">
                1 final solo audit:{" "}
                <a
                  href="https://github.com/Ynyesto/VaultGuardiansAudit/blob/main/audit-ynyesto/report.pdf"
                  className="underline hover:text-white transition-colors"
                  target="_blank"
                  rel="noreferrer"
                >
                  VaultGuardians
                </a>
              </div>
            </div>
            <div className="glass p-4">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-semibold">
                  <a href="https://statemind.io/fellowship" target="_blank" rel="noreferrer">
                    Statemind Fellowship
                  </a>
                </h3>
              </div>
              <div className="text-white/60 text-xs mb-2">
                Smart contract security fellowship by Statemind. Cohort 6 (Dec 2024)
              </div>
              <div className="text-sm text-white/70">
                Extensive learning materials and Ethernaut-inspired CTF challenges.
              </div>
            </div>
            <div className="glass p-4">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-semibold">
                  <a href="https://ethernaut.openzeppelin.com/" target="_blank" rel="noreferrer">
                    Ethernaut Challenges
                  </a>
                </h3>
              </div>
              <div className="text-white/60 text-xs mb-2">
                OpenZeppelin&apos;s smart contract wargame (completed)
              </div>
              <div className="text-sm text-white/70">
                Writeups for the last 2 levels linked in Writing page
              </div>
            </div>
            <div className="glass p-4">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-semibold">
                  <a
                    href="https://blog.theredguild.org/the-rekt-games-ctf-scavenger-hunt-at-devcon-sea/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    The Rekt Games
                  </a>
                </h3>
              </div>
              <div className="text-white/60 text-xs mb-2">
                Capture the flag game by{" "}
                <a href="https://theredguild.org/" target="_blank" rel="noreferrer">
                  The Red Guild
                </a>{" "}
                at Devcon 7 SEA (2024)
              </div>
              <div className="text-sm text-white/70">
                Writeup for all levels linked in Writing page
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4">DeFi Protocols</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href="https://updraft.cyfrin.io/courses/aave-v3"
              className="glass p-4 block hover:border-white/30 transition"
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-semibold">Aave V3 Protocol Development</h3>
              </div>
              <div className="text-white/60 text-xs mb-2">
                Cyfrin Updraft • Lending protocol fundamentals
              </div>
            </a>
            <a
              href="https://atrium.academy/uniswap"
              className="glass p-4 block hover:border-white/30 transition"
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-semibold">Uniswap Hooks Incubator</h3>
              </div>
              <div className="text-white/60 text-xs mb-2">
                Uniswap V4 Hooks Incubator by Atrium Academy (Cohort 4, March 2025)
              </div>
              <div className="text-sm text-white/70">5 workshop hooks + capstone project</div>
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4">Cross-chain & Infrastructure</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href="https://github.com/ynyesto/CCIP-Bootcamp"
              className="glass p-4 block hover:border-white/30 transition"
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-semibold">Chainlink CCIP Bootcamp</h3>
              </div>
              <div className="text-white/60 text-xs mb-2">
                Cross-chain interoperability protocol
              </div>
            </a>
            <a
              href="https://github.com/Ynyesto/Chainlink-RWA-Bootcamp"
              className="glass p-4 block hover:border-white/30 transition"
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-semibold">Chainlink RWA Bootcamp</h3>
              </div>
              <div className="text-white/60 text-xs mb-2">Real‑world asset tokenization</div>
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4">Foundations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href="https://updraft.cyfrin.io/courses/advanced-foundry"
              className="glass p-4 block hover:border-white/30 transition"
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-semibold">Cyfrin Updraft Foundry Series</h3>
              </div>
              <div className="text-white/60 text-xs mb-2">
                Comprehensive Solidity and Foundry training
              </div>
              <div className="text-sm text-white/70">Fund Me • Lottery • Stablecoin • DAOs</div>
            </a>
            <a
              href="https://www.alchemy.com/university/courses/ethereum"
              className="glass p-4 block hover:border-white/30 transition"
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-semibold">Alchemy University</h3>
              </div>
              <div className="text-white/60 text-xs mb-2">
                Ethereum Developer Bootcamp (final project: SummerPay)
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
