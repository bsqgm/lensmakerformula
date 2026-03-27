import type { Metadata } from 'next';
import ThickLensContent from './ThickLensContent';
import Navigation from '../components/Navigation';

export const metadata: Metadata = {
  title: 'Thick Lens Calculator - Compare Thin vs Thick Lens Focal Length',
  description: 'Calculate focal length for thick lenses using the modified lens maker formula. Includes thickness correction and supports thin-vs-thick lens comparison for more accurate optical design.',
  keywords: 'thick lens calculator, thick lens formula, lens thickness correction, optical calculator, lens design, thick lens focal length',
  openGraph: {
    title: 'Thick Lens Calculator - Focal Length with Thickness',
    description: 'Calculate focal length for thick lenses and compare against the thin lens approximation.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Thick Lens Calculator',
    description: 'Calculate focal length for thick lenses with thickness correction and compare to thin lens results',
  },
  alternates: {
    canonical: 'https://lensmakerformula.vercel.app/thick-lens',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebApplication',
      name: 'Thick Lens Calculator',
      description: 'Calculate focal length for thick lenses using the modified lens maker formula with thickness correction.',
      applicationCategory: 'EducationalApplication',
      operatingSystem: 'Any',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
      featureList: [
        'Thick lens focal length calculation',
        'Lens thickness correction',
        'Thin vs thick lens comparison',
        'Real-time results',
        'Step-by-step formula breakdown',
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the thick lens formula?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The thick lens formula is 1/f = (n-1)[1/R₁ - 1/R₂ + (n-1)d/(nR₁R₂)], where d is the center thickness of the lens. This formula accounts for the separation between the two refracting surfaces that is ignored in the thin lens approximation.',
          },
        },
        {
          '@type': 'Question',
          name: 'When should I use the thick lens formula instead of thin lens?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Use the thick lens formula when lens thickness is greater than 10% of either radius of curvature, when high precision is required, or when designing camera lenses, microscope objectives, or high-power eyeglasses. The thin lens formula is a simplification that ignores thickness.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much does thickness affect focal length calculation?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For a typical biconvex lens with thickness equal to 10% of the radii, the focal length can differ by 1-3% from thin lens calculation. For high-power lenses or thick meniscus designs, the difference can be 5-10% or more, making thickness correction essential for accurate results.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the difference between thin lens and thick lens formula?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The thin lens formula 1/f = (n-1)(1/R₁ - 1/R₂) assumes zero thickness. The thick lens formula adds a correction term (n-1)d/(nR₁R₂) to account for the physical separation between lens surfaces. This correction becomes significant for lenses where thickness is comparable to the radii of curvature.',
          },
        },
      ],
    },
  ],
};

export default function ThickLensPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />
      <ThickLensContent />
    </>
  );
}
