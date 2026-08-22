const CTA_LINKS = [
  { label: 'View Projects', href: '#projects', primary: true },
  { label: 'Download Résumé', href: '/resume.pdf', primary: false, download: true },
]

const SOCIAL_LINKS = [
  { label: 'GitHub', href: 'https://github.com/rakheebshaikh906-droid' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/rakheeb-shaikh-54830b380/' },
  { label: 'LeetCode', href: 'https://leetcode.com/u/rakheebshaikh906/' },
]

// Node coordinates for the signature "graph traversal" visual —
// a nod to Rakheeb's DSA focus and the Jarvis assistant's decision graph.
const NODES = [
  { id: 0, x: 40, y: 60 },
  { id: 1, x: 160, y: 30 },
  { id: 2, x: 160, y: 120 },
  { id: 3, x: 280, y: 60 },
  { id: 4, x: 280, y: 160 },
  { id: 5, x: 400, y: 100 },
  { id: 6, x: 400, y: 200 },
]

const EDGES = [
  [0, 1],
  [0, 2],
  [1, 3],
  [2, 3],
  [2, 4],
  [3, 5],
  [4, 5],
  [4, 6],
]

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-schematic bg-grid-fade pt-24 pb-16 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center w-full">
        <div>
          <p className="font-mono text-sm text-signal-teal mb-6">// software developer — full stack</p>

          <h1 className="font-display font-semibold text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.08] text-fog-100 text-balance">
            Building Scalable Software.
            <br />
            Solving Hard Problems.
          </h1>

          <p className="mt-6 text-fog-500 text-lg leading-relaxed max-w-xl">
            I'm Rakheeb Shaikh, a Java and full-stack developer with a deep focus on Data
            Structures &amp; Algorithms, React front ends, Spring Boot backends, and
            AI-powered applications.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            {CTA_LINKS.map((cta) =>
              cta.primary ? (
                <a
                  key={cta.label}
                  href={cta.href}
                  className="rounded-md bg-signal-teal px-6 py-3 font-medium text-ink-950 hover:bg-signal-teal/90 transition-colors duration-200"
                >
                  {cta.label}
                </a>
              ) : (
                <a
                  key={cta.label}
                  href={cta.href}
                  download={cta.download || undefined}
                  className="rounded-md border border-ink-500 px-6 py-3 font-medium text-fog-100 hover:border-signal-teal/50 hover:text-signal-teal transition-colors duration-200"
                >
                  {cta.label}
                </a>
              ),
            )}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-6 font-mono text-sm text-fog-500">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="hover:text-signal-teal transition-colors duration-200 underline-offset-4 hover:underline"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Signature visual: an animated graph traversal, standing in for
            both the DSA identity and Jarvis's decision-making core. */}
        <div className="relative hidden lg:flex justify-center animate-floatSlow" aria-hidden="true">
          <svg viewBox="0 0 460 240" className="w-full max-w-md">
            {EDGES.map(([a, b], i) => {
              const from = NODES[a]
              const to = NODES[b]
              return (
                <line
                  key={`${a}-${b}`}
                  x1={from.x}
                  y1={from.y}
                  x2={to.x}
                  y2={to.y}
                  stroke="#5EEAD4"
                  strokeOpacity="0.35"
                  strokeWidth="1.5"
                  strokeDasharray="240"
                  className="animate-dash"
                  style={{ animationDelay: `${i * 180}ms` }}
                />
              )
            })}
            {NODES.map((node, i) => (
              <circle
                key={node.id}
                cx={node.x}
                cy={node.y}
                r={i === 0 || i === NODES.length - 1 ? 7 : 5}
                fill={i === 0 || i === NODES.length - 1 ? '#5EEAD4' : '#111826'}
                stroke="#5EEAD4"
                strokeWidth="1.5"
                className="animate-pulseTrace"
                style={{ animationDelay: `${i * 220}ms` }}
              />
            ))}
          </svg>
          <span className="absolute -bottom-2 right-6 font-mono text-xs text-fog-700">
            traverse(graph, start) → path
          </span>
        </div>
      </div>
    </section>
  )
}
