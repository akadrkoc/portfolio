import { Mail, Linkedin, Github, MapPin, Send } from "lucide-react";
import { personalInfo } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import AnimatedSection from "./AnimatedSection";

const socials = [
  {
    icon: Mail,
    label: "email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: Linkedin,
    label: "linkedin",
    value: "linkedin.com/in/abdlkdr-koc",
    href: personalInfo.linkedin,
  },
  {
    icon: Github,
    label: "github",
    value: "github.com/akadrkoc",
    href: personalInfo.github,
  },
  {
    icon: MapPin,
    label: "location",
    value: personalInfo.location,
    href: null,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          title="Contact"
          subtitle="let's connect and build something together"
        />

        <AnimatedSection>
          <div className="rounded-lg border border-border bg-surface overflow-hidden">
            <div className="flex items-center gap-2 border-b border-border px-4 py-2 bg-surface-light">
              <Send size={12} className="text-accent" />
              <span className="font-mono text-xs text-muted">contact.sh</span>
            </div>

            <div className="p-6 sm:p-8">
              {/* Terminal prompt style message */}
              <div className="font-mono text-sm space-y-2 mb-8">
                <p>
                  <span className="text-accent">&#10095;</span>
                  <span className="text-cyan ml-2">echo</span>
                  <span className="text-orange ml-1">&quot;Ready for new challenges&quot;</span>
                </p>
                <p className="text-muted">
                  Whether you have a project in mind, a job opportunity, or just want to
                  say hello — I&apos;d love to hear from you.
                </p>
              </div>

              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-2.5 text-sm font-medium text-black hover:bg-accent-light transition-colors"
              >
                <Mail size={15} />
                Send Email
              </a>

              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {socials.map(({ icon: Icon, label, value, href }) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 rounded-md bg-surface-light border border-border p-3 hover:border-accent/30 transition-colors"
                  >
                    <Icon size={14} className="text-accent flex-shrink-0" />
                    <div className="font-mono text-xs min-w-0">
                      <p className="text-muted">{label}</p>
                      {href ? (
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-cyan hover:text-accent transition-colors truncate block"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-foreground truncate">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
