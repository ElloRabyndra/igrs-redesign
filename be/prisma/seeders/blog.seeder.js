import { PrismaClient } from '@prisma/client';

export async function seedBlogs(prisma) {


  const blogs = [
    {
      id: 1,
      title: "Pemberitahuan Terkait Proses Verifikasi IGRS",
      slug: "pemberitahuan-terkait-proses-verifikasi-igrs",
      description: "Informasi terbaru mengenai proses verifikasi IGRS, termasuk tahapan peninjauan, evaluasi konten, dan estimasi waktu yang diperlukan untuk menyelesaikan proses klasifikasi game.",
      image_url: "http://localhost:3000/assets/Blog/blog1.png",
    },
    {
      id: 2,
      title: "Panduan Aplikasi Konten IGRS Untuk Developer",
      slug: "panduan-aplikasi-konten-igrs-untuk-developer",
      description: "Panduan lengkap bagi developer untuk mengajukan klasifikasi game melalui sistem IGRS, mulai dari proses registrasi, pengisian data, hingga pengiriman konten untuk ditinjau.",
      image_url: "http://localhost:3000/assets/Blog/blog2.png",
    },
    {
      id: 3,
      title: "Gim Terbaru di IGRS",
      slug: "gim-terbaru-di-igrs",
      description: "Daftar gim terbaru yang telah masuk ke dalam sistem IGRS beserta informasi terkait klasifikasi usia dan kategori konten yang telah ditetapkan.",
      image_url: "http://localhost:3000/assets/Blog/blog3.png",
    }
  ];

  for (const blog of blogs) {
    await prisma.blog.upsert({
      where: { id: blog.id },
      update: blog,
      create: blog,
    });
  }

  console.log('✅ Blogs seeded');
}
