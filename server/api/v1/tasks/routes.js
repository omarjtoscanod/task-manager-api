const express = require("express");
// eslint-disable-next-line
const router = express.Router();

router
  .route("/")
  .get((req, res, next) => {
    res.json({
      message: "Welcome API",
    });
  })
  .post((req, res, next) => {
    res.json({
      message: "Welcome API",
    });
  });

module.exports = router;
