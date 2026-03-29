import Link from 'next/link'

const nextSteps = [
  { label: 'Take the Quiz', href: '/quiz', desc: 'See where you stand' },
  { label: 'Financial Snapshot', href: '/snapshot', desc: 'Enter your real numbers' },
  { label: 'Budget Tool', href: '/budget-spreadsheet', desc: 'Start tracking your money' },
  { label: 'Talk it Through', href: '/work-with-me', desc: 'Have a real conversation' },
]

export default function InvestingBasics() {
  return (
    <div className="pt-20">
      <section className="py-24 max-w-3xl mx-auto px-6">
        <div className="mb-4 flex items-center gap-2">
          <Link href="/learn" className="text-xs text-stone-400 font-body hover:text-forest transition-colors">Learn</Link>
          <span className="text-stone-300 text-xs">→</span>
          <span className="text-xs text-purple-600 font-body">Grow</span>
        </div>
        <p className="text-xs uppercase tracking-[0.2em] text-purple-600 mb-4 font-body">Grow — Topic 1 of 4</p>
        <h1 className="font-display text-5xl font-bold text-stone-800 leading-tight mb-8">Investing Basics</h1>
        <div className="space-y-4 text-stone-600 font-body text-lg leading-relaxed">
          <p>Investing is the process of putting money into assets that have the potential to grow over time.</p>
          <p className="font-display text-xl font-bold text-stone-800 italic">The goal is not just to save money. The goal is to give your money a chance to work for you.</p>
        </div>
      </section>

      {/* Simple Explanation */}
      <section className="py-16 bg-warm-sand/40">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-purple-600 mb-4 font-body">Simple Explanation</p>
          <h2 className="font-display text-3xl font-bold text-stone-800 mb-6">Saving vs Investing</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white border border-warm-sand rounded-2xl p-6">
              <p className="text-xs uppercase tracking-widest text-stone-400 mb-3 font-body">Saving</p>
              <p className="font-body text-stone-600 leading-relaxed text-sm">Important for short-term needs and emergencies. Keeps your money safe and accessible. Does not grow much over time.</p>
            </div>
            <div className="bg-white border border-purple-200 rounded-2xl p-6">
              <p className="text-xs uppercase tracking-widest text-purple-600 mb-3 font-body">Investing</p>
              <p className="font-body text-stone-600 leading-relaxed text-sm">Helps money grow over longer periods. Bridges the gap between where you are now and where you want to be. Requires patience and consistency.</p>
            </div>
          </div>
          <p className="text-stone-500 font-body leading-relaxed">Investing is not gambling. It is not chasing hype. At its healthiest, investing is a long-term strategy built on patience, discipline, and consistency.</p>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-16 max-w-3xl mx-auto px-6">
        <p className="text-xs uppercase tracking-[0.2em] text-purple-600 mb-4 font-body">Why It Matters</p>
        <h2 className="font-display text-3xl font-bold text-stone-800 mb-6">Time is the biggest advantage in investing.</h2>
        <div className="space-y-4 text-stone-600 font-body leading-relaxed mb-8">
          <p>One of the biggest advantages in investing is time. The earlier you start, the more time your money has to grow and potentially compound.</p>
          <p>That is why small contributions made consistently over many years can become meaningful. Waiting often means you have to invest much more later just to catch up.</p>
        </div>
        <div className="bg-purple-50 border border-purple-200 rounded-2xl p-6">
          <p className="text-xs uppercase tracking-widest text-purple-600 mb-4 font-body">A simple investing mindset</p>
          <div className="space-y-3">
            {[
              'Save first for emergencies',
              'Get high-interest debt under control',
              'Protect your foundation',
              'Then begin building long-term growth',
            ].map((item, i) => (
              <div key={item} className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-purple-100 border border-purple-200 flex items-center justify-center font-display font-bold text-purple-600 text-xs flex-shrink-0">{i + 1}</span>
                <span className="font-body text-sm text-stone-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Simple Example */}
      <section className="py-16 bg-stone-800 text-warm-cream">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-stone-400 mb-4 font-body">Simple Example</p>
          <h2 className="font-display text-3xl font-bold mb-6">Consistency beats intensity.</h2>
          <p className="text-stone-400 font-body leading-relaxed mb-8">A lot of people think they need large amounts of money to start. But what matters more is consistency. A steady habit over time can do more than occasional bursts of effort.</p>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-stone-700 rounded-xl p-5 text-center">
              <p className="font-display text-2xl font-bold text-stone-400 mb-1">Occasional</p>
              <p className="font-display text-lg font-bold text-stone-300">Large amounts</p>
              <p className="text-stone-500 font-body text-xs mt-2">Harder to sustain</p>
            </div>
            <div className="bg-purple-500/20 border border-purple-400/30 rounded-xl p-5 text-center">
              <p className="font-display text-2xl font-bold text-purple-300 mb-1">Consistent</p>
              <p className="font-display text-lg font-bold text-warm-cream">Small amounts</p>
              <p className="text-stone-400 font-body text-xs mt-2">Builds over time</p>
            </div>
          </div>
          <p className="mt-6 text-stone-400 font-body italic border-l-2 border-purple-400/40 pl-4">The goal is not perfection. The goal is participation and patience.</p>
        </div>
      </section>

      {/* Takeaway */}
      <section className="py-16 bg-warm-sand/40">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-forest mb-4 font-body">Growing Forward Takeaway</p>
          <div className="space-y-4 text-stone-600 font-body text-lg leading-relaxed">
            <p className="font-display text-2xl font-bold text-stone-800">Investing is one of the ways you turn today's effort into tomorrow's options.</p>
            <p>It is not magic. It is not instant. But over time, it can become one of the strongest tools for building freedom.</p>
            <p className="font-display text-xl font-bold text-forest italic">Learn the basics. Start with intention. Stay consistent. Keep moving forward.</p>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-24 max-w-3xl mx-auto px-6">
        <p className="text-xs uppercase tracking-[0.2em] text-forest mb-4 font-body">Next Steps</p>
        <h2 className="font-display text-3xl font-bold text-stone-800 mb-3">Want help figuring out where investing fits into your bigger picture?</h2>
        <p className="text-stone-500 font-body mb-10">You do not need to know everything before you begin learning. You just need to keep taking honest next steps.</p>
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
