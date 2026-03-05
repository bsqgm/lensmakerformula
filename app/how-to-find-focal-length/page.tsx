import type { Metadata } from 'next';
import Navigation from '../components/Navigation';
import HowToFindContent from './HowToFindContent';

export const metadata: Metadata = {
  title: 'How to Find Focal Length - 5 Methods to Determine Lens Focal Length',
  description: 'Learn how to find the focal length of a lens using 5 proven methods: lens maker formula, distant object method, autocollimation, Bessel method, and lens specifications. Complete guide with examples.',
  keywords: 'how to find focal length, how to find the focal length of a lens, how to find focal length of a lens, find focal length, how to find the focal length, determine focal length, finding focal length of lens',
  openGraph: {
    title: 'How to Find Focal Length - 5 Proven Methods',
    description: 'Complete guide to finding the focal length of any lens using 5 different methods with step-by-step instructions.',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Find Focal Length of a Lens',
    description: 'Learn 5 methods to find focal length including formula, experimental, and practical approaches',
  },
  alternates: {
    canonical: 'https://lensmakerformula.vercel.app/how-to-find-focal-length',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'How to Find Focal Length - 5 Methods to Determine Lens Focal Length',
      description: 'Complete guide to finding the focal length of any lens using multiple methods.',
      author: { '@type': 'Organization', name: 'Lens Maker Formula Calculator' },
      publisher: { '@type': 'Organization', name: 'Lens Maker Formula Calculator' },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://lensmakerformula.vercel.app/how-to-find-focal-length',
      },
    },
    {
      '@type': 'HowTo',
      name: 'How to Find the Focal Length of a Lens',
      description: 'Step-by-step methods to determine the focal length of any optical lens.',
      totalTime: 'PT10M',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Use the Lens Maker Formula',
          text: 'Apply 1/f = (n-1)(1/R₁ - 1/R₂) if you know the refractive index and radii of curvature.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Try the Distant Object Method',
          text: 'Focus a distant object through the lens onto a screen. The lens-to-screen distance equals the focal length.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Use Autocollimation',
          text: 'Place an illuminated object at the focal point. When the reflected image coincides with the object, the distance is the focal length.',
        },
        {
          '@type': 'HowToStep',
          position: 4,
          name: 'Apply the Bessel Method',
          text: 'Find two lens positions that form sharp images. Calculate focal length from the object-screen distance and lens separation.',
        },
        {
          '@type': 'HowToStep',
          position: 5,
          name: 'Check Lens Specifications',
          text: 'Read the focal length directly from the lens markings, manufacturer datasheet, or optical catalog.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How do I find the focal length of a convex lens?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The easiest method is the distant object method: hold the convex lens and focus sunlight or a distant object onto a white paper. Measure the distance from the lens to the sharp image — that is the focal length. Alternatively, use the lens maker formula: 1/f = (n-1)(1/R₁ - 1/R₂).',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I find the focal length of a concave lens?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Concave lenses produce virtual images, so you cannot use the simple distant object method. Instead, combine the concave lens with a stronger convex lens, find the combined focal length, then calculate the concave lens focal length using 1/f_concave = 1/f_combined - 1/f_convex.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the fastest way to find focal length?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For a convex lens, the fastest way is the distant object method — focus a faraway object onto a screen and measure the lens-to-screen distance. For any lens with known specifications, use our free online calculator with the lens maker formula.',
          },
        },
      ],
    },
  ],
};

export default function HowToFindFocalLengthPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />
      <HowToFindContent />
    </>
  );
}
