import type { Metadata } from 'next';
import UniversalCalculator from '../components/UniversalCalculator';
import Navigation from '../components/Navigation';

export const metadata: Metadata = {
  title: 'Calculate Refractive Index - Lens Maker Formula Calculator',
  description: 'Calculate lens refractive index using the lens maker formula. Enter focal length (f), first surface radius (R₁), and second surface radius (R₂) to find the refractive index.',
  keywords: 'refractive index calculator, calculate n, lens refractive index, lens maker formula, optics calculator',
  openGraph: {
    title: 'Calculate Refractive Index - Lens Maker Formula',
    description: 'Calculate lens refractive index from focal length and surface radii',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Calculate Refractive Index - Lens Maker Formula',
    description: 'Calculate lens refractive index from focal length and surface radii',
  },
};

export default function RefractiveIndexPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen relative z-10 pt-20 pb-16 px-4">
        <UniversalCalculator
          mode="n"
          title="Calculate Refractive Index"
          description="Enter focal length (f), R₁, and R₂ to calculate the refractive index (n)"
        />
      </main>
    </>
  );
}

