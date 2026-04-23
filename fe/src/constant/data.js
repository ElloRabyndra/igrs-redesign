// DATA DUMMY — IGRS Redesign

// ----------------------------------------------------------
// GET /rating
// Fields: id, title, image_url, summary, count
// ----------------------------------------------------------
export const ratings = [
  {
    id: 1,
    title: "Semua Umur",
    image_url: "",
    summary: "Konten sesuai untuk semua kalangan usia tanpa batasan.",
    count: 134,
  },
  {
    id: 2,
    title: "7+",
    image_url: "",
    summary: "Konten sesuai untuk usia 7 tahun ke atas.",
    count: 98,
  },
  {
    id: 3,
    title: "13+",
    image_url: "",
    summary: "Konten sesuai untuk usia 13 tahun ke atas.",
    count: 76,
  },
  {
    id: 4,
    title: "18+",
    image_url: "",
    summary: "Konten hanya untuk orang dewasa usia 18 tahun ke atas.",
    count: 45,
  },
];

// ----------------------------------------------------------
// GET /rating/{id}
// Fields: id, title, description, image_url
// ----------------------------------------------------------
export const ratingDetail = {
  id: 3,
  title: "13+",
  image_url: "",
  description:
    "Game dengan rating 13+ mengandung konten yang mungkin tidak sesuai untuk anak di bawah 13 tahun. Biasanya mencakup kekerasan ringan, bahasa yang sedikit kasar, atau tema yang membutuhkan pemahaman lebih matang. Orang tua disarankan untuk mendampingi.",
};

// ----------------------------------------------------------
// GET /content-classification
// Fields: id, title, image_url, description
// ----------------------------------------------------------
export const contentClassifications = [
  {
    id: 1,
    title: "Kekerasan",
    image_url: "",
    description:
      "Game mengandung adegan atau mekanisme kekerasan, seperti pertarungan, peperangan, atau konflik fisik.",
  },
  {
    id: 2,
    title: "Bahasa Kasar",
    image_url: "",
    description:
      "Game mengandung kata-kata atau ekspresi yang dianggap tidak sopan atau tidak pantas.",
  },
  {
    id: 3,
    title: "Konten Seksual",
    image_url: "",
    description:
      "Game menampilkan elemen, referensi, atau adegan yang bersifat seksual.",
  },
  {
    id: 4,
    title: "Horor",
    image_url: "",
    description:
      "Game mengandung elemen menakutkan, mencekam, atau konten yang dapat menimbulkan ketakutan.",
  },
  {
    id: 5,
    title: "Perjudian",
    image_url: "",
    description:
      "Game mengandung mekanisme atau simulasi perjudian, termasuk gacha dengan uang nyata.",
  },
  {
    id: 6,
    title: "Penggunaan Obat-obatan",
    image_url: "",
    description:
      "Game menampilkan penggunaan, referensi, atau glorifikasi narkoba dan obat-obatan terlarang.",
  },
];

// ----------------------------------------------------------
// GET /game
// Fields: id, title, image_url, rating → { id, image_url }
// ----------------------------------------------------------
export const games = [
  {
    id: 1,
    title: "Genshin Impact",
    image_url: "",
    rating: { id: 2, image_url: "" },
  },
  {
    id: 2,
    title: "Mobile Legends: Bang Bang",
    image_url: "",
    rating: { id: 2, image_url: "" },
  },
  {
    id: 3,
    title: "PUBG Mobile",
    image_url: "",
    rating: { id: 3, image_url: "" },
  },
  {
    id: 4,
    title: "Minecraft",
    image_url: "",
    rating: { id: 1, image_url: "" },
  },
  {
    id: 5,
    title: "Call of Duty: Mobile",
    image_url: "",
    rating: { id: 3, image_url: "" },
  },
  {
    id: 6,
    title: "Free Fire",
    image_url: "",
    rating: { id: 3, image_url: "" },
  },
  {
    id: 7,
    title: "Roblox",
    image_url: "",
    rating: { id: 1, image_url: "" },
  },
  {
    id: 8,
    title: "Honkai: Star Rail",
    image_url: "",
    rating: { id: 2, image_url: "" },
  },
];

