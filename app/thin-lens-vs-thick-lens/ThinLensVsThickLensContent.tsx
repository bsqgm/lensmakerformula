'use client';

import Link from 'next/link';
import SeoContentPage from '../components/SeoContentPage';
import UniversalCalculator from '../components/UniversalCalculator';

export default function ThinLensVsThickLensContent() {
  return (
    <SeoContentPage
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Learn', href: '/#tools' },
        { label: 'Thin Lens vs Thick Lens' },
      ]}
      title="Thin Lens vs Thick Lens"
      intro={
        <>
          The difference between <strong>thin lens</strong> and <strong>thick lens</strong> formulas is whether
          you can ignore the physical center thickness of the lens. Use this guide to decide when the
          <Link href="/focal-length" className="text-optics-cyan hover:underline"> thin lens calculator</Link> is enough and when you should switch to the{' '}
          <Link href="/thick-lens" className="text-optics-cyan hover:underline">thick lens calculator</Link>.
        </>
      }
      ctaLabel="Compare the Formulas ↓"
      toc={[
        { id: 'overview', label: 'Quick Comparison' },
        { id: 'formulas', label: 'Thin Lens Formula vs Thick Lens Formula' },
        { id: 'baseline', label: 'Thin Lens Baseline Tool' },
        { id: 'example', label: 'Worked Comparison' },
        { id: 'decision', label: 'Which Tool to Use' },
        { id: 'faq', label: 'FAQ' },
      ]}
      sections={[
        {
          id: 'overview',
          title: 'Quick Comparison',
          body: (
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
                <h3 className="font-semibold text-optics-cyan mb-3">Thin lens</h3>
                <p className="text-optics-blue/80 text-sm">
                  Assumes the lens thickness is negligible compared with its radii and focal length. Best for
                  quick estimates and many classroom problems.
                </p>
              </div>
              <div className="bg-glass-strong rounded-xl p-6 border border-optics-amber/30">
                <h3 className="font-semibold text-optics-amber mb-3">Thick lens</h3>
                <p className="text-optics-blue/80 text-sm">
                  Includes the separation between the two refracting surfaces. Use it for short focal lengths,
                  high-curvature lenses, or any design where precision matters.
                </p>
              </div>
            </div>
          ),
        },
        {
          id: 'formulas',
          title: 'Thin Lens Formula vs Thick Lens Formula',
          body: (
            <div className="space-y-4">
              <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
                <p className="text-sm text-optics-blue/60 mb-2 uppercase tracking-wider">Thin lens</p>
                <p className="text-3xl font-mono text-optics-cyan font-bold mb-4">
                  1/f = (n-1)(1/R₁ - 1/R₂)
                </p>
                <p className="text-optics-blue/80 text-sm">
                  Good when the center thickness is small enough that it does not materially change the optical power.
                </p>
              </div>
              <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
                <p className="text-sm text-optics-blue/60 mb-2 uppercase tracking-wider">Thick lens</p>
                <p className="text-3xl font-mono text-optics-amber font-bold mb-4">
                  1/f = (n-1)[1/R₁ - 1/R₂ + (n-1)d/(nR₁R₂)]
                </p>
                <p className="text-optics-blue/80 text-sm">
                  The added term includes the center thickness <strong>d</strong>. That correction becomes more important
                  as the lens gets thicker or more strongly curved.
                </p>
              </div>
            </div>
          ),
        },
        {
          id: 'baseline',
          title: 'Thin Lens Baseline Tool',
          body: (
            <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
              <p className="text-optics-blue/80 leading-relaxed mb-6">
                Start with the thin lens approximation to get a baseline. If your lens has meaningful center thickness,
                compare the result against the <Link href="/thick-lens" className="text-optics-cyan hover:underline">thick lens calculator</Link>.
              </p>
              <UniversalCalculator
                mode="f"
                title="Thin Lens Baseline Calculator"
                description="Enter n, R₁, and R₂ to calculate focal length without thickness correction"
              />
            </div>
          ),
        },
        {
          id: 'example',
          title: 'Worked Comparison',
          body: (
            <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
              <div className="space-y-2 font-mono text-sm text-optics-blue/80">
                <p>Given: n = 1.50, R₁ = 0.08 m, R₂ = -0.08 m, d = 0.01 m</p>
                <p>Thin lens: 1/f = 0.5(12.5 - (-12.5)) = 12.5 → f = 0.080 m</p>
                <p>Thickness term = (0.5 × 0.01) / (1.5 × 0.08 × -0.08) = -5.2083</p>
                <p>Thick lens: 1/f = 0.5[25 - 5.2083] = 9.8958 → f = 0.101 m</p>
              </div>
              <p className="text-optics-blue/80 leading-relaxed mt-6">
                In this example the thickness correction shifts the focal length by more than 20 mm, which is too large
                to ignore in a serious design. That is exactly why the <Link href="/thick-lens" className="text-optics-cyan hover:underline">thick lens page</Link>{' '}
                exists as a separate calculator.
              </p>
            </div>
          ),
        },
        {
          id: 'decision',
          title: 'Which Tool to Use',
          body: (
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
                <h3 className="font-semibold text-optics-cyan mb-3">Use the thin lens calculator when</h3>
                <ul className="space-y-2 text-optics-blue/80 text-sm">
                  <li>The lens is thin relative to both radii of curvature.</li>
                  <li>You need a fast estimate or educational demonstration.</li>
                  <li>The application can tolerate a small modeling error.</li>
                </ul>
              </div>
              <div className="bg-glass-strong rounded-xl p-6 border border-optics-amber/30">
                <h3 className="font-semibold text-optics-amber mb-3">Use the thick lens calculator when</h3>
                <ul className="space-y-2 text-optics-blue/80 text-sm">
                  <li>Thickness is roughly 10% or more of either radius.</li>
                  <li>You are designing high-power, short focal length, or compact optics.</li>
                  <li>You need results suitable for fabrication or engineering review.</li>
                </ul>
              </div>
            </div>
          ),
        },
      ]}
      faqs={[
        {
          question: 'What is the difference between thin lens and thick lens?',
          answer: 'Thin lens theory ignores lens thickness, while thick lens theory includes the separation between the two refracting surfaces.',
        },
        {
          question: 'When does the thick lens formula matter?',
          answer: 'It matters when the lens is physically thick relative to its radii or when you need more accurate focal length predictions.',
        },
        {
          question: 'Can I start with the thin lens formula first?',
          answer: 'Yes. It is often the fastest way to estimate focal length before checking whether thickness correction materially changes the result.',
        },
        {
          question: 'Which calculator should rank for “thick lens calculator”?',
          answer: 'The dedicated /thick-lens page should own that query, while this page compares the two approaches and sends users to the right tool.',
        },
      ]}
      relatedLinks={[
        {
          href: '/thick-lens',
          title: 'Thick Lens Calculator',
          description: 'Run the corrected focal length with thickness included.',
          accent: 'amber',
        },
        {
          href: '/focal-length',
          title: 'Thin Lens Calculator',
          description: 'Use the base lens maker equation without thickness.',
          accent: 'cyan',
        },
        {
          href: '/lens-combination',
          title: 'Lens Combination Calculator',
          description: 'Move from single thick elements to multi-element systems.',
          accent: 'purple',
        },
        {
          href: '/effective-focal-length-calculator',
          title: 'Effective Focal Length Calculator',
          description: 'Compare system-level focal length behavior.',
          accent: 'cyan',
        },
        {
          href: '/focal-length-formula',
          title: 'Focal Length Formula',
          description: 'Review the base thin lens equation in detail.',
          accent: 'amber',
        },
        {
          href: '/lens-maker-formula',
          title: 'Lens Maker Formula',
          description: 'Return to the parent hub for all core optics pages.',
          accent: 'purple',
        },
      ]}
    />
  );
}
