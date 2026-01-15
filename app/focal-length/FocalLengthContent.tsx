'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import UniversalCalculator from '../components/UniversalCalculator';

export default function FocalLengthContent() {
  return (
    <main className="min-h-screen relative z-10 pt-20 pb-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <ol className="flex items-center gap-2 text-optics-blue/60">
            <li><Link href="/" className="hover:text-optics-cyan transition-colors">Home</Link></li>
            <li>/</li>
            <li><Link href="/#tools" className="hover:text-optics-cyan transition-colors">Calculators</Link></li>
            <li>/</li>
            <li className="text-optics-cyan">Focal Length Calculator</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold text-glow-strong mb-6">
            Focal Length Calculator
          </h1>
          <p className="text-xl text-optics-blue/80 leading-relaxed">
            Use our free online focal length calculator to instantly compute the focal length of any lens. 
            This focal length calculator uses the lens maker&apos;s equation to determine focal length from 
            refractive index and surface radii. Perfect for students, educators, and optical engineers 
            who need a reliable focal length calculator for their work.
          </p>
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
            <li><a href="#calculator" className="hover:text-optics-cyan transition-colors">1. Focal Length Calculator Tool</a></li>
            <li><a href="#what-is" className="hover:text-optics-cyan transition-colors">2. What is Focal Length?</a></li>
            <li><a href="#formula" className="hover:text-optics-cyan transition-colors">3. The Focal Length Formula</a></li>
            <li><a href="#how-to-use" className="hover:text-optics-cyan transition-colors">4. How to Use the Focal Length Calculator</a></li>
            <li><a href="#sign-convention" className="hover:text-optics-cyan transition-colors">5. Sign Convention</a></li>
            <li><a href="#examples" className="hover:text-optics-cyan transition-colors">6. Focal Length Calculator Examples</a></li>
            <li><a href="#applications" className="hover:text-optics-cyan transition-colors">7. Applications</a></li>
            <li><a href="#faq" className="hover:text-optics-cyan transition-colors">8. FAQ</a></li>
          </ol>
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
            1. Focal Length Calculator Tool
          </h2>
          <p className="text-optics-blue/80 leading-relaxed mb-6">
            Our focal length calculator provides instant results for lens focal length calculations. 
            Simply enter the refractive index and radii of curvature below. This focal length calculator 
            automatically applies the lens maker&apos;s formula to compute the result.
          </p>
          <UniversalCalculator
            mode="f"
            title="Focal Length Calculator"
            description="Enter refractive index (n), R₁, and R₂ to calculate focal length"
          />
        </motion.section>

        {/* What is Focal Length */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          id="what-is"
          className="mb-16"
        >
          <h2 className="text-3xl font-display font-bold text-glow mb-6">
            2. What is Focal Length?
          </h2>
          <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
            <p className="text-optics-blue/90 leading-relaxed mb-4">
              Focal length is the distance from the center of a lens to its focal point, where parallel 
              light rays converge after passing through the lens. Understanding focal length is essential 
              for using any focal length calculator effectively. When you use a focal length calculator, 
              you&apos;re determining this critical optical parameter.
            </p>
            <p className="text-optics-blue/80 leading-relaxed mb-4">
              A positive focal length (calculated by the focal length calculator) indicates a converging 
              lens that brings light rays together. A negative focal length from the focal length calculator 
              indicates a diverging lens that spreads light rays apart. Our focal length calculator displays 
              both the numerical result and the lens type.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <div className="bg-optics-darker/50 rounded-lg p-4 border border-optics-cyan/30">
                <h3 className="font-semibold text-optics-cyan mb-2">✓ Positive Focal Length</h3>
                <p className="text-optics-blue/70 text-sm">Converging (convex) lens - focuses light to a real point</p>
              </div>
              <div className="bg-optics-darker/50 rounded-lg p-4 border border-optics-purple/30">
                <h3 className="font-semibold text-optics-purple mb-2">✗ Negative Focal Length</h3>
                <p className="text-optics-blue/70 text-sm">Diverging (concave) lens - spreads light from a virtual point</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* The Formula */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          id="formula"
          className="mb-16"
        >
          <h2 className="text-3xl font-display font-bold text-glow mb-6">
            3. The Focal Length Formula
          </h2>
          <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
            <p className="text-optics-blue/90 leading-relaxed mb-6">
              The focal length calculator uses the lens maker&apos;s equation to compute focal length. 
              This formula, built into our focal length calculator, relates the focal length to the 
              lens material and geometry:
            </p>
            <div className="bg-optics-darker/50 rounded-lg p-6 text-center mb-6">
              <p className="text-sm text-optics-blue/60 mb-2 uppercase tracking-wider">
                Lens Maker&apos;s Equation (Focal Length Calculator Formula)
              </p>
              <p className="text-3xl md:text-4xl font-mono text-optics-cyan font-bold">
                1/f = (n-1)(1/R₁ - 1/R₂)
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-optics-darker/50 rounded-lg p-4 border border-optics-blue/20">
                <h4 className="font-semibold text-optics-cyan mb-2">Variables</h4>
                <ul className="space-y-1 text-sm text-optics-blue/80">
                  <li><strong className="text-optics-amber">f</strong> = Focal length (meters)</li>
                  <li><strong className="text-optics-amber">n</strong> = Refractive index</li>
                  <li><strong className="text-optics-amber">R₁</strong> = First surface radius</li>
                  <li><strong className="text-optics-amber">R₂</strong> = Second surface radius</li>
                </ul>
              </div>
              <div className="bg-optics-darker/50 rounded-lg p-4 border border-optics-blue/20">
                <h4 className="font-semibold text-optics-cyan mb-2">Calculator Derivation</h4>
                <p className="text-sm text-optics-blue/80">
                  The focal length calculator rearranges this formula to solve for f directly, 
                  giving you instant focal length results.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* How to Use */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          id="how-to-use"
          className="mb-16"
        >
          <h2 className="text-3xl font-display font-bold text-glow mb-6">
            4. How to Use the Focal Length Calculator
          </h2>
          <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
            <p className="text-optics-blue/90 leading-relaxed mb-6">
              Follow these steps to use our focal length calculator effectively:
            </p>
            <div className="space-y-4">
              {[
                { step: 1, title: 'Enter refractive index (n)', desc: 'Input the refractive index of your lens material into the focal length calculator. Common values: glass (1.5), crown glass (1.52), flint glass (1.6).' },
                { step: 2, title: 'Enter first radius (R₁)', desc: 'Input the radius of curvature of the first surface in meters. The focal length calculator accepts positive values for convex surfaces.' },
                { step: 3, title: 'Enter second radius (R₂)', desc: 'Input the radius of curvature of the second surface. For a typical biconvex lens, enter a negative value in the focal length calculator.' },
                { step: 4, title: 'Click Calculate', desc: 'Press the calculate button and the focal length calculator will instantly display your result with lens type indication.' },
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-optics-blue/20 to-optics-cyan/20 
                                flex items-center justify-center border border-optics-blue/30">
                    <span className="text-optics-cyan font-bold">{item.step}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-optics-blue mb-1">{item.title}</h3>
                    <p className="text-optics-blue/70 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Sign Convention */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          id="sign-convention"
          className="mb-16"
        >
          <h2 className="text-3xl font-display font-bold text-glow mb-6">
            5. Sign Convention for Focal Length Calculator
          </h2>
          <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
            <p className="text-optics-blue/90 leading-relaxed mb-6">
              The focal length calculator uses the standard Cartesian sign convention. Understanding 
              this convention is crucial for getting accurate results from the focal length calculator:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-optics-darker/50 rounded-lg p-4 border border-optics-blue/20">
                <h4 className="font-semibold text-optics-cyan mb-3">Radius Signs</h4>
                <ul className="space-y-2 text-sm text-optics-blue/80">
                  <li><strong>R &gt; 0:</strong> Center of curvature on right side</li>
                  <li><strong>R &lt; 0:</strong> Center of curvature on left side</li>
                  <li><strong>R = ∞:</strong> Flat surface (plano lens)</li>
                </ul>
              </div>
              <div className="bg-optics-darker/50 rounded-lg p-4 border border-optics-blue/20">
                <h4 className="font-semibold text-optics-cyan mb-3">Common Lens Types</h4>
                <ul className="space-y-2 text-sm text-optics-blue/80">
                  <li><strong>Biconvex:</strong> R₁ &gt; 0, R₂ &lt; 0</li>
                  <li><strong>Biconcave:</strong> R₁ &lt; 0, R₂ &gt; 0</li>
                  <li><strong>Plano-convex:</strong> R₁ &gt; 0, R₂ = ∞</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Examples */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          id="examples"
          className="mb-16"
        >
          <h2 className="text-3xl font-display font-bold text-glow mb-6">
            6. Focal Length Calculator Examples
          </h2>
          <div className="space-y-6">
            <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
              <h3 className="text-xl font-semibold text-optics-cyan mb-4">
                Example 1: Biconvex Lens Focal Length Calculator
              </h3>
              <div className="bg-optics-darker/50 rounded-lg p-4 mb-4 border border-optics-blue/20">
                <p className="text-optics-blue/90 mb-2"><strong>Input to focal length calculator:</strong></p>
                <ul className="text-optics-blue/80 text-sm space-y-1">
                  <li>• Refractive index n = 1.5</li>
                  <li>• First surface R₁ = 0.1 m (convex)</li>
                  <li>• Second surface R₂ = -0.1 m (convex on right)</li>
                </ul>
              </div>
              <div className="space-y-2 font-mono text-sm text-optics-blue/80">
                <p>Focal length calculator computation:</p>
                <p>1/f = (1.5 - 1)(1/0.1 - 1/(-0.1))</p>
                <p>1/f = 0.5 × (10 + 10) = 10</p>
                <p className="text-optics-cyan font-bold text-lg mt-2">Focal length calculator result: f = 0.1 m = 10 cm</p>
              </div>
            </div>

            <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
              <h3 className="text-xl font-semibold text-optics-cyan mb-4">
                Example 2: Plano-Convex Lens Focal Length Calculator
              </h3>
              <div className="bg-optics-darker/50 rounded-lg p-4 mb-4 border border-optics-blue/20">
                <p className="text-optics-blue/90 mb-2"><strong>Input to focal length calculator:</strong></p>
                <ul className="text-optics-blue/80 text-sm space-y-1">
                  <li>• Refractive index n = 1.6</li>
                  <li>• First surface R₁ = 0.2 m (convex)</li>
                  <li>• Second surface R₂ = ∞ (flat)</li>
                </ul>
              </div>
              <div className="space-y-2 font-mono text-sm text-optics-blue/80">
                <p>Focal length calculator computation:</p>
                <p>1/f = (1.6 - 1)(1/0.2 - 0)</p>
                <p>1/f = 0.6 × 5 = 3</p>
                <p className="text-optics-cyan font-bold text-lg mt-2">Focal length calculator result: f = 0.33 m = 33 cm</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Applications */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          id="applications"
          className="mb-16"
        >
          <h2 className="text-3xl font-display font-bold text-glow mb-6">
            7. Applications of the Focal Length Calculator
          </h2>
          <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
            <p className="text-optics-blue/90 leading-relaxed mb-6">
              The focal length calculator is an essential tool for many optical applications. 
              Here&apos;s where professionals use a focal length calculator:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { icon: '📷', title: 'Camera Lens Design', desc: 'Photographers and lens designers use the focal length calculator to determine lens specifications for desired zoom and field of view.' },
                { icon: '👓', title: 'Eyeglass Prescription', desc: 'Optometrists use focal length calculator principles to prescribe corrective lenses with the right optical power.' },
                { icon: '🔬', title: 'Microscope Objectives', desc: 'The focal length calculator helps design high-magnification microscope lenses for scientific research.' },
                { icon: '🎓', title: 'Physics Education', desc: 'Students use the focal length calculator to verify theoretical calculations and understand optical principles.' },
              ].map((app) => (
                <div key={app.title} className="bg-optics-darker/50 rounded-lg p-4 border border-optics-blue/20">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{app.icon}</span>
                    <h3 className="font-semibold text-optics-cyan">{app.title}</h3>
                  </div>
                  <p className="text-optics-blue/70 text-sm">{app.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* FAQ */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          id="faq"
          className="mb-16"
        >
          <h2 className="text-3xl font-display font-bold text-glow mb-6">
            8. Focal Length Calculator FAQ
          </h2>
          <div className="space-y-4">
            {[
              {
                q: 'What is a focal length calculator?',
                a: 'A focal length calculator is an online tool that computes the focal length of a lens using the lens maker\'s equation. Our focal length calculator takes refractive index and radii of curvature as inputs and instantly calculates the focal length.'
              },
              {
                q: 'How accurate is this focal length calculator?',
                a: 'This focal length calculator provides highly accurate results for thin lenses. The focal length calculator uses the standard lens maker\'s formula, which is valid when lens thickness is much smaller than the radii of curvature.'
              },
              {
                q: 'What units does the focal length calculator use?',
                a: 'The focal length calculator uses meters for all length measurements. Enter radii in meters, and the focal length calculator will output focal length in meters. You can convert the focal length calculator result to other units as needed.'
              },
              {
                q: 'Can I use the focal length calculator for thick lenses?',
                a: 'This focal length calculator is designed for thin lenses. For thick lenses where lens thickness matters, use our Thick Lens Calculator which includes thickness correction in the focal length calculation.'
              },
            ].map((item, index) => (
              <div key={index} className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
                <h3 className="font-semibold text-optics-cyan mb-3">{item.q}</h3>
                <p className="text-optics-blue/80 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Related Calculators */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl font-display font-bold text-glow mb-6">
            Related Calculators
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/refractive-index">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-glass-strong rounded-xl p-4 border border-optics-blue/30 hover:border-optics-cyan/50 transition-all h-full"
              >
                <h3 className="font-semibold text-optics-cyan mb-2">Refractive Index Calculator</h3>
                <p className="text-optics-blue/70 text-sm">Calculate n from focal length and radii.</p>
              </motion.div>
            </Link>
            <Link href="/radius-r1">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-glass-strong rounded-xl p-4 border border-optics-blue/30 hover:border-optics-amber/50 transition-all h-full"
              >
                <h3 className="font-semibold text-optics-amber mb-2">Radius R₁ Calculator</h3>
                <p className="text-optics-blue/70 text-sm">Calculate first surface radius of curvature.</p>
              </motion.div>
            </Link>
            <Link href="/thick-lens">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-glass-strong rounded-xl p-4 border border-optics-blue/30 hover:border-optics-purple/50 transition-all h-full"
              >
                <h3 className="font-semibold text-optics-purple mb-2">Thick Lens Calculator</h3>
                <p className="text-optics-blue/70 text-sm">Focal length calculator with thickness correction.</p>
              </motion.div>
            </Link>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
