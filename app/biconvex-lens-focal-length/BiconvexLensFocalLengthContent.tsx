'use client';

import Link from 'next/link';
import SeoContentPage from '../components/SeoContentPage';
import SpecialLensCalculator from '../components/SpecialLensCalculator';

export default function BiconvexLensFocalLengthContent() {
  return (
    <SeoContentPage
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Calculators', href: '/#tools' },
        { label: 'Biconvex Lens Focal Length' },
      ]}
      title="Biconvex Lens Focal Length"
      intro={
        <>
          Use this page to calculate <strong>biconvex lens focal length</strong> from refractive index and the two
          curved surface radii. For broader convex lens comparisons, visit the{' '}
          <Link href="/convex-lens-calculator" className="text-optics-cyan hover:underline">convex lens calculator</Link>.
        </>
      }
      ctaLabel="Open Biconvex Calculator ↓"
      toc={[
        { id: 'calculator', label: 'Biconvex Lens Calculator' },
        { id: 'what-is', label: 'What a Biconvex Lens Is' },
        { id: 'formula', label: 'Formula and Symmetric Shortcut' },
        { id: 'example', label: 'Worked Example' },
        { id: 'usage', label: 'When to Use This Page' },
        { id: 'faq', label: 'FAQ' },
      ]}
      sections={[
        {
          id: 'calculator',
          title: 'Biconvex Lens Calculator',
          body: (
            <SpecialLensCalculator
              title="Biconvex Lens Focal Length Tool"
              description="Calculate focal length for a lens with two convex surfaces."
              defaults={{ n: 1.52, R1: 0.10, R2: -0.10 }}
            />
          ),
        },
        {
          id: 'what-is',
          title: 'What a Biconvex Lens Is',
          body: (
            <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
              <p className="text-optics-blue/90 leading-relaxed mb-4">
                A biconvex lens has two outward-curving surfaces and is one of the most common converging lens shapes.
                It is used in imaging systems, magnifiers, relay optics, and many basic laboratory setups.
              </p>
              <p className="text-optics-blue/80 leading-relaxed">
                Because both surfaces contribute positive optical power under the usual sign convention, the focal length
                is positive for a properly defined biconvex lens.
              </p>
            </div>
          ),
        },
        {
          id: 'formula',
          title: 'Formula and Symmetric Shortcut',
          body: (
            <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
              <div className="bg-optics-darker/50 rounded-lg p-6 text-center mb-6 border border-optics-cyan/20">
                <p className="text-sm text-optics-blue/60 mb-2 uppercase tracking-wider">Biconvex Lens Formula</p>
                <p className="text-3xl md:text-4xl font-mono text-optics-cyan font-bold">
                  1/f = (n-1)(1/R₁ - 1/R₂)
                </p>
              </div>
              <p className="text-optics-blue/80 leading-relaxed mb-4">
                For a symmetric biconvex lens, the magnitudes are equal: R₁ = R and R₂ = -R.
              </p>
              <div className="bg-optics-darker/50 rounded-lg p-5 border border-optics-blue/20">
                <p className="text-2xl font-mono text-optics-amber font-bold">1/f = 2(n-1)/R</p>
              </div>
            </div>
          ),
        },
        {
          id: 'example',
          title: 'Worked Example',
          body: (
            <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
              <div className="space-y-2 font-mono text-sm text-optics-blue/80">
                <p>Given: n = 1.50, R₁ = 0.10 m, R₂ = -0.10 m</p>
                <p>1/f = (1.50 - 1)(10 - (-10))</p>
                <p>1/f = 0.50 × 20 = 10</p>
                <p className="text-optics-cyan font-bold">f = 0.10 m</p>
              </div>
            </div>
          ),
        },
        {
          id: 'usage',
          title: 'When to Use This Page',
          body: (
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
                <h3 className="font-semibold text-optics-cyan mb-3">Use this page when</h3>
                <ul className="space-y-2 text-optics-blue/80 text-sm">
                  <li>You are specifically targeting a biconvex lens geometry.</li>
                  <li>You want the symmetric shortcut or a worked textbook-style example.</li>
                  <li>You already know both radii and want a direct focal length result.</li>
                </ul>
              </div>
              <div className="bg-glass-strong rounded-xl p-6 border border-optics-amber/30">
                <h3 className="font-semibold text-optics-amber mb-3">Use other tools when</h3>
                <ul className="space-y-2 text-optics-blue/80 text-sm">
                  <li>You need a plano-convex calculation instead.</li>
                  <li>You want to compare multiple convex lens shapes in one interface.</li>
                  <li>You need thickness correction for a short, chunky element.</li>
                </ul>
              </div>
            </div>
          ),
        },
      ]}
      faqs={[
        {
          question: 'What is the focal length formula for a biconvex lens?',
          answer: 'Use the lens maker formula 1/f = (n-1)(1/R₁ - 1/R₂). For a symmetric biconvex lens, it simplifies to 1/f = 2(n-1)/R.',
        },
        {
          question: 'Why is R2 negative in a biconvex lens?',
          answer: 'Under the standard Cartesian sign convention, the second convex surface has its center of curvature on the opposite side, so R₂ is negative.',
        },
        {
          question: 'Does a biconvex lens always have positive focal length?',
          answer: 'For the normal sign convention and a real convex geometry, yes. A biconvex lens is a converging lens and therefore has positive focal length.',
        },
        {
          question: 'Should I use the thick lens calculator for biconvex lenses?',
          answer: 'Use the thick lens calculator when the center thickness is no longer negligible relative to the radii or when you need higher design accuracy.',
        },
      ]}
      relatedLinks={[
        {
          href: '/convex-lens-calculator',
          title: 'Convex Lens Calculator',
          description: 'Compare biconvex, plano-convex, and custom convex shapes.',
          accent: 'cyan',
        },
        {
          href: '/plano-convex-lens-calculator',
          title: 'Plano-Convex Lens Calculator',
          description: 'Switch to the one-flat-surface convex case.',
          accent: 'amber',
        },
        {
          href: '/thick-lens',
          title: 'Thick Lens Calculator',
          description: 'Add center thickness correction when needed.',
          accent: 'purple',
        },
        {
          href: '/focal-length',
          title: 'Focal Length Calculator',
          description: 'Use the broader thin-lens focal length tool.',
          accent: 'cyan',
        },
        {
          href: '/radius-of-curvature-calculator',
          title: 'Radius of Curvature Calculator',
          description: 'Solve a missing surface radius before calculating focal length.',
          accent: 'amber',
        },
        {
          href: '/how-to-calculate-focal-length',
          title: 'How to Calculate Focal Length',
          description: 'Step-by-step explanation of the focal length workflow.',
          accent: 'purple',
        },
      ]}
    />
  );
}
