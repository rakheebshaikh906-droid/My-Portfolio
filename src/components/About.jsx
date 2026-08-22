import Reveal from './Reveal'

const POINTS = [
  'B.Tech in Electronics and Computer Engineering',
  '500+ LeetCode problems solved with a strong focus on Data Structures & Algorithms',
  'Full-stack development with React, Java, and Spring Boot',
  'Built AI-powered applications including Jarvis and interview-focused tools',
  'Focused on writing clean, efficient, and maintainable software',
]

export default function About() {
  return (
    <section id="about" className="px-6 py-28">
      <div className="mx-auto grid max-w-6xl items-start gap-14 md:grid-cols-[0.9fr_1.1fr]">

        <Reveal>
          <div className="mb-3">
            <p className="font-mono text-sm font-semibold uppercase tracking-[0.18em] text-signal-teal">
              01 <span className="text-fog-700">•</span> About
            </p>
          </div>

          <h2 className="font-display text-3xl font-semibold text-fog-100 sm:text-4xl">
            About Me
          </h2>

          <div className="mt-6 h-px w-16 bg-signal-teal/60" />
        </Reveal>

        <Reveal delay={100}>
          <p className="text-lg leading-relaxed text-fog-300">
            I'm an Electronics and Computer Engineering student focused on
            software development, problem solving, and building practical
            applications. My strongest foundation is in Java and Data
            Structures &amp; Algorithms, where I've solved{' '}
            <span className="font-semibold text-signal-teal">
              500+ LeetCode problems
            </span>
            .
          </p>

          <p className="mt-5 leading-relaxed text-fog-500">
            I build full-stack applications using React on the front end and
            Java with Spring Boot on the back end. I'm also interested in
            AI-powered applications and have worked on projects ranging from
            desktop automation with Jarvis to AI-focused interview tools.
          </p>

          <ul className="mt-8 space-y-4">
            {POINTS.map((point) => (
              <li
                key={point}
                className="flex items-start gap-3 text-fog-300"
              >
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-signal-teal shadow-[0_0_8px_rgba(94,234,212,0.45)]"
                  aria-hidden="true"
                />

                <span className="leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}