import type { Metadata } from 'next';
import UniversalCalculator from '../components/UniversalCalculator';
import Navigation from '../components/Navigation';

export const metadata: Metadata = {
  title: 'Calculate Focal Length - Lens Maker Formula Calculator',
  description: 'Calculate lens focal length using the lens maker formula. Enter refractive index (n), first surface radius (R₁), and second surface radius (R₂) to find the focal length.',
  keywords: 'focal length calculator, lens focal length, calculate f, lens maker formula, optics calculator',
  openGraph: {
    title: 'Calculate Focal Length - Lens Maker Formula',
    description: 'Calculate lens focal length from refractive index and surface radii',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Calculate Focal Length - Lens Maker Formula',
    description: 'Calculate lens focal length from refractive index and surface radii',
  },
};

export default function FocalLengthPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen relative z-10 pt-20 pb-16 px-4">
        <UniversalCalculator
          mode="f"
          title="Calculate Focal Length"
          description="Enter refractive index (n), R₁, and R₂ to calculate the focal length (f)"
        />
      </main>
    </>
  );
}

