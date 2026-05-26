// Data Dummy dan Kontrak Response dari Endpoint Backend

// ----------------------------------------------------------
// GET /rating
// Fields: id, title, image_url, summary, count
// ----------------------------------------------------------
export const ratings = [
  {
    id: 1,
    title: "3+",
    image_url: null,
    summary: "Konten sesuai untuk usia 3 tahun ke atas.",
    count: 134,
  },
  {
    id: 2,
    title: "7+",
    image_url: null,
    summary: "Konten sesuai untuk usia 7 tahun ke atas.",
    count: 98,
  },
  {
    id: 3,
    title: "13+",
    image_url: null,
    summary: "Konten sesuai untuk usia 13 tahun ke atas.",
    count: 76,
  },
  {
    id: 4,
    title: "15+",
    image_url: null,
    summary: "Konten sesuai untuk usia 15 tahun ke atas.",
    count: 34,
  },
  {
    id: 5,
    title: "18+",
    image_url: null,
    summary: "Konten hanya untuk orang dewasa usia 18 tahun ke atas.",
    count: 45,
  },
];

// ----------------------------------------------------------
// GET /rating/{id}
// Fields: id, title, description, image_url
// (Dibuat Array hanya untuk dummy FE, di response aslinya bukan array tetapi satu object)
// ----------------------------------------------------------
export const ratingDetail = [
  {
    id: 1,
    title: "3+",
    image_url: null,
    description:
      "Game dengan rating 3+ dirancang agar aman dimainkan oleh anak usia dini dan dapat diakses oleh seluruh anggota keluarga. Konten dalam kategori ini tidak mengandung unsur kekerasan, bahasa kasar, tema menakutkan, perjudian, ataupun konten yang berpotensi memberikan dampak negatif bagi perkembangan anak. Karakter dan visual biasanya disajikan dengan gaya ramah anak, penuh warna, serta berfokus pada edukasi, kreativitas, hiburan ringan, atau aktivitas sederhana yang mudah dipahami.",
  },
  {
    id: 2,
    title: "7+",
    image_url: null,
    description:
      "Game dengan rating 7+ ditujukan untuk anak usia sekolah dasar dan dapat mengandung unsur fantasi ringan atau situasi yang sedikit menegangkan. Kontennya mungkin menampilkan karakter kartun yang terlibat dalam konflik sederhana, efek visual yang tidak realistis, atau interaksi antar pemain yang terbatas. Meskipun masih tergolong aman untuk anak-anak, pendampingan orang tua tetap disarankan agar anak dapat memahami konteks permainan dengan baik.",
  },
  {
    id: 3,
    title: "13+",
    image_url: null,
    description:
      "Game dengan rating 13+ mengandung konten yang mungkin tidak sepenuhnya sesuai untuk anak di bawah usia 13 tahun. Kategori ini dapat mencakup kekerasan ringan hingga sedang, penggunaan bahasa yang sedikit kasar, tema emosional yang lebih kompleks, atau interaksi daring dengan pemain lain. Beberapa permainan juga dapat memperkenalkan unsur strategi, konflik, atau cerita yang membutuhkan tingkat pemahaman yang lebih matang. Orang tua disarankan untuk melakukan pendampingan dan memahami isi permainan sebelum diberikan kepada anak.",
  },
  {
    id: 4,
    title: "15+",
    image_url: null,
    description:
      "Game dengan rating 15+ ditujukan untuk remaja yang memiliki tingkat kedewasaan lebih tinggi. Kontennya dapat mencakup adegan kekerasan yang lebih intens, penggunaan bahasa yang lebih tegas, tema sosial atau emosional yang kompleks, serta situasi yang memerlukan penilaian dan pemahaman yang lebih matang. Beberapa permainan juga dapat menampilkan unsur kompetitif yang tinggi atau interaksi daring yang lebih luas. Disarankan agar orang tua atau wali tetap memperhatikan jenis konten yang diakses.",
  },
  {
    id: 5,
    title: "18+",
    image_url: null,
    description:
      "Game dengan rating 18+ secara khusus ditujukan untuk orang dewasa dan tidak direkomendasikan bagi anak-anak maupun remaja. Kontennya dapat mengandung kekerasan intens, bahasa vulgar, perjudian, penggunaan zat adiktif, tema sensitif, atau unsur seksual yang memerlukan tingkat kedewasaan penuh untuk dipahami secara tepat. Permainan dalam kategori ini sering kali menghadirkan pengalaman yang lebih realistis dan kompleks, sehingga pengguna disarankan memiliki pertimbangan serta tanggung jawab dalam mengakses kontennya.",
  },
];

