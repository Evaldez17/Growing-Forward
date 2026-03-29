import Link from 'next/link'

const steps = [
  {
    number: '01',
    title: 'Control Cash Flow',
    subtitle: 'Budget',
    body: [
      "If money is coming in and immediately going out with no plan, nothing else matters yet.",
      "A budget isn't about restriction. It's about telling your money where to go instead of wondering where it went.",
      "This is where control starts. If you can control cash flow, you can control your future.",
    ],
    color: 'border-forest/30 bg-forest/5',
    numColor: 'text-forest/20',
  },
  {
    number: '02',
    title: 'Emergency Fund',
    subtitle: 'Breathing Room',
    body: [
      "Life will happen. Car repairs, medical bills, job changes, unexpected expenses.",
      "Without an emergency fund, every emergency becomes debt. An emergency fund turns a crisis into an inconvenience.",
    ],
    callout: [
      'Starter emergency fund: $1,000',
      'Full emergency fund: 3–6 months of expenses',
    ],
    calloutLabel: 'Most people aim for',
    color: 'border-amber-200 bg-amber-50/50',
    numColor: 'text-amber-200',
  },
  {
    number: '03',
    title: 'Eliminate High Interest Debt',
    subtitle: 'Remove the Anchors',
    body: [
      "High interest debt works against you the same way investing works for you.",
      "If you're paying 20% interest on a credit card, that's like your money is growing negative 20%.",
      "Paying off high interest debt is one of the best guaranteed returns you can get.",
    ],
    color: 'border-red-200 bg-red-50/30',
    numColor: 'text-red-100',
  },
  {
    number: '04',
    title: 'Protect Your Foundation',
    subtitle: 'Insurance & Protection',
    body: [
      "Before building wealth, protect what you already have.",
      "Insurance isn't an investment. It's protection. You don't buy insurance hoping to use it. You buy it so that one bad event doesn't destroy everything you built.",
    ],
    callout: [
      'Life insurance',
      'Health insurance',
      'Disability insurance',
      'Income protection',
    ],
    calloutLabel: 'This includes things like',
    color: 'border-blue-200 bg-blue-50/30',
    numColor: 'text-blue-100',
  },
  {
    number: '05',
    title: 'Build Wealth',
    subtitle: 'Now Investing Makes Sense',
    body: [
      "Once the foundation is stable — emergency fund, debt under control, protection in place, budget working — now investing makes sense.",
      "Investing without a foundation is risky. Investing with a foundation is powerful.",
    ],
    callout: [
      'Retirement accounts',
      'Long-term investments',
      'Compound interest',
      'Consistent contributions',
    ],
    calloutLabel: 'This is where you start',
    color: 'border-forest/30 bg-forest/5',
    numColor: 'text-forest/20',
  },
  {
    number: '06',
    title: 'Long Term Planning',
    subtitle: 'Money as Freedom',
    body: [
      "This is the stage of retirement planning, college planning, estate planning, leaving a legacy, and financial independence.",
      "This is where money becomes a tool for freedom and options.",
    ],
    color: 'border-purple-200 bg-purple-50/30',
    numColor: 'text-purple-100',
  },
]

const nextSteps = [
  { label: 'Take the Quiz', href: '/quiz', desc: 'See where you stand' },
  { label: 'Financial Snapshot', href: '/snapshot', desc: 'Enter your real numbers' },
  { label: 'Budget Tool', href: '/budget-spreadsheet', desc: 'Start tracking your money' },
  { label: 'Talk it Through', href: '/work-with-me', desc: 'Have a real conversation' },
]

