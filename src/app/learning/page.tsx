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
        />
        <Image
          src="/uniswap.svg"
          alt=""
          width={340}
          height={340}
          className="absolute top-50 left-8 opacity-[0.1] -rotate-6"
        />
        <Image
          src="/chainlink.svg"
          alt=""
          width={170}
          height={120}
          className="absolute bottom-80 right-60 opacity-[0.1] rotate-6"
        />
        <Image
          src="/solidity.svg"
          alt=""
          width={150}
          height={150}
          className="absolute bottom-80 left-100 opacity-[0.2] -rotate-12"
        />
      </div>
      <div className="page-header rounded-lg overflow-hidden relative">
        <div className="bg" />
        <div className="relative z-10 px-6 py-8">
          <h1 className="text-3xl font-bold mb-2">Learning</h1>
          <p className="text-white/70 text-sm max-w-2xl">
            Continuous learning is essential in blockchain development. Here are courses, bootcamps,
            and training programs I&apos;ve completed and am currently pursuing to stay current with
            the evolving ecosystem.
          </p>
        </div>
      </div>

      <div className="space-y-8 relative">
        <div className="relative z-10">
          <h2 className="text-lg font-semibold mb-4">Security & Auditing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <a
              href="https://github.com/ynyesto"
              className="glass p-4 block hover:border-white/30 transition"
              target="_blank"
              rel="noreferrer"
            >
              <div className="font-medium"><a href="https://updraft.cyfrin.io/courses/security" target="_blank" rel="noreferrer">Cyfrin Updraft Security Course</a></div>
              <div className="text-white/60 text-xs mt-1">Manual review, static analysis, fuzz testing</div>
              <div className="text-white/70 text-xs mt-1">
                6 training audits: <a
                  href="https://github.com/ynyesto/PasswordStoreAudit"
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  PasswordStore
                </a>, 
                <a
                  href="https://github.com/ynyesto/PuppyRaffleAudit"
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  PuppyRaffle
                </a>, 
                <a
                  href="https://github.com/ynyesto/TSwapAudit"
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  TSwap
                </a>, 
                <a
                  href="https://github.com/ynyesto/ThunderLoanAudit"
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  ThunderLoan
                </a>, 
                <a
                  href="https://github.com/ynyesto/BossBridgeAudit"
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  BossBridge
                </a>, 
                <a
                  href="https://github.com/ynyesto/VaultGuardiansAudit"
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  VaultGuardians
                </a>
              </div>
            </a>
            <div className="glass p-4">
              <div className="font-medium"><a href="https://ethernaut.openzeppelin.com/" target="_blank" rel="noreferrer">Ethernaut Challenges</a></div>
              <div className="text-white/60 text-xs mt-1">OpenZeppelin&apos;s smart contract wargame (completed)</div>
              <div className="text-white/70 text-xs mt-1">Writeups for the last 2 levels linked in Writing page</div>
            </div>
            <div className="glass p-4">
              <div className="font-medium"><a href="https://blog.theredguild.org/the-rekt-games-ctf-scavenger-hunt-at-devcon-sea/" target="_blank" rel="noreferrer">The Rekt Games</a></div>
              <div className="text-white/60 text-xs mt-1">Capture the flag game by <a href="https://theredguild.org/" target="_blank" rel="noreferrer">The Red Guild</a> at Devcon 7 SEA (2024)</div>
              <div className="text-white/70 text-xs mt-1">Writeup for all levels linked in Writing page</div>
            </div>
            <div className="glass p-4">
              <div className="font-medium"><a href="https://statemind.io/fellowship" target="_blank" rel="noreferrer">Statemind Fellowship</a></div>
              <div className="text-white/60 text-xs mt-1">Smart contract security fellowship by Statemind. Cohort 6 (Dec 2024)</div>
              <div className="text-white/70 text-xs mt-1">Extensive learning materials and Ethernaut-inspired CTF challenges.</div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4">DeFi Protocols</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <a
              href="https://updraft.cyfrin.io/courses/aave-v3"
              className="glass p-4 block hover:border-white/30 transition"
              target="_blank"
              rel="noreferrer"
            >
              <div className="font-medium">Aave V3 Protocol Development</div>
              <div className="text-white/60 text-xs mt-1">Cyfrin Updraft • Lending protocol fundamentals</div>
            </a>
            <a
              href="https://atrium.academy/uniswap"
              className="glass p-4 block hover:border-white/30 transition"
              target="_blank"
              rel="noreferrer"
            >
              <div className="font-medium">Uniswap Hooks Incubator</div>
              <div className="text-white/60 text-xs mt-1">Uniswap V4 Hooks Incubator by Atrium Academy (Cohort 4, March 2025)</div>
              <div className="text-white/60 text-xs mt-1">5 workshop hooks + capstone project</div>
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4">Cross-chain & Infrastructure</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <a
              href="https://github.com/ynyesto/CCIP-Bootcamp"
              className="glass p-4 block hover:border-white/30 transition"
              target="_blank"
              rel="noreferrer"
            >
              <div className="font-medium">Chainlink CCIP Bootcamp</div>
              <div className="text-white/60 text-xs mt-1">Cross-chain interoperability protocol</div>
            </a>
            <a
              href="https://github.com/Ynyesto/Chainlink-RWA-Bootcamp"
              className="glass p-4 block hover:border-white/30 transition"
              target="_blank"
              rel="noreferrer"
            >
              <div className="font-medium">Chainlink RWA Bootcamp</div>
              <div className="text-white/60 text-xs mt-1">Real‑world asset tokenization</div>
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4">Foundations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <a
              href="https://updraft.cyfrin.io/courses/advanced-foundry"
              className="glass p-4 block hover:border-white/30 transition"
              target="_blank"
              rel="noreferrer"
            >
              <div className="font-medium">Cyfrin Updraft Foundry Series</div>
              <div className="text-white/60 text-xs mt-1">Comprehensive Solidity and Foundry training</div>
              <div className="text-white/70 text-xs mt-1">Fund Me • Lottery • Stablecoin • DAOs</div>
            </a>
            <a
              href="https://www.alchemy.com/university/courses/ethereum"
              className="glass p-4 block hover:border-white/30 transition"
              target="_blank"
              rel="noreferrer"
            >
              <div className="font-medium">Alchemy University</div>
              <div className="text-white/60 text-xs mt-1">Ethereum Developer Bootcamp (final project: SummerPay)</div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
