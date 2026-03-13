"use client";

import { Github, Linkedin, Mail, Terminal } from "lucide-react";
import { personalInfo, navLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface py-10 px-4">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div className="flex items-center gap-2 font-mono text-sm">
            <Terminal size={14} className="text-accent" />
            <span className="text-accent">~</span>
            <span className="text-muted">/{personalInfo.name.split(" ")[0].toLowerCase()}</span>
          </div>

          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {navLinks.slice(0, 5).map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono text-xs text-muted hover:text-accent transition-colors"
              >
                {link.label.toLowerCase()}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-muted hover:text-accent transition-colors"
              aria-label="Email"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>

        <div className="mt-6 text-center font-mono text-[11px] text-muted">
          <span className="text-accent/50">// </span>
          &copy; {new Date().getFullYear()} {personalInfo.name}. Built with Next.js &amp; Tailwind CSS.
        </div>
      </div>
    </footer>
  );
}
