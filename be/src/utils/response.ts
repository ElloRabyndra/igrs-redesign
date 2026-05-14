import { Response } from 'express';

export const successResponse = (res: Response, data: any, message = 'Success', statusCode = 200) => {
  return res.status(statusCode).json({
    status: 'success',
    message,
    data,
  });
};

export const errorResponse = (res: Response, message = 'Internal Server Error', statusCode = 500, errors: any = null) => {
  return res.status(statusCode).json({
    status: 'error',
    message,
    errors,
  });
};
