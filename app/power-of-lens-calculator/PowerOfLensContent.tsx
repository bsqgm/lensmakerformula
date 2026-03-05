'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

type CalcMode = 'f-to-p' | 'p-to-f';
type FocalLengthUnit = 'm' | 'cm' | 'mm';

export default function PowerOfLensContent() {
  const [mode, setMode] = useState<CalcMode>('f-to-p');
  const [focalLength, setFocalLength] = useState<string>('0.5');
  const [focalUnit, setFocalUnit] = useState<FocalLengthUnit>('m');
  const [diopters, setDiopters] = useState<string>('2');
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const convertFocalToMeters = (val: number, unit: FocalLengthUnit): number => {
    if (unit === 'm') return val;
    if (unit === 'cm') return val / 100;
    return val / 1000;
  };

  const formatFocalLength = (fMeters: number): string => {
    const abs = Math.abs(fMeters);
    if (abs >= 1) return `${fMeters >= 0 ? '+' : ''}${fMeters.toFixed(4)} m`;
    if (abs >= 0.01) return `${fMeters >= 0 ? '+' : ''}${(fMeters * 100).toFixed(2)} cm`;
    return `${fMeters >= 0 ? '+' : ''}${(fMeters * 1000).toFixed(2)} mm`;
  };

  useEffect(() => {
    setError(null);
    setResult(null);

    if (mode === 'f-to-p') {
      const f = parseFloat(focalLength);
      if (isNaN(f) || f === 0) {
        if (focalLength !== '' && focalLength !== '-') setError('Enter a valid non-zero focal length');
        return;
      }
      const fMeters = convertFocalToMeters(f, focalUnit);
      const p = 1 / fMeters;
      setResult(`${p >= 0 ? '+' : ''}${p.toFixed(2)} D`);
    } else {
      const p = parseFloat(diopters);
      if (isNaN(p) || p === 0) {
        if (diopters !== '' && diopters !== '-') setError('Enter a valid non-zero power');
        return;
      }
      const fMeters = 1 / p;
      setResult(formatFocalLength(fMeters));
    }
  }, [mode, focalLength, focalUnit, diopters]);

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
            <li aria-hidden="true">&gt;</li>
            <li className="text-optics-cyan">Power of Lens Calculator</li>
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
            Power of Lens Calculator
          </h1>
          <p className="text-xl text-optics-blue/80 leading-relaxed">
            Convert between <strong className="text-optics-cyan">focal length</strong> and{' '}
            <strong className="text-optics-amber">diopters</strong> using P = 1/f. Understand lens
            power in optometry, eyeglass prescriptions, and optical design.
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

        {/* Calculator Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          id="calculator"
          className="mb-16"
        >
          <h2 className="text-3xl font-display font-bold text-glow mb-6">
            P = 1/f Calculator
          </h2>
          <div className="bg-glass-strong rounded-2xl p-8 md:p-10 border border-optics-cyan shadow-2xl">
            {/* Mode Toggle */}
            <div className="flex gap-3 mb-8">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setMode('f-to-p')}
                className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all border-2 ${
                  mode === 'f-to-p'
                    ? 'bg-optics-blue/20 border-optics-blue text-optics-cyan'
                    : 'bg-optics-darker/50 border-optics-blue/30 text-optics-blue/70 hover:border-optics-cyan'
                }`}
              >
                Focal Length → Power
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setMode('p-to-f')}
                className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all border-2 ${
                  mode === 'p-to-f'
                    ? 'bg-optics-blue/20 border-optics-cyan text-optics-cyan'
                    : 'bg-optics-darker/50 border-optics-blue/30 text-optics-blue/70 hover:border-optics-cyan'
                }`}
              >
                Power → Focal Length
              </motion.button>
            </div>

            {/* Formula Display */}
            <div className="mb-8 p-6 bg-optics-darker rounded-xl border border-optics-cyan">
              <p className="text-sm text-optics-blue/60 mb-2 uppercase tracking-wider">Formula</p>
              <p className="text-2xl md:text-3xl font-mono font-bold text-optics-cyan text-glow">
                P = 1/f
              </p>
              <p className="text-sm text-optics-blue/70 mt-2">
                P in diopters (D), f in meters (m)
              </p>
            </div>

            {/* Inputs by Mode */}
            <AnimatePresence mode="wait">
              {mode === 'f-to-p' ? (
                <motion.div
                  key="f-to-p"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-6"
                >
                  <div>
                    <label className="block text-sm font-medium text-optics-blue/90 mb-2 uppercase tracking-wider">
                      Focal Length (f)
                    </label>
                    <div className="flex gap-3">
                      <input
                        type="number"
                        step="any"
                        value={focalLength}
                        onChange={(e) => setFocalLength(e.target.value)}
                        className="flex-1 px-5 py-4 bg-optics-darker border-2 border-optics-blue/30 rounded-lg text-optics-cyan text-xl font-mono focus:outline-none focus:border-optics-cyan transition-all"
                        placeholder="0.5"
                      />
                      <select
                        value={focalUnit}
                        onChange={(e) => setFocalUnit(e.target.value as FocalLengthUnit)}
                        className="px-4 py-4 bg-optics-darker border-2 border-optics-blue/30 rounded-lg text-optics-cyan font-mono focus:outline-none focus:border-optics-cyan"
                      >
                        <option value="m">m</option>
                        <option value="cm">cm</option>
                        <option value="mm">mm</option>
                      </select>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="p-to-f"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <label className="block text-sm font-medium text-optics-blue/90 mb-2 uppercase tracking-wider">
                    Lens Power (P)
                  </label>
                  <div className="flex items-center gap-3">
                    <input
                      type="number"
                      step="any"
                      value={diopters}
                      onChange={(e) => setDiopters(e.target.value)}
                      className="flex-1 px-5 py-4 bg-optics-darker border-2 border-optics-blue/30 rounded-lg text-optics-cyan text-xl font-mono focus:outline-none focus:border-optics-cyan transition-all"
                      placeholder="2"
                    />
                    <span className="text-optics-blue/60 font-mono">diopters (D)</span>
                  </div>
                  <p className="text-xs text-optics-blue/50 mt-2">Use + for converging, − for diverging</p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Result */}
            <AnimatePresence mode="wait">
              {error ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-8 p-6 bg-red-900/20 border border-red-500/30 rounded-xl"
                >
                  <p className="text-red-400">{error}</p>
                </motion.div>
              ) : result ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                  className="mt-8 p-8 bg-gradient-to-br from-optics-blue/10 to-optics-cyan/10 border-2 border-optics-cyan rounded-xl"
                >
                  <p className="text-sm text-optics-blue/70 mb-2 uppercase tracking-wider">
                    {mode === 'f-to-p' ? 'Lens Power' : 'Focal Length'}
                  </p>
                  <p className="text-4xl md:text-5xl font-mono font-bold text-optics-cyan text-glow-strong">
                    {result}
                  </p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        </motion.section>

        {/* Understanding Lens Power */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-display font-bold text-glow mb-6">
            Understanding Lens Power
          </h2>
          <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
            <p className="text-optics-blue/90 mb-6 leading-relaxed">
              <strong className="text-optics-cyan">Diopters (D)</strong> measure the optical power of a lens.
              Power is defined as P = 1/f, where f is the focal length in <strong className="text-optics-amber">meters</strong>.
              A lens with f = 0.5 m has power +2.0 D; a lens with f = −0.25 m has power −4.0 D.
            </p>
            <div className="bg-optics-darker rounded-xl p-6 border border-optics-cyan text-center">
              <p className="text-2xl font-mono font-bold text-optics-cyan text-glow mb-2">P = 1/f</p>
              <p className="text-sm text-optics-blue/70">
                Positive P → converging (convex) lens; Negative P → diverging (concave) lens
              </p>
            </div>
          </div>
        </motion.section>

        {/* Relationship to Lens Maker Formula */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-display font-bold text-glow mb-6">
            Relationship to Lens Maker Formula
          </h2>
          <div className="bg-glass-strong rounded-xl p-6 border border-optics-purple/30">
            <p className="text-optics-blue/90 mb-4 leading-relaxed">
              The power of a lens is directly related to the lens maker formula. For a thin lens:
            </p>
            <div className="bg-optics-darker rounded-xl p-6 border border-optics-purple">
              <p className="text-2xl font-mono font-bold text-optics-purple text-glow">
                P = (n − 1)(1/R₁ − 1/R₂)
              </p>
            </div>
            <p className="text-optics-blue/80 text-sm mt-4">
              Since 1/f = (n−1)(1/R₁ − 1/R₂), we have <strong className="text-optics-cyan">P = 1/f</strong>.
              Power combines refractive index and curvature into a single number.
            </p>
            <Link href="/lens-maker-equation" className="inline-block mt-6 text-optics-cyan hover:underline">
              Learn the Lens Maker Equation →
            </Link>
          </div>
        </motion.section>

        {/* Practical Applications */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-display font-bold text-glow mb-6">
            Practical Applications
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { title: 'Eyeglass prescriptions', desc: 'Optometrists prescribe lens power in diopters. −2.0 D corrects mild myopia.', border: 'border-optics-cyan' },
              { title: 'Optometry', desc: 'Diopters standardize lens strength for vision correction and contact lenses.', border: 'border-optics-blue' },
              { title: 'Optical design', desc: 'Engineers use power for camera lenses, telescopes, and microscope objectives.', border: 'border-optics-amber' },
            ].map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`bg-glass-strong rounded-xl p-5 border ${item.border} border-opacity-50`}
              >
                <h3 className="font-semibold text-glow mb-3">{item.title}</h3>
                <p className="text-optics-blue/80 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Combined Lens Power */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-display font-bold text-glow mb-6">
            Combined Lens Power
          </h2>
          <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
            <p className="text-optics-blue/90 mb-4">
              For <strong className="text-optics-cyan">thin lenses in contact</strong>, powers add:
            </p>
            <div className="bg-optics-darker rounded-xl p-6 border border-optics-cyan text-center mb-4">
              <p className="text-2xl font-mono font-bold text-optics-cyan">P<sub>total</sub> = P₁ + P₂</p>
            </div>
            <p className="text-optics-blue/80 text-sm">
              Example: A +2.0 D and a +3.0 D lens in contact give 5.0 D total. For separated lenses, use the effective power formula.
            </p>
            <Link href="/lens-combination" className="inline-block mt-4 text-optics-cyan hover:underline">
              Lens Combination Calculator →
            </Link>
          </div>
        </motion.section>

        {/* Common Prescription Values */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-display font-bold text-glow mb-6">
            Common Prescription Values
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-glass-strong rounded-xl border border-optics-blue overflow-hidden">
              <thead>
                <tr className="border-b border-optics-blue">
                  <th className="px-4 py-3 text-left text-optics-cyan font-semibold">Condition</th>
                  <th className="px-4 py-3 text-left text-optics-cyan font-semibold">Typical Power</th>
                  <th className="px-4 py-3 text-left text-optics-cyan font-semibold">Focal Length</th>
                </tr>
              </thead>
              <tbody className="text-optics-blue/80 text-sm">
                <tr className="border-b border-optics-blue/30"><td className="px-4 py-3">Mild myopia</td><td className="px-4 py-3 font-mono text-optics-amber">−0.5 to −2.0 D</td><td className="px-4 py-3">−50 cm to −1 m</td></tr>
                <tr className="border-b border-optics-blue/30"><td className="px-4 py-3">Moderate myopia</td><td className="px-4 py-3 font-mono text-optics-amber">−2.0 to −6.0 D</td><td className="px-4 py-3">−17 cm to −50 cm</td></tr>
                <tr className="border-b border-optics-blue/30"><td className="px-4 py-3">Severe myopia</td><td className="px-4 py-3 font-mono text-optics-amber">&gt; −6.0 D</td><td className="px-4 py-3">&lt; −17 cm</td></tr>
                <tr className="border-b border-optics-blue/30"><td className="px-4 py-3">Mild hyperopia</td><td className="px-4 py-3 font-mono text-optics-cyan">+0.5 to +2.0 D</td><td className="px-4 py-3">50 cm to 2 m</td></tr>
                <tr className="border-b border-optics-blue/30"><td className="px-4 py-3">Moderate hyperopia</td><td className="px-4 py-3 font-mono text-optics-cyan">+2.0 to +5.0 D</td><td className="px-4 py-3">20 cm to 50 cm</td></tr>
                <tr><td className="px-4 py-3">Reading glasses</td><td className="px-4 py-3 font-mono text-optics-purple">+1.0 to +3.0 D</td><td className="px-4 py-3">33 cm to 1 m</td></tr>
              </tbody>
            </table>
          </div>
        </motion.section>

        {/* FAQ Section */}
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
              { q: 'What is the formula for power of a lens?', a: 'The power of a lens is P = 1/f, where P is the power in diopters (D) and f is the focal length in meters. A lens with a focal length of 0.5 m has a power of +2.0 D. Positive power means converging, negative means diverging.' },
              { q: 'How do I convert diopters to focal length?', a: 'To convert diopters to focal length: f = 1/P. For example, a +3.0 D lens has a focal length of 1/3 = 0.333 meters (33.3 cm). A −2.5 D lens has a focal length of 1/(−2.5) = −0.4 meters (−40 cm).' },
              { q: 'What does a negative lens power mean?', a: 'Negative lens power indicates a diverging (concave) lens. It spreads light rays apart and is used to correct myopia (nearsightedness). For example, a prescription of −3.0 D means a concave lens with a focal length of −33.3 cm.' },
              { q: 'Why is focal length in meters for diopters?', a: 'The diopter is defined as 1/meter. Using meters keeps the formula simple: P = 1/f. If f is in cm, you must convert: P = 100/f (cm).' },
            ].map((item, i) => (
              <div key={i} className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
                <h3 className="font-semibold text-optics-cyan mb-3">{item.q}</h3>
                <p className="text-optics-blue/80 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Related Links */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl font-display font-bold text-glow mb-6">
            Related Resources
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/focal-length">
              <motion.div whileHover={{ scale: 1.02 }} className="bg-glass-strong rounded-xl p-4 border border-optics-blue/30 hover:border-optics-cyan transition-all h-full">
                <h3 className="font-semibold text-optics-cyan mb-2">Focal Length</h3>
                <p className="text-optics-blue/70 text-sm">Focal length calculator and guide.</p>
              </motion.div>
            </Link>
            <Link href="/lens-combination">
              <motion.div whileHover={{ scale: 1.02 }} className="bg-glass-strong rounded-xl p-4 border border-optics-blue/30 hover:border-optics-cyan transition-all h-full">
                <h3 className="font-semibold text-optics-cyan mb-2">Lens Combination</h3>
                <p className="text-optics-blue/70 text-sm">Combine lens powers.</p>
              </motion.div>
            </Link>
            <Link href="/magnification">
              <motion.div whileHover={{ scale: 1.02 }} className="bg-glass-strong rounded-xl p-4 border border-optics-blue/30 hover:border-optics-purple transition-all h-full">
                <h3 className="font-semibold text-optics-purple mb-2">Magnification</h3>
                <p className="text-optics-blue/70 text-sm">Lens magnification calculator.</p>
              </motion.div>
            </Link>
            <Link href="/convex-lens-calculator">
              <motion.div whileHover={{ scale: 1.02 }} className="bg-glass-strong rounded-xl p-4 border border-optics-blue/30 hover:border-optics-amber transition-all h-full">
                <h3 className="font-semibold text-optics-amber mb-2">Convex Lens Calculator</h3>
                <p className="text-optics-blue/70 text-sm">Calculate convex lens properties.</p>
              </motion.div>
            </Link>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
