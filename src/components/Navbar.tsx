'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/about', label: 'About' },
  { href: '/faq', label: 'Learn' },
  { href: '/resources', label: 'Resources' },
  { href: '/budget-spreadsheet', label: 'Budget Tool' },
  { href: '/quiz', label: 'Take the Quiz' },
  { href: '/snapshot', label: 'Financial Snapshot' },
  { href: '/transparency', label: 'Transparency' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-warm-cream/95 backdrop-blur-sm border-b border-warm-sand">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-display text-xl font-bold text-stone-800">
          Growing<span className="text-forest">Forward</span>
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-6">
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className={`font-body text-sm transition-colors duration-200 ${
                pathname === l.href
                  ? 'text-forest font-medium'
                  : 'text-stone-500 hover:text-stone-800'
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/work-with-me"
            className="bg-forest text-warm-cream px-5 py-2.5 rounded-full text-sm font-medium hover:bg-forest-dark transition-colors duration-200"
          >
            Talk it through
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-stone-600 hover:text-stone-800"
          aria-label="Toggle menu"
        >
          {open ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-warm-cream border-t border-warm-sand px-6 py-4 space-y-3">
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`block font-body text-sm py-2 transition-colors ${
                pathname === l.href ? 'text-forest font-medium' : 'text-stone-600 hover:text-stone-800'
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/work-with-me"
            onClick={() => setOpen(false)}
            className="block w-full text-center bg-forest text-warm-cream px-5 py-3 rounded-full text-sm font-medium hover:bg-forest-dark transition-colors mt-2"
          >
            Talk it through
          </Link>
        </div>
      )}
    </nav>
  )
}
