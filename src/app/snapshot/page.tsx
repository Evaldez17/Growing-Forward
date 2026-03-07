'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'

// ─── TYPES ───────────────────────────────────────────────────────
interface FormData {
  income: number
  expenses: number
  savings: number
  debt: number
  dependents: number
  emergencyFund: boolean | null
  lifeInsurance: boolean | null
}

// ─── SCORE CALCULATION ───────────────────────────────────────────
function calculateScores(d: FormData) {
  const cashFlow = d.income - d.expenses
  const savingsRate = d.income > 0 ? (d.savings / d.income) * 100 : 0
  const dti = d.income > 0 ? (d.debt / (d.income * 12)) * 100 : 100

  // Ring scores 0-100
  const savingsScore = Math.min(100, (savingsRate / 20) * 100)
  const cashFlowScore = cashFlow <= 0 ? 0 : Math.min(100, (cashFlow / d.income) * 200)
  const debtScore = dti >= 100 ? 0 : Math.max(0, 100 - dti)
  const protectionScore =
    (d.emergencyFund ? 40 : 0) +
    (d.lifeInsurance ? 40 : 0) +
    (d.dependents === 0 ? 20 : d.lifeInsurance ? 20 : 0)

  // Overall health score
  const healthScore = Math.round(
    savingsScore * 0.25 +
    cashFlowScore * 0.25 +
    debtScore * 0.25 +
    Math.min(100, protectionScore) * 0.25
  )

  // Momentum
  let momentum: 'starting' | 'building' | 'strong'
  if (healthScore >= 70) momentum = 'strong'
  else if (healthScore >= 40) momentum = 'building'
  else momentum = 'starting'

  // Suggestions
  const suggestions: string[] = []
  if (savingsRate < 10) suggestions.push('savings')
  if (cashFlow < 0) suggestions.push('spending')
  if (dti > 40) suggestions.push('debt')
  if (!d.emergencyFund) suggestions.push('emergency')
  if (d.dependents > 0 && !d.lifeInsurance) suggestions.push('protection')

  return {
    cashFlow,
    savingsRate,
    dti,
    savingsScore: Math.round(savingsScore),
    cashFlowScore: Math.round(cashFlowScore),
    debtScore: Math.round(debtScore),
    protectionScore: Math.round(Math.min(100, protectionScore)),
    healthScore,
    momentum,
    suggestions: suggestions.slice(0, 3),
  }
}

// ─── PROGRESS RING ───────────────────────────────────────────────
function Ring({ score, label, color, size = 100 }: { score: number; label: string; color: string; size?: number }) {
  const r = size * 0.38
  const circ = 2 * Math.PI * r
  const offset = circ - (score / 100) * circ
  return (
    <div className="flex flex-col items-center gap-2">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="#e7e5e4" strokeWidth={size*0.08} />
        <circle
          cx={size/2} cy={size/2} r={r} fill="none"
          stroke={color} strokeWidth={size*0.08}
          strokeDasharray={circ} strokeDashoffset={offset}
          strokeLinecap="round"
          transform={`rotate(-90 ${size/2} ${size/2})`}
          style={{ transition: 'stroke-dashoffset 1s ease' }}
        />
        <text x={size/2} y={size/2 + 1} textAnchor="middle" dominantBaseline="middle"
          fontSize={size*0.22} fontWeight="700" fill="#1a1a1a">{score}</text>
      </svg>
      <p className="text-xs font-body text-stone-500 text-center leading-tight">{label}</p>
    </div>
  )
}

// ─── NUMBER INPUT ─────────────────────────────────────────────────
function NumberInput({ label, value, onChange, helper }: {
  label: string; value: string; onChange: (v: string) => void; helper?: string
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-stone-700 font-body mb-2">{label}</label>
      <div className="relative">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 font-body">$</span>
        <input
          type="number"
          min="0"
          value={value}
          onChange={e => onChange(e.target.value)}
          placeholder="0"
          className="w-full border border-warm-sand bg-white text-stone-800 placeholder-stone-300 rounded-xl pl-8 pr-4 py-3.5 font-body text-sm focus:outline-none focus:border-forest transition-colors"
        />
      </div>
      {helper && <p className="text-xs text-stone-400 font-body mt-1.5">{helper}</p>}
    </div>
  )
}

