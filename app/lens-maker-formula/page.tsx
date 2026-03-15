import type { Metadata } from 'next';
import Navigation from '../components/Navigation';
import LensMakerFormulaHubContent from './LensMakerFormulaHubContent';

export const metadata: Metadata = {
  title: 'Lens Maker Formula — Definition, Equation, Derivation & Free Calculators',
  description: 'The lens maker formula (lens makers formula): 1/f = (n-1)(1/R₁−1/R₂). Definition, sign convention, derivation, and free calculators for focal length, refractive index, and thick lenses.',
  keywords: 'lens maker formula, lens makers formula, lens maker\'s formula, lensmaker formula, lens maker equation, thin lens formula, focal length formula',
  openGraph: {
    title: 'Lens Maker Formula — Equation, Derivation & Calculators',
    description: 'Definition of the lens maker formula with derivation and free online calculators.',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lens Maker Formula — Guide & Calculators',
    description: 'Lens maker formula definition, equation, derivation, and free calculators',
  },
  alternates: {
    canonical: 'https://lensmakerformula.vercel.app/lens-maker-formula',
  },
};

export default function LensMakerFormulaHubPage() {
  return (
    <>
      <Navigation />
      <LensMakerFormulaHubContent />
    </>
  );
}
