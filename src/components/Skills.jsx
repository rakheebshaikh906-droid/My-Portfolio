import Reveal from './Reveal'
import { skillGroups } from '../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 bg-ink-850/40 border-y border-ink-600/40">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="font-mono text-sm text-signal-teal mb-3">// 02 · skills</p>
          <h2 className="font-display font-semibold text-3xl text-fog-100 mb-4">
            Technical Toolkit
          </h2>
          <p className="text-fog-500 max-w-2xl mb-14">
            Grouped by where each skill actually gets used — not a proficiency meter, just
            the real toolkit.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
          {skillGroups.map((group, gi) => (
            <Reveal key={group.label} delay={gi * 90}>
              <div className="border border-ink-600/60 rounded-xl p-6 bg-ink-900/60 hover:border-signal-teal/30 transition-colors duration-300">
                <div className="flex items-baseline justify-between mb-4">
                  <h3 className="font-display font-medium text-fog-100">{group.label}</h3>
                  <span className="font-mono text-xs text-fog-700">{group.comment}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="font-mono text-xs px-3 py-1.5 rounded-md bg-ink-800 border border-ink-600 text-fog-300 hover:border-signal-teal/50 hover:text-signal-teal transition-all duration-200 hover:-translate-y-0.5"
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
