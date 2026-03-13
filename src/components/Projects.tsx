"use client";

import { ExternalLink, Github, Folder } from "lucide-react";
import { projects } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import AnimatedSection from "./AnimatedSection";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          title="Projects"
          subtitle="ls -la ~/projects --featured"
        />

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="group h-full rounded-lg border border-border bg-surface overflow-hidden hover:border-accent/30 transition-all duration-300">
                {/* Editor title bar */}
                <div className="flex items-center justify-between border-b border-border px-4 py-2 bg-surface-light">
                  <div className="flex items-center gap-2">
                    <Folder size={12} className="text-accent" />
                    <span className="font-mono text-xs text-muted">
                      {project.title.toLowerCase().replace(/\s+/g, "-")}/
                    </span>
                  </div>
                  {project.featured && (
                    <span className="font-mono text-[10px] text-black bg-accent rounded px-1.5 py-0.5">
                      FEATURED
                    </span>
                  )}
                </div>

                {/* Project image placeholder */}
                <div className="relative h-40 bg-surface-light/50 flex items-center justify-center overflow-hidden border-b border-border">
                  <div className="font-mono text-xs text-border/60 group-hover:text-accent/20 transition-colors duration-300 text-center px-4">
                    <span className="text-2xl font-bold block mb-1">
                      {project.title.split(" ").map((w) => w[0]).join("")}
                    </span>
                    ./screenshot.png
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-base font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm text-muted mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech stack as inline code */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.stack.map((tech) => (
                      <code
                        key={tech}
                        className="rounded bg-surface-light border border-border px-1.5 py-0.5 font-mono text-[11px] text-cyan"
                      >
                        {tech}
                      </code>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-2 border-t border-border">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 font-mono text-xs text-muted hover:text-foreground transition-colors"
                      >
                        <Github size={13} />
                        source
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 font-mono text-xs text-accent hover:text-accent-light transition-colors"
                      >
                        <ExternalLink size={13} />
                        live
                      </a>
                    )}
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
