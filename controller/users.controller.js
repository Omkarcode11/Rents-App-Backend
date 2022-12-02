let db = require('./../model/index');

let getAllUsers = async (req, res, next) => {
  let allUsers = await db.user.findAll({
    include: db.books,
  });
  res.status(200).json(allUsers);
  res.end();
};

let getUsersById = async (req, res, next) => {
  let user = await db.user.findByPk(req.params.id, {
    attributes: ['name', 'address'],
    include: [
      {
        model: db.books,
        attributes: ['name', 'author'],
      },
    ],
  });
  res.status(200).json(user);
  res.end();
};

let updateUser = async (req, res, next) => {
  await db.user.update(req.body, {
    where: {
      id: req.body.id,
    },
  });
  res.status(202).send('Successfully Update User');
  res.end();
};

let deleteUser = async (req, res, next) => {
  await db.user.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.status(300).send('Successfully Delete User');
  res.end();
};

module.exports = { getAllUsers, getUsersById, updateUser, deleteUser };
