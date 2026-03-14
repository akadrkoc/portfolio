"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const bootLines = [
  { text: "$ boot portfolio.sys", color: "text-accent" },
  { text: "[OK] Loading modules...", color: "text-muted" },
  { text: "[OK] Initializing components...", color: "text-muted" },
  { text: "[OK] Compiling styles...", color: "text-muted" },
  { text: "[OK] Connecting to network...", color: "text-muted" },
  { text: "System ready. Welcome.", color: "text-accent" },
];

const LINE_INTERVAL = 280;
const FADE_DELAY = 400;

export default function SplashScreen({ children }: { children: React.ReactNode }) {
  const [visibleLines, setVisibleLines] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("splash-seen")) {
      setDone(true);
      return;
    }

    let line = 0;
    const interval = setInterval(() => {
      line++;
      setVisibleLines(line);
      if (line >= bootLines.length) {
        clearInterval(interval);
        setTimeout(() => {
          setDone(true);
          sessionStorage.setItem("splash-seen", "1");
        }, FADE_DELAY);
      }
    }, LINE_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  if (done) return <>{children}</>;

  return (
    <>
      <div className="sr-only">{children}</div>
      <AnimatePresence>
        <motion.div
          key="splash"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-background"
        >
          <div className="w-full max-w-md px-6 font-mono text-sm space-y-2">
            {bootLines.slice(0, visibleLines).map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.15 }}
                className={line.color}
              >
                {line.text}
                {i === visibleLines - 1 && i < bootLines.length - 1 && (
                  <span className="animate-blink ml-1">_</span>
                )}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
