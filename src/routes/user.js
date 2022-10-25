const express = require('express');
const userController = require('../controllers/user');
const fieldsValidationUser = require('../middlewares/fields.validation.user');

const Router = express.Router();

Router.post('/', fieldsValidationUser, userController.createUser);

module.exports = Router;
