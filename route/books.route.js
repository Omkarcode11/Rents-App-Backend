const express = require('express');
let bookRoute = express.Router();
let booksController = require('./../controller/books.controller');
let Validator = require('./../middleware/validator.middleware.js');
let jwtVerify = require('./../middleware/auth.middleware');

bookRoute.get('/', booksController.getAllBooks);
bookRoute.get('/:id', [Validator.idValidatorForBooks], booksController.getBooksById);
bookRoute.post('/add', [Validator.validatorForBulkCreate, jwtVerify.verifyToken], booksController.addBooks);
bookRoute.post(
  '/create',
  [Validator.nameValidator, jwtVerify.verifyToken, Validator.onlyAdmin],
  booksController.addBook
);
bookRoute.put('/update', [jwtVerify.verifyToken,Validator.updateBookValidator], booksController.updateBook);
// bookRoute.patch('/update/:id',booksController.updateBookVal)
bookRoute.delete('/delete/:id', [jwtVerify.verifyToken,Validator.idValidatorForBooks], booksController.deleteBook);

module.exports = bookRoute;
