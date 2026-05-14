import { Router } from 'express';
import { GameController } from './game.controller';

const router = Router();
const gameController = new GameController();

/**
 * @swagger
 * /api/game:
 *   get:
 *     summary: Retrieve a list of games
 *     tags: [Game]
 *     responses:
 *       200:
 *         description: A list of games.
 */
router.get('/', gameController.getAll);

/**
 * @swagger
 * /api/game/{slug}:
 *   get:
 *     summary: Get a game by slug
 *     tags: [Game]
 *     parameters:
 *       - in: path
 *         name: slug
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A single game.
 *       404:
 *         description: Game not found.
 */
router.get('/:slug', gameController.getBySlug);

export default router;
