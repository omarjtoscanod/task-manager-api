const express = require("express");
const api = require("./api/v1");

const app = express();

app.use("/api/v1", api);

app.use((req, res, next) => {
  next({
    message: "Route Not Found",
    statusCode: 404,
  });
});

app.use((err, req, res, next) => {
  const { message = "", statusCode = 500 } = err;

  res.status(statusCode);
  res.json({
    message,
  });
});

module.exports = app;
