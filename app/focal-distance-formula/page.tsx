import type { Metadata } from 'next';
import Navigation from '../components/Navigation';
import FocalDistanceFormulaContent from './FocalDistanceFormulaContent';

export const metadata: Metadata = {
  title: 'Focal Distance Formula - Calculate Focal Distance of Any Lens',
  description: 'Learn the focal distance formula and how it relates to focal length. Understand focal distance vs focal length, the lens maker formula 1/f = (n-1)(1/R₁ - 1/R₂), and calculate focal distance with our free tool.',
  keywords: 'focal distance formula, focal distance equation, how to find focal distance, how to calculate focal distance, focal distance vs focal length, focal distance of lens, focal distance calculation',
  openGraph: {
    title: 'Focal Distance Formula - Complete Guide & Calculator',
    description: 'Master the focal distance formula. Learn the difference between focal distance and focal length, with free calculator.',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Focal Distance Formula',
    description: 'Complete guide to focal distance formula with calculator',
  },
  alternates: {
    canonical: 'https://lensmakerformula.vercel.app/focal-distance-formula',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Focal Distance Formula - Calculate Focal Distance of Any Lens',
      description: 'Complete guide to the focal distance formula with examples and calculator.',
      author: { '@type': 'Organization', name: 'Lens Maker Formula Calculator' },
      publisher: { '@type': 'Organization', name: 'Lens Maker Formula Calculator' },
      datePublished: '2024-01-01',
      dateModified: new Date().toISOString().split('T')[0],
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://lensmakerformula.vercel.app/focal-distance-formula',
      },
    },
    {
      '@type': 'WebApplication',
      name: 'Focal Distance Calculator',
      description: 'Free calculator for focal distance using the lens maker formula',
      applicationCategory: 'EducationalApplication',
      operatingSystem: 'Any',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the focal distance formula?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The focal distance formula is the same as the focal length formula: 1/f = (n-1)(1/R₁ - 1/R₂). Focal distance and focal length both refer to the distance from the lens center to the focal point. The term "focal distance" is sometimes used in older texts or different regions.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the difference between focal distance and focal length?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'In most contexts, focal distance and focal length are the same thing — the distance from the optical center of the lens to the focal point. However, in some advanced optics, "focal distance" may refer to the distance from the principal plane to the focal point, which differs from the back focal length in thick lenses.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do you calculate focal distance?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Calculate focal distance using 1/f = (n-1)(1/R₁ - 1/R₂), where n is the refractive index and R₁, R₂ are the radii of curvature. For thin lenses, the focal distance equals |f|. For thick lenses, distinguish between front focal distance (FFD) and back focal distance (BFD).',
          },
        },
      ],
    },
  ],
};

export default function FocalDistanceFormulaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />
      <FocalDistanceFormulaContent />
    </>
  );
}
