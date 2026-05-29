const GameHeader = ({ gameTitle, gamePublisher, ratingImg }) => {
  return (
    <div className="flex items-start justify-between gap-4 mb-8">
      <div>
        <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-primary-navy leading-tight mb-2">
          {gameTitle}
        </h1>
        <p className="text-slate-500 font-medium text-sm sm:text-base">
          {gamePublisher || "Unknown Publisher"}
        </p>
      </div>
      {ratingImg && (
        <img
          src={ratingImg}
          alt="Rating"
          className="w-14 sm:w-16 lg:w-20 object-contain shrink-0 drop-shadow-md"
        />
      )}
    </div>
  );
};

export default GameHeader;
