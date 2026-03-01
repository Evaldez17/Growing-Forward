import Link from 'next/link'

export default function About() {
  return (
    <div className="pt-20">

      {/* Hero */}
      <section className="py-24 max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Photo placeholder */}
          <div>
            <div className="w-full aspect-[4/5] bg-warm-sand rounded-2xl flex items-center justify-center">
              <p className="text-stone-400 text-sm text-center px-8">
                Your photo goes here.<br />
                <span className="text-xs">(Add a headshot when ready)</span>
              </p>
            </div>
          </div>

          {/* Headline */}
          <div className="flex items-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-stone-800 leading-tight">
              Growth isn't loud. It's built quietly — in the seasons that shape you.
            </h1>
          </div>

        </div>
      </section>

      {/* Section 1 — Where This Started */}
      <section className="py-20 bg-warm-sand/40">
        <div className="max-w-3xl mx-auto px-6">
          <div className="space-y-5 text-stone-600 font-body leading-relaxed text-lg">
            <p>Growing Forward didn't begin as a business idea.</p>
            <p>It grew out of seasons I didn't choose.</p>
            <p>Over the years, I've watched my family walk through devastating loss. I've seen what happens when grief and financial pressure collide at the same time. I've seen how quickly stability can feel fragile.</p>
            <p>Those experiences stay with you.</p>
            <p>They don't make you fearful. They make you aware.</p>
            <p>At the same time, I've spent years working on my own mindset — learning resilience, discipline, and the responsibility that comes with being someone others depend on.</p>
            <p className="font-display text-xl text-stone-800 font-bold italic">
              Growth became personal long before it became practical.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 — The Season I'm In Now */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-stone-800 mb-8">
            The Season I'm In Now
          </h2>
          <div className="space-y-5 text-stone-600 font-body leading-relaxed text-lg">
            <p>This opportunity found me during a season where responsibility was already heavy on my mind. After looking at it closely, I chose to step into it intentionally.</p>
            <p>Right now, one of the primary ways I help people move forward responsibly is through financial protection.</p>
            <p>I'm licensed by the state of Colorado as a life insurance agent, and I operate through Primerica's platform and product structure. Primerica provided the training and pathway that helped me get licensed. The license itself is issued by the state.</p>
            <p>I'm building this chapter in real time, and I take that responsibility seriously.</p>
          </div>

          <div className="mt-10 space-y-2 font-display text-lg font-bold text-stone-700">
            <p>Education first.</p>
            <p>Transparency always.</p>
            <p>No pressure.</p>
          </div>

          <div className="mt-8 space-y-3 text-stone-600 font-body leading-relaxed text-lg">
            <p>If something makes sense, I'll help you move confidently.</p>
            <p>If it doesn't, we don't force it.</p>
          </div>
        </div>
      </section>

      {/* Section 3 — What Growing Forward Means */}
      <section className="py-20 bg-stone-800 text-warm-cream">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">
            What Growing Forward Means
          </h2>
          <div className="space-y-4 text-stone-400 font-body leading-relaxed text-lg">
            <p>Growth isn't just mindset.</p>
            <p>It's strengthening your mind, building something meaningful, and taking responsibility for the people who trust you.</p>
            <p>Financial protection is one tool in that process.</p>
            <p>Not the identity. Not the mission. Just a tool.</p>
          </div>
          <p className="mt-8 font-display text-xl font-bold text-warm-amber">
            Morals first. Always.
          </p>
        </div>
      </section>

      {/* Section 4 — What You Can Expect */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-stone-800 mb-10">
            What You Can Expect
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {['Clear explanations', 'Honest answers', 'No scripts', 'Space to think'].map(item => (
              <div key={item} className="bg-warm-sand/50 border border-warm-sand rounded-xl p-6 text-center">
                <p className="font-display text-stone-700 font-bold">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-stone-600 font-body text-lg leading-relaxed mb-16">
            Some people need time. Some people are ready to move. Both are welcome here.
          </p>

          <div className="border-t border-warm-sand pt-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <p className="text-stone-400 font-body italic">
              Different seasons. Different reasons. But always — keep growing forward.
            </p>
            <Link
              href="/work-with-me"
              className="flex-shrink-0 bg-forest text-warm-cream px-7 py-3.5 rounded-full font-medium hover:bg-forest-dark transition-colors duration-200"
            >
              Start the Conversation →
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
