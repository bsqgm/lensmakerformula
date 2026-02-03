import type { Metadata } from 'next';
import Navigation from '../components/Navigation';
import HowToContent from './HowToContent';

export const metadata: Metadata = {
  title: 'How to Calculate Focal Length - Step-by-Step Guide with Formula',
  description: 'Learn how to calculate focal length of a lens using the lens maker formula. Step-by-step guide with examples for convex and concave lenses. Free calculator included.',
  keywords: 'how to calculate focal length, how to find focal length, calculate focal length, focal length calculation, find focal length of lens, determining focal length, focal length formula',
  openGraph: {
    title: 'How to Calculate Focal Length - Complete Guide',
    description: 'Step-by-step guide to calculate focal length using the lens maker formula. Includes examples and free calculator.',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Calculate Focal Length',
    description: 'Learn to calculate focal length step-by-step with our comprehensive guide',
  },
  alternates: {
    canonical: 'https://lensmakerformula.vercel.app/how-to-calculate-focal-length',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'How to Calculate Focal Length - Complete Step-by-Step Guide',
      description: 'Learn how to calculate the focal length of any lens using the lens maker formula with detailed examples.',
      author: { '@type': 'Organization', name: 'Lens Maker Formula Calculator' },
      publisher: { '@type': 'Organization', name: 'Lens Maker Formula Calculator' },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://lensmakerformula.vercel.app/how-to-calculate-focal-length',
      },
    },
    {
      '@type': 'HowTo',
      name: 'How to Calculate Focal Length of a Lens',
      description: 'Step-by-step instructions to calculate the focal length of any lens using the lens maker formula.',
      totalTime: 'PT5M',
      tool: [
        { '@type': 'HowToTool', name: 'Calculator' },
        { '@type': 'HowToTool', name: 'Lens specifications (radii of curvature)' },
      ],
      supply: [
        { '@type': 'HowToSupply', name: 'Refractive index of lens material' },
        { '@type': 'HowToSupply', name: 'Radius of curvature R₁' },
        { '@type': 'HowToSupply', name: 'Radius of curvature R₂' },
      ],
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Identify Your Lens Type',
          text: 'Determine if your lens is convex (converging), concave (diverging), or a combination. Convex lenses are thicker in the middle; concave lenses are thinner in the middle.',
          image: 'https://lensmakerformula.vercel.app/step1.png',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Find the Refractive Index',
          text: 'Look up the refractive index (n) of your lens material. Common values: Crown glass = 1.52, Flint glass = 1.62, Plastic/Acrylic = 1.49, Polycarbonate = 1.59.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Measure or Note the Radii of Curvature',
          text: 'Find R₁ (first surface radius) and R₂ (second surface radius) in meters. These may be given in lens specifications or measured with a spherometer.',
        },
        {
          '@type': 'HowToStep',
          position: 4,
          name: 'Apply the Sign Convention',
          text: 'For convex surfaces facing the light source: positive radius. For concave surfaces facing the light source: negative radius. Flat surfaces have R = infinity.',
        },
        {
          '@type': 'HowToStep',
          position: 5,
          name: 'Calculate Using the Lens Maker Formula',
          text: 'Apply the formula: 1/f = (n-1)(1/R₁ - 1/R₂). Calculate the value of 1/f first, then take the reciprocal to find f.',
        },
        {
          '@type': 'HowToStep',
          position: 6,
          name: 'Interpret the Result',
          text: 'A positive focal length indicates a converging lens. A negative focal length indicates a diverging lens. The magnitude tells you the focusing power.',
        },
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
            text: 'Use the lens maker formula: 1/f = (n-1)(1/R₁ - 1/R₂). First, find the refractive index (n) and radii of curvature (R₁, R₂). Apply the correct sign convention, calculate 1/f, then take the reciprocal to get the focal length f.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I find the focal length of a convex lens?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For a biconvex lens, use positive R₁ and negative R₂ in the lens maker formula. Example: with R₁ = +10 cm, R₂ = -10 cm, and n = 1.5, the focal length is f = 10 cm (positive, converging).',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the formula for focal length?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The focal length formula (lens maker equation) is 1/f = (n-1)(1/R₁ - 1/R₂), where f is focal length, n is refractive index, R₁ is the first surface radius, and R₂ is the second surface radius. This formula works for any thin lens.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do you calculate focal length from radius of curvature?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Use the lens maker formula with both radii: 1/f = (n-1)(1/R₁ - 1/R₂). For a symmetric biconvex lens where |R₁| = |R₂| = R, this simplifies to f = R/(2(n-1)). For a plano-convex lens (one flat side), f = R/(n-1).',
          },
        },
      ],
    },
  ],
};

export default function HowToCalculateFocalLengthPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />
      <HowToContent />
    </>
  );
}
