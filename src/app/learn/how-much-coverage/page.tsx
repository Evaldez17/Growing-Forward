import Link from 'next/link'

const nextSteps = [
  { label: 'Take the Quiz', href: '/quiz', desc: 'See where you stand' },
  { label: 'Financial Snapshot', href: '/snapshot', desc: 'Enter your real numbers' },
  { label: 'Budget Tool', href: '/budget-spreadsheet', desc: 'Start tracking your money' },
  { label: 'Talk it Through', href: '/work-with-me', desc: 'Have a real conversation' },
]

export default function HowMuchCoverage() {
  return (
    <div className="pt-20">

      {/* ── HEADER ── */}
      <section className="py-24 max-w-3xl mx-auto px-6">
        <div className="mb-4 flex items-center gap-2">
          <Link href="/learn" className="text-xs text-stone-400 font-body hover:text-forest transition-colors">Learn</Link>
          <span className="text-stone-300 text-xs">→</span>
          <span className="text-xs text-amber-600 font-body">Protect</span>
        </div>
        <p className="text-xs uppercase tracking-[0.2em] text-amber-600 mb-4 font-body">Protect — Topic 3 of 4</p>
        <h1 className="font-display text-5xl font-bold text-stone-800 leading-tight mb-8">How Much Coverage Do I Need?</h1>
        <div className="space-y-4 text-stone-600 font-body text-lg leading-relaxed">
          <p>One of the most common questions about life insurance is how much coverage someone should have.</p>
          <p className="font-display text-xl font-bold text-stone-800 italic">There is no single number that fits everyone — because everyone's situation is different.</p>
          <p>The purpose of life insurance is usually to replace income, cover debts, and help protect the people who depend on you.</p>
        </div>
      </section>

      {/* ── SIMPLE EXPLANATION ── */}
      <section className="py-16 bg-warm-sand/40">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-amber-600 mb-4 font-body">Simple Explanation</p>
          <h2 className="font-display text-3xl font-bold text-stone-800 mb-6">Things to consider when thinking about coverage</h2>
          <div className="grid sm:grid-cols-2 gap-3 mb-8">
            {[
              'Income that would need to be replaced',
              'Mortgage balance',
              'Other debts',
              'Cost of raising children',
              'College costs',
              'Final expenses',
              'Future goals for the family',
              'Existing savings or investments',
            ].map(item => (
              <div key={item} className="flex items-start gap-3 bg-white border border-warm-sand rounded-xl px-4 py-3">
                <span className="w-5 h-5 rounded-full bg-amber-100 border border-amber-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                </span>
                <span className="font-body text-sm text-stone-600">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-stone-500 font-body leading-relaxed italic border-l-2 border-amber-300 pl-4">
            Life insurance is often about protecting a plan and protecting people.
          </p>
        </div>
      </section>

      {/* ── WHY IT MATTERS ── */}
      <section className="py-16 max-w-3xl mx-auto px-6">
        <p className="text-xs uppercase tracking-[0.2em] text-amber-600 mb-4 font-body">Why It Matters</p>
        <h2 className="font-display text-3xl font-bold text-stone-800 mb-8">Two things coverage helps protect.</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
            <p className="text-xs uppercase tracking-widest text-amber-600 mb-4 font-body">Income Replacement</p>
            <p className="font-body text-stone-600 leading-relaxed text-sm">If someone depends on your income, life insurance may help replace that income for a number of years so your family can adjust and continue moving forward.</p>
          </div>
          <div className="bg-white border border-warm-sand rounded-2xl p-6">
            <p className="text-xs uppercase tracking-widest text-stone-400 mb-4 font-body">Debt & Expenses</p>
            <ul className="space-y-2">
              {['Mortgage', 'Car loans', 'Credit cards', 'Student loans', 'Final expenses', 'Medical bills'].map(item => (
                <li key={item} className="flex items-center gap-3 font-body text-sm text-stone-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-stone-300 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="text-stone-500 font-body leading-relaxed">This can help prevent family members from inheriting financial stress along with emotional stress.</p>
      </section>

      {/* ── SIMPLE EXAMPLE ── */}
      <section className="py-16 bg-stone-800 text-warm-cream">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-stone-400 mb-4 font-body">Simple Example</p>
          <h2 className="font-display text-3xl font-bold mb-6">Everyone's situation is different.</h2>
          <p className="text-stone-400 font-body leading-relaxed mb-8">That is why a needs analysis or financial snapshot can be helpful. The goal is not just to pick a random number — it is to match coverage to your actual responsibilities and goals.</p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-stone-700 rounded-xl p-5">
              <p className="text-xs uppercase tracking-widest text-stone-400 mb-3 font-body">May need less coverage</p>
              <ul className="space-y-2">
                {['Single with no dependents', 'Little to no debt', 'Strong savings and assets', 'No one relies on your income'].map(item => (
                  <li key={item} className="flex items-center gap-2 font-body text-sm text-stone-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-stone-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-amber-500/20 border border-amber-400/30 rounded-xl p-5">
              <p className="text-xs uppercase tracking-widest text-amber-300 mb-3 font-body">May need more coverage</p>
              <ul className="space-y-2">
                {['Spouse or partner depends on income', 'Kids at home', 'Mortgage or large debts', 'Want to protect family long-term'].map(item => (
                  <li key={item} className="flex items-center gap-2 font-body text-sm text-stone-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── TAKEAWAY ── */}
      <section className="py-16 bg-warm-sand/40">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-forest mb-4 font-body">Growing Forward Takeaway</p>
          <div className="space-y-4 text-stone-600 font-body text-lg leading-relaxed">
            <p className="font-display text-2xl font-bold text-stone-800">Life insurance is not about guessing. It is about understanding your situation.</p>
            <p>Protecting the people and responsibilities that matter most starts with knowing what your actual picture looks like.</p>
            <p className="font-display text-xl font-bold text-forest italic">Protection should match your life, not someone else's.</p>
          </div>
        </div>
      </section>

      {/* ── NEXT STEPS ── */}
      <section className="py-24 max-w-3xl mx-auto px-6">
        <p className="text-xs uppercase tracking-[0.2em] text-forest mb-4 font-body">Next Steps</p>
        <h2 className="font-display text-3xl font-bold text-stone-800 mb-3">Want help estimating how much coverage might make sense?</h2>
        <p className="text-stone-500 font-body mb-10">The right number usually comes from looking at your whole picture, not just one number.</p>
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
