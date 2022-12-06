const express = require('express');
let userRoute = express.Router();
let userController = require('./../controller/users.controller');
let jwtVerify = require('./../middleware/auth.middleware');
let userValidator = require('./../middleware/validator.middleware');


userRoute.get('/', [jwtVerify.verifyToken,userValidator.onlyAdmin], userController.getAllUsers);
userRoute.get('/:id', [jwtVerify.verifyToken,userValidator.onlyAdmin], userController.getUsersById);
userRoute.put('/update', [jwtVerify.verifyToken,userValidator.onlyAdmin], userController.updateUser);
userRoute.delete(
  '/:id',
  [jwtVerify.verifyToken, userValidator.onlyAdmin, userValidator.idValidatorForBooks],
  userController.deleteUser
);

module.exports = userRoute;
