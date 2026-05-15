import { GameRepository } from './game.repository';

export class GameService {
  private gameRepository: GameRepository;

  constructor() {
    this.gameRepository = new GameRepository();
  }

  async getAllGames() {
    return this.gameRepository.findAll();
  }

  async getGameBySlug(slug: string) {
    const game = await this.gameRepository.findBySlug(slug);
    if (!game) {
      const error: any = new Error('Game not found');
      error.statusCode = 404;
      throw error;
    }
    return game;
  }
}
