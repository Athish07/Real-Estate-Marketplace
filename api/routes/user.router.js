import express from 'express';
import { deleteUser, getUserListings, test, updateUser} from '../controller/User.controller.js';
import { verifyUsers } from '../utils/verifyUsers.js';


const router = express.Router();

router.get('/test', test);
router.post('/update/:id',verifyUsers, updateUser)
router.delete('/delete/:id',verifyUsers, deleteUser)
router.get('/listings/:id',verifyUsers,getUserListings)

export default router;