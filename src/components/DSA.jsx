import Reveal from './Reveal'
import { skillGroups } from '../data/skills'

const DSA_GROUP = skillGroups.find(
  (group) => group.label === 'Data Structures & Algorithms'
)

const DSA_TOPICS = DSA_GROUP?.items || []

const DSA_LINKS = [
  {
    label: 'LeetCode Profile',
    href: 'https://leetcode.com/u/rakheebshaikh906/',
    primary: true,
  },
  {
    label: 'GitHub Profile',
    href: 'https://github.com/rakheebshaikh906-droid',
    primary: false,
  },
  {
    label: 'DSA Repository',
    href: 'https://github.com/rakheebshaikh906-droid/Practice-of-DSA',
    primary: false,
  },
]

export default function DSA() {
  return (
    <section
      id="dsa"
      className="border-y border-ink-600/40 bg-ink-850/40 px-6 py-28"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[0.8fr_1.2fr]">

        {/* Left */}
        <Reveal>
          <div className="mb-3">
            <p className="font-mono text-sm font-semibold uppercase tracking-[0.18em] text-signal-teal">
              04 <span className="text-fog-700">•</span> DSA
            </p>
          </div>

          <h2 className="mb-4 font-display text-3xl font-semibold text-fog-100 sm:text-4xl">
            Problem Solving, Daily
          </h2>

          <p className="mb-8 max-w-md leading-relaxed text-fog-500">
            Data Structures &amp; Algorithms is a core part of how I approach
            software development. I regularly practice problem solving to
            strengthen algorithmic thinking and understand efficient
            solutions.
          </p>

          {/* LeetCode stat */}
          <div className="inline-flex items-center gap-4 rounded-xl border border-signal-teal/25 bg-ink-900/60 px-6 py-5">
            <span className="font-display text-5xl font-semibold text-signal-teal">
              500+
            </span>

            <span className="font-mono text-sm leading-relaxed text-fog-500">
              LeetCode
              <br />
              problems solved
            </span>
          </div>

          {/* Profile links */}
          <div className="mt-8 flex flex-col gap-3">
            {DSA_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  link.primary
                    ? 'flex w-fit items-center justify-between gap-8 rounded-md bg-signal-teal px-5 py-2.5 font-medium text-ink-950 transition-all duration-200 hover:-translate-y-0.5 hover:bg-signal-teal/90 hover:shadow-[0_8px_25px_rgba(94,234,212,0.15)]'
                    : 'flex w-fit items-center justify-between gap-8 rounded-md border border-ink-500 px-5 py-2.5 font-medium text-fog-100 transition-all duration-200 hover:-translate-y-0.5 hover:border-signal-teal/50 hover:text-signal-teal'
                }
              >
                <span>{link.label}</span>
                <span aria-hidden="true">→</span>
              </a>
            ))}
          </div>
        </Reveal>

        {/* Right */}
        <Reveal delay={120}>
          <div className="rounded-2xl border border-ink-600/60 bg-ink-900/60 p-6 sm:p-8">

            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.15em] text-fog-700">
                  DSA Topics
                </p>

                <h3 className="mt-2 font-display text-xl font-medium text-fog-100">
                  Algorithms &amp; Data Structures
                </h3>
              </div>

              <div className="hidden h-10 w-10 items-center justify-center rounded-lg border border-signal-teal/20 bg-signal-teal/[0.04] sm:flex">
                <span className="font-mono text-sm text-signal-teal">
                  {'{ }'}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {DSA_TOPICS.map((topic) => (
                <span
                  key={topic}
                  className="rounded-md border border-signal-teal/20 bg-ink-950/60 px-3 py-2 font-mono text-xs text-fog-300 transition-all duration-200 hover:-translate-y-0.5 hover:border-signal-teal/60 hover:text-signal-teal"
                >
                  {topic}
                </span>
              ))}
            </div>

            <div className="mt-8 border-t border-ink-600/60 pt-6">
              <p className="font-mono text-xs leading-relaxed text-fog-700">
                Consistent practice across problem solving, algorithms,
                data structures, and dynamic programming.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}