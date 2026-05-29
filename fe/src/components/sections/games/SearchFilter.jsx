import { Search, ChevronDown } from "lucide-react";

const SearchFilter = ({
  search,
  setSearch,
  selectedRating,
  setSelectedRating,
  dropdownOpen,
  setDropdownOpen,
  RATING_OPTIONS,
}) => {
  const selectedLabel =
    RATING_OPTIONS.find((o) => o.value === selectedRating)?.label ||
    "Semua Kategori";

  return (
    <>
      {/* Search bar */}
      <div className="mb-8">
        <div className="bg-white p-1.5 md:p-2 rounded-full flex w-full max-w-[700px] mx-auto shadow-md border border-border-card transition-shadow hover:shadow-lg">
          <div className="flex-1 flex items-center px-4 md:px-6 gap-3">
            <Search size={20} className="text-slate-400 shrink-0" />
            <input
              type="text"
              placeholder="Cari Gim, Contoh: Granny"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-transparent outline-none text-primary-navy placeholder-gray-400 text-[15px] font-medium"
            />
          </div>
          <button className="bg-primary-navy text-white px-8 md:px-10 py-2.5 md:py-3.5 rounded-full font-bold text-sm hover:bg-blue-dark transition whitespace-nowrap shadow-sm">
            Cari
          </button>
        </div>
      </div>

      {/* Filter dropdown */}
      <div className="flex justify-end mb-8 relative z-20">
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-2 bg-accent-teal text-white font-bold text-sm px-6 py-3 rounded-xl hover:bg-teal-600 transition shadow-sm"
          >
            {selectedLabel}
            <ChevronDown
              size={18}
              className={`transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
            />
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-2xl border border-border-card shadow-xl overflow-hidden py-1">
              {RATING_OPTIONS.map((option) => (
                <button
                  key={option.value}
                  onClick={() => {
                    setSelectedRating(option.value);
                    setDropdownOpen(false);
                  }}
                  className={`w-full text-left px-5 py-3 text-sm font-medium transition ${
                    selectedRating === option.value
                      ? "bg-accent-teal/10 text-accent-teal font-bold"
                      : "text-primary-navy hover:bg-surface-subtle"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchFilter;
