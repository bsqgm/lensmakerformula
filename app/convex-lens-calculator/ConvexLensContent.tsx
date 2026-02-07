'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

type LensType = 'biconvex' | 'plano-convex-left' | 'plano-convex-right' | 'custom';

interface LensParams {
  n: number | null;
  R1: number | null;
  R2: number | null;
}

const LENS_PRESETS: Record<LensType, { R1: number | null; R2: number | null; label: string; description: string }> = {
  'biconvex': { R1: 0.1, R2: -0.1, label: 'Biconvex', description: 'Curved on both sides (symmetric)' },
  'plano-convex-left': { R1: 0.1, R2: Infinity, label: 'Plano-Convex (flat right)', description: 'Convex left, flat right surface' },
  'plano-convex-right': { R1: Infinity, R2: -0.1, label: 'Plano-Convex (flat left)', description: 'Flat left, convex right surface' },
  'custom': { R1: null, R2: null, label: 'Custom', description: 'Enter your own values' },
};

export default function ConvexLensContent() {
  const [lensType, setLensType] = useState<LensType>('biconvex');
  const [params, setParams] = useState<LensParams>({
    n: 1.5,
    R1: 0.1,
    R2: -0.1,
  });
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const calculate = () => {
    setError(null);
    setIsCalculating(true);

    setTimeout(() => {
      const { n, R1, R2 } = params;

      if (n === null || R1 === null || R2 === null) {
        setError('Please fill in all required fields');
        setIsCalculating(false);
        return;
      }

      if (n <= 1) {
        setError('Refractive index must be greater than 1');
        setIsCalculating(false);
        return;
      }

      // Handle infinity for plano surfaces
      const term1 = R1 === Infinity ? 0 : 1 / R1;
      const term2 = R2 === Infinity ? 0 : 1 / R2;

      const power = (n - 1) * (term1 - term2);
      
      if (Math.abs(power) < 0.0001) {
        setError('Invalid lens configuration - no optical power');
        setIsCalculating(false);
        return;
      }

      const f = 1 / power;

      if (f < 0) {
        setError('This configuration produces a diverging lens (negative focal length). Use the concave lens calculator instead.');
        setIsCalculating(false);
        return;
      }

      setResult(f);
      setIsCalculating(false);
    }, 300);
  };

  const handleLensTypeChange = (type: LensType) => {
    setLensType(type);
    const preset = LENS_PRESETS[type];
    if (type !== 'custom') {
      setParams(prev => ({
        ...prev,
        R1: preset.R1,
        R2: preset.R2,
      }));
    }
    setResult(null);
    setError(null);
  };

  const handleInputChange = (field: keyof LensParams, value: string) => {
    if (value === 'inf' || value === 'Infinity') {
      setParams(prev => ({ ...prev, [field]: Infinity }));
    } else {
      const numValue = parseFloat(value);
      if (!isNaN(numValue) || value === '' || value === '-') {
        setParams(prev => ({
          ...prev,
          [field]: value === '' || value === '-' ? null : numValue,
        }));
      }
    }
    setResult(null);
    setError(null);
    if (field !== 'n') {
      setLensType('custom');
    }
  };

  useEffect(() => {
    const { n, R1, R2 } = params;
    if (n !== null && n > 1 && R1 !== null && R2 !== null) {
      const timer = setTimeout(calculate, 500);
      return () => clearTimeout(timer);
    }
  }, [params]);

  const inputVariants = {
    focus: {
      scale: 1.02,
      boxShadow: '0 0 30px rgba(0, 217, 255, 0.4)',
    },
  };

  return (
    <main className="min-h-screen relative z-10 pt-20 pb-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <ol className="flex items-center gap-2 text-optics-blue/60">
            <li><Link href="/" className="hover:text-optics-cyan transition-colors">Home</Link></li>
            <li>/</li>
            <li className="text-optics-cyan">Convex Lens Calculator</li>
          </ol>
        </nav>

        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold text-glow-strong mb-4">
            Convex Lens Calculator
          </h1>
          <p className="text-xl text-optics-blue/80 max-w-2xl mx-auto">
            Calculate the focal length of <strong className="text-optics-cyan">converging lenses</strong> including 
            biconvex and plano-convex types. Perfect for magnifying glasses, camera lenses, and optical design.
          </p>
          <a href="#calculator" className="flex w-fit items-center gap-2 mt-4 px-6 py-3 bg-gradient-to-r from-optics-blue to-optics-cyan text-optics-darker font-bold rounded-lg hover:shadow-[0_0_30px_rgba(0,217,255,0.5)] transition-all">
            Use Calculator Now ↓
          </a>
        </motion.header>

        {/* Calculator Card */}
        <motion.div
          id="calculator"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-glass-strong rounded-2xl p-8 md:p-10 border border-optics-cyan/30 shadow-2xl mb-12"
        >
          {/* Formula Display */}
          <div className="mb-8 p-4 bg-optics-darker/50 rounded-xl border border-optics-blue/20 text-center">
            <p className="text-sm text-optics-blue/60 mb-1 uppercase tracking-wider">Lens Maker Formula</p>
            <p className="text-2xl md:text-3xl font-mono text-optics-cyan font-bold">
              1/f = (n-1)(1/R₁ - 1/R₂)
            </p>
          </div>

          {/* Lens Type Selector */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-optics-blue/90 mb-3 uppercase tracking-wider">
              Select Convex Lens Type
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {(Object.keys(LENS_PRESETS) as LensType[]).map((type) => (
                <motion.button
                  key={type}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleLensTypeChange(type)}
                  className={`p-3 rounded-lg border-2 transition-all text-left ${
                    lensType === type
                      ? 'border-optics-cyan bg-optics-cyan/10'
                      : 'border-optics-blue/30 hover:border-optics-blue/50'
                  }`}
                >
                  <p className={`font-semibold text-sm ${lensType === type ? 'text-optics-cyan' : 'text-optics-blue/80'}`}>
                    {LENS_PRESETS[type].label}
                  </p>
                  <p className="text-xs text-optics-blue/60 mt-1">{LENS_PRESETS[type].description}</p>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Input Fields */}
          <div className="space-y-6 mb-8">
            {/* Refractive Index */}
            <div>
              <label className="block text-sm font-medium text-optics-blue/90 mb-2 uppercase tracking-wider">
                Refractive Index (n)
              </label>
              <motion.input
                whileFocus="focus"
                variants={inputVariants}
                type="number"
                step="0.01"
                min="1.01"
                value={params.n ?? ''}
                onChange={(e) => handleInputChange('n', e.target.value)}
                className="w-full px-6 py-4 bg-optics-darker/70 border-2 border-optics-blue/30 rounded-lg 
                         text-optics-cyan text-xl font-mono focus:outline-none focus:border-optics-cyan 
                         transition-all duration-300"
                placeholder="1.5"
              />
              <p className="text-xs text-optics-blue/50 mt-1 ml-1">
                Common: Crown glass (1.52), Flint glass (1.62), Plastic (1.49)
              </p>
            </div>

            {/* R1 and R2 */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-optics-blue/90 mb-2 uppercase tracking-wider">
                  First Surface Radius (R₁)
                </label>
                <div className="flex items-center gap-3">
                  <motion.input
                    whileFocus="focus"
                    variants={inputVariants}
                    type="text"
                    value={params.R1 === Infinity ? '∞' : (params.R1 ?? '')}
                    onChange={(e) => handleInputChange('R1', e.target.value === '∞' ? 'Infinity' : e.target.value)}
                    className="flex-1 px-6 py-4 bg-optics-darker/70 border-2 border-optics-blue/30 rounded-lg 
                             text-optics-cyan text-xl font-mono focus:outline-none focus:border-optics-cyan 
                             transition-all duration-300"
                    placeholder="0.1"
                  />
                  <span className="text-optics-blue/60 font-mono text-sm">m</span>
                </div>
                <p className="text-xs text-green-400/70 mt-1 ml-1">
                  Convex surface: positive value
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-optics-blue/90 mb-2 uppercase tracking-wider">
                  Second Surface Radius (R₂)
                </label>
                <div className="flex items-center gap-3">
                  <motion.input
                    whileFocus="focus"
                    variants={inputVariants}
                    type="text"
                    value={params.R2 === Infinity ? '∞' : (params.R2 ?? '')}
                    onChange={(e) => handleInputChange('R2', e.target.value === '∞' ? 'Infinity' : e.target.value)}
                    className="flex-1 px-6 py-4 bg-optics-darker/70 border-2 border-optics-blue/30 rounded-lg 
                             text-optics-cyan text-xl font-mono focus:outline-none focus:border-optics-cyan 
                             transition-all duration-300"
                    placeholder="-0.1"
                  />
                  <span className="text-optics-blue/60 font-mono text-sm">m</span>
                </div>
                <p className="text-xs text-green-400/70 mt-1 ml-1">
                  For biconvex: negative value
                </p>
              </div>
            </div>
          </div>

          {/* Calculate Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={calculate}
            disabled={isCalculating}
            className="w-full py-5 bg-gradient-to-r from-optics-blue to-optics-cyan 
                     text-optics-darker font-bold text-lg rounded-lg
                     border-glow hover:shadow-[0_0_40px_rgba(0,217,255,0.6)]
                     transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed
                     uppercase tracking-wider"
          >
            {isCalculating ? 'Calculating...' : 'Calculate Focal Length'}
          </motion.button>

          {/* Results */}
          <AnimatePresence mode="wait">
            {error && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mt-8 p-6 bg-red-900/20 border border-red-500/30 rounded-lg"
              >
                <p className="text-red-400 font-mono text-center">{error}</p>
              </motion.div>
            )}

            {result !== null && !error && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="mt-8 p-6 bg-gradient-to-br from-optics-cyan/10 to-optics-blue/10 
                         border-2 border-optics-cyan/50 rounded-xl"
              >
                <div className="text-center">
                  <p className="text-sm text-optics-cyan/70 mb-2 uppercase tracking-wider">
                    Focal Length (Converging)
                  </p>
                  <p className="text-4xl md:text-5xl font-mono font-bold text-optics-cyan text-glow-strong">
                    +{result.toFixed(4)} m
                  </p>
                  <p className="text-optics-blue/60 mt-2">
                    = {(result * 100).toFixed(2)} cm = {(result * 1000).toFixed(1)} mm
                  </p>
                  <div className="mt-4 inline-block px-4 py-2 bg-green-900/30 border border-green-500/30 rounded-lg">
                    <p className="text-green-400 text-sm font-medium">
                      ✓ Converging lens - focuses parallel light to a real focal point
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Educational Content */}
        <div className="space-y-8">
          {/* What is a Convex Lens */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30"
          >
            <h2 className="text-2xl font-display font-bold text-glow mb-4">
              What is a Convex Lens?
            </h2>
            <div className="space-y-4 text-optics-blue/80">
              <p>
                A <strong className="text-optics-cyan">convex lens</strong> (also called a converging lens or 
                positive lens) is thicker at the center than at the edges. When parallel light rays pass through 
                a convex lens, they bend inward and converge at a focal point on the opposite side of the lens.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="bg-optics-darker/50 rounded-lg p-4 border border-optics-blue/20">
                  <h3 className="font-semibold text-optics-cyan mb-2">Biconvex Lens</h3>
                  <p className="text-sm">Both surfaces curve outward. Most common type of convex lens. R₁ &gt; 0, R₂ &lt; 0</p>
                </div>
                <div className="bg-optics-darker/50 rounded-lg p-4 border border-optics-blue/20">
                  <h3 className="font-semibold text-optics-cyan mb-2">Plano-Convex Lens</h3>
                  <p className="text-sm">One flat surface, one convex surface. Used when light enters from the flat side. One R = ∞</p>
                </div>
                <div className="bg-optics-darker/50 rounded-lg p-4 border border-optics-blue/20">
                  <h3 className="font-semibold text-optics-cyan mb-2">Positive Meniscus</h3>
                  <p className="text-sm">Both surfaces curve the same way, but one more than the other. Still converging overall.</p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Sign Convention */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30"
          >
            <h2 className="text-2xl font-display font-bold text-glow mb-4">
              Sign Convention for Convex Lenses
            </h2>
            <div className="space-y-4 text-optics-blue/80">
              <p>
                Understanding the sign convention is crucial for correctly using the lens maker formula with convex lenses:
              </p>
              <div className="bg-optics-darker/50 rounded-lg p-4 border border-green-500/30">
                <h3 className="font-semibold text-green-400 mb-3">For a Biconvex Lens</h3>
                <ul className="space-y-2 text-sm">
                  <li><strong>R₁ (first surface):</strong> Positive (+) - The center of curvature is to the right of the surface (convex facing left)</li>
                  <li><strong>R₂ (second surface):</strong> Negative (−) - The center of curvature is to the left of the surface (convex facing right)</li>
                  <li><strong>Result:</strong> f &gt; 0 (positive focal length = converging lens)</li>
                </ul>
              </div>
              <div className="bg-optics-darker/50 rounded-lg p-4 border border-optics-blue/20 mt-4">
                <h3 className="font-semibold text-optics-cyan mb-3">Example Calculation</h3>
                <p className="font-mono text-sm mb-2">Given: n = 1.5, R₁ = +10 cm, R₂ = -10 cm</p>
                <p className="font-mono text-sm mb-2">1/f = (1.5 - 1)(1/0.10 - 1/(-0.10))</p>
                <p className="font-mono text-sm mb-2">1/f = 0.5 × (10 + 10) = 0.5 × 20 = 10</p>
                <p className="font-mono text-sm text-optics-cyan font-bold">f = 0.1 m = 10 cm (converging)</p>
              </div>
            </div>
          </motion.section>

          {/* Applications */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30"
          >
            <h2 className="text-2xl font-display font-bold text-glow mb-4">
              Applications of Convex Lenses
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { icon: '🔍', title: 'Magnifying Glasses', desc: 'Simple convex lenses create magnified virtual images of nearby objects.' },
                { icon: '📷', title: 'Camera Lenses', desc: 'Camera objectives use multiple convex elements to focus real images onto sensors.' },
                { icon: '👓', title: 'Reading Glasses', desc: 'Convex lenses correct farsightedness (hyperopia) by converging light before it enters the eye.' },
                { icon: '🔬', title: 'Microscope Objectives', desc: 'High-power convex lenses create magnified real images of tiny specimens.' },
                { icon: '🔭', title: 'Telescope Objectives', desc: 'Large convex lenses gather light and create real images of distant objects.' },
                { icon: '📽️', title: 'Projectors', desc: 'Convex lenses project enlarged images from small displays onto screens.' },
              ].map((app) => (
                <div key={app.title} className="bg-optics-darker/50 rounded-lg p-4 border border-optics-blue/20">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{app.icon}</span>
                    <h3 className="font-semibold text-optics-cyan">{app.title}</h3>
                  </div>
                  <p className="text-optics-blue/70 text-sm">{app.desc}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* FAQ */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30"
          >
            <h2 className="text-2xl font-display font-bold text-glow mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: 'What is a convex lens?',
                  a: 'A convex lens is a converging lens that is thicker in the middle than at the edges. It bends parallel light rays to meet at a focal point. Common types include biconvex (curved on both sides) and plano-convex (one flat side). Convex lenses always have positive focal length.'
                },
                {
                  q: 'How do I calculate the focal length of a convex lens?',
                  a: 'Use the lens maker formula: 1/f = (n-1)(1/R₁ - 1/R₂). For a biconvex lens, R₁ is positive and R₂ is negative. For a plano-convex lens, one radius is infinity (flat surface). The result is always a positive focal length for convex lenses.'
                },
                {
                  q: 'Why is the focal length of a convex lens positive?',
                  a: 'Convex lenses converge light rays to a real focal point on the opposite side of the lens from the light source. By convention, real focal points have positive focal length. This distinguishes them from concave (diverging) lenses which have negative focal length.'
                },
                {
                  q: 'What is the difference between biconvex and plano-convex lenses?',
                  a: 'A biconvex lens has two curved surfaces (both convex), while a plano-convex lens has one flat surface and one convex surface. Biconvex lenses typically have stronger optical power for the same radii. Plano-convex lenses are often used when light should enter from the flat side to minimize aberrations.'
                },
                {
                  q: 'How does refractive index affect a convex lens?',
                  a: 'Higher refractive index means stronger light bending at the lens surfaces, resulting in shorter focal length (stronger optical power). A convex lens made from flint glass (n ≈ 1.62) will have a shorter focal length than the same shape made from crown glass (n ≈ 1.52).'
                },
              ].map((item, index) => (
                <div key={index} className="bg-optics-darker/50 rounded-lg p-4 border border-optics-blue/20">
                  <h3 className="font-semibold text-optics-cyan mb-2">{item.q}</h3>
                  <p className="text-optics-blue/80 text-sm">{item.a}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Related Tools */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-xl font-display font-bold text-glow mb-4">Related Calculators</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/concave-lens-calculator">
                <motion.button whileHover={{ scale: 1.05 }} className="px-4 py-2 bg-optics-darker border border-optics-purple/50 text-optics-purple rounded-lg">
                  Concave Lens Calculator
                </motion.button>
              </Link>
              <Link href="/focal-length">
                <motion.button whileHover={{ scale: 1.05 }} className="px-4 py-2 bg-optics-darker border border-optics-cyan/50 text-optics-cyan rounded-lg">
                  General Focal Length
                </motion.button>
              </Link>
              <Link href="/thick-lens">
                <motion.button whileHover={{ scale: 1.05 }} className="px-4 py-2 bg-optics-darker border border-optics-amber/50 text-optics-amber rounded-lg">
                  Thick Lens Calculator
                </motion.button>
              </Link>
              <Link href="/magnification">
                <motion.button whileHover={{ scale: 1.05 }} className="px-4 py-2 bg-optics-darker border border-optics-blue/50 text-optics-cyan rounded-lg">
                  Magnification
                </motion.button>
              </Link>
            </div>
          </motion.section>
        </div>
      </div>
    </main>
  );
}
