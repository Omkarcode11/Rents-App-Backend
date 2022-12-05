module.exports = {
  mockRequest: () => {
    const req = {};
    req.params = jest.fn().mockReturnValue(req);
    req.body = jest.fn().mockReturnValue(req);
    req.header = jest.fn().mockReturnValue(req);
    req.query = jest.fn().mockReturnValue(req);
    return req
  },
  mockResponse: () => {
    res = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    res.send = jest.fn().mockReturnValue(res);
    res.end = jest.fn()
    return res
  },
};
