"use client";

import { MapPin, Briefcase, Code2, Zap, GitBranch } from "lucide-react";
import { about, personalInfo } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import AnimatedSection from "./AnimatedSection";

const highlights = [
  { icon: MapPin, label: personalInfo.location, key: "location" },
  { icon: Briefcase, label: "Student", key: "experience" },
  { icon: Code2, label: "Applied CS", key: "stack" },
  { icon: Zap, label: "Open to Internships", key: "status" },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-4">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          title="About Me"
          subtitle="who I am and what drives my work"
        />

        <AnimatedSection className="rounded-lg border border-border bg-surface p-6 sm:p-8">
          {/* Code-style comment block */}
          <div className="font-mono text-sm space-y-4 leading-relaxed">
            <div>
              <span className="text-muted">/**</span>
              <br />
              <span className="text-muted"> * </span>
              <span className="text-foreground font-sans text-base font-medium">{about.summary}</span>
              <br />
              <span className="text-muted"> *</span>
              <br />
              <span className="text-muted"> * </span>
              <span className="text-muted font-sans text-sm">{about.background}</span>
              <br />
              <span className="text-muted"> *</span>
              <br />
              <span className="text-muted"> * </span>
              <span className="text-muted font-sans text-sm">{about.focus}</span>
              <br />
              <span className="text-muted"> */</span>
            </div>

            <div className="border-l-2 border-accent/40 pl-4 py-2">
              <div className="flex items-center gap-2 text-xs text-accent mb-1">
                <GitBranch size={12} />
                <span>value-proposition</span>
              </div>
              <p className="font-sans text-sm text-foreground italic">
                {about.valueProposition}
              </p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {highlights.map(({ icon: Icon, label, key }) => (
            <div
              key={key}
              className="flex items-center gap-2.5 rounded-md bg-surface border border-border p-3 font-mono text-xs"
            >
              <Icon size={14} className="text-accent flex-shrink-0" />
              <span className="text-muted">{label}</span>
            </div>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
