# AI Governance Landing Page

A modern, dark-themed landing page for an AI governance and security product built with React 18, TypeScript, Vite, and Tailwind CSS.

## Features

- 🎨 Dark theme with custom color palette
- ⚡ Built with Vite for fast development and optimized builds
- 🎯 TypeScript for type safety
- 💨 Tailwind CSS for utility-first styling
- 🎭 Glassmorphism effects with backdrop filters
- 📱 Fully responsive design (mobile, tablet, desktop)
- ✨ Smooth transitions and hover effects
- 🎪 Lucide React icons

## Color Palette

- **Background**: `#0f1419`
- **Primary Purple**: `#7c3aed`, `#8b5cf6`
- **Accent Teal**: `#14b8a6`
- **Accent Gold**: `#fbbf24`
- **Text Gray**: `#94a3b8`, `#64748b`

## Project Structure

```
Eth-ai/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx       # Navigation bar with logo and CTA
│   │   ├── Hero.tsx         # Hero section with headline and CTAs
│   │   ├── Stats.tsx        # Statistics bar
│   │   ├── VideoDemo.tsx    # YouTube embed section
│   │   ├── WhyDifferent.tsx # Competitive differentiation
│   │   ├── WhatWeDo.tsx     # Product features
│   │   ├── CTA.tsx          # Waitlist CTA section
│   │   └── Footer.tsx       # Footer with copyright
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles with Tailwind directives
├── index.html
├── postcss.config.js        # PostCSS configuration
├── tsconfig.json            # TypeScript configuration
├── vite.config.ts           # Vite configuration
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Customization

### Update Video Demo

Replace `YOUR_VIDEO_ID` in `src/components/VideoDemo.tsx` with your YouTube video ID.

### Update Waitlist Form

Replace `YOUR_GOOGLE_FORM_URL` in `src/components/CTA.tsx` with your Google Form URL.

### Modify Colors

Edit the color palette in `src/index.css` under the `@theme` directive. Colors are defined as CSS custom properties (e.g., `--color-primary`).

### Add Sections

Create new component files in `src/components/` and import them in `src/App.tsx`.

## Technologies Used

- **React 19** - UI library (latest version)
- **TypeScript** - Type-safe JavaScript
- **Vite** - Build tool and dev server
- **Tailwind CSS v4** - Utility-first CSS framework (CSS-based configuration)
- **Lucide React** - Beautiful icon library
- **PostCSS** - CSS processing with @tailwindcss/postcss
- **Autoprefixer** - CSS vendor prefixing

## Note on Tailwind CSS v4

This project uses Tailwind CSS v4, which uses CSS-based configuration instead of JavaScript configuration files. The theme is defined in `src/index.css` using the `@theme` directive. Custom colors and values are defined as CSS custom properties.

## Design Principles

- Clean, professional aesthetic for enterprise B2B
- No gradients - solid colors only
- Glass morphism effects on cards with backdrop filters
- Smooth transitions (300ms duration)
- Hover effects with lift and glow
- Maximum width of 1400px for content
- Consistent padding: 40px horizontal, 120px vertical for sections

## Browser Support

Supports all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## License

MIT
