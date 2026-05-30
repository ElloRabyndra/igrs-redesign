import { Router } from 'express';
import { BlogController } from './blog.controller.js';
const router = Router();
const blogController = new BlogController();

/**
 * @swagger
 * /api/blog:
 *   get:
 *     summary: Retrieve a list of blogs
 *     tags: [Blog]
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
 *         description: A list of blogs.
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
 *                   description:
 *                     type: string
 *                   image_url:
 *                     type: string
 *                     nullable: true
 *                   date:
 *                     type: string
 *                     format: date
 */
router.get('/', blogController.getAll);

/**
 * @swagger
 * /api/blog/{slug}:
 *   get:
 *     summary: Get a blog by slug
 *     tags: [Blog]
 *     parameters:
 *       - in: path
 *         name: slug
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A single blog.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: number
 *                 title:
 *                   type: string
 *                 description:
 *                   type: string
 *                 image_url:
 *                   type: string
 *                   nullable: true
 *                 date:
 *                   type: string
 *                   format: date
 *       404:
 *         description: Blog not found.
 */
router.get('/:slug', blogController.getBySlug);
export default router;