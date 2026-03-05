'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const MATERIALS = [
  { label: 'BK7', n: 1.517 },
  { label: 'Sapphire', n: 1.768 },
  { label: 'Fused Silica', n: 1.458 },
  { label: 'LaSFN9', n: 1.85 },
  { label: 'N-SF11', n: 1.785 },
  { label: 'Custom', n: null },
] as const;

const MATERIALS_TABLE = [
  { material: 'BK7', n: 1.517, transmission: '350 nm – 2 μm' },
  { material: 'Sapphire', n: 1.768, transmission: '150 nm – 5.5 μm' },
  { material: 'Fused Silica', n: 1.458, transmission: '180 nm – 2.2 μm' },
  { material: 'LaSFN9', n: 1.85, transmission: '400 nm – 2.5 μm' },
  { material: 'N-SF11', n: 1.785, transmission: '365 nm – 2.5 μm' },
  { material: 'Ruby', n: 1.77, transmission: '400 nm – 3 μm' },
  { material: 'Zinc Selenide', n: 2.4, transmission: '600 nm – 18 μm' },
];

export default function BallLensContent() {
  const [radiusMm, setRadiusMm] = useState<string>('1');
  const [diameterMm, setDiameterMm] = useState<string>('2');
  const [materialKey, setMaterialKey] = useState<string>('BK7');
  const [customN, setCustomN] = useState<string>('1.517');
  const [efl, setEfl] = useState<number | null>(null);
  const [bfl, setBfl] = useState<number | null>(null);
  const [na, setNa] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const currentN = materialKey === 'Custom'
    ? (parseFloat(customN) || 0)
    : (MATERIALS.find(m => m.label === materialKey)?.n ?? 1.517);

  const handleRadiusChange = (value: string) => {
    setRadiusMm(value);
    const r = parseFloat(value);
    if (!isNaN(r) && r > 0) setDiameterMm((2 * r).toFixed(value.includes('.') ? 4 : 0));
  };

  const handleDiameterChange = (value: string) => {
    setDiameterMm(value);
    const d = parseFloat(value);
    if (!isNaN(d) && d > 0) setRadiusMm((d / 2).toFixed(value.includes('.') ? 4 : 0));
  };

  useEffect(() => {
    setError(null);
    const R = parseFloat(radiusMm);
    if (isNaN(R) || R <= 0) {
      setEfl(null);
      setBfl(null);
      setNa(null);
      if (radiusMm !== '' && radiusMm !== '-') setError('Radius must be positive');
      return;
    }
    if (currentN <= 1) {
      setEfl(null);
      setBfl(null);
      setNa(null);
      setError('Refractive index must be > 1');
      return;
    }
    // f = nR/2(n-1), BFL = R(2-n)/2(n-1), NA ≈ R/f
    const nMinus1 = currentN - 1;
    const denom = 2 * nMinus1;
    const f = (currentN * R) / denom;
    const bflVal = (R * (2 - currentN)) / denom;
    const naVal = R / f;
    setEfl(f);
    setBfl(bflVal);
    setNa(naVal);
  }, [radiusMm, materialKey, customN, currentN]);

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
            <li aria-hidden="true">/</li>
            <li className="text-optics-cyan">Ball Lens Calculator</li>
          </ol>
        </nav>

        {/* Hero */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold text-glow-strong mb-6">
            Ball Lens Calculator
          </h1>
          <p className="text-xl text-optics-blue/80 leading-relaxed">
            Calculate the effective focal length, back focal length, and numerical aperture of ball
            lenses using the formula <span className="font-mono text-optics-cyan">f = nR/2(n-1)</span>.
            Ideal for fiber coupling, collimation, and short focal length optics.
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

        {/* Calculator */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          id="calculator"
          className="mb-16"
        >
          <h2 className="text-3xl font-display font-bold text-glow mb-6">
            Ball Lens Calculator
          </h2>
          <div className="bg-glass-strong rounded-xl p-8 border border-optics-blue">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-optics-cyan font-semibold mb-2">Radius R (mm)</label>
                  <input
                    type="number"
                    value={radiusMm}
                    onChange={(e) => handleRadiusChange(e.target.value)}
                    step="0.01"
                    min="0.01"
                    className="w-full px-4 py-3 bg-optics-darker rounded-lg border border-optics-cyan text-optics-blue focus:outline-none focus:ring-2 focus:ring-optics-cyan/50"
                    placeholder="e.g. 1"
                  />
                </div>
                <div>
                  <label className="block text-optics-blue font-semibold mb-2">Diameter D (mm)</label>
                  <input
                    type="number"
                    value={diameterMm}
                    onChange={(e) => handleDiameterChange(e.target.value)}
                    step="0.01"
                    min="0.02"
                    className="w-full px-4 py-3 bg-optics-darker rounded-lg border border-optics-blue text-optics-blue focus:outline-none focus:ring-2 focus:ring-optics-blue/50"
                    placeholder="e.g. 2"
                  />
                </div>
              </div>
              <div>
                <label className="block text-optics-cyan font-semibold mb-2">Refractive index n</label>
                <select
                  value={materialKey}
                  onChange={(e) => setMaterialKey(e.target.value)}
                  className="w-full px-4 py-3 bg-optics-darker rounded-lg border border-optics-cyan text-optics-blue focus:outline-none focus:ring-2 focus:ring-optics-cyan/50"
                >
                  {MATERIALS.map((m) => (
                    <option key={m.label} value={m.label}>
                      {m.label} {m.n != null ? `(${m.n})` : ''}
                    </option>
                  ))}
                </select>
                {materialKey === 'Custom' && (
                  <input
                    type="number"
                    value={customN}
                    onChange={(e) => setCustomN(e.target.value)}
                    step="0.001"
                    min="1.001"
                    className="mt-3 w-full px-4 py-3 bg-optics-darker rounded-lg border border-optics-blue text-optics-blue focus:outline-none focus:ring-2 focus:ring-optics-blue/50"
                    placeholder="Custom n"
                  />
                )}
              </div>
            </div>
            {error && (
              <p className="text-optics-amber mb-4">{error}</p>
            )}
            <div className="grid md:grid-cols-3 gap-4 border-t border-optics-blue/30 pt-6">
              <div className="bg-optics-darker rounded-xl p-4 border border-optics-cyan">
                <p className="text-xs text-optics-blue/60 uppercase tracking-wider mb-1">Effective Focal Length (EFL)</p>
                <p className="text-2xl font-mono font-bold text-optics-cyan text-glow">
                  {efl != null ? `${efl.toFixed(4)} mm` : '—'}
                </p>
              </div>
              <div className="bg-optics-darker rounded-xl p-4 border border-optics-blue">
                <p className="text-xs text-optics-blue/60 uppercase tracking-wider mb-1">Back Focal Length (BFL)</p>
                <p className="text-2xl font-mono font-bold text-optics-blue text-glow">
                  {bfl != null ? `${bfl.toFixed(4)} mm` : '—'}
                </p>
              </div>
              <div className="bg-optics-darker rounded-xl p-4 border border-optics-purple">
                <p className="text-xs text-optics-blue/60 uppercase tracking-wider mb-1">Numerical Aperture (NA)</p>
                <p className="text-2xl font-mono font-bold text-optics-purple text-glow">
                  {na != null ? na.toFixed(4) : '—'}
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Ball Lens Formula */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          id="formula"
          className="mb-16"
        >
          <h2 className="text-3xl font-display font-bold text-glow mb-6">
            Ball Lens Formula
          </h2>
          <div className="bg-glass-strong rounded-xl p-8 border border-optics-cyan">
            <div className="space-y-6">
              <div className="bg-optics-darker rounded-xl p-6 text-center border border-optics-cyan">
                <p className="text-sm text-optics-blue/60 mb-2 uppercase tracking-wider">Effective Focal Length</p>
                <p className="text-3xl md:text-4xl font-mono text-optics-cyan font-bold text-glow">
                  f = nR / 2(n − 1)
                </p>
              </div>
              <div className="bg-optics-darker rounded-xl p-6 text-center border border-optics-blue">
                <p className="text-sm text-optics-blue/60 mb-2 uppercase tracking-wider">Back Focal Length</p>
                <p className="text-3xl md:text-4xl font-mono text-optics-blue font-bold text-glow">
                  BFL = R(2 − n) / 2(n − 1)
                </p>
              </div>
              <div className="space-y-3 text-optics-blue/90">
                <p><strong className="text-optics-cyan">f</strong> — effective focal length (mm or m, same units as R)</p>
                <p><strong className="text-optics-amber">n</strong> — refractive index</p>
                <p><strong className="text-optics-purple">R</strong> — radius of the ball lens</p>
                <p><strong className="text-optics-blue">BFL</strong> — distance from rear surface to focal point</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Derivation */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          id="derivation"
          className="mb-16"
        >
          <h2 className="text-3xl font-display font-bold text-glow mb-6">
            Derivation from Lens Maker Equation
          </h2>
          <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
            <p className="text-optics-blue/90 mb-6">
              A ball lens is a thick spherical lens: both surfaces have radius R, with R₁ = +R (light enters convex)
              and R₂ = −R (light exits concave). The thickness is d = 2R.
            </p>
            <p className="text-optics-blue/90 mb-6">
              The thick lens maker equation is:
            </p>
            <div className="bg-optics-darker rounded-xl p-4 mb-6 border border-optics-cyan/30 font-mono text-optics-cyan">
              1/f = (n−1)[1/R₁ − 1/R₂ + (n−1)d/(n·R₁·R₂)]
            </div>
            <p className="text-optics-blue/90 mb-4">
              Substituting R₁ = R, R₂ = −R, d = 2R:
            </p>
            <div className="space-y-2 font-mono text-sm text-optics-blue/80 mb-6">
              <p>1/f = (n−1)[1/R − 1/(−R) + (n−1)·2R/(n·R·(−R))]</p>
              <p>= (n−1)[2/R − 2(n−1)/(nR)]</p>
              <p>= (n−1)·2[1/R − (n−1)/(nR)]</p>
              <p>= 2(n−1)·[n − (n−1)]/(nR)</p>
              <p className="text-optics-cyan font-bold">= 2(n−1)/(nR)  →  f = nR/2(n−1)</p>
            </div>
            <p className="text-optics-blue/80 text-sm">
              The back focal length BFL = f − R follows from the geometry of the spherical lens.
              Simplifying: BFL = R(2−n)/2(n−1).
            </p>
            <Link href="/lens-maker-equation" className="inline-block mt-6 text-optics-cyan hover:underline text-sm">
              Lens Maker Equation →
            </Link>
          </div>
        </motion.section>

        {/* Applications */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          id="applications"
          className="mb-16"
        >
          <h2 className="text-3xl font-display font-bold text-glow mb-6">
            Applications
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: 'Fiber coupling', desc: 'Couple light between optical fibers with minimal loss. Ball lenses provide easy alignment and high NA.', border: 'border-optics-cyan' },
              { title: 'Collimation', desc: 'Collimate divergent light from lasers or LEDs into a parallel beam for illumination or sensing.', border: 'border-optics-blue' },
              { title: 'Endoscopy', desc: 'Miniature ball lenses are used in medical endoscopes and industrial borescopes for imaging.', border: 'border-optics-purple' },
              { title: 'Sensors & scanning', desc: 'Barcode scanners, optical sensors, and confocal microscopy use ball lenses for compact optics.', border: 'border-optics-amber' },
            ].map((app) => (
              <motion.div
                key={app.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`bg-glass-strong rounded-xl p-5 border ${app.border} border-opacity-50 hover:border-opacity-100 transition-all`}
              >
                <h3 className="text-lg font-semibold text-glow mb-2">{app.title}</h3>
                <p className="text-optics-blue/80 text-sm">{app.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Common Ball Lens Materials */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          id="materials"
          className="mb-16"
        >
          <h2 className="text-3xl font-display font-bold text-glow mb-6">
            Common Ball Lens Materials
          </h2>
          <div className="bg-glass-strong rounded-xl overflow-hidden border border-optics-blue/30">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-optics-darker border-b border-optics-blue/30">
                    <th className="px-6 py-4 font-semibold text-optics-cyan">Material</th>
                    <th className="px-6 py-4 font-semibold text-optics-cyan">n</th>
                    <th className="px-6 py-4 font-semibold text-optics-cyan">Transmission Range</th>
                  </tr>
                </thead>
                <tbody>
                  {MATERIALS_TABLE.map((row) => (
                    <tr key={row.material} className="border-b border-optics-blue/10 hover:bg-optics-darker/50">
                      <td className="px-6 py-4 text-optics-blue/90">{row.material}</td>
                      <td className="px-6 py-4 font-mono text-optics-cyan">{row.n}</td>
                      <td className="px-6 py-4 text-optics-blue/80 text-sm">{row.transmission}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.section>

        {/* FAQ */}
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
                q: 'What is the focal length formula for a ball lens?',
                a: 'The effective focal length of a ball lens is f = nR/2(n-1), where n is the refractive index and R is the radius of the ball. The back focal length (distance from the rear surface) is BFL = f - R = R(2-n)/2(n-1).',
              },
              {
                q: 'How is the ball lens formula derived from the lens maker equation?',
                a: 'A ball lens is a thick lens with R₁ = R and R₂ = -R (sphere). Applying the thick lens maker equation with thickness d = 2R gives 1/f = 2(n-1)/(nR), so f = nR/2(n-1).',
              },
              {
                q: 'What are ball lenses used for?',
                a: 'Ball lenses are used for fiber-to-fiber coupling, laser collimation, endoscopy, barcode scanning, and sensor applications. Their symmetric shape makes alignment easy and they work well for short focal length applications.',
              },
              {
                q: 'What is numerical aperture (NA) for a ball lens?',
                a: 'NA ≈ R/f is a useful approximation for ball lenses, relating the radius and focal length. Higher NA means greater light collection and coupling efficiency.',
              },
              {
                q: 'When is BFL negative?',
                a: 'BFL = R(2-n)/2(n-1) is negative when n > 2. For most optical glasses (n ≈ 1.45–1.85), BFL is positive and the focal point lies outside the sphere.',
              },
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
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-glass-strong rounded-xl p-4 border border-optics-blue hover:border-optics-cyan transition-all h-full"
              >
                <h3 className="font-semibold text-optics-cyan mb-2">Focal Length</h3>
                <p className="text-optics-blue/70 text-sm">Focal length calculator and guide.</p>
              </motion.div>
            </Link>
            <Link href="/thick-lens">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-glass-strong rounded-xl p-4 border border-optics-blue hover:border-optics-blue transition-all h-full"
              >
                <h3 className="font-semibold text-optics-blue mb-2">Thick Lens</h3>
                <p className="text-optics-blue/70 text-sm">Thick lens calculator.</p>
              </motion.div>
            </Link>
            <Link href="/materials">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-glass-strong rounded-xl p-4 border border-optics-blue hover:border-optics-purple transition-all h-full"
              >
                <h3 className="font-semibold text-optics-purple mb-2">Materials</h3>
                <p className="text-optics-blue/70 text-sm">Optical material properties.</p>
              </motion.div>
            </Link>
            <Link href="/convex-lens-calculator">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-glass-strong rounded-xl p-4 border border-optics-blue hover:border-optics-amber transition-all h-full"
              >
                <h3 className="font-semibold text-optics-amber mb-2">Convex Lens Calculator</h3>
                <p className="text-optics-blue/70 text-sm">Convex lens focal length calculator.</p>
              </motion.div>
            </Link>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
