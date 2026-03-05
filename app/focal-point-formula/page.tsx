import type { Metadata } from 'next';
import Navigation from '../components/Navigation';
import FocalPointFormulaContent from './FocalPointFormulaContent';

export const metadata: Metadata = {
  title: 'Focal Point Formula - How to Calculate the Focal Point of a Lens',
  description: 'Learn the focal point formula for lenses. Understand how to find the focal point using 1/f = (n-1)(1/R₁ - 1/R₂), the relationship between focal point and focal length, and calculate with our free tool.',
  keywords: 'focal point formula, formula for focal point, focal point calculation, focal point of a lens, how to find focal point, calculate focal point, focal point equation',
  openGraph: {
    title: 'Focal Point Formula - Complete Guide & Calculator',
    description: 'Learn how to calculate the focal point of any lens with the focal point formula and free calculator.',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Focal Point Formula',
    description: 'Complete guide to calculating the focal point of any lens',
  },
  alternates: {
    canonical: 'https://lensmakerformula.vercel.app/focal-point-formula',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Focal Point Formula - How to Calculate the Focal Point of a Lens',
      description: 'Complete guide to the focal point formula with examples and calculator.',
      author: { '@type': 'Organization', name: 'Lens Maker Formula Calculator' },
      publisher: { '@type': 'Organization', name: 'Lens Maker Formula Calculator' },
      datePublished: '2024-01-01',
      dateModified: new Date().toISOString().split('T')[0],
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://lensmakerformula.vercel.app/focal-point-formula',
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the focal point formula?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The focal point formula determines where parallel light rays converge after passing through a lens. Use the lens maker formula 1/f = (n-1)(1/R₁ - 1/R₂) to find the focal length f. The focal point is located at distance f from the optical center of the lens.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do you find the focal point of a convex lens?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For a convex lens, the focal point is on the opposite side from the incoming light. Calculate f using 1/f = (n-1)(1/R₁ - 1/R₂). The focal point (F) is located at distance f behind the lens, where parallel light rays converge to form a real image.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the difference between focal point and focal length?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The focal point (F) is a specific location in space where parallel light converges (or appears to diverge from). The focal length (f) is the distance from the optical center of the lens to the focal point. Focal length is a measurement; focal point is a position.',
          },
        },
      ],
    },
  ],
};

export default function FocalPointFormulaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />
      <FocalPointFormulaContent />
    </>
  );
}
