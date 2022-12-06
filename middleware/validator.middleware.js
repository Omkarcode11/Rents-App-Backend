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


let signupValidation = (req,res,next)=>{
  if(!req.body.name || !req.body.address || !req.body.password || !req.body.role){
    res.status(400).send("Enter Valid Text")
    return
  }
  next()
}

let validatorForBulkCreate = (req,res,next)=>{
  if(req.body=={}){
    res.status(400).send("Enter proper value")
    return
  }
  next()
}

let updateBookValidator = (req,res,next) =>{
  if(!req.body.name || !req.body.id){
    res.status(400).send("Enter proper value to update book")
    return
  }
  next()
}



module.exports = { nameValidator, idValidatorForBooks, onlyAdmin, updateBookValidator,signupValidation , validatorForBulkCreate };
