import { RatingRepository } from './rating.repository';

export class RatingService {
  private ratingRepository: RatingRepository;

  constructor() {
    this.ratingRepository = new RatingRepository();
  }

  async getAllRatings() {
    return this.ratingRepository.findAll();
  }

  async getRatingById(id: number) {
    const rating = await this.ratingRepository.findById(id);
    if (!rating) {
      const error: any = new Error('Rating not found');
      error.statusCode = 404;
      throw error;
    }
    return rating;
  }
}
