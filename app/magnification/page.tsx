import type { Metadata } from 'next';
import MagnificationContent from './MagnificationContent';
import Navigation from '../components/Navigation';

export const metadata: Metadata = {
  title: 'Magnification Calculator - Lens Magnification & Image Formation',
  description: 'Calculate linear magnification, image distance, and image characteristics. Determine if images are real/virtual, inverted/upright, and magnified/reduced.',
  keywords: 'magnification calculator, lens magnification, image formation, object distance, image distance, thin lens equation, optical magnification',
  openGraph: {
    title: 'Magnification Calculator - Lens Magnification',
    description: 'Calculate lens magnification and image characteristics using the thin lens equation.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Magnification Calculator',
    description: 'Calculate lens magnification and image formation',
  },
  alternates: {
    canonical: 'https://lensmakerformula.vercel.app/magnification',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Magnification Calculator',
  description: 'Calculate linear magnification and image characteristics for thin lenses.',
  applicationCategory: 'EducationalApplication',
  operatingSystem: 'Any',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  featureList: [
    'Linear magnification calculation',
    'Image distance calculation',
    'Image type determination (real/virtual)',
    'Image orientation (upright/inverted)',
  ],
};

export default function MagnificationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />
      <MagnificationContent />
    </>
  );
}
