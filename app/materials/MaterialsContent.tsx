'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface Material {
  name: string;
  refractiveIndex: number;
  wavelength?: string;
  category: string;
  applications: string[];
  notes?: string;
}

const materials: Material[] = [
  // Gases
  { name: 'Vacuum', refractiveIndex: 1.0000, category: 'Gases', applications: ['Reference standard'], notes: 'By definition' },
  { name: 'Air (STP)', refractiveIndex: 1.000293, category: 'Gases', applications: ['Reference medium', 'Atmosphere'], notes: 'At standard temperature and pressure' },
  { name: 'Carbon Dioxide', refractiveIndex: 1.00045, category: 'Gases', applications: ['Laser systems'], notes: 'At STP' },
  
  // Liquids
  { name: 'Water (20°C)', refractiveIndex: 1.333, category: 'Liquids', applications: ['Immersion microscopy', 'Aquariums', 'Fiber optics'], notes: 'Varies with temperature' },
  { name: 'Ethanol', refractiveIndex: 1.361, category: 'Liquids', applications: ['Refractometry', 'Optical instruments'] },
  { name: 'Glycerin', refractiveIndex: 1.473, category: 'Liquids', applications: ['Immersion oil substitute', 'Medical optics'] },
  { name: 'Immersion Oil', refractiveIndex: 1.515, category: 'Liquids', applications: ['Microscopy', 'High-NA objectives'], notes: 'Matches typical glass' },
  { name: 'Carbon Disulfide', refractiveIndex: 1.628, category: 'Liquids', applications: ['High-index liquid', 'Refractometry'] },
  
  // Common Glasses
  { name: 'Fused Silica', refractiveIndex: 1.458, wavelength: '589nm', category: 'Optical Glass', applications: ['UV optics', 'Laser windows', 'Fiber optics'], notes: 'Very low dispersion' },
  { name: 'Borosilicate Glass', refractiveIndex: 1.474, category: 'Optical Glass', applications: ['Lab equipment', 'Cookware', 'Telescope mirrors'] },
  { name: 'Soda-lime Glass', refractiveIndex: 1.52, category: 'Common Glass', applications: ['Windows', 'Bottles', 'General purpose'] },
  { name: 'Crown Glass (BK7)', refractiveIndex: 1.5168, wavelength: '589nm', category: 'Optical Glass', applications: ['Camera lenses', 'Prisms', 'Microscopes'], notes: 'Most common optical glass' },
  { name: 'Flint Glass (F2)', refractiveIndex: 1.620, wavelength: '589nm', category: 'Optical Glass', applications: ['Achromatic lenses', 'Prisms', 'High-end optics'], notes: 'Higher dispersion' },
  { name: 'Dense Flint (SF11)', refractiveIndex: 1.785, wavelength: '589nm', category: 'Optical Glass', applications: ['Achromatic doublets', 'High-index lenses'] },
  { name: 'Lanthanum Glass', refractiveIndex: 1.80, category: 'Specialty Glass', applications: ['Camera lenses', 'High-performance optics'], notes: 'Low dispersion, high index' },
  
  // Plastics
  { name: 'PMMA (Acrylic)', refractiveIndex: 1.492, category: 'Plastics', applications: ['Lenses', 'Light guides', 'Displays'], notes: 'Lightweight, shatterproof' },
  { name: 'Polycarbonate', refractiveIndex: 1.585, category: 'Plastics', applications: ['Eyewear', 'Safety glasses', 'CDs/DVDs'], notes: 'Impact resistant' },
  { name: 'CR-39', refractiveIndex: 1.498, category: 'Plastics', applications: ['Eyeglass lenses'], notes: 'Most common eyeglass material' },
  { name: 'Polystyrene', refractiveIndex: 1.59, category: 'Plastics', applications: ['Disposable lenses', 'Light covers'] },
  { name: 'Trivex', refractiveIndex: 1.53, category: 'Plastics', applications: ['Safety eyewear', 'Sports glasses'], notes: 'Lightest lens material' },
  { name: 'High-Index Plastic (1.67)', refractiveIndex: 1.67, category: 'Plastics', applications: ['Thin eyeglass lenses'], notes: 'For strong prescriptions' },
  { name: 'High-Index Plastic (1.74)', refractiveIndex: 1.74, category: 'Plastics', applications: ['Ultra-thin lenses'], notes: 'Highest index plastic' },
  
  // Crystals
  { name: 'Quartz (Crystalline)', refractiveIndex: 1.544, category: 'Crystals', applications: ['UV optics', 'Polarizers', 'Waveplates'], notes: 'Birefringent' },
  { name: 'Calcite', refractiveIndex: 1.658, category: 'Crystals', applications: ['Polarizers', 'Beam splitters'], notes: 'Strong birefringence' },
  { name: 'Sapphire', refractiveIndex: 1.77, category: 'Crystals', applications: ['Watch crystals', 'IR windows', 'High-durability optics'], notes: 'Very hard, scratch-resistant' },
  { name: 'Ruby', refractiveIndex: 1.77, category: 'Crystals', applications: ['Laser rods', 'Bearings'], notes: 'Same as sapphire (Al₂O₃)' },
  { name: 'Diamond', refractiveIndex: 2.417, category: 'Crystals', applications: ['Gemstones', 'High-power laser windows', 'Heat sinks'], notes: 'Highest natural refractive index' },
  { name: 'Zinc Selenide (ZnSe)', refractiveIndex: 2.67, wavelength: '10.6μm', category: 'Crystals', applications: ['CO₂ laser optics', 'IR optics'], notes: 'For infrared applications' },
  { name: 'Germanium', refractiveIndex: 4.0, wavelength: '10.6μm', category: 'Crystals', applications: ['IR optics', 'Thermal imaging'], notes: 'Only for IR wavelengths' },
  { name: 'Silicon', refractiveIndex: 3.5, wavelength: '10.6μm', category: 'Crystals', applications: ['IR optics', 'Semiconductors'], notes: 'Opaque in visible' },
];

