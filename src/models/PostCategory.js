module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: {
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    categoryId: {
      primaryKey: true,
      type: DataTypes.INTEGER,
    }
  }, {
    tableName: 'posts_categories',
    underscored: true,
    timestamps: false,
  });

  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'category',
      foreignKey: 'postId',
      otherKey: 'categoryId',
      through: PostCategory,
    });

    models.Category.belongsToMany(models.BlogPost, {
      as: 'blogPost',
      foreignKey: 'categoryId',
      otherKey: 'postId',
      through: PostCategory,
    });
  }

  return PostCategory;
}