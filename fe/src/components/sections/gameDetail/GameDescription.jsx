const GameDescription = ({gameDescription}) => {
  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-border-card/30 mb-10">
      <h3 className="font-bold text-primary-navy mb-4 text-lg">
        Deskripsi Game
      </h3>
      <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
        {gameDescription}
      </p>
    </div>
  );
};

export default GameDescription;
