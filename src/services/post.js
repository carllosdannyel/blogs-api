const { Category, User, BlogPost, PostCategory } = require('../models');

const getCategoryById = async (id) => Category.findByPk(id);

const createBlogPost = async (id, title, content) =>
  BlogPost.create({ title, content, userId: id, published: new Date(), updated: new Date() });

const createPostCategory = async (postId, categoryId) =>
  PostCategory.create({ postId, categoryId });

const createPost = async (id, { title, content, categoryIds }) => {
  const categories = await Promise.all(
    categoryIds.map((categoryId) => getCategoryById(categoryId)),
  );

  if (categories.includes(null)) {
    return { type: 'BAD_REQUEST', message: 'one or more "categoryIds" not found' };
  }

  const { dataValues } = await createBlogPost(id, title, content);

  await Promise.all(categoryIds.map((categoryId) =>
      createPostCategory(dataValues.id, categoryId)));

  return { type: null, message: dataValues };
};

const getAllPostsByUser = async ({ id }) => {
    const posts = await BlogPost.findAll({
        include: [
            { model: User, as: 'user', where: { id }, attributes: { exclude: ['password'] } },
            { model: Category, as: 'categories', through: { attributes: [] } },
        ],
    });
    return { type: null, message: posts };
};

module.exports = {
  createPost,
  getAllPostsByUser,
};