import { MapPin } from "lucide-react";
import PortfolioAgent from "./components/agent/PortfolioAgent";

export default function Home() {
  return (
    <main className="page-shell flex min-h-[calc(100vh-4.5rem)] items-center py-12 sm:py-16 lg:py-20">
      <div className="grid w-full items-center gap-10 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
        <div className="mx-auto w-full max-w-md md:mx-0">
          <PortfolioAgent />
        </div>

        <div className="max-w-2xl">
          <h1 className="mb-4 font-mono text-sm uppercase tracking-[0.22em] text-emerald-300">
            Hi, I&apos;m Muhammad.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-slate-400 sm:text-lg">
            I&apos;m an engineer in the Bay Area. Most recently, I was a Founding Software Engineer at
            Coco Health, where I worked across production AI infrastructure and core backend
            systems. I like learning quickly, owning hard problems, and shipping software that
            people can depend on.
          </p>

          <div className="mt-7 rounded-2xl border border-emerald-300/15 bg-emerald-300/5 p-4">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-emerald-300">
              Curious about my work?
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Use the voice agent to ask about projects, engineering experience, technical
              interests, or what I&apos;m looking to build next.
            </p>
          </div>

          <div className="mt-6 flex items-center gap-2 font-mono text-sm text-slate-300">
            <MapPin className="h-4 w-4 text-emerald-300" aria-hidden="true" />
            <span>Based in San Francisco, California</span>
          </div>
        </div>
      </div>
    </main>
  );
}
