import express from 'express';
import { createListing,deleteListing,updateListing,getListing  } from '../controllers/listing.controller.js';
import { verifyUsers } from '../utils/verifyUsers.js';

const router = express.Router();

router.post('/create',verifyUsers, createListing);
router.delete('/delete/:id',verifyUsers,deleteListing);
router.post('/update/:id',verifyUsers,updateListing);
router.get('/get/:id',getListing);
export default router;