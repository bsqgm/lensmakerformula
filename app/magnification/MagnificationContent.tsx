'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

interface MagnificationParams {
  f: number | null;  // focal length
  s: number | null;  // object distance
}

interface ImageResult {
  sPrime: number | null;      // image distance
  magnification: number | null;
  isReal: boolean;
  isUpright: boolean;
  isMagnified: boolean;
}

export default function MagnificationContent() {
  const [params, setParams] = useState<MagnificationParams>({
    f: 0.1,   // 10 cm focal length
    s: 0.2,   // 20 cm object distance
  });
  const [result, setResult] = useState<ImageResult>({
    sPrime: null,
    magnification: null,
    isReal: false,
    isUpright: false,
    isMagnified: false,
  });
  const [error, setError] = useState<string | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  // Thin lens equation: 1/f = 1/s + 1/s'
  // Magnification: m = -s'/s
  const calculate = () => {
    setError(null);
    setIsCalculating(true);

    setTimeout(() => {
      const { f, s } = params;

      if (f === null || s === null) {
        setError('Please fill in all required fields');
        setIsCalculating(false);
        return;
      }

      if (f === 0) {
        setError('Focal length cannot be zero');
        setIsCalculating(false);
        return;
      }

      if (s === 0) {
        setError('Object distance cannot be zero');
        setIsCalculating(false);
        return;
      }

      // s must be positive (object on the left of lens)
      if (s < 0) {
        setError('Object distance should be positive');
        setIsCalculating(false);
        return;
      }

      // Calculate image distance: 1/s' = 1/f - 1/s
      const oneOverSPrime = (1/f) - (1/s);
      
      if (Math.abs(oneOverSPrime) < 0.0001) {
        setError('Object is at focal point - image at infinity');
        setIsCalculating(false);
        return;
      }

      const sPrime = 1 / oneOverSPrime;
      const magnification = -sPrime / s;

      // Determine image characteristics
      const isReal = sPrime > 0;
      const isUpright = magnification > 0;
      const isMagnified = Math.abs(magnification) > 1;

      setResult({
        sPrime,
        magnification,
        isReal,
        isUpright,
        isMagnified,
      });
      setIsCalculating(false);
    }, 300);
  };

  const handleInputChange = (field: keyof MagnificationParams, value: string) => {
    const numValue = parseFloat(value);
    if (!isNaN(numValue) || value === '' || value === '-') {
      setParams(prev => ({
        ...prev,
        [field]: value === '' || value === '-' ? null : numValue,
      }));
      setResult({
        sPrime: null,
        magnification: null,
        isReal: false,
        isUpright: false,
        isMagnified: false,
      });
      setError(null);
    }
  };

  useEffect(() => {
    const { f, s } = params;
    if (f !== null && f !== 0 && s !== null && s !== 0 && s > 0) {
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
            <li className="text-optics-cyan">Magnification</li>
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
                Magnification Calculator
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-optics-blue/80 text-lg"
              >
                Calculate image distance, magnification, and image characteristics
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
                  <p className="text-sm text-optics-blue/60 mb-1 uppercase tracking-wider">Thin Lens Equation</p>
                  <p className="text-2xl font-mono text-optics-cyan font-bold">
                    1/f = 1/s + 1/s&apos;
                  </p>
                </div>
                <div className="border-t border-optics-blue/20 pt-3">
                  <p className="text-sm text-optics-blue/60 mb-1 uppercase tracking-wider">Linear Magnification</p>
                  <p className="text-2xl font-mono text-optics-cyan font-bold">
                    m = -s&apos;/s = h&apos;/h
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Input Fields */}
            <div className="space-y-6 mb-8">
              {/* Focal Length */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <label className="block text-sm font-medium text-optics-blue/90 mb-3 uppercase tracking-wider">
                  Focal Length (f)
                </label>
                <div className="flex items-center gap-3">
                  <motion.input
                    whileFocus="focus"
                    variants={inputVariants}
                    type="number"
                    step="0.01"
                    value={params.f ?? ''}
                    onChange={(e) => handleInputChange('f', e.target.value)}
                    className="flex-1 px-6 py-4 bg-optics-darker/70 border-2 border-optics-blue/30 rounded-lg 
                             text-optics-cyan text-xl font-mono focus:outline-none focus:border-optics-blue 
                             transition-all duration-300"
                    placeholder="0.1"
                  />
                  <span className="text-optics-blue/60 font-mono text-sm">meters</span>
                </div>
                <p className="text-xs text-optics-blue/50 mt-2 ml-1">
                  Positive for converging lens, negative for diverging lens
                </p>
              </motion.div>

              {/* Object Distance */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                <label className="block text-sm font-medium text-optics-amber/90 mb-3 uppercase tracking-wider">
                  Object Distance (s) ⭐
                </label>
                <div className="flex items-center gap-3">
                  <motion.input
                    whileFocus="focus"
                    variants={inputVariants}
                    type="number"
                    step="0.01"
                    min="0.001"
                    value={params.s ?? ''}
                    onChange={(e) => handleInputChange('s', e.target.value)}
                    className="flex-1 px-6 py-4 bg-optics-darker/70 border-2 border-optics-amber/30 rounded-lg 
                             text-optics-amber text-xl font-mono focus:outline-none focus:border-optics-amber 
                             transition-all duration-300"
                    placeholder="0.2"
                  />
                  <span className="text-optics-blue/60 font-mono text-sm">meters</span>
                </div>
                <p className="text-xs text-optics-blue/50 mt-2 ml-1">
                  Distance from object to lens (must be positive)
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
              {isCalculating ? 'Calculating...' : 'Calculate Magnification'}
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

              {result.magnification !== null && !error && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="mt-8 space-y-4"
                >
                  {/* Magnification */}
                  <div className="p-6 bg-gradient-to-br from-optics-blue/10 to-optics-cyan/10 
                               border-2 border-optics-cyan/50 rounded-xl">
                    <div className="text-center">
                      <p className="text-sm text-optics-blue/70 mb-2 uppercase tracking-wider">
                        Linear Magnification
                      </p>
                      <p className="text-4xl md:text-5xl font-mono font-bold text-optics-cyan text-glow-strong">
                        m = {result.magnification > 0 ? '+' : ''}{result.magnification.toFixed(3)}
                      </p>
                    </div>
                  </div>

                  {/* Image Distance */}
                  <div className="p-4 bg-optics-darker/50 rounded-lg border border-optics-blue/20">
                    <div className="text-center">
                      <p className="text-sm text-optics-blue/60 mb-1">Image Distance (s&apos;)</p>
                      <p className="text-2xl font-mono text-optics-cyan">
                        {result.sPrime! > 0 ? '+' : ''}{result.sPrime!.toFixed(4)} m
                      </p>
                    </div>
                  </div>

                  {/* Image Characteristics */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className={`p-4 rounded-lg border text-center ${
                      result.isReal 
                        ? 'bg-green-900/20 border-green-500/30' 
                        : 'bg-purple-900/20 border-purple-500/30'
                    }`}>
                      <p className="text-xs text-optics-blue/60 mb-1">Type</p>
                      <p className={`text-lg font-bold ${
                        result.isReal ? 'text-green-400' : 'text-purple-400'
                      }`}>
                        {result.isReal ? 'Real' : 'Virtual'}
                      </p>
                    </div>
                    <div className={`p-4 rounded-lg border text-center ${
                      result.isUpright 
                        ? 'bg-cyan-900/20 border-cyan-500/30' 
                        : 'bg-amber-900/20 border-amber-500/30'
                    }`}>
                      <p className="text-xs text-optics-blue/60 mb-1">Orientation</p>
                      <p className={`text-lg font-bold ${
                        result.isUpright ? 'text-cyan-400' : 'text-amber-400'
                      }`}>
                        {result.isUpright ? 'Upright' : 'Inverted'}
                      </p>
                    </div>
                    <div className={`p-4 rounded-lg border text-center ${
                      result.isMagnified 
                        ? 'bg-blue-900/20 border-blue-500/30' 
                        : 'bg-gray-900/20 border-gray-500/30'
                    }`}>
                      <p className="text-xs text-optics-blue/60 mb-1">Size</p>
                      <p className={`text-lg font-bold ${
                        result.isMagnified ? 'text-blue-400' : 'text-gray-400'
                      }`}>
                        {result.isMagnified ? 'Magnified' : 'Reduced'}
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
            Understanding Magnification
          </h2>
          <div className="space-y-4 text-optics-blue/80">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-optics-cyan mb-2">Magnification Sign</h3>
                <ul className="text-sm space-y-1">
                  <li><strong>m &gt; 0:</strong> Upright image (same orientation as object)</li>
                  <li><strong>m &lt; 0:</strong> Inverted image (upside down)</li>
                  <li><strong>|m| &gt; 1:</strong> Magnified (larger than object)</li>
                  <li><strong>|m| &lt; 1:</strong> Reduced (smaller than object)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-optics-cyan mb-2">Image Distance Sign</h3>
                <ul className="text-sm space-y-1">
                  <li><strong>s&apos; &gt; 0:</strong> Real image (same side as light exits)</li>
                  <li><strong>s&apos; &lt; 0:</strong> Virtual image (same side as object)</li>
                </ul>
              </div>
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
            <Link href="/lens-combination">
              <motion.button whileHover={{ scale: 1.05 }} className="px-4 py-2 bg-optics-darker border border-optics-blue/50 text-optics-cyan rounded-lg">
                Lens Combination
              </motion.button>
            </Link>
            <Link href="/thick-lens">
              <motion.button whileHover={{ scale: 1.05 }} className="px-4 py-2 bg-optics-darker border border-optics-blue/50 text-optics-cyan rounded-lg">
                Thick Lens Calculator
              </motion.button>
            </Link>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
