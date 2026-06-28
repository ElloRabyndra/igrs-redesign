import { RatingService } from './rating.service.js';
import { successResponse } from '../../utils/response.js';
export class RatingController {
  constructor() {
    this.ratingService = new RatingService();
  }
  getAll = async (req, res, next) => {
    try {
      const ratings = await this.ratingService.getAllRatings();
      return successResponse(res, ratings, 'Ratings retrieved successfully');
    } catch (error) {
      next(error);
    }
  };
  getById = async (req, res, next) => {
    try {
      const {
        id
      } = req.params;
      if (!id || typeof id !== 'string' || isNaN(parseInt(id))) {
        const error = new Error('Invalid rating ID');
        error.statusCode = 400;
        throw error;
      }
      const rating = await this.ratingService.getRatingById(parseInt(id));

      if (!rating) {
        const error = new Error('Rating not found');
        error.statusCode = 404;
        throw error;
      }

      return successResponse(res, rating, 'Rating retrieved successfully');
    } catch (error) {
      next(error);
    }
  };
}