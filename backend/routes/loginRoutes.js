import express from 'express'
import { createUser, getAllUsers } from '../controllers/loginControllers.js';

const userRoutes = express.Router();

userRoutes.post('/create', createUser);

userRoutes.get('/fetch-users', getAllUsers);

export default userRoutes;