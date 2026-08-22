const CTA_LINKS = [
  { label: 'View Projects', href: '#projects', primary: true },
  { label: 'Download Résumé', href: '/resume.pdf', primary: false, download: true },
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

const TECH_STACK = ['Java', 'Spring Boot', 'React', 'SQL']

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-schematic bg-grid-fade pt-24 pb-16"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-signal-teal/[0.035] blur-3xl"
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">

        <div className="relative z-10">

          <div className="mb-7">
            <p className="font-mono text-base font-semibold uppercase tracking-[0.18em] text-signal-teal sm:text-lg">
              Software Developer{' '}
              <span className="text-fog-700">•</span> Full Stack
            </p>
          </div>

          <h1 className="font-display text-balance text-4xl font-semibold leading-[1.04] tracking-tight text-fog-100 sm:text-5xl lg:text-[4rem]">
            Building Scalable Software.
            <br />
            <span className="text-signal-teal">
              Solving Hard Problems.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-fog-500">
            I'm{' '}
            <span className="font-medium text-fog-300">
              Rakheeb Shaikh
            </span>
            , a Java and full-stack developer focused on Data Structures &
            Algorithms, React front ends, Spring Boot backends, and
            AI-powered applications.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            {CTA_LINKS.map((cta) => (
              <a
                key={cta.label}
                href={cta.href}
                download={cta.download || undefined}
                className={
                  cta.primary
                    ? 'rounded-md bg-signal-teal px-6 py-3 font-medium text-ink-950 transition-all duration-200 hover:-translate-y-0.5 hover:bg-signal-teal/90 hover:shadow-[0_8px_30px_rgba(94,234,212,0.18)]'
                    : 'rounded-md border border-ink-500 px-6 py-3 font-medium text-fog-100 transition-all duration-200 hover:-translate-y-0.5 hover:border-signal-teal/50 hover:text-signal-teal'
                }
              >
                {cta.label}
              </a>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3 font-mono text-sm text-fog-500">
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

          <div className="mt-10 flex flex-wrap items-center gap-2">
            <span className="mr-2 font-mono text-xs text-fog-700">
              currently building with
            </span>

            {TECH_STACK.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-ink-500/80 bg-ink-900/60 px-3 py-1.5 font-mono text-xs text-fog-400"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="relative flex min-h-[390px] items-center justify-center lg:min-h-[500px]">

          <div
            aria-hidden="true"
            className="absolute h-64 w-64 rounded-full bg-signal-teal/[0.06] blur-3xl sm:h-80 sm:w-80"
          />

          <div
            className="relative h-[310px] w-[310px] sm:h-[380px] sm:w-[380px]"
            style={{
              perspective: '1000px',
            }}
          >

            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-signal-teal/20 sm:h-[310px] sm:w-[310px]"
              style={{
                transform:
                  'translate(-50%, -50%) rotateX(68deg) rotateZ(-18deg)',
              }}
            />

            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-signal-teal/15 sm:h-[275px] sm:w-[275px]"
              style={{
                transform:
                  'translate(-50%, -50%) rotateY(66deg) rotateZ(25deg)',
              }}
            />

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

            <div
              className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 sm:h-48 sm:w-48"
              style={{
                transformStyle: 'preserve-3d',
              }}
            >

              <div
                className="absolute inset-0 animate-spinSlow rounded-[2rem] border border-signal-teal/30 bg-signal-teal/[0.025] shadow-[0_0_80px_rgba(94,234,212,0.08)]"
                style={{
                  transform: 'rotateX(58deg) rotateZ(45deg)',
                }}
              />

              <div
                className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-2xl border border-signal-teal/50 bg-ink-900/80 shadow-[0_0_45px_rgba(94,234,212,0.12)] sm:h-28 sm:w-28"
              />

              <div className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-signal-teal/70 bg-signal-teal/[0.08] shadow-[0_0_45px_rgba(94,234,212,0.25)] sm:h-20 sm:w-20">
                <div className="h-3 w-3 rounded-full bg-signal-teal shadow-[0_0_22px_rgba(94,234,212,1)] sm:h-4 sm:w-4" />
              </div>

              <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-signal-teal/20 sm:h-36 sm:w-36" />

              <div className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full border border-signal-teal/10 sm:h-44 sm:w-44" />
            </div>
          </div>

          <div className="absolute bottom-1 left-1/2 -translate-x-1/2 whitespace-nowrap font-mono text-[10px] tracking-[0.2em] text-fog-700 sm:text-xs">
            JARVIS_CORE{' '}
            <span className="text-signal-teal">•</span> ONLINE
          </div>

          <div className="absolute left-0 top-8 hidden rounded-lg border border-ink-500/70 bg-ink-900/80 px-3 py-2 backdrop-blur-sm sm:block">
            <p className="font-mono text-[10px] text-fog-700">
              SYSTEM
            </p>
            <p className="mt-1 font-mono text-xs text-signal-teal">
              operational
            </p>
          </div>

          <div className="absolute bottom-14 right-0 hidden rounded-lg border border-ink-500/70 bg-ink-900/80 px-3 py-2 backdrop-blur-sm sm:block">
            <p className="font-mono text-[10px] text-fog-700">
              FOCUS
            </p>
            <p className="mt-1 font-mono text-xs text-fog-300">
              DSA + AI
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-3 font-mono text-[10px] tracking-[0.2em] text-fog-700 md:flex">
        <span className="h-px w-8 bg-ink-500" />
        SCROLL TO EXPLORE
        <span className="h-px w-8 bg-ink-500" />
      </div>
    </section>
  )
}