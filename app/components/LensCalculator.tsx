'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LensParams {
  n: number;      // 折射率
  R1: number;     // 第一表面曲率半径 (m)
  R2: number;     // 第二表面曲率半径 (m)
}

interface LensCalculatorProps {
  onParamsChange?: (params: LensParams, focalLength: number | null) => void;
}

export default function LensCalculator({ onParamsChange }: LensCalculatorProps = {}) {
  const [params, setParams] = useState<LensParams>({
    n: 1.5,
    R1: 0.1,
    R2: -0.1,
  });
  const [focalLength, setFocalLength] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  // 薄透镜公式: 1/f = (n-1)(1/R1 - 1/R2)
  const calculateFocalLength = () => {
    setError(null);
    setIsCalculating(true);
    
    setTimeout(() => {
      const { n, R1, R2 } = params;
      
      if (n <= 1) {
        setError('Refractive index must be greater than 1');
        setFocalLength(null);
        setIsCalculating(false);
        return;
      }

      if (R1 === 0 || R2 === 0) {
        setError('Radius of curvature cannot be zero');
        setFocalLength(null);
        setIsCalculating(false);
        return;
      }

      const denominator = (n - 1) * (1/R1 - 1/R2);
      
      if (Math.abs(denominator) < 0.0001) {
        setError('Invalid lens configuration');
        setFocalLength(null);
        setIsCalculating(false);
        return;
      }

      const focalLength = 1 / denominator;
      setFocalLength(focalLength);
      setIsCalculating(false);
      if (onParamsChange) {
        onParamsChange(params, focalLength);
      }
    }, 300);
  };

  const handleInputChange = (field: keyof LensParams, value: string) => {
    const numValue = parseFloat(value);
    if (!isNaN(numValue) || value === '' || value === '-') {
      const newParams = { ...params, [field]: value === '' || value === '-' ? 0 : numValue };
      setParams(newParams);
      setFocalLength(null);
      setError(null);
      if (onParamsChange) {
        onParamsChange(newParams, null);
      }
    }
  };

  useEffect(() => {
    // Auto-calculate when all inputs are valid
    if (params.n > 1 && params.R1 !== 0 && params.R2 !== 0) {
      const timer = setTimeout(() => {
        calculateFocalLength();
      }, 500);
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative z-10 max-w-4xl mx-auto"
    >
      <div className="bg-glass-strong rounded-2xl p-8 md:p-12 border border-optics-blue/30 shadow-2xl">
        {/* Header */}
        <div className="mb-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-display font-bold text-glow mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Lens Maker Formula
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-optics-blue/80 text-lg"
          >
            Calculate focal length from lens parameters
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
            <p className="text-sm text-optics-blue/60 mb-2 uppercase tracking-wider">Formula</p>
            <p className="text-3xl md:text-4xl font-mono text-optics-cyan font-bold">
              1/f = (n-1)(1/R₁ - 1/R₂)
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
              value={params.n}
              onChange={(e) => handleInputChange('n', e.target.value)}
              className="w-full px-6 py-4 bg-optics-darker/70 border-2 border-optics-blue/30 rounded-lg 
                       text-optics-cyan text-xl font-mono focus:outline-none focus:border-optics-blue 
                       transition-all duration-300"
              placeholder="1.5"
            />
            <p className="text-xs text-optics-blue/50 mt-2 ml-1">
              Typical: 1.5 (glass), 1.33 (water), 1.52 (crown glass)
            </p>
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
                value={params.R1}
                onChange={(e) => handleInputChange('R1', e.target.value)}
                className="flex-1 px-6 py-4 bg-optics-darker/70 border-2 border-optics-blue/30 rounded-lg 
                         text-optics-cyan text-xl font-mono focus:outline-none focus:border-optics-blue 
                         transition-all duration-300"
                placeholder="0.1"
              />
              <span className="text-optics-blue/60 font-mono text-sm">meters</span>
            </div>
            <p className="text-xs text-optics-blue/50 mt-2 ml-1">
              Positive for convex, negative for concave
            </p>
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
                value={params.R2}
                onChange={(e) => handleInputChange('R2', e.target.value)}
                className="flex-1 px-6 py-4 bg-optics-darker/70 border-2 border-optics-blue/30 rounded-lg 
                         text-optics-cyan text-xl font-mono focus:outline-none focus:border-optics-blue 
                         transition-all duration-300"
                placeholder="-0.1"
              />
              <span className="text-optics-blue/60 font-mono text-sm">meters</span>
            </div>
            <p className="text-xs text-optics-blue/50 mt-2 ml-1">
              Positive for convex, negative for concave
            </p>
          </motion.div>
        </div>

        {/* Calculate Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={calculateFocalLength}
          disabled={isCalculating}
          className="w-full py-5 bg-gradient-to-r from-optics-blue to-optics-cyan 
                   text-optics-darker font-bold text-lg rounded-lg
                   border-glow hover:shadow-[0_0_40px_rgba(0,217,255,0.6)]
                   transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed
                   uppercase tracking-wider"
        >
          {isCalculating ? 'Calculating...' : 'Calculate Focal Length'}
        </motion.button>

        {/* Result Display */}
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

          {focalLength !== null && !error && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="mt-8 p-8 bg-gradient-to-br from-optics-blue/10 to-optics-cyan/10 
                       border-2 border-optics-blue/50 rounded-xl"
            >
              <div className="text-center">
                <p className="text-sm text-optics-blue/70 mb-3 uppercase tracking-wider">Focal Length</p>
                <motion.p
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.2 }}
                  className="text-5xl md:text-6xl font-mono font-bold text-optics-cyan text-glow-strong mb-2"
                >
                  {focalLength > 0 ? '+' : ''}{focalLength.toFixed(4)} m
                </motion.p>
                <p className="text-optics-blue/80 font-medium">
                  {focalLength > 0 ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="w-2 h-2 bg-optics-cyan rounded-full animate-pulse"></span>
                      Converging Lens
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <span className="w-2 h-2 bg-optics-purple rounded-full animate-pulse"></span>
                      Diverging Lens
                    </span>
                  )}
                </p>
                {Math.abs(focalLength) < 0.01 && (
                  <p className="text-xs text-optics-blue/50 mt-2">Very short focal length</p>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

