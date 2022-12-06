let path = require('path');

let ErrorHandler = (err, req, res, next) => {
  const errStatus = err.statusCode || 500;
  const errMsg = err.message || 'something Wrong';
  res.sendFile(path.join(__dirname + './../views/Error.html'));
};

module.exports = ErrorHandler;
