'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const methods = [
  {
    id: 'distant-object',
    number: 1,
    title: 'Distant Object Method',
    subtitle: 'Suitable for convex lenses only',
    icon: '🔭',
    borderColor: 'border-optics-cyan',
    content:
      'The easiest way to measure focal length experimentally: parallel rays from a distant object converge at the focal point. When you focus a distant object onto a screen, the lens-to-screen distance equals the focal length.',
    equipment: ['Convex lens', 'White screen or paper', 'Ruler or measuring tape', 'Distant object (tree, building, or sky)'],
    steps: [
      'Hold the convex lens so it faces a distant object (at least 20× the expected focal length away).',
      'Place a white screen (paper, cardboard, or wall) on the opposite side of the lens.',
      'Move the screen back and forth until a sharp, inverted image forms on it.',
      'Measure the distance from the lens center (or principal plane) to the screen — this is your focal length.',
    ],
    bestFor: 'Quick convex lens measurement, classrooms, outdoor use',
  },
  {
    id: 'sunlight',
    number: 2,
    title: 'Sunlight / Parallel Light Method',
    subtitle: 'Quick method using natural light',
    icon: '☀️',
    borderColor: 'border-optics-amber',
    content:
      'Sunlight arrives as nearly parallel rays. When focused through a convex lens, they converge at the focal point, producing a small bright spot. The lens-to-spot distance is the focal length. This is one of the fastest ways to measure focal length.',
    equipment: ['Convex lens', 'White paper or card', 'Ruler or measuring tape'],
    steps: [
      'Go outdoors on a sunny day or use a bright distant light source.',
      'Point the lens toward the sun (or light source) and hold white paper behind it.',
      'Adjust the distance between the lens and paper until you see the smallest, brightest spot.',
      'Measure the distance from the lens to the paper — this is the focal length.',
    ],
    bestFor: 'Very quick measurement, no special equipment',
    warning: '⚠️ Never look through the lens at the sun. Never point the lens toward your eyes while facing the sun. The focused sunlight can cause permanent eye damage or blindness.',
  },
  {
    id: 'object-image',
    number: 3,
    title: 'Object-Image Method',
    subtitle: 'Using the thin lens equation with measured distances',
    icon: '📐',
    borderColor: 'border-optics-blue',
    content:
      'Place an object at a known distance u from the lens and find where a sharp image forms on a screen (distance v). Use the thin lens equation 1/f = 1/u + 1/v (or 1/f = 1/v - 1/u with sign convention) to calculate the focal length from your measurements.',
    equipment: ['Lens', 'Illuminated object (e.g., candle, LED, crosshair)', 'White screen', 'Ruler or optical bench'],
    steps: [
      'Set up an object and screen on opposite sides of the lens.',
      'Measure the object distance u (from object to lens) and image distance v (from lens to screen).',
      'Ensure the image on the screen is sharp. Use the thin lens equation: 1/f = 1/u + 1/v.',
      'Solve for f: f = uv / (u + v). For multiple measurements, average for better accuracy.',
    ],
    bestFor: 'Any lens type (convex), good for teaching the thin lens equation',
  },
  {
    id: 'autocollimation',
    number: 4,
    title: 'Autocollimation Method',
    subtitle: 'Using a plane mirror for accuracy',
    icon: '🪞',
    borderColor: 'border-optics-purple',
    content:
      'Place a plane mirror behind the lens and an illuminated object in front. When the object is at the focal point, rays emerging from the lens are parallel, reflect back through the lens, and form an image coinciding with the object. The object-to-lens distance equals the focal length.',
    equipment: ['Lens', 'Plane mirror', 'Illuminated object (crosshair, LED)', 'Ruler or optical bench'],
    steps: [
      'Set up an illuminated object, the lens, and a plane mirror behind the lens (perpendicular to the optical axis).',
      'Align the object, lens, and mirror so light passes through the lens, reflects off the mirror, and returns through the lens.',
      'Adjust the object position until the reflected image exactly coincides with the object.',
      'Measure the object-to-lens distance — this is the focal length. This method avoids measuring image distance.',
    ],
    bestFor: 'Lab precision, thin and thick lenses, eliminating image-distance errors',
  },
  {
    id: 'bessel',
    number: 5,
    title: 'Bessel Method',
    subtitle: 'Most accurate practical method',
    icon: '⚖️',
    borderColor: 'border-optics-cyan',
    content:
      'For a fixed object-screen distance D greater than 4f, there are two lens positions that produce a sharp image. The focal length is calculated from the separation d between these positions using f = (D² - d²)/(4D). This method eliminates systematic errors in object and image distance measurements.',
    equipment: ['Lens', 'Illuminated object', 'White screen', 'Ruler or optical bench'],
    steps: [
      'Fix the object and screen at a distance D apart. Ensure D > 4f (roughly 4× the expected focal length).',
      'Place the lens between them and find the first position that gives a sharp image. Note the position.',
      'Move the lens toward the screen and find the second position that also gives a sharp image.',
      'Measure d = the distance between these two lens positions. Calculate: f = (D² - d²) / (4D).',
    ],
    bestFor: 'High-precision measurement, eliminating lens position and thickness errors',
    formula: 'f = (D² - d²) / (4D)',
  },
  {
    id: 'concave',
    number: 6,
    title: 'Measuring Concave Lenses',
    subtitle: 'Combination method with a convex lens',
    icon: '🔗',
    borderColor: 'border-optics-blue',
    content:
      'Concave lenses form virtual images that cannot be projected onto a screen, so you cannot measure focal length directly. Combine the concave lens with a stronger convex lens whose focal length you know. Measure the combined focal length, then use 1/f_concave = 1/f_combined - 1/f_convex to find the concave lens focal length.',
    equipment: ['Concave lens', 'Convex lens (known focal length, stronger than concave)', 'Object', 'Screen', 'Ruler'],
    steps: [
      'Measure or know the focal length f_convex of your convex lens.',
      'Hold the convex and concave lenses together (or in contact) and treat them as a combined system.',
      'Use the distant object method or object-image method to measure the combined focal length f_combined.',
      'Calculate: 1/f_concave = 1/f_combined - 1/f_convex. Solve for f_concave (it will be negative).',
    ],
    bestFor: 'Diverging lenses (concave, negative focal length)',
  },
];

