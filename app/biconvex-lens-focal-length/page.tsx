import type { Metadata } from 'next';
import Navigation from '../components/Navigation';
import BiconvexLensFocalLengthContent from './BiconvexLensFocalLengthContent';

export const metadata: Metadata = {
  title: 'Biconvex Lens Focal Length - Calculate Symmetric Convex Lens Focal Length',
  description: 'Calculate biconvex lens focal length from refractive index and the two curved radii. Review the sign convention, symmetric shortcut, and worked examples.',
  keywords: 'biconvex lens focal length, biconvex lens calculator, biconvex lens formula, focal length of biconvex lens, convex lens focal length',
  openGraph: {
    title: 'Biconvex Lens Focal Length',
    description: 'Calculate focal length for a biconvex lens and review the symmetric shortcut.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Biconvex Lens Focal Length',
    description: 'Find focal length for a lens with two convex surfaces.',
  },
  alternates: {
    canonical: 'https://lensmakerformula.vercel.app/biconvex-lens-focal-length',
  },
};

export default function BiconvexLensFocalLengthPage() {
  return (
    <>
      <Navigation />
      <BiconvexLensFocalLengthContent />
    </>
  );
}
