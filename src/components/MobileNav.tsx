"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="hidden max-[500px]:block">
      {/* Burger Button */}
      <button
        onClick={toggleMenu}
        className="p-2 text-white/80 hover:text-white transition-colors rounded-lg hover:bg-white/10"
        aria-label="Toggle navigation menu"
      >
        <Menu size={24} />
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <>
          <div 
            className="fixed top-0 left-0 right-0 bottom-0"
            style={{ 
              backgroundColor: '#000000',
              zIndex: 999999,
              position: 'fixed',
              width: '100vw',
              height: '100vh'
            }}
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <span className="font-semibold text-white text-lg">Menu</span>
                <button
                  onClick={closeMenu}
                  className="p-2 text-white/60 hover:text-white transition-colors"
                  aria-label="Close navigation menu"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Navigation */}
              <nav className="flex-1 px-6 py-8 space-y-4">
                <Link
                  href="/"
                  onClick={closeMenu}
                  className="block py-4 px-6 text-xl font-medium text-white hover:bg-white/10 rounded-lg transition-all"
                >
                  Home
                </Link>
                <Link
                  href="/portfolio"
                  onClick={closeMenu}
                  className="block py-4 px-6 text-xl font-medium text-white hover:bg-white/10 rounded-lg transition-all"
                >
                  Portfolio
                </Link>
                <Link
                  href="/learning"
                  onClick={closeMenu}
                  className="block py-4 px-6 text-xl font-medium text-white hover:bg-white/10 rounded-lg transition-all"
                >
                  Learning
                </Link>
                <Link
                  href="/writing"
                  onClick={closeMenu}
                  className="block py-4 px-6 text-xl font-medium text-white hover:bg-white/10 rounded-lg transition-all"
                >
                  Writing
                </Link>
                <Link
                  href="/about"
                  onClick={closeMenu}
                  className="block py-4 px-6 text-xl font-medium text-white hover:bg-white/10 rounded-lg transition-all"
                >
                  About
                </Link>
              </nav>

              {/* CTA */}
              <div className="p-6 border-t border-white/10">
                <a
                  href="https://calendly.com/ynyesto/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="block w-full py-4 px-6 text-center bg-white text-black font-semibold rounded-lg hover:bg-white/90 transition-colors"
                >
                  Book a call
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}