"use client";

import { GitCommit, GitBranch } from "lucide-react";
import { experience } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import AnimatedSection from "./AnimatedSection";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          title="Experience"
          subtitle="git log --oneline --graph of my career"
        />

        <div className="relative">
          {/* Git branch line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-border" />

          {experience.map((job, index) => (
            <AnimatedSection
              key={index}
              delay={index * 0.1}
              className="relative mb-10 pl-12"
            >
              {/* Git commit dot */}
              <div className="absolute left-2.5 top-1.5 flex h-[18px] w-[18px] items-center justify-center rounded-full border-2 border-accent bg-background">
                <GitCommit size={10} className="text-accent" />
              </div>

              <div className="rounded-lg border border-border bg-surface overflow-hidden hover:border-accent/30 transition-colors">
                {/* File tab bar */}
                <div className="flex items-center gap-3 border-b border-border px-4 py-2 bg-surface-light">
                  <GitBranch size={12} className="text-accent" />
                  <span className="font-mono text-xs text-accent">
                    {job.startDate.toLowerCase().replace(" ", "-")}
                  </span>
                  <span className="font-mono text-xs text-muted">→</span>
                  <span className="font-mono text-xs text-accent-light">
                    {job.endDate.toLowerCase().replace(" ", "-")}
                  </span>
                </div>

                <div className="p-5">
                  <h3 className="text-base font-semibold">{job.title}</h3>
                  <p className="font-mono text-xs text-cyan mt-0.5">
                    @{job.company.toLowerCase().replace(/[\s.]+/g, "-")}
                    <span className="text-muted"> &middot; {job.location}</span>
                  </p>

                  <ul className="mt-4 space-y-2">
                    {job.description.map((item, i) => (
                      <li key={i} className="flex gap-2.5 text-sm text-muted">
                        <span className="font-mono text-accent mt-0.5 flex-shrink-0">+</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          ))}

          {/* Branch start */}
          <div className="relative pl-12">
            <div className="absolute left-2.5 top-0 flex h-[18px] w-[18px] items-center justify-center rounded-full border-2 border-muted bg-background">
              <div className="h-1.5 w-1.5 rounded-full bg-muted" />
            </div>
            <span className="font-mono text-xs text-muted">// journey.init()</span>
          </div>
        </div>
      </div>
    </section>
  );
}
