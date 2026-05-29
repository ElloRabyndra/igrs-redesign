const Character = ( {heroLeft, heroRight}) => {
  return (
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
  );
};

export default Character;
