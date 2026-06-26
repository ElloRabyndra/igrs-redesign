const RatingImage = ({ ratingTitle, ratingImageUrl }) => {
  return (
    <div className="w-[120px] sm:w-[150px] lg:w-[180px] shrink-0 mx-auto lg:mx-0">
      <div className="w-full aspect-square flex items-center justify-center overflow-hidden">
        {ratingImageUrl ? (
          <img
            src={ratingImageUrl}
            alt={`Rating ${ratingTitle}`}
            className="w-full h-full object-contain"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-slate-50 rounded-[14px]">
            <span className="font-bold text-slate-400 text-3xl">{ratingTitle}+</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default RatingImage;
