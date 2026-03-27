import type { Metadata } from 'next';
import Navigation from '../components/Navigation';
import RefractiveIndexContent from './RefractiveIndexContent';

export const metadata: Metadata = {
  title: 'Refractive Index Calculator - Index of Refraction Calculator for Lenses',
  description: 'Free refractive index calculator to determine lens material properties. Also covers index of refraction calculations from focal length and radii so you can identify optical materials quickly.',
  keywords: 'refractive index calculator, index of refraction calculator, calculate refractive index, lens refractive index calculator, n calculator, optics calculator, material identification',
  openGraph: {
    title: 'Refractive Index Calculator - Free Online Tool',
    description: 'Calculate refractive index or index of refraction instantly from focal length and radii.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Refractive Index Calculator',
    description: 'Free online refractive index and index of refraction calculator for lens calculations',
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
