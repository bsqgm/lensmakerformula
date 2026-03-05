import type { Metadata } from 'next';
import Navigation from '../components/Navigation';
import LensMakerEquationContent from './LensMakerEquationContent';

export const metadata: Metadata = {
  title: 'Lens Maker Equation - Complete Mathematical Guide & Calculator',
  description: 'Master the lens maker equation 1/f = (n-1)(1/R₁ - 1/R₂). Complete mathematical guide with all equation forms, derivation steps, variable definitions, and free online calculator.',
  keywords: 'lens maker equation, lens makers equation, lensmaker equation, lens equation, lens maker formula equation, optics lens equation, thin lens maker equation',
  openGraph: {
    title: 'Lens Maker Equation - Mathematical Guide & Calculator',
    description: 'Complete mathematical guide to the lens maker equation with all forms, derivation, and calculator.',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lens Maker Equation - Complete Guide',
    description: 'Master the lens maker equation with our comprehensive mathematical guide',
  },
  alternates: {
    canonical: 'https://lensmakerformula.vercel.app/lens-maker-equation',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Lens Maker Equation - Complete Mathematical Guide',
      description: 'Comprehensive mathematical guide to the lens maker equation with derivation and examples.',
      author: { '@type': 'Organization', name: 'Lens Maker Formula Calculator' },
      publisher: { '@type': 'Organization', name: 'Lens Maker Formula Calculator' },
      datePublished: '2024-01-01',
      dateModified: new Date().toISOString().split('T')[0],
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://lensmakerformula.vercel.app/lens-maker-equation',
      },
    },
    {
      '@type': 'WebApplication',
      name: 'Lens Maker Equation Calculator',
      description: 'Free calculator for the lens maker equation',
      applicationCategory: 'EducationalApplication',
      operatingSystem: 'Any',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the lens maker equation?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The lens maker equation is 1/f = (n-1)(1/R₁ - 1/R₂), which relates the focal length (f) of a thin lens to its refractive index (n) and the radii of curvature of its two surfaces (R₁ and R₂). It is fundamental to optical lens design.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the difference between lens maker equation and thin lens equation?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The lens maker equation 1/f = (n-1)(1/R₁ - 1/R₂) calculates focal length from lens geometry (material and shape). The thin lens equation 1/f = 1/v - 1/u relates focal length to object distance (u) and image distance (v). They describe different relationships.',
          },
        },
        {
          '@type': 'Question',
          name: 'When should I use the thick lens maker equation?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Use the thick lens equation 1/f = (n-1)[1/R₁ - 1/R₂ + (n-1)d/(nR₁R₂)] when the lens thickness d is significant compared to the radii of curvature. As a rule of thumb, if d > R/10, use the thick lens version.',
          },
        },
      ],
    },
  ],
};

export default function LensMakerEquationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />
      <LensMakerEquationContent />
    </>
  );
}
