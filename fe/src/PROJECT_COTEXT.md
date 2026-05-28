# Project Context: IGRS Redesign

## Tentang Project
Project ini adalah *Redesign Website IGRS (Indonesian Game Rating System)* - https://igrs.id/. 
IGRS berfungsi sebagai sistem klasifikasi game buatan Indonesia atau luar negeri yang dipasarkan di Indonesia, mirip dengan ESRB atau PEGI. Tujuan utamanya adalah mengedukasi konsumen, khususnya orang tua, agar memahami rating usia sebuah game dan apakah game tersebut layak dimainkan oleh anak mereka.

## Peran & Lingkup Kerja
- **Role:** Frontend Developer
- **Lingkup:** Hanya bekerja di dalam folder `fe/` (Frontend). Tim UI/UX telah menyediakan desain *High Fidelity* di Figma, dan tim Backend bertanggung jawab untuk penyediaan API (yang saat ini belum siap).

## Tech Stack (Frontend)
- **Framework:** React 19 (dibuild menggunakan Vite 8)
- **Styling:** Tailwind CSS v4 (Tanpa file config eksternal, konfigurasi terpusat di `index.css` menggunakan block `@theme`)
- **Icons:** Lucide React
- **HTTP Client:** Native `fetch` API (Tidak menggunakan Axios)
- **Routing:** React Router v7

## Arsitektur & Aturan Penting

### 1. Fallback Logic API Integration (Anti-Nganggur)
Karena Backend belum siap atau berpotensi error saat *development*, Frontend dirancang agar **selalu bisa berjalan**. 
Semua pemanggilan API dilakukan di `fe/src/service/api.js` dengan pola `try-catch`. 
Jika `fetch` ke endpoint backend gagal, sistem akan otomatis melakukan *fallback* (menggunakan data *dummy*) yang bersumber dari `fe/src/mock/data.js`.
- **Dilarang Over-engineer**: Jangan membuat arsitektur state management yang rumit. Cukup manfaatkan pola fallback API ini agar UI dapat dikembangkan secara paralel.

### 2. Design System & Styling
- Desain merujuk penuh pada Figma yang telah disediakan UI/UX.
- Tidak boleh *halu* atau mengarang warna. Seluruh *Color Palette*, Gradien, *Shadows*, dan *Glassmorphism* harus akurat dan telah diekstrak ke dalam variabel CSS di `fe/src/index.css`.
- Terdapat utilitas teks khusus (`.gradient-text`, `.gradient-text-highlight`, `.gradient-accent`) yang sudah dikalibrasi (memiliki `padding-bottom` khusus agar *descender* huruf seperti 'g' atau 'y' tidak terpotong).

### 3. Folder Penting (Source of Truth)
- `fe/src/service/api.js`: Sentral pemanggilan API (termasuk *fallback logic*).
- `fe/src/mock/data.js`: Tempat penyimpanan data *dummy* jika backend mati.
- `fe/src/mock/constants.js`: Tempat penyimpanan *value statis* yang sering dipakai.
- `fe/src/assets/`: Direktori utama untuk gambar dan aset statis lainnya.
- `fe/src/index.css`: Pusat konfigurasi *Design System* (Tailwind v4 `@theme`, *Color Palette*, dan Utilitas Global).

## Referensi
- **Figma Design:** [IGRS Redesign Challenge](https://www.figma.com/design/dsGO4ivQE3aGmtP5JII5kg/IGRS-Redesign-Challenge?node-id=183-48&p=f&t=Zq0wJbsKTBeu9RxJ-0)
