import express from 'express';
import cors from 'cors';
import { globalErrorHandler } from './middlewares/error.middleware';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './config/swagger';
import gameRoutes from './modules/game/game.routes';
import ratingRoutes from './modules/rating/rating.routes';
import contentRoutes from './modules/content/content.routes';
import blogRoutes from './modules/blog/blog.routes';

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Routes
app.use('/api/game', gameRoutes);
app.use('/api/rating', ratingRoutes);
app.use('/api/content-classification', contentRoutes);
app.use('/api/blog', blogRoutes);

// Error Handling
app.use(globalErrorHandler);

export default app;
