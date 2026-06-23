import { Link } from "react-router";

const MobileMenu = ({ navLinks, mobileOpen, setMobileOpen, location }) => {
  if (!mobileOpen) return null;

  return (
    <div className="lg:hidden px-6 pb-6 space-y-4 border-t border-white/10 shadow-lg">
      {navLinks.map((link) => (
        <Link
          key={link.to}
          to={link.to}
          onClick={() => setMobileOpen(false)}
          className={`block py-2 text-white font-medium ${
            (link.to === "/" ? location.pathname === "/" : location.pathname.startsWith(link.to))
              ? "text-primary-green font-bold"
              : "hover:text-primary-green transition-colors"
          }`}
        >
          {link.label}
        </Link>
      ))}
      <div className="flex items-center gap-4 pt-4 border-t border-white/10">
        <Link
          to="/login"
          onClick={() => setMobileOpen(false)}
          className="text-white font-bold text-sm flex-1 text-center py-2 hover:text-gray-300 transition-colors"
        >
          Masuk
        </Link>
        <Link
          to="/register"
          onClick={() => setMobileOpen(false)}
          className="bg-primary-blue text-white px-6 py-2 rounded-full font-bold text-sm flex-1 text-center hover:bg-blue-mid transition-colors shadow-md"
        >
          Daftar
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;