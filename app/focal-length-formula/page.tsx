import type { Metadata } from 'next';
import Navigation from '../components/Navigation';
import FocalLengthFormulaContent from './FocalLengthFormulaContent';

export const metadata: Metadata = {
  title: 'Focal Length Formula - Complete Guide & Free Calculator | 2024',
  description: 'Master the focal length formula with our comprehensive guide. Learn thin lens equation 1/f = (n-1)(1/R₁ - 1/R₂), see worked examples, watch video tutorials, and calculate focal length instantly with our free online calculator.',
  keywords: 'focal length formula, focal length equation, lens focal length formula, thin lens formula, how to calculate focal length, focal length calculator, optics formula, lens maker formula, lensmaker equation, convex lens formula, concave lens formula',
  openGraph: {
    title: 'Focal Length Formula - Interactive Guide & Calculator',
    description: 'Learn and calculate focal length with our comprehensive guide featuring video tutorials, worked examples, and free online calculator.',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Focal Length Formula - Complete Guide',
    description: 'Master the focal length formula with interactive tools, video tutorials, and examples',
  },
  alternates: {
    canonical: 'https://lensmakerformula.vercel.app/focal-length-formula',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Focal Length Formula - Complete Guide & Calculator',
      description: 'Comprehensive guide to the focal length formula including history, derivation, examples, and applications. Learn how to calculate focal length for convex and concave lenses.',
      author: {
        '@type': 'Organization',
        name: 'Lens Maker Formula Calculator',
      },
      datePublished: '2024-01-01',
      dateModified: new Date().toISOString().split('T')[0],
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://lensmakerformula.vercel.app/focal-length-formula',
      },
    },
    {
      '@type': 'WebApplication',
      name: 'Focal Length Formula Calculator',
      description: 'Free online calculator to compute focal length using the lens maker formula 1/f = (n-1)(1/R₁ - 1/R₂)',
      applicationCategory: 'EducationalApplication',
      operatingSystem: 'Any',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
      featureList: [
        'Calculate focal length from radii and refractive index',
        'Interactive lens visualization',
        'Support for convex and concave lenses',
        'Real-time calculation updates',
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to Use the Focal Length Formula',
      description: 'Step-by-step guide to calculating focal length using the lens maker formula',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Identify the formula type',
          text: 'Choose the appropriate focal length formula based on your known parameters.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Apply sign conventions',
          text: 'For lenses: convex surfaces facing left are positive (R > 0), concave are negative.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Use consistent units',
          text: 'Keep all measurements in meters (or the same unit).',
        },
        {
          '@type': 'HowToStep',
          position: 4,
          name: 'Substitute values',
          text: 'Insert your known values into the focal length formula and solve.',
        },
        {
          '@type': 'HowToStep',
          position: 5,
          name: 'Interpret the result',
          text: 'Positive focal length indicates converging; negative indicates diverging.',
        },
      ],
    },
    {
      '@type': 'VideoObject',
      name: 'Thin Lens Equation - Converging and Diverging Lens Ray Diagram & Sign Conventions',
      description: 'Comprehensive tutorial covering the thin lens equation for both converging and diverging lenses, with ray diagrams and sign conventions.',
      thumbnailUrl: 'https://img.youtube.com/vi/VKMswYSiyko/maxresdefault.jpg',
      uploadDate: '2016-11-01T00:00:00+00:00',
      contentUrl: 'https://www.youtube.com/watch?v=VKMswYSiyko',
      embedUrl: 'https://www.youtube.com/embed/VKMswYSiyko',
    },
    {
      '@type': 'VideoObject',
      name: "Physics - Optics: Lensmaker's Equation (1 of 5)",
      description: 'Step-by-step explanation of the lensmaker equation with a worked example showing how to find the focal length of a lens.',
      thumbnailUrl: 'https://img.youtube.com/vi/kGL1YnF_b64/maxresdefault.jpg',
      uploadDate: '2013-06-01T00:00:00+00:00',
      contentUrl: 'https://www.youtube.com/watch?v=kGL1YnF_b64',
      embedUrl: 'https://www.youtube.com/embed/kGL1YnF_b64',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the focal length formula?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The focal length formula is a mathematical equation that calculates the focal length of a lens or mirror. The most common focal length formula for lenses is 1/f = (n-1)(1/R₁ - 1/R₂), known as the lens maker\'s formula.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I use the focal length formula for a convex lens?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For a convex lens, identify the radii of curvature (R₁ positive for convex surface facing left, R₂ negative for convex surface facing right) and the refractive index n. Substitute into 1/f = (n-1)(1/R₁ - 1/R₂). The result will be positive, indicating a converging lens.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the focal length formula for a concave lens?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For a concave (diverging) lens, the formula is the same: 1/f = (n-1)(1/R₁ - 1/R₂). However, for a biconcave lens, R₁ < 0 and R₂ > 0, resulting in a negative focal length.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can focal length be negative?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, focal length can be negative. A negative focal length indicates a diverging optical element. Concave lenses and convex mirrors have negative focal lengths.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does refractive index affect focal length?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Higher refractive index (n) means stronger light bending, resulting in shorter focal length. As n increases, (n-1) increases, making 1/f larger and f smaller.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I convert focal length to diopters?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Diopters (D) are the reciprocal of focal length in meters: D = 1/f. For example, a lens with f = 0.5 m has power P = 2 diopters.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the relationship between focal length and magnification?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For a simple magnifier, M = 25cm/f, where 25cm is the near point of the eye. Longer focal length means lower magnification.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the thin lens approximation?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The thin lens approximation assumes the lens thickness is negligible compared to its radii and focal length. For thick lenses, an additional thickness correction term must be included.',
          },
        },
      ],
    },
  ],
};

export default function FocalLengthFormulaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />
      <FocalLengthFormulaContent />
    </>
  );
}
