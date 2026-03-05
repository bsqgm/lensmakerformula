import type { Metadata } from 'next';
import Navigation from '../components/Navigation';
import FocalLengthEquationContent from './FocalLengthEquationContent';

export const metadata: Metadata = {
  title: 'Focal Length Equation - All Forms of the Lens Equation Explained',
  description: 'Complete guide to the focal length equation in all its forms. Learn the lens maker equation 1/f = (n-1)(1/R₁ - 1/R₂), thin lens equation, and how to solve for any variable. Free calculator included.',
  keywords: 'focal length equation, equation for focal length, lens focal length equation, focal length equations, thin lens equation, lens equation, focal length formula equation, optics equation',
  openGraph: {
    title: 'Focal Length Equation - Complete Reference Guide',
    description: 'All forms of the focal length equation explained with examples, derivations, and free calculator.',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Focal Length Equation - All Forms Explained',
    description: 'Complete reference for the focal length equation with all algebraic forms and free calculator',
  },
  alternates: {
    canonical: 'https://lensmakerformula.vercel.app/focal-length-equation',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Focal Length Equation - All Forms of the Lens Equation Explained',
      description: 'Comprehensive reference for the focal length equation including all algebraic rearrangements.',
      author: { '@type': 'Organization', name: 'Lens Maker Formula Calculator' },
      publisher: { '@type': 'Organization', name: 'Lens Maker Formula Calculator' },
      datePublished: '2024-01-01',
      dateModified: new Date().toISOString().split('T')[0],
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://lensmakerformula.vercel.app/focal-length-equation',
      },
    },
    {
      '@type': 'WebApplication',
      name: 'Focal Length Equation Calculator',
      description: 'Free online calculator for the focal length equation 1/f = (n-1)(1/R₁ - 1/R₂)',
      applicationCategory: 'EducationalApplication',
      operatingSystem: 'Any',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the focal length equation?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The focal length equation (lens maker equation) is 1/f = (n-1)(1/R₁ - 1/R₂), where f is focal length, n is the refractive index of the lens material, R₁ is the radius of curvature of the first surface, and R₂ is the radius of the second surface.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do you rearrange the focal length equation to solve for n?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'To solve for the refractive index n: n = 1 + 1/[f × (1/R₁ - 1/R₂)]. First calculate the curvature term (1/R₁ - 1/R₂), then divide 1/f by this term, and add 1.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the difference between the focal length equation and the thin lens equation?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The focal length equation (lens maker equation) relates focal length to lens geometry: 1/f = (n-1)(1/R₁ - 1/R₂). The thin lens equation relates focal length to object and image distances: 1/f = 1/v - 1/u. They describe different aspects of lens behavior.',
          },
        },
      ],
    },
  ],
};

export default function FocalLengthEquationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />
      <FocalLengthEquationContent />
    </>
  );
}
