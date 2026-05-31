import { PrismaClient } from '@prisma/client';

export async function seedGames(prisma) {
  const games = [
    {
      id: 1,
      title: "Subway Surfers",
      slug: "subway-surfers",
      image_url: "https://placehold.co/300x200",
      release_year: 2012,
      publisher: "Sybo Games",
      description: "Subway Surfers adalah permainan endless runner yang dimainkan dengan cara menghindari kereta dan rintangan sambil berlari sejauh mungkin di sepanjang rel kereta. Pemain mengumpulkan koin, power-up, dan berbagai item untuk meningkatkan skor.",
      review_summary: "Subway Surfers adalah permainan lari tanpa henti (endless runner) yang sepenuhnya aman untuk segala usia, termasuk anak-anak kecil. Seluruh kontennya disajikan dalam gaya kartun yang cerah dan menyenangkan, tanpa satu pun adegan yang dapat menakutkan atau membingungkan anak. Tidak ada kekerasan eksplisit, tidak ada interaksi dengan pemain lain secara langsung, tidak ada bahasa kasar, dan tidak ada konten dewasa dalam bentuk apa pun. Karakter-karakter dalam permainan digambarkan dengan ekspresi ceria dan kostum yang beragam namun tetap sesuai usia. Mekanisme permainan sepenuhnya berfokus pada refleks dan koordinasi, menjadikannya sarana latihan motorik yang menyenangkan. Satu-satunya hal yang perlu diperhatikan orang tua adalah keberadaan iklan dalam aplikasi gratis ini, yang kadang dapat menampilkan konten dari pihak ketiga.",
      rating_id: 1
    },
    {
      id: 2,
      title: "Fruit Ninja",
      slug: "fruit-ninja",
      image_url: "https://placehold.co/300x200",
      release_year: 2010,
      publisher: "Halfbrick Studios",
      description: "Fruit Ninja adalah permainan arcade kasual di mana pemain memotong buah-buahan yang dilempar ke udara menggunakan gerakan menggesek layar. Tersedia berbagai mode permainan termasuk Classic, Arcade, dan Zen.",
      review_summary: "Fruit Ninja adalah salah satu game mobile paling ramah anak yang pernah ada. Seluruh aksi dalam permainan berkisar pada memotong buah-buahan virtual yang penuh warna — semangka, nanas, mangga, dan sebagainya — menggunakan gerakan menggesek layar. Tidak ada karakter manusia yang terlibat dalam konflik, tidak ada narasi kekerasan, dan tidak ada tema yang dapat membingungkan anak kecil. Satu-satunya elemen yang mungkin memerlukan sedikit perhatian adalah bom yang sesekali muncul di antara buah-buahan, namun efek visualnya sangat kartun dan sama sekali tidak realistis. Permainan ini juga tidak memiliki fitur obrolan atau interaksi daring, sehingga anak dapat bermain dengan tenang tanpa risiko paparan konten eksternal. Desain audio dan visualnya yang semarak menjadikan Fruit Ninja pilihan ideal untuk anak usia dini.",
      rating_id: 1
    },
    {
      id: 3,
      title: "EA Sports FC Mobile",
      slug: "ea-sports-fc-mobile",
      image_url: "https://placehold.co/300x200",
      release_year: 2016,
      publisher: "Electronic Arts",
      description: "EA Sports FC Mobile adalah game sepak bola resmi dari Electronic Arts yang memungkinkan pemain membangun tim impian, bertanding dalam berbagai mode, dan mengikuti event musiman yang terus diperbarui.",
      review_summary: "EA Sports FC Mobile adalah simulasi olahraga sepak bola yang ditujukan untuk seluruh kalangan usia. Konten utama permainan sepenuhnya berfokus pada pertandingan sepak bola virtual, pembangunan tim, dan kompetisi antar pemain yang bersifat sportif. Tidak ada kekerasan fisik yang ditampilkan secara eksplisit — seluruh kontak antar pemain disajikan dalam konteks olahraga yang wajar. Permainan ini memiliki fitur kompetisi daring yang memungkinkan pemain bersaing satu sama lain, namun tidak tersedia fitur obrolan teks bebas yang berpotensi membawa konten tidak pantas. Satu hal yang perlu diperhatikan orang tua adalah mekanisme Ultimate Team yang mengandung sistem pembukaan paket pemain (loot pack) — meskipun menggunakan mata uang virtual, mekanisme ini memiliki kemiripan dengan konsep perjudian karena hasilnya bersifat acak. Selain aspek tersebut, permainan ini sangat aman dan edukatif dalam hal strategi tim dan sportivitas.",
      rating_id: 1
    },
    {
      id: 4,
      title: "Dragon City",
      slug: "dragon-city",
      image_url: "https://placehold.co/300x200",
      release_year: 2012,
      publisher: "Social Point (Take-Two Interactive)",
      description: "Dragon City adalah game simulasi dan strategi mobile di mana pemain membangun pulau naga, memelihara dan mengembangbiakkan ratusan jenis naga, serta bertarung melawan pemain lain dalam Dragon League.",
      review_summary: "Dragon City adalah permainan simulasi membangun kota bertema fantasi yang dirancang dengan gaya visual kartun yang cerah dan menarik, cocok untuk anak-anak usia sekolah dasar ke atas. Inti permainan berpusat pada kegiatan mengumpulkan, mengembangbiakkan, dan melatih berbagai jenis naga yang unik — sebuah mekanisme yang melatih kesabaran, perencanaan, dan manajemen sumber daya secara menyenangkan. Pertempuran antar naga disajikan dalam format yang sangat terstilisasi tanpa darah atau cedera fisik yang grafis. Terdapat elemen interaksi daring melalui mode liga dan event bersama yang memungkinkan pemain berinteraksi dengan komunitas global, sehingga orang tua disarankan untuk mendampingi anak dalam mengelola aktivitas sosial dalam permainan. Sistem pengembangbiakan naga yang bersifat acak memiliki kemiripan konseptual dengan mekanisme gacha, meskipun tidak secara langsung melibatkan transaksi berbayar untuk setiap percobaan. Secara keseluruhan, Dragon City adalah permainan yang positif dan melatih kreativitas serta strategi bagi pemain muda.",
      rating_id: 2
    },
    {
      id: 5,
      title: "Clash of Clans",
      slug: "clash-of-clans",
      image_url: "https://placehold.co/300x200",
      release_year: 2012,
      publisher: "Supercell",
      description: "Clash of Clans adalah game strategi mobile di mana pemain membangun desa, melatih pasukan, dan menyerang desa pemain lain untuk mendapatkan sumber daya. Pemain juga dapat bergabung dalam klan untuk berpartisipasi dalam Clan Wars.",
      review_summary: "Clash of Clans adalah permainan strategi berbasis pembangunan desa yang dirancang dengan gaya visual kartun yang ramah dan tidak mengancam. Meskipun inti permainan melibatkan serangan dan pertahanan antar desa, seluruh konflik disajikan dalam format yang sangat terstilisasi — tidak ada darah, tidak ada kekerasan grafis, dan tidak ada korban yang ditampilkan secara dramatis. Permainan ini justru sangat efektif dalam melatih kemampuan berpikir taktis dan strategis anak, mulai dari perencanaan tata letak bangunan hingga komposisi pasukan. Fitur klan memungkinkan pemain bergabung dengan komunitas dan berkomunikasi melalui fitur obrolan terbatas, sehingga orang tua disarankan untuk memantau dengan siapa anak berinteraksi. Tidak ada konten yang mempromosikan kekerasan nyata, bahasa kasar, atau tema yang tidak sesuai usia.",
      rating_id: 2
    },
    {
      id: 6,
      title: "Pokémon GO",
      slug: "pokemon-go",
      image_url: "https://placehold.co/300x200",
      release_year: 2016,
      publisher: "Niantic",
      description: "Pokémon GO adalah game augmented reality (AR) di mana pemain menjelajahi dunia nyata untuk menangkap Pokémon, bertarung di Gym, dan berpartisipasi dalam Raid Battle bersama pemain lain.",
      review_summary: "Pokémon GO adalah permainan augmented reality yang mendorong pemain untuk bergerak aktif di dunia nyata sambil menangkap dan melatih Pokémon. Konsep dasar permainan ini sangat positif — mengajak pemain berjalan kaki, mengeksplorasi lingkungan sekitar, dan bersosialisasi dengan komunitas lokal. Konten pertempuran dalam permainan bersifat sangat ringan dan tidak mengandung kekerasan yang dapat mengganggu anak-anak; Pokémon yang kalah hanya pingsan, bukan terluka secara grafis. Permainan ini memiliki fitur interaksi daring seperti raid multiplayer dan trading, yang dalam penggunaan bersama teman atau komunitas yang dikenal sangat menyenangkan. Namun, orang tua perlu memperhatikan aspek keamanan fisik anak saat bermain di luar ruangan, serta memantau aktivitas perdagangan Pokémon agar tidak berinteraksi dengan orang asing yang tidak dikenal.",
      rating_id: 2
    },
    {
      id: 7,
      title: "Genshin Impact",
      slug: "genshin-impact",
      image_url: "https://placehold.co/300x200",
      release_year: 2020,
      publisher: "HoYoverse",
      description: "Genshin Impact adalah action RPG open-world dengan sistem elemental combat yang mendalam. Pemain menjelajahi dunia Teyvat, membangun tim dari berbagai karakter dengan kemampuan unik, dan mengungkap cerita epik yang terus berkembang melalui update reguler.",
      review_summary: "Genshin Impact adalah permainan RPG aksi bertema fantasi dengan dunia terbuka yang luas dan narasi yang kaya. Permainan ini menampilkan sistem pertarungan berbasis elemen — api, air, angin, petir, es, batu, dan sebagainya — yang secara visual menakjubkan namun tidak mengandung kekerasan realistis. Musuh yang dikalahkan menghilang dengan efek partikel, bukan dengan darah atau luka yang grafis. Beberapa karakter dalam permainan digambarkan dengan kostum yang cukup memperlihatkan lekuk tubuh, terutama karakter wanita, yang mungkin tidak sepenuhnya sesuai untuk anak di bawah usia 13 tahun. Permainan ini memiliki sistem gacha (loot box) untuk mendapatkan karakter dan senjata baru yang bersifat acak, yang secara konseptual menyerupai mekanisme perjudian dan dapat mendorong pengeluaran berlebihan jika tidak dikontrol. Narasi permainan cukup kompleks dan emosional, termasuk tema kehilangan, pengorbanan, dan konflik moral yang membutuhkan tingkat pemahaman yang lebih matang.",
      rating_id: 3
    },
    {
      id: 8,
      title: "Fortnite",
      slug: "fortnite",
      image_url: "https://placehold.co/300x200",
      release_year: 2017,
      publisher: "Epic Games",
      description: "Fortnite adalah game battle royale yang mempertemukan hingga 100 pemain dalam sebuah pulau untuk bertahan hidup. Keunikan Fortnite terletak pada mekanisme membangun struktur dari material yang dikumpulkan selama pertandingan.",
      review_summary: "Fortnite adalah game battle royale yang menggabungkan aksi tembak-menembak dengan mekanisme membangun unik. Meskipun inti permainan melibatkan eliminasi pemain lain, seluruh kontennya disajikan dalam gaya visual kartun yang jauh dari kesan realistis — tidak ada darah, tidak ada cedera fisik yang grafis, dan karakter yang dieliminasi sekadar menghilang dari arena. Permainan ini sangat populer di kalangan remaja dan memiliki komunitas yang besar secara global. Fitur komunikasi suara dan teks tersedia luas, yang berarti pemain dapat berinteraksi dengan pemain asing dari seluruh dunia — aspek ini perlu menjadi perhatian utama orang tua karena potensi paparan bahasa tidak pantas atau interaksi yang tidak sesuai usia. Konten kolaborasi dengan merek dan karakter populer (film, musik, olahraga) sering hadir dalam bentuk skin berbayar, yang dapat mendorong tekanan sosial untuk membeli item kosmetik.",
      rating_id: 3
    },
    {
      id: 9,
      title: "Minecraft",
      slug: "minecraft",
      image_url: "https://placehold.co/300x200",
      release_year: 2011,
      publisher: "Mojang Studios (Microsoft)",
      description: "Minecraft adalah game sandbox yang memungkinkan pemain membangun dan menjelajahi dunia yang terbuat dari blok tiga dimensi. Tersedia dalam mode Survival, Creative, Adventure, dan berbagai mode lainnya dengan kebebasan eksplorasi yang hampir tak terbatas.",
      review_summary: "Minecraft adalah salah satu game paling kreatif dan edukatif yang pernah ada, namun tetap memiliki beberapa elemen yang perlu diperhatikan sebelum dimainkan oleh anak-anak di bawah 13 tahun. Mode Survival menghadirkan sistem pertarungan melawan monster seperti Creeper, Zombie, dan Skeleton yang dapat muncul di malam hari — konten ini ringan secara visual namun bisa cukup menegangkan bagi anak yang lebih kecil. Mode Creative sepenuhnya bebas dari konflik dan sangat direkomendasikan untuk anak-anak muda yang ingin mengekspresikan kreativitas. Permainan ini mendukung server multiplayer publik yang memungkinkan interaksi dengan pemain dari seluruh dunia, dan beberapa server tidak dimoderasi dengan baik sehingga dapat mengandung konten atau percakapan yang tidak sesuai usia. Secara keseluruhan, Minecraft adalah alat belajar yang luar biasa — mengajarkan logika, matematika spasial, arsitektur, hingga dasar pemrograman melalui fitur Redstone.",
      rating_id: 3
    },
    {
      id: 10,
      title: "Mobile Legends: Bang Bang",
      slug: "mobile-legends-bang-bang",
      image_url: "https://placehold.co/300x200",
      release_year: 2016,
      publisher: "Moonton (ByteDance)",
      description: "Mobile Legends: Bang Bang adalah game MOBA (Multiplayer Online Battle Arena) di mana dua tim beranggotakan lima pemain saling berhadapan untuk menghancurkan base lawan. Pemain memilih hero dengan kemampuan unik dan bekerja sama secara strategis untuk memenangkan pertandingan.",
      review_summary: "Mobile Legends: Bang Bang adalah game MOBA kompetitif yang dirancang untuk pemain remaja dan dewasa muda. Permainan ini menampilkan pertempuran tim real-time yang intens dengan berbagai hero yang memiliki kemampuan unik — mulai dari serangan sihir, senjata jarak jauh, hingga pertarungan jarak dekat yang dinamis. Konten kekerasan hadir dalam bentuk efek skill yang dramatis dan animasi pertempuran yang cukup intens, meskipun tidak sampai menampilkan darah secara realistis. Beberapa hero wanita dalam permainan digambarkan dengan kostum yang cukup minim dan pose yang sugestif, yang menjadikan aspek penampilan tokoh sebagai salah satu pertimbangan utama untuk pemain yang lebih muda. Lingkungan kompetitif yang tinggi dalam game ini juga berpotensi menghasilkan interaksi tidak sehat antar pemain, termasuk verbal abuse dan toxic behavior melalui fitur chat dalam pertandingan. Permainan ini membutuhkan koordinasi tim, pemahaman strategi, dan kecepatan reaksi yang tinggi, sehingga lebih cocok untuk remaja yang sudah memiliki kematangan sosial yang cukup.",
      rating_id: 4
    },
    {
      id: 11,
      title: "PUBG Mobile",
      slug: "pubg-mobile",
      image_url: "https://placehold.co/300x200",
      release_year: 2018,
      publisher: "Krafton / Tencent Games",
      description: "PUBG Mobile adalah game battle royale berbasis tembak-menembak realistis di mana 100 pemain diturunkan di sebuah pulau dan harus bertahan hidup hingga menjadi yang terakhir tersisa. Permainan menampilkan senjata api realistis, kendaraan, dan taktik militer.",
      review_summary: "PUBG Mobile adalah game battle royale dengan presentasi grafis yang jauh lebih realistis dibandingkan game sejenis. Permainan ini menampilkan simulasi tembak-menembak menggunakan senjata api militer yang direpresentasikan secara detail — mulai dari mekanisme recoil, tipe peluru, hingga efek suara tembakan yang realistis. Ketika karakter lawan dieliminasi, terdapat animasi jatuh dan ragdoll effect yang lebih nyata dibandingkan game-game kartun, meskipun darah ditampilkan secara minimal. Nuansa militer yang kuat dalam permainan ini — termasuk penggunaan granat, kendaraan tempur, dan taktik pengepungan — menciptakan pengalaman yang secara psikologis lebih intens dan menegangkan. Komunikasi antar pemain melalui voice chat aktif selama pertandingan, yang berarti pemain dapat mendengar percakapan dari pemain asing yang mungkin menggunakan bahasa kasar. Permainan ini cocok untuk remaja di atas 15 tahun yang sudah dapat memahami konteks simulasi militer dan membedakannya dari realita.",
      rating_id: 4
    },
    {
      id: 12,
      title: "Valorant",
      slug: "valorant",
      image_url: "https://placehold.co/300x200",
      release_year: 2020,
      publisher: "Riot Games",
      description: "Valorant adalah game first-person shooter (FPS) taktis 5v5 yang menggabungkan mekanisme tembak-menembak presisi tinggi dengan kemampuan unik setiap agen. Dua tim bergantian menyerang dan bertahan dalam ronde-ronde yang membutuhkan koordinasi dan komunikasi tim yang baik.",
      review_summary: "Valorant adalah game FPS taktis yang dirancang dengan fokus pada skill mekanis tingkat tinggi dan koordinasi tim. Meskipun berbasis tembak-menembak, presentasi visualnya menggunakan gaya semi-realistis yang tidak menampilkan darah secara eksplisit dalam pengaturan default — ketika musuh dieliminasi, karakter sekadar roboh tanpa efek gore yang berlebihan. Namun demikian, tema dan nuansa permainan jelas bersifat militer dan ditujukan untuk pemain yang sudah cukup matang. Setiap agen dalam permainan memiliki kemampuan unik yang dapat menimbulkan efek lingkungan seperti api, asap, atau listrik yang dramatis secara visual. Beberapa agen wanita digambarkan dengan desain kostum yang cukup menonjolkan penampilan fisik. Komunikasi antar pemain melalui voice chat bersifat esensial dalam permainan ini dan sepenuhnya terbuka, sehingga paparan bahasa kasar atau perilaku toxic dari pemain lain sangat mungkin terjadi. Lingkungan ranked yang kompetitif juga dapat memicu tekanan psikologis yang signifikan.",
      rating_id: 4
    },
    {
      id: 13,
      title: "Grand Theft Auto Online",
      slug: "grand-theft-auto-online",
      image_url: "https://placehold.co/300x200",
      release_year: 2013,
      publisher: "Rockstar Games",
      description: "Grand Theft Auto Online adalah mode multiplayer dari GTA V yang memungkinkan pemain menjelajahi dunia terbuka kota Los Santos bersama pemain lain dari seluruh dunia. Pemain dapat menjalankan bisnis kriminal, merampok bank, balapan, hingga berperang bebas dalam dunia yang terus berkembang.",
      review_summary: "Grand Theft Auto Online adalah salah satu game dengan konten paling dewasa yang tersedia di platform konsol dan PC. Dunia permainan ini dibangun di atas fondasi kriminalitas urban yang mendetail — pemain dapat merampok toko, membunuh karakter NPC sipil, menggunakan dan memperdagangkan narkoba dalam konteks bisnis virtual, mengunjungi klub strip, dan melakukan berbagai tindakan yang secara eksplisit menggambarkan kejahatan. Konten kekerasan ditampilkan dengan grafis yang sangat realistis, termasuk efek darah, animasi kematian yang detail, dan ragdoll physics yang dramatis. Bahasa yang digunakan dalam konten narasi maupun komunitas pemain sangat kasar dan tidak tersensor. Permainan ini juga memiliki sistem perjudian dalam bentuk kasino virtual yang dapat dimainkan menggunakan mata uang dalam game yang dibeli dengan uang nyata. Interaksi dengan pemain lain bersifat sepenuhnya bebas, termasuk kemungkinan diserang secara tiba-tiba oleh pemain lain tanpa provokasi. Konten ini secara tegas hanya diperuntukkan bagi orang dewasa yang dapat memahami sifat fiksi dan hiburan dari seluruh elemen dalam permainan.",
      rating_id: 5
    },
    {
      id: 14,
      title: "Call of Duty: Warzone Mobile",
      slug: "call-of-duty-warzone-mobile",
      image_url: "https://placehold.co/300x200",
      release_year: 2024,
      publisher: "Activision",
      description: "Call of Duty: Warzone Mobile adalah versi mobile dari game battle royale populer Warzone yang menghadirkan pengalaman tembak-menembak militer realistis dengan grafis konsol-level di platform smartphone. Menampilkan peta ikonik Verdansk dengan kapasitas hingga 120 pemain per pertandingan.",
      review_summary: "Call of Duty: Warzone Mobile menghadirkan pengalaman tempur militer yang sangat realistis dan intens ke platform mobile. Seluruh aspek visual dirancang untuk semirip mungkin dengan realita militer modern — persenjataan digambarkan secara akurat berdasarkan senjata militer nyata, animasi penembakan terasa autentik, dan efek lingkungan seperti ledakan serta kehancuran bangunan disajikan dengan sangat detail. Konten kekerasan dalam permainan ini termasuk yang paling eksplisit di antara game mobile yang tersedia — karakter yang terkena tembakan menunjukkan reaksi fisik yang realistis, dan opsi gore effect dapat mengaktifkan tampilan darah yang lebih nyata. Permainan ini sarat dengan bahasa militer yang keras dan komunikasi voice chat antar pemain yang tidak terfilter, membuka kemungkinan paparan bahasa kasar secara luas. Nuansa dan tema permainan secara keseluruhan — bertempur untuk bertahan hidup dalam skenario perang taktis — dirancang untuk dan hanya sesuai bagi pemain dewasa yang matang secara emosional.",
      rating_id: 5
    },
    {
      id: 15,
      title: "Mortal Kombat Mobile",
      slug: "mortal-kombat-mobile",
      image_url: "https://placehold.co/300x200",
      release_year: 2015,
      publisher: "NetherRealm Studios / Warner Bros. Games",
      description: "Mortal Kombat Mobile adalah game fighting berbasis kartu yang mengadaptasi franchise Mortal Kombat ke platform mobile. Pemain mengumpulkan dan meningkatkan karakter ikonik dari seri Mortal Kombat untuk bertarung dalam berbagai mode pertempuran.",
      review_summary: "Mortal Kombat Mobile adalah adaptasi dari franchise fighting game yang sudah lama dikenal dengan konten kekerasannya yang sangat eksplisit. Meskipun versi mobile menyederhanakan beberapa elemen dibandingkan versi konsol, permainan ini tetap mempertahankan identitas utama seri Mortal Kombat — yaitu pertarungan yang brutal dengan gerakan finishing yang disebut 'Fatality'. Animasi pertarungan menampilkan aksi kekerasan fisik yang intens termasuk pukulan keras, tendangan, dan serangan menggunakan senjata yang disajikan dengan efek visual yang dramatis. Beberapa karakter memiliki kostum yang sangat minim dan penampilan fisik yang sangat ditonjolkan, baik karakter pria maupun wanita. Tema keseluruhan permainan berkisar pada pertempuran antar dimensi dengan elemen supernatural yang gelap dan beberapa momen yang cukup disturbing secara visual. Dengan sejarah panjang sebagai game yang menjadi salah satu alasan utama terbentuknya lembaga rating ESRB, Mortal Kombat dalam segala bentuknya hanya direkomendasikan untuk pemain dewasa yang telah memahami sifat hiburan fiksi dari konten kekerasan tersebut.",
      rating_id: 5
    }
  ];

  const gameFallbackImages = {
    1: "https://i.pinimg.com/736x/5e/06/06/5e0606fa24129d51e2fda7608e9b079a.jpg",
    2: "https://m.media-amazon.com/images/M/MV5BYmIwYTAwYzctOTIyZC00ZTY2LTljOWYtODJlYWE5YmNmMGI2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    3: "https://cdn-bgp.bluestacks.com/BGP/it/gametiles_com.ea.gp.fifamobile.jpg",
    4: "https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co2sj0.jpg",
    5: "https://m.media-amazon.com/images/M/MV5BYWMyYzc5ZWEtOTk1ZS00NzFlLTkwNjEtZmVhMzlhNDhkMmQ5XkEyXkFqcGc@._V1_.jpg",
    6: "https://assetsio.gnwcdn.com/co9gmb.jpg?width=2048&height=2048&fit=bounds&quality=85&format=jpg&auto=webp",
    7: "https://e.snmc.io/lk/f/x/f0cd7231a6a9186d8bbc35913fd2b923/9869333",
    8: "https://i.pinimg.com/originals/01/10/b9/0110b917cca68c538cbed940d4ed464e.jpg",
    9: "https://i.ebayimg.com/images/g/Y9IAAOSwM2ddrpX2/s-l1200.jpg",
    10: "https://m.media-amazon.com/images/M/MV5BODhlZDk5Y2EtMGFhOS00MTQ5LTgwNjgtYTI2ZmE1Y2ZjMDE2XkEyXkFqcGc@._V1_.jpg",
    11: "https://m.media-amazon.com/images/M/MV5BODQzNzJjY2QtY2Y2YS00OWJmLTlkZWMtMmNmMmE2NTg1MjQzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    12: "https://m.media-amazon.com/images/I/71LTpSLz57L._AC_UF894,1000_QL80_.jpg",
    13: "https://m.media-amazon.com/images/M/MV5BN2MxZTg0ZjYtYWRhMC00MTZlLTg0Y2QtYjhjZDdiNTk2MWQxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    14: "https://upload.wikimedia.org/wikipedia/en/5/58/COD_Warzone_Mobile_Key_Art.png",
    15: "https://m.media-amazon.com/images/M/MV5BNjk0OTI4ZTEtZTRlMy00NzQyLTk1ZDYtN2U4Yzc0Y2NlMjNkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  };

  const gameGalleryFallbackImages = {
    1: [
      "https://res.cloudinary.com/jerrick/image/upload/v1726143146/66e2daaaf971d6001d9208ca.jpg",
      "https://i.ytimg.com/vi/857gIwjNRR8/maxresdefault.jpg",
      "https://i.ytimg.com/vi/1gC1uL6KbNg/maxresdefault.jpg",
    ],
    2: [
      "https://cdn.prod.website-files.com/5fa23905123118739c5e21e2/64dd8b9d1a903a3f764b814b_FNCThumbnail.png",
      "https://assetsio.gnwcdn.com/-1618404011374.jpg?width=1600&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp",
      "https://b1803394.smushcdn.com/1803394/wp-content/uploads/2018/09/Fruit-ninja-screenshot-1024x576.png?lossy=1&strip=1&webp=1",
    ],
    3: [
      "https://cdn-www.bluestacks.com/bs-images/EASportsFCMobile_News_Release_EN2.jpg",
      "https://i.ytimg.com/vi/wWEYfq789cA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA54Orii_YnafHN8nthfeOIFsMATA",
      "https://i.ytimg.com/vi/k830GyC7NmI/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC6dYDKQF1KgfX3IyfI8a8-Xxbkyg",
    ],
    4: [
      "https://store-images.s-microsoft.com/image/apps.60940.14098991041572765.24a22c10-771e-440c-b9aa-1522a505d4ba.f8aff810-310f-4b23-9d5c-e6b43337bf06",
      "https://i.ytimg.com/vi/XSkn6K9fptM/maxresdefault.jpg",
      "https://cdn.mobygames.com/promos/3112649-dragon-city-screenshot.jpg",
    ],
    5: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRNWe6f0VpNjsQtO6oXfOx8_wFKvb5kuCPvA&s",
      "https://i.ytimg.com/vi/FrVSzRUL_Ac/maxresdefault.jpg",
      "https://lblog.fp.guinfra.com/file/69edb9a4007ee8f44c82979bbA2D99Bu03",
    ],
    6: [
      "https://lh3.googleusercontent.com/_hpVC_FfXKyiyQyAScEHT19zmprSPm6N_MueVEAod5KJNfDvl3LvZntgsY2Q6dscc2y-CSr8Tq5EOVgoFrli6EhyOWt_kTRKqh2S=s0-e365",
      "https://lh3.googleusercontent.com/8Tiud9g_ZTxKuFq8OxCr2fJLOwMzA1ajIKeFiu8Ub11X9AImQ58WzVxyVd6KSNpG79ceaHuFT66aihceJFNIYrerNHtpMomB-UibKIdJcJx1=e365-w2880",
      "https://lh3.googleusercontent.com/vux5c-AQTr_0Qd-NN5-k_-pds6QCeZe9xzpYYn_0B7ZrFhLs77mqdVzGLwVqVlW0htEKtiOXFnhN64RaZaKGTHAXwP2-dG-_W-XY=s0-e365",
    ],
    7: [
      "https://i.ytimg.com/vi/lA0Bneaf-BE/maxresdefault.jpg",
      "https://assetsio.gnwcdn.com/Genshin-Impact-beginner%E2%80%99s-guide-for-2023%2C-tips-and-tricks-cover.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp",
      "https://www.cgmagonline.com/wp-content/uploads/2024/08/things-you-need-to-know-about-genshin-impact-2024-08-07-826036.jpg",
    ],
    8: [
      "https://i.ytimg.com/vi/5Vzxj6flcfM/maxresdefault.jpg",
      "https://i.pcmag.com/imagery/reviews/00XpAmYpxd6wvLkvIO672zY-3..v1569469918.png",
      "https://cdn2.unrealengine.com/fortnite-falcon-scout-gameplay-2-1920x1080-65f8bb6b4dfd.jpg",
    ],
    9: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY0FWG6DE1Zw5M_R2qN4Dm24OTa1nC4leOFg&s",
      "https://terracoders.com/sites/default/files/inline-images/MC.png",
      "https://cdn.britannica.com/62/200262-050-AFE1BDFF/Players-Minecraft-worlds-way-blocks-roaming-characters.jpg",
    ],
    10: [
      "https://i.ytimg.com/vi/m0FFdQB_rKo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDLs0LI7OsMRXj_HPkf4DnEEykAQQ",
      "https://abg-static.s3.us-west-2.amazonaws.com/media/mobile-legends-bang-bang-scr-1.jpg",
      "https://i.ytimg.com/vi/Ri76piR9ueg/maxresdefault.jpg",
    ],
    11: [
      "https://i.ytimg.com/vi/gEnHQXvFgG4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBV4hIlK8vqGf44e8Gv3e35UikPdA",
      "https://thumb.viva.id/vivadigital/1265x711/2025/06/02/683d69bbaf5d4-pubg-mobile-gameplay_digital.jpg",
      "https://gamebrott.com/wp-content/uploads/2019/05/4-2.jpg",
    ],
    12: [
      "https://i.ytimg.com/vi/Wrdh5HrOCMc/maxresdefault.jpg",
      "https://i.ytimg.com/vi/8MFnGjtdXy4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBgU2rtodlkQRmj9L0FPwFTT0hofw",
      "https://www.thexboxhub.com/wp-content/uploads/2024/08/Valorant-review-2.jpg",
    ],
    13: [
      "https://i.ytimg.com/vi/olEGtoYs_8A/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD12bWrtsmjPSu0MSGr_rsKeAIjxQ",
      "https://i.ytimg.com/vi/07mJ0z7p8fs/maxresdefault.jpg",
      "https://i.ytimg.com/vi/TOxuNbXrO28/maxresdefault.jpg",
    ],
    14: [
      "https://i.ytimg.com/vi/55lm3P5VU38/maxresdefault.jpg",
      "https://i.ytimg.com/vi/mayeowtbsYs/maxresdefault.jpg",
      "https://i.ytimg.com/vi/Ud4kZTuUlNc/maxresdefault.jpg",
    ],
    15: [
      "https://i.ytimg.com/vi/c1HHc9sJWVM/maxresdefault.jpg",
      "https://i.ytimg.com/vi/PjPU6X0GkUw/maxresdefault.jpg",
      "https://i.ytimg.com/vi/nlgnJAe4mkI/maxresdefault.jpg",
    ],
  };

  for (const game of games) {
    await prisma.game.upsert({
      where: { id: game.id },
      update: {
        ...game,
        image_url: gameFallbackImages[game.id] || game.image_url
      },
      create: {
        ...game,
        image_url: gameFallbackImages[game.id] || game.image_url
      },
    });
  }

  // Seeding GameGallery for each game
  for (let i = 1; i <= 15; i++) {
    const urls = gameGalleryFallbackImages[i] || [];
    for (let j = 0; j < urls.length; j++) {
      const gallery = {
        image_url: urls[j],
        game_id: i
      };
      
      const exists = await prisma.gameGallery.findFirst({
        where: { game_id: i, image_url: gallery.image_url }
      });
      if (!exists) {
        await prisma.gameGallery.create({
          data: gallery
        });
      }
    }
  }

  console.log('✅ Games & Game Galleries seeded');
}
