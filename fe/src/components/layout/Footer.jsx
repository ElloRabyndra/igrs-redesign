import { Link } from "react-router";
import { Share2, Mail } from "lucide-react";

const footerLinks = {
  tautanCepat: [
    { label: "Beranda", to: "/" },
    { label: "Tentang", to: "/tentang" },
    { label: "Informasi Rating", to: "/informasi-rating" },
    { label: "Game", to: "/daftar-game" },
  ],
  dukungan: [
    { label: "Kebijakan Privasi", to: "#" },
    { label: "Syarat & Ketentuan", to: "#" },
    { label: "Kontak Kami", to: "#" },
    { label: "FAQ", to: "#" },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-primary-navy text-white">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 xl:px-16 pt-16 pb-8">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 pb-10 border-b border-white/10">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">IGRS Portal</h3>
            <p className="text-sm leading-relaxed text-white/70 max-w-[300px]">
              Sistem klasifikasi permainan interaktif elektronik berdasarkan
              kategori konten dan kelompok usia pengguna di Indonesia.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#"
                className="flex items-center justify-center w-9 h-9 rounded-full border border-white/20 hover:bg-white/10 transition"
                aria-label="Share"
              >
                <Share2 size={16} />
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-9 h-9 rounded-full border border-white/20 hover:bg-white/10 transition"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Tautan Cepat */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Tautan Cepat</h3>
            <ul className="space-y-2.5">
              {footerLinks.tautanCepat.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-white/70 hover:text-white transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Dukungan */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Dukungan</h3>
            <ul className="space-y-2.5">
              {footerLinks.dukungan.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-white/70 hover:text-white transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 text-center">
          <p className="text-xs text-white/50">
            &copy; 2026 Indonesia Game Rating System (IGRS). Seluruh Hak Cipta
            Dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
