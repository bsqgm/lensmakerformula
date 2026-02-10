import type { Metadata } from 'next';
import Navigation from '../components/Navigation';
import RadiusR1Content from './RadiusR1Content';

export const metadata: Metadata = {
  title: 'Radius of Curvature Calculator (R₁) - First Surface Calculator',
  description: 'Free radius of curvature calculator to compute the first surface radius R₁. Use our radius of curvature calculator for lens design. Calculate R₁ from focal length, n, and R₂.',
  keywords: 'radius of curvature calculator, calculate R1, first surface radius calculator, lens curvature calculator, lens design calculator',
  openGraph: {
    title: 'Radius of Curvature Calculator (R₁) - Free Online Tool',
    description: 'Calculate first surface radius of curvature with our free radius of curvature calculator',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Radius of Curvature Calculator (R₁)',
    description: 'Free online radius of curvature calculator for lens design',
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
