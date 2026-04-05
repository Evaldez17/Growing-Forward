import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Rule of 72: A Simple Way to Estimate How Long It Takes to Double Your Money',
  description: 'The Rule of 72 is a quick shortcut for understanding how long it takes money to double based on a rate of return — and how debt can double just as fast.',
}

const nextSteps = [
  { label: 'Take the Quiz', href: '/quiz', desc: 'See where you stand' },
  { label: 'Financial Snapshot', href: '/snapshot', desc: 'Enter your real numbers' },
  { label: 'Budget Tool', href: '/budget-spreadsheet', desc: 'Start tracking your money' },
  { label: 'Talk it Through', href: '/work-with-me', desc: 'Have a real conversation' },
]

export default function RuleOf72() {
  return (
    <div className="pt-20">

      <section className="py-24 max-w-3xl mx-auto px-6">
        <div className="mb-4 flex items-center gap-2">
          <Link href="/learn" className="text-xs text-stone-400 font-body hover:text-forest transition-colors">Learn</Link>
          <span className="text-stone-300 text-xs">→</span>
          <span className="text-xs text-forest font-body">Foundation</span>
        </div>
        <p className="text-xs uppercase tracking-[0.2em] text-forest mb-4 font-body">Foundation — Topic 4 of 6</p>
        <h1 className="font-display text-5xl font-bold text-stone-800 leading-tight mb-8">Rule of 72</h1>
        <div className="space-y-4 text-stone-600 font-body text-lg leading-relaxed">
          <p>The Rule of 72 is a simple way to estimate how long it takes for money to double based on a given rate of return.</p>
          <p className="font-display text-xl font-bold text-stone-800 italic">It is not exact, but it is a quick and helpful shortcut.</p>
        </div>
      </section>

      {/* Simple Explanation */}
      <section className="py-16 bg-warm-sand/40">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-forest mb-4 font-body">Simple Explanation</p>
          <h2 className="font-display text-3xl font-bold text-stone-800 mb-6">The formula is simple.</h2>
          <div className="bg-white border border-forest/20 rounded-2xl p-8 text-center mb-8">
            <p className="text-xs uppercase tracking-widest text-stone-400 font-body mb-4">The Rule of 72</p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <span className="font-display text-4xl font-bold text-stone-800">72</span>
              <span className="font-display text-2xl text-stone-400">÷</span>
              <span className="font-display text-2xl font-bold text-stone-600">Rate of Return</span>
              <span className="font-display text-2xl text-stone-400">=</span>
              <span className="font-display text-2xl font-bold text-forest">Years to Double</span>
            </div>
          </div>
          <p className="text-stone-600 font-body leading-relaxed">This rule turns growth into something more practical and easier to picture. A lot of people hear terms like investing, returns, and compound growth — but it can still feel vague. The Rule of 72 makes it concrete.</p>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-16 max-w-3xl mx-auto px-6">
        <p className="text-xs uppercase tracking-[0.2em] text-forest mb-4 font-body">Why It Matters</p>
        <h2 className="font-display text-3xl font-bold text-stone-800 mb-8">See it in action.</h2>
        <div className="space-y-4 mb-10">
          {[
            { rate: '6%', years: '12', calc: '72 ÷ 6 = 12', note: 'Money doubles in about 12 years' },
            { rate: '8%', years: '9', calc: '72 ÷ 8 = 9', note: 'Money doubles in about 9 years' },
            { rate: '12%', years: '6', calc: '72 ÷ 12 = 6', note: 'Money doubles in about 6 years' },
          ].map(item => (
            <div key={item.rate} className="flex items-center gap-4 bg-forest/5 border border-forest/20 rounded-xl px-6 py-4">
              <div className="w-14 h-14 rounded-full bg-forest/10 border border-forest/20 flex items-center justify-center flex-shrink-0">
                <span className="font-display font-bold text-forest text-lg">{item.rate}</span>
              </div>
              <div className="flex-1">
                <p className="font-display font-bold text-stone-800">{item.calc}</p>
                <p className="text-stone-500 font-body text-sm">{item.note}</p>
              </div>
              <div className="text-right">
                <p className="font-display text-2xl font-bold text-forest">{item.years}</p>
                <p className="text-xs text-stone-400 font-body">years</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-stone-500 font-body leading-relaxed italic border-l-2 border-forest/30 pl-4">The higher the rate of return, the faster your money may grow.</p>
      </section>

      {/* Simple Example - Reverse */}
      <section className="py-16 bg-stone-800 text-warm-cream">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-stone-400 mb-4 font-body">Simple Example</p>
          <h2 className="font-display text-3xl font-bold mb-6">It works in reverse too.</h2>
          <p className="text-stone-400 font-body leading-relaxed mb-8">The Rule of 72 can also help explain how debt and inflation work against you.</p>
          <div className="bg-red-900/30 border border-red-800/40 rounded-2xl p-6 mb-6">
            <p className="text-xs uppercase tracking-widest text-red-400 mb-4 font-body">High interest debt example</p>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-red-900/40 border border-red-700/40 flex items-center justify-center flex-shrink-0">
                <span className="font-display font-bold text-red-400 text-lg">18%</span>
              </div>
              <div>
                <p className="font-display font-bold text-warm-cream">72 ÷ 18 = 4</p>
                <p className="text-stone-400 font-body text-sm">A credit card at 18% interest can double what you owe in about 4 years if left unpaid.</p>
              </div>
            </div>
          </div>
          <p className="text-stone-400 font-body leading-relaxed italic border-l-2 border-red-500/40 pl-4">
            That is a powerful reminder that growth can work for you or against you. The same math that builds wealth can build debt.
          </p>
        </div>
      </section>

      {/* Why Starting Early */}
      <section className="py-16 max-w-3xl mx-auto px-6">
        <p className="text-xs uppercase tracking-[0.2em] text-forest mb-4 font-body">Why Starting Early Matters</p>
        <h2 className="font-display text-3xl font-bold text-stone-800 mb-6">Money that doubles multiple times becomes powerful.</h2>
        <div className="space-y-4 text-stone-600 font-body leading-relaxed mb-8">
          <p>If money doubles once, that is helpful. If money doubles multiple times over decades, that is where things get powerful. That is why even small early steps can matter more than people realize.</p>
          <p>The goal is not just to save money. The goal is to give it time and a chance to grow.</p>
        </div>
        <div className="grid grid-cols-3 gap-4 text-center">
          {[
            { label: '1 Double', value: '2x', sub: 'Good start' },
            { label: '2 Doubles', value: '4x', sub: 'Building momentum' },
            { label: '3 Doubles', value: '8x', sub: 'Time doing the work' },
          ].map(item => (
            <div key={item.label} className="bg-forest/5 border border-forest/20 rounded-2xl p-5">
              <p className="font-display text-3xl font-bold text-forest mb-1">{item.value}</p>
              <p className="font-body text-xs text-stone-500">{item.label}</p>
              <p className="font-body text-xs text-stone-400 mt-1">{item.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Takeaway */}
      <section className="py-16 bg-warm-sand/40">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-forest mb-4 font-body">Growing Forward Takeaway</p>
          <div className="space-y-4 text-stone-600 font-body text-lg leading-relaxed">
            <p className="font-display text-2xl font-bold text-stone-800">The Rule of 72 is a simple reminder that time and consistency matter.</p>
            <p>Money can grow quietly in the background when it is given enough time. Understanding how money works helps you make smarter decisions and move forward with more confidence.</p>
            <p className="font-display text-xl font-bold text-forest italic">Small steps made early can make a bigger difference than most people think.</p>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-8 max-w-3xl mx-auto px-6">
        <p className="text-xs uppercase tracking-widest text-stone-400 font-body mb-4">Related Topics</p>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            { title: 'Compound Interest', href: '/learn/compound-interest' },
            { title: 'The Cost of Waiting', href: '/learn/cost-of-waiting' },
            { title: 'Investing Basics', href: '/learn/investing-basics' },
            { title: 'The Power of Time in the Market', href: '/learn/power-of-time' },
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
        <h2 className="font-display text-3xl font-bold text-stone-800 mb-3">Want to better understand where you are financially?</h2>
        <p className="text-stone-500 font-body mb-10">Small steps made early can make a bigger difference than most people think.</p>
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
