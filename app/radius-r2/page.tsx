import type { Metadata } from 'next';
import Navigation from '../components/Navigation';
import RadiusR2Content from './RadiusR2Content';

export const metadata: Metadata = {
  title: 'Radius of Curvature Calculator (R₂) - Second Surface Calculator',
  description: 'Free radius of curvature calculator to compute the second surface radius R₂. Use our radius of curvature calculator for lens design. Calculate R₂ from focal length, n, and R₁.',
  keywords: 'radius of curvature calculator, calculate R2, second surface radius calculator, lens curvature calculator, lens design calculator',
  openGraph: {
    title: 'Radius of Curvature Calculator (R₂) - Free Online Tool',
    description: 'Calculate second surface radius of curvature with our free radius of curvature calculator',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Radius of Curvature Calculator (R₂)',
    description: 'Free online radius of curvature calculator for lens design',
  },
};

export default function RadiusR2Page() {
  return (
    <>
      <Navigation />
      <RadiusR2Content />
    </>
  );
}
