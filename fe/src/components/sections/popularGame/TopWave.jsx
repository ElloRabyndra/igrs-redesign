const TopWave = () => {
  return (
    <div className="w-full overflow-hidden leading-none relative z-10 -mt-px">
      <svg
        viewBox="0 0 1440 250"
        preserveAspectRatio="none"
        className="w-full h-[15vw] min-h-[80px]"
      >
        <path
          d="M0,50 C300,-50 600,150 900,100 C1100,50 1200,250 1440,250 L0,250 Z"
          fill="var(--color-green-light)"
        />
        <path
          d="M0,200 C400,300 700,50 1440,100 L1440,250 L0,250 Z"
          fill="var(--color-primary-navy)"
        />
      </svg>
    </div>
  );
};

export default TopWave;
