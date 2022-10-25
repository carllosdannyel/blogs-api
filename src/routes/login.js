const express = require('express');
const loginController = require('../controllers/login');
const fieldsValidationLogin = require('../middlewares/fields.validation.login');

const Router = express.Router();

Router.post('/', fieldsValidationLogin, loginController.login);

module.exports = Router;
