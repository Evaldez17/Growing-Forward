import Link from 'next/link'

const nextSteps = [
  { label: 'Take the Quiz', href: '/quiz', desc: 'See where you stand' },
  { label: 'Financial Snapshot', href: '/snapshot', desc: 'Enter your real numbers' },
  { label: 'Budget Tool', href: '/budget-spreadsheet', desc: 'Start tracking your money' },
  { label: 'Talk it Through', href: '/work-with-me', desc: 'Have a real conversation' },
]

export default function CompoundInterest() {
  return (
    <div className="pt-20">

      {/* ── HEADER ── */}
      <section className="py-24 max-w-3xl mx-auto px-6">
        <div className="mb-4 flex items-center gap-2">
          <Link href="/learn" className="text-xs text-stone-400 font-body hover:text-forest transition-colors">Learn</Link>
          <span className="text-stone-300 text-xs">→</span>
          <span className="text-xs text-forest font-body">Foundation</span>
        </div>
        <p className="text-xs uppercase tracking-[0.2em] text-forest mb-4 font-body">Foundation — Topic 5 of 6</p>
        <h1 className="font-display text-5xl font-bold text-stone-800 leading-tight mb-8">Compound Interest</h1>
        <div className="space-y-4 text-stone-600 font-body text-lg leading-relaxed">
          <p>Compound interest is one of the most powerful ideas in personal finance.</p>
          <p className="font-display text-xl font-bold text-stone-800 italic">It simply means that your money can earn money — and then that money can also earn money.</p>
          <p>Over time, this can create growth that starts slow but becomes much bigger later.</p>
        </div>
      </section>

      {/* ── SIMPLE EXPLANATION ── */}
      <section className="py-16 bg-warm-sand/40">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-forest mb-4 font-body">Simple Explanation</p>
          <h2 className="font-display text-3xl font-bold text-stone-800 mb-6">How compound interest works</h2>
          <p className="text-stone-600 font-body leading-relaxed mb-8">If you save or invest money and it grows, that growth gets added to your total. Then next year, you earn growth not only on your original money, but also on the growth from previous years. This creates a compounding effect.</p>

          <div className="bg-white border border-warm-sand rounded-2xl p-6 mb-6">
            <p className="text-xs uppercase tracking-widest text-stone-400 font-body mb-6">The compounding effect over time</p>
            <div className="space-y-3">
              {[
                { year: 'Year 1', bar: 'w-1/6', amount: 'Original amount grows a little' },
                { year: 'Year 5', bar: 'w-2/6', amount: 'Growth earning growth' },
                { year: 'Year 10', bar: 'w-3/6', amount: 'Momentum building' },
                { year: 'Year 20', bar: 'w-5/6', amount: 'Compounding doing heavy lifting' },
                { year: 'Year 30', bar: 'w-full', amount: 'Much bigger than expected' },
              ].map(item => (
                <div key={item.year} className="flex items-center gap-4">
                  <span className="text-xs font-body text-stone-400 w-16 flex-shrink-0">{item.year}</span>
                  <div className="flex-1 bg-warm-sand rounded-full h-3">
                    <div className={`${item.bar} h-3 bg-forest rounded-full transition-all`} />
                  </div>
                  <span className="text-xs font-body text-stone-500 hidden md:block w-48">{item.amount}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="text-stone-500 font-body leading-relaxed italic border-l-2 border-forest/30 pl-4">
            Like a snowball rolling downhill — it starts small, but it can grow as it goes.
          </p>
        </div>
      </section>

      {/* ── WHY IT MATTERS ── */}
      <section className="py-16 max-w-3xl mx-auto px-6">
        <p className="text-xs uppercase tracking-[0.2em] text-forest mb-4 font-body">Why It Matters</p>
        <h2 className="font-display text-3xl font-bold text-stone-800 mb-6">Time matters more than amount.</h2>
        <div className="space-y-4 text-stone-600 font-body leading-relaxed mb-8">
          <p>Compound interest works best with time. The longer money has to grow, the more powerful compounding becomes.</p>
          <p>This is why starting earlier often matters more than starting with a large amount. Small consistent amounts over a long time can grow more than large amounts invested for only a short time.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-forest/5 border border-forest/20 rounded-2xl p-6 text-center">
            <p className="font-display text-4xl font-bold text-forest mb-2">Early</p>
            <p className="text-xs uppercase tracking-widest text-stone-400 font-body mb-3">Small amounts, long time</p>
            <p className="font-body text-sm text-stone-600 leading-relaxed">Consistency and patience let compounding do the heavy lifting over decades.</p>
          </div>
          <div className="bg-warm-sand/50 border border-warm-sand rounded-2xl p-6 text-center">
            <p className="font-display text-4xl font-bold text-stone-400 mb-2">Late</p>
            <p className="text-xs uppercase tracking-widest text-stone-400 font-body mb-3">Larger amounts, less time</p>
            <p className="font-body text-sm text-stone-600 leading-relaxed">Still valuable, but you have to work harder to catch up what time already built.</p>
          </div>
        </div>
      </section>

      {/* ── SIMPLE EXAMPLE ── */}
      <section className="py-16 bg-stone-800 text-warm-cream">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-stone-400 mb-4 font-body">Simple Example</p>
          <h2 className="font-display text-3xl font-bold mb-6">Compound interest can work for you or against you.</h2>
          <p className="text-stone-400 font-body leading-relaxed mb-8">Many people worry about finding the perfect time to invest. But often, consistency matters more than perfect timing. Regular contributions over many years can be more important than trying to guess the perfect moment.</p>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-forest/20 border border-forest/30 rounded-xl p-5">
              <p className="text-xs uppercase tracking-widest text-forest mb-3 font-body">Working for you</p>
              <p className="font-body text-stone-300 text-sm leading-relaxed">When you invest consistently, growth compounds year after year. Your money builds on itself.</p>
            </div>
            <div className="bg-red-900/20 border border-red-800/30 rounded-xl p-5">
              <p className="text-xs uppercase tracking-widest text-red-400 mb-3 font-body">Working against you</p>
              <p className="font-body text-stone-300 text-sm leading-relaxed">High-interest debt compounds too. The amount owed can grow faster than people expect if left unpaid.</p>
            </div>
          </div>

          <p className="text-stone-400 font-body italic border-l-2 border-forest/40 pl-4">
            Compound interest rewards patience and consistency. That is it. No secret formula needed.
          </p>
        </div>
      </section>

      {/* ── TAKEAWAY ── */}
      <section className="py-16 bg-warm-sand/40">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-forest mb-4 font-body">Growing Forward Takeaway</p>
          <div className="space-y-4 text-stone-600 font-body text-lg leading-relaxed">
            <p className="font-display text-2xl font-bold text-stone-800">Compound interest is not about getting rich overnight.</p>
            <p>It is about small consistent progress over time. Start small. Be consistent. Give your money time.</p>
            <p className="font-display text-xl font-bold text-forest italic">Time and consistency can do more than most people expect.</p>
          </div>
        </div>
      </section>

      {/* ── NEXT STEPS ── */}
      <section className="py-24 max-w-3xl mx-auto px-6">
        <p className="text-xs uppercase tracking-[0.2em] text-forest mb-4 font-body">Next Steps</p>
        <h2 className="font-display text-3xl font-bold text-stone-800 mb-3">Want to see where saving and investing fits into your plan?</h2>
        <p className="text-stone-500 font-body mb-10">Small steps done consistently can turn into big changes over time.</p>
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
