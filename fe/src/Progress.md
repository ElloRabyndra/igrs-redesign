# Changelog & Progress

File ini melacak progress pengembangan esensial pada sisi Frontend (`fe/`) dari project IGRS Redesign.

## [Terkini] - Konfigurasi Dasar & Design System

**Selesai Dikerjakan:**

- **Inisialisasi Project:** Setup Vite + React 19, instalasi Tailwind CSS v4, dan Lucide React.
- **API Fallback Architecture:** Membangun fondasi integrasi API di `service/api.js` menggunakan _native fetch_. Mengimplementasikan logika _fallback_ ke `mock/data.js` untuk mengantisipasi ketidaksiapan Backend.
- **Integrasi Design System (Figma):**
  - Mengekstrak puluhan warna (Primary, Accent, Classification Safe/Danger, Tints/Shades) langsung dari Figma API (_Color Pallete Frame_ & _Global Styles_).
  - Mengimplementasikan seluruh palet warna, bayangan (_shadows_), gradien, dan efek _glassmorphism_ ke dalam `fe/src/index.css` menggunakan syntax `@theme` dari Tailwind v4.
- **UI Utilities Fix:** Memperbaiki bug umum pada `.gradient-text` (huruf berekor seperti 'g' yang terpotong akibat `background-clip`) dengan kalibrasi _padding_ dan _negative margin_.
- **Routing & Pages:**
  - Setup React Router.
  - Membuat halaman _preview_ komponen (`ColorPalettePreview.jsx`) untuk memvalidasi _Design System_.
  - Membuat fondasi halaman `Home.jsx`.

- **Slicing Komponen Hero & Navbar:**
  - Membuat `Navbar.jsx` yang fully-responsive dengan logo IGRS dan navigasi.
  - Membuat `Hero.jsx` dengan replikasi *background* Figma 100% menggunakan Tailwind CSS (menggabungkan warna solid `bg-primary-navy` dengan `<div />` yang diblur untuk efek gradasi cahaya).
  - Mengimplementasikan gambar karakter secara responsif (disembunyikan di versi mobile).
  - Menggunakan SVG untuk membentuk potongan segitiga putih di bagian bawah Hero agar tersambung secara mulus (*seamless*) dengan konten di bawahnya.
  - Mengimplementasikan UI *Search bar*.

**Fokus Selanjutnya:**

- Memulai *slicing* UI untuk komponen Card Klasifikasi/Rating (berdasarkan desain Figma).
- Menyusun sisa konten dari halaman Home sesuai dengan hirarki informasi yang ada di purwarupa.
