# 🎴 Vishwa Patrakar Mahasangh - ID Card Generator

A complete React application to generate official ID cards for Vishwa Patrakar Mahasangh members.

## ✨ Features

- 📸 **Upload Photo** — Click photo area to upload member picture
- 📝 **Real-time Preview** — See the card update as you type
- 🎯 **Exact Design Replica** — Matches your original ID card template perfectly
- 📥 **Download as PNG** — High-resolution image export (3x scale)
- 🖨️ **Print Ready** — Optimized print styles
- 🔧 **Easy Logo/Signature Swap** — Simple file replacement system

## 🚀 Quick Start

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Step 3: Build for Production
```bash
npm run build
```

## 🖼️ How to Add Your Logo

1. Convert your PDF logo to **PNG** format (transparent background recommended)
2. Rename it to `logo.png`
3. Place it in the `public/` folder
4. The app will automatically detect and display it

**Path:** `public/logo.png`

> 💡 **Tip:** Recommended size: 200x200px or larger. The logo area is 65x65px on the card.

## ✍️ How to Add Signatures

1. Scan or create digital signatures with **transparent background** (PNG format)
2. Rename them:
   - Left stamp (Secretary): `signature1.png`
   - Right stamp (President): `signature2.png`
3. Place both in the `public/` folder

**Paths:**
- `public/signature1.png` — राष्ट्रीय महासचिव/ट्रस्टी
- `public/signature2.png` — राष्ट्रीय अध्यक्ष/संस्थापक

> 💡 **Tip:** Keep signatures under 100px width for best fit.

## 📁 Project Structure

```
id-card-generator/
├── public/
│   ├── logo.png          ← Add your logo here
│   ├── signature1.png    ← Add secretary signature
│   └── signature2.png    ← Add president signature
├── src/
│   ├── components/
│   │   └── IDCard.jsx    ← ID Card component (exact replica)
│   ├── styles/
│   │   └── index.css     ← All styles
│   ├── App.jsx           ← Main app with form state
│   └── main.jsx          ← React entry point
├── index.html
├── package.json
└── vite.config.js
```

## 🎨 Customization

### Change Default Validity Dates
Edit in `src/App.jsx`:
```javascript
const [formData, setFormData] = useState({
  validFrom: '2026-01-01',  // ← Change this
  validTo: '2026-12-31',   // ← Change this
  // ...
})
```

### Change Registration Number
Edit in `src/components/IDCard.jsx`:
```javascript
<div className="reg-no">R.No.: 547/06T</div>
```

## 📦 Dependencies

- **React 18** — UI framework
- **Vite** — Build tool
- **html2canvas** — Card to image conversion

## 🛠️ Tech Stack

- React + Hooks (useState, useRef, useCallback)
- Vite (fast dev server & bundler)
- html2canvas (client-side image generation)
- CSS3 (custom styling, no external UI libraries)

## 📄 License

Internal tool for Vishwa Patrakar Mahasangh.
