import type { Metadata } from 'next';
import GlossaryContent from './GlossaryContent';
import Navigation from '../components/Navigation';

export const metadata: Metadata = {
  title: 'Optics Glossary - Lens and Optical Terms Defined',
  description: 'Comprehensive glossary of optics terminology. Clear definitions of lens maker formula terms, optical concepts, and physics vocabulary for students and professionals.',
  keywords: 'optics glossary, lens terms, focal length definition, refractive index meaning, optical terminology, physics vocabulary, lens definitions',
  openGraph: {
    title: 'Optics Glossary - Lens and Optical Terms Defined',
    description: 'Clear definitions of lens and optical terminology for students and professionals.',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Optics Glossary',
    description: 'Comprehensive definitions of lens and optical terms',
  },
  alternates: {
    canonical: 'https://lensmakerformula.com/glossary',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTermSet',
  name: 'Optics Glossary',
  description: 'Comprehensive glossary of optics and lens terminology',
  hasDefinedTerm: [
    {
      '@type': 'DefinedTerm',
      name: 'Focal Length',
      description: 'The distance from the lens to the point where parallel light rays converge or appear to diverge.',
    },
    {
      '@type': 'DefinedTerm',
      name: 'Refractive Index',
      description: 'A measure of how much light slows down when passing through a material.',
    },
    {
      '@type': 'DefinedTerm',
      name: 'Radius of Curvature',
      description: 'The radius of the sphere from which a lens surface is a section.',
    },
  ],
};

export default function GlossaryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />
      <GlossaryContent />
    </>
  );
}

