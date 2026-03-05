import type { Metadata } from 'next';
import Navigation from '../components/Navigation';
import BallLensContent from './BallLensContent';

export const metadata: Metadata = {
  title: 'Ball Lens Calculator - Calculate Focal Length of Ball Lenses',
  description: 'Free ball lens focal length calculator using the formula f = nR/2(n-1). Calculate the effective focal length, back focal length, and numerical aperture of ball lenses for fiber coupling and collimation.',
  keywords: 'ball lens calculator, ball lens focal length, ball lens formula, ball lens focal length formula, sphere lens calculator, ball lens coupling, ball lens collimation, ball lens effective focal length',
  openGraph: {
    title: 'Ball Lens Calculator - Free Online Tool',
    description: 'Calculate ball lens focal length, back focal length, and NA with our free online calculator.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ball Lens Calculator',
    description: 'Free ball lens focal length calculator for fiber optics',
  },
  alternates: {
    canonical: 'https://lensmakerformula.vercel.app/ball-lens-calculator',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebApplication',
      name: 'Ball Lens Focal Length Calculator',
      description: 'Free online calculator for ball lens focal length using f = nR/2(n-1)',
      applicationCategory: 'EducationalApplication',
      operatingSystem: 'Any',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    },
    {
      '@type': 'Article',
      headline: 'Ball Lens Calculator - Calculate Focal Length of Ball Lenses',
      description: 'Complete guide to ball lens calculations with free online tool.',
      author: { '@type': 'Organization', name: 'Lens Maker Formula Calculator' },
      publisher: { '@type': 'Organization', name: 'Lens Maker Formula Calculator' },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://lensmakerformula.vercel.app/ball-lens-calculator',
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the focal length formula for a ball lens?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The effective focal length of a ball lens is f = nR/2(n-1), where n is the refractive index and R is the radius of the ball. The back focal length (distance from the rear surface) is BFL = f - R = R(2-n)/2(n-1).',
          },
        },
        {
          '@type': 'Question',
          name: 'How is the ball lens formula derived from the lens maker equation?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A ball lens is a thick lens with R₁ = R and R₂ = -R (sphere). Applying the thick lens maker equation with thickness d = 2R: 1/f = (n-1)[2/R + 2R(n-1)/(nR²)] = 2(n-1)/(nR), giving f = nR/2(n-1).',
          },
        },
        {
          '@type': 'Question',
          name: 'What are ball lenses used for?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ball lenses are used for fiber-to-fiber coupling, laser collimation, endoscopy, barcode scanning, and sensor applications. Their symmetric shape makes alignment easy and they work well for short focal length applications.',
          },
        },
      ],
    },
  ],
};

export default function BallLensCalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />
      <BallLensContent />
    </>
  );
}
