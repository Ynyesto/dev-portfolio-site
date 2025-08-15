import type { Metadata } from "next";
// import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/site";
import dynamic from "next/dynamic";
import Script from "next/script";
import Image from "next/image";
import TrackedLink from "@/components/TrackedLink";
import MobileNav from "@/components/MobileNav";
import ConditionalCTA from "@/components/ConditionalCTA";

// Dynamic imports for non-critical components
const DynamicFooterSocials = dynamic(() => import("@/components/FooterSocials"), {
  ssr: true,
  loading: () => <div className="h-6 w-24 bg-white/10 rounded animate-pulse" />,
});

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect to external domains to reduce render-blocking */}
        <link rel="preconnect" href="https://static.cloudflareinsights.com" />
        <link rel="dns-prefetch" href="https://static.cloudflareinsights.com" />

        {/* PWA manifest for better caching */}
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
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
              priority
              sizes="800px"
            />
          </div>
          <header className="sticky top-0 z-50 w-full border-b border-black/10 dark:border-white/10 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="mx-auto max-w-6xl px-4 py-2 flex items-center justify-between">
              {/* Logo/Brand - Left */}
              <TrackedLink
                href="/"
                className="font-semibold tracking-tight text-lg bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent hover:from-cyan-300 hover:to-purple-400 transition-all duration-300 hover:scale-105 hover:drop-shadow-[0_0_20px_rgba(6,182,212,0.3)]"
                event="nav_click"
                props={{ link: "home" }}
              >
                Home
              </TrackedLink>

              {/* Desktop Navigation - Center */}
              <nav className="flex max-[500px]:hidden items-center gap-6 absolute left-1/2 transform -translate-x-1/2">
                <TrackedLink
                  className="text-base font-medium relative group transition-all duration-300 hover:text-cyan-300"
                  href="/portfolio"
                  event="nav_click"
                  props={{ link: "portfolio" }}
                >
                  Portfolio
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300 ease-out"></div>
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300 ease-out blur-sm opacity-50"></div>
                </TrackedLink>
                <TrackedLink
                  className="text-base font-medium relative group transition-all duration-300 hover:text-cyan-300"
                  href="/writing"
                  event="nav_click"
                  props={{ link: "writing" }}
                >
                  Writing
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300 ease-out"></div>
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300 ease-out blur-sm opacity-50"></div>
                </TrackedLink>
                <TrackedLink
                  className="text-base font-medium relative group transition-all duration-300 hover:text-cyan-300"
                  href="/learning"
                  event="nav_click"
                  props={{ link: "learning" }}
                >
                  Learning
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300 ease-out"></div>
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300 ease-out blur-sm opacity-50"></div>
                </TrackedLink>
                <TrackedLink
                  className="text-base font-medium relative group transition-all duration-300 hover:text-cyan-300"
                  href="/about"
                  event="nav_click"
                  props={{ link: "about" }}
                >
                  About
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300 ease-out"></div>
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300 ease-out blur-sm opacity-50"></div>
                </TrackedLink>
              </nav>

              {/* CTA Button - Right */}
              <div className="flex items-center gap-3">
                <ConditionalCTA />
                <MobileNav />
              </div>
            </div>
          </header>
          <main className="mx-auto max-w-6xl px-4 py-12 flex-1 w-full">{children}</main>
          <footer className="mt-16 border-t border-black/10 dark:border-white/10">
            <div className="mx-auto max-w-6xl px-4 py-6 text-sm flex items-center justify-between">
              <span>© {new Date().getFullYear()} Antonio Rodríguez‑Ynyesto</span>
              <DynamicFooterSocials />
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
