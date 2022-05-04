const { sort } = require("./../config");
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

const sortParseParams=function ({ sortBy, direction }, fields = {}) {
  const sortBySafeList=[
    ...Object.getOwnPropertyNames(fields),
    ...sort.sortBy.fields,
  ];
  
  return {
    sortBy: sortBySafeList.includes(sortBy) ? sortBy : sort.sortBy.default,
    direction: sort.direction.Option.includes(direction)
      ? direction
      : sort.direction.default,
  };
};

module.exports = {
  paginationParseParams,
  sortParseParams,
};
