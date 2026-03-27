import type { Metadata } from 'next';
import Navigation from '../components/Navigation';
import RadiusR1Content from './RadiusR1Content';

export const metadata: Metadata = {
  title: 'Radius R1 Calculator - First Lens Surface Radius from Focal Length',
  description: 'Free Radius R1 calculator for the first lens surface. Calculate R₁ from focal length, refractive index, and R₂, or use the broad radius of curvature calculator if you need to choose between surfaces.',
  keywords: 'radius R1 calculator, calculate R1, first surface radius calculator, first lens surface radius, lens curvature calculator, lens design calculator',
  openGraph: {
    title: 'Radius R1 Calculator - Free Online Tool',
    description: 'Calculate the first lens surface radius from focal length, n, and R₂.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Radius R1 Calculator',
    description: 'Free online calculator for the first lens surface radius',
  },
  alternates: {
    canonical: 'https://lensmakerformula.vercel.app/radius-r1',
  },
};

export default function RadiusR1Page() {
  return (
    <>
      <Navigation />
      <RadiusR1Content />
    </>
  );
}
