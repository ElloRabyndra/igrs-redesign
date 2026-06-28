import { GameService } from './game.service.js';
import { successResponse } from '../../utils/response.js';
export class GameController {
  constructor() {
    this.gameService = new GameService();
  }
  getAll = async (req, res, next) => {
    try {
      const games = await this.gameService.getAllGames();
      return successResponse(res, games, 'Games retrieved successfully');
    } catch (error) {
      next(error);
    }
  };
  getBySlug = async (req, res, next) => {
    try {
      const {
        slug
      } = req.params;
      if (!slug || typeof slug !== 'string') {
        const error = new Error('Invalid slug');
        error.statusCode = 400;
        throw error;
      }
      const game = await this.gameService.getGameBySlug(slug);
      
      if (!game) {
        const error = new Error('Game not found');
        error.statusCode = 404;
        throw error;
      }

      return successResponse(res, game, 'Game retrieved successfully');
    } catch (error) {
      next(error);
    }
  };
}