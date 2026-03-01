# Growing Forward — Website

A trust-first website for Everett's Growing Forward brand, with a Primerica lane inside it.

**Stack:** Next.js 14 (App Router) + Tailwind CSS  
**Deploy:** Vercel (free tier)

---

## Quick Start (Local Development)

### 1. Install Node.js
Download from [nodejs.org](https://nodejs.org) — install the LTS version.

### 2. Install dependencies
Open Terminal (Mac) or Command Prompt (Windows) in this folder and run:
```bash
npm install
```

### 3. Run locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser. You'll see your site live.

---

## Before You Go Live — Things To Update

### A) Set up your contact form (Formspree — free)
1. Go to [formspree.io](https://formspree.io) and create a free account
2. Create a new form, copy your Form ID (looks like `xyzabc12`)
3. Open `src/app/work-with-me/page.tsx`
4. Find this line:
   ```
   const res = await fetch('https://formspree.io/f/YOUR_FORMSPREE_ID', {
   ```
5. Replace `YOUR_FORMSPREE_ID` with your actual ID

### B) Add your real contact info
Open `src/app/contact/page.tsx` and update:
- Your email address
- Your phone number
- Your social media handle/links

### C) Add your photo
Open `src/app/about/page.tsx` — find the photo placeholder div and replace it with an `<Image>` component:
```tsx
import Image from 'next/image'
// Then replace the placeholder div with:
<Image src="/your-photo.jpg" alt="Everett" width={400} height={500} className="rounded-2xl w-full object-cover" />
```
Put your photo file in the `/public` folder.

### D) Customize testimonials
When you have real testimonials, open `src/app/page.tsx` and find the testimonials section. Replace the placeholder cards with real ones.

---

## Deploy to Vercel (Free)

### 1. Push to GitHub
1. Create a free account at [github.com](https://github.com)
2. Create a new repository called `growing-forward`
3. Upload all these files to that repo

### 2. Connect to Vercel
1. Go to [vercel.com](https://vercel.com) and sign up with your GitHub account
2. Click "Add New Project"
3. Select your `growing-forward` repository
4. Click "Deploy" — that's it

Vercel will automatically:
- Build your site
- Give you a live URL (something like `growing-forward.vercel.app`)
- Redeploy every time you push changes to GitHub

### 3. Custom Domain (optional)
Once deployed, you can connect a custom domain (like `growingforward.com`) from the Vercel dashboard under "Domains."

---

## File Structure

```
growing-forward/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Global layout (Navbar + Footer)
│   │   ├── globals.css         # Global styles
│   │   ├── page.tsx            # Home page
│   │   ├── about/
│   │   │   └── page.tsx        # About page
│   │   ├── work-with-me/
│   │   │   └── page.tsx        # Lead capture form
│   │   ├── faq/
│   │   │   └── page.tsx        # Education / FAQ
│   │   ├── transparency/
│   │   │   └── page.tsx        # Compensation transparency
│   │   └── contact/
│   │       └── page.tsx        # Contact page
│   └── components/
│       ├── Navbar.tsx           # Navigation bar
│       └── Footer.tsx           # Footer
├── tailwind.config.js           # Design system / colors
├── next.config.js
├── tsconfig.json
├── package.json
└── README.md
```

---

## Design System

**Colors:**
- Forest green (`#2d5a3d`) — primary brand color
- Warm cream (`#f7f3ee`) — background
- Warm sand (`#e8dfd4`) — accents
- Warm amber (`#c4956a`) — highlights
- Stone (`#292524`) — text

**Fonts:**
- Display (headings): Playfair Display (elegant serif)
- Body: DM Sans (clean, modern sans-serif)

---

## Need Help?

This site is designed to be easy to extend. Each page is its own file. To add a new page, create a new folder inside `src/app/` with a `page.tsx` file inside it.
