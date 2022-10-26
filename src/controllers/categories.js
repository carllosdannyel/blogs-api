const categoryService = require('../services/categories');
const mapError = require('../utils/map.error');

const createCategorie = async (req, res) => {
  const { type, message } = await categoryService.createCategorie(req.body);
  if (type) return res.status(mapError(type)).json({ message });
  res.status(201).json(message);
};

const getAllCategories = async (_req, res) => {
  const { type, message } = await categoryService.getAllCategories();
  if (type) return res.status(mapError(type)).json({ message });
  res.status(200).json(message);
};

module.exports = {
  createCategorie,
  getAllCategories,
};
