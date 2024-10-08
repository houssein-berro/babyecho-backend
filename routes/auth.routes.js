import express from 'express';
import { registerUser, loginUser, validateToken, loginDoctor } from '../controllers/auth.controller.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/signup', registerUser);
router.post('/login', loginUser);
router.post('/doctor/login', loginDoctor);
router.get('/validate', authMiddleware, validateToken);

export default router;
