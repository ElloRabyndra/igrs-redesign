import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

const HomeSkeleton = () => {
  return (
    <div className="min-h-screen bg-surface-offwhite flex flex-col">
      <Navbar />
      <main className="flex-1 w-full animate-pulse flex flex-col">
        {/* Hero Section Skeleton */}
        <section className="relative w-full min-h-[700px] lg:min-h-[750px] xl:min-h-[700px] bg-primary-navy overflow-hidden flex flex-col items-center justify-center">
          <div className="relative z-50 flex flex-col items-center justify-center text-center px-6 w-full max-w-[900px] mt-10">
            {/* Title Skeleton */}
            <div className="w-3/4 max-w-[600px] h-20 sm:h-24 md:h-32 lg:h-[120px] bg-white/10 rounded-2xl mb-6"></div>
            {/* Subtitle Skeleton */}
            <div className="w-2/3 max-w-[450px] h-6 md:h-8 bg-white/10 rounded-full mb-12"></div>
            {/* Search Bar Skeleton */}
            <div className="w-full h-[60px] md:h-[72px] lg:h-[80px] bg-white/10 rounded-full"></div>
          </div>
          {/* Character / Side Elements Placeholders */}
          <div className="absolute inset-0 flex justify-between items-center px-10 opacity-30 pointer-events-none overflow-hidden">
            <div className="w-[300px] h-[500px] bg-white/5 rounded-full -ml-32 mt-40"></div>
            <div className="w-[300px] h-[500px] bg-white/5 rounded-full -mr-32 mt-40"></div>
          </div>
          {/* Bottom White Triangle Simulation */}
          <div className="absolute bottom-0 w-full h-32 bg-linear-to-b from-transparent to-surface-offwhite opacity-80"></div>
        </section>

        {/* Content Below Hero Skeleton */}
        <section className="w-full px-6 md:px-12 xl:px-16 max-w-[1280px] mx-auto mt-20 mb-32 flex flex-col gap-10">
          <div className="flex flex-col items-center text-center mb-10 space-y-4">
             <div className="w-40 h-8 bg-slate-200/60 rounded-full"></div>
             <div className="w-3/4 max-w-[600px] h-4 bg-slate-200/60 rounded-full"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="aspect-[4/5] bg-slate-200/60 rounded-[32px]"></div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomeSkeleton;
