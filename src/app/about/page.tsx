import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "About | Antonio Rodríguez‑Ynyesto",
  description:
    "Blockchain developer (Umbrella Research) and co-founder/SC dev at BitChill. Security‑minded Solidity engineer available for part-time work.",
};

export default function AboutPage() {
  return (
    <section className="space-y-6">
      <div className="page-header rounded-lg overflow-hidden relative">
        <div className="bg" />
        <div className="relative z-10 px-6 py-8">
          <h1 className="text-3xl font-bold mb-2">About</h1>
          <p className="text-white/70 text-sm max-w-2xl">
            Blockchain developer and smart contract engineer based in Madrid
          </p>
        </div>
      </div>

      <div className="space-y-4 max-w-3xl">
        <p className="text-sm text-white/80">
          I&apos;m a Blockchain Developer at <strong>Umbrella Research</strong> and
          co‑founder/smart‑contract developer at <strong>BitChill</strong>. I hold a Master&apos;s
          degree in Industrial Technologies Engineering and additional training in Automation and
          Robotics from the Technical University of Madrid (UPM).
        </p>

        <p className="text-sm text-white/80">
          I&apos;ve been working in software since finishing college and started learning about
          blockchain in early 2022. Since then, I&apos;ve combined full-time work with continuous
          learning through courses, hackathon competitions, personal projects, and technical
          challenges. I&apos;m particularly focused on smart contract security, DeFi integrations,
          and protocol development.
        </p>

        <p className="text-sm text-white/80">
          My approach emphasizes security-first development with comprehensive testing using
          Foundry, static analysis tools like Slither, and both unit and fuzz testing. I believe in
          writing clean, well-documented code with thorough test coverage.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold">How I Work</h2>
        <div className="max-w-3xl space-y-3 text-sm text-white/80">
          <p>
            <strong>Development approach:</strong> Security-minded development with Foundry testing,
            gas optimization, and comprehensive documentation. I follow best practices for smart
            contract development including proper access controls, reentrancy protection, and input
            validation.
          </p>
          <p>
            <strong>Collaboration:</strong> I prefer clear communication and regular updates.
            I&apos;m comfortable working with teams across different time zones and using tools like
            GitHub, Discord, and Telegram for coordination.
          </p>
          <p>
            <strong>Specializations:</strong> ERC standards (20/721/1155/4626), DeFi protocols,
            Uniswap v4 hooks, Chainlink integrations (CCIP, VRF, Price Feeds), upgradeable
            contracts, and engineering code reviews.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Availability</h2>
        <p className="text-sm text-white/80 max-w-3xl">
          I&apos;m open to part-time engagements and collaborations that align with my interests,
          especially those involving smart contracts, decentralized protocols, or mission-driven
          blockchain projects. I typically work in European time zones but am flexible for the right
          projects.
        </p>
        <div className="flex gap-4 text-sm">
          <a className="underline" href={`mailto:${SITE.email}`}>
            Get in touch via email
          </a>
          <a className="underline" href={SITE.calendly} target="_blank" rel="noreferrer">
            Or book a call
          </a>
        </div>
      </div>
    </section>
  );
}
