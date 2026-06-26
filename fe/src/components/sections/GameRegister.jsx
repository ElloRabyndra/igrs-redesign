const GameRegister = () => {
  return (
    <section className="py-16 md:py-24 bg-surface-offwhite">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 xl:px-16">
        <div className="relative rounded-4xl bg-primary-navy overflow-hidden px-8 py-14 md:px-16 md:py-20 text-center">
          <div className="relative z-10 space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-snug">
              Gim anda belum terdaftar?
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="bg-primary-green hover:bg-green-dark text-white font-bold px-8 py-3 rounded-full transition text-sm md:text-base shadow-md">
                Daftarkan
              </button>
              <button className="border border-white/30 text-white hover:bg-white/10 font-bold px-8 py-3 rounded-full transition text-sm md:text-base">
                Pelajari Lebih Lanjut
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameRegister;
