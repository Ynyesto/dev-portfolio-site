import type { Metadata } from "next";
// import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/site";
import FooterSocials from "@/components/FooterSocials";
import Script from "next/script";
import Image from "next/image";
import TrackedLink from "@/components/TrackedLink";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' }
    ],
    apple: '/favicon.svg',
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {process.env.NEXT_PUBLIC_CF_BEACON_TOKEN ? (
          <Script
            src="https://static.cloudflareinsights.com/beacon.min.js"
            strategy="afterInteractive"
            data-cf-beacon={
              `{"token":"${process.env.NEXT_PUBLIC_CF_BEACON_TOKEN}"}` as unknown as string
            }
          />
        ) : null}
        {/* Analytics disabled (no third-party script injected) */}
        <div className="min-h-screen flex flex-col relative">
          {/* Global background Ethereum logo */}
          <div className="fixed inset-0 flex items-center justify-center pointer-events-none overflow-hidden z-0">
            <Image
              src="/ethereum.svg"
              alt=""
              width={800}
              height={800}
              className="opacity-[0.1] w-[800px] h-[800px]"
              style={{ minWidth: 0, minHeight: 0 }}
            />
          </div>
          <header className="sticky top-0 z-50 w-full border-b border-black/10 dark:border-white/10 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between gap-3">
              <TrackedLink
                href="/"
                className="font-semibold tracking-tight whitespace-nowrap"
                event="nav_click"
                props={{ link: "home" }}
              >
                Home
              </TrackedLink>
              <nav className="flex items-center gap-2 sm:gap-3 flex-wrap overflow-x-auto max-w-full">
                <TrackedLink
                  className="hover:underline text-sm sm:text-base"
                  href="/portfolio"
                  event="nav_click"
                  props={{ link: "portfolio" }}
                >
                  Portfolio
                </TrackedLink>
                <TrackedLink
                  className="hover:underline text-sm sm:text-base"
                  href="/learning"
                  event="nav_click"
                  props={{ link: "learning" }}
                >
                  Learning
                </TrackedLink>
                <TrackedLink
                  className="hover:underline text-sm sm:text-base"
                  href="/writing"
                  event="nav_click"
                  props={{ link: "writing" }}
                >
                  Writing
                </TrackedLink>
                <TrackedLink
                  className="hover:underline text-sm sm:text-base"
                  href="/about"
                  event="nav_click"
                  props={{ link: "about" }}
                >
                  About
                </TrackedLink>
                <a
                  className="rounded-full border border-solid border-transparent transition-colors bg-foreground text-background hover:opacity-90 text-xs sm:text-sm h-8 sm:h-9 px-3 sm:px-4 flex items-center whitespace-nowrap"
                  href="https://calendly.com/ynyesto/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a call
                </a>
              </nav>
            </div>
          </header>
          <main className="mx-auto max-w-6xl px-4 py-12 flex-1 w-full">{children}</main>
          <footer className="mt-16 border-t border-black/10 dark:border-white/10">
            <div className="mx-auto max-w-6xl px-4 py-6 text-sm flex items-center justify-between">
              <span>© {new Date().getFullYear()} Antonio Rodríguez‑Ynyesto</span>
              <FooterSocials />
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
