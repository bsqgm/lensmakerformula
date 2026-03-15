import type { Metadata } from 'next';
import Navigation from '../components/Navigation';
import EffectiveFocalLengthContent from './EffectiveFocalLengthContent';

export const metadata: Metadata = {
  title: 'Effective Focal Length Calculator — 35mm Equivalent & Crop Factor',
  description: 'Free effective focal length calculator: convert lens focal length to 35mm equivalent using crop factor. EFL = focal length × crop factor. For APS-C, M4/3, and other sensors.',
  keywords: 'effective focal length calculator, lens focal length calculator, 35mm equivalent calculator, crop factor calculator, EFL calculator, lens equivalent focal length',
  openGraph: {
    title: 'Effective Focal Length Calculator — 35mm Equivalent',
    description: 'Calculate effective focal length (35mm equivalent) from crop factor. Free EFL calculator.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Effective Focal Length Calculator',
    description: 'Convert to 35mm equivalent with crop factor. Free calculator.',
  },
  alternates: {
    canonical: 'https://lensmakerformula.vercel.app/effective-focal-length-calculator',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebApplication',
      name: 'Effective Focal Length Calculator',
      description: 'Calculate effective focal length (35mm equivalent) from lens focal length and crop factor.',
      applicationCategory: 'EducationalApplication',
      operatingSystem: 'Any',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      featureList: ['35mm equivalent from crop factor', 'Common sensor presets (APS-C, M4/3)', 'EFL formula explanation'],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is effective focal length?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Effective focal length (EFL) is the 35mm equivalent focal length. On a crop sensor, multiply the lens focal length by the crop factor. Example: 50 mm on APS-C (1.5x) has effective focal length 75 mm.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I calculate effective focal length?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Effective focal length = lens focal length × crop factor. Use our effective focal length calculator to get the 35mm equivalent instantly.',
          },
        },
      ],
    },
  ],
};

export default function EffectiveFocalLengthCalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />
      <EffectiveFocalLengthContent />
    </>
  );
}
