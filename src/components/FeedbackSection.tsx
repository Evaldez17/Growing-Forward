'use client'

import { useState } from 'react'

const PROMPTS = [
  "What did this make you realize?",
  "What felt off or confusing?",
  "What would make this more helpful?",
]

const QUICK_OPTIONS = [
  "It made me think",
  "It felt accurate",
  "It felt off",
  "I want to learn more",
  "I'd share this",
]

interface FeedbackSectionProps {
  source: 'quiz' | 'snapshot'
}

export default function FeedbackSection({ source }: FeedbackSectionProps) {
  const [anonymous, setAnonymous] = useState(false)
  const [name, setName] = useState('')
  const [response, setResponse] = useState('')
  const [helpfulness, setHelpfulness] = useState(7)
  const [selected, setSelected] = useState<string[]>([])
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [activePrompt, setActivePrompt] = useState(0)

  function toggleOption(opt: string) {
    setSelected(prev =>
      prev.includes(opt) ? prev.filter(o => o !== opt) : [...prev, opt]
    )
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!response.trim()) return
    setLoading(true)

    const formData = new FormData()
    formData.append('source', source)
    formData.append('name', anonymous ? 'Anonymous' : name || 'Anonymous')
    formData.append('prompt', PROMPTS[activePrompt])
    formData.append('response', response)
    formData.append('helpfulness', String(helpfulness))
    formData.append('tags', selected.join(', '))
    formData.append('_subject', `Growing Forward Feedback — ${source}`)

    const res = await fetch('https://formspree.io/f/mgolbqea', {
      method: 'POST',
      body: formData,
      headers: { Accept: 'application/json' },
    })

    setLoading(false)
    if (res.ok) setSubmitted(true)
    else alert('Something went wrong. Please try again.')
  }

  // ── SUBMITTED STATE ──────────────────────────────────────────
  if (submitted) {
    return (
      <div className="mt-16 border-t border-warm-sand pt-12">
        <div className="max-w-xl mx-auto text-center space-y-4">
          <div className="w-14 h-14 rounded-full bg-forest/10 flex items-center justify-center mx-auto">
            <svg className="w-7 h-7 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="font-display text-2xl font-bold text-stone-800">
            Appreciate you.
          </h3>
          <p className="text-stone-500 font-body leading-relaxed">
            This helps more than you think. Real feedback from real people is how this gets better — for everyone who comes after you.
          </p>
          <p className="text-forest font-display font-bold italic text-sm">
            You just helped improve this. 💪
          </p>
        </div>
      </div>
    )
  }

  // ── FORM ─────────────────────────────────────────────────────
  return (
    <div className="mt-16 border-t border-warm-sand pt-12">
      <div className="max-w-xl mx-auto">

        {/* Header */}
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.2em] text-forest mb-3 font-body">Help Build This</p>
          <h3 className="font-display text-3xl font-bold text-stone-800 mb-3">
            Be Real For a Second.
          </h3>
          <p className="text-stone-500 font-body leading-relaxed">
            {"This isn't finished. You're part of building it. Your honest take — good or critical — is what makes this better for everyone."}
          </p>
          <p className="text-xs text-stone-400 font-body mt-2 italic">
            Be honest. That's how this gets better.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Prompt selector */}
          <div>
            <p className="text-sm font-medium text-stone-700 font-body mb-3">Pick a prompt to respond to:</p>
            <div className="space-y-2">
              {PROMPTS.map((prompt, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActivePrompt(i)}
                  className={`w-full text-left px-4 py-3 rounded-xl border font-body text-sm transition-all ${
                    activePrompt === i
                      ? 'border-forest bg-forest/5 text-stone-800'
                      : 'border-warm-sand bg-white text-stone-500 hover:border-forest/40'
                  }`}
                >
                  <span className={`inline-block w-4 h-4 rounded-full border mr-2 align-middle transition-colors ${
                    activePrompt === i ? 'border-forest bg-forest' : 'border-stone-300'
                  }`} />
                  {prompt}
                </button>
              ))}
            </div>
          </div>

          {/* Main text input */}
          <div>
            <textarea
              required
              rows={4}
              value={response}
              onChange={e => setResponse(e.target.value)}
              placeholder="Say what's actually on your mind. No wrong answers here."
              className="w-full border border-warm-sand bg-white text-stone-800 placeholder-stone-300 rounded-xl px-4 py-3 font-body text-sm focus:outline-none focus:border-forest transition-colors resize-none"
            />
            <p className="text-xs text-stone-400 font-body mt-1">Your input helps improve this for everyone.</p>
          </div>

          {/* Quick tags */}
          <div>
            <p className="text-sm font-medium text-stone-700 font-body mb-3">
              Quick reaction <span className="text-stone-400 font-normal">(optional — pick any)</span>
            </p>
            <div className="flex flex-wrap gap-2">
              {QUICK_OPTIONS.map(opt => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => toggleOption(opt)}
                  className={`px-4 py-2 rounded-full text-xs font-body font-medium border transition-all ${
                    selected.includes(opt)
                      ? 'border-forest bg-forest/5 text-forest'
                      : 'border-warm-sand bg-white text-stone-500 hover:border-forest/40'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          {/* Helpfulness slider */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <p className="text-sm font-medium text-stone-700 font-body">
                How helpful was this? <span className="text-stone-400 font-normal">(optional)</span>
              </p>
              <span className="text-sm font-bold text-forest font-body">{helpfulness} / 10</span>
            </div>
            <input
              type="range" min={1} max={10} step={1}
              value={helpfulness}
              onChange={e => setHelpfulness(Number(e.target.value))}
              className="w-full accent-forest"
            />
            <div className="flex justify-between text-xs text-stone-300 font-body mt-1">
              <span>Not very</span>
              <span>Extremely</span>
            </div>
          </div>

          {/* Name / anonymous */}
          <div className="bg-warm-sand/40 border border-warm-sand rounded-xl p-5 space-y-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-stone-700 font-body">Share your name?</p>
              <button
                type="button"
                onClick={() => setAnonymous(!anonymous)}
                className={`relative w-11 h-6 rounded-full transition-colors ${anonymous ? 'bg-stone-300' : 'bg-forest'}`}
              >
                <span className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-all ${anonymous ? 'left-1' : 'left-6'}`} />
              </button>
            </div>
            {!anonymous && (
              <input
                type="text"
                placeholder="First name or nickname (optional)"
                value={name}
                onChange={e => setName(e.target.value)}
                className="w-full border border-warm-sand bg-white text-stone-800 placeholder-stone-300 rounded-lg px-4 py-3 font-body text-sm focus:outline-none focus:border-forest transition-colors"
              />
            )}
            {anonymous && (
              <p className="text-xs text-stone-400 font-body italic">
                {"Your response will be shared anonymously. No email required — ever."}
              </p>
            )}
            <p className="text-xs text-stone-400 font-body">
              {"No email required. If you share your name, it may appear alongside your feedback as this tool grows — with your permission."}
            </p>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading || !response.trim()}
            className="w-full bg-forest text-warm-cream py-4 rounded-full font-medium hover:bg-forest-dark transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {loading ? 'Sending...' : 'Submit Feedback →'}
          </button>

          <p className="text-center text-xs text-stone-400 font-body italic">
            {"This is a real person reading these. Not a bot. Not a database dump. Everett reads them."}
          </p>

        </form>
      </div>
    </div>
  )
}