// ----------------------------------------------------------
// GET /content-classification
// Fields: id, title, content_icon, description
// ----------------------------------------------------------
export const contentClassifications = [
  {
    id: 1,
    title: "Horor",
    content_icon: "Horor",
    description:
      "Konten yang mengandung unsur menakutkan, mengejutkan, atau suasana mencekam.",
  },
  {
    id: 2,
    title: "Interaksi Daring",
    content_icon: "InteraksiDaring",
    description:
      "Permainan yang memungkinkan interaksi antar pemain melalui fitur chat atau suara.",
  },
  {
    id: 3,
    title: "Penampilan Tokoh",
    content_icon: "PenampilanTokoh",
    description:
      "Penggambaran karakter yang mungkin mengandung unsur sugestif atau tidak sesuai usia.",
  },
  {
    id: 4,
    title: "Seksualitas/Pornografi",
    content_icon: "SeksualitasPornografi",
    description:
      "Penggambaran aktivitas seksual, ketelanjangan, atau konten berorientasi dewasa.",
  },
  {
    id: 5,
    title: "Kekerasan",
    content_icon: "Kekerasan",
    description:
      "Konten yang menampilkan aksi kekerasan fisik, penggunaan senjata, atau darah.",
  },
  {
    id: 6,
    title: "Bahasa Kasar",
    content_icon: "BahasaKasar",
    description: "Penggunaan kata-kata yang tidak sopan, umpatan, atau hinaan.",
  },
  {
    id: 7,
    title: "Simulasi Sosial",
    content_icon: "SimulasiSosial",
    description:
      "Penggambaran interaksi sosial yang kompleks yang membutuhkan kedewasaan.",
  },
  {
    id: 8,
    title: "Zat Adiktif & Alkohol",
    content_icon: "ZatAdiktifAlkohol",
    description:
      "Referensi atau penggunaan rokok, minuman keras, dan obat-obatan terlarang.",
  },
  {
    id: 9,
    title: "Perjudian",
    content_icon: "Perjudian",
    description:
      "Simulasi atau instruksi aktivitas perjudian di dalam permainan.",
  },
];

// ----------------------------------------------------------
// GET /game
// Fields: id, title, image_url, rating → { id, image_url }
// ----------------------------------------------------------
export const games = [
  {
    id: 1,
    title: "Subway Surfers",
    image_url: null,
    rating: { id: 1, image_url: null },
  },
  {
    id: 2,
    title: "Fruit Ninja",
    image_url: null,
    rating: { id: 1, image_url: null },
  },
  {
    id: 3,
    title: "EA Sports FC Mobile",
    image_url: null,
    rating: { id: 1, image_url: null },
  },
  {
    id: 4,
    title: "Dragon City",
    image_url: null,
    rating: { id: 2, image_url: null },
  },
  {
    id: 5,
    title: "Clash of Clans",
    image_url: null,
    rating: { id: 2, image_url: null },
  },
  {
    id: 6,
    title: "Pokémon GO",
    image_url: null,
    rating: { id: 2, image_url: null },
  },
  {
    id: 7,
    title: "Genshin Impact",
    image_url: null,
    rating: { id: 3, image_url: null },
  },
  {
    id: 8,
    title: "Fortnite",
    image_url: null,
    rating: { id: 3, image_url: null },
  },
  {
    id: 9,
    title: "Minecraft",
    image_url: null,
    rating: { id: 3, image_url: null },
  },
  {
    id: 10,
    title: "Mobile Legends: Bang Bang",
    image_url: null,
    rating: { id: 4, image_url: null },
  },
  {
    id: 11,
    title: "PUBG Mobile",
    image_url: null,
    rating: { id: 4, image_url: null },
  },
  {
    id: 12,
    title: "Valorant",
    image_url: null,
    rating: { id: 4, image_url: null },
  },
  {
    id: 13,
    title: "Grand Theft Auto Online",
    image_url: null,
    rating: { id: 5, image_url: null },
  },
  {
    id: 14,
    title: "Call of Duty: Warzone Mobile",
    image_url: null,
    rating: { id: 5, image_url: null },
  },
  {
    id: 15,
    title: "Mortal Kombat Mobile",
    image_url: null,
    rating: { id: 5, image_url: null },
  },
];

