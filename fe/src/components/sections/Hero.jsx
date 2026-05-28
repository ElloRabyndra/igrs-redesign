import React from "react";
import Navbar from "../layout/Navbar";
import heroLeft from "../../assets/Hero/hero-left.png";
import heroRight from "../../assets/Hero/hero-right.png";

const Hero = () => {
  return (
    <section className="relative w-full min-h-[700px] lg:min-h-[750px] xl:min-h-[700px] bg-primary-navy overflow-hidden flex flex-col items-center">
      {/* Background Ellipse Gradients */}
      {/* Hijau/Kuning di kanan atas */}
      <div className="absolute top-[-15%] right-[-10%] w-[50vw] h-[50vw] min-w-[400px] min-h-[400px] bg-green-light rounded-full opacity-30 mix-blend-screen blur-[130px] pointer-events-none z-0" />

      {/* Ungu/Pink di kiri bawah */}
      <div className="absolute bottom-[-15%] left-[-10%] w-[50vw] h-[50vw] min-w-[400px] min-h-[400px] bg-purple rounded-full opacity-30 mix-blend-screen blur-[150px] pointer-events-none z-0" />

      {/* Biru pucat di tengah-tengah untuk efek glowing */}
      <div className="absolute top-[10%] left-[20%] w-[35vw] h-[35vw] min-w-[300px] min-h-[300px] bg-blue-pale rounded-full opacity-15 mix-blend-screen blur-[120px] pointer-events-none z-0" />

      <Navbar />

      {/* Characters Layer (z-20)  */}
      <div className="absolute bottom-0 w-full h-full max-w-[1440px] left-1/2 -translate-x-1/2 pointer-events-none z-20">
        <img
          src={heroLeft}
          alt="Karakter Kiri (Genshin dkk)"
          className="absolute bottom-0 left-[-4%] 2xl:left-[-3%] h-[80%] 2xl:h-[90%] object-contain hidden xl:block drop-shadow-2xl"
        />
        <img
          src={heroRight}
          alt="Karakter Kanan (Fall Guys, PUBG)"
          className="absolute bottom-0 right-[-4%] 2xl:right-[-3%]  h-[80%] 2xl:h-[90%] object-contain hidden xl:block drop-shadow-2xl"
        />
      </div>

      {/* Bottom White Triangle (z-40) */}
      <div className="absolute -bottom-px xl:-bottom-32 left-0 w-full overflow-hidden leading-none z-40 pointer-events-none">
        <svg
          viewBox="0 0 1440 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-[15vw] min-h-[80px]"
          preserveAspectRatio="none"
        >
          {/* Fill warna menggunakan var(--color-surface-offwhite)  */}
          <path
            d="M0,200 L720,0 L1440,200 Z"
            fill="var(--color-surface-offwhite)"
          />
        </svg>
      </div>

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
        <div className="bg-white p-1 sm:p-1.5 md:p-2.5 rounded-full flex w-full max-w-[760px] shadow-search transition-transform focus-within:scale-[1.02]">
          <div className="flex-1 flex items-center px-6">
            <input
              type="text"
              placeholder="Cari Gim, Contoh: Genshin Impact"
              className="w-full bg-transparent outline-none text-text-dark placeholder-gray-400 text-base md:text-lg font-medium"
            />
          </div>
          <button className="bg-primary-navy text-white px-10 md:px-12 py-3.5 md:py-4 rounded-full font-bold text-base md:text-lg hover:bg-blue-mid transition shadow-md whitespace-nowrap">
            Cari
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
