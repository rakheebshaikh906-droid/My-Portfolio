import Reveal from './Reveal'
import { skillGroups } from '../data/skills'

export default function Skills() {
  return (
    <section
      id="skills"
      className="border-y border-ink-600/40 bg-ink-850/40 px-6 py-28"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mb-3">
            <p className="font-mono text-sm font-semibold uppercase tracking-[0.18em] text-signal-teal">
              02 <span className="text-fog-700">•</span> Skills
            </p>
          </div>

          <h2 className="mb-4 font-display text-3xl font-semibold text-fog-100 sm:text-4xl">
            Technical Toolkit
          </h2>

          <p className="mb-14 max-w-2xl leading-relaxed text-fog-500">
            Technologies and tools I use to build applications, solve
            problems, and turn ideas into working software.
          </p>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group, gi) => (
            <Reveal key={group.label} delay={gi * 90}>
              <div className="group h-full rounded-xl border border-ink-600/60 bg-ink-900/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-signal-teal/30 hover:shadow-[0_12px_40px_rgba(0,0,0,0.18)]">

                <div className="mb-5 flex items-center justify-between gap-4">
                  <h3 className="font-display text-lg font-medium text-fog-100">
                    {group.label}
                  </h3>

                  {group.comment && (
                    <span className="font-mono text-xs text-fog-700">
                      {group.comment}
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-ink-600 bg-ink-800 px-3 py-1.5 font-mono text-xs text-fog-300 transition-all duration-200 hover:-translate-y-0.5 hover:border-signal-teal/50 hover:text-signal-teal"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}