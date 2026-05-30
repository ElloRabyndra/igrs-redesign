import heroLeft from "../../assets/Hero/hero-left.png";
import heroRight from "../../assets/Hero/hero-right.png";
import Character from "./hero/Character";
import WhiteTriangle from "./hero/WhiteTriangle";
import EllipseGradients from "./hero/EllipseGradients";
import SearchBar from "./hero/SearchBar";

const Hero = () => {
  return (
    <section className="relative w-full min-h-[700px] lg:min-h-[750px] xl:min-h-[700px] bg-primary-navy overflow-hidden flex flex-col items-center">
      {/* Background Ellipse Gradients */}
      <EllipseGradients />

      {/* Characters Layer (z-20)  */}
      <Character heroLeft={heroLeft} heroRight={heroRight} />

      {/* Bottom White Triangle (z-40) */}
      <WhiteTriangle />

      {/* Gradient Putih dari bawah ke atas (z-30) */}
      <div className="absolute z-30 bg-linear-to-b from-transparent via-surface-offwhite via-90% to-white bottom-0 h-40 w-full"></div>

      {/* Hero Content (z-50) */}
      <div className="relative z-50 flex flex-col items-center justify-center text-center px-6 w-full max-w-[900px] flex-1 mt-40 mb-48">
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-[76px] font-black leading-[1.15] tracking-tight mb-6">
          Cek Rating Game
          <br />
          Bersama IGRS
        </h1>
        <p className="text-white text-lg md:text-xl lg:text-2xl mb-12 font-medium">
          Kenali Game yang tepat untuk anak sesuai Rating
        </p>

        {/* Search Bar */}
        <SearchBar />
      </div>
    </section>
  );
};

export default Hero;
