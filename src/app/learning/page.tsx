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
          className="absolute top-40 right-20 opacity-[0.08] rotate-12"
        />
        <Image
          src="/uniswap.svg"
          alt=""
          width={340}
          height={340}
          className="absolute top-50 left-8 opacity-[0.08] -rotate-6"
        />
        <Image
          src="/chainlink.svg"
          alt=""
          width={170}
          height={120}
          className="absolute bottom-80 right-60 opacity-[0.08] rotate-6"
        />
        <Image
          src="/solidity.svg"
          alt=""
          width={150}
          height={150}
          className="absolute bottom-80 left-100 opacity-[0.18] -rotate-12"
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
          <h2 className="text-lg font-semibold mb-3">Security & Auditing</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <strong>Cyfrin Updraft Security Course</strong> — Manual review, static analysis, fuzz
              testing, reporting
              <div className="text-white/60 text-xs mt-1">
                6 training audits:{" "}
                <a
                  href="https://github.com/ynyesto/PasswordStoreAudit"
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  PasswordStore
                </a>
                ,
                <a
                  href="https://github.com/ynyesto/PuppyRaffleAudit"
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  PuppyRaffle
                </a>
                ,
                <a
                  href="https://github.com/ynyesto/TSwapAudit"
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  TSwap
                </a>
                ,
                <a
                  href="https://github.com/ynyesto/ThunderLoanAudit"
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  ThunderLoan
                </a>
                ,
                <a
                  href="https://github.com/ynyesto/BossBridgeAudit"
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  BossBridge
                </a>
                ,
                <a
                  href="https://github.com/ynyesto/VaultGuardiansAudit"
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  VaultGuardians
                </a>
              </div>
            </li>
            <li>
              <strong>Ethernaut Challenges</strong> — OpenZeppelin&apos;s smart contract wargame
              (completed all levels)
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-3">DeFi Protocols</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <strong>Aave V3 Protocol Development</strong> — Cyfrin Updraft course on lending
              protocol fundamentals
              <div className="text-white/60 text-xs mt-1">
                <a
                  href="https://github.com/Ynyesto/CyfrinUpdraftAaveV3"
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Course exercises repo
                </a>
              </div>
            </li>
            <li>
              <strong>Uniswap Hooks Incubator (Cohort 4)</strong> — Advanced Uniswap v4 hook
              development
              <div className="text-white/60 text-xs mt-1">
                5 workshop hooks +{" "}
                <a
                  href="https://github.com/Ynyesto/UHI4-capstone-commision-hook"
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  capstone project
                </a>
              </div>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-3">Cross-chain & Infrastructure</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <strong>Chainlink CCIP Bootcamp</strong> — Cross-chain interoperability protocol
              <div className="text-white/60 text-xs mt-1">
                <a
                  href="https://github.com/ynyesto/CCIP-Bootcamp"
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Bootcamp repo
                </a>
              </div>
            </li>
            <li>
              <strong>Chainlink RWA Bootcamp</strong> — Real-world asset tokenization
              <div className="text-white/60 text-xs mt-1">
                <a
                  href="https://github.com/Ynyesto/Chainlink-RWA-Bootcamp"
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Bootcamp repo
                </a>
              </div>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-3">Foundations</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <strong>Cyfrin Updraft Foundry Series</strong> — Comprehensive Solidity and Foundry
              training
              <div className="text-white/60 text-xs mt-1">
                <a
                  href="https://github.com/ynyesto/SolidityFoundryCourse-Lesson7"
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Fund Me
                </a>
                ,
                <a
                  href="https://github.com/ynyesto/SolidityFoundryCourse-Lesson9"
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  Lottery
                </a>
                ,
                <a
                  href="https://github.com/ynyesto/SolidityFoundryCourse-Lesson12"
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  Stablecoin
                </a>
                ,
                <a
                  href="https://github.com/ynyesto/SolidityFoundryCourse-Lesson14"
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  DAOs
                </a>
              </div>
            </li>
            <li>
              <strong>Alchemy University</strong> — Ethereum Developer Bootcamp and Road to Web3
              <div className="text-white/60 text-xs mt-1">
                <a
                  href="https://github.com/ynyesto/AUEthDevBootcamp"
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Bootcamp repo
                </a>{" "}
                (final project: SummerPay)
              </div>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-3">Research & Protocol Studies</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <strong>Ethereum Protocol Fellowship Study Group</strong> — Core protocol research and
              development
              <div className="text-white/60 text-xs mt-1">
                <a
                  href="https://hackmd.io/@Ynyesto/BkwKsCtJ0"
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  PBS wiki contribution
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
