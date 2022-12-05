let { mockRequest, mockResponse } = require('./../inspector');
let db = require('./../../../model/index');
let booksController = require('./../../../controller/books.controller');

describe('testing books Controller', () => {
  let req, res;
  beforeEach(() => {
    req = mockRequest();
    res = mockResponse();
  });

  let allBooks = 'your get All Books';
  let book = {
    name: 'shamchi aai',
    author: 'Dnyneshwar Maharaj',
  };
  let addBooks = 'Books Added Successfully';
  let addBook = 'Book Added Successfully';
  let updateBook = 'Successfully Update Book';
  let deleteBook = 'Successfully Deleted Book';

  test('get All Books Lists', async () => {
    let spy = jest.spyOn(db.books, 'findAll').mockImplementation(() => {
      return new Promise((res, rej) => {
        res(allBooks);
      });
    });
    await booksController.getAllBooks(req, res);

    expect(spy).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(allBooks);
  });

  test('get Book By Id ', async () => {
    let spy = jest.spyOn(db.books, 'findByPk').mockImplementation(() => {
      return new Promise((res, rej) => {
        res(book);
      });
    });
    req.params.id = 1;
    await booksController.getBooksById(req, res);

    expect(spy).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(book);
  });

  test('add Books ', async () => {
    let spy = jest.spyOn(db.books, 'bulkCreate').mockImplementation(() => {
      return new Promise((res, rej) => {
        res(addBooks);
      });
    });
    req.body = book;
    await booksController.addBooks(req, res);
    expect(spy).toBeCalled();
    expect(res.status).toBeCalledWith(201);
    expect(res.send).toBeCalledWith(addBooks);
  });

  test('add Book', async () => {
    let spy = jest.spyOn(db.books, 'create').mockImplementation(() => {
      return new Promise((res, rej) => {
        res(addBook);
      });
    });
    req.body.id = 'omkar';
    await booksController.addBook(req, res);

    expect(spy).toBeCalled();
    expect(res.status).toBeCalledWith(201);
    expect(res.send).toBeCalledWith(addBook);
  });

  test('Update Book', async () => {
    let spy = jest.spyOn(db.books, 'update').mockImplementation(() => {
      return new Promise((res, rej) => {
        res(updateBook);
      });
    });
    await booksController.updateBook(req, res);
    expect(spy).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(202);
    expect(res.send).toHaveBeenCalledWith(updateBook);
  });

  test('deleteBook', async () => {
    let spy = jest.spyOn(db.books, 'destroy').mockImplementation(() => {
      return new Promise((res, rej) => {
        res(deleteBook);
      });
    });
    req.params.id = 2;
    await booksController.deleteBook(req,res)

    expect(spy).toHaveBeenCalled()
    expect(res.send).toBeCalledWith(deleteBook)
    expect(res.status).toBeCalledWith(300)
  });
});
