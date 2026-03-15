'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const CROP_PRESETS: { value: number; label: string }[] = [
  { value: 1, label: 'Full frame (35mm)' },
  { value: 1.5, label: 'APS-C (Nikon, Sony, Fuji)' },
  { value: 1.6, label: 'APS-C (Canon)' },
  { value: 2, label: 'Micro Four Thirds (M4/3)' },
  { value: 2.7, label: '1" sensor' },
  { value: 5.6, label: '1/2.3" (compact)' },
];

export default function EffectiveFocalLengthContent() {
  const [focalMm, setFocalMm] = useState<string>('50');
  const [cropFactor, setCropFactor] = useState<string>('1.5');
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const f = parseFloat(focalMm);
    const c = parseFloat(cropFactor);
    if (isNaN(f) || isNaN(c) || f <= 0 || c <= 0) {
      setResult(null);
      setError(null);
      return;
    }
    setError(null);
    setResult(f * c);
  }, [focalMm, cropFactor]);

  return (
    <main className="min-h-screen relative z-10 pt-20 pb-16 px-4">
      <div className="max-w-5xl mx-auto">
        <nav className="mb-8 text-sm">
          <ol className="flex items-center gap-2 text-optics-blue/60">
            <li><Link href="/" className="hover:text-optics-cyan transition-colors">Home</Link></li>
            <li>/</li>
            <li><Link href="/#tools" className="hover:text-optics-cyan transition-colors">Calculators</Link></li>
            <li>/</li>
            <li className="text-optics-cyan">Effective Focal Length</li>
          </ol>
        </nav>

        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold text-glow-strong mb-6">
            Effective Focal Length Calculator
          </h1>
          <p className="text-xl text-optics-blue/80 leading-relaxed">
            Convert lens focal length to <strong>35mm equivalent</strong> (effective focal length) using <strong>crop factor</strong>.
            Useful for APS-C, Micro Four Thirds, and other crop sensors. Formula: <strong>EFL = focal length × crop factor</strong>.
          </p>
          <a href="#calculator" className="flex w-fit items-center gap-2 mt-6 px-6 py-3 bg-gradient-to-r from-optics-blue to-optics-cyan text-optics-darker font-bold rounded-lg hover:shadow-[0_0_30px_rgba(0,217,255,0.5)] transition-all">
            Use Calculator ↓
          </a>
        </motion.header>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-glass-strong rounded-xl p-6 mb-8 border border-optics-blue/30"
        >
          <p className="text-sm text-optics-blue/60 mb-2 uppercase tracking-wider">Effective Focal Length Formula</p>
          <p className="text-2xl md:text-3xl font-mono text-optics-cyan font-bold">
            EFL = f × crop factor
          </p>
          <p className="text-optics-blue/70 mt-2 text-sm">
            f = lens focal length (mm), crop factor = sensor size relative to full frame (35mm).
          </p>
        </motion.section>

        <motion.section
          id="calculator"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-glass-strong rounded-2xl p-8 md:p-10 border border-optics-blue/30 mb-12"
        >
          <div className="space-y-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-optics-blue/90 mb-2 uppercase tracking-wider">Lens focal length</label>
              <div className="flex items-center gap-3">
                <input
                  type="number"
                  step="1"
                  min="1"
                  value={focalMm}
                  onChange={(e) => setFocalMm(e.target.value)}
                  className="flex-1 px-4 py-3 bg-optics-darker/70 border-2 border-optics-blue/30 rounded-lg text-optics-cyan font-mono focus:outline-none focus:border-optics-blue"
                  placeholder="50"
                />
                <span className="text-optics-blue/60 text-sm">mm</span>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-optics-blue/90 mb-2 uppercase tracking-wider">Crop factor</label>
              <div className="flex flex-wrap gap-2 mb-3">
                {CROP_PRESETS.map((preset) => (
                  <button
                    key={preset.value}
                    type="button"
                    onClick={() => setCropFactor(String(preset.value))}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                      parseFloat(cropFactor) === preset.value
                        ? 'bg-optics-cyan text-optics-darker'
                        : 'bg-optics-darker/70 text-optics-blue/80 hover:bg-optics-blue/20'
                    }`}
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="number"
                  step="0.1"
                  min="0.5"
                  value={cropFactor}
                  onChange={(e) => setCropFactor(e.target.value)}
                  className="flex-1 px-4 py-3 bg-optics-darker/70 border-2 border-optics-blue/30 rounded-lg text-optics-cyan font-mono focus:outline-none focus:border-optics-blue"
                  placeholder="1.5"
                />
              </div>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {result !== null && !error && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="p-6 bg-optics-darker/50 rounded-xl border border-optics-cyan/30"
              >
                <p className="text-sm text-optics-blue/60 mb-1">35mm equivalent (effective focal length)</p>
                <p className="text-3xl font-mono font-bold text-optics-cyan">{result.toFixed(1)} mm</p>
                <p className="text-optics-blue/70 text-sm mt-2">
                  {focalMm} mm × {cropFactor} = {result.toFixed(1)} mm equivalent
                </p>
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
          <h2 className="text-2xl font-display font-bold text-glow mb-4">What is Effective Focal Length?</h2>
          <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30 space-y-4 text-optics-blue/80">
            <p>
              <strong className="text-optics-cyan">Effective focal length</strong> (EFL) is the focal length in 35mm (full-frame) equivalent.
              Crop sensors capture a smaller area, so the same lens gives a narrower field of view; multiplying by the crop factor gives the equivalent focal length on full frame.
            </p>
            <p>
              To compute the <strong>physical</strong> focal length of a single lens from curvature and refractive index, use our{' '}
              <Link href="/focal-length" className="text-optics-cyan hover:underline">focal length calculator</Link>.
              For the combined focal length of <strong>two lenses</strong>, see the{' '}
              <Link href="/lens-combination" className="text-optics-cyan hover:underline">lens combination calculator</Link>.
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
                <p className="text-optics-blue/70 text-sm">Lens focal length from lens maker formula.</p>
              </motion.div>
            </Link>
            <Link href="/lens-combination">
              <motion.div whileHover={{ scale: 1.02 }} className="bg-glass-strong rounded-xl p-4 border border-optics-blue/30 hover:border-optics-amber/50 transition-all h-full">
                <h3 className="font-semibold text-optics-amber mb-2">Lens Combination</h3>
                <p className="text-optics-blue/70 text-sm">Combined focal length of two lenses.</p>
              </motion.div>
            </Link>
            <Link href="/f-number-calculator">
              <motion.div whileHover={{ scale: 1.02 }} className="bg-glass-strong rounded-xl p-4 border border-optics-blue/30 hover:border-optics-purple/50 transition-all h-full">
                <h3 className="font-semibold text-optics-purple mb-2">F-Number Calculator</h3>
                <p className="text-optics-blue/70 text-sm">F-stop from focal length and aperture.</p>
              </motion.div>
            </Link>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
