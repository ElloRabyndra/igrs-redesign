const WhiteTriangle = () => {
  return (
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
  );
};

export default WhiteTriangle;
