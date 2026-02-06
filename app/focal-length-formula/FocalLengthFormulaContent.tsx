'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import LensCalculator from '../components/LensCalculator';
import Visualization from '../components/Visualization';

type FormulaType = 'thin-lens' | 'lensmaker' | 'mirror' | 'combined';

interface Formula {
  id: FormulaType;
  name: string;
  formula: string;
  description: string;
  variables: { symbol: string; meaning: string }[];
  useCase: string;
}

// Educational diagram component with attribution
const LensDiagram = ({ 
  src, 
  alt, 
  caption 
}: { 
  src: string; 
  alt: string; 
  caption: string;
}) => (
  <figure className="my-6">
    <div className="bg-white/95 rounded-lg p-4 mx-auto max-w-lg">
      <img 
        src={src} 
        alt={alt}
        className="w-full h-auto"
        loading="lazy"
      />
    </div>
    <figcaption className="text-center text-xs text-optics-blue/50 mt-2">
      {caption} | Source: Wikimedia Commons (Public Domain)
    </figcaption>
  </figure>
);

// YouTube embed component
const YouTubeEmbed = ({ 
  videoId, 
  title 
}: { 
  videoId: string; 
  title: string;
}) => (
  <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-optics-darker/50">
    <iframe
      src={`https://www.youtube.com/embed/${videoId}`}
      title={title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      loading="lazy"
      className="absolute inset-0 w-full h-full"
    />
  </div>
);

const formulas: Formula[] = [
  {
    id: 'thin-lens',
    name: 'Thin Lens Equation',
    formula: '1/f = 1/do + 1/di',
    description: 'The thin lens focal length formula relates the focal length to object and image distances. This fundamental focal length formula is used when you know where an object is placed and where its image forms.',
    variables: [
      { symbol: 'f', meaning: 'Focal length of the lens' },
      { symbol: 'do', meaning: 'Object distance from the lens' },
      { symbol: 'di', meaning: 'Image distance from the lens' },
    ],
    useCase: 'Use this focal length formula when analyzing image formation, camera focusing, or solving optics problems involving object and image positions.',
  },
  {
    id: 'lensmaker',
    name: "Lens Maker's Formula",
    formula: '1/f = (n-1)(1/R₁ - 1/R₂)',
    description: 'The lens maker focal length formula calculates focal length from the physical properties of the lens. This focal length formula is essential for lens design and manufacturing.',
    variables: [
      { symbol: 'f', meaning: 'Focal length of the lens' },
      { symbol: 'n', meaning: 'Refractive index of lens material' },
      { symbol: 'R₁', meaning: 'Radius of curvature of first surface' },
      { symbol: 'R₂', meaning: 'Radius of curvature of second surface' },
    ],
    useCase: 'Apply this focal length formula when designing lenses, selecting materials, or calculating the focal length from lens geometry.',
  },
  {
    id: 'mirror',
    name: 'Mirror Formula',
    formula: '1/f = 2/R',
    description: 'The mirror focal length formula shows that the focal length equals half the radius of curvature. This simple focal length formula applies to spherical mirrors.',
    variables: [
      { symbol: 'f', meaning: 'Focal length of the mirror' },
      { symbol: 'R', meaning: 'Radius of curvature of the mirror' },
    ],
    useCase: 'Use this focal length formula for concave and convex mirrors in telescopes, car mirrors, and reflective optical systems.',
  },
  {
    id: 'combined',
    name: 'Combined Lenses Formula',
    formula: '1/f = 1/f₁ + 1/f₂',
    description: 'The combined focal length formula calculates the effective focal length of two thin lenses in contact. This focal length formula is crucial for compound lens systems.',
    variables: [
      { symbol: 'f', meaning: 'Combined focal length' },
      { symbol: 'f₁', meaning: 'Focal length of first lens' },
      { symbol: 'f₂', meaning: 'Focal length of second lens' },
    ],
    useCase: 'Apply this focal length formula when designing eyepieces, camera objectives, or any multi-lens optical system.',
  },
];

export default function FocalLengthFormulaContent() {
  const [selectedFormula, setSelectedFormula] = useState<FormulaType>('lensmaker');
  const [calculatorParams, setCalculatorParams] = useState({
    n: 1.5,
    R1: 0.1,
    R2: -0.1,
    focalLength: null as number | null,
  });

  const currentFormula = formulas.find(f => f.id === selectedFormula)!;

  return (
    <main className="min-h-screen relative z-10 pt-20 pb-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <ol className="flex items-center gap-2 text-optics-blue/60">
            <li><Link href="/" className="hover:text-optics-cyan transition-colors">Home</Link></li>
            <li>/</li>
            <li className="text-optics-cyan">Focal Length Formula</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold text-glow-strong mb-6">
            Focal Length Formula
          </h1>
          <p className="text-xl text-optics-blue/80 leading-relaxed">
            The complete guide to understanding and using the focal length formula in optics. 
            Learn different types of focal length formulas, see interactive examples, and calculate 
            focal length instantly with our free online calculator.
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
            <li><a href="#what-is" className="hover:text-optics-cyan transition-colors">1. What is the Focal Length Formula?</a></li>
            <li><a href="#history" className="hover:text-optics-cyan transition-colors">2. History of the Focal Length Formula</a></li>
            <li><a href="#types" className="hover:text-optics-cyan transition-colors">3. Types of Focal Length Formulas</a></li>
            <li><a href="#diagrams" className="hover:text-optics-cyan transition-colors">4. Visual Diagrams: Convex vs Concave Lenses</a></li>
            <li><a href="#calculator" className="hover:text-optics-cyan transition-colors">5. Focal Length Formula Calculator</a></li>
            <li><a href="#video-tutorials" className="hover:text-optics-cyan transition-colors">6. Video Tutorials</a></li>
            <li><a href="#how-to-use" className="hover:text-optics-cyan transition-colors">7. How to Use the Focal Length Formula</a></li>
            <li><a href="#examples" className="hover:text-optics-cyan transition-colors">8. Focal Length Formula Examples</a></li>
            <li><a href="#common-mistakes" className="hover:text-optics-cyan transition-colors">9. Common Mistakes to Avoid</a></li>
            <li><a href="#applications" className="hover:text-optics-cyan transition-colors">10. Applications of Focal Length Formula</a></li>
            <li><a href="#faq" className="hover:text-optics-cyan transition-colors">11. Frequently Asked Questions</a></li>
          </ol>
        </motion.section>

        {/* Section 1: What is the Focal Length Formula */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          id="what-is"
          className="mb-16"
        >
          <h2 className="text-3xl font-display font-bold text-glow mb-6">
            1. What is the Focal Length Formula?
          </h2>
          
          <div className="bg-glass-strong rounded-xl p-6 mb-6 border border-optics-blue/30">
            <p className="text-lg text-optics-blue/90 leading-relaxed mb-4">
              The <strong className="text-optics-cyan">focal length formula</strong> is a mathematical equation 
              that describes the relationship between the focal length of an optical element and its physical 
              or geometric properties. The focal length formula is fundamental to optics and is used in 
              designing cameras, telescopes, microscopes, eyeglasses, and countless other optical instruments.
            </p>
            
            <p className="text-optics-blue/80 leading-relaxed mb-4">
              Understanding the focal length formula allows engineers and physicists to predict how light 
              will behave when passing through lenses or reflecting off mirrors. The focal length formula 
              connects theoretical optics with practical lens design, making it one of the most important 
              equations in optical science.
            </p>

            <div className="bg-gradient-to-r from-optics-cyan/10 to-optics-blue/10 rounded-lg p-4 border border-optics-cyan/30">
              <h3 className="font-semibold text-optics-cyan mb-2">Key Insight</h3>
              <p className="text-optics-blue/80 text-sm">
                The focal length formula varies depending on the optical element and the known parameters. 
                There are several versions of the focal length formula, each suited for different situations 
                in optical analysis and design.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Section 2: History */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          id="history"
          className="mb-16"
        >
          <h2 className="text-3xl font-display font-bold text-glow mb-6">
            2. History of the Focal Length Formula
          </h2>
          
          <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
            <p className="text-optics-blue/90 leading-relaxed mb-4">
              The development of the <strong className="text-optics-cyan">focal length formula</strong> spans 
              centuries of scientific discovery, from ancient observations of light to modern optical engineering. 
              Understanding this history provides valuable context for how the focal length formula evolved into 
              its current form.
            </p>

            <div className="space-y-6">
              <div className="border-l-2 border-optics-cyan/50 pl-4">
                <h3 className="font-semibold text-optics-amber mb-2">Ancient Foundations (1st Century - 1000 AD)</h3>
                <p className="text-optics-blue/80 text-sm leading-relaxed">
                  The earliest understanding of optics began with the ancient Greeks and Arabs. Ptolemy studied 
                  light refraction around 150 AD, while the Arab scholar Ibn al-Haytham (Alhazen) wrote the 
                  influential &quot;Book of Optics&quot; around 1011 AD, laying groundwork for understanding how light 
                  bends through different media. These early investigations would eventually lead to the focal 
                  length formula we use today.
                </p>
              </div>

              <div className="border-l-2 border-optics-cyan/50 pl-4">
                <h3 className="font-semibold text-optics-amber mb-2">The Law of Refraction (1621)</h3>
                <p className="text-optics-blue/80 text-sm leading-relaxed">
                  Dutch astronomer Willebrord Snellius discovered the mathematical relationship governing light 
                  refraction, now known as Snell&apos;s Law. This equation, n₁ sin θ₁ = n₂ sin θ₂, became the 
                  foundation for deriving the focal length formula. Without Snell&apos;s Law, calculating how 
                  lenses focus light would be impossible.
                </p>
              </div>

              <div className="border-l-2 border-optics-cyan/50 pl-4">
                <h3 className="font-semibold text-optics-amber mb-2">Descartes and Analytical Optics (1637)</h3>
                <p className="text-optics-blue/80 text-sm leading-relaxed">
                  René Descartes published &quot;La Dioptrique,&quot; applying mathematics to optical phenomena. He 
                  derived early forms of lens equations and understood the relationship between lens curvature 
                  and focal point. His work brought the focal length formula closer to its modern algebraic form.
                </p>
              </div>

              <div className="border-l-2 border-optics-cyan/50 pl-4">
                <h3 className="font-semibold text-optics-amber mb-2">The Lens Maker&apos;s Equation (18th-19th Century)</h3>
                <p className="text-optics-blue/80 text-sm leading-relaxed">
                  As telescope and microscope manufacturing advanced, opticians developed the complete focal 
                  length formula: 1/f = (n-1)(1/R₁ - 1/R₂). This equation, refined through contributions from 
                  Newton, Euler, and Gauss, allowed precise lens design for the first time. The focal length 
                  formula became essential for scientific instrument manufacturing.
                </p>
              </div>

              <div className="border-l-2 border-optics-cyan/50 pl-4">
                <h3 className="font-semibold text-optics-amber mb-2">Modern Applications (20th Century - Present)</h3>
                <p className="text-optics-blue/80 text-sm leading-relaxed">
                  Today, the focal length formula is used in computer-aided lens design, smartphone cameras, 
                  medical imaging, and space telescopes. Advanced variations account for thick lenses, aberrations, 
                  and gradient-index materials. The fundamental focal length formula remains unchanged, proving 
                  its mathematical elegance and practical utility.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section 3: Types of Focal Length Formulas - Formula Switcher */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          id="types"
          className="mb-16"
        >
          <h2 className="text-3xl font-display font-bold text-glow mb-6">
            3. Types of Focal Length Formulas
          </h2>
          
          <p className="text-optics-blue/80 leading-relaxed mb-6">
            Different situations require different versions of the focal length formula. Below you can 
            explore the four main types of focal length formulas used in optics. Click on each tab to 
            see the focal length formula details, variables, and typical use cases.
          </p>

          {/* Formula Switcher Tabs */}
          <div className="bg-glass-strong rounded-xl border border-optics-blue/30 overflow-hidden">
            <div className="flex flex-wrap border-b border-optics-blue/20">
              {formulas.map((formula) => (
                <button
                  key={formula.id}
                  onClick={() => setSelectedFormula(formula.id)}
                  className={`flex-1 min-w-[140px] px-4 py-3 text-sm font-medium transition-all
                    ${selectedFormula === formula.id 
                      ? 'bg-optics-cyan/20 text-optics-cyan border-b-2 border-optics-cyan' 
                      : 'text-optics-blue/70 hover:text-optics-cyan hover:bg-optics-blue/10'
                    }`}
                >
                  {formula.name}
                </button>
              ))}
            </div>

            <motion.div
              key={selectedFormula}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="p-6"
            >
              {/* Formula Display */}
              <div className="bg-optics-darker/50 rounded-lg p-6 text-center mb-6">
                <p className="text-sm text-optics-blue/60 mb-2 uppercase tracking-wider">
                  {currentFormula.name}
                </p>
                <p className="text-3xl md:text-4xl font-mono text-optics-cyan font-bold">
                  {currentFormula.formula}
                </p>
              </div>

              {/* Description */}
              <p className="text-optics-blue/90 leading-relaxed mb-6">
                {currentFormula.description}
              </p>

              {/* Variables */}
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-optics-darker/50 rounded-lg p-4 border border-optics-blue/20">
                  <h4 className="font-semibold text-optics-cyan mb-3">Variables</h4>
                  <ul className="space-y-2">
                    {currentFormula.variables.map((v) => (
                      <li key={v.symbol} className="flex items-start gap-2 text-sm">
                        <span className="font-mono text-optics-amber font-bold min-w-[30px]">{v.symbol}</span>
                        <span className="text-optics-blue/80">= {v.meaning}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-optics-darker/50 rounded-lg p-4 border border-optics-blue/20">
                  <h4 className="font-semibold text-optics-cyan mb-3">When to Use</h4>
                  <p className="text-optics-blue/80 text-sm leading-relaxed">
                    {currentFormula.useCase}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Section 4: Visual Diagrams */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          id="diagrams"
          className="mb-16"
        >
          <h2 className="text-3xl font-display font-bold text-glow mb-6">
            4. Visual Diagrams: Convex vs Concave Lenses
          </h2>
          
          <p className="text-optics-blue/80 leading-relaxed mb-6">
            Understanding how light behaves through different lens types is essential for applying the 
            focal length formula correctly. The diagrams below illustrate the key differences between 
            convex (converging) and concave (diverging) lenses.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Convex Lens Diagram */}
            <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
              <h3 className="text-xl font-semibold text-optics-cyan mb-4">Convex Lens (Converging)</h3>
              <LensDiagram 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Lens3.svg/960px-Lens3.svg.png"
                alt="Convex lens ray diagram showing parallel light rays converging at the focal point"
                caption="Convex lens: parallel rays converge at focal point F"
              />
              <div className="mt-4 space-y-2 text-sm text-optics-blue/80">
                <p><strong className="text-optics-cyan">Focal length:</strong> Positive (f &gt; 0)</p>
                <p><strong className="text-optics-cyan">Light behavior:</strong> Parallel rays converge to a real focal point</p>
                <p><strong className="text-optics-cyan">Common uses:</strong> Magnifying glasses, camera lenses, correcting farsightedness</p>
              </div>
            </div>

            {/* Concave Lens Diagram */}
            <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
              <h3 className="text-xl font-semibold text-optics-amber mb-4">Concave Lens (Diverging)</h3>
              <LensDiagram 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Lens1b.svg/960px-Lens1b.svg.png"
                alt="Concave lens ray diagram showing parallel light rays diverging from a virtual focal point"
                caption="Concave lens: parallel rays diverge from virtual focal point F"
              />
              <div className="mt-4 space-y-2 text-sm text-optics-blue/80">
                <p><strong className="text-optics-amber">Focal length:</strong> Negative (f &lt; 0)</p>
                <p><strong className="text-optics-amber">Light behavior:</strong> Parallel rays diverge; appear to come from virtual focal point</p>
                <p><strong className="text-optics-amber">Common uses:</strong> Correcting nearsightedness, peepholes, laser beam expanders</p>
              </div>
            </div>
          </div>

          {/* Sign Convention Explanation */}
          <div className="bg-gradient-to-r from-optics-cyan/10 to-optics-blue/10 rounded-xl p-6 border border-optics-cyan/30">
            <h3 className="text-xl font-semibold text-optics-cyan mb-4">Understanding Sign Conventions for the Focal Length Formula</h3>
            <p className="text-optics-blue/80 leading-relaxed mb-4">
              When using the focal length formula 1/f = (n-1)(1/R₁ - 1/R₂), the sign of each radius of 
              curvature depends on the direction the surface curves:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-optics-darker/50 rounded-lg p-4">
                <h4 className="font-semibold text-green-400 mb-2">R &gt; 0 (Positive)</h4>
                <p className="text-sm text-optics-blue/70">
                  The center of curvature is to the <strong>right</strong> of the surface (convex surface 
                  when light travels left to right).
                </p>
              </div>
              <div className="bg-optics-darker/50 rounded-lg p-4">
                <h4 className="font-semibold text-red-400 mb-2">R &lt; 0 (Negative)</h4>
                <p className="text-sm text-optics-blue/70">
                  The center of curvature is to the <strong>left</strong> of the surface (concave surface 
                  when light travels left to right).
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section 5: Calculator */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          id="calculator"
          className="mb-16"
        >
          <h2 className="text-3xl font-display font-bold text-glow mb-6">
            5. Focal Length Formula Calculator
          </h2>
          
          <p className="text-optics-blue/80 leading-relaxed mb-6">
            Use our interactive focal length formula calculator below to compute the focal length 
            of any lens. This calculator uses the lens maker&apos;s focal length formula to determine 
            the focal length from the refractive index and surface radii.
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
        </motion.section>

        {/* Section 6: Video Tutorials */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          id="video-tutorials"
          className="mb-16"
        >
          <h2 className="text-3xl font-display font-bold text-glow mb-6">
            6. Video Tutorials
          </h2>
          
          <p className="text-optics-blue/80 leading-relaxed mb-6">
            Learn the focal length formula through these educational videos from trusted sources. 
            These tutorials explain the concepts visually and walk through practical examples.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-glass-strong rounded-xl p-4 border border-optics-blue/30">
              <YouTubeEmbed 
                videoId="VKMswYSiyko" 
                title="Thin Lens Equation - Converging and Diverging Lens"
              />
              <h3 className="font-semibold text-optics-cyan mt-4 mb-2">Thin Lens Equation - Converging &amp; Diverging</h3>
              <p className="text-optics-blue/70 text-sm">
                Comprehensive tutorial covering the thin lens equation for both converging and diverging lenses, 
                with ray diagrams and sign conventions. By The Organic Chemistry Tutor.
              </p>
            </div>
            <div className="bg-glass-strong rounded-xl p-4 border border-optics-blue/30">
              <YouTubeEmbed 
                videoId="kGL1YnF_b64" 
                title="Physics - Optics: Lensmaker's Equation"
              />
              <h3 className="font-semibold text-optics-cyan mt-4 mb-2">Lens Maker&apos;s Equation Explained</h3>
              <p className="text-optics-blue/70 text-sm">
                Step-by-step explanation of the lensmaker&apos;s equation with a worked example showing how to 
                find the focal length of a lens. By Michel van Biezen.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Section 7: How to Use */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          id="how-to-use"
          className="mb-16"
        >
          <h2 className="text-3xl font-display font-bold text-glow mb-6">
            7. How to Use the Focal Length Formula
          </h2>
          
          <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
            <p className="text-optics-blue/90 leading-relaxed mb-6">
              Applying the focal length formula correctly requires understanding sign conventions and 
              proper unit handling. Follow these steps to use the focal length formula effectively:
            </p>

            <div className="space-y-4">
              {[
                { step: 1, title: 'Identify the formula type', desc: 'Choose the appropriate focal length formula based on your known parameters (distances, radii, or material properties).' },
                { step: 2, title: 'Apply sign conventions', desc: 'For lenses: convex surfaces facing left are positive (R > 0), concave are negative. Converging lenses have positive focal length.' },
                { step: 3, title: 'Use consistent units', desc: 'Keep all measurements in meters (or the same unit). The focal length formula output will be in the same unit as your inputs.' },
                { step: 4, title: 'Substitute values', desc: 'Insert your known values into the focal length formula and solve for the unknown variable.' },
                { step: 5, title: 'Interpret the result', desc: 'Positive focal length indicates a converging lens/mirror; negative indicates diverging. Use the focal length formula result to design your optical system.' },
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

        {/* Section 8: Examples */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          id="examples"
          className="mb-16"
        >
          <h2 className="text-3xl font-display font-bold text-glow mb-6">
            8. Focal Length Formula Examples
          </h2>
          
          <p className="text-optics-blue/80 leading-relaxed mb-6">
            Master the focal length formula through these worked examples covering different lens types 
            and real-world applications.
          </p>
          
          <div className="space-y-6">
            {/* Example 1 */}
            <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
              <h3 className="text-xl font-semibold text-optics-cyan mb-4">
                Example 1: Biconvex Lens Focal Length Formula
              </h3>
              <div className="bg-optics-darker/50 rounded-lg p-4 mb-4 border border-optics-blue/20">
                <p className="text-optics-blue/90 mb-2"><strong>Problem:</strong></p>
                <p className="text-optics-blue/80 text-sm">
                  Calculate the focal length of a biconvex lens using the focal length formula. 
                  The lens has n = 1.5, R₁ = 20 cm (convex), and R₂ = −30 cm (convex on right side).
                </p>
              </div>
              <div className="space-y-2 font-mono text-sm text-optics-blue/80">
                <p>Using the focal length formula: 1/f = (n - 1)(1/R₁ - 1/R₂)</p>
                <p>1/f = (1.5 - 1)(1/0.20 - 1/(−0.30))</p>
                <p>1/f = 0.5 × (5 + 3.33)</p>
                <p>1/f = 0.5 × 8.33 = 4.17</p>
                <p className="text-optics-cyan font-bold text-lg mt-2">f = 0.24 m = 24 cm (converging lens)</p>
              </div>
            </div>

            {/* Example 2 */}
            <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
              <h3 className="text-xl font-semibold text-optics-cyan mb-4">
                Example 2: Plano-Convex Lens Focal Length Formula
              </h3>
              <div className="bg-optics-darker/50 rounded-lg p-4 mb-4 border border-optics-blue/20">
                <p className="text-optics-blue/90 mb-2"><strong>Problem:</strong></p>
                <p className="text-optics-blue/80 text-sm">
                  A plano-convex lens has one flat surface (R₂ = ∞) and one convex surface (R₁ = 15 cm). 
                  Using n = 1.6, find the focal length using the focal length formula.
                </p>
              </div>
              <div className="space-y-2 font-mono text-sm text-optics-blue/80">
                <p>Applying the focal length formula: 1/f = (n - 1)(1/R₁ - 1/R₂)</p>
                <p>1/f = (1.6 - 1)(1/0.15 - 1/∞)</p>
                <p>1/f = 0.6 × (6.67 - 0)</p>
                <p>1/f = 4.0</p>
                <p className="text-optics-cyan font-bold text-lg mt-2">f = 0.25 m = 25 cm (converging lens)</p>
              </div>
            </div>

            {/* Example 3 */}
            <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
              <h3 className="text-xl font-semibold text-optics-amber mb-4">
                Example 3: Biconcave Lens (Negative Focal Length)
              </h3>
              <div className="bg-optics-darker/50 rounded-lg p-4 mb-4 border border-optics-blue/20">
                <p className="text-optics-blue/90 mb-2"><strong>Problem:</strong></p>
                <p className="text-optics-blue/80 text-sm">
                  A biconcave lens has R₁ = −25 cm (concave) and R₂ = 40 cm (concave on right). 
                  The glass has n = 1.52. Calculate the focal length.
                </p>
              </div>
              <div className="space-y-2 font-mono text-sm text-optics-blue/80">
                <p>Using the focal length formula: 1/f = (n - 1)(1/R₁ - 1/R₂)</p>
                <p>1/f = (1.52 - 1)(1/(−0.25) - 1/0.40)</p>
                <p>1/f = 0.52 × (−4 − 2.5)</p>
                <p>1/f = 0.52 × (−6.5) = −3.38</p>
                <p className="text-optics-amber font-bold text-lg mt-2">f = −0.296 m = −29.6 cm (diverging lens)</p>
              </div>
            </div>

            {/* Example 4 */}
            <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
              <h3 className="text-xl font-semibold text-optics-cyan mb-4">
                Example 4: Meniscus Lens
              </h3>
              <div className="bg-optics-darker/50 rounded-lg p-4 mb-4 border border-optics-blue/20">
                <p className="text-optics-blue/90 mb-2"><strong>Problem:</strong></p>
                <p className="text-optics-blue/80 text-sm">
                  A converging meniscus lens has R₁ = 10 cm and R₂ = 15 cm (both surfaces curve in 
                  the same direction). With n = 1.5, find the focal length.
                </p>
              </div>
              <div className="space-y-2 font-mono text-sm text-optics-blue/80">
                <p>Using the focal length formula: 1/f = (n - 1)(1/R₁ - 1/R₂)</p>
                <p>1/f = (1.5 - 1)(1/0.10 - 1/0.15)</p>
                <p>1/f = 0.5 × (10 − 6.67)</p>
                <p>1/f = 0.5 × 3.33 = 1.67</p>
                <p className="text-optics-cyan font-bold text-lg mt-2">f = 0.60 m = 60 cm (converging lens)</p>
              </div>
            </div>

            {/* Example 5 */}
            <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
              <h3 className="text-xl font-semibold text-optics-purple mb-4">
                Example 5: Eyeglass Prescription (Diopters)
              </h3>
              <div className="bg-optics-darker/50 rounded-lg p-4 mb-4 border border-optics-blue/20">
                <p className="text-optics-blue/90 mb-2"><strong>Problem:</strong></p>
                <p className="text-optics-blue/80 text-sm">
                  An optician needs a lens with power P = −2.5 diopters for a nearsighted patient. 
                  What focal length is required? Convert using P = 1/f (where f is in meters).
                </p>
              </div>
              <div className="space-y-2 font-mono text-sm text-optics-blue/80">
                <p>The relationship between power and focal length: P = 1/f</p>
                <p>Rearranging: f = 1/P</p>
                <p>f = 1/(−2.5) = −0.4 m</p>
                <p className="text-optics-purple font-bold text-lg mt-2">f = −40 cm (diverging lens for myopia correction)</p>
              </div>
            </div>

            {/* Example 6 */}
            <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
              <h3 className="text-xl font-semibold text-optics-cyan mb-4">
                Example 6: Compound Lens System
              </h3>
              <div className="bg-optics-darker/50 rounded-lg p-4 mb-4 border border-optics-blue/20">
                <p className="text-optics-blue/90 mb-2"><strong>Problem:</strong></p>
                <p className="text-optics-blue/80 text-sm">
                  Two thin lenses in contact have focal lengths f₁ = 20 cm and f₂ = −30 cm. 
                  Find the combined focal length using the combined focal length formula.
                </p>
              </div>
              <div className="space-y-2 font-mono text-sm text-optics-blue/80">
                <p>Combined focal length formula: 1/f = 1/f₁ + 1/f₂</p>
                <p>1/f = 1/0.20 + 1/(−0.30)</p>
                <p>1/f = 5 − 3.33 = 1.67</p>
                <p className="text-optics-cyan font-bold text-lg mt-2">f = 0.60 m = 60 cm (net converging system)</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section 9: Common Mistakes */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          id="common-mistakes"
          className="mb-16"
        >
          <h2 className="text-3xl font-display font-bold text-glow mb-6">
            9. Common Mistakes to Avoid
          </h2>
          
          <p className="text-optics-blue/80 leading-relaxed mb-6">
            Even experienced students make errors when applying the focal length formula. 
            Here are the most common mistakes and how to avoid them.
          </p>

          <div className="space-y-4">
            <div className="bg-glass-strong rounded-xl p-6 border border-red-500/30">
              <div className="flex items-start gap-4">
                <span className="text-2xl">⚠️</span>
                <div>
                  <h3 className="font-semibold text-red-400 mb-2">Mistake 1: Wrong Signs for Radii of Curvature</h3>
                  <p className="text-optics-blue/80 text-sm mb-2">
                    <strong className="text-red-400">Wrong:</strong> Using positive values for both surfaces of a biconvex lens.
                  </p>
                  <p className="text-optics-blue/80 text-sm">
                    <strong className="text-green-400">Correct:</strong> For a biconvex lens, R₁ &gt; 0 (first convex surface) and 
                    R₂ &lt; 0 (second convex surface curves the other way relative to light direction).
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-glass-strong rounded-xl p-6 border border-red-500/30">
              <div className="flex items-start gap-4">
                <span className="text-2xl">⚠️</span>
                <div>
                  <h3 className="font-semibold text-red-400 mb-2">Mistake 2: Inconsistent Units</h3>
                  <p className="text-optics-blue/80 text-sm mb-2">
                    <strong className="text-red-400">Wrong:</strong> Mixing centimeters and meters in the same calculation.
                  </p>
                  <p className="text-optics-blue/80 text-sm">
                    <strong className="text-green-400">Correct:</strong> Convert all radii to the same unit before applying 
                    the focal length formula. The result will be in that same unit.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-glass-strong rounded-xl p-6 border border-red-500/30">
              <div className="flex items-start gap-4">
                <span className="text-2xl">⚠️</span>
                <div>
                  <h3 className="font-semibold text-red-400 mb-2">Mistake 3: Forgetting Flat Surface = Infinite Radius</h3>
                  <p className="text-optics-blue/80 text-sm mb-2">
                    <strong className="text-red-400">Wrong:</strong> Using R = 0 for a flat (plano) surface.
                  </p>
                  <p className="text-optics-blue/80 text-sm">
                    <strong className="text-green-400">Correct:</strong> A flat surface has R = ∞, which means 1/R = 0. 
                    This simplifies the focal length formula significantly for plano-convex or plano-concave lenses.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-glass-strong rounded-xl p-6 border border-red-500/30">
              <div className="flex items-start gap-4">
                <span className="text-2xl">⚠️</span>
                <div>
                  <h3 className="font-semibold text-red-400 mb-2">Mistake 4: Confusing Thin Lens with Thick Lens Formula</h3>
                  <p className="text-optics-blue/80 text-sm mb-2">
                    <strong className="text-red-400">Wrong:</strong> Using the thin lens focal length formula for thick lenses.
                  </p>
                  <p className="text-optics-blue/80 text-sm">
                    <strong className="text-green-400">Correct:</strong> For lenses where thickness is significant compared 
                    to the radii, use the <Link href="/thick-lens" className="text-optics-cyan hover:underline">thick lens formula</Link> which 
                    includes a thickness correction term.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-glass-strong rounded-xl p-6 border border-red-500/30">
              <div className="flex items-start gap-4">
                <span className="text-2xl">⚠️</span>
                <div>
                  <h3 className="font-semibold text-red-400 mb-2">Mistake 5: Ignoring the Surrounding Medium</h3>
                  <p className="text-optics-blue/80 text-sm mb-2">
                    <strong className="text-red-400">Wrong:</strong> Using the standard formula when the lens is immersed in water or oil.
                  </p>
                  <p className="text-optics-blue/80 text-sm">
                    <strong className="text-green-400">Correct:</strong> When the lens is not in air, use the modified formula: 
                    1/f = (n/n₀ - 1)(1/R₁ - 1/R₂) where n₀ is the refractive index of the surrounding medium.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section 10: Applications */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          id="applications"
          className="mb-16"
        >
          <h2 className="text-3xl font-display font-bold text-glow mb-6">
            10. Applications of Focal Length Formula
          </h2>
          
          <div className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
            <p className="text-optics-blue/90 leading-relaxed mb-6">
              The focal length formula has numerous practical applications across science and industry. 
              Understanding how to apply the focal length formula is essential for professionals in optics, 
              photography, and optical engineering.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                { icon: '📷', title: 'Photography & Cinematography', desc: 'The focal length formula helps design camera lenses with specific zoom, aperture, and depth-of-field characteristics for DSLR, mirrorless, and cinema cameras.' },
                { icon: '👓', title: 'Vision Correction', desc: 'Opticians use the focal length formula to prescribe corrective lenses for eyeglasses and contact lenses, converting between focal length and diopters.' },
                { icon: '🔭', title: 'Telescopes & Astronomy', desc: 'Astronomical telescopes rely on the focal length formula for objective and eyepiece design, determining magnification and field of view.' },
                { icon: '🔬', title: 'Microscopy', desc: 'Microscope objectives use the focal length formula to achieve high magnification with minimal aberration for biological and materials research.' },
                { icon: '📱', title: 'Smartphone Cameras', desc: 'Modern smartphones use multiple lenses with different focal lengths, all designed using the focal length formula for ultra-wide, standard, and telephoto shots.' },
                { icon: '🥽', title: 'VR/AR Headsets', desc: 'Virtual and augmented reality devices use the focal length formula to design lenses that create comfortable, immersive visual experiences.' },
                { icon: '⚡', title: 'Laser Systems', desc: 'Industrial and scientific lasers use precision lenses designed with the focal length formula for focusing, collimating, and beam shaping.' },
                { icon: '🏥', title: 'Medical Imaging', desc: 'Endoscopes, ophthalmoscopes, and surgical microscopes all rely on the focal length formula for optical design in minimally invasive procedures.' },
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

        {/* Section 11: FAQ */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          id="faq"
          className="mb-16"
        >
          <h2 className="text-3xl font-display font-bold text-glow mb-6">
            11. Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            {[
              {
                q: 'What is the focal length formula?',
                a: 'The focal length formula is a mathematical equation that calculates the focal length of a lens or mirror. The most common focal length formula for lenses is 1/f = (n-1)(1/R₁ - 1/R₂), known as the lens maker\'s formula. The focal length formula relates focal length to physical properties of the optical element.'
              },
              {
                q: 'How do I use the focal length formula for a convex lens?',
                a: 'To use the focal length formula for a convex lens, identify the radii of curvature (R₁ positive for convex surface facing left, R₂ negative for convex surface facing right) and the refractive index n. Substitute these into the focal length formula: 1/f = (n-1)(1/R₁ - 1/R₂). The result will be positive, indicating a converging lens.'
              },
              {
                q: 'What is the focal length formula for a concave lens?',
                a: 'For a concave (diverging) lens, the focal length formula is the same: 1/f = (n-1)(1/R₁ - 1/R₂). However, the signs of R₁ and R₂ are reversed. For a biconcave lens, R₁ < 0 and R₂ > 0, resulting in a negative focal length, which indicates the lens diverges light.'
              },
              {
                q: 'What units should I use in the focal length formula?',
                a: 'The focal length formula works with any consistent length unit. If you input radii in meters, the focal length formula will output focal length in meters. For convenience, many use centimeters. Just ensure all length measurements in the focal length formula use the same unit.'
              },
              {
                q: 'Why is the focal length formula important?',
                a: 'The focal length formula is crucial because it connects lens design with optical performance. Without the focal length formula, engineers couldn\'t predict how lenses focus light. The focal length formula enables the design of cameras, microscopes, telescopes, and vision correction devices.'
              },
              {
                q: 'Can focal length be negative?',
                a: 'Yes, focal length can be negative. A negative focal length indicates a diverging optical element. Concave lenses and convex mirrors have negative focal lengths. In the focal length formula, if the calculation yields f < 0, the lens spreads parallel light rays apart rather than converging them.'
              },
              {
                q: 'How does refractive index affect focal length?',
                a: 'Higher refractive index (n) means stronger light bending, resulting in shorter focal length. The focal length formula shows this directly: 1/f = (n-1)(1/R₁ - 1/R₂). As n increases, (n-1) increases, making 1/f larger and f smaller. This is why high-index glass allows thinner lenses.'
              },
              {
                q: 'How do I convert focal length to diopters?',
                a: 'Diopters (D) are the reciprocal of focal length in meters: D = 1/f. For example, a lens with f = 0.5 m has power P = 2 diopters. A lens with f = -0.25 m has power P = -4 diopters. Opticians use diopters because they add directly when combining lenses.'
              },
              {
                q: 'What is the relationship between focal length and magnification?',
                a: 'Magnification depends on focal length and object/image distances. For a simple magnifier, M = 25cm/f, where 25cm is the near point of the eye. Longer focal length means lower magnification. For camera lenses, longer focal length creates narrower field of view and larger image of distant objects.'
              },
              {
                q: 'What is the thin lens approximation?',
                a: 'The thin lens approximation assumes the lens thickness is negligible compared to its radii of curvature and focal length. This simplifies the focal length formula to 1/f = (n-1)(1/R₁ - 1/R₂). For thick lenses, an additional term accounting for thickness must be included.'
              },
              {
                q: 'How do I derive the focal length formula?',
                a: 'The focal length formula is derived by applying Snell\'s Law at both lens surfaces and using the paraxial (small angle) approximation. Light refracts at surface 1, travels through the lens, then refracts at surface 2. Combining these refractions and taking the limit as object distance approaches infinity yields the lens maker\'s formula.'
              },
              {
                q: 'What happens when R₁ = R₂ in the focal length formula?',
                a: 'When R₁ = R₂ (both surfaces have identical curvature and sign), the focal length formula gives 1/f = (n-1)(1/R - 1/R) = 0, meaning f = ∞. This describes a lens with no net focusing power, like a perfect meniscus lens where both surfaces bend light equally in opposite directions.'
              },
            ].map((item, index) => (
              <div key={index} className="bg-glass-strong rounded-xl p-6 border border-optics-blue/30">
                <h3 className="font-semibold text-optics-cyan mb-3">{item.q}</h3>
                <p className="text-optics-blue/80 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Related Tools */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl font-display font-bold text-glow mb-6">
            Related Calculators
          </h2>
          
          <div className="grid md:grid-cols-4 gap-4">
            <Link href="/optics-lens-maker-formula">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-glass-strong rounded-xl p-4 border border-optics-blue/30 hover:border-optics-cyan/50 transition-all h-full"
              >
                <h3 className="font-semibold text-optics-cyan mb-2">Optics Formula Guide</h3>
                <p className="text-optics-blue/70 text-sm">Complete guide to the optics lens maker formula.</p>
              </motion.div>
            </Link>
            <Link href="/focal-length">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-glass-strong rounded-xl p-4 border border-optics-blue/30 hover:border-optics-cyan/50 transition-all h-full"
              >
                <h3 className="font-semibold text-optics-cyan mb-2">Focal Length Calculator</h3>
                <p className="text-optics-blue/70 text-sm">Quick focal length formula calculator for thin lenses.</p>
              </motion.div>
            </Link>
            <Link href="/thick-lens">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-glass-strong rounded-xl p-4 border border-optics-blue/30 hover:border-optics-amber/50 transition-all h-full"
              >
                <h3 className="font-semibold text-optics-amber mb-2">Thick Lens Calculator</h3>
                <p className="text-optics-blue/70 text-sm">Extended focal length formula with thickness correction.</p>
              </motion.div>
            </Link>
            <Link href="/lens-combination">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-glass-strong rounded-xl p-4 border border-optics-blue/30 hover:border-optics-purple/50 transition-all h-full"
              >
                <h3 className="font-semibold text-optics-purple mb-2">Lens Combination</h3>
                <p className="text-optics-blue/70 text-sm">Combined focal length formula for multiple lenses.</p>
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
          <Link href="/tutorial">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-optics-blue to-optics-cyan 
                       text-optics-darker font-bold rounded-lg border-glow
                       hover:shadow-[0_0_40px_rgba(0,217,255,0.6)] transition-all"
            >
              Learn More in Our Tutorial →
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
