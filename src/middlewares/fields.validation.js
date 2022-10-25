const userValidation = require('../services/validations/user.validation');
const mapError = require('../utils/map.error');

const fieldsValidation = (req, res, next) => {
  const { type, message } = userValidation(req.body);
  if (type) return res.status(mapError(type)).json({ message });
  next();
};

module.exports = fieldsValidation;
