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
 *         description: A list of ratings.
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
 *                   summary:
 *                     type: string
 *                   count:
 *                     type: number
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
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: number
 *                 title:
 *                   type: string
 *                 image_url:
 *                   type: string
 *                   nullable: true
 *                 description:
 *                   type: string
 *       404:
 *         description: Rating not found.
 */
router.get('/:id', ratingController.getById);

export default router;
