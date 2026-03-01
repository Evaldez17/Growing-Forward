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
          <div className="space-y-2 text-sm">
            <a href="mailto:growingforwardco@gmail.com" className="block text-stone-400 hover:text-warm-amber transition-colors">
              growingforwardco@gmail.com
            </a>
            <a href="tel:3033355365" className="block text-stone-400 hover:text-warm-amber transition-colors">
              (303) 335-5365
            </a>
            <a href="https://www.instagram.com/everett.valdez" target="_blank" rel="noopener noreferrer" className="block text-stone-400 hover:text-warm-amber transition-colors">
              Instagram
            </a>
            <a href="https://www.facebook.com/everett.valdez" target="_blank" rel="noopener noreferrer" className="block text-stone-400 hover:text-warm-amber transition-colors">
              Facebook
            </a>
            <a href="https://www.tiktok.com/@everett.valdez" target="_blank" rel="noopener noreferrer" className="block text-stone-400 hover:text-warm-amber transition-colors">
              TikTok
            </a>
            <a href="https://www.youtube.com/@everettavaldez" target="_blank" rel="noopener noreferrer" className="block text-stone-400 hover:text-warm-amber transition-colors">
              YouTube
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-stone-700 px-6 py-6 max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-stone-500">
        <p>© {new Date().getFullYear()} Growing Forward. All rights reserved.</p>
        <p>Financial services offered through Primerica Life Insurance Company.</p>
      </div>
    </footer>
  )
}
