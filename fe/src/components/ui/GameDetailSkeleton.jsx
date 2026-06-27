import Navbar from "../layout/Navbar";

const GameDetailSkeleton = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar variant="white" />

      <main className="flex-1 mt-24 px-6 md:px-12 xl:px-24 max-w-[1440px] mx-auto w-full animate-pulse">
        {/* Game Info Section Skeleton */}
        <div className="flex flex-col gap-6">
          {/* Back Button Skeleton */}
          <div className="w-24 h-6 bg-slate-200/60 rounded-md"></div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Left: Game Cover */}
            <div className="shrink-0 w-full max-w-[720px] mx-auto lg:max-w-none lg:w-[350px] xl:w-[400px]">
              <div className="w-full bg-slate-200/60 rounded-4xl md:rounded-[40px] shadow-sm aspect-video lg:aspect-4/5"></div>
            </div>

            {/* Right: Info */}
            <div className="flex-1 flex flex-col pt-2 lg:pt-4">
              {/* Header row: Title & Rating */}
              <div className="flex items-start justify-between gap-4 mb-8">
                <div className="flex-1">
                  <div className="h-10 md:h-12 w-3/4 max-w-md bg-slate-200/60 rounded-full mb-3"></div>
                  <div className="h-5 w-1/3 max-w-[150px] bg-slate-200/60 rounded-full"></div>
                </div>
                {/* Rating Badge */}
                <div className="w-14 h-16 sm:w-16 sm:h-20 lg:w-20 lg:h-24 bg-slate-200/60 rounded-xl shrink-0"></div>
              </div>

              {/* Description Card */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-slate-100 mb-10">
                <div className="h-6 w-40 bg-slate-200/60 rounded-full mb-6"></div>
                <div className="space-y-3">
                  <div className="h-4 w-full bg-slate-200/60 rounded-full"></div>
                  <div className="h-4 w-full bg-slate-200/60 rounded-full"></div>
                  <div className="h-4 w-11/12 bg-slate-200/60 rounded-full"></div>
                  <div className="h-4 w-4/5 bg-slate-200/60 rounded-full"></div>
                </div>
              </div>

              {/* Categories */}
              <div>
                <div className="h-5 w-40 bg-slate-200/60 rounded-full mb-5"></div>
                <div className="flex flex-wrap gap-4">
                  <div className="w-32 h-12 md:h-14 bg-slate-200/60 rounded-full"></div>
                  <div className="w-40 h-12 md:h-14 bg-slate-200/60 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Review Summary Skeleton */}
        <div className="mt-16 md:mt-24">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 bg-slate-200/60 rounded-lg"></div>
            <div className="h-8 w-48 bg-slate-200/60 rounded-full"></div>
          </div>
          <div className="bg-surface-offwhite sm:bg-slate-100/70 rounded-3xl md:rounded-4xl p-8 md:p-12 border border-slate-200/50">
            <div className="space-y-4">
              <div className="h-5 w-full bg-slate-200/60 rounded-full"></div>
              <div className="h-5 w-full bg-slate-200/60 rounded-full"></div>
              <div className="h-5 w-3/4 bg-slate-200/60 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Game Gallery Skeleton */}
        <div className="mt-16 md:mt-24 mb-16 md:mb-24">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 bg-slate-200/60 rounded-lg"></div>
            <div className="h-8 w-48 bg-slate-200/60 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="rounded-3xl aspect-16/10 bg-slate-200/60 shadow-sm"
              ></div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default GameDetailSkeleton;
