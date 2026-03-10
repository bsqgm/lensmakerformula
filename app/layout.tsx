import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import './globals.css'
import PlausibleScript from './components/PlausibleScript'

export const metadata: Metadata = {
  title: 'Lens Maker Formula Calculator - Free Online Lens Formula Tool',
  description: 'Free lens formula calculator to compute focal length instantly. Use the lens maker equation 1/f = (n-1)(1/R₁ - 1/R₂) with our interactive calculator. Get accurate results for convex, concave, and thick lenses.',
  keywords: 'lens maker formula, lens formula calculator, focal length calculator, optics calculator, thin lens equation, lens equation, calculate focal length, how to find focal length',
  authors: [{ name: 'Lens Maker Formula Calculator' }],
  openGraph: {
    title: 'Lens Maker Formula Calculator - Free Online Tool',
    description: 'Calculate lens focal length instantly with our free lens formula calculator. Works for convex, concave, and thick lenses.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lens Maker Formula Calculator',
    description: 'Free online lens formula calculator for focal length calculations',
  },
  alternates: {
    canonical: 'https://lensmakerformula.vercel.app',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
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
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-9BZ7E17XVY"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9BZ7E17XVY');
          `}
        </Script>
      </head>
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

