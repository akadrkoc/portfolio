"use client";

import { skills } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import AnimatedSection from "./AnimatedSection";

function SkillBar({ name, level }: { name: string; level: number }) {
  const blocks = 20;
  const filled = Math.round((level / 100) * blocks);
  const bar = "█".repeat(filled) + "░".repeat(blocks - filled);

  return (
    <div className="font-mono text-xs flex items-center gap-3">
      <span className="w-36 sm:w-44 text-foreground truncate">{name}</span>
      <span className="text-accent hidden sm:inline">{bar}</span>
      <span className="text-accent sm:hidden">{"█".repeat(Math.round(filled/2))}{"░".repeat(Math.round((blocks - filled)/2))}</span>
      <span className="text-muted ml-auto">{level}%</span>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          title="Tech Stack"
          subtitle="languages, frameworks, tools, and platforms I work with"
        />

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Technical Skills - terminal block style */}
          <AnimatedSection className="lg:col-span-3">
            <div className="rounded-lg border border-border bg-surface overflow-hidden">
              <div className="border-b border-border px-4 py-2 bg-surface-light">
                <span className="font-mono text-xs text-muted">languages_and_frameworks.sh</span>
              </div>
              <div className="p-4 space-y-2.5">
                {skills.technical.map((skill) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Tools & Soft Skills */}
          <div className="lg:col-span-2 space-y-6">
            <AnimatedSection delay={0.1}>
              <div className="rounded-lg border border-border bg-surface overflow-hidden">
                <div className="border-b border-border px-4 py-2 bg-surface-light">
                  <span className="font-mono text-xs text-muted">tools.config</span>
                </div>
                <div className="p-4 flex flex-wrap gap-2">
                  {skills.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-md border border-border bg-surface-light px-2.5 py-1 font-mono text-xs text-cyan hover:border-accent/40 hover:text-accent transition-colors cursor-default"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="rounded-lg border border-border bg-surface overflow-hidden">
                <div className="border-b border-border px-4 py-2 bg-surface-light">
                  <span className="font-mono text-xs text-muted">soft_skills.md</span>
                </div>
                <div className="p-4 space-y-2">
                  {skills.soft.map((skill) => (
                    <div key={skill} className="flex items-center gap-2 font-mono text-xs">
                      <span className="text-accent">-</span>
                      <span className="text-muted">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
