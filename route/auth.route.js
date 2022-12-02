const express = require('express');
let authRouter = express.Router();
let authController = require('./../controller/auth.controller');
let authValidator = require('./../middleware/validator.middleware')

authRouter.post('/signup',[authValidator.nameValidator], authController.signup);
authRouter.post('/signin', authController.signin);

module.exports = authRouter;
