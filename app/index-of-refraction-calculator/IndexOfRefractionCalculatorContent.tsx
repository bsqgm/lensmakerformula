'use client';

import Link from 'next/link';
import SeoContentPage from '../components/SeoContentPage';
import UniversalCalculator from '../components/UniversalCalculator';

export default function IndexOfRefractionCalculatorContent() {
  return (
    <SeoContentPage
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Calculators', href: '/#tools' },
        { label: 'Index of Refraction Calculator' },
      ]}
      title="Index of Refraction Calculator"
      intro={
        <>
          This <strong>index of refraction calculator</strong> solves the material index <strong>n</strong> from
          focal length and lens surface radii. In optics, <em>index of refraction</em> and <em>refractive index</em>
          mean the same thing, so this page complements the main{' '}
          <Link href="/refractive-index" className="text-optics-cyan hover:underline">refractive index calculator</Link> while matching the alternate search phrasing.
        </>
      }
      ctaLabel="Open n Calculator ↓"
      toc={[
        { id: 'calculator', label: 'Index of Refraction Calculator' },
        { id: 'meaning', label: 'Index of Refraction vs Refractive Index' },
        { id: 'formula', label: 'Formula for n' },
        { id: 'materials', label: 'Typical Material Values' },
        { id: 'example', label: 'Worked Example' },
        { id: 'faq', label: 'FAQ' },
      ]}
      sections={[
        {
          id: 'calculator',
          title: 'Index of Refraction Calculator',
          body: (
            <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
              <p className="text-optics-blue/80 leading-relaxed mb-6">
                Enter focal length and the two surface radii. The calculator rearranges the lens maker equation
                to solve for <strong>n</strong>, which helps identify or verify an optical material.
              </p>
              <UniversalCalculator
                mode="n"
                title="Index of Refraction Calculator"
                description="Enter focal length (f), R₁, and R₂ to calculate n"
              />
            </div>
          ),
        },
        {
          id: 'meaning',
          title: 'Index of Refraction vs Refractive Index',
          body: (
            <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
              <p className="text-optics-blue/90 leading-relaxed mb-4">
                These terms are interchangeable in optics. Both describe how much a material slows and bends
                light relative to vacuum.
              </p>
              <div className="bg-optics-darker/50 rounded-lg p-5 text-center border border-optics-blue/20">
                <p className="text-sm text-optics-blue/60 mb-2 uppercase tracking-wider">Definition</p>
                <p className="text-3xl font-mono text-optics-cyan font-bold">n = c / v</p>
                <p className="text-optics-blue/70 text-sm mt-2">c = speed of light in vacuum, v = speed of light in the material</p>
              </div>
            </div>
          ),
        },
        {
          id: 'formula',
          title: 'Formula for n',
          body: (
            <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
              <p className="text-optics-blue/90 leading-relaxed mb-6">
                Rearranging the lens maker equation for the index of refraction gives:
              </p>
              <div className="bg-optics-darker/50 rounded-lg p-6 text-center mb-6 border border-optics-cyan/20">
                <p className="text-sm text-optics-blue/60 mb-2 uppercase tracking-wider">Index of Refraction Formula</p>
                <p className="text-3xl md:text-4xl font-mono text-optics-cyan font-bold">
                  n = 1 + 1 / [f × (1/R₁ - 1/R₂)]
                </p>
              </div>
              <p className="text-optics-blue/80 leading-relaxed">
                This is the same relationship used by the <Link href="/refractive-index" className="text-optics-cyan hover:underline">refractive index calculator</Link>,
                but the page language matches users searching for the American phrasing <em>index of refraction</em>.
              </p>
            </div>
          ),
        },
        {
          id: 'materials',
          title: 'Typical Material Values',
          body: (
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
                <h3 className="font-semibold text-optics-cyan mb-3">Common optical glasses</h3>
                <ul className="space-y-2 text-optics-blue/80 text-sm">
                  <li>BK7: 1.5168</li>
                  <li>Crown glass: 1.52</li>
                  <li>Flint glass: 1.62</li>
                  <li>Dense flint: 1.70 to 1.80</li>
                </ul>
              </div>
              <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
                <h3 className="font-semibold text-optics-amber mb-3">Other materials</h3>
                <ul className="space-y-2 text-optics-blue/80 text-sm">
                  <li>Acrylic: 1.49</li>
                  <li>Polycarbonate: 1.58</li>
                  <li>Water: 1.33</li>
                  <li>Diamond: 2.42</li>
                </ul>
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
                <p>Given: f = 0.10 m, R₁ = 0.10 m, R₂ = -0.10 m</p>
                <p>1/R₁ - 1/R₂ = 10 - (-10) = 20</p>
                <p>n = 1 + 1 / (0.10 × 20)</p>
                <p>n = 1 + 0.50</p>
                <p className="text-optics-cyan font-bold">n = 1.50</p>
              </div>
              <p className="text-optics-blue/80 leading-relaxed mt-6">
                That result is consistent with common crown glass. You can compare it against the
                <Link href="/materials" className="text-optics-cyan hover:underline"> materials guide</Link> or test the inverse workflow with the{' '}
                <Link href="/focal-length" className="text-optics-cyan hover:underline">focal length calculator</Link>.
              </p>
            </div>
          ),
        },
      ]}
      faqs={[
        {
          question: 'Is index of refraction the same as refractive index?',
          answer: 'Yes. They are two names for the same optical property, usually written as n.',
        },
        {
          question: 'What inputs do I need for an index of refraction calculator?',
          answer: 'You need focal length plus the first and second surface radii, all expressed in the same unit system.',
        },
        {
          question: 'What is a realistic result for optical glass?',
          answer: 'Most common optical glasses fall between about 1.48 and 1.80, while plastics are often around 1.49 to 1.59.',
        },
        {
          question: 'When should I use this page instead of the refractive index page?',
          answer: 'Use this page if your target keyword or user wording is “index of refraction.” Functionally, both pages solve the same variable n.',
        },
      ]}
      relatedLinks={[
        {
          href: '/refractive-index',
          title: 'Refractive Index Calculator',
          description: 'The same tool family with the standard optics wording.',
          accent: 'cyan',
        },
        {
          href: '/materials',
          title: 'Materials Guide',
          description: 'Compare your calculated value with common optical materials.',
          accent: 'amber',
        },
        {
          href: '/focal-length',
          title: 'Focal Length Calculator',
          description: 'Run the inverse calculation when n is already known.',
          accent: 'purple',
        },
        {
          href: '/radius-of-curvature-calculator',
          title: 'Radius of Curvature Calculator',
          description: 'Solve the missing lens surface after verifying n.',
          accent: 'cyan',
        },
        {
          href: '/focal-length-refractive-index',
          title: 'Focal Length & Refractive Index',
          description: 'See how these two variables move together in lens design.',
          accent: 'amber',
        },
        {
          href: '/lens-maker-formula',
          title: 'Lens Maker Formula',
          description: 'Review the parent equation behind the calculator.',
          accent: 'purple',
        },
      ]}
    />
  );
}
