require("dotenv").config();

const config = {
  port: process.env.PORT,
  database: {
    protocol: process.env.DB_PROTOCOL,
    url: process.env.DB_URL,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
  },
  pagination: {
    limit: process.env.DB_LIMIT,
    skip: process.env.DB_SKIP,
  },
  
  sort: {
    sortBy:{
      default: 'createdAt',
      fields: [
        'createdAt','updatedAt'
      ]
    },
    direction:{
      default:'desc',
      Option:['desc','asc'],
    },
  },
};

module.exports = config;
