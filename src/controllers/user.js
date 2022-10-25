const userService = require('../services/user');
const mapError = require('../utils/map.error');

const createUser = async (req, res) => {
  const { type, message } = await userService.createUser(req.body);
  if (type) return res.status(mapError(type)).json({ message });
  res.status(201).json(message);
};

module.exports = {
  createUser,
};
