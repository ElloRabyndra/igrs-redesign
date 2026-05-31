import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import GameDetailSkeleton from "../components/ui/GameDetailSkeleton";
import GameInfo from "../components/sections/gameDetail/GameInfo";
import ReviewSummary from "../components/sections/gameDetail/ReviewSummary";
import GameGallery from "../components/sections/gameDetail/GameGallery";
import { getGameDetail } from "../service/api";
import { getGameGallery } from "../utils/mockHelpers";

const GameDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [game, setGame] = useState(null);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        setLoading(true);
        const data = await getGameDetail(slug);

        if (!data) {
          // If game not found, could navigate to 404 or show error
          navigate("/404", { replace: true });
        } else {
          setGame(data);
        }
      } catch (error) {
        console.error("Failed to fetch game detail", error);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchDetail();
    }
  }, [slug, navigate]);

  if (loading) {
    return <GameDetailSkeleton />;
  }

  if (!game) return null;

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar variant="white" />
      <main className="flex-1 mt-24 px-6 md:px-12 xl:px-24 max-w-[1440px] mx-auto w-full">
        <GameInfo game={game} />
        <ReviewSummary summary={game.review_summary} />
        <GameGallery
          gallery={getGameGallery(game.id, game.game_gallery)}
          title={game.title}
        />
      </main>
      <Footer />
    </div>
  );
};

export default GameDetail;
