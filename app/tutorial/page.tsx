import type { Metadata } from 'next';
import TutorialContent from './TutorialContent';
import Navigation from '../components/Navigation';

export const metadata: Metadata = {
  title: 'Lens Maker Formula Tutorial - Complete Guide with Examples',
  description: 'Learn the lens maker formula step by step. Comprehensive tutorial covering formula derivation, sign conventions, practical examples, and common mistakes to avoid.',
  keywords: 'lens maker formula tutorial, lens formula derivation, optics tutorial, how to use lens maker equation, lens formula examples, physics optics guide',
  openGraph: {
    title: 'Lens Maker Formula Tutorial - Complete Guide',
    description: 'Master the lens maker formula with our comprehensive step-by-step tutorial. Includes derivation, examples, and practice problems.',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lens Maker Formula Tutorial',
    description: 'Complete guide to understanding and applying the lens maker formula',
  },
  alternates: {
    canonical: 'https://lensmakerformula.com/tutorial',
  },
};

// JSON-LD Schema for SEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Lens Maker Formula Tutorial - Complete Guide with Examples',
  description: 'Learn the lens maker formula step by step with comprehensive examples and derivation.',
  author: {
    '@type': 'Organization',
    name: 'Lens Maker Formula Calculator',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Lens Maker Formula Calculator',
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://lensmakerformula.com/tutorial',
  },
  articleSection: 'Optics Education',
  keywords: ['lens maker formula', 'optics', 'focal length', 'physics tutorial'],
};

export default function TutorialPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />
      <TutorialContent />
    </>
  );
}

