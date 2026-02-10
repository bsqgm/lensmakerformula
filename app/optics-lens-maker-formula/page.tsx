import type { Metadata } from 'next';
import Navigation from '../components/Navigation';
import OpticsLensFormulaContent from './OpticsLensFormulaContent';

export const metadata: Metadata = {
  title: 'Optics Lens Maker Formula - Complete Guide & Free Calculator',
  description: 'Master the optics lens maker formula (1/f = (n-1)(1/R₁ - 1/R₂)) with our comprehensive guide. Learn optical lens design, understand sign conventions, and calculate lens focal length instantly with our free interactive calculator.',
  keywords: 'optics lens maker formula, lens maker formula optics, optical lens formula, optics lens equation, lens maker equation, thin lens formula optics, optical lens design formula, physics optics lens formula, lensmaker formula',
  openGraph: {
    title: 'Optics Lens Maker Formula - Interactive Guide & Calculator',
    description: 'Free optics lens maker formula calculator with step-by-step explanations. Essential for optical engineers, physics students, and lens designers.',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Optics Lens Maker Formula Calculator',
    description: 'Master the optics lens maker formula with interactive examples and free calculator',
  },
  alternates: {
    canonical: 'https://lensmakerformula.vercel.app/optics-lens-maker-formula',
  },
};

// JSON-LD Schema for Rich Snippets
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Optics Lens Maker Formula - Complete Guide & Calculator',
      description: 'Comprehensive guide to the optics lens maker formula with interactive calculator for optical lens design.',
      author: { '@type': 'Organization', name: 'Lens Maker Formula Calculator' },
      publisher: { '@type': 'Organization', name: 'Lens Maker Formula Calculator' },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://lensmakerformula.vercel.app/optics-lens-maker-formula',
      },
      articleSection: 'Optics Education',
      keywords: ['optics lens maker formula', 'optical lens design', 'focal length calculation', 'lens equation'],
    },
    {
      '@type': 'HowTo',
      name: 'How to Use the Optics Lens Maker Formula',
      description: 'Step-by-step guide to calculating lens focal length using the optics lens maker formula.',
      step: [
        { '@type': 'HowToStep', position: 1, name: 'Identify lens type', text: 'Determine if the lens is convex (converging), concave (diverging), or a combination like meniscus.' },
        { '@type': 'HowToStep', position: 2, name: 'Measure radii of curvature', text: 'Find R₁ (first surface radius) and R₂ (second surface radius) in meters.' },
        { '@type': 'HowToStep', position: 3, name: 'Apply sign convention', text: 'Convex surfaces facing the light source are positive, concave surfaces are negative.' },
        { '@type': 'HowToStep', position: 4, name: 'Find refractive index', text: 'Look up the refractive index (n) of the lens material. Common values: crown glass (1.52), flint glass (1.62).' },
        { '@type': 'HowToStep', position: 5, name: 'Calculate focal length', text: 'Apply the optics lens maker formula: 1/f = (n-1)(1/R₁ - 1/R₂), then take the reciprocal to find f.' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the optics lens maker formula?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The optics lens maker formula is 1/f = (n-1)(1/R₁ - 1/R₂), where f is the focal length, n is the refractive index of the lens material, and R₁ and R₂ are the radii of curvature of the two lens surfaces. This fundamental equation in optics relates a lens\'s focal length to its physical properties.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I calculate the focal length of a convex lens?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For a convex (converging) lens, use the lens maker formula with positive R₁ and negative R₂ for a biconvex lens. For example, a biconvex lens with R₁ = +10 cm, R₂ = -10 cm, and n = 1.5 gives: 1/f = (1.5-1)(1/10 - 1/(-10)) = 0.5 × 0.2 = 0.1, so f = 10 cm (positive, converging).',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I find the focal length of a lens using the formula?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'To find the focal length: (1) Identify the refractive index n of your lens material, (2) Measure or note the radii of curvature R₁ and R₂, (3) Apply the correct sign convention (convex surfaces are positive, concave negative), (4) Substitute into 1/f = (n-1)(1/R₁ - 1/R₂), and (5) Calculate 1/f then take the reciprocal to get f.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the difference between thin lens and thick lens formula in optics?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The thin lens formula (optics lens maker formula) assumes the lens thickness is negligible compared to the radii of curvature. For thick lenses where thickness matters, use the modified formula: 1/f = (n-1)[1/R₁ - 1/R₂ + (n-1)d/(nR₁R₂)], where d is the lens thickness.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the formula for focal length of a lens in terms of radii?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The focal length formula in terms of radii is 1/f = (n-1)(1/R₁ - 1/R₂), or equivalently f = 1/[(n-1)(1/R₁ - 1/R₂)]. This shows that focal length depends on both the lens material (through n) and its shape (through R₁ and R₂).',
          },
        },
        {
          '@type': 'Question',
          name: 'How does refractive index affect focal length?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A higher refractive index (n) increases the optical power of the lens, resulting in a shorter focal length. This is because light bends more strongly at interfaces with higher refractive index differences. For example, a lens made from flint glass (n ≈ 1.62) will have a shorter focal length than the same shaped lens made from crown glass (n ≈ 1.52).',
          },
        },
      ],
    },
  ],
};

export default function OpticsLensFormulaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />
      <OpticsLensFormulaContent />
    </>
  );
}
