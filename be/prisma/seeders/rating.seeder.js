import { PrismaClient } from '@prisma/client';

export async function seedRatings(prisma) {
  const ratings = [
    {
      id: 1,
      title: "3+",
      age: 3,
      image_url: "http://localhost:3000/assets/Rating/Rating3.png",
      summary: "Konten sesuai untuk usia 3 tahun ke atas.",
      description: "Game dengan rating 3+ dirancang agar aman dimainkan oleh anak usia dini dan dapat diakses oleh seluruh anggota keluarga. Konten dalam kategori ini tidak mengandung unsur kekerasan, bahasa kasar, tema menakutkan, perjudian, ataupun konten yang berpotensi memberikan dampak negatif bagi perkembangan anak. Karakter dan visual biasanya disajikan dengan gaya ramah anak, penuh warna, serta berfokus pada edukasi, kreativitas, hiburan ringan, atau aktivitas sederhana yang mudah dipahami."
    },
    {
      id: 2,
      title: "7+",
      age: 7,
      image_url: "http://localhost:3000/assets/Rating/Rating7.png",
      summary: "Konten sesuai untuk usia 7 tahun ke atas.",
      description: "Game dengan rating 7+ ditujukan untuk anak usia sekolah dasar dan dapat mengandung unsur fantasi ringan atau situasi yang sedikit menegangkan. Kontennya mungkin menampilkan karakter kartun yang terlibat dalam konflik sederhana, efek visual yang tidak realistis, atau interaksi antar pemain yang terbatas. Meskipun masih tergolong aman untuk anak-anak, pendampingan orang tua tetap disarankan agar anak dapat memahami konteks permainan dengan baik."
    },
    {
      id: 3,
      title: "13+",
      age: 13,
      image_url: "http://localhost:3000/assets/Rating/Rating13.png",
      summary: "Konten sesuai untuk usia 13 tahun ke atas.",
      description: "Game dengan rating 13+ mengandung konten yang mungkin tidak sepenuhnya sesuai untuk anak di bawah usia 13 tahun. Kategori ini dapat mencakup kekerasan ringan hingga sedang, penggunaan bahasa yang sedikit kasar, tema emosional yang lebih kompleks, atau interaksi daring dengan pemain lain. Beberapa permainan juga dapat memperkenalkan unsur strategi, konflik, atau cerita yang membutuhkan tingkat pemahaman yang lebih matang. Orang tua disarankan untuk melakukan pendampingan dan memahami isi permainan sebelum diberikan kepada anak."
    },
    {
      id: 4,
      title: "15+",
      age: 15,
      image_url: "http://localhost:3000/assets/Rating/Rating15.png",
      summary: "Konten sesuai untuk usia 15 tahun ke atas.",
      description: "Game dengan rating 15+ ditujukan untuk remaja yang memiliki tingkat kedewasaan lebih tinggi. Kontennya dapat mencakup adegan kekerasan yang lebih intens, penggunaan bahasa yang lebih tegas, tema sosial atau emosional yang kompleks, serta situasi yang memerlukan penilaian dan pemahaman yang lebih matang. Beberapa permainan juga dapat menampilkan unsur kompetitif yang tinggi atau interaksi daring yang lebih luas. Disarankan agar orang tua atau wali tetap memperhatikan jenis konten yang diakses."
    },
    {
      id: 5,
      title: "18+",
      age: 18,
      image_url: "http://localhost:3000/assets/Rating/Rating18.png",
      summary: "Konten hanya untuk orang dewasa usia 18 tahun ke atas.",
      description: "Game dengan rating 18+ secara khusus ditujukan untuk orang dewasa dan tidak direkomendasikan bagi anak-anak maupun remaja. Kontennya dapat mengandung kekerasan intens, bahasa vulgar, perjudian, penggunaan zat adiktif, tema sensitif, atau unsur seksual yang memerlukan tingkat kedewasaan penuh untuk dipahami secara tepat. Permainan dalam kategori ini sering kali menghadirkan pengalaman yang lebih realistis dan kompleks, sehingga pengguna disarankan memiliki pertimbangan serta tanggung jawab dalam mengakses kontennya."
    }
  ];

  for (const rating of ratings) {
    await prisma.rating.upsert({
      where: { id: rating.id },
      update: rating,
      create: rating,
    });
  }

  const contentClassifications = [
    { id: 1, title: "Horor", content_icon: "Horor", description: "Konten yang mengandung unsur menakutkan, mengejutkan, atau suasana mencekam.", rating_id: 5 },
    { id: 2, title: "Interaksi Daring", content_icon: "InteraksiDaring", description: "Permainan yang memungkinkan interaksi antar pemain melalui fitur chat atau suara.", rating_id: 3 },
    { id: 3, title: "Penampilan Tokoh", content_icon: "PenampilanTokoh", description: "Penggambaran karakter yang mungkin mengandung unsur sugestif atau tidak sesuai usia.", rating_id: 4 },
    { id: 4, title: "Seksualitas/Pornografi", content_icon: "SeksualitasPornografi", description: "Penggambaran aktivitas seksual, ketelanjangan, atau konten berorientasi dewasa.", rating_id: 5 },
    { id: 5, title: "Kekerasan", content_icon: "Kekerasan", description: "Konten yang menampilkan aksi kekerasan fisik, penggunaan senjata, atau darah.", rating_id: 4 },
    { id: 6, title: "Bahasa Kasar", content_icon: "BahasaKasar", description: "Penggunaan kata-kata yang tidak sopan, umpatan, atau hinaan.", rating_id: 4 },
    { id: 7, title: "Simulasi Sosial", content_icon: "SimulasiSosial", description: "Penggambaran interaksi sosial yang kompleks yang membutuhkan kedewasaan.", rating_id: 4 },
    { id: 8, title: "Zat Adiktif & Alkohol", content_icon: "ZatAdiktifAlkohol", description: "Referensi atau penggunaan rokok, minuman keras, dan obat-obatan terlarang.", rating_id: 5 },
    { id: 9, title: "Perjudian", content_icon: "Perjudian", description: "Simulasi atau instruksi aktivitas perjudian di dalam permainan.", rating_id: 5 }
  ];

  for (const cc of contentClassifications) {
    await prisma.contentClassification.upsert({
      where: { id: cc.id },
      update: cc,
      create: cc,
    });
  }

  console.log('✅ Rating & Content Classification seeded');
}
