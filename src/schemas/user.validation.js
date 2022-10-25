const { userSchema } = require('./schemas');

const userValidation = (body) => {
  const { error } = userSchema.validate(body);
  if (error) return { type: 'BAD_REQUEST', message: error.message };

  return { type: null, message: '' };
};

module.exports = userValidation;