export default function FinancialFoundation() {
  return (
    <div className="pt-20">

      {/* ── HEADER ── */}
      <section className="py-24 max-w-3xl mx-auto px-6">
        <div className="mb-4 flex items-center gap-2">
          <Link href="/faq" className="text-xs text-stone-400 font-body hover:text-forest transition-colors">
            Learn
          </Link>
          <span className="text-stone-300 font-body text-xs">→</span>
          <span className="text-xs text-forest font-body">Foundation</span>
        </div>

        <p className="text-xs uppercase tracking-[0.2em] text-forest mb-4 font-body">Foundation — Step 1 of 4</p>
        <h1 className="font-display text-5xl font-bold text-stone-800 leading-tight mb-8">
          Building Your Financial Foundation
        </h1>

        <div className="space-y-4 text-stone-600 font-body text-lg leading-relaxed">
          <p>Most people try to build wealth before they build a foundation.</p>
          <p className="font-display text-xl font-bold text-stone-800 italic">
            {"That's like trying to build a house on sand."}
          </p>
          <p>
            The goal {"isn't"} to get rich quick. The goal is to build something that {"doesn't"} fall apart when life happens.
          </p>
          <p>
            Money {"isn't"} really about money. {"It's"} about stability, options, freedom, and peace of mind.
          </p>
          <p className="text-stone-500">
            Before investing, before retirement planning, before big financial moves — you build a foundation first.
          </p>
        </div>
      </section>

      {/* ── STEPS ── */}
      <section className="max-w-3xl mx-auto px-6 pb-16 space-y-8">
        {steps.map((step) => (
          <div key={step.number} className={`border rounded-2xl p-8 ${step.color}`}>
            <div className="flex items-start gap-6">
              <span className={`font-display text-6xl font-bold leading-none flex-shrink-0 ${step.numColor}`}>
                {step.number}
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-xs uppercase tracking-widest text-stone-400 font-body mb-1">{step.subtitle}</p>
                <h2 className="font-display text-2xl font-bold text-stone-800 mb-4">{step.title}</h2>
                <div className="space-y-3">
                  {step.body.map((para, i) => (
                    <p key={i} className="text-stone-600 font-body leading-relaxed">{para}</p>
                  ))}
                </div>
                {step.callout && (
                  <div className="mt-5 bg-white/60 border border-white rounded-xl p-4">
                    <p className="text-xs uppercase tracking-widest text-stone-400 font-body mb-3">{step.calloutLabel}</p>
                    <ul className="space-y-1.5">
                      {step.callout.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 font-body text-sm text-stone-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-stone-400 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* ── TAKEAWAY ── */}
      <section className="py-16 bg-stone-800 text-warm-cream">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs uppercase tracking-widest text-stone-400 font-body mb-4">The Growing Forward Takeaway</p>
          <h2 className="font-display text-3xl font-bold mb-8">
            Financial success usually {"isn't"} one big decision.
          </h2>
          <div className="space-y-3 text-stone-400 font-body leading-relaxed mb-8">
            <p>{"It's"} a lot of small good decisions stacked over time.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
            {['Build the foundation.', 'Protect the foundation.', 'Build on top of it.', 'Keep moving forward.'].map(line => (
              <div key={line} className="bg-stone-700 rounded-xl p-4 text-center">
                <p className="font-display text-sm font-bold text-warm-cream leading-snug">{line}</p>
              </div>
            ))}
          </div>
          <div className="border-l-2 border-forest/50 pl-6 space-y-2">
            <p className="text-stone-300 font-body italic">Slow progress is still progress.</p>
            <p className="font-display text-lg font-bold text-forest italic">Forward is forward.</p>
          </div>
        </div>
      </section>

      {/* ── NEXT STEPS ── */}
      <section className="py-24 max-w-3xl mx-auto px-6">
        <p className="text-xs uppercase tracking-[0.2em] text-forest mb-4 font-body">Next Steps</p>
        <h2 className="font-display text-3xl font-bold text-stone-800 mb-3">
          {"If you don't know where to start, start here."}
        </h2>
        <p className="text-stone-500 font-body mb-10 leading-relaxed">
          You {"don't"} have to figure everything out at once. Just take the next step and keep growing forward.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          {nextSteps.map(step => (
            <Link
              key={step.label}
              href={step.href}
              className="group flex items-center justify-between bg-warm-cream border border-warm-sand rounded-xl px-6 py-5 hover:border-forest hover:shadow-md transition-all duration-200"
            >
              <div>
                <p className="font-display font-bold text-stone-800 group-hover:text-forest transition-colors">{step.label}</p>
                <p className="text-xs text-stone-400 font-body mt-0.5">{step.desc}</p>
              </div>
              <span className="text-stone-300 group-hover:text-forest group-hover:translate-x-1 transition-all">→</span>
            </Link>
          ))}
        </div>

        {/* Back to Learn */}
        <div className="border-t border-warm-sand pt-8 flex items-center justify-between">
          <Link href="/faq" className="text-sm text-stone-400 font-body hover:text-forest transition-colors">
            ← Back to Learn
          </Link>
          <p className="font-display text-sm font-bold text-forest italic">Always be growing forward. 💪</p>
        </div>
      </section>

    </div>
  )
}
