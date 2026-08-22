import { useState } from 'react'
import Reveal from './Reveal'

const CONTACT_LINKS = [
  { label: 'Email', value: 'your.email@example.com', href: 'mailto:your.email@example.com' },
  { label: 'GitHub', value: 'github.com/rakheebshaikh906-droid', href: 'https://github.com/rakheebshaikh906-droid' },
  { label: 'LinkedIn', value: 'linkedin.com/in/your-profile', href: 'https://www.linkedin.com/in/rakheeb-shaikh-54830b380/' },
  { label: 'LeetCode', value: 'leetcode.com/your-profile', href: 'https://leetcode.com/u/rakheebshaikh906/' },
]

// TODO: Replace with your real Formspree endpoint (or other email service)
// once you've created a form at https://formspree.io — e.g. 'https://formspree.io/f/xxxxxxx'
const FORM_ENDPOINT = ''

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  async function handleSubmit(e) {
    e.preventDefault()

    if (!FORM_ENDPOINT) {
      // No backend configured yet — this keeps the UI honest instead of
      // pretending a submission succeeded.
      setStatus('error')
      return
    }

    setStatus('sending')
    const formData = new FormData(e.target)

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      })
      setStatus(res.ok ? 'sent' : 'error')
      if (res.ok) e.target.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-14">
        <Reveal>
          <p className="font-mono text-sm text-signal-teal mb-3">// 06 · contact</p>
          <h2 className="font-display font-semibold text-3xl text-fog-100 mb-4">
            Let's Build Something
          </h2>
          <p className="text-fog-500 leading-relaxed mb-10 max-w-md">
            Open to Software Development and Java Full-Stack roles. The fastest way to
            reach me is email — the links below all go somewhere real.
          </p>

          <ul className="space-y-4">
            {CONTACT_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="group flex items-baseline gap-3"
                >
                  <span className="font-mono text-xs text-fog-700 w-16 shrink-0">{link.label}</span>
                  <span className="text-fog-300 group-hover:text-signal-teal transition-colors border-b border-transparent group-hover:border-signal-teal/50">
                    {link.value}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={100}>
          <form
            onSubmit={handleSubmit}
            className="border border-ink-600/60 rounded-xl bg-ink-900/60 p-8 space-y-5"
          >
            <div>
              <label htmlFor="name" className="block font-mono text-xs text-fog-500 mb-2">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                className="w-full rounded-md bg-ink-950 border border-ink-600 px-4 py-2.5 text-fog-100 placeholder:text-fog-700 focus:border-signal-teal/60 outline-none transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-mono text-xs text-fog-500 mb-2">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="w-full rounded-md bg-ink-950 border border-ink-600 px-4 py-2.5 text-fog-100 placeholder:text-fog-700 focus:border-signal-teal/60 outline-none transition-colors"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block font-mono text-xs text-fog-500 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full rounded-md bg-ink-950 border border-ink-600 px-4 py-2.5 text-fog-100 placeholder:text-fog-700 focus:border-signal-teal/60 outline-none transition-colors resize-none"
                placeholder="What are you looking to build or discuss?"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full rounded-md bg-signal-teal px-6 py-3 font-medium text-ink-950 hover:bg-signal-teal/90 transition-colors disabled:opacity-60"
            >
              {status === 'sending' ? 'Sending…' : 'Send Message'}
            </button>

            {status === 'sent' && (
              <p className="font-mono text-xs text-signal-teal">Message sent — thank you.</p>
            )}
            {status === 'error' && (
              <p className="font-mono text-xs text-signal-amber">
                Form isn't connected yet. Email me directly, or wire up{' '}
                <a href="https://formspree.io" target="_blank" rel="noreferrer" className="underline">
                  Formspree
                </a>{' '}
                in <code className="text-fog-300">Contact.jsx</code>.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  )
}
