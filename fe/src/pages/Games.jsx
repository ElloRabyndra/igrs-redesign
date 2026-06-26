import { useState, useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import GameList from "../components/sections/GameList";
import GamesSkeleton from "../components/ui/GamesSkeleton";
import ErrorState from "../components/ui/ErrorState";
import { getGames } from "../service/api";

const Games = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [games, setGames] = useState([]);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(false);
      const data = await getGames();
      setGames(data);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <GamesSkeleton />;
  }

  if (error) {
    return <ErrorState onRetry={fetchData} />;
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
