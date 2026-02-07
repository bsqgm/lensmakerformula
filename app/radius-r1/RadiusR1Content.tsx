'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import UniversalCalculator from '../components/UniversalCalculator';

export default function RadiusR1Content() {
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
            <li className="text-optics-cyan">Radius of Curvature Calculator (R₁)</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold text-glow-strong mb-6">
            Radius of Curvature Calculator (R₁)
          </h1>
          <p className="text-xl text-optics-blue/80 leading-relaxed">
            Use our free radius of curvature calculator to determine the first surface radius (R₁) of any lens. 
            This radius of curvature calculator uses the rearranged lens maker&apos;s equation to compute R₁ 
            from known focal length, refractive index, and second surface radius. The essential radius of 
            curvature calculator for lens design and optical engineering.
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
            <li><a href="#what-is" className="hover:text-optics-cyan transition-colors">2. What is Radius of Curvature?</a></li>
            <li><a href="#formula" className="hover:text-optics-cyan transition-colors">3. The R₁ Formula</a></li>
            <li><a href="#how-to-use" className="hover:text-optics-cyan transition-colors">4. How to Use the Radius of Curvature Calculator</a></li>
            <li><a href="#sign-convention" className="hover:text-optics-cyan transition-colors">5. Sign Convention</a></li>
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
            Our radius of curvature calculator instantly computes R₁ from your lens parameters. 
            Enter the focal length, refractive index, and R₂, and the radius of curvature calculator 
            will determine the required first surface radius for your lens design.
          </p>
          <UniversalCalculator
            mode="R1"
            title="Radius of Curvature Calculator (R₁)"
            description="Enter focal length (f), refractive index (n), and R₂ to calculate R₁"
          />
        </motion.section>

        {/* What is Radius of Curvature */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          id="what-is"
          className="mb-16"
        >
          <h2 className="text-3xl font-display font-bold text-glow mb-6">
            2. What is Radius of Curvature?
          </h2>
          <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
            <p className="text-optics-blue/90 leading-relaxed mb-4">
              Radius of curvature is the radius of the imaginary sphere that a lens surface is part of. 
              Understanding radius of curvature is essential for using our radius of curvature calculator 
              effectively. The radius of curvature calculator helps determine this geometric property 
              when designing lenses with specific optical characteristics.
            </p>
            <p className="text-optics-blue/80 leading-relaxed mb-4">
              A smaller radius of curvature means a more curved surface, creating stronger light bending. 
              The radius of curvature calculator considers both R₁ (first surface) and R₂ (second surface). 
              When using the radius of curvature calculator, remember that flatter surfaces have larger 
              radius values, approaching infinity for perfectly flat surfaces.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <div className="bg-optics-darker/50 rounded-lg p-4 border border-optics-cyan/30">
                <h3 className="font-semibold text-optics-cyan mb-2">Small Radius</h3>
                <p className="text-optics-blue/70 text-sm">More curved surface, stronger optical power, shorter focal length contribution</p>
              </div>
              <div className="bg-optics-darker/50 rounded-lg p-4 border border-optics-purple/30">
                <h3 className="font-semibold text-optics-purple mb-2">Large Radius</h3>
                <p className="text-optics-blue/70 text-sm">Flatter surface, weaker optical power, R = ∞ for flat surfaces</p>
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
            3. The R₁ Formula
          </h2>
          <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
            <p className="text-optics-blue/90 leading-relaxed mb-6">
              The radius of curvature calculator uses a rearranged form of the lens maker&apos;s equation. 
              Starting from 1/f = (n-1)(1/R₁ - 1/R₂), the radius of curvature calculator solves for R₁:
            </p>
            <div className="bg-optics-darker/50 rounded-lg p-6 text-center mb-6">
              <p className="text-sm text-optics-blue/60 mb-2 uppercase tracking-wider">
                Radius of Curvature Calculator Formula for R₁
              </p>
              <p className="text-3xl md:text-4xl font-mono text-optics-cyan font-bold">
                R₁ = 1 / [1/(f(n-1)) + 1/R₂]
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-optics-darker/50 rounded-lg p-4 border border-optics-blue/20">
                <h4 className="font-semibold text-optics-cyan mb-2">Input Variables</h4>
                <ul className="space-y-1 text-sm text-optics-blue/80">
                  <li><strong className="text-optics-amber">f</strong> = Desired focal length (meters)</li>
                  <li><strong className="text-optics-amber">n</strong> = Material refractive index</li>
                  <li><strong className="text-optics-amber">R₂</strong> = Second surface radius</li>
                </ul>
              </div>
              <div className="bg-optics-darker/50 rounded-lg p-4 border border-optics-blue/20">
                <h4 className="font-semibold text-optics-cyan mb-2">Output</h4>
                <p className="text-sm text-optics-blue/80">
                  The radius of curvature calculator outputs R₁ in meters. Positive values indicate 
                  convex surfaces (center right of surface), negative values indicate concave surfaces.
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
              Follow these steps to use our radius of curvature calculator for lens design:
            </p>
            <div className="space-y-4">
              {[
                { step: 1, title: 'Enter desired focal length (f)', desc: 'Input your target focal length in meters into the radius of curvature calculator. This is the focal length your designed lens should achieve.' },
                { step: 2, title: 'Enter refractive index (n)', desc: 'Input the refractive index of your chosen lens material. The radius of curvature calculator needs this to account for light bending properties.' },
                { step: 3, title: 'Enter second radius (R₂)', desc: 'Input the radius of your second surface. If designing symmetric lenses, you may iterate with the radius of curvature calculator.' },
                { step: 4, title: 'Calculate R₁', desc: 'Click calculate and the radius of curvature calculator will display the required first surface radius to achieve your target focal length.' },
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
            5. Sign Convention for Radius of Curvature Calculator
          </h2>
          <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
            <p className="text-optics-blue/90 leading-relaxed mb-6">
              The radius of curvature calculator uses the Cartesian sign convention. Understanding 
              this is crucial for interpreting radius of curvature calculator results correctly:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-optics-darker/50 rounded-lg p-4 border border-optics-cyan/30">
                <h4 className="font-semibold text-optics-cyan mb-3">R₁ &gt; 0 (Positive)</h4>
                <p className="text-optics-blue/80 text-sm mb-2">
                  The radius of curvature calculator gives positive R₁ when the center of curvature 
                  is to the right of the first surface.
                </p>
                <p className="text-optics-blue/70 text-sm">Example: Front surface of biconvex lens</p>
              </div>
              <div className="bg-optics-darker/50 rounded-lg p-4 border border-optics-purple/30">
                <h4 className="font-semibold text-optics-purple mb-3">R₁ &lt; 0 (Negative)</h4>
                <p className="text-optics-blue/80 text-sm mb-2">
                  The radius of curvature calculator gives negative R₁ when the center of curvature 
                  is to the left of the first surface.
                </p>
                <p className="text-optics-blue/70 text-sm">Example: Front surface of biconcave lens</p>
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
            6. Radius of Curvature Calculator Examples
          </h2>
          <div className="space-y-6">
            <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
              <h3 className="text-xl font-semibold text-optics-cyan mb-4">
                Example 1: Designing a Converging Lens
              </h3>
              <div className="bg-optics-darker/50 rounded-lg p-4 mb-4 border border-optics-blue/20">
                <p className="text-optics-blue/90 mb-2"><strong>Input to radius of curvature calculator:</strong></p>
                <ul className="text-optics-blue/80 text-sm space-y-1">
                  <li>• Target focal length f = 0.15 m</li>
                  <li>• Material n = 1.5 (crown glass)</li>
                  <li>• Second surface R₂ = -0.2 m (convex)</li>
                </ul>
              </div>
              <div className="space-y-2 font-mono text-sm text-optics-blue/80">
                <p>Radius of curvature calculator computation:</p>
                <p>1/(f(n-1)) = 1/(0.15 × 0.5) = 13.33</p>
                <p>1/R₂ = 1/(-0.2) = -5</p>
                <p>R₁ = 1/(13.33 + (-5)) = 1/8.33</p>
                <p className="text-optics-cyan font-bold text-lg mt-2">Radius of curvature calculator result: R₁ = 0.12 m</p>
              </div>
            </div>

            <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
              <h3 className="text-xl font-semibold text-optics-cyan mb-4">
                Example 2: Symmetric Biconvex Lens
              </h3>
              <div className="bg-optics-darker/50 rounded-lg p-4 mb-4 border border-optics-blue/20">
                <p className="text-optics-blue/90 mb-2"><strong>Input to radius of curvature calculator:</strong></p>
                <ul className="text-optics-blue/80 text-sm space-y-1">
                  <li>• Target focal length f = 0.1 m</li>
                  <li>• Material n = 1.5</li>
                  <li>• For symmetric lens, assume R₂ = -R₁</li>
                </ul>
              </div>
              <div className="space-y-2 font-mono text-sm text-optics-blue/80">
                <p>For symmetric lens: 1/f = (n-1) × 2/R₁</p>
                <p>R₁ = 2f(n-1) = 2 × 0.1 × 0.5 = 0.1 m</p>
                <p className="text-optics-cyan font-bold text-lg mt-2">Radius of curvature calculator: R₁ = 0.1 m, R₂ = -0.1 m</p>
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
              The radius of curvature calculator is essential for various optical design tasks. 
              Here&apos;s where professionals use a radius of curvature calculator:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { icon: '🔧', title: 'Custom Lens Design', desc: 'Use the radius of curvature calculator to design lenses with specific focal lengths for custom optical systems.' },
                { icon: '🏭', title: 'Manufacturing Specs', desc: 'The radius of curvature calculator provides the exact surface geometry needed for lens grinding and polishing.' },
                { icon: '🔬', title: 'Optical Instruments', desc: 'Design microscope objectives and telescope lenses using the radius of curvature calculator for precise specifications.' },
                { icon: '📐', title: 'Lens Optimization', desc: 'Iterate with the radius of curvature calculator to optimize lens designs for minimal aberrations.' },
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
                q: 'What is a radius of curvature calculator?',
                a: 'A radius of curvature calculator is an online tool that computes the radius of curvature of a lens surface. Our radius of curvature calculator specifically calculates R₁ (first surface radius) from focal length, refractive index, and second surface radius.'
              },
              {
                q: 'Why do I need a radius of curvature calculator?',
                a: 'The radius of curvature calculator is essential for lens design. When you know your desired focal length and have chosen a material and one surface radius, the radius of curvature calculator determines the other surface radius needed.'
              },
              {
                q: 'What if the radius of curvature calculator gives infinity?',
                a: 'If the radius of curvature calculator outputs infinity or a very large number, your design requires a flat first surface (plano-convex or plano-concave lens). The radius of curvature calculator correctly handles these cases.'
              },
              {
                q: 'Can I use this radius of curvature calculator for mirrors?',
                a: 'This radius of curvature calculator is designed for lenses. For mirrors, the relationship is simpler (f = R/2), but you can use similar principles. Our radius of curvature calculator focuses on the lens maker\'s equation.'
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
            <Link href="/radius-r2">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-glass-strong rounded-xl p-4 border border-optics-blue/30 hover:border-optics-cyan/50 transition-all h-full"
              >
                <h3 className="font-semibold text-optics-cyan mb-2">Radius R₂ Calculator</h3>
                <p className="text-optics-blue/70 text-sm">Calculate second surface radius of curvature.</p>
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
            <Link href="/refractive-index">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-glass-strong rounded-xl p-4 border border-optics-blue/30 hover:border-optics-purple/50 transition-all h-full"
              >
                <h3 className="font-semibold text-optics-purple mb-2">Refractive Index Calculator</h3>
                <p className="text-optics-blue/70 text-sm">Calculate n from lens parameters.</p>
              </motion.div>
            </Link>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
