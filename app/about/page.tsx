import type { Metadata } from "next";
import { Award, GraduationCap } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Muhammad Khalid, a San Francisco-based software engineer and Grinnell College graduate.",
};

const skillGroups = [
  {
    title: "Languages",
    skills: ["TypeScript", "Python", "JavaScript", "Java"],
  },
  {
    title: "Backend and systems",
    skills: ["Node.js", "NestJS", "GraphQL", "BullMQ", "Django", "LiveKit"],
  },
  {
    title: "Data and infrastructure",
    skills: [
      "MongoDB",
      "PostgreSQL",
      "Redis",
      "GCP",
      "AWS",
      "OpenTelemetry",
    ],
  },
  {
    title: "AI and machine learning",
    skills: ["Durable Agents", "MCP", "PyTorch", "scikit-learn"],
  },
];

export default function AboutPage() {
  return (
    <main className="page-shell py-16 sm:py-24">
      <h1 className="page-heading text-center">About Me</h1>

      <section className="mx-auto mt-10 max-w-3xl text-center sm:mt-12" aria-label="About Muhammad Khalid">
        <div className="space-y-5 text-lg leading-8 text-slate-300">
          <p>
            I recently graduated from Grinnell College and now live in San
            Francisco. I studied computer science, spent a lot of time building
            things outside class, and found that I enjoy moving between
            different parts of a system.
          </p>
          <p>
            I&apos;m still early in my career, so I&apos;m keeping an open mind about
            the kinds of teams and problems I&apos;d enjoy working on. I care more
            about thoughtful people and useful work than a particular title or
            stack.
          </p>
          <p>
            Away from a keyboard, I&apos;m usually running, cycling, watching a
            movie, or reading. I particularly enjoy autobiographies and philosophy :)
          </p>
        </div>
      </section>

      <section className="mt-20" aria-labelledby="toolkit-heading">
        <p className="section-label">Toolkit</p>
        <h2 id="toolkit-heading" className="sr-only">Toolkit</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <article key={group.title} className="surface-card p-6">
              <h3 className="font-mono text-sm uppercase tracking-[0.14em] text-emerald-300">
                {group.title}
              </h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-20 grid gap-6 md:grid-cols-2" aria-label="Education and credentials">
        <article className="surface-card p-6 sm:p-8">
          <GraduationCap className="h-7 w-7 text-emerald-300" aria-hidden="true" />
          <p className="mt-6 section-label">Education</p>
          <h2 className="mt-3 text-2xl font-semibold text-white">Grinnell College</h2>
          <p className="mt-2 text-slate-300">B.A. in Computer Science · 2022–2026</p>
          <p className="mt-4 leading-7 text-slate-400">
            Graduated with a 3.7 cumulative GPA and Dean&apos;s List recognition
            throughout college.
          </p>
        </article>

        <article className="surface-card p-6 sm:p-8">
          <Award className="h-7 w-7 text-emerald-300" aria-hidden="true" />
          <p className="mt-6 section-label">Certification</p>
          <h2 className="mt-3 text-2xl font-semibold text-white">
            AWS Certified Solutions Architect
          </h2>
          <p className="mt-2 text-slate-300">Associate</p>
          <p className="mt-4 leading-7 text-slate-400">
            A foundation in designing secure, reliable, and cost-aware systems
            on AWS.
          </p>
        </article>
      </section>

    </main>
  );
}
