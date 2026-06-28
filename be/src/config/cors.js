export const corsOptions = {
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);

    if (process.env.NODE_ENV === 'production') {
      const frontendUrl = process.env.FRONTEND_URL;
      
      if (origin === frontendUrl && origin.startsWith('https://')) {
        callback(null, true);
      } else {
        callback(new Error('CORS Error: Akses ditolak. Pastikan URL dan HTTPS sesuai.'));
      }
    } else {
      callback(null, true);
    }
  },
  credentials: true
};
