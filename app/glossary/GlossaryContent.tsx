'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const glossaryTerms = [
  {
    term: 'Focal Length (f)',
    definition: 'The distance from the optical center of a lens to the focal point, where parallel rays of light converge (or appear to diverge from). Measured in meters or centimeters.',
    formula: 'Calculated using: 1/f = (n-1)(1/R₁ - 1/R₂)',
    related: ['Focal Point', 'Principal Axis', 'Optical Center'],
    category: 'Core Concepts',
  },
  {
    term: 'Refractive Index (n)',
    definition: 'A dimensionless number that describes how fast light travels through a material compared to vacuum. Higher values indicate slower light propagation. For air, n ≈ 1.00; for glass, n typically ranges from 1.4 to 1.9.',
    formula: 'n = c / v (speed of light in vacuum / speed in material)',
    related: ['Snell\'s Law', 'Dispersion', 'Critical Angle'],
    category: 'Core Concepts',
  },
  {
    term: 'Radius of Curvature (R)',
    definition: 'The radius of the sphere from which a lens surface is a portion. A larger radius means a flatter surface. The sign indicates the direction of curvature relative to the light source.',
    formula: 'R > 0: center on right; R < 0: center on left',
    related: ['Curvature', 'Spherical Surface', 'Sign Convention'],
    category: 'Core Concepts',
  },
  {
    term: 'Converging Lens',
    definition: 'A lens that causes parallel light rays to converge to a focal point. Has a positive focal length. Thicker in the middle than at the edges (e.g., biconvex lens).',
    formula: 'f > 0',
    related: ['Biconvex', 'Real Image', 'Magnification'],
    category: 'Lens Types',
  },
  {
    term: 'Diverging Lens',
    definition: 'A lens that causes parallel light rays to spread apart, appearing to originate from a virtual focal point. Has a negative focal length. Thinner in the middle than at the edges (e.g., biconcave lens).',
    formula: 'f < 0',
    related: ['Biconcave', 'Virtual Image', 'Reduction'],
    category: 'Lens Types',
  },
  {
    term: 'Thin Lens',
    definition: 'A lens whose thickness is negligible compared to its radii of curvature and focal length. The lens maker formula applies directly to thin lenses without thickness correction.',
    formula: 'Thickness << R₁, R₂, f',
    related: ['Thick Lens', 'Paraxial Approximation', 'Lens Maker Formula'],
    category: 'Lens Types',
  },
  {
    term: 'Thick Lens',
    definition: 'A lens where thickness significantly affects optical properties. Requires additional terms in the lens maker formula to account for the optical path through the lens material.',
    formula: '1/f = (n-1)[1/R₁ - 1/R₂ + (n-1)d/(nR₁R₂)]',
    related: ['Principal Planes', 'Nodal Points', 'Effective Focal Length'],
    category: 'Lens Types',
  },
  {
    term: 'Biconvex Lens',
    definition: 'A lens with both surfaces curving outward (convex). The most common type of converging lens, used in magnifying glasses and many optical instruments.',
    formula: 'R₁ > 0, R₂ < 0',
    related: ['Converging Lens', 'Double Convex', 'Positive Lens'],
    category: 'Lens Types',
  },
  {
    term: 'Biconcave Lens',
    definition: 'A lens with both surfaces curving inward (concave). A common diverging lens used in eyeglasses for nearsightedness and beam expanders.',
    formula: 'R₁ < 0, R₂ > 0',
    related: ['Diverging Lens', 'Double Concave', 'Negative Lens'],
    category: 'Lens Types',
  },
  {
    term: 'Plano-Convex Lens',
    definition: 'A lens with one flat (plano) surface and one convex surface. A simple converging lens often used in focusing applications.',
    formula: 'R₁ > 0, R₂ = ∞ (or R₁ = ∞, R₂ < 0)',
    related: ['Converging Lens', 'Asymmetric Lens', 'Collimation'],
    category: 'Lens Types',
  },
  {
    term: 'Meniscus Lens',
    definition: 'A lens where both surfaces curve in the same direction, but with different radii. Can be either converging or diverging depending on the relative radii.',
    formula: 'Both R₁ and R₂ have same sign',
    related: ['Converging Meniscus', 'Diverging Meniscus', 'Corrective Lens'],
    category: 'Lens Types',
  },
  {
    term: 'Focal Point (Focus)',
    definition: 'The point on the principal axis where parallel rays of light converge (real focus) or appear to diverge from (virtual focus) after passing through the lens.',
    formula: 'Located at distance f from optical center',
    related: ['Principal Focus', 'Focal Length', 'Focal Plane'],
    category: 'Optical Geometry',
  },
  {
    term: 'Principal Axis',
    definition: 'An imaginary line passing through the centers of curvature of both lens surfaces. Light rays along this axis pass through without bending.',
    formula: 'Connects C₁ and C₂',
    related: ['Optical Axis', 'Optical Center', 'Paraxial Rays'],
    category: 'Optical Geometry',
  },
  {
    term: 'Optical Center',
    definition: 'The point on the principal axis through which light rays pass without deviation. For a thin lens, it is at the geometric center of the lens.',
    formula: 'Center of thin lens',
    related: ['Principal Axis', 'Nodal Point', 'Lens Center'],
    category: 'Optical Geometry',
  },
  {
    term: 'Snell\'s Law',
    definition: 'The fundamental law of refraction relating the angles of incidence and refraction to the refractive indices of two media. Forms the basis for deriving the lens maker formula.',
    formula: 'n₁ sin(θ₁) = n₂ sin(θ₂)',
    related: ['Refraction', 'Refractive Index', 'Critical Angle'],
    category: 'Physical Laws',
  },
  {
    term: 'Lens Power (Diopter)',
    definition: 'The reciprocal of the focal length measured in meters. Expressed in diopters (D). A 0.5 m focal length lens has a power of 2 D.',
    formula: 'P = 1/f (when f is in meters)',
    related: ['Focal Length', 'Optometry', 'Vision Correction'],
    category: 'Measurements',
  },
  {
    term: 'Magnification',
    definition: 'The ratio of image size to object size. Can be lateral (height ratio) or angular (angle ratio). Positive for upright images, negative for inverted.',
    formula: 'm = -s\'/s = h\'/h',
    related: ['Image Formation', 'Object Distance', 'Image Distance'],
    category: 'Measurements',
  },
  {
    term: 'Sign Convention',
    definition: 'A set of rules for assigning positive or negative values to optical quantities. The Cartesian convention measures all distances from the optical center, with positive to the right.',
    formula: 'Light travels left → right; R > 0 if center is right of surface',
    related: ['Cartesian Convention', 'Real/Virtual', 'Image Formation'],
    category: 'Conventions',
  },
];

