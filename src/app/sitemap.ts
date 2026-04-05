import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.growingforwardco.com'

  const staticRoutes = [
    { url: `${baseUrl}/`, priority: 1.0, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/about`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/learn`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/faq`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/resources`, priority: 0.8, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/budget-spreadsheet`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/quiz`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/snapshot`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/transparency`, priority: 0.6, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/contact`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/work-with-me`, priority: 0.9, changeFrequency: 'monthly' as const },
  ]

  const learnRoutes = [
    'financial-foundation',
    'how-money-works',
    'cost-of-waiting',
    'rule-of-72',
    'compound-interest',
    'inflation',
    'why-life-insurance',
    'term-vs-whole-life',
    'how-much-coverage',
    'income-protection',
    'emergency-fund',
    'budgeting-basics',
    'debt-payoff-strategies',
    'balance-transfer-strategy',
    'debt-consolidation',
    'paying-yourself-first',
    'investing-basics',
    'retirement-basics',
    'financial-independence',
    'power-of-time',
  ].map(slug => ({
    url: `${baseUrl}/learn/${slug}`,
    priority: 0.7,
    changeFrequency: 'monthly' as const,
  }))

  return [...staticRoutes, ...learnRoutes].map(route => ({
    ...route,
    lastModified: new Date(),
  }))
}
