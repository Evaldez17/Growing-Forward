'use client'

import { useState } from 'react'

const faqs = [
  {
    category: 'About Everett',
    questions: [
      {
        q: 'Who are you and why should I trust you?',
        a: "I'm Everett Valdez — a Colorado-licensed life insurance agent operating through Primerica. I'm not a financial guru or a salesperson in the traditional sense. I'm someone who has watched financial stress affect real people I care about, and I decided to do something about it. I lead with education, not pressure. You can read more about my story on the About page.",
      },
      {
        q: 'Are you actually licensed?',
        a: "Yes. I'm licensed by the state of Colorado as a life insurance agent. My license is issued by the state — Primerica provided the training and platform that helped me get there. If you ever want to verify, Colorado's Division of Insurance has a public lookup tool.",
      },
      {
        q: 'Why Primerica?',
        a: "Primerica gave me access to term life insurance products and a clear, structured way to help people with financial protection. Their model focuses on term life insurance — which is typically the most straightforward, affordable option for families who need coverage. I chose this path because it aligns with what I actually believe in.",
      },
    ],
  },
  {
    category: 'How This Works',
    questions: [
      {
        q: 'What happens when I reach out?',
        a: "We have a conversation. That's it. I'll ask about your situation, explain your options in plain language, and answer your questions honestly. There's no pitch deck, no pressure close, and no obligation to do anything.",
      },
      {
        q: 'Is there any pressure to buy something?',
        a: "No. I genuinely mean that. If something makes sense for your situation, I'll tell you why. If it doesn't, I'll tell you that too. My goal is for you to walk away with more clarity than you came in with — whether or not we end up working together.",
      },
      {
        q: 'How do you get paid?',
        a: "I'm compensated through commissions when someone purchases a policy through me. I believe in being upfront about that. It means I only get paid if something genuinely makes sense for you and you choose to move forward. There are no consultation fees or hidden charges.",
      },
      {
        q: 'Do I have to buy anything to talk to you?',
        a: "Absolutely not. A conversation is free. I'd rather you walk away informed than walk away feeling like you were sold something you didn't fully understand.",
      },
    ],
  },
  {
    category: 'Life Insurance Basics',
    questions: [
      {
        q: 'What\'s the difference between term and whole life insurance?',
        a: "Term life covers you for a set period — 10, 20, or 30 years — and is designed purely for protection. It's straightforward and typically much more affordable. Whole life is permanent coverage with a cash value component, which makes it more complex and more expensive. For most families focused on protection, term is usually the right starting point.",
      },
      {
        q: 'How much life insurance do I actually need?',
        a: "A common starting point is 10–12 times your annual income. That accounts for income replacement, debts, mortgage, childcare, and other long-term needs. But everyone's situation is different — that's exactly what a conversation is for.",
      },
      {
        q: 'I already have life insurance through work. Am I covered?',
        a: "Employer-provided coverage is a great starting point, but it usually isn't enough on its own — and it doesn't follow you if you change jobs. Most workplace policies offer 1–2x your salary, which falls well short of what most families actually need.",
      },
      {
        q: 'Is life insurance worth it if I\'m young and healthy?',
        a: "Especially if you're young and healthy. Your rate is locked in at the time you apply. A healthy person in their 20s or 30s can often get significant coverage for a very low monthly cost. Waiting until you're older — or until a health issue comes up — makes it significantly more expensive.",
      },
    ],
  },
  {
    category: 'Trust & Transparency',
    questions: [
      {
        q: 'What if I\'m not ready to buy anything?',
        a: "That's completely fine. Some people need time. Some people are just starting to learn. Both are welcome here. I'd rather you understand your options fully before making any decision.",
      },
      {
        q: 'What if I decide this isn\'t right for me?',
        a: "Then it's not right for you — and I'll respect that. I'm not in the business of convincing people to buy things that don't fit their life. My reputation matters more than any single sale.",
      },
      {
        q: 'How do I know you\'re being straight with me?',
        a: "That's a fair thing to want to know. I'd encourage you to ask me hard questions, compare what I tell you against what you find elsewhere, and trust your gut. I have a Transparency page on this site for exactly this reason — I want you to know how I operate before we ever talk.",
      },
    ],
  },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-warm-sand last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left py-5 flex items-start justify-between gap-4 group"
      >
        <span className="font-body font-medium text-stone-700 group-hover:text-stone-900 transition-colors leading-snug">
          {q}
        </span>
        <span className={`flex-shrink-0 w-5 h-5 rounded-full border border-stone-300 flex items-center justify-center transition-all ${open ? 'bg-forest border-forest' : 'group-hover:border-forest'}`}>
          <svg className={`w-3 h-3 transition-transform ${open ? 'rotate-45 text-white' : 'text-stone-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>
      {open && (
        <div className="pb-5">
          <p className="text-stone-600 font-body leading-relaxed text-sm">{a}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQ() {
  return (
    <div className="pt-20">
      <section className="py-24 max-w-3xl mx-auto px-6">

        {/* Header */}
        <div className="mb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-forest mb-4 font-body">Common Questions</p>
          <h1 className="font-display text-5xl font-bold text-stone-800 leading-tight mb-6">
            Honest Answers to<br />
            <span className="text-forest italic">Real Questions.</span>
          </h1>
          <p className="text-stone-600 font-body text-lg leading-relaxed">
            No scripts. No runaround. Just straight answers about who I am, how this works, and what you can expect.
          </p>
        </div>

        {/* FAQ Sections */}
        <div className="space-y-12">
          {faqs.map(section => (
            <div key={section.category}>
              <p className="text-xs uppercase tracking-[0.2em] text-forest mb-4 font-body">{section.category}</p>
              <div className="bg-warm-cream border border-warm-sand rounded-2xl px-6">
                {section.questions.map(item => (
                  <FAQItem key={item.q} q={item.q} a={item.a} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 bg-stone-800 text-warm-cream rounded-2xl p-8 text-center">
          <h2 className="font-display text-2xl font-bold mb-3">Still have questions?</h2>
          <p className="text-stone-400 font-body mb-6 text-sm leading-relaxed">
            The best way to get a real answer is a real conversation. No pressure — just clarity.
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
