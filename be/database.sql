-- MySQL dump 10.13  Distrib 8.0.46, for Linux (x86_64)
--
-- Host: localhost    Database: igrs_db
-- ------------------------------------------------------
-- Server version	8.0.46

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `_prisma_migrations`
--

DROP TABLE IF EXISTS `_prisma_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `checksum` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logs` text COLLATE utf8mb4_unicode_ci,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `applied_steps_count` int unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `_prisma_migrations`
--

LOCK TABLES `_prisma_migrations` WRITE;
/*!40000 ALTER TABLE `_prisma_migrations` DISABLE KEYS */;
INSERT INTO `_prisma_migrations` VALUES ('b5b65717-3f73-4a7c-a497-921a4a115040','ab4a66976d5c8031154b7241d41fa5b3eaeddca0851792c2bcdb2220fbaade6f','2026-05-30 18:31:08.003','20260530183107_change_image_content_classification_into_content_icon',NULL,NULL,'2026-05-30 18:31:07.572',1);
/*!40000 ALTER TABLE `_prisma_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `blogs`
--

DROP TABLE IF EXISTS `blogs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `blogs` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `image_url` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `updated_at` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `blogs_slug_key` (`slug`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blogs`
--

LOCK TABLES `blogs` WRITE;
/*!40000 ALTER TABLE `blogs` DISABLE KEYS */;
INSERT INTO `blogs` VALUES (1,'Pemberitahuan Terkait Proses Verifikasi IGRS','pemberitahuan-terkait-proses-verifikasi-igrs','Informasi terbaru mengenai proses verifikasi IGRS, termasuk tahapan peninjauan, evaluasi konten, dan estimasi waktu yang diperlukan untuk menyelesaikan proses klasifikasi game.','http://localhost:3000/assets/Blog/blog1.png','2026-05-30 19:28:12.615'),(2,'Panduan Aplikasi Konten IGRS Untuk Developer','panduan-aplikasi-konten-igrs-untuk-developer','Panduan lengkap bagi developer untuk mengajukan klasifikasi game melalui sistem IGRS, mulai dari proses registrasi, pengisian data, hingga pengiriman konten untuk ditinjau.','http://localhost:3000/assets/Blog/blog2.png','2026-05-30 19:28:12.621'),(3,'Gim Terbaru di IGRS','gim-terbaru-di-igrs','Daftar gim terbaru yang telah masuk ke dalam sistem IGRS beserta informasi terkait klasifikasi usia dan kategori konten yang telah ditetapkan.','http://localhost:3000/assets/Blog/blog3.png','2026-05-30 19:28:12.628');
/*!40000 ALTER TABLE `blogs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `content_classifications`
--

DROP TABLE IF EXISTS `content_classifications`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `content_classifications` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `content_icon` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `rating_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `content_classifications_rating_id_fkey` (`rating_id`),
  CONSTRAINT `content_classifications_rating_id_fkey` FOREIGN KEY (`rating_id`) REFERENCES `ratings` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `content_classifications`
--

LOCK TABLES `content_classifications` WRITE;
/*!40000 ALTER TABLE `content_classifications` DISABLE KEYS */;
INSERT INTO `content_classifications` VALUES (1,'Horor','Konten yang mengandung unsur menakutkan, mengejutkan, atau suasana mencekam.','Horor',5),(2,'Interaksi Daring','Permainan yang memungkinkan interaksi antar pemain melalui fitur chat atau suara.','InteraksiDaring',3),(3,'Penampilan Tokoh','Penggambaran karakter yang mungkin mengandung unsur sugestif atau tidak sesuai usia.','PenampilanTokoh',4),(4,'Seksualitas/Pornografi','Penggambaran aktivitas seksual, ketelanjangan, atau konten berorientasi dewasa.','SeksualitasPornografi',5),(5,'Kekerasan','Konten yang menampilkan aksi kekerasan fisik, penggunaan senjata, atau darah.','Kekerasan',4),(6,'Bahasa Kasar','Penggunaan kata-kata yang tidak sopan, umpatan, atau hinaan.','BahasaKasar',4),(7,'Simulasi Sosial','Penggambaran interaksi sosial yang kompleks yang membutuhkan kedewasaan.','SimulasiSosial',4),(8,'Zat Adiktif & Alkohol','Referensi atau penggunaan rokok, minuman keras, dan obat-obatan terlarang.','ZatAdiktifAlkohol',5),(9,'Perjudian','Simulasi atau instruksi aktivitas perjudian di dalam permainan.','Perjudian',5);
/*!40000 ALTER TABLE `content_classifications` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `game_galleries`
--

DROP TABLE IF EXISTS `game_galleries`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `game_galleries` (
  `id` int NOT NULL AUTO_INCREMENT,
  `image_url` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `game_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `game_galleries_game_id_fkey` (`game_id`),
  CONSTRAINT `game_galleries_game_id_fkey` FOREIGN KEY (`game_id`) REFERENCES `games` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=136 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `game_galleries`
--

LOCK TABLES `game_galleries` WRITE;
/*!40000 ALTER TABLE `game_galleries` DISABLE KEYS */;
INSERT INTO `game_galleries` VALUES (91,'https://res.cloudinary.com/jerrick/image/upload/v1726143146/66e2daaaf971d6001d9208ca.jpg',1),(92,'https://i.ytimg.com/vi/857gIwjNRR8/maxresdefault.jpg',1),(93,'https://i.ytimg.com/vi/1gC1uL6KbNg/maxresdefault.jpg',1),(94,'https://cdn.prod.website-files.com/5fa23905123118739c5e21e2/64dd8b9d1a903a3f764b814b_FNCThumbnail.png',2),(95,'https://assetsio.gnwcdn.com/-1618404011374.jpg?width=1600&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp',2),(96,'https://b1803394.smushcdn.com/1803394/wp-content/uploads/2018/09/Fruit-ninja-screenshot-1024x576.png?lossy=1&strip=1&webp=1',2),(97,'https://cdn-www.bluestacks.com/bs-images/EASportsFCMobile_News_Release_EN2.jpg',3),(98,'https://i.ytimg.com/vi/wWEYfq789cA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA54Orii_YnafHN8nthfeOIFsMATA',3),(99,'https://i.ytimg.com/vi/k830GyC7NmI/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC6dYDKQF1KgfX3IyfI8a8-Xxbkyg',3),(100,'https://store-images.s-microsoft.com/image/apps.60940.14098991041572765.24a22c10-771e-440c-b9aa-1522a505d4ba.f8aff810-310f-4b23-9d5c-e6b43337bf06',4),(101,'https://i.ytimg.com/vi/XSkn6K9fptM/maxresdefault.jpg',4),(102,'https://cdn.mobygames.com/promos/3112649-dragon-city-screenshot.jpg',4),(103,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRNWe6f0VpNjsQtO6oXfOx8_wFKvb5kuCPvA&s',5),(104,'https://i.ytimg.com/vi/FrVSzRUL_Ac/maxresdefault.jpg',5),(105,'https://lblog.fp.guinfra.com/file/69edb9a4007ee8f44c82979bbA2D99Bu03',5),(106,'https://lh3.googleusercontent.com/_hpVC_FfXKyiyQyAScEHT19zmprSPm6N_MueVEAod5KJNfDvl3LvZntgsY2Q6dscc2y-CSr8Tq5EOVgoFrli6EhyOWt_kTRKqh2S=s0-e365',6),(107,'https://lh3.googleusercontent.com/8Tiud9g_ZTxKuFq8OxCr2fJLOwMzA1ajIKeFiu8Ub11X9AImQ58WzVxyVd6KSNpG79ceaHuFT66aihceJFNIYrerNHtpMomB-UibKIdJcJx1=e365-w2880',6),(108,'https://lh3.googleusercontent.com/vux5c-AQTr_0Qd-NN5-k_-pds6QCeZe9xzpYYn_0B7ZrFhLs77mqdVzGLwVqVlW0htEKtiOXFnhN64RaZaKGTHAXwP2-dG-_W-XY=s0-e365',6),(109,'https://i.ytimg.com/vi/lA0Bneaf-BE/maxresdefault.jpg',7),(110,'https://assetsio.gnwcdn.com/Genshin-Impact-beginner%E2%80%99s-guide-for-2023%2C-tips-and-tricks-cover.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp',7),(111,'https://www.cgmagonline.com/wp-content/uploads/2024/08/things-you-need-to-know-about-genshin-impact-2024-08-07-826036.jpg',7),(112,'https://i.ytimg.com/vi/5Vzxj6flcfM/maxresdefault.jpg',8),(113,'https://i.pcmag.com/imagery/reviews/00XpAmYpxd6wvLkvIO672zY-3..v1569469918.png',8),(114,'https://cdn2.unrealengine.com/fortnite-falcon-scout-gameplay-2-1920x1080-65f8bb6b4dfd.jpg',8),(115,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY0FWG6DE1Zw5M_R2qN4Dm24OTa1nC4leOFg&s',9),(116,'https://terracoders.com/sites/default/files/inline-images/MC.png',9),(117,'https://cdn.britannica.com/62/200262-050-AFE1BDFF/Players-Minecraft-worlds-way-blocks-roaming-characters.jpg',9),(118,'https://i.ytimg.com/vi/m0FFdQB_rKo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDLs0LI7OsMRXj_HPkf4DnEEykAQQ',10),(119,'https://abg-static.s3.us-west-2.amazonaws.com/media/mobile-legends-bang-bang-scr-1.jpg',10),(120,'https://i.ytimg.com/vi/Ri76piR9ueg/maxresdefault.jpg',10),(121,'https://i.ytimg.com/vi/gEnHQXvFgG4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBV4hIlK8vqGf44e8Gv3e35UikPdA',11),(122,'https://thumb.viva.id/vivadigital/1265x711/2025/06/02/683d69bbaf5d4-pubg-mobile-gameplay_digital.jpg',11),(123,'https://gamebrott.com/wp-content/uploads/2019/05/4-2.jpg',11),(124,'https://i.ytimg.com/vi/Wrdh5HrOCMc/maxresdefault.jpg',12),(125,'https://i.ytimg.com/vi/8MFnGjtdXy4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBgU2rtodlkQRmj9L0FPwFTT0hofw',12),(126,'https://www.thexboxhub.com/wp-content/uploads/2024/08/Valorant-review-2.jpg',12),(127,'https://i.ytimg.com/vi/olEGtoYs_8A/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD12bWrtsmjPSu0MSGr_rsKeAIjxQ',13),(128,'https://i.ytimg.com/vi/07mJ0z7p8fs/maxresdefault.jpg',13),(129,'https://i.ytimg.com/vi/TOxuNbXrO28/maxresdefault.jpg',13),(130,'https://i.ytimg.com/vi/55lm3P5VU38/maxresdefault.jpg',14),(131,'https://i.ytimg.com/vi/mayeowtbsYs/maxresdefault.jpg',14),(132,'https://i.ytimg.com/vi/Ud4kZTuUlNc/maxresdefault.jpg',14),(133,'https://i.ytimg.com/vi/c1HHc9sJWVM/maxresdefault.jpg',15),(134,'https://i.ytimg.com/vi/PjPU6X0GkUw/maxresdefault.jpg',15),(135,'https://i.ytimg.com/vi/nlgnJAe4mkI/maxresdefault.jpg',15);
/*!40000 ALTER TABLE `game_galleries` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `games`
--

DROP TABLE IF EXISTS `games`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `games` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `image_url` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `release_year` int NOT NULL,
  `publisher` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `review_summary` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `rating_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `games_slug_key` (`slug`),
  KEY `games_rating_id_fkey` (`rating_id`),
  CONSTRAINT `games_rating_id_fkey` FOREIGN KEY (`rating_id`) REFERENCES `ratings` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `games`
--

LOCK TABLES `games` WRITE;
/*!40000 ALTER TABLE `games` DISABLE KEYS */;
INSERT INTO `games` VALUES (1,'Subway Surfers','subway-surfers','Subway Surfers adalah permainan endless runner yang dimainkan dengan cara menghindari kereta dan rintangan sambil berlari sejauh mungkin di sepanjang rel kereta. Pemain mengumpulkan koin, power-up, dan berbagai item untuk meningkatkan skor.','https://i.pinimg.com/736x/5e/06/06/5e0606fa24129d51e2fda7608e9b079a.jpg',2012,'Sybo Games','Subway Surfers adalah permainan lari tanpa henti (endless runner) yang sepenuhnya aman untuk segala usia, termasuk anak-anak kecil. Seluruh kontennya disajikan dalam gaya kartun yang cerah dan menyenangkan, tanpa satu pun adegan yang dapat menakutkan atau membingungkan anak. Tidak ada kekerasan eksplisit, tidak ada interaksi dengan pemain lain secara langsung, tidak ada bahasa kasar, dan tidak ada konten dewasa dalam bentuk apa pun. Karakter-karakter dalam permainan digambarkan dengan ekspresi ceria dan kostum yang beragam namun tetap sesuai usia. Mekanisme permainan sepenuhnya berfokus pada refleks dan koordinasi, menjadikannya sarana latihan motorik yang menyenangkan. Satu-satunya hal yang perlu diperhatikan orang tua adalah keberadaan iklan dalam aplikasi gratis ini, yang kadang dapat menampilkan konten dari pihak ketiga.',1),(2,'Fruit Ninja','fruit-ninja','Fruit Ninja adalah permainan arcade kasual di mana pemain memotong buah-buahan yang dilempar ke udara menggunakan gerakan menggesek layar. Tersedia berbagai mode permainan termasuk Classic, Arcade, dan Zen.','https://m.media-amazon.com/images/M/MV5BYmIwYTAwYzctOTIyZC00ZTY2LTljOWYtODJlYWE5YmNmMGI2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',2010,'Halfbrick Studios','Fruit Ninja adalah salah satu game mobile paling ramah anak yang pernah ada. Seluruh aksi dalam permainan berkisar pada memotong buah-buahan virtual yang penuh warna — semangka, nanas, mangga, dan sebagainya — menggunakan gerakan menggesek layar. Tidak ada karakter manusia yang terlibat dalam konflik, tidak ada narasi kekerasan, dan tidak ada tema yang dapat membingungkan anak kecil. Satu-satunya elemen yang mungkin memerlukan sedikit perhatian adalah bom yang sesekali muncul di antara buah-buahan, namun efek visualnya sangat kartun dan sama sekali tidak realistis. Permainan ini juga tidak memiliki fitur obrolan atau interaksi daring, sehingga anak dapat bermain dengan tenang tanpa risiko paparan konten eksternal. Desain audio dan visualnya yang semarak menjadikan Fruit Ninja pilihan ideal untuk anak usia dini.',1),(3,'EA Sports FC Mobile','ea-sports-fc-mobile','EA Sports FC Mobile adalah game sepak bola resmi dari Electronic Arts yang memungkinkan pemain membangun tim impian, bertanding dalam berbagai mode, dan mengikuti event musiman yang terus diperbarui.','https://cdn-bgp.bluestacks.com/BGP/it/gametiles_com.ea.gp.fifamobile.jpg',2016,'Electronic Arts','EA Sports FC Mobile adalah simulasi olahraga sepak bola yang ditujukan untuk seluruh kalangan usia. Konten utama permainan sepenuhnya berfokus pada pertandingan sepak bola virtual, pembangunan tim, dan kompetisi antar pemain yang bersifat sportif. Tidak ada kekerasan fisik yang ditampilkan secara eksplisit — seluruh kontak antar pemain disajikan dalam konteks olahraga yang wajar. Permainan ini memiliki fitur kompetisi daring yang memungkinkan pemain bersaing satu sama lain, namun tidak tersedia fitur obrolan teks bebas yang berpotensi membawa konten tidak pantas. Satu hal yang perlu diperhatikan orang tua adalah mekanisme Ultimate Team yang mengandung sistem pembukaan paket pemain (loot pack) — meskipun menggunakan mata uang virtual, mekanisme ini memiliki kemiripan dengan konsep perjudian karena hasilnya bersifat acak. Selain aspek tersebut, permainan ini sangat aman dan edukatif dalam hal strategi tim dan sportivitas.',1),(4,'Dragon City','dragon-city','Dragon City adalah game simulasi dan strategi mobile di mana pemain membangun pulau naga, memelihara dan mengembangbiakkan ratusan jenis naga, serta bertarung melawan pemain lain dalam Dragon League.','https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co2sj0.jpg',2012,'Social Point (Take-Two Interactive)','Dragon City adalah permainan simulasi membangun kota bertema fantasi yang dirancang dengan gaya visual kartun yang cerah dan menarik, cocok untuk anak-anak usia sekolah dasar ke atas. Inti permainan berpusat pada kegiatan mengumpulkan, mengembangbiakkan, dan melatih berbagai jenis naga yang unik — sebuah mekanisme yang melatih kesabaran, perencanaan, dan manajemen sumber daya secara menyenangkan. Pertempuran antar naga disajikan dalam format yang sangat terstilisasi tanpa darah atau cedera fisik yang grafis. Terdapat elemen interaksi daring melalui mode liga dan event bersama yang memungkinkan pemain berinteraksi dengan komunitas global, sehingga orang tua disarankan untuk mendampingi anak dalam mengelola aktivitas sosial dalam permainan. Sistem pengembangbiakan naga yang bersifat acak memiliki kemiripan konseptual dengan mekanisme gacha, meskipun tidak secara langsung melibatkan transaksi berbayar untuk setiap percobaan. Secara keseluruhan, Dragon City adalah permainan yang positif dan melatih kreativitas serta strategi bagi pemain muda.',2),(5,'Clash of Clans','clash-of-clans','Clash of Clans adalah game strategi mobile di mana pemain membangun desa, melatih pasukan, dan menyerang desa pemain lain untuk mendapatkan sumber daya. Pemain juga dapat bergabung dalam klan untuk berpartisipasi dalam Clan Wars.','https://m.media-amazon.com/images/M/MV5BYWMyYzc5ZWEtOTk1ZS00NzFlLTkwNjEtZmVhMzlhNDhkMmQ5XkEyXkFqcGc@._V1_.jpg',2012,'Supercell','Clash of Clans adalah permainan strategi berbasis pembangunan desa yang dirancang dengan gaya visual kartun yang ramah dan tidak mengancam. Meskipun inti permainan melibatkan serangan dan pertahanan antar desa, seluruh konflik disajikan dalam format yang sangat terstilisasi — tidak ada darah, tidak ada kekerasan grafis, dan tidak ada korban yang ditampilkan secara dramatis. Permainan ini justru sangat efektif dalam melatih kemampuan berpikir taktis dan strategis anak, mulai dari perencanaan tata letak bangunan hingga komposisi pasukan. Fitur klan memungkinkan pemain bergabung dengan komunitas dan berkomunikasi melalui fitur obrolan terbatas, sehingga orang tua disarankan untuk memantau dengan siapa anak berinteraksi. Tidak ada konten yang mempromosikan kekerasan nyata, bahasa kasar, atau tema yang tidak sesuai usia.',2),(6,'Pokémon GO','pokemon-go','Pokémon GO adalah game augmented reality (AR) di mana pemain menjelajahi dunia nyata untuk menangkap Pokémon, bertarung di Gym, dan berpartisipasi dalam Raid Battle bersama pemain lain.','https://assetsio.gnwcdn.com/co9gmb.jpg?width=2048&height=2048&fit=bounds&quality=85&format=jpg&auto=webp',2016,'Niantic','Pokémon GO adalah permainan augmented reality yang mendorong pemain untuk bergerak aktif di dunia nyata sambil menangkap dan melatih Pokémon. Konsep dasar permainan ini sangat positif — mengajak pemain berjalan kaki, mengeksplorasi lingkungan sekitar, dan bersosialisasi dengan komunitas lokal. Konten pertempuran dalam permainan bersifat sangat ringan dan tidak mengandung kekerasan yang dapat mengganggu anak-anak; Pokémon yang kalah hanya pingsan, bukan terluka secara grafis. Permainan ini memiliki fitur interaksi daring seperti raid multiplayer dan trading, yang dalam penggunaan bersama teman atau komunitas yang dikenal sangat menyenangkan. Namun, orang tua perlu memperhatikan aspek keamanan fisik anak saat bermain di luar ruangan, serta memantau aktivitas perdagangan Pokémon agar tidak berinteraksi dengan orang asing yang tidak dikenal.',2),(7,'Genshin Impact','genshin-impact','Genshin Impact adalah action RPG open-world dengan sistem elemental combat yang mendalam. Pemain menjelajahi dunia Teyvat, membangun tim dari berbagai karakter dengan kemampuan unik, dan mengungkap cerita epik yang terus berkembang melalui update reguler.','https://e.snmc.io/lk/f/x/f0cd7231a6a9186d8bbc35913fd2b923/9869333',2020,'HoYoverse','Genshin Impact adalah permainan RPG aksi bertema fantasi dengan dunia terbuka yang luas dan narasi yang kaya. Permainan ini menampilkan sistem pertarungan berbasis elemen — api, air, angin, petir, es, batu, dan sebagainya — yang secara visual menakjubkan namun tidak mengandung kekerasan realistis. Musuh yang dikalahkan menghilang dengan efek partikel, bukan dengan darah atau luka yang grafis. Beberapa karakter dalam permainan digambarkan dengan kostum yang cukup memperlihatkan lekuk tubuh, terutama karakter wanita, yang mungkin tidak sepenuhnya sesuai untuk anak di bawah usia 13 tahun. Permainan ini memiliki sistem gacha (loot box) untuk mendapatkan karakter dan senjata baru yang bersifat acak, yang secara konseptual menyerupai mekanisme perjudian dan dapat mendorong pengeluaran berlebihan jika tidak dikontrol. Narasi permainan cukup kompleks dan emosional, termasuk tema kehilangan, pengorbanan, dan konflik moral yang membutuhkan tingkat pemahaman yang lebih matang.',3),(8,'Fortnite','fortnite','Fortnite adalah game battle royale yang mempertemukan hingga 100 pemain dalam sebuah pulau untuk bertahan hidup. Keunikan Fortnite terletak pada mekanisme membangun struktur dari material yang dikumpulkan selama pertandingan.','https://i.pinimg.com/originals/01/10/b9/0110b917cca68c538cbed940d4ed464e.jpg',2017,'Epic Games','Fortnite adalah game battle royale yang menggabungkan aksi tembak-menembak dengan mekanisme membangun unik. Meskipun inti permainan melibatkan eliminasi pemain lain, seluruh kontennya disajikan dalam gaya visual kartun yang jauh dari kesan realistis — tidak ada darah, tidak ada cedera fisik yang grafis, dan karakter yang dieliminasi sekadar menghilang dari arena. Permainan ini sangat populer di kalangan remaja dan memiliki komunitas yang besar secara global. Fitur komunikasi suara dan teks tersedia luas, yang berarti pemain dapat berinteraksi dengan pemain asing dari seluruh dunia — aspek ini perlu menjadi perhatian utama orang tua karena potensi paparan bahasa tidak pantas atau interaksi yang tidak sesuai usia. Konten kolaborasi dengan merek dan karakter populer (film, musik, olahraga) sering hadir dalam bentuk skin berbayar, yang dapat mendorong tekanan sosial untuk membeli item kosmetik.',3),(9,'Minecraft','minecraft','Minecraft adalah game sandbox yang memungkinkan pemain membangun dan menjelajahi dunia yang terbuat dari blok tiga dimensi. Tersedia dalam mode Survival, Creative, Adventure, dan berbagai mode lainnya dengan kebebasan eksplorasi yang hampir tak terbatas.','https://i.ebayimg.com/images/g/Y9IAAOSwM2ddrpX2/s-l1200.jpg',2011,'Mojang Studios (Microsoft)','Minecraft adalah salah satu game paling kreatif dan edukatif yang pernah ada, namun tetap memiliki beberapa elemen yang perlu diperhatikan sebelum dimainkan oleh anak-anak di bawah 13 tahun. Mode Survival menghadirkan sistem pertarungan melawan monster seperti Creeper, Zombie, dan Skeleton yang dapat muncul di malam hari — konten ini ringan secara visual namun bisa cukup menegangkan bagi anak yang lebih kecil. Mode Creative sepenuhnya bebas dari konflik dan sangat direkomendasikan untuk anak-anak muda yang ingin mengekspresikan kreativitas. Permainan ini mendukung server multiplayer publik yang memungkinkan interaksi dengan pemain dari seluruh dunia, dan beberapa server tidak dimoderasi dengan baik sehingga dapat mengandung konten atau percakapan yang tidak sesuai usia. Secara keseluruhan, Minecraft adalah alat belajar yang luar biasa — mengajarkan logika, matematika spasial, arsitektur, hingga dasar pemrograman melalui fitur Redstone.',3),(10,'Mobile Legends: Bang Bang','mobile-legends-bang-bang','Mobile Legends: Bang Bang adalah game MOBA (Multiplayer Online Battle Arena) di mana dua tim beranggotakan lima pemain saling berhadapan untuk menghancurkan base lawan. Pemain memilih hero dengan kemampuan unik dan bekerja sama secara strategis untuk memenangkan pertandingan.','https://m.media-amazon.com/images/M/MV5BODhlZDk5Y2EtMGFhOS00MTQ5LTgwNjgtYTI2ZmE1Y2ZjMDE2XkEyXkFqcGc@._V1_.jpg',2016,'Moonton (ByteDance)','Mobile Legends: Bang Bang adalah game MOBA kompetitif yang dirancang untuk pemain remaja dan dewasa muda. Permainan ini menampilkan pertempuran tim real-time yang intens dengan berbagai hero yang memiliki kemampuan unik — mulai dari serangan sihir, senjata jarak jauh, hingga pertarungan jarak dekat yang dinamis. Konten kekerasan hadir dalam bentuk efek skill yang dramatis dan animasi pertempuran yang cukup intens, meskipun tidak sampai menampilkan darah secara realistis. Beberapa hero wanita dalam permainan digambarkan dengan kostum yang cukup minim dan pose yang sugestif, yang menjadikan aspek penampilan tokoh sebagai salah satu pertimbangan utama untuk pemain yang lebih muda. Lingkungan kompetitif yang tinggi dalam game ini juga berpotensi menghasilkan interaksi tidak sehat antar pemain, termasuk verbal abuse dan toxic behavior melalui fitur chat dalam pertandingan. Permainan ini membutuhkan koordinasi tim, pemahaman strategi, dan kecepatan reaksi yang tinggi, sehingga lebih cocok untuk remaja yang sudah memiliki kematangan sosial yang cukup.',4),(11,'PUBG Mobile','pubg-mobile','PUBG Mobile adalah game battle royale berbasis tembak-menembak realistis di mana 100 pemain diturunkan di sebuah pulau dan harus bertahan hidup hingga menjadi yang terakhir tersisa. Permainan menampilkan senjata api realistis, kendaraan, dan taktik militer.','https://m.media-amazon.com/images/M/MV5BODQzNzJjY2QtY2Y2YS00OWJmLTlkZWMtMmNmMmE2NTg1MjQzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',2018,'Krafton / Tencent Games','PUBG Mobile adalah game battle royale dengan presentasi grafis yang jauh lebih realistis dibandingkan game sejenis. Permainan ini menampilkan simulasi tembak-menembak menggunakan senjata api militer yang direpresentasikan secara detail — mulai dari mekanisme recoil, tipe peluru, hingga efek suara tembakan yang realistis. Ketika karakter lawan dieliminasi, terdapat animasi jatuh dan ragdoll effect yang lebih nyata dibandingkan game-game kartun, meskipun darah ditampilkan secara minimal. Nuansa militer yang kuat dalam permainan ini — termasuk penggunaan granat, kendaraan tempur, dan taktik pengepungan — menciptakan pengalaman yang secara psikologis lebih intens dan menegangkan. Komunikasi antar pemain melalui voice chat aktif selama pertandingan, yang berarti pemain dapat mendengar percakapan dari pemain asing yang mungkin menggunakan bahasa kasar. Permainan ini cocok untuk remaja di atas 15 tahun yang sudah dapat memahami konteks simulasi militer dan membedakannya dari realita.',4),(12,'Valorant','valorant','Valorant adalah game first-person shooter (FPS) taktis 5v5 yang menggabungkan mekanisme tembak-menembak presisi tinggi dengan kemampuan unik setiap agen. Dua tim bergantian menyerang dan bertahan dalam ronde-ronde yang membutuhkan koordinasi dan komunikasi tim yang baik.','https://m.media-amazon.com/images/I/71LTpSLz57L._AC_UF894,1000_QL80_.jpg',2020,'Riot Games','Valorant adalah game FPS taktis yang dirancang dengan fokus pada skill mekanis tingkat tinggi dan koordinasi tim. Meskipun berbasis tembak-menembak, presentasi visualnya menggunakan gaya semi-realistis yang tidak menampilkan darah secara eksplisit dalam pengaturan default — ketika musuh dieliminasi, karakter sekadar roboh tanpa efek gore yang berlebihan. Namun demikian, tema dan nuansa permainan jelas bersifat militer dan ditujukan untuk pemain yang sudah cukup matang. Setiap agen dalam permainan memiliki kemampuan unik yang dapat menimbulkan efek lingkungan seperti api, asap, atau listrik yang dramatis secara visual. Beberapa agen wanita digambarkan dengan desain kostum yang cukup menonjolkan penampilan fisik. Komunikasi antar pemain melalui voice chat bersifat esensial dalam permainan ini dan sepenuhnya terbuka, sehingga paparan bahasa kasar atau perilaku toxic dari pemain lain sangat mungkin terjadi. Lingkungan ranked yang kompetitif juga dapat memicu tekanan psikologis yang signifikan.',4),(13,'Grand Theft Auto Online','grand-theft-auto-online','Grand Theft Auto Online adalah mode multiplayer dari GTA V yang memungkinkan pemain menjelajahi dunia terbuka kota Los Santos bersama pemain lain dari seluruh dunia. Pemain dapat menjalankan bisnis kriminal, merampok bank, balapan, hingga berperang bebas dalam dunia yang terus berkembang.','https://m.media-amazon.com/images/M/MV5BN2MxZTg0ZjYtYWRhMC00MTZlLTg0Y2QtYjhjZDdiNTk2MWQxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',2013,'Rockstar Games','Grand Theft Auto Online adalah salah satu game dengan konten paling dewasa yang tersedia di platform konsol dan PC. Dunia permainan ini dibangun di atas fondasi kriminalitas urban yang mendetail — pemain dapat merampok toko, membunuh karakter NPC sipil, menggunakan dan memperdagangkan narkoba dalam konteks bisnis virtual, mengunjungi klub strip, dan melakukan berbagai tindakan yang secara eksplisit menggambarkan kejahatan. Konten kekerasan ditampilkan dengan grafis yang sangat realistis, termasuk efek darah, animasi kematian yang detail, dan ragdoll physics yang dramatis. Bahasa yang digunakan dalam konten narasi maupun komunitas pemain sangat kasar dan tidak tersensor. Permainan ini juga memiliki sistem perjudian dalam bentuk kasino virtual yang dapat dimainkan menggunakan mata uang dalam game yang dibeli dengan uang nyata. Interaksi dengan pemain lain bersifat sepenuhnya bebas, termasuk kemungkinan diserang secara tiba-tiba oleh pemain lain tanpa provokasi. Konten ini secara tegas hanya diperuntukkan bagi orang dewasa yang dapat memahami sifat fiksi dan hiburan dari seluruh elemen dalam permainan.',5),(14,'Call of Duty: Warzone Mobile','call-of-duty-warzone-mobile','Call of Duty: Warzone Mobile adalah versi mobile dari game battle royale populer Warzone yang menghadirkan pengalaman tembak-menembak militer realistis dengan grafis konsol-level di platform smartphone. Menampilkan peta ikonik Verdansk dengan kapasitas hingga 120 pemain per pertandingan.','https://upload.wikimedia.org/wikipedia/en/5/58/COD_Warzone_Mobile_Key_Art.png',2024,'Activision','Call of Duty: Warzone Mobile menghadirkan pengalaman tempur militer yang sangat realistis dan intens ke platform mobile. Seluruh aspek visual dirancang untuk semirip mungkin dengan realita militer modern — persenjataan digambarkan secara akurat berdasarkan senjata militer nyata, animasi penembakan terasa autentik, dan efek lingkungan seperti ledakan serta kehancuran bangunan disajikan dengan sangat detail. Konten kekerasan dalam permainan ini termasuk yang paling eksplisit di antara game mobile yang tersedia — karakter yang terkena tembakan menunjukkan reaksi fisik yang realistis, dan opsi gore effect dapat mengaktifkan tampilan darah yang lebih nyata. Permainan ini sarat dengan bahasa militer yang keras dan komunikasi voice chat antar pemain yang tidak terfilter, membuka kemungkinan paparan bahasa kasar secara luas. Nuansa dan tema permainan secara keseluruhan — bertempur untuk bertahan hidup dalam skenario perang taktis — dirancang untuk dan hanya sesuai bagi pemain dewasa yang matang secara emosional.',5),(15,'Mortal Kombat Mobile','mortal-kombat-mobile','Mortal Kombat Mobile adalah game fighting berbasis kartu yang mengadaptasi franchise Mortal Kombat ke platform mobile. Pemain mengumpulkan dan meningkatkan karakter ikonik dari seri Mortal Kombat untuk bertarung dalam berbagai mode pertempuran.','https://m.media-amazon.com/images/M/MV5BNjk0OTI4ZTEtZTRlMy00NzQyLTk1ZDYtN2U4Yzc0Y2NlMjNkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',2015,'NetherRealm Studios / Warner Bros. Games','Mortal Kombat Mobile adalah adaptasi dari franchise fighting game yang sudah lama dikenal dengan konten kekerasannya yang sangat eksplisit. Meskipun versi mobile menyederhanakan beberapa elemen dibandingkan versi konsol, permainan ini tetap mempertahankan identitas utama seri Mortal Kombat — yaitu pertarungan yang brutal dengan gerakan finishing yang disebut \'Fatality\'. Animasi pertarungan menampilkan aksi kekerasan fisik yang intens termasuk pukulan keras, tendangan, dan serangan menggunakan senjata yang disajikan dengan efek visual yang dramatis. Beberapa karakter memiliki kostum yang sangat minim dan penampilan fisik yang sangat ditonjolkan, baik karakter pria maupun wanita. Tema keseluruhan permainan berkisar pada pertempuran antar dimensi dengan elemen supernatural yang gelap dan beberapa momen yang cukup disturbing secara visual. Dengan sejarah panjang sebagai game yang menjadi salah satu alasan utama terbentuknya lembaga rating ESRB, Mortal Kombat dalam segala bentuknya hanya direkomendasikan untuk pemain dewasa yang telah memahami sifat hiburan fiksi dari konten kekerasan tersebut.',5);
/*!40000 ALTER TABLE `games` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ratings`
--

DROP TABLE IF EXISTS `ratings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ratings` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `summary` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `image_url` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `age` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ratings`
--

LOCK TABLES `ratings` WRITE;
/*!40000 ALTER TABLE `ratings` DISABLE KEYS */;
INSERT INTO `ratings` VALUES (1,'3+','Konten sesuai untuk usia 3 tahun ke atas.','Game dengan rating 3+ dirancang agar aman dimainkan oleh anak usia dini dan dapat diakses oleh seluruh anggota keluarga. Konten dalam kategori ini tidak mengandung unsur kekerasan, bahasa kasar, tema menakutkan, perjudian, ataupun konten yang berpotensi memberikan dampak negatif bagi perkembangan anak. Karakter dan visual biasanya disajikan dengan gaya ramah anak, penuh warna, serta berfokus pada edukasi, kreativitas, hiburan ringan, atau aktivitas sederhana yang mudah dipahami.','http://localhost:3000/assets/Rating/Rating3.png',3),(2,'7+','Konten sesuai untuk usia 7 tahun ke atas.','Game dengan rating 7+ ditujukan untuk anak usia sekolah dasar dan dapat mengandung unsur fantasi ringan atau situasi yang sedikit menegangkan. Kontennya mungkin menampilkan karakter kartun yang terlibat dalam konflik sederhana, efek visual yang tidak realistis, atau interaksi antar pemain yang terbatas. Meskipun masih tergolong aman untuk anak-anak, pendampingan orang tua tetap disarankan agar anak dapat memahami konteks permainan dengan baik.','http://localhost:3000/assets/Rating/Rating7.png',7),(3,'13+','Konten sesuai untuk usia 13 tahun ke atas.','Game dengan rating 13+ mengandung konten yang mungkin tidak sepenuhnya sesuai untuk anak di bawah usia 13 tahun. Kategori ini dapat mencakup kekerasan ringan hingga sedang, penggunaan bahasa yang sedikit kasar, tema emosional yang lebih kompleks, atau interaksi daring dengan pemain lain. Beberapa permainan juga dapat memperkenalkan unsur strategi, konflik, atau cerita yang membutuhkan tingkat pemahaman yang lebih matang. Orang tua disarankan untuk melakukan pendampingan dan memahami isi permainan sebelum diberikan kepada anak.','http://localhost:3000/assets/Rating/Rating13.png',13),(4,'15+','Konten sesuai untuk usia 15 tahun ke atas.','Game dengan rating 15+ ditujukan untuk remaja yang memiliki tingkat kedewasaan lebih tinggi. Kontennya dapat mencakup adegan kekerasan yang lebih intens, penggunaan bahasa yang lebih tegas, tema sosial atau emosional yang kompleks, serta situasi yang memerlukan penilaian dan pemahaman yang lebih matang. Beberapa permainan juga dapat menampilkan unsur kompetitif yang tinggi atau interaksi daring yang lebih luas. Disarankan agar orang tua atau wali tetap memperhatikan jenis konten yang diakses.','http://localhost:3000/assets/Rating/Rating15.png',15),(5,'18+','Konten hanya untuk orang dewasa usia 18 tahun ke atas.','Game dengan rating 18+ secara khusus ditujukan untuk orang dewasa dan tidak direkomendasikan bagi anak-anak maupun remaja. Kontennya dapat mengandung kekerasan intens, bahasa vulgar, perjudian, penggunaan zat adiktif, tema sensitif, atau unsur seksual yang memerlukan tingkat kedewasaan penuh untuk dipahami secara tepat. Permainan dalam kategori ini sering kali menghadirkan pengalaman yang lebih realistis dan kompleks, sehingga pengguna disarankan memiliki pertimbangan serta tanggung jawab dalam mengakses kontennya.','http://localhost:3000/assets/Rating/Rating18.png',18);
/*!40000 ALTER TABLE `ratings` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-05-31 16:10:18
