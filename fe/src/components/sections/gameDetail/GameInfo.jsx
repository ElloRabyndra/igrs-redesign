import { useNavigate } from "react-router";
import { ChevronLeft } from "lucide-react";
import GameHeader from "./GameHeader";
import GameCover from "./GameCover";
import GameDescription from "./GameDescription";
import GameCategories from "./GameCategories";

const GameInfo = ({ game }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-6">
      {/* Back Button */}
      <div>
        <button
          onClick={() => navigate(-1)}
          className="flex sm:text-2xl md:text-lg items-center gap-2 text-slate-600 hover:text-primary-navy font-medium transition-colors cursor-pointer"
        >
          <ChevronLeft size={20} /> Kembali
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Left: Game Cover */}
        <GameCover gameImg={game.image_url} gameTitle={game.title} />

        {/* Right: Info */}
        <div className="flex-1 flex flex-col pt-2 lg:pt-4">
          {/* Header row: Title & Rating */}
          <GameHeader
            gameTitle={game.title}
            gamePublisher={game.publisher}
            ratingImg={game.rating?.image_url}
          />

          {/* Description Card */}
          <GameDescription gameDescription={game.description} />

          {/* Categories */}
          {game.content_classification &&
            game.content_classification.length > 0 && (
              <GameCategories
                gameContentClassification={game.content_classification}
              />
            )}
        </div>
      </div>
    </div>
  );
};

export default GameInfo;
