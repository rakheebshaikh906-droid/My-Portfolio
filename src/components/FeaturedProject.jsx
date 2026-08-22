import Reveal from './Reveal'
import { featuredProject } from '../data/projects'

export default function FeaturedProject() {
  const { title, tagline, problem, features, stack, github } = featuredProject

  return (
    <Reveal className="mb-20">
      <div className="relative overflow-hidden rounded-2xl border border-signal-teal/25 bg-ink-900/70">

        <div
          className="pointer-events-none absolute inset-0 bg-grid-fade"
          aria-hidden="true"
        />

        <div className="relative grid gap-10 p-7 sm:p-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:p-12">

          {/* Project information */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-signal-teal/30 px-3 py-1 font-mono text-xs text-signal-teal">
              <span className="h-1.5 w-1.5 rounded-full bg-signal-teal shadow-[0_0_8px_rgba(94,234,212,0.8)]" />
              Featured Project
            </span>

            <h3 className="mt-5 font-display text-3xl font-semibold text-fog-100 sm:text-4xl">
              {title}
            </h3>

            <p className="mt-4 max-w-xl text-lg leading-relaxed text-fog-300">
              {tagline}
            </p>

            <div className="mt-7">
              <p className="mb-2 font-mono text-xs uppercase tracking-[0.15em] text-signal-teal">
                The Problem
              </p>

              <p className="max-w-xl leading-relaxed text-fog-500">
                {problem}
              </p>
            </div>

            <div className="mt-7">
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.15em] text-fog-700">
                Technologies
              </p>

              <div className="flex flex-wrap gap-2">
                {stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-ink-600 bg-ink-800 px-3 py-1.5 font-mono text-xs text-fog-300 transition-colors duration-200 hover:border-signal-teal/50 hover:text-signal-teal"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-signal-teal px-5 py-2.5 font-medium text-ink-950 transition-all duration-200 hover:-translate-y-0.5 hover:bg-signal-teal/90 hover:shadow-[0_8px_25px_rgba(94,234,212,0.15)]"
              >
                View on GitHub →
              </a>
            </div>
          </div>

          {/* Jarvis visual + capabilities */}
          <div className="relative overflow-hidden rounded-xl border border-ink-600/60 bg-ink-950/70 p-6">

            {/* Jarvis visual */}
            <div className="relative flex h-48 items-center justify-center overflow-hidden rounded-lg border border-ink-600/50 bg-ink-900/80">

              <div
                aria-hidden="true"
                className="absolute h-36 w-36 rounded-full bg-signal-teal/[0.06] blur-2xl"
              />

              <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-signal-teal/30">
                <div className="absolute h-20 w-20 rounded-full border border-signal-teal/20 animate-pulse" />

                <div className="absolute h-12 w-12 rounded-full border border-signal-teal/50 bg-signal-teal/[0.06] shadow-[0_0_35px_rgba(94,234,212,0.18)]" />

                <div className="h-3 w-3 rounded-full bg-signal-teal shadow-[0_0_20px_rgba(94,234,212,0.9)]" />
              </div>

              <div className="absolute left-4 top-4 font-mono text-[9px] tracking-[0.18em] text-fog-700">
                AI CORE
              </div>

              <div className="absolute right-4 top-4 font-mono text-[9px] text-signal-teal">
                ONLINE
              </div>

              <div className="absolute bottom-4 left-4 font-mono text-[9px] text-fog-700">
                VOICE / TEXT
              </div>

              <div className="absolute bottom-4 right-4 font-mono text-[9px] text-fog-700">
                AUTOMATION
              </div>
            </div>

            {/* Capabilities */}
            <div className="mt-7">
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.15em] text-fog-700">
                Key Capabilities
              </p>

              <ul className="space-y-3">
                {features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-fog-300"
                  >
                    <span
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-signal-teal"
                      aria-hidden="true"
                    />

                    <span className="leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  )
}