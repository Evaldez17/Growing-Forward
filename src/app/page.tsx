import Link from 'next/link'

export default function Home() {
  return (
    <div className="pt-20">

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-warm-cream via-warm-sand/40 to-warm-cream" />
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-5"
          style={{ backgroundImage: 'repeating-linear-gradient(45deg, #2d5a3d 0, #2d5a3d 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }}
        />

        <div className="relative max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-forest mb-6 font-body font-medium">
              Growing Forward
            </p>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-stone-800 leading-[1.05] mb-4">
              Always Be<br />
              <span className="text-forest italic">Growing</span><br />
              Forward.
            </h1>
            <p className="text-xl text-stone-500 leading-relaxed mb-3 font-body">
              Not perfectly. Not all at once. Just forward.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <div>
                <Link
                  href="/work-with-me"
                  className="inline-block bg-forest text-warm-cream px-7 py-3.5 rounded-full font-medium hover:bg-forest-dark transition-all duration-200 shadow-lg shadow-forest/20"
                >
                  Start the Conversation
                </Link>
                <p className="text-xs text-stone-400 mt-2 ml-1 font-body">Confident decisions come from clarity.</p>
              </div>
              <Link
                href="/faq"
                className="inline-block border border-stone-300 text-stone-700 px-7 py-3.5 rounded-full font-medium hover:border-forest hover:text-forest transition-all duration-200 self-start"
              >
                Learn the basics first
              </Link>
            </div>
          </div>

          {/* Right side — decorative quote block */}
          <div className="hidden md:block">
            <div className="bg-stone-800 text-warm-cream p-10 rounded-2xl relative">
              <span className="absolute top-6 left-8 font-display text-7xl text-forest opacity-50 leading-none">"</span>
              <p className="font-display text-2xl leading-relaxed mt-8 relative z-10">
                This helped me not quit.
              </p>
              <p className="text-stone-400 text-sm mt-4 font-body">— A real conversation, coming soon</p>
              <div className="mt-8 pt-8 border-t border-stone-700">
                <p className="text-stone-400 text-sm font-body">
                  No jargon. No pressure. Just honest conversations about protecting what matters.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1 — What Growing Forward Means */}
      <section className="py-24 bg-warm-sand/40">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-stone-800 mb-8">
            Growth isn't hype. It's consistency.
          </h2>
          <div className="space-y-3 text-stone-600 font-body text-lg leading-relaxed">
            <p>It's waking up and doing the next right thing.</p>
            <p>It's learning from the mess-ups.</p>
            <p>It's protecting what matters before it becomes urgent.</p>
          </div>
          <p className="mt-8 text-stone-800 font-display text-xl font-bold italic">
            Forward doesn't mean fast. It means intentional.
          </p>
        </div>
      </section>

      {/* Section 2 — Three Lanes */}
      <section className="py-24 bg-stone-800 text-warm-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Real growth has layers.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                number: '01',
                title: 'Mindset',
                color: 'border-warm-amber',
                accent: 'text-warm-amber',
                lines: ['Resilience.', 'Ownership.', 'Not quitting when it would be easier to disappear.']
              },
              {
                number: '02',
                title: 'Creativity',
                color: 'border-forest-light',
                accent: 'text-green-400',
                lines: ['Building something that matters.', 'Using your gifts.', 'Creating motion instead of waiting for motivation.']
              },
              {
                number: '03',
                title: 'Responsibility',
                color: 'border-stone-400',
                accent: 'text-stone-300',
                lines: [
                  'Taking care of your people.',
                  'Planning before panic.',
                  'Having conversations most avoid.',
                  'Right now, financial protection is one of the primary ways I help people move forward responsibly.',
                  'Not as fear. Not as hype. As preparation.'
                ]
              }
            ].map(pillar => (
              <div key={pillar.number} className={`border-t-2 ${pillar.color} pt-8`}>
                <p className={`font-display text-5xl font-bold ${pillar.accent} opacity-30 mb-4`}>{pillar.number}</p>
                <h3 className={`font-display text-2xl font-bold mb-4 ${pillar.accent}`}>{pillar.title}</h3>
                <div className="space-y-2">
                  {pillar.lines.map((line, i) => (
                    <p key={i} className="text-stone-400 leading-relaxed font-body">{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Why This Matters */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-stone-800 mb-8">
            Because life doesn't pause.
          </h2>
          <div className="space-y-3 text-stone-600 font-body text-lg leading-relaxed">
            <p>We've all seen what happens when something unexpected hits.</p>
            <p>Emotion. Confusion. Financial stress stacked on top.</p>
            <p>Growth isn't just mindset quotes — it's building a life that doesn't crumble under pressure.</p>
          </div>
        </div>
      </section>

      {/* Section 4 — What a Conversation Looks Like */}
      <section className="py-24 bg-warm-sand/40">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-stone-800">
              No pitch. Just clarity.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {[
              { step: '1', title: 'I listen and get context.' },
              { step: '2', title: 'I explain options clearly.' },
              { step: '3', title: 'You decide what makes sense.' },
            ].map(item => (
              <div key={item.step} className="text-center">
                <div className="w-14 h-14 rounded-full bg-forest/10 border border-forest/20 flex items-center justify-center mx-auto mb-6">
                  <span className="font-display text-xl font-bold text-forest">{item.step}</span>
                </div>
                <p className="font-display text-lg font-bold text-stone-800">{item.title}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-stone-500 font-body italic text-lg">
            Sometimes the right move is action. Sometimes it's simply understanding your options. Both are progress.
          </p>
        </div>
      </section>

      {/* Section 5 — Final CTA */}
      <section className="py-28 bg-forest">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-warm-cream mb-10 leading-tight">
            Build strength. Protect what matters.<br />Keep growing forward.
          </h2>
          <div className="flex flex-wrap gap-4 justify-center mb-6">
            <div className="text-center">
              <Link
                href="/work-with-me"
                className="inline-block bg-warm-cream text-forest px-8 py-4 rounded-full font-medium hover:bg-warm-sand transition-colors duration-200 shadow-xl"
              >
                Start the Conversation
              </Link>
              <p className="text-green-200/60 text-xs mt-2 font-body">Confident decisions come from clarity.</p>
            </div>
            <Link
              href="/faq"
              className="inline-block border border-green-300/40 text-green-100 px-8 py-4 rounded-full font-medium hover:border-green-300/70 transition-colors duration-200 self-start"
            >
              Learn More First
            </Link>
          </div>
          <p className="text-green-200/50 text-sm font-body italic mt-8">
            Different seasons. Different reasons. But always — keep growing forward.
          </p>
        </div>
      </section>

    </div>
  )
}
