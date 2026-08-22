import { useEffect, useState } from 'react'

const LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'DSA', href: '#dsa' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)

    onScroll()

    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const handleNav = (href) => {
    setOpen(false)

    const element = document.querySelector(href)

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled
        ? 'border-b border-ink-600/60 bg-ink-950/85 backdrop-blur-md'
        : 'bg-transparent'
        }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">

        {/* Brand */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault()
            handleNav('#home')
          }}
          className="font-display text-lg font-semibold tracking-tight text-fog-100 transition-colors duration-200 hover:text-fog-300"
        >
          Shaikh{' '}
          <span className="text-signal-teal">Abdul Rakheeb</span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-7 font-mono text-[13px] text-fog-500 md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNav(link.href)
                }}
                className="transition-colors duration-200 hover:text-signal-teal"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault()
            handleNav('#contact')
          }}
          className="hidden items-center rounded-md border border-signal-teal/40 px-4 py-2 text-sm font-medium text-signal-teal transition-all duration-200 hover:-translate-y-0.5 hover:bg-signal-teal/10 md:inline-flex"
        >
          Let's talk
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          className="-mr-2 rounded-md p-2 text-fog-100 transition-colors hover:text-signal-teal md:hidden"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            {open ? (
              <path
                d="M6 6l12 12M18 6l-12 12"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Navigation */}
      {open && (
        <div className="border-b border-ink-600/60 bg-ink-950/98 px-6 py-5 backdrop-blur-md md:hidden">
          <ul className="flex flex-col gap-1 font-mono text-sm text-fog-300">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNav(link.href)
                  }}
                  className="block rounded-md px-2 py-2.5 transition-colors hover:bg-ink-800/60 hover:text-signal-teal"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              handleNav('#contact')
            }}
            className="mt-4 block rounded-md border border-signal-teal/40 px-4 py-2.5 text-center text-sm font-medium text-signal-teal transition-colors hover:bg-signal-teal/10"
          >
            Let's talk →
          </a>
        </div>
      )}
    </header>
  )
}