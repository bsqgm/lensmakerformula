'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function DerivationContent() {
  return (
    <main className="min-h-screen relative z-10 pt-20 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <ol className="flex items-center gap-2 text-optics-blue/60">
            <li><Link href="/" className="hover:text-optics-cyan transition-colors">Home</Link></li>
            <li>/</li>
            <li className="text-optics-cyan">Lens Maker Formula Derivation</li>
          </ol>
        </nav>

        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold text-glow-strong mb-4">
            Lens Maker Formula Derivation
          </h1>
          <p className="text-xl text-optics-blue/80 max-w-2xl mx-auto">
            A complete mathematical derivation of the lens maker formula from first principles, 
            using Snell&apos;s Law and the refraction equation for spherical surfaces.
          </p>
          <Link href="/focal-length#calculator" className="flex w-fit items-center gap-2 mt-4 px-6 py-3 bg-gradient-to-r from-optics-blue to-optics-cyan text-optics-darker font-bold rounded-lg hover:shadow-[0_0_30px_rgba(0,217,255,0.5)] transition-all">
            Use Calculator Now →
          </Link>
        </motion.header>

        {/* Goal */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-glass-strong rounded-xl p-6 mb-8 border border-optics-cyan/30"
        >
          <h2 className="text-xl font-display font-bold text-glow mb-4">Our Goal</h2>
          <div className="text-center">
            <p className="text-optics-blue/70 mb-3">We will derive the lens maker formula:</p>
            <p className="text-3xl md:text-4xl font-mono text-optics-cyan font-bold">
              1/f = (n-1)(1/R₁ - 1/R₂)
            </p>
          </div>
        </motion.section>

        {/* Prerequisites */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-glass-strong rounded-xl p-6 mb-8 border border-optics-blue/30"
        >
          <h2 className="text-2xl font-display font-bold text-glow mb-4">Prerequisites</h2>
          <div className="space-y-4">
            <div className="bg-optics-darker/50 rounded-lg p-4 border border-optics-blue/20">
              <h3 className="font-semibold text-optics-cyan mb-2">Snell&apos;s Law</h3>
              <p className="font-mono text-optics-blue/80 mb-2">n₁ sin θ₁ = n₂ sin θ₂</p>
              <p className="text-sm text-optics-blue/70">
                When light passes from a medium with refractive index n₁ to a medium with index n₂, 
                the angles of incidence and refraction are related by this equation.
              </p>
            </div>
            <div className="bg-optics-darker/50 rounded-lg p-4 border border-optics-blue/20">
              <h3 className="font-semibold text-optics-cyan mb-2">Paraxial Approximation</h3>
              <p className="text-sm text-optics-blue/70 mb-2">
                For small angles (paraxial rays close to the optical axis):
              </p>
              <p className="font-mono text-optics-blue/80">sin θ ≈ tan θ ≈ θ (in radians)</p>
            </div>
            <div className="bg-optics-darker/50 rounded-lg p-4 border border-optics-blue/20">
              <h3 className="font-semibold text-optics-cyan mb-2">Single Surface Refraction Formula</h3>
              <p className="font-mono text-optics-amber mb-2">n₁/s + n₂/s&apos; = (n₂ - n₁)/R</p>
              <p className="text-sm text-optics-blue/70">
                This formula describes image formation by a single spherical refracting surface, where 
                s is object distance, s&apos; is image distance, and R is radius of curvature.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Assumptions */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-glass-strong rounded-xl p-6 mb-8 border border-optics-blue/30"
        >
          <h2 className="text-2xl font-display font-bold text-glow mb-4">Key Assumptions</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: 'Thin Lens', desc: 'The lens thickness is negligible compared to the radii of curvature, so both refractions occur at approximately the same point.' },
              { title: 'Paraxial Rays', desc: 'Light rays travel close to and nearly parallel to the optical axis. This allows us to use small angle approximations.' },
              { title: 'Spherical Surfaces', desc: 'Both lens surfaces are portions of spheres with radii R₁ and R₂.' },
              { title: 'Homogeneous Material', desc: 'The lens material has a uniform refractive index n throughout.' },
            ].map((item) => (
              <div key={item.title} className="bg-optics-darker/50 rounded-lg p-4 border border-optics-blue/20">
                <h3 className="font-semibold text-optics-cyan mb-2">{item.title}</h3>
                <p className="text-sm text-optics-blue/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Step-by-Step Derivation */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-glass-strong rounded-xl p-6 mb-8 border border-optics-amber/30"
        >
          <h2 className="text-2xl font-display font-bold text-glow mb-6">Step-by-Step Derivation</h2>

          {/* Step 1 */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-optics-cyan to-optics-blue 
                            flex items-center justify-center text-optics-darker font-bold">1</div>
              <h3 className="text-xl font-semibold text-optics-cyan">Refraction at the First Surface</h3>
            </div>
            <div className="bg-optics-darker/50 rounded-lg p-4 border border-optics-blue/20 space-y-3">
              <p className="text-optics-blue/80">
                Consider light traveling from air (n₁ = 1) into the lens (n₂ = n). 
                Applying the single surface refraction formula at the first surface:
              </p>
              <div className="bg-optics-darker/50 rounded p-3 text-center">
                <p className="font-mono text-optics-cyan text-lg">1/s₁ + n/s₁&apos; = (n - 1)/R₁</p>
              </div>
              <p className="text-sm text-optics-blue/70">
                Where s₁ is the object distance from surface 1, and s₁&apos; is the image distance 
                (inside the lens) formed by surface 1 alone.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-optics-cyan to-optics-blue 
                            flex items-center justify-center text-optics-darker font-bold">2</div>
              <h3 className="text-xl font-semibold text-optics-cyan">Refraction at the Second Surface</h3>
            </div>
            <div className="bg-optics-darker/50 rounded-lg p-4 border border-optics-blue/20 space-y-3">
              <p className="text-optics-blue/80">
                The image from surface 1 becomes the object for surface 2. Light travels from 
                the lens (n₁ = n) back into air (n₂ = 1):
              </p>
              <div className="bg-optics-darker/50 rounded p-3 text-center">
                <p className="font-mono text-optics-cyan text-lg">n/s₂ + 1/s₂&apos; = (1 - n)/R₂</p>
              </div>
              <p className="text-sm text-optics-blue/70">
                Where s₂ is the object distance for surface 2 (the image from surface 1), 
                and s₂&apos; is the final image distance.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-optics-cyan to-optics-blue 
                            flex items-center justify-center text-optics-darker font-bold">3</div>
              <h3 className="text-xl font-semibold text-optics-cyan">Apply Thin Lens Approximation</h3>
            </div>
            <div className="bg-optics-darker/50 rounded-lg p-4 border border-optics-blue/20 space-y-3">
              <p className="text-optics-blue/80">
                For a thin lens, the thickness is negligible. The image formed by surface 1 
                is essentially at the same location as the object for surface 2:
              </p>
              <div className="bg-optics-darker/50 rounded p-3 text-center">
                <p className="font-mono text-optics-purple text-lg">s₂ ≈ -s₁&apos;</p>
              </div>
              <p className="text-sm text-optics-blue/70">
                The negative sign accounts for the sign convention: the image from surface 1 
                is on the opposite side from where surface 2 measures its object distance.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-optics-cyan to-optics-blue 
                            flex items-center justify-center text-optics-darker font-bold">4</div>
              <h3 className="text-xl font-semibold text-optics-cyan">Add the Two Equations</h3>
            </div>
            <div className="bg-optics-darker/50 rounded-lg p-4 border border-optics-blue/20 space-y-3">
              <p className="text-optics-blue/80">
                Adding the equations from steps 1 and 2, and using s₂ = -s₁&apos;:
              </p>
              <div className="bg-optics-darker/50 rounded p-3 space-y-2">
                <p className="font-mono text-optics-blue/80 text-sm">1/s₁ + n/s₁&apos; + n/(-s₁&apos;) + 1/s₂&apos; = (n-1)/R₁ + (1-n)/R₂</p>
                <p className="font-mono text-optics-blue/80 text-sm">1/s₁ + n/s₁&apos; - n/s₁&apos; + 1/s₂&apos; = (n-1)/R₁ - (n-1)/R₂</p>
                <p className="font-mono text-optics-cyan text-lg mt-2">1/s₁ + 1/s₂&apos; = (n-1)(1/R₁ - 1/R₂)</p>
              </div>
              <p className="text-sm text-optics-blue/70">
                Notice how the middle terms (n/s₁&apos; and -n/s₁&apos;) cancel out!
              </p>
            </div>
          </div>

          {/* Step 5 */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-optics-amber to-optics-cyan 
                            flex items-center justify-center text-optics-darker font-bold">5</div>
              <h3 className="text-xl font-semibold text-optics-amber">Final Result</h3>
            </div>
            <div className="bg-optics-darker/50 rounded-lg p-4 border border-optics-amber/30 space-y-3">
              <p className="text-optics-blue/80">
                For an object at infinity (s₁ → ∞), parallel rays focus at the focal point, so s₂&apos; = f.
                Since 1/s₁ → 0:
              </p>
              <div className="bg-gradient-to-r from-optics-amber/20 to-optics-cyan/20 rounded p-4 text-center border border-optics-amber/30">
                <p className="text-3xl font-mono text-optics-amber font-bold">1/f = (n-1)(1/R₁ - 1/R₂)</p>
              </div>
              <p className="text-optics-cyan font-semibold text-center mt-4">
                This is the Lens Maker Formula! ✓
              </p>
            </div>
          </div>
        </motion.section>

        {/* Alternative Form */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-glass-strong rounded-xl p-6 mb-8 border border-optics-blue/30"
        >
          <h2 className="text-2xl font-display font-bold text-glow mb-4">Alternative Forms</h2>
          <div className="space-y-4">
            <div className="bg-optics-darker/50 rounded-lg p-4 border border-optics-blue/20">
              <h3 className="font-semibold text-optics-cyan mb-2">Optical Power Form</h3>
              <p className="font-mono text-lg text-optics-blue/80 mb-2">P = (n-1)(1/R₁ - 1/R₂)</p>
              <p className="text-sm text-optics-blue/70">
                Where P = 1/f is the optical power in diopters (when f is in meters).
              </p>
            </div>
            <div className="bg-optics-darker/50 rounded-lg p-4 border border-optics-blue/20">
              <h3 className="font-semibold text-optics-cyan mb-2">Focal Length Form</h3>
              <p className="font-mono text-lg text-optics-blue/80 mb-2">f = 1/[(n-1)(1/R₁ - 1/R₂)]</p>
              <p className="text-sm text-optics-blue/70">
                Directly gives the focal length by taking the reciprocal.
              </p>
            </div>
            <div className="bg-optics-darker/50 rounded-lg p-4 border border-optics-amber/20">
              <h3 className="font-semibold text-optics-amber mb-2">Thick Lens Extension</h3>
              <p className="font-mono text-lg text-optics-blue/80 mb-2">1/f = (n-1)[1/R₁ - 1/R₂ + (n-1)d/(nR₁R₂)]</p>
              <p className="text-sm text-optics-blue/70">
                For thick lenses where thickness d is not negligible, an additional term accounts for 
                the separation between the two surfaces.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Physical Interpretation */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-glass-strong rounded-xl p-6 mb-8 border border-optics-blue/30"
        >
          <h2 className="text-2xl font-display font-bold text-glow mb-4">Physical Interpretation</h2>
          <div className="space-y-4 text-optics-blue/80">
            <p>
              The lens maker formula reveals how each factor contributes to the lens&apos;s optical power:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-optics-darker/50 rounded-lg p-4 border border-optics-blue/20">
                <h3 className="font-semibold text-optics-amber mb-2">(n - 1) Factor</h3>
                <p className="text-sm">
                  This represents the &quot;refractive power&quot; of the material. Higher refractive index means 
                  more bending at each surface, leading to stronger optical power (shorter focal length).
                </p>
              </div>
              <div className="bg-optics-darker/50 rounded-lg p-4 border border-optics-blue/20">
                <h3 className="font-semibold text-optics-purple mb-2">(1/R₁ - 1/R₂) Factor</h3>
                <p className="text-sm">
                  This represents the &quot;curvature power&quot; of the lens shape. More curved surfaces 
                  (smaller R) create stronger bending. The difference accounts for both surfaces&apos; contributions.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* FAQ */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-glass-strong rounded-xl p-6 mb-8 border border-optics-blue/30"
        >
          <h2 className="text-2xl font-display font-bold text-glow mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                q: 'How is the lens maker formula derived?',
                a: 'The lens maker formula is derived by applying the single surface refraction equation (n₁/s + n₂/s\' = (n₂-n₁)/R) at each lens surface, then combining them using the thin lens approximation where the image from surface 1 becomes the object for surface 2 at essentially the same location.'
              },
              {
                q: 'What assumptions are made in the derivation?',
                a: 'The derivation assumes: (1) Thin lens - negligible thickness, (2) Paraxial rays - small angles allowing sin θ ≈ θ, (3) Spherical surfaces - both surfaces are portions of spheres, (4) Homogeneous material - constant refractive index throughout.'
              },
              {
                q: 'Why do the n/s₁\' terms cancel in the derivation?',
                a: 'When we add the equations for both surfaces and apply the thin lens approximation (s₂ = -s₁\'), we get +n/s₁\' from surface 1 and -n/s₁\' from surface 2 (since s₂ = -s₁\'). These cancel, leaving only the external object and image distances.'
              },
              {
                q: 'What is the single surface refraction formula?',
                a: 'The single surface refraction formula is n₁/s + n₂/s\' = (n₂-n₁)/R. It describes how a single spherical interface between two media with different refractive indices forms an image. This formula is derived from Snell\'s Law using the paraxial approximation.'
              },
              {
                q: 'How does the thick lens formula differ from the derivation?',
                a: 'For thick lenses, we cannot assume s₂ = -s₁\' exactly. Instead, s₂ = -(s₁\' - d) where d is the lens thickness. This introduces an additional term (n-1)d/(nR₁R₂) in the final formula, accounting for the separation between refraction events.'
              },
            ].map((item, index) => (
              <div key={index} className="bg-optics-darker/50 rounded-lg p-4 border border-optics-blue/20">
                <h3 className="font-semibold text-optics-cyan mb-2">{item.q}</h3>
                <p className="text-optics-blue/80 text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Related Pages */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-xl font-display font-bold text-glow mb-4">Related Resources</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/optics-lens-maker-formula">
              <motion.button whileHover={{ scale: 1.05 }} className="px-4 py-2 bg-optics-darker border border-optics-cyan/50 text-optics-cyan rounded-lg">
                Complete Formula Guide
              </motion.button>
            </Link>
            <Link href="/how-to-calculate-focal-length">
              <motion.button whileHover={{ scale: 1.05 }} className="px-4 py-2 bg-optics-darker border border-optics-cyan/50 text-optics-cyan rounded-lg">
                How to Calculate
              </motion.button>
            </Link>
            <Link href="/thick-lens">
              <motion.button whileHover={{ scale: 1.05 }} className="px-4 py-2 bg-optics-darker border border-optics-amber/50 text-optics-amber rounded-lg">
                Thick Lens Calculator
              </motion.button>
            </Link>
            <Link href="/focal-length">
              <motion.button whileHover={{ scale: 1.05 }} className="px-4 py-2 bg-optics-darker border border-optics-blue/50 text-optics-cyan rounded-lg">
                Focal Length Calculator
              </motion.button>
            </Link>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
