const express = require('express');
// eslint-disable-next-line
const router = express.Router();
const controller = require('./controller');
const { sanitizers } = require('./model');

/*
 * /api/v1/users/signup  POST Create
 * /api/vi/users/signin  POST Login
 * /api/v1/users/:id     GET Read
 * /api/v1/users/:id     PUT Update
 * /api/v1/users/:id     PATCH Activation
 */


//router.route('/').get(controller.all).post(sanitizers, controller.create);
router.route('/signup').post(controller.signup);
router.route('/signin').post(controller.signin);

router.param('id', controller.id);

router
  .route('/:id')
  .get(controller.read)
  .put(sanitizers, controller.update)
  .patch(controller.activation);

module.exports = router;
