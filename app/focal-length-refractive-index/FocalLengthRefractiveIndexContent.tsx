'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import LensCalculator from '../components/LensCalculator';

const MATERIALS = [
  { name: 'Crown Glass', n: 1.52 },
  { name: 'Flint Glass', n: 1.62 },
  { name: 'Polycarbonate', n: 1.59 },
  { name: 'Sapphire', n: 1.77 },
  { name: 'Diamond', n: 2.42 },
];

function calcFocalLength(n: number, R1Cm: number, R2Cm: number): number | null {
  if (n <= 1 || R1Cm === 0 || R2Cm === 0) return null;
  const R1 = R1Cm / 100;
  const R2 = R2Cm / 100;
  const denom = (n - 1) * (1 / R1 - 1 / R2);
  if (Math.abs(denom) < 1e-9) return null;
  return 1 / denom;
}

export default function FocalLengthRefractiveIndexContent() {
  const [r1, setR1] = useState(10);
  const [r2, setR2] = useState(-10);

  const comparisonRows = useMemo(() => {
    return MATERIALS.map((mat) => {
      const f = calcFocalLength(mat.n, r1, r2);
      return {
        ...mat,
        focalLength: f,
      };
    });
  }, [r1, r2]);

  return (
    <main className="min-h-screen relative z-10 pt-20 pb-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <ol className="flex items-center gap-2 text-optics-blue/60">
            <li>
              <Link href="/" className="hover:text-optics-cyan transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li className="text-optics-cyan">Focal Length & Refractive Index</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold text-glow-strong mb-6">
            How Refractive Index Affects Focal Length
          </h1>
          <p className="text-xl text-optics-blue/80 leading-relaxed">
            Understand the relationship between focal length and refractive index. Learn how changing
            the refractive index affects focal length using the lens maker formula, compare different
            materials interactively, and explore practical implications for eyeglasses and optics.
          </p>
          <Link href="#calculator">
            <motion.span
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-gradient-to-r from-optics-blue to-optics-cyan text-optics-darker font-bold rounded-lg hover:shadow-[0_0_30px_rgba(0,217,255,0.5)] transition-all cursor-pointer"
            >
              Use Calculator Now ↓
            </motion.span>
          </Link>
        </motion.header>

        {/* Section 1: The Relationship */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          id="relationship"
          className="mb-16"
        >
          <h2 className="text-3xl font-display font-bold text-glow mb-6">
            The Relationship
          </h2>
          <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
            <p className="text-optics-blue/90 leading-relaxed mb-6">
              From the lens maker formula:
            </p>
            <div className="bg-optics-darker rounded-xl p-8 border-2 border-optics-cyan/40 text-center mb-6">
              <p className="text-3xl md:text-4xl font-mono text-optics-cyan font-bold">
                1/f = (n − 1)(1/R₁ − 1/R₂)
              </p>
            </div>
            <p className="text-optics-blue/90 leading-relaxed mb-4">
              As refractive index <span className="font-mono text-optics-cyan font-bold">n</span>{' '}
              increases, the term <span className="font-mono text-optics-amber">(n − 1)</span>{' '}
              increases. This makes <span className="font-mono text-optics-purple">1/f</span> larger
              and therefore <span className="font-mono text-optics-cyan">f</span> smaller. In short:{' '}
              <strong className="text-optics-cyan">higher n → shorter f (stronger lens)</strong>.
            </p>
            <p className="text-optics-blue/80 text-sm">
              Example: a lens with n = 1.8 will have a shorter focal length than the same shape lens
              with n = 1.5, because higher refractive index bends light more strongly.
            </p>
          </div>
        </motion.section>

        {/* Section 2: Interactive Material Comparison */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          id="material-comparison"
          className="mb-16"
        >
          <h2 className="text-3xl font-display font-bold text-glow mb-6">
            Interactive Material Comparison
          </h2>
          <p className="text-optics-blue/80 leading-relaxed mb-6">
            Enter R₁ and R₂ (in cm) to compare focal lengths for different lens materials. Notice how focal length decreases as refractive index increases.
          </p>

          <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30 mb-6">
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-optics-blue/90 mb-2">R₁ (cm)</label>
                <input
                  type="number"
                  step="0.1"
                  value={r1}
                  onChange={(e) => setR1(parseFloat(e.target.value) || 0)}
                  className="w-full px-4 py-3 bg-optics-darker/70 border border-optics-blue/30 rounded-lg text-optics-cyan font-mono focus:outline-none focus:border-optics-cyan"
                />
                <p className="text-xs text-optics-blue/50 mt-1">Convex: positive, concave: negative</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-optics-blue/90 mb-2">R₂ (cm)</label>
                <input
                  type="number"
                  step="0.1"
                  value={r2}
                  onChange={(e) => setR2(parseFloat(e.target.value) || 0)}
                  className="w-full px-4 py-3 bg-optics-darker/70 border border-optics-blue/30 rounded-lg text-optics-cyan font-mono focus:outline-none focus:border-optics-cyan"
                />
                <p className="text-xs text-optics-blue/50 mt-1">Convex: negative, concave: positive (typical)</p>
              </div>
            </div>

            <p className="text-sm text-optics-cyan/90 mb-3 border-l-2 border-optics-cyan pl-3">
              Higher n → shorter f (stronger lens). Compare focal lengths in the table below.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full bg-optics-darker rounded-xl border border-optics-blue/20 overflow-hidden">
                <thead>
                  <tr className="border-b border-optics-blue/30">
                    <th className="px-4 py-3 text-left text-optics-cyan font-semibold">Material</th>
                    <th className="px-4 py-3 text-left text-optics-cyan font-semibold">n</th>
                    <th className="px-4 py-3 text-left text-optics-cyan font-semibold">Focal Length (m)</th>
                  </tr>
                </thead>
                <caption className="text-left text-sm text-optics-blue/70 py-2 px-4 bg-optics-darker/50">
                  Focal length decreases as n increases—Diamond has the shortest f.
                </caption>
                <tbody className="text-optics-blue/90">
                  {comparisonRows.map((row) => (
                    <tr
                      key={row.name}
                      className="border-b border-optics-blue/20 last:border-b-0"
                    >
                      <td className="px-4 py-3 font-medium text-optics-blue/90">{row.name}</td>
                      <td className="px-4 py-3 font-mono text-optics-amber">{row.n}</td>
                      <td className="px-4 py-3 font-mono text-optics-cyan">
                        {row.focalLength != null ? (
                          <span>
                            {row.focalLength > 0 ? '+' : ''}
                            {row.focalLength.toFixed(4)}
                          </span>
                        ) : (
                          <span className="text-optics-blue/50">—</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.section>

        {/* Section 3: Simplified Formulas */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          id="simplified-formulas"
          className="mb-16"
        >
          <h2 className="text-3xl font-display font-bold text-glow mb-6">
            Simplified Formulas
          </h2>
          <p className="text-optics-blue/80 leading-relaxed mb-6">
            For special lens shapes, the formula simplifies and the n–f relationship becomes even clearer:
          </p>

          <div className="space-y-6">
            <div className="bg-glass-strong rounded-xl p-6 border border-optics-cyan/30">
              <h3 className="text-xl font-semibold text-optics-cyan mb-3">Symmetric Biconvex Lens</h3>
              <p className="text-optics-blue/80 text-sm mb-3">
                When R₁ = R and R₂ = −R (equal radii, opposite signs):
              </p>
              <div className="bg-optics-darker rounded-lg p-6 border border-optics-cyan/20">
                <p className="font-mono text-optics-cyan text-xl md:text-2xl">
                  f = R / [2(n − 1)]
                </p>
              </div>
              <p className="text-optics-blue/70 text-sm mt-2">
                Directly shows: f ∝ 1/(n−1). Higher n → smaller f.
              </p>
            </div>

            <div className="bg-glass-strong rounded-xl p-6 border border-optics-amber/30">
              <h3 className="text-xl font-semibold text-optics-amber mb-3">Plano-Convex Lens</h3>
              <p className="text-optics-blue/80 text-sm mb-3">
                When one surface is flat (R₂ = ∞):
              </p>
              <div className="bg-optics-darker rounded-lg p-6 border border-optics-amber/20">
                <p className="font-mono text-optics-cyan text-xl md:text-2xl">
                  f = R / (n − 1)
                </p>
              </div>
              <p className="text-optics-blue/70 text-sm mt-2">
                Same relationship: f ∝ 1/(n−1).
              </p>
            </div>
          </div>
        </motion.section>

        {/* Section 4: Lens in Different Media */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          id="different-media"
          className="mb-16"
        >
          <h2 className="text-3xl font-display font-bold text-glow mb-6">
            Lens in Different Media
          </h2>
          <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
            <p className="text-optics-blue/90 leading-relaxed mb-6">
              When the lens is immersed in a medium other than air, use the{' '}
              <strong className="text-optics-cyan">relative refractive index</strong>:
            </p>
            <div className="bg-optics-darker rounded-xl p-6 border-2 border-optics-purple/40 text-center mb-6">
              <p className="text-2xl md:text-3xl font-mono text-optics-purple font-bold">
                n<sub>rel</sub> = n<sub>lens</sub> / n<sub>medium</sub>
              </p>
              <p className="text-sm text-optics-blue/60 mt-2">
                1/f = (n_rel − 1)(1/R₁ − 1/R₂)
              </p>
            </div>
            <p className="text-optics-blue/90 leading-relaxed">
              A glass lens (n ≈ 1.5) in water (n ≈ 1.33) has n_rel ≈ 1.13, much smaller than 1.5 in
              air. The focal length becomes longer because the relative bending power is reduced.
            </p>
          </div>
        </motion.section>

        {/* Section 5: Practical Implications */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          id="practical"
          className="mb-16"
        >
          <h2 className="text-3xl font-display font-bold text-glow mb-6">
            Practical Implications
          </h2>
          <div className="space-y-4">
            <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
              <h3 className="text-xl font-semibold text-optics-cyan mb-3">High-Index Glass Makes Thinner Lenses</h3>
              <p className="text-optics-blue/80 leading-relaxed">
                For eyeglasses, the same prescription can be achieved with thinner lenses by using
                high-index materials (n ≈ 1.67–1.74). Higher n means the lens needs less curvature to
                reach the same focal length, so the lens can be flatter and thinner at the edges.
              </p>
            </div>
            <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
              <h3 className="text-xl font-semibold text-optics-amber mb-3">Eyeglass Material Choices</h3>
              <p className="text-optics-blue/80 leading-relaxed">
                Crown glass (n ≈ 1.52) is classic but thick for strong prescriptions. Polycarbonate
                (n ≈ 1.59) and high-index plastics (n ≈ 1.67+) allow thinner, lighter glasses. The
                trade-off: higher n often means more chromatic dispersion and cost.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Section 6: Calculator */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          id="calculator"
          className="mb-16"
        >
          <h2 className="text-3xl font-display font-bold text-glow mb-6">
            Focal Length Calculator
          </h2>
          <p className="text-optics-blue/80 leading-relaxed mb-6">
            Use the calculator below to compute focal length for any refractive index and radii.
          </p>
          <LensCalculator />
        </motion.section>

        {/* Section 7: FAQ */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          id="faq"
          className="mb-16"
        >
          <h2 className="text-3xl font-display font-bold text-glow mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                q: 'How does refractive index affect focal length?',
                a: 'Higher refractive index results in shorter focal length (stronger lens). From 1/f = (n-1)(1/R₁ - 1/R₂), as n increases, (n-1) increases, making 1/f larger and f smaller. A lens with n=1.8 will have a shorter focal length than the same shape lens with n=1.5.',
              },
              {
                q: 'What is the focal length formula in terms of refractive index?',
                a: 'The focal length in terms of refractive index is: f = 1/[(n-1)(1/R₁ - 1/R₂)]. For a symmetric biconvex lens with radius R: f = R/[2(n-1)]. For a plano-convex lens: f = R/(n-1).',
              },
              {
                q: 'Can I change focal length by changing the medium?',
                a: 'Yes. When a lens is immersed in a medium other than air, use the relative refractive index n_rel = n_lens/n_medium. The formula becomes 1/f = (n_rel - 1)(1/R₁ - 1/R₂). A glass lens in water has a longer focal length than in air because the relative refractive index is smaller.',
              },
              {
                q: 'Why do high-index eyeglasses make thinner lenses?',
                a: 'For the same optical power (diopters), a higher refractive index lens needs less curvature. Less curvature means flatter surfaces and thinner edges, so high-index materials allow thinner, lighter prescription lenses.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
                <h3 className="font-semibold text-optics-cyan mb-3">{item.q}</h3>
                <p className="text-optics-blue/80 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Section 8: Related Links */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          id="related"
          className="mb-16"
        >
          <h2 className="text-2xl font-display font-bold text-glow mb-6">
            Related Links
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/refractive-index">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-glass-strong rounded-xl p-4 border border-optics-blue/30 hover:border-optics-cyan/50 transition-all h-full"
              >
                <h3 className="font-semibold text-optics-cyan mb-2">Refractive Index</h3>
                <p className="text-optics-blue/70 text-sm">
                  Learn about refractive index and how to measure it.
                </p>
              </motion.div>
            </Link>
            <Link href="/materials">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-glass-strong rounded-xl p-4 border border-optics-blue/30 hover:border-optics-amber/50 transition-all h-full"
              >
                <h3 className="font-semibold text-optics-amber mb-2">Materials</h3>
                <p className="text-optics-blue/70 text-sm">
                  Optical materials and their refractive indices.
                </p>
              </motion.div>
            </Link>
            <Link href="/focal-length-formula">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-glass-strong rounded-xl p-4 border border-optics-blue/30 hover:border-optics-purple/50 transition-all h-full"
              >
                <h3 className="font-semibold text-optics-purple mb-2">Focal Length Formula</h3>
                <p className="text-optics-blue/70 text-sm">
                  Complete guide to the focal length formula.
                </p>
              </motion.div>
            </Link>
            <Link href="/focal-length-equation">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-glass-strong rounded-xl p-4 border border-optics-blue/30 hover:border-optics-cyan/50 transition-all h-full"
              >
                <h3 className="font-semibold text-optics-cyan mb-2">Focal Length Equation</h3>
                <p className="text-optics-blue/70 text-sm">
                  All forms of the focal length equation.
                </p>
              </motion.div>
            </Link>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
