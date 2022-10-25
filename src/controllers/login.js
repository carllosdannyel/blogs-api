const loginService = require('../services/login');
const mapError = require('../utils/map.error');

const login = async (req, res) => {
  const { type, message } = await loginService.login(req.body);
  if (type) return res.status(mapError(type)).json({ message });

  res.status(200).json(message);
};

module.exports = {
  login,
};
