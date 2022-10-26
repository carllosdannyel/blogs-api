const { Category } = require('../models');

const createCategorie = async ({ name }) => {
  if (!name || !name.length) {
    return { type: 'BAD_REQUEST', message: '"name" is required' };
  }

  const category = await Category.create({ name });
  return { type: null, message: category };
};

module.exports = {
  createCategorie,
};
