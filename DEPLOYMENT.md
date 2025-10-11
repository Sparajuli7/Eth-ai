# Deployment Guide

## Quick Deploy Options

### Option 1: Vercel (Easiest - Free)

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   cd /Users/shreyashparajuli/Downloads/Eth-ai
   vercel
   ```

3. **Follow prompts:**
   - Login with GitHub/email
   - Confirm project settings
   - Deploy!

4. **Custom Domain:**
   - Go to your Vercel dashboard
   - Select your project → Settings → Domains
   - Add your custom domain (e.g., `yourdomain.com`)
   - Update DNS records as instructed

**Vercel automatically detects Vite and configures everything!**

---

### Option 2: Netlify (Also Free)

1. **Build your project:**
   ```bash
   npm run build
   ```

2. **Deploy via Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod --dir=dist
   ```

   Or drag-and-drop the `dist` folder to [netlify.com/drop](https://app.netlify.com/drop)

3. **Custom Domain:**
   - Dashboard → Domain Settings → Add custom domain
   - Update DNS as instructed

---

### Option 3: Traditional Web Hosting (cPanel/FTP)

1. **Build the project:**
   ```bash
   npm run build
   ```
   This creates a `dist/` folder with static files.

2. **Upload to your web server:**
   - Upload all files from the `dist/` folder to your web root (usually `public_html/` or `www/`)
   - Using FTP client (FileZilla) or cPanel File Manager

3. **Files in dist/ after build:**
   ```
   dist/
   ├── index.html
   ├── assets/
   │   ├── index-[hash].css
   │   └── index-[hash].js
   └── vite.svg
   ```

4. **DNS Setup:**
   - Point your domain's A record to your server's IP
   - Wait for DNS propagation (up to 48 hours)

---

### Option 4: GitHub Pages (Free)

1. **Install gh-pages:**
   ```bash
   npm install -D gh-pages
   ```

2. **Add to package.json:**
   ```json
   {
     "scripts": {
       "deploy": "npm run build && gh-pages -d dist"
     }
   }
   ```

3. **Deploy:**
   ```bash
   npm run deploy
   ```

4. **Enable GitHub Pages:**
   - Go to repository → Settings → Pages
   - Select `gh-pages` branch
   - Your site will be at `https://yourusername.github.io/Eth-ai/`

5. **Custom Domain:**
   - Add a `CNAME` file in `public/` folder with your domain
   - Update DNS to point to GitHub Pages

---

## Simple HTML Version (Alternative)

If you just want a single HTML file to upload to your domain without any build process, you can use the single HTML file instead. It's simpler for a static landing page!

**To host the single HTML file:**
1. Save the HTML content as `index.html`
2. Upload to your web server's root directory
3. Access via your domain - done!

---

## Which Should You Choose?

### Use the Single HTML File if:
- ✅ You just want a simple landing page
- ✅ You have basic web hosting (cPanel/FTP)
- ✅ You won't be adding complex features later
- ✅ You want the simplest deployment

### Use the React/Vite Build if:
- ✅ You plan to add more features/pages later
- ✅ You want TypeScript and component architecture
- ✅ You're comfortable with Node.js and build tools
- ✅ You want hot reload during development

---

## Quick Start for Single HTML File

Want to just use the simpler HTML version? I can create that for you in seconds. Just let me know!

