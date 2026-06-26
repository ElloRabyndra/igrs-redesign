import { ArrowRight, Calendar } from "lucide-react";

const BlogCard = ({ blog }) => {
  const formattedDate = new Date(blog.date).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="rounded-2xl border border-border-card bg-white/80 backdrop-blur-md overflow-hidden hover:shadow-lg transition group border-b-[6px] border-b-purple">
      {/* Image */}
      <div className="aspect-16/10 overflow-hidden bg-slate-100">
        {blog.image_url && (
          <img
            src={blog.image_url}
            alt={blog.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        )}
      </div>

      {/* Content */}
      <div className="p-5 md:p-6 space-y-3">
        <div className="flex items-center gap-2">
          <div className="bg-purple/10 p-1.5 text-purple rounded-lg">
            <Calendar size={15} />
          </div>
          <p className="text-xs text-slate-500 font-semibold">
            {formattedDate}
          </p>
        </div>
        <h3 className="font-bold text-primary-navy text-lg leading-snug line-clamp-2">
          {blog.title}
        </h3>
        <p className="text-sm text-slate-500 leading-relaxed line-clamp-3">
          {blog.description}
        </p>
        <button className="flex items-center gap-2 text-sm font-bold text-purple mt-2 hover:text-purple-mid transition-colors">
          <span>Baca Selengkapnya</span>
          <div className="bg-purple rounded-full text-white p-1">
            <ArrowRight size={16} />
          </div>
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
