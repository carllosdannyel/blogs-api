const Joi = require('joi');

const loginSchema = Joi.object({
  email: Joi.string().email().required().messages({
    'any.required': 'Some required fields are missing',
    'string.empty': 'Some required fields are missing',
  }),
  password: Joi.string().required().messages({
    'any.required': 'Some required fields are missing',
    'string.empty': 'Some required fields are missing',
  }),
});

const loginValidation = (body) => {
  const { error } = loginSchema.validate(body);
  if (error) return { type: 'BAD_REQUEST', message: error.message };

  return { type: null, message: '' };
};

module.exports = loginValidation;
