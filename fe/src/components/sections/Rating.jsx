import RatingDetail from "./ratingInfo/RatingDetail";
import RatingImage from "./ratingInfo/RatingImage";
import RatingSidebar from "./ratingInfo/RatingSidebar";

const Rating = ({ ratings, activeId, activeRatingDetail }) => {
  return (
    <main className="flex-1 mt-24 px-6 md:px-12 xl:px-24 max-w-[1440px] mx-auto w-full mb-20">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-start">
        <RatingSidebar ratings={ratings} activeId={activeId} />

        <div className="flex-1 w-full bg-white rounded-[20px] shadow-sm p-5 md:p-8 flex flex-col md:flex-row gap-5 md:gap-8 items-start">
          <RatingImage
            ratingImageUrl={activeRatingDetail.image_url}
            ratingTitle={activeRatingDetail.title}
          />

          <RatingDetail
            ratingTitle={activeRatingDetail.title}
            ratingDescription={activeRatingDetail.description}
          />
        </div>
      </div>
    </main>
  );
};

export default Rating;
