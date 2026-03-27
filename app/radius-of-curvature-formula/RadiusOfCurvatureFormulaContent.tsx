'use client';

import Link from 'next/link';
import SeoContentPage from '../components/SeoContentPage';
import UniversalCalculator from '../components/UniversalCalculator';

export default function RadiusOfCurvatureFormulaContent() {
  return (
    <SeoContentPage
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Learn', href: '/#tools' },
        { label: 'Radius of Curvature Formula' },
      ]}
      title="Radius of Curvature Formula"
      intro={
        <>
          The <strong>radius of curvature formula</strong> for lenses comes from rearranging the lens maker equation.
          This page shows how to solve for <strong>R₁</strong> or <strong>R₂</strong>, when each rearrangement is useful,
          and how the formula connects to the main <Link href="/radius-of-curvature-calculator" className="text-optics-cyan hover:underline">radius of curvature calculator</Link>.
        </>
      }
      ctaLabel="See the Formula ↓"
      toc={[
        { id: 'formula', label: 'Core Formula' },
        { id: 'rearrangements', label: 'Solve for R1 or R2' },
        { id: 'calculator', label: 'Formula Checker' },
        { id: 'sign-convention', label: 'Sign Convention and Units' },
        { id: 'example', label: 'Worked Example' },
        { id: 'faq', label: 'FAQ' },
      ]}
      sections={[
        {
          id: 'formula',
          title: 'Core Formula',
          body: (
            <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
              <p className="text-optics-blue/90 leading-relaxed mb-6">
                Start from the thin-lens lens maker equation:
              </p>
              <div className="bg-optics-darker/50 rounded-lg p-6 text-center mb-6 border border-optics-cyan/20">
                <p className="text-sm text-optics-blue/60 mb-2 uppercase tracking-wider">Lens Maker Formula</p>
                <p className="text-3xl md:text-4xl font-mono text-optics-cyan font-bold">
                  1/f = (n-1)(1/R₁ - 1/R₂)
                </p>
              </div>
              <p className="text-optics-blue/80 leading-relaxed">
                If focal length and refractive index are known, the radius of curvature formula lets you isolate
                the missing surface. That is exactly the workflow used in lens design, quality checks, and reverse engineering.
              </p>
            </div>
          ),
        },
        {
          id: 'rearrangements',
          title: 'Solve for R1 or R2',
          body: (
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
                <h3 className="font-semibold text-optics-cyan mb-3">Radius of Curvature Formula for R₁</h3>
                <p className="text-2xl font-mono text-optics-cyan font-bold mb-4">
                  R₁ = 1 / [1/(f(n-1)) + 1/R₂]
                </p>
                <p className="text-optics-blue/80 text-sm">
                  Use this version when the back surface is already known and you need to machine or inspect the first surface.
                </p>
              </div>
              <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
                <h3 className="font-semibold text-optics-amber mb-3">Radius of Curvature Formula for R₂</h3>
                <p className="text-2xl font-mono text-optics-amber font-bold mb-4">
                  R₂ = 1 / [1/R₁ - 1/(f(n-1))]
                </p>
                <p className="text-optics-blue/80 text-sm">
                  Use this version when the front surface is fixed and you need to determine the second optical surface.
                </p>
              </div>
            </div>
          ),
        },
        {
          id: 'calculator',
          title: 'Formula Checker',
          body: (
            <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
              <p className="text-optics-blue/80 leading-relaxed mb-6">
                Use the calculator below to verify the formula numerically. For the broad search term, use the
                dedicated <Link href="/radius-of-curvature-calculator" className="text-optics-cyan hover:underline"> radius of curvature calculator</Link>.
              </p>
              <UniversalCalculator
                mode="R1"
                title="Radius of Curvature Formula Checker"
                description="Enter focal length (f), refractive index (n), and R₂ to verify the R₁ rearrangement"
              />
            </div>
          ),
        },
        {
          id: 'sign-convention',
          title: 'Sign Convention and Units',
          body: (
            <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
              <ul className="space-y-3 text-optics-blue/80">
                <li>Keep all radii and focal length in the same unit system. Meters is the safest default.</li>
                <li>For a standard biconvex lens, R₁ is positive and R₂ is negative under the Cartesian sign convention.</li>
                <li>Plano surfaces use infinite radius, which removes that term from the equation.</li>
                <li>If the computed radius changes sign unexpectedly, re-check which surface is first and which direction light travels.</li>
              </ul>
            </div>
          ),
        },
        {
          id: 'example',
          title: 'Worked Example',
          body: (
            <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
              <div className="space-y-2 font-mono text-sm text-optics-blue/80">
                <p>Given: f = 0.12 m, n = 1.50, R₂ = -0.10 m</p>
                <p>1 / [f(n-1)] = 1 / (0.12 × 0.50) = 16.67</p>
                <p>1/R₂ = -10.00</p>
                <p>1/R₁ = 16.67 - 10.00 = 6.67</p>
                <p className="text-optics-cyan font-bold">R₁ = 0.150 m</p>
              </div>
              <p className="text-optics-blue/80 leading-relaxed mt-6">
                This is the same workflow used by the <Link href="/radius-r1" className="text-optics-cyan hover:underline">R₁ calculator</Link>. If the
                opposite side were unknown, you would switch to the R₂ rearrangement instead.
              </p>
            </div>
          ),
        },
      ]}
      faqs={[
        {
          question: 'What is the radius of curvature formula for a lens?',
          answer: 'For lens design, it usually refers to solving R₁ or R₂ from the lens maker equation: 1/f = (n-1)(1/R₁ - 1/R₂).',
        },
        {
          question: 'Do I need a different formula for R1 and R2?',
          answer: 'Yes. The base equation is the same, but the rearranged algebra is different depending on which surface is unknown.',
        },
        {
          question: 'Can I use the radius of curvature formula for plano-convex lenses?',
          answer: 'Yes. The flat side has infinite radius, so that term becomes zero and the formula simplifies.',
        },
        {
          question: 'What causes wrong results most often?',
          answer: 'Most mistakes come from mixing units, reversing the light direction, or using the wrong sign for R₁ or R₂.',
        },
      ]}
      relatedLinks={[
        {
          href: '/radius-of-curvature-calculator',
          title: 'Radius of Curvature Calculator',
          description: 'Check the formula with a working tool.',
          accent: 'cyan',
        },
        {
          href: '/radius-r1',
          title: 'Radius R₁ Calculator',
          description: 'Solve the first surface directly.',
          accent: 'amber',
        },
        {
          href: '/radius-r2',
          title: 'Radius R₂ Calculator',
          description: 'Solve the second surface directly.',
          accent: 'purple',
        },
        {
          href: '/focal-length-formula',
          title: 'Focal Length Formula',
          description: 'Return to the parent equation before rearranging it.',
          accent: 'cyan',
        },
        {
          href: '/plano-convex-lens-calculator',
          title: 'Plano-Convex Lens Calculator',
          description: 'A common case where one radius is infinite.',
          accent: 'amber',
        },
        {
          href: '/biconvex-lens-focal-length',
          title: 'Biconvex Lens Focal Length',
          description: 'See the symmetric two-curved-surface case.',
          accent: 'purple',
        },
      ]}
    />
  );
}
