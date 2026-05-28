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
 *     parameters:
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *         description: Search keyword
 *       - in: query
 *         name: sortBy
 *         schema:
 *           type: string
 *         description: Field to sort by
 *       - in: query
 *         name: sortOrder
 *         schema:
 *           type: string
 *           enum: [asc, desc]
 *         description: Sort order (asc or desc)
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *         description: Page number for pagination
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 10
 *         description: Number of items per page
 *     responses:
 *       200:
 *         description: A list of games.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: number
 *                   title:
 *                     type: string
 *                   image_url:
 *                     type: string
 *                     nullable: true
 *                   rating:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: number
 *                       image_url:
 *                         type: string
 *                         nullable: true
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
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: number
 *                 title:
 *                   type: string
 *                 slug:
 *                   type: string
 *                 image_url:
 *                   type: string
 *                   nullable: true
 *                 publisher:
 *                   type: string
 *                 description:
 *                   type: string
 *                 review_summary:
 *                   type: string
 *                 rating:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: number
 *                     image_url:
 *                       type: string
 *                       nullable: true
 *                 content_classification:
 *                   type: array
 *                   nullable: true
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: number
 *                       content_icon:
 *                         type: string
 *                 game_gallery:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: number
 *                       image_url:
 *                         type: string
 *                         nullable: true
 *       404:
 *         description: Game not found.
 */
router.get('/:slug', gameController.getBySlug);

export default router;
