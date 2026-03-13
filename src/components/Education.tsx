"use client";

import { GraduationCap, Award, FileCheck } from "lucide-react";
import { education, certifications } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import AnimatedSection from "./AnimatedSection";

export default function Education() {
  return (
    <section id="education" className="py-24 px-4">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          title="Education & Certifications"
          subtitle="academic background and professional credentials"
        />

        <div className="grid gap-6 md:grid-cols-2">
          <AnimatedSection>
            <div className="rounded-lg border border-border bg-surface overflow-hidden">
              <div className="flex items-center gap-2 border-b border-border px-4 py-2 bg-surface-light">
                <GraduationCap size={12} className="text-accent" />
                <span className="font-mono text-xs text-muted">education.json</span>
              </div>
              <div className="p-5 space-y-4">
                {education.map((edu, index) => (
                  <div key={index} className="font-mono text-xs space-y-1">
                    <p className="text-accent">
                      {edu.startDate} — {edu.endDate}
                    </p>
                    <p className="text-foreground text-sm font-sans font-semibold">{edu.degree}</p>
                    <p className="text-cyan">@{edu.institution.toLowerCase().replace(/[\s,]+/g, "-")}</p>
                    {edu.description && (
                      <p className="text-muted font-sans text-sm mt-2">{edu.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="rounded-lg border border-border bg-surface overflow-hidden">
              <div className="flex items-center gap-2 border-b border-border px-4 py-2 bg-surface-light">
                <FileCheck size={12} className="text-accent" />
                <span className="font-mono text-xs text-muted">certifications.log</span>
              </div>
              <div className="p-5 space-y-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 group"
                  >
                    <Award size={14} className="text-orange mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-semibold">{cert.name}</p>
                      <p className="font-mono text-xs text-muted">
                        {cert.issuer}
                        <span className="text-accent ml-2">{cert.date}</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
