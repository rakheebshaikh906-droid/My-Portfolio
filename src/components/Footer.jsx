export default function Footer() {
  return (
    <footer className="border-t border-ink-600/60 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-xs text-fog-700">
        <p>© {new Date().getFullYear()} Rakheeb Shaikh — built with React, Vite &amp; Tailwind CSS.</p>
        <p>designed &amp; developed by Rakheeb Shaikh</p>
      </div>
    </footer>
  )
}
