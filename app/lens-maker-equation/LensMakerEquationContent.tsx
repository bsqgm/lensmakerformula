'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import LensCalculator from '../components/LensCalculator';

export default function LensMakerEquationContent() {
  const [calculatorParams, setCalculatorParams] = useState({
    n: 1.5,
    R1: 0.1,
    R2: -0.1,
    focalLength: null as number | null,
  });

  return (
    <main className="min-h-screen relative z-10 pt-20 pb-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <ol className="flex items-center gap-2 text-optics-blue/60">
            <li><Link href="/" className="hover:text-optics-cyan transition-colors">Home</Link></li>
            <li>/</li>
            <li className="text-optics-cyan">Lens Maker Equation</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold text-glow-strong mb-6">
            The Lens Maker Equation
          </h1>
          <p className="text-xl text-optics-blue/80 leading-relaxed">
            The <strong className="text-optics-cyan">lens maker equation</strong> is the fundamental formula
            that relates the focal length of a thin lens to its refractive index and radii of curvature.
            Master every form of the equation, understand the derivation, and use our free calculator below.
          </p>
          <Link href="#calculator">
            <motion.span
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-gradient-to-r from-optics-blue to-optics-cyan text-optics-darker font-bold rounded-lg hover:shadow-[0_0_30px_rgba(0,217,255,0.5)] transition-all cursor-pointer"
            >
              Use Calculator Now ↓
            </motion.span>
          </Link>
        </motion.header>

        {/* Section 1: The Lens Maker Equation */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          id="equation"
          className="mb-16"
        >
          <h2 className="text-3xl font-display font-bold text-glow mb-6">
            1. The Lens Maker Equation
          </h2>
          <div className="bg-glass-strong rounded-xl p-8 border border-optics-blue/30">
            <div className="bg-optics-darker rounded-xl p-6 text-center mb-6 border border-optics-cyan">
              <p className="text-sm text-optics-blue/60 mb-2 uppercase tracking-wider">Standard Form</p>
              <p className="text-3xl md:text-4xl font-mono text-optics-cyan font-bold text-glow">
                1/f = (n-1)(1/R₁ - 1/R₂)
              </p>
            </div>
            <div className="space-y-3 text-optics-blue/90">
              <p><strong className="text-optics-cyan">f</strong> — focal length (meters)</p>
              <p><strong className="text-optics-amber">n</strong> — refractive index of lens material</p>
              <p><strong className="text-optics-purple">R₁</strong> — radius of curvature, first surface (m)</p>
              <p><strong className="text-optics-blue">R₂</strong> — radius of curvature, second surface (m)</p>
              <p className="text-sm text-optics-blue/70 mt-4">
                Sign convention: Convex surface facing light source → positive R. Concave → negative R.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Section 2: Understanding Each Variable */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          id="variables"
          className="mb-16"
        >
          <h2 className="text-3xl font-display font-bold text-glow mb-6">
            2. Understanding Each Variable
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                symbol: 'f',
                name: 'Focal Length',
                desc: 'Distance from lens center to focal point. Parallel rays converge (f &gt; 0) or appear to diverge (f &lt; 0).',
                unit: 'meters',
                border: 'border-optics-cyan',
                text: 'text-optics-cyan',
              },
              {
                symbol: 'n',
                name: 'Refractive Index',
                desc: 'Ratio of light speed in vacuum to speed in material. Higher n → stronger bending, shorter f.',
                unit: 'dimensionless',
                border: 'border-optics-amber',
                text: 'text-optics-amber',
              },
              {
                symbol: 'R₁',
                name: 'First Surface Radius',
                desc: 'Radius of first surface (light enters). Convex facing light: +R. Concave: −R.',
                unit: 'meters',
                border: 'border-optics-purple',
                text: 'text-optics-purple',
              },
              {
                symbol: 'R₂',
                name: 'Second Surface Radius',
                desc: 'Radius of second surface (light exits). Same sign convention as R₁.',
                unit: 'meters',
                border: 'border-optics-blue',
                text: 'text-optics-blue',
              },
            ].map((v) => (
              <motion.div
                key={v.symbol}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`bg-glass-strong rounded-xl p-5 border ${v.border} border-opacity-50 hover:border-opacity-100 transition-all`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className={`text-2xl font-mono font-bold ${v.text}`}>{v.symbol}</span>
                  <h3 className="text-lg font-semibold text-glow">{v.name}</h3>
                </div>
                <p className="text-optics-blue/80 text-sm mb-2">{v.desc}</p>
                <p className="text-xs text-optics-blue/50 font-mono">{v.unit}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Section 3: Equation Forms */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          id="forms"
          className="mb-16"
        >
          <h2 className="text-3xl font-display font-bold text-glow mb-6">
            3. Equation Forms
          </h2>
          <div className="space-y-4">
            {[
              { label: 'Standard', eq: '1/f = (n-1)(1/R₁ - 1/R₂)', solve: null },
              { label: 'Solve for f', eq: 'f = 1/[(n-1)(1/R₁ - 1/R₂)]', solve: 'f' },
              { label: 'Solve for n', eq: 'n = 1 + 1/[f(1/R₁ - 1/R₂)]', solve: 'n' },
              { label: 'Solve for R₁', eq: 'R₁ = 1/[1/R₂ + 1/((n-1)f)]', solve: 'R₁' },
              { label: 'Solve for R₂', eq: 'R₂ = 1/[1/R₁ - 1/((n-1)f)]', solve: 'R₂' },
            ].map(({ label, eq }) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-optics-darker rounded-xl p-4 border border-optics-blue/20"
              >
                <p className="text-xs text-optics-blue/60 mb-1 uppercase">{label}</p>
                <p className="font-mono text-optics-cyan text-lg">{eq}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Section 4: Thin vs Thick Lens Equation */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          id="thin-vs-thick"
          className="mb-16"
        >
          <h2 className="text-3xl font-display font-bold text-glow mb-6">
            4. Thin vs Thick Lens Equation
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-glass-strong rounded-xl p-6 border border-optics-cyan/40">
              <h3 className="text-xl font-semibold text-optics-cyan mb-4">Thin Lens</h3>
              <p className="text-3xl font-mono font-bold text-optics-cyan mb-4 text-glow">
                1/f = (n-1)(1/R₁ - 1/R₂)
              </p>
              <p className="text-optics-blue/80 text-sm">
                Assumes thickness d ≪ R. Use when lens is thin relative to radii. Valid for most standard optics.
              </p>
            </div>
            <div className="bg-glass-strong rounded-xl p-6 border border-optics-amber/40">
              <h3 className="text-xl font-semibold text-optics-amber mb-4">Thick Lens</h3>
              <p className="text-xl md:text-2xl font-mono font-bold text-optics-amber mb-4">
                1/f = (n-1)[1/R₁ - 1/R₂ + (n-1)d/(nR₁R₂)]
              </p>
              <p className="text-optics-blue/80 text-sm">
                Includes thickness d. Use when d is significant (rule of thumb: d &gt; R/10).
              </p>
            </div>
          </div>
          <p className="mt-4 text-optics-blue/70 text-sm">
            <Link href="/thick-lens" className="text-optics-cyan hover:underline">
              Try our Thick Lens Calculator →
            </Link>
          </p>
        </motion.section>

        {/* Section 5: Derivation Overview */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          id="derivation"
          className="mb-16"
        >
          <h2 className="text-3xl font-display font-bold text-glow mb-6">
            5. Derivation Overview
          </h2>
          <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
            <p className="text-optics-blue/90 mb-6">
              The lens maker equation follows from Snell&apos;s law applied at each curved surface.
            </p>
            <ol className="space-y-4">
              <li className="flex gap-4">
                <span className="text-optics-cyan font-bold shrink-0">1.</span>
                <div>
                  <strong className="text-optics-cyan">Snell&apos;s Law:</strong>
                  <span className="text-optics-blue/80"> n₁ sin θ₁ = n₂ sin θ₂. For paraxial rays: n₁θ₁ ≈ n₂θ₂.</span>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-optics-cyan font-bold shrink-0">2.</span>
                <div>
                  <strong className="text-optics-cyan">Single surface refraction:</strong>
                  <span className="text-optics-blue/80"> n/s + n&apos;/s&apos; = (n&apos;-n)/R for object distance s and image s&apos;.</span>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-optics-cyan font-bold shrink-0">3.</span>
                <div>
                  <strong className="text-optics-cyan">First surface:</strong>
                  <span className="text-optics-blue/80"> 1/s₁ + n/s₁&apos; = (n-1)/R₁ (air to glass).</span>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-optics-cyan font-bold shrink-0">4.</span>
                <div>
                  <strong className="text-optics-cyan">Second surface:</strong>
                  <span className="text-optics-blue/80"> n/s₁&apos; + 1/s₂&apos; = (1-n)/R₂ (glass to air).</span>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-optics-cyan font-bold shrink-0">5.</span>
                <div>
                  <strong className="text-optics-cyan">Combine (thin lens):</strong>
                  <span className="text-optics-blue/80"> 1/f = (n-1)(1/R₁ - 1/R₂) with focal length f.</span>
                </div>
              </li>
            </ol>
            <Link href="/lens-maker-formula-derivation" className="inline-block mt-6 text-optics-cyan hover:underline">
              Full derivation →
            </Link>
          </div>
        </motion.section>

        {/* Section 6: Worked Examples */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          id="examples"
          className="mb-16"
        >
          <h2 className="text-3xl font-display font-bold text-glow mb-6">
            6. Worked Examples
          </h2>
          <div className="space-y-6">
            {/* Example 1 */}
            <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
              <h3 className="text-xl font-semibold text-optics-cyan mb-4">Example 1: Biconvex Lens</h3>
              <p className="text-optics-blue/80 text-sm mb-3">
                n = 1.5, R₁ = +0.10 m, R₂ = −0.10 m. Find f.
              </p>
              <div className="font-mono text-sm text-optics-blue/90 space-y-1">
                <p>1/f = (1.5−1)(1/0.10 − 1/(−0.10)) = 0.5 × 20 = 10</p>
                <p className="text-optics-cyan font-bold">f = 0.1 m = 10 cm (converging)</p>
              </div>
            </div>
            {/* Example 2 */}
            <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
              <h3 className="text-xl font-semibold text-optics-purple mb-4">Example 2: Biconcave Lens</h3>
              <p className="text-optics-blue/80 text-sm mb-3">
                n = 1.52, R₁ = −0.12 m, R₂ = +0.18 m. Find f.
              </p>
              <div className="font-mono text-sm text-optics-blue/90 space-y-1">
                <p>1/f = (1.52−1)(1/(−0.12) − 1/0.18) = 0.52 × (−13.89) ≈ −7.22</p>
                <p className="text-optics-purple font-bold">f ≈ −0.139 m (diverging)</p>
              </div>
            </div>
            {/* Example 3 */}
            <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
              <h3 className="text-xl font-semibold text-optics-amber mb-4">Example 3: Plano-Convex Lens</h3>
              <p className="text-optics-blue/80 text-sm mb-3">
                n = 1.5, R₁ = +0.20 m, R₂ = ∞ (flat). Find f.
              </p>
              <div className="font-mono text-sm text-optics-blue/90 space-y-1">
                <p>1/f = (1.5−1)(1/0.20 − 0) = 0.5 × 5 = 2.5</p>
                <p className="text-optics-amber font-bold">f = 0.4 m = 40 cm</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section 7: Related Equations */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          id="related"
          className="mb-16"
        >
          <h2 className="text-3xl font-display font-bold text-glow mb-6">
            7. Related Equations
          </h2>
          <div className="space-y-4">
            <div className="bg-optics-darker rounded-xl p-4 border border-optics-cyan/30">
              <h3 className="font-semibold text-optics-cyan mb-2">Thin Lens Equation</h3>
              <p className="font-mono text-optics-cyan mb-2">1/f = 1/v − 1/u</p>
              <p className="text-optics-blue/80 text-sm">u = object distance, v = image distance.</p>
            </div>
            <div className="bg-optics-darker rounded-xl p-4 border border-optics-purple/30">
              <h3 className="font-semibold text-optics-purple mb-2">Magnification Equation</h3>
              <p className="font-mono text-optics-purple mb-2">m = −v/u = h&apos;/h</p>
              <p className="text-optics-blue/80 text-sm">h = object height, h&apos; = image height.</p>
            </div>
            <div className="bg-optics-darker rounded-xl p-4 border border-optics-amber/30">
              <h3 className="font-semibold text-optics-amber mb-2">Power of Lens</h3>
              <p className="font-mono text-optics-amber mb-2">P = 1/f (diopters when f in m)</p>
              <p className="text-optics-blue/80 text-sm">Optical power; P = (n−1)(1/R₁ − 1/R₂).</p>
            </div>
          </div>
        </motion.section>

        {/* Calculator Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          id="calculator"
          className="mb-16"
        >
          <h2 className="text-3xl font-display font-bold text-glow mb-6">
            Lens Maker Equation Calculator
          </h2>
          <p className="text-optics-blue/80 mb-6">
            Enter n, R₁, and R₂ to compute focal length instantly.
          </p>
          <LensCalculator
            onParamsChange={(params, focalLength) => {
              setCalculatorParams({
                n: params.n,
                R1: params.R1,
                R2: params.R2,
                focalLength: focalLength ?? null,
              });
            }}
          />
        </motion.section>

        {/* FAQ Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          id="faq"
          className="mb-16"
        >
          <h2 className="text-3xl font-display font-bold text-glow mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                q: 'What is the lens maker equation?',
                a: 'The lens maker equation is 1/f = (n-1)(1/R₁ - 1/R₂), relating focal length f to refractive index n and radii R₁, R₂. It is fundamental to optical lens design.',
              },
              {
                q: 'What is the difference between lens maker equation and thin lens equation?',
                a: 'The lens maker equation calculates f from lens geometry. The thin lens equation 1/f = 1/v − 1/u relates f to object distance u and image distance v.',
              },
              {
                q: 'When should I use the thick lens equation?',
                a: 'Use the thick lens form 1/f = (n-1)[1/R₁ - 1/R₂ + (n-1)d/(nR₁R₂)] when thickness d is significant (e.g. d > R/10).',
              },
              {
                q: 'What are typical refractive index values?',
                a: 'Crown glass ~1.52, flint glass ~1.62, water 1.33, diamond 2.42. Higher n gives shorter focal length.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
                <h3 className="font-semibold text-optics-cyan mb-3">{item.q}</h3>
                <p className="text-optics-blue/80 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Related Links */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl font-display font-bold text-glow mb-6">
            Related Resources
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/optics-lens-maker-formula">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-glass-strong rounded-xl p-4 border border-optics-blue/30 hover:border-optics-cyan transition-all h-full"
              >
                <h3 className="font-semibold text-optics-cyan mb-2">Optics Formula Guide</h3>
                <p className="text-optics-blue/70 text-sm">Complete optics lens maker formula guide.</p>
              </motion.div>
            </Link>
            <Link href="/focal-length-equation">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-glass-strong rounded-xl p-4 border border-optics-blue/30 hover:border-optics-cyan transition-all h-full"
              >
                <h3 className="font-semibold text-optics-cyan mb-2">Focal Length Equation</h3>
                <p className="text-optics-blue/70 text-sm">Focal length calculation methods.</p>
              </motion.div>
            </Link>
            <Link href="/lens-maker-formula-derivation">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-glass-strong rounded-xl p-4 border border-optics-blue/30 hover:border-optics-purple transition-all h-full"
              >
                <h3 className="font-semibold text-optics-purple mb-2">Formula Derivation</h3>
                <p className="text-optics-blue/70 text-sm">Step-by-step derivation.</p>
              </motion.div>
            </Link>
            <Link href="/thick-lens">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-glass-strong rounded-xl p-4 border border-optics-blue/30 hover:border-optics-amber transition-all h-full"
              >
                <h3 className="font-semibold text-optics-amber mb-2">Thick Lens</h3>
                <p className="text-optics-blue/70 text-sm">Thick lens calculator.</p>
              </motion.div>
            </Link>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
