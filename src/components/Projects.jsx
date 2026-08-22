import Reveal from './Reveal'
import FeaturedProject from './FeaturedProject'
import ProjectCard from './ProjectCard'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="font-mono text-sm text-signal-teal mb-3">// 03 · projects</p>
          <h2 className="font-display font-semibold text-3xl text-fog-100 mb-14">
            Selected Work
          </h2>
        </Reveal>

        <FeaturedProject />

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 90}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
