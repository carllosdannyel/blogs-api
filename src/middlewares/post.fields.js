const postValidation = require('../schemas/post.validation');
const mapError = require('../utils/map.error');

const fieldsValidationPost = (req, res, next) => {
  const { type, message } = postValidation(req.body);
  if (type) return res.status(mapError(type)).json({ message });
  next();
};

module.exports = fieldsValidationPost;
