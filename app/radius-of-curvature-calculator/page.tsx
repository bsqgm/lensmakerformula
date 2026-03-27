import type { Metadata } from 'next';
import Navigation from '../components/Navigation';
import RadiusOfCurvatureCalculatorContent from './RadiusOfCurvatureCalculatorContent';

export const metadata: Metadata = {
  title: 'Radius of Curvature Calculator - Solve Lens Surface Radius Fast',
  description: 'Use this radius of curvature calculator to solve lens surface radius from focal length, refractive index, and the opposite surface. Learn sign convention, R1 vs R2, and use the correct formula.',
  keywords: 'radius of curvature calculator, lens radius of curvature calculator, calculate radius of curvature, radius of curve calculator, optics radius calculator',
  openGraph: {
    title: 'Radius of Curvature Calculator',
    description: 'Calculate lens surface radius of curvature with the lens maker formula.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Radius of Curvature Calculator',
    description: 'Solve lens surface radius from focal length and refractive index.',
  },
  alternates: {
    canonical: 'https://lensmakerformula.vercel.app/radius-of-curvature-calculator',
  },
};

export default function RadiusOfCurvatureCalculatorPage() {
  return (
    <>
      <Navigation />
      <RadiusOfCurvatureCalculatorContent />
    </>
  );
}
