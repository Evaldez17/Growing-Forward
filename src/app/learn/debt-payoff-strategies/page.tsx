import Link from 'next/link'

const nextSteps = [
  { label: 'Take the Quiz', href: '/quiz', desc: 'See where you stand' },
  { label: 'Financial Snapshot', href: '/snapshot', desc: 'Enter your real numbers' },
  { label: 'Budget Tool', href: '/budget-spreadsheet', desc: 'Start tracking your money' },
  { label: 'Talk it Through', href: '/work-with-me', desc: 'Have a real conversation' },
]

export default function DebtPayoffStrategies() {
  return (
    <div className="pt-20">

      {/* ── HEADER ── */}
      <section className="py-24 max-w-3xl mx-auto px-6">
        <div className="mb-4 flex items-center gap-2">
          <Link href="/learn" className="text-xs text-stone-400 font-body hover:text-forest transition-colors">Learn</Link>
          <span className="text-stone-300 text-xs">→</span>
          <span className="text-xs text-blue-600 font-body">Build</span>
        </div>
        <p className="text-xs uppercase tracking-[0.2em] text-blue-600 mb-4 font-body">Build — Topic 3 of 4</p>
        <h1 className="font-display text-5xl font-bold text-stone-800 leading-tight mb-8">Debt Payoff Strategies</h1>
        <div className="space-y-4 text-stone-600 font-body text-lg leading-relaxed">
          <p>Debt is a normal part of life for many people, but high-interest debt can slow down financial progress and create stress over time.</p>
          <p className="font-display text-xl font-bold text-stone-800 italic">Paying off debt is not just about numbers. It is about freeing up income, reducing stress, and creating more room to move forward.</p>
        </div>
      </section>

      {/* ── SIMPLE EXPLANATION ── */}
      <section className="py-16 bg-warm-sand/40">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-blue-600 mb-4 font-body">Simple Explanation</p>
          <h2 className="font-display text-3xl font-bold text-stone-800 mb-8">Two common debt payoff strategies</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white border border-blue-200 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center font-display font-bold text-blue-600 text-sm">1</span>
                <p className="font-display text-lg font-bold text-stone-800">Debt Snowball</p>
              </div>
              <p className="text-xs uppercase tracking-widest text-blue-500 mb-3 font-body">Smallest balance first</p>
              <p className="font-body text-sm text-stone-600 leading-relaxed mb-4">Pay off the smallest balances first while making minimum payments on everything else. Once paid off, roll that payment into the next smallest debt.</p>
              <div className="bg-blue-50 rounded-xl p-3">
                <p className="text-xs font-body text-blue-600 font-medium">Best for: Motivation and momentum</p>
                <p className="text-xs font-body text-stone-400 mt-1">You see debts disappear faster, which helps people stay consistent.</p>
              </div>
            </div>
            <div className="bg-white border border-purple-200 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-purple-100 border border-purple-200 flex items-center justify-center font-display font-bold text-purple-600 text-sm">2</span>
                <p className="font-display text-lg font-bold text-stone-800">Debt Avalanche</p>
              </div>
              <p className="text-xs uppercase tracking-widest text-purple-500 mb-3 font-body">Highest interest rate first</p>
              <p className="font-body text-sm text-stone-600 leading-relaxed mb-4">Pay off the highest interest rate debts first while making minimum payments on everything else. This eliminates the most expensive debt first.</p>
              <div className="bg-purple-50 rounded-xl p-3">
                <p className="text-xs font-body text-purple-600 font-medium">Best for: Saving the most money</p>
                <p className="text-xs font-body text-stone-400 mt-1">Usually saves more in interest over time because the costliest debt goes first.</p>
              </div>
            </div>
          </div>
          <div className="bg-white border border-warm-sand rounded-2xl p-6">
            <p className="text-xs uppercase tracking-widest text-stone-400 mb-3 font-body">Which one is better?</p>
            <p className="font-body text-stone-600 leading-relaxed text-sm">Neither method is universally better. The best method is the one you will actually stick with. The important part is not the method — the important part is consistent progress.</p>
          </div>
        </div>
      </section>

      {/* ── WHY IT MATTERS ── */}
      <section className="py-16 max-w-3xl mx-auto px-6">
        <p className="text-xs uppercase tracking-[0.2em] text-blue-600 mb-4 font-body">Why It Matters</p>
        <h2 className="font-display text-3xl font-bold text-stone-800 mb-6">High interest debt works against you every single month.</h2>
        <div className="space-y-4 text-stone-600 font-body leading-relaxed mb-8">
          <p>High interest debt can grow quickly and make it harder to save, invest, or build stability. Paying it off is often one of the best guaranteed returns you can get — because it removes interest working against you.</p>
          <p>Removing high interest debt is like removing anchors that are slowing you down.</p>
        </div>
        <div className="grid grid-cols-3 gap-4 text-center">
          {[
            { label: 'Frees up', sub: 'Monthly income' },
            { label: 'Reduces', sub: 'Financial stress' },
            { label: 'Creates', sub: 'Room to grow' },
          ].map(item => (
            <div key={item.label} className="bg-blue-50 border border-blue-200 rounded-2xl p-5">
              <p className="font-display text-lg font-bold text-blue-600 mb-1">{item.label}</p>
              <p className="text-xs font-body text-stone-500">{item.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SIMPLE EXAMPLE ── */}
      <section className="py-16 bg-stone-800 text-warm-cream">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-stone-400 mb-4 font-body">Simple Example</p>
          <h2 className="font-display text-3xl font-bold mb-6">The snowball in action.</h2>
          <p className="text-stone-400 font-body leading-relaxed mb-8">Say you have three debts. You focus all extra money on the smallest one while paying minimums on the others. When it is gone, you roll that payment into the next one. Each payoff accelerates the next.</p>
          <div className="space-y-3 mb-8">
            {[
              { debt: 'Credit Card — $800', status: 'Pay this first', color: 'bg-forest/20 border-forest/30 text-forest' },
              { debt: 'Car Loan — $4,200', status: 'Minimum for now', color: 'bg-stone-700 border-stone-600 text-stone-400' },
              { debt: 'Student Loan — $12,000', status: 'Minimum for now', color: 'bg-stone-700 border-stone-600 text-stone-400' },
            ].map(item => (
              <div key={item.debt} className={`flex items-center justify-between border rounded-xl px-5 py-4 ${item.color.split(' ').slice(0, 2).join(' ')}`}>
                <span className="font-body text-sm text-stone-300">{item.debt}</span>
                <span className={`text-xs font-body font-medium px-3 py-1 rounded-full ${item.color.split(' ')[2]} bg-stone-600`}>{item.status}</span>
              </div>
            ))}
          </div>
          <p className="text-stone-400 font-body italic border-l-2 border-blue-400/40 pl-4">
            When the $800 card is gone, that full payment rolls into the car loan. The momentum builds with each payoff.
          </p>
        </div>
      </section>

      {/* ── TAKEAWAY ── */}
      <section className="py-16 bg-warm-sand/40">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-forest mb-4 font-body">Growing Forward Takeaway</p>
          <div className="space-y-4 text-stone-600 font-body text-lg leading-relaxed">
            <p className="font-display text-2xl font-bold text-stone-800">Debt payoff is not about shame. It is about progress and freedom.</p>
            <p>Every debt paid off increases your flexibility, reduces stress, and gives you more control over your future. Small steps and consistency matter more than perfection.</p>
            <p className="font-display text-xl font-bold text-forest italic">Debt does not disappear overnight, but progress over time changes everything.</p>
          </div>
        </div>
      </section>

      {/* ── NEXT STEPS ── */}
      <section className="py-24 max-w-3xl mx-auto px-6">
        <p className="text-xs uppercase tracking-[0.2em] text-forest mb-4 font-body">Next Steps</p>
        <h2 className="font-display text-3xl font-bold text-stone-800 mb-3">Want help building a plan for debt payoff and budgeting?</h2>
        <p className="text-stone-500 font-body mb-10">Debt does not disappear overnight, but progress over time changes everything.</p>
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
