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
              background: 'linear-gradient(135deg, rgba(6,182,212,0.1) 0%, rgba(139,92,246,0.1) 100%)',
              zIndex: 999999,
              position: 'fixed',
              width: '100vw',
              height: '100vh'
            }}
          >
            {/* Glass effect overlay */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-md"></div>
            
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>

            <div className="flex flex-col h-full relative z-10">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/20">
                <span className="font-semibold text-white text-xl">Navigation</span>
                <button
                  onClick={closeMenu}
                  className="p-3 text-white/60 hover:text-white transition-all duration-200 rounded-full hover:bg-white/10"
                  aria-label="Close navigation menu"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Navigation */}
              <nav className="flex-1 px-6 py-8 space-y-3">
                <Link
                  href="/"
                  onClick={closeMenu}
                  className="group block py-4 px-6 text-lg font-medium text-white/90 hover:text-white transition-all duration-200 rounded-xl hover:bg-white/10 border border-transparent hover:border-white/20"
                >
                  <span className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-200"></div>
                    Home
                  </span>
                </Link>
                <Link
                  href="/portfolio"
                  onClick={closeMenu}
                  className="group block py-4 px-6 text-lg font-medium text-white/90 hover:text-white transition-all duration-200 rounded-xl hover:bg-white/10 border border-transparent hover:border-white/20"
                >
                  <span className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-200"></div>
                    Portfolio
                  </span>
                </Link>
                <Link
                  href="/writing"
                  onClick={closeMenu}
                  className="group block py-4 px-6 text-lg font-medium text-white/90 hover:text-white transition-all duration-200 rounded-xl hover:bg-white/10 border border-transparent hover:border-white/20"
                >
                  <span className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full opacity-0 group-hover:opacity-20 transition-all duration-200"></div>
                    Writing
                  </span>
                </Link>
                <Link
                  href="/learning"
                  onClick={closeMenu}
                  className="group block py-4 px-6 text-lg font-medium text-white/90 hover:text-white transition-all duration-200 rounded-xl hover:bg-white/10 border border-transparent hover:border-white/20"
                >
                  <span className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-200"></div>
                    Learning
                  </span>
                </Link>
                <Link
                  href="/about"
                  onClick={closeMenu}
                  className="group block py-4 px-6 text-lg font-medium text-white/90 hover:text-white transition-all duration-200 rounded-xl hover:bg-white/10 border border-transparent hover:border-white/20"
                >
                  <span className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-200"></div>
                    About
                  </span>
                </Link>
              </nav>

              {/* CTA */}
              <div className="p-6 border-t border-white/20">
                <a
                  href="https://calendly.com/ynyesto/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="block w-full py-4 px-6 text-center bg-white text-black font-semibold rounded-xl hover:bg-white/90 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
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