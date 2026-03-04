'use client'

import { useState } from 'react'
import Link from 'next/link'

const questions = [
  {
    id: 1,
    category: 'Clarity',
    question: 'How confident are you that you understand your monthly income and expenses?',
    options: [
      { label: 'I track everything and know my numbers well', points: 10 },
      { label: 'I have a general idea but don\'t track closely', points: 7 },
      { label: 'I occasionally check but it\'s inconsistent', points: 4 },
      { label: 'I\'m not really sure where my money goes', points: 1 },
    ],
  },
  {
    id: 2,
    category: 'Stability',
    question: 'If an unexpected expense of $1,000 happened tomorrow, what would you do?',
    options: [
      { label: 'Cover it easily from savings', points: 10 },
      { label: 'Pay it but it would hurt a bit', points: 7 },
      { label: 'Use a credit card or borrow money', points: 4 },
      { label: 'I wouldn\'t know how to handle it', points: 1 },
    ],
  },
  {
    id: 3,
    category: 'Stability',
    question: 'How many months of expenses could your emergency savings cover?',
    options: [
      { label: '6+ months', points: 10 },
      { label: '3–6 months', points: 8 },
      { label: '1–2 months', points: 5 },
      { label: 'Less than 1 month', points: 2 },
      { label: 'No emergency savings yet', points: 0 },
    ],
  },
  {
    id: 4,
    category: 'Momentum',
    question: 'Do you currently follow any type of budget or spending plan?',
    options: [
      { label: 'Yes, consistently', points: 10 },
      { label: 'Sometimes but not strictly', points: 7 },
      { label: 'I\'ve tried but haven\'t stuck with it', points: 4 },
      { label: 'No budget or plan right now', points: 1 },
    ],
  },
  {
    id: 5,
    category: 'Protection',
    question: 'If something happened to you tomorrow, would your family or dependents be financially protected?',
    options: [
      { label: 'Yes, we have clear protection plans in place', points: 10 },
      { label: 'Some protection exists but I\'m not fully sure', points: 6 },
      { label: 'We\'ve talked about it but haven\'t set anything up', points: 3 },
      { label: 'No plan currently', points: 0 },
    ],
  },
  {
    id: 6,
    category: 'Debt',
    question: 'How manageable does your current debt feel?',
    options: [
      { label: 'Very manageable', points: 10 },
      { label: 'Manageable but noticeable', points: 7 },
      { label: 'Stressful at times', points: 4 },
      { label: 'Overwhelming', points: 1 },
    ],
  },
  {
    id: 7,
    category: 'Momentum',
    question: 'How often do you review your finances or financial goals?',
    options: [
      { label: 'Monthly or more often', points: 10 },
      { label: 'A few times a year', points: 7 },
      { label: 'Once in a while', points: 4 },
      { label: 'Rarely or never', points: 1 },
    ],
  },
  {
    id: 8,
    category: 'Stability',
    question: 'Do you currently have a savings plan for future goals?',
    options: [
      { label: 'Yes, regularly contributing', points: 10 },
      { label: 'Saving occasionally', points: 7 },
      { label: 'I want to but haven\'t started', points: 3 },
      { label: 'No plan for savings yet', points: 0 },
    ],
  },
  {
    id: 9,
    category: 'Clarity',
    question: 'Do you know roughly how much money you would need to support your household for one year?',
    options: [
      { label: 'Yes, I have a clear estimate', points: 10 },
      { label: 'I have a rough idea', points: 6 },
      { label: 'Not really sure', points: 3 },
      { label: 'I\'ve never thought about it', points: 0 },
    ],
  },
  {
    id: 10,
    category: 'Momentum',
    question: 'How would you describe your current financial direction?',
    options: [
      { label: 'I have a clear plan and feel confident', points: 10 },
      { label: 'I\'m making progress but still figuring things out', points: 7 },
      { label: 'I feel somewhat stuck financially', points: 3 },
      { label: 'I feel completely lost when it comes to money', points: 0 },
    ],
  },
]

