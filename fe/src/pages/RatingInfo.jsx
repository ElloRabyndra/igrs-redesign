import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import RatingInfoSkeleton from "../components/ui/RatingInfoSkeleton";
import { getRatings, getRatingDetail } from "../service/api";
import Rating from "../components/sections/Rating";

const RatingInfo = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [ratings, setRatings] = useState([]);
  const [activeRatingDetail, setActiveRatingDetail] = useState(null);

  const activeId = id ? parseInt(id, 10) : 1;

  useEffect(() => {
    if (!id) {
      navigate("/informasi-rating/1", { replace: true });
    }
  }, [id, navigate]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const ratingsData = await getRatings();
        setRatings(ratingsData);

        const detailData = await getRatingDetail(activeId);
        setActiveRatingDetail(detailData);
      } catch (error) {
        console.error("Failed to fetch rating info:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [activeId]);

  if (loading) {
    return <RatingInfoSkeleton />;
  }

  if (!activeRatingDetail) return null;

  return (
    <div className="min-h-screen bg-surface-offwhite flex flex-col">
      <Navbar variant="white" />
      <Rating
        ratings={ratings}
        activeId={activeId}
        activeRatingDetail={activeRatingDetail}
      />
      <Footer />
    </div>
  );
};

export default RatingInfo;
