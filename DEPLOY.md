# Deployment Guide

## Deploy to Vercel

### Method 1: GitHub Integration (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/lensmakerformula.git
   git push -u origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Automatic Deployments**
   - Every push to `main` branch will trigger a new deployment
   - Preview deployments are created for pull requests

### Method 2: Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Production Deploy**
   ```bash
   vercel --prod
   ```

## Environment Variables

No environment variables are required for this project.

## Build Settings

Vercel will automatically detect:
- **Framework**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

## Custom Domain

1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

## Performance Optimization

The project is already optimized with:
- Next.js 14 App Router (automatic code splitting)
- Static generation where possible
- Optimized images and fonts
- Minimal JavaScript bundle

## Monitoring

Vercel provides:
- Real-time analytics
- Performance metrics
- Error tracking
- Web Vitals monitoring

