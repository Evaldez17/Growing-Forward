import Link from 'next/link'

export default function Transparency() {
  return (
    <div className="pt-20">
      <section className="py-24 max-w-3xl mx-auto px-6">

        <p className="text-xs uppercase tracking-[0.2em] text-forest mb-4">No Hidden Agenda</p>
        <h1 className="font-display text-5xl font-bold text-stone-800 leading-tight mb-16">
          Transparency
        </h1>

        <div className="space-y-6 text-stone-600 font-body text-lg leading-relaxed">
          <p>If you choose to purchase a policy through Primerica, I may be compensated through commissions.</p>
          <p>There is no cost to have a conversation or review options.</p>

          <div className="py-4" />

          <p>I don't believe in pressure-driven decisions.</p>
          <p>I believe in clarity, honesty, and giving people space to choose what makes sense.</p>

          <div className="py-4" />

          <p>You should always understand what you're signing and why.</p>
          <p>If something doesn't fit your situation, I'll tell you that.</p>
        </div>

        <div className="mt-16 pt-10 border-t border-warm-sand">
          <p className="font-display text-xl font-bold text-stone-800 italic">
            Morals first. Always.
          </p>
        </div>

        <div className="mt-16 bg-stone-800 text-warm-cream rounded-2xl p-10">
          <h2 className="font-display text-2xl font-bold mb-3">
            Questions about any of this?
          </h2>
          <p className="text-stone-400 font-body mb-6">
            Ask me directly. I'll give you a straight answer.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-warm-amber/20 text-warm-amber border border-warm-amber/30 px-6 py-3 rounded-full font-medium hover:bg-warm-amber/30 transition-colors"
          >
            Get in touch →
          </Link>
        </div>

      </section>
    </div>
  )
}
