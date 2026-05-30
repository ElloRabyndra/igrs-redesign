import { ArrowRight } from "lucide-react";

const BlogHeader = () => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10 md:mb-14">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary-navy">
        Blog Pengumuman
      </h2>
      <button className="hidden sm:flex items-center justify-center text-sm font-semibold bg-primary-blue text-white px-5 py-3 rounded-lg gap-2 hover:bg-blue-dark transition-colors">
        <span>Lihat Semua</span>
        <div>
          <ArrowRight size={18} />
        </div>
      </button>
    </div>
  );
};

export default BlogHeader;
