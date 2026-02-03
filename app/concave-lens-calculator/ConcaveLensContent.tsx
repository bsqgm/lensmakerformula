'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

type LensType = 'biconcave' | 'plano-concave-left' | 'plano-concave-right' | 'custom';

interface LensParams {
  n: number | null;
  R1: number | null;
  R2: number | null;
}

const LENS_PRESETS: Record<LensType, { R1: number | null; R2: number | null; label: string; description: string }> = {
  'biconcave': { R1: -0.1, R2: 0.1, label: 'Biconcave', description: 'Curved inward on both sides' },
  'plano-concave-left': { R1: Infinity, R2: 0.1, label: 'Plano-Concave (flat left)', description: 'Flat left, concave right surface' },
  'plano-concave-right': { R1: -0.1, R2: Infinity, label: 'Plano-Concave (flat right)', description: 'Concave left, flat right surface' },
  'custom': { R1: null, R2: null, label: 'Custom', description: 'Enter your own values' },
};

export default function ConcaveLensContent() {
  const [lensType, setLensType] = useState<LensType>('biconcave');
  const [params, setParams] = useState<LensParams>({
    n: 1.5,
    R1: -0.1,
    R2: 0.1,
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

      if (f > 0) {
        setError('This configuration produces a converging lens (positive focal length). Use the convex lens calculator instead.');
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
      boxShadow: '0 0 30px rgba(168, 85, 247, 0.4)',
    },
  };

  return (
    <main className="min-h-screen relative z-10 pt-20 pb-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <ol className="flex items-center gap-2 text-optics-blue/60">
            <li><Link href="/" className="hover:text-optics-purple transition-colors">Home</Link></li>
            <li>/</li>
            <li className="text-optics-purple">Concave Lens Calculator</li>
          </ol>
        </nav>

        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold text-glow-strong mb-4">
            Concave Lens Calculator
          </h1>
          <p className="text-xl text-optics-blue/80 max-w-2xl mx-auto">
            Calculate the focal length of <strong className="text-optics-purple">diverging lenses</strong> including 
            biconcave and plano-concave types. Essential for myopia correction and optical design.
          </p>
        </motion.header>

        {/* Calculator Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-glass-strong rounded-2xl p-8 md:p-10 border border-optics-purple/30 shadow-2xl mb-12"
        >
          {/* Formula Display */}
          <div className="mb-8 p-4 bg-optics-darker/50 rounded-xl border border-optics-blue/20 text-center">
            <p className="text-sm text-optics-blue/60 mb-1 uppercase tracking-wider">Lens Maker Formula</p>
            <p className="text-2xl md:text-3xl font-mono text-optics-purple font-bold">
              1/f = (n-1)(1/R₁ - 1/R₂)
            </p>
          </div>

          {/* Lens Type Selector */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-optics-blue/90 mb-3 uppercase tracking-wider">
              Select Concave Lens Type
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
                      ? 'border-optics-purple bg-optics-purple/10'
                      : 'border-optics-blue/30 hover:border-optics-blue/50'
                  }`}
                >
                  <p className={`font-semibold text-sm ${lensType === type ? 'text-optics-purple' : 'text-optics-blue/80'}`}>
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
                         text-optics-purple text-xl font-mono focus:outline-none focus:border-optics-purple 
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
                             text-optics-purple text-xl font-mono focus:outline-none focus:border-optics-purple 
                             transition-all duration-300"
                    placeholder="-0.1"
                  />
                  <span className="text-optics-blue/60 font-mono text-sm">m</span>
                </div>
                <p className="text-xs text-red-400/70 mt-1 ml-1">
                  Concave surface: negative value
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
                             text-optics-purple text-xl font-mono focus:outline-none focus:border-optics-purple 
                             transition-all duration-300"
                    placeholder="0.1"
                  />
                  <span className="text-optics-blue/60 font-mono text-sm">m</span>
                </div>
                <p className="text-xs text-red-400/70 mt-1 ml-1">
                  For biconcave: positive value
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
            className="w-full py-5 bg-gradient-to-r from-optics-purple to-optics-blue 
                     text-white font-bold text-lg rounded-lg
                     hover:shadow-[0_0_40px_rgba(168,85,247,0.6)]
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
                className="mt-8 p-6 bg-gradient-to-br from-optics-purple/10 to-optics-blue/10 
                         border-2 border-optics-purple/50 rounded-xl"
              >
                <div className="text-center">
                  <p className="text-sm text-optics-purple/70 mb-2 uppercase tracking-wider">
                    Focal Length (Diverging)
                  </p>
                  <p className="text-4xl md:text-5xl font-mono font-bold text-optics-purple text-glow-strong">
                    {result.toFixed(4)} m
                  </p>
                  <p className="text-optics-blue/60 mt-2">
                    = {(result * 100).toFixed(2)} cm = {(result * 1000).toFixed(1)} mm
                  </p>
                  <div className="mt-4 inline-block px-4 py-2 bg-purple-900/30 border border-purple-500/30 rounded-lg">
                    <p className="text-purple-400 text-sm font-medium">
                      ✓ Diverging lens - spreads parallel light rays apart (virtual focal point)
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Educational Content */}
        <div className="space-y-8">
          {/* What is a Concave Lens */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30"
          >
            <h2 className="text-2xl font-display font-bold text-glow mb-4">
              What is a Concave Lens?
            </h2>
            <div className="space-y-4 text-optics-blue/80">
              <p>
                A <strong className="text-optics-purple">concave lens</strong> (also called a diverging lens or 
                negative lens) is thinner at the center than at the edges. When parallel light rays pass through 
                a concave lens, they spread apart and appear to diverge from a virtual focal point on the same 
                side of the lens as the light source.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="bg-optics-darker/50 rounded-lg p-4 border border-optics-blue/20">
                  <h3 className="font-semibold text-optics-purple mb-2">Biconcave Lens</h3>
                  <p className="text-sm">Both surfaces curve inward. Most common diverging lens type. R₁ &lt; 0, R₂ &gt; 0</p>
                </div>
                <div className="bg-optics-darker/50 rounded-lg p-4 border border-optics-blue/20">
                  <h3 className="font-semibold text-optics-purple mb-2">Plano-Concave Lens</h3>
                  <p className="text-sm">One flat surface, one concave surface. One R = ∞ (flat side)</p>
                </div>
                <div className="bg-optics-darker/50 rounded-lg p-4 border border-optics-blue/20">
                  <h3 className="font-semibold text-optics-purple mb-2">Negative Meniscus</h3>
                  <p className="text-sm">Both surfaces curve the same way, but the concave side curves more. Still diverging overall.</p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Why Negative Focal Length */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30"
          >
            <h2 className="text-2xl font-display font-bold text-glow mb-4">
              Why is Concave Lens Focal Length Negative?
            </h2>
            <div className="space-y-4 text-optics-blue/80">
              <p>
                Concave lenses have <strong className="text-optics-purple">negative focal length</strong> because 
                they create a <em>virtual focal point</em>. Unlike convex lenses that converge light to a real 
                point, concave lenses diverge light rays. When traced backward, these diverging rays appear to 
                originate from a point on the same side of the lens as the incoming light.
              </p>
              <div className="bg-optics-darker/50 rounded-lg p-4 border border-optics-purple/30">
                <h3 className="font-semibold text-optics-purple mb-3">Sign Convention for Biconcave Lens</h3>
                <ul className="space-y-2 text-sm">
                  <li><strong>R₁ (first surface):</strong> Negative (−) - The center of curvature is to the left of the surface (concave facing left)</li>
                  <li><strong>R₂ (second surface):</strong> Positive (+) - The center of curvature is to the right of the surface (concave facing right)</li>
                  <li><strong>Result:</strong> f &lt; 0 (negative focal length = diverging lens)</li>
                </ul>
              </div>
              <div className="bg-optics-darker/50 rounded-lg p-4 border border-optics-blue/20 mt-4">
                <h3 className="font-semibold text-optics-purple mb-3">Example Calculation</h3>
                <p className="font-mono text-sm mb-2">Given: n = 1.5, R₁ = -10 cm, R₂ = +10 cm</p>
                <p className="font-mono text-sm mb-2">1/f = (1.5 - 1)(1/(-0.10) - 1/0.10)</p>
                <p className="font-mono text-sm mb-2">1/f = 0.5 × (-10 - 10) = 0.5 × (-20) = -10</p>
                <p className="font-mono text-sm text-optics-purple font-bold">f = -0.1 m = -10 cm (diverging)</p>
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
              Applications of Concave Lenses
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { icon: '👓', title: 'Myopia Correction', desc: 'Concave lenses in eyeglasses diverge light before it enters the eye, correcting nearsightedness by moving the focal point back onto the retina.' },
                { icon: '🔭', title: 'Galilean Telescopes', desc: 'The eyepiece of a Galilean telescope is a concave lens, producing an upright image (unlike Keplerian telescopes with convex eyepieces).' },
                { icon: '🚪', title: 'Door Peepholes', desc: 'Wide-angle peepholes use concave lenses to provide a broad field of view while making approaching visitors appear smaller.' },
                { icon: '💡', title: 'Laser Beam Expanders', desc: 'Concave lenses diverge laser beams before they pass through a convex lens, creating expanded, collimated beams.' },
                { icon: '📸', title: 'Camera Viewfinders', desc: 'Some camera viewfinders use concave lenses to help nearsighted photographers see the image clearly without glasses.' },
                { icon: '🔬', title: 'Aberration Correction', desc: 'Concave elements in compound lenses help correct chromatic and spherical aberrations caused by convex elements.' },
              ].map((app) => (
                <div key={app.title} className="bg-optics-darker/50 rounded-lg p-4 border border-optics-blue/20">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{app.icon}</span>
                    <h3 className="font-semibold text-optics-purple">{app.title}</h3>
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
                  q: 'What is a concave lens?',
                  a: 'A concave lens is a diverging lens that is thinner in the middle than at the edges. It spreads parallel light rays apart so they appear to come from a virtual focal point. Common types include biconcave (curved inward on both sides) and plano-concave (one flat side). Concave lenses always have negative focal length.'
                },
                {
                  q: 'Why is the focal length of a concave lens negative?',
                  a: 'Concave lenses diverge light rays instead of converging them. The focal point is virtual - it is where the diverging rays appear to originate from when traced backward. By convention, virtual focal points have negative focal length, distinguishing diverging lenses from converging (positive) lenses.'
                },
                {
                  q: 'How do concave lenses correct myopia (nearsightedness)?',
                  a: 'In myopia, the eye focuses images in front of the retina. A concave lens diverges incoming light rays, effectively moving the focal point backward onto the retina. The required lens power (in negative diopters) depends on how nearsighted the person is.'
                },
                {
                  q: 'What is the difference between concave and convex lenses?',
                  a: 'Convex lenses are thicker in the middle, converge light to a real focal point, and have positive focal length. Concave lenses are thinner in the middle, diverge light from a virtual focal point, and have negative focal length. Convex lenses magnify; concave lenses minify.'
                },
                {
                  q: 'Can a concave lens form a real image?',
                  a: 'No, a single concave lens cannot form a real image. It always produces virtual, upright, and reduced images regardless of object distance. Real images require light rays to actually converge, which diverging lenses cannot do alone. However, concave lenses can contribute to real image formation when combined with convex elements in compound lens systems.'
                },
              ].map((item, index) => (
                <div key={index} className="bg-optics-darker/50 rounded-lg p-4 border border-optics-blue/20">
                  <h3 className="font-semibold text-optics-purple mb-2">{item.q}</h3>
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
              <Link href="/convex-lens-calculator">
                <motion.button whileHover={{ scale: 1.05 }} className="px-4 py-2 bg-optics-darker border border-optics-cyan/50 text-optics-cyan rounded-lg">
                  Convex Lens Calculator
                </motion.button>
              </Link>
              <Link href="/focal-length">
                <motion.button whileHover={{ scale: 1.05 }} className="px-4 py-2 bg-optics-darker border border-optics-blue/50 text-optics-cyan rounded-lg">
                  General Focal Length
                </motion.button>
              </Link>
              <Link href="/thick-lens">
                <motion.button whileHover={{ scale: 1.05 }} className="px-4 py-2 bg-optics-darker border border-optics-amber/50 text-optics-amber rounded-lg">
                  Thick Lens Calculator
                </motion.button>
              </Link>
              <Link href="/magnification">
                <motion.button whileHover={{ scale: 1.05 }} className="px-4 py-2 bg-optics-darker border border-optics-purple/50 text-optics-purple rounded-lg">
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
