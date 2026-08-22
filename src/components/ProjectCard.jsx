export default function ProjectCard({ project }) {
  const { title, tagline, problem, features, stack, github, demo } = project

  return (
    <article className="group border border-ink-600/60 rounded-xl bg-ink-900/60 p-6 flex flex-col h-full hover:border-signal-teal/40 hover:-translate-y-1 transition-all duration-300">
      <h3 className="font-display font-medium text-xl text-fog-100">{title}</h3>
      <p className="mt-2 text-fog-500 text-sm leading-relaxed">{tagline}</p>

      <p className="mt-4 text-fog-300 text-sm leading-relaxed">
        <span className="font-mono text-xs text-signal-teal">problem — </span>
        {problem}
      </p>

      <ul className="mt-4 space-y-1.5">
        {features.slice(0, 4).map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sm text-fog-500">
            <span className="mt-1.5 h-1 w-1 rounded-full bg-fog-700 shrink-0" aria-hidden="true" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {stack.map((tech) => (
          <span
            key={tech}
            className="font-mono text-[11px] px-2 py-1 rounded bg-ink-800 border border-ink-600 text-fog-500"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-6 pt-5 border-t border-ink-600/60 flex gap-3">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-fog-100 hover:text-signal-teal transition-colors"
          >
            GitHub →
          </a>
        )}
        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-fog-100 hover:text-signal-teal transition-colors"
          >
            Live Demo →
          </a>
        )}
        {!github && !demo && (
          <span className="text-sm text-fog-700 font-mono">source private</span>
        )}
      </div>
    </article>
  )
}
