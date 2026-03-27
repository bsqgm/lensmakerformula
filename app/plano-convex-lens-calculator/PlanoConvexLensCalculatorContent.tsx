'use client';

import Link from 'next/link';
import SeoContentPage from '../components/SeoContentPage';
import SpecialLensCalculator from '../components/SpecialLensCalculator';

export default function PlanoConvexLensCalculatorContent() {
  return (
    <SeoContentPage
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Calculators', href: '/#tools' },
        { label: 'Plano-Convex Lens Calculator' },
      ]}
      title="Plano-Convex Lens Calculator"
      intro={
        <>
          Use this <strong>plano-convex lens calculator</strong> to calculate focal length from refractive index and
          one curved surface radius. A plano-convex lens has one flat side, so the lens maker formula simplifies.
          For more generalized convex cases, use the <Link href="/convex-lens-calculator" className="text-optics-cyan hover:underline">convex lens calculator</Link>.
        </>
      }
      ctaLabel="Open Plano-Convex Calculator ↓"
      toc={[
        { id: 'calculator', label: 'Plano-Convex Lens Calculator' },
        { id: 'what-is', label: 'What a Plano-Convex Lens Is' },
        { id: 'formula', label: 'Simplified Formula' },
        { id: 'example', label: 'Worked Example' },
        { id: 'tips', label: 'Orientation and Design Tips' },
        { id: 'faq', label: 'FAQ' },
      ]}
      sections={[
        {
          id: 'calculator',
          title: 'Plano-Convex Lens Calculator',
          body: (
            <SpecialLensCalculator
              title="Plano-Convex Focal Length Tool"
              description="Set one surface to infinity and solve focal length for a plano-convex lens."
              defaults={{ n: 1.52, R1: 0.12, R2: Infinity }}
            />
          ),
        },
        {
          id: 'what-is',
          title: 'What a Plano-Convex Lens Is',
          body: (
            <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
              <p className="text-optics-blue/90 leading-relaxed mb-4">
                A plano-convex lens has one flat surface and one outward-curving convex surface. It is a common
                choice in imaging, illumination, collimation, and low-cost optical assemblies.
              </p>
              <p className="text-optics-blue/80 leading-relaxed">
                Because one face is flat, a <strong>plano-convex lens calculator</strong> only needs one real radius value
                instead of two curved-surface measurements.
              </p>
            </div>
          ),
        },
        {
          id: 'formula',
          title: 'Simplified Formula',
          body: (
            <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
              <p className="text-optics-blue/90 leading-relaxed mb-6">
                If the plano side is the second surface, then R₂ = ∞ and the lens maker formula becomes:
              </p>
              <div className="bg-optics-darker/50 rounded-lg p-6 text-center mb-6 border border-optics-cyan/20">
                <p className="text-sm text-optics-blue/60 mb-2 uppercase tracking-wider">Plano-Convex Lens Formula</p>
                <p className="text-3xl md:text-4xl font-mono text-optics-cyan font-bold">
                  1/f = (n-1)(1/R₁)
                </p>
              </div>
              <p className="text-optics-blue/80 leading-relaxed">
                Rearranged, that means <strong>f = R₁ / (n-1)</strong>. If the flat side is first instead, the infinite
                radius belongs to R₁ and the sign placement changes with the chosen light direction.
              </p>
            </div>
          ),
        },
        {
          id: 'example',
          title: 'Worked Example',
          body: (
            <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
              <div className="space-y-2 font-mono text-sm text-optics-blue/80">
                <p>Given: n = 1.52, R₁ = 0.12 m, R₂ = ∞</p>
                <p>1/f = (1.52 - 1)(1/0.12) = 0.52 × 8.333</p>
                <p>1/f = 4.333</p>
                <p className="text-optics-cyan font-bold">f = 0.231 m</p>
              </div>
            </div>
          ),
        },
        {
          id: 'tips',
          title: 'Orientation and Design Tips',
          body: (
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
                <h3 className="font-semibold text-optics-cyan mb-3">Use the curved side toward collimated light</h3>
                <p className="text-optics-blue/80 text-sm">
                  That orientation usually minimizes spherical aberration when focusing a distant source.
                </p>
              </div>
              <div className="bg-glass-strong rounded-xl p-6 border border-optics-amber/30">
                <h3 className="font-semibold text-optics-amber mb-3">Check the sign convention</h3>
                <p className="text-optics-blue/80 text-sm">
                  The simplified formula only works cleanly when you assign the infinite radius to the correct surface for your light direction.
                </p>
              </div>
            </div>
          ),
        },
      ]}
      faqs={[
        {
          question: 'What is a plano-convex lens calculator?',
          answer: 'It is a focal length calculator specialized for lenses with one flat face and one convex face, so one radius is infinite.',
        },
        {
          question: 'Why is one radius infinite for a plano-convex lens?',
          answer: 'A flat surface has zero curvature, which corresponds to an infinite radius of curvature.',
        },
        {
          question: 'Can I use the standard lens maker formula instead?',
          answer: 'Yes. A plano-convex lens is just a special case of the lens maker formula with one radius set to infinity.',
        },
        {
          question: 'When should I use the general convex lens calculator?',
          answer: 'Use the general convex lens calculator when both surfaces are curved or when you want to compare multiple convex lens geometries.',
        },
      ]}
      relatedLinks={[
        {
          href: '/convex-lens-calculator',
          title: 'Convex Lens Calculator',
          description: 'Compare plano-convex and biconvex lens types in one tool.',
          accent: 'cyan',
        },
        {
          href: '/biconvex-lens-focal-length',
          title: 'Biconvex Lens Focal Length',
          description: 'See the two-curved-surface convex case.',
          accent: 'amber',
        },
        {
          href: '/radius-of-curvature-calculator',
          title: 'Radius of Curvature Calculator',
          description: 'Solve the curved surface radius before calculating focal length.',
          accent: 'purple',
        },
        {
          href: '/focal-length',
          title: 'Focal Length Calculator',
          description: 'Return to the general thin-lens focal length tool.',
          accent: 'cyan',
        },
        {
          href: '/how-to-calculate-focal-length',
          title: 'How to Calculate Focal Length',
          description: 'Step-by-step explanation of the calculation flow.',
          accent: 'amber',
        },
        {
          href: '/materials',
          title: 'Materials Guide',
          description: 'Look up the refractive index you should use for the lens.',
          accent: 'purple',
        },
      ]}
    />
  );
}
