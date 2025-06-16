import express from 'express';
import { verifyToken } from '../utels/User';
import { createListing } from '../controller/listing.controller';

const router = express.Router();
 
router.post('/create', verifyToken, createListing)

export default router;