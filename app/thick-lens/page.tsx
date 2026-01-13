import type { Metadata } from 'next';
import ThickLensContent from './ThickLensContent';
import Navigation from '../components/Navigation';

export const metadata: Metadata = {
  title: 'Thick Lens Calculator - Focal Length with Thickness Correction',
  description: 'Calculate focal length for thick lenses using the modified lens maker formula. Accounts for lens thickness in optical calculations for accurate results.',
  keywords: 'thick lens calculator, thick lens formula, lens thickness correction, optical calculator, lens design, thick lens focal length',
  openGraph: {
    title: 'Thick Lens Calculator - Focal Length with Thickness',
    description: 'Calculate focal length for thick lenses with thickness correction using the modified lens maker formula.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Thick Lens Calculator',
    description: 'Calculate focal length for thick lenses with thickness correction',
  },
  alternates: {
    canonical: 'https://lensmakerformula.vercel.app/thick-lens',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Thick Lens Calculator',
  description: 'Calculate focal length for thick lenses using the modified lens maker formula with thickness correction.',
  applicationCategory: 'EducationalApplication',
  operatingSystem: 'Any',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  featureList: [
    'Thick lens focal length calculation',
    'Lens thickness correction',
    'Real-time results',
    'Step-by-step formula breakdown',
  ],
};

export default function ThickLensPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />
      <ThickLensContent />
    </>
  );
}
