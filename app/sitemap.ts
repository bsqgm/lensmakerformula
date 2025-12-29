import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  // 从环境变量获取域名，如果没有则使用默认值
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 
                  process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 
                  'https://lensmakerformula.vercel.app'

  // 确保URL格式正确
  const siteUrl = baseUrl.startsWith('http') ? baseUrl : `https://${baseUrl}`

  const currentDate = new Date().toISOString()

  return [
    {
      url: siteUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${siteUrl}/focal-length`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/refractive-index`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/radius-r1`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/radius-r2`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ]
}

