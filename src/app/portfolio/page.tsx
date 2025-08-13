import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Portfolio | Smart Contract Work",
  description:
    "Selected case studies and projects: BitChill, ETHGlobal Bangkok, FilmChain Vesting.",
};

export default function PortfolioPage() {
  return (
    <section className="space-y-6">
      {/* Background logo collage */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <Image
          src="/rsk.svg"
          alt=""
          width={180}
          height={120}
          className="absolute top-40 right-60 opacity-[0.1] rotate-12"
        />
        <Image
          src="/ethglobal.svg"
          alt=""
          width={700}
          height={700}
          className="absolute top-100 left-50 opacity-[0.1] -rotate-6"
        />
      </div>
      <div className="page-header rounded-lg overflow-hidden relative">
        <div className="bg" />
        <div className="relative z-10 px-6 py-8">
          <h1 className="text-3xl font-bold mb-2">Portfolio</h1>
          <p className="text-white/70 text-sm max-w-2xl">
            Selected smart contract development work. These are the paid projects I&apos;ve worked
            on. More work in courses, hackathons, and personal projects is available on{" "}
            <a href="https://github.com/ynyesto" target="_blank" rel="noreferrer">
              GitHub
            </a>
            .
          </p>
        </div>
      </div>
      <h2 className="text-lg font-semibold">Freelance Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link href="/portfolio/bitchill" className="glass p-4 block hover:border-white/30 transition">
          <h2 className="text-lg font-semibold">BitChill (Rootstock grant)</h2>
          <p className="text-sm text-white/70">
            DCA protocol on Rootstock. Smart contracts integrating Money on Chain, Uniswap, Tropykus
            and Sovryn.
          </p>
        </Link>
        <Link href="/portfolio/filmchain-vesting" className="glass p-4 block hover:border-white/30 transition">
          <h2 className="text-lg font-semibold">FilmChain Vesting</h2>
          <p className="text-sm text-white/70">Token vesting with cliff and two schedules.</p>
        </Link>
      </div>
      <h2 className="text-lg font-semibold">Hackathon winners</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link href="/portfolio/ethglobal-bangkok" className="glass p-4 block hover:border-white/30 transition">
          <h2 className="text-lg font-semibold">ETHGlobal Bangkok</h2>
          <p className="text-sm text-white/70">Chainlink CCIP + Scroll L1SLOAD migration tool.</p>
        </Link>
        <Link href="/portfolio/vottun-dextools" className="glass p-4 block hover:border-white/30 transition">
          <h2 className="text-lg font-semibold">Vottun & DexTools</h2>
          <p className="text-sm text-white/70">BitChill MVP; first prize.</p>
        </Link>
        <Link href="/portfolio/block-and-change" className="glass p-4 block hover:border-white/30 transition">
          <h2 className="text-lg font-semibold">Block & Change</h2>
          <p className="text-sm text-white/70">Best social innovation.</p>
        </Link>
      </div>
      <p className="text-sm text-white/60">
        More work in courses, hackathons, and personal projects is available on{" "}
        <a href="https://github.com/ynyesto" target="_blank" rel="noreferrer">
          GitHub
        </a>
        .
      </p>
    </section>
  );
}
