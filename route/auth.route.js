const express = require('express');
let authRouter = express.Router();
let authController = require('./../controller/auth.controller');
let authValidator = require('./../middleware/validator.middleware')

authRouter.post('/signup',[authValidator.signupValidation], authController.signup);
authRouter.post('/signin',[authValidator.nameValidator] ,authController.signin);

module.exports = authRouter;
