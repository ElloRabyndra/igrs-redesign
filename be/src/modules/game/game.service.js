import { GameRepository } from './game.repository.js';
export class GameService {
  constructor() {
    this.gameRepository = new GameRepository();
  }
  async getAllGames() {
    return this.gameRepository.findAll();
  }
  async getGameBySlug(slug) {
    const game = await this.gameRepository.findBySlug(slug);
    if (!game) {
      return null;
    }
    const mappedGame = {
      ...game,
      content_classification: game.rating?.content_classifications?.map(c => ({
        id: c.id,
        content_icon: c.content_icon,
        title: c.title
      })) || [],
      game_gallery: game.gallery
    };

    delete mappedGame.gallery;
    if (mappedGame.rating) {
      delete mappedGame.rating.content_classifications;
    }

    return mappedGame;
  }
}