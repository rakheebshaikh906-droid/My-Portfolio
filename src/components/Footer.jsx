export default function Footer() {
  return (
    <footer className="border-t border-ink-600/60 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 sm:flex-row">

        <p className="font-mono text-xs text-fog-700">
          © {new Date().getFullYear()} Shaikh Abdul Rakheeb
        </p>

        <a
          href="#home"
          className="font-mono text-xs text-fog-700 transition-colors duration-200 hover:text-signal-teal"
        >
          Back to top ↑
        </a>

      </div>
    </footer>
  )
}