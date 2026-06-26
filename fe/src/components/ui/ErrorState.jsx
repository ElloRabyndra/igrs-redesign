import { ServerCrash, RefreshCcw } from "lucide-react";

const ErrorState = ({
  onRetry,
  message = "Gagal memuat data dari server.",
}) => {
  return (
    <main className="bg-surface-offwhite min-h-screen">
      <div className="flex items-center justify-center h-screen">
        <div className="flex flex-col items-center justify-center min-h-[400px] w-full p-6 text-center">
          <div className="w-20 h-20 bg-red-50 text-red-500 rounded-full flex items-center justify-center mb-6 shadow-sm border border-red-100">
            <ServerCrash size={40} />
          </div>
          <h3 className="text-2xl font-bold text-primary-navy mb-2">
            Terjadi Kesalahan
          </h3>
          <p className="text-slate-500 mb-8 max-w-md">
            {message} Pastikan koneksi internet Anda stabil atau server backend
            sedang berjalan.
          </p>
          {onRetry && (
            <button
              onClick={onRetry}
              className="flex items-center gap-2 bg-primary-blue hover:bg-blue-mid text-white px-6 py-3 rounded-full font-bold transition-all shadow-md active:scale-95"
            >
              <RefreshCcw size={18} />
              Coba Lagi
            </button>
          )}
        </div>
      </div>
    </main>
  );
};

export default ErrorState;
