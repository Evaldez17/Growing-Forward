'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { Suspense } from 'react'

function DownloadConfirmContent() {
  const searchParams = useSearchParams()
  const file = searchParams.get('file') || ''
  const name = searchParams.get('name') || ''
  const title = searchParams.get('title') || 'Your Guide'

  useEffect(() => {
    if (file) {
      const timer = setTimeout(() => {
        const link = document.createElement('a')
        link.href = file
        link.download = ''
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      }, 800)
      return () => clearTimeout(timer)
    }
  }, [file])

  return (
    <div className="pt-20">
      <section className="py-24 max-w-2xl mx-auto px-6 text-center">

        {/* Checkmark */}
        <div className="w-20 h-20 rounded-full bg-forest/10 border border-forest/20 flex items-center justify-center mx-auto mb-8">
          <svg className="w-10 h-10 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        {/* Headline */}
        <h1 className="font-display text-5xl font-bold text-stone-800 mb-4">
          {"You're All Set."}
          {name && <span className="text-forest italic block text-3xl mt-2">{name}.</span>}
        </h1>

        {/* Community line */}
        <p className="text-xs uppercase tracking-[0.2em] text-forest mb-8 font-body">
          {"You're now part of the Growing Forward community."}
        </p>

        {/* Message */}
        <div className="bg-warm-sand/50 border border-warm-sand rounded-2xl p-8 mb-8 text-left space-y-4">
          <p className="text-stone-600 font-body leading-relaxed">
            Your download should start automatically. If it {"doesn't"}, you can use the download link below.
          </p>
          <p className="text-stone-600 font-body leading-relaxed">
            Thanks for taking a step toward growth today. Whether {"it's"} improving your mindset, taking action despite fear, or protecting the people you care about, small steps forward add up over time.
          </p>
          <p className="text-stone-700 font-body font-medium">
            Keep moving forward.
          </p>
          <p className="font-display text-lg font-bold text-forest italic">
            Always be growing forward. 💪
          </p>
        </div>

        {/* Download fallback */}
        {file && (
          <div className="mb-12">
            <a
              href={file}
              download
              className="inline-block bg-forest text-warm-cream px-8 py-4 rounded-full font-medium hover:bg-forest-dark transition-colors duration-200 shadow-lg shadow-forest/20 mb-3"
            >
              Download Now ↓
            </a>
            <p className="text-xs text-stone-400 font-body mt-2">
              If the download {"didn't"} start automatically, click above to download your guide.
            </p>
          </div>
        )}

        {/* Divider */}
        <div className="border-t border-warm-sand my-12" />

        {/* While you're here */}
        <div className="space-y-4 mb-10">
          <h2 className="font-display text-2xl font-bold text-stone-800">
            While you're here…
          </h2>
          <p className="text-stone-600 font-body leading-relaxed">
            Feel free to explore more resources or learn more about the Growing Forward philosophy.
          </p>
          <p className="text-stone-500 font-body text-sm italic">
            Growth {"doesn't"} happen all at once. It happens one step at a time.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/resources"
            className="bg-forest text-warm-cream px-7 py-3.5 rounded-full font-medium hover:bg-forest-dark transition-colors duration-200"
          >
            Back to Resources
          </Link>
          <Link
            href="/"
            className="border border-stone-300 text-stone-700 px-7 py-3.5 rounded-full font-medium hover:border-forest hover:text-forest transition-colors duration-200"
          >
            Visit the Home Page
          </Link>
        </div>

      </section>
    </div>
  )
}

export default function DownloadConfirm() {
  return (
    <Suspense fallback={<div className="pt-40 text-center text-stone-400 font-body">Loading...</div>}>
      <DownloadConfirmContent />
    </Suspense>
  )
}
