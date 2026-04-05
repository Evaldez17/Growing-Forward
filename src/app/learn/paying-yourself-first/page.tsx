import Link from 'next/link'

const nextSteps = [
  { label: 'Take the Quiz', href: '/quiz', desc: 'See where you stand' },
  { label: 'Financial Snapshot', href: '/snapshot', desc: 'Enter your real numbers' },
  { label: 'Budget Tool', href: '/budget-spreadsheet', desc: 'Start tracking your money' },
  { label: 'Talk it Through', href: '/work-with-me', desc: 'Have a real conversation' },
]

export default function PayingYourselfFirst() {
  return (
    <div className="pt-20">

      {/* ── HEADER ── */}
      <section className="py-24 max-w-3xl mx-auto px-6">
        <div className="mb-4 flex items-center gap-2">
          <Link href="/learn" className="text-xs text-stone-400 font-body hover:text-forest transition-colors">Learn</Link>
          <span className="text-stone-300 text-xs">→</span>
          <span className="text-xs text-blue-600 font-body">Build</span>
        </div>
        <p className="text-xs uppercase tracking-[0.2em] text-blue-600 mb-4 font-body">Build — Topic 4 of 4</p>
        <h1 className="font-display text-5xl font-bold text-stone-800 leading-tight mb-8">Paying Yourself First</h1>
        <div className="space-y-4 text-stone-600 font-body text-lg leading-relaxed">
          <p>Paying yourself first means setting aside money for savings, investing, or future goals before spending on other things.</p>
          <p>Many people save whatever is left at the end of the month. The problem is that often there is nothing left.</p>
          <p className="font-display text-xl font-bold text-stone-800 italic">Paying yourself first flips that idea.</p>
        </div>
      </section>

      {/* ── SIMPLE EXPLANATION ── */}
      <section className="py-16 bg-warm-sand/40">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-blue-600 mb-4 font-body">Simple Explanation</p>
          <h2 className="font-display text-3xl font-bold text-stone-800 mb-8">Flip the order. Change the outcome.</h2>

          <div className="space-y-4 mb-8">
            <div className="bg-white border border-red-200 rounded-2xl p-6">
              <p className="text-xs uppercase tracking-widest text-red-400 mb-4 font-body">The old way</p>
              <div className="flex flex-wrap items-center gap-2">
                {['Income', 'Bills', 'Spending', 'Maybe Save'].map((step, i, arr) => (
                  <div key={step} className="flex items-center gap-2">
                    <span className={`px-3 py-1.5 rounded-full text-sm font-body font-medium ${step === 'Maybe Save' ? 'bg-red-50 text-red-400 border border-red-200' : 'bg-warm-sand text-stone-600'}`}>{step}</span>
                    {i < arr.length - 1 && <span className="text-stone-300 text-sm">→</span>}
                  </div>
                ))}
              </div>
              <p className="text-xs text-stone-400 font-body mt-3 italic">Saving happens last — so it usually does not happen.</p>
            </div>

            <div className="bg-white border border-forest/20 rounded-2xl p-6">
              <p className="text-xs uppercase tracking-widest text-forest mb-4 font-body">The better way</p>
              <div className="flex flex-wrap items-center gap-2">
                {['Income', 'Save/Invest', 'Bills', 'Spending'].map((step, i, arr) => (
                  <div key={step} className="flex items-center gap-2">
                    <span className={`px-3 py-1.5 rounded-full text-sm font-body font-medium ${step === 'Save/Invest' ? 'bg-forest/10 text-forest border border-forest/20' : 'bg-warm-sand text-stone-600'}`}>{step}</span>
                    {i < arr.length - 1 && <span className="text-stone-300 text-sm">→</span>}
                  </div>
                ))}
              </div>
              <p className="text-xs text-stone-400 font-body mt-3 italic">Saving happens first — like a bill that must be paid.</p>
            </div>
          </div>

          <p className="text-stone-500 font-body leading-relaxed">If saving is treated like a bill that must be paid, it becomes consistent. Consistency is one of the most important parts of building financial stability and long-term growth.</p>
        </div>
      </section>

      {/* ── WHY IT MATTERS ── */}
      <section className="py-16 max-w-3xl mx-auto px-6">
        <p className="text-xs uppercase tracking-[0.2em] text-blue-600 mb-4 font-body">Why It Matters</p>
        <h2 className="font-display text-3xl font-bold text-stone-800 mb-6">Start small. Stay consistent.</h2>
        <p className="text-stone-600 font-body leading-relaxed mb-8">Paying yourself first does not mean you need to save huge amounts immediately. Small consistent actions often matter more than large occasional ones.</p>

        <div className="grid sm:grid-cols-2 gap-3 mb-8">
          {['$20 per week', '$50 per paycheck', '5% of income', 'Automatic transfers to savings', 'Automatic investing contributions', 'Whatever you can start with'].map(item => (
            <div key={item} className="flex items-center gap-3 bg-blue-50 border border-blue-200 rounded-xl px-4 py-3">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
              <span className="font-body text-sm text-stone-600">{item}</span>
            </div>
          ))}
        </div>

        <div className="bg-warm-cream border border-warm-sand rounded-2xl p-6">
          <p className="text-xs uppercase tracking-widest text-stone-400 mb-3 font-body">Automation helps</p>
          <p className="font-body text-stone-600 text-sm leading-relaxed">If money automatically moves into savings or investments when you get paid, you do not have to rely on willpower every month. Automation turns good decisions into habits.</p>
        </div>
      </section>

      {/* ── SIMPLE EXAMPLE ── */}
      <section className="py-16 bg-stone-800 text-warm-cream">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-stone-400 mb-4 font-body">Simple Example</p>
          <h2 className="font-display text-3xl font-bold mb-6">What consistently paying yourself first builds.</h2>
          <p className="text-stone-400 font-body leading-relaxed mb-8">When you consistently save and invest — even small amounts — you begin building something real over time.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {['Emergency funds', 'Investments', 'Retirement accounts', 'Financial stability', 'Confidence', 'Options'].map(item => (
              <div key={item} className="bg-stone-700 rounded-xl p-4 text-center">
                <p className="font-display font-bold text-warm-cream text-sm">{item}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-stone-400 font-body italic border-l-2 border-blue-400/40 pl-4">
            Paying yourself first helps future you, not just current you.
          </p>
        </div>
      </section>

      {/* ── TAKEAWAY ── */}
      <section className="py-16 bg-warm-sand/40">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-forest mb-4 font-body">Growing Forward Takeaway</p>
          <div className="space-y-4 text-stone-600 font-body text-lg leading-relaxed">
            <p className="font-display text-2xl font-bold text-stone-800">Paying yourself first is one of the simplest ways to start moving forward financially.</p>
            <p>It is not about perfection. It is about building a habit of putting your future on the list of priorities.</p>
            <p className="font-display text-xl font-bold text-forest italic">Future you is part of your responsibility too.</p>
          </div>
        </div>
      </section>

      {/* ── NEXT STEPS ── */}
      <section className="py-24 max-w-3xl mx-auto px-6">
        <p className="text-xs uppercase tracking-[0.2em] text-forest mb-4 font-body">Next Steps</p>
        <h2 className="font-display text-3xl font-bold text-stone-800 mb-3">Want help figuring out how to build saving into your budget?</h2>
        <p className="text-stone-500 font-body mb-10">Small amounts saved consistently can change your future more than you expect.</p>
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
