import Link from 'next/link'

const sections = [
  {
    id: 'foundation',
    label: 'Foundation',
    title: 'Building Your Financial Foundation',
    description: 'Start here. Understand how money works before anything else.',
    color: 'bg-forest/5 border-forest/20',
    labelColor: 'text-forest',
    dotColor: 'bg-forest',
    topics: [
      { title: 'Building Your Financial Foundation', href: '/learn/financial-foundation', ready: true },
      { title: 'How Money Works', href: '/learn/how-money-works', ready: false },
      { title: 'The Cost of Waiting', href: '/learn/cost-of-waiting', ready: false },
      { title: 'Rule of 72', href: '/learn/rule-of-72', ready: false },
      { title: 'Compound Interest', href: '/learn/compound-interest', ready: false },
      { title: 'Inflation', href: '/learn/inflation', ready: false },
    ],
  },
  {
    id: 'protect',
    label: 'Protect',
    title: 'Protecting What You Have',
    description: 'Before you build, make sure what you have is protected.',
    color: 'bg-amber-50 border-amber-200',
    labelColor: 'text-amber-600',
    dotColor: 'bg-amber-500',
    topics: [
      { title: 'Why Life Insurance Exists', href: '/learn/why-life-insurance', ready: false },
      { title: 'Term vs Whole Life', href: '/learn/term-vs-whole-life', ready: false },
      { title: 'How Much Coverage Do I Need', href: '/learn/how-much-coverage', ready: false },
      { title: 'Income Protection', href: '/learn/income-protection', ready: false },
    ],
  },
  {
    id: 'build',
    label: 'Build',
    title: 'Building Stability',
    description: 'Create systems that make your money work for you.',
    color: 'bg-blue-50 border-blue-200',
    labelColor: 'text-blue-600',
    dotColor: 'bg-blue-500',
    topics: [
      { title: 'Emergency Fund', href: '/learn/emergency-fund', ready: false },
      { title: 'Budgeting Basics', href: '/learn/budgeting-basics', ready: false },
      { title: 'Debt Payoff Strategies', href: '/learn/debt-payoff-strategies', ready: false },
      { title: 'Paying Yourself First', href: '/learn/paying-yourself-first', ready: false },
    ],
  },
  {
    id: 'grow',
    label: 'Grow',
    title: 'Growing Your Future',
    description: 'Once the foundation is set, learn how to grow long term.',
    color: 'bg-purple-50 border-purple-200',
    labelColor: 'text-purple-600',
    dotColor: 'bg-purple-500',
    topics: [
      { title: 'Investing Basics', href: '/learn/investing-basics', ready: false },
      { title: 'Retirement Accounts', href: '/learn/retirement-accounts', ready: false },
      { title: 'Financial Independence', href: '/learn/financial-independence', ready: false },
      { title: 'The Power of Time in the Market', href: '/learn/power-of-time', ready: false },
    ],
  },
]

export default function Learn() {
  return (
    <div className="pt-20">

      {/* ── HEADER ── */}
      <section className="py-24 max-w-4xl mx-auto px-6">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-forest mb-4 font-body">Financial Education</p>
          <h1 className="font-display text-5xl font-bold text-stone-800 leading-tight mb-6">
            Learn the Basics.<br />
            <span className="text-forest italic">Build from There.</span>
          </h1>
          <p className="text-stone-600 font-body text-lg leading-relaxed mb-6">
            This is a guided path — not a blog. Each section builds on the last, starting with the fundamentals and moving toward long-term growth.
          </p>
          <p className="text-stone-400 font-body text-sm italic">
            No jargon. No sales pitch. Just clear, honest information.
          </p>
        </div>
      </section>

      {/* ── PATH OVERVIEW ── */}
      <section className="pb-8 max-w-4xl mx-auto px-6">
        <div className="flex flex-wrap items-center gap-3 mb-16">
          {sections.map((s, i) => (
            <div key={s.id} className="flex items-center gap-3">
              <div className={`flex items-center gap-2 px-4 py-2 rounded-full border ${s.color}`}>
                <span className={`w-2 h-2 rounded-full ${s.dotColor}`} />
                <span className={`text-xs font-medium font-body ${s.labelColor}`}>{s.label}</span>
              </div>
              {i < sections.length - 1 && (
                <span className="text-stone-300 font-body">→</span>
              )}
            </div>
          ))}
        </div>

        {/* ── SECTIONS ── */}
        <div className="space-y-16">
          {sections.map((section, sIdx) => (
            <div key={section.id}>
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-8 h-8 rounded-full ${section.dotColor} flex items-center justify-center flex-shrink-0 mt-1`}>
                  <span className="text-white text-xs font-bold font-body">{sIdx + 1}</span>
                </div>
                <div>
                  <p className={`text-xs uppercase tracking-widest font-body mb-1 ${section.labelColor}`}>{section.label}</p>
                  <h2 className="font-display text-2xl font-bold text-stone-800 mb-1">{section.title}</h2>
                  <p className="text-stone-500 font-body text-sm">{section.description}</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-3 ml-12">
                {section.topics.map(topic => (
                  topic.ready ? (
                    <Link
                      key={topic.title}
                      href={topic.href}
                      className={`group flex items-center justify-between px-5 py-4 rounded-xl border ${section.color} hover:shadow-md transition-all duration-200`}
                    >
                      <span className="font-body text-sm text-stone-700 group-hover:text-stone-900 font-medium">{topic.title}</span>
                      <span className={`text-xs font-body ${section.labelColor} group-hover:translate-x-1 transition-transform`}>Read →</span>
                    </Link>
                  ) : (
                    <div
                      key={topic.title}
                      className="flex items-center justify-between px-5 py-4 rounded-xl border border-warm-sand bg-warm-cream/50"
                    >
                      <span className="font-body text-sm text-stone-400">{topic.title}</span>
                      <span className="text-xs font-body text-stone-300 bg-stone-100 px-2 py-0.5 rounded-full">Coming soon</span>
                    </div>
                  )
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="py-24 max-w-4xl mx-auto px-6">
        <div className="bg-stone-800 text-warm-cream rounded-2xl p-10">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-xs uppercase tracking-widest text-stone-400 font-body mb-3">Ready to Apply What You Learn?</p>
              <h2 className="font-display text-2xl font-bold mb-3">
                Knowledge is the first step. Action is the next.
              </h2>
              <p className="text-stone-400 font-body text-sm leading-relaxed">
                Use the tools below to apply what you're learning to your actual financial situation.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'Take the Quiz', href: '/quiz' },
                { label: 'Financial Snapshot', href: '/snapshot' },
                { label: 'Budget Tool', href: '/budget-spreadsheet' },
                { label: 'Talk it Through', href: '/work-with-me' },
              ].map(cta => (
                <Link
                  key={cta.label}
                  href={cta.href}
                  className="text-center bg-stone-700 hover:bg-forest text-warm-cream px-4 py-3 rounded-xl text-sm font-body font-medium transition-colors duration-200"
                >
                  {cta.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
