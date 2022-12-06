let db = require('./../model/index');
let jwt = require('jsonwebtoken');
let bcrypt = require('bcryptjs');
let secretKey = require('./../config/auth.config');

let signup = async (req, res, next) => {
  try {
    await db.user.create({
      name: req.body.name,
      address: req.body.address,
      role: req.body.role,
      password: bcrypt.hashSync(req.body.password, 8),
    });
    res.status(201).send('User Added Successfully');
    res.end();
  } catch (err) {
    next(err)
  }
};

let signin = async (req, res, next) => {
  try {
    let user = await db.user.findOne({
      where: {
        name: req.body.name,
      },
  });
  if (!user) {
    res.status(400).send('Enter valid User');
    return;
  }
  isValidPassword = bcrypt.compareSync(req.body.password, user.password);
  if (!isValidPassword) {
    res.status(400).send('Incorrect Password');
    return;
  }
  
  let token = jwt.sign({ name: user.name }, secretKey.secret, { expiresIn: 10000 });
  
  res.status(200).send({
    id: user.id,
    name: user.name,
    address: user.id,
    role: user.role,
    token: token,
  });
  res.end();
} catch (err) {
  next(err)
}
};

module.exports = { signup, signin };
