import { Request, Response, NextFunction } from 'express';
import { errorResponse } from '../utils/response';

export const globalErrorHandler = (err: any, req: Request, res: Response, _next: NextFunction) => {
  console.error(err);

  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  return errorResponse(res, message, statusCode, process.env.NODE_ENV === 'development' ? err.stack : null);
};
