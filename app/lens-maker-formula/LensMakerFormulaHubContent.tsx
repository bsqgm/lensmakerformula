'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function LensMakerFormulaHubContent() {
  return (
    <main className="min-h-screen relative z-10 pt-20 pb-16 px-4">
      <div className="max-w-5xl mx-auto">
        <nav className="mb-8 text-sm">
          <ol className="flex items-center gap-2 text-optics-blue/60">
            <li><Link href="/" className="hover:text-optics-cyan transition-colors">Home</Link></li>
            <li>/</li>
            <li><Link href="/#tools" className="hover:text-optics-cyan transition-colors">Learn</Link></li>
            <li>/</li>
            <li className="text-optics-cyan">Lens Maker Formula</li>
          </ol>
        </nav>

        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold text-glow-strong mb-6">
            Lens Maker Formula
          </h1>
          <p className="text-xl text-optics-blue/80 leading-relaxed">
            The <strong>lens maker formula</strong> (also written as <strong>lens makers formula</strong> or <strong>lensmaker formula</strong>) relates the focal length of a thin lens to its refractive index and the radii of curvature of its two surfaces. Below you&apos;ll find the equation, a short definition, and links to our full guide, derivation, and free calculators.
          </p>
        </motion.header>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-glass-strong rounded-xl p-8 mb-10 border border-optics-blue/30"
        >
          <h2 className="text-2xl font-display font-bold text-glow mb-4">The Lens Maker Formula (Equation)</h2>
          <div className="bg-optics-darker/50 rounded-lg p-6 text-center mb-4 border border-optics-cyan/20">
            <p className="text-3xl md:text-4xl font-mono text-optics-cyan font-bold">
              1/f = (n − 1)(1/R₁ − 1/R₂)
            </p>
          </div>
          <ul className="space-y-2 text-optics-blue/80">
            <li><strong className="text-optics-cyan">f</strong> = focal length</li>
            <li><strong className="text-optics-cyan">n</strong> = refractive index of the lens material</li>
            <li><strong className="text-optics-cyan">R₁, R₂</strong> = radii of curvature of the first and second surfaces (use sign convention)</li>
          </ul>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-display font-bold text-glow mb-4">Guides & Derivation</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/optics-lens-maker-formula">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-glass-strong rounded-xl p-5 border border-optics-blue/30 hover:border-optics-cyan/50 transition-all h-full"
              >
                <h3 className="font-semibold text-optics-cyan mb-2">Optics Lens Maker Formula — Complete Guide</h3>
                <p className="text-optics-blue/70 text-sm">Full explanation, sign convention, and worked examples.</p>
              </motion.div>
            </Link>
            <Link href="/lens-maker-equation">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-glass-strong rounded-xl p-5 border border-optics-blue/30 hover:border-optics-cyan/50 transition-all h-full"
              >
                <h3 className="font-semibold text-optics-cyan mb-2">Lens Maker Equation</h3>
                <p className="text-optics-blue/70 text-sm">Lens maker equation in depth with examples.</p>
              </motion.div>
            </Link>
            <Link href="/lens-maker-formula-derivation">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-glass-strong rounded-xl p-5 border border-optics-amber/30 hover:border-optics-amber/50 transition-all h-full"
              >
                <h3 className="font-semibold text-optics-amber mb-2">Lens Maker Formula Derivation</h3>
                <p className="text-optics-blue/70 text-sm">Mathematical derivation of the formula.</p>
              </motion.div>
            </Link>
            <Link href="/focal-length-formula">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-glass-strong rounded-xl p-5 border border-optics-blue/30 hover:border-optics-purple/50 transition-all h-full"
              >
                <h3 className="font-semibold text-optics-purple mb-2">Focal Length Formula</h3>
                <p className="text-optics-blue/70 text-sm">Focal length formula and lens maker equation.</p>
              </motion.div>
            </Link>
            <Link href="/radius-of-curvature-formula">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-glass-strong rounded-xl p-5 border border-optics-blue/30 hover:border-optics-amber/50 transition-all h-full"
              >
                <h3 className="font-semibold text-optics-amber mb-2">Radius of Curvature Formula</h3>
                <p className="text-optics-blue/70 text-sm">Rearrange the equation to solve R₁ or R₂.</p>
              </motion.div>
            </Link>
            <Link href="/thin-lens-vs-thick-lens">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-glass-strong rounded-xl p-5 border border-optics-blue/30 hover:border-optics-cyan/50 transition-all h-full"
              >
                <h3 className="font-semibold text-optics-cyan mb-2">Thin Lens vs Thick Lens</h3>
                <p className="text-optics-blue/70 text-sm">Compare the approximation against the thickness-corrected formula.</p>
              </motion.div>
            </Link>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-2xl font-display font-bold text-glow mb-4">Free Calculators Using the Lens Maker Formula</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/focal-length">
              <motion.div whileHover={{ scale: 1.02 }} className="bg-glass-strong rounded-xl p-4 border border-optics-blue/30 hover:border-optics-cyan/50 transition-all h-full">
                <h3 className="font-semibold text-optics-cyan mb-2">Focal Length Calculator</h3>
                <p className="text-optics-blue/70 text-sm">Calculate f from n, R₁, and R₂.</p>
              </motion.div>
            </Link>
            <Link href="/refractive-index">
              <motion.div whileHover={{ scale: 1.02 }} className="bg-glass-strong rounded-xl p-4 border border-optics-blue/30 hover:border-optics-cyan/50 transition-all h-full">
                <h3 className="font-semibold text-optics-cyan mb-2">Refractive Index Calculator</h3>
                <p className="text-optics-blue/70 text-sm">Calculate n from f, R₁, and R₂.</p>
              </motion.div>
            </Link>
            <Link href="/index-of-refraction-calculator">
              <motion.div whileHover={{ scale: 1.02 }} className="bg-glass-strong rounded-xl p-4 border border-optics-blue/30 hover:border-optics-cyan/50 transition-all h-full">
                <h3 className="font-semibold text-optics-cyan mb-2">Index of Refraction Calculator</h3>
                <p className="text-optics-blue/70 text-sm">Alternate phrasing for the same n workflow.</p>
              </motion.div>
            </Link>
            <Link href="/radius-of-curvature-calculator">
              <motion.div whileHover={{ scale: 1.02 }} className="bg-glass-strong rounded-xl p-4 border border-optics-amber/30 hover:border-optics-amber/50 transition-all h-full">
                <h3 className="font-semibold text-optics-amber mb-2">Radius of Curvature Calculator</h3>
                <p className="text-optics-blue/70 text-sm">Choose the right workflow for R₁ or R₂.</p>
              </motion.div>
            </Link>
            <Link href="/radius-r1">
              <motion.div whileHover={{ scale: 1.02 }} className="bg-glass-strong rounded-xl p-4 border border-optics-amber/30 hover:border-optics-amber/50 transition-all h-full">
                <h3 className="font-semibold text-optics-amber mb-2">Radius R₁ Calculator</h3>
                <p className="text-optics-blue/70 text-sm">Radius of curvature (first surface).</p>
              </motion.div>
            </Link>
            <Link href="/radius-r2">
              <motion.div whileHover={{ scale: 1.02 }} className="bg-glass-strong rounded-xl p-4 border border-optics-amber/30 hover:border-optics-amber/50 transition-all h-full">
                <h3 className="font-semibold text-optics-amber mb-2">Radius R₂ Calculator</h3>
                <p className="text-optics-blue/70 text-sm">Radius of curvature (second surface).</p>
              </motion.div>
            </Link>
            <Link href="/thick-lens">
              <motion.div whileHover={{ scale: 1.02 }} className="bg-glass-strong rounded-xl p-4 border border-optics-purple/30 hover:border-optics-purple/50 transition-all h-full">
                <h3 className="font-semibold text-optics-purple mb-2">Thick Lens Calculator</h3>
                <p className="text-optics-blue/70 text-sm">Focal length with thickness correction.</p>
              </motion.div>
            </Link>
            <Link href="/convex-lens-calculator">
              <motion.div whileHover={{ scale: 1.02 }} className="bg-glass-strong rounded-xl p-4 border border-optics-blue/30 hover:border-optics-cyan/50 transition-all h-full">
                <h3 className="font-semibold text-optics-cyan mb-2">Convex Lens Calculator</h3>
                <p className="text-optics-blue/70 text-sm">Focal length for converging lenses.</p>
              </motion.div>
            </Link>
            <Link href="/plano-convex-lens-calculator">
              <motion.div whileHover={{ scale: 1.02 }} className="bg-glass-strong rounded-xl p-4 border border-optics-blue/30 hover:border-optics-amber/50 transition-all h-full">
                <h3 className="font-semibold text-optics-amber mb-2">Plano-Convex Lens Calculator</h3>
                <p className="text-optics-blue/70 text-sm">Focal length for one-flat-surface convex lenses.</p>
              </motion.div>
            </Link>
            <Link href="/biconvex-lens-focal-length">
              <motion.div whileHover={{ scale: 1.02 }} className="bg-glass-strong rounded-xl p-4 border border-optics-blue/30 hover:border-optics-purple/50 transition-all h-full">
                <h3 className="font-semibold text-optics-purple mb-2">Biconvex Lens Focal Length</h3>
                <p className="text-optics-blue/70 text-sm">Focused page for the symmetric convex case.</p>
              </motion.div>
            </Link>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
