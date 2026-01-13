'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

interface CombinationParams {
  f1: number | null;
  f2: number | null;
  d: number | null; // separation distance
}

export default function LensCombinationContent() {
  const [params, setParams] = useState<CombinationParams>({
    f1: 0.1,   // 10 cm
    f2: 0.15,  // 15 cm
    d: 0,      // in contact
  });
  const [result, setResult] = useState<{
    fCombined: number | null;
    power: number | null;
    type: string;
  }>({ fCombined: null, power: null, type: '' });
  const [error, setError] = useState<string | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  // Combined focal length formula:
  // For lenses in contact: 1/f = 1/f1 + 1/f2
  // For separated lenses: 1/f = 1/f1 + 1/f2 - d/(f1*f2)
  const calculate = () => {
    setError(null);
    setIsCalculating(true);

    setTimeout(() => {
      const { f1, f2, d } = params;

      if (f1 === null || f2 === null || d === null) {
        setError('Please fill in all required fields');
        setIsCalculating(false);
        return;
      }

      if (f1 === 0 || f2 === 0) {
        setError('Focal length cannot be zero');
        setIsCalculating(false);
        return;
      }

      if (d < 0) {
        setError('Separation distance cannot be negative');
        setIsCalculating(false);
        return;
      }

      // Calculate combined power
      // P = P1 + P2 - d*P1*P2 = 1/f1 + 1/f2 - d/(f1*f2)
      const combinedPower = (1/f1) + (1/f2) - (d / (f1 * f2));

      if (Math.abs(combinedPower) < 0.0001) {
        setError('Combined system has infinite focal length (afocal system)');
        setIsCalculating(false);
        return;
      }

      const fCombined = 1 / combinedPower;
      const type = fCombined > 0 ? 'Converging' : 'Diverging';

      setResult({
        fCombined,
        power: combinedPower,
        type,
      });
      setIsCalculating(false);
    }, 300);
  };

  const handleInputChange = (field: keyof CombinationParams, value: string) => {
    const numValue = parseFloat(value);
    if (!isNaN(numValue) || value === '' || value === '-') {
      setParams(prev => ({
        ...prev,
        [field]: value === '' || value === '-' ? null : numValue,
      }));
      setResult({ fCombined: null, power: null, type: '' });
      setError(null);
    }
  };

  useEffect(() => {
    const { f1, f2, d } = params;
    if (f1 !== null && f1 !== 0 && f2 !== null && f2 !== 0 && d !== null && d >= 0) {
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
            <li className="text-optics-cyan">Lens Combination</li>
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
                Lens Combination Calculator
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-optics-blue/80 text-lg"
              >
                Calculate the combined focal length of two lenses
              </motion.p>
            </div>

            {/* Formula Display */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="mb-10 p-6 bg-optics-darker/50 rounded-xl border border-optics-blue/20"
            >
              <div className="text-center space-y-3">
                <div>
                  <p className="text-sm text-optics-blue/60 mb-1 uppercase tracking-wider">Lenses in Contact</p>
                  <p className="text-2xl font-mono text-optics-cyan font-bold">
                    1/f = 1/f₁ + 1/f₂
                  </p>
                </div>
                <div className="border-t border-optics-blue/20 pt-3">
                  <p className="text-sm text-optics-blue/60 mb-1 uppercase tracking-wider">Separated Lenses</p>
                  <p className="text-2xl font-mono text-optics-cyan font-bold">
                    1/f = 1/f₁ + 1/f₂ - d/(f₁f₂)
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Input Fields */}
            <div className="space-y-6 mb-8">
              {/* f1 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <label className="block text-sm font-medium text-optics-blue/90 mb-3 uppercase tracking-wider">
                  Focal Length of Lens 1 (f₁)
                </label>
                <div className="flex items-center gap-3">
                  <motion.input
                    whileFocus="focus"
                    variants={inputVariants}
                    type="number"
                    step="0.01"
                    value={params.f1 ?? ''}
                    onChange={(e) => handleInputChange('f1', e.target.value)}
                    className="flex-1 px-6 py-4 bg-optics-darker/70 border-2 border-optics-blue/30 rounded-lg 
                             text-optics-cyan text-xl font-mono focus:outline-none focus:border-optics-blue 
                             transition-all duration-300"
                    placeholder="0.1"
                  />
                  <span className="text-optics-blue/60 font-mono text-sm">meters</span>
                </div>
                <p className="text-xs text-optics-blue/50 mt-2 ml-1">
                  Positive for converging, negative for diverging
                </p>
              </motion.div>

              {/* f2 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                <label className="block text-sm font-medium text-optics-blue/90 mb-3 uppercase tracking-wider">
                  Focal Length of Lens 2 (f₂)
                </label>
                <div className="flex items-center gap-3">
                  <motion.input
                    whileFocus="focus"
                    variants={inputVariants}
                    type="number"
                    step="0.01"
                    value={params.f2 ?? ''}
                    onChange={(e) => handleInputChange('f2', e.target.value)}
                    className="flex-1 px-6 py-4 bg-optics-darker/70 border-2 border-optics-blue/30 rounded-lg 
                             text-optics-cyan text-xl font-mono focus:outline-none focus:border-optics-blue 
                             transition-all duration-300"
                    placeholder="0.15"
                  />
                  <span className="text-optics-blue/60 font-mono text-sm">meters</span>
                </div>
              </motion.div>

              {/* Separation */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
              >
                <label className="block text-sm font-medium text-optics-purple/90 mb-3 uppercase tracking-wider">
                  Separation Distance (d)
                </label>
                <div className="flex items-center gap-3">
                  <motion.input
                    whileFocus="focus"
                    variants={inputVariants}
                    type="number"
                    step="0.01"
                    min="0"
                    value={params.d ?? ''}
                    onChange={(e) => handleInputChange('d', e.target.value)}
                    className="flex-1 px-6 py-4 bg-optics-darker/70 border-2 border-optics-purple/30 rounded-lg 
                             text-optics-purple text-xl font-mono focus:outline-none focus:border-optics-purple 
                             transition-all duration-300"
                    placeholder="0"
                  />
                  <span className="text-optics-blue/60 font-mono text-sm">meters</span>
                </div>
                <p className="text-xs text-optics-blue/50 mt-2 ml-1">
                  Set to 0 for lenses in contact
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
              {isCalculating ? 'Calculating...' : 'Calculate Combined Focal Length'}
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

              {result.fCombined !== null && !error && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="mt-8 space-y-4"
                >
                  {/* Combined Focal Length */}
                  <div className="p-6 bg-gradient-to-br from-optics-blue/10 to-optics-cyan/10 
                               border-2 border-optics-cyan/50 rounded-xl">
                    <div className="text-center">
                      <p className="text-sm text-optics-blue/70 mb-2 uppercase tracking-wider">
                        Combined Focal Length
                      </p>
                      <p className="text-4xl md:text-5xl font-mono font-bold text-optics-cyan text-glow-strong">
                        {result.fCombined > 0 ? '+' : ''}{result.fCombined.toFixed(4)} m
                      </p>
                      <p className={`mt-2 font-medium ${
                        result.type === 'Converging' ? 'text-optics-cyan' : 'text-optics-purple'
                      }`}>
                        {result.type} System
                      </p>
                    </div>
                  </div>

                  {/* Additional Info */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-optics-darker/50 rounded-lg border border-optics-blue/20">
                      <p className="text-sm text-optics-blue/60 mb-1">Combined Power</p>
                      <p className="text-xl font-mono text-optics-cyan">
                        {result.power!.toFixed(2)} D (diopters)
                      </p>
                    </div>
                    <div className="p-4 bg-optics-darker/50 rounded-lg border border-optics-blue/20">
                      <p className="text-sm text-optics-blue/60 mb-1">Configuration</p>
                      <p className="text-xl font-mono text-optics-cyan">
                        {params.d === 0 ? 'In Contact' : `Separated by ${params.d} m`}
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
            Applications of Lens Combinations
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-optics-blue/80">
            <div>
              <h3 className="font-semibold text-optics-cyan mb-2">Telescopes</h3>
              <p className="text-sm">
                Use a long focal length objective with a short focal length eyepiece 
                to achieve high magnification.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-optics-cyan mb-2">Microscopes</h3>
              <p className="text-sm">
                Combine objective and eyepiece lenses with specific separation 
                for high magnification of small objects.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-optics-cyan mb-2">Camera Lenses</h3>
              <p className="text-sm">
                Multiple elements correct aberrations and provide zoom capability 
                through variable separation.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-optics-cyan mb-2">Achromatic Doublets</h3>
              <p className="text-sm">
                Converging and diverging lenses in contact reduce chromatic aberration 
                while maintaining focusing power.
              </p>
            </div>
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
                Focal Length Calculator
              </motion.button>
            </Link>
            <Link href="/thick-lens">
              <motion.button whileHover={{ scale: 1.05 }} className="px-4 py-2 bg-optics-darker border border-optics-blue/50 text-optics-cyan rounded-lg">
                Thick Lens Calculator
              </motion.button>
            </Link>
            <Link href="/magnification">
              <motion.button whileHover={{ scale: 1.05 }} className="px-4 py-2 bg-optics-darker border border-optics-blue/50 text-optics-cyan rounded-lg">
                Magnification Calculator
              </motion.button>
            </Link>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