const categories = [...new Set(materials.map(m => m.category))];

export default function MaterialsContent() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<'name' | 'index'>('index');

  const filteredMaterials = materials
    .filter(m => {
      const matchesSearch = m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            m.applications.some(a => a.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesCategory = !selectedCategory || m.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return a.refractiveIndex - b.refractiveIndex;
    });

  return (
    <main className="min-h-screen relative z-10 pt-20 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <ol className="flex items-center gap-2 text-optics-blue/60">
            <li><Link href="/" className="hover:text-optics-cyan transition-colors">Home</Link></li>
            <li>/</li>
            <li className="text-optics-cyan">Materials</li>
          </ol>
        </nav>

        {/* Hero */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold text-glow-strong mb-6">
            Optical Materials Database
          </h1>
          <p className="text-xl text-optics-blue/80 leading-relaxed max-w-3xl">
            Comprehensive reference of refractive indices for optical materials. 
            Use these values in the lens maker formula calculator.
          </p>
        </motion.header>

        {/* Quick Info */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-glass-strong rounded-xl p-6 mb-8 border border-optics-blue/30"
        >
          <h2 className="text-lg font-semibold text-optics-cyan mb-3">About Refractive Index Values</h2>
          <p className="text-optics-blue/80 text-sm leading-relaxed">
            All values are measured at the sodium D-line (589 nm) unless otherwise noted. 
            Refractive index varies with wavelength (dispersion) and temperature. 
            For precise optical design, consult manufacturer specifications.
          </p>
        </motion.section>

        {/* Search and Filter */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8 space-y-4"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search materials or applications..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-3 bg-optics-darker/70 border-2 border-optics-blue/30 rounded-lg 
                         text-optics-cyan focus:outline-none focus:border-optics-blue 
                         transition-all duration-300 placeholder:text-optics-blue/40"
              />
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'name' | 'index')}
              className="px-4 py-3 bg-optics-darker/70 border-2 border-optics-blue/30 rounded-lg 
                       text-optics-cyan focus:outline-none focus:border-optics-blue"
            >
              <option value="index">Sort by Index</option>
              <option value="name">Sort by Name</option>
            </select>
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

        {/* Materials Table */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-glass-strong rounded-xl border border-optics-blue/30 overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-optics-darker/50 border-b border-optics-blue/20">
                  <th className="text-left px-6 py-4 text-optics-blue/90 font-medium">Material</th>
                  <th className="text-center px-6 py-4 text-optics-blue/90 font-medium">n</th>
                  <th className="text-left px-6 py-4 text-optics-blue/90 font-medium hidden md:table-cell">Category</th>
                  <th className="text-left px-6 py-4 text-optics-blue/90 font-medium hidden lg:table-cell">Applications</th>
                </tr>
              </thead>
              <tbody>
                {filteredMaterials.map((material, index) => (
                  <motion.tr
                    key={material.name}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.02 }}
                    className="border-b border-optics-blue/10 hover:bg-optics-blue/5 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <div>
                        <span className="text-optics-cyan font-medium">{material.name}</span>
                        {material.wavelength && (
                          <span className="text-xs text-optics-blue/50 ml-2">@{material.wavelength}</span>
                        )}
                        {material.notes && (
                          <p className="text-xs text-optics-blue/50 mt-1">{material.notes}</p>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="font-mono text-lg font-bold text-optics-amber">
                        {material.refractiveIndex.toFixed(material.refractiveIndex < 2 ? 3 : 2)}
                      </span>
                    </td>
                    <td className="px-6 py-4 hidden md:table-cell">
                      <span className="text-xs px-2 py-1 rounded bg-optics-blue/10 text-optics-blue/70 border border-optics-blue/20">
                        {material.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 hidden lg:table-cell">
                      <div className="flex flex-wrap gap-1">
                        {material.applications.slice(0, 3).map(app => (
                          <span key={app} className="text-xs text-optics-blue/60">
                            {app}
                            {material.applications.indexOf(app) < Math.min(2, material.applications.length - 1) && ','}
                          </span>
                        ))}
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

        {filteredMaterials.length === 0 && (
          <div className="text-center py-12 text-optics-blue/60">
            <p>No materials found matching your search.</p>
          </div>
        )}

        {/* Common Ranges */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-glass-strong rounded-xl p-6 border border-optics-amber/30"
        >
          <h2 className="text-xl font-semibold text-optics-amber mb-4">Common Refractive Index Ranges</h2>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="bg-optics-darker/50 rounded-lg p-4 border border-optics-blue/20">
              <h3 className="font-medium text-optics-cyan mb-2">Low Index (n &lt; 1.5)</h3>
              <p className="text-optics-blue/70">Air, water, some plastics. Common in everyday optics.</p>
            </div>
            <div className="bg-optics-darker/50 rounded-lg p-4 border border-optics-blue/20">
              <h3 className="font-medium text-optics-cyan mb-2">Medium Index (1.5-1.7)</h3>
              <p className="text-optics-blue/70">Most optical glasses, standard eyewear. Best balance of properties.</p>
            </div>
            <div className="bg-optics-darker/50 rounded-lg p-4 border border-optics-blue/20">
              <h3 className="font-medium text-optics-cyan mb-2">High Index (n &gt; 1.7)</h3>
              <p className="text-optics-blue/70">Specialty glasses, crystals. For thin lenses and special applications.</p>
            </div>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <h2 className="text-2xl font-display font-bold text-glow mb-4">
            Use These Values in Calculations
          </h2>
          <p className="text-optics-blue/70 mb-6">
            Select a material and use its refractive index in the lens maker formula.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/focal-length">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-optics-blue to-optics-cyan 
                         text-optics-darker font-bold rounded-lg border-glow transition-all"
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
        </motion.section>
      </div>
    </main>
  );
}

