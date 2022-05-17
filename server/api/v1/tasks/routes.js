const express = require('express');
// eslint-disable-next-line
const router = express.Router();
const controller = require('./controller');
const auth = require('./../auth/controller');

/*
 * /api/v1/tasks       POST Create
 * /api/vi/tasks       GET Read all
 * /api/v1/tasks/:id   GET Read
 * /api/v1/tasks/:id   PATCH Update
 * /api/v1/tasks/:id   DELETE  Delete
 */

router.route('/').get(controller.all).post(auth.auth, controller.create);

router.param('id', controller.id);

router
  .route('/:id')
  .get(controller.read)
  .patch(auth.auth, auth.owner, controller.update)
  .put(auth.auth, auth.owner, controller.update)
  .delete(auth.auth, auth.owner, controller.delete);

module.exports = router;
