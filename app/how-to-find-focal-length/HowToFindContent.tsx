'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import LensCalculator from '../components/LensCalculator';

const methods = [
  {
    id: 'lens-maker-formula',
    number: 1,
    title: 'Lens Maker Formula Method',
    subtitle: 'Using 1/f = (n-1)(1/R₁ - 1/R₂)',
    icon: '∑',
    borderColor: 'border-optics-cyan',
    content:
      'If you know the refractive index (n) of your lens material and the radii of curvature (R₁ and R₂) of both surfaces, you can find the focal length directly with the lens maker formula. This is the most precise theoretical method.',
    steps: [
      'Obtain or measure the refractive index of your lens material (e.g., 1.52 for crown glass).',
      'Find the radius of curvature for each surface — from specifications or using a spherometer.',
      'Apply the sign convention: positive R for convex surfaces facing light, negative for concave.',
      'Plug values into 1/f = (n-1)(1/R₁ - 1/R₂) and solve for f.',
    ],
    bestFor: 'Known lens geometry, laboratory calculations',
  },
  {
    id: 'distant-object',
    number: 2,
    title: 'Distant Object Method',
    subtitle: 'Practical experimental method for convex lenses',
    icon: '☀️',
    borderColor: 'border-optics-blue',
    content:
      'For convex lenses, parallel rays (from a distant object or the Sun) converge at the focal point. By focusing a distant object onto a screen and measuring the lens-to-screen distance, you can find the focal length.',
    steps: [
      'Hold the convex lens so it faces a distant object (window, tree, or the Sun).',
      'Place a white screen (paper, wall) on the opposite side of the lens.',
      'Move the lens until a sharp, inverted image forms on the screen.',
      'Measure the distance from the lens center to the screen — that is the focal length.',
    ],
    bestFor: 'Quick convex lens measurement, classrooms',
  },
  {
    id: 'autocollimation',
    number: 3,
    title: 'Autocollimation Method',
    subtitle: 'Using a mirror behind the lens',
    icon: '🪞',
    borderColor: 'border-optics-amber',
    content:
      'Place a plane mirror behind the lens and an illuminated object in front. When the object is at the focal point, rays emerging from the lens are parallel, reflect back through the lens, and form an image coinciding with the object.',
    steps: [
      'Set up an illuminated object (e.g., crosshair, LED) and a plane mirror behind the lens.',
      'Align the object, lens, and mirror so light passes through the lens, reflects, and returns.',
      'Adjust the object position until the reflected image exactly coincides with the object.',
      'The object-to-lens distance equals the focal length.',
    ],
    bestFor: 'Precise lab measurement, thin and thick lenses',
  },
  {
    id: 'bessel-method',
    number: 4,
    title: 'Bessel Method',
    subtitle: 'Two-position method for precise measurement',
    icon: '⚖️',
    borderColor: 'border-optics-purple',
    content:
      'For a fixed object-screen distance D greater than 4f, there are two lens positions that produce a sharp image. The focal length can be calculated from the separation between these positions.',
    steps: [
      'Fix the object and screen at a distance D apart (D > 4f).',
      'Place the lens between them and find the first position that gives a sharp image.',
      'Move the lens to find the second position that also gives a sharp image.',
      'Measure the distance d between these two positions. Then f = (D² - d²)/(4D).',
    ],
    bestFor: 'High-precision measurement, eliminating lens position errors',
  },
  {
    id: 'lens-specifications',
    number: 5,
    title: 'Reading Lens Specifications',
    subtitle: 'From markings, datasheets, and catalogs',
    icon: '📋',
    borderColor: 'border-optics-cyan',
    content:
      'Many lenses have the focal length printed directly on the barrel or packaging. Camera lenses, telescope eyepieces, and optical components typically include this information.',
    steps: [
      'Check the lens barrel for engraved markings (e.g., f=50mm, 50mm).',
      'Consult the manufacturer datasheet or product page for optical specifications.',
      'Look in optical catalogs (Thorlabs, Edmund Optics, etc.) for part numbers.',
      'For eyepieces and camera lenses, focal length is almost always specified.',
    ],
    bestFor: 'Commercial lenses, quick lookup',
  },
];

