const jwt = require('../utils/jwt');
const mapError = require('../utils/map.error');

const validateToken = async (req, res, next) => {
  const { authorization } = req.headers;
  const { type, message } = jwt.validateToken(authorization);
  if (type) return res.status(mapError(type)).json({ message });
  req.user = message;
  next();
};

module.exports = { validateToken };
