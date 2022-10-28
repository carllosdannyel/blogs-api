const Joi = require('joi');

const someRequiredFieldsAreMissing = 'Some required fields are missing';

const postSchema = Joi.object({
  title: Joi.string().required().messages({
    'any.required': someRequiredFieldsAreMissing,
    'string.empty': someRequiredFieldsAreMissing,
  }),
  content: Joi.string().required().messages({
    'any.required': someRequiredFieldsAreMissing,
    'string.empty': someRequiredFieldsAreMissing,
  }),
});

const postValidation = (body) => {
  const { error } = postSchema.validate(body);
  if (error) return { type: 'BAD_REQUEST', message: error.message };

  return { type: null, message: '' };
};

module.exports = postValidation;
