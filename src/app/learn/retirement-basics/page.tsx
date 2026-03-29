import Link from 'next/link'

const nextSteps = [
  { label: 'Take the Quiz', href: '/quiz', desc: 'See where you stand' },
  { label: 'Financial Snapshot', href: '/snapshot', desc: 'Enter your real numbers' },
  { label: 'Budget Tool', href: '/budget-spreadsheet', desc: 'Start tracking your money' },
  { label: 'Talk it Through', href: '/work-with-me', desc: 'Have a real conversation' },
]

export default function RetirementBasics() {
  return (
    <div className="pt-20">
      <section className="py-24 max-w-3xl mx-auto px-6">
        <div className="mb-4 flex items-center gap-2">
          <Link href="/learn" className="text-xs text-stone-400 font-body hover:text-forest transition-colors">Learn</Link>
          <span className="text-stone-300 text-xs">→</span>
          <span className="text-xs text-purple-600 font-body">Grow</span>
        </div>
        <p className="text-xs uppercase tracking-[0.2em] text-purple-600 mb-4 font-body">Grow — Topic 2 of 4</p>
        <h1 className="font-display text-5xl font-bold text-stone-800 leading-tight mb-8">Retirement Basics</h1>
        <div className="space-y-4 text-stone-600 font-body text-lg leading-relaxed">
          <p>Retirement planning is about preparing for a future where your work is no longer your only source of income.</p>
          <p className="font-display text-xl font-bold text-stone-800 italic">At its core, retirement is not just about stopping work. It is about creating options, stability, and freedom later in life.</p>
        </div>
      </section>

      {/* Simple Explanation */}
      <section className="py-16 bg-warm-sand/40">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-purple-600 mb-4 font-body">Simple Explanation</p>
          <h2 className="font-display text-3xl font-bold text-stone-800 mb-6">Why retirement matters</h2>
          <p className="text-stone-600 font-body leading-relaxed mb-8">Most people will eventually reach a season where they want or need to work less. The question is whether their finances will support that season.</p>
          <div className="space-y-3">
            {['Life gets more expensive over time', 'You may not want to work forever', 'Health can change', 'The earlier you start, the more flexibility you may have later'].map(item => (
              <div key={item} className="flex items-start gap-3 font-body text-stone-600">
                <span className="w-5 h-5 rounded-full bg-purple-100 border border-purple-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                </span>
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 font-display text-lg font-bold text-stone-800 italic">The goal is not just to retire someday. The goal is to have choices.</p>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-16 max-w-3xl mx-auto px-6">
        <p className="text-xs uppercase tracking-[0.2em] text-purple-600 mb-4 font-body">Why It Matters</p>
        <h2 className="font-display text-3xl font-bold text-stone-800 mb-6">Start earlier than feels necessary.</h2>
        <div className="space-y-4 text-stone-600 font-body leading-relaxed mb-8">
          <p>A lot of people assume retirement is something to worry about later. But the earlier you begin, the more time your money has to grow.</p>
          <p>That does not mean you have to do a lot right away. It just means small early action can go a long way. Even modest contributions over time may grow more than people expect.</p>
        </div>
        <div className="bg-purple-50 border border-purple-200 rounded-2xl p-8">
          <p className="text-xs uppercase tracking-widest text-purple-600 mb-4 font-body">Common Retirement Building Blocks</p>
          <ul className="space-y-3">
            {['Employer-sponsored retirement plans', 'Individual retirement accounts', 'Long-term investing', 'Understanding contribution habits', 'Taking advantage of time and consistency'].map(item => (
              <li key={item} className="flex items-start gap-3 font-body text-sm text-stone-700">
                <span className="w-5 h-5 rounded-full bg-purple-100 border border-purple-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-stone-500 font-body text-sm italic">The details can vary, but the core principle stays the same: steady progress over time matters.</p>
        </div>
      </section>

      {/* Simple Example */}
      <section className="py-16 bg-stone-800 text-warm-cream">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-stone-400 mb-4 font-body">Simple Example</p>
          <h2 className="font-display text-3xl font-bold mb-6">Retirement is a freedom topic.</h2>
          <p className="text-stone-400 font-body leading-relaxed mb-8">Retirement planning is not just a financial topic. It is about building a future where you have more say over your time, your pace, and your choices. The earlier you think about that future, the more room you may have to shape it.</p>
          <div className="bg-stone-700 rounded-2xl p-6">
            <p className="text-xs uppercase tracking-widest text-stone-400 mb-4 font-body">Do not let overwhelm stop you</p>
            <p className="text-stone-300 font-body leading-relaxed text-sm">A lot of people avoid retirement planning because it feels big, complicated, or far away. But you do not have to solve all of it today. You just have to begin learning and make room for movement. Small steps matter here too.</p>
          </div>
          <p className="mt-6 text-stone-400 font-body italic border-l-2 border-purple-400/40 pl-4">The best time to start may have been earlier. The next best time is now.</p>
        </div>
      </section>

      {/* Takeaway */}
      <section className="py-16 bg-warm-sand/40">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-forest mb-4 font-body">Growing Forward Takeaway</p>
          <div className="space-y-4 text-stone-600 font-body text-lg leading-relaxed">
            <p className="font-display text-2xl font-bold text-stone-800">Retirement planning is one more way to care for your future self.</p>
            <p>It is not about perfection. It is about preparation. Give yourself time. Give yourself options. Give your future a little support now.</p>
            <p className="font-display text-xl font-bold text-forest italic">Always be growing forward. 💪</p>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-24 max-w-3xl mx-auto px-6">
        <p className="text-xs uppercase tracking-[0.2em] text-forest mb-4 font-body">Next Steps</p>
        <h2 className="font-display text-3xl font-bold text-stone-800 mb-3">Want help seeing where retirement planning fits into your overall picture?</h2>
        <p className="text-stone-500 font-body mb-10">The best time to start may have been earlier. The next best time is now.</p>
        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          {nextSteps.map(step => (
            <Link key={step.label} href={step.href} className="group flex items-center justify-between bg-warm-cream border border-warm-sand rounded-xl px-6 py-5 hover:border-forest hover:shadow-md transition-all duration-200">
              <div>
                <p className="font-display font-bold text-stone-800 group-hover:text-forest transition-colors">{step.label}</p>
                <p className="text-xs text-stone-400 font-body mt-0.5">{step.desc}</p>
              </div>
              <span className="text-stone-300 group-hover:text-forest group-hover:translate-x-1 transition-all">→</span>
            </Link>
          ))}
        </div>
        <div className="border-t border-warm-sand pt-8 flex items-center justify-between">
          <Link href="/learn" className="text-sm text-stone-400 font-body hover:text-forest transition-colors">← Back to Learn</Link>
          <p className="font-display text-sm font-bold text-forest italic">Always be growing forward. 💪</p>
        </div>
      </section>
    </div>
  )
}
