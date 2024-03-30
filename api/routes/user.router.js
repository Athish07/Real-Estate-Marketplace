import express from 'express';

import { verifyUsers } from '../utils/verifyUsers.js';
import { deleteUser, getUserListings, test, updateUser,getUser } from '../controllers/User.controller.js';


const router = express.Router();

router.get('/test', test);
router.post('/update/:id',verifyUsers, updateUser)
router.delete('/delete/:id',verifyUsers, deleteUser)
router.get('/listings/:id',verifyUsers,getUserListings)
router.get('/:id', verifyUsers, getUser)

export default router;