const comparisonData = [
  {
    method: 'Lens Maker Formula',
    when: 'You have n, R₁, R₂',
    equipment: 'Calculator or datasheet',
    accuracy: 'Exact (theoretical)',
    lensType: 'Any thin lens',
  },
  {
    method: 'Distant Object',
    when: 'Quick convex measurement',
    equipment: 'Lens, screen, ruler',
    accuracy: 'Good (~5%)',
    lensType: 'Convex only',
  },
  {
    method: 'Autocollimation',
    when: 'Lab precision needed',
    equipment: 'Object, lens, mirror',
    accuracy: 'Very high',
    lensType: 'Convex only',
  },
  {
    method: 'Bessel',
    when: 'Maximum precision',
    equipment: 'Object, screen, lens, ruler',
    accuracy: 'Very high',
    lensType: 'Convex only',
  },
  {
    method: 'Specifications',
    when: 'Commercial lens',
    equipment: 'None (read markings)',
    accuracy: 'As specified',
    lensType: 'Any',
  },
];

const faqItems = [
  {
    q: 'How do I find the focal length of a convex lens?',
    a: 'The easiest method is the distant object method: hold the convex lens and focus sunlight or a distant object onto a white paper. Measure the distance from the lens to the sharp image — that is the focal length. Alternatively, use the lens maker formula: 1/f = (n-1)(1/R₁ - 1/R₂).',
  },
  {
    q: 'How do I find the focal length of a concave lens?',
    a: 'Concave lenses produce virtual images, so you cannot use the simple distant object method. Instead, combine the concave lens with a stronger convex lens, find the combined focal length, then calculate the concave lens focal length using 1/f_concave = 1/f_combined - 1/f_convex.',
  },
  {
    q: 'What is the fastest way to find focal length?',
    a: 'For a convex lens, the fastest way is the distant object method — focus a faraway object onto a screen and measure the lens-to-screen distance. For any lens with known specifications, use our free online calculator with the lens maker formula.',
  },
  {
    q: 'Which method gives the most accurate focal length?',
    a: 'The Bessel method typically yields the highest accuracy for experimental measurement because it eliminates systematic errors in object and image distances. The lens maker formula gives exact theoretical results when parameters are known precisely.',
  },
  {
    q: 'Can I use the distant object method with a concave lens?',
    a: 'No. Concave lenses diverge parallel light and form virtual images that cannot be projected onto a screen. Use the lens maker formula or combine with a convex lens to find the focal length of a concave lens.',
  },
];

const relatedPages = [
  { href: '/focal-length', label: 'Focal Length Calculator', color: 'text-optics-cyan' },
  { href: '/how-to-calculate-focal-length', label: 'How to Calculate Focal Length', color: 'text-optics-blue' },
  { href: '/convex-lens-calculator', label: 'Convex Lens Calculator', color: 'text-optics-cyan' },
  { href: '/how-to-measure-focal-length', label: 'How to Measure Focal Length', color: 'text-optics-amber' },
];

