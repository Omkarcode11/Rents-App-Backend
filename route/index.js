const express = require('express');
let router = express.Router();
let app = express();
let bookRoute = require('./books.route');
let userRoute = require('./users.route');
let authRoute = require('./auth.route');
let rentRoute = require('./rent.route');

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Headers', 'token, Origin, Content-Type, Accept');
  next();
});

router.use('/Books', bookRoute);
router.use('/User', userRoute);
router.use('/', authRoute);
router.use('/Books/rent', rentRoute);

module.exports = router;
