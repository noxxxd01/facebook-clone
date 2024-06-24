const express = require('express');
const { createUser, getAllUsers } = require('../controllers/loginControllers.js');

const userRoutes = express.Router();

userRoutes.post('/create', createUser);

userRoutes.get('/fetch-users', getAllUsers);

module.exports = userRoutes;