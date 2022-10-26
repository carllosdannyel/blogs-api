require('dotenv/config');
const jwt = require('jsonwebtoken');

const createToken = (data) => {
  const token = jwt.sign({ data }, process.env.JWT_SECRET, {
    expiresIn: '1d',
    algorithm: 'HS256',
  });

  return token;
};

const validateToken = (token) => {
  if (!token) return { type: 'UNAUTHORIZED', message: 'Token not found' };

  try {
    const { data } = jwt.verify(token, process.env.JWT_SECRET);
    return { type: null, message: data };
  } catch (error) {
    return { type: 'UNAUTHORIZED', message: 'Expired or invalid token' };
  }
};

module.exports = { createToken, validateToken };
