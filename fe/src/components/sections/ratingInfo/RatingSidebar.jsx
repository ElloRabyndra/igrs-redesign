import { Link } from "react-router";

const RatingSidebar = ({ ratings, activeId }) => {
  return (
    <div className="w-full lg:w-[240px] xl:w-[280px] shrink-0 bg-white rounded-[20px] p-4 lg:p-5 shadow-sm">
      {/* Header */}
      <div className="bg-surface-subtle rounded-full py-2 px-4 mb-4 flex justify-center items-center h-[50px]">
        <h3 className="font-bold leading-[24px] bg-clip-text text-transparent bg-linear-to-r from-[#1A365D] to-primary-green text-center">
          Daftar Rating
        </h3>
      </div>

      {/* List */}
      <div className="flex flex-col gap-1.5">
        {ratings.map((rating) => {
          const isActive = rating.id === activeId;
          return (
            <Link
              key={rating.id}
              to={`/informasi-rating/${rating.id}`}
              className={`flex items-center gap-2 px-5 py-3 rounded-full transition-all duration-300 ${
                isActive
                  ? "bg-primary-green text-white font-medium"
                  : "bg-transparent text-primary-navy hover:bg-slate-50"
              }`}
            >
              <span className={`text-[14px] leading-[20px] ${isActive ? "font-bold" : "font-normal"}`}>
                Age Rating {rating.title}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default RatingSidebar;