export default function HowToFindContent() {
  const [, setCalculatorParams] = useState({
    n: 1.5,
    R1: 0.1,
    R2: -0.1,
    focalLength: null as number | null,
  });

  return (
    <main className="min-h-screen relative z-10 pt-20 pb-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-optics-blue/60">
            <li>
              <Link href="/" className="hover:text-optics-cyan transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li className="text-optics-cyan">How to Find Focal Length</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-glow-strong mb-4"
          >
            How to Find Focal Length
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-optics-blue/80 max-w-2xl mx-auto mb-6"
          >
            Discover <strong className="text-optics-cyan">5 proven methods</strong> to find the focal length of any lens — from quick experiments to precise lab techniques. Whether you need to determine focal length for a convex lens, concave lens, or commercial optics, this guide covers it all.
          </motion.p>
          <motion.a
            href="#calculator"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-gradient-to-r from-optics-blue to-optics-cyan text-optics-darker font-bold rounded-lg hover:shadow-[0_0_30px_rgba(0,217,255,0.5)] transition-all"
          >
            Use Lens Maker Formula Calculator ↓
          </motion.a>
        </motion.header>

        {/* Method Cards */}
        <div className="space-y-8 mb-12">
          {methods.map((method, index) => (
            <motion.section
              key={method.id}
              id={method.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`bg-glass-strong rounded-xl p-6 border ${method.borderColor}/30`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-optics-cyan to-optics-blue flex items-center justify-center text-optics-darker font-bold text-2xl border border-optics-blue/30`}
                >
                  {method.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-sm font-mono text-optics-amber uppercase tracking-wider">
                      Method {method.number}
                    </span>
                  </div>
                  <h2 className="text-2xl font-display font-bold text-glow mb-2">{method.title}</h2>
                  <p className="text-optics-cyan/90 font-medium mb-4">{method.subtitle}</p>
                  <p className="text-optics-blue/80 mb-4">{method.content}</p>
                  <div className="bg-optics-darker/50 rounded-lg p-4 border border-optics-blue/20">
                    <h3 className="font-semibold text-optics-cyan text-sm mb-2 uppercase tracking-wider">
                      Steps
                    </h3>
                    <ol className="space-y-2">
                      {method.steps.map((step, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-optics-blue/80">
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-optics-blue/20 flex items-center justify-center text-optics-cyan text-xs font-bold">
                            {i + 1}
                          </span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                  <p className="mt-3 text-sm text-optics-amber/90">
                    <strong>Best for:</strong> {method.bestFor}
                  </p>
                </div>
              </div>
            </motion.section>
          ))}
        </div>

        {/* Comparison Table */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-glass-strong rounded-xl p-6 mb-12 border border-optics-blue/30 overflow-x-auto"
        >
          <h2 className="text-2xl font-display font-bold text-glow mb-6">
            Method Comparison: When to Use Each
          </h2>
          <table className="w-full text-sm min-w-[600px]">
            <thead>
              <tr className="text-left border-b border-optics-blue/30">
                <th className="pb-3 pr-4 text-optics-cyan">Method</th>
                <th className="pb-3 pr-4 text-optics-blue">When to Use</th>
                <th className="pb-3 pr-4 text-optics-amber">Equipment</th>
                <th className="pb-3 pr-4 text-optics-purple">Accuracy</th>
                <th className="pb-3 text-optics-cyan">Lens Type</th>
              </tr>
            </thead>
            <tbody className="text-optics-blue/80">
              {comparisonData.map((row, i) => (
                <tr key={i} className="border-b border-optics-blue/10 hover:bg-optics-blue/5">
                  <td className="py-3 pr-4 font-medium text-optics-cyan">{row.method}</td>
                  <td className="py-3 pr-4">{row.when}</td>
                  <td className="py-3 pr-4">{row.equipment}</td>
                  <td className="py-3 pr-4">{row.accuracy}</td>
                  <td className="py-3">{row.lensType}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.section>

        {/* Calculator Section */}
        <motion.section
          id="calculator"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-2xl font-display font-bold text-glow mb-6 text-center">
            Find Focal Length with the Lens Maker Formula
          </h2>
          <p className="text-optics-blue/80 text-center max-w-2xl mx-auto mb-8">
            If you know your lens material and surface curvatures, use our free calculator below to find the focal length instantly. Enter refractive index (n), R₁, and R₂ to get your result.
          </p>
          <LensCalculator
            onParamsChange={(params, focalLength) => {
              setCalculatorParams({
                n: params.n,
                R1: params.R1,
                R2: params.R2,
                focalLength: focalLength,
              });
            }}
          />
        </motion.section>

        {/* FAQ Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-glass-strong rounded-xl p-6 mb-12 border border-optics-blue/30"
        >
          <h2 className="text-2xl font-display font-bold text-glow mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="bg-optics-darker/50 rounded-lg p-4 border border-optics-blue/20"
              >
                <h3 className="font-semibold text-optics-cyan mb-2">{item.q}</h3>
                <p className="text-optics-blue/80 text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Related Pages */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-xl font-display font-bold text-glow mb-4">Related Resources</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {relatedPages.map((page) => (
              <Link key={page.href} href={page.href}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className={`px-4 py-2 bg-optics-darker border border-optics-cyan/50 ${page.color} rounded-lg hover:border-optics-cyan transition-colors`}
                >
                  {page.label}
                </motion.button>
              </Link>
            ))}
          </div>
        </motion.section>
      </div>
    </main>
  );
}