function getResult(score: number) {
  if (score >= 80) return {
    label: 'Strong Financial Foundation',
    color: 'text-forest',
    bg: 'bg-forest/10',
    border: 'border-forest/20',
    message: "You're in a strong position. Your financial foundation shows good preparation and awareness. At this stage the goal is maintaining momentum and continuing to protect what you've built.",
    nextStep: "Review your protection strategy and make sure your long-term plans are aligned with your goals.",
    opportunity: "At your level, the biggest opportunity is often fine-tuning — making sure your protection plan is fully in place and your long-term goals have a clear path forward.",
  }
  if (score >= 50) return {
    label: 'Growing Financial Stability',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    message: "You're on the right path. You already have some important pieces in place, but there may be a few gaps worth addressing. Small improvements now can create big stability later.",
    nextStep: "Focus on strengthening your financial safety net and clarifying your protection plan.",
    opportunity: "Based on your answers, one area that may deserve attention is strengthening your financial safety net. Creating a clearer plan for savings, protection, or budgeting can make a big difference over time.",
  }
  return {
    label: 'Early Financial Foundation',
    color: 'text-stone-600',
    bg: 'bg-stone-50',
    border: 'border-stone-200',
    message: "You're not alone. Many people begin their financial journey right here. The good news is that small steps can create meaningful progress over time.",
    nextStep: "Start with the basics: clarity, planning, and building simple habits that move you forward.",
    opportunity: "The most important thing right now is building awareness and taking one small step at a time. Starting with a simple budget or a conversation about protection can shift everything.",
  }
}

