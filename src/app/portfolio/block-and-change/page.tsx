import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hackathon: Block & Change — Social Innovation Winner",
  description:
    "Won prize for best social innovation. Two-day build with minimal sleep; rapid prototyping and delivery.",
};

export default function BlockAndChangePage() {
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
          <h1 className="text-3xl font-bold mb-6">Block & Change Hackathon</h1>

          <p className="text-lg text-white/90 leading-relaxed mb-6">
            Intense 48‑hour hackathon focused on social impact. Our team rapidly prototyped and
            delivered a working project under extreme time pressure, as it was our first-ever
            hackathon.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-white/60 text-sm font-medium uppercase tracking-wide mb-2">
                Achievement
              </h3>
              <p className="text-white/90 flex items-center gap-2">
                🌟 Best Social Innovation Prize
              </p>
            </div>
            <div>
              <h3 className="text-white/60 text-sm font-medium uppercase tracking-wide mb-2">
                Challenge
              </h3>
              <p className="text-white/90">48 hours, minimal sleep</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="glass p-6 rounded-lg border-l-4 border-purple-500/30">
            <h2 className="text-xl font-semibold mb-4">Hackathon Experience</h2>
            <ul className="space-y-2 text-white/80">
              <li>• High-pressure environment with tight deadlines</li>
              <li>• Focus on social impact and community benefit</li>
              <li>• Rapid iteration and user feedback integration</li>
              <li>• Team collaboration under extreme constraints</li>
            </ul>
          </div>

          <div className="glass p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Skills Demonstrated</h2>
            <ul className="space-y-2 text-white/80">
              <li>• Rapid prototyping and MVP development</li>
              <li>• Working under pressure with tight deadlines</li>
              <li>• Social impact-focused solution design</li>
              <li>• Cross-functional team collaboration</li>
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="glass p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <a
              href="https://github.com/ynyesto/BlockChangeHackathon"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 rounded px-4 py-2 text-sm transition-colors w-full justify-center"
            >
              View Repository
            </a>
          </div>

          <div className="glass p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3">Recognition</h3>
            <p className="text-sm text-white/70">
              Selected for best social innovation among all participating teams, highlighting both
              technical execution and social impact potential.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
