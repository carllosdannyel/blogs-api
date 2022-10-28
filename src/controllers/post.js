const postService = require('../services/post');
const mapError = require('../utils/map.error');

const createPost = async (req, res) => {
  const { type, message } = await postService.createPost(req.user.id, req.body);
  if (type) return res.status(mapError(type)).json({ message });
  res.status(201).json(message);
};

const getAllPostsByUser = async (req, res) => {
  const { type, message } = await postService.getAllPostsByUser(req.user);
  if (type) return res.status(mapError(type)).json({ message });
  res.status(200).json(message);
};

const getUserPostById = async (req, res) => {
  const { type, message } = await postService.getUserPostById(req.params.id, req.user);
  if (type) return res.status(mapError(type)).json({ message });
  res.status(200).json(message);
};

module.exports = {
  createPost,
  getAllPostsByUser,
  getUserPostById,
};
