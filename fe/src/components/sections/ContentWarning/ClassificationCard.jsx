import { getContentIcon } from "../../../utils/mockHelpers";

const ClassificationCard = ({ item }) => {
  const IconComponent = getContentIcon(item.content_icon);

  // Layout Variants based on Figma IDs
  // 4=Seksualitas (Tall), 5=Kekerasan (Tall), 8=Zat Adiktif (Wide)
  const isTall = item.id === 4 || item.id === 5;
  const isWide = item.id === 8;

  // Spans for CSS Grid
  let spanClasses = "xl:col-span-1 xl:row-span-1";
  if (isTall) spanClasses = "xl:col-span-1 xl:row-span-2";
  if (isWide) spanClasses = "xl:col-span-2 xl:row-span-1";

  // 1. TALL VARIANT
  if (isTall) {
    return (
      <div
        className={`rounded-[40px] bg-white px-8 py-6 md:px-14 md:py-6 flex flex-col items-center justify-center text-center gap-2 hover:shadow-sm transition-shadow duration-300 ${spanClasses}`}
      >
        <div className="w-full flex xl:flex-col items-center gap-4 md:gap-6">
          <div className="shrink-0 w-14 h-14 rounded-full bg-accent-teal flex items-center justify-center">
            {IconComponent && (
              <IconComponent size={32} className="text-white" />
            )}
          </div>

          <h4 className="min-w-0 font-bold text-primary-navy text-[18px] md:text-[22px] wrap-break-word">
            {item.title}
          </h4>
        </div>
        <p className="text-[13px] xl:text-[14px] text-slate-500 leading-relaxed">
          {item.description}
        </p>
      </div>
    );
  }

  // 2. WIDE VARIANT
  if (isWide) {
    return (
      <div
        className={`rounded-[40px] bg-white px-8 py-6 flex flex-col xl:flex-row items-center justify-center gap-2 xl:gap-12 text-center xl:text-left hover:shadow-sm transition-shadow duration-300 ${spanClasses}`}
      >
        <div className="w-full flex items-center gap-4 md:gap-6 xl:w-1/2">
          <div className="shrink-0 w-14 h-14 rounded-full bg-accent-teal flex items-center justify-center">
            {IconComponent && (
              <IconComponent size={28} className="text-white" />
            )}
          </div>
          <h4 className="font-bold text-primary-navy text-[18px] md:text-[22px] xl:text-[28px] leading-tight xl:w-full">
            {item.title}
          </h4>
        </div>
        <p className="text-[13px] xl:text-[14px] text-slate-500 leading-relaxed xl:flex-1">
          {item.description}
        </p>
      </div>
    );
  }

  // 3. STANDARD VARIANT
  return (
    <div
      className={`rounded-[40px] bg-white px-6 py-8 md:px-8 md:py-5 flex flex-col items-center justify-center gap-2 hover:shadow-sm transition-shadow duration-300 ${spanClasses}`}
    >
      <div className="flex items-center justify-center gap-4 md:gap-6 w-full">
        <div className="shrink-0 w-14 h-14 rounded-full bg-accent-teal flex items-center justify-center">
          {IconComponent && <IconComponent size={24} className="text-white" />}
        </div>
        <h4 className="font-bold text-primary-navy text-[18px] md:text-[22px] leading-tight text-left flex-1">
          {item.title}
        </h4>
      </div>
      <p className="text-[13px] xl:text-[14px] text-slate-500 leading-relaxed text-center mt-1">
        {item.description}
      </p>
    </div>
  );
};

export default ClassificationCard;
