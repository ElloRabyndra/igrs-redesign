import BackCard from "./about/BackCard";
import FrontCard from "./about/FrontCard";
import RatingItem from "./about/RatingItem";
import TextContent from "./about/TextContent";

const About = ({ ratings = [] }) => {
  return (
    <section className="relative bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12 xl:px-16">
        {/* Section heading */}
        <h2 className="gradient-text text-3xl sm:text-4xl md:text-5xl font-extrabold text-center">
          Tentang Kami
        </h2>

        {/* Main Content */}
        <div className="mt-16 md:mt-20 flex flex-col lg:flex-row items-start gap-12 lg:gap-14">
          {/* Left text block */}
          <TextContent />

          {/* Right: stat cards */}
          <div className="relative w-full max-w-[340px] sm:max-w-[460px] lg:max-w-[500px] xl:max-w-[620px] shrink-0 mt-10 lg:mt-0 flex justify-center lg:justify-end mx-auto lg:mx-0">
            {/* Cards container */}
            <div className="relative w-full aspect-[1.66]">
              {/* Back/Left Card */}
              <BackCard />

              {/* Front/Right Card */}
              <FrontCard />
            </div>
          </div>
        </div>

        {/* Rating row */}
        <div className="mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 justify-items-center">
          {ratings.map((rating) => (
            <RatingItem key={rating.id} rating={rating} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
