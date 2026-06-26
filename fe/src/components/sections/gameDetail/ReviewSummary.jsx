import { MessageSquareText } from "lucide-react";

const ReviewSummary = ({ summary }) => {
  if (!summary) return null;

  return (
    <div className="mt-16 md:mt-24">
      <div className="flex items-center gap-3 mb-8">
        <MessageSquareText
          size={32}
          className="text-primary-navy"
          strokeWidth={2.5}
        />
        <h2 className="text-2xl sm:text-3xl font-extrabold text-primary-navy">
          Ringkasan Review
        </h2>
      </div>

      <div className="bg-surface-offwhite sm:bg-slate-100/70 rounded-3xl md:rounded-4xl p-8 md:p-12 border border-slate-200/50">
        <p className="text-primary-navy/80 italic font-medium sm:text-lg leading-relaxed">
          {summary}
        </p>
      </div>
    </div>
  );
};

export default ReviewSummary;
