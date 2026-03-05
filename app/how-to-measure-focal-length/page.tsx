import type { Metadata } from 'next';
import Navigation from '../components/Navigation';
import HowToMeasureContent from './HowToMeasureContent';

export const metadata: Metadata = {
  title: 'How to Measure Focal Length - Practical Methods for Any Lens',
  description: 'Learn how to measure the focal length of a lens with practical hands-on methods. Covers distant object method, autocollimation, Bessel method, nodal slide, and digital techniques. Step-by-step instructions.',
  keywords: 'how to measure focal length, how to measure focal length of a lens, how to measure focal length of lens, measure focal length, focal length measurement, measuring focal length of a lens, determine focal length experimentally',
  openGraph: {
    title: 'How to Measure Focal Length - Practical Guide',
    description: 'Practical hands-on methods to measure the focal length of any lens with step-by-step instructions.',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Measure Focal Length',
    description: 'Practical methods to measure focal length of any lens',
  },
  alternates: {
    canonical: 'https://lensmakerformula.vercel.app/how-to-measure-focal-length',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'How to Measure Focal Length - Practical Methods for Any Lens',
      description: 'Step-by-step practical methods to measure the focal length of any optical lens.',
      author: { '@type': 'Organization', name: 'Lens Maker Formula Calculator' },
      publisher: { '@type': 'Organization', name: 'Lens Maker Formula Calculator' },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://lensmakerformula.vercel.app/how-to-measure-focal-length',
      },
    },
    {
      '@type': 'HowTo',
      name: 'How to Measure Focal Length of a Lens',
      description: 'Practical step-by-step methods for measuring the focal length of optical lenses.',
      totalTime: 'PT15M',
      tool: [
        { '@type': 'HowToTool', name: 'Optical bench or flat surface' },
        { '@type': 'HowToTool', name: 'White screen or paper' },
        { '@type': 'HowToTool', name: 'Ruler or measuring tape' },
        { '@type': 'HowToTool', name: 'Light source or distant object' },
      ],
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Distant Object Method',
          text: 'Hold the lens and focus a distant object (like a tree or building) onto a white screen. Move the screen until you get the sharpest image. Measure the distance from the lens to the screen — this is the focal length.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Sunlight Method',
          text: 'Point the lens towards the sun and hold a white paper behind it. Adjust the distance until you see the smallest, brightest spot. The lens-to-paper distance equals the focal length. Warning: never look through the lens at the sun.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Autocollimation Method',
          text: 'Place an illuminated object at the focus of the lens with a plane mirror behind the lens. Adjust until the reflected image coincides with the object. The object-to-lens distance is the focal length.',
        },
        {
          '@type': 'HowToStep',
          position: 4,
          name: 'Object-Image Method',
          text: 'Place an object at a known distance from the lens and find the sharp image on a screen. Use the thin lens equation 1/f = 1/v - 1/u to calculate focal length from the measured distances.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How do you measure the focal length of a convex lens?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The easiest way is the distant object method: point the convex lens at a far-away object and find where a sharp image forms on a screen behind the lens. The distance from the lens to the screen is the focal length. For more precision, use the Bessel method or autocollimation.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can you measure the focal length of a concave lens?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Concave lenses form virtual images, so you cannot directly focus an image on a screen. Instead, combine the concave lens with a stronger convex lens whose focal length you know. Measure the combined focal length, then use 1/f_concave = 1/f_combined - 1/f_convex to calculate.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the most accurate method to measure focal length?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The Bessel method is generally the most accurate practical method. It involves finding two lens positions that produce sharp images for a fixed object-screen distance. The focal length is calculated as f = (D² - d²)/(4D), where D is the object-screen distance and d is the separation between the two lens positions.',
          },
        },
      ],
    },
  ],
};

export default function HowToMeasureFocalLengthPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />
      <HowToMeasureContent />
    </>
  );
}
