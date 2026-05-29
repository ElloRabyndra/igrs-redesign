import { useState, useMemo } from "react";
import GamesGrid from "./games/GamesGrid";
import SearchFilter from "./games/SearchFilter";
import { RATING_OPTIONS } from "../../mock/constants";

const GameList = ({ games }) => {
  const [search, setSearch] = useState("");
  const [selectedRating, setSelectedRating] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const filteredGames = useMemo(() => {
    return games.filter((game) => {
      const matchSearch = game.title
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchRating =
        selectedRating === "" || game.rating?.id === selectedRating;
      return matchSearch && matchRating;
    });
  }, [games, search, selectedRating]);

  return (
    <main className="flex-1 mt-16 mx-auto max-w-[1280px] px-6 md:px-12 xl:px-16 pt-8 md:pt-12 pb-24 w-full">
      {/* Modular Search and Filter */}
      <SearchFilter
        search={search}
        setSearch={setSearch}
        selectedRating={selectedRating}
        setSelectedRating={setSelectedRating}
        dropdownOpen={dropdownOpen}
        setDropdownOpen={setDropdownOpen}
        RATING_OPTIONS={RATING_OPTIONS}
      />

      {/* Game grid */}
      <GamesGrid filteredGames={filteredGames} />
    </main>
  );
};

export default GameList;
