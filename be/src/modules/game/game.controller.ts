import { Request, Response, NextFunction } from 'express';
import { GameService } from './game.service';
import { successResponse } from '../../utils/response';

export class GameController {
  private gameService: GameService;

  constructor() {
    this.gameService = new GameService();
  }

  getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const games = await this.gameService.getAllGames();
      return successResponse(res, games, 'Games retrieved successfully');
    } catch (error) {
      next(error);
    }
  };

  getBySlug = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { slug } = req.params;
      if (!slug || typeof slug !== 'string') {
        const error: any = new Error('Invalid slug');
        error.statusCode = 400;
        throw error;
      }
      const game = await this.gameService.getGameBySlug(slug);
      return successResponse(res, game, 'Game retrieved successfully');
    } catch (error) {
      next(error);
    }
  };
}
