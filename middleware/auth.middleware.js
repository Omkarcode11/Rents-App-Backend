let jwt = require('jsonwebtoken');
let secretKey = require('./../config/auth.config');

let verifyToken = (req, res, next) => {
  let token = req.headers['token'];
  if (!token) {
    res.send('Signin First');
    return;
  }
  jwt.verify(token, secretKey.secret, (err, decoded) => {
    if (err) {
      res.status(401).json({
        message: 'Wrong Token pass',
      });
    }
    req.name = decoded.name;
    next();
  });
};

module.exports = {
  verifyToken,
};
