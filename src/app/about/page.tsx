import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import BookCallButton from "@/components/BookCallButton";

export const metadata: Metadata = {
  title: "About | Antonio Rodríguez‑Ynyesto",
  description:
    "Blockchain developer (Umbrella Research) and co-founder/SC dev at BitChill. Security‑minded Solidity engineer available for part-time work.",
};

export default function AboutPage() {
  return (
    <section className="space-y-8">
      <div className="page-header rounded-lg overflow-hidden relative">
        <div className="bg" />
        <div className="relative z-10 py-8">
          <h1 className="text-3xl font-bold mb-2">About</h1>
          <p className="text-white/70 text-sm max-w-2xl">
            Blockchain and smart contract engineer based in Madrid, Spain.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              className="rounded-full border border-solid border-white/20 transition-colors bg-white/10 hover:bg-white/15 text-sm h-9 px-4 flex items-center"
              href={`mailto:${SITE.email}`}
            >
              Email me
            </a>
            <BookCallButton size="sm" variant="glass" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-5 leading-relaxed text-sm text-white/80">
          <p>
            Hi! My name is Antonio Rodríguez‑Ynyesto, I&apos;m a Blockchain Developer at
            <strong>Umbrella Research</strong> and, on the side, I&apos;m building{" "}
            <a href="https://bitchill.app" target="_blank" rel="noreferrer">
              BitChill
            </a>{" "}
            as Founder and Tech Lead. My background is in Industrial Technologies Engineering and
            Robotics (both MSc degrees from{" "}
            <a href="https://www.upm.es/internacional" target="_blank" rel="noreferrer">
              Technical University of Madrid
            </a>
            ), but I found my way into blockchain and haven&apos;t looked back.
          </p>
          <p>
            I&apos;ve been working in software since finishing college and started learning about
            blockchain in 2022. Since then, I&apos;ve combined full-time work with continuous
            learning through courses, hackathon competitions, personal projects, and technical
            challenges. I&apos;m particularly focused on smart contract security, DeFi integrations,
            and protocol development.
          </p>
          <p>
            I take a security-first approach to development — comprehensive testing (unit and fuzz)
            with Foundry and static analysis with Slither and Aderyn. Clean, well-documented code
            with strong test coverage isn&apos;t just best practice for me, it&apos;s
            non-negotiable.
          </p>

          <div className="space-y-4">
            <h2 className="text-lg font-semibold">How I Work</h2>
            <div className="glass p-4 space-y-3">
              <p>
                <strong>Development approach:</strong> My hands-on experience across the full stack
                — front end, back end, and smart contracts — gives me a practical edge when
                designing protocols that need to work seamlessly end-to-end.
              </p>
              <p>
                <strong>Collaboration:</strong> I prefer clear communication and regular updates.
                I&apos;m comfortable working with teams across different time zones and using tools
                like GitHub, Discord, and Telegram for coordination.
              </p>
              <p>
                <strong>Specializations:</strong> ERC standards (20/721/1155/4626/6909), lending
                protocols, Uniswap v4 hooks, Chainlink integrations (CCIP, VRF, Price Feeds),
                upgradeable contracts, and engineering code reviews.
              </p>
            </div>
          </div>
        </div>

        <aside className="lg:col-span-1 space-y-4">
          <div className="glass p-4 text-sm">
            <h3 className="font-semibold mb-2">Quick facts</h3>
            <ul className="space-y-1 text-white/80">
              <li>Location: Madrid, Spain (remote‑friendly)</li>
              <li>Time zone: CET/CEST</li>
              <li>Primary stack: Solidity, Foundry, TypeScript</li>
              <li>Interests: DeFi, cross‑chain, security</li>
            </ul>
          </div>
          <div className="glass p-4 text-sm">
            <h3 className="font-semibold mb-2">Availability</h3>
            <p className="text-white/80">
              I&apos;m open to part-time engagements and collaborations that align with my
              interests, especially those involving smart contracts, decentralized protocols, and
              mission‑driven blockchain projects.
            </p>
            <div className="mt-3 flex gap-3">
              <a className="underline" href={`mailto:${SITE.email}`}>
                Email
              </a>
              <a className="underline" href={SITE.calendly} target="_blank" rel="noreferrer">
                Calendly
              </a>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