const comparisonData = [
  { method: 'Distant Object', accuracy: 'Good (~5%)', equipment: 'Lens, screen, ruler', lensType: 'Convex only', difficulty: 'Easy' },
  { method: 'Sunlight', accuracy: 'Good (~5%)', equipment: 'Lens, paper, ruler', lensType: 'Convex only', difficulty: 'Very easy' },
  { method: 'Object-Image', accuracy: 'Moderate (~3%)', equipment: 'Object, lens, screen, ruler', lensType: 'Convex only', difficulty: 'Moderate' },
  { method: 'Autocollimation', accuracy: 'Very high (~1%)', equipment: 'Object, lens, mirror, ruler', lensType: 'Convex only', difficulty: 'Moderate' },
  { method: 'Bessel', accuracy: 'Very high (~1%)', equipment: 'Object, lens, screen, ruler', lensType: 'Convex only', difficulty: 'Moderate' },
  { method: 'Concave Combination', accuracy: 'Moderate (~3%)', equipment: 'Concave, convex (known f), screen, ruler', lensType: 'Concave only', difficulty: 'Moderate' },
];

const tips = [
  {
    error: 'Measuring from the wrong point',
    tip: 'Measure from the lens center or principal plane, not the lens edge. For thick lenses, the principal plane may be inside the lens.',
  },
  {
    error: 'Object too close',
    tip: 'For the distant object method, the object should be at least 20× the focal length away. Otherwise, the image distance won\'t equal f.',
  },
  {
    error: 'Poor focus judgment',
    tip: 'Move the screen slowly and compare sharpness at different positions. Use a crosshair or fine detail on the object to judge focus.',
  },
  {
    error: 'Parallax and reading errors',
    tip: 'Read the ruler at eye level to avoid parallax. Use a fine scale and repeat measurements for better accuracy.',
  },
  {
    error: 'Ignoring lens thickness',
    tip: 'For thick lenses, object and image distances are measured from the principal planes. The Bessel method helps avoid this issue.',
  },
];

const faqItems = [
  {
    q: 'How do you measure the focal length of a convex lens?',
    a: 'The easiest way is the distant object method: point the convex lens at a far-away object and find where a sharp image forms on a screen behind the lens. The distance from the lens to the screen is the focal length. For more precision, use the Bessel method or autocollimation.',
  },
  {
    q: 'Can you measure the focal length of a concave lens?',
    a: 'Concave lenses form virtual images, so you cannot directly focus an image on a screen. Instead, combine the concave lens with a stronger convex lens whose focal length you know. Measure the combined focal length, then use 1/f_concave = 1/f_combined - 1/f_convex to calculate.',
  },
  {
    q: 'What is the most accurate method to measure focal length?',
    a: 'The Bessel method is generally the most accurate practical method. It involves finding two lens positions that produce sharp images for a fixed object-screen distance. The focal length is calculated as f = (D² - d²)/(4D), where D is the object-screen distance and d is the separation between the two lens positions.',
  },
  {
    q: 'When should I measure focal length vs calculate it?',
    a: 'Measure when you have an unknown lens, need to verify specifications, or lack material/geometry data. Calculate using the lens maker formula when you know the refractive index and radii of curvature — this gives exact theoretical values.',
  },
];

