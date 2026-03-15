import type { Metadata } from 'next';
import Navigation from '../components/Navigation';
import FocalLengthContent from './FocalLengthContent';

export const metadata: Metadata = {
  title: 'Focal Length Calculator — Free Online Tool | Formula & How to Calculate',
  description: 'Free focal length calculator: get lens focal length instantly. Uses the focal length formula 1/f = (n-1)(1/R₁−1/R₂). For convex, concave & thick lenses. No signup.',
  keywords: 'focal length calculator, calculate focal length, focal length formula, lens focal length calculator, how to calculate focal length, lens maker formula, optics calculator',
  openGraph: {
    title: 'Focal Length Calculator — Free Tool | Formula & How to Calculate',
    description: 'Free focal length calculator: instant results for convex and concave lenses. Uses the lens maker formula. No signup.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Focal Length Calculator — Free Online Tool',
    description: 'Calculate focal length instantly with the lens maker formula. Free for students and engineers.',
  },
  alternates: {
    canonical: 'https://lensmakerformula.vercel.app/focal-length',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebApplication',
      name: 'Focal Length Calculator',
      description: 'Calculate lens focal length using the lens maker formula. Free online tool for optics calculations.',
      applicationCategory: 'EducationalApplication',
      operatingSystem: 'Any',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
      featureList: [
        'Calculate focal length from refractive index and radii',
        'Support for convex and concave lenses',
        'Real-time calculation results',
        'Visual lens diagram',
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to Calculate Focal Length of a Lens',
      description: 'Step-by-step guide to calculate focal length using the lens maker formula.',
      step: [
        { '@type': 'HowToStep', position: 1, name: 'Enter refractive index', text: 'Input the refractive index (n) of your lens material. Common values: Crown glass (1.52), Flint glass (1.62), Plastic (1.49).' },
        { '@type': 'HowToStep', position: 2, name: 'Enter R₁', text: 'Input the radius of curvature of the first lens surface in meters. Use positive for convex, negative for concave.' },
        { '@type': 'HowToStep', position: 3, name: 'Enter R₂', text: 'Input the radius of curvature of the second lens surface in meters. Use the sign convention correctly.' },
        { '@type': 'HowToStep', position: 4, name: 'Get result', text: 'The calculator applies the formula 1/f = (n-1)(1/R₁ - 1/R₂) and displays the focal length instantly.' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How do I calculate focal length of a lens?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Use the lens maker formula: 1/f = (n-1)(1/R₁ - 1/R₂). Enter the refractive index (n) and the radii of curvature (R₁ and R₂), then calculate 1/f and take the reciprocal to get the focal length f.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the focal length formula for a lens?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The focal length formula (lens maker equation) is 1/f = (n-1)(1/R₁ - 1/R₂), where f is focal length, n is refractive index, R₁ is the first surface radius, and R₂ is the second surface radius.',
          },
        },
        {
          '@type': 'Question',
          name: 'How to find focal length of a convex lens?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For a biconvex lens, use positive R₁ and negative R₂ in the lens maker formula. For example, with R₁ = +10cm, R₂ = -10cm, and n = 1.5: 1/f = 0.5(0.1 + 0.1) = 0.1, so f = 10cm (positive = converging).',
          },
        },
      ],
    },
  ],
};

export default function FocalLengthPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />
      <FocalLengthContent />
    </>
  );
}
