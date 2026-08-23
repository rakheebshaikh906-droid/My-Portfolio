const CTA_LINKS = [
  {
    label: 'View Projects',
    href: '#projects',
    primary: true,
  },
  {
    label: 'Download Resume',
    href: '/RESUME.pdf',
    primary: false,
    download: true,
  },
]

const SOCIAL_LINKS = [
  {
    label: 'GitHub',
    href: 'https://github.com/rakheebshaikh906-droid',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/rakheeb-shaikh-54830b380/',
  },
  {
    label: 'LeetCode',
    href: 'https://leetcode.com/u/rakheebshaikh906/',
  },
]

const TECH_STACK = [
  'java',
  'Spring Boot',
  'JavaScript',
  'Node.js',
  'Express.js',
  'React',
  'SQL',
]

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-schematic bg-grid-fade px-6 pb-16 pt-24"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[58%] top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-signal-teal/[0.035] blur-3xl"
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-8">

        {/* LEFT CONTENT */}
        <div className="relative z-10">

          {/* Role */}
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-signal-teal" />

            <p className="font-mono text-sm font-semibold tracking-[0.08em] text-signal-teal sm:text-base">
              Software Developer
              <span className="mx-2 text-fog-700">•</span>
              Full Stack
            </p>
          </div>

          {/* Main headline */}
          <h1 className="max-w-3xl font-display text-balance text-[2.35rem] font-semibold leading-[1.08] tracking-tight text-fog-100 sm:text-[2.8rem] lg:text-[2.9rem]">
            Building Scalable Software.
            <br />
            <span className="text-signal-teal">
              Solving Hard Problems.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-xl text-base leading-7 text-fog-500 sm:text-lg">
            I'm{' '}
            <span className="font-medium text-fog-300">
              Shaikh Abdul Rakheeb
            </span>
            , a Java and full-stack developer focused on DSA, React,
            Spring Boot, and AI-powered applications.
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            {CTA_LINKS.map((cta) => (
              <a
                key={cta.label}
                href={cta.href}
                download={cta.download || undefined}
                className={
                  cta.primary
                    ? 'rounded-md bg-signal-teal px-5 py-2.5 text-sm font-medium text-ink-950 transition-all duration-200 hover:-translate-y-0.5 hover:bg-signal-teal/90 hover:shadow-[0_8px_25px_rgba(94,234,212,0.16)]'
                    : 'rounded-md border border-ink-500 px-5 py-2.5 text-sm font-medium text-fog-100 transition-all duration-200 hover:-translate-y-0.5 hover:border-signal-teal/50 hover:text-signal-teal'
                }
              >
                {cta.label}
              </a>
            ))}
          </div>

          {/* Social links */}
          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs text-fog-500 sm:text-sm">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-200 hover:text-signal-teal"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Tech stack */}
          <div className="mt-8 flex flex-wrap items-center gap-2">
            <span className="mr-1 font-mono text-[10px] uppercase tracking-[0.14em] text-fog-700">
              Stack
            </span>

            {TECH_STACK.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-ink-600 bg-ink-900/70 px-3 py-1.5 font-mono text-[11px] text-fog-400 transition-colors duration-200 hover:border-signal-teal/40 hover:text-signal-teal"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT — JARVIS CORE */}
        <div className="relative flex min-h-[360px] items-center justify-center lg:min-h-[440px]">

          {/* Atmospheric glow */}
          <div
            aria-hidden="true"
            className="absolute h-56 w-56 rounded-full bg-signal-teal/[0.055] blur-3xl sm:h-72 sm:w-72"
          />

          <div
            className="relative h-[280px] w-[280px] sm:h-[340px] sm:w-[340px]"
            style={{ perspective: '1000px' }}
          >

            {/* Orbit 1 */}
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-signal-teal/20 sm:h-[270px] sm:w-[270px]"
              style={{
                transform:
                  'translate(-50%, -50%) rotateX(68deg) rotateZ(-18deg)',
              }}
            />

            {/* Orbit 2 */}
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 h-[195px] w-[195px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-signal-teal/15 sm:h-[240px] sm:w-[240px]"
              style={{
                transform:
                  'translate(-50%, -50%) rotateY(66deg) rotateZ(25deg)',
              }}
            />

            {/* Orbiting particles */}
            <span
              aria-hidden="true"
              className="absolute left-[8%] top-[36%] h-2 w-2 rounded-full bg-signal-teal shadow-[0_0_14px_rgba(94,234,212,0.8)] animate-pulse"
            />

            <span
              aria-hidden="true"
              className="absolute right-[9%] top-[58%] h-1.5 w-1.5 rounded-full bg-signal-teal/80 shadow-[0_0_12px_rgba(94,234,212,0.7)] animate-pulse"
              style={{ animationDelay: '500ms' }}
            />

            <span
              aria-hidden="true"
              className="absolute left-[48%] top-[8%] h-1.5 w-1.5 rounded-full bg-signal-teal/70 shadow-[0_0_12px_rgba(94,234,212,0.7)] animate-pulse"
              style={{ animationDelay: '900ms' }}
            />

            {/* Core */}
            <div
              className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 sm:h-44 sm:w-44"
              style={{ transformStyle: 'preserve-3d' }}
            >

              {/* Outer diamond */}
              <div
                className="absolute inset-0 animate-spinSlow rounded-[1.7rem] border border-signal-teal/30 bg-signal-teal/[0.025] shadow-[0_0_70px_rgba(94,234,212,0.07)]"
                style={{
                  transform: 'rotateX(58deg) rotateZ(45deg)',
                }}
              />

              {/* Inner diamond */}
              <div className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-xl border border-signal-teal/50 bg-ink-900/80 shadow-[0_0_40px_rgba(94,234,212,0.12)] sm:h-24 sm:w-24" />

              {/* Core */}
              <div className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-signal-teal/70 bg-signal-teal/[0.08] shadow-[0_0_40px_rgba(94,234,212,0.22)] sm:h-16 sm:w-16">
                <div className="h-3 w-3 rounded-full bg-signal-teal shadow-[0_0_20px_rgba(94,234,212,1)]" />
              </div>

              {/* Rings */}
              <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-signal-teal/20 sm:h-28 sm:w-28" />

              <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-signal-teal/10 sm:h-36 sm:w-36" />
            </div>
          </div>

          {/* System panel */}
          <div className="absolute left-2 top-5 hidden rounded-lg border border-ink-500/70 bg-ink-900/80 px-3 py-2 backdrop-blur-sm sm:block">
            <p className="font-mono text-[9px] tracking-wide text-fog-700">
              SYSTEM
            </p>

            <p className="mt-1 font-mono text-xs text-signal-teal">
              operational
            </p>
          </div>

          {/* Focus panel */}
          <div className="absolute bottom-5 right-2 hidden rounded-lg border border-ink-500/70 bg-ink-900/80 px-3 py-2 backdrop-blur-sm sm:block">
            <p className="font-mono text-[9px] tracking-wide text-fog-700">
              FOCUS
            </p>

            <p className="mt-1 font-mono text-xs text-fog-300">
              DSA + AI
            </p>
          </div>

          {/* Core label */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 whitespace-nowrap font-mono text-[9px] tracking-[0.18em] text-fog-700">
            JARVIS_CORE{' '}
            <span className="text-signal-teal">•</span> ONLINE
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 items-center gap-3 font-mono text-[9px] tracking-[0.2em] text-fog-700 md:flex">
        <span className="h-px w-7 bg-ink-500" />
        SCROLL
        <span className="h-px w-7 bg-ink-500" />
      </div>
    </section>
  )
}