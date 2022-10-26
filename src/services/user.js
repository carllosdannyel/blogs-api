const { User } = require('../models');
const jwt = require('../utils/jwt');

const findUserByEmail = async (email) => {
  const user = await User.findOne({ where: { email } });
  return user;
};

const createUser = async ({ displayName, email, password, image }) => {
  const user = await findUserByEmail(email);

  if (user) return { type: 'CONFLICT', message: 'User already registered' };

  const newUser = await User.create({ displayName, email, password, image });

  const { password: _, ...userWithoutPassword } = newUser.toJSON();
  const token = jwt.createToken(userWithoutPassword);

  return { type: null, message: { token } };
};

const getAllUsers = async () => {
  const users = await User.findAll({
    attributes: { exclude: ['password'] },
  });

  console.log(users);

  return { type: null, message: users };
};

module.exports = {
  createUser,
  getAllUsers,
};
