import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

const BackCard = () => {
  return (
    <div className="absolute left-0 top-0 w-[68%] h-5/6 bg-linear-to-br from-primary-blue to-green-dark rounded-[40px] sm:rounded-[70px] lg:rounded-[90px] xl:rounded-[130px] flex items-center justify-center pr-[12%]">
      <div className="flex flex-col items-center text-center gap-1 sm:gap-2 lg:gap-3">
        <p className="text-white text-2xl sm:text-4xl xl:text-5xl font-bold">
          5225
        </p>
        <p className="text-white text-[10px] sm:text-xs xl:text-sm max-w-25 leading-tight sm:leading-normal">
          Total gim yang
          <br />
          terdaftar
        </p>

        {/* Button */}
        <Link
          to="/daftar-game"
          className="mt-1 sm:mt-2 w-12 h-7 xl:w-15 xl:h-8.5 rounded-full bg-white/30 relative flex items-center group overflow-hidden"
        >
          <div className="w-6 h-6 sm:w-7 sm:h-7 xl:w-8.5 xl:h-8.5 bg-white rounded-full flex items-center justify-center absolute left-0 group-hover:translate-x-4 sm:group-hover:translate-x-5 xl:group-hover:translate-x-6.5 transition-transform duration-300 shadow-sm">
            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 xl:w-5 xl:h-5 text-black" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BackCard;
