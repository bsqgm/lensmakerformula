import type { Metadata } from 'next';
import Navigation from '../components/Navigation';
import FocalLengthFormulaContent from './FocalLengthFormulaContent';

export const metadata: Metadata = {
  title: 'Focal Length Formula - Complete Guide & Free Calculator',
  description: 'Master the focal length formula with our interactive guide. Learn thin lens equation, lens maker formula, and calculate focal length instantly with our free tool.',
  keywords: 'focal length formula, focal length equation, lens focal length formula, thin lens formula, how to calculate focal length, focal length calculator, optics formula',
  openGraph: {
    title: 'Focal Length Formula - Interactive Guide & Calculator',
    description: 'Learn and calculate focal length with our comprehensive guide and free online calculator',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Focal Length Formula - Complete Guide',
    description: 'Master the focal length formula with interactive tools and examples',
  },
};

export default function FocalLengthFormulaPage() {
  return (
    <>
      <Navigation />
      <FocalLengthFormulaContent />
    </>
  );
}
