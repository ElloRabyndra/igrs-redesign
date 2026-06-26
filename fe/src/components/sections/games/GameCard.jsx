import { Link } from "react-router";
import { ChevronRight } from "lucide-react";

const GameCard = ({ game }) => {
  return (
    <Link to={`/game/${game.slug}`} className="group block h-full">
      <div className="rounded-4xl bg-white p-4 md:p-5 shadow-sm border border-border-card/50 hover:shadow-xl transition-all duration-300 relative h-full flex flex-col">
        {/* Game cover */}
        <div className="relative overflow-hidden rounded-[20px] mb-4 aspect-square bg-surface-muted shrink-0">
          {game.image_url && (
            <img
              src={game.image_url}
              alt={game.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          )}
        </div>

        {/* Info row */}
        <div className="flex items-end justify-between gap-3 mt-auto">
          <div className="min-w-0 flex-1">
            <h4 className="font-bold text-base text-primary-navy truncate leading-tight">
              {game.title}
            </h4>
            <p className="text-xs text-slate-500 mt-1.5 flex items-center gap-0.5 group-hover:text-primary-blue transition-colors font-medium">
              Selengkapnya <ChevronRight size={14} className="opacity-70" />
            </p>
          </div>
          {game.rating?.image_url && (
            <img
              src={game.rating.image_url}
              alt="Rating"
              className="w-9 h-11 md:w-10 md:h-12 object-contain shrink-0 drop-shadow-sm"
            />
          )}
        </div>
      </div>
    </Link>
  );
};

export default GameCard;
