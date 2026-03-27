import type { Metadata } from 'next';
import Navigation from '../components/Navigation';
import RadiusOfCurvatureFormulaContent from './RadiusOfCurvatureFormulaContent';

export const metadata: Metadata = {
  title: 'Radius of Curvature Formula - R1 and R2 from the Lens Maker Equation',
  description: 'Learn the radius of curvature formula for lenses. Rearrange the lens maker equation to solve R1 or R2, understand sign convention, and verify results with the calculator.',
  keywords: 'radius of curvature formula, lens radius formula, R1 formula, R2 formula, radius of curve formula, lens maker equation radius',
  openGraph: {
    title: 'Radius of Curvature Formula',
    description: 'Solve R1 or R2 from the lens maker equation with the correct sign convention.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Radius of Curvature Formula',
    description: 'Rearrange the lens maker equation to solve the missing radius.',
  },
  alternates: {
    canonical: 'https://lensmakerformula.vercel.app/radius-of-curvature-formula',
  },
};

export default function RadiusOfCurvatureFormulaPage() {
  return (
    <>
      <Navigation />
      <RadiusOfCurvatureFormulaContent />
    </>
  );
}
