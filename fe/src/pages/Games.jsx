import { useState, useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import GameList from "../components/sections/GameList";
import { getGames } from "../service/api";

const Games = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getGames();
      setGames(data);
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-surface-offwhite flex flex-col">
      <Navbar variant="white" />
      <GameList games={games} />
      <Footer />
    </div>
  );
};

export default Games;
