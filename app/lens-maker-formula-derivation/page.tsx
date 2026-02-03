import type { Metadata } from 'next';
import Navigation from '../components/Navigation';
import DerivationContent from './DerivationContent';

export const metadata: Metadata = {
  title: 'Lens Maker Formula Derivation - Step-by-Step Proof from Snell\'s Law',
  description: 'Complete derivation of the lens maker formula from Snell\'s Law. Step-by-step mathematical proof with diagrams explaining how 1/f = (n-1)(1/R₁ - 1/R₂) is derived.',
  keywords: 'lens maker formula derivation, lensmaker equation proof, focal length derivation, lens formula proof, optics derivation, snell law lens',
  openGraph: {
    title: 'Lens Maker Formula Derivation - Complete Mathematical Proof',
    description: 'Understand the physics behind the lens maker formula with our complete step-by-step derivation from first principles.',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lens Maker Formula Derivation',
    description: 'Complete mathematical derivation of the lens maker formula',
  },
  alternates: {
    canonical: 'https://lensmakerformula.vercel.app/lens-maker-formula-derivation',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Lens Maker Formula Derivation - Complete Proof',
      description: 'Step-by-step derivation of the lens maker formula from Snell\'s Law and the refraction equation.',
      author: { '@type': 'Organization', name: 'Lens Maker Formula Calculator' },
      publisher: { '@type': 'Organization', name: 'Lens Maker Formula Calculator' },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://lensmakerformula.vercel.app/lens-maker-formula-derivation',
      },
      articleSection: 'Physics Education',
      keywords: ['lens maker formula derivation', 'focal length proof', 'optics derivation', 'Snell\'s Law'],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How is the lens maker formula derived?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The lens maker formula is derived by applying the refraction equation at each lens surface. Light refracts at the first surface according to n₁/s + n₂/s\' = (n₂-n₁)/R₁, then at the second surface. For thin lenses where the surfaces are close together, combining these equations gives 1/f = (n-1)(1/R₁ - 1/R₂).',
          },
        },
        {
          '@type': 'Question',
          name: 'What assumptions are made in the lens maker formula derivation?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The derivation assumes: (1) Thin lens - thickness is negligible compared to radii, (2) Paraxial rays - light rays are close to and nearly parallel to the optical axis, (3) Spherical surfaces - both lens surfaces are portions of spheres, (4) Homogeneous material - constant refractive index throughout the lens.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the single surface refraction formula used in the derivation?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The single spherical surface refraction formula is n₁/s + n₂/s\' = (n₂-n₁)/R, where n₁ and n₂ are the refractive indices of the two media, s is the object distance, s\' is the image distance, and R is the radius of curvature of the surface.',
          },
        },
      ],
    },
  ],
};

export default function LensMakerFormulaDerivationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />
      <DerivationContent />
    </>
  );
}
