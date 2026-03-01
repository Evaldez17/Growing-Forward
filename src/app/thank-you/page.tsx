import Link from 'next/link'

export default function ThankYou() {
  return (
    <div className="pt-20">
      <section className="py-24 max-w-3xl mx-auto px-6">

        {/* Title */}
        <div className="mb-12">
          <div className="w-16 h-16 rounded-full bg-forest/10 border border-forest/20 flex items-center justify-center mb-8">
            <svg className="w-8 h-8 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-stone-800 leading-tight mb-6">
            Message received.
          </h1>
          <div className="space-y-3 text-stone-600 font-body text-lg leading-relaxed">
            <p>{"I'll personally reach out soon."}</p>
            <p>{"There's no automation here. No scripts. Just a real conversation."}</p>
          </div>
        </div>

        {/* What Happens Next */}
        <div className="bg-warm-sand/50 border border-warm-sand rounded-2xl p-8 md:p-10 mb-16">
          <h2 className="font-display text-2xl font-bold text-stone-800 mb-8">
            What Happens Next
          </h2>
          <div className="space-y-6">
            {[
              "We'll talk through your situation.",
              "I'll explain your options clearly.",
              "You decide what makes sense.",
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-forest/10 border border-forest/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="font-display text-sm font-bold text-forest">{i + 1}</span>
                </div>
                <p className="text-stone-700 font-body text-lg leading-snug pt-1">{step}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-stone-400 font-body italic ml-12">
            Nothing rushed. Nothing forced.
          </p>
        </div>

        {/* Closer */}
        <div className="border-l-2 border-forest/30 pl-6 space-y-4 mb-16">
          <p className="text-stone-700 font-body text-lg leading-relaxed">
            You just took a responsible step. That matters.
          </p>
          <p className="text-stone-600 font-body leading-relaxed">
            {"Growth doesn't always look dramatic. Sometimes it looks like one honest decision."}
          </p>
          <p className="font-display text-stone-800 font-bold italic text-xl">
            {"Forward doesn't mean fast. It means intentional."}
          </p>
        </div>

        {/* Footer line */}
        <div className="pt-10 border-t border-warm-sand flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="text-stone-400 font-body italic">
            {"Different seasons. Different reasons. But always — keep growing forward."}
          </p>
          <Link
            href="/"
            className="flex-shrink-0 border border-stone-300 text-stone-600 px-6 py-3 rounded-full font-medium hover:border-forest hover:text-forest transition-colors duration-200 text-sm"
          >
            Back to home
          </Link>
        </div>

      </section>
    </div>
  )
}
