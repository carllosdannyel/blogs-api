module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    'Category',
    {
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {
      tableName: 'categories',
      underscored: true,
      timestamps: false,
    },
  );

  return Category;
};
