import { Link } from "react-router";
import { getGameImage, getRatingImage } from "../../../utils/mockHelpers";
import { ChevronRight } from "lucide-react";

const GameCard = ({ game }) => {
  const gameImg = getGameImage(game.slug, game.image_url);

  const ratingImg = getRatingImage(game.rating?.id, game.rating?.image_url);

  return (
    <Link
      to={`/game/${game.slug}`}
      className="game-card rounded-[28px] bg-white transition-all duration-300 cursor-pointer relative block"
    >
      {/* Game cover */}
      <div className="relative overflow-hidden rounded-[14px] mb-3 aspect-4/5">
        <img
          src={gameImg}
          alt={game.title}
          className="w-full h-full object-cover"
        />
      </div>
      {/* Info row */}
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <h4 className="font-bold text-sm text-black truncate leading-tight">
            {game.title}
          </h4>
          <p className="text-[11px] text-black/50 mt-1 flex items-center gap-0.5">
            Selengkapnya <ChevronRight size={12} />
          </p>
        </div>
        {ratingImg && (
          <img
            src={ratingImg}
            alt="Rating"
            className="w-9 h-11 object-contain shrink-0"
          />
        )}
      </div>
    </Link>
  );
};

export default GameCard;
