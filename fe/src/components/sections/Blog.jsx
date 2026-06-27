import EllipseGradients from "./blog/EllipseGradients";
import BlogHeader from "./blog/BlogHeader";
import BlogCard from "./blog/BlogCard";

const Blog = ({ blogs = [] }) => {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-white">
      {/* Background Ellipse Gradients */}
      <EllipseGradients />

      <div className="relative mx-auto max-w-[1280px] px-6 md:px-12 xl:px-16">
        {/* Header */}
        <BlogHeader />
        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 min-h-64">
          {/* Blog Card */}
        </div>
      </div>
    </section>
  );
};

export default Blog;
