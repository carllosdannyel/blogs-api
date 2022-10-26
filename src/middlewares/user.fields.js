const userValidation = require('../schemas/user.validation');
const mapError = require('../utils/map.error');

const fieldsValidationUser = (req, res, next) => {
  const { type, message } = userValidation(req.body);
  if (type) return res.status(mapError(type)).json({ message });
  next();
};

module.exports = fieldsValidationUser;
