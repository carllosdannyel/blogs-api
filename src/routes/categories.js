const express = require('express');
const categoryController = require('../controllers/categories');
const validateToken = require('../middlewares/auth');

const Router = express.Router();

Router.post('/', validateToken, categoryController.createCategorie);
Router.get('/', validateToken, categoryController.getAllCategories);

module.exports = Router;
