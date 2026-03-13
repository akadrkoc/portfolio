"use client";

import AnimatedSection from "./AnimatedSection";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <AnimatedSection className="mb-12">
      <div className="flex items-center gap-3 mb-2">
        <span className="font-mono text-sm text-accent">~/portfolio</span>
        <span className="font-mono text-sm text-muted">$</span>
        <span className="font-mono text-sm text-cyan">cat</span>
        <span className="font-mono text-sm text-foreground">
          {title.toLowerCase().replace(/\s+/g, "-")}.md
        </span>
      </div>
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
        <span className="text-muted font-mono text-lg mr-2">#</span>
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-muted font-mono text-sm">
          <span className="text-muted/50">// </span>
          {subtitle}
        </p>
      )}
      <div className="mt-4 h-px w-full bg-gradient-to-r from-accent/50 via-border to-transparent" />
    </AnimatedSection>
  );
}
