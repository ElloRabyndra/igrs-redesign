import { Link } from "react-router";
import logoFull from "../../assets/igrs-logo-full.png";

const Navbar = () => {
  return (
    <nav className="absolute top-0 w-full z-50 flex items-center justify-between px-6 py-8 md:px-12 xl:px-24 max-w-[1440px] left-1/2 -translate-x-1/2">
      <Link to="/" className="shrink-0 z-50">
        <img src={logoFull} alt="IGRS Logo" className="h-12 md:h-16 lg:h-20 object-contain" />
      </Link>
      
      <div className="hidden lg:flex items-center gap-10 text-white font-medium z-50">
        <Link to="/" className="text-primary-green font-bold">Beranda</Link>
        <Link to="/tentang" className="hover:text-primary-green transition">Tentang</Link>
        <Link to="/informasi-rating" className="hover:text-primary-green transition">Informasi Rating</Link>
        <Link to="/konsultasi" className="hover:text-primary-green transition">Konsultasi Adiksi</Link>
      </div>

      <div className="flex items-center gap-6 z-50 text-sm sm:text-base">
        <Link to="/login" className="text-white font-bold hover:text-gray-200">Masuk</Link>
        <Link to="/register" className="bg-primary-blue text-white px-8 py-2.5 rounded-full font-bold hover:bg-blue-mid transition shadow-md">
          Daftar
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
