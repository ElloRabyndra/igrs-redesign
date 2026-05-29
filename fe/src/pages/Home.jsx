import { useState, useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import PopularGame from "../components/sections/PopularGame";
import ContentWarning from "../components/sections/ContentWarning";
import BlogPengumuman from "../components/sections/BlogPengumuman";
import GameRegister from "../components/sections/GameRegister";
import Footer from "../components/layout/Footer";
import HomeSkeleton from "../components/ui/HomeSkeleton";
import {
  getRatings,
  getGames,
  getContentClassifications,
  getBlogs,
} from "../service/api";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [ratings, setRatings] = useState([]);
  const [games, setGames] = useState([]);
  const [classifications, setClassifications] = useState([]);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [ratingsData, gamesData, classData, blogsData] =
          await Promise.all([
            getRatings(),
            getGames(),
            getContentClassifications(),
            getBlogs(),
          ]);

        setRatings(ratingsData);
        setGames(gamesData);
        setClassifications(classData);
        setBlogs(blogsData);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <HomeSkeleton />;
  }

  return (
    <main className="bg-surface-offwhite min-h-screen">
      <Navbar />
      <Hero />
      <About ratings={ratings} />
      <PopularGame games={games} />
      <ContentWarning classifications={classifications} />
      <BlogPengumuman blogs={blogs} />
      <GameRegister />
      <Footer />
    </main>
  );
};

export default Home;
