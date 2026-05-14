import { Router } from 'express';
import { RatingController } from './rating.controller';

const router = Router();
const ratingController = new RatingController();

/**
 * @swagger
 * /api/rating:
 *   get:
 *     summary: Retrieve a list of ratings
 *     tags: [Rating]
 *     responses:
 *       200:
 *         description: A list of ratings.
 */
router.get('/', ratingController.getAll);

/**
 * @swagger
 * /api/rating/{id}:
 *   get:
 *     summary: Get a rating by ID
 *     tags: [Rating]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: A single rating.
 *       404:
 *         description: Rating not found.
 */
router.get('/:id', ratingController.getById);

export default router;
