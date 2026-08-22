import Reveal from './Reveal'

const POINTS = [
  'B.Tech in Electronics and Computer Engineering',
  'Strong foundation in Java and Data Structures & Algorithms',
  'Full-stack development across React and Spring Boot',
  'Builds AI-powered applications, from Jarvis to interview practice tools',
  'Continuous, daily problem solving as a discipline, not a phase',
]

export default function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[0.9fr_1.1fr] gap-14 items-start">
        <Reveal>
          <p className="font-mono text-sm text-signal-teal mb-3">// 01 · about</p>
          <h2 className="font-display font-semibold text-3xl text-fog-100">About Me</h2>
        </Reveal>

        <Reveal delay={100}>
          <p className="text-fog-300 text-lg leading-relaxed">
            I'm an Electronics and Computer Engineering student who found that the part of
            engineering I care about most is software — specifically, the discipline of
            breaking a hard problem down until it has a clean, efficient solution. That
            instinct is what pulled me into Data Structures &amp; Algorithms, and it's the
            same instinct I bring to building full-stack products.
          </p>
          <p className="mt-5 text-fog-500 leading-relaxed">
            On the front end, I work in React. On the back end, Java and Spring Boot. In
            between, I care about the parts that don't show up in a demo: clean REST APIs,
            sensible data models, and code that reads the way it runs.
          </p>

          <ul className="mt-8 space-y-3">
            {POINTS.map((point) => (
              <li key={point} className="flex items-start gap-3 text-fog-300">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-signal-teal shrink-0" aria-hidden="true" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
