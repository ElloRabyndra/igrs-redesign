import GameCard from "./GameCard";

const GamesGrid = ({ filteredGames }) => {
  return (
    <>
      {filteredGames.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 md:gap-6">
          {filteredGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-slate-400 text-lg">
            Tidak ada game yang ditemukan.
          </p>
        </div>
      )}
    </>
  );
};

export default GamesGrid;
