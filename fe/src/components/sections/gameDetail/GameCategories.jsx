import { getContentIcon, getContentType } from "../../../utils/helpers";

const GameCategories = ({ gameContentClassification }) => {
  return (
    <div>
      <h4 className="sm:text-lg font-bold text-slate-400 uppercase tracking-wider mb-4">
        KATEGORI IGRS
      </h4>
      <div className="flex flex-wrap gap-4">
        {gameContentClassification.map((cat, idx) => {
          const IconComp = getContentIcon(cat.content_icon);
          return (
            <div
              key={idx}
              className="flex items-center gap-2 bg-white rounded-full px-6 py-3 shadow-md border border-border-card/50"
            >
              {IconComp && (
                <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 p-1 rounded-full bg-accent-teal flex items-center justify-center text-white shrink-0">
                  <IconComp size={24} />
                </div>
              )}
              <span className="font-bold text-primary-navy sm:text-lg xl:text-xl">
                {getContentType(cat.content_icon)}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GameCategories;
