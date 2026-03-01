import Link from 'next/link'

export default function Contact() {
  return (
    <div className="pt-20">
      <section className="py-24 max-w-4xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-forest mb-4">Get in Touch</p>
            <h1 className="font-display text-5xl font-bold text-stone-800 leading-tight mb-6">
              Real talk.<br />
              <span className="text-forest italic">Real response.</span>
            </h1>
            <p className="text-stone-600 leading-relaxed font-body mb-10">
              Have a question that didn't fit the form? Want to connect about something else entirely? Reach out however works best for you.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-forest/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-stone-400 mb-1">Email</p>
                  <a href="mailto:growingforwardco@gmail.com" className="text-stone-700 font-body hover:text-forest transition-colors">
                    growingforwardco@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-forest/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-stone-400 mb-1">Phone / Text</p>
                  <a href="tel:3033355365" className="text-stone-700 font-body hover:text-forest transition-colors">
                    (303) 335-5365
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-forest/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-stone-400 mb-2">Follow Along</p>
                  <div className="space-y-2">
                    <a href="https://www.facebook.com/everett.valdez" target="_blank" rel="noopener noreferrer" className="block text-stone-700 font-body hover:text-forest transition-colors text-sm">
                      Facebook — Everett Valdez
                    </a>
                    <a href="https://www.tiktok.com/@everett.valdez" target="_blank" rel="noopener noreferrer" className="block text-stone-700 font-body hover:text-forest transition-colors text-sm">
                      TikTok — @everett.valdez
                    </a>
                    <a href="https://www.youtube.com/@everettavaldez" target="_blank" rel="noopener noreferrer" className="block text-stone-700 font-body hover:text-forest transition-colors text-sm">
                      YouTube — @everettavaldez
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-warm-sand/50 border border-warm-sand rounded-2xl p-8">
            <h2 className="font-display text-2xl font-bold text-stone-800 mb-2">
              Ready for a real conversation?
            </h2>
            <p className="text-stone-500 font-body text-sm mb-6">
              The Work With Me page is the best place to start if you want to talk through options.
            </p>
            <Link
              href="/work-with-me"
              className="inline-block w-full text-center bg-forest text-warm-cream px-7 py-4 rounded-full font-medium hover:bg-forest-dark transition-colors"
            >
              Start the Conversation →
            </Link>

            <div className="mt-8 pt-8 border-t border-warm-sand">
              <p className="text-xs text-stone-400 font-body leading-relaxed">
                Response time: Usually within 24 hours. I personally read and respond to every message.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
