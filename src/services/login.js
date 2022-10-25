const { User } = require('../models');
const jwt = require('../utils/jwt');

const login = async ({ email, password }) => {
  const user = await User.findOne({ where: { email } });

  if (!user || user.password !== password) {
    return { type: 'BAD_REQUEST', message: 'Invalid fields' };
  }

  const { password: _, ...userWithoutPassword } = user.toJSON();

  const token = jwt.createToken(userWithoutPassword);

  return { type: null, message: { token } };
};

module.exports = {
  login,
};
