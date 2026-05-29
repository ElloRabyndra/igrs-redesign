import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logoFull from "../../assets/igrs-logo-full.png";
import MobileMenu from "./MobileMenu";

const navLinks = [
  { label: "Beranda", to: "/" },
  { label: "Game", to: "/daftar-game" },
  { label: "Informasi Rating", to: "/informasi-rating" },
  { label: "Konsultasi Adiksi", to: "/konsultasi-adiksi" },
];

const Navbar = ({ variant = "default" }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isDefault = variant === "default";

  const navTextColor =
    mobileOpen || isDefault ? "text-white" : "text-primary-navy";
  const navBg = mobileOpen ? "bg-primary-navy/40 backdrop-blur-md" : "";

  return (
    <nav
      className={`absolute top-0 w-full z-100 transition-colors duration-150 ${navBg} ${navTextColor}`}
    >
      <div className="flex items-center justify-between px-6 py-6 md:px-12 xl:px-24 max-w-[1440px] mx-auto">
        <Link to="/" className="shrink-0">
          <img
            src={logoFull}
            alt="IGRS Logo"
            className="h-10 sm:h-12 md:h-14 object-contain"
          />
        </Link>

        {/* Desktop nav links */}
        <div className="hidden lg:flex items-center gap-10 font-bold text-[15px]">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={
                location.pathname === link.to
                  ? "text-primary-green font-bold"
                  : "hover:text-primary-green transition"
              }
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Auth buttons + mobile toggle */}
        <div className="flex items-center gap-4 sm:gap-6">
          <Link
            to="/login"
            className={`hidden sm:inline font-bold text-sm transition ${navTextColor}`}
          >
            Masuk
          </Link>
          <Link
            to="/register"
            className="hidden sm:inline bg-primary-blue text-white px-6 py-2 rounded-full font-bold text-sm hover:bg-blue-mid transition shadow-md"
          >
            Daftar
          </Link>

          {/* Hamburger */}
          <button
            className={`lg:hidden transition-colors ${navTextColor}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <MobileMenu
        navLinks={navLinks}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        location={location}
      />
    </nav>
  );
};

export default Navbar;
