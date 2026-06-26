import { CheckCircle2 } from "lucide-react";

const RatingDetail = ({ ratingTitle, ratingDescription }) => {
  return (
    <div className="flex-1 w-full">
      
      {/* Top Badge */}
      <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200/50 rounded-full px-3 py-1 mb-4">
        <CheckCircle2 size={14} className="text-primary-green" />
        <span className="text-primary-green text-[11px] font-bold">
          Klasifikasi: Usia {ratingTitle.replace('+', '')} Tahun ke Atas
        </span>
      </div>

      {/* Title */}
      <h1 className="text-[20px] md:text-2xl leading-[30px] font-bold text-primary-navy mb-4">
        Rating Game {ratingTitle}+
      </h1>

      {/* Description Box */}
      <div className="bg-surface-subtle rounded-2xl p-5 md:p-6">
        <p className="text-[13px] md:text-[14px] leading-[22px] text-dark font-normal">
          {ratingDescription}
        </p>
      </div>

    </div>
  );
};

export default RatingDetail;
