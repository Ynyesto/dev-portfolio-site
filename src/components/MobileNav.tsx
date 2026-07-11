"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { SITE } from "@/lib/site";

interface MobileNavProps {
  links: { href: string; label: string }[];
}

export default function MobileNav({ links }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const overlay = (
    // Portaled to <body>: the blurred sticky header is a containing block
    // for fixed descendants, which would clip this overlay to the header box.
    <div className="fixed inset-0 z-[60] bg-background md:hidden">
      <div className="flex flex-col h-[100dvh] mx-auto max-w-5xl px-5">
        <div className="flex items-center justify-between h-14 border-b border-white/10">
          <span className="font-semibold tracking-tight">Menu</span>
          <button
            onClick={closeMenu}
            className="p-2 text-muted hover:text-foreground transition-colors rounded-md hover:bg-white/5"
            aria-label="Close navigation menu"
          >
            <X size={22} />
          </button>
        </div>

        <nav className="flex-1 py-6 space-y-1 overflow-y-auto">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="block py-3 text-lg text-foreground/90 hover:text-accent transition-colors border-b border-white/5"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="py-6 border-t border-white/10">
          <a
            href={SITE.cvDownloadPath}
            onClick={closeMenu}
            className="flex items-center justify-center h-11 px-6 rounded-md bg-accent text-background text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-muted hover:text-foreground transition-colors rounded-md hover:bg-white/5"
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
      >
        <Menu size={22} />
      </button>

      {isOpen && createPortal(overlay, document.body)}
    </div>
  );
}