// ----------------------------------------------------------
// GET /game/{slug}
// Fields: id, title, slug, image_url, publisher, description, review_summary,
//         rating → { id, image_url },
//         content_classification → [{ id, content_icon }],
//         game_gallery → [{ id, image_url }]
//         (Dibuat Array hanya untuk dummy FE, di response aslinya bukan array tetapi satu object)
// ----------------------------------------------------------
export const gameDetail = [
  {
    id: 1,
    title: "Subway Surfers",
    slug: "subway-surfers",
    image_url: null,
    publisher: "Sybo Games",
    description:
      "Subway Surfers adalah permainan endless runner yang dimainkan dengan cara menghindari kereta dan rintangan sambil berlari sejauh mungkin di sepanjang rel kereta. Pemain mengumpulkan koin, power-up, dan berbagai item untuk meningkatkan skor.",
    review_summary:
      "Subway Surfers adalah permainan lari tanpa henti (endless runner) yang sepenuhnya aman untuk segala usia, termasuk anak-anak kecil. Seluruh kontennya disajikan dalam gaya kartun yang cerah dan menyenangkan, tanpa satu pun adegan yang dapat menakutkan atau membingungkan anak. Tidak ada kekerasan eksplisit, tidak ada interaksi dengan pemain lain secara langsung, tidak ada bahasa kasar, dan tidak ada konten dewasa dalam bentuk apa pun. Karakter-karakter dalam permainan digambarkan dengan ekspresi ceria dan kostum yang beragam namun tetap sesuai usia. Mekanisme permainan sepenuhnya berfokus pada refleks dan koordinasi, menjadikannya sarana latihan motorik yang menyenangkan. Satu-satunya hal yang perlu diperhatikan orang tua adalah keberadaan iklan dalam aplikasi gratis ini, yang kadang dapat menampilkan konten dari pihak ketiga.",
    rating: { id: 1, image_url: null },
    content_classification: [{ id: 2, content_icon: "InteraksiDaring" }],
    game_gallery: [
      { id: 1, image_url: null },
      { id: 2, image_url: null },
      { id: 3, image_url: null },
    ],
  },
  {
    id: 2,
    title: "Fruit Ninja",
    slug: "fruit-ninja",
    image_url: null,
    publisher: "Halfbrick Studios",
    description:
      "Fruit Ninja adalah permainan arcade kasual di mana pemain memotong buah-buahan yang dilempar ke udara menggunakan gerakan menggesek layar. Tersedia berbagai mode permainan termasuk Classic, Arcade, dan Zen.",
    review_summary:
      "Fruit Ninja adalah salah satu game mobile paling ramah anak yang pernah ada. Seluruh aksi dalam permainan berkisar pada memotong buah-buahan virtual yang penuh warna — semangka, nanas, mangga, dan sebagainya — menggunakan gerakan menggesek layar. Tidak ada karakter manusia yang terlibat dalam konflik, tidak ada narasi kekerasan, dan tidak ada tema yang dapat membingungkan anak kecil. Satu-satunya elemen yang mungkin memerlukan sedikit perhatian adalah bom yang sesekali muncul di antara buah-buahan, namun efek visualnya sangat kartun dan sama sekali tidak realistis. Permainan ini juga tidak memiliki fitur obrolan atau interaksi daring, sehingga anak dapat bermain dengan tenang tanpa risiko paparan konten eksternal. Desain audio dan visualnya yang semarak menjadikan Fruit Ninja pilihan ideal untuk anak usia dini.",
    rating: { id: 1, image_url: null },
    content_classification: null,
    game_gallery: [
      { id: 1, image_url: null },
      { id: 2, image_url: null },
      { id: 3, image_url: null },
    ],
  },
  {
    id: 3,
    title: "EA Sports FC Mobile",
    slug: "ea-sports-fc-mobile",
    image_url: null,
    publisher: "Electronic Arts",
    description:
      "EA Sports FC Mobile adalah game sepak bola resmi dari Electronic Arts yang memungkinkan pemain membangun tim impian, bertanding dalam berbagai mode, dan mengikuti event musiman yang terus diperbarui.",
    review_summary:
      "EA Sports FC Mobile adalah simulasi olahraga sepak bola yang ditujukan untuk seluruh kalangan usia. Konten utama permainan sepenuhnya berfokus pada pertandingan sepak bola virtual, pembangunan tim, dan kompetisi antar pemain yang bersifat sportif. Tidak ada kekerasan fisik yang ditampilkan secara eksplisit — seluruh kontak antar pemain disajikan dalam konteks olahraga yang wajar. Permainan ini memiliki fitur kompetisi daring yang memungkinkan pemain bersaing satu sama lain, namun tidak tersedia fitur obrolan teks bebas yang berpotensi membawa konten tidak pantas. Satu hal yang perlu diperhatikan orang tua adalah mekanisme Ultimate Team yang mengandung sistem pembukaan paket pemain (loot pack) — meskipun menggunakan mata uang virtual, mekanisme ini memiliki kemiripan dengan konsep perjudian karena hasilnya bersifat acak. Selain aspek tersebut, permainan ini sangat aman dan edukatif dalam hal strategi tim dan sportivitas.",
    rating: { id: 1, image_url: null },
    content_classification: [
      { id: 2, content_icon: "InteraksiDaring" },
      { id: 9, content_icon: "Perjudian" },
    ],
    game_gallery: [
      { id: 1, image_url: null },
      { id: 2, image_url: null },
      { id: 3, image_url: null },
    ],
  },
  {
    id: 4,
    title: "Dragon City",
    slug: "dragon-city",
    image_url: null,
    publisher: "Social Point (Take-Two Interactive)",
    description:
      "Dragon City adalah game simulasi dan strategi mobile di mana pemain membangun pulau naga, memelihara dan mengembangbiakkan ratusan jenis naga, serta bertarung melawan pemain lain dalam Dragon League.",
    review_summary:
      "Dragon City adalah permainan simulasi membangun kota bertema fantasi yang dirancang dengan gaya visual kartun yang cerah dan menarik, cocok untuk anak-anak usia sekolah dasar ke atas. Inti permainan berpusat pada kegiatan mengumpulkan, mengembangbiakkan, dan melatih berbagai jenis naga yang unik — sebuah mekanisme yang melatih kesabaran, perencanaan, dan manajemen sumber daya secara menyenangkan. Pertempuran antar naga disajikan dalam format yang sangat terstilisasi tanpa darah atau cedera fisik yang grafis. Terdapat elemen interaksi daring melalui mode liga dan event bersama yang memungkinkan pemain berinteraksi dengan komunitas global, sehingga orang tua disarankan untuk mendampingi anak dalam mengelola aktivitas sosial dalam permainan. Sistem pengembangbiakan naga yang bersifat acak memiliki kemiripan konseptual dengan mekanisme gacha, meskipun tidak secara langsung melibatkan transaksi berbayar untuk setiap percobaan. Secara keseluruhan, Dragon City adalah permainan yang positif dan melatih kreativitas serta strategi bagi pemain muda.",
    rating: { id: 2, image_url: null },
    content_classification: [
      { id: 5, content_icon: "Kekerasan" },
      { id: 2, content_icon: "InteraksiDaring" },
    ],
    game_gallery: [
      { id: 1, image_url: null },
      { id: 2, image_url: null },
      { id: 3, image_url: null },
    ],
  },
  {
    id: 5,
    title: "Clash of Clans",
    slug: "clash-of-clans",
    image_url: null,
    publisher: "Supercell",
    description:
      "Clash of Clans adalah game strategi mobile di mana pemain membangun desa, melatih pasukan, dan menyerang desa pemain lain untuk mendapatkan sumber daya. Pemain juga dapat bergabung dalam klan untuk berpartisipasi dalam Clan Wars.",
    review_summary:
      "Clash of Clans adalah permainan strategi berbasis pembangunan desa yang dirancang dengan gaya visual kartun yang ramah dan tidak mengancam. Meskipun inti permainan melibatkan serangan dan pertahanan antar desa, seluruh konflik disajikan dalam format yang sangat terstilisasi — tidak ada darah, tidak ada kekerasan grafis, dan tidak ada korban yang ditampilkan secara dramatis. Permainan ini justru sangat efektif dalam melatih kemampuan berpikir taktis dan strategis anak, mulai dari perencanaan tata letak bangunan hingga komposisi pasukan. Fitur klan memungkinkan pemain bergabung dengan komunitas dan berkomunikasi melalui fitur obrolan terbatas, sehingga orang tua disarankan untuk memantau dengan siapa anak berinteraksi. Tidak ada konten yang mempromosikan kekerasan nyata, bahasa kasar, atau tema yang tidak sesuai usia.",
    rating: { id: 2, image_url: null },
    content_classification: [
      { id: 5, content_icon: "Kekerasan" },
      { id: 2, content_icon: "InteraksiDaring" },
    ],
    game_gallery: [
      { id: 1, image_url: null },
      { id: 2, image_url: null },
      { id: 3, image_url: null },
    ],
  },
  {
    id: 6,
    title: "Pokémon GO",
    slug: "pokemon-go",
    image_url: null,
    publisher: "Niantic",
    description:
      "Pokémon GO adalah game augmented reality (AR) di mana pemain menjelajahi dunia nyata untuk menangkap Pokémon, bertarung di Gym, dan berpartisipasi dalam Raid Battle bersama pemain lain.",
    review_summary:
      "Pokémon GO adalah permainan augmented reality yang mendorong pemain untuk bergerak aktif di dunia nyata sambil menangkap dan melatih Pokémon. Konsep dasar permainan ini sangat positif — mengajak pemain berjalan kaki, mengeksplorasi lingkungan sekitar, dan bersosialisasi dengan komunitas lokal. Konten pertempuran dalam permainan bersifat sangat ringan dan tidak mengandung kekerasan yang dapat mengganggu anak-anak; Pokémon yang kalah hanya pingsan, bukan terluka secara grafis. Permainan ini memiliki fitur interaksi daring seperti raid multiplayer dan trading, yang dalam penggunaan bersama teman atau komunitas yang dikenal sangat menyenangkan. Namun, orang tua perlu memperhatikan aspek keamanan fisik anak saat bermain di luar ruangan, serta memantau aktivitas perdagangan Pokémon agar tidak berinteraksi dengan orang asing yang tidak dikenal.",
    rating: { id: 2, image_url: null },
    content_classification: [
      { id: 2, content_icon: "InteraksiDaring" },
      { id: 5, content_icon: "Kekerasan" },
    ],
    game_gallery: [
      { id: 1, image_url: null },
      { id: 2, image_url: null },
      { id: 3, image_url: null },
    ],
  },
  {
    id: 7,
    title: "Genshin Impact",
    slug: "genshin-impact",
    image_url: null,
    publisher: "HoYoverse",
    description:
      "Genshin Impact adalah action RPG open-world dengan sistem elemental combat yang mendalam. Pemain menjelajahi dunia Teyvat, membangun tim dari berbagai karakter dengan kemampuan unik, dan mengungkap cerita epik yang terus berkembang melalui update reguler.",
    review_summary:
      "Genshin Impact adalah permainan RPG aksi bertema fantasi dengan dunia terbuka yang luas dan narasi yang kaya. Permainan ini menampilkan sistem pertarungan berbasis elemen — api, air, angin, petir, es, batu, dan sebagainya — yang secara visual menakjubkan namun tidak mengandung kekerasan realistis. Musuh yang dikalahkan menghilang dengan efek partikel, bukan dengan darah atau luka yang grafis. Beberapa karakter dalam permainan digambarkan dengan kostum yang cukup memperlihatkan lekuk tubuh, terutama karakter wanita, yang mungkin tidak sepenuhnya sesuai untuk anak di bawah usia 13 tahun. Permainan ini memiliki sistem gacha (loot box) untuk mendapatkan karakter dan senjata baru yang bersifat acak, yang secara konseptual menyerupai mekanisme perjudian dan dapat mendorong pengeluaran berlebihan jika tidak dikontrol. Narasi permainan cukup kompleks dan emosional, termasuk tema kehilangan, pengorbanan, dan konflik moral yang membutuhkan tingkat pemahaman yang lebih matang.",
    rating: { id: 3, image_url: null },
    content_classification: [
      { id: 3, content_icon: "PenampilanTokoh" },
      { id: 9, content_icon: "Perjudian" },
      { id: 2, content_icon: "InteraksiDaring" },
    ],
    game_gallery: [
      { id: 1, image_url: null },
      { id: 2, image_url: null },
      { id: 3, image_url: null },
    ],
  },
  {
    id: 8,
    title: "Fortnite",
    slug: "fortnite",
    image_url: null,
    publisher: "Epic Games",
    description:
      "Fortnite adalah game battle royale yang mempertemukan hingga 100 pemain dalam sebuah pulau untuk bertahan hidup. Keunikan Fortnite terletak pada mekanisme membangun struktur dari material yang dikumpulkan selama pertandingan.",
    review_summary:
      "Fortnite adalah game battle royale yang menggabungkan aksi tembak-menembak dengan mekanisme membangun unik. Meskipun inti permainan melibatkan eliminasi pemain lain, seluruh kontennya disajikan dalam gaya visual kartun yang jauh dari kesan realistis — tidak ada darah, tidak ada cedera fisik yang grafis, dan karakter yang dieliminasi sekadar menghilang dari arena. Permainan ini sangat populer di kalangan remaja dan memiliki komunitas yang besar secara global. Fitur komunikasi suara dan teks tersedia luas, yang berarti pemain dapat berinteraksi dengan pemain asing dari seluruh dunia — aspek ini perlu menjadi perhatian utama orang tua karena potensi paparan bahasa tidak pantas atau interaksi yang tidak sesuai usia. Konten kolaborasi dengan merek dan karakter populer (film, musik, olahraga) sering hadir dalam bentuk skin berbayar, yang dapat mendorong tekanan sosial untuk membeli item kosmetik.",
    rating: { id: 3, image_url: null },
    content_classification: [
      { id: 5, content_icon: "Kekerasan" },
      { id: 2, content_icon: "InteraksiDaring" },
      { id: 6, content_icon: "BahasaKasar" },
    ],
    game_gallery: [
      { id: 1, image_url: null },
      { id: 2, image_url: null },
      { id: 3, image_url: null },
    ],
  },
  {
    id: 9,
    title: "Minecraft",
    slug: "minecraft",
    image_url: null,
    publisher: "Mojang Studios (Microsoft)",
    description:
      "Minecraft adalah game sandbox yang memungkinkan pemain membangun dan menjelajahi dunia yang terbuat dari blok tiga dimensi. Tersedia dalam mode Survival, Creative, Adventure, dan berbagai mode lainnya dengan kebebasan eksplorasi yang hampir tak terbatas.",
    review_summary:
      "Minecraft adalah salah satu game paling kreatif dan edukatif yang pernah ada, namun tetap memiliki beberapa elemen yang perlu diperhatikan sebelum dimainkan oleh anak-anak di bawah 13 tahun. Mode Survival menghadirkan sistem pertarungan melawan monster seperti Creeper, Zombie, dan Skeleton yang dapat muncul di malam hari — konten ini ringan secara visual namun bisa cukup menegangkan bagi anak yang lebih kecil. Mode Creative sepenuhnya bebas dari konflik dan sangat direkomendasikan untuk anak-anak muda yang ingin mengekspresikan kreativitas. Permainan ini mendukung server multiplayer publik yang memungkinkan interaksi dengan pemain dari seluruh dunia, dan beberapa server tidak dimoderasi dengan baik sehingga dapat mengandung konten atau percakapan yang tidak sesuai usia. Secara keseluruhan, Minecraft adalah alat belajar yang luar biasa — mengajarkan logika, matematika spasial, arsitektur, hingga dasar pemrograman melalui fitur Redstone.",
    rating: { id: 3, image_url: null },
    content_classification: [{ id: 2, content_icon: "InteraksiDaring" }],
    game_gallery: [
      { id: 1, image_url: null },
      { id: 2, image_url: null },
      { id: 3, image_url: null },
    ],
  },
  {
    id: 10,
    title: "Mobile Legends: Bang Bang",
    slug: "mobile-legends-bang-bang",
    image_url: null,
    publisher: "Moonton (ByteDance)",
    description:
      "Mobile Legends: Bang Bang adalah game MOBA (Multiplayer Online Battle Arena) di mana dua tim beranggotakan lima pemain saling berhadapan untuk menghancurkan base lawan. Pemain memilih hero dengan kemampuan unik dan bekerja sama secara strategis untuk memenangkan pertandingan.",
    review_summary:
      "Mobile Legends: Bang Bang adalah game MOBA kompetitif yang dirancang untuk pemain remaja dan dewasa muda. Permainan ini menampilkan pertempuran tim real-time yang intens dengan berbagai hero yang memiliki kemampuan unik — mulai dari serangan sihir, senjata jarak jauh, hingga pertarungan jarak dekat yang dinamis. Konten kekerasan hadir dalam bentuk efek skill yang dramatis dan animasi pertempuran yang cukup intens, meskipun tidak sampai menampilkan darah secara realistis. Beberapa hero wanita dalam permainan digambarkan dengan kostum yang cukup minim dan pose yang sugestif, yang menjadikan aspek penampilan tokoh sebagai salah satu pertimbangan utama untuk pemain yang lebih muda. Lingkungan kompetitif yang tinggi dalam game ini juga berpotensi menghasilkan interaksi tidak sehat antar pemain, termasuk verbal abuse dan toxic behavior melalui fitur chat dalam pertandingan. Permainan ini membutuhkan koordinasi tim, pemahaman strategi, dan kecepatan reaksi yang tinggi, sehingga lebih cocok untuk remaja yang sudah memiliki kematangan sosial yang cukup.",
    rating: { id: 4, image_url: null },
    content_classification: [
      { id: 2, content_icon: "InteraksiDaring" },
      { id: 3, content_icon: "PenampilanTokoh" },
      { id: 6, content_icon: "BahasaKasar" },
    ],
    game_gallery: [
      { id: 1, image_url: null },
      { id: 2, image_url: null },
      { id: 3, image_url: null },
    ],
  },
  {
    id: 11,
    title: "PUBG Mobile",
    slug: "pubg-mobile",
    image_url: null,
    publisher: "Krafton / Tencent Games",
    description:
      "PUBG Mobile adalah game battle royale berbasis tembak-menembak realistis di mana 100 pemain diturunkan di sebuah pulau dan harus bertahan hidup hingga menjadi yang terakhir tersisa. Permainan menampilkan senjata api realistis, kendaraan, dan taktik militer.",
    review_summary:
      "PUBG Mobile adalah game battle royale dengan presentasi grafis yang jauh lebih realistis dibandingkan game sejenis. Permainan ini menampilkan simulasi tembak-menembak menggunakan senjata api militer yang direpresentasikan secara detail — mulai dari mekanisme recoil, tipe peluru, hingga efek suara tembakan yang realistis. Ketika karakter lawan dieliminasi, terdapat animasi jatuh dan ragdoll effect yang lebih nyata dibandingkan game-game kartun, meskipun darah ditampilkan secara minimal. Nuansa militer yang kuat dalam permainan ini — termasuk penggunaan granat, kendaraan tempur, dan taktik pengepungan — menciptakan pengalaman yang secara psikologis lebih intens dan menegangkan. Komunikasi antar pemain melalui voice chat aktif selama pertandingan, yang berarti pemain dapat mendengar percakapan dari pemain asing yang mungkin menggunakan bahasa kasar. Permainan ini cocok untuk remaja di atas 15 tahun yang sudah dapat memahami konteks simulasi militer dan membedakannya dari realita.",
    rating: { id: 4, image_url: null },
    content_classification: [
      { id: 5, content_icon: "Kekerasan" },
      { id: 2, content_icon: "InteraksiDaring" },
      { id: 6, content_icon: "BahasaKasar" },
    ],
    game_gallery: [
      { id: 1, image_url: null },
      { id: 2, image_url: null },
      { id: 3, image_url: null },
    ],
  },
  {
    id: 12,
    title: "Valorant",
    slug: "valorant",
    image_url: null,
    publisher: "Riot Games",
    description:
      "Valorant adalah game first-person shooter (FPS) taktis 5v5 yang menggabungkan mekanisme tembak-menembak presisi tinggi dengan kemampuan unik setiap agen. Dua tim bergantian menyerang dan bertahan dalam ronde-ronde yang membutuhkan koordinasi dan komunikasi tim yang baik.",
    review_summary:
      "Valorant adalah game FPS taktis yang dirancang dengan fokus pada skill mekanis tingkat tinggi dan koordinasi tim. Meskipun berbasis tembak-menembak, presentasi visualnya menggunakan gaya semi-realistis yang tidak menampilkan darah secara eksplisit dalam pengaturan default — ketika musuh dieliminasi, karakter sekadar roboh tanpa efek gore yang berlebihan. Namun demikian, tema dan nuansa permainan jelas bersifat militer dan ditujukan untuk pemain yang sudah cukup matang. Setiap agen dalam permainan memiliki kemampuan unik yang dapat menimbulkan efek lingkungan seperti api, asap, atau listrik yang dramatis secara visual. Beberapa agen wanita digambarkan dengan desain kostum yang cukup menonjolkan penampilan fisik. Komunikasi antar pemain melalui voice chat bersifat esensial dalam permainan ini dan sepenuhnya terbuka, sehingga paparan bahasa kasar atau perilaku toxic dari pemain lain sangat mungkin terjadi. Lingkungan ranked yang kompetitif juga dapat memicu tekanan psikologis yang signifikan.",
    rating: { id: 4, image_url: null },
    content_classification: [
      { id: 5, content_icon: "Kekerasan" },
      { id: 2, content_icon: "InteraksiDaring" },
      { id: 6, content_icon: "BahasaKasar" },
    ],
    game_gallery: [
      { id: 1, image_url: null },
      { id: 2, image_url: null },
      { id: 3, image_url: null },
    ],
  },
  {
    id: 13,
    title: "Grand Theft Auto Online",
    slug: "grand-theft-auto-online",
    image_url: null,
    publisher: "Rockstar Games",
    description:
      "Grand Theft Auto Online adalah mode multiplayer dari GTA V yang memungkinkan pemain menjelajahi dunia terbuka kota Los Santos bersama pemain lain dari seluruh dunia. Pemain dapat menjalankan bisnis kriminal, merampok bank, balapan, hingga berperang bebas dalam dunia yang terus berkembang.",
    review_summary:
      "Grand Theft Auto Online adalah salah satu game dengan konten paling dewasa yang tersedia di platform konsol dan PC. Dunia permainan ini dibangun di atas fondasi kriminalitas urban yang mendetail — pemain dapat merampok toko, membunuh karakter NPC sipil, menggunakan dan memperdagangkan narkoba dalam konteks bisnis virtual, mengunjungi klub strip, dan melakukan berbagai tindakan yang secara eksplisit menggambarkan kejahatan. Konten kekerasan ditampilkan dengan grafis yang sangat realistis, termasuk efek darah, animasi kematian yang detail, dan ragdoll physics yang dramatis. Bahasa yang digunakan dalam konten narasi maupun komunitas pemain sangat kasar dan tidak tersensor. Permainan ini juga memiliki sistem perjudian dalam bentuk kasino virtual yang dapat dimainkan menggunakan mata uang dalam game yang dibeli dengan uang nyata. Interaksi dengan pemain lain bersifat sepenuhnya bebas, termasuk kemungkinan diserang secara tiba-tiba oleh pemain lain tanpa provokasi. Konten ini secara tegas hanya diperuntukkan bagi orang dewasa yang dapat memahami sifat fiksi dan hiburan dari seluruh elemen dalam permainan.",
    rating: { id: 5, image_url: null },
    content_classification: [
      { id: 5, content_icon: "Kekerasan" },
      { id: 6, content_icon: "BahasaKasar" },
      { id: 4, content_icon: "SeksualitasPornografi" },
    ],
    game_gallery: [
      { id: 1, image_url: null },
      { id: 2, image_url: null },
      { id: 3, image_url: null },
    ],
  },
  {
    id: 14,
    title: "Call of Duty: Warzone Mobile",
    slug: "call-of-duty-warzone-mobile",
    image_url: null,
    publisher: "Activision",
    description:
      "Call of Duty: Warzone Mobile adalah versi mobile dari game battle royale populer Warzone yang menghadirkan pengalaman tembak-menembak militer realistis dengan grafis konsol-level di platform smartphone. Menampilkan peta ikonik Verdansk dengan kapasitas hingga 120 pemain per pertandingan.",
    review_summary:
      "Call of Duty: Warzone Mobile menghadirkan pengalaman tempur militer yang sangat realistis dan intens ke platform mobile. Seluruh aspek visual dirancang untuk semirip mungkin dengan realita militer modern — persenjataan digambarkan secara akurat berdasarkan senjata militer nyata, animasi penembakan terasa autentik, dan efek lingkungan seperti ledakan serta kehancuran bangunan disajikan dengan sangat detail. Konten kekerasan dalam permainan ini termasuk yang paling eksplisit di antara game mobile yang tersedia — karakter yang terkena tembakan menunjukkan reaksi fisik yang realistis, dan opsi gore effect dapat mengaktifkan tampilan darah yang lebih nyata. Permainan ini sarat dengan bahasa militer yang keras dan komunikasi voice chat antar pemain yang tidak terfilter, membuka kemungkinan paparan bahasa kasar secara luas. Nuansa dan tema permainan secara keseluruhan — bertempur untuk bertahan hidup dalam skenario perang taktis — dirancang untuk dan hanya sesuai bagi pemain dewasa yang matang secara emosional.",
    rating: { id: 5, image_url: null },
    content_classification: [
      { id: 5, content_icon: "Kekerasan" },
      { id: 2, content_icon: "InteraksiDaring" },
      { id: 6, content_icon: "BahasaKasar" },
    ],
    game_gallery: [
      { id: 1, image_url: null },
      { id: 2, image_url: null },
      { id: 3, image_url: null },
    ],
  },
  {
    id: 15,
    title: "Mortal Kombat Mobile",
    slug: "mortal-kombat-mobile",
    image_url: null,
    publisher: "NetherRealm Studios / Warner Bros. Games",
    description:
      "Mortal Kombat Mobile adalah game fighting berbasis kartu yang mengadaptasi franchise Mortal Kombat ke platform mobile. Pemain mengumpulkan dan meningkatkan karakter ikonik dari seri Mortal Kombat untuk bertarung dalam berbagai mode pertempuran.",
    review_summary:
      "Mortal Kombat Mobile adalah adaptasi dari franchise fighting game yang sudah lama dikenal dengan konten kekerasannya yang sangat eksplisit. Meskipun versi mobile menyederhanakan beberapa elemen dibandingkan versi konsol, permainan ini tetap mempertahankan identitas utama seri Mortal Kombat — yaitu pertarungan yang brutal dengan gerakan finishing yang disebut 'Fatality'. Animasi pertarungan menampilkan aksi kekerasan fisik yang intens termasuk pukulan keras, tendangan, dan serangan menggunakan senjata yang disajikan dengan efek visual yang dramatis. Beberapa karakter memiliki kostum yang sangat minim dan penampilan fisik yang sangat ditonjolkan, baik karakter pria maupun wanita. Tema keseluruhan permainan berkisar pada pertempuran antar dimensi dengan elemen supernatural yang gelap dan beberapa momen yang cukup disturbing secara visual. Dengan sejarah panjang sebagai game yang menjadi salah satu alasan utama terbentuknya lembaga rating ESRB, Mortal Kombat dalam segala bentuknya hanya direkomendasikan untuk pemain dewasa yang telah memahami sifat hiburan fiksi dari konten kekerasan tersebut.",
    rating: { id: 5, image_url: null },
    content_classification: [
      { id: 5, content_icon: "Kekerasan" },
      { id: 3, content_icon: "PenampilanTokoh" },
      { id: 1, content_icon: "Horor" },
    ],
    game_gallery: [
      { id: 1, image_url: null },
      { id: 2, image_url: null },
      { id: 3, image_url: null },
    ],
  },
];

// ----------------------------------------------------------
// GET /blog
// Fields: id, title, description, image_url, date
// ----------------------------------------------------------
export const blogs = [
  {
    id: 1,
    title: "Pemberitahuan Terkait Proses Verifikasi IGRS",
    description:
      "Informasi terbaru mengenai proses verifikasi IGRS, termasuk tahapan peninjauan, evaluasi konten, dan estimasi waktu yang diperlukan untuk menyelesaikan proses klasifikasi game.",
    image_url: null,
    date: "2026-05-15",
  },
  {
    id: 2,
    title: "Panduan Aplikasi Konten IGRS Untuk Developer",
    description:
      "Panduan lengkap bagi developer untuk mengajukan klasifikasi game melalui sistem IGRS, mulai dari proses registrasi, pengisian data, hingga pengiriman konten untuk ditinjau.",
    image_url: null,
    date: "2026-05-14",
  },
  {
    id: 3,
    title: "Gim Terbaru di IGRS",
    description:
      "Daftar gim terbaru yang telah masuk ke dalam sistem IGRS beserta informasi terkait klasifikasi usia dan kategori konten yang telah ditetapkan.",
    image_url: null,
    date: "2026-05-13",
  },
];
