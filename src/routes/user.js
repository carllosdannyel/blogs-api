const express = require('express');
const userController = require('../controllers/user');
const userFields = require('../middlewares/user.fields');
const validateToken = require('../middlewares/auth');

const Router = express.Router();

Router.post('/', userFields, userController.createUser);
Router.get('/', validateToken, userController.getAllUsers);
Router.get('/:id', validateToken, userController.getUserById);
Router.delete('/me', validateToken, userController.deleteUserById);

module.exports = Router;
