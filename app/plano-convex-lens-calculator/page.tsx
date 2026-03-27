import type { Metadata } from 'next';
import Navigation from '../components/Navigation';
import PlanoConvexLensCalculatorContent from './PlanoConvexLensCalculatorContent';

export const metadata: Metadata = {
  title: 'Plano-Convex Lens Calculator - Calculate Focal Length of a Plano Convex Lens',
  description: 'Use this plano-convex lens calculator to calculate focal length from refractive index and one curved surface radius. Learn sign convention, orientation, and the simplified formula.',
  keywords: 'plano convex lens calculator, plano-convex lens calculator, plano convex focal length, plano convex lens formula, calculate focal length of plano convex lens',
  openGraph: {
    title: 'Plano-Convex Lens Calculator',
    description: 'Calculate focal length for a plano-convex lens and review the correct sign convention.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Plano-Convex Lens Calculator',
    description: 'Find focal length for plano-convex lenses from one radius and refractive index.',
  },
  alternates: {
    canonical: 'https://lensmakerformula.vercel.app/plano-convex-lens-calculator',
  },
};

export default function PlanoConvexLensCalculatorPage() {
  return (
    <>
      <Navigation />
      <PlanoConvexLensCalculatorContent />
    </>
  );
}
