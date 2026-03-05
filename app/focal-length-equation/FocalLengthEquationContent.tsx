'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import LensCalculator from '../components/LensCalculator';

export default function FocalLengthEquationContent() {
  return (
    <main className="min-h-screen relative z-10 pt-20 pb-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <ol className="flex items-center gap-2 text-optics-blue/60">
            <li>
              <Link href="/" className="hover:text-optics-cyan transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li className="text-optics-cyan">Focal Length Equation</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold text-glow-strong mb-6">
            Focal Length Equation
          </h1>
          <p className="text-xl text-optics-blue/80 leading-relaxed">
            The complete reference to the focal length equation in all its forms. Learn the lens maker
            equation, thin lens equation, every algebraic rearrangement, simplified forms for special
            cases, and solve problems with our free calculator.
          </p>
          <a
            href="#calculator"
            className="flex w-fit items-center gap-2 mt-6 px-6 py-3 bg-gradient-to-r from-optics-blue to-optics-cyan text-optics-darker font-bold rounded-lg hover:shadow-[0_0_30px_rgba(0,217,255,0.5)] transition-all"
          >
            Use Calculator Now ↓
          </a>
        </motion.header>

        {/* Table of Contents */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-glass-strong rounded-xl p-6 mb-12 border border-optics-blue/30"
        >
          <h2 className="text-xl font-semibold text-optics-cyan mb-4">Table of Contents</h2>
          <ol className="space-y-2 text-optics-blue/80">
            <li>
              <a href="#standard-equation" className="hover:text-optics-cyan transition-colors">
                1. The Standard Focal Length Equation
              </a>
            </li>
            <li>
              <a href="#rearranged-forms" className="hover:text-optics-cyan transition-colors">
                2. All Rearranged Forms (solve for f, n, R₁, R₂)
              </a>
            </li>
            <li>
              <a href="#thin-lens" className="hover:text-optics-cyan transition-colors">
                3. The Thin Lens Equation
              </a>
            </li>
            <li>
              <a href="#special-cases" className="hover:text-optics-cyan transition-colors">
                4. Simplified Equations for Special Cases
              </a>
            </li>
            <li>
              <a href="#comparison-table" className="hover:text-optics-cyan transition-colors">
                5. Comparison Table
              </a>
            </li>
            <li>
              <a href="#calculator" className="hover:text-optics-cyan transition-colors">
                6. Focal Length Equation Calculator
              </a>
            </li>
            <li>
              <a href="#examples" className="hover:text-optics-cyan transition-colors">
                7. Worked Examples
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-optics-cyan transition-colors">
                8. Frequently Asked Questions
              </a>
            </li>
            <li>
              <a href="#related" className="hover:text-optics-cyan transition-colors">
                9. Related Links
              </a>
            </li>
          </ol>
        </motion.section>

        {/* Section 1: Standard Focal Length Equation */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          id="standard-equation"
          className="mb-16"
        >
          <h2 className="text-3xl font-display font-bold text-glow mb-6">
            1. The Standard Focal Length Equation
          </h2>

          <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
            <p className="text-optics-blue/90 leading-relaxed mb-6">
              The fundamental focal length equation, also called the lens maker equation or lensmaker
              formula, relates the focal length of a thin lens to its geometry and material:
            </p>
            <div className="bg-optics-darker rounded-xl p-8 border-2 border-optics-cyan/40 text-center mb-6">
              <p className="text-3xl md:text-4xl font-mono text-optics-cyan font-bold">
                1/f = (n − 1)(1/R₁ − 1/R₂)
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-optics-darker/50 rounded-lg p-4 border border-optics-blue/20">
                <h4 className="font-semibold text-optics-cyan mb-3">Variables</h4>
                <ul className="space-y-2 text-sm text-optics-blue/80">
                  <li>
                    <span className="font-mono text-optics-cyan font-bold">f</span> = focal length
                  </li>
                  <li>
                    <span className="font-mono text-optics-cyan font-bold">n</span> = refractive
                    index of lens material
                  </li>
                  <li>
                    <span className="font-mono text-optics-cyan font-bold">R₁</span> = radius of
                    curvature of first surface
                  </li>
                  <li>
                    <span className="font-mono text-optics-cyan font-bold">R₂</span> = radius of
                    curvature of second surface
                  </li>
                </ul>
              </div>
              <div className="bg-optics-darker/50 rounded-lg p-4 border border-optics-blue/20">
                <h4 className="font-semibold text-optics-cyan mb-3">Sign Convention</h4>
                <p className="text-optics-blue/80 text-sm">
                  R &gt; 0 for convex (center of curvature to the right); R &lt; 0 for concave. All
                  lengths in consistent units (meters).
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section 2: All Rearranged Forms */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          id="rearranged-forms"
          className="mb-16"
        >
          <h2 className="text-3xl font-display font-bold text-glow mb-6">
            2. All Rearranged Forms
          </h2>

          <p className="text-optics-blue/80 leading-relaxed mb-6">
            Solve for any variable by algebraically rearranging the focal length equation:
          </p>

          <div className="space-y-6">
            {/* Solve for f */}
            <div className="bg-glass-strong rounded-xl p-6 border border-optics-cyan/30">
              <h3 className="text-xl font-semibold text-optics-cyan mb-4">Solve for f (focal length)</h3>
              <div className="bg-optics-darker rounded-lg p-6 border border-optics-cyan/20">
                <p className="font-mono text-optics-cyan text-xl mb-2">
                  f = 1 / [(n − 1)(1/R₁ − 1/R₂)]
                </p>
                <p className="text-optics-blue/70 text-sm">
                  Invert both sides of 1/f = (n−1)(1/R₁ − 1/R₂)
                </p>
              </div>
            </div>

            {/* Solve for n */}
            <div className="bg-glass-strong rounded-xl p-6 border border-optics-cyan/30">
              <h3 className="text-xl font-semibold text-optics-cyan mb-4">Solve for n (refractive index)</h3>
              <div className="bg-optics-darker rounded-lg p-6 border border-optics-cyan/20">
                <p className="font-mono text-optics-cyan text-xl mb-2">
                  n = 1 + 1 / [f × (1/R₁ − 1/R₂)]
                </p>
                <p className="text-optics-blue/70 text-sm">
                  Divide both sides by (1/R₁ − 1/R₂), then add 1
                </p>
              </div>
            </div>

            {/* Solve for R₁ */}
            <div className="bg-glass-strong rounded-xl p-6 border border-optics-cyan/30">
              <h3 className="text-xl font-semibold text-optics-cyan mb-4">Solve for R₁</h3>
              <div className="bg-optics-darker rounded-lg p-6 border border-optics-cyan/20">
                <p className="font-mono text-optics-cyan text-xl mb-2">
                  1/R₁ = 1/R₂ + 1/[f(n − 1)]
                </p>
                <p className="font-mono text-optics-cyan text-lg mb-2">R₁ = 1 / (1/R₂ + 1/[f(n − 1)])</p>
                <p className="text-optics-blue/70 text-sm">
                  Isolate 1/R₁, then take reciprocal
                </p>
              </div>
            </div>

            {/* Solve for R₂ */}
            <div className="bg-glass-strong rounded-xl p-6 border border-optics-cyan/30">
              <h3 className="text-xl font-semibold text-optics-cyan mb-4">Solve for R₂</h3>
              <div className="bg-optics-darker rounded-lg p-6 border border-optics-cyan/20">
                <p className="font-mono text-optics-cyan text-xl mb-2">
                  1/R₂ = 1/R₁ − 1/[f(n − 1)]
                </p>
                <p className="font-mono text-optics-cyan text-lg mb-2">R₂ = 1 / (1/R₁ − 1/[f(n − 1)])</p>
                <p className="text-optics-blue/70 text-sm">
                  Isolate 1/R₂, then take reciprocal
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section 3: Thin Lens Equation */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          id="thin-lens"
          className="mb-16"
        >
          <h2 className="text-3xl font-display font-bold text-glow mb-6">
            3. The Thin Lens Equation
          </h2>

          <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
            <p className="text-optics-blue/90 leading-relaxed mb-6">
              The thin lens equation relates focal length to object and image distances. It is
              different from the focal length equation (lens maker equation) but uses the same f:
            </p>
            <div className="bg-optics-darker rounded-xl p-8 border-2 border-optics-cyan/40 text-center mb-6">
              <p className="text-3xl md:text-4xl font-mono text-optics-cyan font-bold">
                1/f = 1/v − 1/u
              </p>
              <p className="text-sm text-optics-blue/60 mt-2">
                or equivalently: 1/f = 1/dᵢ + 1/dₒ (depending on sign convention)
              </p>
            </div>
            <div className="bg-gradient-to-r from-optics-cyan/10 to-optics-blue/10 rounded-lg p-4 border border-optics-cyan/30">
              <h3 className="font-semibold text-optics-cyan mb-2">How They Relate</h3>
              <p className="text-optics-blue/80 text-sm">
                The focal length equation gives f from lens geometry. The thin lens equation uses
                that f to relate object distance u and image distance v. Use the first to design a
                lens; use the second to predict image position.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Section 4: Simplified Equations for Special Cases */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          id="special-cases"
          className="mb-16"
        >
          <h2 className="text-3xl font-display font-bold text-glow mb-6">
            4. Simplified Equations for Special Cases
          </h2>

          <div className="space-y-6">
            <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
              <h3 className="text-xl font-semibold text-optics-amber mb-3">Biconvex Lens (R₁ = R₂)</h3>
              <p className="text-optics-blue/80 text-sm mb-3">
                When both surfaces have equal curvature: R₁ = R, R₂ = −R (opposite signs by convention)
              </p>
              <div className="bg-optics-darker rounded-lg p-4 border border-optics-amber/20">
                <p className="font-mono text-optics-cyan">
                  1/f = (n − 1)(2/R) → f = R / [2(n − 1)]
                </p>
              </div>
            </div>

            <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
              <h3 className="text-xl font-semibold text-optics-amber mb-3">Plano-Convex (R₂ = ∞)</h3>
              <p className="text-optics-blue/80 text-sm mb-3">
                One flat surface: 1/R₂ = 0
              </p>
              <div className="bg-optics-darker rounded-lg p-4 border border-optics-amber/20">
                <p className="font-mono text-optics-cyan">
                  1/f = (n − 1)(1/R₁) → f = R₁ / (n − 1)
                </p>
              </div>
            </div>

            <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
              <h3 className="text-xl font-semibold text-optics-amber mb-3">Plano-Concave (R₁ = ∞)</h3>
              <p className="text-optics-blue/80 text-sm mb-3">
                Flat first surface: 1/R₁ = 0
              </p>
              <div className="bg-optics-darker rounded-lg p-4 border border-optics-amber/20">
                <p className="font-mono text-optics-cyan">
                  1/f = (n − 1)(−1/R₂) → f = −R₂ / (n − 1)
                </p>
              </div>
            </div>

            <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
              <h3 className="text-xl font-semibold text-optics-purple mb-3">Symmetric Biconvex (R₁ = −R₂)</h3>
              <p className="text-optics-blue/80 text-sm mb-3">
                Equal radii, opposite signs (typical biconvex)
              </p>
              <div className="bg-optics-darker rounded-lg p-4 border border-optics-purple/20">
                <p className="font-mono text-optics-cyan">
                  1/f = (n − 1)(2/|R|) → f = |R| / [2(n − 1)]
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section 5: Comparison Table */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          id="comparison-table"
          className="mb-16"
        >
          <h2 className="text-3xl font-display font-bold text-glow mb-6">
            5. Comparison Table
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full bg-glass-strong rounded-xl border border-optics-blue/30 overflow-hidden">
              <thead>
                <tr className="border-b border-optics-blue/30">
                  <th className="px-4 py-3 text-left text-optics-cyan font-semibold">Equation</th>
                  <th className="px-4 py-3 text-left text-optics-cyan font-semibold">Formula</th>
                  <th className="px-4 py-3 text-left text-optics-cyan font-semibold">Relates</th>
                  <th className="px-4 py-3 text-left text-optics-cyan font-semibold">Use When</th>
                </tr>
              </thead>
              <tbody className="text-optics-blue/80 text-sm">
                <tr className="border-b border-optics-blue/20">
                  <td className="px-4 py-3 font-semibold text-optics-cyan">Focal Length Equation</td>
                  <td className="px-4 py-3 font-mono text-optics-cyan">1/f = (n−1)(1/R₁ − 1/R₂)</td>
                  <td className="px-4 py-3">f to n, R₁, R₂</td>
                  <td className="px-4 py-3">Designing lenses, known geometry</td>
                </tr>
                <tr className="border-b border-optics-blue/20">
                  <td className="px-4 py-3 font-semibold text-optics-cyan">Thin Lens Equation</td>
                  <td className="px-4 py-3 font-mono text-optics-cyan">1/f = 1/v − 1/u</td>
                  <td className="px-4 py-3">f to u, v (object/image distance)</td>
                  <td className="px-4 py-3">Image formation, ray tracing</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-optics-purple">Thick Lens Equation</td>
                  <td className="px-4 py-3 font-mono text-optics-purple">
                    1/f with thickness term
                  </td>
                  <td className="px-4 py-3">f to n, R₁, R₂, thickness t</td>
                  <td className="px-4 py-3">
                    <Link href="/thick-lens" className="text-optics-cyan hover:underline">
                      Thick lenses
                    </Link>{' '}
                    (t non-negligible)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.section>

        {/* Section 6: Calculator */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          id="calculator"
          className="mb-16"
        >
          <h2 className="text-3xl font-display font-bold text-glow mb-6">
            6. Focal Length Equation Calculator
          </h2>

          <p className="text-optics-blue/80 leading-relaxed mb-6">
            Use the interactive calculator below to solve the focal length equation. Enter n, R₁, and
            R₂ to compute f.
          </p>

          <LensCalculator />
        </motion.section>

        {/* Section 7: Worked Examples */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          id="examples"
          className="mb-16"
        >
          <h2 className="text-3xl font-display font-bold text-glow mb-6">
            7. Worked Examples
          </h2>

          <div className="space-y-6">
            <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
              <h3 className="text-xl font-semibold text-optics-cyan mb-4">
                Example 1: Solve for f (Biconvex Lens)
              </h3>
              <p className="text-optics-blue/80 text-sm mb-4">
                n = 1.5, R₁ = 0.1 m, R₂ = −0.1 m
              </p>
              <div className="space-y-2 font-mono text-sm text-optics-blue/80">
                <p>1/f = (1.5 − 1)(1/0.1 − 1/(−0.1))</p>
                <p>1/f = 0.5 × (10 + 10) = 10</p>
                <p className="text-optics-cyan font-bold">f = 0.1 m</p>
              </div>
            </div>

            <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
              <h3 className="text-xl font-semibold text-optics-cyan mb-4">
                Example 2: Solve for n
              </h3>
              <p className="text-optics-blue/80 text-sm mb-4">
                f = 0.2 m, R₁ = 0.15 m, R₂ = −0.15 m
              </p>
              <div className="space-y-2 font-mono text-sm text-optics-blue/80">
                <p>1/R₁ − 1/R₂ = 1/0.15 + 1/0.15 = 13.33</p>
                <p>n = 1 + 1/(0.2 × 13.33) = 1 + 0.375</p>
                <p className="text-optics-cyan font-bold">n ≈ 1.38</p>
              </div>
            </div>

            <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
              <h3 className="text-xl font-semibold text-optics-amber mb-4">
                Example 3: Plano-Convex (Special Case)
              </h3>
              <p className="text-optics-blue/80 text-sm mb-4">
                n = 1.6, R₁ = 0.25 m, R₂ = ∞
              </p>
              <div className="space-y-2 font-mono text-sm text-optics-blue/80">
                <p>1/f = (1.6 − 1)(1/0.25) = 0.6 × 4 = 2.4</p>
                <p className="text-optics-amber font-bold">f = 0.417 m ≈ 42 cm</p>
              </div>
            </div>

            <div className="bg-glass-strong rounded-xl p-6 border border-optics-purple/30">
              <h3 className="text-xl font-semibold text-optics-purple mb-4">
                Example 4: Thin Lens Equation (Image Distance)
              </h3>
              <p className="text-optics-blue/80 text-sm mb-4">
                f = 0.1 m, u = −0.2 m (object 20 cm left of lens)
              </p>
              <div className="space-y-2 font-mono text-sm text-optics-blue/80">
                <p>1/v = 1/f + 1/u = 10 + 1/(−0.2) = 10 − 5 = 5</p>
                <p className="text-optics-purple font-bold">v = 0.2 m (image 20 cm right of lens)</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section 8: FAQ */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          id="faq"
          className="mb-16"
        >
          <h2 className="text-3xl font-display font-bold text-glow mb-6">
            8. Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
              <h3 className="font-semibold text-optics-cyan mb-3">What is the focal length equation?</h3>
              <p className="text-optics-blue/80 text-sm leading-relaxed">
                The focal length equation (lens maker equation) is 1/f = (n−1)(1/R₁ − 1/R₂), where f
                is focal length, n is the refractive index of the lens material, R₁ is the radius of
                curvature of the first surface, and R₂ is the radius of the second surface.
              </p>
            </div>
            <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
              <h3 className="font-semibold text-optics-cyan mb-3">
                How do you rearrange the focal length equation to solve for n?
              </h3>
              <p className="text-optics-blue/80 text-sm leading-relaxed">
                To solve for the refractive index n: n = 1 + 1/[f × (1/R₁ − 1/R₂)]. First calculate
                the curvature term (1/R₁ − 1/R₂), then divide 1/f by this term, and add 1.
              </p>
            </div>
            <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
              <h3 className="font-semibold text-optics-cyan mb-3">
                What is the difference between the focal length equation and the thin lens equation?
              </h3>
              <p className="text-optics-blue/80 text-sm leading-relaxed">
                The focal length equation (lens maker equation) relates focal length to lens geometry:
                1/f = (n−1)(1/R₁ − 1/R₂). The thin lens equation relates focal length to object and
                image distances: 1/f = 1/v − 1/u. They describe different aspects of lens behavior.
              </p>
            </div>
            <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
              <h3 className="font-semibold text-optics-cyan mb-3">
                What happens when R₁ = R₂ in the focal length equation?
              </h3>
              <p className="text-optics-blue/80 text-sm leading-relaxed">
                If R₁ and R₂ have the same sign and magnitude (e.g. symmetric biconvex with R₁ = R,
                R₂ = −R), the curvature term simplifies to 2/R, giving f = R/[2(n−1)]. If R₁ = R₂ with
                the same sign, 1/R₁ − 1/R₂ = 0 and the lens has no net power (f → ∞).
              </p>
            </div>
          </div>
        </motion.section>

        {/* Section 9: Related Links */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          id="related"
          className="mb-16"
        >
          <h2 className="text-2xl font-display font-bold text-glow mb-6">
            Related Links
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/focal-length-formula">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-glass-strong rounded-xl p-4 border border-optics-blue/30 hover:border-optics-cyan/50 transition-all h-full"
              >
                <h3 className="font-semibold text-optics-cyan mb-2">Focal Length Formula</h3>
                <p className="text-optics-blue/70 text-sm">
                  Complete guide to the focal length formula with examples.
                </p>
              </motion.div>
            </Link>
            <Link href="/focal-length">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-glass-strong rounded-xl p-4 border border-optics-blue/30 hover:border-optics-cyan/50 transition-all h-full"
              >
                <h3 className="font-semibold text-optics-cyan mb-2">Focal Length Calculator</h3>
                <p className="text-optics-blue/70 text-sm">
                  Quick focal length calculator for thin lenses.
                </p>
              </motion.div>
            </Link>
            <Link href="/optics-lens-maker-formula">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-glass-strong rounded-xl p-4 border border-optics-blue/30 hover:border-optics-amber/50 transition-all h-full"
              >
                <h3 className="font-semibold text-optics-amber mb-2">Lens Maker Equation</h3>
                <p className="text-optics-blue/70 text-sm">
                  Optics guide to the lens maker formula.
                </p>
              </motion.div>
            </Link>
            <Link href="/how-to-calculate-focal-length">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-glass-strong rounded-xl p-4 border border-optics-blue/30 hover:border-optics-purple/50 transition-all h-full"
              >
                <h3 className="font-semibold text-optics-purple mb-2">How to Calculate Focal Length</h3>
                <p className="text-optics-blue/70 text-sm">
                  Step-by-step guide to calculating focal length.
                </p>
              </motion.div>
            </Link>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
