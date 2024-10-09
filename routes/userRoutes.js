import express from 'express';
import { getUser, getUsers } from '../controllers/userController.js';

const router = express.Router();

// GET /api/users
router.get('/', getUsers);
router.get('/:user_id', getUser);

export default router;
