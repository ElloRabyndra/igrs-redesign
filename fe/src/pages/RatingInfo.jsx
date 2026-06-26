import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import RatingInfoSkeleton from "../components/ui/RatingInfoSkeleton";
import ErrorState from "../components/ui/ErrorState";
import { getRatings, getRatingDetail } from "../service/api";
import Rating from "../components/sections/Rating";

const RatingInfo = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [ratings, setRatings] = useState([]);
  const [activeRatingDetail, setActiveRatingDetail] = useState(null);

  const activeId = id ? parseInt(id, 10) : 1;

  useEffect(() => {
    if (!id) {
      navigate("/informasi-rating/1", { replace: true });
    }
  }, [id, navigate]);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(false);
      const ratingsData = await getRatings();
      setRatings(ratingsData);

      const detailData = await getRatingDetail(activeId);
      setActiveRatingDetail(detailData);
    } catch (err) {
      console.error("Failed to fetch rating info:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [activeId]);

  if (loading) {
    return <RatingInfoSkeleton />;
  }

  if (error) {
    return <ErrorState onRetry={fetchData} />;
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
