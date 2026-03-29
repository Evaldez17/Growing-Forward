import Link from 'next/link'

const nextSteps = [
  { label: 'Take the Quiz', href: '/quiz', desc: 'See where you stand' },
  { label: 'Financial Snapshot', href: '/snapshot', desc: 'Enter your real numbers' },
  { label: 'Budget Tool', href: '/budget-spreadsheet', desc: 'Start tracking your money' },
  { label: 'Talk it Through', href: '/work-with-me', desc: 'Have a real conversation' },
]

export default function TermVsWholeLife() {
  return (
    <div className="pt-20">
      <section className="py-24 max-w-3xl mx-auto px-6">
        <div className="mb-4 flex items-center gap-2">
          <Link href="/learn" className="text-xs text-stone-400 font-body hover:text-forest transition-colors">Learn</Link>
          <span className="text-stone-300 text-xs">→</span>
          <span className="text-xs text-amber-600 font-body">Protect</span>
        </div>
        <p className="text-xs uppercase tracking-[0.2em] text-amber-600 mb-4 font-body">Protect — Topic 2 of 4</p>
        <h1 className="font-display text-5xl font-bold text-stone-800 leading-tight mb-8">Term vs Whole Life</h1>
        <div className="space-y-4 text-stone-600 font-body text-lg leading-relaxed">
          <p>One of the biggest sources of confusion in life insurance is understanding the difference between term and whole life.</p>
          <p>They are both forms of life insurance, but they are built to do different things.</p>
        </div>
      </section>

      {/* Simple Explanation */}
      <section className="py-16 bg-warm-sand/40">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-amber-600 mb-4 font-body">Simple Explanation</p>
          <h2 className="font-display text-3xl font-bold text-stone-800 mb-8">The Simple Version</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="bg-white border border-forest/20 rounded-2xl p-6">
              <p className="text-xs uppercase tracking-widest text-forest mb-3 font-body">Term Life</p>
              <p className="font-display text-lg font-bold text-stone-800 mb-4">Temporary coverage for a set number of years</p>
              <ul className="space-y-3">
                {['Usually more affordable', 'Larger coverage for lower monthly cost', 'Good fit for key years of life', 'Covers income during high-responsibility years'].map(item => (
                  <li key={item} className="flex items-start gap-3 font-body text-sm text-stone-600">
                    <span className="w-5 h-5 rounded-full bg-forest/10 border border-forest/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white border border-amber-200 rounded-2xl p-6">
              <p className="text-xs uppercase tracking-widest text-amber-600 mb-3 font-body">Whole Life</p>
              <p className="font-display text-lg font-bold text-stone-800 mb-4">Permanent coverage with a cash value component</p>
              <ul className="space-y-3">
                {['Does not expire at end of a term', 'Builds cash value over time', 'Can be used in long-term planning', 'Usually much more expensive'].map(item => (
                  <li key={item} className="flex items-start gap-3 font-body text-sm text-stone-600">
                    <span className="w-5 h-5 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-stone-500 font-body leading-relaxed">
            Understanding the difference matters because the right fit depends on your goals, your budget, and what kind of protection you actually need.
          </p>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-16 max-w-3xl mx-auto px-6">
        <p className="text-xs uppercase tracking-[0.2em] text-amber-600 mb-4 font-body">Why It Matters</p>
        <h2 className="font-display text-3xl font-bold text-stone-800 mb-6">The biggest risk is lost income — not missing cash value.</h2>
        <div className="space-y-4 text-stone-600 font-body leading-relaxed">
          <p>For many people, the biggest financial risk is not leaving behind a cash value account. The biggest financial risk is leaving behind lost income, unpaid bills, a mortgage, or family responsibilities.</p>
          <p>That is why many people focus first on affordable protection that covers the years when others depend on them most.</p>
          <p>Those key years might include raising kids, paying off a mortgage, covering major family responsibilities, or protecting income while building savings and investments.</p>
        </div>
      </section>

      {/* Simple Example */}
      <section className="py-16 bg-stone-800 text-warm-cream">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-stone-400 mb-4 font-body">Simple Example</p>
          <h2 className="font-display text-3xl font-bold mb-6">Same $500,000. Very different cost.</h2>
          <p className="text-stone-400 font-body leading-relaxed mb-8">Imagine two people both want $500,000 of life insurance. One chooses term and pays a lower monthly cost. The other chooses whole life and pays much more each month for the same death benefit.</p>
          <div className="bg-stone-700 rounded-2xl p-6 mb-6">
            <p className="text-xs uppercase tracking-widest text-stone-400 mb-4 font-body">The lower cost of term leaves more room for</p>
            <div className="grid grid-cols-2 gap-3">
              {['Emergency savings', 'Debt payoff', 'Retirement investing', 'Other financial goals'].map(item => (
                <div key={item} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-forest flex-shrink-0" />
                  <span className="font-body text-sm text-stone-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="text-stone-400 font-body text-sm italic border-l-2 border-amber-500/40 pl-4">
            This is not about saying one product is always good and the other is always bad. It is about understanding the purpose of each.
          </p>
        </div>
      </section>

      {/* Takeaway */}
      <section className="py-16 bg-warm-sand/40">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-forest mb-4 font-body">Growing Forward Takeaway</p>
          <div className="space-y-4 text-stone-600 font-body text-lg leading-relaxed">
            <p className="font-display text-2xl font-bold text-stone-800">Protection should make your life stronger, not more financially strained.</p>
            <p>The goal is not just to have insurance. The goal is to have the right kind of protection for your stage of life, your goals, and your budget.</p>
            <p className="font-display text-xl font-bold text-forest italic">Learn the difference. Understand the purpose. Then make the choice that helps you keep moving forward.</p>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-24 max-w-3xl mx-auto px-6">
        <p className="text-xs uppercase tracking-[0.2em] text-forest mb-4 font-body">Next Steps</p>
        <h2 className="font-display text-3xl font-bold text-stone-800 mb-3">Want help thinking through your options?</h2>
        <p className="text-stone-500 font-body mb-10">The right decision starts with understanding, not pressure.</p>
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
