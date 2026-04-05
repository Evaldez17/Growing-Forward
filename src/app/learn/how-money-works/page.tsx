import Link from 'next/link'

const nextSteps = [
  { label: 'Take the Quiz', href: '/quiz', desc: 'See where you stand' },
  { label: 'Financial Snapshot', href: '/snapshot', desc: 'Enter your real numbers' },
  { label: 'Budget Tool', href: '/budget-spreadsheet', desc: 'Start tracking your money' },
  { label: 'Talk it Through', href: '/work-with-me', desc: 'Have a real conversation' },
]

export default function HowMoneyWorks() {
  return (
    <div className="pt-20">

      {/* ── HEADER ── */}
      <section className="py-24 max-w-3xl mx-auto px-6">
        <div className="mb-4 flex items-center gap-2">
          <Link href="/learn" className="text-xs text-stone-400 font-body hover:text-forest transition-colors">Learn</Link>
          <span className="text-stone-300 text-xs">→</span>
          <span className="text-xs text-forest font-body">Foundation</span>
        </div>
        <p className="text-xs uppercase tracking-[0.2em] text-forest mb-4 font-body">Foundation — Topic 2 of 6</p>
        <h1 className="font-display text-5xl font-bold text-stone-800 leading-tight mb-8">How Money Works</h1>
        <div className="space-y-4 text-stone-600 font-body text-lg leading-relaxed">
          <p>A lot of stress around money comes from not understanding how it works.</p>
          <p className="font-display text-xl font-bold text-stone-800 italic">Once you understand the basics, money becomes less confusing and more manageable.</p>
          <p>At a simple level, money usually does four main things:</p>
        </div>
      </section>

      {/* ── SIMPLE EXPLANATION ── */}
      <section className="py-16 bg-warm-sand/40">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-forest mb-4 font-body">Simple Explanation</p>
          <h2 className="font-display text-3xl font-bold text-stone-800 mb-8">The four things money does</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[
              { label: 'Comes In', sub: 'Income', color: 'bg-forest/5 border-forest/20 text-forest' },
              { label: 'Goes Out', sub: 'Expenses', color: 'bg-red-50 border-red-200 text-red-500' },
              { label: 'Gets Saved', sub: 'Stability', color: 'bg-amber-50 border-amber-200 text-amber-600' },
              { label: 'Gets Invested', sub: 'Growth', color: 'bg-purple-50 border-purple-200 text-purple-600' },
            ].map(item => (
              <div key={item.label} className={`border rounded-2xl p-5 text-center ${item.color.split(' ').slice(0, 2).join(' ')}`}>
                <p className={`font-display text-lg font-bold mb-1 ${item.color.split(' ')[2]}`}>{item.label}</p>
                <p className="text-stone-500 font-body text-xs">{item.sub}</p>
              </div>
            ))}
          </div>

          <div className="bg-white border border-warm-sand rounded-2xl p-6 mb-6">
            <p className="text-xs uppercase tracking-widest text-stone-400 font-body mb-4">Think of it like a flow system</p>
            <div className="flex flex-wrap items-center gap-2 font-body text-sm">
              {['Income', 'Spending', 'Saving', 'Investing'].map((step, i, arr) => (
                <div key={step} className="flex items-center gap-2">
                  <span className="bg-forest/10 text-forest px-3 py-1.5 rounded-full font-medium">{step}</span>
                  {i < arr.length - 1 && <span className="text-stone-300">→</span>}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-stone-600 font-body leading-relaxed"><span className="font-medium text-stone-800">Spending</span> takes care of today.</p>
            <p className="text-stone-600 font-body leading-relaxed"><span className="font-medium text-stone-800">Saving</span> protects you from emergencies.</p>
            <p className="text-stone-600 font-body leading-relaxed"><span className="font-medium text-stone-800">Investing</span> helps build tomorrow.</p>
          </div>
        </div>
      </section>

      {/* ── WHY IT MATTERS ── */}
      <section className="py-16 max-w-3xl mx-auto px-6">
        <p className="text-xs uppercase tracking-[0.2em] text-forest mb-4 font-body">Why It Matters</p>
        <h2 className="font-display text-3xl font-bold text-stone-800 mb-6">Control comes before everything else.</h2>
        <p className="text-stone-600 font-body leading-relaxed mb-8">Before worrying about investing or big financial strategies, the most important step is control. Control means knowing how much money is coming in, knowing where it is going, and making intentional decisions — not being surprised by bills or debt.</p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border border-warm-sand rounded-2xl p-6">
            <p className="text-xs uppercase tracking-widest text-amber-600 mb-4 font-body">Saving is for</p>
            <ul className="space-y-2">
              {['Emergency fund', 'Short-term goals', 'Stability', 'Unexpected expenses'].map(item => (
                <li key={item} className="flex items-center gap-3 font-body text-sm text-stone-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white border border-warm-sand rounded-2xl p-6">
            <p className="text-xs uppercase tracking-widest text-purple-600 mb-4 font-body">Investing is for</p>
            <ul className="space-y-2">
              {['Retirement', 'Long-term growth', 'Financial independence', 'Future goals years away'].map(item => (
                <li key={item} className="flex items-center gap-3 font-body text-sm text-stone-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-6 font-display text-lg font-bold text-stone-800 italic">Saving protects you. Investing grows for you. Both are important, but they do different jobs.</p>
      </section>

      {/* ── SIMPLE EXAMPLE ── */}
      <section className="py-16 bg-stone-800 text-warm-cream">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-stone-400 mb-4 font-body">Simple Example</p>
          <h2 className="font-display text-3xl font-bold mb-6">Debt and interest — which side are you on?</h2>
          <p className="text-stone-400 font-body leading-relaxed mb-8">Interest can work for you or against you. When you invest, growth can help your money grow over time. When you carry high-interest debt, interest works against you and makes things more expensive.</p>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="bg-stone-700 rounded-xl p-5">
              <p className="text-xs uppercase tracking-widest text-red-400 mb-3 font-body">Interest working against you</p>
              <p className="font-body text-stone-300 text-sm leading-relaxed">High-interest debt like credit cards charges you every month you carry a balance. The longer it sits, the more it costs.</p>
            </div>
            <div className="bg-forest/20 border border-forest/30 rounded-xl p-5">
              <p className="text-xs uppercase tracking-widest text-forest mb-3 font-body">Interest working for you</p>
              <p className="font-body text-stone-300 text-sm leading-relaxed">When you invest consistently over time, growth compounds. Small amounts grow into meaningful ones given enough time.</p>
            </div>
          </div>
          <div className="bg-stone-700 rounded-xl p-5">
            <p className="text-xs uppercase tracking-widest text-stone-400 mb-3 font-body">That is why many people focus on this order</p>
            <div className="flex flex-wrap gap-2">
              {['Emergency fund first', 'Pay off high-interest debt', 'Then start investing'].map((step, i) => (
                <div key={step} className="flex items-center gap-2">
                  <span className="bg-forest/20 text-forest px-3 py-1.5 rounded-full text-xs font-body font-medium">{step}</span>
                  {i < 2 && <span className="text-stone-500 text-xs">→</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TAKEAWAY ── */}
      <section className="py-16 bg-warm-sand/40">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-forest mb-4 font-body">Growing Forward Takeaway</p>
          <div className="space-y-4 text-stone-600 font-body text-lg leading-relaxed">
            <p className="font-display text-2xl font-bold text-stone-800">Money is not just math. It is behavior, habits, and decisions repeated over time.</p>
            <p>Small decisions repeated for years usually matter more than one big decision. Understanding how money works removes a lot of fear and confusion.</p>
            <p>You do not need to know everything at once. You just need to understand the basics and keep improving over time.</p>
            <p className="font-display text-xl font-bold text-forest italic">Learn the system. Take control. Make small improvements. Keep moving forward.</p>
          </div>
        </div>
      </section>

      {/* ── NEXT STEPS ── */}
      <section className="py-24 max-w-3xl mx-auto px-6">
        <p className="text-xs uppercase tracking-[0.2em] text-forest mb-4 font-body">Next Steps</p>
        <h2 className="font-display text-3xl font-bold text-stone-800 mb-3">Want help understanding your current situation?</h2>
        <p className="text-stone-500 font-body mb-10">Clarity is the first step toward progress.</p>
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
