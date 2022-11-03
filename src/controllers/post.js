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

const updatePostById = async (req, res) => {
  const { body: { title, content }, params: { id }, user } = req;
  const { type, message } = await postService.updatePostById(title, content, id, user);
  if (type) return res.status(mapError(type)).json({ message });
  res.status(200).json(message);
};

const deletePostById = async (req, res) => {
  const { type, message } = await postService.deletePostById(req.user.id, req.params.id);
  if (type) return res.status(mapError(type)).json({ message });
  res.status(204).json(message);
};

const getPostByName = async (req, res) => {
  const { type, message } = await postService.getPostByName(req.query.q, req.user);
  if (type) return res.status(mapError(type)).json({ message });
  res.status(200).json(message);
};

module.exports = {
  createPost,
  getAllPostsByUser,
  getUserPostById,
  updatePostById,
  deletePostById,
  getPostByName,
};