const relatedPages = [
  { href: '/how-to-find-focal-length', label: 'How to Find Focal Length', color: 'text-optics-cyan' },
  { href: '/how-to-calculate-focal-length', label: 'How to Calculate Focal Length', color: 'text-optics-blue' },
  { href: '/focal-length', label: 'Focal Length Calculator', color: 'text-optics-amber' },
  { href: '/thick-lens', label: 'Thick Lens', color: 'text-optics-purple' },
];

export default function HowToMeasureContent() {
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
            <li className="text-optics-cyan">How to Measure Focal Length</li>
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
            How to Measure Focal Length
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-optics-blue/80 max-w-2xl mx-auto"
          >
            Practical hands-on methods to measure the focal length of any lens experimentally. Step-by-step instructions for convex lenses, concave lenses, and lab-precision techniques — no formula calculation required.
          </motion.p>
        </motion.header>

        {/* When to Measure vs Calculate */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-glass-strong rounded-xl p-6 mb-12 border border-optics-cyan/30"
        >
          <h2 className="text-2xl font-display font-bold text-glow mb-4">
            When to Measure vs Calculate
          </h2>
          <p className="text-optics-blue/80 mb-4">
            Learning how to measure focal length is essential when you have an unknown lens or need to verify specifications experimentally. Use measurement when:
          </p>
          <ul className="list-disc list-inside text-optics-blue/80 space-y-2 mb-4">
            <li>You have a lens without markings or datasheet</li>
            <li>You want to verify manufacturer specifications</li>
            <li>You lack the refractive index or radii of curvature for calculation</li>
            <li>You are teaching or learning optics in a lab setting</li>
          </ul>
          <p className="text-optics-blue/80">
            Use the <Link href="/how-to-calculate-focal-length" className="text-optics-cyan hover:underline">lens maker formula</Link> when you know the material (n) and surface radii (R₁, R₂) — that gives exact theoretical values. This page is about physical measurement, not calculation.
          </p>
        </motion.section>

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
                  <div className="bg-optics-darker/50 rounded-lg p-4 border border-optics-blue/20 mb-4">
                    <h3 className="font-semibold text-optics-cyan text-sm mb-2 uppercase tracking-wider">
                      Equipment
                    </h3>
                    <ul className="list-disc list-inside text-sm text-optics-blue/80 space-y-1">
                      {method.equipment.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
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
                  {method.formula && (
                    <div className="mt-4 p-4 bg-optics-darker/50 rounded-lg border border-optics-cyan/30 font-mono text-optics-cyan text-center">
                      {method.formula}
                    </div>
                  )}
                  {method.warning && (
                    <div className="mt-4 p-4 bg-optics-amber/10 border border-optics-amber/40 rounded-lg text-optics-amber">
                      {method.warning}
                    </div>
                  )}
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
            Comparison: How to Measure Focal Length — Which Method to Use
          </h2>
          <table className="w-full text-sm min-w-[600px]">
            <thead>
              <tr className="text-left border-b border-optics-blue/30">
                <th className="pb-3 pr-4 text-optics-cyan">Method</th>
                <th className="pb-3 pr-4 text-optics-blue">Accuracy</th>
                <th className="pb-3 pr-4 text-optics-amber">Equipment</th>
                <th className="pb-3 pr-4 text-optics-purple">Lens Type</th>
                <th className="pb-3 text-optics-cyan">Difficulty</th>
              </tr>
            </thead>
            <tbody className="text-optics-blue/80">
              {comparisonData.map((row, i) => (
                <tr key={i} className="border-b border-optics-blue/10 hover:bg-optics-blue/5">
                  <td className="py-3 pr-4 font-medium text-optics-cyan">{row.method}</td>
                  <td className="py-3 pr-4">{row.accuracy}</td>
                  <td className="py-3 pr-4">{row.equipment}</td>
                  <td className="py-3 pr-4">{row.lensType}</td>
                  <td className="py-3">{row.difficulty}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.section>

        {/* Tips for Accurate Measurement */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-glass-strong rounded-xl p-6 mb-12 border border-optics-blue/30"
        >
          <h2 className="text-2xl font-display font-bold text-glow mb-6">
            Tips for Accurate Measurement
          </h2>
          <p className="text-optics-blue/80 mb-6">
            When learning how to measure focal length, avoid these common errors:
          </p>
          <div className="space-y-4">
            {tips.map((item, index) => (
              <div
                key={index}
                className="bg-optics-darker/50 rounded-lg p-4 border border-optics-blue/20"
              >
                <h3 className="font-semibold text-optics-amber mb-2">{item.error}</h3>
                <p className="text-optics-blue/80 text-sm">{item.tip}</p>
              </div>
            ))}
          </div>
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
