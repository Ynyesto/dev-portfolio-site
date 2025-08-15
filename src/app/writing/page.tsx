import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Writing | Articles and Research",
  description:
    "Technical articles, CTF writeups, and research contributions on blockchain security and protocols.",
};

export default function WritingPage() {
  return (
    <section className="space-y-6">
      <div className="page-header rounded-lg overflow-hidden relative">
        <div className="bg" />
        <div className="relative z-10 py-8">
          <h1 className="text-3xl font-bold mb-2">Writing</h1>
          <p className="text-white/70 text-sm max-w-2xl">
            Technical articles, security analyses, and research contributions.
          </p>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <h2 className="text-lg font-semibold mb-4">Security Analysis & CTFs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href="https://medium.com/@ynyesto/ethernaut-32-impersonator-825c0ea9d76d"
              className="glass p-4 block hover:border-white/30 transition relative overflow-hidden group"
              target="_blank"
              rel="noreferrer"
            >
              {/* OpenZeppelin logo background */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-20 transition-all duration-300 pointer-events-none">
                <Image
                  src="/OZ-Logo-WhiteBG.svg"
                  alt=""
                  width={300}
                  height={100}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold">Ethernaut Level 32: Impersonator</h3>
                </div>
                <div className="text-white/60 text-xs mb-2">Medium • December 2024</div>
                <div className="text-sm text-white/70">
                  Writeup for one of the latest Ethernaut challenges involving smart contract
                  security patterns.
                </div>
              </div>
            </a>
            <a
              href="https://medium.com/@ynyesto/ethernaut-33-magical-animal-carousel-3aff78fe67be"
              className="glass p-4 block hover:border-white/30 transition relative overflow-hidden group"
              target="_blank"
              rel="noreferrer"
            >
              {/* OpenZeppelin logo background */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-20 transition-all duration-300 pointer-events-none">
                <Image
                  src="/OZ-Logo-WhiteBG.svg"
                  alt=""
                  width={300}
                  height={100}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold">Ethernaut Level 33: Magical Animal Carousel</h3>
                </div>
                <div className="text-white/60 text-xs mb-2">Medium • December 2024</div>
                <div className="text-sm text-white/70">
                  Analysis of advanced smart contract vulnerabilities and exploitation techniques.
                </div>
              </div>
            </a>
            <a
              href="https://medium.com/@ynyesto/how-i-solved-the-rekt-games-ctf-by-the-red-guild-at-devcon-7-sea-227226d8106c"
              className="glass p-4 block hover:border-white/30 transition relative overflow-hidden group"
              target="_blank"
              rel="noreferrer"
            >
              {/* TRG logo background */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-20 transition-all duration-300 pointer-events-none">
                <Image
                  src="/trg-logo.svg"
                  alt=""
                  width={300}
                  height={100}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold">How I Solved The Rekt Games CTF</h3>
                </div>
                <div className="text-white/60 text-xs mb-2">Medium • December 2024</div>
                <div className="text-sm text-white/70">
                  Comprehensive writeup of The Red Guild&apos;s CTF challenges at Devcon 7 Southeast
                  Asia.
                </div>
              </div>
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4">Protocol Research</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href="https://hackmd.io/@Ynyesto/BkwKsCtJ0"
              className="glass p-4 block hover:border-white/30 transition"
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-semibold">EPF Wiki: Proposer-Builder Separation</h3>
              </div>
              <div className="text-white/60 text-xs mb-2">HackMD • Early 2024</div>
              <div className="text-sm text-white/70">
                Wiki contribution on PBS for the Ethereum Protocol Fellowship Study Group.
              </div>
            </a>
            <a
              href="https://www.linkedin.com/feed/update/urn:li:activity:7171854584959623168/"
              className="glass p-4 block hover:border-white/30 transition"
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-semibold">Quantitative Research Directions for Staking Providers</h3>
              </div>
              <div className="text-white/60 text-xs mb-2">LinkedIn • 2024</div>
              <div className="text-sm text-white/70">
                Research piece on staking economics and provider optimization strategies.
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
