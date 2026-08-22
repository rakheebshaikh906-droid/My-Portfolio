import Reveal from './Reveal'
import { journey } from '../data/skills'

export default function Journey() {
  return (
    <section id="journey" className="px-6 py-28">
      <div className="mx-auto max-w-4xl">

        <Reveal>
          <div className="mb-3">
            <p className="font-mono text-sm font-semibold uppercase tracking-[0.18em] text-signal-teal">
              05 <span className="text-fog-700">•</span> Journey
            </p>
          </div>

          <h2 className="mb-3 font-display text-3xl font-semibold text-fog-100 sm:text-4xl">
            Learning &amp; Building
          </h2>

          <p className="mb-14 max-w-xl leading-relaxed text-fog-500">
            A continuous progression from programming fundamentals to
            building full-stack and AI-powered applications.
          </p>
        </Reveal>

        <ol className="relative border-l border-ink-600/60 pl-8">
          {journey.map((step, i) => (
            <Reveal
              as="li"
              key={step.title}
              delay={i * 90}
              className="relative pb-12 last:pb-0"
            >
              {/* Timeline node */}
              <span
                className="absolute -left-[2.32rem] top-1 flex h-3 w-3 items-center justify-center rounded-full border-2 border-signal-teal bg-ink-900 shadow-[0_0_10px_rgba(94,234,212,0.18)]"
                aria-hidden="true"
              />

              <p className="mb-2 font-mono text-xs font-medium tracking-[0.12em] text-signal-teal">
                {String(i + 1).padStart(2, '0')}
              </p>

              <h3 className="font-display text-lg font-medium text-fog-100 sm:text-xl">
                {step.title}
              </h3>

              <p className="mt-2 max-w-xl leading-relaxed text-fog-500">
                {step.detail}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}