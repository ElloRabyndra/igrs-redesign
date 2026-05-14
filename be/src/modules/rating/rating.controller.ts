import { Request, Response, NextFunction } from 'express';
import { RatingService } from './rating.service';
import { successResponse } from '../../utils/response';

export class RatingController {
  private ratingService: RatingService;

  constructor() {
    this.ratingService = new RatingService();
  }

  getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const ratings = await this.ratingService.getAllRatings();
      return successResponse(res, ratings, 'Ratings retrieved successfully');
    } catch (error) {
      next(error);
    }
  };

  getById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      if (!id || isNaN(parseInt(id))) {
        const error: any = new Error('Invalid rating ID');
        error.statusCode = 400;
        throw error;
      }
      const rating = await this.ratingService.getRatingById(parseInt(id));
      return successResponse(res, rating, 'Rating retrieved successfully');
    } catch (error) {
      next(error);
    }
  };
}
