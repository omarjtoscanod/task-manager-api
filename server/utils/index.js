const config = require("./../config");

const { pagination } = config;

const paginationParseParams = function ({
  limit = pagination.limit,
  skip = pagination.skip,
}) {
  return {
    limit: Number.parseInt(limit),
    skip: Number.parseInt(skip),
  };
};

module.exports = {
  paginationParseParams,
};
