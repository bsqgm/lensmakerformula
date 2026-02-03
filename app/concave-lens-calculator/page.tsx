import type { Metadata } from 'next';
import Navigation from '../components/Navigation';
import ConcaveLensContent from './ConcaveLensContent';

export const metadata: Metadata = {
  title: 'Concave Lens Calculator - Calculate Focal Length of Diverging Lenses',
  description: 'Free concave lens calculator to compute focal length of biconcave and plano-concave lenses. Calculate diverging lens focal length using the lens maker formula. Essential for myopia correction and optical design.',
  keywords: 'concave lens calculator, biconcave lens focal length, plano concave lens calculator, diverging lens calculator, focal length of concave lens, concave lens formula, negative lens calculator',
  openGraph: {
    title: 'Concave Lens Calculator - Diverging Lens Focal Length',
    description: 'Calculate focal length of concave lenses instantly. Free tool for biconcave and plano-concave lens calculations.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Concave Lens Calculator',
    description: 'Calculate focal length of concave (diverging) lenses instantly',
  },
  alternates: {
    canonical: 'https://lensmakerformula.vercel.app/concave-lens-calculator',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebApplication',
      name: 'Concave Lens Calculator',
      description: 'Calculate focal length of concave (diverging) lenses including biconcave and plano-concave types.',
      applicationCategory: 'EducationalApplication',
      operatingSystem: 'Any',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
      featureList: [
        'Biconcave lens calculation',
        'Plano-concave lens calculation',
        'Preset lens types',
        'Real-time focal length results',
        'Visual lens diagram',
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is a concave lens?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A concave lens is a diverging lens that is thinner in the middle than at the edges. It spreads parallel light rays apart so they appear to come from a virtual focal point. Common types include biconcave (curved inward on both sides) and plano-concave (one flat side). Concave lenses always have negative focal length.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why is focal length of concave lens negative?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Concave lenses diverge light rays instead of converging them. The focal point is virtual - it is where the diverging rays appear to originate from when traced backward. By convention, virtual focal points have negative focal length, distinguishing diverging lenses from converging (positive) lenses.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I calculate focal length of a concave lens?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Use the lens maker formula: 1/f = (n-1)(1/R₁ - 1/R₂). For a biconcave lens, R₁ is negative and R₂ is positive. For example, with R₁ = -10 cm, R₂ = +10 cm, and n = 1.5: 1/f = 0.5(-10 - 10) = -10, so f = -10 cm (negative = diverging).',
          },
        },
        {
          '@type': 'Question',
          name: 'What are concave lenses used for?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Concave lenses correct nearsightedness (myopia) by diverging light before it enters the eye. They are also used in telescope eyepieces (Galilean design), peepholes in doors, laser beam expanders, and to correct aberrations in compound lens systems.',
          },
        },
      ],
    },
  ],
};

export default function ConcaveLensCalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />
      <ConcaveLensContent />
    </>
  );
}
