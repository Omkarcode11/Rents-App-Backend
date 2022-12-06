let db = require('./../model/index');
let { Op } = require('sequelize');

let rentBook = async (req, res, next) => {
  let user = await db.user.findOne({
    where: {
      name: req.name,
    },
  });
  if(!user){
    res.status(400).send("Enter valid name")
    return
  }
  let book = await db.books.findByPk(req.params.id);
  if(!book){
    res.status(400).send("Enter valid id")
    return
  }
  await user.addBooks(book);
  res.status(201).send('your Rent a book name is ' + JSON.stringify(book));
  res.end();
};

let rentFreeBook = async (req, res, next) => {
  if((!req.body.BookId || !req.body.userId)){
    res.status(400).send("Enter valid id ")
    return
  }
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
