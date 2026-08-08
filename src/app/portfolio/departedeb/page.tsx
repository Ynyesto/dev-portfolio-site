import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Study: De parte de B — Subscription Operations Platform",
  description:
    "Production subscription and fulfillment platform built with Astro, Cloudflare, Stripe, Google Apps Script and Sheets, and Brevo.",
};

const externalButtonClass =
  "flex items-center justify-center border border-white/20 hover:border-white/40 hover:bg-white/5 rounded-md px-4 py-2 text-sm transition-colors";

export default function DepartedebCaseStudy() {
  return (
    <div className="space-y-10 pt-10 pb-8">
      <div className="space-y-6">
        <Link
          href="/#work"
          className="text-sm text-muted hover:text-foreground transition-colors inline-flex items-center gap-1"
        >
          ← Back to work
        </Link>

        <div className="panel p-6 sm:p-8">
          <h1 className="text-3xl font-semibold tracking-tight mb-6">
            De parte de B — Subscription operations platform
          </h1>

          <p className="text-lg text-foreground/90 leading-relaxed mb-6 max-w-3xl">
            Production subscription and fulfillment platform for a Spanish snail mail subscription
            business. I built the public site and its Stripe-to-fulfillment pipeline: billing,
            synchronized subscriber state, email, and a private operations dashboard.
          </p>

          <div className="grid sm:grid-cols-3 gap-6">
            <div>
              <h3 className="font-mono text-xs text-muted uppercase tracking-wider mb-2">Role</h3>
              <p>End-to-end developer</p>
            </div>
            <div>
              <h3 className="font-mono text-xs text-muted uppercase tracking-wider mb-2">Result</h3>
              <p>Live production system</p>
            </div>
            <div>
              <h3 className="font-mono text-xs text-muted uppercase tracking-wider mb-2">When</h3>
              <p>2026</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="panel p-6">
            <h2 className="text-xl font-semibold mb-4">Stack &amp; architecture</h2>
            <ul className="space-y-2 text-muted leading-relaxed list-disc pl-5 marker:text-white/30">
              <li>
                <strong className="text-foreground">Astro and TypeScript</strong> on Cloudflare
                Pages for the public site and operations dashboard.
              </li>
              <li>
                <strong className="text-foreground">Stripe</strong> Payment Links and Customer
                Portal for billing, with a Cloudflare Worker handling webhooks.
              </li>
              <li>
                <strong className="text-foreground">Google Apps Script and Sheets</strong> for
                subscriber state, event history, and fulfillment data.
              </li>
              <li>
                <strong className="text-foreground">Brevo</strong> for transactional welcome email.
              </li>
              <li>
                <strong className="text-foreground">Cloudflare Access and Pages Functions</strong>{" "}
                for the private, server-authenticated admin path.
              </li>
            </ul>
          </div>

          <div className="panel p-6">
            <h2 className="text-xl font-semibold mb-4">What I built</h2>
            <ul className="space-y-2 text-muted leading-relaxed list-disc pl-5 marker:text-white/30">
              <li>
                The customer site, subscription flow, legal pages, and self-service billing path.
              </li>
              <li>
                A webhook pipeline that normalizes checkout, customer, subscription, and invoice
                events into one subscriber model.
              </li>
              <li>
                A private dashboard for shipment eligibility, addresses, birthdays, payment issues,
                cancellations, and welcome-email failures.
              </li>
              <li>Tested deployment automation across the site, Apps Script, and Worker.</li>
            </ul>
          </div>

          <div className="panel p-6">
            <h2 className="text-xl font-semibold mb-4">Reliability &amp; security</h2>
            <ul className="space-y-2 text-muted leading-relaxed list-disc pl-5 marker:text-white/30">
              <li>Verified Stripe signatures before processing webhook payloads.</li>
              <li>
                Stored per-field event timestamps so delayed events cannot overwrite newer state.
              </li>
              <li>
                Combined locking, provider timeouts, and durable email idempotency for safe retries.
              </li>
              <li>
                Kept secrets server-side, restricted the dashboard through Cloudflare Access, and
                excluded personal data from logs.
              </li>
            </ul>
          </div>

          <div className="panel p-6">
            <h2 className="text-xl font-semibold mb-4">Why Google Sheets</h2>
            <p className="text-muted leading-relaxed">
              The expected audience is measured in hundreds, so a directly inspectable operational
              store is a better trade-off than extra database infrastructure. Lock timings and
              webhook latency provide clear signals if the system eventually needs to migrate.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="panel p-6">
            <h3 className="text-lg font-semibold mb-4">Link</h3>
            <a
              href="https://departedeb.es"
              target="_blank"
              rel="noopener noreferrer"
              className={externalButtonClass}
            >
              Visit departedeb.es
            </a>
          </div>

          <div className="panel p-6">
            <h3 className="text-lg font-semibold mb-3">Result</h3>
            <p className="text-sm text-muted leading-relaxed">
              One live system covering the complete path from subscription checkout to the monthly
              fulfillment list.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
