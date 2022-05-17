const express = require('express');
// eslint-disable-next-line
const router = express.Router();
const controller = require('./controller');
const { sanitizers } = require('./model');

const auth = require('./../auth/controller');

/*
 * /api/v1/users       POST Create
 * /api/vi/users       GET Read all
 * /api/v1/users/:id   GET Read
 * /api/v1/users/:id   PUT Update
 * /api/v1/users/:id   PATCH Activation
 */

router.route('/signin').post(controller.signIn);

router
  .route('/')
  .get(auth.auth, controller.all)
  .post(auth.auth, sanitizers, controller.create);

router.param('id', controller.id);

router
  .route('/:id')
  .get(auth.auth, controller.read)
  .put(sanitizers, controller.update)
  .patch(controller.activation);

module.exports = router;
