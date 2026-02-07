'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import LensCalculator from '../components/LensCalculator';

export default function HowToContent() {
  const [, setCalculatorParams] = useState({
    n: 1.5,
    R1: 0.1,
    R2: -0.1,
    focalLength: null as number | null,
  });

  const steps = [
    {
      number: 1,
      title: 'Identify Your Lens Type',
      content: 'First, determine what type of lens you have. This affects the sign convention for the radii.',
      details: [
        { type: 'Convex (Converging)', description: 'Thicker in the middle - magnifying glasses, camera lenses', result: 'Positive focal length' },
        { type: 'Concave (Diverging)', description: 'Thinner in the middle - myopia correction glasses', result: 'Negative focal length' },
        { type: 'Plano-convex/concave', description: 'One flat surface, one curved', result: 'One radius = infinity' },
      ],
    },
    {
      number: 2,
      title: 'Find the Refractive Index (n)',
      content: 'The refractive index describes how much light slows down in the lens material. Look up the value for your lens material.',
      materials: [
        { name: 'Crown Glass', n: '1.52', use: 'Standard optical glass' },
        { name: 'Flint Glass', n: '1.62', use: 'Higher dispersion optical glass' },
        { name: 'Acrylic (PMMA)', n: '1.49', use: 'Lightweight plastic lenses' },
        { name: 'Polycarbonate', n: '1.59', use: 'Impact-resistant lenses' },
        { name: 'Water', n: '1.33', use: 'Reference medium' },
      ],
    },
    {
      number: 3,
      title: 'Measure or Note the Radii of Curvature',
      content: 'Find R₁ (first surface) and R₂ (second surface). These are usually provided in lens specifications or can be measured with a spherometer.',
      tips: [
        'R₁ is the radius of the surface that light hits first',
        'R₂ is the radius of the surface that light exits from',
        'Use the same units for both radii (typically meters or centimeters)',
        'Flat surfaces have R = ∞ (infinity), meaning 1/R = 0',
      ],
    },
    {
      number: 4,
      title: 'Apply the Sign Convention',
      content: 'The sign convention is crucial for getting the correct result. Using the Cartesian convention:',
      conventions: [
        { condition: 'Convex surface facing light source (center of curvature on far side)', sign: 'Positive (+)', example: 'R₁ > 0 for biconvex' },
        { condition: 'Concave surface facing light source (center of curvature on near side)', sign: 'Negative (−)', example: 'R₁ < 0 for biconcave' },
        { condition: 'Flat surface', sign: 'R = ∞', example: '1/R = 0 in calculation' },
      ],
    },
    {
      number: 5,
      title: 'Calculate Using the Lens Maker Formula',
      content: 'Now apply the formula with your values:',
      formula: '1/f = (n - 1) × (1/R₁ - 1/R₂)',
      substeps: [
        'Calculate (n - 1) — this is the "lens power factor"',
        'Calculate 1/R₁ — if R₁ = ∞, this term is 0',
        'Calculate 1/R₂ — if R₂ = ∞, this term is 0',
        'Calculate (1/R₁ - 1/R₂)',
        'Multiply the results to get 1/f',
        'Take the reciprocal: f = 1/(1/f)',
      ],
    },
    {
      number: 6,
      title: 'Interpret Your Result',
      content: 'The sign and magnitude of f tell you about your lens:',
      interpretations: [
        { result: 'f > 0 (positive)', meaning: 'Converging lens - focuses parallel light to a real point' },
        { result: 'f < 0 (negative)', meaning: 'Diverging lens - spreads parallel light (virtual focal point)' },
        { result: 'Large |f|', meaning: 'Weak lens - long focal length, gentle focusing' },
        { result: 'Small |f|', meaning: 'Strong lens - short focal length, powerful focusing' },
      ],
    },
  ];

  return (
    <main className="min-h-screen relative z-10 pt-20 pb-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <ol className="flex items-center gap-2 text-optics-blue/60">
            <li><Link href="/" className="hover:text-optics-cyan transition-colors">Home</Link></li>
            <li>/</li>
            <li className="text-optics-cyan">How to Calculate Focal Length</li>
          </ol>
        </nav>

        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold text-glow-strong mb-4">
            How to Calculate Focal Length
          </h1>
          <p className="text-xl text-optics-blue/80 max-w-2xl mx-auto">
            A complete step-by-step guide to calculating the focal length of any lens using the 
            <strong className="text-optics-cyan"> lens maker formula</strong>. Includes examples, 
            common mistakes to avoid, and a free calculator.
          </p>
          <a href="#calculator" className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-gradient-to-r from-optics-blue to-optics-cyan text-optics-darker font-bold rounded-lg hover:shadow-[0_0_30px_rgba(0,217,255,0.5)] transition-all">
            Use Calculator Now ↓
          </a>
        </motion.header>

        {/* Quick Formula Reference */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-glass-strong rounded-xl p-6 mb-12 border border-optics-cyan/30"
        >
          <div className="text-center">
            <p className="text-sm text-optics-blue/60 mb-2 uppercase tracking-wider">The Focal Length Formula</p>
            <p className="text-3xl md:text-4xl font-mono text-optics-cyan font-bold mb-4">
              1/f = (n-1)(1/R₁ - 1/R₂)
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-optics-blue/70">
              <span><strong className="text-optics-cyan">f</strong> = focal length</span>
              <span><strong className="text-optics-amber">n</strong> = refractive index</span>
              <span><strong className="text-optics-purple">R₁</strong> = first surface radius</span>
              <span><strong className="text-optics-blue">R₂</strong> = second surface radius</span>
            </div>
          </div>
        </motion.div>

        {/* Step-by-Step Guide */}
        <div className="space-y-8 mb-12">
          {steps.map((step, index) => (
            <motion.section
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-optics-cyan to-optics-blue 
                              flex items-center justify-center text-optics-darker font-bold text-xl">
                  {step.number}
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-display font-bold text-glow mb-3">
                    {step.title}
                  </h2>
                  <p className="text-optics-blue/80 mb-4">{step.content}</p>

                  {/* Step 1: Lens Types */}
                  {step.details && (
                    <div className="grid md:grid-cols-3 gap-3">
                      {step.details.map((detail) => (
                        <div key={detail.type} className="bg-optics-darker/50 rounded-lg p-3 border border-optics-blue/20">
                          <p className="font-semibold text-optics-cyan text-sm">{detail.type}</p>
                          <p className="text-xs text-optics-blue/70 mt-1">{detail.description}</p>
                          <p className="text-xs text-optics-amber mt-1">{detail.result}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Step 2: Materials */}
                  {step.materials && (
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="text-left text-optics-blue/60">
                            <th className="pb-2">Material</th>
                            <th className="pb-2">n</th>
                            <th className="pb-2">Common Use</th>
                          </tr>
                        </thead>
                        <tbody className="text-optics-blue/80">
                          {step.materials.map((mat) => (
                            <tr key={mat.name} className="border-t border-optics-blue/10">
                              <td className="py-2 font-medium text-optics-cyan">{mat.name}</td>
                              <td className="py-2 font-mono">{mat.n}</td>
                              <td className="py-2">{mat.use}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {/* Step 3: Tips */}
                  {step.tips && (
                    <ul className="space-y-2">
                      {step.tips.map((tip, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-optics-blue/80">
                          <span className="text-optics-cyan mt-1">•</span>
                          {tip}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Step 4: Sign Convention */}
                  {step.conventions && (
                    <div className="space-y-3">
                      {step.conventions.map((conv, i) => (
                        <div key={i} className="bg-optics-darker/50 rounded-lg p-3 border border-optics-blue/20 flex items-center gap-4">
                          <div className={`w-16 h-8 rounded flex items-center justify-center font-mono font-bold ${
                            conv.sign.includes('+') ? 'bg-green-900/30 text-green-400' : 
                            conv.sign.includes('−') ? 'bg-red-900/30 text-red-400' : 
                            'bg-optics-blue/20 text-optics-cyan'
                          }`}>
                            {conv.sign}
                          </div>
                          <div className="flex-1">
                            <p className="text-sm text-optics-blue/80">{conv.condition}</p>
                            <p className="text-xs text-optics-blue/60 mt-1">Example: {conv.example}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Step 5: Formula & Substeps */}
                  {step.formula && (
                    <div className="bg-optics-darker/50 rounded-lg p-4 border border-optics-cyan/30 mb-4">
                      <p className="text-2xl font-mono text-optics-cyan font-bold text-center">{step.formula}</p>
                    </div>
                  )}
                  {step.substeps && (
                    <ol className="space-y-2">
                      {step.substeps.map((substep, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-optics-blue/80">
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-optics-blue/20 
                                         flex items-center justify-center text-optics-cyan text-xs font-bold">
                            {i + 1}
                          </span>
                          {substep}
                        </li>
                      ))}
                    </ol>
                  )}

                  {/* Step 6: Interpretations */}
                  {step.interpretations && (
                    <div className="grid md:grid-cols-2 gap-3">
                      {step.interpretations.map((interp, i) => (
                        <div key={i} className="bg-optics-darker/50 rounded-lg p-3 border border-optics-blue/20">
                          <p className="font-mono text-optics-cyan text-sm font-semibold">{interp.result}</p>
                          <p className="text-xs text-optics-blue/70 mt-1">{interp.meaning}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.section>
          ))}
        </div>

        {/* Worked Example */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-glass-strong rounded-xl p-6 mb-12 border border-optics-amber/30"
        >
          <h2 className="text-2xl font-display font-bold text-glow mb-6">
            Complete Worked Example
          </h2>
          <div className="bg-optics-darker/50 rounded-lg p-4 border border-optics-blue/20 mb-4">
            <p className="text-optics-blue/90 font-medium mb-2">Problem:</p>
            <p className="text-optics-blue/70">
              A biconvex lens made of crown glass has radii of curvature R₁ = +15 cm and R₂ = -20 cm. 
              Calculate the focal length.
            </p>
          </div>

          <div className="space-y-3 font-mono text-sm">
            <div className="bg-optics-darker/30 rounded p-3">
              <p className="text-optics-blue/60 mb-1">Step 1: Identify lens type</p>
              <p className="text-optics-cyan">Biconvex lens (converging) — expect positive f</p>
            </div>
            <div className="bg-optics-darker/30 rounded p-3">
              <p className="text-optics-blue/60 mb-1">Step 2: Refractive index</p>
              <p className="text-optics-cyan">Crown glass: n = 1.52</p>
            </div>
            <div className="bg-optics-darker/30 rounded p-3">
              <p className="text-optics-blue/60 mb-1">Step 3: Convert to meters</p>
              <p className="text-optics-cyan">R₁ = +0.15 m, R₂ = -0.20 m</p>
            </div>
            <div className="bg-optics-darker/30 rounded p-3">
              <p className="text-optics-blue/60 mb-1">Step 4: Sign convention ✓</p>
              <p className="text-optics-cyan">R₁ &gt; 0 (convex facing light), R₂ &lt; 0 (convex facing away)</p>
            </div>
            <div className="bg-optics-darker/30 rounded p-3">
              <p className="text-optics-blue/60 mb-1">Step 5: Calculate</p>
              <p className="text-optics-blue/80">1/f = (1.52 - 1) × (1/0.15 - 1/(-0.20))</p>
              <p className="text-optics-blue/80">1/f = 0.52 × (6.67 + 5.0)</p>
              <p className="text-optics-blue/80">1/f = 0.52 × 11.67 = 6.07</p>
              <p className="text-optics-amber font-bold text-lg mt-2">f = 1/6.07 = 0.165 m = 16.5 cm</p>
            </div>
            <div className="bg-optics-darker/30 rounded p-3">
              <p className="text-optics-blue/60 mb-1">Step 6: Interpret</p>
              <p className="text-green-400">✓ Positive focal length confirms converging lens</p>
              <p className="text-optics-cyan">Parallel light will focus 16.5 cm behind the lens</p>
            </div>
          </div>
        </motion.section>

        {/* Try It Yourself Calculator */}
        <motion.section
          id="calculator"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-2xl font-display font-bold text-glow mb-6 text-center">
            Try It Yourself — Free Calculator
          </h2>
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

        {/* Common Mistakes */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-glass-strong rounded-xl p-6 mb-12 border border-red-500/30"
        >
          <h2 className="text-2xl font-display font-bold text-glow mb-6">
            Common Mistakes to Avoid
          </h2>
          <div className="space-y-4">
            {[
              { mistake: 'Wrong sign convention', fix: 'Remember: convex surfaces facing light are positive, concave are negative. Draw a diagram if needed.' },
              { mistake: 'Forgetting to convert units', fix: 'Use consistent units throughout. If R is in cm, f will be in cm. Convert to meters for SI units.' },
              { mistake: 'Confusing R₁ and R₂', fix: 'R₁ is always the surface that light hits first. For lenses, this is typically the left surface when light comes from the left.' },
              { mistake: 'Using n of the surrounding medium', fix: 'The formula uses the refractive index of the lens material relative to air (n ≈ 1). If the lens is in water, use n_lens/n_water.' },
              { mistake: 'Ignoring thickness for thick lenses', fix: 'For thick lenses, use the modified formula: 1/f = (n-1)[1/R₁ - 1/R₂ + (n-1)d/(nR₁R₂)]' },
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4 bg-optics-darker/50 rounded-lg p-4 border border-optics-blue/20">
                <div className="flex-shrink-0 text-red-400 text-2xl">✗</div>
                <div>
                  <p className="font-semibold text-red-400">{item.mistake}</p>
                  <p className="text-optics-blue/70 text-sm mt-1"><strong className="text-green-400">Fix:</strong> {item.fix}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* FAQ */}
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
            {[
              {
                q: 'How do I calculate focal length of a lens?',
                a: 'Use the lens maker formula: 1/f = (n-1)(1/R₁ - 1/R₂). Find the refractive index (n) and radii of curvature (R₁, R₂), apply the correct sign convention, calculate 1/f, then take the reciprocal to get f.'
              },
              {
                q: 'What is the formula for focal length of a lens?',
                a: 'The focal length formula is 1/f = (n-1)(1/R₁ - 1/R₂), where f is focal length, n is refractive index of the lens material, and R₁ and R₂ are the radii of curvature of the two lens surfaces.'
              },
              {
                q: 'How do I find focal length from radius of curvature?',
                a: 'Use the lens maker formula with both radii. For a symmetric lens where |R₁| = |R₂| = R, the formula simplifies to f = R/(2(n-1)) for biconvex/biconcave, or f = R/(n-1) for plano-convex/plano-concave lenses.'
              },
              {
                q: 'Why is my focal length negative?',
                a: 'A negative focal length means you have a diverging (concave) lens. This is physically correct — diverging lenses have virtual focal points, indicated by negative f. Check your sign convention if this was unexpected.'
              },
              {
                q: 'Can I use this formula for thick lenses?',
                a: 'The basic lens maker formula assumes thin lenses. For thick lenses where thickness d is significant, use: 1/f = (n-1)[1/R₁ - 1/R₂ + (n-1)d/(nR₁R₂)]. Our thick lens calculator handles this automatically.'
              },
            ].map((item, index) => (
              <div key={index} className="bg-optics-darker/50 rounded-lg p-4 border border-optics-blue/20">
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
            <Link href="/focal-length">
              <motion.button whileHover={{ scale: 1.05 }} className="px-4 py-2 bg-optics-darker border border-optics-cyan/50 text-optics-cyan rounded-lg">
                Focal Length Calculator
              </motion.button>
            </Link>
            <Link href="/convex-lens-calculator">
              <motion.button whileHover={{ scale: 1.05 }} className="px-4 py-2 bg-optics-darker border border-optics-cyan/50 text-optics-cyan rounded-lg">
                Convex Lens Calculator
              </motion.button>
            </Link>
            <Link href="/concave-lens-calculator">
              <motion.button whileHover={{ scale: 1.05 }} className="px-4 py-2 bg-optics-darker border border-optics-purple/50 text-optics-purple rounded-lg">
                Concave Lens Calculator
              </motion.button>
            </Link>
            <Link href="/thick-lens">
              <motion.button whileHover={{ scale: 1.05 }} className="px-4 py-2 bg-optics-darker border border-optics-amber/50 text-optics-amber rounded-lg">
                Thick Lens Calculator
              </motion.button>
            </Link>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
