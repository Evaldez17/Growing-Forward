import Link from 'next/link'

const nextSteps = [
  { label: 'Take the Quiz', href: '/quiz', desc: 'See where you stand' },
  { label: 'Financial Snapshot', href: '/snapshot', desc: 'Enter your real numbers' },
  { label: 'Budget Tool', href: '/budget-spreadsheet', desc: 'Start tracking your money' },
  { label: 'Talk it Through', href: '/work-with-me', desc: 'Have a real conversation' },
]

export default function BudgetingBasics() {
  return (
    <div className="pt-20">
      <section className="py-24 max-w-3xl mx-auto px-6">
        <div className="mb-4 flex items-center gap-2">
          <Link href="/learn" className="text-xs text-stone-400 font-body hover:text-forest transition-colors">Learn</Link>
          <span className="text-stone-300 text-xs">→</span>
          <span className="text-xs text-blue-600 font-body">Build</span>
        </div>
        <p className="text-xs uppercase tracking-[0.2em] text-blue-600 mb-4 font-body">Build — Topic 2 of 4</p>
        <h1 className="font-display text-5xl font-bold text-stone-800 leading-tight mb-8">Budgeting Basics</h1>
        <div className="space-y-4 text-stone-600 font-body text-lg leading-relaxed">
          <p className="font-display text-2xl font-bold text-stone-800">A budget is simply a plan for your money.</p>
          <p>It tells your money where to go instead of leaving you to wonder where it went.</p>
          <p>Budgeting is really about awareness, intention, and control. It is not meant to punish you. It is meant to help you move forward.</p>
        </div>
      </section>

      {/* Simple Explanation */}
      <section className="py-16 bg-warm-sand/40">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-blue-600 mb-4 font-body">Simple Explanation</p>
          <h2 className="font-display text-3xl font-bold text-stone-800 mb-6">What a basic budget includes</h2>
          <div className="grid sm:grid-cols-2 gap-3 mb-8">
            {['Income', 'Housing', 'Utilities', 'Food', 'Transportation', 'Debt payments', 'Insurance', 'Savings', 'Personal spending'].map(item => (
              <div key={item} className="flex items-center gap-3 bg-white border border-warm-sand rounded-xl px-4 py-3">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                <span className="font-body text-sm text-stone-600">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-stone-500 font-body leading-relaxed">The goal is to know how much is coming in, how much is going out, and whether your money is aligned with what matters most.</p>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-16 max-w-3xl mx-auto px-6">
        <p className="text-xs uppercase tracking-[0.2em] text-blue-600 mb-4 font-body">Why It Matters</p>
        <h2 className="font-display text-3xl font-bold text-stone-800 mb-6">Without a plan, money disappears.</h2>
        <p className="text-stone-600 font-body leading-relaxed mb-8">If money comes in and immediately disappears with no plan, it becomes very hard to build anything. Budgeting helps you see what is really happening and make room for what matters.</p>
        <div className="grid sm:grid-cols-2 gap-3">
          {['See what is really happening', 'Reduce unnecessary stress', 'Catch problem areas earlier', 'Make room for savings', 'Make room for goals', 'Stop guessing'].map(item => (
            <div key={item} className="flex items-start gap-3 font-body text-stone-600">
              <span className="w-5 h-5 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-3 h-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span className="text-sm">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Simple Example */}
      <section className="py-16 bg-stone-800 text-warm-cream">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-stone-400 mb-4 font-body">Simple Example</p>
          <h2 className="font-display text-3xl font-bold mb-6">Start with three questions.</h2>
          <p className="text-stone-400 font-body leading-relaxed mb-8">You do not need a perfect spreadsheet or complicated system to begin. Start here:</p>
          <div className="space-y-4 mb-8">
            {[
              { num: '1', q: 'How much money is coming in?' },
              { num: '2', q: 'Where is it going right now?' },
              { num: '3', q: 'What do I want it to start doing differently?' },
            ].map(item => (
              <div key={item.num} className="flex items-center gap-4 bg-stone-700 rounded-xl px-5 py-4">
                <span className="w-8 h-8 rounded-full bg-blue-500/20 border border-blue-400/30 flex items-center justify-center font-display font-bold text-blue-300 text-sm flex-shrink-0">{item.num}</span>
                <p className="font-body text-stone-200">{item.q}</p>
              </div>
            ))}
          </div>
          <p className="text-stone-400 font-body italic border-l-2 border-blue-400/40 pl-4">That is enough to begin creating clarity. From there, you can improve over time.</p>
        </div>
      </section>

      {/* Takeaway */}
      <section className="py-16 bg-warm-sand/40">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-forest mb-4 font-body">Growing Forward Takeaway</p>
          <div className="space-y-4 text-stone-600 font-body text-lg leading-relaxed">
            <p className="font-display text-2xl font-bold text-stone-800">Budgeting is one of the most practical ways to take your power back.</p>
            <p>It creates clarity. It creates direction. It gives your goals somewhere to stand.</p>
            <p>You do not need shame. You do not need perfection. You just need honesty and a plan.</p>
            <p className="font-display text-xl font-bold text-forest italic">A budget is not about being boxed in. It is about creating room to move forward.</p>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-24 max-w-3xl mx-auto px-6">
        <p className="text-xs uppercase tracking-[0.2em] text-forest mb-4 font-body">Next Steps</p>
        <h2 className="font-display text-3xl font-bold text-stone-800 mb-3">Want help building a simple plan for your money?</h2>
        <p className="text-stone-500 font-body mb-10">A budget is not about being boxed in. It is about creating room to move forward.</p>
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
