const { json } = require('body-parser');
let db = require('../model/index');

let nameValidator = async (req, res, next) => {
  if (!req.body.name) {
    res.status(400).send('Enter Name');
    return;
  }
  next();
};

let idValidatorForBooks = async (req, res, next) => {
  if (!req.params.id) {
    res.status(400).send('Enter Id');
    return;
  }
  let user = await db.books.findByPk(req.params.id);
  if (!user || user == []) {
    res.status(400).send('Enter Valid Id');
    return;
  }
  next();
};

let onlyAdmin = async (req, res, next) => {
  let user = await db.user.findAll({
    where: {
      name: req.name,
    },
  });
  let client = JSON.stringify(user);
  if (!client.includes('admin')) {
    res.send('your not able to this ');
    return;
  }
  next();
};

module.exports = { nameValidator, idValidatorForBooks, onlyAdmin };
