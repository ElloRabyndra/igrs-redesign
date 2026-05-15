import { Router } from 'express';
import { ContentController } from './content.controller';

const router = Router();
const contentController = new ContentController();

/**
 * @swagger
 * /api/content-classification:
 *   get:
 *     summary: Retrieve all content classifications
 *     tags: [Content Classification]
 *     responses:
 *       200:
 *         description: A list of classifications.
 */
router.get('/', contentController.getAll);

export default router;
