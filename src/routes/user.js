const express = require('express');
const userController = require('../controllers/user');
const userFields = require('../middlewares/user.fields');
const authMiddleware = require('../middlewares/auth');

const Router = express.Router();

Router.post('/', userFields, userController.createUser);
Router.get('/', authMiddleware, userController.getAllUsers);

module.exports = Router;
