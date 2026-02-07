'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import LensCalculator from '../components/LensCalculator';
import Visualization from '../components/Visualization';

export default function OpticsLensFormulaContent() {
  const [calculatorParams, setCalculatorParams] = useState({
    n: 1.5,
    R1: 0.1,
    R2: -0.1,
    focalLength: null as number | null,
  });

  return (
    <main className="min-h-screen relative z-10 pt-20 pb-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <ol className="flex items-center gap-2 text-optics-blue/60">
            <li><Link href="/" className="hover:text-optics-cyan transition-colors">Home</Link></li>
            <li>/</li>
            <li className="text-optics-cyan">Optics Lens Maker Formula</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold text-glow-strong mb-6">
            Optics Lens Maker Formula
          </h1>
          <p className="text-xl text-optics-blue/80 leading-relaxed">
            The <strong className="text-optics-cyan">optics lens maker formula</strong> is the fundamental equation 
            that connects lens geometry to optical power. This comprehensive guide covers everything you need to know 
            about applying this essential formula in optical design, physics, and engineering applications.
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
            <li><a href="#what-is" className="hover:text-optics-cyan transition-colors">1. What is the Optics Lens Maker Formula?</a></li>
            <li><a href="#physics" className="hover:text-optics-cyan transition-colors">2. The Physics Behind Optical Lenses</a></li>
            <li><a href="#variables" className="hover:text-optics-cyan transition-colors">3. Understanding the Variables</a></li>
            <li><a href="#calculator" className="hover:text-optics-cyan transition-colors">4. Interactive Optics Calculator</a></li>
            <li><a href="#sign-convention" className="hover:text-optics-cyan transition-colors">5. Sign Convention in Optics</a></li>
            <li><a href="#examples" className="hover:text-optics-cyan transition-colors">6. Worked Examples</a></li>
            <li><a href="#applications" className="hover:text-optics-cyan transition-colors">7. Applications in Optical Design</a></li>
            <li><a href="#faq" className="hover:text-optics-cyan transition-colors">8. Frequently Asked Questions</a></li>
          </ol>
        </motion.section>

        {/* Section 1: What is the Optics Lens Maker Formula */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          id="what-is"
          className="mb-16"
        >
          <h2 className="text-3xl font-display font-bold text-glow mb-6">
            1. What is the Optics Lens Maker Formula?
          </h2>
          
          <div className="bg-glass-strong rounded-xl p-6 mb-6 border border-optics-blue/30">
            <p className="text-lg text-optics-blue/90 leading-relaxed mb-4">
              The <strong className="text-optics-cyan">optics lens maker formula</strong> (also known as the 
              lensmaker&apos;s equation) is a mathematical relationship that determines the focal length of a 
              thin lens based on its physical properties. This formula is fundamental to the field of optics 
              and is used extensively in designing optical instruments.
            </p>
            
            <div className="bg-optics-darker/50 rounded-lg p-6 text-center my-6">
              <p className="text-sm text-optics-blue/60 mb-2 uppercase tracking-wider">
                The Optics Lens Maker Formula
              </p>
              <p className="text-3xl md:text-4xl font-mono text-optics-cyan font-bold">
                1/f = (n-1)(1/R₁ - 1/R₂)
              </p>
            </div>

            <p className="text-optics-blue/80 leading-relaxed mb-4">
              The optics lens maker formula connects the optical power of a lens (1/f) to two key factors: 
              the material property (refractive index n) and the geometric properties (radii of curvature R₁ and R₂). 
              Understanding this relationship is essential for anyone working in optical engineering, physics, 
              or related fields.
            </p>

            <div className="bg-gradient-to-r from-optics-cyan/10 to-optics-blue/10 rounded-lg p-4 border border-optics-cyan/30">
              <h3 className="font-semibold text-optics-cyan mb-2">Key Insight</h3>
              <p className="text-optics-blue/80 text-sm">
                The optics lens maker formula applies to thin lenses where the thickness is negligible compared 
                to the radii of curvature. For thick lenses, a modified version of this optical formula is required.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Section 2: The Physics Behind Optical Lenses */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          id="physics"
          className="mb-16"
        >
          <h2 className="text-3xl font-display font-bold text-glow mb-6">
            2. The Physics Behind Optical Lenses
          </h2>
          
          <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
            <p className="text-optics-blue/90 leading-relaxed mb-6">
              The optics lens maker formula is derived from fundamental principles of light refraction. 
              When light passes from one medium to another (like from air into glass), it bends according 
              to Snell&apos;s Law. A lens uses two curved surfaces to systematically bend light rays, 
              creating a focusing effect.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-optics-darker/50 rounded-lg p-4 border border-optics-blue/20">
                <h3 className="font-semibold text-optics-cyan mb-3">Refraction Principle</h3>
                <p className="text-optics-blue/80 text-sm leading-relaxed">
                  Light slows down when entering a denser medium (higher refractive index). This change 
                  in speed causes the light to bend at the interface. The optics lens maker formula 
                  quantifies this bending effect for curved surfaces.
                </p>
              </div>
              <div className="bg-optics-darker/50 rounded-lg p-4 border border-optics-blue/20">
                <h3 className="font-semibold text-optics-cyan mb-3">Curved Surface Effect</h3>
                <p className="text-optics-blue/80 text-sm leading-relaxed">
                  Each curved surface of a lens acts as a refracting element. The combined effect of 
                  both surfaces determines the overall optical power. The optics lens maker formula 
                  accounts for both surfaces in a single equation.
                </p>
              </div>
            </div>

            <div className="bg-optics-darker/50 rounded-lg p-4 border border-optics-purple/30">
              <h3 className="font-semibold text-optics-purple mb-3">Derivation from Snell&apos;s Law</h3>
              <p className="text-optics-blue/80 text-sm mb-3">
                The optics lens maker formula is derived by applying the refraction equation at each surface:
              </p>
              <div className="space-y-2 font-mono text-sm text-optics-blue/80">
                <p>• First surface: n₁/s + n₂/s&apos; = (n₂ - n₁)/R₁</p>
                <p>• Second surface: n₂/s&apos; + n₁/s&apos;&apos; = (n₁ - n₂)/R₂</p>
                <p>• Combined (thin lens): 1/f = (n - 1)(1/R₁ - 1/R₂)</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section 3: Understanding the Variables */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          id="variables"
          className="mb-16"
        >
          <h2 className="text-3xl font-display font-bold text-glow mb-6">
            3. Understanding the Variables
          </h2>
          
          <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
            <p className="text-optics-blue/90 leading-relaxed mb-6">
              Each variable in the optics lens maker formula has a specific physical meaning. 
              Understanding these parameters is crucial for correctly applying the formula in optical design.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  symbol: 'f',
                  name: 'Focal Length',
                  description: 'The distance from the lens to the focal point where parallel light rays converge (for converging lenses) or appear to diverge from (for diverging lenses).',
                  unit: 'meters (m)',
                  color: 'optics-cyan',
                },
                {
                  symbol: 'n',
                  name: 'Refractive Index',
                  description: 'A dimensionless number indicating how much light slows down in the lens material compared to vacuum. Higher n means stronger bending.',
                  unit: 'dimensionless (typically 1.4 - 2.5)',
                  color: 'optics-amber',
                },
                {
                  symbol: 'R₁',
                  name: 'First Surface Radius',
                  description: 'The radius of curvature of the first lens surface (the one light enters first). Positive for convex, negative for concave surfaces.',
                  unit: 'meters (m)',
                  color: 'optics-purple',
                },
                {
                  symbol: 'R₂',
                  name: 'Second Surface Radius',
                  description: 'The radius of curvature of the second lens surface (where light exits). Sign convention applies based on surface shape.',
                  unit: 'meters (m)',
                  color: 'optics-blue',
                },
              ].map((item) => (
                <motion.div
                  key={item.symbol}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="p-5 bg-optics-darker/50 rounded-xl border border-optics-blue/20 
                           hover:border-optics-blue/40 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className={`w-14 h-14 rounded-lg bg-gradient-to-br from-${item.color}/20 to-${item.color}/10 
                                  flex items-center justify-center border border-${item.color}/30`}>
                      <span className={`text-xl font-mono font-bold text-${item.color}`}>{item.symbol}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-optics-blue">{item.name}</h3>
                      <p className="text-xs text-optics-blue/60 font-mono">{item.unit}</p>
                    </div>
                  </div>
                  <p className="text-optics-blue/80 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Section 4: Interactive Calculator */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          id="calculator"
          className="mb-16"
        >
          <h2 className="text-3xl font-display font-bold text-glow mb-6">
            4. Interactive Optics Calculator
          </h2>
          
          <p className="text-optics-blue/80 leading-relaxed mb-6">
            Use our interactive calculator below to apply the optics lens maker formula instantly. 
            Enter the refractive index and radii of curvature to calculate the focal length of any thin lens.
          </p>

          <LensCalculator 
            onParamsChange={(params, focalLength) => {
              setCalculatorParams({
                n: params.n,
                R1: params.R1,
                R2: params.R2,
                focalLength: focalLength,
              });
            }}
          />

          {/* Visualization */}
          <div className="mt-8">
            <Visualization
              focalLength={calculatorParams.focalLength}
              R1={calculatorParams.R1}
              R2={calculatorParams.R2}
            />
          </div>

          <div className="mt-6 text-center">
            <p className="text-optics-blue/60 text-sm">
              Need to calculate other parameters? Try our specialized calculators:
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-3">
              <Link href="/refractive-index" className="text-optics-cyan hover:underline text-sm">
                Calculate Refractive Index →
              </Link>
              <Link href="/radius-r1" className="text-optics-cyan hover:underline text-sm">
                Calculate R₁ →
              </Link>
              <Link href="/radius-r2" className="text-optics-cyan hover:underline text-sm">
                Calculate R₂ →
              </Link>
            </div>
          </div>
        </motion.section>

        {/* Section 5: Sign Convention */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          id="sign-convention"
          className="mb-16"
        >
          <h2 className="text-3xl font-display font-bold text-glow mb-6">
            5. Sign Convention in Optics
          </h2>
          
          <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
            <p className="text-optics-blue/90 leading-relaxed mb-6">
              Correctly applying the sign convention is essential when using the optics lens maker formula. 
              The Cartesian sign convention is most commonly used in optics:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-optics-darker/50 rounded-lg p-4 border border-green-500/30">
                <h3 className="font-semibold text-green-400 mb-3">✓ Positive (+)</h3>
                <ul className="space-y-2 text-optics-blue/80 text-sm">
                  <li><strong>R &gt; 0:</strong> Center of curvature is to the right of the surface (convex surface facing left/light source)</li>
                  <li><strong>f &gt; 0:</strong> Converging lens (real focal point)</li>
                </ul>
              </div>
              <div className="bg-optics-darker/50 rounded-lg p-4 border border-red-500/30">
                <h3 className="font-semibold text-red-400 mb-3">✗ Negative (−)</h3>
                <ul className="space-y-2 text-optics-blue/80 text-sm">
                  <li><strong>R &lt; 0:</strong> Center of curvature is to the left of the surface (concave surface facing left/light source)</li>
                  <li><strong>f &lt; 0:</strong> Diverging lens (virtual focal point)</li>
                </ul>
              </div>
            </div>

            <div className="bg-optics-darker/50 rounded-lg p-4 border border-optics-amber/30">
              <h3 className="font-semibold text-optics-amber mb-3">Common Lens Types & Sign Values</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <p className="text-optics-blue/90 font-medium">Biconvex</p>
                  <p className="text-optics-blue/70 font-mono">R₁ &gt; 0, R₂ &lt; 0</p>
                  <p className="text-green-400 text-xs">f &gt; 0 (converging)</p>
                </div>
                <div>
                  <p className="text-optics-blue/90 font-medium">Biconcave</p>
                  <p className="text-optics-blue/70 font-mono">R₁ &lt; 0, R₂ &gt; 0</p>
                  <p className="text-red-400 text-xs">f &lt; 0 (diverging)</p>
                </div>
                <div>
                  <p className="text-optics-blue/90 font-medium">Plano-convex</p>
                  <p className="text-optics-blue/70 font-mono">R₁ &gt; 0, R₂ = ∞</p>
                  <p className="text-green-400 text-xs">f &gt; 0 (converging)</p>
                </div>
                <div>
                  <p className="text-optics-blue/90 font-medium">Plano-concave</p>
                  <p className="text-optics-blue/70 font-mono">R₁ = ∞, R₂ &gt; 0</p>
                  <p className="text-red-400 text-xs">f &lt; 0 (diverging)</p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section 6: Worked Examples */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          id="examples"
          className="mb-16"
        >
          <h2 className="text-3xl font-display font-bold text-glow mb-6">
            6. Worked Examples
          </h2>
          
          <div className="space-y-6">
            {/* Example 1 */}
            <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
              <h3 className="text-xl font-semibold text-optics-cyan mb-4">
                Example 1: Biconvex Lens (Converging)
              </h3>
              <div className="bg-optics-darker/50 rounded-lg p-4 mb-4 border border-optics-blue/20">
                <p className="text-optics-blue/90 mb-2"><strong>Problem:</strong></p>
                <p className="text-optics-blue/80 text-sm">
                  A biconvex lens made of crown glass (n = 1.52) has R₁ = +15 cm and R₂ = −20 cm. 
                  Calculate the focal length using the optics lens maker formula.
                </p>
              </div>
              <div className="space-y-2 font-mono text-sm text-optics-blue/80">
                <p>Applying the optics lens maker formula: 1/f = (n - 1)(1/R₁ - 1/R₂)</p>
                <p>1/f = (1.52 - 1)(1/0.15 - 1/(−0.20))</p>
                <p>1/f = 0.52 × (6.67 + 5.0)</p>
                <p>1/f = 0.52 × 11.67 = 6.07</p>
                <p className="text-optics-cyan font-bold text-lg mt-2">f = 0.165 m = 16.5 cm (converging lens)</p>
              </div>
            </div>

            {/* Example 2 */}
            <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
              <h3 className="text-xl font-semibold text-optics-cyan mb-4">
                Example 2: Biconcave Lens (Diverging)
              </h3>
              <div className="bg-optics-darker/50 rounded-lg p-4 mb-4 border border-optics-blue/20">
                <p className="text-optics-blue/90 mb-2"><strong>Problem:</strong></p>
                <p className="text-optics-blue/80 text-sm">
                  A biconcave lens made of flint glass (n = 1.62) has R₁ = −12 cm and R₂ = +18 cm. 
                  Find the focal length.
                </p>
              </div>
              <div className="space-y-2 font-mono text-sm text-optics-blue/80">
                <p>Using the optics lens maker formula: 1/f = (n - 1)(1/R₁ - 1/R₂)</p>
                <p>1/f = (1.62 - 1)(1/(−0.12) - 1/0.18)</p>
                <p>1/f = 0.62 × (−8.33 − 5.56)</p>
                <p>1/f = 0.62 × (−13.89) = −8.61</p>
                <p className="text-optics-purple font-bold text-lg mt-2">f = −0.116 m = −11.6 cm (diverging lens)</p>
              </div>
            </div>

            {/* Example 3 */}
            <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
              <h3 className="text-xl font-semibold text-optics-cyan mb-4">
                Example 3: Plano-Convex Lens
              </h3>
              <div className="bg-optics-darker/50 rounded-lg p-4 mb-4 border border-optics-blue/20">
                <p className="text-optics-blue/90 mb-2"><strong>Problem:</strong></p>
                <p className="text-optics-blue/80 text-sm">
                  A plano-convex lens has one flat surface (R₂ = ∞) and one convex surface (R₁ = +10 cm). 
                  The lens is made of glass with n = 1.5. Calculate f.
                </p>
              </div>
              <div className="space-y-2 font-mono text-sm text-optics-blue/80">
                <p>With R₂ = ∞, 1/R₂ = 0</p>
                <p>1/f = (n - 1)(1/R₁ - 0)</p>
                <p>1/f = (1.5 - 1)(1/0.10)</p>
                <p>1/f = 0.5 × 10 = 5</p>
                <p className="text-optics-cyan font-bold text-lg mt-2">f = 0.2 m = 20 cm (converging lens)</p>
              </div>
            </div>

            <div className="text-center">
              <Link href="/examples" className="text-optics-cyan hover:underline">
                View more lens examples →
              </Link>
            </div>
          </div>
        </motion.section>

        {/* Section 7: Applications */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          id="applications"
          className="mb-16"
        >
          <h2 className="text-3xl font-display font-bold text-glow mb-6">
            7. Applications in Optical Design
          </h2>
          
          <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
            <p className="text-optics-blue/90 leading-relaxed mb-6">
              The optics lens maker formula is applied across numerous industries and scientific fields. 
              Understanding how to use this formula is essential for designing and optimizing optical systems.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                { 
                  icon: '📷', 
                  title: 'Camera Lenses', 
                  desc: 'The optics lens maker formula helps design camera objectives with specific focal lengths for photography and cinematography. Zoom lenses use multiple elements calculated with this formula.' 
                },
                { 
                  icon: '👓', 
                  title: 'Eyeglasses & Contact Lenses', 
                  desc: 'Optometrists use the optics lens maker formula to prescribe corrective lenses. The formula determines what lens shape and material will correct myopia, hyperopia, or astigmatism.' 
                },
                { 
                  icon: '🔭', 
                  title: 'Telescopes & Binoculars', 
                  desc: 'Astronomical telescopes rely on precise focal length calculations using the optics lens maker formula for both objective and eyepiece lenses.' 
                },
                { 
                  icon: '🔬', 
                  title: 'Microscope Objectives', 
                  desc: 'High-magnification microscope lenses require careful application of the optics lens maker formula to achieve sharp, aberration-free images at cellular scales.' 
                },
                { 
                  icon: '📱', 
                  title: 'Smartphone Cameras', 
                  desc: 'Modern smartphone cameras use multiple tiny lenses, each designed using the optics lens maker formula to achieve compact, high-quality imaging systems.' 
                },
                { 
                  icon: '🏥', 
                  title: 'Medical Imaging', 
                  desc: 'Endoscopes, ophthalmoscopes, and other medical optical instruments rely on the optics lens maker formula for precise lens design.' 
                },
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
            {[
              {
                q: 'What is the optics lens maker formula?',
                a: 'The optics lens maker formula is 1/f = (n-1)(1/R₁ - 1/R₂), where f is the focal length, n is the refractive index of the lens material, and R₁ and R₂ are the radii of curvature of the two lens surfaces. This fundamental equation in optics relates the focal length of a thin lens to its physical and material properties.'
              },
              {
                q: 'When should I use the optics lens maker formula vs. the thin lens equation?',
                a: 'Use the optics lens maker formula when you know the lens geometry (radii and material) and need to find focal length. Use the thin lens equation (1/f = 1/do + 1/di) when you know the focal length and need to find image or object distances. Both formulas are part of the complete optical analysis toolkit.'
              },
              {
                q: 'Does the optics lens maker formula work for thick lenses?',
                a: 'The standard optics lens maker formula assumes thin lenses where thickness is negligible. For thick lenses, use the modified formula: 1/f = (n-1)[1/R₁ - 1/R₂ + (n-1)d/(nR₁R₂)], where d is the lens thickness. Our thick lens calculator handles this automatically.'
              },
              {
                q: 'Why do I get a negative focal length from the optics lens maker formula?',
                a: 'A negative focal length indicates a diverging lens. This occurs when the lens is thinner in the middle than at the edges (like biconcave lenses). Diverging lenses spread light rays apart and create virtual images.'
              },
              {
                q: 'What units should I use with the optics lens maker formula?',
                a: 'Use consistent units throughout the calculation. If radii are in meters, the focal length will be in meters. Common practice is to use meters for precision work or centimeters for classroom examples. The refractive index n is always dimensionless.'
              },
              {
                q: 'How do I calculate the focal length of a convex lens?',
                a: 'For a convex (converging) lens, use the lens maker formula with positive R₁ and negative R₂ for a biconvex lens. For example, a biconvex lens with R₁ = +10 cm, R₂ = -10 cm, and n = 1.5 gives: 1/f = (1.5-1)(1/10 - 1/(-10)) = 0.5 × 0.2 = 0.1, so f = 10 cm (positive, converging).'
              },
              {
                q: 'How do I find the focal length of a lens using the formula?',
                a: 'To find the focal length: (1) Identify the refractive index n of your lens material, (2) Measure or note the radii of curvature R₁ and R₂, (3) Apply the correct sign convention (convex surfaces are positive, concave negative), (4) Substitute into 1/f = (n-1)(1/R₁ - 1/R₂), and (5) Calculate 1/f then take the reciprocal to get f.'
              },
              {
                q: 'What is the formula for focal length of a lens in terms of radii?',
                a: 'The focal length formula in terms of radii is 1/f = (n-1)(1/R₁ - 1/R₂), or equivalently f = 1/[(n-1)(1/R₁ - 1/R₂)]. This shows that focal length depends on both the lens material (through n) and its shape (through R₁ and R₂).'
              },
              {
                q: 'How does refractive index affect focal length in the lens maker formula?',
                a: 'A higher refractive index (n) increases the optical power of the lens, resulting in a shorter focal length. This is because light bends more strongly at interfaces with higher refractive index differences. For example, a lens made from flint glass (n ≈ 1.62) will have a shorter focal length than the same shaped lens made from crown glass (n ≈ 1.52).'
              },
              {
                q: 'Can the lens maker formula be used for mirrors?',
                a: 'No, the lens maker formula is specifically for lenses (refracting systems). For mirrors (reflecting systems), use the mirror equation: 1/f = 2/R, where R is the radius of curvature. Mirrors have only one reflecting surface, while lenses use two refracting surfaces.'
              },
              {
                q: 'What is the relationship between optical power and focal length?',
                a: 'Optical power (P) is the reciprocal of focal length: P = 1/f. Power is measured in diopters (D) when f is in meters. A lens with f = 0.5 m has P = 2 D. The lens maker formula can be written as P = (n-1)(1/R₁ - 1/R₂), directly giving optical power.'
              },
              {
                q: 'Why is the lens maker formula important in optical design?',
                a: 'The lens maker formula is essential because it connects lens shape (geometry) to optical function (focal length). Optical designers use it to: select appropriate materials, determine required curvatures for specific focal lengths, minimize aberrations by choosing optimal lens shapes, and design multi-element systems like camera lenses and microscope objectives.'
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
            Related Calculators & Resources
          </h2>
          
          <div className="grid md:grid-cols-4 gap-4">
            <Link href="/focal-length">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-glass-strong rounded-xl p-4 border border-optics-blue/30 hover:border-optics-cyan/50 transition-all h-full"
              >
                <h3 className="font-semibold text-optics-cyan mb-2">Focal Length Calculator</h3>
                <p className="text-optics-blue/70 text-sm">Quick focal length calculation with the optics lens maker formula.</p>
              </motion.div>
            </Link>
            <Link href="/thick-lens">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-glass-strong rounded-xl p-4 border border-optics-blue/30 hover:border-optics-amber/50 transition-all h-full"
              >
                <h3 className="font-semibold text-optics-amber mb-2">Thick Lens Calculator</h3>
                <p className="text-optics-blue/70 text-sm">Extended formula with lens thickness correction.</p>
              </motion.div>
            </Link>
            <Link href="/lens-combination">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-glass-strong rounded-xl p-4 border border-optics-blue/30 hover:border-optics-purple/50 transition-all h-full"
              >
                <h3 className="font-semibold text-optics-purple mb-2">Lens Combination</h3>
                <p className="text-optics-blue/70 text-sm">Combined focal length for multiple lens systems.</p>
              </motion.div>
            </Link>
            <Link href="/tutorial">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-glass-strong rounded-xl p-4 border border-optics-blue/30 hover:border-optics-cyan/50 transition-all h-full"
              >
                <h3 className="font-semibold text-optics-cyan mb-2">Complete Tutorial</h3>
                <p className="text-optics-blue/70 text-sm">In-depth guide with derivation and practice problems.</p>
              </motion.div>
            </Link>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-optics-blue/70 mb-4">
            Ready to master the optics lens maker formula?
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/tutorial">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-optics-blue to-optics-cyan 
                         text-optics-darker font-bold rounded-lg border-glow
                         hover:shadow-[0_0_40px_rgba(0,217,255,0.6)] transition-all"
              >
                Start the Tutorial →
              </motion.button>
            </Link>
            <Link href="/materials">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-optics-darker border border-optics-blue/50
                         text-optics-cyan font-bold rounded-lg transition-all hover:bg-optics-blue/10"
              >
                Browse Materials Database
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
