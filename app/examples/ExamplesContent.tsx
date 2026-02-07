'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const lensExamples = [
  {
    name: 'Biconvex Lens',
    description: 'Both surfaces curve outward. Most common converging lens.',
    R1: '+10 cm',
    R2: '−10 cm',
    n: 1.5,
    focalLength: '+10 cm',
    type: 'Converging',
    applications: ['Magnifying glasses', 'Camera lenses', 'Eyeglasses for farsightedness'],
    diagram: '((  ))',
    color: 'optics-cyan',
  },
  {
    name: 'Biconcave Lens',
    description: 'Both surfaces curve inward. Common diverging lens.',
    R1: '−10 cm',
    R2: '+10 cm',
    n: 1.5,
    focalLength: '−10 cm',
    type: 'Diverging',
    applications: ['Eyeglasses for nearsightedness', 'Laser beam expanders', 'Peepholes'],
    diagram: ')( )(',
    color: 'optics-purple',
  },
  {
    name: 'Plano-convex Lens',
    description: 'One flat surface, one convex surface.',
    R1: '+20 cm',
    R2: '∞',
    n: 1.5,
    focalLength: '+40 cm',
    type: 'Converging',
    applications: ['Flashlights', 'Condenser lenses', 'Laser focusing'],
    diagram: '|  )',
    color: 'optics-cyan',
  },
  {
    name: 'Plano-concave Lens',
    description: 'One flat surface, one concave surface.',
    R1: '−20 cm',
    R2: '∞',
    n: 1.5,
    focalLength: '−40 cm',
    type: 'Diverging',
    applications: ['Beam expansion', 'Optical instruments', 'Projection systems'],
    diagram: '|  (',
    color: 'optics-purple',
  },
  {
    name: 'Positive Meniscus',
    description: 'Both surfaces curve same direction, but converging.',
    R1: '+10 cm',
    R2: '+20 cm',
    n: 1.5,
    focalLength: '+40 cm',
    type: 'Converging',
    applications: ['Corrective eyewear', 'Camera accessories', 'Optical correction'],
    diagram: '(  (',
    color: 'optics-cyan',
  },
  {
    name: 'Negative Meniscus',
    description: 'Both surfaces curve same direction, but diverging.',
    R1: '+20 cm',
    R2: '+10 cm',
    n: 1.5,
    focalLength: '−40 cm',
    type: 'Diverging',
    applications: ['Eyeglasses', 'Optical systems', 'Beam shaping'],
    diagram: ')  )',
    color: 'optics-purple',
  },
];

