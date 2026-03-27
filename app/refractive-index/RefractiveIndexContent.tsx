'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import UniversalCalculator from '../components/UniversalCalculator';

export default function RefractiveIndexContent() {
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
            <li className="text-optics-cyan">Refractive Index Calculator</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold text-glow-strong mb-6">
            Refractive Index Calculator
          </h1>
          <p className="text-xl text-optics-blue/80 leading-relaxed">
            Use our free online refractive index calculator to determine the refractive index of any lens material. 
            This calculator uses the <Link href="/lens-maker-formula" className="text-optics-cyan hover:underline">lens maker formula</Link> (lens maker&apos;s equation) to compute n from known focal length 
            and surface radii. If your audience searches for the alternate wording, use our{' '}
            <Link href="/index-of-refraction-calculator" className="text-optics-cyan hover:underline">index of refraction calculator</Link>.
            See also the <Link href="/focal-length-formula" className="text-optics-cyan hover:underline">focal length formula</Link> and our{' '}
            <Link href="/thick-lens" className="text-optics-cyan hover:underline">thick lens calculator</Link> for lenses where thickness matters.
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
            <li><a href="#calculator" className="hover:text-optics-cyan transition-colors">1. Refractive Index Calculator Tool</a></li>
            <li><a href="#what-is" className="hover:text-optics-cyan transition-colors">2. What is Refractive Index?</a></li>
            <li><a href="#formula" className="hover:text-optics-cyan transition-colors">3. The Refractive Index Formula</a></li>
            <li><a href="#how-to-use" className="hover:text-optics-cyan transition-colors">4. How to Use the Refractive Index Calculator</a></li>
            <li><a href="#common-values" className="hover:text-optics-cyan transition-colors">5. Common Refractive Index Values</a></li>
            <li><a href="#examples" className="hover:text-optics-cyan transition-colors">6. Refractive Index Calculator Examples</a></li>
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
            1. Refractive Index Calculator Tool
          </h2>
          <p className="text-optics-blue/80 leading-relaxed mb-6">
            Our refractive index calculator instantly computes the refractive index from lens parameters. 
            Enter the focal length and radii of curvature, and the refractive index calculator will 
            determine the material&apos;s n value using the rearranged lens maker&apos;s equation.
          </p>
          <UniversalCalculator
            mode="n"
            title="Refractive Index Calculator"
            description="Enter focal length (f), R₁, and R₂ to calculate refractive index"
          />
        </motion.section>

        {/* What is Refractive Index */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          id="what-is"
          className="mb-16"
        >
          <h2 className="text-3xl font-display font-bold text-glow mb-6">
            2. What is Refractive Index?
          </h2>
          <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
            <p className="text-optics-blue/90 leading-relaxed mb-4">
              Refractive index (n) is a dimensionless number that describes how fast light travels through 
              a material compared to vacuum. Understanding refractive index is essential for using a 
              refractive index calculator effectively. When light enters a material with higher refractive 
              index, it slows down and bends toward the normal.
            </p>
            <p className="text-optics-blue/80 leading-relaxed mb-4">
              The refractive index calculator helps you determine this property when you know the lens 
              geometry and focal length. A higher refractive index value from the refractive index calculator 
              indicates stronger light-bending capability. Materials with higher n values can create lenses 
              with shorter focal lengths.
            </p>
            <div className="bg-optics-darker/50 rounded-lg p-6 text-center mt-6">
              <p className="text-sm text-optics-blue/60 mb-2 uppercase tracking-wider">Definition</p>
              <p className="text-2xl font-mono text-optics-cyan font-bold">
                n = c / v
              </p>
              <p className="text-optics-blue/70 text-sm mt-2">
                where c = speed of light in vacuum, v = speed of light in material
              </p>
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
            3. The Refractive Index Formula
          </h2>
          <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
            <p className="text-optics-blue/90 leading-relaxed mb-6">
              The refractive index calculator uses a rearranged form of the lens maker&apos;s equation. 
              Starting from the standard formula, the refractive index calculator solves for n:
            </p>
            <div className="bg-optics-darker/50 rounded-lg p-6 text-center mb-6">
              <p className="text-sm text-optics-blue/60 mb-2 uppercase tracking-wider">
                Refractive Index Calculator Formula
              </p>
              <p className="text-3xl md:text-4xl font-mono text-optics-cyan font-bold">
                n = 1 + 1 / [f × (1/R₁ - 1/R₂)]
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-optics-darker/50 rounded-lg p-4 border border-optics-blue/20">
                <h4 className="font-semibold text-optics-cyan mb-2">Input Variables</h4>
                <ul className="space-y-1 text-sm text-optics-blue/80">
                  <li><strong className="text-optics-amber">f</strong> = Known focal length (meters)</li>
                  <li><strong className="text-optics-amber">R₁</strong> = First surface radius</li>
                  <li><strong className="text-optics-amber">R₂</strong> = Second surface radius</li>
                </ul>
              </div>
              <div className="bg-optics-darker/50 rounded-lg p-4 border border-optics-blue/20">
                <h4 className="font-semibold text-optics-cyan mb-2">Output</h4>
                <p className="text-sm text-optics-blue/80">
                  The refractive index calculator outputs n, which must be greater than 1 for 
                  valid optical materials. Typical values range from 1.3 to 2.5.
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
            4. How to Use the Refractive Index Calculator
          </h2>
          <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
            <p className="text-optics-blue/90 leading-relaxed mb-6">
              Follow these steps to use our refractive index calculator accurately:
            </p>
            <div className="space-y-4">
              {[
                { step: 1, title: 'Measure focal length (f)', desc: 'Determine the focal length of your lens experimentally or from specifications. Enter this value in meters into the refractive index calculator.' },
                { step: 2, title: 'Enter first radius (R₁)', desc: 'Input the radius of curvature of the first surface. The refractive index calculator requires accurate radius measurements for precise results.' },
                { step: 3, title: 'Enter second radius (R₂)', desc: 'Input the second surface radius with proper sign convention. The refractive index calculator uses both radii in the calculation.' },
                { step: 4, title: 'Calculate n', desc: 'Click calculate and the refractive index calculator will display the material\'s refractive index. Compare with known values to identify the material.' },
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

        {/* Common Values */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          id="common-values"
          className="mb-16"
        >
          <h2 className="text-3xl font-display font-bold text-glow mb-6">
            5. Common Refractive Index Values
          </h2>
          <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
            <p className="text-optics-blue/90 leading-relaxed mb-6">
              Use these reference values to verify your refractive index calculator results. 
              The refractive index calculator should produce values close to these for known materials:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-optics-darker/50 rounded-lg p-4 border border-optics-blue/20">
                <h4 className="font-semibold text-optics-cyan mb-3">Common Glass Types</h4>
                <ul className="space-y-2 text-sm text-optics-blue/80">
                  <li className="flex justify-between"><span>Crown glass</span><span className="text-optics-amber">n = 1.52</span></li>
                  <li className="flex justify-between"><span>Flint glass</span><span className="text-optics-amber">n = 1.62</span></li>
                  <li className="flex justify-between"><span>BK7 optical glass</span><span className="text-optics-amber">n = 1.52</span></li>
                  <li className="flex justify-between"><span>Dense flint</span><span className="text-optics-amber">n = 1.75</span></li>
                </ul>
              </div>
              <div className="bg-optics-darker/50 rounded-lg p-4 border border-optics-blue/20">
                <h4 className="font-semibold text-optics-cyan mb-3">Other Materials</h4>
                <ul className="space-y-2 text-sm text-optics-blue/80">
                  <li className="flex justify-between"><span>Water</span><span className="text-optics-amber">n = 1.33</span></li>
                  <li className="flex justify-between"><span>Acrylic (PMMA)</span><span className="text-optics-amber">n = 1.49</span></li>
                  <li className="flex justify-between"><span>Polycarbonate</span><span className="text-optics-amber">n = 1.58</span></li>
                  <li className="flex justify-between"><span>Diamond</span><span className="text-optics-amber">n = 2.42</span></li>
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
            6. Refractive Index Calculator Examples
          </h2>
          <div className="space-y-6">
            <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
              <h3 className="text-xl font-semibold text-optics-cyan mb-4">
                Example 1: Identifying Glass Type
              </h3>
              <div className="bg-optics-darker/50 rounded-lg p-4 mb-4 border border-optics-blue/20">
                <p className="text-optics-blue/90 mb-2"><strong>Input to refractive index calculator:</strong></p>
                <ul className="text-optics-blue/80 text-sm space-y-1">
                  <li>• Focal length f = 0.2 m (measured)</li>
                  <li>• First surface R₁ = 0.15 m</li>
                  <li>• Second surface R₂ = -0.15 m</li>
                </ul>
              </div>
              <div className="space-y-2 font-mono text-sm text-optics-blue/80">
                <p>Refractive index calculator computation:</p>
                <p>1/R₁ - 1/R₂ = 1/0.15 - 1/(-0.15) = 13.33</p>
                <p>n = 1 + 1/(0.2 × 13.33) = 1 + 0.375</p>
                <p className="text-optics-cyan font-bold text-lg mt-2">Refractive index calculator result: n = 1.375 (close to water/low-index glass)</p>
              </div>
            </div>

            <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
              <h3 className="text-xl font-semibold text-optics-cyan mb-4">
                Example 2: Crown Glass Verification
              </h3>
              <div className="bg-optics-darker/50 rounded-lg p-4 mb-4 border border-optics-blue/20">
                <p className="text-optics-blue/90 mb-2"><strong>Input to refractive index calculator:</strong></p>
                <ul className="text-optics-blue/80 text-sm space-y-1">
                  <li>• Focal length f = 0.1 m</li>
                  <li>• First surface R₁ = 0.1 m</li>
                  <li>• Second surface R₂ = -0.1 m</li>
                </ul>
              </div>
              <div className="space-y-2 font-mono text-sm text-optics-blue/80">
                <p>Refractive index calculator computation:</p>
                <p>1/R₁ - 1/R₂ = 10 - (-10) = 20</p>
                <p>n = 1 + 1/(0.1 × 20) = 1 + 0.5</p>
                <p className="text-optics-cyan font-bold text-lg mt-2">Refractive index calculator result: n = 1.5 (typical crown glass)</p>
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
            7. Applications of the Refractive Index Calculator
          </h2>
          <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
            <p className="text-optics-blue/90 leading-relaxed mb-6">
              The refractive index calculator serves many important applications in optics and materials science. 
              Here&apos;s where professionals use a refractive index calculator:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { icon: '🔬', title: 'Material Identification', desc: 'Use the refractive index calculator to identify unknown glass types by comparing calculated n with reference tables.' },
                { icon: '🏭', title: 'Quality Control', desc: 'Manufacturers use the refractive index calculator to verify optical materials meet specifications during production.' },
                { icon: '🔍', title: 'Lens Reverse Engineering', desc: 'The refractive index calculator helps determine material properties of existing lenses for replication or analysis.' },
                { icon: '📊', title: 'Research & Development', desc: 'Scientists use the refractive index calculator when developing new optical materials and coatings.' },
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
            8. Refractive Index Calculator FAQ
          </h2>
          <div className="space-y-4">
            {[
              {
                q: 'What is a refractive index calculator?',
                a: 'A refractive index calculator is an online tool that computes the refractive index (n) of a lens material. Our refractive index calculator uses the rearranged lens maker\'s equation, taking focal length and radii as inputs to calculate n.'
              },
              {
                q: 'Why would I need a refractive index calculator?',
                a: 'The refractive index calculator is useful when you have an existing lens and want to identify its material, or when verifying that manufactured lenses meet material specifications. The refractive index calculator helps in quality control and material identification.'
              },
              {
                q: 'What range of values should the refractive index calculator give?',
                a: 'The refractive index calculator should give values greater than 1.0 for valid optical materials. Most optical glasses have n between 1.4 and 1.9. If the refractive index calculator gives n < 1, check your input values.'
              },
              {
                q: 'How accurate is the refractive index calculator?',
                a: 'The refractive index calculator provides accurate results when input measurements are precise. For best refractive index calculator accuracy, measure focal length and radii carefully, and ensure the lens is thin enough for the thin lens approximation.'
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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/index-of-refraction-calculator">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-glass-strong rounded-xl p-4 border border-optics-blue/30 hover:border-optics-cyan/50 transition-all h-full"
              >
                <h3 className="font-semibold text-optics-cyan mb-2">Index of Refraction Calculator</h3>
                <p className="text-optics-blue/70 text-sm">Alternate wording for the same n calculation workflow.</p>
              </motion.div>
            </Link>
            <Link href="/focal-length">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-glass-strong rounded-xl p-4 border border-optics-blue/30 hover:border-optics-cyan/50 transition-all h-full"
              >
                <h3 className="font-semibold text-optics-cyan mb-2">Focal Length Calculator</h3>
                <p className="text-optics-blue/70 text-sm">Calculate f from n and radii.</p>
              </motion.div>
            </Link>
            <Link href="/radius-r1">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-glass-strong rounded-xl p-4 border border-optics-blue/30 hover:border-optics-amber/50 transition-all h-full"
              >
                <h3 className="font-semibold text-optics-amber mb-2">Radius R₁ Calculator</h3>
                <p className="text-optics-blue/70 text-sm">Calculate first surface radius.</p>
              </motion.div>
            </Link>
            <Link href="/materials">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-glass-strong rounded-xl p-4 border border-optics-blue/30 hover:border-optics-purple/50 transition-all h-full"
              >
                <h3 className="font-semibold text-optics-purple mb-2">Materials Database</h3>
                <p className="text-optics-blue/70 text-sm">Reference refractive index and index of refraction values.</p>
              </motion.div>
            </Link>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
