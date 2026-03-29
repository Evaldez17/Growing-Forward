import Link from 'next/link'

const nextSteps = [
  { label: 'Take the Quiz', href: '/quiz', desc: 'See where you stand' },
  { label: 'Financial Snapshot', href: '/snapshot', desc: 'Enter your real numbers' },
  { label: 'Budget Tool', href: '/budget-spreadsheet', desc: 'Start tracking your money' },
  { label: 'Talk it Through', href: '/work-with-me', desc: 'Have a real conversation' },
]

export default function EmergencyFund() {
  return (
    <div className="pt-20">
      <section className="py-24 max-w-3xl mx-auto px-6">
        <div className="mb-4 flex items-center gap-2">
          <Link href="/learn" className="text-xs text-stone-400 font-body hover:text-forest transition-colors">Learn</Link>
          <span className="text-stone-300 text-xs">→</span>
          <span className="text-xs text-blue-600 font-body">Build</span>
        </div>
        <p className="text-xs uppercase tracking-[0.2em] text-blue-600 mb-4 font-body">Build — Topic 1 of 4</p>
        <h1 className="font-display text-5xl font-bold text-stone-800 leading-tight mb-8">Emergency Fund</h1>
        <div className="space-y-4 text-stone-600 font-body text-lg leading-relaxed">
          <p>An emergency fund is money set aside for the unexpected.</p>
          <p className="font-display text-xl font-bold text-stone-800 italic">It is there for the moments life does not ask permission first.</p>
        </div>
      </section>

      {/* Simple Explanation */}
      <section className="py-16 bg-warm-sand/40">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-blue-600 mb-4 font-body">Simple Explanation</p>
          <h2 className="font-display text-3xl font-bold text-stone-800 mb-6">What an emergency fund covers</h2>
          <div className="grid sm:grid-cols-2 gap-3 mb-8">
            {['Car repairs', 'Medical bills', 'Home repairs', 'Reduced work hours', 'Job changes', 'Other unexpected expenses'].map(item => (
              <div key={item} className="flex items-center gap-3 bg-white border border-warm-sand rounded-xl px-4 py-3">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                <span className="font-body text-sm text-stone-600">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-stone-600 font-body leading-relaxed">An emergency fund creates breathing room when life gets messy.</p>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-16 max-w-3xl mx-auto px-6">
        <p className="text-xs uppercase tracking-[0.2em] text-blue-600 mb-4 font-body">Why It Matters</p>
        <h2 className="font-display text-3xl font-bold text-stone-800 mb-6">Without it, emergencies become debt.</h2>
        <div className="space-y-4 text-stone-600 font-body leading-relaxed mb-10">
          <p>Without emergency savings, most emergencies become debt. That means a surprise expense does not just cost you once — it can also cost you interest, stress, and a longer recovery.</p>
          <p className="font-display text-xl font-bold text-stone-800">An emergency fund helps turn a crisis into an inconvenience.</p>
          <p>It gives you options. It gives you time. It gives you stability.</p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8">
          <p className="text-xs uppercase tracking-widest text-blue-600 mb-4 font-body">How Much Should You Have</p>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center flex-shrink-0 font-display font-bold text-blue-600 text-sm">1</div>
              <div>
                <p className="font-display font-bold text-stone-800">Starter Emergency Fund</p>
                <p className="font-body text-2xl font-bold text-blue-600">$1,000</p>
                <p className="text-stone-500 font-body text-sm">Creates a buffer fast</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center flex-shrink-0 font-display font-bold text-blue-600 text-sm">2</div>
              <div>
                <p className="font-display font-bold text-stone-800">Full Emergency Fund</p>
                <p className="font-body text-2xl font-bold text-blue-600">3–6 Months of Expenses</p>
                <p className="text-stone-500 font-body text-sm">Protects against bigger disruptions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Example */}
      <section className="py-16 bg-stone-800 text-warm-cream">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-stone-400 mb-4 font-body">Simple Example</p>
          <h2 className="font-display text-3xl font-bold mb-6">How to start building one</h2>
          <p className="text-stone-400 font-body leading-relaxed mb-8">You do not need to build a full emergency fund overnight. Start with what you can.</p>
          <div className="grid sm:grid-cols-2 gap-3 mb-8">
            {['$20 a week', '$50 a paycheck', 'A portion of extra income', 'Tax refunds or bonuses', 'Cut one unnecessary expense and redirect it'].map(item => (
              <div key={item} className="flex items-center gap-3 bg-stone-700 rounded-xl px-4 py-3">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                <span className="font-body text-sm text-stone-300">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-stone-400 font-body italic border-l-2 border-blue-400/40 pl-4">
            Keep it in a basic savings account — easy to access, separate enough to not spend casually. The point is availability and protection, not high returns.
          </p>
        </div>
      </section>

      {/* Takeaway */}
      <section className="py-16 bg-warm-sand/40">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-forest mb-4 font-body">Growing Forward Takeaway</p>
          <div className="space-y-4 text-stone-600 font-body text-lg leading-relaxed">
            <p className="font-display text-2xl font-bold text-stone-800">An emergency fund is not flashy, but it is powerful.</p>
            <p>It is one of the clearest ways to create stability in your life. You may not see it every day, but when life hits, you will feel the difference.</p>
            <p className="font-display text-xl font-bold text-forest italic">Build the buffer. Create some breathing room. Keep moving forward.</p>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-24 max-w-3xl mx-auto px-6">
        <p className="text-xs uppercase tracking-[0.2em] text-forest mb-4 font-body">Next Steps</p>
        <h2 className="font-display text-3xl font-bold text-stone-800 mb-3">Want help making room for savings?</h2>
        <p className="text-stone-500 font-body mb-10">You do not need to save everything at once. You just need to begin.</p>
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
