'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import LensCalculator from './components/LensCalculator';
import FormulaExplanation from './components/FormulaExplanation';
import Visualization from './components/Visualization';
import FAQ from './components/FAQ';
import Navigation from './components/Navigation';

export default function Home() {
  const [calculatorParams, setCalculatorParams] = useState({
    n: 1.5,
    R1: 0.1,
    R2: -0.1,
    focalLength: null as number | null,
  });

  const calculatorLinks = [
    {
      href: '/focal-length',
      title: 'Calculate Focal Length',
      description: 'Calculate f from n, R₁, and R₂',
      icon: 'f',
    },
    {
      href: '/refractive-index',
      title: 'Calculate Refractive Index',
      description: 'Calculate n from f, R₁, and R₂',
      icon: 'n',
    },
    {
      href: '/radius-r1',
      title: 'Calculate R₁',
      description: 'Calculate first surface radius from f, n, and R₂',
      icon: 'R₁',
    },
    {
      href: '/radius-r2',
      title: 'Calculate R₂',
      description: 'Calculate second surface radius from f, n, and R₁',
      icon: 'R₂',
    },
  ];

  return (
    <>
      <Navigation />
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
              Calculate any lens parameter with precision
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

        {/* Calculator Links Section */}
        <section className="px-4 py-12">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-display font-bold text-center mb-12 text-glow"
            >
              Choose Your Calculation
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {calculatorLinks.map((link, index) => (
                <Link key={link.href} href={link.href}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30 
                             hover:border-optics-blue/50 transition-all duration-300 
                             cursor-pointer h-full"
                  >
                    <div className="text-center mb-4">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-gradient-to-br from-optics-blue/20 to-optics-cyan/20 
                                    flex items-center justify-center border border-optics-blue/30">
                        <span className="text-2xl font-mono font-bold text-optics-cyan">{link.icon}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-optics-blue mb-2">{link.title}</h3>
                      <p className="text-sm text-optics-blue/70">{link.description}</p>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Calculator Section */}
        <section className="px-4 py-12">
          <div className="max-w-7xl mx-auto text-center mb-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-display font-bold mb-4 text-glow"
            >
              Quick Calculator
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-optics-blue/70"
            >
              Calculate focal length directly on the homepage
            </motion.p>
          </div>
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
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link href="/focal-length" className="text-optics-blue/70 hover:text-optics-cyan transition-colors">
                Focal Length
              </Link>
              <Link href="/refractive-index" className="text-optics-blue/70 hover:text-optics-cyan transition-colors">
                Refractive Index
              </Link>
              <Link href="/radius-r1" className="text-optics-blue/70 hover:text-optics-cyan transition-colors">
                Radius R₁
              </Link>
              <Link href="/radius-r2" className="text-optics-blue/70 hover:text-optics-cyan transition-colors">
                Radius R₂
              </Link>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}

