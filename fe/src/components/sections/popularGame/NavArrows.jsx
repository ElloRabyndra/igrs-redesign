import { ChevronLeft, ChevronRight } from "lucide-react";

const NavArrows = ({ prevRef, nextRef }) => {
  return (
    <div className="flex items-center justify-center gap-4 pb-6">
      <button
        ref={prevRef}
        className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition"
        aria-label="Previous"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        ref={nextRef}
        className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-green text-white hover:bg-green-dark transition"
        aria-label="Next"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
};

export default NavArrows;
