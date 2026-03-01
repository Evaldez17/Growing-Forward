import Link from 'next/link'

const faqs = [
  {
    q: 'What exactly do you do?',
    a: [
      'I help people think clearly about financial protection and long-term responsibility.',
      'Right now, that primarily means walking through life insurance options and helping people understand what fits — and what doesn\'t.',
      'My goal is clarity first, action second.',
    ]
  },
  {
    q: 'Are you licensed?',
    a: [
      'Yes. I\'m licensed by the state of Colorado as a life insurance agent.',
      'I operate through Primerica\'s platform and product structure.',
    ]
  },
  {
    q: 'Why Primerica?',
    a: [
      'Primerica provided the training and pathway that helped me get licensed. They focus primarily on term life insurance and financial education.',
      'For me, it\'s a structured platform that allows me to operate legally and professionally while keeping my personal values intact.',
    ]
  },
  {
    q: 'What\'s the difference between term and whole life insurance?',
    a: [
      'Term life insurance covers you for a specific period of time — like 10, 20, or 30 years. It\'s typically more affordable and designed purely for protection.',
      'Whole life insurance lasts your entire lifetime and includes a cash value component, which usually makes it more expensive.',
      'Primerica primarily focuses on term life insurance.',
      'If we talk, I\'ll explain both clearly so you understand what fits your situation.',
    ]
  },
  {
    q: 'How much coverage do I actually need?',
    a: [
      'That depends on income, debts, family responsibilities, and long-term goals.',
      'The purpose of life insurance is to replace income and protect stability — not to overcomplicate things.',
      'If we look at it together, I\'ll help you think through realistic numbers instead of guessing.',
    ]
  },
  {
    q: 'What if I already have coverage through work?',
    a: [
      'Employer coverage can be helpful, but it\'s often limited and may not follow you if you change jobs.',
      'It\'s worth reviewing what you have before assuming you\'re fully covered.',
    ]
  },
  {
    q: 'Is this a sales pitch?',
    a: [
      'No.',
      'If we talk, the goal is understanding. You\'ll get explanations, not pressure.',
      'If it makes sense, we move forward.',
      'If it doesn\'t, you still leave with clarity.',
    ]
  },
  {
    q: 'Do I have to buy something?',
    a: [
      'No.',
      'There is no cost to have a conversation or review options.',
      'You\'re never obligated to move forward.',
    ]
  },
  {
    q: 'How do you get paid?',
    a: [
      'If you choose to purchase a policy through Primerica, I may be compensated through commissions.',
      'That compensation does not affect the cost of the policy itself.',
      'Transparency matters to me, so I don\'t hide that.',
    ]
  },
  {
    q: 'Do you recruit people?',
    a: [
      'Occasionally, someone asks about becoming licensed themselves.',
      'I don\'t approach people about becoming agents unless they express genuine interest. If someone is curious, I\'m happy to explain how it works — including the pros and the challenges.',
    ]
  },
  {
    q: 'Why does responsibility matter so much to you?',
    a: [
      'Because I\'ve seen what happens when preparation is missing.',
      'Grief is heavy enough. Financial pressure doesn\'t need to make it heavier.',
      'Responsibility isn\'t about fear. It\'s about reducing chaos when life hits hard.',
      'I don\'t believe in panic-driven decisions. I believe in steady preparation.',
    ]
  },
  {
    q: 'What does "Growing Forward" actually mean?',
    a: [
      'It means progress over perfection.',
      'It means staying steady when things feel uncertain — building strength internally and stability externally.',
      'Forward doesn\'t mean fast. It means intentional.',
      'Growth isn\'t loud. It compounds quietly over time.',
    ]
  },
  {
    q: 'What if I\'m not ready?',
    a: [
      'That\'s okay. Growth doesn\'t happen on someone else\'s timeline.',
      'But here\'s the gentle truth: clarity is always better than avoidance.',
      'Even a short conversation can replace assumptions with understanding.',
      'Some people need time. Some people are ready to act. Either way — movement starts with awareness.',
    ]
  },
  {
    q: 'Why should I trust you?',
    a: [
      'You shouldn\'t trust anyone blindly — including me.',
      'Trust is built through clarity, consistency, and how someone handles pressure.',
      'If we talk, you\'ll notice a few things:',
    ],
    bullets: [
      'I won\'t rush you.',
      'I won\'t hide how I\'m compensated.',
      'I won\'t push you into something you don\'t understand.',
      'I\'ll tell you if something doesn\'t make sense for you.',
    ],
    closing: [
      'Trust isn\'t claimed. It\'s earned over time.',
      'That\'s the standard I hold myself to.',
    ]
  },
]

export default function FAQ() {
  return (
    <div className="pt-20">
      <section className="py-24 max-w-4xl mx-auto px-6">

        {/* Intro */}
        <div className="mb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-forest mb-4">FAQ</p>
          <h1 className="font-display text-5xl font-bold text-stone-800 leading-tight mb-6">
            Questions are normal.<br />
            <span className="text-forest italic">Clarity is the goal.</span>
          </h1>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((item) => (
            <details key={item.q} className="group border-b border-warm-sand pb-4">
              <summary className="flex items-start justify-between cursor-pointer list-none gap-4 py-2">
                <h2 className="font-display text-xl font-bold text-stone-800 group-open:text-forest transition-colors duration-200">
                  {item.q}
                </h2>
                <span className="text-forest mt-1 flex-shrink-0 text-2xl leading-none transition-transform duration-200 group-open:rotate-45">+</span>
              </summary>
              <div className="mt-4 mb-2 space-y-3 text-stone-600 font-body leading-relaxed">
                {item.a.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
                {item.bullets && (
                  <ul className="space-y-2 pl-4 mt-2">
                    {item.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-forest mt-1.5 flex-shrink-0">—</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {item.closing && item.closing.map((line, i) => (
                  <p key={i} className="mt-2">{line}</p>
                ))}
              </div>
            </details>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 bg-forest/5 border border-forest/10 rounded-2xl p-10 text-center">
          <h2 className="font-display text-2xl font-bold text-stone-800 mb-3">
            Still have questions?
          </h2>
          <p className="text-stone-600 font-body mb-6">
            I'd rather answer them in a real conversation. No pressure, no pitch.
          </p>
          <Link
            href="/work-with-me"
            className="inline-block bg-forest text-warm-cream px-7 py-3.5 rounded-full font-medium hover:bg-forest-dark transition-colors"
          >
            Start the Conversation →
          </Link>
        </div>

      </section>
    </div>
  )
}
