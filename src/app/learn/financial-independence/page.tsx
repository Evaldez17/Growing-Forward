import Link from 'next/link'

const nextSteps = [
  { label: 'Take the Quiz', href: '/quiz', desc: 'See where you stand' },
  { label: 'Financial Snapshot', href: '/snapshot', desc: 'Enter your real numbers' },
  { label: 'Budget Tool', href: '/budget-spreadsheet', desc: 'Start tracking your money' },
  { label: 'Talk it Through', href: '/work-with-me', desc: 'Have a real conversation' },
]

export default function FinancialIndependence() {
  return (
    <div className="pt-20">

      {/* ── HEADER ── */}
      <section className="py-24 max-w-3xl mx-auto px-6">
        <div className="mb-4 flex items-center gap-2">
          <Link href="/learn" className="text-xs text-stone-400 font-body hover:text-forest transition-colors">Learn</Link>
          <span className="text-stone-300 text-xs">→</span>
          <span className="text-xs text-purple-600 font-body">Grow</span>
        </div>
        <p className="text-xs uppercase tracking-[0.2em] text-purple-600 mb-4 font-body">Grow — Topic 3 of 4</p>
        <h1 className="font-display text-5xl font-bold text-stone-800 leading-tight mb-8">Financial Independence</h1>
        <div className="space-y-4 text-stone-600 font-body text-lg leading-relaxed">
          <p>Financial independence means having enough income from savings, investments, or other sources that you are not completely dependent on a job to cover your basic living expenses.</p>
          <p>For some people it means retiring early. For others it simply means having more flexibility and less financial stress.</p>
          <p className="font-display text-xl font-bold text-stone-800 italic">Financial independence is really about options.</p>
        </div>
      </section>

      {/* ── SIMPLE EXPLANATION ── */}
      <section className="py-16 bg-warm-sand/40">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-purple-600 mb-4 font-body">Simple Explanation</p>
          <h2 className="font-display text-3xl font-bold text-stone-800 mb-6">Separating time from income.</h2>
          <p className="text-stone-600 font-body leading-relaxed mb-8">When your income only comes from working, your time and your income are tightly connected. Financial independence begins to separate those two things.</p>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              'Working because you want to, not because you have to',
              'Having more freedom to change careers',
              'Spending more time with family',
              'Starting a business',
              'Working fewer hours',
              'Retiring when you choose',
            ].map(item => (
              <div key={item} className="flex items-start gap-3 bg-white border border-purple-200 rounded-xl px-4 py-3">
                <span className="w-5 h-5 rounded-full bg-purple-100 border border-purple-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="font-body text-sm text-stone-600">{item}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 font-display text-lg font-bold text-stone-800 italic border-l-2 border-purple-300 pl-4">
            Financial independence is not just a number. It is a level of flexibility and control.
          </p>
        </div>
      </section>

      {/* ── WHY IT MATTERS ── */}
      <section className="py-16 max-w-3xl mx-auto px-6">
        <p className="text-xs uppercase tracking-[0.2em] text-purple-600 mb-4 font-body">Why It Matters</p>
        <h2 className="font-display text-3xl font-bold text-stone-800 mb-6">How people work toward financial independence.</h2>
        <p className="text-stone-600 font-body leading-relaxed mb-8">It usually happens slowly, not all at once. Most people move toward financial independence through consistent habits over a long period of time.</p>
        <div className="space-y-3">
          {[
            { label: 'Spend less than you earn', desc: 'The foundation everything else is built on' },
            { label: 'Pay off debt', desc: 'Remove what works against you' },
            { label: 'Build emergency savings', desc: 'Protect against setbacks' },
            { label: 'Invest consistently', desc: 'Give money time to grow' },
            { label: 'Increase income over time', desc: 'More room to save and invest' },
            { label: 'Avoid lifestyle inflation', desc: 'Let income growth go to savings, not spending' },
          ].map(item => (
            <div key={item.label} className="flex items-start gap-4 bg-purple-50 border border-purple-200 rounded-xl px-5 py-4">
              <span className="w-2 h-2 rounded-full bg-purple-400 flex-shrink-0 mt-2" />
              <div>
                <p className="font-body font-medium text-stone-800 text-sm">{item.label}</p>
                <p className="font-body text-stone-400 text-xs mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SIMPLE EXAMPLE ── */}
      <section className="py-16 bg-stone-800 text-warm-cream">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-stone-400 mb-4 font-body">Simple Example</p>
          <h2 className="font-display text-3xl font-bold mb-6">It is a long-term process.</h2>
          <p className="text-stone-400 font-body leading-relaxed mb-8">Financial independence is not usually a quick goal. It is the result of many good decisions stacked over time. The goal is not perfection — the goal is steady progress.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
            {['Consistent saving', 'Consistent investing', 'Time in the market', 'Discipline', 'Avoiding big mistakes', 'Continuing to learn'].map(item => (
              <div key={item} className="bg-stone-700 rounded-xl p-4 text-center">
                <p className="font-display font-bold text-warm-cream text-sm">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-stone-400 font-body italic border-l-2 border-purple-400/40 pl-4">
            Every step that reduces stress and increases flexibility is progress — even if full independence is still far away.
          </p>
        </div>
      </section>

      {/* ── TAKEAWAY ── */}
      <section className="py-16 bg-warm-sand/40">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-forest mb-4 font-body">Growing Forward Takeaway</p>
          <div className="space-y-4 text-stone-600 font-body text-lg leading-relaxed">
            <p className="font-display text-2xl font-bold text-stone-800">Financial independence is really about building a life where money does not control every decision.</p>
            <p>It is about options, flexibility, and freedom over time. You do not have to reach full independence overnight.</p>
            <p className="font-display text-xl font-bold text-forest italic">Financial independence is built slowly, one good decision at a time.</p>
          </div>
        </div>
      </section>

      {/* ── NEXT STEPS ── */}
      <section className="py-24 max-w-3xl mx-auto px-6">
        <p className="text-xs uppercase tracking-[0.2em] text-forest mb-4 font-body">Next Steps</p>
        <h2 className="font-display text-3xl font-bold text-stone-800 mb-3">Want help figuring out where you are and what your next steps might be?</h2>
        <p className="text-stone-500 font-body mb-10">Financial independence is built slowly, one good decision at a time.</p>
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
