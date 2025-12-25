import type { Metadata } from 'next';
import UniversalCalculator from '../components/UniversalCalculator';
import Navigation from '../components/Navigation';

export const metadata: Metadata = {
  title: 'Calculate Second Surface Radius (R₂) - Lens Maker Formula Calculator',
  description: 'Calculate the second surface radius of curvature using the lens maker formula. Enter focal length (f), refractive index (n), and first surface radius (R₁) to find R₂.',
  keywords: 'radius of curvature calculator, calculate R2, second surface radius, lens maker formula, optics calculator',
  openGraph: {
    title: 'Calculate Second Surface Radius (R₂) - Lens Maker Formula',
    description: 'Calculate the second surface radius of curvature from focal length, refractive index, and R₁',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Calculate Second Surface Radius (R₂) - Lens Maker Formula',
    description: 'Calculate the second surface radius of curvature from focal length, refractive index, and R₁',
  },
};

export default function RadiusR2Page() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen relative z-10 pt-20 pb-16 px-4">
        <UniversalCalculator
          mode="R2"
          title="Calculate Second Surface Radius (R₂)"
          description="Enter focal length (f), refractive index (n), and R₁ to calculate the second surface radius (R₂)"
        />
      </main>
    </>
  );
}

