import type { Metadata } from 'next';
import Navigation from '../components/Navigation';
import ThinLensVsThickLensContent from './ThinLensVsThickLensContent';

export const metadata: Metadata = {
  title: 'Thin Lens vs Thick Lens - Formula, Differences, and When to Use Each',
  description: 'Compare thin lens vs thick lens formulas, learn when thickness correction matters, and choose the right calculator for accurate focal length results.',
  keywords: 'thin lens vs thick lens, thin lens formula, thick lens formula, lens thickness correction, when to use thick lens formula',
  openGraph: {
    title: 'Thin Lens vs Thick Lens',
    description: 'Learn when the thin lens approximation is enough and when thickness correction is required.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Thin Lens vs Thick Lens',
    description: 'Compare the thin lens and thick lens formulas side by side.',
  },
  alternates: {
    canonical: 'https://lensmakerformula.vercel.app/thin-lens-vs-thick-lens',
  },
};

export default function ThinLensVsThickLensPage() {
  return (
    <>
      <Navigation />
      <ThinLensVsThickLensContent />
    </>
  );
}
