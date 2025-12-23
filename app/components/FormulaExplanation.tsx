'use client';

import { motion } from 'framer-motion';

export default function FormulaExplanation() {
  const explanations = [
    {
      symbol: 'f',
      name: 'Focal Length',
      description: 'The distance from the lens to the focal point where parallel rays converge (or appear to diverge from).',
      unit: 'meters (m)',
    },
    {
      symbol: 'n',
      name: 'Refractive Index',
      description: 'A measure of how much light slows down when passing through the material compared to vacuum.',
      unit: 'dimensionless',
    },
    {
      symbol: 'R₁',
      name: 'First Surface Radius',
      description: 'The radius of curvature of the first lens surface. Positive for convex, negative for concave.',
      unit: 'meters (m)',
    },
    {
      symbol: 'R₂',
      name: 'Second Surface Radius',
      description: 'The radius of curvature of the second lens surface. Positive for convex, negative for concave.',
      unit: 'meters (m)',
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative z-10 max-w-6xl mx-auto mt-20"
    >
      <div className="bg-glass-strong rounded-2xl p-8 md:p-12 border border-optics-blue/30">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-display font-bold text-glow mb-8 text-center"
        >
          Understanding the Formula
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {explanations.map((item, index) => (
            <motion.div
              key={item.symbol}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-optics-darker/50 rounded-xl border border-optics-blue/20 
                       hover:border-optics-blue/40 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-optics-blue/20 to-optics-cyan/20 
                              flex items-center justify-center border border-optics-blue/30">
                  <span className="text-2xl font-mono font-bold text-optics-cyan">{item.symbol}</span>
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

        {/* Sign Convention */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 p-6 bg-gradient-to-r from-optics-purple/10 to-optics-blue/10 
                   rounded-xl border border-optics-purple/30"
        >
          <h3 className="text-xl font-semibold text-optics-purple mb-4">Sign Convention</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-optics-blue/90 font-medium mb-2">✓ Positive Radius (R &gt; 0)</p>
              <p className="text-optics-blue/70">Convex surface (bulging outward toward the light source)</p>
            </div>
            <div>
              <p className="text-optics-blue/90 font-medium mb-2">✗ Negative Radius (R &lt; 0)</p>
              <p className="text-optics-blue/70">Concave surface (curving inward away from the light source)</p>
            </div>
          </div>
        </motion.div>

        {/* Example */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 p-6 bg-optics-darker/70 rounded-xl border border-optics-amber/30"
        >
          <h3 className="text-xl font-semibold text-optics-amber mb-4">Example Calculation</h3>
          <div className="space-y-3 font-mono text-sm">
            <p className="text-optics-blue/80">Given: n = 1.5, R₁ = 0.1 m, R₂ = -0.1 m</p>
            <p className="text-optics-blue/80">1/f = (1.5 - 1)(1/0.1 - 1/(-0.1))</p>
            <p className="text-optics-blue/80">1/f = 0.5 × (10 - (-10))</p>
            <p className="text-optics-blue/80">1/f = 0.5 × 20 = 10</p>
            <p className="text-optics-cyan font-bold text-lg mt-2">f = 0.1 m (10 cm)</p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

