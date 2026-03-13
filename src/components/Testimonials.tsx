"use client";

import { MessageSquareQuote } from "lucide-react";
import { testimonials } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import AnimatedSection from "./AnimatedSection";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-4">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          title="Testimonials"
          subtitle="what colleagues and managers say about working with me"
        />

        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((t, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="h-full rounded-lg border border-border bg-surface overflow-hidden flex flex-col">
                <div className="flex items-center gap-2 border-b border-border px-4 py-2 bg-surface-light">
                  <MessageSquareQuote size={12} className="text-accent" />
                  <span className="font-mono text-xs text-muted">
                    review-{t.name.split(" ")[0].toLowerCase()}.md
                  </span>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <p className="text-sm text-muted leading-relaxed flex-1">
                    <span className="text-accent font-mono">&gt; </span>
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="mt-5 pt-4 border-t border-border flex items-center gap-3">
                    <div className="h-8 w-8 rounded-md bg-surface-light border border-border flex items-center justify-center font-mono text-xs text-accent">
                      {t.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <div>
                      <p className="text-sm font-medium">{t.name}</p>
                      <p className="font-mono text-[11px] text-muted">{t.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
