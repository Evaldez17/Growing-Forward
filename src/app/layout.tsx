import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.growingforwardco.com'),
  title: {
    default: 'Growing Forward Co | Financial Education & Life Insurance',
    template: '%s | Growing Forward Co',
  },
  description: 'Growing Forward Co helps people build financial clarity, protect their income, and make confident decisions about their financial future.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    siteName: 'Growing Forward Co',
    url: 'https://www.growingforwardco.com',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="bg-warm-cream text-stone-800 font-body antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
