const editPostValidation = require('../schemas/edit.post.validation');
const mapError = require('../utils/map.error');

const fieldsValidationEditPost = (req, res, next) => {
  const { type, message } = editPostValidation(req.body);
  if (type) return res.status(mapError(type)).json({ message });
  next();
};

module.exports = fieldsValidationEditPost;
