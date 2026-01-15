import type { Metadata } from 'next';
import Navigation from '../components/Navigation';
import FocalLengthContent from './FocalLengthContent';

export const metadata: Metadata = {
  title: 'Focal Length Calculator - Free Online Lens Calculator',
  description: 'Free focal length calculator to compute lens focal length instantly. Use our focal length calculator with the lens maker equation. Enter refractive index and radii to calculate focal length.',
  keywords: 'focal length calculator, calculate focal length, lens focal length calculator, focal length calculation, optics calculator, lens calculator',
  openGraph: {
    title: 'Focal Length Calculator - Free Online Tool',
    description: 'Calculate lens focal length instantly with our free focal length calculator',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Focal Length Calculator',
    description: 'Free online focal length calculator for lens calculations',
  },
};

export default function FocalLengthPage() {
  return (
    <>
      <Navigation />
      <FocalLengthContent />
    </>
  );
}
