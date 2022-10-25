const express = require('express');
const loginController = require('../controllers/login');
const fieldsValidation = require('../middlewares/fields.validation');

const Router = express.Router();

Router.post('/', fieldsValidation, loginController.login);

module.exports = Router;
