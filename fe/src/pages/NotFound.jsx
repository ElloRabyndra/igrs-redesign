import { Link } from "react-router";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-surface-offwhite flex flex-col">
      <Navbar variant="white" />
      <main className="flex-1 mt-16 mx-auto max-w-[1280px] px-6 md:px-12 xl:px-16 pt-12 md:pt-20 pb-24 w-full flex flex-col justify-center">
        <div className="relative rounded-[32px] md:rounded-[40px] bg-primary-navy overflow-hidden px-8 py-14 md:px-16 md:py-20 text-center shadow-lg">
          <div className="relative z-10 space-y-6">
            <h1 className="text-6xl md:text-8xl font-black text-accent-teal mb-2 drop-shadow-md">
              404
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-snug">
              Halaman Tidak Ditemukan
            </h2>
            <p className="text-slate-300 max-w-[500px] mx-auto text-sm md:text-base mb-4">
              Maaf, halaman yang Anda cari tidak ada, telah dipindahkan, atau Anda salah memasukkan URL.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <Link
                to="/"
                className="bg-primary-green hover:bg-green-dark text-white font-bold px-8 py-3.5 rounded-full transition text-sm md:text-base shadow-md inline-block"
              >
                Kembali ke Beranda
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
