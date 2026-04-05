import Link from 'next/link'

const nextSteps = [
  { label: 'Take the Quiz', href: '/quiz', desc: 'See where you stand' },
  { label: 'Financial Snapshot', href: '/snapshot', desc: 'Enter your real numbers' },
  { label: 'Budget Tool', href: '/budget-spreadsheet', desc: 'Start tracking your money' },
  { label: 'Talk it Through', href: '/work-with-me', desc: 'Have a real conversation' },
]

export default function PowerOfTime() {
  return (
    <div className="pt-20">

      {/* ── HEADER ── */}
      <section className="py-24 max-w-3xl mx-auto px-6">
        <div className="mb-4 flex items-center gap-2">
          <Link href="/learn" className="text-xs text-stone-400 font-body hover:text-forest transition-colors">Learn</Link>
          <span className="text-stone-300 text-xs">→</span>
          <span className="text-xs text-purple-600 font-body">Grow</span>
        </div>
        <p className="text-xs uppercase tracking-[0.2em] text-purple-600 mb-4 font-body">Grow — Topic 4 of 4</p>
        <h1 className="font-display text-5xl font-bold text-stone-800 leading-tight mb-8">The Power of Time in the Market</h1>
        <div className="space-y-4 text-stone-600 font-body text-lg leading-relaxed">
          <p>One of the most important ideas in investing is that time often matters more than timing.</p>
          <p>Many people try to wait for the perfect moment to invest. But the perfect moment is usually only obvious after it has already passed.</p>
          <p className="font-display text-xl font-bold text-stone-800 italic">Time in the market often matters more than trying to time the market.</p>
        </div>
      </section>

      {/* ── SIMPLE EXPLANATION ── */}
      <section className="py-16 bg-warm-sand/40">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-purple-600 mb-4 font-body">Simple Explanation</p>
          <h2 className="font-display text-3xl font-bold text-stone-800 mb-6">Why time matters so much.</h2>
          <p className="text-stone-600 font-body leading-relaxed mb-8">When money is invested for long periods, it has more time to grow and compound. Short-term markets move up and down. Long-term growth is usually driven by time, consistency, and patience.</p>

          <div className="bg-white border border-warm-sand rounded-2xl p-6 mb-6">
            <p className="text-xs uppercase tracking-widest text-stone-400 font-body mb-6">Growth potential over time</p>
            <div className="space-y-4">
              {[
                { label: '5 Years', width: 'w-1/5', note: 'Getting started' },
                { label: '10 Years', width: 'w-2/5', note: 'Building momentum' },
                { label: '20 Years', width: 'w-3/5', note: 'Compounding doing work' },
                { label: '30 Years', width: 'w-4/5', note: 'Significant growth potential' },
                { label: '40 Years', width: 'w-full', note: 'Time doing the heavy lifting' },
              ].map(item => (
                <div key={item.label} className="flex items-center gap-4">
                  <span className="text-xs font-body text-stone-400 w-16 flex-shrink-0">{item.label}</span>
                  <div className="flex-1 bg-warm-sand rounded-full h-4">
                    <div className={`${item.width} h-4 bg-purple-400 rounded-full`} />
                  </div>
                  <span className="text-xs font-body text-stone-400 hidden md:block w-44">{item.note}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="text-stone-500 font-body leading-relaxed italic border-l-2 border-purple-300 pl-4">
            The longer money stays invested, the more opportunity it has to grow.
          </p>
        </div>
      </section>

      {/* ── WHY IT MATTERS ── */}
      <section className="py-16 max-w-3xl mx-auto px-6">
        <p className="text-xs uppercase tracking-[0.2em] text-purple-600 mb-4 font-body">Why It Matters</p>
        <h2 className="font-display text-3xl font-bold text-stone-800 mb-6">Timing is hard. Consistency is not.</h2>
        <p className="text-stone-600 font-body leading-relaxed mb-8">Even professional investors often struggle to consistently time the market perfectly. Missing just a few of the best growth periods over many years can significantly reduce long-term results. That is why many long-term strategies focus on consistent investing over time instead of trying to jump in and out of the market.</p>

        <div className="bg-purple-50 border border-purple-200 rounded-2xl p-6">
          <p className="text-xs uppercase tracking-widest text-purple-600 mb-4 font-body">Consistent investing over time can</p>
          <ul className="space-y-3">
            {[
              'Reduce the pressure of trying to time everything perfectly',
              'Build habits that last',
              'Allow compounding to work over years',
              'Spread out risk over time',
              'Turn investing into a long-term process instead of a short-term gamble',
            ].map(item => (
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
        </div>
      </section>

      {/* ── SIMPLE EXAMPLE ── */}
      <section className="py-16 bg-stone-800 text-warm-cream">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-stone-400 mb-4 font-body">Simple Example</p>
          <h2 className="font-display text-3xl font-bold mb-6">Time is one of the biggest advantages you have.</h2>
          <p className="text-stone-400 font-body leading-relaxed mb-8">Starting earlier, even with small amounts, can often lead to better long-term results than starting later with larger amounts. Time allows compounding to do more of the work.</p>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="bg-purple-500/20 border border-purple-400/30 rounded-xl p-5">
              <p className="text-xs uppercase tracking-widest text-purple-300 mb-3 font-body">Starting early</p>
              <p className="font-display text-2xl font-bold text-warm-cream mb-1">Small amounts</p>
              <p className="font-display text-lg font-bold text-purple-300">Long time</p>
              <p className="text-stone-400 font-body text-xs mt-3">Time does most of the work. Compounding builds quietly over decades.</p>
            </div>
            <div className="bg-stone-700 rounded-xl p-5">
              <p className="text-xs uppercase tracking-widest text-stone-400 mb-3 font-body">Starting late</p>
              <p className="font-display text-2xl font-bold text-stone-300 mb-1">Larger amounts</p>
              <p className="font-display text-lg font-bold text-stone-400">Less time</p>
              <p className="text-stone-500 font-body text-xs mt-3">Still worth doing — but you have to work harder to make up what time already built.</p>
            </div>
          </div>

          <p className="text-stone-400 font-body italic border-l-2 border-purple-400/40 pl-4">
            This is often why people focus on regular contributions rather than large one-time decisions.
          </p>
        </div>
      </section>

      {/* ── TAKEAWAY ── */}
      <section className="py-16 bg-warm-sand/40">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-forest mb-4 font-body">Growing Forward Takeaway</p>
          <div className="space-y-4 text-stone-600 font-body text-lg leading-relaxed">
            <p className="font-display text-2xl font-bold text-stone-800">You do not have to be perfect. You do not have to time everything perfectly.</p>
            <p>Time, consistency, and patience are some of the most powerful tools you have. Start when you can. Stay consistent. Give your money time.</p>
            <p className="font-display text-xl font-bold text-forest italic">Time is one of the few things you cannot get back — but you can still decide how you use the time ahead.</p>
          </div>
        </div>
      </section>

      {/* ── NEXT STEPS ── */}
      <section className="py-24 max-w-3xl mx-auto px-6">
        <p className="text-xs uppercase tracking-[0.2em] text-forest mb-4 font-body">Next Steps</p>
        <h2 className="font-display text-3xl font-bold text-stone-800 mb-3">Want help figuring out where investing fits into your long-term plan?</h2>
        <p className="text-stone-500 font-body mb-10">Time is one of the few things you cannot get back, but you can still decide how you use the time ahead.</p>
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
