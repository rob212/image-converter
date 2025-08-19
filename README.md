# Easy Image Converter

A simple, fast, and privacy-friendly **client-side image converter**.  
All conversions happen **in your browser** — images are never uploaded to a server.

Currently supported conversions:
- **PNG → JPG**
- **JPG → PNG**
- **PNG → WebP**

More converters will be added over time.

👉 Live demo: [https://easyimageconverter.com](https://easyimageconverter.com)

---

## ✨ Features
- 100% free, no signup required
- Runs entirely in the browser (secure & private)
- Responsive design — works on desktop & mobile
- Lightweight and fast
- Monetized with Google AdSense (non-intrusive ads)

---

## 🛠️ Tech Stack
- **HTML5** + **CSS3** (modern, responsive)
- **JavaScript** (vanilla, no frameworks)
- **Google Fonts** for modern typography
- **Google Analytics 4 (GA4)** for usage stats
- **GitHub Pages** for free static hosting

---

## 📂 Project Structure

├── index.html # PNG → JPG converter
├── jpg-to-png.html # JPG → PNG converter
├── png-to-webp.html # PNG → WebP converter
├── style.css # Global styles
├── converter.js # Reusable converter logic
├── nav.html # Shared navigation bar
├── nav.js # Injects nav + highlights active tab
├── analytics.js # Google Analytics setup
├── consent.js # Cookie consent + Consent Mode v2
└── README.md # Project documentation


---

## 🚀 Running Locally

This project is fully static. You just need a local server to avoid CORS issues when loading shared components (`nav.html`).

### Option 1: VSCode Live Server (Recommended)
1. Install the **[Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)** in VSCode.  
2. Open this project folder in VSCode.  
3. Right-click on `index.html` → **“Open with Live Server”**.  
4. Your browser will open at:  

http://127.0.0.1:5500/index.html

The site will auto-reload when you save changes.

