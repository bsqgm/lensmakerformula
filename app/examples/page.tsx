import type { Metadata } from 'next';
import ExamplesContent from './ExamplesContent';
import Navigation from '../components/Navigation';

export const metadata: Metadata = {
  title: 'Lens Examples - Common Lens Types and Calculations',
  description: 'Explore examples of common lens types: biconvex, biconcave, plano-convex, plano-concave, and meniscus lenses. Includes calculations and real-world applications.',
  keywords: 'lens examples, biconvex lens, biconcave lens, plano-convex lens, convex lens calculator, concave lens examples, lens types',
  openGraph: {
    title: 'Lens Examples - Common Lens Types and Calculations',
    description: 'Interactive examples of different lens types with calculations using the lens maker formula.',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lens Examples',
    description: 'Common lens types with interactive calculations',
  },
  alternates: {
    canonical: 'https://lensmakerformula.com/examples',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Common Lens Types',
  description: 'Examples of different lens types with calculations',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Biconvex Lens' },
    { '@type': 'ListItem', position: 2, name: 'Biconcave Lens' },
    { '@type': 'ListItem', position: 3, name: 'Plano-convex Lens' },
    { '@type': 'ListItem', position: 4, name: 'Plano-concave Lens' },
    { '@type': 'ListItem', position: 5, name: 'Meniscus Lens' },
  ],
};

export default function ExamplesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />
      <ExamplesContent />
    </>
  );
}

