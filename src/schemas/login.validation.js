const { loginSchema } = require('./schemas');

const loginValidation = (body) => {
  const { error } = loginSchema.validate(body);
  if (error) return { type: 'BAD_REQUEST', message: error.message };

  return { type: null, message: '' };
};

module.exports = loginValidation;