const categories = [...new Set(glossaryTerms.map(t => t.category))];

export default function GlossaryContent() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredTerms = glossaryTerms.filter(term => {
    const matchesSearch = term.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          term.definition.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || term.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen relative z-10 pt-20 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <ol className="flex items-center gap-2 text-optics-blue/60">
            <li><Link href="/" className="hover:text-optics-cyan transition-colors">Home</Link></li>
            <li>/</li>
            <li className="text-optics-cyan">Glossary</li>
          </ol>
        </nav>

        {/* Hero */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold text-glow-strong mb-6">
            Optics Glossary
          </h1>
          <p className="text-xl text-optics-blue/80 leading-relaxed">
            Comprehensive definitions of optical terms and concepts used in lens design and the lens maker formula.
          </p>
          <Link href="/focal-length#calculator" className="flex w-fit items-center gap-2 mt-6 px-6 py-3 bg-gradient-to-r from-optics-blue to-optics-cyan text-optics-darker font-bold rounded-lg hover:shadow-[0_0_30px_rgba(0,217,255,0.5)] transition-all">
            Use Calculator Now →
          </Link>
        </motion.header>

        {/* Search and Filter */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8 space-y-4"
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Search terms..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4 bg-optics-darker/70 border-2 border-optics-blue/30 rounded-lg 
                       text-optics-cyan text-lg focus:outline-none focus:border-optics-blue 
                       transition-all duration-300 placeholder:text-optics-blue/40"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-optics-blue/50">
              🔍
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-lg text-sm transition-all ${
                !selectedCategory
                  ? 'bg-optics-blue/20 text-optics-cyan border border-optics-blue/40'
                  : 'text-optics-blue/70 hover:text-optics-cyan hover:bg-optics-blue/10'
              }`}
            >
              All
            </button>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg text-sm transition-all ${
                  selectedCategory === cat
                    ? 'bg-optics-blue/20 text-optics-cyan border border-optics-blue/40'
                    : 'text-optics-blue/70 hover:text-optics-cyan hover:bg-optics-blue/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.section>

        {/* Terms List */}
        <div className="space-y-4">
          {filteredTerms.map((item, index) => (
            <motion.article
              key={item.term}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30"
              id={item.term.toLowerCase().replace(/[^a-z0-9]/g, '-')}
            >
              <div className="flex items-start justify-between mb-3">
                <h2 className="text-xl font-semibold text-optics-cyan">{item.term}</h2>
                <span className="text-xs px-2 py-1 rounded bg-optics-blue/10 text-optics-blue/70 border border-optics-blue/20">
                  {item.category}
                </span>
              </div>
              
              <p className="text-optics-blue/80 leading-relaxed mb-4">
                {item.definition}
              </p>

              {item.formula && (
                <div className="bg-optics-darker/50 rounded-lg p-3 mb-4 border border-optics-blue/20">
                  <p className="text-sm text-optics-blue/60 mb-1">Formula / Notation:</p>
                  <p className="font-mono text-optics-cyan">{item.formula}</p>
                </div>
              )}

              {item.related.length > 0 && (
                <div>
                  <p className="text-sm text-optics-blue/60 mb-2">Related Terms:</p>
                  <div className="flex flex-wrap gap-2">
                    {item.related.map(rel => (
                      <span
                        key={rel}
                        className="text-xs px-2 py-1 rounded bg-optics-purple/10 text-optics-purple/80 border border-optics-purple/20"
                      >
                        {rel}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.article>
          ))}
        </div>

        {filteredTerms.length === 0 && (
          <div className="text-center py-12 text-optics-blue/60">
            <p>No terms found matching your search.</p>
          </div>
        )}

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl font-display font-bold text-glow mb-4">
            Apply Your Knowledge
          </h2>
          <p className="text-optics-blue/70 mb-6">
            Use the calculator to practice with these concepts.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/focal-length">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-optics-blue to-optics-cyan 
                         text-optics-darker font-bold rounded-lg border-glow transition-all"
              >
                Calculator
              </motion.button>
            </Link>
            <Link href="/tutorial">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-optics-darker border border-optics-blue/50
                         text-optics-cyan font-bold rounded-lg transition-all hover:bg-optics-blue/10"
              >
                Tutorial
              </motion.button>
            </Link>
          </div>
        </motion.section>
      </div>
    </main>
  );
}

