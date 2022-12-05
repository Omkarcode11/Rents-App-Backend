let db = require('./../../../model/index');
let { mockRequest, mockResponse } = require('../inspector');
let userController = require('./../../../controller/users.controller');
describe('testing user Controller ', () => {
  let req, res;
  beforeEach(() => {
    req = mockRequest();
    res = mockResponse();
  });

  let allUser = 'all Users';
  let user = {
    name: 'omkar',
    address: 'Nashik',
    book: 'Shamchi aai',
    author: 'Dnyneshwar Maharaj',
  };
  let userUpdate = 'Successfully Update User';
  let deleteUser = 'Successfully Delete User';

  test('get All Users', async () => {
    let spy = jest.spyOn(db.user, 'findAll').mockImplementation(() => {
      return new Promise((res, rej) => {
        res(allUser);
      });
    });
    await userController.getAllUsers(req, res);
    expect(spy).toBeCalled();
    expect(res.status).toBeCalledWith(200);
    expect(res.json).toBeCalledWith(allUser);
  });

  test('get User By id', async () => {
    let spy = jest.spyOn(db.user, 'findByPk').mockImplementation(() => {
      return new Promise((res, rej) => {
        res(user);
      });
    });
    req.params.id = 1;

    await userController.getUsersById(req, res);

    expect(spy).toBeCalled();
    expect(res.status).toBeCalledWith(200);
    expect(res.json).toBeCalledWith(user);
  });

  test('update User ', async () => {
    let spy = jest.spyOn(db.user, 'update').mockImplementation(() => {
      return new Promise((res, rej) => {
        res(userUpdate);
      });
    });
    req.body.id = 2;
    await userController.updateUser(req, res);

    expect(spy).toBeCalled();
    expect(res.status).toBeCalledWith(202);
    expect(res.send).toBeCalledWith(userUpdate);
  });

  test('delete user', async () => {
    let spy = jest.spyOn(db.user, 'destroy').mockImplementation(() => {
      return new Promise((res, rej) => {
        res(deleteUser);
      });
    });
    req.params.id = 1;
    await userController.deleteUser(req, res);

    expect(spy).toBeCalled();
    expect(res.status).toBeCalledWith(300);
    expect(res.send).toBeCalledWith(deleteUser);
  });
});
