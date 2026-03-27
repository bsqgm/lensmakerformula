import type { Metadata } from 'next';
import LensCombinationContent from './LensCombinationContent';
import Navigation from '../components/Navigation';

export const metadata: Metadata = {
  title: 'Lens Combination Calculator - Combined Focal Length of Two Lenses',
  description: 'Use this lens combination calculator to calculate the combined focal length of two lenses in contact or separated. Essential for compound optical systems like telescopes and microscopes.',
  keywords: 'lens combination calculator, combined focal length, compound lens, multiple lenses, optical system design, lens separation, telescope design',
  openGraph: {
    title: 'Lens Combination Calculator - Combined Focal Length',
    description: 'Calculate combined focal length of two lenses for compound optical system design.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lens Combination Calculator',
    description: 'Calculate combined focal length of two lenses',
  },
  alternates: {
    canonical: 'https://lensmakerformula.vercel.app/lens-combination',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Lens Combination Calculator',
  description: 'Calculate the combined focal length of multiple lenses in contact or with separation.',
  applicationCategory: 'EducationalApplication',
  operatingSystem: 'Any',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  featureList: [
    'Two-lens combination calculation',
    'Lenses in contact',
    'Separated lenses with distance',
    'Real-time results',
  ],
};

export default function LensCombinationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />
      <LensCombinationContent />
    </>
  );
}
