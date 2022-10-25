const statusHttp = {
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
};

const mapError = (type) => statusHttp[type] || 500;

module.exports = mapError;
