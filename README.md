# KulaiTach — Fullstack Developer Portfolio

Portfolio profesional **MHD HANAFI AKBAR**, Fullstack Developer spesialis web modern, AI integration, dan sistem bisnis digital.

**Live:** [https://kulaitach.netlify.app](https://kulaitach.netlify.app)

---

## Fitur

- Loading screen dengan animasi gradient
- Typing effect di hero section (4 role bergantian)
- Scroll-triggered animations (Framer Motion)
- Navbar auto-hide saat scroll ke bawah
- Project filtering by kategori (Fullstack, AI, Frontend, Data)
- Tech stack infinite marquee
- Contact form dengan integrasi EmailJS
- Floating WhatsApp button
- SEO metadata (OpenGraph + Twitter Card)
- Responsive design (mobile-first)
- Dark theme dengan aksen cyan & purple

---

## Tech Stack

| Kategori | Teknologi |
|----------|-----------|
| Framework | Next.js 13 (App Router), React 18, TypeScript |
| Styling | Tailwind CSS 3 |
| Animasi | Framer Motion |
| UI Library | ShadCN UI (Radix UI) |
| Form | React Hook Form + Zod |
| Email | @emailjs/browser |
| Icons | Lucide React |
| Font | Inter (Google Fonts) |

---

## Struktur Projek

```
portofolio/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── sections/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Projects.tsx
│   │   ├── TechStack.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── BackToTop.tsx
│   │   ├── WhatsAppFloat.tsx
│   │   └── LoadingScreen.tsx
│   └── ui/              (ShadCN components)
├── public/images/
├── .env.local
├── tailwind.config.ts
└── package.json
```

---

## Cara Menjalankan

```bash
# Install dependencies
npm install

# Jalankan development server
npm run dev

# Build untuk production
npm run build

# Jalankan production server
npm start
```

---

## Environment Variables

Buat file `.env.local`:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

---

## Sections

1. **Hero** — Sapaan, typing effect, CTA buttons
2. **About** — Bio, statistik (proyek, pengalaman, kepuasan klien)
3. **Services** — 6 layanan (Landing Page, E-Commerce, POS, Dashboard, AI, Fullstack)
4. **Projects** — Galeri proyek dengan filter kategori
5. **Tech Stack** — Marquee 17 teknologi
6. **Testimonials** — 3 testimoni klien
7. **Contact** — Form + info kontak + social media
8. **Footer** — Navigasi, logo, copyright

---

## License

MIT
