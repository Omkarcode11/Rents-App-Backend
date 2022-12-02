const express = require('express');
let bookRoute = express.Router();
let booksController = require('./../controller/books.controller');
let bookValidator = require('./../middleware/validator.middleware.js');
let jwtVerify = require('./../middleware/auth.middleware');

bookRoute.get('/', booksController.getAllBooks);
bookRoute.get('/:id', booksController.getBooksById);
bookRoute.post('/add', booksController.addBooks);
bookRoute.post(
  '/create',
  [bookValidator.nameValidator, jwtVerify.verifyToken, bookValidator.onlyAdmin],
  booksController.addBook
);
bookRoute.put('/update', [jwtVerify.verifyToken], booksController.updateBook);
// bookRoute.patch('/update/:id',booksController.updateBookVal)
bookRoute.delete('/delete/:id', [jwtVerify.verifyToken], booksController.deleteBook);

module.exports = bookRoute;
