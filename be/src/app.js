import express from "express";
import cors from "cors";
import { globalErrorHandler } from "./middlewares/error.middleware.js";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./config/swagger.js";
import { corsOptions } from "./config/cors.js";
import gameRoutes from "./modules/game/game.routes.js";
import ratingRoutes from "./modules/rating/rating.routes.js";
import contentRoutes from "./modules/content/content.routes.js";
import blogRoutes from "./modules/blog/blog.routes.js";
const app = express();

// Middlewares
app.use(cors(corsOptions));
app.use(express.json());
app.use("/assets", express.static("public/assets"));

// Documentation
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Routes
app.use("/api/game", gameRoutes);
app.use("/api/rating", ratingRoutes);
app.use("/api/content-classification", contentRoutes);
app.use("/api/blog", blogRoutes);

// Error Handling
app.use(globalErrorHandler);
export default app;
