'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function BudgetSpreadsheet() {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData()
    formData.append('name', name)
    formData.append('email', email)
    formData.append('resource', 'Monthly Budget Spreadsheet')

    const res = await fetch('https://formspree.io/f/mgolbqea', {
      method: 'POST',
      body: formData,
      headers: { Accept: 'application/json' },
    })

    setLoading(false)

    if (res.ok) {
      const params = new URLSearchParams({
        file: '/growing-forward-monthly-budget.xlsx',
        name: name,
        title: 'Monthly Budget Spreadsheet',
      })
      router.push(`/download-confirm?${params.toString()}`)
    } else {
      alert('Something went wrong. Please try again.')
    }
  }

  return (
    <div className="pt-20">

      {/* ── HERO ── */}
      <section className="py-24 max-w-4xl mx-auto px-6">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-forest mb-4 font-body">Free Resource</p>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-stone-800 leading-tight mb-6">
            Monthly Budget<br />
            <span className="text-forest italic">Spreadsheet</span>
          </h1>
          <p className="text-stone-600 font-body text-xl leading-relaxed mb-8">
            A simple way to track your income, expenses, and financial progress each month.
          </p>
          <button
            onClick={() => {
              setOpen(true)
              setTimeout(() => document.getElementById('download-form')?.scrollIntoView({ behavior: 'smooth' }), 100)
            }}
            className="bg-forest text-warm-cream px-8 py-4 rounded-full font-medium hover:bg-forest-dark transition-colors duration-200 text-sm"
          >
            Get the Spreadsheet →
          </button>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="py-20 bg-warm-sand/40">
        <div className="max-w-3xl mx-auto px-6">
          <p className="font-display text-2xl font-bold text-stone-800 mb-6 leading-snug">
            Most people {"don't"} have a money problem — they have an awareness problem.
          </p>
          <div className="space-y-4 text-stone-600 font-body leading-relaxed text-lg">
            <p>
              If you {"don't"} know where your money is going, {"it's"} almost impossible to move forward financially. This monthly budget spreadsheet is designed to give you a clear picture of your income, spending, savings, and financial habits in one place.
            </p>
            <p className="font-display text-stone-800 font-bold italic text-xl">
              {"This isn't about perfection. It's about awareness and progress."}
            </p>
          </div>
        </div>
      </section>

      {/* ── WHAT IT HELPS YOU DO ── */}
      <section className="py-20 max-w-4xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-forest mb-4 font-body">What This Helps You Do</p>
            <h2 className="font-display text-3xl font-bold text-stone-800 mb-8">
              One place for your full financial picture.
            </h2>
            <ul className="space-y-3">
              {[
                'Track monthly income',
                'Track monthly expenses',
                'See where your money is going',
                'Calculate your monthly cash flow',
                'Track savings each month',
                'Stay consistent with financial goals',
                'Build better financial habits over time',
              ].map(item => (
                <li key={item} className="flex items-start gap-3 font-body text-stone-600">
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

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-forest mb-4 font-body">Who This Is For</p>
            <h2 className="font-display text-3xl font-bold text-stone-800 mb-8">
              {"If any of this sounds like you — this is for you."}
            </h2>
            <ul className="space-y-3">
              {[
                'People who want to start budgeting',
                'People who feel like their money disappears each month',
                'People trying to pay off debt',
                'People trying to start saving',
                'Anyone who wants more control over their finances',
              ].map(item => (
                <li key={item} className="flex items-start gap-3 font-body text-stone-600">
                  <span className="w-5 h-5 rounded-full bg-amber-100 border border-amber-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* ── HOW TO USE IT ── */}
      <section className="py-20 bg-stone-800 text-warm-cream">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-stone-400 mb-4 font-body">How To Use It</p>
          <h2 className="font-display text-3xl font-bold mb-12">Five steps. That{"'"}s it.</h2>
          <div className="space-y-6">
            {[
              ['Enter your monthly income', 'Start with what comes in every month — all income sources combined.'],
              ['Enter your monthly expenses', 'List everything going out — fixed bills, variable spending, subscriptions.'],
              ['Review your total spending', 'See the full picture of where your money is actually going.'],
              ['See your monthly cash flow', 'Understand what{"\'"}s left after expenses — your surplus or deficit.'],
              ['Adjust and improve each month', 'Use what you learn to make small improvements over time.'],
            ].map(([title, body], i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="w-10 h-10 rounded-full bg-forest flex items-center justify-center flex-shrink-0 font-display font-bold text-warm-cream text-sm">
                  {i + 1}
                </div>
                <div>
                  <p className="font-display font-bold text-warm-cream mb-1">{title}</p>
                  <p className="text-stone-400 font-body text-sm leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-10 text-stone-400 font-body italic border-l-2 border-forest/40 pl-4">
            {"The goal isn't to be perfect the first month. The goal is to improve over time."}
          </p>
        </div>
      </section>

      {/* ── DOWNLOAD FORM ── */}
      <section id="download-form" className="py-24 max-w-xl mx-auto px-6">
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-[0.2em] text-forest mb-4 font-body">Free Download</p>
          <h2 className="font-display text-4xl font-bold text-stone-800 mb-4">
            Download the Monthly Budget Spreadsheet
          </h2>
          <p className="text-stone-600 font-body leading-relaxed">
            Enter your email and {"we'll"} send you the spreadsheet so you can start tracking your money and building better financial habits.
          </p>
        </div>

        {!open ? (
          <div className="text-center">
            <button
              onClick={() => setOpen(true)}
              className="bg-forest text-warm-cream px-10 py-4 rounded-full font-medium hover:bg-forest-dark transition-colors duration-200"
            >
              Get the Spreadsheet →
            </button>
            <p className="text-xs text-stone-400 font-body mt-3 italic">
              We respect your inbox. No spam. Just helpful ideas and resources.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 bg-warm-cream border border-warm-sand rounded-2xl p-8">
            <p className="text-xs text-stone-500 font-body text-center">
              We respect your inbox. No spam. Just helpful ideas and resources.
            </p>
            <input
              type="text"
              required
              placeholder="Your name"
              value={name}
              onChange={e => setName(e.target.value)}
              className="w-full border border-warm-sand bg-white text-stone-800 placeholder-stone-400 rounded-xl px-4 py-3.5 font-body text-sm focus:outline-none focus:border-forest transition-colors"
            />
            <input
              type="email"
              required
              placeholder="your@email.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full border border-warm-sand bg-white text-stone-800 placeholder-stone-400 rounded-xl px-4 py-3.5 font-body text-sm focus:outline-none focus:border-forest transition-colors"
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-forest text-warm-cream py-4 rounded-full font-medium hover:bg-forest-dark transition-colors duration-200 disabled:opacity-60"
            >
              {loading ? 'Sending...' : 'Send Me the Spreadsheet'}
            </button>
            <p className="font-display text-center text-forest italic font-bold text-sm pt-2">
              Always be growing forward.
            </p>
          </form>
        )}
      </section>

      {/* ── CONNECT TO OTHER TOOLS ── */}
      <section className="py-20 bg-warm-sand/40">
        <div className="max-w-4xl mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <p className="text-xs uppercase tracking-[0.2em] text-forest mb-4 font-body">Keep Going</p>
            <h2 className="font-display text-3xl font-bold text-stone-800 mb-4">
              Once {"you've"} tracked your budget, the next step is understanding your overall financial picture.
            </h2>
            <p className="text-stone-500 font-body leading-relaxed">
              These tools work together to help you understand where you are and where you can grow.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Financial Readiness Quiz',
                desc: 'Answer 10 questions and get a personalized financial readiness score.',
                href: '/quiz',
                label: 'Take the Quiz →',
                color: 'bg-forest/5 border-forest/20',
              },
              {
                title: 'Financial Snapshot Tool',
                desc: 'Enter your real numbers and get an instant financial health snapshot.',
                href: '/snapshot',
                label: 'Get Your Snapshot →',
                color: 'bg-amber-50 border-amber-200',
              },
              {
                title: 'Free Resources',
                desc: 'Download guides on mindset, motivation, and financial protection.',
                href: '/resources',
                label: 'View Resources →',
                color: 'bg-stone-50 border-stone-200',
              },
            ].map(tool => (
              <div key={tool.title} className={`${tool.color} border rounded-2xl p-6 flex flex-col gap-4`}>
                <div>
                  <h3 className="font-display text-lg font-bold text-stone-800 mb-2">{tool.title}</h3>
                  <p className="text-stone-500 font-body text-sm leading-relaxed">{tool.desc}</p>
                </div>
                <Link
                  href={tool.href}
                  className="mt-auto text-forest font-body text-sm font-medium hover:underline"
                >
                  {tool.label}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
