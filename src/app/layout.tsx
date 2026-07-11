import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/site";
import Script from "next/script";
import MobileNav from "@/components/MobileNav";
import FooterSocials from "@/components/FooterSocials";
import PointerGlow from "@/components/PointerGlow";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: SITE.name,
  description: SITE.description,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.ico",
    apple: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    url: SITE.url,
    title: SITE.name,
    description: SITE.description,
    siteName: SITE.name,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.name,
    description: SITE.description,
  },
};

const NAV_LINKS = [
  { href: "/#experience", label: "Experience" },
  { href: "/#work", label: "Work" },
  { href: "/#skills", label: "Skills" },
  { href: "/#writing", label: "Writing" },
  { href: "/#contact", label: "Contact" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://static.cloudflareinsights.com" />
        <link rel="dns-prefetch" href="https://static.cloudflareinsights.com" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {process.env.NEXT_PUBLIC_CF_BEACON_TOKEN ? (
          <Script
            src="https://static.cloudflareinsights.com/beacon.min.js"
            strategy="lazyOnload"
            data-cf-beacon={
              `{"token":"${process.env.NEXT_PUBLIC_CF_BEACON_TOKEN}"}` as unknown as string
            }
            defer
          />
        ) : null}
        <div aria-hidden className="fixed inset-0 -z-10 pointer-events-none bg-grid" />
        <PointerGlow />
        <div className="min-h-screen flex flex-col">
          <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/85 backdrop-blur">
            <div className="mx-auto max-w-5xl px-5 h-14 flex items-center justify-between gap-4">
              <Link
                href="/"
                className="font-semibold tracking-tight hover:text-accent transition-colors"
              >
                <span className="hidden sm:inline">Antonio Rodríguez‑Ynyesto</span>
                <span className="sm:hidden">Ynyesto</span>
              </Link>

              <nav className="hidden md:flex items-center gap-6">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-muted hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="flex items-center gap-3">
                <a
                  href={SITE.cvDownloadPath}
                  className="hidden sm:inline-flex items-center h-9 px-4 rounded-md border border-accent/40 text-accent text-sm font-medium hover:bg-accent/10 transition-colors"
                >
                  Download CV
                </a>
                <MobileNav links={NAV_LINKS} />
              </div>
            </div>
          </header>

          <main className="mx-auto max-w-5xl px-5 flex-1 w-full">{children}</main>

          <footer className="mt-20 border-t border-white/10">
            <div className="mx-auto max-w-5xl px-5 py-6 text-sm text-muted flex flex-wrap items-center justify-between gap-4">
              <span>© {new Date().getFullYear()} Antonio Rodríguez‑Ynyesto</span>
              <FooterSocials />
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
