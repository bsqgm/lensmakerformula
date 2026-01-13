'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

interface ThickLensParams {
  n: number | null;
  R1: number | null;
  R2: number | null;
  d: number | null; // thickness
}

export default function ThickLensContent() {
  const [params, setParams] = useState<ThickLensParams>({
    n: 1.5,
    R1: 0.1,
    R2: -0.1,
    d: 0.01, // 1 cm default thickness
  });
  const [result, setResult] = useState<{
    fThick: number | null;
    fThin: number | null;
    difference: number | null;
  }>({ fThick: null, fThin: null, difference: null });
  const [error, setError] = useState<string | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  // Thick lens formula: 1/f = (n-1)[1/R1 - 1/R2 + (n-1)d/(nR1R2)]
  const calculate = () => {
    setError(null);
    setIsCalculating(true);

    setTimeout(() => {
      const { n, R1, R2, d } = params;

      if (n === null || R1 === null || R2 === null || d === null) {
        setError('Please fill in all required fields');
        setIsCalculating(false);
        return;
      }

      if (n <= 1) {
        setError('Refractive index must be greater than 1');
        setIsCalculating(false);
        return;
      }

      if (R1 === 0 || R2 === 0) {
        setError('Radius of curvature cannot be zero');
        setIsCalculating(false);
        return;
      }

      if (d < 0) {
        setError('Thickness cannot be negative');
        setIsCalculating(false);
        return;
      }

      // Thin lens calculation
      const thinLensTerm = (n - 1) * (1/R1 - 1/R2);
      if (Math.abs(thinLensTerm) < 0.0001) {
        setError('Invalid lens configuration');
        setIsCalculating(false);
        return;
      }
      const fThin = 1 / thinLensTerm;

      // Thick lens calculation
      const thicknessTerm = (n - 1) * d / (n * R1 * R2);
      const thickLensTerm = (n - 1) * (1/R1 - 1/R2 + thicknessTerm);
      
      if (Math.abs(thickLensTerm) < 0.0001) {
        setError('Invalid lens configuration');
        setIsCalculating(false);
        return;
      }
      const fThick = 1 / thickLensTerm;

      const difference = ((fThick - fThin) / fThin) * 100;

      setResult({ fThick, fThin, difference });
      setIsCalculating(false);
    }, 300);
  };

  const handleInputChange = (field: keyof ThickLensParams, value: string) => {
    const numValue = parseFloat(value);
    if (!isNaN(numValue) || value === '' || value === '-') {
      setParams(prev => ({
        ...prev,
        [field]: value === '' || value === '-' ? null : numValue,
      }));
      setResult({ fThick: null, fThin: null, difference: null });
      setError(null);
    }
  };

  useEffect(() => {
    const { n, R1, R2, d } = params;
    if (n !== null && n > 1 && R1 !== null && R1 !== 0 && R2 !== null && R2 !== 0 && d !== null && d >= 0) {
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
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <ol className="flex items-center gap-2 text-optics-blue/60">
            <li><Link href="/" className="hover:text-optics-cyan transition-colors">Home</Link></li>
            <li>/</li>
            <li><Link href="/#tools" className="hover:text-optics-cyan transition-colors">Tools</Link></li>
            <li>/</li>
            <li className="text-optics-cyan">Thick Lens</li>
          </ol>
        </nav>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-glass-strong rounded-2xl p-8 md:p-12 border border-optics-blue/30 shadow-2xl">
            {/* Header */}
            <div className="mb-10 text-center">
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-5xl font-display font-bold text-glow mb-4"
              >
                Thick Lens Calculator
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-optics-blue/80 text-lg"
              >
                Calculate focal length with lens thickness correction
              </motion.p>
            </div>

            {/* Formula Display */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="mb-10 p-6 bg-optics-darker/50 rounded-xl border border-optics-blue/20"
            >
              <div className="text-center">
                <p className="text-sm text-optics-blue/60 mb-2 uppercase tracking-wider">Thick Lens Formula</p>
                <p className="text-2xl md:text-3xl font-mono text-optics-cyan font-bold">
                  1/f = (n-1)[1/R₁ - 1/R₂ + (n-1)d/(nR₁R₂)]
                </p>
              </div>
            </motion.div>

            {/* Input Fields */}
            <div className="space-y-6 mb-8">
              {/* Refractive Index */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <label className="block text-sm font-medium text-optics-blue/90 mb-3 uppercase tracking-wider">
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
                           text-optics-cyan text-xl font-mono focus:outline-none focus:border-optics-blue 
                           transition-all duration-300"
                  placeholder="1.5"
                />
              </motion.div>

              {/* R1 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                <label className="block text-sm font-medium text-optics-blue/90 mb-3 uppercase tracking-wider">
                  Radius of Curvature - First Surface (R₁)
                </label>
                <div className="flex items-center gap-3">
                  <motion.input
                    whileFocus="focus"
                    variants={inputVariants}
                    type="number"
                    step="0.01"
                    value={params.R1 ?? ''}
                    onChange={(e) => handleInputChange('R1', e.target.value)}
                    className="flex-1 px-6 py-4 bg-optics-darker/70 border-2 border-optics-blue/30 rounded-lg 
                             text-optics-cyan text-xl font-mono focus:outline-none focus:border-optics-blue 
                             transition-all duration-300"
                    placeholder="0.1"
                  />
                  <span className="text-optics-blue/60 font-mono text-sm">meters</span>
                </div>
              </motion.div>

              {/* R2 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
              >
                <label className="block text-sm font-medium text-optics-blue/90 mb-3 uppercase tracking-wider">
                  Radius of Curvature - Second Surface (R₂)
                </label>
                <div className="flex items-center gap-3">
                  <motion.input
                    whileFocus="focus"
                    variants={inputVariants}
                    type="number"
                    step="0.01"
                    value={params.R2 ?? ''}
                    onChange={(e) => handleInputChange('R2', e.target.value)}
                    className="flex-1 px-6 py-4 bg-optics-darker/70 border-2 border-optics-blue/30 rounded-lg 
                             text-optics-cyan text-xl font-mono focus:outline-none focus:border-optics-blue 
                             transition-all duration-300"
                    placeholder="-0.1"
                  />
                  <span className="text-optics-blue/60 font-mono text-sm">meters</span>
                </div>
              </motion.div>

              {/* Thickness */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
              >
                <label className="block text-sm font-medium text-optics-amber/90 mb-3 uppercase tracking-wider">
                  Lens Thickness (d) ⭐
                </label>
                <div className="flex items-center gap-3">
                  <motion.input
                    whileFocus="focus"
                    variants={inputVariants}
                    type="number"
                    step="0.001"
                    min="0"
                    value={params.d ?? ''}
                    onChange={(e) => handleInputChange('d', e.target.value)}
                    className="flex-1 px-6 py-4 bg-optics-darker/70 border-2 border-optics-amber/30 rounded-lg 
                             text-optics-amber text-xl font-mono focus:outline-none focus:border-optics-amber 
                             transition-all duration-300"
                    placeholder="0.01"
                  />
                  <span className="text-optics-blue/60 font-mono text-sm">meters</span>
                </div>
                <p className="text-xs text-optics-blue/50 mt-2 ml-1">
                  Center thickness of the lens (e.g., 0.01 m = 1 cm)
                </p>
              </motion.div>
            </div>

            {/* Calculate Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
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

              {result.fThick !== null && !error && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="mt-8 space-y-4"
                >
                  {/* Thick Lens Result */}
                  <div className="p-6 bg-gradient-to-br from-optics-amber/10 to-optics-cyan/10 
                               border-2 border-optics-amber/50 rounded-xl">
                    <div className="text-center">
                      <p className="text-sm text-optics-amber/70 mb-2 uppercase tracking-wider">
                        Thick Lens Focal Length
                      </p>
                      <p className="text-4xl md:text-5xl font-mono font-bold text-optics-amber text-glow-strong">
                        {result.fThick! > 0 ? '+' : ''}{result.fThick!.toFixed(4)} m
                      </p>
                    </div>
                  </div>

                  {/* Comparison */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-optics-darker/50 rounded-lg border border-optics-blue/20">
                      <p className="text-sm text-optics-blue/60 mb-1">Thin Lens (for comparison)</p>
                      <p className="text-xl font-mono text-optics-cyan">
                        {result.fThin! > 0 ? '+' : ''}{result.fThin!.toFixed(4)} m
                      </p>
                    </div>
                    <div className="p-4 bg-optics-darker/50 rounded-lg border border-optics-purple/30">
                      <p className="text-sm text-optics-purple/60 mb-1">Difference</p>
                      <p className="text-xl font-mono text-optics-purple">
                        {result.difference! > 0 ? '+' : ''}{result.difference!.toFixed(2)}%
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Info Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-glass-strong rounded-xl p-6 border border-optics-blue/30"
        >
          <h2 className="text-2xl font-display font-bold text-glow mb-4">
            When to Use Thick Lens Formula
          </h2>
          <div className="space-y-4 text-optics-blue/80">
            <p>
              The standard lens maker formula assumes a &quot;thin lens&quot; where thickness is negligible. 
              Use the thick lens formula when:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Lens thickness is comparable to the radii of curvature</li>
              <li>High precision is required in optical design</li>
              <li>Working with thick meniscus or high-power lenses</li>
              <li>Designing camera or microscope objectives</li>
            </ul>
          </div>
        </motion.section>

        {/* Related Tools */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <h2 className="text-xl font-display font-bold text-glow mb-4">Related Tools</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/focal-length">
              <motion.button whileHover={{ scale: 1.05 }} className="px-4 py-2 bg-optics-darker border border-optics-blue/50 text-optics-cyan rounded-lg">
                Thin Lens Calculator
              </motion.button>
            </Link>
            <Link href="/lens-combination">
              <motion.button whileHover={{ scale: 1.05 }} className="px-4 py-2 bg-optics-darker border border-optics-blue/50 text-optics-cyan rounded-lg">
                Lens Combination
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
    </main>
  );
}
