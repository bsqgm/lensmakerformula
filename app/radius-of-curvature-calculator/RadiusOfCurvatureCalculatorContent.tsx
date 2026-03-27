'use client';

import Link from 'next/link';
import SeoContentPage from '../components/SeoContentPage';
import UniversalCalculator from '../components/UniversalCalculator';

const toolCards = [
  {
    href: '/radius-r1',
    title: 'Solve R₁',
    description: 'Find the first surface radius when focal length, refractive index, and R₂ are known.',
  },
  {
    href: '/radius-r2',
    title: 'Solve R₂',
    description: 'Find the second surface radius when focal length, refractive index, and R₁ are known.',
  },
];

export default function RadiusOfCurvatureCalculatorContent() {
  return (
    <SeoContentPage
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Calculators', href: '/#tools' },
        { label: 'Radius of Curvature Calculator' },
      ]}
      title="Radius of Curvature Calculator"
      intro={
        <>
          Use this <strong>radius of curvature calculator</strong> to solve the missing lens surface radius from
          focal length, refractive index, and the opposite surface. If you already know which side you need,
          go directly to the <Link href="/radius-r1" className="text-optics-cyan hover:underline">R₁ calculator</Link> or{' '}
          <Link href="/radius-r2" className="text-optics-cyan hover:underline">R₂ calculator</Link>. If you need the underlying
          math first, the <Link href="/radius-of-curvature-formula" className="text-optics-cyan hover:underline">radius of curvature formula guide</Link>{' '}
          breaks down every rearrangement.
        </>
      }
      ctaLabel="Open Radius Tool ↓"
      toc={[
        { id: 'calculator', label: 'Radius of Curvature Tools' },
        { id: 'what-is', label: 'What Radius of Curvature Means' },
        { id: 'formula', label: 'Formula and Sign Convention' },
        { id: 'r1-vs-r2', label: 'When to Solve R1 vs R2' },
        { id: 'examples', label: 'Worked Examples' },
        { id: 'faq', label: 'FAQ' },
      ]}
      sections={[
        {
          id: 'calculator',
          title: 'Radius of Curvature Tools',
          body: (
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                {toolCards.map((card) => (
                  <Link key={card.href} href={card.href}>
                    <div className="bg-glass-strong rounded-xl p-5 border border-optics-blue/30 hover:border-optics-cyan/50 transition-all h-full">
                      <h3 className="font-semibold text-optics-cyan mb-2">{card.title}</h3>
                      <p className="text-optics-blue/70 text-sm">{card.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
                <p className="text-optics-blue/80 leading-relaxed mb-6">
                  For the broad query <strong>radius of curvature calculator</strong>, most visitors are trying to recover
                  one missing surface from the lens maker formula. Start with the common R₁ workflow below, then switch
                  to <Link href="/radius-r2" className="text-optics-cyan hover:underline"> R₂</Link> if your second surface is unknown.
                </p>
                <UniversalCalculator
                  mode="R1"
                  title="Radius of Curvature Calculator"
                  description="Enter focal length (f), refractive index (n), and R₂ to calculate R₁"
                />
              </div>
            </div>
          ),
        },
        {
          id: 'what-is',
          title: 'What Radius of Curvature Means',
          body: (
            <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
              <p className="text-optics-blue/90 leading-relaxed mb-4">
                The radius of curvature is the radius of the imaginary sphere that matches a lens surface. A small
                radius means a strongly curved surface and more optical power. A large radius means a flatter surface.
              </p>
              <p className="text-optics-blue/80 leading-relaxed mb-6">
                In practice, a <strong>radius of curvature calculator</strong> is useful when you know the material and
                target focal length, but you still need to specify one surface during lens design or reverse engineering.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-optics-darker/50 rounded-lg p-4 border border-optics-cyan/30">
                  <h3 className="font-semibold text-optics-cyan mb-2">Smaller Radius</h3>
                  <p className="text-optics-blue/70 text-sm">Stronger curvature, higher surface power, shorter focal length contribution.</p>
                </div>
                <div className="bg-optics-darker/50 rounded-lg p-4 border border-optics-purple/30">
                  <h3 className="font-semibold text-optics-purple mb-2">Larger Radius</h3>
                  <p className="text-optics-blue/70 text-sm">Flatter surface, weaker contribution, and approaches infinity for a plano face.</p>
                </div>
              </div>
            </div>
          ),
        },
        {
          id: 'formula',
          title: 'Formula and Sign Convention',
          body: (
            <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
              <p className="text-optics-blue/90 leading-relaxed mb-6">
                Start with the thin-lens equation and rearrange it depending on which surface is unknown:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-optics-darker/50 rounded-lg p-5 border border-optics-blue/20">
                  <p className="text-sm text-optics-blue/60 mb-2 uppercase tracking-wider">Solve R₁</p>
                  <p className="text-2xl font-mono text-optics-cyan font-bold">R₁ = 1 / [1/(f(n-1)) + 1/R₂]</p>
                </div>
                <div className="bg-optics-darker/50 rounded-lg p-5 border border-optics-blue/20">
                  <p className="text-sm text-optics-blue/60 mb-2 uppercase tracking-wider">Solve R₂</p>
                  <p className="text-2xl font-mono text-optics-cyan font-bold">R₂ = 1 / [1/R₁ - 1/(f(n-1))]</p>
                </div>
              </div>
              <ul className="space-y-2 text-optics-blue/80">
                <li>Use positive R₁ for a typical first convex surface in a converging lens.</li>
                <li>Use negative R₂ for a typical second convex surface in a biconvex lens.</li>
                <li>Use `∞` for any plano surface because a flat surface has zero curvature.</li>
              </ul>
            </div>
          ),
        },
        {
          id: 'r1-vs-r2',
          title: 'When to Solve R1 vs R2',
          body: (
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
                <h3 className="font-semibold text-optics-cyan mb-3">Use the R₁ calculator when</h3>
                <ul className="space-y-2 text-optics-blue/80 text-sm">
                  <li>You know the back surface already and need to shape the incoming face.</li>
                  <li>You are iterating a front-surface machining or molding step.</li>
                  <li>You are matching a known focal length with a chosen glass type.</li>
                </ul>
              </div>
              <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
                <h3 className="font-semibold text-optics-amber mb-3">Use the R₂ calculator when</h3>
                <ul className="space-y-2 text-optics-blue/80 text-sm">
                  <li>The first surface geometry is fixed by packaging or tooling.</li>
                  <li>You are checking the exit-face curvature of an existing design.</li>
                  <li>You want to compare two rear-surface options while holding R₁ constant.</li>
                </ul>
              </div>
            </div>
          ),
        },
        {
          id: 'examples',
          title: 'Worked Examples',
          body: (
            <div className="space-y-4">
              <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
                <h3 className="text-xl font-semibold text-optics-cyan mb-4">Example 1: Solve R₁ for a biconvex lens</h3>
                <div className="space-y-2 font-mono text-sm text-optics-blue/80">
                  <p>Given: f = 0.10 m, n = 1.52, R₂ = -0.08 m</p>
                  <p>1 / [f(n-1)] = 1 / [0.10 × 0.52] = 19.23</p>
                  <p>1/R₂ = -12.50</p>
                  <p>1/R₁ = 19.23 + (-12.50) = 6.73</p>
                  <p className="text-optics-cyan font-bold">R₁ = 0.149 m</p>
                </div>
              </div>
              <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
                <h3 className="text-xl font-semibold text-optics-amber mb-4">Example 2: Plano-convex design check</h3>
                <p className="text-optics-blue/80 leading-relaxed">
                  For a plano-convex lens, one radius is infinite. If the plano side is on the second surface,
                  then <strong>R₂ = ∞</strong> and the equation simplifies to <strong>R₁ = f(n-1)</strong>. That shortcut is
                  useful when comparing results from the <Link href="/plano-convex-lens-calculator" className="text-optics-cyan hover:underline">plano-convex lens calculator</Link>.
                </p>
              </div>
            </div>
          ),
        },
      ]}
      faqs={[
        {
          question: 'What is a radius of curvature calculator?',
          answer: 'A radius of curvature calculator solves the missing lens surface radius from the lens maker formula using focal length, refractive index, and the other surface radius.',
        },
        {
          question: 'What is the difference between R1 and R2?',
          answer: 'R₁ is the first surface encountered by incoming light. R₂ is the second surface. Their signs depend on the chosen optical sign convention.',
        },
        {
          question: 'Can I use a radius of curvature calculator for a plano surface?',
          answer: 'Yes. A plano surface has infinite radius, so you treat that side as `∞` or zero curvature in the equation.',
        },
        {
          question: 'Which page should rank for the broad radius of curvature term?',
          answer: 'Use this page for the broad query, then branch into the dedicated R₁ or R₂ calculators when you know which specific radius you need.',
        },
      ]}
      relatedLinks={[
        {
          href: '/radius-r1',
          title: 'Radius R₁ Calculator',
          description: 'Dedicated calculator for the first surface radius.',
          accent: 'cyan',
        },
        {
          href: '/radius-r2',
          title: 'Radius R₂ Calculator',
          description: 'Dedicated calculator for the second surface radius.',
          accent: 'amber',
        },
        {
          href: '/radius-of-curvature-formula',
          title: 'Radius of Curvature Formula',
          description: 'Learn the rearranged equations and sign rules.',
          accent: 'purple',
        },
        {
          href: '/focal-length',
          title: 'Focal Length Calculator',
          description: 'Solve the lens focal length before working backward for curvature.',
          accent: 'cyan',
        },
        {
          href: '/plano-convex-lens-calculator',
          title: 'Plano-Convex Lens Calculator',
          description: 'A common case where one radius becomes infinite.',
          accent: 'amber',
        },
        {
          href: '/biconvex-lens-focal-length',
          title: 'Biconvex Lens Focal Length',
          description: 'Check the symmetric two-surface case.',
          accent: 'purple',
        },
      ]}
    />
  );
}
