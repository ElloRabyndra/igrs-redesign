import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import GameCard from "./GameCard";

const GameCarrousel = ({ displayGames, prevRef, nextRef }) => {
  return (
    <div className="relative py-12">
      <Swiper
        modules={[Navigation]}
        spaceBetween={16}
        slidesPerView="auto"
        centeredSlides={true}
        grabCursor={true}
        loop={true}
        navigation={{
          prevEl: prevRef.current,

          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;

          swiper.params.navigation.nextEl = nextRef.current;
        }}
        style={{
          overflow: "visible",
        }}
        className="overflow-visible~"
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
