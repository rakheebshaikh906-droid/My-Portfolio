import { useState } from 'react'
import Reveal from './Reveal'

const CONTACT_LINKS = [
  {
    label: 'Email',
    value: 'rakheebshaikh906@gmail.com',
    href: 'mailto:rakheebshaikh906@gmail.com',
  },
  {
    label: 'GitHub',
    value: 'github.com/rakheebshaikh906-droid',
    href: 'https://github.com/rakheebshaikh906-droid',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/rakheeb-shaikh-54830b380',
    href: 'https://www.linkedin.com/in/rakheeb-shaikh-54830b380/',
  },
  {
    label: 'LeetCode',
    value: 'leetcode.com/u/rakheebshaikh906',
    href: 'https://leetcode.com/u/rakheebshaikh906/',
  },
]

const FORM_ENDPOINT = ''

export default function Contact() {
  const [status, setStatus] = useState('idle')

  async function handleSubmit(e) {
    e.preventDefault()

    if (!FORM_ENDPOINT) {
      setStatus('error')
      return
    }

    setStatus('sending')

    const formData = new FormData(e.target)

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      })

      setStatus(res.ok ? 'sent' : 'error')

      if (res.ok) {
        e.target.reset()
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="px-6 py-28">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.9fr_1.1fr]">

        {/* Contact information */}
        <Reveal>
          <div className="mb-3">
            <p className="font-mono text-sm font-semibold uppercase tracking-[0.18em] text-signal-teal">
              06 <span className="text-fog-700">•</span> Contact
            </p>
          </div>

          <h2 className="mb-4 font-display text-3xl font-semibold text-fog-100 sm:text-4xl">
            Let's Build Something
          </h2>

          <p className="mb-10 max-w-md leading-relaxed text-fog-500">
            Interested in software development, Java, or full-stack
            opportunities? You can find me through the profiles below.
          </p>

          <ul className="space-y-5">
            {CONTACT_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4"
                >
                  <span className="w-16 shrink-0 font-mono text-xs uppercase tracking-[0.12em] text-fog-700">
                    {link.label}
                  </span>

                  <span className="break-all text-fog-300 transition-colors duration-200 group-hover:text-signal-teal">
                    {link.value}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-10 rounded-xl border border-ink-600/60 bg-ink-900/50 p-5">
            <p className="font-mono text-xs uppercase tracking-[0.15em] text-fog-700">
              Open to
            </p>

            <p className="mt-2 leading-relaxed text-fog-300">
              Software Development · Java · Full-Stack Development
            </p>
          </div>
        </Reveal>

        {/* Contact form */}
        <Reveal delay={100}>
          <form
            onSubmit={handleSubmit}
            className="space-y-5 rounded-xl border border-ink-600/60 bg-ink-900/60 p-7 sm:p-8"
          >
            <div>
              <p className="font-display text-xl font-medium text-fog-100">
                Send a Message
              </p>

              <p className="mt-2 text-sm leading-relaxed text-fog-500">
                Have an opportunity, project idea, or something worth
                discussing? Send a message.
              </p>
            </div>

            <div className="pt-2">
              <label
                htmlFor="name"
                className="mb-2 block font-mono text-xs text-fog-500"
              >
                Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                className="w-full rounded-md border border-ink-600 bg-ink-950 px-4 py-2.5 text-fog-100 outline-none transition-colors placeholder:text-fog-700 focus:border-signal-teal/60"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block font-mono text-xs text-fog-500"
              >
                Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="w-full rounded-md border border-ink-600 bg-ink-950 px-4 py-2.5 text-fog-100 outline-none transition-colors placeholder:text-fog-700 focus:border-signal-teal/60"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block font-mono text-xs text-fog-500"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full resize-none rounded-md border border-ink-600 bg-ink-950 px-4 py-2.5 text-fog-100 outline-none transition-colors placeholder:text-fog-700 focus:border-signal-teal/60"
                placeholder="What would you like to discuss?"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full rounded-md bg-signal-teal px-6 py-3 font-medium text-ink-950 transition-all duration-200 hover:bg-signal-teal/90 hover:shadow-[0_8px_25px_rgba(94,234,212,0.12)] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === 'sending' ? 'Sending...' : 'Send Message →'}
            </button>

            {status === 'sent' && (
              <p className="font-mono text-xs text-signal-teal">
                Message sent successfully.
              </p>
            )}

            {status === 'error' && (
              <p className="text-xs leading-relaxed text-signal-amber">
                The contact form is not connected yet. Please use one of the
                profile links to reach me directly.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  )
}