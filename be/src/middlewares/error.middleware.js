import { errorResponse } from '../utils/response.js';
export const globalErrorHandler = (err, req, res, _next) => {
  console.error(err);
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return errorResponse(res, message, statusCode, process.env.NODE_ENV === 'development' ? err.stack : null);
};