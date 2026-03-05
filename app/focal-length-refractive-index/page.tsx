import type { Metadata } from 'next';
import Navigation from '../components/Navigation';
import FocalLengthRefractiveIndexContent from './FocalLengthRefractiveIndexContent';

export const metadata: Metadata = {
  title: 'Focal Length & Refractive Index - How Refractive Index Affects Focal Length',
  description: 'Understand the relationship between focal length and refractive index. Learn how changing the refractive index affects focal length using 1/f = (n-1)(1/R₁ - 1/R₂). Interactive comparison calculator.',
  keywords: 'focal length formula with refractive index, focal length in terms of refractive index, refractive index and focal length, focal length refractive index relationship, how refractive index affects focal length, focal length formula refractive index',
  openGraph: {
    title: 'Focal Length & Refractive Index - Relationship Guide',
    description: 'How refractive index affects focal length with interactive calculator and comparison charts.',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Focal Length & Refractive Index',
    description: 'Understanding the relationship between refractive index and focal length',
  },
  alternates: {
    canonical: 'https://lensmakerformula.vercel.app/focal-length-refractive-index',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Focal Length & Refractive Index - How Refractive Index Affects Focal Length',
      description: 'Complete guide to the relationship between focal length and refractive index in optical lenses.',
      author: { '@type': 'Organization', name: 'Lens Maker Formula Calculator' },
      publisher: { '@type': 'Organization', name: 'Lens Maker Formula Calculator' },
      datePublished: '2024-01-01',
      dateModified: new Date().toISOString().split('T')[0],
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://lensmakerformula.vercel.app/focal-length-refractive-index',
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How does refractive index affect focal length?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Higher refractive index results in shorter focal length (stronger lens). From the formula 1/f = (n-1)(1/R₁ - 1/R₂), as n increases, (n-1) increases, making 1/f larger and f smaller.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the focal length formula in terms of refractive index?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The focal length in terms of refractive index is: f = 1/[(n-1)(1/R₁ - 1/R₂)]. For a symmetric biconvex lens with radius R, this simplifies to f = R/[2(n-1)]. For a plano-convex lens, f = R/(n-1).',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I change focal length by changing the medium?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. When a lens is immersed in a medium other than air, use the relative refractive index: n_rel = n_lens/n_medium. The formula becomes 1/f = (n_rel - 1)(1/R₁ - 1/R₂). A glass lens in water has a longer focal length than in air.',
          },
        },
      ],
    },
  ],
};

export default function FocalLengthRefractiveIndexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />
      <FocalLengthRefractiveIndexContent />
    </>
  );
}
