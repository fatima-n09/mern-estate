import express from 'express';
import { signup, signIn, google } from '../controller/auth.contorller.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/signin', signIn);
router.post('/google', google)
export default router;