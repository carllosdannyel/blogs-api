const express = require('express');
const validateToken = require('../middlewares/auth');
const postController = require('../controllers/post');
const postFields = require('../middlewares/post.fields');

const Router = express.Router();

Router.post('/', validateToken, postFields, postController.createPost);

module.exports = Router;
