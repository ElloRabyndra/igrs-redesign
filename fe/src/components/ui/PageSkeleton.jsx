import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

const PageSkeleton = () => {
  return (
    <div className="min-h-screen bg-surface-offwhite flex flex-col">
      <Navbar variant="white" />
      <main className="flex-1 mt-24 mb-32 px-6 md:px-12 xl:px-16 max-w-[1280px] mx-auto w-full animate-pulse flex flex-col gap-10 md:gap-14">
        {/* Banner Skeleton */}
        <div className="w-full h-[300px] md:h-[400px] bg-slate-200/60 rounded-[32px] md:rounded-[40px]"></div>
        
        {/* Text Content Skeleton */}
        <div className="space-y-4">
          <div className="h-10 md:h-12 bg-slate-200/60 rounded-full w-1/2 md:w-1/3 mb-6"></div>
          <div className="h-4 md:h-5 bg-slate-200/60 rounded-full w-3/4 md:w-2/3"></div>
          <div className="h-4 md:h-5 bg-slate-200/60 rounded-full w-2/3 md:w-1/2"></div>
        </div>

        {/* Grid Skeleton */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5 md:gap-6 mt-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="aspect-2/3 sm:aspect-square bg-slate-200/60 rounded-[32px]"></div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PageSkeleton;
