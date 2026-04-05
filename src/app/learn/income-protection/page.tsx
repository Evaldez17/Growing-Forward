import Link from 'next/link'

const nextSteps = [
  { label: 'Take the Quiz', href: '/quiz', desc: 'See where you stand' },
  { label: 'Financial Snapshot', href: '/snapshot', desc: 'Enter your real numbers' },
  { label: 'Budget Tool', href: '/budget-spreadsheet', desc: 'Start tracking your money' },
  { label: 'Talk it Through', href: '/work-with-me', desc: 'Have a real conversation' },
]

export default function IncomeProtection() {
  return (
    <div className="pt-20">

      {/* ── HEADER ── */}
      <section className="py-24 max-w-3xl mx-auto px-6">
        <div className="mb-4 flex items-center gap-2">
          <Link href="/learn" className="text-xs text-stone-400 font-body hover:text-forest transition-colors">Learn</Link>
          <span className="text-stone-300 text-xs">→</span>
          <span className="text-xs text-amber-600 font-body">Protect</span>
        </div>
        <p className="text-xs uppercase tracking-[0.2em] text-amber-600 mb-4 font-body">Protect — Topic 4 of 4</p>
        <h1 className="font-display text-5xl font-bold text-stone-800 leading-tight mb-8">Income Protection</h1>
        <div className="space-y-4 text-stone-600 font-body text-lg leading-relaxed">
          <p className="font-display text-2xl font-bold text-stone-800">For most people, their ability to earn an income is their largest financial asset.</p>
          <p>If income stops or is reduced unexpectedly, everything else can be affected. Income protection is about planning for what happens if income is interrupted.</p>
        </div>
      </section>

      {/* ── SIMPLE EXPLANATION ── */}
      <section className="py-16 bg-warm-sand/40">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-amber-600 mb-4 font-body">Simple Explanation</p>
          <h2 className="font-display text-3xl font-bold text-stone-800 mb-6">Your income pays for everything.</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
            {['Housing', 'Food', 'Transportation', 'Bills', 'Debt payments', 'Savings', 'Retirement', 'Family expenses', 'Everyday life'].map(item => (
              <div key={item} className="bg-white border border-warm-sand rounded-xl px-4 py-3 text-center">
                <span className="font-body text-sm text-stone-600">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-stone-500 font-body leading-relaxed italic border-l-2 border-amber-300 pl-4">
            One income disruption can affect all of these at once. That is why income protection matters.
          </p>
        </div>
      </section>

      {/* ── WHY IT MATTERS ── */}
      <section className="py-16 max-w-3xl mx-auto px-6">
        <p className="text-xs uppercase tracking-[0.2em] text-amber-600 mb-4 font-body">Why It Matters</p>
        <h2 className="font-display text-3xl font-bold text-stone-800 mb-6">Most financial plans assume income continues normally.</h2>
        <p className="text-stone-600 font-body leading-relaxed mb-8">But life can include illness, injury, job loss, reduced hours, or unexpected events. Without a plan, an income interruption can quickly lead to real financial damage.</p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border border-warm-sand rounded-2xl p-6">
            <p className="text-xs uppercase tracking-widest text-stone-400 mb-4 font-body">What can interrupt income</p>
            <ul className="space-y-2">
              {['Illness', 'Injury', 'Job loss', 'Reduced work hours', 'Unexpected life events'].map(item => (
                <li key={item} className="flex items-center gap-3 font-body text-sm text-stone-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
            <p className="text-xs uppercase tracking-widest text-red-400 mb-4 font-body">Without a plan this can mean</p>
            <ul className="space-y-2">
              {['Using emergency savings', 'Taking on debt', 'Missing payments', 'Financial stress', 'Years of progress undone'].map(item => (
                <li key={item} className="flex items-center gap-3 font-body text-sm text-stone-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-300 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── SIMPLE EXAMPLE ── */}
      <section className="py-16 bg-stone-800 text-warm-cream">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-stone-400 mb-4 font-body">Simple Example</p>
          <h2 className="font-display text-3xl font-bold mb-6">Ways people protect their income.</h2>
          <p className="text-stone-400 font-body leading-relaxed mb-8">The goal is to make sure one unexpected event does not completely derail everything. Income protection can come in several forms.</p>

          <div className="space-y-3 mb-8">
            {[
              { label: 'Emergency Fund', desc: 'The first layer — buys you time without going into debt' },
              { label: 'Life Insurance', desc: 'Replaces income for dependents if something happens to you' },
              { label: 'Disability Insurance', desc: 'Covers income if illness or injury prevents you from working' },
              { label: 'Multiple Income Sources', desc: 'Reduces reliance on a single stream' },
              { label: 'Budget Flexibility', desc: 'Keeping expenses lean creates room to absorb disruptions' },
            ].map(item => (
              <div key={item.label} className="flex items-start gap-4 bg-stone-700 rounded-xl px-5 py-4">
                <span className="w-2 h-2 rounded-full bg-amber-400 flex-shrink-0 mt-2" />
                <div>
                  <p className="font-body font-medium text-warm-cream text-sm">{item.label}</p>
                  <p className="font-body text-stone-400 text-xs mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-stone-400 font-body italic border-l-2 border-amber-400/40 pl-4">
            An emergency fund is often the first layer of income protection. It gives you time to recover from setbacks without immediately going into debt.
          </p>
        </div>
      </section>

      {/* ── TAKEAWAY ── */}
      <section className="py-16 bg-warm-sand/40">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-forest mb-4 font-body">Growing Forward Takeaway</p>
          <div className="space-y-4 text-stone-600 font-body text-lg leading-relaxed">
            <p className="font-display text-2xl font-bold text-stone-800">Your income supports your entire financial life.</p>
            <p>Protecting income is not about expecting something bad to happen. It is about being prepared so that one bad event does not undo years of progress.</p>
            <p className="font-display text-xl font-bold text-forest italic">Protect the foundation. Protect your income. Keep moving forward.</p>
          </div>
        </div>
      </section>

      {/* ── NEXT STEPS ── */}
      <section className="py-24 max-w-3xl mx-auto px-6">
        <p className="text-xs uppercase tracking-[0.2em] text-forest mb-4 font-body">Next Steps</p>
        <h2 className="font-display text-3xl font-bold text-stone-800 mb-3">Want help thinking through how protected your income currently is?</h2>
        <p className="text-stone-500 font-body mb-10">Protecting income is really about protecting your future options.</p>
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
