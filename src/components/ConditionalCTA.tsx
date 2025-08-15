"use client";

import { usePathname } from "next/navigation";

export default function ConditionalCTA() {
  const pathname = usePathname();
  
  // Hide CTA button on home page and about page
  const shouldHideCTA = pathname === "/" || pathname === "/about";
  
  if (shouldHideCTA) {
    // Return invisible placeholder to maintain consistent header height
    // This prevents the header from changing size when the button appears/disappears
    return (
      <div className="flex max-[400px]:hidden rounded-full border border-transparent text-sm h-8 px-3 items-center invisible">
        Book a call
      </div>
    );
  }
  
  return (
    <a
      className="flex max-[400px]:hidden rounded-full border border-solid border-transparent transition-colors bg-foreground text-background hover:opacity-90 text-sm h-8 px-3 items-center"
      href="https://calendly.com/ynyesto/30min"
      target="_blank"
      rel="noopener noreferrer"
    >
      Book a call
    </a>
  );
}
