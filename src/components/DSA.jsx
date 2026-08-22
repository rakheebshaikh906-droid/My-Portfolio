import Reveal from './Reveal'
import { skillGroups } from '../data/skills'

const DSA_TOPICS = skillGroups.find((g) => g.label === 'Data Structures & Algorithms').items

export default function DSA() {
  return (
    <section id="dsa" className="py-28 px-6 bg-ink-850/40 border-y border-ink-600/40">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[0.8fr_1.2fr] gap-14 items-center">
        <Reveal>
          <p className="font-mono text-sm text-signal-teal mb-3">// 04 · dsa</p>
          <h2 className="font-display font-semibold text-3xl text-fog-100 mb-4">
            Problem Solving, Daily
          </h2>
          <p className="text-fog-500 leading-relaxed mb-8 max-w-md">
            DSA isn't a section of my resume — it's a habit. Every problem below represents
            time spent getting comfortable with the patterns that show up in real systems.
          </p>

          <div className="inline-flex items-baseline gap-3 rounded-xl border border-signal-teal/25 bg-ink-900/60 px-6 py-5">
            <span className="font-display font-semibold text-5xl text-signal-teal">450+</span>
            <span className="font-mono text-sm text-fog-500">
              LeetCode
              <br />
              problems solved
            </span>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://leetcode.com/u/rakheebshaikh906/"
              target="_blank"
              rel="noreferrer"
              className="rounded-md bg-signal-teal px-5 py-2.5 font-medium text-ink-950 hover:bg-signal-teal/90 transition-colors"
            >
              LeetCode Profile
            </a>
            <a
              href="https://github.com/rakheebshaikh906-droid"
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-ink-500 px-5 py-2.5 font-medium text-fog-100 hover:border-signal-teal/50 hover:text-signal-teal transition-colors"
            >
              DSA on GitHub
            </a>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <p className="font-mono text-xs text-fog-700 mb-4">// topics covered</p>
          <div className="flex flex-wrap gap-2.5">
            {DSA_TOPICS.map((topic, i) => (
              <span
                key={topic}
                className="font-mono text-xs px-3 py-2 rounded-md border border-signal-teal/20 bg-ink-900/70 text-fog-300 hover:border-signal-teal/60 hover:text-signal-teal transition-all duration-200"
                style={{ transitionDelay: `${i * 15}ms` }}
              >
                {topic}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
