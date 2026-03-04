'use client'

import { useState } from 'react'
import Link from 'next/link'

const links = [
  { href: '/about', label: 'About' },
  { href: '/faq', label: 'Learn' },
  { href: '/resources', label: 'Resources' },
  { href: '/transparency', label: 'Transparency' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-warm-cream/90 backdrop-blur-sm border-b border-warm-sand">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-display text-xl font-bold tracking-tight text-stone-800">
          Growing<span className="text-forest">Forward</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-stone-600 hover:text-forest transition-colors duration-200 tracking-wide"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/work-with-me"
            className="text-sm bg-forest text-warm-cream px-5 py-2.5 rounded-full hover:bg-forest-dark transition-colors duration-200 tracking-wide"
          >
            Talk it through
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-stone-700 transition-transform duration-200 ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-stone-700 transition-opacity duration-200 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-stone-700 transition-transform duration-200 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden bg-warm-cream border-t border-warm-sand px-6 py-6 flex flex-col gap-4">
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-stone-700 font-medium py-1"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/work-with-me"
            onClick={() => setOpen(false)}
            className="mt-2 text-center bg-forest text-warm-cream px-5 py-3 rounded-full font-medium"
          >
            Talk it through
          </Link>
        </nav>
      )}
    </header>
  )
}
