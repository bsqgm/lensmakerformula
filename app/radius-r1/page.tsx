import type { Metadata } from 'next';
import UniversalCalculator from '../components/UniversalCalculator';
import Navigation from '../components/Navigation';

export const metadata: Metadata = {
  title: 'Calculate First Surface Radius (R₁) - Lens Maker Formula Calculator',
  description: 'Calculate the first surface radius of curvature using the lens maker formula. Enter focal length (f), refractive index (n), and second surface radius (R₂) to find R₁.',
  keywords: 'radius of curvature calculator, calculate R1, first surface radius, lens maker formula, optics calculator',
  openGraph: {
    title: 'Calculate First Surface Radius (R₁) - Lens Maker Formula',
    description: 'Calculate the first surface radius of curvature from focal length, refractive index, and R₂',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Calculate First Surface Radius (R₁) - Lens Maker Formula',
    description: 'Calculate the first surface radius of curvature from focal length, refractive index, and R₂',
  },
};

export default function RadiusR1Page() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen relative z-10 pt-20 pb-16 px-4">
        <UniversalCalculator
          mode="R1"
          title="Calculate First Surface Radius (R₁)"
          description="Enter focal length (f), refractive index (n), and R₂ to calculate the first surface radius (R₁)"
        />
      </main>
    </>
  );
}

