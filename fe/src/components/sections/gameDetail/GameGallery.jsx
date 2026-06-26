import { Image as ImageIcon } from "lucide-react";

const GameGallery = ({ gallery, title }) => {
  if (!gallery || gallery.length === 0) return null;

  return (
    <div className="mt-16 md:mt-24 mb-16 md:mb-24">
      <div className="flex items-center gap-3 mb-8">
        <ImageIcon size={32} className="text-primary-navy" strokeWidth={2.5} />
        <h2 className="text-2xl sm:text-3xl font-extrabold text-primary-navy">
          Foto Pendukung
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {gallery.slice(0, 3).map((item, idx) => (
          <div
            key={idx}
            className="rounded-3xl overflow-hidden aspect-16/10 bg-slate-200/50 shadow-sm border border-slate-200"
          >
            {item.image_url ? (
              <img
                src={item.image_url}
                alt={`${title} screenshot ${idx + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-slate-400">
                <ImageIcon size={48} className="opacity-20" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameGallery;
