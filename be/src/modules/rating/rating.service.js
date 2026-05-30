import { RatingRepository } from './rating.repository.js';
export class RatingService {
  constructor() {
    this.ratingRepository = new RatingRepository();
  }
  async getAllRatings() {
    const ratings = await this.ratingRepository.findAll();
    return ratings.map(r => {
      const { _count, ...rest } = r;
      return { ...rest, count: _count?.games || 0 };
    });
  }
  async getRatingById(id) {
    const rating = await this.ratingRepository.findById(id);
    if (!rating) {
      const error = new Error('Rating not found');
      error.statusCode = 404;
      throw error;
    }
    return rating;
  }
}