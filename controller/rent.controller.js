let db = require('./../model/index');
let { Op } = require('sequelize');

let rentBook = async (req, res, next) => {
  let user = await db.user.findOne({
    where: {
      name: req.name,
    },
  });
  let book = await db.books.findByPk(req.params.id);
  await user.addBooks(book);
  res.status(201).send('your Rent a book name is ' + JSON.stringify(book));
  res.end();
};

let rentFreeBook = async (req, res, next) => {
  await db.rents.destroy({
    where: {
      [Op.and]: [{ BookId: req.body.BookId }, { userId: req.body.userId }],
    },
  });
  res.status(200).send('your book is rent free now');
  res.end();
};

// let getAllRentInfo = async  (req,res,next)=>{

// }

module.exports = { rentBook, rentFreeBook };
