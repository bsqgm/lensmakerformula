'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import LensCalculator from './components/LensCalculator';
import FormulaExplanation from './components/FormulaExplanation';
import Visualization from './components/Visualization';
import FAQ from './components/FAQ';

export default function Home() {
  const [calculatorParams, setCalculatorParams] = useState({
    n: 1.5,
    R1: 0.1,
    R2: -0.1,
    focalLength: null as number | null,
  });

  return (
    <main className="min-h-screen relative z-10">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-5xl md:text-7xl font-display font-bold mb-6 text-glow-strong"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Lens Maker Formula
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl md:text-2xl text-optics-blue/80 max-w-3xl mx-auto mb-4"
          >
            Calculate lens focal length with precision
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-optics-blue/60 max-w-2xl mx-auto"
          >
            Free online calculator for optics students, engineers, and enthusiasts
          </motion.p>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="px-4 py-12">
        <LensCalculator 
          onParamsChange={(params, focalLength) => {
            setCalculatorParams({
              n: params.n,
              R1: params.R1,
              R2: params.R2,
              focalLength: focalLength,
            });
          }}
        />
      </section>

      {/* Visualization Section */}
      <section className="px-4 py-12">
        <Visualization
          focalLength={calculatorParams.focalLength}
          R1={calculatorParams.R1}
          R2={calculatorParams.R2}
        />
      </section>

      {/* Formula Explanation */}
      <section className="px-4 py-12">
        <FormulaExplanation />
      </section>

      {/* FAQ Section */}
      <section className="px-4 py-12">
        <FAQ />
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-optics-blue/20 mt-20 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center text-optics-blue/60 text-sm">
          <p>Lens Maker Formula Calculator - Free Online Optics Tool</p>
          <p className="mt-2">Built for students, educators, and optical engineers</p>
        </div>
      </footer>
    </main>
  );
}

