const Joi = require('joi');

const userSchema = Joi.object({
  displayName: Joi.string().min(8).required().messages({
    'any.required': '"displayName" is required',
    'string.empty': '"displayName" is required',
    'strinig.min': '"displayName" length must be at least 8 characters long',
  }),
  email: Joi.string().email().required().messages({
    'any.required': '"email" is required',
    'string.empty': '"email" is required',
    'string.email': '"email" must be a valid email',
  }),
  password: Joi.string().min(6).required().messages({
    'any.required': '"password" is required',
    'string.empty': '"password" is required',
    'string.min': '"password" length must be at least 6 characters long',
  }),
  image: Joi.string(),
});

const userValidation = (body) => {
  const { error } = userSchema.validate(body);
  if (error) return { type: 'BAD_REQUEST', message: error.message };

  return { type: null, message: '' };
};

module.exports = userValidation;
