'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function TutorialContent() {
  return (
    <main className="min-h-screen relative z-10 pt-20 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <ol className="flex items-center gap-2 text-optics-blue/60">
            <li><Link href="/" className="hover:text-optics-cyan transition-colors">Home</Link></li>
            <li>/</li>
            <li className="text-optics-cyan">Tutorial</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold text-glow-strong mb-6">
            Lens Maker Formula Tutorial
          </h1>
          <p className="text-xl text-optics-blue/80 leading-relaxed">
            A comprehensive guide to understanding, deriving, and applying the lens maker formula. 
            Perfect for students, educators, and optical engineers.
          </p>
          <Link href="/focal-length#calculator" className="flex w-fit items-center gap-2 mt-6 px-6 py-3 bg-gradient-to-r from-optics-blue to-optics-cyan text-optics-darker font-bold rounded-lg hover:shadow-[0_0_30px_rgba(0,217,255,0.5)] transition-all">
            Use Calculator Now →
          </Link>
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
            <li><a href="#what-is" className="hover:text-optics-cyan transition-colors">1. What is the Lens Maker Formula?</a></li>
            <li><a href="#derivation" className="hover:text-optics-cyan transition-colors">2. Formula Derivation</a></li>
            <li><a href="#sign-convention" className="hover:text-optics-cyan transition-colors">3. Sign Convention</a></li>
            <li><a href="#step-by-step" className="hover:text-optics-cyan transition-colors">4. Step-by-Step Calculation Guide</a></li>
            <li><a href="#examples" className="hover:text-optics-cyan transition-colors">5. Worked Examples</a></li>
            <li><a href="#common-mistakes" className="hover:text-optics-cyan transition-colors">6. Common Mistakes to Avoid</a></li>
            <li><a href="#practice" className="hover:text-optics-cyan transition-colors">7. Practice Problems</a></li>
          </ol>
        </motion.section>

        {/* Section 1: What is the Lens Maker Formula */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          id="what-is"
          className="mb-16"
        >
          <h2 className="text-3xl font-display font-bold text-glow mb-6">
            1. What is the Lens Maker Formula?
          </h2>
          
          <div className="bg-glass-strong rounded-xl p-6 mb-6 border border-optics-blue/30">
            <p className="text-lg text-optics-blue/90 leading-relaxed mb-4">
              <strong className="text-optics-cyan">The lens maker formula</strong> is a fundamental equation in optics 
              that relates the focal length of a lens to its physical properties: the refractive index of the material 
              and the radii of curvature of its two surfaces.
            </p>
            
            <div className="bg-optics-darker/50 rounded-lg p-6 text-center my-6">
              <p className="text-sm text-optics-blue/60 mb-2 uppercase tracking-wider">The Formula</p>
              <p className="text-3xl md:text-4xl font-mono text-optics-cyan font-bold">
                1/f = (n-1)(1/R₁ - 1/R₂)
              </p>
            </div>

            <p className="text-optics-blue/80 leading-relaxed">
              This formula is essential for designing optical systems, from simple magnifying glasses to complex 
              camera lenses and microscope objectives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-optics-darker/50 rounded-lg p-4 border border-optics-blue/20">
              <h3 className="font-semibold text-optics-cyan mb-2">Key Variables</h3>
              <ul className="space-y-1 text-optics-blue/80 text-sm">
                <li><strong>f</strong> = Focal length (meters)</li>
                <li><strong>n</strong> = Refractive index of lens material</li>
                <li><strong>R₁</strong> = Radius of first surface (meters)</li>
                <li><strong>R₂</strong> = Radius of second surface (meters)</li>
              </ul>
            </div>
            <div className="bg-optics-darker/50 rounded-lg p-4 border border-optics-blue/20">
              <h3 className="font-semibold text-optics-cyan mb-2">Prerequisites</h3>
              <ul className="space-y-1 text-optics-blue/80 text-sm">
                <li>• Basic understanding of refraction</li>
                <li>• Knowledge of Snell&apos;s Law</li>
                <li>• Familiarity with geometry</li>
                <li>• Understanding of thin lens approximation</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Section 2: Derivation */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          id="derivation"
          className="mb-16"
        >
          <h2 className="text-3xl font-display font-bold text-glow mb-6">
            2. Formula Derivation
          </h2>
          
          <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30 space-y-6">
            <p className="text-optics-blue/90 leading-relaxed">
              The lens maker formula is derived by applying Snell&apos;s Law at each surface of the lens and using 
              the thin lens approximation.
            </p>

            <div className="space-y-4">
              <div className="bg-optics-darker/50 rounded-lg p-4 border border-optics-blue/20">
                <h3 className="font-semibold text-optics-cyan mb-3">Step 1: Refraction at First Surface</h3>
                <p className="text-optics-blue/80 text-sm mb-2">
                  Using the refraction formula for a single spherical surface:
                </p>
                <p className="font-mono text-optics-cyan text-center py-2">
                  n₁/s + n₂/s&apos; = (n₂ - n₁)/R₁
                </p>
                <p className="text-optics-blue/70 text-sm">
                  Where n₁ = 1 (air), n₂ = n (lens material), s is object distance, s&apos; is image distance.
                </p>
              </div>

              <div className="bg-optics-darker/50 rounded-lg p-4 border border-optics-blue/20">
                <h3 className="font-semibold text-optics-cyan mb-3">Step 2: Refraction at Second Surface</h3>
                <p className="text-optics-blue/80 text-sm mb-2">
                  The image from the first surface becomes the object for the second surface:
                </p>
                <p className="font-mono text-optics-cyan text-center py-2">
                  n/s&apos; + 1/s&apos;&apos; = (1 - n)/R₂
                </p>
              </div>

              <div className="bg-optics-darker/50 rounded-lg p-4 border border-optics-blue/20">
                <h3 className="font-semibold text-optics-cyan mb-3">Step 3: Combine and Simplify</h3>
                <p className="text-optics-blue/80 text-sm mb-2">
                  Adding the equations and using the thin lens approximation (lens thickness ≈ 0):
                </p>
                <p className="font-mono text-optics-cyan text-center py-2">
                  1/f = (n - 1)(1/R₁ - 1/R₂)
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-optics-purple/10 to-optics-blue/10 rounded-lg p-4 border border-optics-purple/30">
              <h3 className="font-semibold text-optics-purple mb-2">📚 Important Note</h3>
              <p className="text-optics-blue/80 text-sm">
                This derivation assumes the lens is thin (thickness much smaller than radii of curvature) and 
                surrounded by air (n = 1). For lenses in other media, the formula must be modified.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Section 3: Sign Convention */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          id="sign-convention"
          className="mb-16"
        >
          <h2 className="text-3xl font-display font-bold text-glow mb-6">
            3. Sign Convention
          </h2>
          
          <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
            <p className="text-optics-blue/90 leading-relaxed mb-6">
              Understanding the sign convention is crucial for correctly applying the lens maker formula. 
              The most common convention (Cartesian sign convention) is:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-optics-darker/50 rounded-lg p-4 border border-optics-cyan/30">
                <h3 className="font-semibold text-optics-cyan mb-3">✓ Positive (+)</h3>
                <ul className="space-y-2 text-optics-blue/80 text-sm">
                  <li><strong>R &gt; 0:</strong> Center of curvature is to the right of the surface (convex surface facing left)</li>
                  <li><strong>f &gt; 0:</strong> Converging lens (real focus)</li>
                </ul>
              </div>
              <div className="bg-optics-darker/50 rounded-lg p-4 border border-optics-purple/30">
                <h3 className="font-semibold text-optics-purple mb-3">✗ Negative (−)</h3>
                <ul className="space-y-2 text-optics-blue/80 text-sm">
                  <li><strong>R &lt; 0:</strong> Center of curvature is to the left of the surface (concave surface facing left)</li>
                  <li><strong>f &lt; 0:</strong> Diverging lens (virtual focus)</li>
                </ul>
              </div>
            </div>

            <div className="bg-optics-darker/50 rounded-lg p-4 border border-optics-amber/30">
              <h3 className="font-semibold text-optics-amber mb-3">🎯 Quick Reference</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-optics-blue/90 font-medium">Biconvex lens:</p>
                  <p className="text-optics-blue/70">R₁ &gt; 0, R₂ &lt; 0</p>
                </div>
                <div>
                  <p className="text-optics-blue/90 font-medium">Biconcave lens:</p>
                  <p className="text-optics-blue/70">R₁ &lt; 0, R₂ &gt; 0</p>
                </div>
                <div>
                  <p className="text-optics-blue/90 font-medium">Plano-convex:</p>
                  <p className="text-optics-blue/70">R₁ &gt; 0, R₂ = ∞</p>
                </div>
                <div>
                  <p className="text-optics-blue/90 font-medium">Plano-concave:</p>
                  <p className="text-optics-blue/70">R₁ &lt; 0, R₂ = ∞</p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section 4: Step-by-Step Guide */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          id="step-by-step"
          className="mb-16"
        >
          <h2 className="text-3xl font-display font-bold text-glow mb-6">
            4. Step-by-Step Calculation Guide
          </h2>
          
          <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
            <div className="space-y-6">
              {[
                { step: 1, title: 'Identify the lens type', desc: 'Determine if the lens is convex, concave, or a combination.' },
                { step: 2, title: 'Measure or identify radii', desc: 'Find R₁ (first surface) and R₂ (second surface) in meters.' },
                { step: 3, title: 'Apply sign convention', desc: 'Assign positive or negative signs based on surface curvature.' },
                { step: 4, title: 'Find refractive index', desc: 'Look up or measure the refractive index (n) of the lens material.' },
                { step: 5, title: 'Calculate (n-1)', desc: 'Subtract 1 from the refractive index.' },
                { step: 6, title: 'Calculate (1/R₁ - 1/R₂)', desc: 'Compute the difference of the reciprocals of the radii.' },
                { step: 7, title: 'Multiply and invert', desc: 'Multiply the results from steps 5 and 6, then take the reciprocal to find f.' },
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
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

            <div className="mt-8 flex justify-center">
              <Link href="/focal-length">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-optics-blue to-optics-cyan 
                           text-optics-darker font-bold rounded-lg border-glow
                           hover:shadow-[0_0_40px_rgba(0,217,255,0.6)] transition-all"
                >
                  Try the Calculator →
                </motion.button>
              </Link>
            </div>
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
            5. Worked Examples
          </h2>
          
          <div className="space-y-6">
            {/* Example 1 */}
            <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
              <h3 className="text-xl font-semibold text-optics-cyan mb-4">Example 1: Biconvex Lens</h3>
              <div className="bg-optics-darker/50 rounded-lg p-4 mb-4 border border-optics-blue/20">
                <p className="text-optics-blue/90 mb-2"><strong>Given:</strong></p>
                <ul className="text-optics-blue/80 text-sm space-y-1">
                  <li>• Refractive index n = 1.5 (crown glass)</li>
                  <li>• First surface radius R₁ = +10 cm = 0.1 m (convex)</li>
                  <li>• Second surface radius R₂ = −10 cm = −0.1 m (convex on right side)</li>
                </ul>
              </div>
              <div className="space-y-2 font-mono text-sm text-optics-blue/80">
                <p>1/f = (n - 1)(1/R₁ - 1/R₂)</p>
                <p>1/f = (1.5 - 1)(1/0.1 - 1/(−0.1))</p>
                <p>1/f = 0.5 × (10 − (−10))</p>
                <p>1/f = 0.5 × 20 = 10</p>
                <p className="text-optics-cyan font-bold text-lg mt-2">f = 0.1 m = 10 cm (converging)</p>
              </div>
            </div>

            {/* Example 2 */}
            <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
              <h3 className="text-xl font-semibold text-optics-cyan mb-4">Example 2: Biconcave Lens</h3>
              <div className="bg-optics-darker/50 rounded-lg p-4 mb-4 border border-optics-blue/20">
                <p className="text-optics-blue/90 mb-2"><strong>Given:</strong></p>
                <ul className="text-optics-blue/80 text-sm space-y-1">
                  <li>• Refractive index n = 1.6 (flint glass)</li>
                  <li>• First surface radius R₁ = −15 cm = −0.15 m (concave)</li>
                  <li>• Second surface radius R₂ = +15 cm = 0.15 m (concave on right side)</li>
                </ul>
              </div>
              <div className="space-y-2 font-mono text-sm text-optics-blue/80">
                <p>1/f = (n - 1)(1/R₁ - 1/R₂)</p>
                <p>1/f = (1.6 - 1)(1/(−0.15) - 1/0.15)</p>
                <p>1/f = 0.6 × (−6.67 − 6.67)</p>
                <p>1/f = 0.6 × (−13.34) = −8.0</p>
                <p className="text-optics-purple font-bold text-lg mt-2">f = −0.125 m = −12.5 cm (diverging)</p>
              </div>
            </div>

            <div className="text-center">
              <Link href="/examples" className="text-optics-cyan hover:underline">
                View more examples →
              </Link>
            </div>
          </div>
        </motion.section>

        {/* Section 6: Common Mistakes */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          id="common-mistakes"
          className="mb-16"
        >
          <h2 className="text-3xl font-display font-bold text-glow mb-6">
            6. Common Mistakes to Avoid
          </h2>
          
          <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
            <div className="space-y-4">
              {[
                { mistake: 'Incorrect sign for radii', fix: 'Always apply the sign convention consistently. Remember: convex surfaces facing the light source are positive.' },
                { mistake: 'Using diameter instead of radius', fix: 'The formula requires radius of curvature, not diameter. Divide diameter by 2.' },
                { mistake: 'Forgetting to subtract 1 from n', fix: 'The formula uses (n-1), not n. This is because air has n=1.' },
                { mistake: 'Mixing units', fix: 'Keep all lengths in the same unit (preferably meters) throughout the calculation.' },
                { mistake: 'Applying to thick lenses', fix: 'This formula is for thin lenses only. Use the thick lens formula for lenses where thickness matters.' },
              ].map((item, index) => (
                <div key={index} className="bg-optics-darker/50 rounded-lg p-4 border border-red-500/20">
                  <div className="flex items-start gap-3">
                    <span className="text-red-400 text-xl">✗</span>
                    <div>
                      <h3 className="font-semibold text-red-400 mb-1">{item.mistake}</h3>
                      <p className="text-optics-blue/70 text-sm">
                        <span className="text-green-400">✓ Fix:</span> {item.fix}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Section 7: Practice Problems */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          id="practice"
          className="mb-16"
        >
          <h2 className="text-3xl font-display font-bold text-glow mb-6">
            7. Practice Problems
          </h2>
          
          <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
            <p className="text-optics-blue/80 mb-6">
              Test your understanding with these practice problems. Use our calculator to verify your answers.
            </p>

            <div className="space-y-4">
              {[
                { q: 'A plano-convex lens (R₁ = 20 cm, R₂ = ∞) is made of glass with n = 1.5. Find the focal length.', a: '40 cm' },
                { q: 'Calculate n for a biconvex lens (R₁ = 10 cm, R₂ = −15 cm) with f = 12 cm.', a: 'n ≈ 1.5' },
                { q: 'A meniscus lens has R₁ = 10 cm and R₂ = 15 cm with n = 1.6. Is it converging or diverging?', a: 'Converging (f > 0)' },
              ].map((item, index) => (
                <div key={index} className="bg-optics-darker/50 rounded-lg p-4 border border-optics-blue/20">
                  <p className="text-optics-blue/90 mb-2"><strong>Problem {index + 1}:</strong> {item.q}</p>
                  <details className="mt-2">
                    <summary className="text-optics-cyan cursor-pointer hover:underline text-sm">Show Answer</summary>
                    <p className="mt-2 text-optics-amber font-mono">{item.a}</p>
                  </details>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/focal-length">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gradient-to-r from-optics-blue to-optics-cyan 
                           text-optics-darker font-bold rounded-lg transition-all"
                >
                  Calculate Focal Length
                </motion.button>
              </Link>
              <Link href="/refractive-index">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-optics-darker border border-optics-blue/50
                           text-optics-cyan font-bold rounded-lg transition-all hover:bg-optics-blue/10"
                >
                  Calculate Refractive Index
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.section>

        {/* Related Resources */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl font-display font-bold text-glow mb-6">
            Related Resources
          </h2>
          
          <div className="grid md:grid-cols-4 gap-4">
            <Link href="/optics-lens-maker-formula">
              <div className="bg-glass-strong rounded-xl p-4 border border-optics-blue/30 hover:border-optics-cyan/50 transition-all h-full">
                <h3 className="font-semibold text-optics-cyan mb-2">Optics Formula Guide</h3>
                <p className="text-optics-blue/70 text-sm">Complete guide to the optics lens maker formula.</p>
              </div>
            </Link>
            <Link href="/examples">
              <div className="bg-glass-strong rounded-xl p-4 border border-optics-blue/30 hover:border-optics-blue/50 transition-all h-full">
                <h3 className="font-semibold text-optics-cyan mb-2">Lens Examples</h3>
                <p className="text-optics-blue/70 text-sm">See common lens types and their properties.</p>
              </div>
            </Link>
            <Link href="/glossary">
              <div className="bg-glass-strong rounded-xl p-4 border border-optics-blue/30 hover:border-optics-blue/50 transition-all h-full">
                <h3 className="font-semibold text-optics-cyan mb-2">Glossary</h3>
                <p className="text-optics-blue/70 text-sm">Definitions of key optics terms.</p>
              </div>
            </Link>
            <Link href="/materials">
              <div className="bg-glass-strong rounded-xl p-4 border border-optics-blue/30 hover:border-optics-blue/50 transition-all h-full">
                <h3 className="font-semibold text-optics-cyan mb-2">Materials Database</h3>
                <p className="text-optics-blue/70 text-sm">Refractive indices of common materials.</p>
              </div>
            </Link>
          </div>
        </motion.section>
      </div>
    </main>
  );
}

