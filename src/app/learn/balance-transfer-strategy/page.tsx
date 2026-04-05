import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Balance Transfer Strategy: How to Reduce Interest and Pay Off Debt Faster',
  description: 'Learn how balance transfer credit cards and 0% APR promotions can help reduce interest and accelerate debt payoff when used responsibly as part of a larger financial plan.',
}

const nextSteps = [
  { label: 'Take the Quiz', href: '/quiz', desc: 'See where you stand' },
  { label: 'Financial Snapshot', href: '/snapshot', desc: 'Enter your real numbers' },
  { label: 'Budget Tool', href: '/budget-spreadsheet', desc: 'Start tracking your money' },
  { label: 'Talk it Through', href: '/work-with-me', desc: 'Have a real conversation' },
]

export default function BalanceTransferStrategy() {
  return (
    <div className="pt-20">

      {/* ── HEADER ── */}
      <section className="py-24 max-w-3xl mx-auto px-6">
        <div className="mb-4 flex items-center gap-2">
          <Link href="/learn" className="text-xs text-stone-400 font-body hover:text-forest transition-colors">Learn</Link>
          <span className="text-stone-300 text-xs">→</span>
          <span className="text-xs text-blue-600 font-body">Build</span>
        </div>
        <p className="text-xs uppercase tracking-[0.2em] text-blue-600 mb-4 font-body">Build — Bonus Topic</p>
        <h1 className="font-display text-5xl font-bold text-stone-800 leading-tight mb-8">Balance Transfer Strategy</h1>
        <div className="space-y-4 text-stone-600 font-body text-lg leading-relaxed">
          <p>A balance transfer strategy is a way some people reduce interest and pay off debt faster by moving credit card balances to cards with lower interest rates or promotional 0% interest periods.</p>
          <p className="font-display text-xl font-bold text-stone-800 italic">This strategy is not about creating new debt. It is about reducing interest so more of your payment goes toward the actual balance.</p>
        </div>
      </section>

      {/* ── SIMPLE EXPLANATION ── */}
      <section className="py-16 bg-warm-sand/40">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-blue-600 mb-4 font-body">Simple Explanation</p>
          <h2 className="font-display text-3xl font-bold text-stone-800 mb-6">How balance transfers work.</h2>
          <p className="text-stone-600 font-body leading-relaxed mb-8">Some credit cards offer promotional periods where transferred balances have 0% interest for a certain amount of time — often 12 to 18 months. During that period, payments usually go directly toward the balance instead of being heavily eaten by interest.</p>

          <div className="bg-white border border-warm-sand rounded-2xl p-6 mb-6">
            <p className="text-xs uppercase tracking-widest text-stone-400 font-body mb-4">Without vs With a balance transfer</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                <p className="text-xs font-body text-red-400 font-medium mb-2">Without transfer (high interest)</p>
                <p className="font-body text-sm text-stone-600 leading-relaxed">Large portion of each payment goes to interest. Balance shrinks slowly. More total money paid over time.</p>
              </div>
              <div className="bg-forest/5 border border-forest/20 rounded-xl p-4">
                <p className="text-xs font-body text-forest font-medium mb-2">With 0% promotional transfer</p>
                <p className="font-body text-sm text-stone-600 leading-relaxed">Full payment goes toward balance. Debt shrinks faster. Less total money paid if paid off in time.</p>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
            <p className="text-xs uppercase tracking-widest text-amber-600 mb-2 font-body">Transfer Fees</p>
            <p className="font-body text-sm text-stone-600 leading-relaxed">Most balance transfer cards charge a fee of around 3% to 5% of the transferred amount. Even with a fee, the total cost can still be lower than paying high interest for months or years. Always compare the fee to the interest you would otherwise pay.</p>
          </div>
        </div>
      </section>

      {/* ── CREDIT LIMIT CONSIDERATIONS ── */}
      <section className="py-16 max-w-3xl mx-auto px-6">
        <p className="text-xs uppercase tracking-[0.2em] text-blue-600 mb-4 font-body">Credit Limit Considerations</p>
        <h2 className="font-display text-3xl font-bold text-stone-800 mb-6">You may not be able to transfer everything at once.</h2>
        <p className="text-stone-600 font-body leading-relaxed mb-6">The new card may not approve you for a high enough credit limit to move all of your debt at once. For example, if you have $10,000 in credit card debt, a new balance transfer card might only approve you for a $4,000 or $5,000 limit. That means you may only be able to transfer part of the balance, not the entire amount.</p>

        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-6">
          <p className="text-xs uppercase tracking-widest text-blue-600 mb-4 font-body">Some people handle this by</p>
          <ul className="space-y-3">
            {[
              'Transferring part of the balance to the new card',
              'Continuing to pay the remaining balance on the original card',
              'Paying down the transferred balance as quickly as possible',
              'Applying for another transfer card later if needed',
              'Repeating the process over time',
            ].map(item => (
              <li key={item} className="flex items-start gap-3 font-body text-sm text-stone-700">
                <span className="w-5 h-5 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white border border-warm-sand rounded-2xl p-6">
          <p className="text-xs uppercase tracking-widest text-stone-400 mb-3 font-body">Balance Transfer Ladder Strategy</p>
          <p className="font-body text-stone-600 text-sm leading-relaxed mb-3">This is sometimes called a balance transfer ladder strategy. It requires organization and discipline, but it can help reduce interest over time if used carefully.</p>
          <p className="font-body text-stone-500 text-sm italic">The important thing is to make sure total debt is going down over time — not just moving around.</p>
        </div>
      </section>

      {/* ── WHY IT MATTERS ── */}
      <section className="py-16 bg-warm-sand/40">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-blue-600 mb-4 font-body">Why It Matters</p>
          <h2 className="font-display text-3xl font-bold text-stone-800 mb-6">The goal of the strategy.</h2>
          <div className="space-y-3">
            {[
              'Reduce interest charges',
              'Increase the portion of your payment going to principal',
              'Pay down balances faster',
              'Avoid adding new debt',
              'Use promotional periods wisely',
            ].map(item => (
              <div key={item} className="flex items-center gap-3 bg-white border border-blue-200 rounded-xl px-4 py-3">
                <span className="w-5 h-5 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="font-body text-sm text-stone-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WARNINGS ── */}
      <section className="py-16 bg-stone-800 text-warm-cream">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-stone-400 mb-4 font-body">Important Warnings</p>
          <h2 className="font-display text-3xl font-bold mb-6">This strategy can backfire — here is when.</h2>
          <p className="text-stone-400 font-body leading-relaxed mb-8">Balance transfer strategies work best when they are part of a larger plan. They can backfire if spending habits do not change.</p>
          <div className="grid sm:grid-cols-2 gap-3 mb-10">
            {[
              'New purchases added to the card',
              'Payments are missed',
              'Promotional deadlines ignored',
              'Total debt keeps increasing',
              'Spending habits do not change',
            ].map(item => (
              <div key={item} className="flex items-center gap-3 bg-red-900/20 border border-red-800/30 rounded-xl px-4 py-3">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" />
                <span className="font-body text-sm text-stone-300">{item}</span>
              </div>
            ))}
          </div>

          {/* Credit Score Warning */}
          <div className="bg-stone-700 rounded-2xl p-6 mb-6">
            <p className="text-xs uppercase tracking-widest text-stone-400 mb-3 font-body">Utilization and Credit Score</p>
            <p className="font-body text-stone-300 text-sm leading-relaxed mb-4">Opening new cards and moving balances can temporarily affect your credit score. High credit utilization — using a large percentage of your available credit — can also affect your score. However, as balances are paid down and utilization decreases, credit scores often recover over time.</p>
            <ul className="space-y-2">
              {[
                'Make all payments on time',
                'Avoid maxing out cards if possible',
                'Avoid applying for too many cards at once',
                'Focus on reducing total balances over time',
              ].map(item => (
                <li key={item} className="flex items-center gap-2 font-body text-sm text-stone-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-stone-400 font-body text-xs italic">The goal is to use credit strategically, not rely on it long-term.</p>
          </div>

          <div className="bg-stone-700 rounded-2xl p-6">
            <p className="text-xs uppercase tracking-widest text-stone-400 mb-3 font-body">A balance transfer is a tool, not a solution</p>
            <p className="font-body text-stone-300 text-sm leading-relaxed">Debt goes away through consistent payments, budgeting, reducing expenses, increasing income, and time. The balance transfer just reduces how much interest slows you down.</p>
          </div>
        </div>
      </section>

      {/* ── TAKEAWAY ── */}
      <section className="py-16 bg-warm-sand/40">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-forest mb-4 font-body">Growing Forward Takeaway</p>
          <div className="space-y-4 text-stone-600 font-body text-lg leading-relaxed">
            <p className="font-display text-2xl font-bold text-stone-800">Debt payoff is not just about working harder. Sometimes it is about working smarter too.</p>
            <p>Reducing interest, making a plan, staying consistent, and avoiding new debt can make a huge difference over time.</p>
            <p className="font-display text-xl font-bold text-forest italic">Progress usually comes from a combination of strategy, discipline, and patience.</p>
          </div>
        </div>
      </section>

      {/* ── NEXT STEPS ── */}
      <section className="py-24 max-w-3xl mx-auto px-6">
        <p className="text-xs uppercase tracking-[0.2em] text-forest mb-4 font-body">Next Steps</p>
        <h2 className="font-display text-3xl font-bold text-stone-800 mb-3">Want help building a plan to reduce debt and improve cash flow?</h2>
        <p className="text-stone-500 font-body mb-10">Debt does not disappear overnight, but a plan and consistent action can change your situation over time.</p>
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
