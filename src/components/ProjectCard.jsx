export default function ProjectCard({ project }) {
  const { title, tagline, problem, features, stack, github, demo } = project

  return (
    <article className="group flex h-full flex-col rounded-xl border border-ink-600/60 bg-ink-900/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-signal-teal/40 hover:shadow-[0_16px_45px_rgba(0,0,0,0.2)]">

      {/* Header */}
      <div>
        <div className="mb-3 h-px w-8 bg-signal-teal/70 transition-all duration-300 group-hover:w-12" />

        <h3 className="font-display text-xl font-semibold text-fog-100">
          {title}
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-fog-500">
          {tagline}
        </p>
      </div>

      {/* Problem */}
      <div className="mt-5">
        <p className="mb-2 font-mono text-[11px] font-semibold uppercase tracking-[0.15em] text-signal-teal">
          Problem
        </p>

        <p className="text-sm leading-relaxed text-fog-300">
          {problem}
        </p>
      </div>

      {/* Features */}
      <div className="mt-5">
        <p className="mb-3 font-mono text-[11px] font-semibold uppercase tracking-[0.15em] text-fog-700">
          Key Features
        </p>

        <ul className="space-y-2">
          {features.slice(0, 4).map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-3 text-sm text-fog-500"
            >
              <span
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-signal-teal/70"
                aria-hidden="true"
              />

              <span className="leading-relaxed">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Tech Stack */}
      <div className="mt-6">
        <p className="mb-3 font-mono text-[11px] font-semibold uppercase tracking-[0.15em] text-fog-700">
          Technologies
        </p>

        <div className="flex flex-wrap gap-1.5">
          {stack.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-ink-600 bg-ink-800 px-2.5 py-1.5 font-mono text-[11px] text-fog-400 transition-colors duration-200 group-hover:border-ink-500"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Links */}
      <div className="mt-auto flex flex-wrap gap-3 border-t border-ink-600/60 pt-6">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-ink-500 px-4 py-2 text-sm font-medium text-fog-100 transition-all duration-200 hover:border-signal-teal/50 hover:text-signal-teal"
          >
            GitHub →
          </a>
        )}

        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-signal-teal px-4 py-2 text-sm font-medium text-ink-950 transition-all duration-200 hover:bg-signal-teal/90 hover:shadow-[0_6px_20px_rgba(94,234,212,0.12)]"
          >
            Live Demo →
          </a>
        )}

        {!github && !demo && (
          <span className="font-mono text-sm text-fog-700">
            No public links
          </span>
        )}
      </div>
    </article>
  )
}