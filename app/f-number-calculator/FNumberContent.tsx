'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

type CalcMode = 'fnumber' | 'aperture';

export default function FNumberContent() {
  const [mode, setMode] = useState<CalcMode>('fnumber');
  const [focalLengthMm, setFocalLengthMm] = useState<string>('50');
  const [apertureMm, setApertureMm] = useState<string>('25');
  const [fNumber, setFNumber] = useState<string>('2');
  const [result, setResult] = useState<{ n: number; d: number } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const calculate = () => {
    setError(null);
    setResult(null);
    setIsCalculating(true);

    setTimeout(() => {
      if (mode === 'fnumber') {
        const f = parseFloat(focalLengthMm);
        const d = parseFloat(apertureMm);
        if (isNaN(f) || isNaN(d) || f <= 0 || d <= 0) {
          setError('Enter valid focal length and aperture diameter (positive numbers).');
          setIsCalculating(false);
          return;
        }
        const n = f / d;
        setResult({ n, d });
      } else {
        const f = parseFloat(focalLengthMm);
        const n = parseFloat(fNumber);
        if (isNaN(f) || isNaN(n) || f <= 0 || n <= 0) {
          setError('Enter valid focal length and f-number (positive numbers).');
          setIsCalculating(false);
          return;
        }
        const d = f / n;
        setResult({ n, d });
      }
      setIsCalculating(false);
    }, 200);
  };

  const handleFocalChange = (v: string) => {
    setFocalLengthMm(v);
    setResult(null);
    setError(null);
  };
  const handleApertureChange = (v: string) => {
    setApertureMm(v);
    setResult(null);
    setError(null);
  };
  const handleFNumberChange = (v: string) => {
    setFNumber(v);
    setResult(null);
    setError(null);
  };

  return (
    <main className="min-h-screen relative z-10 pt-20 pb-16 px-4">
      <div className="max-w-5xl mx-auto">
        <nav className="mb-8 text-sm">
          <ol className="flex items-center gap-2 text-optics-blue/60">
            <li><Link href="/" className="hover:text-optics-cyan transition-colors">Home</Link></li>
            <li>/</li>
            <li><Link href="/#tools" className="hover:text-optics-cyan transition-colors">Calculators</Link></li>
            <li>/</li>
            <li className="text-optics-cyan">F-Number Calculator</li>
          </ol>
        </nav>

        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold text-glow-strong mb-6">
            F-Number Calculator (F-Stop)
          </h1>
          <p className="text-xl text-optics-blue/80 leading-relaxed">
            Calculate <strong>f-number</strong> (f-stop) from focal length and aperture diameter, or find aperture diameter from focal length and f-number.
            Uses the formula <strong>N = f / D</strong>. Free online f number calculator for photography and optics.
          </p>
          <a href="#calculator" className="flex w-fit items-center gap-2 mt-6 px-6 py-3 bg-gradient-to-r from-optics-blue to-optics-cyan text-optics-darker font-bold rounded-lg hover:shadow-[0_0_30px_rgba(0,217,255,0.5)] transition-all">
            Use F-Number Calculator ↓
          </a>
        </motion.header>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-glass-strong rounded-xl p-6 mb-8 border border-optics-blue/30"
        >
          <p className="text-sm text-optics-blue/60 mb-2 uppercase tracking-wider">F-Number Formula</p>
          <p className="text-2xl md:text-3xl font-mono text-optics-cyan font-bold">
            N = f / D
          </p>
          <p className="text-optics-blue/70 mt-2 text-sm">
            N = f-number (f-stop), f = focal length, D = aperture (entrance pupil) diameter. Use same units (e.g. mm).
          </p>
        </motion.section>

        <motion.section
          id="calculator"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-glass-strong rounded-2xl p-8 md:p-10 border border-optics-blue/30 mb-12"
        >
          <div className="flex gap-4 mb-6">
            <button
              type="button"
              onClick={() => { setMode('fnumber'); setResult(null); setError(null); }}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${mode === 'fnumber' ? 'bg-optics-cyan text-optics-darker' : 'bg-optics-darker/70 text-optics-blue/80 hover:bg-optics-blue/20'}`}
            >
              Find f-number (N)
            </button>
            <button
              type="button"
              onClick={() => { setMode('aperture'); setResult(null); setError(null); }}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${mode === 'aperture' ? 'bg-optics-cyan text-optics-darker' : 'bg-optics-darker/70 text-optics-blue/80 hover:bg-optics-blue/20'}`}
            >
              Find aperture (D)
            </button>
          </div>

          <div className="space-y-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-optics-blue/90 mb-2 uppercase tracking-wider">Focal length</label>
              <div className="flex items-center gap-3">
                <input
                  type="number"
                  step="0.1"
                  min="0.1"
                  value={focalLengthMm}
                  onChange={(e) => handleFocalChange(e.target.value)}
                  className="flex-1 px-4 py-3 bg-optics-darker/70 border-2 border-optics-blue/30 rounded-lg text-optics-cyan font-mono focus:outline-none focus:border-optics-blue"
                  placeholder="50"
                />
                <span className="text-optics-blue/60 text-sm">mm</span>
              </div>
            </div>

            {mode === 'fnumber' ? (
              <div>
                <label className="block text-sm font-medium text-optics-blue/90 mb-2 uppercase tracking-wider">Aperture diameter (D)</label>
                <div className="flex items-center gap-3">
                  <input
                    type="number"
                    step="0.1"
                    min="0.1"
                    value={apertureMm}
                    onChange={(e) => handleApertureChange(e.target.value)}
                    className="flex-1 px-4 py-3 bg-optics-darker/70 border-2 border-optics-blue/30 rounded-lg text-optics-cyan font-mono focus:outline-none focus:border-optics-blue"
                    placeholder="25"
                  />
                  <span className="text-optics-blue/60 text-sm">mm</span>
                </div>
              </div>
            ) : (
              <div>
                <label className="block text-sm font-medium text-optics-blue/90 mb-2 uppercase tracking-wider">F-number (N, f-stop)</label>
                <div className="flex items-center gap-3">
                  <input
                    type="number"
                    step="0.1"
                    min="0.5"
                    value={fNumber}
                    onChange={(e) => handleFNumberChange(e.target.value)}
                    className="flex-1 px-4 py-3 bg-optics-darker/70 border-2 border-optics-blue/30 rounded-lg text-optics-cyan font-mono focus:outline-none focus:border-optics-blue"
                    placeholder="2"
                  />
                  <span className="text-optics-blue/60 text-sm">e.g. f/2, f/5.6</span>
                </div>
              </div>
            )}
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={calculate}
            disabled={isCalculating}
            className="w-full py-4 bg-gradient-to-r from-optics-blue to-optics-cyan text-optics-darker font-bold rounded-lg hover:shadow-[0_0_30px_rgba(0,217,255,0.4)] transition-all disabled:opacity-50"
          >
            {isCalculating ? 'Calculating...' : 'Calculate'}
          </motion.button>

          <AnimatePresence mode="wait">
            {error && (
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-6 text-red-400 text-sm"
              >
                {error}
              </motion.p>
            )}
            {result && !error && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-6 p-6 bg-optics-darker/50 rounded-xl border border-optics-cyan/30"
              >
                {mode === 'fnumber' ? (
                  <>
                    <p className="text-sm text-optics-blue/60 mb-1">F-number (f-stop)</p>
                    <p className="text-3xl font-mono font-bold text-optics-cyan">f/{result.n.toFixed(1)}</p>
                    <p className="text-optics-blue/70 text-sm mt-2">N = {focalLengthMm} / {apertureMm} = {result.n.toFixed(2)}</p>
                  </>
                ) : (
                  <>
                    <p className="text-sm text-optics-blue/60 mb-1">Aperture diameter</p>
                    <p className="text-3xl font-mono font-bold text-optics-cyan">{result.d.toFixed(2)} mm</p>
                    <p className="text-optics-blue/70 text-sm mt-2">D = f / N = {focalLengthMm} / {fNumber} = {result.d.toFixed(2)} mm</p>
                  </>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl font-display font-bold text-glow mb-4">What is F-Number?</h2>
          <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30 space-y-4 text-optics-blue/80">
            <p>
              The <strong className="text-optics-cyan">f-number</strong> (or f-stop) is the ratio of focal length to aperture diameter: <strong>N = f / D</strong>.
              Smaller f-numbers (e.g. f/2) mean a larger aperture and more light; larger f-numbers (e.g. f/16) mean a smaller aperture and less light.
            </p>
            <p>
              To get the <strong>focal length</strong> of a lens from the lens maker formula, use our{' '}
              <Link href="/focal-length" className="text-optics-cyan hover:underline">focal length calculator</Link>.
            </p>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-display font-bold text-glow mb-4">Related Tools</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/focal-length">
              <motion.div whileHover={{ scale: 1.02 }} className="bg-glass-strong rounded-xl p-4 border border-optics-blue/30 hover:border-optics-cyan/50 transition-all h-full">
                <h3 className="font-semibold text-optics-cyan mb-2">Focal Length Calculator</h3>
                <p className="text-optics-blue/70 text-sm">Compute focal length from lens maker formula.</p>
              </motion.div>
            </Link>
            <Link href="/effective-focal-length-calculator">
              <motion.div whileHover={{ scale: 1.02 }} className="bg-glass-strong rounded-xl p-4 border border-optics-blue/30 hover:border-optics-amber/50 transition-all h-full">
                <h3 className="font-semibold text-optics-amber mb-2">Effective Focal Length Calculator</h3>
                <p className="text-optics-blue/70 text-sm">EFL for lens combinations and crop factor.</p>
              </motion.div>
            </Link>
            <Link href="/lens-combination">
              <motion.div whileHover={{ scale: 1.02 }} className="bg-glass-strong rounded-xl p-4 border border-optics-blue/30 hover:border-optics-purple/50 transition-all h-full">
                <h3 className="font-semibold text-optics-purple mb-2">Lens Combination</h3>
                <p className="text-optics-blue/70 text-sm">Combined focal length of two lenses.</p>
              </motion.div>
            </Link>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
