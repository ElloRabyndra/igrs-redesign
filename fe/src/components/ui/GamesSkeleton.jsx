import Navbar from "../layout/Navbar";

const GamesSkeleton = () => {
  return (
    <div className="min-h-screen bg-surface-offwhite flex flex-col">
      <Navbar variant="white" />
      
      <main className="flex-1 mt-16 mx-auto max-w-[1280px] px-6 md:px-12 xl:px-16 pt-8 md:pt-12 pb-24 w-full animate-pulse">
        {/* Search Bar Skeleton */}
        <div className="mb-8 flex justify-center">
          <div className="w-full max-w-[700px] h-14 md:h-[60px] bg-slate-200/60 rounded-full"></div>
        </div>

        {/* Filter Dropdown Skeleton */}
        <div className="flex justify-end mb-8">
          <div className="w-40 h-[44px] md:h-12 bg-slate-200/60 rounded-xl"></div>
        </div>

        {/* Games Grid Skeleton */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 md:gap-6">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-[32px] p-4 md:p-5 border border-slate-200/50 shadow-sm flex flex-col h-full"
            >
              <div className="rounded-[20px] mb-4 aspect-square bg-slate-200/60 shrink-0"></div>
              <div className="flex flex-col gap-2 mt-auto">
                <div className="w-3/4 h-5 bg-slate-200/60 rounded-md"></div>
                <div className="flex items-end justify-between gap-3 mt-1">
                  <div className="w-1/2 h-4 bg-slate-200/60 rounded-md"></div>
                  <div className="w-10 h-12 bg-slate-200/60 rounded-md shrink-0"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default GamesSkeleton;
