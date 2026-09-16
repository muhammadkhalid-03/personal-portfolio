import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight, Mail } from "lucide-react";

const email = "muhammadkhalid200314@gmail.com";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Muhammad Khalid about software engineering opportunities.",
};

export default function ContactPage() {
  return (
    <main className="page-shell flex min-h-[calc(100vh-4.5rem)] items-center py-16 sm:py-24">
      <section className="surface-card relative w-full overflow-hidden px-6 py-12 sm:px-10 sm:py-16 lg:px-16">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-emerald-300/10 blur-3xl" />
        <div className="relative max-w-3xl">
          <h1 className="page-heading">Let&apos;s build something useful.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400 sm:text-xl">
            I&apos;m interested in engineering teams working on ambitious products
            and meaningful technical problems. If you think I could be a good
            fit, I&apos;d be glad to hear from you.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="inline-flex max-w-full items-center gap-3 rounded-xl border border-emerald-300/30 bg-emerald-300/10 px-5 py-4 font-mono text-xs text-emerald-200 sm:text-base">
              <Mail className="h-5 w-5 shrink-0" aria-hidden="true" />
              <span className="break-all">{email}</span>
            </div>
            <a href={`mailto:${email}`} className="button-primary shrink-0">
              Email me
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-4 font-mono text-sm">
            <Link
              href="https://github.com/muhammadkhalid-03"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-emerald-300 hover:text-emerald-200"
            >
              GitHub
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="https://linkedin.com/in/muhammadkhalid003"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-emerald-300 hover:text-emerald-200"
            >
              LinkedIn
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
