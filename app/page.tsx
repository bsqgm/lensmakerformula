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

  const lensTypeLinks = [
    {
      href: '/convex-lens-calculator',
      title: 'Convex Lens Calculator',
      description: 'Calculate focal length of converging lenses (biconvex, plano-convex)',
      icon: '🔍',
    },
    {
      href: '/concave-lens-calculator',
      title: 'Concave Lens Calculator',
      description: 'Calculate focal length of diverging lenses (biconcave, plano-concave)',
      icon: '👓',
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-6"
            >
              <a href="#calculator" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-optics-blue to-optics-cyan text-optics-darker font-bold rounded-lg hover:shadow-[0_0_30px_rgba(0,217,255,0.5)] transition-all">
                Use Calculator Now ↓
              </a>
            </motion.div>
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

            {/* Lens Type Calculators */}
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-display font-semibold text-center mt-12 mb-6 text-optics-blue/80"
            >
              Calculators by Lens Type
            </motion.h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {lensTypeLinks.map((link, index) => (
                <Link key={link.href} href={link.href}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-glass-strong rounded-xl p-6 border border-optics-cyan/30 
                             hover:border-optics-cyan/50 transition-all duration-300 
                             cursor-pointer h-full"
                  >
                    <div className="text-center">
                      <div className="text-4xl mb-3">{link.icon}</div>
                      <h3 className="text-lg font-semibold text-optics-cyan mb-2">{link.title}</h3>
                      <p className="text-sm text-optics-blue/70">{link.description}</p>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Calculator Section */}
        <section id="calculator" className="px-4 py-12">
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

        {/* Advanced Tools Section */}
        <section className="px-4 py-12" id="tools">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-display font-bold text-center mb-4 text-glow"
            >
              Advanced Tools
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-optics-blue/70 text-center mb-12 max-w-2xl mx-auto"
            >
              Explore advanced optical calculations for complex lens systems
            </motion.p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { href: '/thick-lens', title: 'Thick Lens', description: 'Calculate focal length with thickness correction', icon: '🔷' },
                { href: '/lens-combination', title: 'Lens Combination', description: 'Combined focal length of multiple lenses', icon: '⚙️' },
                { href: '/magnification', title: 'Magnification', description: 'Image distance and magnification calculation', icon: '🔎' },
              ].map((item, index) => (
                <Link key={item.href} href={item.href}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-glass-strong rounded-xl p-6 border border-optics-amber/30 
                             hover:border-optics-amber/50 transition-all duration-300 
                             cursor-pointer h-full"
                  >
                    <div className="text-center">
                      <div className="text-4xl mb-4">{item.icon}</div>
                      <h3 className="text-xl font-semibold text-optics-amber mb-2">{item.title}</h3>
                      <p className="text-sm text-optics-blue/70">{item.description}</p>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Learning Resources Section */}
        <section className="px-4 py-12">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-display font-bold text-center mb-4 text-glow"
            >
              Learning Resources
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-optics-blue/70 text-center mb-12 max-w-2xl mx-auto"
            >
              Deepen your understanding of optics with our comprehensive educational materials
            </motion.p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { href: '/optics-lens-maker-formula', title: 'Optics Formula', description: 'Complete optics lens maker formula guide', icon: '🔭' },
                { href: '/how-to-calculate-focal-length', title: 'How to Calculate', description: 'Step-by-step focal length calculation guide', icon: '🎯' },
                { href: '/lens-maker-formula-derivation', title: 'Formula Derivation', description: 'Mathematical proof of the lens maker formula', icon: '📝' },
                { href: '/focal-length-formula', title: 'Focal Length Formula', description: 'Complete guide to focal length formulas', icon: '📐' },
                { href: '/tutorial', title: 'Tutorial', description: 'Step-by-step guide to the lens maker formula', icon: '📚' },
                { href: '/examples', title: 'Examples', description: 'Common lens types with calculations', icon: '🔬' },
                { href: '/glossary', title: 'Glossary', description: 'Definitions of optical terms', icon: '📖' },
                { href: '/materials', title: 'Materials', description: 'Refractive index database', icon: '🔍' },
              ].map((item, index) => (
                <Link key={item.href} href={item.href}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-glass-strong rounded-xl p-6 border border-optics-purple/30 
                             hover:border-optics-purple/50 transition-all duration-300 
                             cursor-pointer h-full"
                  >
                    <div className="text-center">
                      <div className="text-4xl mb-4">{item.icon}</div>
                      <h3 className="text-xl font-semibold text-optics-purple mb-2">{item.title}</h3>
                      <p className="text-sm text-optics-blue/70">{item.description}</p>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="px-4 py-12">
          <FAQ />
        </section>

        {/* Footer */}
        <footer className="relative z-10 border-t border-optics-blue/20 mt-20 py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              {/* Calculators */}
              <div>
                <h3 className="text-lg font-semibold text-optics-cyan mb-4">Calculators</h3>
                <ul className="space-y-2">
                  <li><Link href="/focal-length" className="text-optics-blue/70 hover:text-optics-cyan transition-colors">Focal Length</Link></li>
                  <li><Link href="/refractive-index" className="text-optics-blue/70 hover:text-optics-cyan transition-colors">Refractive Index</Link></li>
                  <li><Link href="/radius-r1" className="text-optics-blue/70 hover:text-optics-cyan transition-colors">Radius R₁</Link></li>
                  <li><Link href="/radius-r2" className="text-optics-blue/70 hover:text-optics-cyan transition-colors">Radius R₂</Link></li>
                </ul>
              </div>
              
              {/* Advanced */}
              <div>
                <h3 className="text-lg font-semibold text-optics-amber mb-4">Advanced</h3>
                <ul className="space-y-2">
                  <li><Link href="/thick-lens" className="text-optics-blue/70 hover:text-optics-amber transition-colors">Thick Lens</Link></li>
                  <li><Link href="/lens-combination" className="text-optics-blue/70 hover:text-optics-amber transition-colors">Lens Combination</Link></li>
                  <li><Link href="/magnification" className="text-optics-blue/70 hover:text-optics-amber transition-colors">Magnification</Link></li>
                </ul>
              </div>
              
              {/* Learn */}
              <div>
                <h3 className="text-lg font-semibold text-optics-purple mb-4">Learn</h3>
                <ul className="space-y-2">
                  <li><Link href="/optics-lens-maker-formula" className="text-optics-blue/70 hover:text-optics-purple transition-colors">Optics Formula</Link></li>
                  <li><Link href="/tutorial" className="text-optics-blue/70 hover:text-optics-purple transition-colors">Tutorial</Link></li>
                  <li><Link href="/examples" className="text-optics-blue/70 hover:text-optics-purple transition-colors">Examples</Link></li>
                  <li><Link href="/glossary" className="text-optics-blue/70 hover:text-optics-purple transition-colors">Glossary</Link></li>
                  <li><Link href="/materials" className="text-optics-blue/70 hover:text-optics-purple transition-colors">Materials</Link></li>
                </ul>
              </div>
              
              {/* About */}
              <div>
                <h3 className="text-lg font-semibold text-optics-cyan mb-4">About</h3>
                <p className="text-optics-blue/70 text-sm leading-relaxed">
                  Free online lens maker formula calculator for optics students, educators, and optical engineers.
                </p>
              </div>
            </div>
            
            <div className="border-t border-optics-blue/20 pt-8 text-center text-optics-blue/60 text-sm">
              <p>Lens Maker Formula Calculator - Free Online Optics Tool</p>
              <p className="mt-2">Built for students, educators, and optical engineers</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}