// ─── YES/NO TOGGLE ────────────────────────────────────────────────
function YesNo({ label, value, onChange }: {
  label: string; value: boolean | null; onChange: (v: boolean) => void
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-stone-700 font-body mb-2">{label}</label>
      <div className="flex gap-3">
        {[true, false].map(opt => (
          <button key={String(opt)} type="button"
            onClick={() => onChange(opt)}
            className={`flex-1 py-3 rounded-xl border font-body text-sm font-medium transition-all ${
              value === opt
                ? 'border-forest bg-forest/5 text-forest'
                : 'border-warm-sand bg-white text-stone-500 hover:border-forest/40'
            }`}>
            {opt ? 'Yes' : 'No'}
          </button>
        ))}
      </div>
    </div>
  )
}

const SUGGESTION_COPY: Record<string, { title: string; body: string }> = {
  savings: { title: 'Increase Savings', body: 'Increasing your savings rate can strengthen your financial stability and future flexibility.' },
  spending: { title: 'Reduce Spending', body: 'Reducing monthly expenses can improve cash flow and free money for savings or debt reduction.' },
  debt: { title: 'Reduce Debt', body: 'Reducing higher-interest debt can improve financial flexibility and accelerate progress.' },
  emergency: { title: 'Build an Emergency Fund', body: 'An emergency fund provides a financial buffer when unexpected expenses arise.' },
  protection: { title: 'Improve Financial Protection', body: 'If others depend on your income, financial protection can provide stability for the people who rely on you.' },
}