export default function ExamplesContent() {
  return (
    <main className="min-h-screen relative z-10 pt-20 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <ol className="flex items-center gap-2 text-optics-blue/60">
            <li><Link href="/" className="hover:text-optics-cyan transition-colors">Home</Link></li>
            <li>/</li>
            <li className="text-optics-cyan">Examples</li>
          </ol>
        </nav>

        {/* Hero */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold text-glow-strong mb-6">
            Lens Examples
          </h1>
          <p className="text-xl text-optics-blue/80 leading-relaxed max-w-3xl">
            Explore different lens types with detailed calculations using the lens maker formula. 
            Each example includes real-world applications and typical parameter values.
          </p>
          <Link href="/focal-length#calculator" className="flex w-fit items-center gap-2 mt-6 px-6 py-3 bg-gradient-to-r from-optics-blue to-optics-cyan text-optics-darker font-bold rounded-lg hover:shadow-[0_0_30px_rgba(0,217,255,0.5)] transition-all">
            Use Calculator Now →
          </Link>
        </motion.header>

        {/* Quick Reference */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-glass-strong rounded-xl p-6 mb-12 border border-optics-blue/30"
        >
          <h2 className="text-xl font-semibold text-optics-cyan mb-4">Quick Reference</h2>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <h3 className="font-medium text-optics-blue mb-2">Converging Lenses (f &gt; 0)</h3>
              <ul className="text-optics-blue/70 space-y-1">
                <li>• Biconvex: R₁ &gt; 0, R₂ &lt; 0</li>
                <li>• Plano-convex: R₁ &gt; 0, R₂ = ∞ (or vice versa)</li>
                <li>• Positive Meniscus: Both radii same sign, |R₁| &lt; |R₂|</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-optics-blue mb-2">Diverging Lenses (f &lt; 0)</h3>
              <ul className="text-optics-blue/70 space-y-1">
                <li>• Biconcave: R₁ &lt; 0, R₂ &gt; 0</li>
                <li>• Plano-concave: R₁ &lt; 0, R₂ = ∞ (or vice versa)</li>
                <li>• Negative Meniscus: Both radii same sign, |R₁| &gt; |R₂|</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Lens Examples Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {lensExamples.map((lens, index) => (
            <motion.article
              key={lens.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-optics-blue">{lens.name}</h3>
                  <span className={`text-sm font-medium ${
                    lens.type === 'Converging' ? 'text-optics-cyan' : 'text-optics-purple'
                  }`}>
                    {lens.type}
                  </span>
                </div>
                <div className={`text-3xl font-mono font-bold tracking-widest ${
                  lens.type === 'Converging' ? 'text-optics-cyan' : 'text-optics-purple'
                }`}>
                  {lens.diagram}
                </div>
              </div>

              <p className="text-optics-blue/70 text-sm mb-4">{lens.description}</p>

              {/* Parameters */}
              <div className="bg-optics-darker/50 rounded-lg p-4 mb-4 border border-optics-blue/20">
                <h4 className="text-sm font-medium text-optics-blue/90 mb-2">Parameters</h4>
                <div className="grid grid-cols-2 gap-2 text-sm font-mono">
                  <div className="text-optics-blue/70">R₁ = {lens.R1}</div>
                  <div className="text-optics-blue/70">R₂ = {lens.R2}</div>
                  <div className="text-optics-blue/70">n = {lens.n}</div>
                  <div className={`font-bold ${
                    lens.type === 'Converging' ? 'text-optics-cyan' : 'text-optics-purple'
                  }`}>
                    f = {lens.focalLength}
                  </div>
                </div>
              </div>

              {/* Applications */}
              <div>
                <h4 className="text-sm font-medium text-optics-blue/90 mb-2">Applications</h4>
                <div className="flex flex-wrap gap-2">
                  {lens.applications.map((app) => (
                    <span
                      key={app}
                      className="text-xs px-2 py-1 rounded bg-optics-blue/10 text-optics-blue/80 border border-optics-blue/20"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Calculation Example */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-glass-strong rounded-xl p-6 mb-12 border border-optics-amber/30"
        >
          <h2 className="text-2xl font-display font-bold text-optics-amber mb-6">
            Detailed Calculation Example
          </h2>
          
          <div className="space-y-4">
            <div className="bg-optics-darker/50 rounded-lg p-4 border border-optics-blue/20">
              <h3 className="font-semibold text-optics-cyan mb-3">Problem: Design a biconvex lens with f = 5 cm</h3>
              <p className="text-optics-blue/80 text-sm mb-4">
                Given: Glass with n = 1.52, equal radii of curvature (|R₁| = |R₂| = R)
              </p>
              
              <div className="space-y-2 font-mono text-sm text-optics-blue/80">
                <p><strong>Step 1:</strong> Apply the formula with R₁ = +R, R₂ = −R</p>
                <p className="ml-4">1/f = (n − 1)(1/R₁ − 1/R₂)</p>
                <p className="ml-4">1/0.05 = (1.52 − 1)(1/R − 1/(−R))</p>
                <p className="ml-4">20 = 0.52 × (2/R)</p>
                
                <p><strong>Step 2:</strong> Solve for R</p>
                <p className="ml-4">R = 2 × 0.52 / 20 = 0.052 m = 5.2 cm</p>
                
                <p className="text-optics-cyan font-bold mt-4">
                  Result: Use R₁ = +5.2 cm, R₂ = −5.2 cm
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-2xl font-display font-bold text-glow mb-4">
            Try Your Own Calculations
          </h2>
          <p className="text-optics-blue/70 mb-6">
            Use our calculators to explore different lens configurations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/focal-length">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-optics-blue to-optics-cyan 
                         text-optics-darker font-bold rounded-lg border-glow transition-all"
              >
                Calculate Focal Length
              </motion.button>
            </Link>
            <Link href="/tutorial">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-optics-darker border border-optics-blue/50
                         text-optics-cyan font-bold rounded-lg transition-all hover:bg-optics-blue/10"
              >
                Read Tutorial
              </motion.button>
            </Link>
          </div>
        </motion.section>
      </div>
    </main>
  );
}

