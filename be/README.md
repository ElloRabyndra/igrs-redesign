# Game Redesign API (Backend)

Dokumentasi instalasi dan penggunaan API untuk proyek Game Redesign.

## 🛠️ Prasyarat
- **Node.js** (v18 ke atas)
- **XAMPP** (Untuk MySQL Database)

## 🚀 Langkah Instalasi

### 1. Persiapan Database (XAMPP)
1. Buka **XAMPP Control Panel**.
2. Jalankan modul **Apache** dan **MySQL**.
3. Buka browser dan pergi ke `http://localhost/phpmyadmin`.
4. Buat database baru dengan nama `game_db`.

### 2. Konfigurasi Proyek
1. Buka folder `be` di terminal Anda.
2. Instal semua dependensi:
   ```bash
   npm install
   ```
3. Copy file `.env.example` ke `.env` (atau buat file `.env` baru) dan sesuaikan konfigurasinya:
   ```env
   DATABASE_URL="mysql://root:@localhost:3306/game_db"
   PORT=3000
   NODE_ENV=development
   ```
   *Catatan: Jika user MySQL Anda bukan root atau memiliki password, sesuaikan URL-nya (`mysql://USER:PASSWORD@localhost:3306/DATABASE`).*

### 3. Sinkronisasi Database (Prisma)
1. Jalankan perintah untuk menghasilkan Prisma Client:
   ```bash
   npx prisma generate
   ```
2. Sinkronkan skema ke database XAMPP Anda:
   ```bash
   npx prisma db push
   ```

### 4. Menjalankan Server
1. Untuk mode pengembangan (development):
   ```bash
   npm run dev
   ```
2. Server akan berjalan di `http://localhost:3000`.

## 📖 Dokumentasi API (Swagger)
Setelah server berjalan, Anda dapat melihat dokumentasi lengkap dan mencoba API langsung melalui Swagger UI di:
👉 **[http://localhost:3000/api-docs](http://localhost:3000/api-docs)**

## 📁 Struktur Folder
- `src/config`: Konfigurasi database dan pihak ketiga (Prisma, Swagger).
- `src/modules`: Fitur aplikasi yang dipisahkan secara modular (Controller-Service-Repository).
- `src/middlewares`: Middleware global seperti error handler.
- `src/utils`: Helper fungsi untuk respon JSON seragam.

## 🔗 Endpoints Utama
- `GET /api/game` - Daftar Game
- `GET /api/rating` - Daftar Rating
- `GET /api/blog` - Daftar Blog
- `GET /api/content-classification` - Daftar Klasifikasi Konten
