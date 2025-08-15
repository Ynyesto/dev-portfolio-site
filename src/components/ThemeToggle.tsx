"use client";

import { useEffect, useState, useCallback } from "react";
import { Sun, Moon } from "lucide-react";

type Theme = "light" | "dark";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "dark";
  const stored = window.localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }, []);

  useEffect(() => {
    // Use requestAnimationFrame to avoid blocking main thread
    const updateTheme = () => {
      if (theme === "light") {
        document.documentElement.setAttribute("data-theme", "light");
      } else {
        document.documentElement.removeAttribute("data-theme");
      }
      window.localStorage.setItem("theme", theme);
    };

    // Defer theme update to next frame
    requestAnimationFrame(updateTheme);
  }, [theme]);

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      className="inline-flex items-center gap-1 rounded-full border border-white/20 px-3 h-9 text-sm hover:border-white/40 transition-colors"
      onClick={toggleTheme}
    >
      {theme === "light" ? <Sun size={16} /> : <Moon size={16} />}
      <span className="hidden sm:inline">{theme === "light" ? "Light" : "Dark"}</span>
    </button>
  );
}
