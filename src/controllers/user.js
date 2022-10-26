const userService = require('../services/user');
const mapError = require('../utils/map.error');

const createUser = async (req, res) => {
  const { type, message } = await userService.createUser(req.body);
  if (type) return res.status(mapError(type)).json({ message });
  res.status(201).json(message);
};

const getAllUsers = async (_req, res) => {
  const { type, message } = await userService.getAllUsers();
  if (type) return res.status(mapError(type)).json({ message });
  res.status(200).json(message);
};

module.exports = {
  createUser,
  getAllUsers,
};
