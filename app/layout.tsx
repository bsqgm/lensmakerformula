import type { Metadata } from 'next'
import './globals.css'
import PlausibleScript from './components/PlausibleScript'

export const metadata: Metadata = {
  title: 'Lens Maker Formula Calculator - Free Online Optics Tool',
  description: 'Calculate lens focal length using the lens maker formula. Free, accurate online calculator with step-by-step explanations and visual demonstrations.',
  keywords: 'lens maker formula, lens formula calculator, focal length calculator, optics calculator, thin lens equation, lens equation',
  authors: [{ name: 'Lens Maker Formula Calculator' }],
  openGraph: {
    title: 'Lens Maker Formula Calculator',
    description: 'Free online calculator for lens focal length using the lens maker formula',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lens Maker Formula Calculator',
    description: 'Free online calculator for lens focal length',
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#0a0e27',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // 在服务端组件中读取环境变量
  const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
  const plausibleApiHost = process.env.NEXT_PUBLIC_PLAUSIBLE_API_HOST;

  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <PlausibleScript 
          domain={plausibleDomain}
          apiHost={plausibleApiHost}
        />
        {children}
      </body>
    </html>
  )
}

