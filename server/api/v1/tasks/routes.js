const express = require('express');
// eslint-disable-next-line
const router = express.Router();
const controller = require('./controller');
const { sanitizers } = require('./model');

/*
 * /api/v1/tasks       POST Create
 * /api/vi/tasks       GET Read all
 * /api/v1/tasks/:id   GET Read
 * /api/v1/tasks/:id   PATCH Update
 * /api/v1/tasks/:id   DELETE  Delete
 */

router.route('/').get(controller.all).post(sanitizers, controller.create);

router.param('id', controller.id);

router
  .route('/:id')
  .get(controller.read)
  .patch(sanitizers, controller.update)
  .put(sanitizers, controller.update)
  .delete(controller.delete);

module.exports = router;
