/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['var(--font-display)', 'system-ui', 'sans-serif'],
        'body': ['var(--font-body)', 'system-ui', 'sans-serif'],
        'mono': ['var(--font-mono)', 'monospace'],
      },
      colors: {
        'optics': {
          'dark': '#0a0e27',
          'darker': '#050712',
          'blue': '#00d9ff',
          'cyan': '#00f5ff',
          'purple': '#8b5cf6',
          'amber': '#fbbf24',
          'glow': '#00ffff',
        },
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        glow: {
          '0%': { 'box-shadow': '0 0 20px rgba(0, 217, 255, 0.3)' },
          '100%': { 'box-shadow': '0 0 40px rgba(0, 217, 255, 0.6), 0 0 60px rgba(0, 245, 255, 0.3)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'grid-pattern': 'linear-gradient(rgba(0, 217, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 217, 255, 0.1) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid': '50px 50px',
      },
    },
  },
  plugins: [],
}

