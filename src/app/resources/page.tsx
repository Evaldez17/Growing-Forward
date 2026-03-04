'use client'

import { useState } from 'react'

const resources = [
  {
    id: 'reset',
    title: 'The Growing Forward Reset',
    description: 'Feeling overwhelmed or stuck? This simple 10-minute reset helps you clear your mind, identify what actually matters right now, and take one small step forward. It\'s a quick exercise designed to help you regain momentum when life feels chaotic.',
    tag: 'Mindset',
    file: '/growing-forward-reset.pdf',
    tagColor: 'bg-green-100 text-green-700',
  },
  {
    id: 'fomu',
    title: 'FOMU – Fear Of Messing Up',
    description: 'A lot of people talk about FOMO, but the fear that really holds people back is FOMU — the fear of messing up. This guide helps you reframe mistakes, shrink the first step, and start moving forward even when things feel uncertain.',
    tag: 'Motivation',
    file: '/fomu-fear-of-messing-up.pdf',
    tagColor: 'bg-amber-100 text-amber-700',
  },
  {
    id: 'insurance',
    title: '5 Things to Know Before You Get Life Insurance',
    description: 'Life insurance doesn\'t have to be confusing or overwhelming. This short guide explains the basics in plain language so you can understand how protection works and make thoughtful decisions for the people you care about.',
    tag: 'Protection',
    file: '/5-things-life-insurance.pdf',
    tagColor: 'bg-stone-100 text-stone-600',
  },
]

function ResourceCard({ resource }: { resource: typeof resources[0] }) {
  const [open, setOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData()
    formData.append('name', name)
    formData.append('email', email)
    formData.append('resource', resource.title)

    const res = await fetch('https://formspree.io/f/mgolbqea', {
      method: 'POST',
      body: formData,
      headers: { Accept: 'application/json' },
    })

    setLoading(false)

    if (res.ok) {
      setSubmitted(true)
    } else {
      alert('Something went wrong. Please try again.')
    }
  }

  return (
    <div className="bg-warm-cream border border-warm-sand rounded-2xl p-8 flex flex-col gap-6">
      {/* Tag */}
      <div className="flex items-center justify-between">
        <span className={`text-xs font-medium px-3 py-1 rounded-full font-body ${resource.tagColor}`}>
          {resource.tag}
        </span>
        <span className="text-xs text-stone-400 font-body uppercase tracking-widest">Free Guide</span>
      </div>

      {/* Content */}
      <div>
        <h2 className="font-display text-2xl font-bold text-stone-800 mb-3 leading-tight">
          {resource.title}
        </h2>
        <p className="text-stone-600 font-body leading-relaxed text-sm">
          {resource.description}
        </p>
      </div>

      {/* CTA / Form */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="mt-auto w-full bg-forest text-warm-cream py-3.5 rounded-full font-medium hover:bg-forest-dark transition-colors duration-200 text-sm"
        >
          Get the Guide →
        </button>
      )}

      {open && !submitted && (
        <form onSubmit={handleSubmit} className="space-y-4 mt-auto">
          <p className="text-xs text-stone-500 font-body">
            We respect your inbox. No spam. Just helpful ideas and resources.
          </p>
          <input
            type="text"
            required
            placeholder="Your name"
            value={name}
            onChange={e => setName(e.target.value)}
            className="w-full border border-warm-sand bg-white text-stone-800 placeholder-stone-400 rounded-lg px-4 py-3 font-body text-sm focus:outline-none focus:border-forest transition-colors"
          />
          <input
            type="email"
            required
            placeholder="your@email.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full border border-warm-sand bg-white text-stone-800 placeholder-stone-400 rounded-lg px-4 py-3 font-body text-sm focus:outline-none focus:border-forest transition-colors"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-forest text-warm-cream py-3.5 rounded-full font-medium hover:bg-forest-dark transition-colors duration-200 text-sm disabled:opacity-60"
          >
            {loading ? 'Sending...' : 'Send Me the Guide'}
          </button>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="w-full text-center text-xs text-stone-400 hover:text-stone-600 transition-colors"
          >
            Cancel
          </button>
        </form>
      )}

      {submitted && (
        <div className="mt-auto text-center space-y-4">
          <div className="w-12 h-12 rounded-full bg-forest/10 flex items-center justify-center mx-auto">
            <svg className="w-6 h-6 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <p className="text-stone-700 font-body text-sm font-medium">
            {"You're all set!"}
          </p>
          <a
            href={resource.file}
            download
            className="inline-block w-full text-center bg-forest text-warm-cream py-3.5 rounded-full font-medium hover:bg-forest-dark transition-colors duration-200 text-sm"
          >
            Download Now ↓
          </a>
        </div>
      )}
    </div>
  )
}

export default function Resources() {
  return (
    <div className="pt-20">
      <section className="py-24 max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-forest mb-4">Free Resources</p>
          <h1 className="font-display text-5xl font-bold text-stone-800 leading-tight mb-6">
            Resources to Help You<br />
            <span className="text-forest italic">Move Forward</span>
          </h1>
          <p className="text-stone-600 font-body text-lg leading-relaxed">
            Sometimes all it takes is a little clarity and one small step. These free guides are designed to help you reset your mindset, take action, and protect what matters most.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {resources.map(resource => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </div>

        {/* Closing line */}
        <div className="mt-12 text-center">
          <p className="font-display text-xl font-bold text-stone-800 mb-2">Not sure where to start?</p>
          <p className="text-stone-500 font-body max-w-xl mx-auto leading-relaxed">Start with whichever guide resonates most with you right now. Growth does not require perfection — it just requires movement.</p>
          <p className="text-forest font-display font-bold italic mt-3">Always be growing forward. 💪</p>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 bg-stone-800 text-warm-cream rounded-2xl p-10 text-center">
          <h2 className="font-display text-2xl font-bold mb-3">
            Want to talk through what you learned?
          </h2>
          <p className="text-stone-400 font-body mb-6">
            {"These guides are a starting point. A real conversation is where things actually move."}
          </p>
          <a
            href="/work-with-me"
            className="inline-block bg-warm-cream text-forest px-7 py-3.5 rounded-full font-medium hover:bg-warm-sand transition-colors duration-200"
          >
            Start the Conversation →
          </a>
        </div>

      </section>
    </div>
  )
}
