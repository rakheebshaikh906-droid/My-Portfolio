import Reveal from './Reveal'
import { featuredProject } from '../data/projects'

export default function FeaturedProject() {
  const { title, tagline, problem, features, stack, github } = featuredProject

  return (
    <Reveal className="mb-20">
      <div className="relative rounded-2xl border border-signal-teal/25 bg-ink-900/70 overflow-hidden">
        <div className="absolute inset-0 bg-grid-fade pointer-events-none" aria-hidden="true" />

        <div className="relative p-8 lg:p-12 grid lg:grid-cols-[1.1fr_0.9fr] gap-10">
          <div>
            <span className="inline-flex items-center gap-2 font-mono text-xs text-signal-teal border border-signal-teal/30 rounded-full px-3 py-1">
              ● Featured Project
            </span>

            <h3 className="mt-5 font-display font-semibold text-3xl text-fog-100">{title}</h3>
            <p className="mt-3 text-fog-300 text-lg leading-relaxed max-w-xl">{tagline}</p>

            <p className="mt-5 text-fog-500 leading-relaxed max-w-xl">
              <span className="font-mono text-xs text-signal-teal">problem — </span>
              {problem}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {stack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs px-3 py-1.5 rounded-md bg-ink-800 border border-ink-600 text-fog-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                className="rounded-md bg-signal-teal px-5 py-2.5 font-medium text-ink-950 hover:bg-signal-teal/90 transition-colors"
              >
                View on GitHub
              </a>
            </div>
          </div>

          <div className="bg-ink-950/60 border border-ink-600/60 rounded-xl p-6">
            <p className="font-mono text-xs text-fog-700 mb-4">// key capabilities</p>
            <ul className="space-y-3">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm text-fog-300">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-signal-teal shrink-0" aria-hidden="true" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Reveal>
  )
}
