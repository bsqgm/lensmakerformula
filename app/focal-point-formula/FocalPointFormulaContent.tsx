'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import LensCalculator from '../components/LensCalculator';

export default function FocalPointFormulaContent() {
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
            <li className="text-optics-cyan">Focal Point Formula</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold text-glow-strong mb-6">
            Focal Point Formula
          </h1>
          <p className="text-xl text-optics-blue/80 leading-relaxed">
            Learn how to calculate the focal point of any lens using the lens maker formula. Whether
            you have a convex or concave lens, find the focal point position along the optical axis
            and understand the difference between real and virtual focal points.
          </p>
          <Link
            href="#calculator"
            className="flex w-fit items-center gap-2 mt-6 px-6 py-3 bg-gradient-to-r from-optics-blue to-optics-cyan text-optics-darker font-bold rounded-lg hover:shadow-[0_0_30px_rgba(0,217,255,0.5)] transition-all"
          >
            Use Calculator Now ↓
          </Link>
        </motion.header>

        {/* 1. What is a Focal Point? */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          id="what-is-focal-point"
          className="mb-16"
        >
          <h2 className="text-3xl font-display font-bold text-glow mb-6">
            What is a Focal Point?
          </h2>

          <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
            <p className="text-optics-blue/90 leading-relaxed mb-6">
              The <strong className="text-optics-cyan">focal point</strong> is the point on the optical
              axis where parallel rays of light either converge (converging lens) or appear to diverge
              from (diverging lens) after passing through the lens.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-optics-darker rounded-lg p-5 border border-optics-cyan/30">
                <h3 className="font-semibold text-optics-cyan mb-3">Convex Lens — Real Focal Point</h3>
                <p className="text-optics-blue/80 text-sm">
                  Parallel light rays passing through a convex lens actually converge at a real point
                  behind the lens. You can project this point onto a screen. The focal point is
                  where the rays physically meet.
                </p>
              </div>
              <div className="bg-optics-darker rounded-lg p-5 border border-optics-purple/30">
                <h3 className="font-semibold text-optics-purple mb-3">Concave Lens — Virtual Focal Point</h3>
                <p className="text-optics-blue/80 text-sm">
                  Parallel light rays passing through a concave lens diverge. They appear to originate
                  from a point in front of the lens. This virtual focal point cannot be projected
                  onto a screen—no actual light passes through it.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* 2. Focal Point vs Focal Length */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          id="focal-point-vs-length"
          className="mb-16"
        >
          <h2 className="text-3xl font-display font-bold text-glow mb-6">
            Focal Point vs Focal Length
          </h2>

          <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
            <p className="text-optics-blue/90 leading-relaxed mb-6">
              These terms are related but distinct. Understanding the difference is essential for
              optics calculations.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-optics-darker rounded-lg p-6 border border-optics-cyan/30">
                <h3 className="font-semibold text-optics-cyan mb-3">Focal Point (F)</h3>
                <p className="text-optics-blue/80 text-sm">
                  A <strong>location</strong> in space—the specific position where parallel rays
                  converge or appear to diverge from. It is a point on the optical axis.
                </p>
              </div>
              <div className="bg-optics-darker rounded-lg p-6 border border-optics-amber/30">
                <h3 className="font-semibold text-optics-amber mb-3">Focal Length (f)</h3>
                <p className="text-optics-blue/80 text-sm">
                  A <strong>distance</strong>—the measurement from the optical center of the lens to
                  the focal point. Focal length tells you how far the focal point is from the lens.
                </p>
              </div>
            </div>
            <p className="text-optics-blue/80 text-sm mt-4">
              <strong className="text-optics-cyan">In short:</strong> The focal point is where;
              the focal length is how far.
            </p>
          </div>
        </motion.section>

        {/* 3. The Focal Point Formula */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          id="formula"
          className="mb-16"
        >
          <h2 className="text-3xl font-display font-bold text-glow mb-6">
            The Focal Point Formula
          </h2>

          <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
            <p className="text-optics-blue/90 leading-relaxed mb-6">
              To find where the focal point is located, use the lens maker formula. The distance from
              the lens center to the focal point equals the focal length:
            </p>
            <div className="bg-optics-darker rounded-xl p-8 border-2 border-optics-cyan text-center mb-6">
              <p className="text-3xl md:text-4xl font-mono text-optics-cyan font-bold text-glow">
                1/f = (n − 1)(1/R₁ − 1/R₂)
              </p>
            </div>
            <p className="text-optics-blue/80 text-sm">
              <strong className="text-optics-cyan">Focal point position = focal length f.</strong>{' '}
              Solve for f to get the distance from the lens center to either focal point. Both F₁ and
              F₂ are at |f| from the lens; the sign of f indicates real (positive) vs virtual
              (negative) focal point.
            </p>
          </div>
        </motion.section>

        {/* 4. Types of Focal Points */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          id="types-of-focal-points"
          className="mb-16"
        >
          <h2 className="text-3xl font-display font-bold text-glow mb-6">
            Types of Focal Points
          </h2>

          <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
            <p className="text-optics-blue/90 leading-relaxed mb-6">
              Every lens has two focal points along the optical axis: the primary (F₁) and secondary
              (F₂) focal points, also called the front and back focal points.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-optics-darker rounded-lg p-6 border border-optics-blue">
                <h3 className="font-semibold text-optics-cyan mb-3">Primary Focal Point (F₁)</h3>
                <p className="text-optics-blue/80 text-sm">
                  The front focal point—on the side where light enters. For a converging lens,
                  parallel rays from the right converge at F₁ on the left. Both F₁ and F₂ are at
                  distance f from the lens center.
                </p>
              </div>
              <div className="bg-optics-darker rounded-lg p-6 border border-optics-blue">
                <h3 className="font-semibold text-optics-cyan mb-3">Secondary Focal Point (F₂)</h3>
                <p className="text-optics-blue/80 text-sm">
                  The rear focal point—on the side where light exits. Parallel rays entering from the
                  left converge at F₂ on the right. For thin lenses, |F₁| = |F₂| = |f|.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* 5. Focal Point for Different Lens Types */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          id="lens-types"
          className="mb-16"
        >
          <h2 className="text-3xl font-display font-bold text-glow mb-6">
            Focal Point for Different Lens Types
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-glass-strong rounded-xl p-5 border border-optics-cyan/40"
            >
              <h3 className="font-semibold text-optics-cyan mb-3">Biconvex</h3>
              <p className="text-optics-blue/80 text-sm">
                Both surfaces convex. Real focal point, f &gt; 0. Rays converge behind the lens.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-glass-strong rounded-xl p-5 border border-optics-purple/40"
            >
              <h3 className="font-semibold text-optics-purple mb-3">Biconcave</h3>
              <p className="text-optics-blue/80 text-sm">
                Both surfaces concave. Virtual focal point, f &lt; 0. Rays appear to diverge from
                in front.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-glass-strong rounded-xl p-5 border border-optics-amber/40"
            >
              <h3 className="font-semibold text-optics-amber mb-3">Plano-Convex</h3>
              <p className="text-optics-blue/80 text-sm">
                One flat, one convex. Real focal point. Common in simple magnifiers and projectors.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-glass-strong rounded-xl p-5 border border-optics-purple/40"
            >
              <h3 className="font-semibold text-optics-purple mb-3">Plano-Concave</h3>
              <p className="text-optics-blue/80 text-sm">
                One flat, one concave. Virtual focal point. Used in beam expanders and eyepieces.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-glass-strong rounded-xl p-5 border border-optics-blue/40"
            >
              <h3 className="font-semibold text-optics-blue mb-3">Meniscus</h3>
              <p className="text-optics-blue/80 text-sm">
                Convex and concave curved surfaces. Can be converging or diverging depending on
                curvature radii.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* 6. Worked Examples */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          id="examples"
          className="mb-16"
        >
          <h2 className="text-3xl font-display font-bold text-glow mb-6">
            Worked Examples
          </h2>

          <div className="space-y-6">
            <div className="bg-glass-strong rounded-xl p-6 border border-optics-cyan/40">
              <h3 className="text-xl font-semibold text-optics-cyan mb-4">
                Example 1: Biconvex Lens (Real Focal Point)
              </h3>
              <p className="text-optics-blue/80 text-sm mb-4">
                n = 1.5, R₁ = 0.1 m, R₂ = −0.1 m
              </p>
              <div className="space-y-2 font-mono text-sm text-optics-blue/80">
                <p>1/f = (1.5 − 1)(1/0.1 − 1/(−0.1))</p>
                <p>1/f = 0.5 × (10 + 10) = 10</p>
                <p className="text-optics-cyan font-bold">f = 0.1 m</p>
                <p className="text-optics-blue/70 text-sm mt-2">
                  Focal point is 10 cm from lens center on each side. Real, converging.
                </p>
              </div>
            </div>

            <div className="bg-glass-strong rounded-xl p-6 border border-optics-purple/40">
              <h3 className="text-xl font-semibold text-optics-purple mb-4">
                Example 2: Biconcave Lens (Virtual Focal Point)
              </h3>
              <p className="text-optics-blue/80 text-sm mb-4">
                n = 1.52, R₁ = −0.12 m, R₂ = 0.18 m
              </p>
              <div className="space-y-2 font-mono text-sm text-optics-blue/80">
                <p>1/f = (1.52 − 1)(1/(−0.12) − 1/0.18)</p>
                <p>1/f = 0.52 × (−13.89) ≈ −7.22</p>
                <p className="text-optics-purple font-bold">f ≈ −0.139 m</p>
                <p className="text-optics-blue/70 text-sm mt-2">
                  Virtual focal point 13.9 cm in front of lens. Diverging.
                </p>
              </div>
            </div>

            <div className="bg-glass-strong rounded-xl p-6 border border-optics-amber/40">
              <h3 className="text-xl font-semibold text-optics-amber mb-4">
                Example 3: Plano-Convex Lens
              </h3>
              <p className="text-optics-blue/80 text-sm mb-4">
                n = 1.6, R₁ = 0.2 m, R₂ = ∞ (flat)
              </p>
              <div className="space-y-2 font-mono text-sm text-optics-blue/80">
                <p>1/f = (1.6 − 1)(1/0.2 − 0) = 0.6 × 5 = 3</p>
                <p className="text-optics-amber font-bold">f ≈ 0.333 m</p>
                <p className="text-optics-blue/70 text-sm mt-2">
                  Focal point 33.3 cm behind the lens. Real, converging.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* 7. Calculator */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          id="calculator"
          className="mb-16"
        >
          <h2 className="text-3xl font-display font-bold text-glow mb-6">
            Focal Point Calculator
          </h2>

          <p className="text-optics-blue/80 leading-relaxed mb-6">
            Use the calculator below to find the focal length f. The focal point is located at
            distance |f| from the lens center along the optical axis.
          </p>

          <LensCalculator />
        </motion.section>

        {/* 8. FAQ */}
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
            <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
              <h3 className="font-semibold text-optics-cyan mb-3">What is the focal point formula?</h3>
              <p className="text-optics-blue/80 text-sm leading-relaxed">
                The focal point formula determines where parallel light rays converge after passing
                through a lens. Use the lens maker formula 1/f = (n-1)(1/R₁ - 1/R₂) to find the
                focal length f. The focal point is located at distance f from the optical center of
                the lens.
              </p>
            </div>
            <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
              <h3 className="font-semibold text-optics-cyan mb-3">
                How do you find the focal point of a convex lens?
              </h3>
              <p className="text-optics-blue/80 text-sm leading-relaxed">
                For a convex lens, the focal point is on the opposite side from the incoming light.
                Calculate f using 1/f = (n-1)(1/R₁ - 1/R₂). The focal point (F) is located at
                distance f behind the lens, where parallel light rays converge to form a real image.
              </p>
            </div>
            <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
              <h3 className="font-semibold text-optics-cyan mb-3">
                What is the difference between focal point and focal length?
              </h3>
              <p className="text-optics-blue/80 text-sm leading-relaxed">
                The focal point (F) is a specific location in space where parallel light converges (or
                appears to diverge from). The focal length (f) is the distance from the optical
                center of the lens to the focal point. Focal length is a measurement; focal point is
                a position.
              </p>
            </div>
          </div>
        </motion.section>

        {/* 9. Related Links */}
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
                  Focal length calculator for thin lenses.
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
                  The formula for calculating focal length.
                </p>
              </motion.div>
            </Link>
            <Link href="/focal-distance-formula">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-glass-strong rounded-xl p-4 border border-optics-blue/30 hover:border-optics-amber/50 transition-all h-full"
              >
                <h3 className="font-semibold text-optics-amber mb-2">Focal Distance Formula</h3>
                <p className="text-optics-blue/70 text-sm">
                  Learn the focal distance formula.
                </p>
              </motion.div>
            </Link>
            <Link href="/convex-lens-calculator">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-glass-strong rounded-xl p-4 border border-optics-blue/30 hover:border-optics-purple/50 transition-all h-full"
              >
                <h3 className="font-semibold text-optics-purple mb-2">Convex Lens Calculator</h3>
                <p className="text-optics-blue/70 text-sm">
                  Calculate focal length for convex lenses.
                </p>
              </motion.div>
            </Link>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
