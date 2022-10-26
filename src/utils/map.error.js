const statusHttp = {
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  CONFLICT: 409,
};

const mapError = (type) => statusHttp[type] || 500;

module.exports = mapError;
