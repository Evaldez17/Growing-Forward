import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Debt Consolidation Explained: Simplifying Debt and Creating a Payoff Plan',
  description: 'Learn how debt consolidation works, when it can help, the risks to watch for, and how it compares to other debt payoff strategies like balance transfers.',
}

const nextSteps = [
  { label: 'Take the Quiz', href: '/quiz', desc: 'See where you stand' },
  { label: 'Financial Snapshot', href: '/snapshot', desc: 'Enter your real numbers' },
  { label: 'Budget Tool', href: '/budget-spreadsheet', desc: 'Start tracking your money' },
  { label: 'Talk it Through', href: '/work-with-me', desc: 'Have a real conversation' },
]

export default function DebtConsolidation() {
  return (
    <div className="pt-20">

      <section className="py-24 max-w-3xl mx-auto px-6">
        <div className="mb-4 flex items-center gap-2">
          <Link href="/learn" className="text-xs text-stone-400 font-body hover:text-forest transition-colors">Learn</Link>
          <span className="text-stone-300 text-xs">→</span>
          <span className="text-xs text-blue-600 font-body">Build</span>
        </div>
        <p className="text-xs uppercase tracking-[0.2em] text-blue-600 mb-4 font-body">Build — Bonus Topic</p>
        <h1 className="font-display text-5xl font-bold text-stone-800 leading-tight mb-8">Debt Consolidation</h1>
        <div className="space-y-4 text-stone-600 font-body text-lg leading-relaxed">
          <p>Debt consolidation is a strategy that combines multiple debts into one new loan or payment.</p>
          <p className="font-display text-xl font-bold text-stone-800 italic">Instead of juggling several different balances, due dates, and interest rates, debt consolidation can turn multiple debts into one payment.</p>
        </div>
      </section>

      {/* Simple Explanation */}
      <section className="py-16 bg-warm-sand/40">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-blue-600 mb-4 font-body">Simple Explanation</p>
          <h2 className="font-display text-3xl font-bold text-stone-800 mb-6">How debt consolidation works.</h2>
          <p className="text-stone-600 font-body leading-relaxed mb-8">With debt consolidation, someone takes out a new loan or uses another financial tool to pay off existing debts. Then instead of owing money to multiple credit cards or lenders, they make one payment toward the consolidated balance.</p>

          <div className="bg-white border border-warm-sand rounded-2xl p-6 mb-6">
            <p className="text-xs uppercase tracking-widest text-stone-400 font-body mb-4">Before vs After Consolidation</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                <p className="text-xs font-body text-red-400 font-medium mb-3">Before — Multiple payments</p>
                <ul className="space-y-1.5">
                  {['Credit card A — due the 5th', 'Credit card B — due the 12th', 'Personal loan — due the 20th', 'Different rates on each'].map(item => (
                    <li key={item} className="flex items-center gap-2 font-body text-xs text-stone-500">
                      <span className="w-1 h-1 rounded-full bg-red-300 flex-shrink-0" />{item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-forest/5 border border-forest/20 rounded-xl p-4">
                <p className="text-xs font-body text-forest font-medium mb-3">After — One payment</p>
                <ul className="space-y-1.5">
                  {['One monthly payment', 'One due date', 'One interest rate', 'Clearer payoff timeline'].map(item => (
                    <li key={item} className="flex items-center gap-2 font-body text-xs text-stone-500">
                      <span className="w-1 h-1 rounded-full bg-forest flex-shrink-0" />{item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
            <p className="text-xs uppercase tracking-widest text-blue-600 mb-4 font-body">Common forms of debt consolidation</p>
            <ul className="space-y-2">
              {['A personal loan', 'A home equity loan or line of credit', 'A balance transfer credit card', 'A debt management plan in some situations'].map(item => (
                <li key={item} className="flex items-center gap-3 font-body text-sm text-stone-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />{item}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-stone-400 font-body italic">Each option works differently, and not every option is the right fit for every person.</p>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-16 max-w-3xl mx-auto px-6">
        <p className="text-xs uppercase tracking-[0.2em] text-blue-600 mb-4 font-body">Why It Matters</p>
        <h2 className="font-display text-3xl font-bold text-stone-800 mb-8">Potential benefits.</h2>
        <div className="grid sm:grid-cols-2 gap-3 mb-8">
          {[
            'Reducing the number of payments to track',
            'Potentially lowering interest',
            'Creating a fixed repayment plan',
            'Making it easier to stay organized',
            'Mental relief from simplifying the situation',
          ].map(item => (
            <div key={item} className="flex items-start gap-3 bg-blue-50 border border-blue-200 rounded-xl px-4 py-3">
              <span className="w-5 h-5 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-3 h-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span className="font-body text-sm text-stone-600">{item}</span>
            </div>
          ))}
        </div>
        <p className="text-stone-500 font-body leading-relaxed italic border-l-2 border-blue-300 pl-4">
          For people who feel overwhelmed by multiple debts, simplicity alone can be helpful.
        </p>
      </section>

      {/* Warnings */}
      <section className="py-16 bg-stone-800 text-warm-cream">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-stone-400 mb-4 font-body">Important Risks and Limitations</p>
          <h2 className="font-display text-3xl font-bold mb-6">Debt consolidation does not erase debt.</h2>
          <p className="text-stone-400 font-body leading-relaxed mb-8">It only changes how the debt is structured. This strategy can backfire in several situations.</p>
          <div className="grid sm:grid-cols-2 gap-3 mb-8">
            {[
              'The new interest rate is not actually better',
              'Fees make the new loan more expensive',
              'Repayment period becomes much longer',
              'Old credit cards are run back up after consolidation',
              'Spending habits do not change',
            ].map(item => (
              <div key={item} className="flex items-center gap-3 bg-red-900/20 border border-red-800/30 rounded-xl px-4 py-3">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" />
                <span className="font-body text-sm text-stone-300">{item}</span>
              </div>
            ))}
          </div>

          <div className="bg-stone-700 rounded-2xl p-6 mb-6">
            <p className="text-xs uppercase tracking-widest text-stone-400 mb-3 font-body">Compare the full picture</p>
            <div className="grid grid-cols-2 gap-2">
              {['Interest rate', 'Monthly payment', 'Loan term', 'Fees', 'Total amount paid over time', 'Whether the new structure actually supports payoff'].map(item => (
                <div key={item} className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-stone-400 flex-shrink-0" />
                  <span className="font-body text-xs text-stone-300">{item}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-stone-400 font-body text-xs italic">The goal is not just a lower monthly payment. The goal is to reduce stress while still moving toward being debt free.</p>
          </div>
        </div>
      </section>

      {/* Consolidation vs Balance Transfer */}
      <section className="py-16 max-w-3xl mx-auto px-6">
        <p className="text-xs uppercase tracking-[0.2em] text-blue-600 mb-4 font-body">Simple Example</p>
        <h2 className="font-display text-3xl font-bold text-stone-800 mb-6">Debt Consolidation vs Balance Transfer.</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
            <p className="text-xs uppercase tracking-widest text-blue-600 mb-3 font-body">Balance Transfer</p>
            <p className="font-body text-sm text-stone-600 leading-relaxed">Moves credit card debt to another credit card with a lower or promotional interest rate. Usually shorter-term tied to promotional periods.</p>
          </div>
          <div className="bg-purple-50 border border-purple-200 rounded-2xl p-6">
            <p className="text-xs uppercase tracking-widest text-purple-600 mb-3 font-body">Debt Consolidation</p>
            <p className="font-body text-sm text-stone-600 leading-relaxed">Combines debts into one new loan or structured payment. Often longer-term structured payoff tools with fixed rates and timelines.</p>
          </div>
        </div>
        <p className="text-stone-500 font-body leading-relaxed">Both can reduce complexity, but they work differently. Balance transfers are often shorter-term tools tied to promotional rates. Debt consolidation loans are often longer structured payoff tools.</p>
      </section>

      {/* Takeaway */}
      <section className="py-16 bg-warm-sand/40">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-forest mb-4 font-body">Growing Forward Takeaway</p>
          <div className="space-y-4 text-stone-600 font-body text-lg leading-relaxed">
            <p className="font-display text-2xl font-bold text-stone-800">Debt consolidation can be helpful when it creates more clarity, lower costs, and a real path forward.</p>
            <p>But it is not a shortcut around behavior and habits. The best debt strategy is one that reduces stress, improves structure, and helps total debt go down over time.</p>
            <p className="font-display text-xl font-bold text-forest italic">Debt freedom usually comes from a combination of structure, discipline, and time.</p>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-8 max-w-3xl mx-auto px-6">
        <p className="text-xs uppercase tracking-widest text-stone-400 font-body mb-4">Related Topics</p>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            { title: 'Debt Payoff Strategies', href: '/learn/debt-payoff-strategies' },
            { title: 'Balance Transfer Strategy', href: '/learn/balance-transfer-strategy' },
            { title: 'Budgeting Basics', href: '/learn/budgeting-basics' },
            { title: 'Paying Yourself First', href: '/learn/paying-yourself-first' },
          ].map(link => (
            <Link key={link.title} href={link.href} className="group flex items-center justify-between bg-warm-cream border border-warm-sand rounded-xl px-5 py-4 hover:border-forest transition-all duration-200">
              <span className="font-body text-sm text-stone-600 group-hover:text-stone-900">{link.title}</span>
              <span className="text-stone-300 group-hover:text-forest group-hover:translate-x-1 transition-all text-xs">→</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-24 max-w-3xl mx-auto px-6">
        <p className="text-xs uppercase tracking-[0.2em] text-forest mb-4 font-body">Next Steps</p>
        <h2 className="font-display text-3xl font-bold text-stone-800 mb-3">Want help thinking through the right debt payoff approach for your situation?</h2>
        <p className="text-stone-500 font-body mb-10">Debt freedom usually comes from a combination of structure, discipline, and time.</p>
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
