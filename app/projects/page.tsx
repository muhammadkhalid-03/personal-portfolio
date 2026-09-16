import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  FlaskConical,
  GraduationCap,
} from "lucide-react";
import PioneerMartCarousel from "../components/projects/PioneerMartCarousel";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected professional, product, research, open-source, and machine-learning work by Muhammad Khalid.",
};

export default function ProjectsPage() {
  return (
    <main className="page-shell py-16 sm:py-24">
      <h1 className="page-heading text-center">My past work</h1>

      <section className="mt-12 space-y-6 sm:mt-16" aria-label="Professional experience">
        <article className="surface-card accent-card p-6 sm:p-9">
          <div className="flex flex-col gap-8 lg:flex-row lg:justify-between">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 text-emerald-300">
                <BriefcaseBusiness className="h-5 w-5" aria-hidden="true" />
                <span className="font-mono text-sm uppercase tracking-[0.16em]">
                  Professional experience
                </span>
              </div>
              <h2 className="mt-5 text-3xl font-semibold text-white">
                Founding Software Engineer
              </h2>
              <p className="mt-1 font-mono text-base text-slate-300">
                Coco Health
              </p>
              <p className="mt-2 font-mono text-sm leading-6 text-slate-400">
                September 2025 – September 2026 · San Francisco, California
              </p>
              <p className="mt-6 text-base leading-7 text-slate-400 sm:text-lg">
                I helped build and operate the production software behind an AI
                consumer health product. I worked on real-time agent experiences,
                core backend services, model and data infrastructure, and the
                systems that made the product dependable in production.
              </p>
              <p className="mt-4 text-base leading-7 text-slate-400 sm:text-lg">
                As the team and product evolved, I moved from shipping
                foundational features to owning larger platform problems,
                improving reliability, and designing systems that could support
                new agent capabilities safely.
              </p>
            </div>
          </div>
        </article>

        <article className="surface-card accent-card">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
            <div className="p-6 sm:p-9">
              <div className="flex items-center gap-3 text-emerald-300">
                <Code2 className="h-5 w-5" aria-hidden="true" />
                <span className="font-mono text-sm uppercase tracking-[0.16em]">
                  Product engineering
                </span>
              </div>
              <h2 className="mt-5 text-3xl font-semibold text-white">
                PioneerMart
              </h2>
              <p className="mt-1 font-mono text-sm text-slate-400">
                Lead Developer · January 2025 – May 2026
              </p>
              <p className="mt-6 text-base leading-7 text-slate-400 sm:text-lg">
                A marketplace for the Grinnell community that reached more than
                300 students in its first week. I led development across the
                mobile app, backend, real-time messaging, authentication,
                moderation, storage, and production deployment.
              </p>
              <p className="mt-4 text-base leading-7 text-slate-400 sm:text-lg">
                It continues to run today for the Grinnell community and is
                maintained by students at the college!
              </p>
              <div className="mt-7 flex flex-wrap gap-4 font-mono text-sm">
                <Link
                  href="https://github.com/muhammadkhalid-03/Pioneer_Mart"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-emerald-300 hover:text-emerald-200"
                >
                  GitHub
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  href="/privacy-policy"
                  className="inline-flex items-center gap-1 text-emerald-300 hover:text-emerald-200"
                >
                  Privacy policy
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
            <PioneerMartCarousel />
          </div>
        </article>
      </section>

      <section className="mt-6 grid gap-6 md:grid-cols-2" aria-label="Additional work">
        <article className="surface-card accent-card p-6 sm:p-8">
          <div className="flex items-center gap-3 text-emerald-300">
            <FlaskConical className="h-5 w-5" aria-hidden="true" />
            <span className="font-mono text-sm uppercase tracking-[0.16em]">
              Research
            </span>
          </div>
          <h2 className="mt-5 text-2xl font-semibold text-white">
            OCR and multimodal language models
          </h2>
          <p className="mt-2 font-mono text-sm text-slate-400">
            Grinnell College · Summer 2025
          </p>
          <p className="mt-5 leading-7 text-slate-400">
            Built a benchmarking pipeline for post-correcting OCR across more
            than 400 pages of historical text and standardized the workflow for
            a five-person research team.
          </p>
          <div className="mt-6 font-mono text-sm">
            <Link
              href="https://anthology.ach.org/volumes/vol0003/benchmarking-methods-for-digitizing-print/10.63744@SisvHqHBH67Z.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-emerald-300 hover:text-emerald-200"
            >
              Publication
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </article>

        <article className="surface-card accent-card p-6 sm:p-8">
          <div className="flex items-center gap-3 text-emerald-300">
            <Code2 className="h-5 w-5" aria-hidden="true" />
            <span className="font-mono text-sm uppercase tracking-[0.16em]">
              Open source
            </span>
          </div>
          <h2 className="mt-5 text-2xl font-semibold text-white">
            LlamaIndex and FastMCP
          </h2>
          <p className="mt-5 leading-7 text-slate-400">
            Contributed fixes to developer tooling and JSON Schema generation
            in two widely used AI and Python projects.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 font-mono text-sm">
            <Link
              href="https://github.com/run-llama/llama_index/pull/19439"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-emerald-300 hover:text-emerald-200"
            >
              LlamaIndex PR
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="https://github.com/jlowin/fastmcp/pull/1257"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-emerald-300 hover:text-emerald-200"
            >
              FastMCP PR
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </article>

        <article className="surface-card accent-card p-6 sm:p-8 md:col-span-2">
          <div className="flex items-center gap-3 text-emerald-300">
            <GraduationCap className="h-5 w-5" aria-hidden="true" />
            <span className="font-mono text-sm uppercase tracking-[0.16em]">
              Machine learning
            </span>
          </div>
          <div className="mt-5 grid gap-5 md:grid-cols-[0.8fr_1.2fr] md:items-start">
            <div>
              <h2 className="text-2xl font-semibold text-white">
                Heartbeat time-series classification
              </h2>
              <p className="mt-2 font-mono text-sm text-slate-400">
                PyTorch · InceptionTime · scikit-learn
              </p>
            </div>
            <p className="leading-7 text-slate-400">
              Trained and evaluated an InceptionTime convolutional model for
              normal-versus-abnormal heartbeat classification, reaching 86.6%
              test accuracy and a 0.868 weighted F1 score.
            </p>
          </div>
          <div className="mt-6 font-mono text-sm">
            <Link
              href="https://github.com/muhammadkhalid-03/sta-395-final-project"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-emerald-300 hover:text-emerald-200"
            >
              GitHub
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </article>
      </section>
    </main>
  );
}
