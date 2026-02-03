import type { Metadata } from 'next';
import Navigation from '../components/Navigation';
import ConvexLensContent from './ConvexLensContent';

export const metadata: Metadata = {
  title: 'Convex Lens Calculator - Calculate Focal Length of Converging Lenses',
  description: 'Free convex lens calculator to compute focal length of biconvex and plano-convex lenses. Use the lens maker formula with preset values for converging lenses. Get instant results for magnifying glasses, camera lenses, and more.',
  keywords: 'convex lens calculator, biconvex lens focal length, plano convex lens calculator, converging lens calculator, focal length of convex lens, convex lens formula, positive lens calculator',
  openGraph: {
    title: 'Convex Lens Calculator - Converging Lens Focal Length',
    description: 'Calculate focal length of convex lenses instantly. Free tool for biconvex and plano-convex lens calculations.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Convex Lens Calculator',
    description: 'Calculate focal length of convex (converging) lenses instantly',
  },
  alternates: {
    canonical: 'https://lensmakerformula.vercel.app/convex-lens-calculator',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebApplication',
      name: 'Convex Lens Calculator',
      description: 'Calculate focal length of convex (converging) lenses including biconvex and plano-convex types.',
      applicationCategory: 'EducationalApplication',
      operatingSystem: 'Any',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
      featureList: [
        'Biconvex lens calculation',
        'Plano-convex lens calculation',
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
          name: 'What is a convex lens?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A convex lens is a converging lens that is thicker in the middle than at the edges. It bends parallel light rays to meet at a focal point. Common types include biconvex (curved on both sides) and plano-convex (one flat side). Convex lenses always have positive focal length.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I calculate focal length of a convex lens?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Use the lens maker formula: 1/f = (n-1)(1/R₁ - 1/R₂). For a biconvex lens, R₁ is positive and R₂ is negative. For a plano-convex lens, one radius is infinity (flat surface). The result is always a positive focal length for convex lenses.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the sign convention for convex lens radii?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For a biconvex lens: R₁ (first surface) is positive because the center of curvature is on the right side of the surface. R₂ (second surface) is negative because its center of curvature is on the left side. This gives a positive (converging) focal length.',
          },
        },
        {
          '@type': 'Question',
          name: 'What are common applications of convex lenses?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Convex lenses are used in magnifying glasses, camera lenses, telescope objectives, microscope objectives, eyeglasses for farsightedness (hyperopia), projectors, and smartphone cameras. They focus light and can form real or virtual images depending on object distance.',
          },
        },
      ],
    },
  ],
};

export default function ConvexLensCalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />
      <ConvexLensContent />
    </>
  );
}
