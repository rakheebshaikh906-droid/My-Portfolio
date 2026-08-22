import Reveal from './Reveal'
import { journey } from '../data/skills'

export default function Journey() {
  return (
    <section id="journey" className="py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <p className="font-mono text-sm text-signal-teal mb-3">// 05 · journey</p>
          <h2 className="font-display font-semibold text-3xl text-fog-100 mb-3">
            Learning &amp; Building
          </h2>
          <p className="text-fog-500 mb-14 max-w-xl">
            No formal role yet — this is the honest path of how I got here, one build and
            one problem at a time.
          </p>
        </Reveal>

        <ol className="relative border-l border-ink-600/60 pl-8 space-y-12">
          {journey.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 90} className="relative">
              <span
                className="absolute -left-[2.32rem] top-1 h-3 w-3 rounded-full bg-ink-900 border-2 border-signal-teal"
                aria-hidden="true"
              />
              <p className="font-mono text-xs text-fog-700 mb-1">
                {String(i + 1).padStart(2, '0')}
              </p>
              <h3 className="font-display font-medium text-lg text-fog-100">{step.title}</h3>
              <p className="mt-2 text-fog-500 leading-relaxed max-w-xl">{step.detail}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
