'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function WorkWithMe() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)

    const form = e.currentTarget
    const data = new FormData(form)

    // Replace YOUR_FORMSPREE_ID with your actual Formspree form ID
    const res = await fetch('https://formspree.io/f/YOUR_FORMSPREE_ID', {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' },
    })

    setLoading(false)

    if (res.ok) {
      router.push('/thank-you')
    } else {
      alert('Something went wrong. Please try emailing me directly.')
    }
  }

  return (
    <div className="pt-20">
      <section className="py-24 max-w-5xl mx-auto px-6">

        {/* Page Title */}
        <div className="mb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-forest mb-4">Work With Me</p>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-stone-800 leading-tight mb-4">
            Start the Conversation
          </h1>
          <p className="text-xl text-stone-500 font-body">
            Confident decisions come from clarity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left — context */}
          <div>

            {/* What Happens Next */}
            <div className="mb-12">
              <h2 className="font-display text-2xl font-bold text-stone-800 mb-8">
                What Happens Next
              </h2>
              <div className="space-y-6">
                {[
                  'We talk through your situation.',
                  'I explain your options clearly.',
                  'You decide what makes sense.',
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

            {/* Motivational dash */}
            <div className="border-l-2 border-forest/30 pl-6 space-y-3">
              <p className="text-stone-600 font-body leading-relaxed">
                You don't have to have everything figured out.
              </p>
              <p className="text-stone-600 font-body leading-relaxed">
                Sometimes growth starts with one honest conversation.
              </p>
              <p className="font-display text-stone-800 font-bold italic text-lg">
                Forward doesn't mean fast. It means intentional.
              </p>
            </div>

          </div>

          {/* Right — form */}
          <div className="bg-stone-800 rounded-2xl p-8 md:p-10">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-forest/20 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-display text-2xl font-bold text-warm-cream mb-3">
                  Thanks. I've got it.
                </h3>
                <p className="text-stone-400 font-body">
                  I'll personally reach out soon. No automated responses — just a real message from me.
                </p>
              </div>
            ) : (
              <>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-stone-400 mb-2">
                      Name <span className="text-warm-amber">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your name"
                      className="w-full bg-stone-700 border border-stone-600 text-warm-cream placeholder-stone-500 rounded-lg px-4 py-3 font-body text-sm focus:outline-none focus:border-forest-light transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-widest text-stone-400 mb-2">
                      Email <span className="text-warm-amber">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="your@email.com"
                      className="w-full bg-stone-700 border border-stone-600 text-warm-cream placeholder-stone-500 rounded-lg px-4 py-3 font-body text-sm focus:outline-none focus:border-forest-light transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-widest text-stone-400 mb-2">
                      Phone <span className="text-stone-500">(optional)</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="(555) 000-0000"
                      className="w-full bg-stone-700 border border-stone-600 text-warm-cream placeholder-stone-500 rounded-lg px-4 py-3 font-body text-sm focus:outline-none focus:border-forest-light transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-widest text-stone-400 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="What's on your mind? No wrong answers."
                      className="w-full bg-stone-700 border border-stone-600 text-warm-cream placeholder-stone-500 rounded-lg px-4 py-3 font-body text-sm focus:outline-none focus:border-forest-light transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-forest text-warm-cream py-4 rounded-full font-medium hover:bg-forest-dark transition-colors duration-200 disabled:opacity-60"
                  >
                    {loading ? 'Sending...' : 'Begin the Conversation'}
                  </button>

                  <p className="text-center text-xs text-stone-500 font-body">
                    I'll reach out personally.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
