import Link from 'next/link'

const nextSteps = [
  { label: 'Take the Quiz', href: '/quiz', desc: 'See where you stand' },
  { label: 'Financial Snapshot', href: '/snapshot', desc: 'Enter your real numbers' },
  { label: 'Budget Tool', href: '/budget-spreadsheet', desc: 'Start tracking your money' },
  { label: 'Talk it Through', href: '/work-with-me', desc: 'Have a real conversation' },
]

export default function WhyLifeInsuranceExists() {
  return (
    <div className="pt-20">

      {/* ── HEADER ── */}
      <section className="py-24 max-w-3xl mx-auto px-6">
        <div className="mb-4 flex items-center gap-2">
          <Link href="/learn" className="text-xs text-stone-400 font-body hover:text-forest transition-colors">Learn</Link>
          <span className="text-stone-300 text-xs">→</span>
          <span className="text-xs text-amber-600 font-body">Protect</span>
        </div>

        <p className="text-xs uppercase tracking-[0.2em] text-amber-600 mb-4 font-body">Protect — Topic 1 of 4</p>
        <h1 className="font-display text-5xl font-bold text-stone-800 leading-tight mb-8">
          Why Life Insurance Exists
        </h1>

        <div className="space-y-4 text-stone-600 font-body text-lg leading-relaxed">
          <p className="font-display text-2xl font-bold text-stone-800">
            {"Life insurance isn't really about death."}
          </p>
          <p>{"It's about protecting the people still living."}</p>
          <p>
            If someone depends on your income — a spouse, kids, family, or anyone who relies on you — then your income is one of your biggest financial assets.
          </p>
          <p className="font-display text-xl font-bold text-stone-800 italic">
            Life insurance simply helps replace that income if something happens to you.
          </p>
          <p>
            {"It's not about fear. It's about responsibility, protection, and care for the people you love."}
          </p>
        </div>
      </section>

      {/* ── WHAT IT CAN DO ── */}
      <section className="py-16 bg-warm-sand/40">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-amber-600 mb-4 font-body">Simple Explanation</p>
          <h2 className="font-display text-3xl font-bold text-stone-800 mb-8">What Life Insurance Can Do</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-warm-sand rounded-2xl p-6">
              <p className="text-xs uppercase tracking-widest text-forest mb-4 font-body">With Life Insurance</p>
              <ul className="space-y-3">
                {[
                  'Pay off a mortgage',
                  'Replace lost income',
                  'Cover monthly bills',
                  'Pay for college',
                  'Cover final expenses',
                  'Help a family stay on their feet',
                ].map(item => (
                  <li key={item} className="flex items-start gap-3 font-body text-sm text-stone-600">
                    <span className="w-5 h-5 rounded-full bg-forest/10 border border-forest/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white border border-warm-sand rounded-2xl p-6">
              <p className="text-xs uppercase tracking-widest text-red-400 mb-4 font-body">Without Life Insurance</p>
              <ul className="space-y-3">
                {[
                  'Selling a home',
                  'Taking on debt',
                  'Working extra jobs',
                  'Delaying future plans',
                  'Struggling to keep up with bills',
                ].map(item => (
                  <li key={item} className="flex items-start gap-3 font-body text-sm text-stone-600">
                    <span className="w-5 h-5 rounded-full bg-red-50 border border-red-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mt-8 text-stone-500 font-body leading-relaxed">
            Without life insurance, families often have to make financial decisions while they are already dealing with emotional stress. Life insurance helps make sure a painful situation does not also become a financial disaster.
          </p>
        </div>
      </section>

      {/* ── WHO NEEDS IT ── */}
      <section className="py-16 max-w-3xl mx-auto px-6">
        <p className="text-xs uppercase tracking-[0.2em] text-amber-600 mb-4 font-body">Why It Matters</p>
        <h2 className="font-display text-3xl font-bold text-stone-800 mb-8">Who Typically Needs Life Insurance</h2>

        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8 mb-8">
          <p className="text-sm font-body font-medium text-stone-700 mb-4">Life insurance is usually worth looking into if:</p>
          <ul className="space-y-3">
            {[
              'You have kids',
              'You are married or in a relationship',
              'Someone depends on your income',
              'You have a mortgage',
              'You have debts that someone else would have to deal with',
              'You want to leave something behind for the people you care about',
            ].map(item => (
              <li key={item} className="flex items-start gap-3 font-body text-sm text-stone-700">
                <span className="w-5 h-5 rounded-full bg-amber-100 border border-amber-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <p className="text-stone-500 font-body leading-relaxed">
          If nobody depends on your income and you have no major obligations, you may not need much coverage. But if people rely on you, protection matters.
        </p>
      </section>

      {/* ── NOT AN INVESTMENT ── */}
      <section className="py-16 bg-stone-800 text-warm-cream">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-stone-400 mb-4 font-body">Simple Example</p>
          <h2 className="font-display text-3xl font-bold mb-6">Life Insurance Is Not an Investment</h2>
          <p className="text-stone-400 font-body leading-relaxed mb-10">
            This is important to understand. Life insurance is not meant to grow wealth. It is meant to protect income, protect people, and protect the foundation you are building.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { tool: 'Budgeting', job: 'Creates control' },
              { tool: 'Emergency Fund', job: 'Creates stability' },
              { tool: 'Insurance', job: 'Creates protection' },
              { tool: 'Investing', job: 'Creates growth' },
            ].map(item => (
              <div key={item.tool} className={`rounded-xl p-4 text-center ${item.tool === 'Insurance' ? 'bg-amber-500/20 border border-amber-500/30' : 'bg-stone-700'}`}>
                <p className={`font-display font-bold text-sm mb-1 ${item.tool === 'Insurance' ? 'text-amber-300' : 'text-warm-cream'}`}>{item.tool}</p>
                <p className="text-stone-400 font-body text-xs">{item.job}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-stone-400 font-body text-sm italic border-l-2 border-amber-500/40 pl-4">
            Each tool has a different job. Insurance is protection — not a savings account.
          </p>
        </div>
      </section>

      {/* ── PROTECTION FIRST ── */}
      <section className="py-16 max-w-3xl mx-auto px-6">
        <p className="text-xs uppercase tracking-[0.2em] text-amber-600 mb-4 font-body">Why Protection Matters First</p>
        <h2 className="font-display text-3xl font-bold text-stone-800 mb-6">
          Build on a protected foundation.
        </h2>
        <p className="text-stone-600 font-body leading-relaxed mb-8">
          A lot of people want to jump straight to building wealth — and that makes sense. But before building bigger, it helps to make sure the foundation is protected.
        </p>

        <div className="space-y-3 mb-8">
          {[
            { step: '01', label: 'Emergency savings', desc: 'A buffer for unexpected events' },
            { step: '02', label: 'Insurance', desc: 'Protection if income is lost' },
            { step: '03', label: 'Debt', desc: 'Remove what works against you' },
            { step: '04', label: 'A basic plan', desc: 'Know where you are going' },
          ].map(item => (
            <div key={item.step} className="flex items-center gap-4 bg-warm-cream border border-warm-sand rounded-xl px-5 py-4">
              <span className="font-display text-2xl font-bold text-amber-200">{item.step}</span>
              <div>
                <p className="font-body font-medium text-stone-800 text-sm">{item.label}</p>
                <p className="font-body text-xs text-stone-400">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="font-display text-lg font-bold text-stone-800 italic border-l-2 border-amber-400 pl-4">
          Protection first. Then build. Then grow.
        </p>
      </section>

      {/* ── TAKEAWAY ── */}
      <section className="py-16 bg-warm-sand/40">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-forest mb-4 font-body">Growing Forward Takeaway</p>
          <div className="space-y-4 text-stone-600 font-body leading-relaxed text-lg">
            <p className="font-display text-2xl font-bold text-stone-800">
              Life insurance is not for the person who dies.
            </p>
            <p>It is for the people who keep living.</p>
            <p>
              It is a way to care for the people you love, even if life takes an unexpected turn.
            </p>
            <p className="font-display text-xl font-bold text-forest italic">
              This is not about fear. It is about preparation, protection, and peace of mind.
            </p>
          </div>
        </div>
      </section>

      {/* ── NEXT STEPS ── */}
      <section className="py-24 max-w-3xl mx-auto px-6">
        <p className="text-xs uppercase tracking-[0.2em] text-forest mb-4 font-body">Next Steps</p>
        <h2 className="font-display text-3xl font-bold text-stone-800 mb-3">
          Not sure if you need life insurance or how much makes sense?
        </h2>
        <p className="text-stone-500 font-body mb-10 leading-relaxed">
          You do not have to know everything right now. Just take the next step and keep growing forward.
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

        <div className="border-t border-warm-sand pt-8 flex items-center justify-between">
          <Link href="/learn" className="text-sm text-stone-400 font-body hover:text-forest transition-colors">
            ← Back to Learn
          </Link>
          <p className="font-display text-sm font-bold text-forest italic">Always be growing forward. 💪</p>
        </div>
      </section>

    </div>
  )
}
