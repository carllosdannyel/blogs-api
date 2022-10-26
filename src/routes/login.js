const express = require('express');
const loginController = require('../controllers/login');
const loginFields = require('../middlewares/login.fields');

const Router = express.Router();

Router.post('/', loginFields, loginController.login);

module.exports = Router;
