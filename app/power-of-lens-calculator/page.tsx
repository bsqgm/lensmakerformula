import type { Metadata } from 'next';
import Navigation from '../components/Navigation';
import PowerOfLensContent from './PowerOfLensContent';

export const metadata: Metadata = {
  title: 'Power of Lens Calculator - Calculate Lens Power in Diopters',
  description: 'Free power of lens calculator. Calculate lens power in diopters using P = 1/f. Convert between focal length and diopters, understand lens prescriptions, and learn the power of lens formula.',
  keywords: 'power of lens calculator, lens power calculator, diopter calculator, power of a lens, lens power formula, calculate lens power, diopter to focal length, focal length to diopter, optical power calculator',
  openGraph: {
    title: 'Power of Lens Calculator - Diopter Calculator',
    description: 'Free calculator to convert between lens power (diopters) and focal length.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Power of Lens Calculator',
    description: 'Calculate lens power in diopters with our free tool',
  },
  alternates: {
    canonical: 'https://lensmakerformula.vercel.app/power-of-lens-calculator',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebApplication',
      name: 'Power of Lens Calculator',
      description: 'Free calculator for lens power in diopters using P = 1/f',
      applicationCategory: 'EducationalApplication',
      operatingSystem: 'Any',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    },
    {
      '@type': 'Article',
      headline: 'Power of Lens Calculator - Calculate Lens Power in Diopters',
      description: 'Complete guide to lens power calculation with free online calculator.',
      author: { '@type': 'Organization', name: 'Lens Maker Formula Calculator' },
      publisher: { '@type': 'Organization', name: 'Lens Maker Formula Calculator' },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://lensmakerformula.vercel.app/power-of-lens-calculator',
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the formula for power of a lens?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The power of a lens is P = 1/f, where P is the power in diopters (D) and f is the focal length in meters. A lens with a focal length of 0.5 m has a power of +2.0 D. Positive power means converging, negative means diverging.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I convert diopters to focal length?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'To convert diopters to focal length: f = 1/P. For example, a +3.0 D lens has a focal length of 1/3 = 0.333 meters (33.3 cm). A -2.5 D lens has a focal length of 1/(-2.5) = -0.4 meters (-40 cm).',
          },
        },
        {
          '@type': 'Question',
          name: 'What does a negative lens power mean?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Negative lens power indicates a diverging (concave) lens. It spreads light rays apart and is used to correct myopia (nearsightedness). For example, a prescription of -3.0 D means a concave lens with a focal length of -33.3 cm.',
          },
        },
      ],
    },
  ],
};

export default function PowerOfLensCalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />
      <PowerOfLensContent />
    </>
  );
}
