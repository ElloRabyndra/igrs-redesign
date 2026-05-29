import { useState, useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import GameList from "../components/sections/GameList";
import PageSkeleton from "../components/ui/PageSkeleton";
import { getGames } from "../service/api";

const Games = () => {
  const [loading, setLoading] = useState(true);
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getGames();
        setGames(data);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <PageSkeleton />;
  }

  return (
    <div className="min-h-screen bg-surface-offwhite flex flex-col">
      <Navbar variant="white" />
      <GameList games={games} />
      <Footer />
    </div>
  );
};

export default Games;
