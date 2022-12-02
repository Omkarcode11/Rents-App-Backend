let db = require('./../model/index');

let getAllBooks = async (req, res, next) => {
  let allBooks = await db.books.findAll();
  res.status(200).json(allBooks);
  res.end();
};

let getBooksById = async (req, res, next) => {
  let book = await db.books.findByPk(req.params.id);
  res.status(200).json(book);
  res.end();
};

let addBooks = async (req, res, next) => {
  await db.books.bulkCreate(req.body);
  res.status(201).send('Books Added Successfully');
  res.end();
};

let addBook = async (req, res, next) => {
  await db.books.create(req.body);
  res.status(201).send('Book Added Successfully');
  res.end();
};

let updateBook = async (req, res, next) => {
  await db.books.update(req.body, {
    where: {
      id: req.body.id,
    },
  });
  res.status(202).send('Successfully Update Book');
  res.end();
};


let deleteBook = async (req, res, next) => {
    await db.books.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.status(300).send('Successfully Update Book');
  res.end();
};

module.exports = { getAllBooks, getBooksById, addBooks, addBook, updateBook, deleteBook  };

//     let id = req.params.id
//   await db.books.findByPkAndUpdate(id, req.body);
// let updateBookVal = async (req, res, next) => {
//   res.status(201).send('updated Successfully');
//   res.end();
// };