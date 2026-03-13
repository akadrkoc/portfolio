"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, Mail, FolderOpen, Terminal } from "lucide-react";
import { personalInfo } from "@/lib/data";

function useTypewriter(text: string, speed = 50, delay = 1000) {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    let i = 0;
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayed(text.slice(0, i + 1));
        i++;
        if (i >= text.length) clearInterval(interval);
      }, speed);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, speed, delay]);
  return displayed;
}

export default function Hero() {
  const typed = useTypewriter(personalInfo.tagline, 40, 800);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4"
    >
      {/* Grid dot background */}
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,var(--background)_70%)]" />

      <div className="relative z-10 mx-auto max-w-3xl">
        {/* Terminal window */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-lg border border-border bg-surface overflow-hidden shadow-2xl shadow-accent/5"
        >
          {/* Title bar */}
          <div className="flex items-center gap-2 border-b border-border px-4 py-2.5 bg-surface-light">
            <div className="flex gap-1.5">
              <span className="h-3 w-3 rounded-full bg-red" />
              <span className="h-3 w-3 rounded-full bg-orange" />
              <span className="h-3 w-3 rounded-full bg-accent" />
            </div>
            <span className="ml-2 text-xs font-mono text-muted flex items-center gap-1.5">
              <Terminal size={12} />
              portfolio — zsh — 80x24
            </span>
          </div>

          {/* Terminal body */}
          <div className="p-6 sm:p-8 font-mono text-sm sm:text-base space-y-4">
            {/* Prompt 1 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-accent">&#10095;</span>
              <span className="text-cyan ml-2">whoami</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="pl-0"
            >
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight font-sans text-foreground">
                {personalInfo.name}
              </h1>
              <p className="mt-1 text-lg sm:text-xl text-accent-light font-sans font-medium">
                {personalInfo.title}
              </p>
            </motion.div>

            {/* Prompt 2 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="pt-2"
            >
              <span className="text-accent">&#10095;</span>
              <span className="text-cyan ml-2">echo</span>
              <span className="text-orange ml-1">&quot;$TAGLINE&quot;</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="text-muted"
            >
              {typed}
              <span className="animate-blink text-accent">&#9608;</span>
            </motion.div>

            {/* Prompt 3 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="pt-2"
            >
              <span className="text-accent">&#10095;</span>
              <span className="text-cyan ml-2">cat</span>
              <span className="ml-1">status.json</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="text-sm"
            >
              <span className="text-muted">{"{"}</span>
              <br />
              <span className="ml-4 text-cyan">&quot;location&quot;</span>
              <span className="text-muted">: </span>
              <span className="text-orange">&quot;{personalInfo.location}&quot;</span>
              <span className="text-muted">,</span>
              <br />
              <span className="ml-4 text-cyan">&quot;available&quot;</span>
              <span className="text-muted">: </span>
              <span className="text-accent">true</span>
              <span className="text-muted">,</span>
              <br />
              <span className="ml-4 text-cyan">&quot;open_to&quot;</span>
              <span className="text-muted">: </span>
              <span className="text-orange">&quot;internship | working student&quot;</span>
              <br />
              <span className="text-muted">{"}"}</span>
            </motion.div>
          </div>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#contact"
            className="flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-black hover:bg-accent-light transition-colors"
          >
            <Mail size={15} />
            Contact Me
          </a>
          <a
            href={personalInfo.resumeUrl}
            className="flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground hover:bg-surface-light hover:border-accent/30 transition-colors"
          >
            <Download size={15} />
            Download CV
          </a>
          <a
            href="#projects"
            className="flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground hover:bg-surface-light hover:border-accent/30 transition-colors"
          >
            <FolderOpen size={15} />
            View Projects
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        aria-label="Scroll down"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
          <ArrowDown size={20} className="text-muted" />
        </motion.div>
      </motion.a>
    </section>
  );
}
