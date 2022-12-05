let { mockRequest, mockResponse } = require('./../inspector');
let db = require('../../../model/index');
const { user } = require('../../../model/index');
let rentController = require('./../../../controller/rent.controller');
const { addBook } = require('../../../controller/books.controller');

describe('testing rent Controller', () => {
  let req, res;
  beforeEach(() => {
    req = mockRequest();
    res = mockResponse();
  });

  let user = {
    name: 'omkar',
    email: 'omkarsonawaneomkar2@gmail.com',
    password: 'omkar1234',
  };
  let book = {
    name: 'shamchi aai',
    author: 'dnyneshwar maharaj',
  };

  let result = 'your Rent a book name is ' + JSON.stringify(book);
  let rentFree = 'your book is rent free now';

  xtest('rentBook', async () => {
    let spy = jest.spyOn(db.user, 'findOne').mockImplementation(() => {
      return new Promise((res, rej) => {
        res(user);
      });
    });
    let spy2 = jest.spyOn(db.books, 'findByPk').mockImplementation(() => {
      return new Promise((res, rej) => {
        res(book);
      });
    });
    let spy3 = await user.addBooks(book);
    req.name = 'omkar';
    req.params.id = 1;

    await rentController.rentBook(req, res);

    expect(spy).toBeCalled();
    expect(spy2).toBeCalled();
    expect(spy3).toBeCalled();
  });

  test('rent Free Book ', async () => {
    let spy = jest.spyOn(db.rents, 'destroy').mockImplementation(() => {
      return new Promise((res, rej) => {
        res(rentFree);
      });
    });
    req.body = {
      BookId: 2,
      userId: 3,
    };
    await rentController.rentFreeBook(req, res);

    expect(spy).toBeCalled();
    expect(res.status).toBeCalledWith(200);
    expect(res.send).toBeCalledWith(rentFree);
  });
});
