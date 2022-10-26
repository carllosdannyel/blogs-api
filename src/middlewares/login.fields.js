const loginValidation = require('../schemas/login.validation');
const mapError = require('../utils/map.error');

const fieldsValidationLogin = (req, res, next) => {
  const { type, message } = loginValidation(req.body);
  if (type) return res.status(mapError(type)).json({ message });
  next();
};

module.exports = fieldsValidationLogin;
