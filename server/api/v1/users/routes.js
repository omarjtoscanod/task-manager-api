const express = require('express');
// eslint-disable-next-line
const router = express.Router();
const controller = require('./controller');
const { sanitizers } = require('./model');

/*
 * /api/v1/users       POST Create
 * /api/vi/users       GET Read all
 * /api/v1/users/:id   GET Read
 * /api/v1/users/:id   PUT Update
 * /api/v1/users/:id   PATCH Activation
 */


router.route('/').get(controller.all).post(sanitizers, controller.create);

router.param('id', controller.id);

router
  .route('/:id')
  .get(controller.read)
  .put(sanitizers, controller.update)
  .patch(controller.activation);

module.exports = router;
