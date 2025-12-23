'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface VisualizationProps {
  focalLength: number | null;
  R1: number;
  R2: number;
}

export default function Visualization({ focalLength, R1, R2 }: VisualizationProps) {
  const [svgWidth, setSvgWidth] = useState(800);
  const [svgHeight] = useState(400);

  useEffect(() => {
    const updateSize = () => {
      setSvgWidth(Math.min(window.innerWidth - 64, 800));
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  // Scale factors for visualization
  const scale = 200; // pixels per meter
  const centerY = svgHeight / 2;
  const lensX = svgWidth / 2;
  const lensThickness = 20;

  // Calculate lens shape
  const isConverging = focalLength !== null && focalLength > 0;
  const lensRadius1 = Math.abs(R1) * scale;
  const lensRadius2 = Math.abs(R2) * scale;

  // Draw lens surfaces
  const drawLensSurface = (radius: number, x: number, isConvex: boolean) => {
    if (radius === 0 || radius > 1000) return null;
    
    const arcHeight = lensThickness / 2;
    const sagitta = radius - Math.sqrt(radius * radius - arcHeight * arcHeight);
    const startY = centerY - arcHeight;
    const endY = centerY + arcHeight;
    
    if (isConvex) {
      const centerX = x - (radius - sagitta);
      return `M ${x} ${startY} A ${radius} ${radius} 0 0 1 ${x} ${endY}`;
    } else {
      const centerX = x + (radius - sagitta);
      return `M ${x} ${startY} A ${radius} ${radius} 0 0 0 ${x} ${endY}`;
    }
  };

  const surface1Path = drawLensSurface(lensRadius1, lensX - lensThickness / 2, R1 > 0);
  const surface2Path = drawLensSurface(lensRadius2, lensX + lensThickness / 2, R2 > 0);

  // Draw light rays
  const drawRays = () => {
    if (focalLength === null) return null;

    const rayStartX = 50;
    const rayEndX = svgWidth - 50;
    const focalX = lensX + (focalLength * scale);
    const focalPointX = isConverging ? focalX : lensX - (Math.abs(focalLength) * scale);

    const rays = [];
    for (let i = -2; i <= 2; i++) {
      const y = centerY + i * 40;
      rays.push(
        <g key={i}>
          {/* Incident ray */}
          <line
            x1={rayStartX}
            y1={y}
            x2={lensX}
            y2={y}
            stroke="rgba(0, 217, 255, 0.6)"
            strokeWidth="2"
            strokeDasharray="4,4"
          />
          {/* Refracted ray */}
          {isConverging ? (
            <line
              x1={lensX}
              y1={y}
              x2={focalPointX}
              y2={centerY}
              stroke="rgba(0, 245, 255, 0.8)"
              strokeWidth="2"
            />
          ) : (
            <line
              x1={lensX}
              y1={y}
              x2={rayEndX}
              y2={y + (y - centerY) * 0.5}
              stroke="rgba(139, 92, 246, 0.8)"
              strokeWidth="2"
              strokeDasharray="4,4"
            />
          )}
        </g>
      );
    }
    return rays;
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
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
          Light Ray Visualization
        </motion.h2>

        <div className="bg-optics-darker/70 rounded-xl p-6 border border-optics-blue/20 overflow-x-auto">
          <svg
            width={svgWidth}
            height={svgHeight}
            viewBox={`0 0 ${svgWidth} ${svgHeight}`}
            className="w-full"
          >
            {/* Grid background */}
            <defs>
              <pattern
                id="grid"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 20 0 L 0 0 0 20"
                  fill="none"
                  stroke="rgba(0, 217, 255, 0.1)"
                  strokeWidth="1"
                />
              </pattern>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            <rect width={svgWidth} height={svgHeight} fill="url(#grid)" />

            {/* Optical axis */}
            <line
              x1="0"
              y1={centerY}
              x2={svgWidth}
              y2={centerY}
              stroke="rgba(0, 217, 255, 0.3)"
              strokeWidth="1"
              strokeDasharray="2,2"
            />

            {/* Lens */}
            {surface1Path && surface2Path && (
              <g>
                <path
                  d={`${surface1Path} L ${lensX + lensThickness / 2} ${centerY + 100} 
                      L ${lensX - lensThickness / 2} ${centerY + 100} Z`}
                  fill="rgba(0, 217, 255, 0.2)"
                  stroke="rgba(0, 217, 255, 0.6)"
                  strokeWidth="2"
                  filter="url(#glow)"
                />
                <line
                  x1={lensX - lensThickness / 2}
                  y1={centerY - 100}
                  x2={lensX - lensThickness / 2}
                  y2={centerY + 100}
                  stroke="rgba(0, 217, 255, 0.8)"
                  strokeWidth="3"
                />
                <line
                  x1={lensX + lensThickness / 2}
                  y1={centerY - 100}
                  x2={lensX + lensThickness / 2}
                  y2={centerY + 100}
                  stroke="rgba(0, 217, 255, 0.8)"
                  strokeWidth="3"
                />
              </g>
            )}

            {/* Light rays */}
            {focalLength !== null && drawRays()}

            {/* Focal point marker */}
            {focalLength !== null && (
              <g>
                <circle
                  cx={isConverging ? lensX + (focalLength * scale) : lensX - (Math.abs(focalLength) * scale)}
                  cy={centerY}
                  r="6"
                  fill="rgba(251, 191, 36, 0.8)"
                  filter="url(#glow)"
                />
                <text
                  x={isConverging ? lensX + (focalLength * scale) : lensX - (Math.abs(focalLength) * scale)}
                  y={centerY - 15}
                  fill="rgba(251, 191, 36, 0.9)"
                  fontSize="12"
                  textAnchor="middle"
                  fontFamily="var(--font-mono)"
                >
                  F
                </text>
              </g>
            )}

            {/* Labels */}
            <text
              x={lensX}
              y={centerY - 120}
              fill="rgba(0, 217, 255, 0.9)"
              fontSize="14"
              textAnchor="middle"
              fontFamily="var(--font-mono)"
              fontWeight="bold"
            >
              Lens
            </text>
          </svg>
        </div>

        {focalLength === null && (
          <p className="text-center text-optics-blue/60 mt-4 text-sm">
            Enter lens parameters above to see light ray visualization
          </p>
        )}
      </div>
    </motion.section>
  );
}

