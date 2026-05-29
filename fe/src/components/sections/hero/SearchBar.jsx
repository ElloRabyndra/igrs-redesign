const SearchBar = () => {
  return (
    <div className="bg-white p-1 sm:p-1.5 md:p-2.5 rounded-full flex w-full max-w-[760px] shadow-search transition-transform focus-within:scale-[1.02]">
      <div className="flex-1 flex items-center px-6">
        <input
          type="text"
          placeholder="Cari Gim, Contoh: Genshin Impact"
          className="w-full bg-transparent outline-none text-text-dark placeholder-gray-400 text-base md:text-lg font-medium"
        />
      </div>
      <button className="bg-primary-navy text-white px-10 md:px-12 py-3.5 md:py-4 rounded-full font-bold text-base md:text-lg hover:bg-blue-mid transition shadow-md whitespace-nowrap">
        Cari
      </button>
    </div>
  );
};

export default SearchBar;
