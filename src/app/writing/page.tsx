import type { Metadata } from "next";

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
        <div className="relative z-10 px-6 py-8">
          <h1 className="text-3xl font-bold mb-2">Writing</h1>
          <p className="text-white/70 text-sm max-w-2xl">
            Technical articles, security analyses, and research contributions
          </p>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <h2 className="text-lg font-semibold mb-3">Security Analysis & CTFs</h2>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href="https://medium.com/@ynyesto/ethernaut-32-impersonator-825c0ea9d76d"
                className="block hover:bg-white/5 p-3 rounded border border-white/10"
                target="_blank"
                rel="noreferrer"
              >
                <div className="font-medium">Ethernaut Level 32: Impersonator</div>
                <div className="text-white/60 text-xs mt-1">Medium • December 2024</div>
                <div className="text-white/70 text-xs mt-1">
                  Writeup for one of the latest Ethernaut challenges involving smart contract
                  security patterns.
                </div>
              </a>
            </li>
            <li>
              <a
                href="https://medium.com/@ynyesto/ethernaut-33-magical-animal-carousel-3aff78fe67be"
                className="block hover:bg-white/5 p-3 rounded border border-white/10"
                target="_blank"
                rel="noreferrer"
              >
                <div className="font-medium">Ethernaut Level 33: Magical Animal Carousel</div>
                <div className="text-white/60 text-xs mt-1">Medium • December 2024</div>
                <div className="text-white/70 text-xs mt-1">
                  Analysis of advanced smart contract vulnerabilities and exploitation techniques.
                </div>
              </a>
            </li>
            <li>
              <a
                href="https://medium.com/@ynyesto/how-i-solved-the-rekt-games-ctf-by-the-red-guild-at-devcon-7-sea-227226d8106c"
                className="block hover:bg-white/5 p-3 rounded border border-white/10"
                target="_blank"
                rel="noreferrer"
              >
                <div className="font-medium">How I Solved The Rekt Games CTF</div>
                <div className="text-white/60 text-xs mt-1">Medium • December 2024</div>
                <div className="text-white/70 text-xs mt-1">
                  Comprehensive writeup of The Red Guild&apos;s CTF challenges at Devcon 7 Southeast
                  Asia.
                </div>
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-3">Protocol Research</h2>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href="https://hackmd.io/@Ynyesto/BkwKsCtJ0"
                className="block hover:bg-white/5 p-3 rounded border border-white/10"
                target="_blank"
                rel="noreferrer"
              >
                <div className="font-medium">
                  Ethereum Protocol Fellowship: Proposer-Builder Separation
                </div>
                <div className="text-white/60 text-xs mt-1">HackMD • Early 2024</div>
                <div className="text-white/70 text-xs mt-1">
                  Wiki contribution on PBS for the Ethereum Protocol Fellowship Study Group.
                </div>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/feed/update/urn:li:activity:7171854584959623168/"
                className="block hover:bg-white/5 p-3 rounded border border-white/10"
                target="_blank"
                rel="noreferrer"
              >
                <div className="font-medium">
                  Quantitative Research Directions for Staking Providers
                </div>
                <div className="text-white/60 text-xs mt-1">LinkedIn • 2024</div>
                <div className="text-white/70 text-xs mt-1">
                  Research piece on staking economics and provider optimization strategies.
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
