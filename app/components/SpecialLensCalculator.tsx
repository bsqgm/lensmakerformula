'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LensDefaults {
  n: number;
  R1: number;
  R2: number;
}

interface SpecialLensCalculatorProps {
  title: string;
  description: string;
  defaults: LensDefaults;
  requirePositive?: boolean;
}

interface LensParams {
  n: number | null;
  R1: number | null;
  R2: number | null;
}

export default function SpecialLensCalculator({
  title,
  description,
  defaults,
  requirePositive = true,
}: SpecialLensCalculatorProps) {
  const [params, setParams] = useState<LensParams>(defaults);
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

      const term1 = R1 === Infinity ? 0 : 1 / R1;
      const term2 = R2 === Infinity ? 0 : 1 / R2;
      const denominator = (n - 1) * (term1 - term2);

      if (Math.abs(denominator) < 0.0001) {
        setError('This lens geometry has no optical power');
        setIsCalculating(false);
        return;
      }

      const focalLength = 1 / denominator;

      if (requirePositive && focalLength <= 0) {
        setError('This input creates a diverging lens. Adjust the signs or use the concave lens calculator.');
        setIsCalculating(false);
        return;
      }

      setResult(focalLength);
      setIsCalculating(false);
    }, 250);
  };

  useEffect(() => {
    const { n, R1, R2 } = params;
    if (n !== null && R1 !== null && R2 !== null) {
      const timer = setTimeout(calculate, 500);
      return () => clearTimeout(timer);
    }
  }, [params]);

  const handleInputChange = (field: keyof LensParams, value: string) => {
    if (value === 'Infinity' || value === '∞' || value === 'inf') {
      setParams((current) => ({ ...current, [field]: Infinity }));
    } else {
      const parsed = parseFloat(value);
      if (!isNaN(parsed) || value === '' || value === '-') {
        setParams((current) => ({
          ...current,
          [field]: value === '' || value === '-' ? null : parsed,
        }));
      }
    }

    setResult(null);
    setError(null);
  };

  const inputVariants = {
    focus: {
      scale: 1.01,
      boxShadow: '0 0 30px rgba(0, 217, 255, 0.35)',
    },
  };

  return (
    <div className="bg-glass-strong rounded-2xl p-8 border border-optics-cyan/30 shadow-2xl">
      <div className="mb-6">
        <h3 className="text-2xl font-display font-bold text-optics-cyan mb-2">{title}</h3>
        <p className="text-optics-blue/80">{description}</p>
      </div>

      <div className="bg-optics-darker/50 rounded-lg p-5 text-center mb-6 border border-optics-blue/20">
        <p className="text-sm text-optics-blue/60 mb-2 uppercase tracking-wider">Lens Maker Formula</p>
        <p className="text-2xl md:text-3xl font-mono text-optics-cyan font-bold">
          1/f = (n-1)(1/R₁ - 1/R₂)
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-optics-blue/90 mb-2 uppercase tracking-wider">
            Refractive Index (n)
          </label>
          <motion.input
            whileFocus="focus"
            variants={inputVariants}
            type="number"
            min="1.01"
            step="0.01"
            value={params.n ?? ''}
            onChange={(event) => handleInputChange('n', event.target.value)}
            className="w-full px-5 py-4 bg-optics-darker/70 border-2 border-optics-blue/30 rounded-lg text-optics-cyan text-lg font-mono focus:outline-none focus:border-optics-cyan transition-all"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-optics-blue/90 mb-2 uppercase tracking-wider">
            First Surface Radius (R₁)
          </label>
          <motion.input
            whileFocus="focus"
            variants={inputVariants}
            type="text"
            value={params.R1 === Infinity ? '∞' : (params.R1 ?? '')}
            onChange={(event) => handleInputChange('R1', event.target.value)}
            className="w-full px-5 py-4 bg-optics-darker/70 border-2 border-optics-blue/30 rounded-lg text-optics-cyan text-lg font-mono focus:outline-none focus:border-optics-cyan transition-all"
          />
          <p className="text-xs text-optics-blue/55 mt-2">Use `∞` for a plano surface.</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-optics-blue/90 mb-2 uppercase tracking-wider">
            Second Surface Radius (R₂)
          </label>
          <motion.input
            whileFocus="focus"
            variants={inputVariants}
            type="text"
            value={params.R2 === Infinity ? '∞' : (params.R2 ?? '')}
            onChange={(event) => handleInputChange('R2', event.target.value)}
            className="w-full px-5 py-4 bg-optics-darker/70 border-2 border-optics-blue/30 rounded-lg text-optics-cyan text-lg font-mono focus:outline-none focus:border-optics-cyan transition-all"
          />
          <p className="text-xs text-optics-blue/55 mt-2">Convex second surfaces are usually negative.</p>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {error ? (
          <motion.div
            key="error"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 text-red-300"
          >
            {error}
          </motion.div>
        ) : result !== null ? (
          <motion.div
            key="result"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-optics-darker/70 border border-optics-cyan/30 rounded-lg p-6"
          >
            <p className="text-sm text-optics-blue/60 uppercase tracking-wider mb-2">Calculated Focal Length</p>
            <p className="text-4xl font-mono font-bold text-optics-cyan mb-3">
              {result.toFixed(4)} m
            </p>
            <p className="text-optics-blue/70 text-sm">
              Equivalent optical power: {(1 / result).toFixed(2)} diopters
            </p>
          </motion.div>
        ) : (
          <motion.div
            key="placeholder"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-optics-darker/30 border border-optics-blue/20 rounded-lg p-6 text-optics-blue/60"
          >
            {isCalculating ? 'Calculating focal length...' : 'Enter lens geometry to see the focal length.'}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
