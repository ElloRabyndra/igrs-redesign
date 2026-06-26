const GameCover = ({ gameImg, gameTitle }) => {
  return (
    <div className="shrink-0 w-full max-w-[720px] mx-auto lg:max-w-none lg:w-[350px] xl:w-[400px]">
      <img
        src={gameImg}
        alt={gameTitle}
        className=" w-full object-cover rounded-4xl shadow-lg aspect-video lg:aspect-4/5"
      />
    </div>
  );
};

export default GameCover;
