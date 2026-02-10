'use client';

import { useState } from 'react';
import LensCalculator from './LensCalculator';
import Visualization from './Visualization';

export default function HomeCalculatorSection() {
  const [calculatorParams, setCalculatorParams] = useState({
    n: 1.5,
    R1: 0.1,
    R2: -0.1,
    focalLength: null as number | null,
  });

  return (
    <>
      {/* Quick Calculator Section */}
      <section id="calculator" className="px-4 py-12">
        <div className="max-w-7xl mx-auto text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-glow animate-fade-in-up">
            Quick Calculator
          </h2>
          <p className="text-optics-blue/70 animate-fade-in-up animation-delay-200">
            Calculate focal length directly on the homepage
          </p>
        </div>
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
      </section>

      {/* Visualization Section */}
      <section className="px-4 py-12">
        <Visualization
          focalLength={calculatorParams.focalLength}
          R1={calculatorParams.R1}
          R2={calculatorParams.R2}
        />
      </section>
    </>
  );
}
