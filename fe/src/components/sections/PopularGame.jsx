import { useRef } from "react";
import NavArrows from "./popularGame/NavArrows";
import TopWave from "./popularGame/TopWave";
import GameCarrousel from "./popularGame/GameCarrousel";

const PopularGame = ({ games = [] }) => {
  const prevRef = useRef(null);

  const nextRef = useRef(null);

  const featured = games.slice(5, 12);

  const displayGames = [...featured, ...featured, ...featured, ...featured];

  return (
    <section className="relative overflow-hidden w-full rounded-b-[40px]">
      {/* Top wave */}
      <TopWave />
      {/* Main content */}
      <div className="bg-primary-navy pb-4">
        <div className="text-center px-6 md:px-12 xl:px-16">
          <h2 className="gradient-text-highlight text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3">
            Paling Banyak dicari
          </h2>
          <p className="text-white/60 text-sm md:text-base mb-10 md:mb-14">
            Berdasarkan data pencarian mingguan di portal IGRS
          </p>
        </div>
        {/* Carrousel Popular Game */}
        <GameCarrousel
          displayGames={displayGames}
          prevRef={prevRef}
          nextRef={nextRef}
        />
        {/* Nav arrows */}
        <NavArrows prevRef={prevRef} nextRef={nextRef} />
      </div>
    </section>
  );
};

export default PopularGame;
