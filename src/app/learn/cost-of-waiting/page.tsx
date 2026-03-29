import Link from 'next/link'

const nextSteps = [
  { label: 'Take the Quiz', href: '/quiz', desc: 'See where you stand' },
  { label: 'Financial Snapshot', href: '/snapshot', desc: 'Enter your real numbers' },
  { label: 'Budget Tool', href: '/budget-spreadsheet', desc: 'Start tracking your money' },
  { label: 'Talk it Through', href: '/work-with-me', desc: 'Have a real conversation' },
]

export default function CostOfWaiting() {
  return (
    <div className="pt-20">
      <section className="py-24 max-w-3xl mx-auto px-6">
        <div className="mb-4 flex items-center gap-2">
          <Link href="/learn" className="text-xs text-stone-400 font-body hover:text-forest transition-colors">Learn</Link>
          <span className="text-stone-300 text-xs">→</span>
          <span className="text-xs text-forest font-body">Foundation</span>
        </div>
        <p className="text-xs uppercase tracking-[0.2em] text-forest mb-4 font-body">Foundation — Topic 3 of 6</p>
        <h1 className="font-display text-5xl font-bold text-stone-800 leading-tight mb-8">The Cost of Waiting</h1>
        <div className="space-y-4 text-stone-600 font-body text-lg leading-relaxed">
          <p>A lot of people assume they can start later.</p>
          <p className="font-display text-xl font-bold text-stone-800 italic">But waiting has a cost.</p>
          <p>The longer you delay good financial habits, the harder your money has to work later to catch up.</p>
        </div>
      </section>

      {/* Simple Explanation */}
      <section className="py-16 bg-warm-sand/40">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-forest mb-4 font-body">Simple Explanation</p>
          <h2 className="font-display text-3xl font-bold text-stone-800 mb-6">Why Waiting Costs More</h2>
          <p className="text-stone-600 font-body leading-relaxed mb-8">Time is one of the most powerful tools in personal finance. When you give your money time, small consistent action can turn into meaningful progress. When you wait, you often have to contribute more, save more aggressively, or take on more stress just to get to the same place.</p>
          <div className="grid sm:grid-cols-2 gap-3">
            {['Emergency savings', 'Debt payoff', 'Investing', 'Retirement planning', 'Insurance costs', 'Financial peace of mind'].map(item => (
              <div key={item} className="flex items-center gap-3 bg-white border border-warm-sand rounded-xl px-4 py-3">
                <span className="w-1.5 h-1.5 rounded-full bg-forest flex-shrink-0" />
                <span className="font-body text-sm text-stone-600">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-16 max-w-3xl mx-auto px-6">
        <p className="text-xs uppercase tracking-[0.2em] text-forest mb-4 font-body">Why It Matters</p>
        <h2 className="font-display text-3xl font-bold text-stone-800 mb-6">Small steps beat perfect timing.</h2>
        <p className="text-stone-600 font-body leading-relaxed mb-8">A lot of people wait because they think they need the perfect plan before they begin. But progress usually comes from starting imperfectly and adjusting as you go. You do not need to do everything at once. You just need to start.</p>
        <div className="space-y-3">
          {['Saving the first $100', 'Starting the first budget', 'Looking at your debt clearly', 'Opening the first investment account', 'Getting the right protection in place'].map(item => (
            <div key={item} className="flex items-start gap-3 font-body text-stone-600">
              <span className="w-5 h-5 rounded-full bg-forest/10 border border-forest/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-3 h-3 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Simple Example */}
      <section className="py-16 bg-stone-800 text-warm-cream">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-stone-400 mb-4 font-body">Simple Example</p>
          <h2 className="font-display text-3xl font-bold mb-6">Starting at 25 vs 35.</h2>
          <p className="text-stone-400 font-body leading-relaxed mb-8">Imagine one person starts investing a modest amount each month at age 25. Another person waits until age 35 to start investing the same amount. Even if the second person is disciplined, the first person often ends up far ahead simply because they gave their money more time to grow.</p>
          <div className="grid grid-cols-3 gap-4 mb-8">
            {[
              { label: 'Insurance', detail: 'Costs more as you get older' },
              { label: 'Debt', detail: 'Grows the longer it sits' },
              { label: 'Investing', detail: 'Delayed means missed growth' },
            ].map(item => (
              <div key={item.label} className="bg-stone-700 rounded-xl p-4 text-center">
                <p className="font-display font-bold text-warm-cream mb-1 text-sm">{item.label}</p>
                <p className="text-stone-400 font-body text-xs">{item.detail}</p>
              </div>
            ))}
          </div>
          <p className="text-stone-400 font-body italic border-l-2 border-forest/40 pl-4">Waiting can feel harmless in the moment, but over time it adds up.</p>
        </div>
      </section>

      {/* Takeaway */}
      <section className="py-16 bg-warm-sand/40">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-forest mb-4 font-body">Growing Forward Takeaway</p>
          <div className="space-y-4 text-stone-600 font-body text-lg leading-relaxed">
            <p className="font-display text-2xl font-bold text-stone-800">You do not have to move fast. You do not have to move perfectly. But moving matters.</p>
            <p>The cost of waiting is often invisible until years later. Start where you are. Use what you have. Take one honest step.</p>
            <p className="font-display text-xl font-bold text-forest italic">Forward is forward.</p>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-24 max-w-3xl mx-auto px-6">
        <p className="text-xs uppercase tracking-[0.2em] text-forest mb-4 font-body">Next Steps</p>
        <h2 className="font-display text-3xl font-bold text-stone-800 mb-3">Want help figuring out where to begin?</h2>
        <p className="text-stone-500 font-body mb-10">You do not need to have it all figured out today. You just need to stop letting later steal from your future.</p>
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
