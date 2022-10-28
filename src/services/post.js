const { Category, BlogPost, PostCategory } = require('../models');

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

  const blogPost = await createBlogPost(id, title, content);

  await Promise.all(categoryIds.map((categoryId) =>
      createPostCategory(blogPost.dataValues.id, categoryId)));

  return { type: null, message: blogPost.dataValues };
};

module.exports = {
  createPost,
};
