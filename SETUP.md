# Setup and Customization Guide

This guide will help you customize the AI Governance landing page for your specific needs.

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173`

3. **Build for production:**
   ```bash
   npm run build
   ```

## Essential Customizations

### 1. Update Video Demo

**File:** `src/components/VideoDemo.tsx`

Replace `YOUR_VIDEO_ID` with your actual YouTube video ID:

```tsx
src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
```

Example: If your YouTube URL is `https://www.youtube.com/watch?v=dQw4w9WgXcQ`, use `dQw4w9WgXcQ` as the video ID.

### 2. Update Waitlist Form URL

**File:** `src/components/CTA.tsx`

Replace `YOUR_GOOGLE_FORM_URL` with your actual Google Form or waitlist signup URL:

```tsx
href="YOUR_GOOGLE_FORM_URL"
```

### 3. Customize Colors

**File:** `src/index.css`

Edit the color values in the `@theme` section:

```css
@theme {
  --color-background: #0f1419;
  --color-primary: #7c3aed;
  --color-primary-light: #8b5cf6;
  --color-accent-teal: #14b8a6;
  --color-accent-gold: #fbbf24;
  --color-text-gray: #94a3b8;
  --color-text-gray-dark: #64748b;
  --max-width-content: 1400px;
}
```

These colors are used throughout the application:
- `background` - Main background color
- `primary` / `primary-light` - Primary purple for buttons and accents
- `accent-teal` - Teal accent for specific highlights
- `accent-gold` - Gold color for competitor names
- `text-gray` / `text-gray-dark` - Text colors

### 4. Update Company Information

**Files to modify:**
- `src/components/Navbar.tsx` - Company name and logo
- `src/components/Footer.tsx` - Copyright text
- `index.html` - Page title and meta description

### 5. Modify Content

#### Hero Section
**File:** `src/components/Hero.tsx`

Update:
- Badge text
- Headline
- Subheadline
- CTA button text

#### Stats Bar
**File:** `src/components/Stats.tsx`

Modify the stats array to show your own metrics:
```tsx
const stats = [
  { value: '<10min', label: 'Time to Evidence' },
  { value: '60%+', label: 'Auto-Fix Rate' },
  { value: '<15%', label: 'False Positives' },
];
```

#### Why We're Different
**File:** `src/components/WhyDifferent.tsx`

Update the cards array with your own competitive differentiators. Each card has:
- `icon` - Lucide React icon component
- `title` - Card heading
- `description` - Text before competitor name
- `competitor` - Competitor name (displayed in gold)
- `description2` - Text after competitor name

#### What We Actually Do
**File:** `src/components/WhatWeDo.tsx`

Update the cards array with your product features. Each card has:
- `icon` - Lucide React icon component
- `title` - Feature name
- `description` - Feature description

## Available Icons

This project uses [Lucide React](https://lucide.dev/icons) icons. Browse available icons and import them like:

```tsx
import { IconName } from 'lucide-react';
```

Current icons used:
- ShieldCheck, Sparkles, Play (Hero & Navbar)
- Search, AlertTriangle, BarChart3, FileText, Settings (What We Do)
- Zap, Target, Rocket, Beaker, Package, Briefcase (Why Different)

## Styling Guidelines

### Color Usage
- Use `bg-background` for main backgrounds
- Use `bg-primary` for primary buttons
- Use `text-white` for headings
- Use `text-text-gray` for body text
- Use `text-accent-gold` for highlights

### Spacing
- Sections: `py-32` (120px vertical padding)
- Container: `px-10` (40px horizontal padding)
- Max width: `max-w-content` (1400px)

### Hover Effects
Components should have:
```tsx
hover:-translate-y-1 hover:shadow-xl transition-all duration-300
```

### Glass Morphism Cards
```tsx
className="glass-card bg-[rgba(15,20,25,0.7)] rounded-xl p-8 border border-primary/20"
```

## Adding New Sections

1. Create a new component in `src/components/`
2. Import and add it to `src/App.tsx`
3. Follow the existing patterns for styling and structure

## Deployment

### Build for Production
```bash
npm run build
```

The optimized build will be in the `dist/` directory.

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`

### Deploy to GitHub Pages
1. Install gh-pages: `npm install -D gh-pages`
2. Add to package.json scripts:
   ```json
   "deploy": "npm run build && gh-pages -d dist"
   ```
3. Run: `npm run deploy`

## Troubleshooting

### Build Errors
If you encounter build errors, try:
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Styling Not Applying
Make sure:
1. The `@import "tailwindcss";` is at the top of `src/index.css`
2. PostCSS config includes `@tailwindcss/postcss`
3. All color utilities reference the theme values

### Icons Not Showing
Check that:
1. `lucide-react` is installed: `npm list lucide-react`
2. Icons are imported correctly from `lucide-react`

## Support

For issues with:
- **React/Vite**: Check [Vite documentation](https://vitejs.dev)
- **Tailwind CSS**: Check [Tailwind v4 docs](https://tailwindcss.com)
- **Icons**: Browse [Lucide icons](https://lucide.dev)

