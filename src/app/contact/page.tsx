import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact | Get in touch",
  description: "Email or book a call to discuss part-time smart contract work.",
};

export default function ContactPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-bold">Contact</h1>
      <p className="text-sm text-white/80">I’m open to part‑time engagements and collaborations.</p>
      <div className="flex gap-4 text-sm">
        <a className="underline" href={`mailto:${SITE.email}`}>
          Email
        </a>
        <a className="underline" href={SITE.calendly} target="_blank" rel="noreferrer">
          Book a 30‑min call
        </a>
      </div>
    </section>
  );
}