const MOMENTUM_COPY = {
  starting: { label: 'Momentum Just Starting', desc: 'Your financial momentum is just getting started. Awareness is the first step toward improvement.' },
  building: { label: 'Momentum Building', desc: 'Your financial momentum is building. Several areas are moving in the right direction and progress is forming.' },
  strong: { label: 'Strong Financial Momentum', desc: 'Your financial momentum is strong. Your financial habits show a solid foundation for long-term stability.' },
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────
export default function Snapshot() {
  const [step, setStep] = useState(0) // 0=intro, 1-3=steps, 4=results
  const [income, setIncome] = useState('')
  const [expenses, setExpenses] = useState('')
  const [savings, setSavings] = useState('')
  const [debt, setDebt] = useState('')
  const [dependents, setDependents] = useState('')
  const [emergencyFund, setEmergencyFund] = useState<boolean | null>(null)
  const [lifeInsurance, setLifeInsurance] = useState<boolean | null>(null)

  // Simulator state
  const [simSavings, setSimSavings] = useState(0)
  const [simSpending, setSimSpending] = useState(0)
  const [simDebt, setSimDebt] = useState(0)

  const formData: FormData = {
    income: parseFloat(income) || 0,
    expenses: parseFloat(expenses) || 0,
    savings: parseFloat(savings) || 0,
    debt: parseFloat(debt) || 0,
    dependents: parseInt(dependents) || 0,
    emergencyFund,
    lifeInsurance,
  }

  const results = useMemo(() => calculateScores(formData), [income, expenses, savings, debt, dependents, emergencyFund, lifeInsurance])

  const simData: FormData = {
    ...formData,
    savings: formData.savings + simSavings,
    expenses: formData.expenses - simSpending,
    debt: formData.debt - simDebt,
  }
  const simResults = useMemo(() => calculateScores(simData), [simSavings, simSpending, simDebt, income, expenses, savings, debt, dependents, emergencyFund, lifeInsurance])

  const momentum = MOMENTUM_COPY[results.momentum]
  const simMomentum = MOMENTUM_COPY[simResults.momentum]

  function formatMoney(n: number) {
    return n < 0 ? `-$${Math.abs(n).toLocaleString()}` : `$${n.toLocaleString()}`
  }

  // ── INTRO ──
  if (step === 0) return (
    <div className="pt-20">
      <section className="py-24 max-w-xl mx-auto px-6 text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-forest mb-4">Phase 2 Tool</p>
        <h1 className="font-display text-5xl font-bold text-stone-800 leading-tight mb-6">
          Financial Snapshot<br /><span className="text-forest italic">Checkup</span>
        </h1>
        <p className="text-stone-600 font-body leading-relaxed mb-4">
          Take a quick look at your financial picture. Enter a few numbers and we'll generate a simple snapshot showing where things stand and where growth can happen.
        </p>
        <p className="text-stone-400 font-body italic text-sm mb-10">
          {"This isn't about perfection — it's about awareness."}
        </p>
        <div className="flex justify-center gap-6 mb-10">
          {['Income & Expenses', 'Savings & Debt', 'Protection'].map((s, i) => (
            <div key={i} className="text-center">
              <div className="w-8 h-8 rounded-full bg-forest/10 text-forest font-bold text-sm flex items-center justify-center mx-auto mb-1">{i+1}</div>
              <p className="text-xs text-stone-400 font-body">{s}</p>
            </div>
          ))}
        </div>
        <button onClick={() => setStep(1)}
          className="bg-forest text-warm-cream px-10 py-4 rounded-full font-medium hover:bg-forest-dark transition-colors">
          Start the Checkup →
        </button>
        <p className="text-xs text-stone-400 font-body mt-4">Your numbers stay private. Nothing is stored or shared.</p>
      </section>
    </div>
  )

  // ── STEP 1 ──
  if (step === 1) return (
    <div className="pt-20">
      <section className="py-24 max-w-xl mx-auto px-6">
        <StepHeader step={1} title="Income & Monthly Spending" prompt="Let's start with the basics." />
        <div className="space-y-5 mb-8">
          <NumberInput label="Monthly Income" value={income} onChange={setIncome} helper="Your total take-home pay each month" />
          <NumberInput label="Monthly Expenses" value={expenses} onChange={setExpenses} helper="These numbers help determine your monthly cash flow." />
        </div>
        <StepNav onBack={() => setStep(0)} onNext={() => setStep(2)} canNext={!!income && !!expenses} />
      </section>
    </div>
  )

  // ── STEP 2 ──
  if (step === 2) return (
    <div className="pt-20">
      <section className="py-24 max-w-xl mx-auto px-6">
        <StepHeader step={2} title="Savings & Debt" prompt="Next we'll look at how money is being saved and what financial obligations currently exist." />
        <div className="space-y-5 mb-8">
          <NumberInput label="Monthly Savings Amount" value={savings} onChange={setSavings} helper="Savings strengthens financial stability." />
          <NumberInput label="Total Debt" value={debt} onChange={setDebt} helper="Debt shows how much income is already committed." />
        </div>
        <StepNav onBack={() => setStep(1)} onNext={() => setStep(3)} canNext={true} />
      </section>
    </div>
  )

  // ── STEP 3 ──
  if (step === 3) return (
    <div className="pt-20">
      <section className="py-24 max-w-xl mx-auto px-6">
        <StepHeader step={3} title="Protection & Dependents" prompt="A strong financial foundation includes protecting the people who depend on you." />
        <div className="space-y-5 mb-8">
          <div>
            <label className="block text-sm font-medium text-stone-700 font-body mb-2">Number of Dependents</label>
            <input type="number" min="0" value={dependents} onChange={e => setDependents(e.target.value)} placeholder="0"
              className="w-full border border-warm-sand bg-white text-stone-800 rounded-xl px-4 py-3.5 font-body text-sm focus:outline-none focus:border-forest transition-colors" />
          </div>
          <YesNo label="Do you have an Emergency Fund?" value={emergencyFund} onChange={setEmergencyFund} />
          <YesNo label="Do you have Life Insurance Coverage?" value={lifeInsurance} onChange={setLifeInsurance} />
          <p className="text-xs text-stone-400 font-body">Financial safety nets help protect against unexpected events.</p>
        </div>
        <StepNav onBack={() => setStep(2)} onNext={() => setStep(4)}
          canNext={emergencyFund !== null && lifeInsurance !== null} nextLabel="See My Snapshot →" />
      </section>
    </div>
  )

  // ── RESULTS ──
  return (
    <div className="pt-20">
      <section className="py-24 max-w-3xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.2em] text-forest mb-3">Your Results</p>
          <h1 className="font-display text-4xl font-bold text-stone-800 mb-3">Your Financial Snapshot</h1>
          <p className="text-stone-500 font-body leading-relaxed max-w-lg mx-auto">
            {"Here's a simple look at where things currently stand. These numbers aren't judgments — they're insights. Financial growth happens step by step."}
          </p>
        </div>

        {/* Health Score */}
        <div className="bg-warm-cream border border-warm-sand rounded-2xl p-8 mb-8 text-center">
          <p className="text-xs uppercase tracking-widest text-stone-400 font-body mb-4">Financial Health Score</p>
          <div className="relative w-40 h-40 mx-auto mb-4">
            <svg className="w-40 h-40 -rotate-90" viewBox="0 0 140 140">
              <circle cx="70" cy="70" r="58" fill="none" stroke="#e7e5e4" strokeWidth="12" />
              <circle cx="70" cy="70" r="58" fill="none"
                stroke={results.healthScore >= 70 ? '#2d5a3d' : results.healthScore >= 40 ? '#d97706' : '#78716c'}
                strokeWidth="12"
                strokeDasharray={2 * Math.PI * 58}
                strokeDashoffset={2 * Math.PI * 58 - (results.healthScore / 100) * 2 * Math.PI * 58}
                strokeLinecap="round"
                style={{ transition: 'stroke-dashoffset 1s ease' }}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="font-display text-4xl font-bold text-stone-800">{results.healthScore}</span>
              <span className="text-xs text-stone-400 font-body">out of 100</span>
            </div>
          </div>
          <p className="font-display text-lg font-bold text-stone-800 mb-1">{momentum.label}</p>
          <p className="text-stone-500 font-body text-sm leading-relaxed max-w-sm mx-auto">{momentum.desc}</p>
        </div>

        {/* Key Numbers */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            { label: 'Monthly Cash Flow', value: formatMoney(results.cashFlow), good: results.cashFlow >= 0 },
            { label: 'Savings Rate', value: `${results.savingsRate.toFixed(1)}%`, good: results.savingsRate >= 10 },
            { label: 'Debt-to-Income', value: `${results.dti.toFixed(0)}%`, good: results.dti < 36 },
          ].map(stat => (
            <div key={stat.label} className={`rounded-xl border p-4 text-center ${stat.good ? 'bg-forest/5 border-forest/20' : 'bg-warm-sand/50 border-warm-sand'}`}>
              <p className={`font-display text-xl font-bold ${stat.good ? 'text-forest' : 'text-stone-600'}`}>{stat.value}</p>
              <p className="text-xs text-stone-400 font-body mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Progress Rings */}
        <div className="bg-warm-cream border border-warm-sand rounded-2xl p-8 mb-8">
          <p className="text-xs uppercase tracking-widest text-stone-400 font-body mb-6 text-center">Financial Pillars</p>
          <div className="grid grid-cols-4 gap-4">
            <Ring score={results.savingsScore} label="Savings" color="#2d5a3d" />
            <Ring score={results.cashFlowScore} label="Cash Flow" color="#d97706" />
            <Ring score={results.debtScore} label="Debt Balance" color="#7c3aed" />
            <Ring score={results.protectionScore} label="Protection" color="#0284c7" />
          </div>
          <div className="mt-6 space-y-2 text-xs text-stone-400 font-body text-center">
            <p>Savings: Building savings strengthens long-term stability and financial flexibility.</p>
            <p>Cash Flow: Positive cash flow creates room for growth and future opportunities.</p>
            <p>Debt: Lower debt levels increase financial freedom and reduce financial pressure.</p>
            <p>Protection: Financial safety nets protect you and the people who depend on you.</p>
          </div>
        </div>

        {/* Suggestions */}
        {results.suggestions.length > 0 && (
          <div className="mb-8">
            <h2 className="font-display text-xl font-bold text-stone-800 mb-4">Fastest Ways to Improve Your Score</h2>
            <div className="space-y-3">
              {results.suggestions.map(key => (
                <div key={key} className="bg-warm-sand/50 border border-warm-sand rounded-xl p-5">
                  <p className="font-body font-semibold text-stone-800 mb-1">{SUGGESTION_COPY[key].title}</p>
                  <p className="text-stone-500 font-body text-sm">{SUGGESTION_COPY[key].body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Simulator */}
        <div className="bg-stone-50 border border-stone-200 rounded-2xl p-8 mb-8">
          <h2 className="font-display text-xl font-bold text-stone-800 mb-2">What Happens If You Improve?</h2>
          <p className="text-stone-500 font-body text-sm mb-6">Use the sliders to simulate small financial changes and see how they affect your score.</p>
          <div className="space-y-5 mb-6">
            <SimSlider label={`Increase monthly savings (+$${simSavings})`} value={simSavings} onChange={setSimSavings} max={500} step={25} />
            <SimSlider label={`Reduce monthly spending (-$${simSpending})`} value={simSpending} onChange={setSimSpending} max={500} step={25} />
            <SimSlider label={`Reduce total debt (-$${simDebt.toLocaleString()})`} value={simDebt} onChange={setSimDebt} max={10000} step={500} />
          </div>
          <div className="grid grid-cols-2 gap-4 text-center">
            <div className="bg-white rounded-xl border border-stone-200 p-4">
              <p className="text-xs text-stone-400 font-body mb-1">Current Score</p>
              <p className="font-display text-3xl font-bold text-stone-600">{results.healthScore}</p>
            </div>
            <div className="bg-forest/5 rounded-xl border border-forest/20 p-4">
              <p className="text-xs text-forest font-body mb-1">Simulated Score</p>
              <p className="font-display text-3xl font-bold text-forest">{simResults.healthScore}</p>
              {simResults.healthScore > results.healthScore && (
                <p className="text-xs text-forest font-body mt-1">+{simResults.healthScore - results.healthScore} pts</p>
              )}
            </div>
          </div>
          {simResults.momentum !== results.momentum && (
            <div className="mt-4 bg-forest/5 border border-forest/20 rounded-xl p-4 text-center">
              <p className="text-xs text-forest font-body font-medium">
                🎯 With these changes: <span className="font-bold">{simMomentum.label}</span>
              </p>
            </div>
          )}
        </div>

        {/* Scorecard */}
        <div className="bg-stone-800 text-warm-cream rounded-2xl p-8 mb-8">
          <p className="text-xs uppercase tracking-widest text-stone-400 font-body mb-1">Growing Forward</p>
          <h2 className="font-display text-2xl font-bold mb-6">Financial Growth Scorecard</h2>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-stone-700 rounded-xl p-4 text-center">
              <p className="text-xs text-stone-400 font-body mb-1">Health Score</p>
              <p className="font-display text-3xl font-bold text-warm-cream">{results.healthScore}</p>
            </div>
            <div className="bg-stone-700 rounded-xl p-4 text-center">
              <p className="text-xs text-stone-400 font-body mb-1">Momentum</p>
              <p className="font-display text-sm font-bold text-warm-amber leading-tight">{momentum.label}</p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3 mb-6 text-center text-xs text-stone-400 font-body">
            <div><p className="text-warm-cream font-bold text-sm mb-0.5">{results.savingsScore}</p>Savings</div>
            <div><p className="text-warm-cream font-bold text-sm mb-0.5">{results.cashFlowScore}</p>Cash Flow</div>
            <div><p className="text-warm-cream font-bold text-sm mb-0.5">{results.debtScore}</p>Debt Balance</div>
          </div>
          {results.suggestions[0] && (
            <div className="bg-stone-700 rounded-xl p-4 mb-6">
              <p className="text-xs text-stone-400 font-body mb-1">Next Focus</p>
              <p className="text-warm-cream font-body text-sm font-medium">{SUGGESTION_COPY[results.suggestions[0]].title}</p>
            </div>
          )}
          <p className="text-stone-400 font-body italic text-xs text-center mb-4">Always be growing forward.</p>
          <button
            onClick={() => {
              const text = `Growing Forward Financial Snapshot\n\nHealth Score: ${results.healthScore}/100\nMomentum: ${momentum.label}\n\nSavings: ${results.savingsScore} | Cash Flow: ${results.cashFlowScore} | Debt: ${results.debtScore}\n\nNext Focus: ${results.suggestions[0] ? SUGGESTION_COPY[results.suggestions[0]].title : 'Keep building!'}\n\nCurious about your score? Try the tool at growingforwardco.com`
              navigator.clipboard.writeText(text)
              alert('Scorecard copied to clipboard!')
            }}
            className="w-full border border-stone-600 text-stone-300 py-3 rounded-full text-sm font-body hover:border-forest hover:text-forest transition-colors"
          >
            Copy Scorecard Text
          </button>
        </div>

        {/* Final message */}
        <div className="text-center mb-10 space-y-3">
          <p className="text-stone-600 font-body leading-relaxed">
            Financial growth happens one step at a time. Wherever your numbers landed today, remember that awareness creates opportunity. Small changes made consistently can create meaningful progress.
          </p>
          <p className="text-stone-700 font-body font-medium">Keep moving forward.</p>
          <p className="font-display text-lg font-bold text-forest italic">Always be growing forward. 💪</p>
        </div>

        {/* CTA */}
        <div className="bg-forest text-warm-cream rounded-2xl p-8 text-center">
          <h2 className="font-display text-2xl font-bold mb-2">Want help improving your financial snapshot?</h2>
          <p className="text-green-100 font-body mb-6">{"Let's talk."}</p>
          <Link href="/work-with-me"
            className="inline-block bg-warm-cream text-forest px-8 py-3.5 rounded-full font-medium hover:bg-warm-sand transition-colors">
            Start the Conversation →
          </Link>
        </div>

        {/* Retake */}
        <div className="text-center mt-8">
          <button onClick={() => { setStep(0); setIncome(''); setExpenses(''); setSavings(''); setDebt(''); setDependents(''); setEmergencyFund(null); setLifeInsurance(null); setSimSavings(0); setSimSpending(0); setSimDebt(0) }}
            className="text-xs text-stone-400 hover:text-forest transition-colors font-body underline">
            Start over
          </button>
        </div>

      </section>
    </div>
  )
}

// ─── HELPERS ─────────────────────────────────────────────────────
function StepHeader({ step, title, prompt }: { step: number; title: string; prompt: string }) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-4">
        {[1,2,3].map(s => (
          <div key={s} className={`flex-1 h-1.5 rounded-full transition-all ${s <= step ? 'bg-forest' : 'bg-warm-sand'}`} />
        ))}
      </div>
      <p className="text-xs uppercase tracking-[0.2em] text-forest mb-2">Step {step} of 3</p>
      <h1 className="font-display text-3xl font-bold text-stone-800 mb-2">{title}</h1>
      <p className="text-stone-500 font-body">{prompt}</p>
    </div>
  )
}

function StepNav({ onBack, onNext, canNext, nextLabel = 'Next →' }: {
  onBack: () => void; onNext: () => void; canNext: boolean; nextLabel?: string
}) {
  return (
    <div className="flex gap-3">
      <button onClick={onBack}
        className="flex-1 border border-stone-300 text-stone-600 py-3.5 rounded-full font-medium hover:border-forest hover:text-forest transition-colors text-sm">
        ← Back
      </button>
      <button onClick={onNext} disabled={!canNext}
        className="flex-1 bg-forest text-warm-cream py-3.5 rounded-full font-medium hover:bg-forest-dark transition-colors disabled:opacity-40 disabled:cursor-not-allowed text-sm">
        {nextLabel}
      </button>
    </div>
  )
}

function SimSlider({ label, value, onChange, max, step }: {
  label: string; value: number; onChange: (v: number) => void; max: number; step: number
}) {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <label className="text-sm text-stone-600 font-body">{label}</label>
      </div>
      <input type="range" min={0} max={max} step={step} value={value}
        onChange={e => onChange(Number(e.target.value))}
        className="w-full accent-forest" />
      <div className="flex justify-between text-xs text-stone-300 font-body">
        <span>$0</span><span>${max.toLocaleString()}</span>
      </div>
    </div>
  )
}
