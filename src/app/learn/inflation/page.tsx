import Link from 'next/link'

const nextSteps = [
  { label: 'Take the Quiz', href: '/quiz', desc: 'See where you stand' },
  { label: 'Financial Snapshot', href: '/snapshot', desc: 'Enter your real numbers' },
  { label: 'Budget Tool', href: '/budget-spreadsheet', desc: 'Start tracking your money' },
  { label: 'Talk it Through', href: '/work-with-me', desc: 'Have a real conversation' },
]

export default function Inflation() {
  return (
    <div className="pt-20">

      {/* ── HEADER ── */}
      <section className="py-24 max-w-3xl mx-auto px-6">
        <div className="mb-4 flex items-center gap-2">
          <Link href="/learn" className="text-xs text-stone-400 font-body hover:text-forest transition-colors">Learn</Link>
          <span className="text-stone-300 text-xs">→</span>
          <span className="text-xs text-forest font-body">Foundation</span>
        </div>
        <p className="text-xs uppercase tracking-[0.2em] text-forest mb-4 font-body">Foundation — Topic 6 of 6</p>
        <h1 className="font-display text-5xl font-bold text-stone-800 leading-tight mb-8">Inflation</h1>
        <div className="space-y-4 text-stone-600 font-body text-lg leading-relaxed">
          <p className="font-display text-2xl font-bold text-stone-800">Inflation means that over time, things usually get more expensive.</p>
          <p>That means the same amount of money often buys less in the future than it does today.</p>
        </div>
      </section>

      {/* ── SIMPLE EXPLANATION ── */}
      <section className="py-16 bg-warm-sand/40">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-forest mb-4 font-body">Simple Explanation</p>
          <h2 className="font-display text-3xl font-bold text-stone-800 mb-6">You may notice it in everyday life.</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
            {['Groceries', 'Gas', 'Rent', 'Homes', 'Cars', 'Medical costs', 'College', 'Everyday expenses'].map(item => (
              <div key={item} className="bg-white border border-warm-sand rounded-xl px-4 py-3 text-center">
                <span className="font-body text-sm text-stone-600">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-stone-600 font-body leading-relaxed">Inflation is one of the reasons why just saving money long-term may not be enough by itself.</p>
        </div>
      </section>

      {/* ── WHY IT MATTERS ── */}
      <section className="py-16 max-w-3xl mx-auto px-6">
        <p className="text-xs uppercase tracking-[0.2em] text-forest mb-4 font-body">Why It Matters</p>
        <h2 className="font-display text-3xl font-bold text-stone-800 mb-6">Money that sits still slowly loses ground.</h2>
        <div className="space-y-4 text-stone-600 font-body leading-relaxed mb-10">
          <p>If money sits without growing, inflation slowly reduces its buying power. Something that costs $100 today might cost much more years from now. That means money saved for long periods often needs to grow, not just sit.</p>
          <p>This is one reason people look at investing for long-term goals.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
            <p className="text-xs uppercase tracking-widest text-amber-600 mb-4 font-body">Saving is important for</p>
            <ul className="space-y-2">
              {['Emergency funds', 'Short-term goals', 'Stability', 'Unexpected expenses'].map(item => (
                <li key={item} className="flex items-center gap-3 font-body text-sm text-stone-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-forest/5 border border-forest/20 rounded-2xl p-6">
            <p className="text-xs uppercase tracking-widest text-forest mb-4 font-body">Long-term goals need growth</p>
            <ul className="space-y-2">
              {['Retirement', 'Financial independence', 'Beating inflation over time', 'Building lasting wealth'].map(item => (
                <li key={item} className="flex items-center gap-3 font-body text-sm text-stone-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-forest flex-shrink-0" />
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
          <h2 className="font-display text-3xl font-bold mb-6">Inflation affects income too.</h2>
          <p className="text-stone-400 font-body leading-relaxed mb-8">If income stays the same but prices go up over time, life can feel more expensive even if you are earning the same amount. That is why many people try to increase income, invest, and build assets over time.</p>

          <div className="space-y-3 mb-8">
            {[
              { label: 'Increase income over time', desc: 'Raises, side income, new skills' },
              { label: 'Invest over time', desc: 'Give money a chance to grow faster than inflation' },
              { label: 'Build assets over time', desc: 'Things that hold or grow in value' },
            ].map(item => (
              <div key={item.label} className="flex items-start gap-4 bg-stone-700 rounded-xl px-5 py-4">
                <span className="w-2 h-2 rounded-full bg-forest flex-shrink-0 mt-2" />
                <div>
                  <p className="font-body font-medium text-warm-cream text-sm">{item.label}</p>
                  <p className="font-body text-stone-400 text-xs mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-stone-400 font-body italic border-l-2 border-forest/40 pl-4">
            The goal is not just to keep up with inflation — but eventually move ahead of it.
          </p>
        </div>
      </section>

      {/* ── TAKEAWAY ── */}
      <section className="py-16 bg-warm-sand/40">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-forest mb-4 font-body">Growing Forward Takeaway</p>
          <div className="space-y-4 text-stone-600 font-body text-lg leading-relaxed">
            <p className="font-display text-2xl font-bold text-stone-800">Inflation is a quiet force that slowly changes the value of money over time.</p>
            <p>Understanding inflation helps explain why saving, investing, and long-term planning matter. It is not about fear. It is about understanding the system and making smart long-term decisions.</p>
            <p className="font-display text-xl font-bold text-forest italic">Understanding how money changes over time helps you make better decisions today.</p>
          </div>
        </div>
      </section>

      {/* ── NEXT STEPS ── */}
      <section className="py-24 max-w-3xl mx-auto px-6">
        <p className="text-xs uppercase tracking-[0.2em] text-forest mb-4 font-body">Next Steps</p>
        <h2 className="font-display text-3xl font-bold text-stone-800 mb-3">Want help building a plan that considers saving, investing, and long-term goals?</h2>
        <p className="text-stone-500 font-body mb-10">Understanding how money changes over time helps you make better decisions today.</p>
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
