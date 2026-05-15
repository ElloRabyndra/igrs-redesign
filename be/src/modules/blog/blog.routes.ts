import { Router } from 'express';
import { BlogController } from './blog.controller';

const router = Router();
const blogController = new BlogController();

/**
 * @swagger
 * /api/blog:
 *   get:
 *     summary: Retrieve a list of blogs
 *     tags: [Blog]
 *     responses:
 *       200:
 *         description: A list of blogs.
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
 *       404:
 *         description: Blog not found.
 */
router.get('/:slug', blogController.getBySlug);

export default router;
