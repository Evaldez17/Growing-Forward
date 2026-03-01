import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-stone-800 text-stone-300 mt-24">
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <p className="font-display text-2xl font-bold text-warm-cream mb-3">
            Growing<span className="text-warm-amber">Forward</span>
          </p>
          <p className="text-sm text-stone-400 leading-relaxed max-w-xs">
            Mindset. Creativity. Practical protection. A community rooted in growth, not just goals.
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest text-stone-500 mb-4">Explore</p>
          <ul className="space-y-2 text-sm">
            {[
              { href: '/about', label: 'About Everett' },
              { href: '/faq', label: 'Learn the Basics' },
              { href: '/transparency', label: 'Transparency' },
              { href: '/work-with-me', label: 'Work With Me' },
              { href: '/contact', label: 'Contact' },
            ].map(l => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-warm-amber transition-colors duration-200">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest text-stone-500 mb-4">Connect</p>
          <p className="text-sm text-stone-400 leading-relaxed">
            No pressure. No pitch. Just a conversation when you're ready.
          </p>
          <Link
            href="/work-with-me"
            className="inline-block mt-4 text-sm bg-warm-amber/20 text-warm-amber border border-warm-amber/30 px-5 py-2.5 rounded-full hover:bg-warm-amber/30 transition-colors duration-200"
          >
            Talk it through →
          </Link>
        </div>
      </div>

      <div className="border-t border-stone-700 px-6 py-6 max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-stone-500">
        <p>© {new Date().getFullYear()} Growing Forward. All rights reserved.</p>
        <p>Financial services offered through Primerica Life Insurance Company.</p>
      </div>
    </footer>
  )
}
