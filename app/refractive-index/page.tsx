import type { Metadata } from 'next';
import Navigation from '../components/Navigation';
import RefractiveIndexContent from './RefractiveIndexContent';

export const metadata: Metadata = {
  title: 'Refractive Index Calculator - Calculate n from Lens Parameters',
  description: 'Free refractive index calculator to determine lens material properties. Use our refractive index calculator with focal length and radii to calculate n. Identify optical materials instantly.',
  keywords: 'refractive index calculator, calculate refractive index, lens refractive index calculator, n calculator, optics calculator, material identification',
  openGraph: {
    title: 'Refractive Index Calculator - Free Online Tool',
    description: 'Calculate lens refractive index instantly with our free refractive index calculator',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Refractive Index Calculator',
    description: 'Free online refractive index calculator for lens calculations',
  },
  alternates: {
    canonical: 'https://lensmakerformula.vercel.app/refractive-index',
  },
};

export default function RefractiveIndexPage() {
  return (
    <>
      <Navigation />
      <RefractiveIndexContent />
    </>
  );
}