export default function Quiz() {
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [selected, setSelected] = useState<number | null>(null)
  const [showResults, setShowResults] = useState(false)

  const totalScore = answers.reduce((a, b) => a + b, 0)
  const result = getResult(totalScore)
  const progress = Math.round((current / questions.length) * 100)

  function handleSelect(points: number) {
    setSelected(points)
  }

  function handleNext() {
    if (selected === null) return
    const newAnswers = [...answers, selected]
    setAnswers(newAnswers)
    setSelected(null)
    if (current + 1 >= questions.length) {
      setShowResults(true)
    } else {
      setCurrent(current + 1)
    }
  }

  // ── RESULTS PAGE ──────────────────────────────────────────────
  if (showResults) {
    const circumference = 2 * Math.PI * 54
    const offset = circumference - (totalScore / 100) * circumference

    return (
      <div className="pt-20">
        <section className="py-24 max-w-2xl mx-auto px-6">

          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.2em] text-forest mb-3">Your Results</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-stone-800 leading-tight">
              Your Financial Readiness Snapshot
            </h1>
          </div>

          {/* Score Circle */}
          <div className={`${result.bg} border ${result.border} rounded-2xl p-10 text-center mb-8`}>
            <div className="relative w-36 h-36 mx-auto mb-6">
              <svg className="w-36 h-36 -rotate-90" viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="54" fill="none" stroke="#e7e5e4" strokeWidth="10" />
                <circle
                  cx="60" cy="60" r="54" fill="none"
                  stroke={totalScore >= 80 ? '#2d5a3d' : totalScore >= 50 ? '#d97706' : '#78716c'}
                  strokeWidth="10"
                  strokeDasharray={circumference}
                  strokeDashoffset={offset}
                  strokeLinecap="round"
                  style={{ transition: 'stroke-dashoffset 1s ease' }}
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className={`font-display text-4xl font-bold ${result.color}`}>{totalScore}</span>
                <span className="text-xs text-stone-400 font-body">out of 100</span>
              </div>
            </div>
            <p className={`font-display text-xl font-bold ${result.color} mb-2`}>{result.label}</p>
            <p className="text-stone-600 font-body leading-relaxed text-sm">{result.message}</p>
          </div>

          {/* Next Step */}
          <div className="bg-warm-sand/50 border border-warm-sand rounded-2xl p-8 mb-6">
            <p className="text-xs uppercase tracking-widest text-forest mb-2 font-body">Suggested Next Step</p>
            <p className="text-stone-700 font-body leading-relaxed">{result.nextStep}</p>
          </div>

          {/* Opportunity */}
          <div className="border-l-4 border-forest/30 pl-6 mb-10">
            <p className="text-xs uppercase tracking-widest text-stone-400 mb-2 font-body">Your Biggest Opportunity</p>
            <p className="text-stone-600 font-body leading-relaxed">{result.opportunity}</p>
          </div>

          {/* Recommended Resources */}
          <div className="bg-stone-800 text-warm-cream rounded-2xl p-8 mb-10 text-center">
            <p className="text-xs uppercase tracking-widest text-stone-400 mb-3">Recommended Next Step</p>
            <h2 className="font-display text-xl font-bold mb-3">Free Growing Forward Guides</h2>
            <p className="text-stone-400 font-body text-sm leading-relaxed mb-6">
              {"If you'd like help getting started, check out one of the free Growing Forward guides. They're designed to help you reset, take action, and protect what matters most."}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/resources"
                className="bg-warm-cream text-forest px-6 py-3 rounded-full font-medium hover:bg-warm-sand transition-colors text-sm"
              >
                View Free Resources
              </Link>
              <Link
                href="/work-with-me"
                className="border border-stone-600 text-stone-300 px-6 py-3 rounded-full font-medium hover:border-forest hover:text-forest transition-colors text-sm"
              >
                Start a Conversation
              </Link>
            </div>
          </div>

          {/* Closing */}
          <div className="text-center space-y-3">
            <p className="text-stone-600 font-body leading-relaxed">
              Financial progress {"doesn't"} happen overnight. It happens through small, consistent steps taken over time.
            </p>
            <p className="text-stone-700 font-body font-medium">Keep moving forward.</p>
            <p className="font-display text-lg font-bold text-forest italic">Always be growing forward. 💪</p>
          </div>

          {/* Retake */}
          <div className="text-center mt-10">
            <button
              onClick={() => { setCurrent(0); setAnswers([]); setSelected(null); setShowResults(false) }}
              className="text-xs text-stone-400 hover:text-forest transition-colors font-body underline"
            >
              Retake the assessment
            </button>
          </div>

        </section>
      </div>
    )
  }

  // ── QUIZ ──────────────────────────────────────────────────────
  const q = questions[current]

  return (
    <div className="pt-20">
      <section className="py-24 max-w-2xl mx-auto px-6">

        {/* Header */}
        <div className="mb-10">
          <p className="text-xs uppercase tracking-[0.2em] text-forest mb-3">Financial Readiness Assessment</p>
          <h1 className="font-display text-4xl font-bold text-stone-800 leading-tight mb-2">
            How ready are you?
          </h1>
          <p className="text-stone-500 font-body">
            10 honest questions. No judgment. Just clarity.
          </p>
        </div>

        {/* Progress bar */}
        <div className="mb-10">
          <div className="flex justify-between text-xs text-stone-400 font-body mb-2">
            <span>Question {current + 1} of {questions.length}</span>
            <span>{progress}% complete</span>
          </div>
          <div className="w-full h-1.5 bg-warm-sand rounded-full overflow-hidden">
            <div
              className="h-full bg-forest rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question card */}
        <div className="bg-warm-cream border border-warm-sand rounded-2xl p-8 mb-6">
          <p className="text-xs uppercase tracking-widest text-forest mb-4 font-body">{q.category}</p>
          <h2 className="font-display text-xl font-bold text-stone-800 mb-8 leading-snug">
            {q.question}
          </h2>
          <div className="space-y-3">
            {q.options.map((opt, i) => (
              <button
                key={i}
                onClick={() => handleSelect(opt.points)}
                className={`w-full text-left px-5 py-4 rounded-xl border font-body text-sm transition-all duration-200 ${
                  selected === opt.points
                    ? 'border-forest bg-forest/5 text-stone-800'
                    : 'border-warm-sand bg-white text-stone-600 hover:border-forest/40 hover:bg-forest/5'
                }`}
              >
                <span className={`inline-block w-5 h-5 rounded-full border mr-3 flex-shrink-0 align-middle transition-colors ${
                  selected === opt.points ? 'border-forest bg-forest' : 'border-stone-300'
                }`} />
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Next button */}
        <button
          onClick={handleNext}
          disabled={selected === null}
          className="w-full bg-forest text-warm-cream py-4 rounded-full font-medium hover:bg-forest-dark transition-colors duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {current + 1 === questions.length ? 'See My Results →' : 'Next Question →'}
        </button>

        <p className="text-center text-xs text-stone-400 font-body mt-4 italic">
          There are no wrong answers. Be honest — the results are for you.
        </p>

      </section>
    </div>
  )
}
