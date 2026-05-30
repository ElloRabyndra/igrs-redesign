import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import GameCard from "./GameCard";

const GameCarrousel = ({ displayGames, setSwiperInstance }) => {
  return (
    <div className="relative py-12">
      <Swiper
        onSwiper={setSwiperInstance}
        spaceBetween={16}
        slidesPerView="auto"
        centeredSlides={true}
        grabCursor={true}
        loop={true}
        style={{
          overflow: "visible",
        }}
        className="overflow-visible"
      >
        {displayGames.map((game, i) => (
          <SwiperSlide
            key={`${game.id}-${i}`}
            style={{
              width: "clamp(160px, 18vw, 240px)",
            }}
          >
            <GameCard game={game} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default GameCarrousel;
