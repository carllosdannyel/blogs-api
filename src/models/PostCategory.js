module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define(
    'PostCategory',
    {
      postId: {
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      categoryId: {
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
    },
    {
      tableName: 'posts_categories',
      underscored: true,
      timestamps: false,
    },
  );
  
  PostCategory.associate = ({ BlogPost, Category }) => {
    BlogPost.belongsToMany(Category, {
      as: 'categories',
      foreignKey: 'postId',
      otherKey: 'categoryId',
      through: PostCategory,
    });

    Category.belongsToMany(BlogPost, {
      as: 'blogPost',
      foreignKey: 'categoryId',
      otherKey: 'postId',
      through: PostCategory,
    });
  };

  return PostCategory;
};
