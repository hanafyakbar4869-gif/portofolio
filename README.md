# KulaiTach — Fullstack Developer Portfolio

Portfolio profesional **MHD HANAFI AKBAR**, Fullstack Developer spesialis web modern, AI integration, dan sistem bisnis digital.

**Live:** [https://kulaitach.netlify.app](https://kulaitach.netlify.app)

---

## Fitur Utama

- **Multi-language Support (i18n):** Mendukung beberapa bahasa dengan menggunakan `next-intl`.
- **Tema Terang & Gelap:** Dukungan untuk dark mode dan light mode menggunakan `next-themes`.
- **Loading Screen Animatif:** Transisi halaman yang halus dan menarik.
- **Responsive Design:** Antarmuka yang optimal untuk layar seluler (mobile-first) maupun desktop.
- **Contact Form Integrasi:** Formulir kontak fungsional yang terhubung dengan EmailJS.
- **Desain UI Modern:** Dibangun menggunakan desain Pop/Modern yang khas dengan animasi menggunakan Framer Motion.
- **Komponen UI Modular:** Memanfaatkan komponen modular Shadcn UI untuk interaktivitas maksimal (Radix UI).

---

## Tech Stack

| Kategori | Teknologi |
|----------|-----------|
| Framework | Next.js 13 (App Router), React 18, TypeScript |
| Styling | Tailwind CSS 3 |
| Animasi | Framer Motion |
| Internationalization | next-intl |
| Theme | next-themes |
| UI Library | ShadCN UI (Radix UI) |
| Form & Validasi | React Hook Form + Zod |
| Email Service | @emailjs/browser |
| Icons | Lucide React |

---

## Struktur Projek

```
portofolio/
├── app/
│   ├── [locale]/           # i18n App Router pages & layout
│   └── globals.css
├── components/
│   ├── sections/           # Komponen bagian-bagian utama
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   └── LoadingScreen.tsx
│   └── ui/                 # ShadCN components (Button, Dialog, dll)
├── messages/               # Berkas JSON untuk terjemahan bahasa (mis. id.json, en.json)
├── public/images/          # Aset gambar statis
├── hooks/                  # Custom React hooks
├── lib/                    # File utilitas
├── .env.local              # File variabel lingkungan
├── tailwind.config.ts      # Konfigurasi Tailwind CSS
└── package.json            # Daftar dependensi dan script npm
```

---

## Bagian-Bagian Halaman (Sections)

1. **Hero** — Menampilkan sapaan utama, pengenalan singkat, foto profil, dan tombol Call-To-Action.
2. **About** — Berisi biografi singkat serta daftar Tech Stack dan keahlian inti (React, Next.js, Tailwind, dll).
3. **Projects** — Menampilkan daftar proyek yang telah dikerjakan.
4. **Contact** — Formulir kontak interaktif dan informasi kontak.
5. **Footer** — Penutup halaman dengan link navigasi.

---

## Cara Menjalankan secara Lokal

```bash
# 1. Install dependencies
npm install

# 2. Jalankan development server
npm run dev

# 3. Build untuk production
npm run build

# 4. Jalankan production server
npm start
```

---

## Environment Variables

Agar formulir kontak EmailJS berfungsi, buat file `.env.local` di root direktori dengan konfigurasi berikut:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

*(Catatan: Variabel-variabel di atas didapatkan dari dashboard EmailJS).*

---

## License

MIT
