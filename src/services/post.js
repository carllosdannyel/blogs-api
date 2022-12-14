const Sequelize = require('sequelize');

const { Op } = Sequelize;
const { Category, User, BlogPost, PostCategory } = require('../models');

const getCategoryById = async (id) => Category.findByPk(id);

const createBlogPost = async (id, title, content) =>
  BlogPost.create({
    title,
    content,
    userId: id,
    published: new Date(),
    updated: new Date(),
  });

const createPostCategory = async (postId, categoryId) =>
  PostCategory.create({ postId, categoryId });

const createPost = async (id, { title, content, categoryIds }) => {
  const categories = await Promise.all(
    categoryIds.map((categoryId) => getCategoryById(categoryId)),
  );

  if (categories.includes(null)) {
    return {
      type: 'BAD_REQUEST',
      message: 'one or more "categoryIds" not found',
    };
  }

  const { dataValues } = await createBlogPost(id, title, content);

  await Promise.all(
    categoryIds.map((categoryId) =>
      createPostCategory(dataValues.id, categoryId)),
  );

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

const getPostById = async (id) => BlogPost.findByPk(id);

const getUserPostById = async (id, user) => {
  const postById = await getPostById(id);

  if (!postById) return { type: 'NOT_FOUND', message: 'Post does not exist' };

  const post = await BlogPost.findByPk(id, {
    include: [
      { model: User, as: 'user', where: { id: user.id }, attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  return { type: null, message: post };
};

const getOnePostById = async (id) =>
  BlogPost.findOne({ where: { id }, attributes: ['userId'] });

const updatePost = async (title, content, id) =>
  BlogPost.update({ title, content, updated: new Date() }, { where: { id } });

const getPostUpdated = async (user, id) =>
  BlogPost.findByPk(id, {
    include: [
      { model: User, as: 'user', where: { id: user.id }, attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

const updatePostById = async (title, content, id, user) => {
  const { dataValues } = await getOnePostById(id);

  if (user.id !== dataValues.userId) {
    return { type: 'UNAUTHORIZED', message: 'Unauthorized user' };
  }

  await updatePost(title, content, id);

  const postUpdated = await getPostUpdated(user, id);

  return { type: null, message: postUpdated };
};

const deletePostById = async (userId, paramsId) => {
  const post = await BlogPost.findByPk(paramsId, { where: userId });

  if (!post) return { type: 'NOT_FOUND', message: 'Post does not exist' };

  if (post.dataValues.userId !== userId) {
    return { type: 'UNAUTHORIZED', message: 'Unauthorized user' };
  }

  await BlogPost.destroy({ where: { id: paramsId } });

  return { type: null, message: '' };
};

const getAllPost = async (userId) =>
  BlogPost.findAll({
    include: [
      { model: User, as: 'user', where: { id: userId }, attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

const getPostByQuery = async (query, userId) =>
  BlogPost.findAll({
    where: {
      [Op.or]: [
        { title: { [Op.substring]: query } },
        { content: { [Op.substring]: query } },
      ],
    },
    include: [
      { model: User, as: 'user', where: { id: userId }, attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

const getPostByName = async (query, user) => {
  const posts = await getAllPost(user.id);
  if (!query || !query.length) return { type: null, message: posts };
  const postByQuery = await getPostByQuery(query, user.id);
  return { type: null, message: postByQuery };
};

module.exports = {
  createPost,
  getAllPostsByUser,
  getUserPostById,
  updatePostById,
  deletePostById,
  getPostByName,
};
