import express from 'express';
import userRoutes from './routes/userRoutes.js';
import authRoutes from "./routes/authRoutes.js"
import { errorHandler } from './middlewares/errorHandler.js';
import cors from "cors"
import { authenticateJWT } from './middlewares/authMiddleware.js';

// Initialize app
const app = express();

// Middleware
app.use(express.json());  // To parse JSON bodies
app.use(cors());  // cors

// Routes
app.use('/api/auth', authRoutes);
// Protected route
app.use('/api/users',authenticateJWT, userRoutes);

// Error Handler (custom middleware)
app.use(errorHandler);


export default app;