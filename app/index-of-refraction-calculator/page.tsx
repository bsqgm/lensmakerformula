import type { Metadata } from 'next';
import Navigation from '../components/Navigation';
import IndexOfRefractionCalculatorContent from './IndexOfRefractionCalculatorContent';

export const metadata: Metadata = {
  title: 'Index of Refraction Calculator - Solve n from Lens Parameters',
  description: 'Use this index of refraction calculator to solve n from focal length and lens surface radii. Understand index of refraction vs refractive index and verify optical materials quickly.',
  keywords: 'index of refraction calculator, calculate index of refraction, refractive index calculator, optical index calculator, index of refraction lens',
  openGraph: {
    title: 'Index of Refraction Calculator',
    description: 'Calculate index of refraction from focal length and lens radii.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Index of Refraction Calculator',
    description: 'Solve n from lens geometry and focal length.',
  },
  alternates: {
    canonical: 'https://lensmakerformula.vercel.app/index-of-refraction-calculator',
  },
};

export default function IndexOfRefractionCalculatorPage() {
  return (
    <>
      <Navigation />
      <IndexOfRefractionCalculatorContent />
    </>
  );
}
