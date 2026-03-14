"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal } from "lucide-react";
import { navLinks, personalInfo } from "@/lib/data";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map((link) => link.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(`#${sections[i]}`);
          return;
        }
      }
      setActiveSection("");
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-14 items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-mono text-sm font-bold tracking-tight">
            <Terminal size={16} className="text-accent" />
            <span className="text-accent">~</span>
            <span className="text-foreground">/{personalInfo.name.split(" ")[0].toLowerCase()}</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                aria-current={activeSection === link.href ? "true" : undefined}
                className={`font-mono text-xs transition-colors ${
                  activeSection === link.href
                    ? "text-accent"
                    : "text-muted hover:text-accent"
                }`}
              >
                <span className={`mr-1 ${activeSection === link.href ? "text-accent" : "text-accent/50"}`}>
                  {String(i).padStart(2, "0")}.
                </span>
                {link.label}
              </a>
            ))}
            <a
              href={personalInfo.resumeUrl}
              className="rounded-md border border-accent/50 bg-accent/10 px-3 py-1.5 font-mono text-xs font-medium text-accent hover:bg-accent/20 transition-colors"
            >
              ./download-cv.sh
            </a>
            <ThemeToggle />
          </div>

          {/* Mobile toggle */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              className="text-foreground"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-surface border-b border-border overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`font-mono text-sm transition-colors py-2 ${
                    activeSection === link.href
                      ? "text-accent"
                      : "text-muted hover:text-accent"
                  }`}
                >
                  <span className={`mr-2 ${activeSection === link.href ? "text-accent" : "text-accent/50"}`}>
                    {String(i).padStart(2, "0")}.
                  </span>
                  {link.label}
                </a>
              ))}
              <a
                href={personalInfo.resumeUrl}
                className="mt-3 rounded-md border border-accent/50 bg-accent/10 px-3 py-2 font-mono text-sm text-accent text-center hover:bg-accent/20 transition-colors"
              >
                ./download-cv.sh
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
