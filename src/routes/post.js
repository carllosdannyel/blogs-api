const express = require('express');
const validateToken = require('../middlewares/auth');
const postController = require('../controllers/post');
const postFields = require('../middlewares/post.fields');
const editPostFields = require('../middlewares/edit.post.fields');

const Router = express.Router();

Router.post('/', validateToken, postFields, postController.createPost);
Router.get('/search', validateToken, postController.getPostByName);
Router.get('/', validateToken, postController.getAllPostsByUser);
Router.get('/:id', validateToken, postController.getUserPostById);
Router.put('/:id', validateToken, editPostFields, postController.updatePostById);
Router.delete('/:id', validateToken, postController.deletePostById);

module.exports = Router;
