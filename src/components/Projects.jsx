import Reveal from './Reveal'
import FeaturedProject from './FeaturedProject'
import ProjectCard from './ProjectCard'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">

        <Reveal>
          <div className="mb-3">
            <p className="font-mono text-sm font-semibold uppercase tracking-[0.18em] text-signal-teal">
              03 <span className="text-fog-700">•</span> Projects
            </p>
          </div>

          <h2 className="mb-14 font-display text-3xl font-semibold text-fog-100 sm:text-4xl">
            Selected Work
          </h2>
        </Reveal>

        <FeaturedProject />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal
              key={project.title}
              delay={i * 90}
            >
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}