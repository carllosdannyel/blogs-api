const Joi = require('joi');

const userSchema = Joi.object({
  email: Joi.string().email().required().messages({
    'any.required': 'Some required fields are missing',
    'string.empty': 'Some required fields are missing',
  }),
  password: Joi.string().required().messages({
    'any.required': 'Some required fields are missing',
    'string.empty': 'Some required fields are missing',
  }),
});

module.exports = {
  userSchema,
};
