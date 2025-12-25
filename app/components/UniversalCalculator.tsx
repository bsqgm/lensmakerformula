'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export type CalculationMode = 'f' | 'n' | 'R1' | 'R2';

interface LensParams {
  n: number | null;
  R1: number | null;
  R2: number | null;
  f: number | null;
}

interface UniversalCalculatorProps {
  mode: CalculationMode;
  title: string;
  description: string;
  onResultChange?: (result: number | null) => void;
}

export default function UniversalCalculator({
  mode,
  title,
  description,
  onResultChange,
}: UniversalCalculatorProps) {
  const [params, setParams] = useState<LensParams>({
    n: mode === 'n' ? null : 1.5,
    R1: mode === 'R1' ? null : 0.1,
    R2: mode === 'R2' ? null : -0.1,
    f: mode === 'f' ? null : null,
  });
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const calculate = () => {
    setError(null);
    setIsCalculating(true);
    
    setTimeout(() => {
      try {
        let calculatedValue: number | null = null;

        switch (mode) {
          case 'f': {
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
            if (R1 === 0 || R2 === 0) {
              setError('Radius of curvature cannot be zero');
              setIsCalculating(false);
              return;
            }
            const denominator = (n - 1) * (1/R1 - 1/R2);
            if (Math.abs(denominator) < 0.0001) {
              setError('Invalid lens configuration');
              setIsCalculating(false);
              return;
            }
            calculatedValue = 1 / denominator;
            break;
          }

          case 'n': {
            const { f, R1, R2 } = params;
            if (f === null || R1 === null || R2 === null) {
              setError('Please fill in all required fields');
              setIsCalculating(false);
              return;
            }
            if (f === 0) {
              setError('Focal length cannot be zero');
              setIsCalculating(false);
              return;
            }
            if (R1 === 0 || R2 === 0) {
              setError('Radius of curvature cannot be zero');
              setIsCalculating(false);
              return;
            }
            const denominator = f * (1/R1 - 1/R2);
            if (Math.abs(denominator) < 0.0001) {
              setError('Invalid lens configuration');
              setIsCalculating(false);
              return;
            }
            calculatedValue = 1 + 1 / denominator;
            if (calculatedValue <= 1) {
              setError('Calculated refractive index must be greater than 1');
              setIsCalculating(false);
              return;
            }
            break;
          }

          case 'R1': {
            const { f, n, R2 } = params;
            if (f === null || n === null || R2 === null) {
              setError('Please fill in all required fields');
              setIsCalculating(false);
              return;
            }
            if (f === 0) {
              setError('Focal length cannot be zero');
              setIsCalculating(false);
              return;
            }
            if (n <= 1) {
              setError('Refractive index must be greater than 1');
              setIsCalculating(false);
              return;
            }
            if (R2 === 0) {
              setError('R₂ cannot be zero');
              setIsCalculating(false);
              return;
            }
            const term = 1 / (f * (n - 1));
            const denominator = 1/R2 + term;
            if (Math.abs(denominator) < 0.0001) {
              setError('Invalid lens configuration');
              setIsCalculating(false);
              return;
            }
            calculatedValue = 1 / denominator;
            break;
          }

          case 'R2': {
            const { f, n, R1 } = params;
            if (f === null || n === null || R1 === null) {
              setError('Please fill in all required fields');
              setIsCalculating(false);
              return;
            }
            if (f === 0) {
              setError('Focal length cannot be zero');
              setIsCalculating(false);
              return;
            }
            if (n <= 1) {
              setError('Refractive index must be greater than 1');
              setIsCalculating(false);
              return;
            }
            if (R1 === 0) {
              setError('R₁ cannot be zero');
              setIsCalculating(false);
              return;
            }
            const term = 1 / (f * (n - 1));
            const denominator = 1/R1 - term;
            if (Math.abs(denominator) < 0.0001) {
              setError('Invalid lens configuration');
              setIsCalculating(false);
              return;
            }
            calculatedValue = 1 / denominator;
            break;
          }
        }

        setResult(calculatedValue);
        setIsCalculating(false);
        if (onResultChange) {
          onResultChange(calculatedValue);
        }
      } catch (err) {
        setError('Calculation error occurred');
        setResult(null);
        setIsCalculating(false);
      }
    }, 300);
  };

  const handleInputChange = (field: keyof LensParams, value: string) => {
    const numValue = parseFloat(value);
    if (!isNaN(numValue) || value === '' || value === '-') {
      const newParams = { 
        ...params, 
        [field]: value === '' || value === '-' ? null : numValue 
      };
      setParams(newParams);
      setResult(null);
      setError(null);
      if (onResultChange) {
        onResultChange(null);
      }
    }
  };

  useEffect(() => {
    const requiredFields = getRequiredFields(mode);
    const allFieldsValid = requiredFields.every(field => {
      const value = params[field];
      return value !== null && value !== undefined && value !== 0;
    });

    if (allFieldsValid) {
      const timer = setTimeout(() => {
        calculate();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [params, mode]);

  const getRequiredFields = (calcMode: CalculationMode): (keyof LensParams)[] => {
    switch (calcMode) {
      case 'f': return ['n', 'R1', 'R2'];
      case 'n': return ['f', 'R1', 'R2'];
      case 'R1': return ['f', 'n', 'R2'];
      case 'R2': return ['f', 'n', 'R1'];
    }
  };

  const getResultLabel = (): string => {
    switch (mode) {
      case 'f': return 'Focal Length';
      case 'n': return 'Refractive Index';
      case 'R1': return 'First Surface Radius';
      case 'R2': return 'Second Surface Radius';
    }
  };

  const getResultUnit = (): string => {
    switch (mode) {
      case 'f': return 'm';
      case 'n': return '';
      case 'R1': return 'm';
      case 'R2': return 'm';
    }
  };

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
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-optics-blue/80 text-lg"
          >
            {description}
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
          {/* Refractive Index (n) */}
          {mode !== 'n' && (
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
              <p className="text-xs text-optics-blue/50 mt-2 ml-1">
                Typical: 1.5 (glass), 1.33 (water), 1.52 (crown glass)
              </p>
            </motion.div>
          )}

          {/* R1 */}
          {mode !== 'R1' && (
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
              <p className="text-xs text-optics-blue/50 mt-2 ml-1">
                Positive for convex, negative for concave
              </p>
            </motion.div>
          )}

          {/* R2 */}
          {mode !== 'R2' && (
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
              <p className="text-xs text-optics-blue/50 mt-2 ml-1">
                Positive for convex, negative for concave
              </p>
            </motion.div>
          )}

          {/* Focal Length (f) */}
          {mode !== 'f' && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
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
                Positive for converging, negative for diverging
              </p>
            </motion.div>
          )}
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
          {isCalculating ? 'Calculating...' : `Calculate ${getResultLabel()}`}
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

          {result !== null && !error && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="mt-8 p-8 bg-gradient-to-br from-optics-blue/10 to-optics-cyan/10 
                       border-2 border-optics-blue/50 rounded-xl"
            >
              <div className="text-center">
                <p className="text-sm text-optics-blue/70 mb-3 uppercase tracking-wider">
                  {getResultLabel()}
                </p>
                <motion.p
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.2 }}
                  className="text-5xl md:text-6xl font-mono font-bold text-optics-cyan text-glow-strong mb-2"
                >
                  {result > 0 ? '+' : ''}{result.toFixed(4)} {getResultUnit() && getResultUnit()}
                </motion.p>
                {mode === 'f' && (
                  <p className="text-optics-blue/80 font-medium">
                    {result > 0 ? (
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
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

