import type { Metadata } from 'next';
import Navigation from '../components/Navigation';
import FNumberContent from './FNumberContent';

export const metadata: Metadata = {
  title: 'F-Number Calculator (f-stop) — Aperture from Focal Length & Diameter',
  description: 'Free f-number calculator: compute f-stop from focal length and aperture diameter. Formula N = f/D. F number calculator for photography and optics. Instant results.',
  keywords: 'f-number calculator, f number calculator, f-stop calculator, aperture calculator, focal length f-stop, lens f-number, optics calculator',
  openGraph: {
    title: 'F-Number Calculator — F-Stop from Focal Length & Aperture',
    description: 'Calculate f-number (f-stop) from focal length and aperture diameter. Free online f number calculator.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'F-Number Calculator (f-stop)',
    description: 'Free f-number calculator: focal length and aperture to f-stop.',
  },
  alternates: {
    canonical: 'https://lensmakerformula.vercel.app/f-number-calculator',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebApplication',
      name: 'F-Number Calculator',
      description: 'Calculate f-number (f-stop) from focal length and aperture diameter. N = f/D.',
      applicationCategory: 'EducationalApplication',
      operatingSystem: 'Any',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      featureList: ['F-number from focal length and diameter', 'Aperture diameter from f-number', 'F-stop formula explanation'],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the f-number formula?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The f-number (N or f-stop) is focal length divided by aperture diameter: N = f/D. For example, a 50 mm lens with 25 mm aperture has f-number 50/25 = 2 (f/2).',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I calculate f-number from focal length?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Divide the focal length by the aperture diameter (both in the same units). N = f/D. Use our f-number calculator to compute it instantly.',
          },
        },
      ],
    },
  ],
};

export default function FNumberCalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />
      <FNumberContent />
    </>
  );
}
