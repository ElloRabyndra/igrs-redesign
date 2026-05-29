const EllipseGradients = () => {
  return (
    <>
      {/* Hijau/Kuning di kanan atas */}
      <div className="absolute top-[-15%] right-[-10%] w-[50vw] h-[50vw] min-w-[400px] min-h-[400px] bg-green-light rounded-full opacity-30 mix-blend-screen blur-[130px] pointer-events-none z-0" />

      {/* Ungu/Pink di kiri bawah */}
      <div className="absolute bottom-[-15%] left-[-10%] w-[50vw] h-[50vw] min-w-[400px] min-h-[400px] bg-purple rounded-full opacity-30 mix-blend-screen blur-[150px] pointer-events-none z-0" />

      {/* Biru pucat di tengah-tengah untuk efek glowing */}
      <div className="absolute top-[10%] left-[20%] w-[35vw] h-[35vw] min-w-[300px] min-h-[300px] bg-blue-pale rounded-full opacity-15 mix-blend-screen blur-[120px] pointer-events-none z-0" />
    </>
  );
};

export default EllipseGradients;
