import ClassificationCard from "./ContentWarning/ClassificationCard";
import EllipseGradients from "./ContentWarning/EllipseGradients";

const ContentWarning = ({ classifications = [] }) => {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-surface-offwhite">
      {/* Background Ellipse Gradients */}
      <EllipseGradients />
      <div className="relative mx-auto max-w-[1400px] px-6 md:px-12 xl:px-16">
        {/* Heading */}
        <h2 className="gradient-text text-3xl sm:text-4xl md:text-5xl font-extrabold text-center">
          Kenali Kawasan Tak Aman
        </h2>

        {/* Masonry Grid: 4 columns on desktop, 2 on tablet, 1 on mobile */}
        <div className="mt-16 md:mt-24 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">
          {classifications.map((item) => (
            <ClassificationCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentWarning;
