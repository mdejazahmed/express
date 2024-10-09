import express from 'express';
import { loginUser, registerUser } from '../controllers/authControllers.js';

const router = express.Router();

// GET /api/users
router.post('/register',registerUser);
router.post('/login',loginUser);

export default router;
