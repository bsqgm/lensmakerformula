'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import LensCalculator from '../components/LensCalculator';

export default function FocalDistanceFormulaContent() {
  return (
    <main className="min-h-screen relative z-10 pt-20 pb-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-optics-blue/60">
            <li>
              <Link href="/" className="hover:text-optics-cyan transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-optics-cyan">Focal Distance Formula</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold text-glow-strong mb-6">
            Focal Distance Formula
          </h1>
          <p className="text-xl text-optics-blue/80 leading-relaxed">
            Master the focal distance formula and learn how to calculate focal distance for any lens.
            Understand the relationship between focal distance and focal length, apply the lens maker
            equation, and use our free focal distance calculator below.
          </p>
          <Link href="#calculator">
            <motion.span
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-gradient-to-r from-optics-blue to-optics-cyan text-optics-darker font-bold rounded-lg hover:shadow-[0_0_30px_rgba(0,217,255,0.5)] transition-all cursor-pointer"
            >
              Use Focal Distance Calculator ↓
            </motion.span>
          </Link>
        </motion.header>

        {/* Section 1: What is Focal Distance? */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          id="what-is-focal-distance"
          className="mb-16"
        >
          <h2 className="text-3xl font-display font-bold text-glow mb-6">
            What is Focal Distance?
          </h2>
          <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
            <p className="text-optics-blue/90 leading-relaxed mb-4">
              <strong className="text-optics-cyan">Focal distance</strong> is the distance from the
              optical center of a lens (or the principal plane for thick lenses) to the focal point
              where parallel rays of light converge—or appear to diverge from—after passing through
              the lens.
            </p>
            <p className="text-optics-blue/90 leading-relaxed">
              For thin lenses, focal distance and focal length are identical. Both describe how far
              the lens focuses light. The focal distance determines a lens&apos;s power: shorter focal
              distance means stronger focusing ability. Understanding the focal distance formula is
              essential for lens design, photography, microscopy, and any optical system.
            </p>
          </div>
        </motion.section>

        {/* Section 2: Focal Distance vs Focal Length */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          id="focal-distance-vs-focal-length"
          className="mb-16"
        >
          <h2 className="text-3xl font-display font-bold text-glow mb-6">
            Focal Distance vs Focal Length
          </h2>
          <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
            <p className="text-optics-blue/90 leading-relaxed mb-6">
              The terms &quot;focal distance&quot; and &quot;focal length&quot; are often used interchangeably, but
              there are subtle distinctions depending on context.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-optics-darker rounded-xl p-5 border border-optics-cyan/30">
                <h3 className="text-xl font-semibold text-optics-cyan mb-3">Thin Lenses</h3>
                <p className="text-optics-blue/80 text-sm leading-relaxed">
                  For thin lenses (thickness negligible), focal distance equals focal length. The
                  distance from the lens center to either focal point is |f|. Both converge to the
                  same value given by the lens maker formula.
                </p>
              </div>
              <div className="bg-optics-darker rounded-xl p-5 border border-optics-amber/30">
                <h3 className="text-xl font-semibold text-optics-amber mb-3">Thick Lenses</h3>
                <p className="text-optics-blue/80 text-sm leading-relaxed">
                  For thick lenses, focal distance can mean different things: the front focal distance
                  (FFD) from the first surface to the object-side focal point, or the back focal
                  distance (BFD) from the last surface to the image-side focal point. These differ
                  when the lens has significant thickness.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section 3: The Focal Distance Formula */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          id="focal-distance-formula"
          className="mb-16"
        >
          <h2 className="text-3xl font-display font-bold text-glow mb-6">
            The Focal Distance Formula
          </h2>
          <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
            <p className="text-optics-blue/90 leading-relaxed mb-6">
              The focal distance formula is identical to the lens maker formula. For a thin lens in
              air:
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
                    <span className="font-mono text-optics-cyan font-bold">f</span> = focal distance
                    (or focal length), meters
                  </li>
                  <li>
                    <span className="font-mono text-optics-cyan font-bold">n</span> = refractive
                    index of lens material
                  </li>
                  <li>
                    <span className="font-mono text-optics-cyan font-bold">R₁</span> = radius of
                    curvature of first surface (m)
                  </li>
                  <li>
                    <span className="font-mono text-optics-cyan font-bold">R₂</span> = radius of
                    curvature of second surface (m)
                  </li>
                </ul>
              </div>
              <div className="bg-optics-darker/50 rounded-lg p-4 border border-optics-blue/20">
                <h4 className="font-semibold text-optics-cyan mb-3">Sign Convention</h4>
                <p className="text-optics-blue/80 text-sm">
                  R &gt; 0 for convex (center of curvature to the right of the surface); R &lt; 0 for
                  concave. Focal distance f &gt; 0 for converging lenses; f &lt; 0 for diverging.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section 4: For Thick Lenses */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          id="thick-lenses"
          className="mb-16"
        >
          <h2 className="text-3xl font-display font-bold text-glow mb-6">
            For Thick Lenses: Front and Back Focal Distance
          </h2>
          <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
            <p className="text-optics-blue/90 leading-relaxed mb-6">
              When the lens thickness <span className="font-mono text-optics-cyan">t</span> is
              significant, the effective focal length (EFL) is still given by a modified lens maker
              formula, but the physical focal distances from the lens surfaces differ.
            </p>
            <div className="space-y-6">
              <div className="bg-optics-darker rounded-xl p-5 border border-optics-cyan/30">
                <h3 className="text-lg font-semibold text-optics-cyan mb-3">
                  Back Focal Distance (BFD)
                </h3>
                <p className="font-mono text-optics-blue/90 text-sm mb-2">
                  BFD = f − (n − 1) × t × f / (n × R₁)
                </p>
                <p className="text-optics-blue/70 text-sm">
                  Distance from the rear surface of the lens to the image-side focal point.
                </p>
              </div>
              <div className="bg-optics-darker rounded-xl p-5 border border-optics-purple/30">
                <h3 className="text-lg font-semibold text-optics-purple mb-3">
                  Front Focal Distance (FFD)
                </h3>
                <p className="font-mono text-optics-blue/90 text-sm mb-2">
                  FFD = f + (n − 1) × t × f / (n × R₂)
                </p>
                <p className="text-optics-blue/70 text-sm">
                  Distance from the front surface to the object-side focal point.
                </p>
              </div>
            </div>
            <Link
              href="/thick-lens"
              className="inline-block mt-6 text-optics-cyan hover:underline text-sm"
            >
              Use our Thick Lens Calculator →
            </Link>
          </div>
        </motion.section>

        {/* Section 5: Worked Examples */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          id="examples"
          className="mb-16"
        >
          <h2 className="text-3xl font-display font-bold text-glow mb-6">
            Worked Examples: Calculating Focal Distance
          </h2>
          <div className="space-y-6">
            <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
              <h3 className="text-xl font-semibold text-optics-cyan mb-4">
                Example 1: Biconvex Lens
              </h3>
              <p className="text-optics-blue/80 text-sm mb-4">
                Find the focal distance for a glass lens: n = 1.5, R₁ = 0.1 m, R₂ = −0.1 m.
              </p>
              <div className="space-y-2 font-mono text-sm text-optics-blue/80">
                <p>1/f = (1.5 − 1)(1/0.1 − 1/(−0.1))</p>
                <p>1/f = 0.5 × (10 + 10) = 10</p>
                <p className="text-optics-cyan font-bold">f = 0.1 m (focal distance = 10 cm)</p>
              </div>
            </div>

            <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
              <h3 className="text-xl font-semibold text-optics-amber mb-4">
                Example 2: Plano-Convex Lens
              </h3>
              <p className="text-optics-blue/80 text-sm mb-4">
                n = 1.6, R₁ = 0.25 m, R₂ = ∞ (flat second surface).
              </p>
              <div className="space-y-2 font-mono text-sm text-optics-blue/80">
                <p>1/f = (1.6 − 1)(1/0.25 − 0) = 0.6 × 4 = 2.4</p>
                <p className="text-optics-amber font-bold">
                  f ≈ 0.417 m (focal distance ≈ 42 cm)
                </p>
              </div>
            </div>

            <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
              <h3 className="text-xl font-semibold text-optics-purple mb-4">
                Example 3: Biconcave Diverging Lens
              </h3>
              <p className="text-optics-blue/80 text-sm mb-4">
                n = 1.52, R₁ = −0.12 m, R₂ = 0.18 m.
              </p>
              <div className="space-y-2 font-mono text-sm text-optics-blue/80">
                <p>1/f = (1.52 − 1)(1/(−0.12) − 1/0.18) ≈ 0.52 × (−13.89) ≈ −7.22</p>
                <p className="text-optics-purple font-bold">
                  f ≈ −0.139 m (negative focal distance = diverging)
                </p>
              </div>
            </div>
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
            Focal Distance Calculator
          </h2>
          <p className="text-optics-blue/80 leading-relaxed mb-6">
            Use the calculator below to find the focal distance of any thin lens. Enter the
            refractive index <span className="font-mono text-optics-cyan">n</span> and radii{' '}
            <span className="font-mono text-optics-cyan">R₁</span>,{' '}
            <span className="font-mono text-optics-cyan">R₂</span> to compute the focal distance
            instantly.
          </p>
          <LensCalculator />
        </motion.section>

        {/* Section 7: FAQ */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          id="faq"
          className="mb-16"
        >
          <h2 className="text-3xl font-display font-bold text-glow mb-6">
            Frequently Asked Questions About Focal Distance
          </h2>
          <div className="space-y-4">
            <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
              <h3 className="font-semibold text-optics-cyan mb-3">What is the focal distance formula?</h3>
              <p className="text-optics-blue/80 text-sm leading-relaxed">
                The focal distance formula is 1/f = (n−1)(1/R₁ − 1/R₂), the same as the lens maker
                formula. It gives the focal distance (or focal length) of a thin lens from its
                refractive index n and radii of curvature R₁ and R₂.
              </p>
            </div>
            <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
              <h3 className="font-semibold text-optics-cyan mb-3">
                What is the difference between focal distance and focal length?
              </h3>
              <p className="text-optics-blue/80 text-sm leading-relaxed">
                For thin lenses, focal distance and focal length are the same—both are |f| from the
                lens center to the focal point. For thick lenses, focal distance can refer to the
                front focal distance (FFD) or back focal distance (BFD), which differ from each other
                when thickness is significant.
              </p>
            </div>
            <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
              <h3 className="font-semibold text-optics-cyan mb-3">How do you calculate focal distance?</h3>
              <p className="text-optics-blue/80 text-sm leading-relaxed">
                Use 1/f = (n−1)(1/R₁ − 1/R₂). Solve for f: f = 1/[(n−1)(1/R₁ − 1/R₂)]. Ensure consistent
                units (meters) and follow the sign convention: convex surfaces have R &gt; 0, concave
                have R &lt; 0.
              </p>
            </div>
            <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
              <h3 className="font-semibold text-optics-cyan mb-3">When does focal distance differ from focal length?</h3>
              <p className="text-optics-blue/80 text-sm leading-relaxed">
                In thick lenses, the effective focal length (EFL) is defined by the lens maker formula
                with a thickness term. The front focal distance (FFD) and back focal distance (BFD)
                measure from the physical lens surfaces to the focal points and can differ from the
                EFL and from each other.
              </p>
            </div>
            <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
              <h3 className="font-semibold text-optics-cyan mb-3">What units are used for focal distance?</h3>
              <p className="text-optics-blue/80 text-sm leading-relaxed">
                Focal distance is typically expressed in meters. When f is in meters, the optical
                power P = 1/f is in diopters. Use consistent units for R₁ and R₂ (meters) when
                calculating focal distance.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Section 8: Related Links */}
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
            <Link href="/focal-length">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-glass-strong rounded-xl p-4 border border-optics-blue/30 hover:border-optics-cyan/50 transition-all h-full"
              >
                <h3 className="font-semibold text-optics-cyan mb-2">Focal Length</h3>
                <p className="text-optics-blue/70 text-sm">
                  Focal length calculator and quick reference.
                </p>
              </motion.div>
            </Link>
            <Link href="/focal-length-formula">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-glass-strong rounded-xl p-4 border border-optics-blue/30 hover:border-optics-cyan/50 transition-all h-full"
              >
                <h3 className="font-semibold text-optics-cyan mb-2">Focal Length Formula</h3>
                <p className="text-optics-blue/70 text-sm">
                  Complete guide to the focal length formula.
                </p>
              </motion.div>
            </Link>
            <Link href="/focal-length-equation">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-glass-strong rounded-xl p-4 border border-optics-blue/30 hover:border-optics-amber/50 transition-all h-full"
              >
                <h3 className="font-semibold text-optics-amber mb-2">Focal Length Equation</h3>
                <p className="text-optics-blue/70 text-sm">
                  All forms of the focal length equation.
                </p>
              </motion.div>
            </Link>
            <Link href="/thick-lens">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-glass-strong rounded-xl p-4 border border-optics-blue/30 hover:border-optics-purple/50 transition-all h-full"
              >
                <h3 className="font-semibold text-optics-purple mb-2">Thick Lens</h3>
                <p className="text-optics-blue/70 text-sm">
                  Thick lens calculator with FFD and BFD.
                </p>
              </motion.div>
            </Link>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
