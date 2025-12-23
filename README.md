# Lens Maker Formula Calculator

A beautiful, modern web application for calculating lens focal length using the lens maker formula. Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🧮 **Interactive Calculator**: Real-time calculation of lens focal length
- 📊 **Visual Light Ray Diagram**: Animated visualization of light rays through the lens
- 📚 **Comprehensive Explanations**: Detailed formula breakdown and parameter descriptions
- ❓ **FAQ Section**: Answers to common questions about the lens maker formula
- 🎨 **Modern Design**: Dark theme with optical-inspired aesthetics
- 📱 **Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices
- ⚡ **Fast & Optimized**: Built with Next.js for optimal performance
- 📈 **Analytics Ready**: Integrated with Plausible Analytics (supports self-hosted instances)

## Formula

The lens maker formula is:

```
1/f = (n-1)(1/R₁ - 1/R₂)
```

Where:
- `f` = focal length
- `n` = refractive index
- `R₁` = radius of curvature of first surface
- `R₂` = radius of curvature of second surface

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/lensmakerformula.git
cd lensmakerformula
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Environment Variables

Create a `.env.local` file for local development:

```bash
# Copy the example file
cp env.example .env.local

# Edit .env.local and add your Plausible configuration
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=your-domain.com
NEXT_PUBLIC_PLAUSIBLE_API_HOST=analytics.yourdomain.com  # Optional, for self-hosted
```

See [PLAUSIBLE_SETUP.md](./PLAUSIBLE_SETUP.md) for detailed Plausible Analytics setup instructions.

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

Or use the Vercel CLI:
```bash
npm i -g vercel
vercel
```

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Fonts**: Space Grotesk, Inter, JetBrains Mono

## Project Structure

```
lensmakerformula/
├── app/
│   ├── components/
│   │   ├── LensCalculator.tsx    # Main calculator component
│   │   ├── FormulaExplanation.tsx # Formula details
│   │   ├── Visualization.tsx      # Light ray diagram
│   │   ├── FAQ.tsx                # FAQ section
│   │   └── PlausibleScript.tsx    # Analytics script
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Home page
├── public/                       # Static assets
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

## License

MIT License - feel free to use this project for your own purposes.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

