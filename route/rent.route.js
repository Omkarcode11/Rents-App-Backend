const express = require('express');
let rentRoute = express.Router();
let rentController = require('./../controller/rent.controller');
let verifyJwt = require('./../middleware/auth.middleware');
let validator = require('./../middleware/validator.middleware');

rentRoute.post('/:id', [verifyJwt.verifyToken,validator.onlyAdmin ,validator.idValidatorForBooks], rentController.rentBook);
rentRoute.delete('/free',[verifyJwt.verifyToken,validator.onlyAdmin] ,rentController.rentFreeBook);

module.exports = rentRoute;
