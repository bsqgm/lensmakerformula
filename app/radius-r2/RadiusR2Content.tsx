'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import UniversalCalculator from '../components/UniversalCalculator';

export default function RadiusR2Content() {
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
            <li className="text-optics-cyan">Radius of Curvature Calculator (R₂)</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold text-glow-strong mb-6">
            Radius of Curvature Calculator (R₂)
          </h1>
          <p className="text-xl text-optics-blue/80 leading-relaxed">
            Use our free radius of curvature calculator to determine the second surface radius (R₂) of any lens. 
            This radius of curvature calculator uses the rearranged lens maker&apos;s equation to compute R₂ 
            from known focal length, refractive index, and first surface radius. The complete radius of 
            curvature calculator for optical engineers and lens designers.
          </p>
          <a href="#calculator" className="flex w-fit items-center gap-2 mt-6 px-6 py-3 bg-gradient-to-r from-optics-blue to-optics-cyan text-optics-darker font-bold rounded-lg hover:shadow-[0_0_30px_rgba(0,217,255,0.5)] transition-all">
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
            <li><a href="#calculator" className="hover:text-optics-cyan transition-colors">1. Radius of Curvature Calculator Tool</a></li>
            <li><a href="#what-is" className="hover:text-optics-cyan transition-colors">2. Understanding R₂ in Lens Design</a></li>
            <li><a href="#formula" className="hover:text-optics-cyan transition-colors">3. The R₂ Formula</a></li>
            <li><a href="#how-to-use" className="hover:text-optics-cyan transition-colors">4. How to Use the Radius of Curvature Calculator</a></li>
            <li><a href="#sign-convention" className="hover:text-optics-cyan transition-colors">5. Sign Convention for R₂</a></li>
            <li><a href="#examples" className="hover:text-optics-cyan transition-colors">6. Radius of Curvature Calculator Examples</a></li>
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
            1. Radius of Curvature Calculator Tool
          </h2>
          <p className="text-optics-blue/80 leading-relaxed mb-6">
            Our radius of curvature calculator instantly computes R₂ from your lens parameters. 
            Enter the focal length, refractive index, and R₁, and the radius of curvature calculator 
            will determine the required second surface radius for your lens design.
          </p>
          <UniversalCalculator
            mode="R2"
            title="Radius of Curvature Calculator (R₂)"
            description="Enter focal length (f), refractive index (n), and R₁ to calculate R₂"
          />
        </motion.section>

        {/* What is R₂ */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          id="what-is"
          className="mb-16"
        >
          <h2 className="text-3xl font-display font-bold text-glow mb-6">
            2. Understanding R₂ in Lens Design
          </h2>
          <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
            <p className="text-optics-blue/90 leading-relaxed mb-4">
              R₂ is the radius of curvature of the second (back) surface of a lens. The radius of 
              curvature calculator helps determine this critical parameter when designing lenses. 
              Understanding how R₂ affects lens performance is essential for using the radius of 
              curvature calculator effectively.
            </p>
            <p className="text-optics-blue/80 leading-relaxed mb-4">
              The second surface radius works together with R₁ to determine the overall focal length. 
              When using the radius of curvature calculator for R₂, remember that the sign of R₂ is 
              typically opposite to R₁ for converging lenses. The radius of curvature calculator 
              handles all sign conventions automatically.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <div className="bg-optics-darker/50 rounded-lg p-4 border border-optics-cyan/30">
                <h3 className="font-semibold text-optics-cyan mb-2">Biconvex Lens</h3>
                <p className="text-optics-blue/70 text-sm">
                  R₁ &gt; 0, R₂ &lt; 0: The radius of curvature calculator typically gives negative 
                  R₂ for the back surface of converging lenses.
                </p>
              </div>
              <div className="bg-optics-darker/50 rounded-lg p-4 border border-optics-purple/30">
                <h3 className="font-semibold text-optics-purple mb-2">Biconcave Lens</h3>
                <p className="text-optics-blue/70 text-sm">
                  R₁ &lt; 0, R₂ &gt; 0: The radius of curvature calculator gives positive R₂ for 
                  diverging lens back surfaces.
                </p>
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
            3. The R₂ Formula
          </h2>
          <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
            <p className="text-optics-blue/90 leading-relaxed mb-6">
              The radius of curvature calculator uses a rearranged form of the lens maker&apos;s equation. 
              Starting from 1/f = (n-1)(1/R₁ - 1/R₂), the radius of curvature calculator solves for R₂:
            </p>
            <div className="bg-optics-darker/50 rounded-lg p-6 text-center mb-6">
              <p className="text-sm text-optics-blue/60 mb-2 uppercase tracking-wider">
                Radius of Curvature Calculator Formula for R₂
              </p>
              <p className="text-3xl md:text-4xl font-mono text-optics-cyan font-bold">
                R₂ = 1 / [1/R₁ - 1/(f(n-1))]
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-optics-darker/50 rounded-lg p-4 border border-optics-blue/20">
                <h4 className="font-semibold text-optics-cyan mb-2">Input Variables</h4>
                <ul className="space-y-1 text-sm text-optics-blue/80">
                  <li><strong className="text-optics-amber">f</strong> = Desired focal length (meters)</li>
                  <li><strong className="text-optics-amber">n</strong> = Material refractive index</li>
                  <li><strong className="text-optics-amber">R₁</strong> = First surface radius</li>
                </ul>
              </div>
              <div className="bg-optics-darker/50 rounded-lg p-4 border border-optics-blue/20">
                <h4 className="font-semibold text-optics-cyan mb-2">Output</h4>
                <p className="text-sm text-optics-blue/80">
                  The radius of curvature calculator outputs R₂ in meters. The sign indicates 
                  surface orientation relative to the optical axis.
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
            4. How to Use the Radius of Curvature Calculator
          </h2>
          <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
            <p className="text-optics-blue/90 leading-relaxed mb-6">
              Follow these steps to use our radius of curvature calculator for determining R₂:
            </p>
            <div className="space-y-4">
              {[
                { step: 1, title: 'Enter desired focal length (f)', desc: 'Input your target focal length in meters. The radius of curvature calculator needs this to determine the required optical power distribution.' },
                { step: 2, title: 'Enter refractive index (n)', desc: 'Input the refractive index of your lens material. The radius of curvature calculator uses this to account for light bending at both surfaces.' },
                { step: 3, title: 'Enter first radius (R₁)', desc: 'Input the first surface radius you\'ve already determined or chosen. The radius of curvature calculator computes R₂ to complete your design.' },
                { step: 4, title: 'Calculate R₂', desc: 'Click calculate and the radius of curvature calculator will display the required second surface radius to achieve your target focal length.' },
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
            5. Sign Convention for R₂
          </h2>
          <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
            <p className="text-optics-blue/90 leading-relaxed mb-6">
              The radius of curvature calculator uses the Cartesian sign convention for R₂. 
              Understanding this helps interpret radius of curvature calculator results:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-optics-darker/50 rounded-lg p-4 border border-optics-purple/30">
                <h4 className="font-semibold text-optics-purple mb-3">R₂ &lt; 0 (Negative)</h4>
                <p className="text-optics-blue/80 text-sm mb-2">
                  The radius of curvature calculator gives negative R₂ when the center of curvature 
                  is to the left of the second surface (convex back surface for biconvex lens).
                </p>
                <p className="text-optics-blue/70 text-sm">Common for: Biconvex, plano-convex lenses</p>
              </div>
              <div className="bg-optics-darker/50 rounded-lg p-4 border border-optics-cyan/30">
                <h4 className="font-semibold text-optics-cyan mb-3">R₂ &gt; 0 (Positive)</h4>
                <p className="text-optics-blue/80 text-sm mb-2">
                  The radius of curvature calculator gives positive R₂ when the center of curvature 
                  is to the right of the second surface.
                </p>
                <p className="text-optics-blue/70 text-sm">Common for: Biconcave, plano-concave lenses</p>
              </div>
            </div>
            <div className="mt-6 bg-optics-darker/50 rounded-lg p-4 border border-optics-amber/30">
              <h4 className="font-semibold text-optics-amber mb-2">💡 Pro Tip</h4>
              <p className="text-optics-blue/80 text-sm">
                When the radius of curvature calculator gives R₂ = ∞, your design requires a flat 
                back surface (plano lens). This is common for simple magnifying glasses.
              </p>
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
            6. Radius of Curvature Calculator Examples
          </h2>
          <div className="space-y-6">
            <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
              <h3 className="text-xl font-semibold text-optics-cyan mb-4">
                Example 1: Completing a Biconvex Lens Design
              </h3>
              <div className="bg-optics-darker/50 rounded-lg p-4 mb-4 border border-optics-blue/20">
                <p className="text-optics-blue/90 mb-2"><strong>Input to radius of curvature calculator:</strong></p>
                <ul className="text-optics-blue/80 text-sm space-y-1">
                  <li>• Target focal length f = 0.1 m</li>
                  <li>• Material n = 1.5 (crown glass)</li>
                  <li>• First surface R₁ = 0.15 m (convex)</li>
                </ul>
              </div>
              <div className="space-y-2 font-mono text-sm text-optics-blue/80">
                <p>Radius of curvature calculator computation:</p>
                <p>1/(f(n-1)) = 1/(0.1 × 0.5) = 20</p>
                <p>1/R₁ = 1/0.15 = 6.67</p>
                <p>R₂ = 1/(6.67 - 20) = 1/(-13.33)</p>
                <p className="text-optics-cyan font-bold text-lg mt-2">Radius of curvature calculator result: R₂ = -0.075 m</p>
              </div>
            </div>

            <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
              <h3 className="text-xl font-semibold text-optics-cyan mb-4">
                Example 2: Meniscus Lens Design
              </h3>
              <div className="bg-optics-darker/50 rounded-lg p-4 mb-4 border border-optics-blue/20">
                <p className="text-optics-blue/90 mb-2"><strong>Input to radius of curvature calculator:</strong></p>
                <ul className="text-optics-blue/80 text-sm space-y-1">
                  <li>• Target focal length f = 0.2 m</li>
                  <li>• Material n = 1.6</li>
                  <li>• First surface R₁ = 0.1 m</li>
                </ul>
              </div>
              <div className="space-y-2 font-mono text-sm text-optics-blue/80">
                <p>Radius of curvature calculator computation:</p>
                <p>1/(f(n-1)) = 1/(0.2 × 0.6) = 8.33</p>
                <p>1/R₁ = 1/0.1 = 10</p>
                <p>R₂ = 1/(10 - 8.33) = 1/1.67</p>
                <p className="text-optics-cyan font-bold text-lg mt-2">Radius of curvature calculator result: R₂ = 0.6 m (positive meniscus)</p>
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
            7. Applications of the Radius of Curvature Calculator
          </h2>
          <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
            <p className="text-optics-blue/90 leading-relaxed mb-6">
              The radius of curvature calculator for R₂ is essential in various optical design scenarios. 
              Here&apos;s where professionals use this radius of curvature calculator:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { icon: '📸', title: 'Camera Lens Design', desc: 'Use the radius of curvature calculator to design multi-element camera lenses with specific focal lengths and aberration control.' },
                { icon: '👁️', title: 'Eyeglass Lenses', desc: 'The radius of curvature calculator helps opticians design lenses with proper curvature for vision correction prescriptions.' },
                { icon: '🔭', title: 'Telescope Optics', desc: 'Design eyepieces and objective lenses using the radius of curvature calculator for astronomical instruments.' },
                { icon: '⚗️', title: 'Scientific Instruments', desc: 'The radius of curvature calculator aids in designing specialized optics for spectrometers and other lab equipment.' },
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
            8. Radius of Curvature Calculator FAQ
          </h2>
          <div className="space-y-4">
            {[
              {
                q: 'What is the radius of curvature calculator for R₂?',
                a: 'The radius of curvature calculator for R₂ computes the second surface radius of a lens. Given focal length, refractive index, and R₁, this radius of curvature calculator determines the back surface curvature needed for your lens design.'
              },
              {
                q: 'How is R₂ different from R₁ in the radius of curvature calculator?',
                a: 'In the radius of curvature calculator, R₁ refers to the first (front) surface and R₂ to the second (back) surface. Light enters through the R₁ surface first. The radius of curvature calculator handles both surfaces but solves for different unknowns.'
              },
              {
                q: 'Why does the radius of curvature calculator give negative R₂ for biconvex lenses?',
                a: 'The radius of curvature calculator uses sign convention where negative R₂ indicates the center of curvature is behind the lens. For biconvex lenses, both surfaces curve outward, resulting in opposite signs from the radius of curvature calculator.'
              },
              {
                q: 'Can the radius of curvature calculator help design asymmetric lenses?',
                a: 'Yes! The radius of curvature calculator is perfect for asymmetric designs. Enter your known R₁, and the radius of curvature calculator will compute the specific R₂ needed regardless of symmetry, enabling optimized lens designs.'
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
            <Link href="/radius-r1">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-glass-strong rounded-xl p-4 border border-optics-blue/30 hover:border-optics-cyan/50 transition-all h-full"
              >
                <h3 className="font-semibold text-optics-cyan mb-2">Radius R₁ Calculator</h3>
                <p className="text-optics-blue/70 text-sm">Calculate first surface radius of curvature.</p>
              </motion.div>
            </Link>
            <Link href="/focal-length">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-glass-strong rounded-xl p-4 border border-optics-blue/30 hover:border-optics-amber/50 transition-all h-full"
              >
                <h3 className="font-semibold text-optics-amber mb-2">Focal Length Calculator</h3>
                <p className="text-optics-blue/70 text-sm">Calculate f from n, R₁, and R₂.</p>
              </motion.div>
            </Link>
            <Link href="/thick-lens">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-glass-strong rounded-xl p-4 border border-optics-blue/30 hover:border-optics-purple/50 transition-all h-full"
              >
                <h3 className="font-semibold text-optics-purple mb-2">Thick Lens Calculator</h3>
                <p className="text-optics-blue/70 text-sm">Includes thickness in calculations.</p>
              </motion.div>
            </Link>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
