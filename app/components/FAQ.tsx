'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const faqs = [
  {
    question: 'What is the lens maker formula?',
    answer: 'The lens maker formula is an equation that relates the focal length of a lens to its physical properties: the refractive index of the material and the radii of curvature of its two surfaces. It is expressed as 1/f = (n-1)(1/R₁ - 1/R₂), where f is the focal length, n is the refractive index, and R₁ and R₂ are the radii of curvature.',
  },
  {
    question: 'When is the lens maker formula valid?',
    answer: 'The lens maker formula is valid for thin lenses, where the thickness of the lens is much smaller than the radii of curvature. For thick lenses, additional corrections are needed to account for the lens thickness.',
  },
  {
    question: 'What does a positive or negative focal length mean?',
    answer: 'A positive focal length indicates a converging (convex) lens that brings parallel light rays together. A negative focal length indicates a diverging (concave) lens that spreads parallel light rays apart.',
  },
  {
    question: 'How do I determine the sign of the radius of curvature?',
    answer: 'The sign convention: if the center of curvature is on the same side as the incoming light, the radius is positive (convex surface). If the center of curvature is on the opposite side, the radius is negative (concave surface).',
  },
  {
    question: 'What are typical refractive index values?',
    answer: 'Common refractive indices: air (1.00), water (1.33), crown glass (1.52), flint glass (1.62), diamond (2.42). The refractive index depends on the material and the wavelength of light.',
  },
  {
    question: 'Can I use this formula for thick lenses?',
    answer: 'The basic lens maker formula assumes thin lenses. For thick lenses, you need to account for the lens thickness (d) using the modified formula: 1/f = (n-1)[1/R₁ - 1/R₂ + (n-1)d/(nR₁R₂)].',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative z-10 max-w-4xl mx-auto mt-20 mb-20"
    >
      <div className="bg-glass-strong rounded-2xl p-8 md:p-12 border border-optics-blue/30">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-display font-bold text-glow mb-10 text-center"
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-optics-darker/50 rounded-xl border border-optics-blue/20 
                       overflow-hidden transition-all duration-300
                       hover:border-optics-blue/40"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between
                         hover:bg-optics-blue/5 transition-colors duration-200"
              >
                <span className="text-optics-blue font-medium pr-4">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 text-optics-cyan text-xl"
                >
                  ▼
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-optics-blue/80 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

