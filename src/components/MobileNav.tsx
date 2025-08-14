"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="lg:hidden">
      {/* Burger Button */}
      <button
        onClick={toggleMenu}
        className="p-2 text-white/80 hover:text-white transition-colors"
        aria-label="Toggle navigation menu"
      >
        <Menu size={24} />
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm">
          <div className="flex flex-col h-full">
            {/* Header with close button */}
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <span className="font-semibold text-white">Menu</span>
              <button
                onClick={closeMenu}
                className="p-2 text-white/80 hover:text-white transition-colors"
                aria-label="Close navigation menu"
              >
                <X size={24} />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 px-4 py-6 space-y-4">
              <Link
                href="/"
                onClick={closeMenu}
                className="block py-3 px-4 text-lg font-medium text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-all"
              >
                Home
              </Link>
              <Link
                href="/portfolio"
                onClick={closeMenu}
                className="block py-3 px-4 text-lg font-medium text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-all"
              >
                Portfolio
              </Link>
              <Link
                href="/learning"
                onClick={closeMenu}
                className="block py-3 px-4 text-lg font-medium text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-all"
              >
                Learning
              </Link>
              <Link
                href="/writing"
                onClick={closeMenu}
                className="block py-3 px-4 text-lg font-medium text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-all"
              >
                Writing
              </Link>
              <Link
                href="/about"
                onClick={closeMenu}
                className="block py-3 px-4 text-lg font-medium text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-all"
              >
                About
              </Link>
            </nav>

            {/* CTA Button */}
            <div className="p-4 border-t border-white/10">
              <a
                href="https://calendly.com/ynyesto/30min"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="block w-full py-3 px-6 text-center bg-white text-black font-medium rounded-lg hover:bg-white/90 transition-colors"
              >
                Book a call
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