// ----------------------------------------------------------
// GET /game/{slug}
// Fields: id, title, slug, image_url, publisher, review_summary,
//         rating → { id, image_url },
//         content_classification → [{ image_url }],
//         game_gallery → [{ id, image_url }]
// ----------------------------------------------------------
export const gameDetail = {
  id: 1,
  title: "Genshin Impact",
  slug: "genshin-impact",
  image_url: "",
  publisher: "HoYoverse",
  review_summary:
    "Genshin Impact adalah game action RPG open-world yang menghadirkan dunia Teyvat yang luas dengan visual memukau. Pemain dapat menjelajahi berbagai wilayah, bertarung menggunakan elemen, dan mengumpulkan karakter beragam. Game ini gratis dimainkan namun memiliki sistem gacha untuk mendapatkan karakter dan senjata baru.",
  rating: {
    id: 2,
    image_url: "",
  },
  content_classification: [
    { image_url: "" }, // Kekerasan
    { image_url: "" }, // Perjudian (gacha)
  ],
  game_gallery: [
    { id: 1, image_url: "" },
    { id: 2, image_url: "" },
    { id: 3, image_url: "" },
    { id: 4, image_url: "" },
  ],
};

// ----------------------------------------------------------
// GET /blog
// Fields: id, title, image_url, updated_at, category → { id, title }
// ----------------------------------------------------------
export const blogs = [
  {
    id: 1,
    title: "Apa Itu Rating Game dan Mengapa Penting bagi Orang Tua?",
    image_url: "",
    updated_at: "2024-11-01T08:00:00.000Z",
    category: { id: 1, title: "Edukasi" },
  },
  {
    id: 2,
    title: "Tips Mendampingi Anak Bermain Game Online",
    image_url: "",
    updated_at: "2024-11-10T10:30:00.000Z",
    category: { id: 2, title: "Parenting" },
  },
  {
    id: 3,
    title: "Mengenal Klasifikasi Konten dalam Game",
    image_url: "",
    updated_at: "2024-11-15T09:00:00.000Z",
    category: { id: 1, title: "Edukasi" },
  },
  {
    id: 4,
    title: "Rekomendasi Game Ramah Anak untuk Liburan Sekolah",
    image_url: "",
    updated_at: "2024-11-20T13:00:00.000Z",
    category: { id: 3, title: "Rekomendasi" },
  },
  {
    id: 5,
    title: "Bahaya Kecanduan Game dan Cara Mengatasinya",
    image_url: "",
    updated_at: "2024-11-25T07:45:00.000Z",
    category: { id: 2, title: "Parenting" },
  },
  {
    id: 6,
    title: "Perbedaan Rating IGRS dan ESRB: Mana yang Relevan di Indonesia?",
    image_url: "",
    updated_at: "2024-12-01T11:00:00.000Z",
    category: { id: 1, title: "Edukasi" },
  },
];

// ----------------------------------------------------------
// GET /blog/{slug}
// Fields: id, slug, image_url, updated_at, category → { id, title }
// ----------------------------------------------------------
export const blogDetail = {
  id: 1,
  slug: "apa-itu-rating-game-dan-mengapa-penting-bagi-orang-tua",
  image_url: "",
  updated_at: "2024-11-01T08:00:00.000Z",
  category: { id: 1, title: "Edukasi" },
};

// ----------------------------------------------------------
// (Referensi) category_blog — bisa dipakai untuk filter/nav blog
// ----------------------------------------------------------
export const categoryBlogs = [
  { id: 1, title: "Edukasi", slug: "edukasi" },
  { id: 2, title: "Parenting", slug: "parenting" },
  { id: 3, title: "Rekomendasi", slug: "rekomendasi" },
  { id: 4, title: "Berita", slug: "berita" },
];
