import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

const RatingInfoSkeleton = () => {
  return (
    <div className="min-h-screen bg-surface-offwhite flex flex-col">
      <Navbar variant="white" />
      
      <main className="flex-1 mt-24 px-6 md:px-12 xl:px-24 max-w-[1440px] mx-auto w-full mb-20 animate-pulse">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-start">
          
          {/* Sidebar Skeleton */}
          <div className="w-full lg:w-[240px] xl:w-[280px] shrink-0 bg-white rounded-[20px] p-4 lg:p-5 shadow-sm border border-slate-100">
            <div className="h-12 bg-slate-200/60 rounded-full mb-4"></div>
            <div className="space-y-2">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-10 bg-slate-200/60 rounded-full"></div>
              ))}
            </div>
          </div>

          {/* Right Content Skeleton */}
          <div className="flex-1 w-full bg-white rounded-[20px] shadow-sm border border-slate-100 p-5 md:p-8 flex flex-col md:flex-row gap-5 md:gap-8 items-start">
            
            {/* Image Skeleton */}
            <div className="w-[120px] sm:w-[150px] lg:w-[180px] shrink-0 mx-auto md:mx-0">
              <div className="w-full aspect-square bg-slate-200/60 rounded-[20px]"></div>
            </div>
            
            {/* Detail Skeleton */}
            <div className="flex-1 w-full">
              {/* Badge */}
              <div className="w-48 h-6 bg-slate-200/60 rounded-full mb-4"></div>
              
              {/* Title */}
              <div className="w-40 h-8 bg-slate-200/60 rounded-full mb-6"></div>
              
              {/* Description Box */}
              <div className="bg-slate-50 rounded-2xl p-5 md:p-6 border border-slate-100">
                <div className="space-y-3">
                  <div className="h-3 w-full bg-slate-200/60 rounded-full"></div>
                  <div className="h-3 w-full bg-slate-200/60 rounded-full"></div>
                  <div className="h-3 w-11/12 bg-slate-200/60 rounded-full"></div>
                  <div className="h-3 w-4/5 bg-slate-200/60 rounded-full"></div>
                  <div className="h-3 w-full bg-slate-200/60 rounded-full"></div>
                  <div className="h-3 w-2/3 bg-slate-200/60 rounded-full"></div>
                </div>
              </div>
            </div>
            
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default RatingInfoSkeleton;
