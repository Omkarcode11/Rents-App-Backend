let { mockResponse, mockRequest } = require('./../inspector');
let db = require('./../../../model/index');
let authController = require('./../../../controller/auth.controller');
let bcrypt = require('bcryptjs');
let jwt = require('jsonwebtoken');
let Key = require('./../../../config/auth.config')

describe('test Auth Controller', () => {
  let req, res;
  beforeEach(() => {
    req = mockRequest();
    res = mockResponse();
  });

  let signup = 'User Added Successfully';
  let user = {
    name: 'omakr',
    address: 'Nashik',
    role: 'admin',
    password: '$2a$08$Ucc3sD3HH684Vuke73vImecleQY388XXoWG7cuCWX4/aYDqSoon8u',
  };
  let token = jwt.sign({name : user.name} , Key.secret, {expiresIn : 10000})

  test('signup controller', async () => {
    let spy = jest.spyOn(db.user, 'create').mockImplementation(() => {
      return new Promise((res, rej) => {
        res(signup);
      });
    });
    req.body = {
      name: 'omkar',
      address: 'Nashik',
      role: 'Admin',
      password: 'omkar1234',
    };
    await authController.signup(req, res);

    expect(spy).toHaveBeenCalled();
    expect(res.status).toBeCalledWith(201);
    expect(res.send).toBeCalledWith(signup);
  });

  test('signin Controller method ', async () => {
    let spy = jest.spyOn(db.user, 'findOne').mockImplementation(() => {
      return new Promise((res, rej) => {
        res(user);
      });
    });
    req.body = {
      name: 'omkar',
      password: 'Om1234',
    };
    await authController.signin(req, res);

    expect(spy).toBeCalled();
    expect(res.status).toBeCalledWith(200);
    expect(res.send).toBeCalledWith({ id: user.id, name: user.name, address: user.id, role: user.role, token : token });
  });
});
