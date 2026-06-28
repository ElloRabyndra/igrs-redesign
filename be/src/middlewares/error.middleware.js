import { errorResponse } from '../utils/response.js';

export const globalErrorHandler = (err, req, res, _next) => {
  console.error(err);

  // Check for common database connection errors (native mysql2 or general network errors)
  const dbConnectionErrors = ['ECONNREFUSED', 'ENOTFOUND', 'ER_ACCESS_DENIED_ERROR', 'ETIMEDOUT', 'PROTOCOL_CONNECTION_LOST', 'ER_CON_COUNT_ERROR'];
  
  const isPrismaConnectionError = err.name === 'PrismaClientInitializationError' || err.code === 'P1001';
  const isNativeConnectionError = err.code && dbConnectionErrors.includes(err.code);

  if (isNativeConnectionError || isPrismaConnectionError) {
    return errorResponse(
      res, 
      'Database connection is currently unavailable. Please try again later.', 
      503, 
      process.env.NODE_ENV === 'development' ? err.stack : null
    );
  }

  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return errorResponse(res, message, statusCode, process.env.NODE_ENV === 'development' ? err.stack : null);
};