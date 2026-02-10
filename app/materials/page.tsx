import type { Metadata } from 'next';
import MaterialsContent from './MaterialsContent';
import Navigation from '../components/Navigation';

export const metadata: Metadata = {
  title: 'Optical Materials Database - Refractive Index Reference',
  description: 'Comprehensive database of refractive indices for optical materials including glass, plastics, crystals, and liquids. Essential reference for lens design and optical engineering.',
  keywords: 'refractive index database, optical materials, glass refractive index, lens materials, crown glass, flint glass, optical properties',
  openGraph: {
    title: 'Optical Materials Database - Refractive Index Reference',
    description: 'Comprehensive database of refractive indices for optical materials.',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Optical Materials Database',
    description: 'Refractive index reference for optical materials',
  },
  alternates: {
    canonical: 'https://lensmakerformula.vercel.app/materials',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Dataset',
  name: 'Optical Materials Refractive Index Database',
  description: 'A comprehensive database of refractive indices for common optical materials',
  keywords: ['refractive index', 'optical materials', 'glass', 'optics'],
  creator: {
    '@type': 'Organization',
    name: 'Lens Maker Formula Calculator',
  },
  variableMeasured: [
    {
      '@type': 'PropertyValue',
      name: 'Refractive Index',
      description: 'The ratio of light speed in vacuum to light speed in the material',
    },
  ],
};

export default function MaterialsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />
      <MaterialsContent />
    </>
  );
}

