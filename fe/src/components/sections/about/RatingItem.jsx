const RatingItem = ({ rating }) => {
  return (
    <div className="flex items-center gap-6 sm:gap-3">
      {rating.image_url && (
        <img
          src={rating.image_url}
          alt={`Rating ${rating.title}`}
          className="w-15 sm:w-14 object-cover "
        />
      )}
      <div className="text-center">
        <p className="text-3xl font-bold text-black leading-none">
          {rating.count}
        </p>
        <p className="text-sm text-black mt-1">
          Jumlah Gim Dengan rating {rating.title}
        </p>
      </div>
    </div>
  );
};

export default RatingItem;